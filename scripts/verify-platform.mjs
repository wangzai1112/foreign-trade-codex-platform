#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { createServer } from "node:http";
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { extname, join, resolve, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = new Set(process.argv.slice(2));
const shouldRunHttp = args.has("--http");

const failures = [];
const notes = [];

function listFiles(dir, predicate) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listFiles(full, predicate));
    } else if (!predicate || predicate(full)) {
      out.push(full);
    }
  }
  return out.sort();
}

function rel(fullPath) {
  return fullPath.slice(root.length + 1);
}

function stripQueryAndHash(value) {
  return value.split("#")[0].split("?")[0];
}

function normalizeLocalPath(value) {
  return stripQueryAndHash(value).replace(/^\.\//, "");
}

function fail(message) {
  failures.push(message);
}

function checkJsSyntax() {
  const jsFiles = listFiles(root, (file) => extname(file) === ".js");
  for (const file of jsFiles) {
    const result = spawnSync("node", ["--check", file], { encoding: "utf8" });
    if (result.status !== 0) {
      fail(`JS syntax failed: ${rel(file)}\n${result.stderr || result.stdout}`);
    }
  }
  notes.push(`JS syntax: ${jsFiles.length} files checked`);
}

function collectHtmlIds(htmlFiles) {
  const idsByPage = new Map();
  const textByPage = new Map();
  for (const file of htmlFiles) {
    const page = basename(file);
    const text = readFileSync(file, "utf8");
    textByPage.set(page, text);
    idsByPage.set(page, new Set([...text.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])));
  }
  return { idsByPage, textByPage };
}

function checkLocalFileReference(source, value) {
  if (!value || value.startsWith("#")) return;
  if (/^(https?:|mailto:|tel:|data:)/.test(value)) return;
  const localPath = normalizeLocalPath(value);
  if (!localPath || !localPath.includes(".")) return;
  if (!existsSync(join(root, localPath))) {
    fail(`${source}: missing local file ${value}`);
  }
}

function checkAnchorReference(source, value, idsByPage, currentPage) {
  if (!value || /^(https?:|mailto:|tel:|data:)/.test(value)) return;
  const [pathPart, hash] = value.split("#");
  if (!hash) return;
  const page = pathPart ? basename(normalizeLocalPath(pathPart)) : currentPage;
  if (!idsByPage.has(page)) {
    fail(`${source}: missing page for anchor ${value}`);
    return;
  }
  if (!idsByPage.get(page).has(hash)) {
    fail(`${source}: missing anchor ${value}`);
  }
}

function checkHtmlAndDataReferences() {
  const htmlFiles = readdirSync(root)
    .filter((file) => file.endsWith(".html"))
    .map((file) => join(root, file))
    .sort();
  const dataFiles = listFiles(join(root, "data"), (file) => extname(file) === ".js");
  const { idsByPage, textByPage } = collectHtmlIds(htmlFiles);

  for (const [page, text] of textByPage.entries()) {
    for (const match of text.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      checkLocalFileReference(page, match[1]);
      checkAnchorReference(page, match[1], idsByPage, page);
    }
  }

  const dataReferencePattern =
    /(?:href|routePages|pageRoute|proofPages|screenRoute):\s*(\[[^\]]*\]|"[^"]+")/g;

  for (const file of dataFiles) {
    const source = rel(file);
    const text = readFileSync(file, "utf8");
    for (const match of text.matchAll(dataReferencePattern)) {
      const raw = match[1];
      const refs = raw.startsWith("[")
        ? [...raw.matchAll(/"([^"]+)"/g)].map((item) => item[1])
        : [raw.slice(1, -1)];

      for (const ref of refs) {
        checkLocalFileReference(source, ref);
        checkAnchorReference(source, ref, idsByPage, basename(file));
      }
    }
  }

  notes.push(`References: ${htmlFiles.length} pages and ${dataFiles.length} data files checked`);
}

function checkDownloadsInventory() {
  const downloadDir = join(root, "downloads");
  const downloads = listFiles(downloadDir, (file) => statSync(file).isFile());
  const emptyDownloads = downloads.filter((file) => statSync(file).size === 0);
  for (const file of emptyDownloads) {
    fail(`Empty download asset: ${rel(file)}`);
  }
  notes.push(`Downloads: ${downloads.length} files present`);
}

function contentTypeFor(pathname) {
  const ext = extname(pathname);
  if (ext === ".html") return "text/html;charset=utf-8";
  if (ext === ".css") return "text/css;charset=utf-8";
  if (ext === ".js") return "text/javascript;charset=utf-8";
  if (ext === ".csv") return "text/csv;charset=utf-8";
  if (ext === ".md") return "text/markdown;charset=utf-8";
  return "application/octet-stream";
}

function serveStatic(port) {
  const server = createServer((request, response) => {
    const url = new URL(request.url || "/", `http://127.0.0.1:${port}`);
    const pathname = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
    const localPath = resolve(join(root, pathname));
    if (!localPath.startsWith(root) || !existsSync(localPath) || statSync(localPath).isDirectory()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    response.writeHead(200, { "content-type": contentTypeFor(localPath) });
    if (request.method === "HEAD") {
      response.end();
    } else {
      response.end(readFileSync(localPath));
    }
  });
  return new Promise((resolveServer, rejectServer) => {
    server.on("error", rejectServer);
    server.listen(port, "127.0.0.1", () => resolveServer(server));
  });
}

async function head(url) {
  const response = await fetch(url, { method: "HEAD" });
  if (!response.ok) {
    fail(`HTTP ${response.status}: ${url}`);
  }
}

async function checkHttp() {
  const preferredPort = 4174;
  let port = preferredPort;
  let server;
  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      server = await serveStatic(port);
      break;
    } catch (error) {
      if (error.code !== "EADDRINUSE") throw error;
      port += 1;
    }
  }
  if (!server) {
    fail("HTTP check failed: no available local port");
    return;
  }

  const base = `http://127.0.0.1:${port}`;
  const targets = [
    "/index.html",
    "/tools.html",
    "/enrollment.html#enrollment-showcase-proof-router",
    "/enterprise.html#enterprise-learner-signal-intake",
    "/playbook.html#playbook-tool-sprint-command-center",
    "/downloads/enterprise-learner-signal-intake-router.csv",
    "/assets/app.js?v=20260607-enterprise-toolchain-signal1"
  ];

  try {
    await Promise.all(targets.map((target) => head(`${base}${target}`)));
    notes.push(`HTTP: ${targets.length} targets checked on ${base}`);
  } finally {
    await new Promise((resolveClose) => server.close(resolveClose));
  }
}

async function main() {
  checkJsSyntax();
  checkHtmlAndDataReferences();
  checkDownloadsInventory();
  if (shouldRunHttp) {
    await checkHttp();
  }

  if (failures.length) {
    console.error(`Platform verification failed (${failures.length})`);
    console.error(failures.join("\n\n"));
    process.exit(1);
  }

  console.log("Platform verification passed");
  for (const note of notes) {
    console.log(`- ${note}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
