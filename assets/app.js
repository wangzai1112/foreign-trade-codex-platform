(function () {
  const data = window.TrainingPlatformData;

  function byId(id) {
    return document.querySelector(`#${id}`);
  }

  function list(items) {
    return `<ul class="plain-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function tagRow(items) {
    return `<div class="tag-row">${items.map((item) => `<span class="tag">${item}</span>`).join("")}</div>`;
  }

  function downloadBlock(download) {
    if (!download) return "";
    return `
      <div class="download-block">
        <a class="button secondary" href="${download.href}" download>${download.label}</a>
        <span>${download.format}${download.note ? ` · ${download.note}` : ""}</span>
      </div>
    `;
  }

  function renderMiniTable(rows) {
    return `
      <div class="mini-table">
        ${rows
          .map(
            (row) => `
              <div>
                <span>${row[0]}</span>
                <strong>${row[1]}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderSiteNav() {
    const targets = document.querySelectorAll("[data-site-nav]");
    if (!targets.length || !data.site || !data.site.navigation) return;
    const currentPage = document.body.dataset.page || "";
    const links = data.site.navigation
      .map((item) => {
        const active = item.id === currentPage;
        return `<a href="${item.href}"${active ? ` class="active" aria-current="page"` : ""}>${item.label}</a>`;
      })
      .join("");

    targets.forEach((target) => {
      target.innerHTML = links;
    });
  }

  function alignHashTarget() {
    if (!window.location.hash || window.location.hash.length < 2) return;
    let id = "";
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch (error) {
      id = window.location.hash.slice(1);
    }
    const target = document.getElementById(id);
    if (!target) return;
    const align = () => {
      const header = document.querySelector(".site-header");
      const headerPosition = header ? window.getComputedStyle(header).position : "";
      const headerOffset = header && (headerPosition === "sticky" || headerPosition === "fixed")
        ? header.getBoundingClientRect().height
        : 0;
      const offset = headerOffset + 24;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    };
    window.requestAnimationFrame(() => window.requestAnimationFrame(align));
    [150, 500, 1000, 1800, 2600].forEach((delay) => window.setTimeout(align, delay));
  }

  function renderHomePain() {
    const target = byId("home-pain-points");
    if (!target || !data.home) return;
    target.innerHTML = data.home.painPoints
      .map(
        (item) => `
          <article class="info-card">
            <h3>${item.title}</h3>
            <p>${item.problem}</p>
            <div class="detail-block">
              <strong>Codex 工作流</strong>
              <p>${item.codexFix}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderHomeWorkflow() {
    const target = byId("home-workflow");
    if (!target || !data.home) return;
    target.innerHTML = data.home.workflow
      .map(
        (step, index) => `
          <article class="workflow-card">
            <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
            <h3>${step.title}</h3>
            <div class="compare-row">
              <strong>传统做法</strong>
              <p>${step.before}</p>
            </div>
            <div class="compare-row after">
              <strong>Codex 工作流</strong>
              <p>${step.after}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderHomeToolPreviews() {
    const target = byId("home-tool-previews");
    if (!target || !data.home) return;
    target.innerHTML = data.home.toolPreviews
      .map(
        (tool) => `
          <article class="tool-preview-card">
            <p class="eyebrow">${tool.subtitle}</p>
            <h3>${tool.title}</h3>
            ${renderMiniTable(tool.rows)}
          </article>
        `
      )
      .join("");
  }

  function renderHomeRiskBoundaries() {
    const target = byId("home-risk-boundaries");
    if (!target || !data.home) return;
    target.innerHTML = data.home.riskColumns
      .map(
        (column) => `
          <article class="info-card risk-card">
            <h3>${column.title}</h3>
            ${list(column.items)}
          </article>
        `
      )
      .join("");
  }

  function renderHomeStandards() {
    const target = byId("home-standards");
    if (!target || !data.home) return;
    target.innerHTML = `
      <div class="standard-layout">
        <div>
          <p class="eyebrow">Operating Rules</p>
          <h3>以后每门课都按这个标准建设</h3>
          <p>这不是单个外贸课程的页面，而是培训公司后续课程、案例、工具和企业服务的统一建设规范。</p>
        </div>
        ${list(data.home.standards)}
      </div>
    `;
  }

  function renderHomeEntryRouter() {
    const target = byId("home-entry-router");
    if (!target || !data.home || !data.home.entryRouter) return;
    const router = data.home.entryRouter;
    const defaults = router.defaults || {};
    target.innerHTML = `
      <div class="home-entry-downloads">
        ${(router.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card home-entry-router-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Route Builder</p>
          <h3>${router.title}</h3>
          <p>${router.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="home-entry-role">
              <span>访客身份</span>
              <select id="home-entry-role" data-home-entry-field="role">
                ${router.roles
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.role === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="home-entry-painArea">
              <span>当前痛点</span>
              <select id="home-entry-painArea" data-home-entry-field="painArea">
                ${router.painAreas
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.painArea === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="home-entry-goal">
              <span>进入目标</span>
              <select id="home-entry-goal" data-home-entry-field="goal">
                ${router.goals
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.goal === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="home-entry-evidenceLevel">
              <span>资料状态</span>
              <select id="home-entry-evidenceLevel" data-home-entry-field="evidenceLevel">
                ${router.evidenceLevels
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.evidenceLevel === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="home-entry-urgency">
              <span>时间节奏</span>
              <select id="home-entry-urgency" data-home-entry-field="urgency">
                ${router.urgencies
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.urgency === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel home-entry-result" aria-live="polite">
          <div id="home-entry-result"></div>
          <div class="hero-actions compact-actions home-entry-actions">
            <button class="button secondary" type="button" id="home-entry-copy">复制路径</button>
            <button class="button secondary" type="button" id="home-entry-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="home-entry-status"></span>
        </div>
      </article>
    `;
    setupHomeEntryRouter(router);
  }

  function setupHomeEntryRouter(router) {
    const fields = [...document.querySelectorAll("[data-home-entry-field]")];
    const result = byId("home-entry-result");
    const copy = byId("home-entry-copy");
    const download = byId("home-entry-download");
    const status = byId("home-entry-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.homeEntryField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function buildBrief(values) {
      const role = pick(router.roles, values.role);
      const painArea = pick(router.painAreas, values.painArea);
      const goal = pick(router.goals, values.goal);
      const evidenceLevel = pick(router.evidenceLevels, values.evidenceLevel);
      const urgency = pick(router.urgencies, values.urgency);
      const routePages = [
        ...new Set([
          ...role.routePages,
          ...painArea.pageRoutes,
          ...goal.routePages,
          ...evidenceLevel.pageRoutes,
          "playbook.html"
        ])
      ];
      const primaryPages = routePages.slice(0, 4);
      const runbook = [
        { stage: "01", title: "确认身份和目标", detail: `${role.label}：${role.summary}` },
        { stage: "02", title: "定位业务痛点", detail: `${painArea.label}：${painArea.diagnosis}` },
        { stage: "03", title: "检查资料状态", detail: `${evidenceLevel.readiness} ${evidenceLevel.requirement}` },
        { stage: "04", title: "进入页面路线", detail: primaryPages.join(" / ") },
        { stage: "05", title: "执行下一步", detail: `${goal.cta} ${urgency.nextStep}` },
        { stage: "06", title: "保留人工边界", detail: `${evidenceLevel.boundary} ${role.manualConfirm.join("；")}` }
      ];
      const codexPrompt = `请基于以下首页入口路径 brief 生成咨询或引导话术：访客身份为${role.label}，当前痛点为${painArea.label}，进入目标为${goal.label}，资料状态为${evidenceLevel.label}，时间节奏为${urgency.label}。输出必须包含推荐页面路线、需要准备的资料、Codex 可做事项、人工确认事项、下一步 CTA 和禁止承诺边界。`;
      return { role, painArea, goal, evidenceLevel, urgency, routePages, primaryPages, runbook, codexPrompt };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { role, painArea, goal, evidenceLevel, urgency, routePages, primaryPages, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${goal.label} · ${urgency.label}</p>
        <h3>${role.label}入口路径</h3>
        <p>${role.summary}</p>
        <div class="home-entry-meta">
          <div>
            <strong>${painArea.label}</strong>
            <span>当前痛点</span>
          </div>
          <div>
            <strong>${evidenceLevel.label}</strong>
            <span>资料状态</span>
          </div>
          <div>
            <strong>${role.owner}</strong>
            <span>承接负责人</span>
          </div>
        </div>
        <div class="home-entry-grid">
          <div>
            <strong>推荐页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>优先进入</strong>
            <div class="home-entry-link-list">
              ${primaryPages.map((page) => `<a href="./${page}">${page}</a>`).join("")}
            </div>
          </div>
          <div>
            <strong>业务判断</strong>
            <p>${painArea.diagnosis}</p>
          </div>
          <div>
            <strong>需要交付</strong>
            <p>${painArea.deliverable}</p>
          </div>
          <div>
            <strong>Codex 可做事项</strong>
            ${list(role.codexUse)}
          </div>
          <div>
            <strong>人工确认事项</strong>
            ${list(role.manualConfirm)}
          </div>
          <div>
            <strong>资料要求</strong>
            <p>${evidenceLevel.requirement}</p>
          </div>
          <div>
            <strong>下一步动作</strong>
            <p>${goal.cta} ${urgency.nextStep}</p>
          </div>
        </div>
        <div class="home-entry-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>入口承诺边界</strong>
          <p>${evidenceLevel.boundary} ${role.manualConfirm.join("、")}必须人工确认，不能承诺自动成交、自动报价或替代专业审批。</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildHomeEntryRouteMarkdown(currentBrief));
        setStatus("入口路径已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(router.exportFilename || "homepage-entry-route-brief-output.md", buildHomeEntryRouteMarkdown(currentBrief), "text/markdown;charset=utf-8");
      setStatus("Markdown 入口路径已生成下载。");
    });
    renderResult();
  }

  function buildHomeEntryRouteMarkdown(brief) {
    const { role, painArea, goal, evidenceLevel, urgency, routePages, primaryPages, runbook, codexPrompt } = brief;
    return `# 首页入口路径 Brief

- 访客身份：${role.label}
- 当前痛点：${painArea.label}
- 进入目标：${goal.label}
- 资料状态：${evidenceLevel.label}
- 时间节奏：${urgency.label}
- 承接负责人：${role.owner}

## 推荐页面路线
${routePages.map((page) => `- ${page}`).join("\n")}

## 优先进入
${primaryPages.map((page) => `- ${page}`).join("\n")}

## 业务判断
${painArea.diagnosis}

## 需要交付
${painArea.deliverable}

## 资料要求
${evidenceLevel.requirement}

## Codex 可做事项
${role.codexUse.map((item) => `- ${item}`).join("\n")}

## 人工确认事项
${role.manualConfirm.map((item) => `- ${item}`).join("\n")}

## 下一步动作
${goal.cta}
${urgency.nextStep}
${role.nextAction}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${evidenceLevel.boundary}
${role.manualConfirm.join("、")}必须人工确认，不能承诺自动成交、自动报价或替代专业审批。
`;
  }

  function renderHomeTrialBridge() {
    const target = byId("home-trial-bridge");
    if (!target || !data.home || !data.home.trialBridge) return;
    const bridge = data.home.trialBridge;
    const defaults = bridge.defaults || {};
    target.innerHTML = `
      <div class="home-trial-downloads">
        ${(bridge.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card home-trial-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Trial Route Builder</p>
          <h3>${bridge.title}</h3>
          <p>${bridge.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="home-trial-learnerSegment">
              <span>试听对象</span>
              <select id="home-trial-learnerSegment" data-home-trial-field="learnerSegment">
                ${bridge.learnerSegments
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.learnerSegment === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="home-trial-demoFocus">
              <span>演示重点</span>
              <select id="home-trial-demoFocus" data-home-trial-field="demoFocus">
                ${bridge.demoFocuses
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.demoFocus === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="home-trial-proofNeed">
              <span>证据需求</span>
              <select id="home-trial-proofNeed" data-home-trial-field="proofNeed">
                ${bridge.proofNeeds
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.proofNeed === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="home-trial-concern">
              <span>主要顾虑</span>
              <select id="home-trial-concern" data-home-trial-field="concern">
                ${bridge.concerns
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.concern === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="home-trial-followupRoute">
              <span>课后分流</span>
              <select id="home-trial-followupRoute" data-home-trial-field="followupRoute">
                ${bridge.followupRoutes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.followupRoute === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel home-trial-result" aria-live="polite">
          <div id="home-trial-result"></div>
          <div class="hero-actions compact-actions home-trial-actions">
            <button class="button secondary" type="button" id="home-trial-copy">复制试听 Brief</button>
            <button class="button secondary" type="button" id="home-trial-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="home-trial-status"></span>
        </div>
      </article>
    `;
    setupHomeTrialBridge(bridge);
  }

  function setupHomeTrialBridge(bridge) {
    const fields = [...document.querySelectorAll("[data-home-trial-field]")];
    const result = byId("home-trial-result");
    const copy = byId("home-trial-copy");
    const download = byId("home-trial-download");
    const status = byId("home-trial-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.homeTrialField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function getTone(route) {
      if (route.id === "system-course") return "ready";
      if (route.id === "enterprise-diagnosis") return "enterprise";
      if (route.id === "boundary-education") return "repair";
      return "review";
    }

    function buildBrief(values) {
      const learnerSegment = pick(bridge.learnerSegments, values.learnerSegment);
      const demoFocus = pick(bridge.demoFocuses, values.demoFocus);
      const proofNeed = pick(bridge.proofNeeds, values.proofNeed);
      const concern = pick(bridge.concerns, values.concern);
      const followupRoute = pick(bridge.followupRoutes, values.followupRoute);
      const routePages = [
        ...new Set([
          ...learnerSegment.routePages,
          demoFocus.demoPage,
          demoFocus.toolPage,
          ...proofNeed.proofPages,
          followupRoute.targetPage,
          "enrollment.html",
          "playbook.html"
        ])
      ];
      const primaryPages = routePages.slice(0, 5);
      const runbook = [
        { stage: "01", title: "确认试听对象", detail: `${learnerSegment.label}：${learnerSegment.profile}` },
        { stage: "02", title: "锁定演示场景", detail: `${demoFocus.label}：${demoFocus.scene}` },
        { stage: "03", title: "展示业务输出", detail: demoFocus.deliverable },
        { stage: "04", title: "回应证据需求", detail: `${proofNeed.label}：${proofNeed.response}` },
        { stage: "05", title: "处理主要顾虑", detail: `${concern.label}：${concern.answer}` },
        { stage: "06", title: "课后分流", detail: `${followupRoute.label}：${followupRoute.nextAction}` }
      ];
      const codexPrompt = `请基于以下试听课 brief 生成公开课或私域试听课跟进话术：试听对象为${learnerSegment.label}，演示重点为${demoFocus.label}，证据需求为${proofNeed.label}，主要顾虑为${concern.label}，课后分流为${followupRoute.label}。必须包含课前准备、课中演示顺序、页面证据、课后 CTA、Codex 可做事项、人工确认事项和禁止承诺边界。`;
      return { learnerSegment, demoFocus, proofNeed, concern, followupRoute, routePages, primaryPages, runbook, codexPrompt, tone: getTone(followupRoute) };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { learnerSegment, demoFocus, proofNeed, concern, followupRoute, routePages, primaryPages, runbook, codexPrompt, tone } = currentBrief;
      result.innerHTML = `
        <div class="case-card-head">
          <div>
            <p class="eyebrow">${followupRoute.status} · ${followupRoute.owner}</p>
            <h3>${demoFocus.label}试听路径</h3>
          </div>
          <span class="tag home-trial-decision ${tone}">${followupRoute.label}</span>
        </div>
        <p>${learnerSegment.profile}</p>
        <div class="home-trial-meta">
          <div>
            <strong>${learnerSegment.label}</strong>
            <span>试听对象</span>
          </div>
          <div>
            <strong>${proofNeed.label}</strong>
            <span>证据需求</span>
          </div>
          <div>
            <strong>${concern.label}</strong>
            <span>主要顾虑</span>
          </div>
        </div>
        <div class="home-trial-grid">
          <div>
            <strong>页面证据路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>优先打开</strong>
            <div class="home-entry-link-list">
              ${primaryPages.map((page) => `<a href="./${page}">${page}</a>`).join("")}
            </div>
          </div>
          <div>
            <strong>试听场景</strong>
            <p>${demoFocus.scene}</p>
          </div>
          <div>
            <strong>试听输出</strong>
            <p>${demoFocus.deliverable}</p>
          </div>
          <div>
            <strong>证据回应</strong>
            <p>${proofNeed.response}</p>
          </div>
          <div>
            <strong>顾虑回应</strong>
            <p>${concern.answer}</p>
          </div>
          <div>
            <strong>Codex 可做事项</strong>
            ${list(learnerSegment.codexUse)}
          </div>
          <div>
            <strong>人工确认事项</strong>
            ${list(learnerSegment.manualConfirm)}
          </div>
        </div>
        <div class="home-trial-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>课后 CTA</strong>
          <p>${followupRoute.nextAction}</p>
          <a class="button secondary" href="./${followupRoute.targetPage}">进入${followupRoute.label}</a>
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>试听承诺边界</strong>
          <p>${concern.noGo} ${learnerSegment.manualConfirm.join("、")}必须人工确认，不能承诺自动成交、自动报价或替代专业审批。</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildHomeTrialBridgeMarkdown(currentBrief));
        setStatus("试听课 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(bridge.exportFilename || "trial-class-conversion-brief-output.md", buildHomeTrialBridgeMarkdown(currentBrief), "text/markdown;charset=utf-8");
      setStatus("Markdown 试听课 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildHomeTrialBridgeMarkdown(brief) {
    const { learnerSegment, demoFocus, proofNeed, concern, followupRoute, routePages, primaryPages, runbook, codexPrompt } = brief;
    return `# 试听课转化 Brief

- 试听对象：${learnerSegment.label}
- 演示重点：${demoFocus.label}
- 证据需求：${proofNeed.label}
- 主要顾虑：${concern.label}
- 课后分流：${followupRoute.label}
- 承接负责人：${followupRoute.owner}

## 页面证据路线
${routePages.map((page) => `- ${page}`).join("\n")}

## 优先打开
${primaryPages.map((page) => `- ${page}`).join("\n")}

## 试听场景
${demoFocus.scene}

## 试听输出
${demoFocus.deliverable}

## 证据回应
${proofNeed.response}
成功信号：${proofNeed.successSignal}

## 顾虑回应
${concern.answer}

## Codex 可做事项
${learnerSegment.codexUse.map((item) => `- ${item}`).join("\n")}

## 人工确认事项
${learnerSegment.manualConfirm.map((item) => `- ${item}`).join("\n")}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 课后 CTA
${followupRoute.nextAction}
目标页面：${followupRoute.targetPage}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${concern.noGo}
${learnerSegment.manualConfirm.join("、")}必须人工确认，不能承诺自动成交、自动报价或替代专业审批。
`;
  }

  function renderHomePublicLessonRoute() {
    const target = byId("home-public-lesson-route");
    if (!target || !data.home || !data.home.publicLessonRoute) return;
    const route = data.home.publicLessonRoute;
    const toHref = (page) => (page.startsWith("#") ? page : `./${page}`);
    target.innerHTML = `
      <div class="home-public-route-downloads">
        ${(route.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="home-public-route-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Public Lesson Route</p>
            <h3>${route.title}</h3>
            <p>${route.summary}</p>
          </div>
          ${tagRow(["入口", "案例", "工具", "承接", "回写"])}
        </div>
        <div class="home-public-route-meta">
          ${(route.routeMeta || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="home-public-route-steps">
          ${(route.steps || [])
            .map(
              (step) => `
                <article>
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">Step ${step.stage}</p>
                      <h4>${step.title}</h4>
                    </div>
                  </div>
                  <div class="home-entry-link-list">
                    ${step.pageRoute
                      .map((page) => `<a href="${toHref(page)}">${page}</a>`)
                      .join("")}
                  </div>
                  <div class="home-public-route-grid">
                    <div>
                      <strong>讲师动作</strong>
                      <p>${step.teacherMove}</p>
                    </div>
                    <div>
                      <strong>Codex 辅助</strong>
                      <p>${step.codexAssist}</p>
                    </div>
                    <div>
                      <strong>人工确认</strong>
                      <p>${step.humanCheck}</p>
                    </div>
                    <div>
                      <strong>可见证据</strong>
                      <p>${step.visibleProof}</p>
                    </div>
                  </div>
                  <div class="home-public-route-handoff">
                    <strong>下一步</strong>
                    <p>${step.handoff}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="home-public-route-bottom">
          <div>
            <strong>禁止上线规则</strong>
            ${list(route.noGoRules || [])}
          </div>
          <div>
            <strong>角色下一步</strong>
            ${(route.nextActions || [])
              .map(
                (item) => `
                  <p><span>${item.label}</span>${item.action}</p>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderHomeCommercialProofNavigator() {
    const target = byId("home-commercial-proof");
    if (!target || !data.home || !data.home.commercialProofNavigator) return;
    const proof = data.home.commercialProofNavigator;
    const defaults = proof.defaults || {};
    target.innerHTML = `
      <div class="home-commercial-downloads">
        ${(proof.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card home-commercial-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Proof Navigator</p>
          <h3>${proof.title}</h3>
          <p>${proof.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="commercial-proof-visitor">
              <span>访客身份</span>
              <select id="commercial-proof-visitor" data-commercial-proof-field="visitor">
                ${proof.visitors
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.visitor === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="commercial-proof-concern">
              <span>主要顾虑</span>
              <select id="commercial-proof-concern" data-commercial-proof-field="concern">
                ${proof.concerns
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.concern === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="commercial-proof-stage">
              <span>决策阶段</span>
              <select id="commercial-proof-stage" data-commercial-proof-field="decisionStage">
                ${proof.decisionStages
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.decisionStage === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel home-commercial-result" aria-live="polite">
          <div id="home-commercial-proof-result"></div>
          <div class="hero-actions compact-actions home-commercial-actions">
            <button class="button secondary" type="button" id="home-commercial-proof-copy">复制证据 Brief</button>
            <button class="button secondary" type="button" id="home-commercial-proof-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="home-commercial-proof-status"></span>
        </div>
      </article>
    `;
    setupHomeCommercialProofNavigator(proof);
  }

  function setupHomeCommercialProofNavigator(proof) {
    const fields = [...document.querySelectorAll("[data-commercial-proof-field]")];
    const result = byId("home-commercial-proof-result");
    const copy = byId("home-commercial-proof-copy");
    const download = byId("home-commercial-proof-download");
    const status = byId("home-commercial-proof-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.commercialProofField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function getTone(stage) {
      if (stage.id === "enterprise-precheck") return "enterprise";
      if (stage.id === "internal-sales-review") return "review";
      if (stage.id === "homepage-review") return "calm";
      return "ready";
    }

    function buildBrief(values) {
      const visitor = pick(proof.visitors, values.visitor);
      const concern = pick(proof.concerns, values.concern);
      const decisionStage = pick(proof.decisionStages, values.decisionStage);
      const routePages = [
        ...new Set([
          ...visitor.routePages,
          ...concern.proofPages,
          ...decisionStage.routePages,
          "playbook.html"
        ])
      ];
      const downloads = [...new Set(concern.downloads || [])];
      const primaryPages = routePages.slice(0, 5);
      const runbook = [
        { stage: "01", title: "确认访客问题", detail: `${visitor.label}：${visitor.question}` },
        { stage: "02", title: "选择证据角度", detail: visitor.proofAngle },
        { stage: "03", title: "回应核心顾虑", detail: `${concern.label}：${concern.proofStatement}` },
        { stage: "04", title: "展示可见输出", detail: concern.visibleOutput },
        { stage: "05", title: "锁定决策阶段", detail: `${decisionStage.label}：${decisionStage.evidenceDepth}` },
        { stage: "06", title: "执行下一步", detail: decisionStage.nextAction }
      ];
      const codexPrompt = `请基于以下商业证据 brief 生成课程顾问或公开课后的回应话术：访客身份为${visitor.label}，主要顾虑为${concern.label}，决策阶段为${decisionStage.label}。必须包含用户问题、页面证据路径、下载资产、可展示输出、下一步 CTA、Codex 可辅助事项、人工确认事项和禁止承诺边界。`;
      return { visitor, concern, decisionStage, routePages, downloads, primaryPages, runbook, codexPrompt, tone: getTone(decisionStage) };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { visitor, concern, decisionStage, routePages, downloads, primaryPages, runbook, codexPrompt, tone } = currentBrief;
      result.innerHTML = `
        <div class="case-card-head">
          <div>
            <p class="eyebrow">${decisionStage.label} · ${visitor.owner}</p>
            <h3>${visitor.label}证据路径</h3>
          </div>
          <span class="tag home-commercial-decision ${tone}">${concern.label}</span>
        </div>
        <p>${visitor.question}</p>
        <div class="home-commercial-meta">
          <div>
            <strong>${visitor.label}</strong>
            <span>访客身份</span>
          </div>
          <div>
            <strong>${concern.label}</strong>
            <span>主要顾虑</span>
          </div>
          <div>
            <strong>${decisionStage.label}</strong>
            <span>决策阶段</span>
          </div>
        </div>
        <div class="home-commercial-grid">
          <div>
            <strong>页面证据路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>优先打开</strong>
            <div class="home-entry-link-list">
              ${primaryPages.map((page) => `<a href="./${page}">${page}</a>`).join("")}
            </div>
          </div>
          <div>
            <strong>下载资产</strong>
            ${tagRow(downloads)}
          </div>
          <div>
            <strong>证据讲法</strong>
            <p>${concern.proofStatement}</p>
          </div>
          <div>
            <strong>可见输出</strong>
            <p>${concern.visibleOutput}</p>
          </div>
          <div>
            <strong>决策动作</strong>
            <p>${decisionStage.cta} ${decisionStage.nextAction}</p>
          </div>
          <div>
            <strong>Codex 可辅助</strong>
            ${list(visitor.codexUse)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(visitor.manualCheck)}
          </div>
        </div>
        <div class="home-commercial-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>商业证据边界</strong>
          <p>${concern.boundary} ${visitor.manualCheck.join("、")}必须人工确认，不能承诺自动成交、自动报价或替代专业审批。</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildHomeCommercialProofMarkdown(currentBrief));
        setStatus("商业证据 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(proof.exportFilename || "commercial-proof-brief-output.md", buildHomeCommercialProofMarkdown(currentBrief), "text/markdown;charset=utf-8");
      setStatus("Markdown 商业证据 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildHomeCommercialProofMarkdown(brief) {
    const { visitor, concern, decisionStage, routePages, downloads, primaryPages, runbook, codexPrompt } = brief;
    return `# 商业证据路径 Brief

- 访客身份：${visitor.label}
- 用户问题：${visitor.question}
- 主要顾虑：${concern.label}
- 决策阶段：${decisionStage.label}
- 承接负责人：${visitor.owner}

## 页面证据路线
${routePages.map((page) => `- ${page}`).join("\n")}

## 优先打开
${primaryPages.map((page) => `- ${page}`).join("\n")}

## 下载资产
${downloads.map((item) => `- ${item}`).join("\n")}

## 证据角度
${visitor.proofAngle}
${concern.proofStatement}

## 可见输出
${concern.visibleOutput}

## 决策动作
${decisionStage.cta}
${decisionStage.nextAction}

## Codex 可辅助事项
${visitor.codexUse.map((item) => `- ${item}`).join("\n")}

## 人工确认事项
${visitor.manualCheck.map((item) => `- ${item}`).join("\n")}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${concern.boundary}
${visitor.manualCheck.join("、")}必须人工确认，不能承诺自动成交、自动报价或替代专业审批。
`;
  }

  function renderHomeFirstDraftGuide() {
    const target = byId("home-first-draft-guide");
    if (!target || !data.home || !data.home.firstDraftGuide) return;
    const guide = data.home.firstDraftGuide;
    target.innerHTML = `
      <div class="home-first-draft-downloads">
        ${(guide.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="home-first-draft-card">
        <div class="case-card-head">
          <div>
            <p class="eyebrow">First Draft Operating Route</p>
            <h3>${guide.title}</h3>
          </div>
          ${tagRow(["验收", "试讲", "招生", "企业", "维护"])}
        </div>
        <p class="home-first-draft-summary">${guide.summary}</p>
        <div class="home-first-draft-meta">
          ${(guide.metrics || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="home-first-draft-routes">
          ${(guide.routes || [])
            .map(
              (route) => `
                <article class="home-first-draft-route">
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">${route.stage} · ${route.owner}</p>
                      <h3>${route.title}</h3>
                    </div>
                    <span class="tag">可执行</span>
                  </div>
                  <div class="home-first-draft-links">
                    ${(route.pageRoute || [])
                      .map((page) => `<a href="./${page}">${page}</a>`)
                      .join("")}
                  </div>
                  <div class="home-first-draft-detail-grid">
                    <div>
                      <strong>路线目标</strong>
                      <p>${route.goal}</p>
                    </div>
                    <div>
                      <strong>Codex 辅助</strong>
                      <p>${route.codexAssist}</p>
                    </div>
                    <div>
                      <strong>人工验收</strong>
                      <p>${route.humanGate}</p>
                    </div>
                    <div>
                      <strong>交付输出</strong>
                      <p>${route.output}</p>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="home-first-draft-bottom">
          <div>
            <strong>初稿验收门槛</strong>
            ${list(guide.gates || [])}
          </div>
          <div>
            <strong>团队交接方式</strong>
            ${(guide.handoff || [])
              .map(
                (item) => `
                  <p><span>${item.role}</span>${item.action}</p>
                `
              )
              .join("")}
          </div>
        </div>
      </article>
    `;
  }

  function renderSiteMap() {
    const target = byId("site-map");
    if (!target) return;
    target.innerHTML = data.site.sections
      .map(
        (section) => `
          <article class="info-card">
            <h3>${section.title}</h3>
            <p>${section.purpose}</p>
            ${tagRow(section.routes)}
          </article>
        `
      )
      .join("");
  }

  function renderCourse() {
    const tracks = byId("course-tracks");
    if (tracks) {
      tracks.innerHTML = data.course.tracks
        .map(
          (track) => `
            <article class="track-card">
              <h3>${track.title}</h3>
              <p>${track.description}</p>
              ${tagRow(track.modules)}
            </article>
          `
        )
        .join("");
    }

    const modules = byId("course-modules");
    if (modules) {
      modules.innerHTML = data.course.modules.map(renderModuleCard).join("");
    }
  }

  function renderCourseDeliveryMetrics() {
    const target = byId("course-delivery-metrics");
    if (!target || !data.course) return;
    target.innerHTML = data.course.deliveryMetrics
      .map(
        (metric) => `
          <article class="metric playbook-metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderCourseLearningPath() {
    const target = byId("course-learning-path");
    if (!target || !data.course) return;
    target.innerHTML = data.course.learningPath
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid two-column">
              <div>
                <strong>学习重点</strong>
                <p>${step.focus}</p>
              </div>
              <div>
                <strong>阶段输出</strong>
                <p>${step.output}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderCourseClassroomPlan() {
    const target = byId("course-classroom-plan");
    if (!target || !data.course) return;
    target.innerHTML = data.course.classroomPlan
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid three-column">
              <div>
                <strong>老师动作</strong>
                <p>${step.teacherAction}</p>
              </div>
              <div>
                <strong>学员动作</strong>
                <p>${step.studentAction}</p>
              </div>
              <div>
                <strong>输出</strong>
                <p>${step.output}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderCourseCohortPlanner() {
    const target = byId("course-cohort-planner");
    if (!target || !data.course || !data.course.cohortPlanner) return;
    const planner = data.course.cohortPlanner;
    const defaults = planner.defaults || {};
    const downloads = data.course.cohortPlannerDownloads || [];
    target.innerHTML = `
      <div class="course-cohort-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card course-cohort-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Cohort Operations Desk</p>
          <h3>${planner.title}</h3>
          <p>${planner.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="course-cohort-offer">
              <span>课程产品</span>
              <select id="course-cohort-offer" data-course-cohort-field="offerTrack">
                ${planner.offerTracks
                  .map((item) => `<option value="${item.id}"${defaults.offerTrack === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="course-cohort-cadence">
              <span>班型节奏</span>
              <select id="course-cohort-cadence" data-course-cohort-field="cadence">
                ${planner.cadences
                  .map((item) => `<option value="${item.id}"${defaults.cadence === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="course-cohort-readiness">
              <span>资料状态</span>
              <select id="course-cohort-readiness" data-course-cohort-field="learnerReadiness">
                ${planner.learnerReadiness
                  .map((item) => `<option value="${item.id}"${defaults.learnerReadiness === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="course-cohort-risk">
              <span>交付风险</span>
              <select id="course-cohort-risk" data-course-cohort-field="deliveryRisk">
                ${planner.deliveryRisks
                  .map((item) => `<option value="${item.id}"${defaults.deliveryRisk === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="course-cohort-action">
              <span>下一动作</span>
              <select id="course-cohort-action" data-course-cohort-field="nextAction">
                ${planner.nextActions
                  .map((item) => `<option value="${item.id}"${defaults.nextAction === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel course-cohort-result" aria-live="polite">
          <div id="course-cohort-result"></div>
          <div class="hero-actions compact-actions course-cohort-actions">
            <button class="button secondary" type="button" id="course-cohort-copy">复制开班 Brief</button>
            <button class="button secondary" type="button" id="course-cohort-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="course-cohort-status"></span>
        </div>
      </article>
    `;
    setupCourseCohortPlanner(planner);
  }

  function setupCourseCohortPlanner(planner) {
    const fields = [...document.querySelectorAll("[data-course-cohort-field]")];
    const result = byId("course-cohort-result");
    const copy = byId("course-cohort-copy");
    const download = byId("course-cohort-download");
    const status = byId("course-cohort-status");
    if (!fields.length || !result) return;
    let currentPlan = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.courseCohortField] = field.value;
        return values;
      }, {});
    }

    function pick(items, id) {
      return items.find((item) => item.id === id) || items[0];
    }

    function getCohortDecision({ offerTrack, cadence, learnerReadiness, deliveryRisk, nextAction, score }) {
      const publicRoute = offerTrack.id === "free-preview" || nextAction.id === "open-class";
      const enterpriseRoute = offerTrack.id === "enterprise-training" || cadence.id === "enterprise-workshop" || nextAction.id === "enterprise-diagnosis";
      if (deliveryRisk.id === "public-proof-risk" || (deliveryRisk.id === "enterprise-private" && publicRoute)) {
        return {
          label: "先脱敏授权再展示",
          tone: "repair",
          detail: "当前资料不适合进入公开课、招生页或资源承接，先确认脱敏、授权范围、展示版本和撤回机制。"
        };
      }
      if (learnerReadiness.id === "sample-only" && ["system-course", "coaching-pack"].includes(offerTrack.id)) {
        return {
          label: "先补课前资料",
          tone: "review",
          detail: "可以开班，但付款前要讲清先用集成房屋样例练习，个人业务版本需要课后补资料和助教返修。"
        };
      }
      if (enterpriseRoute || deliveryRisk.id === "enterprise-private") {
        return {
          label: "企业诊断后排期",
          tone: "enterprise",
          detail: "适合进入企业内训或诊断链路，必须先确认资料权限、岗位责任、交付范围和验收标准。"
        };
      }
      if (score >= 31) {
        return {
          label: "可开班交付",
          tone: "ready",
          detail: "资料状态、课程产品和班型节奏匹配，可进入开班准备、课前资料收取和老师备课。"
        };
      }
      return {
        label: "缩小承诺再开班",
        tone: "review",
        detail: "需要降低交付承诺，先明确能交付的样例、作业、模板和人工边界，再安排正式课程。"
      };
    }

    function buildPlan(values) {
      const offerTrack = pick(planner.offerTracks, values.offerTrack);
      const cadence = pick(planner.cadences, values.cadence);
      const learnerReadiness = pick(planner.learnerReadiness, values.learnerReadiness);
      const deliveryRisk = pick(planner.deliveryRisks, values.deliveryRisk);
      const nextAction = pick(planner.nextActions, values.nextAction);
      const score = offerTrack.score + cadence.score + learnerReadiness.score + deliveryRisk.score + nextAction.score;
      const decision = getCohortDecision({ offerTrack, cadence, learnerReadiness, deliveryRisk, nextAction, score });
      const pageRoute = [...new Set([...offerTrack.pageRoute, ...nextAction.route, ...cadence.schedule.flatMap((item) => item.route)])];
      const roles = [...new Set([...cadence.requiredRoles, offerTrack.owner, nextAction.owner])];
      const deliverables = [...new Set([...offerTrack.deliverables, ...cadence.schedule.map((item) => item.evidence)])];
      const manualChecks = [
        offerTrack.boundary,
        learnerReadiness.risk,
        deliveryRisk.warning,
        deliveryRisk.check
      ];
      const codexTasks = [
        "根据班型生成开班资料清单和学员提醒",
        "把每周模块拆成老师讲法、学员作业和助教验收点",
        "把高频返修、优秀作业和工具需求回写到平台",
        "生成招生付款前确认话术和不承诺事项"
      ];
      const codexPrompt = [
        `你是外贸 AI/Codex 培训公司的课程交付负责人。请基于“${offerTrack.label}”和“${cadence.label}”生成开班交付方案。`,
        "",
        "【学员资料状态】",
        `${learnerReadiness.label}：${learnerReadiness.status}`,
        "",
        "【交付风险】",
        `${deliveryRisk.label}：${deliveryRisk.warning}`,
        "",
        "【课程产品承诺】",
        offerTrack.promise,
        "",
        "【交付节奏】",
        `${cadence.duration}；${cadence.rhythm}`,
        "",
        "【周排期】",
        cadence.schedule.map((item) => `- ${item.week} ${item.focus}：${item.modules}；课堂：${item.classroom}；作业：${item.homework}；证据：${item.evidence}`).join("\n"),
        "",
        "【必须人工确认】",
        manualChecks.map((item) => `- ${item}`).join("\n"),
        "",
        "请输出：1）付款前承诺口径；2）开班资料清单；3）每周课堂安排；4）作业验收标准；5）人工确认边界；6）下一步运营回写。"
      ].join("\n");

      return {
        offerTrack,
        cadence,
        learnerReadiness,
        deliveryRisk,
        nextAction,
        score,
        decision,
        pageRoute,
        roles,
        deliverables,
        manualChecks,
        codexTasks,
        codexPrompt
      };
    }

    function renderResult() {
      currentPlan = buildPlan(readValues());
      const { offerTrack, cadence, learnerReadiness, deliveryRisk, nextAction, score, decision, pageRoute, roles, deliverables, manualChecks, codexTasks, codexPrompt } = currentPlan;
      result.innerHTML = `
        <div class="case-card-head">
          <div>
            <p class="eyebrow">${cadence.duration} · ${offerTrack.owner}</p>
            <h3>${offerTrack.label}</h3>
          </div>
          <span class="tag course-cohort-decision ${decision.tone}">${decision.label}</span>
        </div>
        <p>${offerTrack.fit}</p>
        <div class="course-cohort-meta">
          <div>
            <strong>${score}</strong>
            <span>开班匹配分</span>
          </div>
          <div>
            <strong>${cadence.label}</strong>
            <span>${cadence.rhythm}</span>
          </div>
          <div>
            <strong>${learnerReadiness.label}</strong>
            <span>${learnerReadiness.prework}</span>
          </div>
          <div>
            <strong>${nextAction.label}</strong>
            <span>${nextAction.action}</span>
          </div>
        </div>
        <div class="course-cohort-grid">
          <div>
            <strong>产品承诺</strong>
            <p>${offerTrack.promise}</p>
          </div>
          <div>
            <strong>适用场景</strong>
            <p>${cadence.bestFor}</p>
          </div>
          <div>
            <strong>角色分工</strong>
            ${tagRow(roles)}
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(pageRoute)}
          </div>
          <div>
            <strong>交付物</strong>
            ${list(deliverables)}
          </div>
          <div>
            <strong>Codex 可做</strong>
            ${list(codexTasks)}
          </div>
          <div>
            <strong>资料支持</strong>
            <p>${learnerReadiness.support}</p>
          </div>
          <div>
            <strong>交付判断</strong>
            <p>${decision.detail}</p>
          </div>
        </div>
        <div class="course-cohort-schedule">
          ${cadence.schedule
            .map(
              (item) => `
                <article>
                  <span>${item.week}</span>
                  <strong>${item.focus}</strong>
                  <p>${item.modules} · ${item.classroom}</p>
                  <div>
                    <small>作业</small>
                    <p>${item.homework}</p>
                  </div>
                  <div>
                    <small>证据</small>
                    <p>${item.evidence}</p>
                  </div>
                  ${tagRow(item.route)}
                </article>
              `
            )
            .join("")}
        </div>
        <div class="course-cohort-boundary">
          <div>
            <strong>人工确认边界</strong>
            ${list(manualChecks)}
          </div>
          <div>
            <strong>运营规则</strong>
            ${list(planner.operatingRules)}
          </div>
        </div>
        <pre class="prompt-composer-text course-cohort-prompt">${escapeHtml(codexPrompt)}</pre>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentPlan) return;
      try {
        await navigator.clipboard.writeText(buildCourseCohortMarkdown(currentPlan, planner));
        setStatus("开班 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentPlan) return;
      downloadTextFile(planner.exportFilename || "course-cohort-delivery-brief-output.md", buildCourseCohortMarkdown(currentPlan, planner), "text/markdown;charset=utf-8");
      setStatus("Markdown 开班 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildCourseCohortMarkdown(plan, planner) {
    const { offerTrack, cadence, learnerReadiness, deliveryRisk, nextAction, score, decision, pageRoute, roles, deliverables, manualChecks, codexTasks, codexPrompt } = plan;
    return `# 开班交付排期 Brief

- 课程产品：${offerTrack.label}
- 班型节奏：${cadence.label}
- 资料状态：${learnerReadiness.label}
- 交付风险：${deliveryRisk.label}
- 下一动作：${nextAction.label}
- 开班匹配分：${score}
- 执行结论：${decision.label}

## 产品承诺
${offerTrack.promise}

## 适合对象
${offerTrack.fit}

## 交付节奏
${cadence.duration}
${cadence.rhythm}

## 资料准备
${learnerReadiness.status}
${learnerReadiness.prework}

## 周排期
${cadence.schedule.map((item) => `- ${item.week} ${item.focus}：${item.modules}；课堂：${item.classroom}；作业：${item.homework}；证据：${item.evidence}`).join("\n")}

## 角色分工
${roles.map((item) => `- ${item}`).join("\n")}

## 交付物
${deliverables.map((item) => `- ${item}`).join("\n")}

## 页面路线
${pageRoute.map((item) => `- ${item}`).join("\n")}

## Codex 可做
${codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认边界
${manualChecks.map((item) => `- ${item}`).join("\n")}

## 下一步动作
${nextAction.action}
负责人：${nextAction.owner}

## 执行结论
${decision.detail}

## 运营规则
${planner.operatingRules.map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}
`;
  }

  function renderCourseDeliveryBlueprint() {
    const target = byId("course-delivery-blueprint");
    if (!target || !data.course || !data.course.deliveryBlueprint) return;
    const downloads = data.course.deliveryBlueprintDownloads || [];
    target.innerHTML = `
      <div class="course-blueprint-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="course-blueprint-list">
        ${data.course.deliveryBlueprint
          .map(
            (item) => `
              <article class="course-blueprint-card">
                <div class="lesson-step-head">
                  <span class="step-number">${item.module}</span>
                  <h3>${item.title}</h3>
                </div>
                <p>${item.classObjective}</p>
                <div class="course-blueprint-grid">
                  <div>
                    <strong>老师讲法</strong>
                    <p>${item.teacherCue}</p>
                  </div>
                  <div>
                    <strong>Codex 演示</strong>
                    <p>${item.codexDemo}</p>
                  </div>
                  <div>
                    <strong>学员任务</strong>
                    <p>${item.learnerTask}</p>
                  </div>
                  <div>
                    <strong>验收标准</strong>
                    <p>${item.acceptance}</p>
                  </div>
                  <div>
                    <strong>交付模板</strong>
                    <p>${item.template}</p>
                  </div>
                  <div>
                    <strong>常见卡点</strong>
                    <p>${item.frequentIssue}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderCourseModuleLinkageDesk() {
    const target = byId("course-module-linkage-desk");
    if (!target || !data.course || !data.course.moduleLinkageDesk) return;
    const desk = data.course.moduleLinkageDesk;
    const downloads = data.course.moduleLinkageDownloads || [];
    const defaults = desk.defaults || {};
    target.innerHTML = `
      <div class="course-linkage-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card course-linkage-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Course Operating Desk</p>
          <h3>${desk.title}</h3>
          <p>${desk.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="course-linkage-module">
              <span>课程模块</span>
              <select id="course-linkage-module" data-module-linkage-field="moduleId">
                ${desk.moduleRoutes
                  .map(
                    (item) => {
                      const module = (data.course.modules || []).find((moduleItem) => moduleItem.id === item.id);
                      const label = module ? `${item.id} ${module.title}` : item.id;
                      return `<option value="${item.id}"${defaults.moduleId === item.id ? " selected" : ""}>${label}</option>`;
                    }
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="course-linkage-teaching">
              <span>使用场景</span>
              <select id="course-linkage-teaching" data-module-linkage-field="teachingMode">
                ${desk.teachingModes
                  .map((item) => `<option value="${item.id}"${defaults.teachingMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="course-linkage-audience">
              <span>讲解对象</span>
              <select id="course-linkage-audience" data-module-linkage-field="audienceMode">
                ${desk.audienceModes
                  .map((item) => `<option value="${item.id}"${defaults.audienceMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="course-linkage-evidence">
              <span>证据来源</span>
              <select id="course-linkage-evidence" data-module-linkage-field="evidenceMode">
                ${desk.evidenceModes
                  .map((item) => `<option value="${item.id}"${defaults.evidenceMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="course-linkage-action">
              <span>下一步动作</span>
              <select id="course-linkage-action" data-module-linkage-field="nextAction">
                ${desk.nextActions
                  .map((item) => `<option value="${item.id}"${defaults.nextAction === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel course-linkage-result" aria-live="polite">
          <div id="course-linkage-result"></div>
          <div class="hero-actions compact-actions course-linkage-actions">
            <button class="button secondary" type="button" id="course-linkage-copy">复制模块 Brief</button>
            <button class="button secondary" type="button" id="course-linkage-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="course-linkage-status"></span>
        </div>
      </article>
    `;
    setupCourseModuleLinkageDesk(desk);
  }

  function setupCourseModuleLinkageDesk(desk) {
    const fields = [...document.querySelectorAll("[data-module-linkage-field]")];
    const result = byId("course-linkage-result");
    const copy = byId("course-linkage-copy");
    const download = byId("course-linkage-download");
    const status = byId("course-linkage-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.moduleLinkageField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function getDecision({ teachingMode, evidenceMode, nextAction, score }) {
      const publicRisk = teachingMode.id === "public-demo" && ["learner-homework", "enterprise-internal", "repair-needed"].includes(evidenceMode.id);
      const enterpriseRisk = teachingMode.id === "enterprise-training" && evidenceMode.id === "integrated-house-sample";
      if (evidenceMode.id === "repair-needed" || publicRisk) {
        return {
          label: "先返修或换样例",
          detail: "当前证据不适合对外展示，先补脱敏、授权、页面证据和人工确认边界。",
          tone: "repair"
        };
      }
      if (evidenceMode.id === "enterprise-internal" || enterpriseRisk) {
        return {
          label: "仅内部或企业项目使用",
          detail: "需要确认企业资料权限、岗位责任和项目范围后再进入内训或 SOP 交付。",
          tone: "review"
        };
      }
      if (nextAction.id === "route-tool-sprint") {
        return {
          label: "进入工具沉淀",
          detail: "把本模块的重复动作、字段和检查规则整理成工具规格、原型或测试样例。",
          tone: "ready"
        };
      }
      if (score >= 34) {
        return {
          label: "可作为高强度交付证据",
          detail: "适合用于系统课讲解、招生咨询或企业说明，但仍需保留授权和边界记录。",
          tone: "ready"
        };
      }
      return {
        label: "课堂可执行",
        detail: "可以用于备课、课堂演示、作业布置或内部复盘。",
        tone: "review"
      };
    }

    function buildBrief(values) {
      const route = pick(desk.moduleRoutes, values.moduleId);
      const teachingMode = pick(desk.teachingModes, values.teachingMode);
      const audienceMode = pick(desk.audienceModes, values.audienceMode);
      const evidenceMode = pick(desk.evidenceModes, values.evidenceMode);
      const nextAction = pick(desk.nextActions, values.nextAction);
      const module = (data.course.modules || []).find((item) => item.id === route.id) || {};
      const blueprint = (data.course.deliveryBlueprint || []).find((item) => item.module === route.id) || {};
      const pageRoute = [...new Set([...route.pageRoute, ...nextAction.route])];
      const score = teachingMode.score + audienceMode.score + evidenceMode.score + nextAction.score + route.linkedTools.length + route.linkedDownloads.length;
      const decision = getDecision({ teachingMode, evidenceMode, nextAction, score });
      const runbook = [
        { stage: "01", title: "开场业务痛点", detail: module.pain || blueprint.classObjective },
        { stage: "02", title: "集成房屋演示", detail: route.caseScene },
        { stage: "03", title: "Codex 操作", detail: route.codexTasks.join("；") },
        { stage: "04", title: "学员替换任务", detail: route.learnerEvidence },
        { stage: "05", title: "验收和边界", detail: `${blueprint.acceptance || module.goal} ${route.manualChecks.join("、")}必须人工确认。` },
        { stage: "06", title: "后续联动", detail: `${nextAction.action} ${nextAction.businessValue}` }
      ];
      const codexPrompt = `请基于以下课程模块联动 brief 生成${teachingMode.label}脚本：模块为${route.id} ${module.title || route.workflowStage}，讲解对象为${audienceMode.label}，证据来源为${evidenceMode.label}，下一步动作为${nextAction.label}。必须包含业务痛点、集成房屋演示、Codex 操作步骤、关联工具/指令/下载、学员作业、验收证据、招生讲法、企业延伸和人工确认边界，不得承诺自动成交、自动报价或替代企业审批。`;
      return {
        route,
        module,
        blueprint,
        teachingMode,
        audienceMode,
        evidenceMode,
        nextAction,
        pageRoute,
        score,
        decision,
        runbook,
        codexPrompt
      };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const {
        route,
        module,
        blueprint,
        teachingMode,
        audienceMode,
        evidenceMode,
        nextAction,
        pageRoute,
        score,
        decision,
        runbook,
        codexPrompt
      } = currentBrief;

      result.innerHTML = `
        <p class="eyebrow">${route.id} · ${route.workflowStage}</p>
        <h3>${module.title || route.workflowStage}</h3>
        <p>${module.goal || blueprint.classObjective || route.caseScene}</p>
        <div class="course-linkage-meta">
          <div>
            <strong>${score}</strong>
            <span>联动强度</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>${decision.detail}</span>
          </div>
          <div>
            <strong>${teachingMode.owner}</strong>
            <span>责任组合</span>
          </div>
        </div>
        <div class="course-linkage-grid">
          <div>
            <strong>集成房屋演示</strong>
            <p>${route.caseScene}</p>
          </div>
          <div>
            <strong>课堂讲法</strong>
            <p>${route.classroomScript}</p>
          </div>
          <div>
            <strong>关联工具</strong>
            ${list(route.linkedTools)}
          </div>
          <div>
            <strong>关联指令</strong>
            ${list(route.linkedPrompts)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${list(route.linkedDownloads)}
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(pageRoute)}
          </div>
          <div>
            <strong>学员作业证据</strong>
            <p>${route.learnerEvidence}</p>
          </div>
          <div>
            <strong>验收标准</strong>
            <p>${blueprint.acceptance || module.goal}</p>
          </div>
          <div>
            <strong>招生证据讲法</strong>
            <p>${route.enrollmentProof}</p>
          </div>
          <div>
            <strong>企业服务延伸</strong>
            <p>${route.enterpriseExtension}</p>
          </div>
          <div>
            <strong>讲解对象顾虑</strong>
            <p>${audienceMode.concern} 需要证明：${audienceMode.proofNeed}</p>
          </div>
          <div>
            <strong>证据来源边界</strong>
            <p>${evidenceMode.rule} ${evidenceMode.masking}</p>
          </div>
          <div>
            <strong>Codex 可做</strong>
            ${list(route.codexTasks)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(route.manualChecks)}
          </div>
          <div>
            <strong>下一步动作</strong>
            <p>${nextAction.action}</p>
          </div>
          <div>
            <strong>使用场景输出</strong>
            <p>${teachingMode.output}</p>
          </div>
        </div>
        <div class="course-linkage-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>模块联动运营规则</strong>
          ${list(desk.operatingRules)}
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildCourseModuleLinkageMarkdown(currentBrief, desk));
        setStatus("模块联动 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(desk.exportFilename || "course-module-linkage-brief-output.md", buildCourseModuleLinkageMarkdown(currentBrief, desk), "text/markdown;charset=utf-8");
      setStatus("Markdown 模块联动 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildCourseModuleLinkageMarkdown(brief, desk) {
    const {
      route,
      module,
      blueprint,
      teachingMode,
      audienceMode,
      evidenceMode,
      nextAction,
      pageRoute,
      score,
      decision,
      runbook,
      codexPrompt
    } = brief;
    return `# 课程模块联动 Brief

- 模块：${route.id} ${module.title || route.workflowStage}
- 使用场景：${teachingMode.label}
- 讲解对象：${audienceMode.label}
- 证据来源：${evidenceMode.label}
- 下一步动作：${nextAction.label}
- 联动强度：${score}
- 执行结论：${decision.label}

## 模块目标
${module.goal || blueprint.classObjective || route.caseScene}

## 业务痛点
${module.pain || blueprint.classObjective}

## 集成房屋演示
${route.caseScene}

## 课堂讲法
${route.classroomScript}

## 关联工具
${route.linkedTools.map((item) => `- ${item}`).join("\n")}

## 关联指令
${route.linkedPrompts.map((item) => `- ${item}`).join("\n")}

## 下载资产
${route.linkedDownloads.map((item) => `- ${item}`).join("\n")}

## 页面路线
${pageRoute.map((item) => `- ${item}`).join("\n")}

## 学员作业证据
${route.learnerEvidence}

## 验收标准
${blueprint.acceptance || module.goal}

## 招生证据讲法
${route.enrollmentProof}

## 企业服务延伸
${route.enterpriseExtension}

## 讲解对象关注点
- 顾虑：${audienceMode.concern}
- 需要证明：${audienceMode.proofNeed}
- 讲解方式：${audienceMode.explanationStyle}

## Codex 可做事项
${route.codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认事项
${route.manualChecks.map((item) => `- ${item}`).join("\n")}

## 下一步动作
${nextAction.action}
${nextAction.businessValue}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 执行结论
${decision.detail}

## 证据来源边界
${evidenceMode.rule}
${evidenceMode.masking}

## Codex 扩写任务
${codexPrompt}

## 模块联动运营规则
${desk.operatingRules.map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderCourseHomeworkRubric() {
    const target = byId("course-homework-rubric");
    if (!target || !data.course) return;
    target.innerHTML = data.course.homeworkRubric
      .map(
        (item) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">${item.criterion}</p>
              <h3>${item.pass}</h3>
            </div>
            <div class="standard-card-grid two-column">
              <div>
                <strong>通过标准</strong>
                <p>${item.pass}</p>
              </div>
              <div>
                <strong>不通过表现</strong>
                <p>${item.fail}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderCourseTeachingChecklist() {
    const target = byId("course-teaching-checklist");
    if (!target || !data.course) return;
    target.innerHTML = data.course.teachingChecklist
      .map(
        (checklist) => `
          <article class="info-card">
            <h3>${checklist.title}</h3>
            ${list(checklist.items)}
          </article>
        `
      )
      .join("");
  }

  function renderModuleCard(module) {
    return `
      <article class="module-card">
        <div class="module-meta">
          <span class="tag">${module.track}</span>
          <span class="tag">${module.id}</span>
        </div>
        <h3>${module.title}</h3>
        <p>${module.goal}</p>
        ${tagRow(module.deliverables)}
        ${module.pain ? `<div class="detail-block"><strong>业务痛点</strong><p>${module.pain}</p></div>` : ""}
        ${module.scenario ? `<div class="detail-block"><strong>案例场景</strong><p>${module.scenario}</p></div>` : ""}
        ${module.steps ? `<div class="detail-block"><strong>课堂操作</strong>${list(module.steps)}</div>` : ""}
        ${module.homework ? `<div class="detail-block"><strong>学员作业</strong>${list(module.homework)}</div>` : ""}
        ${module.risks ? `<div class="detail-block"><strong>风险边界</strong>${list(module.risks)}</div>` : ""}
      </article>
    `;
  }

  function renderCase() {
    const target = byId("case-overview");
    if (!target) return;
    const c = data.integratedHouseCase;
    target.innerHTML = `
      <article class="glass-panel">
        <p class="eyebrow">Demo Scenario</p>
        <h3>${c.title}</h3>
        <p>${c.summary}</p>
        ${tagRow(c.workflow)}
      </article>
      <article class="glass-panel">
        <p class="eyebrow">Product Profile</p>
        <dl class="spec-list">
          ${c.productSpecs
            .map(
              (item) => `
                <div>
                  <dt>${item.label}</dt>
                  <dd>${item.value}</dd>
                </div>
              `
            )
            .join("")}
        </dl>
      </article>
    `;
  }

  function renderCaseNarrative() {
    const target = byId("case-narrative");
    if (!target) return;
    const c = data.integratedHouseCase;
    target.innerHTML = `
      <article class="glass-panel span-2">
        <p class="eyebrow">Complete Scenario</p>
        <h3>${c.demoScenario.title}</h3>
        <p>${c.demoScenario.description}</p>
        ${tagRow(c.demoScenario.confirmationPoints)}
      </article>
      <article class="glass-panel">
        <p class="eyebrow">Original Inquiry</p>
        <blockquote>${c.sampleInquiry}</blockquote>
      </article>
      <article class="glass-panel">
        <p class="eyebrow">Codex Output</p>
        ${list(c.inquiryAnalysis)}
      </article>
    `;
  }

  function renderCaseOperations() {
    const target = byId("case-operations");
    if (!target) return;
    const c = data.integratedHouseCase;
    target.innerHTML = [
      {
        title: "报价测算结构",
        eyebrow: "Quotation",
        items: c.quotationStructure
      },
      {
        title: "订单主数据",
        eyebrow: "Order Master Data",
        items: c.orderMasterData
      },
      {
        title: "单证冲突样例",
        eyebrow: "Document Check",
        items: c.documentConflicts
      },
      {
        title: "人工确认边界",
        eyebrow: "Risk Boundary",
        items: c.riskBoundaries
      }
    ]
      .map(
        (card) => `
          <article class="info-card">
            <p class="eyebrow">${card.eyebrow}</p>
            <h3>${card.title}</h3>
            ${list(card.items)}
          </article>
        `
      )
      .join("");
  }

  function renderCaseClassroomFlow() {
    const target = byId("case-classroom-flow");
    if (!target) return;
    const c = data.integratedHouseCase;
    target.innerHTML = c.classroomFlow
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid">
              <div>
                <strong>输入场景</strong>
                <p>${step.input}</p>
              </div>
              <div>
                <strong>Codex 操作</strong>
                <p>${step.codexAction}</p>
              </div>
              <div>
                <strong>输出结果</strong>
                <p>${step.output}</p>
              </div>
              <div>
                <strong>讲解重点</strong>
                <p>${step.teachingPoint}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderCaseStandardLessonPack() {
    const target = byId("case-standard-lesson-pack");
    if (!target || !data.integratedHouseCase || !data.integratedHouseCase.standardLessonPack) return;
    const pack = data.integratedHouseCase.standardLessonPack;
    target.innerHTML = `
      <div class="case-lesson-downloads">
        ${(pack.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="glass-panel standard-panel case-standard-lesson-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Lesson Runbook</p>
            <h3>${pack.title}</h3>
            <p>${pack.description}</p>
          </div>
          ${tagRow([pack.duration, "可直接授课", "可企业替换"])}
        </div>
        <div class="case-lesson-summary">
          <div>
            <strong>适用对象</strong>
            <p>${pack.audience}</p>
          </div>
          <div>
            <strong>课堂承诺</strong>
            <p>${pack.promise}</p>
          </div>
        </div>
        <div class="case-lesson-grid">
          <section>
            <strong>课前检查</strong>
            ${list(pack.preclassChecklist)}
          </section>
          <section>
            <strong>学员作业包</strong>
            ${list(pack.homeworkPack)}
          </section>
        </div>
        <div class="case-lesson-timeline">
          ${pack.timeline
            .map(
              (step) => `
                <article>
                  <div class="case-lesson-time">${step.time}</div>
                  <div class="case-lesson-step-body">
                    <div class="case-card-head">
                      <div>
                        <p class="eyebrow">Stage</p>
                        <h4>${step.title}</h4>
                      </div>
                      ${tagRow(step.screenRoute)}
                    </div>
                    <div class="case-lesson-step-grid">
                      <div>
                        <strong>老师动作</strong>
                        <p>${step.teacherAction}</p>
                      </div>
                      <div>
                        <strong>Codex 操作</strong>
                        <p>${step.codexOperation}</p>
                      </div>
                      <div>
                        <strong>学员输出</strong>
                        <p>${step.learnerOutput}</p>
                      </div>
                      <div>
                        <strong>验收标准</strong>
                        <p>${step.acceptance}</p>
                      </div>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="case-lesson-output-grid">
          ${pack.classroomOutputs
            .map(
              (output) => `
                <div>
                  <strong>${output.name}</strong>
                  <p>${output.proof}</p>
                  <span>${output.page}</span>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="case-lesson-grid">
          <section>
            <strong>作业验收标准</strong>
            ${pack.gradingRubric
              .map(
                (rule) => `
                  <div class="case-lesson-rubric">
                    <span>${rule.criterion}</span>
                    <p><strong>通过：</strong>${rule.pass}</p>
                    <p><strong>返修：</strong>${rule.fail}</p>
                  </div>
                `
              )
              .join("")}
          </section>
          <section>
            <strong>后续转化用法</strong>
            ${list(pack.conversionUse)}
          </section>
        </div>
        <div class="detail-block">
          <strong>必须人工确认的边界</strong>
          ${list(pack.manualBoundaries)}
        </div>
      </article>
    `;
  }

  function renderCaseSpeakerScriptPack() {
    const target = byId("case-speaker-script-pack");
    if (!target || !data.integratedHouseCase || !data.integratedHouseCase.speakerScriptPack) return;
    const pack = data.integratedHouseCase.speakerScriptPack;
    target.innerHTML = `
      <div class="case-speaker-downloads">
        ${(pack.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="glass-panel standard-panel case-speaker-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Instructor Script</p>
            <h3>${pack.title}</h3>
            <p>${pack.description}</p>
          </div>
          ${tagRow(["逐屏讲法", "公开课 CTA", "新讲师复制"])}
        </div>
        <blockquote class="case-speaker-opening">${pack.openingLine}</blockquote>
        <div class="case-speaker-screen-list">
          ${pack.screenScripts
            .map(
              (script) => `
                <article>
                  <div class="case-speaker-screen-head">
                    <span class="step-number">${script.stage}</span>
                    <div>
                      <p class="eyebrow">${script.duration}</p>
                      <h4>${script.screen}</h4>
                    </div>
                    ${tagRow(script.pageRoute)}
                  </div>
                  <div class="case-speaker-grid">
                    <div>
                      <strong>老师话术</strong>
                      <p>${script.teacherLine}</p>
                    </div>
                    <div>
                      <strong>点击动作</strong>
                      <p>${script.clickAction}</p>
                    </div>
                    <div>
                      <strong>观众互动</strong>
                      <p>${script.audienceAction}</p>
                    </div>
                    <div>
                      <strong>展示证据</strong>
                      <p>${script.visibleProof}</p>
                    </div>
                    <div>
                      <strong>转场句</strong>
                      <p>${script.transition}</p>
                    </div>
                    <div>
                      <strong>边界提醒</strong>
                      <p>${script.boundary}</p>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="case-speaker-conversion-grid">
          ${pack.conversionScripts
            .map(
              (script) => `
                <section>
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">${script.scenario}</p>
                      <h4>${script.concern}</h4>
                    </div>
                  </div>
                  <div class="detail-block no-divider">
                    <strong>回应话术</strong>
                    <p>${script.response}</p>
                  </div>
                  <div class="detail-block">
                    <strong>证据页面</strong>
                    ${tagRow(script.proofRoute)}
                  </div>
                  <div class="detail-block">
                    <strong>下一步 CTA</strong>
                    <p>${script.cta}</p>
                  </div>
                  <div class="detail-block">
                    <strong>禁止承诺</strong>
                    <p>${script.noGo}</p>
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>讲师自检</strong>
          ${list(pack.instructorChecks)}
        </div>
      </article>
    `;
  }

  function renderIntegratedHouseDemoCommand() {
    const target = byId("integrated-house-demo-command");
    if (!target || !data.integratedHouseCase || !data.integratedHouseCase.demoCommandDesk) return;
    const c = data.integratedHouseCase;
    const desk = c.demoCommandDesk;
    const downloads = c.demoCommandDownloads || [];
    const defaults = desk.defaults || {};
    target.innerHTML = `
      <div class="case-demo-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card case-demo-command-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Case Demo Command</p>
          <h3>${desk.title}</h3>
          <p>${desk.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="case-demo-stage">
              <span>演示阶段</span>
              <select id="case-demo-stage" data-case-demo-field="demoStage">
                ${desk.demoStages
                  .map((item) => `<option value="${item.id}"${defaults.demoStage === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-demo-session">
              <span>使用场景</span>
              <select id="case-demo-session" data-case-demo-field="sessionMode">
                ${desk.sessionModes
                  .map((item) => `<option value="${item.id}"${defaults.sessionMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-demo-audience">
              <span>讲解对象</span>
              <select id="case-demo-audience" data-case-demo-field="audienceMode">
                ${desk.audienceModes
                  .map((item) => `<option value="${item.id}"${defaults.audienceMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-demo-evidence">
              <span>证据状态</span>
              <select id="case-demo-evidence" data-case-demo-field="evidenceStatus">
                ${desk.evidenceStatuses
                  .map((item) => `<option value="${item.id}"${defaults.evidenceStatus === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-demo-action">
              <span>下一步动作</span>
              <select id="case-demo-action" data-case-demo-field="nextAction">
                ${desk.nextActions
                  .map((item) => `<option value="${item.id}"${defaults.nextAction === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel case-demo-command-result" aria-live="polite">
          <div id="case-demo-result"></div>
          <div class="hero-actions compact-actions case-demo-actions">
            <button class="button secondary" type="button" id="case-demo-copy">复制演示 Brief</button>
            <button class="button secondary" type="button" id="case-demo-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="case-demo-status"></span>
        </div>
      </article>
    `;
    setupIntegratedHouseDemoCommand(desk);
  }

  function setupIntegratedHouseDemoCommand(desk) {
    const fields = [...document.querySelectorAll("[data-case-demo-field]")];
    const result = byId("case-demo-result");
    const copy = byId("case-demo-copy");
    const download = byId("case-demo-download");
    const status = byId("case-demo-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.caseDemoField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decideDemo({ sessionMode, evidenceStatus, nextAction, score }) {
      const publicUse = ["public-demo", "consultation-proof"].includes(sessionMode.id);
      if (evidenceStatus.id === "repair-needed" || (publicUse && ["enterprise-private", "classroom-only"].includes(evidenceStatus.id))) {
        return {
          label: "先返修或换公开样例",
          detail: "当前证据不适合公开展示或招生咨询，先补脱敏、授权、字段来源和人工确认记录。",
          tone: "repair"
        };
      }
      if (sessionMode.id === "enterprise-training" || evidenceStatus.id === "enterprise-private") {
        return {
          label: "企业范围确认后使用",
          detail: "先确认企业资料权限、岗位责任、脱敏授权和验收标准，再替换企业真实资料。",
          tone: "review"
        };
      }
      if (nextAction.id === "consultation-cta" && score >= 34) {
        return {
          label: "可转招生咨询证据",
          detail: "适合用页面证据说明课程交付结果，但必须讲清样例性质和禁止承诺边界。",
          tone: "ready"
        };
      }
      if (nextAction.id === "open-tools") {
        return {
          label: "进入工具演示",
          detail: "用同一份案例输入切换到工具中心，展示字段、输出、导出和人工确认点。",
          tone: "ready"
        };
      }
      return {
        label: "课堂可执行",
        detail: "可用于系统课、作业点评或内部复盘，并可继续联动工具、资源和运营指南。",
        tone: "review"
      };
    }

    function buildBrief(values) {
      const demoStage = pick(desk.demoStages, values.demoStage);
      const sessionMode = pick(desk.sessionModes, values.sessionMode);
      const audienceMode = pick(desk.audienceModes, values.audienceMode);
      const evidenceStatus = pick(desk.evidenceStatuses, values.evidenceStatus);
      const nextAction = pick(desk.nextActions, values.nextAction);
      const pageRoute = [...new Set(["case-integrated-house.html", "course.html", "tools.html", ...nextAction.route])];
      const score = demoStage.score + sessionMode.score + audienceMode.score + evidenceStatus.score + nextAction.score;
      const decision = decideDemo({ sessionMode, evidenceStatus, nextAction, score });
      const runbook = [
        { stage: "01", title: "打开案例场景", detail: demoStage.scene },
        { stage: "02", title: "展示业务输入", detail: demoStage.input },
        { stage: "03", title: "执行 Codex 操作", detail: demoStage.codexTasks.join("；") },
        { stage: "04", title: "进入工具/输出", detail: `${demoStage.toolRoute.join(" / ")}；输出：${demoStage.output}` },
        { stage: "05", title: "学员或客户动作", detail: `${nextAction.action} ${sessionMode.deliverable}` },
        { stage: "06", title: "人工确认边界", detail: `${demoStage.manualChecks.join("、")}必须人工确认。${evidenceStatus.rule}` }
      ];
      const codexPrompt = `请基于以下集成房屋案例演示 brief 生成${sessionMode.label}脚本：演示阶段为${demoStage.label}，讲解对象为${audienceMode.label}，证据状态为${evidenceStatus.label}，下一步动作为${nextAction.label}。必须包含案例场景、业务输入、Codex 操作、工具入口、输出结果、学员作业或咨询 CTA、招生证据讲法、企业延伸和人工确认边界，不得承诺自动成交、自动报价或替代专业判断。`;
      return { demoStage, sessionMode, audienceMode, evidenceStatus, nextAction, pageRoute, score, decision, runbook, codexPrompt };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { demoStage, sessionMode, audienceMode, evidenceStatus, nextAction, pageRoute, score, decision, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${demoStage.module} · ${sessionMode.label}</p>
        <h3>${demoStage.label}</h3>
        <p>${demoStage.scene}</p>
        <div class="case-demo-meta">
          <div>
            <strong>${score}</strong>
            <span>演示强度</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>${decision.detail}</span>
          </div>
          <div>
            <strong>${sessionMode.owner}</strong>
            <span>责任组合</span>
          </div>
        </div>
        <div class="case-demo-grid">
          <div>
            <strong>业务输入</strong>
            <p>${demoStage.input}</p>
          </div>
          <div>
            <strong>课堂讲法</strong>
            <p>${demoStage.classroomScript}</p>
          </div>
          <div>
            <strong>Codex 可做</strong>
            ${list(demoStage.codexTasks)}
          </div>
          <div>
            <strong>工具入口</strong>
            ${list(demoStage.toolRoute)}
          </div>
          <div>
            <strong>输出结果</strong>
            <p>${demoStage.output}</p>
          </div>
          <div>
            <strong>下载资产</strong>
            ${list(demoStage.downloads)}
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(pageRoute)}
          </div>
          <div>
            <strong>招生证据讲法</strong>
            <p>${demoStage.enrollmentProof}</p>
          </div>
          <div>
            <strong>企业服务延伸</strong>
            <p>${demoStage.enterpriseExtension}</p>
          </div>
          <div>
            <strong>讲解对象顾虑</strong>
            <p>${audienceMode.concern} 需要证明：${audienceMode.proofNeed}</p>
          </div>
          <div>
            <strong>证据状态边界</strong>
            <p>${evidenceStatus.rule} ${evidenceStatus.masking}</p>
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(demoStage.manualChecks)}
          </div>
          <div>
            <strong>下一步动作</strong>
            <p>${nextAction.action}</p>
          </div>
          <div>
            <strong>使用场景输出</strong>
            <p>${sessionMode.deliverable}</p>
          </div>
        </div>
        <div class="case-demo-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>案例演示运营规则</strong>
          ${list(desk.operatingRules)}
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildIntegratedHouseDemoMarkdown(currentBrief, desk));
        setStatus("案例演示 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(desk.exportFilename || "integrated-house-demo-brief-output.md", buildIntegratedHouseDemoMarkdown(currentBrief, desk), "text/markdown;charset=utf-8");
      setStatus("Markdown 案例演示 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildIntegratedHouseDemoMarkdown(brief, desk) {
    const { demoStage, sessionMode, audienceMode, evidenceStatus, nextAction, pageRoute, score, decision, runbook, codexPrompt } = brief;
    return `# 集成房屋案例演示 Brief

- 演示阶段：${demoStage.label}
- 关联模块：${demoStage.module}
- 使用场景：${sessionMode.label}
- 讲解对象：${audienceMode.label}
- 证据状态：${evidenceStatus.label}
- 下一步动作：${nextAction.label}
- 演示强度：${score}
- 执行结论：${decision.label}

## 案例场景
${demoStage.scene}

## 业务输入
${demoStage.input}

## 课堂讲法
${demoStage.classroomScript}

## Codex 可做事项
${demoStage.codexTasks.map((item) => `- ${item}`).join("\n")}

## 工具入口
${demoStage.toolRoute.map((item) => `- ${item}`).join("\n")}

## 输出结果
${demoStage.output}

## 下载资产
${demoStage.downloads.map((item) => `- ${item}`).join("\n")}

## 页面路线
${pageRoute.map((item) => `- ${item}`).join("\n")}

## 招生证据讲法
${demoStage.enrollmentProof}

## 企业服务延伸
${demoStage.enterpriseExtension}

## 讲解对象关注点
- 顾虑：${audienceMode.concern}
- 需要证明：${audienceMode.proofNeed}
- 讲解方式：${audienceMode.explanationStyle}

## 下一步动作
${nextAction.action}
${nextAction.businessValue}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 执行结论
${decision.detail}

## 人工确认事项
${demoStage.manualChecks.map((item) => `- ${item}`).join("\n")}

## 证据状态边界
${evidenceStatus.rule}
${evidenceStatus.masking}

## Codex 扩写任务
${codexPrompt}

## 案例演示运营规则
${desk.operatingRules.map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderCaseToolHandoff() {
    const target = byId("case-tool-handoff");
    if (!target) return;
    const c = data.integratedHouseCase;
    target.innerHTML = c.toolHandoff
      .map(
        (item) => `
          <article class="case-library-card">
            <div class="case-card-head">
              <div>
                <p class="eyebrow">${item.stage}</p>
                <h3>${item.tool}</h3>
              </div>
              <a class="button secondary" href="${item.page}">进入工具</a>
            </div>
            <div class="case-card-grid">
              <div>
                <strong>输入资料</strong>
                <p>${item.input}</p>
              </div>
              <div>
                <strong>输出结果</strong>
                <p>${item.output}</p>
              </div>
              <div>
                <strong>人工确认边界</strong>
                <p>${item.manualBoundary}</p>
              </div>
            </div>
            <div class="detail-block">
              <strong>课堂用法</strong>
              <p>${item.classroomUse}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderCaseToolchainCloseout() {
    const target = byId("case-toolchain-closeout-content");
    if (!target || !data.integratedHouseCase || !data.integratedHouseCase.toolchainCloseout) return;
    const chain = data.integratedHouseCase.toolchainCloseout;
    target.innerHTML = `
      <div class="case-toolchain-downloads">
        ${(chain.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="glass-panel standard-panel case-toolchain-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">End-to-end Toolchain</p>
            <h3>${chain.title}</h3>
            <p>${chain.description}</p>
          </div>
          ${tagRow(["正式课路线", "公开课证据", "企业替换入口"])}
        </div>
        <div class="case-toolchain-metrics">
          ${(chain.summaryMetrics || [])
            .map(
              (metric) => `
                <div>
                  <strong>${metric.value}</strong>
                  <span>${metric.label}</span>
                  <p>${metric.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="case-toolchain-route">
          ${(chain.route || [])
            .map(
              (step) => `
                <article>
                  <div class="case-toolchain-step-head">
                    <span class="step-number">${step.stage}</span>
                    <div>
                      <p class="eyebrow">${step.module}</p>
                      <h4>${step.tool}</h4>
                    </div>
                    <a class="button secondary" href="${step.anchor}">打开工具</a>
                  </div>
                  <div class="case-toolchain-step-grid">
                    <div>
                      <strong>案例输入</strong>
                      <p>${step.caseInput}</p>
                    </div>
                    <div>
                      <strong>工具输出</strong>
                      <p>${step.output}</p>
                    </div>
                    <div>
                      <strong>验收闸口</strong>
                      <p>${step.acceptance}</p>
                    </div>
                    <div>
                      <strong>下一步路由</strong>
                      <p>${step.nextRoute}</p>
                    </div>
                    <div>
                      <strong>人工边界</strong>
                      <p>${step.manualBoundary}</p>
                    </div>
                    <div>
                      <strong>作业下载</strong>
                      <p>${step.download}</p>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="case-toolchain-grid">
          <section>
            <strong>闭环验收规则</strong>
            ${list(chain.closeoutGates || [])}
          </section>
          <section>
            <strong>平台承接路线</strong>
            ${(chain.businessRoutes || [])
              .map(
                (route) => `
                  <div class="case-toolchain-business-route">
                    <span>${route.destination}</span>
                    <p>${route.route}</p>
                    <small>${route.proof}</small>
                  </div>
                `
              )
              .join("")}
          </section>
        </div>
      </article>
    `;
  }

  function renderCaseTeachingScript() {
    const target = byId("case-teaching-script");
    if (!target) return;
    const c = data.integratedHouseCase;
    target.innerHTML = c.teachingScript
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid three-column">
              <div>
                <strong>展示页面</strong>
                <p>${step.screen}</p>
              </div>
              <div class="span-2">
                <strong>老师讲法</strong>
                <p>${step.teacherTalk}</p>
              </div>
              <div>
                <strong>学员动作</strong>
                <p>${step.learnerAction}</p>
              </div>
              <div>
                <strong>输出物</strong>
                <p>${step.output}</p>
              </div>
              <div>
                <strong>边界提醒</strong>
                <p>${step.boundary}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderCaseQuoteBoard() {
    const target = byId("case-quote-board");
    if (!target) return;
    const c = data.integratedHouseCase;
    target.innerHTML = `
      <table class="data-table">
        <thead>
          <tr>
            <th>费用项</th>
            <th>报价依据</th>
            <th>确认人</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          ${c.quoteBoard
            .map(
              (row) => `
                <tr>
                  <td>${row.item}</td>
                  <td>${row.basis}</td>
                  <td>${row.owner}</td>
                  <td><span class="status-pill">${row.status}</span></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderCaseOrderTimeline() {
    const target = byId("case-order-timeline");
    if (!target) return;
    const c = data.integratedHouseCase;
    target.innerHTML = c.orderTimeline
      .map(
        (item, index) => `
          <article class="timeline-card">
            <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
            <h3>${item.step}</h3>
            <p><strong>负责人：</strong>${item.owner}</p>
            <p><strong>计划：</strong>${item.plan}</p>
            <div class="detail-block">
              <strong>风险提醒</strong>
              <p>${item.risk}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderCaseDocumentCheck() {
    const target = byId("case-doc-check");
    if (!target) return;
    const c = data.integratedHouseCase;
    target.innerHTML = `
      <table class="data-table">
        <thead>
          <tr>
            <th>字段</th>
            <th>PI</th>
            <th>CI</th>
            <th>PL</th>
            <th>风险</th>
            <th>处理建议</th>
          </tr>
        </thead>
        <tbody>
          ${c.documentCheckRows
            .map(
              (row) => `
                <tr>
                  <td>${row.field}</td>
                  <td>${row.pi}</td>
                  <td>${row.ci}</td>
                  <td>${row.pl}</td>
                  <td><span class="status-pill ${row.level.toLowerCase()}">${row.level}</span></td>
                  <td>${row.action}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderCaseCenterMetrics() {
    const target = byId("case-center-metrics");
    if (!target || !data.cases) return;
    target.innerHTML = data.cases.metrics
      .map(
        (metric) => `
          <article class="metric playbook-metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderCaseLibrary() {
    const target = byId("case-library");
    if (!target || !data.cases) return;
    target.innerHTML = data.cases.featuredCases
      .map(
        (item) => `
          <article class="case-library-card">
            <div class="case-card-head">
              <div>
                <p class="eyebrow">${item.industry}</p>
                <h3>${item.title}</h3>
              </div>
              <span class="status-pill ${item.statusLevel}">${item.status}</span>
            </div>
            <p>${item.description}</p>
            ${tagRow(item.workflow)}
            <div class="case-card-grid">
              <div>
                <strong>课堂用途</strong>
                <p>${item.courseUse}</p>
              </div>
              <div>
                <strong>工具输出</strong>
                ${list(item.toolOutputs)}
              </div>
              <div>
                <strong>人工确认边界</strong>
                ${list(item.manualBoundaries)}
              </div>
            </div>
            ${
              item.page
                ? `<div class="case-card-actions"><a class="button primary" href="${item.page}">查看完整案例</a></div>`
                : `<div class="case-card-actions"><span class="tag">等待补充行业资料</span></div>`
            }
          </article>
        `
      )
      .join("");
  }

  function renderCaseBuildStandards() {
    const target = byId("case-build-standards");
    if (!target || !data.cases) return;
    target.innerHTML = data.cases.buildStandards
      .map(
        (standard) => `
          <article class="info-card">
            <h3>${standard.title}</h3>
            <p>${standard.description}</p>
            <div class="detail-block"><strong>检查标准</strong>${list(standard.checks)}</div>
          </article>
        `
      )
      .join("");
  }

  function renderCaseReadinessBoard() {
    const target = byId("case-readiness-board");
    if (!target || !data.cases || !data.cases.readinessBoard) return;
    const downloads = data.cases.readinessDownloads || [];
    target.innerHTML = `
      <div class="case-readiness-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="case-readiness-grid">
        ${data.cases.readinessBoard
          .map(
            (item) => `
              <article class="case-readiness-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Case ${item.rank}</p>
                    <h3>${item.industry}</h3>
                  </div>
                  <span class="case-score">${item.score}</span>
                </div>
                <div class="case-readiness-meta">
                  <div>
                    <strong>准入信号</strong>
                    <p>${item.readinessSignal}</p>
                  </div>
                  <div>
                    <strong>资料状态</strong>
                    <p>${item.materialStatus}</p>
                  </div>
                </div>
                <div class="case-readiness-detail-grid">
                  <div>
                    <strong>课堂价值</strong>
                    <p>${item.courseFit}</p>
                  </div>
                  <div>
                    <strong>工具输出</strong>
                    <p>${item.toolFit}</p>
                  </div>
                  <div>
                    <strong>转化价值</strong>
                    <p>${item.conversionFit}</p>
                  </div>
                  <div>
                    <strong>下一步决策</strong>
                    <p>${item.nextDecision}</p>
                  </div>
                </div>
                <div class="lesson-step-grid two-column case-readiness-boundary">
                  <div>
                    <strong>人工确认边界</strong>
                    <p>${item.manualBoundary}</p>
                  </div>
                  <div>
                    <strong>负责人</strong>
                    <p>${item.owner}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderCaseReplicationPlanner() {
    const target = byId("case-replication-planner");
    if (!target || !data.cases || !data.cases.caseReplicationPlanner) return;
    const planner = data.cases.caseReplicationPlanner;
    const defaults = planner.defaults || {};
    target.innerHTML = `
      <article class="decision-tool-card case-planner-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Case Planning Workbench</p>
          <h3>${planner.title}</h3>
          <p>${planner.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="case-planner-targetIndustry">
              <span>目标行业</span>
              <select id="case-planner-targetIndustry" data-case-planner-field="targetIndustry">
                ${planner.industries
                  .map(
                    (industry) => `
                      <option value="${industry.value}"${
                        defaults.targetIndustry === industry.value ? " selected" : ""
                      }>${industry.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            ${planner.selectors
              .map(
                (selector) => `
                  <label class="decision-field" for="case-planner-${selector.id}">
                    <span>${selector.label}</span>
                    <select id="case-planner-${selector.id}" data-case-planner-field="${selector.id}">
                      ${selector.options
                        .map(
                          (option) => `
                            <option value="${option.value}"${
                              defaults[selector.id] === option.value ? " selected" : ""
                            }>${option.label}</option>
                          `
                        )
                        .join("")}
                    </select>
                  </label>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="decision-result-panel case-planner-result" aria-live="polite">
          <div id="case-planner-result"></div>
          <div class="hero-actions compact-actions case-planner-actions">
            <button class="button secondary" type="button" id="case-planner-copy">复制规划结论</button>
            <button class="button secondary" type="button" id="case-planner-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="case-planner-status"></span>
        </div>
      </article>
    `;
    setupCaseReplicationPlanner(planner);
  }

  function setupCaseReplicationPlanner(planner) {
    const fields = [...document.querySelectorAll("[data-case-planner-field]")];
    const result = byId("case-planner-result");
    const copy = byId("case-planner-copy");
    const download = byId("case-planner-download");
    const status = byId("case-planner-status");
    if (!fields.length || !result) return;
    let currentPlan = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.casePlannerField] = field.value;
        return values;
      }, {});
    }

    function optionFor(selectorId, optionValue) {
      const selector = planner.selectors.find((item) => item.id === selectorId);
      return selector?.options.find((option) => option.value === optionValue);
    }

    function routeFor(score, values) {
      if (values.authorization === "none") {
        return planner.routes.find((route) => route.id === "pause");
      }
      const completeCaseReady =
        values.materialDepth === "full_samples" &&
        values.chainCoverage === "full_chain" &&
        values.authorization === "sanitized";
      if (completeCaseReady && score >= 88) {
        return planner.routes.find((route) => route.id === "full_case");
      }
      if (values.primaryUse === "enterprise" && score >= 62) {
        return planner.routes.find((route) => route.id === "enterprise_diagnosis");
      }
      if (score >= 72) {
        return planner.routes.find((route) => route.id === "resource_first");
      }
      if (score >= 62) {
        return planner.routes.find((route) => route.id === "enterprise_diagnosis");
      }
      return planner.routes.find((route) => route.id === "pause");
    }

    function buildRepairs(industry, values) {
      const repairs = [...industry.missing.map((item) => `补资料：${item}`)];
      if (values.materialDepth !== "full_samples") repairs.push("补完整脱敏样例，至少包含产品、询盘、报价和订单/单证证据。");
      if (values.chainCoverage !== "full_chain") repairs.push("补完整业务链路，避免只做产品介绍或单一询盘片段。");
      if (values.authorization !== "sanitized") repairs.push("先完成资料脱敏、授权范围和公开展示边界确认。");
      if (values.primaryUse === "classroom" && values.chainCoverage !== "full_chain") {
        repairs.push("系统课完整案例必须能支撑课堂演示、学员作业和工具输出。");
      }
      return repairs;
    }

    function evaluate() {
      const values = readValues();
      const industry = planner.industries.find((item) => item.value === values.targetIndustry) || planner.industries[0];
      const selectedOptions = planner.selectors.map((selector) => ({
        id: selector.id,
        label: selector.label,
        option: optionFor(selector.id, values[selector.id])
      }));
      const rawScore = industry.baseScore + selectedOptions.reduce((total, item) => total + (item.option?.score || 0), 0);
      const score = Math.max(0, Math.min(100, rawScore));
      const route = routeFor(score, values) || planner.routes[planner.routes.length - 1];
      const repairs = buildRepairs(industry, values);
      return { values, industry, selectedOptions, score, route, repairs };
    }

    function renderResult() {
      currentPlan = evaluate();
      const { industry, selectedOptions, score, route, repairs } = currentPlan;
      result.innerHTML = `
        <p class="eyebrow">${route.title}</p>
        <h3>${score} 分 · ${industry.baseStage}</h3>
        <p>${route.summary}</p>
        <div class="case-planner-score-grid">
          <div>
            <strong>${industry.baseScore}</strong>
            <span>行业基础分</span>
          </div>
          <div>
            <strong>${score}</strong>
            <span>本期评分</span>
          </div>
          <div>
            <strong>${route.publishTarget}</strong>
            <span>发布目标</span>
          </div>
        </div>
        <div class="detail-block">
          <strong>行业证据</strong>
          <p>${industry.evidence}</p>
        </div>
        <div class="case-planner-option-grid">
          ${selectedOptions
            .map(
              (item) => `
                <div>
                  <strong>${item.label}</strong>
                  <span>${item.option?.label || ""}</span>
                  <p>${item.option?.note || ""}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="lesson-step-grid two-column case-planner-detail">
          <div>
            <strong>可沉淀工具输出</strong>
            ${list(industry.outputs)}
          </div>
          <div>
            <strong>需要补齐</strong>
            ${list(repairs)}
          </div>
          <div>
            <strong>下一步动作</strong>
            <p>${route.nextAction}</p>
          </div>
          <div>
            <strong>发布前检查</strong>
            ${list(route.requiredChecks)}
          </div>
          <div class="span-2">
            <strong>人工边界</strong>
            <p>${industry.boundary} ${planner.manualBoundary}</p>
          </div>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentPlan) return;
      try {
        await navigator.clipboard.writeText(buildCasePlannerMarkdown(planner, currentPlan));
        setStatus("规划结论已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentPlan) return;
      downloadTextFile("industry-case-replication-plan.md", buildCasePlannerMarkdown(planner, currentPlan), "text/markdown;charset=utf-8");
      setStatus("Markdown 规划结论已生成下载。");
    });
    renderResult();
  }

  function buildCasePlannerMarkdown(planner, plan) {
    const { industry, selectedOptions, score, route, repairs } = plan;
    return `# 行业案例复制规划结论

- 目标行业：${industry.label}
- 推荐路径：${route.title}
- 本期评分：${score}
- 发布目标：${route.publishTarget}
- 负责人：${industry.owner}

## 行业证据
${industry.evidence}

## 选择条件
${selectedOptions.map((item) => `- ${item.label}：${item.option?.label || ""}。${item.option?.note || ""}`).join("\n")}

## 可沉淀工具输出
${industry.outputs.map((item) => `- ${item}`).join("\n")}

## 需要补齐
${repairs.map((item) => `- ${item}`).join("\n")}

## 下一步动作
${route.nextAction}

## 发布前检查
${route.requiredChecks.map((item) => `- ${item}`).join("\n")}

## 人工确认边界
${industry.boundary}

${planner.manualBoundary}
`;
  }

  function renderCaseSprintCommandCenter() {
    const target = byId("case-sprint-command-center");
    if (!target || !data.cases || !data.cases.caseSprintCommandCenter) return;
    const center = data.cases.caseSprintCommandCenter;
    const defaults = center.defaults || {};
    target.innerHTML = `
      <div class="case-sprint-downloads">
        ${(center.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card case-sprint-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Case Sprint Workbench</p>
          <h3>${center.title}</h3>
          <p>${center.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="case-sprint-candidate">
              <span>候选行业</span>
              <select id="case-sprint-candidate" data-case-sprint-field="candidate">
                ${center.candidates
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.candidate === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-sprint-goal">
              <span>Sprint 目标</span>
              <select id="case-sprint-goal" data-case-sprint-field="sprintGoal">
                ${center.sprintGoals
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.sprintGoal === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-sprint-evidence">
              <span>证据状态</span>
              <select id="case-sprint-evidence" data-case-sprint-field="evidenceState">
                ${center.evidenceStates
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.evidenceState === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-sprint-release">
              <span>发布路线</span>
              <select id="case-sprint-release" data-case-sprint-field="releaseRoute">
                ${center.releaseRoutes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.releaseRoute === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-sprint-risk">
              <span>风险模式</span>
              <select id="case-sprint-risk" data-case-sprint-field="riskMode">
                ${center.riskModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.riskMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-sprint-review">
              <span>复盘窗口</span>
              <select id="case-sprint-review" data-case-sprint-field="reviewWindow">
                ${center.reviewWindows
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.reviewWindow === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel case-sprint-result" aria-live="polite">
          <div id="case-sprint-result"></div>
          <div class="hero-actions compact-actions case-sprint-actions">
            <button class="button secondary" type="button" id="case-sprint-copy">复制 Sprint Brief</button>
            <button class="button secondary" type="button" id="case-sprint-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="case-sprint-status"></span>
        </div>
      </article>
    `;
    setupCaseSprintCommandCenter(center);
  }

  function renderCaseFieldReplacementValidation() {
    const target = byId("case-field-replacement-content");
    if (!target || !data.cases || !data.cases.fieldReplacementValidation) return;
    const validation = data.cases.fieldReplacementValidation;
    target.innerHTML = `
      <div class="case-field-downloads">
        ${(validation.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="glass-panel standard-panel case-field-overview">
        <div class="standard-layout">
          <div>
            <p class="eyebrow">${validation.targetIndustry}</p>
            <h3>${validation.title}</h3>
            <p>${validation.description}</p>
            <div class="case-field-tags">
              ${tagRow([validation.baseCase, validation.targetSample, validation.readinessDecision])}
            </div>
          </div>
          <div class="case-field-metrics">
            ${validation.metrics
              .map(
                (metric) => `
                  <div>
                    <strong>${metric.value}</strong>
                    <span>${metric.label}</span>
                    <p>${metric.detail}</p>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </article>
      <div class="case-field-grid">
        ${validation.rows
          .map(
            (row) => `
              <article class="case-field-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Field Group</p>
                    <h3>${row.fieldGroup}</h3>
                  </div>
                  <span class="tag">${row.validationDecision}</span>
                </div>
                <div class="case-field-compare">
                  <div>
                    <strong>集成房屋母版字段</strong>
                    <p>${row.integratedHouseField}</p>
                  </div>
                  <div>
                    <strong>机械设备替换字段</strong>
                    <p>${row.machineryReplacement}</p>
                  </div>
                </div>
                <div class="case-field-detail-grid">
                  <div>
                    <strong>必须补齐证据</strong>
                    ${list(row.requiredEvidence)}
                  </div>
                  <div>
                    <strong>工具输出</strong>
                    <p>${row.toolOutput}</p>
                  </div>
                  <div>
                    <strong>页面去向</strong>
                    <div class="home-entry-link-list">
                      ${row.routePages.map((page) => `<a href="./${page}">${page}</a>`).join("")}
                    </div>
                  </div>
                  <div>
                    <strong>人工确认边界</strong>
                    <p>${row.manualBoundary}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="case-field-closeout">
        ${validation.closeout
          .map(
            (item) => `
              <div>
                <strong>${item.title}</strong>
                <p>${item.detail}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="tool-intake-boundary case-field-boundary">
        <strong>平台边界</strong>
        <p>${validation.manualBoundary}</p>
      </div>
    `;
  }

  function setupCaseSprintCommandCenter(center) {
    const fields = [...document.querySelectorAll("[data-case-sprint-field]")];
    const result = byId("case-sprint-result");
    const copy = byId("case-sprint-copy");
    const download = byId("case-sprint-download");
    const status = byId("case-sprint-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.caseSprintField] = field.value;
        return values;
      }, {});
    }

    function itemById(items, id) {
      return items.find((item) => item.id === id) || items[0];
    }

    function decisionFor(score, values) {
      if (values.evidenceState === "unknown-source" || values.releaseRoute === "internal-hold") {
        return center.decisions.find((item) => item.id === "hold") || center.decisions[center.decisions.length - 1];
      }
      if (values.riskMode === "regulated" && score < 72) {
        return center.decisions.find((item) => item.id === "hold") || center.decisions[center.decisions.length - 1];
      }
      return center.decisions.find((item) => score >= item.minScore) || center.decisions[center.decisions.length - 1];
    }

    function evaluate() {
      const values = readValues();
      const candidate = itemById(center.candidates, values.candidate);
      const sprintGoal = itemById(center.sprintGoals, values.sprintGoal);
      const evidenceState = itemById(center.evidenceStates, values.evidenceState);
      const releaseRoute = itemById(center.releaseRoutes, values.releaseRoute);
      const riskMode = itemById(center.riskModes, values.riskMode);
      const reviewWindow = itemById(center.reviewWindows, values.reviewWindow);
      const score = Math.max(0, Math.min(100, 56 + sprintGoal.score + evidenceState.score + releaseRoute.score + riskMode.penalty));
      const decision = decisionFor(score, values);
      const routePages = [...new Set([...candidate.basePages, ...releaseRoute.publishTarget.split("、").filter(Boolean)])];
      const downloadAssets = [...new Set([...candidate.downloads, ...(center.downloads || []).map((item) => item.href.replace("./downloads/", ""))])];
      const codexTasks = [...new Set([...candidate.codexTasks, "生成 Sprint Brief", "汇总复盘和下期回写任务"])];
      const manualGates = [...new Set([...candidate.manualGates, ...riskMode.reviewers.map((item) => `${item}审批`)])];
      const repairTasks = [
        ...candidate.missingEvidence.map((item) => `补证据：${item}`),
        evidenceState.repair,
        sprintGoal.gate,
        decision.releaseGate
      ];
      const codexPrompt = [
        `请基于“${candidate.label}”行业案例 Sprint 生成执行 Brief。`,
        `本期目标：${sprintGoal.label}；证据状态：${evidenceState.label}；发布路线：${releaseRoute.label}；风险模式：${riskMode.label}。`,
        "请输出页面路线、资料缺口、下载资产、Codex 可做事项、人工审批门槛、禁止承诺和复盘窗口。"
      ].join("\n");
      return { values, candidate, sprintGoal, evidenceState, releaseRoute, riskMode, reviewWindow, score, decision, routePages, downloadAssets, codexTasks, manualGates, repairTasks, codexPrompt };
    }

    function renderResult() {
      currentBrief = evaluate();
      const { candidate, sprintGoal, evidenceState, releaseRoute, riskMode, reviewWindow, score, decision, routePages, downloadAssets, codexTasks, manualGates, repairTasks, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.label}</p>
        <h3>${score} 分 · ${candidate.label}</h3>
        <p>${decision.summary}</p>
        <div class="case-sprint-meta">
          <div>
            <strong>${sprintGoal.label}</strong>
            <span>Sprint 目标</span>
          </div>
          <div>
            <strong>${evidenceState.label}</strong>
            <span>证据状态</span>
          </div>
          <div>
            <strong>${releaseRoute.label}</strong>
            <span>发布路线</span>
          </div>
          <div>
            <strong>${reviewWindow.label}</strong>
            <span>复盘窗口</span>
          </div>
        </div>
        <div class="detail-block">
          <strong>来源信号</strong>
          <p>${candidate.sourceSignal}</p>
        </div>
        <div class="case-sprint-grid">
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>数据文件</strong>
            ${tagRow(candidate.dataFiles)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${list(downloadAssets)}
          </div>
          <div>
            <strong>Codex 可做事项</strong>
            ${list(codexTasks)}
          </div>
          <div>
            <strong>人工审批门槛</strong>
            ${list(manualGates)}
          </div>
          <div>
            <strong>需要补齐</strong>
            ${list(repairTasks)}
          </div>
          <div>
            <strong>本期交付</strong>
            ${list(sprintGoal.deliverables)}
          </div>
          <div>
            <strong>发布验证</strong>
            ${list(releaseRoute.tests)}
          </div>
        </div>
        <div class="case-sprint-output">
          <div>
            <span>风险规则</span>
            <p>${riskMode.rule}</p>
          </div>
          <div>
            <span>下一步动作</span>
            <p>${candidate.nextAction} ${reviewWindow.closeout}</p>
          </div>
          <div>
            <span>Codex 扩写任务</span>
            <pre class="prompt-composer-text case-sprint-prompt">${escapeHtml(codexPrompt)}</pre>
          </div>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildCaseSprintMarkdown(currentBrief, center));
        setStatus("案例 Sprint Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(center.exportFilename || "industry-case-sprint-brief-output.md", buildCaseSprintMarkdown(currentBrief, center), "text/markdown;charset=utf-8");
      setStatus("Markdown 案例 Sprint Brief 已生成下载。");
    });
    renderResult();
  }

  function buildCaseSprintMarkdown(brief, center) {
    const { candidate, sprintGoal, evidenceState, releaseRoute, riskMode, reviewWindow, score, decision, routePages, downloadAssets, codexTasks, manualGates, repairTasks, codexPrompt } = brief;
    return `# 行业案例 Sprint Brief

- 候选行业：${candidate.label}
- 执行结论：${decision.label}
- 本期评分：${score}
- Sprint 目标：${sprintGoal.label}
- 证据状态：${evidenceState.label}
- 发布路线：${releaseRoute.label}
- 风险模式：${riskMode.label}
- 负责人：${candidate.owner}
- 复盘窗口：${reviewWindow.label}

## 来源信号
${candidate.sourceSignal}

## 页面路线
${routePages.map((item) => `- ${item}`).join("\n")}

## 数据文件
${candidate.dataFiles.map((item) => `- ${item}`).join("\n")}

## 下载资产
${downloadAssets.map((item) => `- ${item}`).join("\n")}

## 本期交付
${sprintGoal.deliverables.map((item) => `- ${item}`).join("\n")}

## Codex 可辅助事项
${codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工审批门槛
${manualGates.map((item) => `- ${item}`).join("\n")}

## 需要补齐
${repairTasks.map((item) => `- ${item}`).join("\n")}

## 发布验证
${releaseRoute.tests.map((item) => `- ${item}`).join("\n")}

## 下一步动作
${candidate.nextAction}
${reviewWindow.cadence}
${reviewWindow.closeout}

## 风险规则
${riskMode.rule}

## Codex 扩写任务
${codexPrompt}

## 运营规则
${(center.operatingRules || []).map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderCasePublicationRouter() {
    const target = byId("case-publication-router-content");
    if (!target || !data.cases || !data.cases.casePublicationRouter) return;
    const router = data.cases.casePublicationRouter;
    const defaults = router.defaults || {};
    target.innerHTML = `
      <div class="case-publication-downloads">
        ${(router.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card case-publication-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Case Publication Workbench</p>
          <h3>${router.title}</h3>
          <p>${router.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="case-publication-source">
              <span>案例资产</span>
              <select id="case-publication-source" data-case-publication-field="sourceAsset">
                ${router.sourceAssets
                  .map((item) => `<option value="${item.id}"${defaults.sourceAsset === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-publication-mode">
              <span>发布方式</span>
              <select id="case-publication-mode" data-case-publication-field="publicationMode">
                ${router.publicationModes
                  .map((item) => `<option value="${item.id}"${defaults.publicationMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-publication-evidence">
              <span>证据等级</span>
              <select id="case-publication-evidence" data-case-publication-field="evidenceLevel">
                ${router.evidenceLevels
                  .map((item) => `<option value="${item.id}"${defaults.evidenceLevel === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-publication-authorization">
              <span>授权范围</span>
              <select id="case-publication-authorization" data-case-publication-field="authorizationScope">
                ${router.authorizationScopes
                  .map((item) => `<option value="${item.id}"${defaults.authorizationScope === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-publication-destination">
              <span>平台去向</span>
              <select id="case-publication-destination" data-case-publication-field="platformDestination">
                ${router.platformDestinations
                  .map((item) => `<option value="${item.id}"${defaults.platformDestination === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-publication-risk">
              <span>风险门槛</span>
              <select id="case-publication-risk" data-case-publication-field="riskGate">
                ${router.riskGates
                  .map((item) => `<option value="${item.id}"${defaults.riskGate === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="case-publication-review">
              <span>复盘窗口</span>
              <select id="case-publication-review" data-case-publication-field="reviewWindow">
                ${router.reviewWindows
                  .map((item) => `<option value="${item.id}"${defaults.reviewWindow === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel case-publication-result" aria-live="polite">
          <div id="case-publication-result"></div>
          <div class="hero-actions compact-actions case-publication-actions">
            <button class="button secondary" type="button" id="case-publication-copy">复制发布 Brief</button>
            <button class="button secondary" type="button" id="case-publication-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="case-publication-status"></span>
        </div>
      </article>
    `;
    setupCasePublicationRouter(router);
  }

  function setupCasePublicationRouter(router) {
    const fields = [...document.querySelectorAll("[data-case-publication-field]")];
    const result = byId("case-publication-result");
    const copy = byId("case-publication-copy");
    const download = byId("case-publication-download");
    const status = byId("case-publication-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.casePublicationField] = field.value;
        return values;
      }, {});
    }

    function itemById(items, id) {
      return items.find((item) => item.id === id) || items[0];
    }

    function decisionFor(score, values) {
      if (values.evidenceLevel === "unknown-source" || values.authorizationScope === "no-authorization") {
        return router.decisions.find((item) => item.id === "hold") || router.decisions[router.decisions.length - 1];
      }
      if (values.publicationMode === "internal-archive" || values.platformDestination === "internal-governance") {
        return router.decisions.find((item) => (score >= 38 ? item.id === "repair" : item.id === "hold")) || router.decisions[router.decisions.length - 1];
      }
      if (values.riskGate === "regulated" && (values.publicationMode !== "internal-archive" || values.platformDestination !== "internal-governance")) {
        return router.decisions.find((item) => item.id === "hold") || router.decisions[router.decisions.length - 1];
      }
      if (values.authorizationScope === "enterprise-private" && values.platformDestination !== "enterprise-resource") {
        return router.decisions.find((item) => item.id === "repair") || router.decisions[router.decisions.length - 1];
      }
      if (values.authorizationScope === "classroom-internal" && ["full-case", "resource-pack"].includes(values.publicationMode)) {
        return router.decisions.find((item) => item.id === "restricted") || router.decisions[router.decisions.length - 1];
      }
      return router.decisions.find((item) => score >= item.minScore) || router.decisions[router.decisions.length - 1];
    }

    function evaluate() {
      const values = readValues();
      const sourceAsset = itemById(router.sourceAssets, values.sourceAsset);
      const publicationMode = itemById(router.publicationModes, values.publicationMode);
      const evidenceLevel = itemById(router.evidenceLevels, values.evidenceLevel);
      const authorizationScope = itemById(router.authorizationScopes, values.authorizationScope);
      const platformDestination = itemById(router.platformDestinations, values.platformDestination);
      const riskGate = itemById(router.riskGates, values.riskGate);
      const reviewWindow = itemById(router.reviewWindows, values.reviewWindow);
      const score = Math.max(0, Math.min(100, 52 + publicationMode.score + evidenceLevel.score + authorizationScope.score + platformDestination.score + riskGate.penalty));
      const decision = decisionFor(score, values);
      const routePages = [...new Set([...sourceAsset.basePages, ...publicationMode.outputPages, ...platformDestination.pageRoutes])];
      const downloadAssets = [...new Set([...sourceAsset.sourceDownloads, ...(router.downloads || []).map((item) => item.href.replace("./downloads/", ""))])];
      const codexTasks = [...new Set([...sourceAsset.codexTasks, "生成案例发布 Brief", "整理页面回写清单", "输出下次复盘问题"])];
      const manualGates = [...new Set([...sourceAsset.manualGates, ...riskGate.reviewers.map((item) => `${item}审批`)])];
      const noGoClaims = [...new Set([...sourceAsset.noGoClaims, authorizationScope.prohibitedUse, publicationMode.gate, decision.releaseGate])];
      const repairTasks = [
        evidenceLevel.repair,
        `确认授权范围：${authorizationScope.permittedUse}`,
        `完成发布验证：${platformDestination.validation.join("、")}`,
        reviewWindow.closeout
      ];
      const writebackTargets = [...new Set([...platformDestination.writeback, "README", "资源中心下载索引", "版本维护日志"])];
      const codexPrompt = [
        `请基于“${sourceAsset.label}”生成行业案例发布 Brief。`,
        `发布方式：${publicationMode.label}；证据等级：${evidenceLevel.label}；授权范围：${authorizationScope.label}；平台去向：${platformDestination.label}。`,
        "请输出发布范围、页面路线、下载资产、人工审批、禁止承诺、版本回写和复盘窗口。"
      ].join("\n");
      return {
        values,
        sourceAsset,
        publicationMode,
        evidenceLevel,
        authorizationScope,
        platformDestination,
        riskGate,
        reviewWindow,
        score,
        decision,
        routePages,
        downloadAssets,
        codexTasks,
        manualGates,
        noGoClaims,
        repairTasks,
        writebackTargets,
        codexPrompt
      };
    }

    function renderResult() {
      currentBrief = evaluate();
      const { sourceAsset, publicationMode, evidenceLevel, authorizationScope, platformDestination, riskGate, reviewWindow, score, decision, routePages, downloadAssets, codexTasks, manualGates, noGoClaims, repairTasks, writebackTargets, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.label}</p>
        <h3>${score} 分 · ${sourceAsset.label}</h3>
        <p>${decision.summary}</p>
        <div class="case-publication-meta">
          <div>
            <strong>${publicationMode.label}</strong>
            <span>发布方式</span>
          </div>
          <div>
            <strong>${evidenceLevel.label}</strong>
            <span>证据等级</span>
          </div>
          <div>
            <strong>${authorizationScope.label}</strong>
            <span>授权范围</span>
          </div>
          <div>
            <strong>${reviewWindow.label}</strong>
            <span>复盘窗口</span>
          </div>
        </div>
        <div class="detail-block">
          <strong>案例 Sprint 来源</strong>
          <p>${sourceAsset.sprintSource}：${sourceAsset.evidenceSignal}</p>
        </div>
        <div class="case-publication-grid">
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>数据文件</strong>
            ${tagRow(sourceAsset.dataFiles)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${list(downloadAssets)}
          </div>
          <div>
            <strong>本期交付物</strong>
            ${list(publicationMode.deliverables)}
          </div>
          <div>
            <strong>Codex 可做事项</strong>
            ${list(codexTasks)}
          </div>
          <div>
            <strong>人工审批门槛</strong>
            ${list(manualGates)}
          </div>
          <div>
            <strong>禁止承诺</strong>
            ${list(noGoClaims)}
          </div>
          <div>
            <strong>版本回写</strong>
            ${list(writebackTargets)}
          </div>
        </div>
        <div class="case-publication-output">
          <div>
            <span>风险规则</span>
            <p>${riskGate.rule}</p>
          </div>
          <div>
            <span>补齐和复盘</span>
            ${list(repairTasks)}
          </div>
          <div>
            <span>下一步动作</span>
            <p>${sourceAsset.nextAction} ${reviewWindow.cadence}</p>
          </div>
          <div>
            <span>Codex 扩写任务</span>
            <pre class="prompt-composer-text case-publication-prompt">${escapeHtml(codexPrompt)}</pre>
          </div>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildCasePublicationMarkdown(currentBrief, router));
        setStatus("案例发布 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(router.exportFilename || "industry-case-publication-brief-output.md", buildCasePublicationMarkdown(currentBrief, router), "text/markdown;charset=utf-8");
      setStatus("Markdown 案例发布 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildCasePublicationMarkdown(brief, router) {
    const { sourceAsset, publicationMode, evidenceLevel, authorizationScope, platformDestination, riskGate, reviewWindow, score, decision, routePages, downloadAssets, codexTasks, manualGates, noGoClaims, repairTasks, writebackTargets, codexPrompt } = brief;
    return `# 行业案例发布 Brief

- 案例资产：${sourceAsset.label}
- 发布结论：${decision.label}
- 本期评分：${score}
- 发布方式：${publicationMode.label}
- 证据等级：${evidenceLevel.label}
- 授权范围：${authorizationScope.label}
- 平台去向：${platformDestination.label}
- 风险门槛：${riskGate.label}
- 负责人：${sourceAsset.owner}
- 复盘窗口：${reviewWindow.label}

## Sprint 来源
${sourceAsset.sprintSource}

## 当前证据
${sourceAsset.evidenceSignal}

## 页面路线
${routePages.map((item) => `- ${item}`).join("\n")}

## 数据文件
${sourceAsset.dataFiles.map((item) => `- ${item}`).join("\n")}

## 下载资产
${downloadAssets.map((item) => `- ${item}`).join("\n")}

## 本期交付物
${publicationMode.deliverables.map((item) => `- ${item}`).join("\n")}

## Codex 可辅助事项
${codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工审批门槛
${manualGates.map((item) => `- ${item}`).join("\n")}

## 允许使用范围
${authorizationScope.permittedUse}

## 禁止承诺
${noGoClaims.map((item) => `- ${item}`).join("\n")}

## 版本回写
${writebackTargets.map((item) => `- ${item}`).join("\n")}

## 补齐和复盘
${repairTasks.map((item) => `- ${item}`).join("\n")}

## 下一步动作
${sourceAsset.nextAction}
${reviewWindow.cadence}
${reviewWindow.closeout}

## 风险规则
${riskGate.rule}

## Codex 扩写任务
${codexPrompt}

## 运营规则
${(router.operatingRules || []).map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderCaseReplicationKit() {
    const target = byId("case-replication-kit");
    if (!target || !data.cases || !data.cases.replicationKit) return;
    const kit = data.cases.replicationKit;
    target.innerHTML = `
      <article class="glass-panel standard-panel case-replication-card">
        <div class="standard-layout">
          <div>
            <p class="eyebrow">Case Production Rule</p>
            <h3>${kit.title}</h3>
            <p>${kit.description}</p>
            <div class="download-row">
              ${kit.downloads.map((download) => downloadBlock(download)).join("")}
            </div>
          </div>
          <div>
            <strong>质量门槛</strong>
            ${list(kit.qualityGates)}
          </div>
        </div>
      </article>
      <div class="case-replication-grid">
        <div class="case-intake-flow">
          ${kit.intakeFlow
            .map(
              (step) => `
                <article class="lesson-step-card">
                  <div class="lesson-step-head">
                    <span class="step-number">${step.stage}</span>
                    <h3>${step.title}</h3>
                  </div>
                  <div class="lesson-step-grid two-column">
                    <div>
                      <strong>负责人</strong>
                      <p>${step.owner}</p>
                    </div>
                    <div>
                      <strong>输出结果</strong>
                      <p>${step.output}</p>
                    </div>
                    <div class="span-2">
                      <strong>边界</strong>
                      <p>${step.boundary}</p>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="table-shell case-field-shell">
          <table class="data-table">
            <thead>
              <tr>
                <th>字段</th>
                <th>集成房屋样例</th>
                <th>新案例要求</th>
                <th>联动模块</th>
              </tr>
            </thead>
            <tbody>
              ${kit.fieldMatrix
                .map(
                  (row) => `
                    <tr>
                      <td>${row.field}</td>
                      <td>${row.integratedHouseExample}</td>
                      <td>${row.newCaseRequirement}</td>
                      <td>${row.linkedModule}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderCasePlatformLinks() {
    const target = byId("case-platform-links");
    if (!target || !data.cases) return;
    target.innerHTML = data.cases.platformLinks
      .map(
        (item) => `
          <article class="info-card">
            <h3>${item.title}</h3>
            <p>${item.value}</p>
            <div class="hero-actions compact-actions">
              <a class="button secondary" href="${item.href}">进入模块</a>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderCaseExpansionRoadmap() {
    const target = byId("case-expansion-roadmap");
    if (!target || !data.cases) return;
    target.innerHTML = data.cases.expansionRoadmap
      .map(
        (item) => `
          <article class="timeline-card">
            <p class="eyebrow">${item.phase}</p>
            <h3>${item.title}</h3>
            <p>${item.focus}</p>
          </article>
        `
      )
      .join("");
  }

  function renderTools() {
    const target = byId("tool-library");
    if (!target) return;
    target.innerHTML = data.tools
      .map(
        (tool) => `
          <article class="info-card">
            <p class="eyebrow">${tool.id}</p>
            <h3>${tool.title}</h3>
            <p>${tool.value}</p>
            ${tagRow([tool.stage, ...tool.relatedTracks])}
            ${tool.inputs ? `<div class="detail-block"><strong>输入</strong>${list(tool.inputs)}</div>` : ""}
            ${tool.outputs ? `<div class="detail-block"><strong>输出</strong>${list(tool.outputs)}</div>` : ""}
          </article>
        `
      )
      .join("");
  }

  function renderToolBuildSpecs() {
    const target = byId("tool-build-specs");
    if (!target || !data.toolBuildSpecs) return;
    const specs = data.toolBuildSpecs;
    target.innerHTML = `
      <article class="glass-panel standard-panel tool-spec-overview">
        <div class="standard-layout">
          <div>
            <p class="eyebrow">Tool Production Rule</p>
            <h3>${specs.overview.title}</h3>
            <p>${specs.overview.description}</p>
            <div class="download-row">
              ${specs.overview.downloads.map((download) => downloadBlock(download)).join("")}
            </div>
          </div>
          <div>
            <strong>开发前检查</strong>
            ${list(specs.overview.rules)}
          </div>
        </div>
      </article>
      <div class="tool-spec-list">
        ${specs.specs
          .map(
            (spec) => `
              <article class="tool-spec-card">
                <div class="tool-spec-head">
                  <div>
                    <p class="eyebrow">${spec.id}</p>
                    <h3>${spec.title}</h3>
                    <p>${spec.scenario}</p>
                  </div>
                  ${tagRow([spec.priority, spec.status])}
                </div>
                <div class="tool-spec-meta">
                  <div>
                    <strong>适用用户</strong>
                    ${list(spec.users)}
                  </div>
                  <div>
                    <strong>关联课程</strong>
                    ${tagRow(spec.courseLinks)}
                  </div>
                </div>
                <div class="tool-spec-grid">
                  <div>
                    <strong>输入字段</strong>
                    ${list(spec.inputs)}
                  </div>
                  <div>
                    <strong>核心逻辑</strong>
                    ${list(spec.logic)}
                  </div>
                  <div>
                    <strong>输出结果</strong>
                    ${list(spec.outputs)}
                  </div>
                  <div>
                    <strong>验收标准</strong>
                    ${list(spec.acceptance)}
                  </div>
                  <div class="span-2">
                    <strong>人工确认边界</strong>
                    ${list(spec.manualBoundaries)}
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderToolLaunchBoard() {
    const target = byId("tool-launch-board");
    if (!target || !data.toolLaunchBoard) return;
    const downloads = data.toolLaunchDownloads || [];
    target.innerHTML = `
      <div class="tool-launch-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="tool-launch-grid">
        ${data.toolLaunchBoard
          .map(
            (item) => `
              <article class="tool-launch-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Tool Stage ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.toolFocus}</span>
                </div>
                <div class="tool-launch-detail-grid">
                  <div>
                    <strong>业务触发</strong>
                    <p>${item.businessTrigger}</p>
                  </div>
                  <div>
                    <strong>输入资料</strong>
                    <p>${item.inputs}</p>
                  </div>
                  <div>
                    <strong>交付物</strong>
                    <p>${item.deliverable}</p>
                  </div>
                  <div>
                    <strong>验收标准</strong>
                    <p>${item.acceptance}</p>
                  </div>
                </div>
                <div class="lesson-step-grid two-column tool-launch-boundary">
                  <div>
                    <strong>人工边界</strong>
                    <p>${item.manualBoundary}</p>
                  </div>
                  <div>
                    <strong>负责角色</strong>
                    <p>${item.nextOwner}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderToolClassroomAcceptanceBoard() {
    const target = byId("tool-classroom-acceptance-content");
    if (!target || !data.toolClassroomAcceptanceBoard) return;
    const downloads = data.toolClassroomAcceptanceDownloads || [];
    target.innerHTML = `
      <div class="tool-launch-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="tool-acceptance-grid">
        ${data.toolClassroomAcceptanceBoard
          .map(
            (item) => `
              <article class="tool-acceptance-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Acceptance Gate</p>
                    <h3>${item.tool}</h3>
                  </div>
                  <span class="tag">${item.stage}</span>
                </div>
                <div class="tool-acceptance-detail-grid">
                  <div>
                    <strong>证据来源</strong>
                    <p>${item.sourceEvidence}</p>
                  </div>
                  <div>
                    <strong>课堂验收</strong>
                    <p>${item.classroomGate}</p>
                  </div>
                  <div>
                    <strong>作业验收</strong>
                    <p>${item.homeworkGate}</p>
                  </div>
                  <div>
                    <strong>导出验收</strong>
                    <p>${item.exportGate}</p>
                  </div>
                </div>
                <div class="lesson-step-grid two-column tool-acceptance-route">
                  <div>
                    <strong>下一去向</strong>
                    <p>${item.nextRoute}</p>
                  </div>
                  <div>
                    <strong>版本回写</strong>
                    <p>${item.writeback}</p>
                  </div>
                </div>
                <div class="tool-intake-boundary">
                  <strong>人工确认边界</strong>
                  <p>${item.manualBoundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderToolSampleValidationBoard() {
    const target = byId("tool-sample-validation-content");
    if (!target || !data.toolSampleValidationBoard) return;
    const downloads = data.toolSampleValidationDownloads || [];
    target.innerHTML = `
      <div class="tool-sample-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="tool-sample-grid">
        ${data.toolSampleValidationBoard
          .map(
            (item) => `
              <article class="tool-sample-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Replacement Test</p>
                    <h3>${item.tool}</h3>
                  </div>
                  <span class="tag">${item.nextDecision}</span>
                </div>
                <div class="tool-sample-meta">
                  <div>
                    <strong>样例来源</strong>
                    <p>${item.sampleSource}</p>
                  </div>
                  <div>
                    <strong>验收闸口</strong>
                    <p>${item.validationGate}</p>
                  </div>
                </div>
                <div class="tool-sample-detail-grid">
                  <div>
                    <strong>必须具备证据</strong>
                    ${list(item.evidenceNeeded)}
                  </div>
                  <div>
                    <strong>输出质量检查</strong>
                    <p>${item.outputCheck}</p>
                  </div>
                  <div>
                    <strong>页面去向</strong>
                    <div class="home-entry-link-list">
                      ${item.routePages.map((page) => `<a href="./${page}">${page}</a>`).join("")}
                    </div>
                  </div>
                  <div>
                    <strong>版本回写</strong>
                    <p>${item.writebackAction}</p>
                  </div>
                </div>
                <div class="tool-sample-boundary">
                  <strong>人工确认边界</strong>
                  <p>${item.riskBoundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderToolIntakeBoard() {
    const target = byId("tool-intake-board");
    if (!target || !data.toolIntakeBoard) return;
    const downloads = data.toolIntakeDownloads || [];
    target.innerHTML = `
      <div class="tool-intake-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="tool-intake-grid">
        ${data.toolIntakeBoard
          .map(
            (item) => `
              <article class="tool-intake-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Demand ${item.rank}</p>
                    <h3>${item.tool}</h3>
                  </div>
                  <span class="tag">${item.nextSprint}</span>
                </div>
                <div class="tool-intake-meta">
                  <div>
                    <strong>需求信号</strong>
                    <p>${item.demandSignal}</p>
                  </div>
                  <div>
                    <strong>教学证据</strong>
                    <p>${item.teachingEvidence}</p>
                  </div>
                </div>
                <div class="tool-intake-detail-grid">
                  <div>
                    <strong>版本范围</strong>
                    <p>${item.buildScope}</p>
                  </div>
                  <div>
                    <strong>可复用输出</strong>
                    <p>${item.reusableOutput}</p>
                  </div>
                  <div>
                    <strong>排期决策</strong>
                    <p>${item.launchDecision}</p>
                  </div>
                  <div>
                    <strong>负责角色</strong>
                    <p>${item.owner}</p>
                  </div>
                </div>
                <div class="tool-intake-boundary">
                  <strong>人工确认边界</strong>
                  <p>${item.manualBoundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderToolProductizationBriefBuilder() {
    const target = byId("tool-productization-brief-builder");
    if (!target || !data.toolProductizationBriefBuilder) return;
    const builder = data.toolProductizationBriefBuilder;
    const defaults = builder.defaults || {};
    target.innerHTML = `
      <div class="tool-productization-downloads">
        ${(builder.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card tool-productization-brief-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Commercial Tool Brief</p>
          <h3>${builder.title}</h3>
          <p>${builder.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="tool-brief-toolCandidate">
              <span>工具候选</span>
              <select id="tool-brief-toolCandidate" data-tool-brief-field="toolCandidate">
                ${builder.toolCandidates
                  .map((item) => `<option value="${item.id}"${defaults.toolCandidate === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="tool-brief-sourceSignal">
              <span>需求来源</span>
              <select id="tool-brief-sourceSignal" data-tool-brief-field="sourceSignal">
                ${builder.sourceSignals
                  .map((item) => `<option value="${item.id}"${defaults.sourceSignal === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="tool-brief-maturityLevel">
              <span>成熟度</span>
              <select id="tool-brief-maturityLevel" data-tool-brief-field="maturityLevel">
                ${builder.maturityLevels
                  .map((item) => `<option value="${item.id}"${defaults.maturityLevel === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="tool-brief-userRole">
              <span>目标用户</span>
              <select id="tool-brief-userRole" data-tool-brief-field="userRole">
                ${builder.userRoles
                  .map((item) => `<option value="${item.id}"${defaults.userRole === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="tool-brief-deliveryScope">
              <span>交付范围</span>
              <select id="tool-brief-deliveryScope" data-tool-brief-field="deliveryScope">
                ${builder.deliveryScopes
                  .map((item) => `<option value="${item.id}"${defaults.deliveryScope === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="tool-brief-riskLevel">
              <span>风险等级</span>
              <select id="tool-brief-riskLevel" data-tool-brief-field="riskLevel">
                ${builder.riskLevels
                  .map((item) => `<option value="${item.id}"${defaults.riskLevel === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel tool-productization-result" aria-live="polite">
          <div id="tool-brief-result"></div>
          <div class="hero-actions compact-actions tool-productization-actions">
            <button class="button secondary" type="button" id="tool-brief-copy">复制 Brief</button>
            <button class="button secondary" type="button" id="tool-brief-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="tool-brief-status"></span>
        </div>
      </article>
    `;
    setupToolProductizationBriefBuilder(builder);
  }

  function setupToolProductizationBriefBuilder(builder) {
    const fields = [...document.querySelectorAll("[data-tool-brief-field]")];
    const result = byId("tool-brief-result");
    const copy = byId("tool-brief-copy");
    const download = byId("tool-brief-download");
    const status = byId("tool-brief-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.toolBriefField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decideProductization(score, maturity, scope, risk) {
      const requiresApproval = risk.id === "high-compliance" || risk.id === "enterprise-private";
      if (maturity.id === "idea-only" || score < 55) {
        return {
          stage: "Stage 01",
          label: "先补证据，不进入开发",
          action: "先补齐业务样例、字段、输出格式和人工确认人，再评估是否产品化。",
          nextSprint: "安排一次课程、业务和产品评审。",
          gate: "不进入交互开发"
        };
      }
      if (scope.id === "template-pack") {
        return {
          stage: scope.stage,
          label: "先做模板包",
          action: "优先沉淀作业模板、字段表、评分清单和边界说明，用于资源下载或正式课作业。",
          nextSprint: "验证学员能否用自己的脱敏资料完成替换。",
          gate: "通过作业验收后再评估原型"
        };
      }
      if (scope.id === "static-mockup") {
        return {
          stage: scope.stage,
          label: "先做静态原型",
          action: "用静态工具界面验证老师能否讲清输入、输出、风险边界和商业价值。",
          nextSprint: "进行一次试讲和一次招生展示验证。",
          gate: "通过试讲后再做轻交互"
        };
      }
      if (scope.id === "enterprise-custom") {
        return {
          stage: scope.stage,
          label: requiresApproval ? "企业项目需先审批" : "可进入企业项目评估",
          action: "先确认企业数据授权、岗位责任、交付范围和验收证据，再进入定制工具或 SOP 项目。",
          nextSprint: "生成企业 scope brief 并安排交付评审。",
          gate: "签署范围和边界后才能报价"
        };
      }
      return {
        stage: scope.stage,
        label: requiresApproval ? "轻交互开发前需审批" : "进入轻交互开发",
        action: "可以进入可控输入、即时输出、复制导出、移动端适配和上线验收。",
        nextSprint: requiresApproval ? "先补专业审批和数据脱敏检查，再排开发。" : "排入下一期工具开发 sprint。",
        gate: requiresApproval ? "专业岗位审批通过后上线" : "通过桌面/移动端验收后上线"
      };
    }

    function buildBrief(values) {
      const toolCandidate = pick(builder.toolCandidates, values.toolCandidate);
      const sourceSignal = pick(builder.sourceSignals, values.sourceSignal);
      const maturityLevel = pick(builder.maturityLevels, values.maturityLevel);
      const userRole = pick(builder.userRoles, values.userRole);
      const deliveryScope = pick(builder.deliveryScopes, values.deliveryScope);
      const riskLevel = pick(builder.riskLevels, values.riskLevel);
      const score = Math.max(
        0,
        Math.min(100, toolCandidate.priorityScore + sourceSignal.evidenceScore + maturityLevel.readinessScore + deliveryScope.valueScore - riskLevel.riskPenalty)
      );
      const decision = decideProductization(score, maturityLevel, deliveryScope, riskLevel);
      const routePages = [
        ...new Set([
          ...toolCandidate.routePages,
          ...sourceSignal.routePages,
          ...userRole.routePages,
          ...deliveryScope.routePages,
          "playbook.html"
        ])
      ];
      const primaryPages = routePages.slice(0, 6);
      const runbook = [
        { stage: "01", title: "确认业务场景", detail: `${toolCandidate.workflow}：${toolCandidate.scenario}` },
        { stage: "02", title: "核对需求证据", detail: `${sourceSignal.label}：${sourceSignal.evidence} ${sourceSignal.proof}` },
        { stage: "03", title: "锁定交付范围", detail: `${deliveryScope.label}：${deliveryScope.deliverables.join("、")}` },
        { stage: "04", title: "拆分 Codex 任务", detail: toolCandidate.codexTasks.join("；") },
        { stage: "05", title: "设置人工审批", detail: `${riskLevel.riskTag}：${riskLevel.manualGate}` },
        { stage: "06", title: "承接商业入口", detail: `${deliveryScope.commercialRoute}。下一步：${decision.nextSprint}` }
      ];
      const codexPrompt = `请根据以下信息生成一份外贸AI工具产品化Brief：工具为${toolCandidate.label}，来源信号为${sourceSignal.label}，成熟度为${maturityLevel.label}，目标用户为${userRole.label}，交付范围为${deliveryScope.label}，风险等级为${riskLevel.label}。必须包含业务场景、输入字段、输出结果、Codex可做事项、必须人工确认事项、课程页面证据、商业入口、上线验收标准、下一步sprint和禁止承诺边界。`;
      return { toolCandidate, sourceSignal, maturityLevel, userRole, deliveryScope, riskLevel, score, decision, routePages, primaryPages, runbook, codexPrompt };
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const {
        toolCandidate,
        sourceSignal,
        maturityLevel,
        userRole,
        deliveryScope,
        riskLevel,
        score,
        decision,
        routePages,
        primaryPages,
        runbook,
        codexPrompt
      } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.stage} · ${riskLevel.riskTag}</p>
        <h3>${toolCandidate.label}</h3>
        <p>${decision.action}</p>
        <div class="tool-productization-meta">
          <div>
            <strong>${score}</strong>
            <span>产品化分数</span>
          </div>
          <div>
            <strong>${maturityLevel.readiness}</strong>
            <span>成熟度判断</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>建议阶段</span>
          </div>
        </div>
        <div class="tool-productization-grid">
          <div>
            <strong>业务场景</strong>
            <p>${toolCandidate.scenario}</p>
          </div>
          <div>
            <strong>需求证据</strong>
            <p>${sourceSignal.evidence}</p>
          </div>
          <div>
            <strong>目标用户</strong>
            <p>${userRole.label}：${userRole.pain}</p>
          </div>
          <div>
            <strong>商业入口</strong>
            <p>${deliveryScope.commercialRoute}</p>
          </div>
          <div>
            <strong>输入字段</strong>
            ${list(toolCandidate.inputs)}
          </div>
          <div>
            <strong>输出结果</strong>
            ${list(toolCandidate.outputs)}
          </div>
          <div>
            <strong>交付物</strong>
            ${list(deliveryScope.deliverables)}
          </div>
          <div>
            <strong>验收标准</strong>
            <p>${deliveryScope.acceptance}</p>
          </div>
          <div>
            <strong>Codex 可做事项</strong>
            ${list(toolCandidate.codexTasks)}
          </div>
          <div>
            <strong>必须人工确认</strong>
            ${list([...toolCandidate.manualChecks, riskLevel.manualGate])}
          </div>
          <div>
            <strong>页面证据路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>优先打开</strong>
            <div class="home-entry-link-list">
              ${primaryPages.map((page) => `<a href="./${page}">${page}</a>`).join("")}
            </div>
          </div>
        </div>
        <div class="tool-productization-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>开发前闸口</strong>
          <p>${decision.gate}。${maturityLevel.requirement} ${maturityLevel.repairAction}</p>
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>宣传和交付边界</strong>
          <p>${riskLevel.boundary} ${riskLevel.dataRule} 不承诺自动成交、自动报价、自动合规或替代企业审批。</p>
        </div>
      `;
      setStatus("");
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildToolProductizationBriefMarkdown(currentBrief, builder));
        setStatus("工具产品化 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(builder.exportFilename || "tool-productization-brief-output.md", buildToolProductizationBriefMarkdown(currentBrief, builder), "text/markdown;charset=utf-8");
      setStatus("Markdown 工具产品化 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildToolProductizationBriefMarkdown(brief, builder) {
    const { toolCandidate, sourceSignal, maturityLevel, userRole, deliveryScope, riskLevel, score, decision, routePages, primaryPages, runbook, codexPrompt } = brief;
    return `# 工具产品化 Brief

- 工具候选：${toolCandidate.label}
- 产品化分数：${score}
- 建议阶段：${decision.stage}（${decision.label}）
- 需求来源：${sourceSignal.label}
- 成熟度：${maturityLevel.label}（${maturityLevel.readiness}）
- 目标用户：${userRole.label}
- 交付范围：${deliveryScope.label}
- 风险等级：${riskLevel.label}

## 业务场景
${toolCandidate.scenario}

## 需求证据
${sourceSignal.evidence}
${sourceSignal.proof}

## 页面证据路线
${routePages.map((page) => `- ${page}`).join("\n")}

## 优先打开
${primaryPages.map((page) => `- ${page}`).join("\n")}

## 输入字段
${toolCandidate.inputs.map((item) => `- ${item}`).join("\n")}

## 输出结果
${toolCandidate.outputs.map((item) => `- ${item}`).join("\n")}

## Codex 可做事项
${toolCandidate.codexTasks.map((item) => `- ${item}`).join("\n")}

## 必须人工确认
${[...toolCandidate.manualChecks, riskLevel.manualGate].map((item) => `- ${item}`).join("\n")}

## 交付范围
${deliveryScope.deliverables.map((item) => `- ${item}`).join("\n")}

## 商业入口
${deliveryScope.commercialRoute}

## 上线验收
${deliveryScope.acceptance}

## 下一步 Sprint
${decision.nextSprint}
${decision.gate}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 平台商业化规则
${(builder.commercializationRules || []).map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 宣传和交付边界
${riskLevel.boundary}
${riskLevel.dataRule}
不承诺自动成交、自动报价、自动合规或替代企业审批。`;
  }

  function renderInteractiveToolDemo() {
    const target = byId("tool-interactive-demo");
    if (!target || !data.toolDemos) return;
    const productDemo = data.toolDemos.productProfileDesk;
    const leadDemo = data.toolDemos.leadFollowupDesk;
    const inquiryDemo = data.toolDemos.inquiryAnalyzer;
    const quotationDemo = data.toolDemos.quotationCalculator;
    const orderDemo = data.toolDemos.orderTrackingBoard;
    const documentDemo = data.toolDemos.documentChecker;
    const paymentDemo = data.toolDemos.paymentRiskMatrix;
    target.innerHTML = `
      <div class="interactive-tool-stack">
        <article class="interactive-tool-card" id="product-demo-card">
          <div class="interactive-tool-grid">
            <div>
              <p class="eyebrow">Product Profile</p>
              <h3>${productDemo.title}</h3>
              <p>${productDemo.description}</p>
              <div class="detail-block">
                <strong>样例产品</strong>
                <p>${productDemo.sampleProfile.product} · ${productDemo.sampleProfile.classroomUse}</p>
              </div>
              <div id="product-demo-input" class="table-shell compact-table product-demo-table"></div>
              <div class="hero-actions compact-actions">
                <button class="button secondary" type="button" id="product-demo-reset">恢复样例资料</button>
                <button class="button primary" type="button" id="product-demo-run">生成资料工作台</button>
                <button class="button secondary" type="button" id="product-demo-gap" aria-pressed="false">只看缺失/待确认</button>
                <button class="button secondary" type="button" id="product-demo-copy">复制补资料清单</button>
                <button class="button secondary" type="button" id="product-demo-download">下载产品 Markdown</button>
              </div>
              <span id="product-demo-status" class="tool-action-status" aria-live="polite"></span>
              ${downloadBlock(productDemo.homeworkTemplate)}
            </div>
            <div id="product-demo-output" class="interactive-output" aria-live="polite"></div>
          </div>
        </article>
        <article class="interactive-tool-card" id="lead-demo-card">
          <div class="interactive-tool-grid">
            <div>
              <p class="eyebrow">Lead Follow-up</p>
              <h3>${leadDemo.title}</h3>
              <p>${leadDemo.description}</p>
              <div id="lead-demo-input" class="table-shell compact-table lead-demo-table"></div>
              <div class="hero-actions compact-actions">
                <button class="button secondary" type="button" id="lead-demo-reset">恢复样例线索</button>
                <button class="button primary" type="button" id="lead-demo-run">生成跟进计划</button>
                <button class="button secondary" type="button" id="lead-demo-high" aria-pressed="false">只看 A 级线索</button>
                <button class="button secondary" type="button" id="lead-demo-copy">复制跟进计划</button>
                <button class="button secondary" type="button" id="lead-demo-download">下载线索 Markdown</button>
              </div>
              <span id="lead-demo-status" class="tool-action-status" aria-live="polite"></span>
              ${downloadBlock(leadDemo.homeworkTemplate)}
            </div>
            <div id="lead-demo-output" class="interactive-output" aria-live="polite"></div>
          </div>
        </article>
        <article class="interactive-tool-card">
          <div class="interactive-tool-grid">
            <div>
              <p class="eyebrow">Inquiry Input</p>
              <h3>${inquiryDemo.title}</h3>
              <p>${inquiryDemo.description}</p>
              <label class="field-label" for="inquiry-demo-input">客户原始询盘</label>
              <textarea id="inquiry-demo-input" class="tool-textarea" rows="10">${inquiryDemo.sampleInquiry}</textarea>
              <div class="hero-actions compact-actions">
                <button class="button secondary" type="button" id="inquiry-demo-sample">填入样例询盘</button>
                <button class="button primary" type="button" id="inquiry-demo-run">识别询盘</button>
                <button class="button secondary" type="button" id="inquiry-demo-copy">复制回复草稿</button>
                <button class="button secondary" type="button" id="inquiry-demo-copy-brief">复制分析 Brief</button>
                <button class="button secondary" type="button" id="inquiry-demo-download">下载分析 Markdown</button>
              </div>
              <span id="inquiry-demo-status" class="tool-action-status" aria-live="polite"></span>
              ${downloadBlock(inquiryDemo.homeworkTemplate)}
            </div>
            <div id="inquiry-demo-output" class="interactive-output" aria-live="polite"></div>
          </div>
        </article>
        <article class="interactive-tool-card" id="quotation-demo-card">
          <div class="interactive-tool-grid">
            <div>
              <p class="eyebrow">Quotation Input</p>
              <h3>${quotationDemo.title}</h3>
              <p>${quotationDemo.description}</p>
              <div class="quote-input-grid">
                ${quotationDemo.fields.map(renderQuotationField).join("")}
              </div>
              <div class="hero-actions compact-actions">
                <button class="button secondary" type="button" id="quotation-demo-reset">恢复样例数据</button>
                <button class="button primary" type="button" id="quotation-demo-run">测算报价</button>
                <button class="button secondary" type="button" id="quotation-demo-lock" aria-pressed="false">锁定成本字段</button>
                <button class="button secondary" type="button" id="quotation-demo-copy">复制报价说明</button>
                <button class="button secondary" type="button" id="quotation-demo-copy-brief">复制报价 Brief</button>
                <button class="button secondary" type="button" id="quotation-demo-download">下载报价 Markdown</button>
              </div>
              <span id="quotation-demo-status" class="tool-action-status" aria-live="polite"></span>
              ${downloadBlock(quotationDemo.homeworkTemplate)}
            </div>
            <div id="quotation-demo-output" class="interactive-output" aria-live="polite"></div>
          </div>
        </article>
        <article class="interactive-tool-card" id="order-demo-card">
          <div class="interactive-tool-grid">
            <div>
              <p class="eyebrow">Order Tracking</p>
              <h3>${orderDemo.title}</h3>
              <p>${orderDemo.description}</p>
              <div id="order-demo-input" class="table-shell compact-table order-demo-table"></div>
              <div class="hero-actions compact-actions">
                <button class="button secondary" type="button" id="order-demo-reset">恢复样例节点</button>
                <button class="button primary" type="button" id="order-demo-run">生成交期预警</button>
                <button class="button secondary" type="button" id="order-demo-risk" aria-pressed="false">只看风险节点</button>
                <button class="button secondary" type="button" id="order-demo-copy">复制客户进度</button>
                <button class="button secondary" type="button" id="order-demo-copy-brief">复制履约 Brief</button>
                <button class="button secondary" type="button" id="order-demo-download">下载订单 Markdown</button>
              </div>
              <span id="order-demo-status" class="tool-action-status" aria-live="polite"></span>
              ${downloadBlock(orderDemo.homeworkTemplate)}
            </div>
            <div id="order-demo-output" class="interactive-output" aria-live="polite"></div>
          </div>
        </article>
        <article class="interactive-tool-card" id="document-demo-card">
          <div class="interactive-tool-grid">
            <div>
              <p class="eyebrow">Document Check</p>
              <h3>${documentDemo.title}</h3>
              <p>${documentDemo.description}</p>
              <div id="document-demo-input" class="table-shell compact-table document-demo-table"></div>
              <div class="hero-actions compact-actions">
                <button class="button secondary" type="button" id="document-demo-fixed">查看修正后复查</button>
                <button class="button primary" type="button" id="document-demo-run">运行单证检查</button>
                <button class="button secondary" type="button" id="document-demo-copy">复制检查报告</button>
                <button class="button secondary" type="button" id="document-demo-copy-brief">复制复查 Brief</button>
                <button class="button secondary" type="button" id="document-demo-download">下载检查 Markdown</button>
              </div>
              <span id="document-demo-status" class="tool-action-status" aria-live="polite"></span>
              ${downloadBlock(documentDemo.homeworkTemplate)}
            </div>
            <div id="document-demo-output" class="interactive-output" aria-live="polite"></div>
          </div>
        </article>
        <article class="interactive-tool-card" id="payment-demo-card">
          <div class="interactive-tool-grid">
            <div>
              <p class="eyebrow">Payment Risk</p>
              <h3>${paymentDemo.title}</h3>
              <p>${paymentDemo.description}</p>
              <div class="detail-block">
                <strong>样例场景</strong>
                <p>${paymentDemo.sampleProfile.scenario}</p>
              </div>
              <div class="quote-input-grid payment-input-grid">
                ${paymentDemo.fields.map(renderPaymentField).join("")}
              </div>
              <div class="hero-actions compact-actions">
                <button class="button secondary" type="button" id="payment-demo-reset">恢复样例条款</button>
                <button class="button primary" type="button" id="payment-demo-run">生成风险矩阵</button>
                <button class="button secondary" type="button" id="payment-demo-high" aria-pressed="false">只看高风险</button>
                <button class="button secondary" type="button" id="payment-demo-copy">复制客户回复</button>
                <button class="button secondary" type="button" id="payment-demo-copy-brief">复制审批 Brief</button>
                <button class="button secondary" type="button" id="payment-demo-download">下载付款 Markdown</button>
              </div>
              <span id="payment-demo-status" class="tool-action-status" aria-live="polite"></span>
              ${downloadBlock(paymentDemo.homeworkTemplate)}
            </div>
            <div id="payment-demo-output" class="interactive-output" aria-live="polite"></div>
          </div>
        </article>
      </div>
    `;

    setupProductDemo(productDemo);
    setupLeadDemo(leadDemo);
    setupInquiryDemo(inquiryDemo);
    setupQuotationDemo(quotationDemo);
    setupOrderDemo(orderDemo);
    setupDocumentDemo(documentDemo);
    setupPaymentDemo(paymentDemo);
  }

  function setupProductDemo(demo) {
    const input = byId("product-demo-input");
    const reset = byId("product-demo-reset");
    const run = byId("product-demo-run");
    const gap = byId("product-demo-gap");
    const copy = byId("product-demo-copy");
    const download = byId("product-demo-download");
    const status = byId("product-demo-status");
    const output = byId("product-demo-output");
    let currentFields = demo.fields;
    let gapOnly = false;
    let currentAnalysis = analyzeProductFields(currentFields, demo, gapOnly);

    function setStatus(message) {
      if (!status) return;
      status.textContent = message || "";
    }

    function updateInput() {
      input.innerHTML = renderProductRows(currentFields);
    }

    function updateOutput() {
      currentAnalysis = analyzeProductFields(currentFields, demo, gapOnly);
      output.innerHTML = renderProductAnalysis(currentAnalysis, demo);
      gap.textContent = gapOnly ? "显示全部字段" : "只看缺失/待确认";
      gap.setAttribute("aria-pressed", gapOnly ? "true" : "false");
      setStatus(gapOnly ? "当前只显示缺失和待确认资料，可复制补资料清单或下载作业包。" : "产品资料工作台已生成，可复制补资料清单或下载为课堂作业包。");
    }

    reset.addEventListener("click", () => {
      currentFields = demo.fields;
      gapOnly = false;
      updateInput();
      updateOutput();
    });
    run.addEventListener("click", updateOutput);
    gap.addEventListener("click", () => {
      gapOnly = !gapOnly;
      updateOutput();
    });
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildProductGapText(currentAnalysis, demo));
        setStatus("补资料清单已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请从输出区域手动复制。");
      }
    });
    download.addEventListener("click", () => {
      downloadTextFile(demo.exportFilename || "product-profile-output.md", buildProductMarkdown(currentAnalysis, demo), "text/markdown;charset=utf-8");
      setStatus("Markdown 产品资料作业包已生成下载。");
    });
    updateInput();
    updateOutput();
  }

  function renderProductRows(rows) {
    return `
      <table class="data-table product-profile-table">
        <thead>
          <tr>
            <th>分类</th>
            <th>字段</th>
            <th>状态</th>
            <th>资料来源</th>
            <th>负责人</th>
            <th>复用场景</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${row.category}</td>
                  <td>${row.field}</td>
                  <td><span class="status-pill ${productStatusClass(row.status)}">${row.status}</span></td>
                  <td>${row.source}</td>
                  <td>${row.owner}</td>
                  <td>${row.useCase.join(" / ")}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function productStatusClass(status) {
    const normalized = String(status || "").toLowerCase();
    if (normalized === "ready") return "ready";
    if (normalized === "confirm") return "planned";
    return "high";
  }

  function analyzeProductFields(rows, demo, gapOnly) {
    const ready = rows.filter((item) => item.status === "Ready").length;
    const confirm = rows.filter((item) => item.status === "Confirm").length;
    const missing = rows.filter((item) => item.status === "Missing").length;
    const score = Math.round(((ready + confirm * 0.5) / Math.max(1, rows.length)) * 100);
    const level = score >= 80 ? "Ready" : score >= 55 ? "Need Review" : "Blocked";
    const categories = [...new Set(rows.map((item) => item.category))];
    const owners = [...new Set(rows.filter((item) => item.status !== "Ready").map((item) => item.owner))];
    const reusableScenes = [...new Set(rows.flatMap((item) => item.useCase))];
    const gapItems = rows.filter((item) => item.status !== "Ready");
    const items = gapOnly ? gapItems : rows;
    const englishDraft = buildProductEnglishDraft(rows, demo);

    return {
      rows,
      items,
      gapItems,
      gapOnly,
      owners,
      reusableScenes,
      englishDraft,
      summary: [
        ["成熟度", `${level} / ${score} 分`],
        ["Ready", `${ready} 项`],
        ["待确认", `${confirm} 项`],
        ["缺失", `${missing} 项`],
        ["复用场景", `${reusableScenes.length} 类`],
        ["当前视图", gapOnly ? "只看缺失/待确认" : "全部字段"]
      ],
      categorySummary: categories.map((category) => {
        const categoryRows = rows.filter((item) => item.category === category);
        const pending = categoryRows.filter((item) => item.status !== "Ready").length;
        return [category, pending ? `${pending} 项需补齐或确认` : "字段已可用于课堂演示"];
      }),
      manualBoundaries: demo.manualBoundaries || [],
      qualityChecks: demo.qualityChecks || []
    };
  }

  function buildProductEnglishDraft(rows, demo) {
    const fieldValue = (field) => rows.find((row) => row.field === field)?.value || "To be confirmed";
    return [
      `Product: ${demo.sampleProfile.product}`,
      `Application: ${fieldValue("主要用途")}`,
      `Structure: ${fieldValue("尺寸与结构")}`,
      `Options: ${fieldValue("卫浴、电气和空调预留")}`,
      `Wall Panel: ${fieldValue("墙板与保温")}`,
      "Packaging, loading quantity, certification, installation scope, warranty, HS code, and local compliance must be confirmed before external commitment."
    ].join("\n");
  }

  function renderProductAnalysis(analysis, demo) {
    return `
      <div class="interactive-result-card">
        <p class="eyebrow">Product Summary</p>
        <h3>产品资料成熟度</h3>
        ${renderMiniTable(analysis.summary)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Field Desk</p>
        <h3>字段状态与补齐动作</h3>
        ${
          analysis.items.length
            ? analysis.items
                .map(
                  (item) => `
                    <div class="product-field-item ${productStatusClass(item.status)}">
                      <span class="status-pill ${productStatusClass(item.status)}">${item.status}</span>
                      <strong>${item.category} · ${item.field}</strong>
                      <p><b>资料：</b>${item.value}</p>
                      <p><b>来源：</b>${item.source} · <b>负责人：</b>${item.owner}</p>
                      <p><b>下一步：</b>${item.nextAction}</p>
                      <p><b>复用：</b>${item.useCase.join(" / ")}</p>
                    </div>
                  `
                )
                .join("")
            : `<div class="empty-state"><h3>暂无缺失或待确认字段</h3><p>当前筛选下没有待补资料，但正式课程和企业交付前仍需人工复核。</p></div>`
        }
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Category Check</p>
        <h3>分类复核</h3>
        ${renderMiniTable(analysis.categorySummary)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Reusable Input</p>
        <h3>后续工具输入</h3>
        ${list(analysis.reusableScenes)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">English Draft</p>
        <h3>英文资料草稿</h3>
        <pre class="reply-draft">${escapeHtml(analysis.englishDraft)}</pre>
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Manual Boundary</p>
        <h3>必须人工确认</h3>
        ${list(analysis.manualBoundaries)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Homework Check</p>
        <h3>作业验收要点</h3>
        ${list(analysis.qualityChecks)}
      </div>
    `;
  }

  function buildProductGapText(analysis, demo) {
    return [
      `${demo.title} - 补资料清单`,
      "",
      "产品资料成熟度",
      ...analysis.summary.map((row) => `${row[0]}：${row[1]}`),
      "",
      "缺失或待确认字段",
      ...analysis.gapItems.map((item) => `- [${item.status}] ${item.category} / ${item.field}：${item.nextAction}；负责人：${item.owner}`),
      "",
      "必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`)
    ].join("\n");
  }

  function buildProductMarkdown(analysis, demo) {
    return [
      `# ${demo.title} - 课堂资料输出`,
      "",
      "## 样例产品",
      `- 产品：${demo.sampleProfile.product}`,
      `- 行业：${demo.sampleProfile.industry}`,
      `- 课堂用途：${demo.sampleProfile.classroomUse}`,
      "",
      "## 产品资料成熟度",
      ...analysis.summary.map((row) => `- ${row[0]}：${row[1]}`),
      "",
      "## 字段状态表",
      "| 分类 | 字段 | 状态 | 资料 | 来源 | 负责人 | 下一步 | 复用场景 |",
      "|---|---|---|---|---|---|---|---|",
      ...analysis.rows.map((item) => `| ${item.category} | ${item.field} | ${item.status} | ${item.value} | ${item.source} | ${item.owner} | ${item.nextAction} | ${item.useCase.join(" / ")} |`),
      "",
      "## 缺失或待确认字段",
      ...analysis.gapItems.map((item) => `- [${item.status}] ${item.field}：${item.nextAction}（负责人：${item.owner}）`),
      "",
      "## 英文资料草稿",
      "",
      "```text",
      analysis.englishDraft,
      "```",
      "",
      "## 必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`),
      "",
      "## 作业验收要点",
      ...analysis.qualityChecks.map((item) => `- ${item}`)
    ].join("\n");
  }

  function setupLeadDemo(demo) {
    const input = byId("lead-demo-input");
    const reset = byId("lead-demo-reset");
    const run = byId("lead-demo-run");
    const high = byId("lead-demo-high");
    const copy = byId("lead-demo-copy");
    const download = byId("lead-demo-download");
    const status = byId("lead-demo-status");
    const output = byId("lead-demo-output");
    let currentRows = demo.sampleRows;
    let highOnly = false;
    let currentAnalysis = analyzeLeadRows(currentRows, demo, highOnly);

    function setStatus(message) {
      if (!status) return;
      status.textContent = message || "";
    }

    function updateInput() {
      input.innerHTML = renderLeadRows(currentRows);
    }

    function updateOutput() {
      currentAnalysis = analyzeLeadRows(currentRows, demo, highOnly);
      output.innerHTML = renderLeadAnalysis(currentAnalysis, demo);
      high.textContent = highOnly ? "显示全部线索" : "只看 A 级线索";
      high.setAttribute("aria-pressed", highOnly ? "true" : "false");
      setStatus(highOnly ? "当前只显示 A 级线索，可复制或下载给课堂作业使用。" : "跟进计划已生成，可复制或下载为课堂作业包。");
    }

    reset.addEventListener("click", () => {
      currentRows = demo.sampleRows;
      highOnly = false;
      updateInput();
      updateOutput();
    });
    run.addEventListener("click", updateOutput);
    high.addEventListener("click", () => {
      highOnly = !highOnly;
      updateOutput();
    });
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildLeadReportText(currentAnalysis, demo));
        setStatus("客户跟进计划已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请从跟进计划区域手动复制。");
      }
    });
    download.addEventListener("click", () => {
      downloadTextFile(demo.exportFilename || "lead-followup-output.md", buildLeadMarkdown(currentAnalysis, demo), "text/markdown;charset=utf-8");
      setStatus("Markdown 线索跟进作业包已生成下载。");
    });
    updateInput();
    updateOutput();
  }

  function renderLeadRows(rows) {
    return `
      <table class="data-table lead-check-table">
        <thead>
          <tr>
            <th>客户</th>
            <th>国家</th>
            <th>类型</th>
            <th>需求</th>
            <th>阶段</th>
            <th>信号</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${row.company}</td>
                  <td>${row.country}</td>
                  <td>${row.type}</td>
                  <td>${row.demand}</td>
                  <td>${row.stage}</td>
                  <td>${row.signals.join(" / ")}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function scoreLead(row, demo) {
    const signalWeights = {
      明确数量: 24,
      项目场景: 18,
      "CIF 目的港": 14,
      配置需求: 14,
      高价值项目: 18,
      待确认数量: 8,
      渠道匹配: 10,
      无明确项目: -8,
      产品兴趣: 10,
      预算未知: -4
    };
    const stageScores = {
      已询盘: 28,
      需求确认: 22,
      新线索: 14,
      已触达: 10
    };
    let score = stageScores[row.stage] || 8;
    const reasons = [`阶段：${row.stage}`];
    row.signals.forEach((signal) => {
      const value = signalWeights[signal] || 0;
      score += value;
      if (value > 0) reasons.push(signal);
    });
    if (/承包商|矿业|终端/.test(row.type)) {
      score += 10;
      reasons.push(`客户类型：${row.type}`);
    } else if (/经销商/.test(row.type)) {
      score += 8;
      reasons.push("渠道客户");
    }
    if (row.lastContactDays <= 3) {
      score += 10;
      reasons.push("近期互动");
    } else if (row.lastContactDays <= 7) {
      score += 6;
      reasons.push("一周内互动");
    }

    const level = score >= 75 ? "A" : score >= 45 ? "B" : "C";
    const action = demo.actionByLevel[level];
    return {
      ...row,
      score,
      level,
      cadence: action.cadence,
      nextAction: action.nextAction,
      angle: action.angle,
      reasons
    };
  }

  function analyzeLeadRows(rows, demo, highOnly) {
    const scored = rows.map((row) => scoreLead(row, demo)).sort((a, b) => b.score - a.score);
    const items = highOnly ? scored.filter((item) => item.level === "A") : scored;
    const counts = {
      A: scored.filter((item) => item.level === "A").length,
      B: scored.filter((item) => item.level === "B").length,
      C: scored.filter((item) => item.level === "C").length
    };
    return {
      allItems: scored,
      items,
      highOnly,
      summary: [
        ["总线索", `${scored.length} 条`],
        ["A 级", `${counts.A} 条`],
        ["B 级", `${counts.B} 条`],
        ["C 级", `${counts.C} 条`],
        ["当前视图", highOnly ? "只看 A 级" : "全部线索"]
      ],
      manualBoundaries: demo.manualBoundaries || [],
      qualityChecks: demo.qualityChecks || []
    };
  }

  function leadLevelClass(level) {
    if (level === "A") return "ready";
    if (level === "B") return "planned";
    return "medium";
  }

  function renderLeadAnalysis(analysis, demo) {
    return `
      <div class="interactive-result-card">
        <p class="eyebrow">Lead Summary</p>
        <h3>线索分级概览</h3>
        ${renderMiniTable(analysis.summary)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Follow-up Plan</p>
        <h3>跟进动作建议</h3>
        ${
          analysis.items.length
            ? analysis.items
                .map(
                  (item) => `
                    <div class="lead-result-item">
                      <span class="status-pill ${leadLevelClass(item.level)}">${item.level} 级 · ${item.score} 分</span>
                      <strong>${item.company}</strong>
                      <p>${item.country} · ${item.type} · ${item.demand}</p>
                      <p><b>节奏：</b>${item.cadence}</p>
                      <p><b>下一步：</b>${item.nextAction}</p>
                      <p><b>开发信角度：</b>${item.angle}</p>
                      <p><b>判断依据：</b>${item.reasons.join(" / ")}</p>
                    </div>
                  `
                )
                .join("")
            : `<div class="empty-state"><h3>暂无 A 级线索</h3><p>当前样例没有满足 A 级条件的线索，请回到全部线索视图继续跟进。</p></div>`
        }
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Manual Boundary</p>
        <h3>必须人工确认</h3>
        ${list(analysis.manualBoundaries)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Homework Check</p>
        <h3>作业验收要点</h3>
        ${list(analysis.qualityChecks)}
      </div>
    `;
  }

  function buildLeadReportText(analysis, demo) {
    return [
      `${demo.title} - 跟进计划`,
      "",
      "线索分级概览",
      ...analysis.summary.map((row) => `${row[0]}：${row[1]}`),
      "",
      "跟进动作建议",
      ...analysis.items.map((item) => `- [${item.level}级 ${item.score}分] ${item.company}：${item.cadence}；${item.nextAction}；角度：${item.angle}`),
      "",
      "必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`),
      "",
      "作业验收要点",
      ...analysis.qualityChecks.map((item) => `- ${item}`)
    ].join("\n");
  }

  function buildLeadMarkdown(analysis, demo) {
    return [
      `# ${demo.title} - 课堂跟进输出`,
      "",
      "## 线索分级概览",
      ...analysis.summary.map((row) => `- ${row[0]}：${row[1]}`),
      "",
      "## 跟进动作建议",
      "| 客户 | 国家 | 等级 | 分数 | 节奏 | 下一步 | 开发信角度 | 判断依据 |",
      "|---|---|---|---:|---|---|---|---|",
      ...analysis.items.map((item) => `| ${item.company} | ${item.country} | ${item.level} | ${item.score} | ${item.cadence} | ${item.nextAction} | ${item.angle} | ${item.reasons.join(" / ")} |`),
      "",
      "## 必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`),
      "",
      "## 作业验收要点",
      ...analysis.qualityChecks.map((item) => `- ${item}`)
    ].join("\n");
  }

  function setupInquiryDemo(demo) {
    const input = byId("inquiry-demo-input");
    const sample = byId("inquiry-demo-sample");
    const run = byId("inquiry-demo-run");
    const copy = byId("inquiry-demo-copy");
    const copyBrief = byId("inquiry-demo-copy-brief");
    const download = byId("inquiry-demo-download");
    const status = byId("inquiry-demo-status");
    const output = byId("inquiry-demo-output");
    let currentAnalysis = analyzeInquiry(input.value, demo);

    function setStatus(message) {
      if (!status) return;
      status.textContent = message || "";
    }

    function updateOutput() {
      currentAnalysis = analyzeInquiry(input.value, demo);
      output.innerHTML = renderInquiryAnalysis(currentAnalysis, demo);
      const disabled = !currentAnalysis.hasText;
      copy.disabled = disabled;
      copyBrief.disabled = disabled;
      download.disabled = disabled;
      setStatus(disabled ? "请输入询盘后再复制或下载。" : "分析结果可复制为邮件草稿、分析 Brief，也可下载为课堂作业包。");
    }

    sample.addEventListener("click", () => {
      input.value = demo.sampleInquiry;
      updateOutput();
    });
    run.addEventListener("click", updateOutput);
    copy.addEventListener("click", async () => {
      if (!currentAnalysis.hasText) return;
      try {
        await navigator.clipboard.writeText(currentAnalysis.replyDraft);
        setStatus("英文回复草稿已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请从回复草稿区域手动复制。");
      }
    });
    copyBrief.addEventListener("click", async () => {
      if (!currentAnalysis.hasText) return;
      try {
        await navigator.clipboard.writeText(buildInquiryBriefText(currentAnalysis, demo));
        setStatus("询盘分析 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请下载 Markdown 或从输出区域手动复制。");
      }
    });
    download.addEventListener("click", () => {
      if (!currentAnalysis.hasText) return;
      downloadTextFile(demo.exportFilename || "inquiry-analysis-output.md", buildInquiryAnalysisMarkdown(currentAnalysis, demo), "text/markdown;charset=utf-8");
      setStatus("Markdown 分析包已生成下载。");
    });
    updateOutput();
  }

  function downloadTextFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  async function copyTextWithFallback(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } finally {
      textarea.remove();
    }
    if (!copied) {
      throw new Error("copy failed");
    }
    return true;
  }

  function analyzeInquiry(rawText, demo) {
    const text = rawText.trim();
    if (!text) {
      return {
        hasText: false,
        known: [],
        fieldEvidence: [],
        summary: [],
        nextRoutes: demo.nextRoutes || [],
        missing: [],
        riskRules: demo.riskRules,
        exportAcceptance: demo.exportAcceptance || [],
        replyDraft: "",
        qualityChecks: demo.qualityChecks || []
      };
    }

    const lower = text.toLowerCase();
    const quantityMatch =
      text.match(/(\d+)\s*(units?|sets?|pcs|pieces|套)/i) ||
      text.match(/(\d+)\s+(?:prefab|expandable|container|modular|folding|flat pack|portable)?\s*(?:container\s+)?(?:houses?|homes?|cabins?|units?)/i);
    const known = [];
    if (quantityMatch) known.push(`采购数量：${quantityMatch[1]} units`);
    (demo.knownSignalRules || []).forEach((rule) => {
      if (rule.keywords.some((keyword) => lower.includes(keyword))) known.push(rule.text);
    });
    if (!known.length) known.push("已识别信息不足，需要先补充产品、数量、目的地和贸易条款。");

    const fieldEvidence = (demo.fieldChecks || []).map((field) => {
      const matchedKeyword =
        field.field === "采购数量" && quantityMatch
          ? quantityMatch[0]
          : (field.keywords || []).find((keyword) => lower.includes(keyword));
      const found = Boolean(matchedKeyword);
      return {
        ...field,
        found,
        matchedKeyword: matchedKeyword || "",
        status: found ? "已识别" : field.required ? "必补" : "可补",
        action: found ? field.foundText : field.missingQuestion
      };
    });
    const score = fieldEvidence.reduce((total, field) => total + (field.found ? field.weight || 0 : 0), 0);
    const requiredMissing = fieldEvidence.filter((field) => field.required && !field.found);
    const optionalMissing = fieldEvidence.filter((field) => !field.required && !field.found);
    const thresholds = demo.readinessThresholds || { ready: 82, review: 58 };
    const readiness =
      score >= thresholds.ready
        ? {
            label: "可进入报价前人工复核",
            tag: "Ready",
            next: "进入报价费用项检查器，但最终价格、交期和条款仍需人工确认。"
          }
        : score >= thresholds.review
          ? {
              label: "先补关键字段再报价",
              tag: "Review",
              next: "先发送补问邮件，补齐必填字段后再进入报价结构。"
            }
          : {
              label: "暂不报价，先澄清需求",
              tag: "Blocked",
              next: "先确认产品、数量、场景、目的地和贸易术语，再决定是否进入报价。"
            };
    const missing = demo.missingQuestions.filter((item) => !item.keywords.some((keyword) => lower.includes(keyword)));
    const fieldQuestions = [...requiredMissing, ...optionalMissing].map((item) => ({
      field: item.field,
      question: item.missingQuestion
    }));
    const mergedMissing = [...fieldQuestions, ...missing].filter(
      (item, index, rows) => rows.findIndex((row) => row.field === item.field || row.question === item.question) === index
    );
    const replyQuestions = mergedMissing.slice(0, 5).map((item, index) => `${index + 1}. ${item.question}`);
    const replyDraft = [
      demo.replyOpening,
      "",
      "Before quotation, could you please help confirm:",
      ...replyQuestions,
      "",
      "After receiving these details, we will prepare the quotation structure and lead time for your review."
    ].join("\n");

    return {
      hasText: true,
      rawText: text,
      known,
      fieldEvidence,
      score,
      readiness,
      requiredMissing,
      optionalMissing,
      missing: mergedMissing,
      summary: [
        ["准备分", `${score}/100 · ${readiness.label}`],
        ["业务链路", demo.workflowStage || "询盘识别 → 报价前确认"],
        ["已识别字段", `${fieldEvidence.filter((field) => field.found).length}/${fieldEvidence.length}`],
        ["必补字段", requiredMissing.length ? `${requiredMissing.length} 项` : "无"],
        ["下一动作", readiness.next]
      ],
      nextRoutes: demo.nextRoutes || [],
      riskRules: demo.riskRules,
      exportAcceptance: demo.exportAcceptance || [],
      replyDraft,
      qualityChecks: demo.qualityChecks || []
    };
  }

  function inquiryStatusClass(status) {
    if (status === "已识别") return "ready";
    if (status === "可补") return "planned";
    return "high";
  }

  function renderInquiryAnalysis(analysis, demo) {
    if (!analysis.hasText) {
      return `
        <div class="empty-state">
          <h3>等待输入询盘</h3>
          <p>粘贴客户询盘后，点击“识别询盘”。</p>
        </div>
      `;
    }

    return `
      <div class="interactive-result-card">
        <p class="eyebrow">${analysis.readiness.tag} · Inquiry Gate</p>
        <h3>报价前准备度</h3>
        ${renderMiniTable(analysis.summary)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Known Needs</p>
        <h3>已知需求</h3>
        ${list(analysis.known)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Field Evidence</p>
        <h3>字段证据与补齐动作</h3>
        ${analysis.fieldEvidence
          .map(
            (field) => `
              <div class="inquiry-field-item ${inquiryStatusClass(field.status)}">
                <span class="status-pill ${inquiryStatusClass(field.status)}">${field.status}</span>
                <strong>${field.field} · ${field.weight} 分</strong>
                <p><b>负责人：</b>${field.owner}</p>
                <p><b>${field.found ? "识别证据" : "补问动作"}：</b>${field.action}</p>
                ${field.matchedKeyword ? `<p><b>命中词：</b>${escapeHtml(field.matchedKeyword)}</p>` : ""}
              </div>
            `
          )
          .join("")}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Missing Fields</p>
        <h3>报价前缺失信息</h3>
        ${list(analysis.missing.map((item) => `${item.field}：${item.question}`))}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Next Route</p>
        <h3>下一步路由</h3>
        ${list(analysis.nextRoutes)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Manual Boundary</p>
        <h3>人工确认边界</h3>
        ${list(analysis.riskRules.map((rule) => `${rule.label}：${rule.text}`))}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Export Acceptance</p>
        <h3>导出验收标准</h3>
        ${list(analysis.exportAcceptance)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Homework Check</p>
        <h3>作业验收要点</h3>
        ${list(analysis.qualityChecks)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Reply Draft</p>
        <h3>英文回复草稿</h3>
        <pre class="reply-draft">${escapeHtml(analysis.replyDraft)}</pre>
      </div>
    `;
  }

  function buildInquiryAnalysisMarkdown(analysis, demo) {
    return [
      `# ${demo.title} - 课堂分析输出`,
      "",
      "## 原始询盘",
      "",
      "```text",
      analysis.rawText,
      "```",
      "",
      "## 报价前准备度",
      ...analysis.summary.map((item) => `- ${item[0]}：${item[1]}`),
      "",
      "## 已知需求",
      ...analysis.known.map((item) => `- ${item}`),
      "",
      "## 字段证据与补齐动作",
      "| 字段 | 状态 | 分值 | 负责人 | 证据或补问动作 | 命中词 |",
      "|---|---|---:|---|---|---|",
      ...analysis.fieldEvidence.map((item) => `| ${item.field} | ${item.status} | ${item.weight || 0} | ${item.owner} | ${item.action} | ${item.matchedKeyword || "-"} |`),
      "",
      "## 报价前缺失信息",
      ...analysis.missing.map((item) => `- ${item.field}：${item.question}`),
      "",
      "## 下一步路由",
      ...analysis.nextRoutes.map((item) => `- ${item}`),
      "",
      "## 人工确认边界",
      ...analysis.riskRules.map((rule) => `- ${rule.label}：${rule.text}`),
      "",
      "## 导出验收标准",
      ...analysis.exportAcceptance.map((item) => `- ${item}`),
      "",
      "## 作业验收要点",
      ...analysis.qualityChecks.map((item) => `- ${item}`),
      "",
      "## 英文回复草稿",
      "",
      "```text",
      analysis.replyDraft,
      "```"
    ].join("\n");
  }

  function buildInquiryBriefText(analysis, demo) {
    return [
      `${demo.title} - 分析 Brief`,
      "",
      "报价前准备度",
      ...analysis.summary.map((item) => `${item[0]}：${item[1]}`),
      "",
      "字段证据",
      ...analysis.fieldEvidence.map((item) => `- [${item.status}] ${item.field}：${item.action}（负责人：${item.owner}）`),
      "",
      "报价前缺失信息",
      ...analysis.missing.map((item) => `- ${item.field}：${item.question}`),
      "",
      "下一步路由",
      ...analysis.nextRoutes.map((item) => `- ${item}`),
      "",
      "人工确认边界",
      ...analysis.riskRules.map((rule) => `- ${rule.label}：${rule.text}`)
    ].join("\n");
  }

  function renderQuotationField(field) {
    return `
      <label class="quote-field" for="quote-${field.id}">
        <span>${field.label}</span>
        <input
          id="quote-${field.id}"
          type="number"
          min="${field.min}"
          step="${field.step}"
          value="${field.value}"
          data-quote-field="${field.id}"
        />
        <small>${field.unit}</small>
      </label>
    `;
  }

  function setupQuotationDemo(demo) {
    const reset = byId("quotation-demo-reset");
    const run = byId("quotation-demo-run");
    const lock = byId("quotation-demo-lock");
    const copy = byId("quotation-demo-copy");
    const copyBrief = byId("quotation-demo-copy-brief");
    const download = byId("quotation-demo-download");
    const status = byId("quotation-demo-status");
    const output = byId("quotation-demo-output");
    let fieldsLocked = false;
    let currentAnalysis = analyzeQuotation(readValues(), demo);

    function setStatus(message) {
      if (!status) return;
      status.textContent = message || "";
    }

    function readValues() {
      return demo.fields.reduce((values, field) => {
        const input = byId(`quote-${field.id}`);
        const number = Number(input.value);
        values[field.id] = Number.isFinite(number) ? Math.max(number, field.min || 0) : field.value;
        return values;
      }, {});
    }

    function setLockedState() {
      (demo.lockedFieldIds || []).forEach((id) => {
        const input = byId(`quote-${id}`);
        if (!input) return;
        input.disabled = fieldsLocked;
        const fieldShell = input.closest ? input.closest(".quote-field") : null;
        if (fieldShell) fieldShell.classList.toggle("locked", fieldsLocked);
      });
      if (lock) {
        lock.textContent = fieldsLocked ? "解除字段锁定" : "锁定成本字段";
        lock.setAttribute("aria-pressed", fieldsLocked ? "true" : "false");
      }
    }

    function updateOutput() {
      currentAnalysis = analyzeQuotation(readValues(), demo);
      output.innerHTML = renderQuotationAnalysis(currentAnalysis, demo);
      setStatus(fieldsLocked ? "成本和运费字段已锁定，可复制说明或下载作业包。" : "可调整字段后复算，也可锁定关键成本字段用于课堂演示。");
    }

    demo.fields.forEach((field) => {
      const input = byId(`quote-${field.id}`);
      if (input) input.addEventListener("input", updateOutput);
    });
    reset.addEventListener("click", () => {
      demo.fields.forEach((field) => {
        byId(`quote-${field.id}`).value = field.value;
      });
      fieldsLocked = false;
      setLockedState();
      updateOutput();
    });
    run.addEventListener("click", updateOutput);
    lock.addEventListener("click", () => {
      fieldsLocked = !fieldsLocked;
      setLockedState();
      updateOutput();
    });
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(currentAnalysis.emailDraft);
        setStatus("报价说明草稿已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请从报价说明区域手动复制。");
      }
    });
    copyBrief.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildQuotationBriefText(currentAnalysis, demo));
        setStatus("报价审核 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请下载 Markdown 或从输出区域手动复制。");
      }
    });
    download.addEventListener("click", () => {
      downloadTextFile(demo.exportFilename || "quotation-calculation-output.md", buildQuotationMarkdown(currentAnalysis, demo), "text/markdown;charset=utf-8");
      setStatus("Markdown 报价作业包已生成下载。");
    });
    setLockedState();
    updateOutput();
  }

  function formatUsd(value) {
    return `$${Math.round(value).toLocaleString("en-US")}`;
  }

  function formatPercent(value) {
    return `${(value * 100).toFixed(1)}%`;
  }

  function analyzeQuotation(values, demo) {
    const quantity = Math.max(1, Math.round(values.quantity || 1));
    const baseUnitCost = values.unitCostUsd + values.optionCostUsd + values.domesticChargeUsd;
    const rawProfitRate = Math.max(0, (values.targetProfitPercent || 0) / 100);
    const targetProfitRate = Math.min(rawProfitRate, 0.65);
    const insuranceRate = Math.max(0, (values.insurancePercent || 0) / 100);
    const fobUnit = baseUnitCost / (1 - targetProfitRate);
    const freightUnit = values.oceanFreightUsd / quantity;
    const insuranceUnit = (fobUnit + freightUnit) * insuranceRate;
    const cifUnit = fobUnit + freightUnit + insuranceUnit;
    const totalAmount = cifUnit * quantity;
    const profitUnit = fobUnit - baseUnitCost;
    const actualMargin = fobUnit ? profitUnit / fobUnit : 0;
    const warnings = [];

    if (!values.oceanFreightUsd) warnings.push("海运费为 0：不能输出 CIF 报价，只能作为 FOB 结构演示。");
    if (!values.optionCostUsd) warnings.push("选配成本为 0：需要确认卫浴、电气、空调口、保温材料是否已计入。");
    if (targetProfitRate < 0.08) warnings.push("目标利润率偏低：需要确认是否覆盖售后、汇率波动和项目沟通成本。");
    if (targetProfitRate > 0.35) warnings.push("目标利润率偏高：需要确认目标市场接受度和竞品价格。");
    if (rawProfitRate > 0.65) warnings.push("目标利润率超过演示上限：工具按 65% 上限测算，真实报价需负责人重新确认利润口径。");
    if (quantity < 20) warnings.push("数量偏小：集成房屋项目的海运摊销和国内费用会明显影响单价。");
    if (!warnings.length) warnings.push("当前结构完整度较高，但仍需工厂、货代和业务负责人复核后才能对外报价。");

    const fieldEvidence = (demo.fieldChecks || []).map((field) => {
      const value = field.id === "termsBoundary" ? "已纳入边界提示" : values[field.id];
      let passed = true;
      if (field.id === "quantity") passed = quantity >= 20;
      else if (field.id === "targetProfitPercent") passed = rawProfitRate >= 0.08 && rawProfitRate <= 0.35;
      else if (field.id !== "termsBoundary") passed = Number(value) > 0;
      return {
        ...field,
        value,
        passed,
        status: passed ? "已确认字段" : "需复核",
        action: passed ? field.passText : field.failText
      };
    });
    const score = Math.max(
      0,
      Math.min(
        100,
        fieldEvidence.reduce((total, field) => total + (field.passed ? field.weight || 0 : 0), 0)
      )
    );
    const thresholds = demo.readinessThresholds || { ready: 82, review: 58 };
    const quoteGate =
      !values.oceanFreightUsd
        ? {
            tag: "Blocked",
            label: "不能输出 CIF，只能保留 FOB 结构",
            next: "先补有效海运费、装柜数量和目的港，再进入 CIF 报价结构。"
          }
        : score >= thresholds.ready
          ? {
              tag: "Ready",
              label: "可进入人工审批后报价",
              next: "提交工厂、货代和业务负责人复核，确认后才能对外发送正式报价。"
            }
          : score >= thresholds.review
            ? {
                tag: "Review",
                label: "先补费用项再报价",
                next: "补齐需复核字段，并确认利润、运费和条款边界。"
              }
            : {
                tag: "Blocked",
                label: "报价结构不完整",
                next: "回到产品资料和询盘补问，补齐成本、选配、运费和报价条款。"
              };
    const repairFields = fieldEvidence.filter((field) => !field.passed);
    const emailDraft = [
      demo.emailTemplate,
      "",
      `Reference structure: quantity ${quantity} units, FOB unit ${formatUsd(fobUnit)}, CIF unit ${formatUsd(cifUnit)}.`,
      "This quotation structure is subject to final confirmation of specification, loading quantity, freight validity, and payment terms."
    ].join("\n");

    return {
      values,
      quantity,
      metrics: [
        ["FOB 参考单价", formatUsd(fobUnit)],
        ["CIF 参考单价", formatUsd(cifUnit)],
        ["整单金额", formatUsd(totalAmount)],
        ["毛利率", formatPercent(actualMargin)]
      ],
      costRows: [
        ["工厂+选配+国内", formatUsd(baseUnitCost)],
        ["海运摊销", formatUsd(freightUnit)],
        ["保险摊销", formatUsd(insuranceUnit)],
        ["单台毛利", formatUsd(profitUnit)]
      ],
      fieldEvidence,
      score,
      quoteGate,
      repairFields,
      approvalGates: demo.approvalGates || [],
      nextRoutes: demo.nextRoutes || [],
      exportAcceptance: demo.exportAcceptance || [],
      summary: [
        ["发布分", `${score}/100 · ${quoteGate.label}`],
        ["业务链路", demo.workflowStage || "报价费用项 → 人工审批"],
        ["字段证据", `${fieldEvidence.filter((field) => field.passed).length}/${fieldEvidence.length}`],
        ["需复核字段", repairFields.length ? `${repairFields.length} 项` : "无"],
        ["下一动作", quoteGate.next]
      ],
      warnings,
      requiredChecks: demo.requiredChecks || [],
      qualityChecks: demo.qualityChecks || [],
      emailDraft
    };
  }

  function renderQuotationAnalysis(analysis, demo) {
    return `
      <div class="interactive-result-card">
        <p class="eyebrow">${analysis.quoteGate.tag} · Quotation Gate</p>
        <h3>报价发布闸口</h3>
        ${renderMiniTable(analysis.summary)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Quotation Metrics</p>
        <h3>报价测算结果</h3>
        <div class="quote-result-grid">
          ${analysis.metrics.map((row) => `<div><span>${row[0]}</span><strong>${row[1]}</strong></div>`).join("")}
        </div>
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Cost Breakdown</p>
        <h3>成本拆分</h3>
        ${renderMiniTable(analysis.costRows)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Field Evidence</p>
        <h3>费用字段证据与审批</h3>
        ${analysis.fieldEvidence
          .map(
            (field) => `
              <div class="quote-evidence-item ${field.passed ? "ready" : "high"}">
                <span class="status-pill ${field.passed ? "ready" : "high"}">${field.status}</span>
                <strong>${field.field} · ${field.weight} 分</strong>
                <p><b>当前值：</b>${field.id === "termsBoundary" ? field.value : `${field.value} ${demo.fields.find((item) => item.id === field.id)?.unit || ""}`}</p>
                <p><b>来源：</b>${field.source} · <b>负责人：</b>${field.owner}</p>
                <p><b>审批口径：</b>${field.gate}</p>
                <p><b>动作：</b>${field.action}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Warnings</p>
        <h3>漏项与风险提醒</h3>
        ${list(analysis.warnings)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Approval Gates</p>
        <h3>报价审批闸口</h3>
        ${list(analysis.approvalGates)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Next Route</p>
        <h3>报价后路由</h3>
        ${list(analysis.nextRoutes)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Manual Boundary</p>
        <h3>必须人工确认</h3>
        ${list(analysis.requiredChecks)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Export Acceptance</p>
        <h3>导出验收标准</h3>
        ${list(analysis.exportAcceptance)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Homework Check</p>
        <h3>作业验收要点</h3>
        ${list(analysis.qualityChecks)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Reply Draft</p>
        <h3>报价说明草稿</h3>
        <pre class="reply-draft">${escapeHtml(analysis.emailDraft)}</pre>
      </div>
    `;
  }

  function buildQuotationMarkdown(analysis, demo) {
    const fieldRows = demo.fields.map((field) => `- ${field.label}：${analysis.values[field.id]} ${field.unit}`);
    return [
      `# ${demo.title} - 课堂报价输出`,
      "",
      "## 输入字段",
      ...fieldRows,
      "",
      "## 报价发布闸口",
      ...analysis.summary.map((row) => `- ${row[0]}：${row[1]}`),
      "",
      "## 测算结果",
      ...analysis.metrics.map((row) => `- ${row[0]}：${row[1]}`),
      "",
      "## 成本拆分",
      ...analysis.costRows.map((row) => `- ${row[0]}：${row[1]}`),
      "",
      "## 费用字段证据与审批",
      "| 字段 | 状态 | 分值 | 当前值 | 来源 | 负责人 | 审批口径 | 动作 |",
      "|---|---|---:|---|---|---|---|---|",
      ...analysis.fieldEvidence.map((item) => {
        const unit = demo.fields.find((field) => field.id === item.id)?.unit || "";
        const value = item.id === "termsBoundary" ? item.value : `${item.value} ${unit}`.trim();
        return `| ${item.field} | ${item.status} | ${item.weight || 0} | ${value} | ${item.source} | ${item.owner} | ${item.gate} | ${item.action} |`;
      }),
      "",
      "## 漏项与风险提醒",
      ...analysis.warnings.map((item) => `- ${item}`),
      "",
      "## 报价审批闸口",
      ...analysis.approvalGates.map((item) => `- ${item}`),
      "",
      "## 报价后路由",
      ...analysis.nextRoutes.map((item) => `- ${item}`),
      "",
      "## 必须人工确认",
      ...analysis.requiredChecks.map((item) => `- ${item}`),
      "",
      "## 导出验收标准",
      ...analysis.exportAcceptance.map((item) => `- ${item}`),
      "",
      "## 作业验收要点",
      ...analysis.qualityChecks.map((item) => `- ${item}`),
      "",
      "## 报价说明草稿",
      "",
      "```text",
      analysis.emailDraft,
      "```"
    ].join("\n");
  }

  function buildQuotationBriefText(analysis, demo) {
    return [
      `${demo.title} - 报价审核 Brief`,
      "",
      "报价发布闸口",
      ...analysis.summary.map((row) => `${row[0]}：${row[1]}`),
      "",
      "费用字段证据与审批",
      ...analysis.fieldEvidence.map((item) => `- [${item.status}] ${item.field}：${item.action}（负责人：${item.owner}；审批：${item.gate}）`),
      "",
      "漏项与风险提醒",
      ...analysis.warnings.map((item) => `- ${item}`),
      "",
      "报价审批闸口",
      ...analysis.approvalGates.map((item) => `- ${item}`),
      "",
      "报价后路由",
      ...analysis.nextRoutes.map((item) => `- ${item}`),
      "",
      "必须人工确认",
      ...analysis.requiredChecks.map((item) => `- ${item}`)
    ].join("\n");
  }

  function setupOrderDemo(demo) {
    const input = byId("order-demo-input");
    const reset = byId("order-demo-reset");
    const run = byId("order-demo-run");
    const risk = byId("order-demo-risk");
    const copy = byId("order-demo-copy");
    const copyBrief = byId("order-demo-copy-brief");
    const download = byId("order-demo-download");
    const status = byId("order-demo-status");
    const output = byId("order-demo-output");
    let currentRows = demo.sampleRows;
    let riskOnly = false;
    let currentAnalysis = analyzeOrderRows(currentRows, demo, riskOnly);

    function setStatus(message) {
      if (!status) return;
      status.textContent = message || "";
    }

    function updateInput() {
      input.innerHTML = renderOrderRows(currentRows);
    }

    function updateOutput() {
      currentAnalysis = analyzeOrderRows(currentRows, demo, riskOnly);
      output.innerHTML = renderOrderAnalysis(currentAnalysis, demo);
      risk.textContent = riskOnly ? "显示全部节点" : "只看风险节点";
      risk.setAttribute("aria-pressed", riskOnly ? "true" : "false");
      setStatus(riskOnly ? "当前只显示风险节点，可复制客户进度或下载订单作业包。" : "交期预警已生成，可复制客户进度或下载为课堂作业包。");
    }

    reset.addEventListener("click", () => {
      currentRows = demo.sampleRows;
      riskOnly = false;
      updateInput();
      updateOutput();
    });
    run.addEventListener("click", updateOutput);
    risk.addEventListener("click", () => {
      riskOnly = !riskOnly;
      updateOutput();
    });
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildOrderProgressText(currentAnalysis, demo));
        setStatus("客户进度草稿已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请从客户进度草稿区域手动复制。");
      }
    });
    copyBrief.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildOrderBriefText(currentAnalysis, demo));
        setStatus("订单履约 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请下载 Markdown 或从输出区域手动复制。");
      }
    });
    download.addEventListener("click", () => {
      downloadTextFile(demo.exportFilename || "order-tracking-output.md", buildOrderMarkdown(currentAnalysis, demo), "text/markdown;charset=utf-8");
      setStatus("Markdown 订单跟进作业包已生成下载。");
    });
    updateInput();
    updateOutput();
  }

  function renderOrderRows(rows) {
    return `
      <table class="data-table order-check-table">
        <thead>
          <tr>
            <th>节点</th>
            <th>负责人</th>
            <th>计划日期</th>
            <th>实际日期</th>
            <th>状态</th>
            <th>风险</th>
            <th>证据</th>
            <th>下一步</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${row.node}</td>
                  <td>${row.owner}</td>
                  <td>${row.plan}</td>
                  <td>${row.actual || "待确认"}</td>
                  <td>${row.status}</td>
                  <td><span class="status-pill ${orderRiskClass(row.risk)}">${row.risk}</span></td>
                  <td>${row.evidence}</td>
                  <td>${row.action}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function orderRiskClass(level) {
    const normalized = String(level || "").toLowerCase();
    if (normalized === "high") return "high";
    if (normalized === "medium") return "medium";
    if (normalized === "low" || normalized === "pass") return "ready";
    return "planned";
  }

  function analyzeOrderRows(rows, demo, riskOnly) {
    const riskScore = { High: 3, Medium: 2, Low: 1 };
    const statusScore = {
      延期: 3,
      待确认: 2,
      未开始: 1,
      进行中: 1,
      完成: 0
    };
    const allItems = rows
      .map((row) => {
        const isDelayed = /延期/.test(row.status);
        const isPending = /待确认|未开始/.test(row.status);
        const isRisk = row.risk === "High" || row.risk === "Medium" || isDelayed || isPending;
        return {
          ...row,
          isRisk,
          isDelayed,
          isPending,
          actualLabel: row.actual || "待确认",
          riskClass: orderRiskClass(row.risk)
        };
      })
      .sort((a, b) => (riskScore[b.risk] || 0) - (riskScore[a.risk] || 0) || (statusScore[b.status] || 0) - (statusScore[a.status] || 0));
    const items = riskOnly ? allItems.filter((item) => item.isRisk) : allItems;
    const highCount = allItems.filter((item) => item.risk === "High").length;
    const mediumCount = allItems.filter((item) => item.risk === "Medium").length;
    const delayedCount = allItems.filter((item) => item.isDelayed).length;
    const pendingCount = allItems.filter((item) => item.isPending).length;
    const nodeEvidence = (demo.nodeChecks || []).map((check) => {
      const row = allItems.find((item) => item.node === check.node);
      const passed = check.node === "客户沟通" ? true : Boolean(row) && !row.isDelayed && row.risk !== "High";
      return {
        ...check,
        row,
        passed,
        status: passed ? "已通过" : row?.risk || "需复核",
        currentValue: check.node === "客户沟通" ? "客户进度草稿已保留人工确认边界" : row ? `${row.status}；计划 ${row.plan}；实际 ${row.actualLabel}；证据：${row.evidence}` : "未配置样例节点",
        action: passed ? check.passText : row?.action || check.failText,
        issue: row && !passed ? row.evidence : ""
      };
    });
    const score = Math.max(
      0,
      Math.min(
        100,
        nodeEvidence.reduce((total, item) => total + (item.passed ? item.weight || 0 : 0), 0) - highCount * 8 - delayedCount * 5 - pendingCount * 2
      )
    );
    const thresholds = demo.fulfillmentThresholds || { ready: 82, review: 58 };
    const fulfillmentGate =
      highCount > 0
        ? {
            tag: "Blocked",
            label: "存在高风险节点，禁止承诺交期",
            next: "先处理高风险节点，确认材料、订舱、尾款或工厂责任后再对客户更新。"
          }
        : score >= thresholds.ready
          ? {
              tag: "Ready",
              label: "可发送人工确认后的客户进度",
              next: "由业务、工厂、货代和财务确认后，再发送客户进度更新。"
            }
          : score >= thresholds.review
            ? {
                tag: "Review",
                label: "先补节点证据再更新客户",
                next: "补齐延期、待确认和中风险节点证据，再生成客户进度。"
              }
            : {
                tag: "Blocked",
                label: "履约证据不足",
                next: "回到订单主数据、工厂计划、订舱和付款节点补证据。"
              };
    return {
      allItems,
      items,
      riskOnly,
      nodeEvidence,
      score,
      fulfillmentGate,
      summary: [
        ["订单节点", `${allItems.length} 项`],
        ["高风险", `${highCount} 项`],
        ["中风险", `${mediumCount} 项`],
        ["延期节点", `${delayedCount} 项`],
        ["待确认/未开始", `${pendingCount} 项`],
        ["履约分", `${score}/100`],
        ["当前闸口", fulfillmentGate.label],
        ["当前视图", riskOnly ? "只看风险" : "全部节点"]
      ],
      approvalGates: demo.approvalGates || [],
      nextRoutes: demo.nextRoutes || [],
      exportAcceptance: demo.exportAcceptance || [],
      manualBoundaries: demo.manualBoundaries || [],
      qualityChecks: demo.qualityChecks || []
    };
  }

  function renderOrderAnalysis(analysis, demo) {
    return `
      <div class="interactive-result-card">
        <p class="eyebrow">${analysis.fulfillmentGate.tag} · Fulfillment Gate</p>
        <h3>订单履约闸口</h3>
        ${renderMiniTable(analysis.summary)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Node Evidence</p>
        <h3>节点证据与责任动作</h3>
        ${analysis.nodeEvidence
          .map(
            (item) => `
              <div class="order-evidence-item ${orderRiskClass(item.status)}">
                <span class="status-pill ${orderRiskClass(item.status)}">${item.status}</span>
                <strong>${item.node} · ${item.weight} 分</strong>
                <p><b>当前值：</b>${item.currentValue}</p>
                <p><b>来源：</b>${item.source} · <b>负责人：</b>${item.owner}</p>
                <p><b>履约口径：</b>${item.gate}</p>
                ${item.issue ? `<p><b>风险说明：</b>${item.issue}</p>` : ""}
                <p><b>动作：</b>${item.action}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Risk Nodes</p>
        <h3>风险节点</h3>
        ${
          analysis.items.length
            ? analysis.items
                .map(
                  (item) => `
                    <div class="order-risk-item ${item.riskClass}">
                      <span class="status-pill ${item.riskClass}">${item.risk} · ${item.status}</span>
                      <strong>${item.node}</strong>
                      <p>${item.owner} · 计划 ${item.plan} · 实际 ${item.actualLabel}</p>
                      <p><b>证据：</b>${item.evidence}</p>
                      <p><b>下一步：</b>${item.action}</p>
                    </div>
                  `
                )
                .join("")
            : `<div class="empty-state"><h3>暂无风险节点</h3><p>当前节点没有明显延期或高风险信号，正式订单仍需按企业流程复核。</p></div>`
        }
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Progress Draft</p>
        <h3>客户进度草稿</h3>
        <pre class="reply-draft">${escapeHtml(buildOrderProgressText(analysis, demo))}</pre>
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Approval Gates</p>
        <h3>履约审批闸口</h3>
        ${list(analysis.approvalGates)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Next Route</p>
        <h3>订单后路由</h3>
        ${list(analysis.nextRoutes)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Manual Boundary</p>
        <h3>必须人工确认</h3>
        ${list(analysis.manualBoundaries)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Export Acceptance</p>
        <h3>导出验收标准</h3>
        ${list(analysis.exportAcceptance)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Homework Check</p>
        <h3>作业验收要点</h3>
        ${list(analysis.qualityChecks)}
      </div>
    `;
  }

  function buildOrderProgressText(analysis, demo) {
    const riskItems = analysis.allItems.filter((item) => item.isRisk);
    const progressLines = analysis.allItems.map(
      (item) => `- ${item.node}: ${item.status}; planned ${item.plan}; actual ${item.actualLabel}; next action: ${item.action}.`
    );
    const riskLines = riskItems.length
      ? riskItems.map((item) => `- ${item.node}: ${item.risk} risk because ${item.evidence}.`)
      : ["- No major risk is shown in this classroom sample, but the order still needs internal confirmation."];
    return [
      demo.emailOpening,
      "",
      "Current progress:",
      ...progressLines,
      "",
      "Items needing confirmation:",
      ...riskLines,
      "",
      "Please note that production schedule, loading quantity, vessel space, balance payment, and shipping dates are subject to final confirmation by the responsible teams."
    ].join("\n");
  }

  function buildOrderBriefText(analysis, demo) {
    const riskItems = analysis.allItems.filter((item) => item.isRisk);
    const riskLines = riskItems.length
      ? riskItems.map((item) => `- [${item.risk}] ${item.node}：${item.evidence}；动作：${item.action}；负责人：${item.owner}`)
      : ["- 暂无高风险节点；正式订单仍需按企业流程复核。"];
    return [
      `${demo.title} - 订单履约 Brief`,
      "",
      "订单履约闸口",
      ...analysis.summary.map((row) => `${row[0]}：${row[1]}`),
      "",
      "节点证据与责任动作",
      ...analysis.nodeEvidence.map((item) => `- [${item.status}] ${item.node}：${item.currentValue}；${item.action}（负责人：${item.owner}；口径：${item.gate}）`),
      "",
      "风险节点",
      ...riskLines,
      "",
      "履约审批闸口",
      ...analysis.approvalGates.map((item) => `- ${item}`),
      "",
      "订单后路由",
      ...analysis.nextRoutes.map((item) => `- ${item}`),
      "",
      "必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`)
    ].join("\n");
  }

  function buildOrderMarkdown(analysis, demo) {
    const inputRows = analysis.allItems.map(
      (item) => `| ${item.node} | ${item.owner} | ${item.plan} | ${item.actualLabel} | ${item.status} | ${item.risk} | ${item.evidence} | ${item.action} |`
    );
    const riskItems = analysis.allItems.filter((item) => item.isRisk);
    const riskRows = riskItems.length
      ? riskItems.map((item) => `| ${item.node} | ${item.risk} | ${item.status} | ${item.evidence} | ${item.action} |`)
      : ["| 无 | Pass | 当前样例无明显风险 | 仍需按企业流程复核 | 继续更新节点 |"];
    return [
      `# ${demo.title} - 课堂订单输出`,
      "",
      "## 输入节点",
      "| 节点 | 负责人 | 计划日期 | 实际日期 | 状态 | 风险 | 证据 | 下一步 |",
      "|---|---|---|---|---|---|---|---|",
      ...inputRows,
      "",
      "## 订单节点概览",
      ...analysis.summary.map((row) => `- ${row[0]}：${row[1]}`),
      "",
      "## 节点证据与责任动作",
      "| 节点 | 状态 | 分值 | 当前值 | 来源 | 负责人 | 履约口径 | 动作 |",
      "|---|---|---:|---|---|---|---|---|",
      ...analysis.nodeEvidence.map((item) => `| ${item.node} | ${item.status} | ${item.weight || 0} | ${item.currentValue} | ${item.source} | ${item.owner} | ${item.gate} | ${item.action} |`),
      "",
      "## 风险节点",
      "| 节点 | 风险等级 | 状态 | 证据 | 下一步 |",
      "|---|---|---|---|---|",
      ...riskRows,
      "",
      "## 客户进度草稿",
      "",
      "```text",
      buildOrderProgressText(analysis, demo),
      "```",
      "",
      "## 履约审批闸口",
      ...analysis.approvalGates.map((item) => `- ${item}`),
      "",
      "## 订单后路由",
      ...analysis.nextRoutes.map((item) => `- ${item}`),
      "",
      "## 必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`),
      "",
      "## 导出验收标准",
      ...analysis.exportAcceptance.map((item) => `- ${item}`),
      "",
      "## 作业验收要点",
      ...analysis.qualityChecks.map((item) => `- ${item}`)
    ].join("\n");
  }

  function setupDocumentDemo(demo) {
    const input = byId("document-demo-input");
    const fixed = byId("document-demo-fixed");
    const run = byId("document-demo-run");
    const copy = byId("document-demo-copy");
    const copyBrief = byId("document-demo-copy-brief");
    const download = byId("document-demo-download");
    const status = byId("document-demo-status");
    const output = byId("document-demo-output");
    let currentRows = demo.sampleRows;
    let currentAnalysis = analyzeDocumentReport(currentRows, demo);

    function setStatus(message) {
      if (!status) return;
      status.textContent = message || "";
    }

    function updateInput() {
      input.innerHTML = renderDocumentRows(currentRows, demo.sourceLabels);
    }

    function updateOutput() {
      currentAnalysis = analyzeDocumentReport(currentRows, demo);
      output.innerHTML = renderDocumentAnalysis(currentAnalysis, demo);
      setStatus(currentAnalysis.issues.length ? "当前报告可复制，也可下载为课堂单证作业包。" : "修正后字段一致，仍需按正式流程人工复核。");
    }

    fixed.addEventListener("click", () => {
      currentRows = demo.correctedRows;
      updateInput();
      updateOutput();
    });
    run.addEventListener("click", () => {
      currentRows = demo.sampleRows;
      updateInput();
      updateOutput();
    });
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildDocumentReportText(currentAnalysis, demo));
        setStatus("单证检查报告已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请从检查报告区域手动复制。");
      }
    });
    copyBrief.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildDocumentBriefText(currentAnalysis, demo));
        setStatus("单证复查 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请下载 Markdown 或从输出区域手动复制。");
      }
    });
    download.addEventListener("click", () => {
      downloadTextFile(demo.exportFilename || "document-consistency-output.md", buildDocumentMarkdown(currentAnalysis, demo), "text/markdown;charset=utf-8");
      setStatus("Markdown 单证检查作业包已生成下载。");
    });
    updateInput();
    updateOutput();
  }

  function renderDocumentRows(rows, labels) {
    return `
      <table class="data-table document-check-table">
        <thead>
          <tr>
            <th>字段</th>
            <th>${labels.pi}</th>
            <th>${labels.ci}</th>
            <th>${labels.pl}</th>
            <th>${labels.booking}</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${row.field}</td>
                  <td>${row.pi || "缺失"}</td>
                  <td>${row.ci || "缺失"}</td>
                  <td>${row.pl || "缺失"}</td>
                  <td>${row.booking || "缺失"}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function normalizeDocumentValue(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/to be confirmed/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function analyzeDocumentRows(rows) {
    return rows
      .map((row) => {
        const values = [row.pi, row.ci, row.pl, row.booking].map(normalizeDocumentValue).filter(Boolean);
        const hasMissing = [row.pi, row.ci, row.pl, row.booking].some((value) => !normalizeDocumentValue(value));
        const hasConflict = new Set(values).size > 1;
        if (!hasMissing && !hasConflict) return null;
        return {
          field: row.field,
          level: row.severity || (hasConflict ? "Medium" : "Low"),
          issue: row.issue || (hasConflict ? "字段在不同单据中不一致。" : "字段缺失，需要补齐后再出单。"),
          action: row.action || "回到订单主数据、工厂装柜数据或货代资料复核。"
        };
      })
      .filter(Boolean);
  }

  function analyzeDocumentReport(rows, demo) {
    const issues = analyzeDocumentRows(rows);
    const highCount = issues.filter((issue) => issue.level === "High").length;
    const mediumCount = issues.filter((issue) => issue.level === "Medium").length;
    const fieldEvidence = (demo.fieldChecks || []).map((field) => {
      const row = rows.find((item) => item.field === field.field);
      const rowIssue = issues.find((issue) => issue.field === field.field);
      const missingValues = row ? [row.pi, row.ci, row.pl, row.booking].filter((value) => !normalizeDocumentValue(value)).length : 0;
      const passed = field.field === "Professional Review" ? true : field.field === "Document Completeness" ? !issues.some((issue) => /缺失|To be confirmed|confirmed/i.test(issue.issue)) && !rows.some((item) => [item.pi, item.ci, item.pl, item.booking].some((value) => !normalizeDocumentValue(value))) : Boolean(row) && !rowIssue && !missingValues;
      return {
        ...field,
        passed,
        status: passed ? "已通过" : rowIssue?.level || "需复核",
        currentValue: field.field === "Professional Review" ? "专业复核边界已列入报告" : field.field === "Document Completeness" ? (missingValues ? `${missingValues} 项缺失` : "关键字段完整") : row ? [row.pi || "缺失", row.ci || "缺失", row.pl || "缺失", row.booking || "缺失"].join(" / ") : "未配置样例字段",
        action: passed ? field.passText : rowIssue?.action || field.failText,
        issue: rowIssue?.issue || ""
      };
    });
    const score = Math.max(0, Math.min(100, fieldEvidence.reduce((total, field) => total + (field.passed ? field.weight || 0 : 0), 0) - highCount * 8 - mediumCount * 3));
    const thresholds = demo.releaseThresholds || { ready: 86, review: 62 };
    const releaseGate =
      highCount > 0
        ? {
            tag: "Blocked",
            label: "存在高风险冲突，禁止发单",
            next: "先修正高风险字段，并由业务、货代或单证负责人复核。"
          }
        : score >= thresholds.ready
          ? {
              tag: "Ready",
              label: "可进入正式人工复核",
              next: "字段一致后仍需报关、银行、货代或单证负责人按职责复核。"
            }
          : score >= thresholds.review
            ? {
                tag: "Review",
                label: "先补字段或复查再发单",
                next: "补齐缺失字段和中风险冲突，再进入正式单证复核。"
              }
            : {
                tag: "Blocked",
                label: "单证证据不足",
                next: "回到订单主数据、工厂装柜数据或订舱资料补证据。"
              };
    const status = issues.length ? releaseGate.label : "字段一致，仍需人工复核";
    const summary = [
      ["检查字段", `${rows.length} 项`],
      ["冲突/缺失", `${issues.length} 项`],
      ["高风险", `${highCount} 项`],
      ["中风险", `${mediumCount} 项`],
      ["放行分", `${score}/100`],
      ["当前状态", status]
    ];
    return {
      rows,
      issues,
      highCount,
      mediumCount,
      fieldEvidence,
      score,
      releaseGate,
      status,
      summary,
      approvalGates: demo.approvalGates || [],
      nextRoutes: demo.nextRoutes || [],
      exportAcceptance: demo.exportAcceptance || [],
      manualBoundaries: demo.manualBoundaries || [],
      qualityChecks: demo.qualityChecks || []
    };
  }

  function documentEvidenceClass(status) {
    const normalized = String(status || "").toLowerCase();
    if (normalized === "已通过" || normalized === "pass") return "ready";
    if (normalized === "medium" || normalized === "需复核") return "medium";
    return "high";
  }

  function renderDocumentAnalysis(analysis, demo) {
    return `
      <div class="interactive-result-card">
        <p class="eyebrow">${analysis.releaseGate.tag} · Document Gate</p>
        <h3>单证放行闸口</h3>
        ${renderMiniTable(analysis.summary)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Field Evidence</p>
        <h3>单证字段证据与复查</h3>
        ${analysis.fieldEvidence
          .map(
            (field) => `
              <div class="document-evidence-item ${documentEvidenceClass(field.status)}">
                <span class="status-pill ${documentEvidenceClass(field.status)}">${field.status}</span>
                <strong>${field.field} · ${field.weight} 分</strong>
                <p><b>当前值：</b>${field.currentValue}</p>
                <p><b>来源：</b>${field.source} · <b>负责人：</b>${field.owner}</p>
                <p><b>复核口径：</b>${field.gate}</p>
                ${field.issue ? `<p><b>冲突说明：</b>${field.issue}</p>` : ""}
                <p><b>动作：</b>${field.action}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Conflict Report</p>
        <h3>冲突与处理建议</h3>
        ${
          analysis.issues.length
            ? analysis.issues
                .map(
                  (issue) => `
                    <div class="document-issue ${issue.level.toLowerCase()}">
                      <span class="status-pill ${issue.level.toLowerCase()}">${issue.level}</span>
                      <strong>${issue.field}</strong>
                      <p>${issue.issue}</p>
                      <p><b>建议：</b>${issue.action}</p>
                    </div>
                  `
                )
                .join("")
            : `<div class="empty-state"><h3>未发现冲突</h3><p>当前演示字段一致，但正式单据仍需按企业流程人工复核。</p></div>`
        }
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Approval Gates</p>
        <h3>专业审批闸口</h3>
        ${list(analysis.approvalGates)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Next Route</p>
        <h3>单证后路由</h3>
        ${list(analysis.nextRoutes)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Manual Boundary</p>
        <h3>必须人工确认</h3>
        ${list(analysis.manualBoundaries)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Export Acceptance</p>
        <h3>导出验收标准</h3>
        ${list(analysis.exportAcceptance)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Homework Check</p>
        <h3>作业验收要点</h3>
        ${list(analysis.qualityChecks)}
      </div>
    `;
  }

  function buildDocumentReportText(analysis, demo) {
    const issueText = analysis.issues.length
      ? analysis.issues.map((issue) => `- [${issue.level}] ${issue.field}: ${issue.issue} 建议：${issue.action}`).join("\n")
      : "- 未发现冲突；正式单据仍需按企业流程人工复核。";
    return [
      `${demo.title} - 检查报告`,
      "",
      "检查结果概览",
      ...analysis.summary.map((row) => `${row[0]}：${row[1]}`),
      "",
      "单证字段证据与复查",
      ...analysis.fieldEvidence.map((item) => `- [${item.status}] ${item.field}：${item.action}（负责人：${item.owner}）`),
      "",
      "冲突与处理建议",
      issueText,
      "",
      "专业审批闸口",
      ...analysis.approvalGates.map((item) => `- ${item}`),
      "",
      "必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`),
      "",
      "作业验收要点",
      ...analysis.qualityChecks.map((item) => `- ${item}`)
    ].join("\n");
  }

  function buildDocumentBriefText(analysis, demo) {
    const issueText = analysis.issues.length
      ? analysis.issues.map((issue) => `- [${issue.level}] ${issue.field}：${issue.issue} 建议：${issue.action}`)
      : ["- 未发现冲突；正式单据仍需按企业流程人工复核。"];
    return [
      `${demo.title} - 单证复查 Brief`,
      "",
      "单证放行闸口",
      ...analysis.summary.map((row) => `${row[0]}：${row[1]}`),
      "",
      "字段证据与复查",
      ...analysis.fieldEvidence.map((item) => `- [${item.status}] ${item.field}：${item.currentValue}；${item.action}（负责人：${item.owner}；复核：${item.gate}）`),
      "",
      "冲突与处理建议",
      ...issueText,
      "",
      "专业审批闸口",
      ...analysis.approvalGates.map((item) => `- ${item}`),
      "",
      "单证后路由",
      ...analysis.nextRoutes.map((item) => `- ${item}`),
      "",
      "必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`)
    ].join("\n");
  }

  function buildDocumentMarkdown(analysis, demo) {
    const inputRows = analysis.rows.map((row) => `| ${row.field} | ${row.pi || "缺失"} | ${row.ci || "缺失"} | ${row.pl || "缺失"} | ${row.booking || "缺失"} |`);
    const issueRows = analysis.issues.length
      ? analysis.issues.map((issue) => `| ${issue.field} | ${issue.level} | ${issue.issue} | ${issue.action} |`)
      : ["| 无 | Pass | 当前演示字段一致，但正式单据仍需人工复核。 | 按企业流程复核后再发单。 |"];
    return [
      `# ${demo.title} - 课堂检查输出`,
      "",
      "## 输入字段",
      "| 字段 | PI | CI | PL | 订舱资料 |",
      "|---|---|---|---|---|",
      ...inputRows,
      "",
      "## 检查结果概览",
      ...analysis.summary.map((row) => `- ${row[0]}：${row[1]}`),
      "",
      "## 单证字段证据与复查",
      "| 字段 | 状态 | 分值 | 当前值 | 来源 | 负责人 | 复核口径 | 动作 |",
      "|---|---|---:|---|---|---|---|---|",
      ...analysis.fieldEvidence.map((item) => `| ${item.field} | ${item.status} | ${item.weight || 0} | ${item.currentValue} | ${item.source} | ${item.owner} | ${item.gate} | ${item.action} |`),
      "",
      "## 冲突与处理建议",
      "| 字段 | 风险等级 | 问题 | 建议 |",
      "|---|---|---|---|",
      ...issueRows,
      "",
      "## 专业审批闸口",
      ...analysis.approvalGates.map((item) => `- ${item}`),
      "",
      "## 单证后路由",
      ...analysis.nextRoutes.map((item) => `- ${item}`),
      "",
      "## 必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`),
      "",
      "## 导出验收标准",
      ...analysis.exportAcceptance.map((item) => `- ${item}`),
      "",
      "## 作业验收要点",
      ...analysis.qualityChecks.map((item) => `- ${item}`)
    ].join("\n");
  }

  function renderPaymentField(field) {
    const control =
      field.type === "select"
        ? `
          <select id="payment-${field.id}" data-payment-field="${field.id}">
            ${field.options.map((option) => `<option value="${escapeHtml(option)}"${option === field.value ? " selected" : ""}>${escapeHtml(option)}</option>`).join("")}
          </select>
        `
        : `
          <input
            id="payment-${field.id}"
            type="number"
            min="${field.min}"
            step="${field.step}"
            value="${field.value}"
            data-payment-field="${field.id}"
          />
        `;
    return `
      <label class="quote-field payment-field" for="payment-${field.id}">
        <span>${field.label}</span>
        ${control}
        <small>${field.unit || "选择项"}</small>
      </label>
    `;
  }

  function setupPaymentDemo(demo) {
    const reset = byId("payment-demo-reset");
    const run = byId("payment-demo-run");
    const high = byId("payment-demo-high");
    const copy = byId("payment-demo-copy");
    const copyBrief = byId("payment-demo-copy-brief");
    const download = byId("payment-demo-download");
    const status = byId("payment-demo-status");
    const output = byId("payment-demo-output");
    let highOnly = false;
    let currentAnalysis = analyzePaymentRisk(readValues(), demo, highOnly);

    function setStatus(message) {
      if (!status) return;
      status.textContent = message || "";
    }

    function readValues() {
      return demo.fields.reduce((values, field) => {
        const input = byId(`payment-${field.id}`);
        if (field.type === "number") {
          const number = Number(input.value);
          values[field.id] = Number.isFinite(number) ? Math.max(number, field.min || 0) : field.value;
        } else {
          values[field.id] = input.value || field.value;
        }
        return values;
      }, {});
    }

    function updateOutput() {
      currentAnalysis = analyzePaymentRisk(readValues(), demo, highOnly);
      output.innerHTML = renderPaymentAnalysis(currentAnalysis, demo);
      high.textContent = highOnly ? "显示全部风险" : "只看高风险";
      high.setAttribute("aria-pressed", highOnly ? "true" : "false");
      setStatus(highOnly ? "当前只显示高风险事项，可复制回复或下载付款风险作业包。" : "付款风险矩阵已生成，可复制客户回复或下载为课堂作业包。");
    }

    demo.fields.forEach((field) => {
      const input = byId(`payment-${field.id}`);
      if (input) {
        input.addEventListener("input", updateOutput);
        input.addEventListener("change", updateOutput);
      }
    });
    reset.addEventListener("click", () => {
      demo.fields.forEach((field) => {
        byId(`payment-${field.id}`).value = field.value;
      });
      highOnly = false;
      updateOutput();
    });
    run.addEventListener("click", updateOutput);
    high.addEventListener("click", () => {
      highOnly = !highOnly;
      updateOutput();
    });
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(currentAnalysis.replyDraft);
        setStatus("客户谨慎回复已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请从客户回复草稿区域手动复制。");
      }
    });
    copyBrief.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildPaymentBriefText(currentAnalysis, demo));
        setStatus("付款审批 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请下载 Markdown 或从输出区域手动复制。");
      }
    });
    download.addEventListener("click", () => {
      downloadTextFile(demo.exportFilename || "payment-risk-output.md", buildPaymentMarkdown(currentAnalysis, demo), "text/markdown;charset=utf-8");
      setStatus("Markdown 付款风险作业包已生成下载。");
    });
    updateOutput();
  }

  function paymentRiskClass(level) {
    const normalized = String(level || "").toLowerCase();
    if (normalized === "high") return "high";
    if (normalized === "medium") return "medium";
    return "ready";
  }

  function analyzePaymentRisk(values, demo, highOnly) {
    const allRisks = [];
    function addRisk(level, label, issue, action, owner, negotiation) {
      allRisks.push({
        level,
        label,
        issue,
        action,
        owner,
        negotiation,
        riskClass: paymentRiskClass(level)
      });
    }

    if (values.balanceTrigger.includes("到港") || values.balanceTrigger.includes("OA")) {
      addRisk(
        "High",
        "尾款节点靠后",
        "到港后付款或账期付款会把货权、资金回收和客户违约风险集中到卖方。",
        "优先改为发货前付清、提单副本后付清，或增加信保、担保和内部审批。",
        "业务主管 / 财务 / 老板",
        "建议把尾款节点前移到发货前或提单副本后，并说明这是大额新订单的标准风控要求。"
      );
    } else if (values.balanceTrigger.includes("提单")) {
      addRisk(
        "Medium",
        "尾款依赖提单节点",
        "提单副本或提单草稿付款比到港后可控，但仍需要控制放单、改单和客户拖延风险。",
        "确认放单权限、尾款到账时间、改单责任和逾期处理方式。",
        "业务主管 / 单证 / 财务",
        "可说明提单节点付款需要配合明确放单规则和付款到账时间。"
      );
    }

    if (values.paymentMethod === "OA" || values.paymentMethod === "D/A") {
      addRisk(
        "High",
        `${values.paymentMethod} 账期风险`,
        "OA 或 D/A 对新客户和大额项目风险高，可能形成坏账、追款和争议成本。",
        "必须先做客户资信、授信额度、信保覆盖和管理层审批。",
        "财务 / 信保 / 老板",
        "建议先拒绝开放账期，改为 T/T 或信用证等更可控结构。"
      );
    } else if (values.paymentMethod === "D/P") {
      addRisk(
        "Medium",
        "D/P 收款风险",
        "D/P 仍可能出现客户拒付、拒收或目的港滞港风险。",
        "确认客户资信、目的港处置方案和单据控制方式。",
        "财务 / 单证 / 货代",
        "可要求提高定金比例或改为 T/T 与提单副本后付清。"
      );
    } else if (values.paymentMethod.includes("L/C")) {
      addRisk(
        values.paymentMethod.includes("usance") ? "High" : "Medium",
        "信用证审单风险",
        "信用证可能存在软条款、不符点、远期付款和银行审单风险。",
        "必须由银行、单证和业务负责人审查条款后再接受。",
        "银行 / 单证 / 业务主管",
        "可说明接受信用证前需要先审查开证行、条款、交单期限和不符点责任。"
      );
    }

    if (values.tradeTerm.includes("DDP")) {
      addRisk(
        "High",
        "DDP 到项目现场",
        "DDP 涉及目的国清关、税费、当地派送、建筑许可和现场交付责任，不能只按海运报价判断。",
        "由当地代理、货代、税务或法务确认后再决定是否接受。",
        "货代 / 当地代理 / 税务或法务",
        "建议先改为 CIF、CFR 或 DAP，并把目的国税费、清关和现场责任单独确认。"
      );
    } else if (values.tradeTerm.includes("DAP")) {
      addRisk(
        "Medium",
        "DAP 派送责任",
        "DAP 仍涉及目的地派送、卸货、当地道路和责任交接风险。",
        "确认目的地地址、派送能力、卸货责任和费用边界。",
        "货代 / 客户 / 业务主管",
        "可要求客户确认卸货责任、目的地条件和派送费用有效期。"
      );
    }

    if (values.depositPercent < 30) {
      addRisk(
        values.depositPercent < 20 ? "High" : "Medium",
        "定金比例偏低",
        "定金不足会放大生产投入、材料采购和客户取消订单的资金风险。",
        "提高定金比例，或增加不可撤销付款承诺和内部审批。",
        "财务 / 业务主管",
        "建议把定金提高到能覆盖前期采购和生产投入的水平。"
      );
    }

    if (values.orderAmountUsd >= 500000 && values.buyerHistory === "首次合作") {
      addRisk(
        "High",
        "大额新客户",
        "首次合作且订单金额较大，客户资信、付款能力和履约意愿都需要额外确认。",
        "做客户背景、资信、信保、合同责任和管理层审批。",
        "业务主管 / 财务 / 信保 / 老板",
        "建议先用更稳健的付款结构完成首单，再讨论更宽松条款。"
      );
    } else if (values.orderAmountUsd >= 300000) {
      addRisk(
        "Medium",
        "大额订单审批",
        "订单金额较大，价格、付款、交期、索赔和违约责任都需要更严格审批。",
        "进入大额订单审批，并记录价格、付款和合同确认人。",
        "业务主管 / 财务 / 管理层",
        "可说明大额项目需要内部审批后才能确认最终条款。"
      );
    }

    if (values.buyerHistory === "首次合作") {
      addRisk(
        "Medium",
        "首次合作资信未知",
        "首次合作缺少历史付款和履约记录，不能按老客户口径放宽条款。",
        "补充公司背景、项目真实性、付款能力、最终收货人和授权签约人。",
        "业务 / 财务 / 信保",
        "可向客户说明首次合作需要完成标准资信和订单审批流程。"
      );
    }

    if (!allRisks.length) {
      addRisk(
        "Low",
        "付款结构相对可控",
        "当前条款没有明显高风险信号，但仍需按企业流程确认客户资信、合同和单据。",
        "保留正式报价、合同、财务和单证复核。",
        "业务主管 / 财务",
        "可在确认内部流程后继续推进正式条款。"
      );
    }

    const levelRank = { High: 3, Medium: 2, Low: 1 };
    allRisks.sort((left, right) => (levelRank[right.level] || 0) - (levelRank[left.level] || 0));

    const riskScore = allRisks.reduce((score, item) => score + (item.level === "High" ? 35 : item.level === "Medium" ? 20 : 8), 0);
    const cappedScore = Math.min(100, riskScore);
    const overallLevel = cappedScore >= 70 ? "High" : cappedScore >= 35 ? "Medium" : "Low";
    const highCount = allRisks.filter((item) => item.level === "High").length;
    const mediumCount = allRisks.filter((item) => item.level === "Medium").length;
    const items = highOnly ? allRisks.filter((item) => item.level === "High") : allRisks;
    const approvals = [...new Set(allRisks.map((item) => item.owner))];
    const negotiations = [...new Set(allRisks.map((item) => item.negotiation))];
    const replyDraft = buildPaymentReplyDraft(values, demo, negotiations, overallLevel);
    const evidenceItems = (demo.evidenceChecks || []).map((check) => {
      let passed = true;
      let currentValue = values[check.id];
      if (check.id === "orderAmountUsd") passed = values.orderAmountUsd < 300000;
      else if (check.id === "depositPercent") passed = values.depositPercent >= 30;
      else if (check.id === "paymentMethod") passed = !["OA", "D/A", "D/P"].includes(values.paymentMethod) && !values.paymentMethod.includes("usance");
      else if (check.id === "balanceTrigger") passed = !values.balanceTrigger.includes("到港") && !values.balanceTrigger.includes("OA");
      else if (check.id === "tradeTerm") passed = !values.tradeTerm.includes("DDP") && !values.tradeTerm.includes("DAP");
      else if (check.id === "buyerHistory") passed = values.buyerHistory !== "首次合作";
      else if (check.id === "contractBoundary") {
        passed = true;
        currentValue = "合同边界已写入输出";
      }
      const relatedRisk = allRisks.find((risk) => risk.label.includes(check.label) || risk.issue.includes(check.label) || risk.owner.includes(check.owner.split(" ")[0]));
      return {
        ...check,
        passed,
        currentValue,
        status: passed ? "已通过" : relatedRisk?.level || "需审批",
        action: passed ? check.passText : relatedRisk?.action || check.failText,
        issue: passed ? "" : relatedRisk?.issue || check.failText
      };
    });
    const approvalScore = Math.max(
      0,
      Math.min(
        100,
        evidenceItems.reduce((total, item) => total + (item.passed ? item.weight || 0 : 0), 0) - highCount * 8 - mediumCount * 3
      )
    );
    const thresholds = demo.approvalThresholds || { ready: 82, review: 58 };
    const approvalGate =
      highCount > 0
        ? {
            tag: "Blocked",
            label: "高风险条款需审批后才能回复",
            next: "先完成财务、信保、银行、货代、法务或管理层审批，再给客户更新方案。"
          }
        : approvalScore >= thresholds.ready
          ? {
              tag: "Ready",
              label: "可进入人工确认后的谈判回复",
              next: "由业务负责人确认回复口径后，对客户发送谨慎条款建议。"
            }
          : approvalScore >= thresholds.review
            ? {
                tag: "Review",
                label: "先补资信和条款证据",
                next: "补齐客户资信、付款能力、放单规则和交付责任后再回复。"
              }
            : {
                tag: "Blocked",
                label: "付款审批证据不足",
                next: "回到订单、客户资信、合同和付款条款补证据。"
              };

    return {
      values,
      allRisks,
      items,
      highOnly,
      approvals,
      negotiations,
      evidenceItems,
      approvalScore,
      approvalGate,
      approvalGates: demo.approvalGates || [],
      nextRoutes: demo.nextRoutes || [],
      exportAcceptance: demo.exportAcceptance || [],
      replyDraft,
      overallLevel,
      riskScore: cappedScore,
      summary: [
        ["综合风险", `${overallLevel} / ${cappedScore} 分`],
        ["审批分", `${approvalScore}/100`],
        ["高风险", `${highCount} 项`],
        ["中风险", `${mediumCount} 项`],
        ["确认岗位", `${approvals.length} 组`],
        ["当前闸口", approvalGate.label],
        ["当前视图", highOnly ? "只看高风险" : "全部风险"]
      ],
      manualBoundaries: demo.manualBoundaries || [],
      qualityChecks: demo.qualityChecks || []
    };
  }

  function buildPaymentReplyDraft(values, demo, negotiations, overallLevel) {
    return [
      demo.customerReplyOpening,
      "",
      `Current proposal: ${values.paymentMethod}, ${values.depositPercent}% deposit, balance term: ${values.balanceTrigger}, trade term: ${values.tradeTerm}.`,
      `Initial internal risk level: ${overallLevel}. This is not a final approval decision.`,
      "",
      "Before confirmation, we need to review:",
      ...negotiations.slice(0, 4).map((item, index) => `${index + 1}. ${item}`),
      "",
      "After the responsible teams confirm payment risk, delivery responsibility, and contract terms, we can update you with a safer and workable proposal."
    ].join("\n");
  }

  function buildPaymentBriefText(analysis, demo) {
    return [
      `${demo.title} - 付款审批 Brief`,
      "",
      "付款审批闸口",
      ...analysis.summary.map((row) => `${row[0]}：${row[1]}`),
      "",
      "付款风险证据",
      ...analysis.evidenceItems.map((item) => `- [${item.status}] ${item.label}：${item.currentValue}；${item.action}（负责人：${item.owner}；审批：${item.gate}）`),
      "",
      "风险事项",
      ...analysis.allRisks.map((item) => `- [${item.level}] ${item.label}：${item.issue}；动作：${item.action}；确认人：${item.owner}`),
      "",
      "风险审批闸口",
      ...analysis.approvalGates.map((item) => `- ${item}`),
      "",
      "客户谈判方向",
      ...analysis.negotiations.map((item) => `- ${item}`),
      "",
      "付款后路由",
      ...analysis.nextRoutes.map((item) => `- ${item}`),
      "",
      "必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`)
    ].join("\n");
  }

  function renderPaymentAnalysis(analysis, demo) {
    return `
      <div class="interactive-result-card">
        <p class="eyebrow">${analysis.approvalGate.tag} · Payment Gate</p>
        <h3>付款审批闸口</h3>
        ${renderMiniTable(analysis.summary)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Risk Evidence</p>
        <h3>付款风险证据</h3>
        ${analysis.evidenceItems
          .map(
            (item) => `
              <div class="payment-evidence-item ${paymentRiskClass(item.status)}">
                <span class="status-pill ${paymentRiskClass(item.status)}">${item.status}</span>
                <strong>${item.label} · ${item.weight} 分</strong>
                <p><b>当前值：</b>${item.currentValue}</p>
                <p><b>来源：</b>${item.source} · <b>负责人：</b>${item.owner}</p>
                <p><b>审批口径：</b>${item.gate}</p>
                ${item.issue ? `<p><b>风险说明：</b>${item.issue}</p>` : ""}
                <p><b>动作：</b>${item.action}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Risk Matrix</p>
        <h3>风险事项</h3>
        ${
          analysis.items.length
            ? analysis.items
                .map(
                  (item) => `
                    <div class="payment-risk-item ${item.riskClass}">
                      <span class="status-pill ${item.riskClass}">${item.level}</span>
                      <strong>${item.label}</strong>
                      <p><b>原因：</b>${item.issue}</p>
                      <p><b>动作：</b>${item.action}</p>
                      <p><b>确认人：</b>${item.owner}</p>
                    </div>
                  `
                )
                .join("")
            : `<div class="empty-state"><h3>暂无高风险事项</h3><p>当前筛选下没有高风险条款，请回到全部风险继续复核。</p></div>`
        }
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Approval</p>
        <h3>内部审批清单</h3>
        ${list(analysis.approvals)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Approval Gates</p>
        <h3>风险审批闸口</h3>
        ${list(analysis.approvalGates)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Negotiation</p>
        <h3>客户谈判方向</h3>
        ${list(analysis.negotiations)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Next Route</p>
        <h3>付款后路由</h3>
        ${list(analysis.nextRoutes)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Reply Draft</p>
        <h3>客户谨慎回复</h3>
        <pre class="reply-draft">${escapeHtml(analysis.replyDraft)}</pre>
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Manual Boundary</p>
        <h3>必须人工确认</h3>
        ${list(analysis.manualBoundaries)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Export Acceptance</p>
        <h3>导出验收标准</h3>
        ${list(analysis.exportAcceptance)}
      </div>
      <div class="interactive-result-card">
        <p class="eyebrow">Homework Check</p>
        <h3>作业验收要点</h3>
        ${list(analysis.qualityChecks)}
      </div>
    `;
  }

  function buildPaymentMarkdown(analysis, demo) {
    const fieldRows = demo.fields.map((field) => `| ${field.label} | ${analysis.values[field.id]}${field.unit ? ` ${field.unit}` : ""} |`);
    const riskRows = analysis.allRisks.map((item) => `| ${item.label} | ${item.level} | ${item.issue} | ${item.action} | ${item.owner} |`);
    return [
      `# ${demo.title} - 课堂风险输出`,
      "",
      "## 样例场景",
      `- 客户：${demo.sampleProfile.customer}`,
      `- 产品：${demo.sampleProfile.product}`,
      `- 场景：${demo.sampleProfile.scenario}`,
      "",
      "## 输入条款",
      "| 字段 | 内容 |",
      "|---|---|",
      ...fieldRows,
      "",
      "## 风险概览",
      ...analysis.summary.map((row) => `- ${row[0]}：${row[1]}`),
      "",
      "## 付款风险证据",
      "| 项目 | 状态 | 分值 | 当前值 | 来源 | 负责人 | 审批口径 | 动作 |",
      "|---|---|---:|---|---|---|---|---|",
      ...analysis.evidenceItems.map((item) => `| ${item.label} | ${item.status} | ${item.weight || 0} | ${item.currentValue} | ${item.source} | ${item.owner} | ${item.gate} | ${item.action} |`),
      "",
      "## 风险事项",
      "| 事项 | 风险等级 | 原因 | 动作 | 确认人 |",
      "|---|---|---|---|---|",
      ...riskRows,
      "",
      "## 内部审批清单",
      ...analysis.approvals.map((item) => `- ${item}`),
      "",
      "## 风险审批闸口",
      ...analysis.approvalGates.map((item) => `- ${item}`),
      "",
      "## 客户谈判方向",
      ...analysis.negotiations.map((item) => `- ${item}`),
      "",
      "## 付款后路由",
      ...analysis.nextRoutes.map((item) => `- ${item}`),
      "",
      "## 客户谨慎回复",
      "",
      "```text",
      analysis.replyDraft,
      "```",
      "",
      "## 必须人工确认",
      ...analysis.manualBoundaries.map((item) => `- ${item}`),
      "",
      "## 导出验收标准",
      ...analysis.exportAcceptance.map((item) => `- ${item}`),
      "",
      "## 作业验收要点",
      ...analysis.qualityChecks.map((item) => `- ${item}`)
    ].join("\n");
  }

  function renderToolMockups() {
    const target = byId("tool-mockups");
    if (!target) return;
    target.innerHTML = data.tools
      .map(
        (tool) => `
          <article class="tool-mockup-card">
            <div class="tool-mockup-head">
              <div>
                <p class="eyebrow">${tool.stage}</p>
                <h3>${tool.mockupTitle || tool.title}</h3>
              </div>
              ${tagRow(tool.relatedTracks)}
            </div>
            ${renderToolMockupBody(tool)}
          </article>
        `
      )
      .join("");
  }

  function renderToolMockupBody(tool) {
    if (tool.mockupType === "table") {
      return `
        <div class="table-shell compact-table">
          <table class="data-table">
            <thead>
              <tr>${tool.mockupColumns.map((column) => `<th>${column}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${tool.mockupRows
                .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
                .join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    if (tool.mockupType === "split") {
      return `
        <div class="split-mockup">
          <div>
            <strong>输入</strong>
            <blockquote>${tool.mockupInput}</blockquote>
          </div>
          <div>
            <strong>输出</strong>
            ${list(tool.mockupOutput)}
          </div>
        </div>
      `;
    }

    if (tool.mockupType === "metrics") {
      return `
        <div class="metric-board">
          ${tool.mockupMetrics
            .map(
              (metric) => `
                <div>
                  <span>${metric[0]}</span>
                  <strong>${metric[1]}</strong>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block"><strong>注意事项</strong>${list(tool.mockupNotes)}</div>
      `;
    }

    if (tool.mockupType === "kanban") {
      return `
        <div class="kanban-board">
          ${tool.mockupColumns
            .map(
              (column) => `
                <div class="kanban-column">
                  <h4>${column.title}</h4>
                  ${column.cards.map((card) => `<span>${card}</span>`).join("")}
                </div>
              `
            )
            .join("")}
        </div>
      `;
    }

    return `<p>${tool.value}</p>`;
  }

  function renderPromptMetrics() {
    const target = byId("prompt-metrics");
    if (!target || !data.promptMetrics) return;
    target.innerHTML = data.promptMetrics
      .map(
        (metric) => `
          <article class="metric playbook-metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderPromptWorkflow() {
    const target = byId("prompt-workflow");
    if (!target || !data.promptWorkflow) return;
    target.innerHTML = data.promptWorkflow
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid two-column">
              <div>
                <strong>输入资料</strong>
                <p>${step.input}</p>
              </div>
              <div>
                <strong>输出结果</strong>
                <p>${step.output}</p>
              </div>
              <div class="span-2">
                <strong>讲解重点</strong>
                <p>${step.teachingPoint}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderPromptComposer() {
    const target = byId("prompt-composer");
    if (!target || !data.promptComposer) return;
    const composer = data.promptComposer;
    const defaults = composer.defaults || {};
    target.innerHTML = `
      <article class="decision-tool-card prompt-composer-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Prompt Operations Desk</p>
          <h3>${composer.title}</h3>
          <p>${composer.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="prompt-composer-workflow">
              <span>业务场景</span>
              <select id="prompt-composer-workflow" data-prompt-composer-field="workflow">
                ${composer.workflows
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.workflow === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-composer-industry">
              <span>行业资料</span>
              <select id="prompt-composer-industry" data-prompt-composer-field="industry">
                ${composer.industries
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.industry === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-composer-outputFormat">
              <span>输出格式</span>
              <select id="prompt-composer-outputFormat" data-prompt-composer-field="outputFormat">
                ${composer.outputFormats
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.outputFormat === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-composer-boundaryMode">
              <span>人工边界</span>
              <select id="prompt-composer-boundaryMode" data-prompt-composer-field="boundaryMode">
                ${composer.boundaryModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.boundaryMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-composer-teachingMode">
              <span>使用场景</span>
              <select id="prompt-composer-teachingMode" data-prompt-composer-field="teachingMode">
                ${composer.teachingModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.teachingMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel prompt-composer-result" aria-live="polite">
          <div id="prompt-composer-result"></div>
          <div class="hero-actions compact-actions prompt-composer-actions">
            <button class="button secondary" type="button" id="prompt-composer-copy">复制指令</button>
            <button class="button secondary" type="button" id="prompt-composer-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="prompt-composer-status"></span>
        </div>
      </article>
    `;
    setupPromptComposer(composer);
  }

  function setupPromptComposer(composer) {
    const fields = [...document.querySelectorAll("[data-prompt-composer-field]")];
    const result = byId("prompt-composer-result");
    const copy = byId("prompt-composer-copy");
    const download = byId("prompt-composer-download");
    const status = byId("prompt-composer-status");
    if (!fields.length || !result) return;
    let currentPrompt = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.promptComposerField] = field.value;
        return values;
      }, {});
    }

    function composePrompt(values) {
      const workflow = composer.workflows.find((item) => item.id === values.workflow) || composer.workflows[0];
      const industry = composer.industries.find((item) => item.id === values.industry) || composer.industries[0];
      const outputFormat = composer.outputFormats.find((item) => item.id === values.outputFormat) || composer.outputFormats[0];
      const boundaryMode = composer.boundaryModes.find((item) => item.id === values.boundaryMode) || composer.boundaryModes[0];
      const teachingMode = composer.teachingModes.find((item) => item.id === values.teachingMode) || composer.teachingModes[0];
      const promptText = [
        `你是外贸业务流程与 Codex 自动化教练。请基于以下真实业务场景，完成“${workflow.label}”任务。`,
        "",
        "【业务背景】",
        workflow.businessContext,
        "",
        "【行业资料】",
        `${industry.label}：${industry.productContext}`,
        "",
        "【已知字段】",
        industry.knownFields.map((item) => `- ${item}`).join("\n"),
        "",
        "【需要补充或人工确认的字段】",
        industry.missingFields.map((item) => `- ${item}`).join("\n"),
        "",
        "【任务要求】",
        workflow.task,
        "",
        "【输入资料检查】",
        workflow.inputChecklist.map((item) => `- ${item}`).join("\n"),
        "",
        "【输出格式】",
        outputFormat.instruction,
        "",
        "【课堂/交付用途】",
        teachingMode.instruction,
        "",
        "【人工确认边界】",
        boundaryMode.instruction,
        industry.boundary,
        "",
        "【质量门槛】",
        workflow.qualityGate,
        "",
        "请先输出已知信息和缺失信息，再输出正式结果。不要把未知信息补写成事实。"
      ].join("\n");
      return { workflow, industry, outputFormat, boundaryMode, teachingMode, promptText };
    }

    function renderResult() {
      currentPrompt = composePrompt(readValues());
      const { workflow, industry, outputFormat, boundaryMode, teachingMode, promptText } = currentPrompt;
      result.innerHTML = `
        <p class="eyebrow">${workflow.module} · ${workflow.linkedTool}</p>
        <h3>${workflow.label}</h3>
        <p>${workflow.task}</p>
        <div class="prompt-composer-meta">
          <div>
            <strong>${industry.label}</strong>
            <span>行业资料</span>
          </div>
          <div>
            <strong>${outputFormat.label}</strong>
            <span>${outputFormat.bestFor}</span>
          </div>
          <div>
            <strong>${boundaryMode.label}</strong>
            <span>${boundaryMode.badge}</span>
          </div>
          <div>
            <strong>${teachingMode.label}</strong>
            <span>使用场景</span>
          </div>
        </div>
        <div class="prompt-composer-grid">
          <div>
            <strong>输入资料检查</strong>
            ${list(workflow.inputChecklist)}
          </div>
          <div>
            <strong>预期输出</strong>
            ${list(workflow.expectedOutputs)}
          </div>
          <div>
            <strong>待确认字段</strong>
            ${list(industry.missingFields)}
          </div>
          <div>
            <strong>质量门槛</strong>
            <p>${workflow.qualityGate}</p>
          </div>
        </div>
        <pre class="prompt-composer-text">${escapeHtml(promptText)}</pre>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentPrompt) return;
      try {
        await navigator.clipboard.writeText(currentPrompt.promptText);
        setStatus("指令已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentPrompt) return;
      downloadTextFile(composer.exportFilename || "foreign-trade-codex-prompt.md", buildPromptComposerMarkdown(currentPrompt), "text/markdown;charset=utf-8");
      setStatus("Markdown 指令包已生成下载。");
    });
    renderResult();
  }

  function buildPromptComposerMarkdown(promptPlan) {
    const { workflow, industry, outputFormat, boundaryMode, teachingMode, promptText } = promptPlan;
    return `# 外贸 Codex 指令组装结果

- 业务场景：${workflow.label}
- 课程模块：${workflow.module}
- 关联工具：${workflow.linkedTool}
- 行业资料：${industry.label}
- 输出格式：${outputFormat.label}
- 人工边界：${boundaryMode.label}
- 使用场景：${teachingMode.label}

## 输入资料检查
${workflow.inputChecklist.map((item) => `- ${item}`).join("\n")}

## 预期输出
${workflow.expectedOutputs.map((item) => `- ${item}`).join("\n")}

## 待确认字段
${industry.missingFields.map((item) => `- ${item}`).join("\n")}

## 质量门槛
${workflow.qualityGate}

## 可复制指令

${promptText}
`;
  }

  function renderPromptDeploymentDesk() {
    const target = byId("prompt-deployment-desk");
    if (!target || !data.promptDeploymentDesk || !data.promptComposer) return;
    const desk = data.promptDeploymentDesk;
    const composer = data.promptComposer;
    const defaults = desk.defaults || {};
    const downloads = data.promptDeploymentDownloads || [];
    target.innerHTML = `
      <div class="prompt-deployment-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card prompt-deployment-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Deployment Builder</p>
          <h3>${desk.title}</h3>
          <p>${desk.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="prompt-deployment-workflow">
              <span>指令场景</span>
              <select id="prompt-deployment-workflow" data-prompt-deployment-field="workflow">
                ${composer.workflows
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.workflow === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-deployment-target">
              <span>部署目标</span>
              <select id="prompt-deployment-target" data-prompt-deployment-field="deploymentTarget">
                ${desk.deploymentTargets
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.deploymentTarget === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-deployment-audience">
              <span>使用对象</span>
              <select id="prompt-deployment-audience" data-prompt-deployment-field="audienceMode">
                ${desk.audienceModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.audienceMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-deployment-evidence">
              <span>证据状态</span>
              <select id="prompt-deployment-evidence" data-prompt-deployment-field="evidenceStatus">
                ${desk.evidenceStatuses
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.evidenceStatus === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-deployment-action">
              <span>下一动作</span>
              <select id="prompt-deployment-action" data-prompt-deployment-field="nextAction">
                ${desk.nextActions
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.nextAction === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel prompt-deployment-result" aria-live="polite">
          <div id="prompt-deployment-result"></div>
          <div class="hero-actions compact-actions prompt-deployment-actions">
            <button class="button secondary" type="button" id="prompt-deployment-copy">复制部署指令</button>
            <button class="button secondary" type="button" id="prompt-deployment-download">导出部署简报</button>
          </div>
          <span class="tool-action-status" id="prompt-deployment-status"></span>
        </div>
      </article>
      <article class="glass-panel standard-panel prompt-deployment-rules">
        <div class="standard-layout">
          <div>
            <p class="eyebrow">Operating Rules</p>
            <h3>指令部署运营规则</h3>
            <p>任何指令进入课程、工具、公开展示或企业项目之前，都先按这组规则确认资料权限、质量门槛和人工边界。</p>
          </div>
          ${list(desk.operatingRules)}
        </div>
      </article>
    `;
    setupPromptDeploymentDesk(desk, composer);
  }

  function setupPromptDeploymentDesk(desk, composer) {
    const fields = [...document.querySelectorAll("[data-prompt-deployment-field]")];
    const result = byId("prompt-deployment-result");
    const copy = byId("prompt-deployment-copy");
    const download = byId("prompt-deployment-download");
    const status = byId("prompt-deployment-status");
    if (!fields.length || !result) return;
    let currentPlan = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.promptDeploymentField] = field.value;
        return values;
      }, {});
    }

    function findById(items, id) {
      return items.find((item) => item.id === id) || items[0];
    }

    function findRoute(id) {
      return desk.workflowRoutes.find((item) => item.workflow === id) || desk.workflowRoutes[0];
    }

    function decideDeployment(target, evidence, nextAction, score) {
      const publicTarget = ["public-demo", "resource-lead"].includes(target.id) || ["consultation-proof", "resource-followup"].includes(nextAction.id);
      const privateOrUnready = evidence.id === "repair-needed" || (evidence.id === "enterprise-private" && publicTarget) || (evidence.id === "learner-homework" && target.id === "public-demo");
      if (privateOrUnready) {
        return {
          label: "先返修或换公开样例",
          tone: "repair",
          detail: "当前证据不适合直接公开展示、资源承接或转化证明，先补脱敏、授权、质量检查或改用集成房屋样例。"
        };
      }
      if (target.id === "enterprise-sop" || evidence.id === "enterprise-private" || nextAction.id === "enterprise-handoff") {
        return {
          label: "企业审批后部署",
          tone: "enterprise",
          detail: "适合进入企业内训或 SOP 共建，但必须先确认资料权限、岗位责任、审批节点和验收范围。"
        };
      }
      if (target.id === "tool-spec" || nextAction.id === "route-tool-sprint") {
        return {
          label: "进入工具规格",
          tone: "tool",
          detail: "该指令已经具备字段化和重复执行价值，可转入工具需求、开发验收和版本回写。"
        };
      }
      if ((target.id === "public-demo" || nextAction.id === "consultation-proof") && score >= 32) {
        return {
          label: "可用于转化证据",
          tone: "proof",
          detail: "证据状态稳定，可用于公开课或咨询展示，但仍需标注教学样例和人工确认边界。"
        };
      }
      return {
        label: "课堂可部署",
        tone: "classroom",
        detail: "适合进入系统课或学员作业链路，先通过课堂演示和作业验收沉淀稳定样例。"
      };
    }

    function composePlan(values) {
      const workflow = findById(composer.workflows, values.workflow);
      const target = findById(desk.deploymentTargets, values.deploymentTarget);
      const audience = findById(desk.audienceModes, values.audienceMode);
      const evidence = findById(desk.evidenceStatuses, values.evidenceStatus);
      const nextAction = findById(desk.nextActions, values.nextAction);
      const route = findRoute(workflow.id);
      const pageRoute = [...new Set([...target.pageRoute, ...route.pageRoute, ...nextAction.route])];
      const downloadFamilies = [...new Set(route.downloadFamilies)];
      const score = target.score + audience.score + evidence.score + nextAction.score;
      const decision = decideDeployment(target, evidence, nextAction, score);
      const runbook = [
        {
          stage: "01",
          title: "锁定业务场景",
          detail: `${workflow.module} ${workflow.label}，先确认产品、客户、国家、订单阶段和课程模块。`
        },
        {
          stage: "02",
          title: "收集输入资料",
          detail: workflow.inputChecklist.join("、")
        },
        {
          stage: "03",
          title: "执行指令并留证",
          detail: `输出 ${workflow.expectedOutputs.join("、")}，并保存课堂截图、作业记录或企业验收记录。`
        },
        {
          stage: "04",
          title: "检查人工边界",
          detail: route.manualChecks.join("、")
        },
        {
          stage: "05",
          title: "部署到目标链路",
          detail: `${target.output} 下一动作：${nextAction.action}`
        },
        {
          stage: "06",
          title: "回写平台资产",
          detail: `更新 ${pageRoute.join("、")}，并维护 ${downloadFamilies.join("、")}。`
        }
      ];
      const codexInstruction = [
        `你是外贸培训平台的课程与自动化运营负责人。请把“${workflow.label}”指令部署到“${target.label}”场景。`,
        "",
        "【目标用户】",
        `${audience.label}：${audience.concern}`,
        "",
        "【证据状态】",
        `${evidence.label}：${evidence.rule}`,
        "",
        "【业务场景】",
        workflow.businessContext,
        "",
        "【输入资料】",
        workflow.inputChecklist.map((item) => `- ${item}`).join("\n"),
        "",
        "【预期输出】",
        workflow.expectedOutputs.map((item) => `- ${item}`).join("\n"),
        "",
        "【部署要求】",
        target.output,
        "",
        "【下一动作】",
        `${nextAction.label}：${nextAction.action}`,
        "",
        "【质量门槛】",
        workflow.qualityGate,
        route.deploymentProof,
        "",
        "【人工确认边界】",
        route.manualChecks.map((item) => `- ${item}`).join("\n"),
        "",
        "请输出：1）部署简报；2）课堂或交付步骤；3）可展示证据；4）需要人工确认的事项；5）应该回写到哪些页面和下载资产。"
      ].join("\n");

      return {
        workflow,
        target,
        audience,
        evidence,
        nextAction,
        route,
        pageRoute,
        downloadFamilies,
        score,
        decision,
        runbook,
        codexInstruction
      };
    }

    function renderResult() {
      currentPlan = composePlan(readValues());
      const { workflow, target, audience, evidence, nextAction, route, pageRoute, downloadFamilies, score, decision, runbook, codexInstruction } = currentPlan;
      result.innerHTML = `
        <div class="case-card-head">
          <div>
            <p class="eyebrow">${workflow.module} · ${target.owner}</p>
            <h3>${workflow.label}</h3>
          </div>
          <span class="tag prompt-deployment-decision ${decision.tone}">${decision.label}</span>
        </div>
        <p>${target.purpose}</p>
        <div class="prompt-deployment-meta">
          <div>
            <strong>${score}</strong>
            <span>部署评分</span>
          </div>
          <div>
            <strong>${audience.label}</strong>
            <span>${audience.proofNeed}</span>
          </div>
          <div>
            <strong>${evidence.label}</strong>
            <span>${evidence.masking}</span>
          </div>
          <div>
            <strong>${nextAction.label}</strong>
            <span>${nextAction.businessValue}</span>
          </div>
        </div>
        <div class="prompt-deployment-grid">
          <div>
            <strong>输入资料</strong>
            ${list(workflow.inputChecklist)}
          </div>
          <div>
            <strong>预期输出</strong>
            ${list(workflow.expectedOutputs)}
          </div>
          <div>
            <strong>Codex 可做</strong>
            ${list(route.codexTasks)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(route.manualChecks)}
          </div>
          <div>
            <strong>课堂证据</strong>
            <p>${route.classroomEvidence}</p>
          </div>
          <div>
            <strong>企业延展</strong>
            <p>${route.enterpriseExtension}</p>
          </div>
        </div>
        <div class="prompt-deployment-output">
          <div>
            <strong>部署判断</strong>
            <p>${decision.detail}</p>
          </div>
          <div>
            <strong>页面路由</strong>
            <div class="tag-row route-tags">
              ${pageRoute.map((page) => `<a class="tag" href="./${page}">${page}</a>`).join("")}
            </div>
          </div>
          <div>
            <strong>下载资产</strong>
            ${tagRow(downloadFamilies)}
          </div>
        </div>
        <ol class="prompt-deployment-runbook">
          ${runbook
            .map(
              (step) => `
                <li>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </li>
              `
            )
            .join("")}
        </ol>
        <pre class="prompt-composer-text prompt-deployment-instruction">${escapeHtml(codexInstruction)}</pre>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentPlan) return;
      try {
        await navigator.clipboard.writeText(currentPlan.codexInstruction);
        setStatus("部署指令已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出部署简报。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentPlan) return;
      downloadTextFile(desk.exportFilename || "prompt-deployment-brief-output.md", buildPromptDeploymentMarkdown(currentPlan), "text/markdown;charset=utf-8");
      setStatus("部署简报已生成下载。");
    });
    renderResult();
  }

  function buildPromptDeploymentMarkdown(plan) {
    const { workflow, target, audience, evidence, nextAction, route, pageRoute, downloadFamilies, score, decision, runbook, codexInstruction } = plan;
    return `# 指令部署与验收简报

- 指令场景：${workflow.label}
- 课程模块：${workflow.module}
- 部署目标：${target.label}
- 使用对象：${audience.label}
- 证据状态：${evidence.label}
- 下一动作：${nextAction.label}
- 部署评分：${score}
- 部署判断：${decision.label}

## 业务用途
${target.purpose}

## 目标用户顾虑
${audience.concern}

## 证据规则
${evidence.rule}

## 输入资料
${workflow.inputChecklist.map((item) => `- ${item}`).join("\n")}

## 预期输出
${workflow.expectedOutputs.map((item) => `- ${item}`).join("\n")}

## Codex 可自动化任务
${route.codexTasks.map((item) => `- ${item}`).join("\n")}

## 必须人工确认
${route.manualChecks.map((item) => `- ${item}`).join("\n")}

## 页面路由
${pageRoute.map((item) => `- ${item}`).join("\n")}

## 下载资产
${downloadFamilies.map((item) => `- ${item}`).join("\n")}

## 执行步骤
${runbook.map((item) => `- ${item.stage} ${item.title}：${item.detail}`).join("\n")}

## 部署判断说明
${decision.detail}

## 可复制 Codex 指令

${codexInstruction}
`;
  }

  function renderPromptPerformanceReviewRouter() {
    const target = byId("prompt-review-router");
    if (!target || !data.promptPerformanceReviewRouter) return;
    const router = data.promptPerformanceReviewRouter;
    const downloads = data.promptPerformanceReviewDownloads || [];
    target.innerHTML = `
      <div class="prompt-review-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card prompt-review-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Review Router</p>
          <h3>${router.title}</h3>
          <p>${router.summary}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="prompt-review-context">
              <span>使用场景</span>
              <select id="prompt-review-context" data-prompt-review-field="usageContext">
                ${router.usageContexts.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-review-evidence">
              <span>证据质量</span>
              <select id="prompt-review-evidence" data-prompt-review-field="evidenceQuality">
                ${router.evidenceQualities.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-review-issue">
              <span>问题类型</span>
              <select id="prompt-review-issue" data-prompt-review-field="issueType">
                ${router.issueTypes.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-review-risk">
              <span>风险等级</span>
              <select id="prompt-review-risk" data-prompt-review-field="riskLevel">
                ${router.riskLevels.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="prompt-review-destination">
              <span>下一步去向</span>
              <select id="prompt-review-destination" data-prompt-review-field="nextDestination">
                ${router.nextDestinations.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel prompt-review-result" aria-live="polite">
          <div id="prompt-review-result"></div>
          <div class="hero-actions compact-actions prompt-review-actions">
            <button class="button secondary" type="button" id="prompt-review-copy">复制复盘 Brief</button>
            <button class="button secondary" type="button" id="prompt-review-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="prompt-review-status"></span>
        </div>
      </article>
    `;
    setupPromptPerformanceReviewRouter(router);
  }

  function setupPromptPerformanceReviewRouter(router) {
    const fields = [...document.querySelectorAll("[data-prompt-review-field]")];
    const result = byId("prompt-review-result");
    const copy = byId("prompt-review-copy");
    const download = byId("prompt-review-download");
    const status = byId("prompt-review-status");
    let currentBrief = null;

    function pick(list, id) {
      return list.find((item) => item.id === id) || list[0];
    }

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.promptReviewField] = field.value;
        return values;
      }, {});
    }

    function decide(items, score) {
      if (items.issueType.id === "fabricated-facts" || items.evidenceQuality.id === "contradictory" || items.riskLevel.id === "compliance-legal") {
        return router.decisions.find((decision) => decision.id === "rollback");
      }
      if (items.evidenceQuality.id === "weak" || items.riskLevel.id === "confidential-data") {
        return router.decisions.find((decision) => decision.id === "hold");
      }
      if (score >= router.decisions.find((decision) => decision.id === "scale").threshold) {
        return router.decisions.find((decision) => decision.id === "scale");
      }
      if (score >= router.decisions.find((decision) => decision.id === "repair").threshold) {
        return router.decisions.find((decision) => decision.id === "repair");
      }
      return router.decisions.find((decision) => decision.id === "hold");
    }

    function buildBrief() {
      const values = readValues();
      const usageContext = pick(router.usageContexts, values.usageContext || router.defaults.usageContext);
      const evidenceQuality = pick(router.evidenceQualities, values.evidenceQuality || router.defaults.evidenceQuality);
      const issueType = pick(router.issueTypes, values.issueType || router.defaults.issueType);
      const riskLevel = pick(router.riskLevels, values.riskLevel || router.defaults.riskLevel);
      const nextDestination = pick(router.nextDestinations, values.nextDestination || router.defaults.nextDestination);
      const score = Math.max(0, usageContext.score + evidenceQuality.score + issueType.score + riskLevel.score + nextDestination.score);
      const decision = decide({ usageContext, evidenceQuality, issueType, riskLevel, nextDestination }, score);
      const routePages = [...new Set([usageContext.proofPage, ...nextDestination.routePages, "prompts.html", "playbook.html"])];
      const downloadFamilies = [...new Set(nextDestination.downloads)];
      const manualGates = [...new Set([...decision.manualGates, ...riskLevel.reviewers, usageContext.owner])];
      const runbook = [
        { stage: "01", title: "收集实际输出", detail: `${usageContext.label}：${usageContext.reviewFocus}` },
        { stage: "02", title: "判断证据质量", detail: `${evidenceQuality.label}：${evidenceQuality.rule}` },
        { stage: "03", title: "定位问题类型", detail: `${issueType.label}：${issueType.repair}` },
        { stage: "04", title: "复核风险边界", detail: `${riskLevel.label}：${riskLevel.gate}` },
        { stage: "05", title: "进入下一步", detail: `${nextDestination.label}：${nextDestination.nextAction}` }
      ];
      const codexPrompt = `请基于以下指令效果复盘 brief 生成优化执行清单：使用场景为${usageContext.label}，证据质量为${evidenceQuality.label}，问题类型为${issueType.label}，风险等级为${riskLevel.label}，下一步去向为${nextDestination.label}。必须输出保留/返修/暂缓/回滚结论、影响页面、影响下载、Codex 可做优化、人工确认闸口、版本差异、下次复盘窗口和禁止承诺边界。`;
      return { usageContext, evidenceQuality, issueType, riskLevel, nextDestination, score, decision, routePages, downloadFamilies, manualGates, runbook, codexPrompt };
    }

    function update() {
      currentBrief = buildBrief();
      const { usageContext, evidenceQuality, issueType, riskLevel, nextDestination, score, decision, routePages, downloadFamilies, manualGates, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <div class="score-summary">
          <span>${decision.title}</span>
          <strong>${score} 分 · ${nextDestination.label}</strong>
          <p>${decision.action}</p>
        </div>
        <div class="prompt-review-meta">
          <div><strong>${usageContext.label}</strong><span>${usageContext.owner}</span></div>
          <div><strong>${evidenceQuality.label}</strong><span>${evidenceQuality.status}</span></div>
          <div><strong>${riskLevel.label}</strong><span>风险等级</span></div>
        </div>
        <div class="prompt-review-grid">
          <div>
            <strong>复盘重点</strong>
            <p>${usageContext.reviewFocus}</p>
          </div>
          <div>
            <strong>问题修复</strong>
            <p>${issueType.repair}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>影响下载</strong>
            ${tagRow(downloadFamilies)}
          </div>
          <div>
            <strong>Codex 可做</strong>
            ${list([...decision.codexTasks, usageContext.codexUse])}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(manualGates)}
          </div>
        </div>
        <div class="prompt-review-output">
          <div>
            <span>风险提示</span>
            <p>${issueType.riskNote} ${riskLevel.gate}</p>
          </div>
          <div>
            <span>执行步骤</span>
            ${list(runbook.map((step) => `${step.stage} ${step.title}：${step.detail}`))}
          </div>
          <div>
            <span>Codex 扩写提示</span>
            <p>${codexPrompt}</p>
          </div>
        </div>
      `;
      if (status) status.textContent = "";
    }

    fields.forEach((field) => {
      const defaultValue = router.defaults[field.dataset.promptReviewField];
      if (defaultValue) field.value = defaultValue;
      field.addEventListener("change", update);
    });

    copy?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildPromptPerformanceReviewMarkdown(currentBrief, router));
        if (status) status.textContent = "指令复盘 Brief 已复制。";
      } catch (error) {
        if (status) status.textContent = "当前浏览器不允许直接复制，请使用导出 MD。";
      }
    });

    download?.addEventListener("click", () => {
      downloadTextFile(router.exportFilename || "prompt-performance-review-brief-output.md", buildPromptPerformanceReviewMarkdown(currentBrief, router), "text/markdown;charset=utf-8");
      if (status) status.textContent = "Markdown 复盘 Brief 已生成下载。";
    });

    update();
  }

  function buildPromptPerformanceReviewMarkdown(brief, router) {
    if (!brief) return "";
    return [
      `# ${router.title}`,
      "",
      "## 处理结论",
      `- 结论：${brief.decision.title}`,
      `- 评分：${brief.score}`,
      `- 下一步去向：${brief.nextDestination.label}`,
      `- 处理动作：${brief.decision.action}`,
      "",
      "## 复盘信号",
      `- 使用场景：${brief.usageContext.label}`,
      `- 证据质量：${brief.evidenceQuality.label}`,
      `- 问题类型：${brief.issueType.label}`,
      `- 风险等级：${brief.riskLevel.label}`,
      "",
      "## 影响页面",
      ...brief.routePages.map((item) => `- ${item}`),
      "",
      "## 影响下载",
      ...brief.downloadFamilies.map((item) => `- ${item}`),
      "",
      "## Codex 可辅助",
      ...[...brief.decision.codexTasks, brief.usageContext.codexUse].map((item) => `- ${item}`),
      "",
      "## 必须人工确认",
      ...brief.manualGates.map((item) => `- ${item}`),
      "",
      "## 执行步骤",
      ...brief.runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`),
      "",
      "## 风险提示",
      `${brief.issueType.riskNote} ${brief.riskLevel.gate}`,
      "",
      "## 固定规则",
      ...router.operatingRules.map((item) => `- ${item}`),
      "",
      "## Codex 扩写提示",
      brief.codexPrompt
    ].join("\n");
  }

  function renderPromptPacks() {
    const target = byId("prompt-packs");
    if (!target || !data.promptPacks) return;
    const packs = data.promptPacks;
    target.innerHTML = `
      <article class="glass-panel standard-panel prompt-pack-overview">
        <div class="standard-layout">
          <div>
            <p class="eyebrow">Classroom Prompt Pack</p>
            <h3>${packs.overview.title}</h3>
            <p>${packs.overview.description}</p>
            <div class="download-row">
              ${packs.overview.downloads.map((download) => downloadBlock(download)).join("")}
            </div>
          </div>
          <div>
            <strong>使用前准备</strong>
            ${list(packs.overview.setup)}
          </div>
        </div>
      </article>
      <div class="prompt-pack-grid">
        <div class="prompt-sequence-list">
          ${packs.sequences
            .map(
              (sequence) => `
                <article class="prompt-sequence-card">
                  <div class="lesson-step-head">
                    <span class="step-number">${sequence.stage}</span>
                    <h3>${sequence.title}</h3>
                  </div>
                  ${tagRow(sequence.promptIds)}
                  <div class="prompt-detail-grid">
                    <div>
                      <strong>业务输入</strong>
                      <p>${sequence.businessInput}</p>
                    </div>
                    <div>
                      <strong>输出结果</strong>
                      <p>${sequence.expectedOutput}</p>
                    </div>
                    <div class="span-2">
                      <strong>课堂用法</strong>
                      <p>${sequence.classroomUse}</p>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <aside class="prompt-gate-panel">
          <div>
            <strong>质量检查</strong>
            <div class="prompt-gate-list">
              ${packs.qualityGates
                .map(
                  (gate) => `
                    <section>
                      <span class="tag">${gate.gate}</span>
                      ${list(gate.checks)}
                    </section>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="detail-block">
            <strong>常见修正</strong>
            <div class="score-list">
              ${packs.commonFixes
                .map(
                  (item) => `
                    <div>
                      <span>${item.problem}</span>
                      <p>${item.fix}</p>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        </aside>
      </div>
    `;
  }

  function renderPromptGovernanceBoard() {
    const target = byId("prompt-governance-board");
    if (!target || !data.promptGovernanceBoard) return;
    const downloads = data.promptGovernanceDownloads || [];
    target.innerHTML = `
      <div class="prompt-governance-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="prompt-governance-grid">
        ${data.promptGovernanceBoard
          .map(
            (item) => `
              <article class="prompt-governance-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Prompt Stage ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="prompt-governance-detail-grid">
                  <div>
                    <strong>触发场景</strong>
                    <p>${item.trigger}</p>
                  </div>
                  <div>
                    <strong>输入资料</strong>
                    <p>${item.requiredInput}</p>
                  </div>
                  <div>
                    <strong>指令动作</strong>
                    <p>${item.promptAction}</p>
                  </div>
                  <div>
                    <strong>输出证据</strong>
                    <p>${item.outputEvidence}</p>
                  </div>
                </div>
                <div class="lesson-step-grid two-column prompt-governance-boundary">
                  <div>
                    <strong>质量门槛</strong>
                    <p>${item.qualityGate}</p>
                  </div>
                  <div>
                    <strong>人工边界</strong>
                    <p>${item.manualBoundary}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderPrompts() {
    const target = byId("prompt-library");
    if (!target) return;
    target.innerHTML = data.prompts
      .map(
        (prompt) => `
          <article class="prompt-card">
            <div class="module-meta">
              <span class="tag">${prompt.module}</span>
              <span class="tag">${prompt.category}</span>
              <span class="tag">${prompt.relatedTool}</span>
            </div>
            <h3>${prompt.title}</h3>
            <p>${prompt.useCase}</p>
            <div class="prompt-detail-grid">
              <div>
                <strong>输入资料</strong>
                ${list(prompt.inputData)}
              </div>
              <div>
                <strong>输出结果</strong>
                ${list(prompt.outputs)}
              </div>
              <div>
                <strong>人工确认边界</strong>
                ${list(prompt.manualBoundaries)}
              </div>
              <div>
                <strong>质量检查</strong>
                ${list(prompt.qualityChecks)}
              </div>
            </div>
            <code class="prompt-text">${prompt.prompt}</code>
          </article>
        `
      )
      .join("");
  }

  function resourceSearchText(resource) {
    return [
      resource.stage,
      resource.title,
      resource.description,
      resource.audience,
      resource.conversionGoal,
      resource.nextAction,
      resource.download?.label,
      resource.download?.format,
      ...(resource.includes || []),
      ...(resource.preview || []).flat()
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  }

  function filterResources(resources, filters) {
    const keyword = (filters.keyword || "").trim().toLowerCase();
    return resources.filter((resource) => {
      const stageOk = filters.stage === "all" || resource.stage === filters.stage;
      const formatOk = filters.format === "all" || resource.download?.format === filters.format;
      const keywordOk = !keyword || resourceSearchText(resource).includes(keyword);
      return stageOk && formatOk && keywordOk;
    });
  }

  function renderResources(resources = data.resources) {
    const target = byId("resource-library");
    if (!target || !data.resources) return;
    if (!resources.length) {
      target.innerHTML = `<div class="empty-state">没有匹配的资源，请调整筛选条件。</div>`;
      return;
    }
    target.innerHTML = resources
      .map(
        (resource) => `
          <article class="info-card">
            <p class="eyebrow">${resource.stage}</p>
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            ${resource.audience ? `<div class="detail-block"><strong>适合对象</strong><p>${resource.audience}</p></div>` : ""}
            ${tagRow(resource.includes)}
            ${downloadBlock(resource.download)}
          </article>
        `
      )
      .join("");
  }

  function renderResourceFinder() {
    const target = byId("resource-finder");
    if (!target || !data.resources) return;
    const stages = [...new Set(data.resources.map((resource) => resource.stage))];
    const formats = [...new Set(data.resources.map((resource) => resource.download?.format).filter(Boolean))];
    target.innerHTML = `
      <article class="resource-finder-card">
        <div class="resource-finder-grid">
          <label class="decision-field" for="resource-search">
            <span>关键词</span>
            <input id="resource-search" type="search" placeholder="课程、工具、企业、报名、单证" data-resource-filter="keyword" />
          </label>
          <label class="decision-field" for="resource-stage">
            <span>资源阶段</span>
            <select id="resource-stage" data-resource-filter="stage">
              <option value="all">全部阶段</option>
              ${stages.map((stage) => `<option value="${stage}">${stage}</option>`).join("")}
            </select>
          </label>
          <label class="decision-field" for="resource-format">
            <span>文件格式</span>
            <select id="resource-format" data-resource-filter="format">
              <option value="all">全部格式</option>
              ${formats.map((format) => `<option value="${format}">${format}</option>`).join("")}
            </select>
          </label>
          <button class="button secondary" type="button" id="resource-filter-reset">重置筛选</button>
        </div>
        <div id="resource-filter-summary" class="resource-filter-summary" aria-live="polite"></div>
      </article>
    `;

    const fields = [...document.querySelectorAll("[data-resource-filter]")];
    const summary = byId("resource-filter-summary");
    const reset = byId("resource-filter-reset");

    function readFilters() {
      return fields.reduce(
        (filters, field) => {
          filters[field.dataset.resourceFilter] = field.value;
          return filters;
        },
        { keyword: "", stage: "all", format: "all" }
      );
    }

    function applyFilters() {
      const filtered = filterResources(data.resources, readFilters());
      renderResources(filtered);
      renderResourceDetails(filtered);
      if (summary) {
        const downloadCount = filtered.filter((resource) => resource.download?.href).length;
        summary.innerHTML = `
          <div><strong>${filtered.length}</strong><span>匹配资源</span></div>
          <div><strong>${downloadCount}</strong><span>可下载文件</span></div>
          <div><strong>${data.resources.length}</strong><span>资源总数</span></div>
        `;
      }
    }

    fields.forEach((field) => field.addEventListener(field.tagName === "INPUT" ? "input" : "change", applyFilters));
    reset?.addEventListener("click", () => {
      fields.forEach((field) => {
        field.value = field.dataset.resourceFilter === "keyword" ? "" : "all";
      });
      applyFilters();
    });
    applyFilters();
  }

  function renderResourceFunnel() {
    const target = byId("resource-funnel");
    if (!target || !data.resourceFunnel) return;
    target.innerHTML = data.resourceFunnel
      .map(
        (step) => `
          <article class="funnel-card">
            <span class="step-number">${step.step}</span>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
            <div class="detail-block">
              <strong>关键动作</strong>
              <p>${step.action}</p>
            </div>
            ${tagRow(step.signals)}
          </article>
        `
      )
      .join("");
  }

  function renderResourceDetails(resources = data.resources) {
    const target = byId("resource-detail-panels");
    if (!target || !data.resources) return;
    if (!resources.length) {
      target.innerHTML = `<div class="empty-state">没有匹配的资源详情。</div>`;
      return;
    }
    target.innerHTML = resources
      .map(
        (resource) => `
          <article class="resource-detail-card">
            <div class="resource-detail-head">
              <div>
                <p class="eyebrow">${resource.stage}</p>
                <h3>${resource.title}</h3>
              </div>
              ${tagRow(resource.includes)}
            </div>
            <div class="resource-detail-grid">
              <div>
                <strong>转化作用</strong>
                <p>${resource.conversionGoal}</p>
              </div>
              <div>
                <strong>下一步动作</strong>
                <p>${resource.nextAction}</p>
              </div>
              <div>
                <strong>下载文件</strong>
                ${downloadBlock(resource.download)}
              </div>
              <div class="span-2">
                <strong>资料预览</strong>
                ${renderMiniTable(resource.preview)}
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderResourceRequestRouter() {
    const target = byId("resource-request-router");
    if (!target || !data.resourceRequestRouter) return;
    const router = data.resourceRequestRouter;
    target.innerHTML = `
      <div class="resource-request-downloads">
        ${(router.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card resource-request-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Request Router</p>
          <h3>${router.title}</h3>
          <p>${router.summary}</p>
          <div class="decision-grid">
            <label class="decision-field" for="resource-request-role">
              <span>访客身份</span>
              <select id="resource-request-role" data-resource-request-field="visitorRole">
                ${router.visitorRoles.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="resource-request-need">
              <span>领取资源</span>
              <select id="resource-request-need" data-resource-request-field="resourceNeed">
                ${router.resourceNeeds.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="resource-request-stage">
              <span>业务阶段</span>
              <select id="resource-request-stage" data-resource-request-field="businessStage">
                ${router.businessStages.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="resource-request-contact">
              <span>联系意愿</span>
              <select id="resource-request-contact" data-resource-request-field="contactReadiness">
                ${router.contactReadiness.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="resource-request-boundary">
              <span>边界意识</span>
              <select id="resource-request-boundary" data-resource-request-field="boundaryAwareness">
                ${router.boundaryAwareness.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel resource-request-result" aria-live="polite">
          <div id="resource-request-result"></div>
          <div class="hero-actions compact-actions resource-request-actions">
            <button class="button secondary" type="button" id="resource-request-copy">复制分流 Brief</button>
            <button class="button secondary" type="button" id="resource-request-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="resource-request-status"></span>
        </div>
      </article>
    `;
    setupResourceRequestRouter(router);
  }

  function setupResourceRequestRouter(router) {
    const fields = [...document.querySelectorAll("[data-resource-request-field]")];
    const result = byId("resource-request-result");
    const copy = byId("resource-request-copy");
    const download = byId("resource-request-download");
    const status = byId("resource-request-status");
    let currentBrief = null;

    function findById(list, id) {
      return list.find((item) => item.id === id) || list[0];
    }

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.resourceRequestField] = field.value;
        return values;
      }, {});
    }

    function chooseDecision(values, score) {
      const boundary = values.boundary;
      const role = values.role;
      const need = values.need;
      const stage = values.stage;
      const contact = values.contact;
      if (boundary.id === "automation-myth" || contact.id === "download-only") {
        return router.decisions.find((decision) => decision.id === "nurture");
      }
      if (
        (role.id === "team-owner" || need.id === "enterprise-kit" || stage.id === "team-workflow" || contact.id === "schedule-diagnosis") &&
        score >= router.decisions.find((decision) => decision.id === "enterprise").threshold
      ) {
        return router.decisions.find((decision) => decision.id === "enterprise");
      }
      if (score >= router.decisions.find((decision) => decision.id === "system").threshold) {
        return router.decisions.find((decision) => decision.id === "system");
      }
      if (score >= router.decisions.find((decision) => decision.id === "trial").threshold) {
        return router.decisions.find((decision) => decision.id === "trial");
      }
      return router.decisions.find((decision) => decision.id === "nurture");
    }

    function buildBrief() {
      const values = readValues();
      const role = findById(router.visitorRoles, values.visitorRole || router.defaults.visitorRole);
      const need = findById(router.resourceNeeds, values.resourceNeed || router.defaults.resourceNeed);
      const stage = findById(router.businessStages, values.businessStage || router.defaults.businessStage);
      const contact = findById(router.contactReadiness, values.contactReadiness || router.defaults.contactReadiness);
      const boundary = findById(router.boundaryAwareness, values.boundaryAwareness || router.defaults.boundaryAwareness);
      const score = role.score + need.score + stage.score + contact.score + boundary.score;
      const decision = chooseDecision({ role, need, stage, contact, boundary }, score);
      return { role, need, stage, contact, boundary, score, decision };
    }

    function update() {
      currentBrief = buildBrief();
      const { role, need, stage, contact, boundary, score, decision } = currentBrief;
      result.innerHTML = `
        <div class="score-summary">
          <span>${decision.title}</span>
          <strong>${score} 分 · ${decision.route}</strong>
          <p>${decision.nextAction}</p>
        </div>
        <div class="resource-request-meta">
          <div><strong>${role.label}</strong><span>访客身份</span></div>
          <div><strong>${need.label}</strong><span>领取资源</span></div>
          <div><strong>${contact.owner}</strong><span>负责人</span></div>
        </div>
        <div class="resource-request-grid">
          <div>
            <strong>业务信号</strong>
            <p>${stage.signal}</p>
          </div>
          <div>
            <strong>联系规则</strong>
            <p>${contact.contactRule}</p>
          </div>
          <div>
            <strong>页面证据</strong>
            ${tagRow(decision.evidencePages)}
          </div>
          <div>
            <strong>推荐下载</strong>
            ${tagRow(need.recommendedAssets)}
          </div>
          <div>
            <strong>Codex 可辅助</strong>
            <ul class="plain-list">${decision.codexTasks.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <strong>必须人工确认</strong>
            <ul class="plain-list">${decision.manualGates.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
        <div class="resource-request-output">
          <div>
            <span>边界提示</span>
            <p>${boundary.riskNote}</p>
          </div>
          <div>
            <span>下一步 CTA</span>
            <p>${need.nextCTA}</p>
          </div>
        </div>
      `;
    }

    fields.forEach((field) => {
      const defaultValue = router.defaults[field.dataset.resourceRequestField];
      if (defaultValue) field.value = defaultValue;
      field.addEventListener("change", update);
    });

    copy?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildResourceRequestMarkdown(currentBrief, router));
        if (status) status.textContent = "资源领取分流 Brief 已复制。";
      } catch (error) {
        if (status) status.textContent = "当前浏览器不允许直接复制，请使用导出 MD。";
      }
    });

    download?.addEventListener("click", () => {
      downloadTextFile(router.exportFilename || "resource-request-intake-brief-output.md", buildResourceRequestMarkdown(currentBrief, router), "text/markdown;charset=utf-8");
      if (status) status.textContent = "Markdown 分流 Brief 已生成下载。";
    });

    update();
  }

  function buildResourceRequestMarkdown(brief, router) {
    if (!brief) return "";
    return [
      `# ${router.title}`,
      "",
      `## 推荐路线`,
      `- 分流结论：${brief.decision.title}`,
      `- 分流评分：${brief.score} 分`,
      `- 推荐入口：${brief.decision.route}`,
      `- 下一步动作：${brief.decision.nextAction}`,
      "",
      "## 用户信号",
      `- 访客身份：${brief.role.label}`,
      `- 领取资源：${brief.need.label}`,
      `- 业务阶段：${brief.stage.label}`,
      `- 联系意愿：${brief.contact.label}`,
      `- 边界意识：${brief.boundary.label}`,
      "",
      "## 页面证据",
      ...brief.decision.evidencePages.map((item) => `- ${item}`),
      "",
      "## 推荐下载",
      ...brief.need.recommendedAssets.map((item) => `- ${item}`),
      "",
      "## Codex 可辅助",
      ...brief.decision.codexTasks.map((item) => `- ${item}`),
      "",
      "## 必须人工确认",
      ...brief.decision.manualGates.map((item) => `- ${item}`),
      "",
      "## 边界提示",
      brief.boundary.riskNote,
      "",
      "## 联系规则",
      `- 负责人：${brief.contact.owner}`,
      `- 规则：${brief.contact.contactRule}`,
      `- CTA：${brief.need.nextCTA}`
    ].join("\n");
  }

  function renderResourceLeadTaggingBoard() {
    const target = byId("resource-lead-tagging-board");
    if (!target || !data.resourceLeadTaggingBoard) return;
    const downloads = data.resourceLeadTaggingDownloads || [];
    target.innerHTML = `
      <div class="resource-tagging-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="resource-tagging-grid">
        ${data.resourceLeadTaggingBoard
          .map(
            (item) => `
              <article class="resource-tagging-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Tag ${item.stage}</p>
                    <h3>${item.leadTag}</h3>
                  </div>
                  <span class="tag">${item.route}</span>
                </div>
                <div class="resource-tagging-meta">
                  <div>
                    <strong>用户信号</strong>
                    <p>${item.userSignal}</p>
                  </div>
                  <div>
                    <strong>页面证据</strong>
                    <p>${item.evidencePage}</p>
                  </div>
                </div>
                <div class="resource-tagging-detail-grid">
                  <div>
                    <strong>Codex 辅助</strong>
                    <p>${item.codexAssist}</p>
                  </div>
                  <div>
                    <strong>人工判断</strong>
                    <p>${item.manualCheck}</p>
                  </div>
                  <div>
                    <strong>下一步动作</strong>
                    <p>${item.nextAction}</p>
                  </div>
                  <div>
                    <strong>复盘指标</strong>
                    <p>${item.reviewMetric}</p>
                  </div>
                </div>
                <div class="resource-tagging-owner">
                  <strong>负责人</strong>
                  <p>${item.owner}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderResourceFollowupDesk() {
    const target = byId("resource-followup-desk");
    if (!target || !data.resourceFollowupDesk) return;
    const downloads = data.resourceFollowupDownloads || [];
    target.innerHTML = `
      <div class="resource-followup-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="resource-followup-grid">
        ${data.resourceFollowupDesk
          .map(
            (item) => `
              <article class="resource-followup-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Follow-up ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="resource-followup-detail-grid">
                  <div>
                    <strong>用户信号</strong>
                    <p>${item.userSignal}</p>
                  </div>
                  <div>
                    <strong>跟进动作</strong>
                    <p>${item.followupAction}</p>
                  </div>
                  <div>
                    <strong>页面证据</strong>
                    <p>${item.evidencePage}</p>
                  </div>
                  <div>
                    <strong>下一步 CTA</strong>
                    <p>${item.nextCTA}</p>
                  </div>
                </div>
                <div class="lesson-step-grid two-column resource-followup-boundary">
                  <div>
                    <strong>复盘指标</strong>
                    <p>${item.reviewMetric}</p>
                  </div>
                  <div>
                    <strong>承诺边界</strong>
                    <p>${item.manualBoundary}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderResourceConversionReviewRouter() {
    const target = byId("resource-conversion-review-router");
    if (!target || !data.resourceConversionReviewRouter) return;
    const router = data.resourceConversionReviewRouter;
    const defaults = router.defaults || {};
    target.innerHTML = `
      <div class="resource-review-downloads">
        ${(router.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card resource-review-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Resource Review Workbench</p>
          <h3>${router.title}</h3>
          <p>${router.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="resource-review-stage">
              <span>跟进阶段</span>
              <select id="resource-review-stage" data-resource-review-field="followupStage">
                ${router.followupStages.map((item) => `<option value="${item.id}"${defaults.followupStage === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="resource-review-response">
              <span>用户响应</span>
              <select id="resource-review-response" data-resource-review-field="responseSignal">
                ${router.responseSignals.map((item) => `<option value="${item.id}"${defaults.responseSignal === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="resource-review-sample">
              <span>样例准备</span>
              <select id="resource-review-sample" data-resource-review-field="sampleReadiness">
                ${router.sampleReadiness.map((item) => `<option value="${item.id}"${defaults.sampleReadiness === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="resource-review-fit">
              <span>购买适配</span>
              <select id="resource-review-fit" data-resource-review-field="buyerFit">
                ${router.buyerFits.map((item) => `<option value="${item.id}"${defaults.buyerFit === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="resource-review-goal">
              <span>推荐路线</span>
              <select id="resource-review-goal" data-resource-review-field="routeGoal">
                ${router.routeGoals.map((item) => `<option value="${item.id}"${defaults.routeGoal === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="resource-review-risk">
              <span>风险模式</span>
              <select id="resource-review-risk" data-resource-review-field="riskMode">
                ${router.riskModes.map((item) => `<option value="${item.id}"${defaults.riskMode === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="resource-review-window">
              <span>复盘窗口</span>
              <select id="resource-review-window" data-resource-review-field="reviewWindow">
                ${router.reviewWindows.map((item) => `<option value="${item.id}"${defaults.reviewWindow === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel resource-review-result" aria-live="polite">
          <div id="resource-review-result"></div>
          <div class="hero-actions compact-actions resource-review-actions">
            <button class="button secondary" type="button" id="resource-review-copy">复制复盘 Brief</button>
            <button class="button secondary" type="button" id="resource-review-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="resource-review-status"></span>
        </div>
      </article>
    `;
    setupResourceConversionReviewRouter(router);
  }

  function setupResourceConversionReviewRouter(router) {
    const fields = [...document.querySelectorAll("[data-resource-review-field]")];
    const result = byId("resource-review-result");
    const copy = byId("resource-review-copy");
    const download = byId("resource-review-download");
    const status = byId("resource-review-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.resourceReviewField] = field.value;
        return values;
      }, {});
    }

    function pick(items, id) {
      return items.find((item) => item.id === id) || items[0];
    }

    function decisionFor(score, values) {
      if (values.routeGoal === "hold" || values.buyerFit === "poor-fit" || values.riskMode === "automation-myth") {
        return router.decisions.find((item) => item.id === "hold") || router.decisions[router.decisions.length - 1];
      }
      if (values.riskMode === "no-authorization" && ["system-course", "enterprise-diagnosis", "trial-demo"].includes(values.routeGoal)) {
        return router.decisions.find((item) => item.id === "nurture") || router.decisions[router.decisions.length - 1];
      }
      if (values.routeGoal === "enterprise-diagnosis" && values.buyerFit === "team-decision" && score >= 62) {
        return router.decisions.find((item) => item.id === "enterprise") || router.decisions[0];
      }
      if (values.routeGoal === "system-course" && score >= 62) {
        return router.decisions.find((item) => item.id === "system") || router.decisions[1];
      }
      if (values.routeGoal === "trial-demo" && score >= 42) {
        return router.decisions.find((item) => item.id === "trial") || router.decisions[2];
      }
      return router.decisions.find((item) => score >= item.minScore) || router.decisions[router.decisions.length - 1];
    }

    function evaluate() {
      const values = readValues();
      const followupStage = pick(router.followupStages, values.followupStage);
      const responseSignal = pick(router.responseSignals, values.responseSignal);
      const sampleReadiness = pick(router.sampleReadiness, values.sampleReadiness);
      const buyerFit = pick(router.buyerFits, values.buyerFit);
      const routeGoal = pick(router.routeGoals, values.routeGoal);
      const riskMode = pick(router.riskModes, values.riskMode);
      const reviewWindow = pick(router.reviewWindows, values.reviewWindow);
      const score = Math.max(0, Math.min(100, 42 + followupStage.score + responseSignal.score + sampleReadiness.score + buyerFit.score + routeGoal.score + riskMode.penalty));
      const decision = decisionFor(score, values);
      const pageRoutes = [...new Set([...followupStage.pageRoutes, ...buyerFit.routePages])];
      const downloads = [...new Set([...buyerFit.downloads, ...(router.downloads || []).map((item) => item.href.replace("./downloads/", ""))])];
      const codexTasks = [...new Set([...responseSignal.codexTasks, "生成 7 天转化复盘 Brief", "整理资源页和报名页回写任务"])];
      const manualGates = [...new Set([...routeGoal.validation, ...riskMode.reviewers.map((item) => `${item}确认`)])];
      const writebackTargets = [...new Set([...followupStage.writeback, "资源中心", "营销日复盘", "Playbook 维护日志"])];
      const noGoClaims = [
        riskMode.rule,
        decision.releaseGate,
        "不得把下载行为直接等同于报名意向。",
        "不得使用未授权样例做公开演示、招生证明或工具测试。"
      ];
      const runbook = [
        { stage: "01", title: "确认跟进阶段", detail: `${followupStage.label}：${followupStage.evidence}` },
        { stage: "02", title: "读取用户响应", detail: `${responseSignal.label}：${responseSignal.signal}` },
        { stage: "03", title: "核对样例资料", detail: `${sampleReadiness.label}：${sampleReadiness.readiness}` },
        { stage: "04", title: "判断购买适配", detail: `${buyerFit.label}：${buyerFit.fit}` },
        { stage: "05", title: "执行推荐路线", detail: `${routeGoal.label}：${routeGoal.action}` },
        { stage: "06", title: "回写复盘结果", detail: `${reviewWindow.cadence} ${reviewWindow.closeout}` }
      ];
      const codexPrompt = [
        `请基于资源领取 7 天复盘结果生成跟进 Brief。`,
        `阶段：${followupStage.label}；用户响应：${responseSignal.label}；样例准备：${sampleReadiness.label}；购买适配：${buyerFit.label}；推荐路线：${routeGoal.label}；风险模式：${riskMode.label}。`,
        "请输出页面证据、下一步话术、下载资产、Codex 可辅助事项、人工确认门槛、禁止承诺、版本回写和复盘窗口。"
      ].join("\n");
      return { values, followupStage, responseSignal, sampleReadiness, buyerFit, routeGoal, riskMode, reviewWindow, score, decision, pageRoutes, downloads, codexTasks, manualGates, writebackTargets, noGoClaims, runbook, codexPrompt };
    }

    function renderResult() {
      currentBrief = evaluate();
      const { followupStage, responseSignal, sampleReadiness, buyerFit, routeGoal, riskMode, reviewWindow, score, decision, pageRoutes, downloads, codexTasks, manualGates, writebackTargets, noGoClaims, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.label}</p>
        <h3>${score} 分 · ${routeGoal.label}</h3>
        <p>${decision.summary}</p>
        <div class="resource-review-meta">
          <div>
            <strong>${followupStage.label}</strong>
            <span>跟进阶段</span>
          </div>
          <div>
            <strong>${responseSignal.label}</strong>
            <span>用户响应</span>
          </div>
          <div>
            <strong>${sampleReadiness.label}</strong>
            <span>样例准备</span>
          </div>
          <div>
            <strong>${reviewWindow.label}</strong>
            <span>复盘窗口</span>
          </div>
        </div>
        <div class="detail-block">
          <strong>适配判断</strong>
          <p>${buyerFit.fit}</p>
        </div>
        <div class="resource-review-grid">
          <div>
            <strong>页面证据</strong>
            ${tagRow(pageRoutes)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${list(downloads)}
          </div>
          <div>
            <strong>Codex 可做事项</strong>
            ${list(codexTasks)}
          </div>
          <div>
            <strong>人工确认门槛</strong>
            ${list(manualGates)}
          </div>
          <div>
            <strong>版本回写</strong>
            ${list(writebackTargets)}
          </div>
          <div>
            <strong>禁止承诺</strong>
            ${list(noGoClaims)}
          </div>
          <div>
            <strong>交接动作</strong>
            <p>${routeGoal.handoff}</p>
          </div>
          <div>
            <strong>补齐要求</strong>
            <p>${sampleReadiness.repair}</p>
          </div>
        </div>
        <div class="resource-review-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>复盘规则</strong>
          ${list(router.operatingRules || [])}
        </div>
        <pre class="prompt-composer-text resource-review-prompt">${escapeHtml(codexPrompt)}</pre>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildResourceConversionReviewMarkdown(currentBrief, router));
        setStatus("7 天复盘 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(router.exportFilename || "resource-conversion-review-brief-output.md", buildResourceConversionReviewMarkdown(currentBrief, router), "text/markdown;charset=utf-8");
      setStatus("Markdown 7 天复盘 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildResourceConversionReviewMarkdown(brief, router) {
    const { followupStage, responseSignal, sampleReadiness, buyerFit, routeGoal, riskMode, reviewWindow, score, decision, pageRoutes, downloads, codexTasks, manualGates, writebackTargets, noGoClaims, runbook, codexPrompt } = brief;
    return `# 资料领取 7 天转化复盘 Brief

- 复盘结论：${decision.label}
- 本期评分：${score}
- 跟进阶段：${followupStage.label}
- 用户响应：${responseSignal.label}
- 样例准备：${sampleReadiness.label}
- 购买适配：${buyerFit.label}
- 推荐路线：${routeGoal.label}
- 风险模式：${riskMode.label}
- 负责人：${buyerFit.owner}
- 复盘窗口：${reviewWindow.label}

## 用户响应
${responseSignal.signal}

## 样例与资料状态
${sampleReadiness.readiness}
${sampleReadiness.repair}

## 页面证据
${pageRoutes.map((item) => `- ${item}`).join("\n")}

## 下载资产
${downloads.map((item) => `- ${item}`).join("\n")}

## Codex 可辅助事项
${codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认门槛
${manualGates.map((item) => `- ${item}`).join("\n")}

## 推荐动作
${routeGoal.action}
${routeGoal.handoff}

## 版本回写
${writebackTargets.map((item) => `- ${item}`).join("\n")}

## 禁止承诺
${noGoClaims.map((item) => `- ${item}`).join("\n")}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 复盘窗口
${reviewWindow.cadence}
${reviewWindow.closeout}

## 运营规则
${(router.operatingRules || []).map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}
`;
  }

  function renderResourceFaqs() {
    const target = byId("resource-faq");
    if (!target || !data.resourceFaqs) return;
    target.innerHTML = data.resourceFaqs
      .map(
        (item) => `
          <article class="info-card">
            <h3>${item.question}</h3>
            <p>${item.answer}</p>
          </article>
        `
      )
      .join("");
  }

  function renderEnrollmentMetrics() {
    const target = byId("enrollment-metrics");
    if (!target || !data.enrollment) return;
    target.innerHTML = data.enrollment.metrics
      .map(
        (metric) => `
          <article class="metric playbook-metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderEnrollmentAudiencePaths() {
    const target = byId("enrollment-audience-paths");
    if (!target || !data.enrollment) return;
    target.innerHTML = data.enrollment.audiencePaths
      .map(
        (path) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">${path.segment}</p>
              <h3>${path.pain}</h3>
            </div>
            <div class="standard-card-grid">
              <div>
                <strong>推荐路径</strong>
                <p>${path.path}</p>
              </div>
              <div>
                <strong>学习结果</strong>
                <p>${path.outcome}</p>
              </div>
              <div>
                <strong>适合入口</strong>
                <p>${path.bestEntry}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderEnrollmentPackages() {
    const target = byId("enrollment-packages");
    if (!target || !data.enrollment) return;
    target.innerHTML = data.enrollment.packages
      .map(
        (pkg) => `
          <article class="offer-card">
            <p class="eyebrow">${pkg.type}</p>
            <h3>${pkg.name}</h3>
            <p>${pkg.fit}</p>
            <div class="detail-block"><strong>包含内容</strong>${list(pkg.includes)}</div>
            <div class="detail-block"><strong>交付结果</strong>${list(pkg.deliverables)}</div>
            <div class="detail-block"><strong>下一步</strong><p>${pkg.nextStep}</p></div>
          </article>
        `
      )
      .join("");
  }

  function renderEnrollmentSalesDesk() {
    const target = byId("enrollment-sales-desk");
    if (!target || !data.enrollment || !data.enrollment.salesDesk) return;
    const desk = data.enrollment.salesDesk;
    target.innerHTML = `
      <article class="standard-card sales-desk-card">
        <div class="standard-card-head">
          <p class="eyebrow">Lead Scoring</p>
          <h3>线索分级和下一步动作</h3>
        </div>
        <div class="sales-desk-grid">
          ${desk.leadScoring
            .map(
              (lead) => `
                <div>
                  <span class="status-pill ready">${lead.level}</span>
                  <h4>${lead.signal}</h4>
                  <p><strong>推荐路径：</strong>${lead.route}</p>
                  <p><strong>下一步：</strong>${lead.nextAction}</p>
                  <p><strong>边界：</strong>${lead.boundary}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </article>
      <article class="standard-card sales-desk-card">
        <div class="standard-card-head">
          <p class="eyebrow">Consultation Questions</p>
          <h3>咨询时必须问清楚的问题</h3>
        </div>
        <div class="sales-question-list">
          ${desk.consultationQuestions
            .map(
              (item) => `
                <div>
                  <span class="tag">${item.topic}</span>
                  <h4>${item.question}</h4>
                  <p>${item.reason}</p>
                  <strong>${item.route}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </article>
      <article class="standard-card sales-desk-card">
        <div class="standard-card-head">
          <p class="eyebrow">Follow-up Scripts</p>
          <h3>跟进话术和承诺边界</h3>
        </div>
        <div class="sales-desk-grid">
          ${desk.followUpScripts
            .map(
              (script) => `
                <div>
                  <span class="tag">${script.scenario}</span>
                  <p>${script.message}</p>
                  <p><strong>CTA：</strong>${script.cta}</p>
                  <p><strong>边界：</strong>${script.boundary}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </article>
    `;
  }

  function renderEnrollmentTrialFollowup() {
    const target = byId("enrollment-trial-followup");
    if (!target || !data.enrollment || !data.enrollment.trialFollowupDesk) return;
    const downloads = data.enrollment.trialFollowupDownloads || [];
    target.innerHTML = `
      <div class="enrollment-trial-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="enrollment-trial-grid">
        ${data.enrollment.trialFollowupDesk
          .map(
            (item) => `
              <article class="enrollment-trial-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Trial ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="enrollment-trial-meta">
                  <div>
                    <strong>触发信号</strong>
                    <p>${item.trigger}</p>
                  </div>
                  <div>
                    <strong>证据页面</strong>
                    <p>${item.evidence}</p>
                  </div>
                </div>
                <div class="enrollment-trial-detail-grid">
                  <div>
                    <strong>Codex 可做</strong>
                    <p>${item.codexAction}</p>
                  </div>
                  <div>
                    <strong>人工动作</strong>
                    <p>${item.humanAction}</p>
                  </div>
                  <div>
                    <strong>下一步 CTA</strong>
                    <p>${item.nextCTA}</p>
                  </div>
                  <div>
                    <strong>承诺边界</strong>
                    <p>${item.boundary}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderEnrollmentConversionCommandCenter() {
    const target = byId("enrollment-conversion-command-center");
    if (!target || !data.enrollment || !data.enrollment.conversionCommandCenter) return;
    const downloads = data.enrollment.conversionCommandDownloads || [];
    target.innerHTML = `
      <div class="enrollment-command-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="enrollment-command-grid">
        ${data.enrollment.conversionCommandCenter
          .map(
            (item) => `
              <article class="enrollment-command-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Stage ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="enrollment-command-meta">
                  <div>
                    <strong>用户信号</strong>
                    <p>${item.userSignal}</p>
                  </div>
                  <div>
                    <strong>证据页面</strong>
                    <p>${item.evidencePage}</p>
                  </div>
                </div>
                <div class="enrollment-command-detail-grid">
                  <div>
                    <strong>Codex 可做</strong>
                    <p>${item.codexAutomation}</p>
                  </div>
                  <div>
                    <strong>人工动作</strong>
                    <p>${item.humanAction}</p>
                  </div>
                  <div>
                    <strong>下一步 CTA</strong>
                    <p>${item.nextCTA}</p>
                  </div>
                  <div>
                    <strong>复盘指标</strong>
                    <p>${item.reviewMetric}</p>
                  </div>
                </div>
                <div class="enrollment-command-boundary">
                  <strong>承诺边界</strong>
                  <p>${item.manualBoundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderEnrollmentDecisionTool() {
    const target = byId("enrollment-decision-tool");
    if (!target || !data.enrollment || !data.enrollment.decisionTool) return;
    const tool = data.enrollment.decisionTool;
    target.innerHTML = `
      <article class="decision-tool-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Lead Router</p>
          <h3>按咨询信息判断推荐路径</h3>
          <div class="decision-input-grid">
            ${tool.fields
              .map(
                (field) => `
                  <label class="decision-field" for="decision-${field.id}">
                    <span>${field.label}</span>
                    <select id="decision-${field.id}" data-decision-field="${field.id}">
                      ${field.options
                        .map(
                          (option) => `
                            <option value="${option.value}"${
                              tool.defaultValues[field.id] === option.value ? " selected" : ""
                            }>${option.label}</option>
                          `
                        )
                        .join("")}
                    </select>
                  </label>
                `
              )
              .join("")}
          </div>
        </div>
        <div id="enrollment-decision-result" class="decision-result-panel" aria-live="polite"></div>
      </article>
    `;
    setupEnrollmentDecisionTool(tool);
  }

  function getEnrollmentDecision(values, tool) {
    if (values.boundary === "reject") return tool.routes.boundary;
    if (values.role === "enterprise" || values.role === "manager" || values.material === "team_process" || values.pain === "sop") {
      return tool.routes.enterprise;
    }
    if (values.boundary === "uncertain" || values.material === "none" || values.pain === "unclear") {
      return tool.routes.resource;
    }
    return tool.routes.course;
  }

  function setupEnrollmentDecisionTool(tool) {
    const fields = [...document.querySelectorAll("[data-decision-field]")];
    const result = byId("enrollment-decision-result");
    if (!fields.length || !result) return;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.decisionField] = field.value;
        return values;
      }, {});
    }

    function updateResult() {
      const values = readValues();
      const route = getEnrollmentDecision(values, tool);
      result.innerHTML = `
        <p class="eyebrow">Recommended Route</p>
        <h3>${route.title}</h3>
        <p>${route.fit}</p>
        <div class="detail-block">
          <strong>下一步动作</strong>
          <p>${route.nextAction}</p>
        </div>
        <div class="detail-block">
          <strong>承诺边界</strong>
          <p>${route.boundary}</p>
        </div>
        <div class="hero-actions compact-actions">
          <a class="button primary" href="${route.primaryPage}">进入主路径</a>
          <a class="button secondary" href="${route.secondaryPage}">查看辅助页面</a>
        </div>
      `;
    }

    fields.forEach((field) => field.addEventListener("change", updateResult));
    updateResult();
  }

  function renderEnrollmentOfferBriefBuilder() {
    const target = byId("enrollment-offer-brief-builder");
    if (!target || !data.enrollment || !data.enrollment.offerBriefBuilder) return;
    const builder = data.enrollment.offerBriefBuilder;
    const defaults = builder.defaults || {};
    target.innerHTML = `
      <div class="enrollment-offer-downloads">
        ${(builder.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card enrollment-offer-brief-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Offer Brief Builder</p>
          <h3>${builder.title}</h3>
          <p>${builder.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="offer-brief-learnerType">
              <span>咨询对象</span>
              <select id="offer-brief-learnerType" data-offer-brief-field="learnerType">
                ${builder.learnerTypes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.learnerType === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="offer-brief-materialReadiness">
              <span>资料准备</span>
              <select id="offer-brief-materialReadiness" data-offer-brief-field="materialReadiness">
                ${builder.materialReadinessLevels
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.materialReadiness === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="offer-brief-mainConcern">
              <span>核心顾虑</span>
              <select id="offer-brief-mainConcern" data-offer-brief-field="mainConcern">
                ${builder.mainConcerns
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.mainConcern === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="offer-brief-offerPath">
              <span>推荐路径</span>
              <select id="offer-brief-offerPath" data-offer-brief-field="offerPath">
                ${builder.offerPaths
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.offerPath === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="offer-brief-commitmentLevel">
              <span>付款/承诺状态</span>
              <select id="offer-brief-commitmentLevel" data-offer-brief-field="commitmentLevel">
                ${builder.commitmentLevels
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.commitmentLevel === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="offer-brief-followupMode">
              <span>跟进方式</span>
              <select id="offer-brief-followupMode" data-offer-brief-field="followupMode">
                ${builder.followupModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.followupMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel enrollment-offer-result" aria-live="polite">
          <div id="offer-brief-result"></div>
          <div class="hero-actions compact-actions enrollment-offer-actions">
            <button class="button secondary" type="button" id="offer-brief-copy">复制方案</button>
            <button class="button secondary" type="button" id="offer-brief-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="offer-brief-status"></span>
        </div>
      </article>
    `;
    setupEnrollmentOfferBriefBuilder(builder);
  }

  function setupEnrollmentOfferBriefBuilder(builder) {
    const fields = [...document.querySelectorAll("[data-offer-brief-field]")];
    const result = byId("offer-brief-result");
    const copy = byId("offer-brief-copy");
    const download = byId("offer-brief-download");
    const status = byId("offer-brief-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.offerBriefField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function buildBrief(values) {
      const learnerType = pick(builder.learnerTypes, values.learnerType);
      const materialReadiness = pick(builder.materialReadinessLevels, values.materialReadiness);
      const mainConcern = pick(builder.mainConcerns, values.mainConcern);
      const offerPath = pick(builder.offerPaths, values.offerPath);
      const commitmentLevel = pick(builder.commitmentLevels, values.commitmentLevel);
      const followupMode = pick(builder.followupModes, values.followupMode);
      const routePages = [
        ...new Set([
          ...learnerType.routePages,
          ...materialReadiness.pageRoutes,
          mainConcern.proofPage,
          ...offerPath.routePages,
          ...followupMode.routePages,
          "playbook.html"
        ])
      ];
      const primaryPages = routePages.slice(0, 5);
      const runbook = [
        { stage: "01", title: "确认对象和场景", detail: `${learnerType.label}：${learnerType.profile}` },
        { stage: "02", title: "回应核心顾虑", detail: `${mainConcern.label}：${mainConcern.response}` },
        { stage: "03", title: "锁定推荐路径", detail: `${offerPath.label}（${offerPath.packageRef}）：${offerPath.fit}` },
        { stage: "04", title: "核对资料和付款状态", detail: `${materialReadiness.requirement} ${commitmentLevel.confirmation}` },
        { stage: "05", title: "交付与验收", detail: `${offerPath.deliverables.join("；")} 验收：${offerPath.acceptance}` },
        { stage: "06", title: "人工边界和交接", detail: `${mainConcern.boundary} ${commitmentLevel.nextStep}` }
      ];
      const codexPrompt = `请基于以下报课方案 brief 生成一段课程顾问跟进话术：咨询对象为${learnerType.label}，资料准备为${materialReadiness.label}，核心顾虑为${mainConcern.label}，推荐路径为${offerPath.label}，付款/承诺状态为${commitmentLevel.label}，跟进方式为${followupMode.label}。必须包含推荐理由、证据页面、交付物、资料准备、付款前人工确认、下一步 CTA 和禁止承诺边界。`;
      return { learnerType, materialReadiness, mainConcern, offerPath, commitmentLevel, followupMode, routePages, primaryPages, runbook, codexPrompt };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { learnerType, materialReadiness, mainConcern, offerPath, commitmentLevel, followupMode, routePages, primaryPages, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${offerPath.packageRef} · ${commitmentLevel.paymentStatus}</p>
        <h3>${learnerType.label}报课方案</h3>
        <p>${offerPath.fit}</p>
        <div class="enrollment-offer-meta">
          <div>
            <strong>${materialReadiness.score}</strong>
            <span>资料成熟度</span>
          </div>
          <div>
            <strong>${mainConcern.label}</strong>
            <span>主要顾虑</span>
          </div>
          <div>
            <strong>${followupMode.channel}</strong>
            <span>跟进渠道</span>
          </div>
        </div>
        <div class="enrollment-offer-grid">
          <div>
            <strong>页面证据路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>优先打开</strong>
            <div class="home-entry-link-list">
              ${primaryPages.map((page) => `<a href="./${page}">${page}</a>`).join("")}
            </div>
          </div>
          <div>
            <strong>推荐理由</strong>
            <p>${learnerType.profile}</p>
          </div>
          <div>
            <strong>顾虑回应</strong>
            <p>${mainConcern.response}</p>
          </div>
          <div>
            <strong>交付物</strong>
            ${list(offerPath.deliverables)}
          </div>
          <div>
            <strong>资料准备</strong>
            <p>${materialReadiness.requirement}</p>
          </div>
          <div>
            <strong>Codex 可做事项</strong>
            ${list(learnerType.codexUse)}
          </div>
          <div>
            <strong>人工确认事项</strong>
            ${list(learnerType.manualConfirm)}
          </div>
          <div>
            <strong>付款/承诺确认</strong>
            <p>${commitmentLevel.confirmation} ${commitmentLevel.nextStep}</p>
          </div>
          <div>
            <strong>跟进话术要求</strong>
            <p>${followupMode.scriptNeed}</p>
          </div>
        </div>
        <div class="enrollment-offer-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>报课承诺边界</strong>
          <p>${mainConcern.boundary} ${materialReadiness.gate} ${learnerType.manualConfirm.join("、")}必须人工确认，不能承诺自动成交、自动报价或替代专业审批。</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildEnrollmentOfferBriefMarkdown(currentBrief));
        setStatus("报课方案已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(builder.exportFilename || "enrollment-offer-brief-output.md", buildEnrollmentOfferBriefMarkdown(currentBrief), "text/markdown;charset=utf-8");
      setStatus("Markdown 报课方案已生成下载。");
    });
    renderResult();
  }

  function buildEnrollmentOfferBriefMarkdown(brief) {
    const { learnerType, materialReadiness, mainConcern, offerPath, commitmentLevel, followupMode, routePages, primaryPages, runbook, codexPrompt } = brief;
    return `# 报课方案 Brief

- 咨询对象：${learnerType.label}
- 资料准备：${materialReadiness.label}（${materialReadiness.score}）
- 核心顾虑：${mainConcern.label}
- 推荐路径：${offerPath.label}
- 推荐产品包：${offerPath.packageRef}
- 付款/承诺状态：${commitmentLevel.label}
- 跟进方式：${followupMode.label}

## 推荐理由
${learnerType.profile}
${offerPath.fit}

## 页面证据路线
${routePages.map((page) => `- ${page}`).join("\n")}

## 优先打开
${primaryPages.map((page) => `- ${page}`).join("\n")}

## 顾虑回应
${mainConcern.proof}
${mainConcern.response}

## 交付物
${offerPath.deliverables.map((item) => `- ${item}`).join("\n")}

## 资料准备
${materialReadiness.requirement}
${materialReadiness.repairAction}

## Codex 可做事项
${learnerType.codexUse.map((item) => `- ${item}`).join("\n")}

## 人工确认事项
${learnerType.manualConfirm.map((item) => `- ${item}`).join("\n")}

## 付款前确认
${commitmentLevel.paymentStatus}
${commitmentLevel.confirmation}
${commitmentLevel.nextStep}

## 跟进渠道
${followupMode.channel}
${followupMode.scriptNeed}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${mainConcern.boundary}
${materialReadiness.gate}
${learnerType.manualConfirm.join("、")}必须人工确认，不能承诺自动成交、自动报价或替代专业审批。
`;
  }

  function renderEnrollmentProofDesk() {
    const target = byId("enrollment-proof-desk");
    if (!target || !data.enrollment || !data.enrollment.proofDesk) return;
    const downloads = data.enrollment.proofDeskDownloads || [];
    target.innerHTML = `
      <div class="enrollment-proof-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="enrollment-proof-grid">
        ${data.enrollment.proofDesk
          .map(
            (item) => `
              <article class="enrollment-proof-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Objection</p>
                    <h3>${item.concern}</h3>
                  </div>
                  <a class="button secondary" href="${item.proofHref}">${item.proofPage}</a>
                </div>
                <div class="enrollment-proof-detail-grid">
                  <div>
                    <strong>证据材料</strong>
                    <p>${item.evidence}</p>
                  </div>
                  <div>
                    <strong>回应口径</strong>
                    <p>${item.response}</p>
                  </div>
                  <div>
                    <strong>下一步动作</strong>
                    <p>${item.nextAction}</p>
                  </div>
                  <div>
                    <strong>承诺边界</strong>
                    <p>${item.boundary}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderEnrollmentOutcomeProof() {
    const target = byId("enrollment-outcome-proof");
    if (!target || !data.enrollment || !data.enrollment.outcomeProofBoard) return;
    const downloads = data.enrollment.outcomeProofDownloads || [];
    target.innerHTML = `
      <div class="enrollment-proof-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="enrollment-proof-grid">
        ${data.enrollment.outcomeProofBoard
          .map(
            (item) => `
              <article class="enrollment-proof-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">${item.sourceHomework}</p>
                    <h3>${item.packageName}</h3>
                  </div>
                  <a class="button secondary" href="${item.linkedHref}">${item.linkedPage}</a>
                </div>
                <div class="enrollment-proof-detail-grid">
                  <div>
                    <strong>成果信号</strong>
                    <p>${item.proofSignal}</p>
                  </div>
                  <div>
                    <strong>可展示证据</strong>
                    <p>${item.visibleEvidence}</p>
                  </div>
                  <div>
                    <strong>咨询使用</strong>
                    <p>${item.salesUse}</p>
                  </div>
                  <div>
                    <strong>展示边界</strong>
                    <p>${item.displayBoundary}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderEnrollmentToolchainProofDesk() {
    const target = byId("enrollment-toolchain-proof-content");
    if (!target || !data.enrollment || !data.enrollment.toolchainProofDesk) return;
    const desk = data.enrollment.toolchainProofDesk;
    const downloads = data.enrollment.toolchainProofDownloads || [];
    const toHref = (page) => (page.startsWith("#") ? page : `./${page}`);
    target.innerHTML = `
      <div class="enrollment-toolchain-proof-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="enrollment-toolchain-proof-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Toolchain Evidence</p>
            <h3>${desk.title}</h3>
            <p>${desk.summary}</p>
          </div>
          ${tagRow(["咨询证据", "公开候选", "企业信号", "禁止承诺"])}
        </div>
        <div class="enrollment-toolchain-proof-meta">
          ${(desk.meta || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="enrollment-toolchain-proof-grid">
          ${(desk.proofs || [])
            .map(
              (item) => `
                <section>
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">Learner Evidence</p>
                      <h4>${item.tool}</h4>
                    </div>
                    <a class="button secondary" href="${toHref(item.sourceRoute)}">查看来源</a>
                  </div>
                  <div class="enrollment-toolchain-proof-detail-grid">
                    <div>
                      <strong>学员证据</strong>
                      <p>${item.learnerEvidence}</p>
                    </div>
                    <div>
                      <strong>咨询用途</strong>
                      <p>${item.consultationUse}</p>
                    </div>
                    <div>
                      <strong>可展示内容</strong>
                      <p>${item.visibleProof}</p>
                    </div>
                    <div>
                      <strong>企业信号</strong>
                      <p>${item.enterpriseSignal}</p>
                    </div>
                    <div>
                      <strong>人工审批</strong>
                      <p>${item.approvalGate}</p>
                    </div>
                    <div>
                      <strong>禁止承诺</strong>
                      <p>${item.noGo}</p>
                    </div>
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
        <div class="enrollment-toolchain-proof-bottom">
          <div>
            <strong>证据状态</strong>
            ${(desk.evidenceStates || []).map((item) => `<p><span>${item.state}</span>${item.rule}</p>`).join("")}
          </div>
          <div>
            <strong>使用前审批</strong>
            ${list(desk.approvalChecks || [])}
          </div>
          <div>
            <strong>后续路由</strong>
            ${list(desk.handoffRoutes || [])}
          </div>
        </div>
      </article>
    `;
  }

  function renderEnrollmentShowcaseProofRouter() {
    const target = byId("enrollment-showcase-proof-router-content");
    if (!target || !data.enrollment || !data.enrollment.showcaseProofRouter) return;
    const router = data.enrollment.showcaseProofRouter;
    const downloads = data.enrollment.showcaseProofRouterDownloads || [];
    const toHref = (page) => (page.startsWith("#") ? page : `./${page}`);
    target.innerHTML = `
      <div class="enrollment-showcase-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="enrollment-showcase-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Evidence Conversion</p>
            <h3>${router.title}</h3>
            <p>${router.summary}</p>
          </div>
          ${tagRow(["验收", "脱敏", "授权", "回写"])}
        </div>
        <div class="enrollment-showcase-meta">
          ${(router.meta || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="enrollment-showcase-grid">
          ${(router.routes || [])
            .map(
              (item) => `
                <section>
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">Consultation Concern</p>
                      <h4>${item.concern}</h4>
                    </div>
                    <a class="button secondary" href="${toHref(item.sourcePage)}">${item.sourceLabel || item.sourcePage}</a>
                  </div>
                  <div class="home-entry-link-list">
                    ${(item.routePages || []).map((page) => `<a href="${toHref(page)}">${page}</a>`).join("")}
                  </div>
                  <div class="enrollment-showcase-detail-grid">
                    <div>
                      <strong>可用成果证据</strong>
                      <p>${item.acceptedEvidence}</p>
                    </div>
                    <div>
                      <strong>可展示内容</strong>
                      <p>${item.visibleProof}</p>
                    </div>
                    <div>
                      <strong>咨询用途</strong>
                      <p>${item.salesUse}</p>
                    </div>
                    <div>
                      <strong>Codex 辅助</strong>
                      <p>${item.codexAssist}</p>
                    </div>
                    <div>
                      <strong>人工审批</strong>
                      <p>${item.humanGate}</p>
                    </div>
                    <div>
                      <strong>下一步动作</strong>
                      <p>${item.nextAction}</p>
                    </div>
                    <div class="span-2">
                      <strong>禁止使用口径</strong>
                      <p>${item.noGo}</p>
                    </div>
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
        <div class="enrollment-showcase-bottom">
          <div>
            <strong>证据状态</strong>
            ${(router.evidenceStates || []).map((item) => `<p><span>${item.state}</span>${item.rule}</p>`).join("")}
          </div>
          <div>
            <strong>展示前审批</strong>
            ${list(router.approvalChecks || [])}
          </div>
          <div>
            <strong>平台回写去向</strong>
            ${list(router.writebackTargets || [])}
          </div>
        </div>
      </article>
    `;
  }

  function renderEnrollmentApplicationProofRouter() {
    const target = byId("enrollment-application-proof-router-content");
    if (!target || !data.enrollment || !data.enrollment.applicationProofRouter) return;
    const router = data.enrollment.applicationProofRouter;
    const downloads = data.enrollment.applicationProofDownloads || [];
    const toHref = (page) => (page.startsWith("#") ? page : `./${page}`);
    target.innerHTML = `
      <div class="enrollment-application-proof-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="enrollment-application-proof-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Real Use Evidence</p>
            <h3>${router.title}</h3>
            <p>${router.summary}</p>
          </div>
          ${tagRow(["真实使用", "脱敏授权", "招生证据", "企业线索"])}
        </div>
        <div class="enrollment-application-proof-meta">
          ${(router.meta || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="enrollment-application-proof-grid">
          ${(router.lanes || [])
            .map(
              (lane) => `
                <section>
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">${lane.routeDecision}</p>
                      <h4>${lane.signal}</h4>
                    </div>
                    <span class="tag">${lane.writeback}</span>
                  </div>
                  <div class="home-entry-link-list">
                    ${(lane.routePages || []).map((page) => `<a href="${toHref(page)}">${page}</a>`).join("")}
                  </div>
                  <div class="enrollment-application-proof-detail-grid">
                    <div>
                      <strong>可接受证据</strong>
                      <p>${lane.acceptedEvidence}</p>
                    </div>
                    <div>
                      <strong>报名页用途</strong>
                      <p>${lane.enrollmentUse}</p>
                    </div>
                    <div>
                      <strong>Codex 辅助</strong>
                      <p>${lane.codexAssist}</p>
                    </div>
                    <div>
                      <strong>人工闸口</strong>
                      <p>${lane.manualGate}</p>
                    </div>
                    <div class="span-2">
                      <strong>禁止使用口径</strong>
                      <p>${lane.noGo}</p>
                    </div>
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
        <div class="enrollment-application-proof-bottom">
          <div>
            <strong>承接检查</strong>
            ${list(router.intakeChecks || [])}
          </div>
          <div>
            <strong>平台回写去向</strong>
            ${list(router.writebackTargets || [])}
          </div>
        </div>
      </article>
    `;
  }

  function renderEnrollmentHandoffDesk() {
    const target = byId("enrollment-handoff-desk");
    if (!target || !data.enrollment || !data.enrollment.handoffDesk) return;
    const downloads = data.enrollment.handoffDownloads || [];
    target.innerHTML = `
      <div class="enrollment-handoff-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="enrollment-handoff-grid">
        ${data.enrollment.handoffDesk
          .map(
            (item) => `
              <article class="enrollment-handoff-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Handoff ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="enrollment-handoff-meta">
                  <div>
                    <strong>交接触发</strong>
                    <p>${item.handoffTrigger}</p>
                  </div>
                  <div>
                    <strong>交接输入</strong>
                    <p>${item.handoffInput}</p>
                  </div>
                </div>
                <div class="enrollment-handoff-detail-grid">
                  <div>
                    <strong>Codex 辅助</strong>
                    <p>${item.codexAssist}</p>
                  </div>
                  <div>
                    <strong>人工确认</strong>
                    <p>${item.humanCheck}</p>
                  </div>
                  <div>
                    <strong>学员动作</strong>
                    <p>${item.studentAction}</p>
                  </div>
                  <div>
                    <strong>交接证据</strong>
                    <p>${item.nextEvidence}</p>
                  </div>
                </div>
                <div class="enrollment-handoff-boundary">
                  <strong>承诺边界</strong>
                  <p>${item.boundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderEnrollmentLearningPath() {
    const target = byId("enrollment-learning-path");
    if (!target || !data.enrollment) return;
    target.innerHTML = data.enrollment.learningPath
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid two-column">
              <div>
                <strong>关键动作</strong>
                <p>${step.action}</p>
              </div>
              <div>
                <strong>输出结果</strong>
                <p>${step.output}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderEnrollmentOutcomes() {
    const target = byId("enrollment-outcomes");
    if (!target || !data.enrollment) return;
    target.innerHTML = data.enrollment.outcomes
      .map(
        (outcome) => `
          <article class="info-card">
            <h3>${outcome.title}</h3>
            <p>${outcome.value}</p>
            <div class="detail-block"><strong>可验证输出</strong>${list(outcome.proof)}</div>
          </article>
        `
      )
      .join("");
  }

  function renderEnrollmentQualification() {
    const target = byId("enrollment-qualification");
    if (!target || !data.enrollment) return;
    target.innerHTML = `
      <div class="standard-layout">
        <div>
          <p class="eyebrow">Fit Check</p>
          <h3>适合报名的学员通常具备这些条件</h3>
          <p>课程适合愿意整理业务资料、按作业搭建流程、并保留人工确认边界的学员或企业。</p>
        </div>
        ${list(data.enrollment.qualificationChecklist)}
      </div>
    `;
  }

  function renderEnrollmentConcerns() {
    const target = byId("enrollment-concerns");
    if (!target || !data.enrollment) return;
    target.innerHTML = data.enrollment.concerns
      .map(
        (item) => `
          <article class="info-card">
            <h3>${item.question}</h3>
            <p>${item.answer}</p>
          </article>
        `
      )
      .join("");
  }

  function renderClassroomMetrics() {
    const target = byId("classroom-metrics");
    if (!target || !data.classroom) return;
    target.innerHTML = data.classroom.metrics
      .map(
        (metric) => `
          <article class="metric playbook-metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderClassroomRunbook() {
    const target = byId("classroom-runbook");
    if (!target || !data.classroom) return;
    target.innerHTML = data.classroom.sessionRunbook
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid two-column">
              <div>
                <strong>老师动作</strong>
                <p>${step.teacherAction}</p>
              </div>
              <div>
                <strong>学员动作</strong>
                <p>${step.learnerAction}</p>
              </div>
              <div>
                <strong>课堂输出</strong>
                <p>${step.output}</p>
              </div>
              <div>
                <strong>边界提醒</strong>
                <p>${step.boundary}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderClassroomSystemLessonRoute() {
    const target = byId("classroom-system-lesson-route-content");
    if (!target || !data.classroom || !data.classroom.systemLessonRoute) return;
    const route = data.classroom.systemLessonRoute;
    const downloads = data.classroom.systemLessonRouteDownloads || [];
    const toHref = (page) => (page.startsWith("#") ? page : `./${page}`);
    target.innerHTML = `
      <div class="classroom-system-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="classroom-system-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">System Lesson Master</p>
            <h3>${route.title}</h3>
            <p>${route.summary}</p>
          </div>
          ${tagRow(["主讲", "助教", "作业", "回写"])}
        </div>
        <div class="classroom-system-meta">
          ${(route.meta || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="classroom-system-phases">
          ${(route.phases || [])
            .map(
              (phase) => `
                <article>
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">${phase.time}</p>
                      <h4>${phase.title}</h4>
                    </div>
                  </div>
                  <div class="home-entry-link-list">
                    ${phase.pageRoute.map((page) => `<a href="${toHref(page)}">${page}</a>`).join("")}
                  </div>
                  <div class="classroom-system-detail-grid">
                    <div>
                      <strong>主讲老师</strong>
                      <p>${phase.teacherLine}</p>
                    </div>
                    <div>
                      <strong>助教检查</strong>
                      <p>${phase.assistantCheck}</p>
                    </div>
                    <div>
                      <strong>学员作业</strong>
                      <p>${phase.learnerOutput}</p>
                    </div>
                    <div>
                      <strong>课后回写</strong>
                      <p>${phase.writeback}</p>
                    </div>
                    <div>
                      <strong>Codex 辅助</strong>
                      <p>${phase.codexRole}</p>
                    </div>
                    <div>
                      <strong>人工闸口</strong>
                      <p>${phase.manualGate}</p>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="classroom-system-bottom">
          <div>
            <strong>课堂交付物</strong>
            ${list(route.deliverables || [])}
          </div>
          <div>
            <strong>角色规则</strong>
            ${(route.roleRules || [])
              .map((item) => `<p><span>${item.role}</span>${item.rule}</p>`)
              .join("")}
          </div>
          <div>
            <strong>禁止完成判定</strong>
            ${list(route.noGoRules || [])}
          </div>
        </div>
      </div>
    `;
  }

  function renderClassroomLessonBuilder() {
    const target = byId("classroom-lesson-builder");
    if (!target || !data.classroom || !data.classroom.lessonBuilder) return;
    const builder = data.classroom.lessonBuilder;
    const defaults = builder.defaults || {};
    target.innerHTML = `
      <article class="decision-tool-card classroom-lesson-builder-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Lesson Operations Desk</p>
          <h3>${builder.title}</h3>
          <p>${builder.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="lesson-builder-module">
              <span>课程模块</span>
              <select id="lesson-builder-module" data-lesson-builder-field="module">
                ${builder.modules
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.module === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="lesson-builder-classType">
              <span>课型</span>
              <select id="lesson-builder-classType" data-lesson-builder-field="classType">
                ${builder.classTypes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.classType === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="lesson-builder-learnerStage">
              <span>学员状态</span>
              <select id="lesson-builder-learnerStage" data-lesson-builder-field="learnerStage">
                ${builder.learnerStages
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.learnerStage === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="lesson-builder-focusMode">
              <span>重点交付</span>
              <select id="lesson-builder-focusMode" data-lesson-builder-field="focusMode">
                ${builder.focusModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.focusMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="lesson-builder-boundaryMode">
              <span>边界口径</span>
              <select id="lesson-builder-boundaryMode" data-lesson-builder-field="boundaryMode">
                ${builder.boundaryModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.boundaryMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel classroom-lesson-builder-result" aria-live="polite">
          <div id="lesson-builder-result"></div>
          <div class="hero-actions compact-actions classroom-lesson-builder-actions">
            <button class="button secondary" type="button" id="lesson-builder-copy">复制教案</button>
            <button class="button secondary" type="button" id="lesson-builder-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="lesson-builder-status"></span>
        </div>
      </article>
    `;
    setupClassroomLessonBuilder(builder);
  }

  function setupClassroomLessonBuilder(builder) {
    const fields = [...document.querySelectorAll("[data-lesson-builder-field]")];
    const result = byId("lesson-builder-result");
    const copy = byId("lesson-builder-copy");
    const download = byId("lesson-builder-download");
    const status = byId("lesson-builder-status");
    if (!fields.length || !result) return;
    let currentLesson = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.lessonBuilderField] = field.value;
        return values;
      }, {});
    }

    function buildLesson(values) {
      const module = builder.modules.find((item) => item.id === values.module) || builder.modules[0];
      const classType = builder.classTypes.find((item) => item.id === values.classType) || builder.classTypes[0];
      const learnerStage = builder.learnerStages.find((item) => item.id === values.learnerStage) || builder.learnerStages[0];
      const focusMode = builder.focusModes.find((item) => item.id === values.focusMode) || builder.focusModes[0];
      const boundaryMode = builder.boundaryModes.find((item) => item.id === values.boundaryMode) || builder.boundaryModes[0];
      const runbook = [
        { stage: "01", title: "开场定位", detail: classType.opening },
        { stage: "02", title: "业务场景", detail: module.caseScenario },
        { stage: "03", title: "页面路线", detail: module.route.join(" -> ") },
        { stage: "04", title: "现场演示", detail: module.demoSteps.join("；") },
        { stage: "05", title: "学员替换", detail: learnerStage.adjustment },
        { stage: "06", title: "交付验收", detail: `${module.learnerOutput}；${focusMode.instruction}` },
        { stage: "07", title: "边界收口", detail: `${module.manualBoundary} ${boundaryMode.closing}` }
      ];
      return { module, classType, learnerStage, focusMode, boundaryMode, runbook };
    }

    function renderResult() {
      currentLesson = buildLesson(readValues());
      const { module, classType, learnerStage, focusMode, boundaryMode, runbook } = currentLesson;
      result.innerHTML = `
        <p class="eyebrow">${classType.label} · ${classType.duration}</p>
        <h3>${module.label}</h3>
        <p>${module.objective}</p>
        <div class="classroom-lesson-builder-meta">
          <div>
            <strong>${learnerStage.label}</strong>
            <span>学员状态</span>
          </div>
          <div>
            <strong>${focusMode.label}</strong>
            <span>重点交付</span>
          </div>
          <div>
            <strong>${boundaryMode.label}</strong>
            <span>边界口径</span>
          </div>
        </div>
        <div class="classroom-lesson-builder-grid">
          <div>
            <strong>页面路线</strong>
            ${tagRow(module.route)}
          </div>
          <div>
            <strong>现场演示步骤</strong>
            ${list(module.demoSteps)}
          </div>
          <div>
            <strong>学员交付物</strong>
            <p>${module.learnerOutput}</p>
          </div>
          <div>
            <strong>助教检查</strong>
            <p>${module.assistantCheck}</p>
          </div>
          <div>
            <strong>课后作业</strong>
            <p>${module.homework}</p>
          </div>
          <div>
            <strong>课后维护证据</strong>
            <p>${focusMode.evidence}</p>
          </div>
        </div>
        <div class="classroom-runbook-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>人工边界</strong>
          <p>${boundaryMode.rule} ${module.manualBoundary} ${learnerStage.risk}</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentLesson) return;
      try {
        await navigator.clipboard.writeText(buildClassroomLessonMarkdown(currentLesson));
        setStatus("教案已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentLesson) return;
      downloadTextFile(builder.exportFilename || "classroom-lesson-runbook-output.md", buildClassroomLessonMarkdown(currentLesson), "text/markdown;charset=utf-8");
      setStatus("Markdown 教案已生成下载。");
    });
    renderResult();
  }

  function buildClassroomLessonMarkdown(lesson) {
    const { module, classType, learnerStage, focusMode, boundaryMode, runbook } = lesson;
    return `# 单节课课堂 Runbook

- 课程模块：${module.label}
- 课型：${classType.label}
- 时长：${classType.duration}
- 学员状态：${learnerStage.label}
- 重点交付：${focusMode.label}
- 边界口径：${boundaryMode.label}

## 课堂目标
${module.objective}

## 案例场景
${module.caseScenario}

## 页面路线
${module.route.map((item) => `- ${item}`).join("\n")}

## 课堂步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 现场演示
${module.demoSteps.map((item) => `- ${item}`).join("\n")}

## 学员交付物
${module.learnerOutput}

## 助教检查
${module.assistantCheck}

## 课后作业
${module.homework}

## 课后维护证据
${focusMode.evidence}

## 人工确认边界
${boundaryMode.rule}
${module.manualBoundary}
${learnerStage.risk}
`;
  }

  function renderClassroomDemoSwitchboard() {
    const target = byId("classroom-demo-switchboard");
    if (!target || !data.classroom) return;
    target.innerHTML = data.classroom.demoSwitchboard
      .map(
        (demo) => `
          <article class="case-library-card">
            <div class="case-card-head">
              <div>
                <p class="eyebrow">${demo.module}</p>
                <h3>${demo.demo}</h3>
              </div>
              <a class="button secondary" href="${demo.page}">进入演示</a>
            </div>
            <div class="case-card-grid">
              <div>
                <strong>输入资料</strong>
                <p>${demo.input}</p>
              </div>
              <div>
                <strong>输出结果</strong>
                <p>${demo.output}</p>
              </div>
              <div>
                <strong>老师提示</strong>
                <p>${demo.teacherCue}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderClassroomExecutionDesk() {
    const target = byId("classroom-execution-desk");
    if (!target || !data.classroom || !data.classroom.lessonExecutionDesk) return;
    const downloads = data.classroom.lessonExecutionDownloads || [];
    target.innerHTML = `
      <div class="classroom-execution-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="classroom-execution-grid">
        ${data.classroom.lessonExecutionDesk
          .map(
            (item) => `
              <article class="classroom-execution-card">
                <div class="lesson-step-head">
                  <span class="step-number">${item.stage}</span>
                  <div>
                    <p class="eyebrow">${item.modules}</p>
                    <h3>${item.title}</h3>
                  </div>
                </div>
                <div class="detail-block">
                  <strong>课堂路线</strong>
                  <p>${item.route}</p>
                </div>
                <div class="classroom-execution-detail-grid">
                  <div>
                    <strong>现场动作</strong>
                    <p>${item.liveAction}</p>
                  </div>
                  <div>
                    <strong>演示证据</strong>
                    <p>${item.demoEvidence}</p>
                  </div>
                  <div>
                    <strong>学员输出</strong>
                    <p>${item.learnerOutput}</p>
                  </div>
                  <div>
                    <strong>助教检查</strong>
                    <p>${item.assistantCheck}</p>
                  </div>
                  <div class="span-2">
                    <strong>课后回写信号</strong>
                    <p>${item.maintenanceSignal}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderClassroomInstructorReplication() {
    const target = byId("classroom-instructor-replication");
    if (!target || !data.classroom || !data.classroom.instructorReplicationBoard) return;
    const downloads = data.classroom.instructorReplicationDownloads || [];
    target.innerHTML = `
      <div class="classroom-instructor-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="classroom-instructor-grid">
        ${data.classroom.instructorReplicationBoard
          .map(
            (item) => `
              <article class="classroom-instructor-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Certification ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="classroom-instructor-meta">
                  <div>
                    <strong>训练目标</strong>
                    <p>${item.trainingGoal}</p>
                  </div>
                  <div>
                    <strong>必备证据</strong>
                    <p>${item.requiredEvidence}</p>
                  </div>
                </div>
                <div class="classroom-instructor-detail-grid">
                  <div>
                    <strong>Codex 辅助</strong>
                    <p>${item.codexAssist}</p>
                  </div>
                  <div>
                    <strong>导师校准</strong>
                    <p>${item.mentorCheck}</p>
                  </div>
                  <div>
                    <strong>通过标准</strong>
                    <p>${item.passStandard}</p>
                  </div>
                </div>
                <div class="classroom-instructor-boundary">
                  <strong>风险边界</strong>
                  <p>${item.riskBoundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderClassroomRehearsalGate() {
    const target = byId("classroom-rehearsal-gate-content");
    if (!target || !data.classroom || !data.classroom.rehearsalGate) return;
    const desk = data.classroom.rehearsalGate;
    const downloads = data.classroom.rehearsalGateDownloads || [];
    target.innerHTML = `
      <div class="classroom-rehearsal-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="glass-panel standard-panel classroom-rehearsal-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Public Demo Gate</p>
            <h3>${desk.title}</h3>
            <p>${desk.summary}</p>
          </div>
          ${tagRow(["试讲", "录屏", "公开课", "回写"])}
        </div>
        <div class="classroom-rehearsal-signals">
          ${desk.readinessSignals
            .map(
              (signal) => `
                <div>
                  <strong>Ready</strong>
                  <p>${signal}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="classroom-rehearsal-grid">
          ${desk.gates
            .map(
              (gate) => `
                <article>
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">Gate ${gate.stage}</p>
                      <h4>${gate.title}</h4>
                    </div>
                    <span class="tag">${gate.owner}</span>
                  </div>
                  <div class="classroom-rehearsal-route">
                    <strong>来源页面</strong>
                    ${tagRow(gate.sourcePages)}
                  </div>
                  <div class="classroom-rehearsal-detail-grid">
                    <div>
                      <strong>输入材料</strong>
                      <p>${gate.input}</p>
                    </div>
                    <div>
                      <strong>现场检查</strong>
                      <p>${gate.liveCheck}</p>
                    </div>
                    <div>
                      <strong>通过证据</strong>
                      <p>${gate.passEvidence}</p>
                    </div>
                    <div>
                      <strong>返修动作</strong>
                      <p>${gate.repairAction}</p>
                    </div>
                  </div>
                  <div class="classroom-rehearsal-decision">
                    <strong>上线决定</strong>
                    <p>${gate.launchDecision}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>禁止上线规则</strong>
          ${list(desk.noGoRules)}
        </div>
      </article>
    `;
  }

  function renderClassroomAssignmentPipeline() {
    const target = byId("classroom-assignment-pipeline");
    if (!target || !data.classroom) return;
    target.innerHTML = data.classroom.assignmentPipeline
      .map(
        (item) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${item.step}</span>
              <h3>${item.title}</h3>
            </div>
            <div class="lesson-step-grid two-column">
              <div>
                <strong>负责人</strong>
                <p>${item.owner}</p>
              </div>
              <div>
                <strong>输入</strong>
                <p>${item.input}</p>
              </div>
              <div>
                <strong>检查口径</strong>
                <p>${item.check}</p>
              </div>
              <div>
                <strong>输出</strong>
                <p>${item.output}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderClassroomReviewDesk() {
    const target = byId("classroom-review-desk");
    if (!target || !data.classroom || !data.classroom.reviewDesk) return;
    const downloads = data.classroom.reviewDeskDownloads || [];
    target.innerHTML = `
      <div class="classroom-review-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="classroom-review-grid">
        ${data.classroom.reviewDesk
          .map(
            (item) => `
              <article class="classroom-review-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Stage ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="classroom-review-meta">
                  <div>
                    <strong>触发条件</strong>
                    <p>${item.trigger}</p>
                  </div>
                  <div>
                    <strong>复盘指标</strong>
                    <p>${item.metric}</p>
                  </div>
                </div>
                <div class="classroom-review-detail-grid">
                  <div>
                    <strong>Codex 可做</strong>
                    <p>${item.codexAssist}</p>
                  </div>
                  <div>
                    <strong>老师/助教动作</strong>
                    <p>${item.teacherAction}</p>
                  </div>
                  <div>
                    <strong>学员反馈</strong>
                    <p>${item.learnerFeedback}</p>
                  </div>
                  <div>
                    <strong>返修输出</strong>
                    <p>${item.repairOutput}</p>
                  </div>
                </div>
                <div class="classroom-review-boundary">
                  <strong>入库与展示规则</strong>
                  <p>${item.archiveRule}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderClassroomModuleHandoffs() {
    const target = byId("classroom-module-handoffs");
    if (!target || !data.classroom) return;
    target.innerHTML = `
      <table class="data-table ops-table">
        <thead>
          <tr>
            <th>课程模块</th>
            <th>课堂重点</th>
            <th>学员交付物</th>
            <th>工具 / 指令</th>
            <th>验收标准</th>
          </tr>
        </thead>
        <tbody>
          ${data.classroom.moduleHandoffs
            .map(
              (row) => `
                <tr>
                  <td>${row.courseModule}</td>
                  <td>${row.classroomFocus}</td>
                  <td>${row.artifact}</td>
                  <td>${row.toolOrPrompt}</td>
                  <td>${row.acceptance}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderClassroomQa() {
    const target = byId("classroom-qa");
    if (!target || !data.classroom) return;
    target.innerHTML = data.classroom.qaPlaybook
      .map(
        (item) => `
          <article class="info-card">
            <h3>${item.question}</h3>
            <p>${item.answer}</p>
          </article>
        `
      )
      .join("");
  }

  function renderClassroomMaintenance() {
    const target = byId("classroom-maintenance");
    if (!target || !data.classroom) return;
    target.innerHTML = `
      <table class="data-table ops-table">
        <thead>
          <tr>
            <th>课堂信号</th>
            <th>更新动作</th>
            <th>维护文件</th>
          </tr>
        </thead>
        <tbody>
          ${data.classroom.postClassMaintenance
            .map(
              (row) => `
                <tr>
                  <td>${row.signal}</td>
                  <td>${row.update}</td>
                  <td><code>${row.file}</code></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderClassroomBoundaries() {
    const target = byId("classroom-boundaries");
    if (!target || !data.classroom) return;
    target.innerHTML = `
      <div class="standard-layout">
        <div>
          <p class="eyebrow">Teaching Guardrail</p>
          <h3>课堂输出必须保留业务确认责任</h3>
          <p>这部分用于老师开场、工具演示、作业点评和企业内训时统一说明，避免学员误解 Codex 的角色。</p>
        </div>
        ${list(data.classroom.classroomBoundaries)}
      </div>
    `;
  }

  function renderLearningMetrics() {
    const target = byId("learning-metrics");
    if (!target || !data.learning) return;
    target.innerHTML = data.learning.metrics
      .map(
        (metric) => `
          <article class="metric playbook-metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderLearningPaths() {
    const target = byId("learning-paths");
    if (!target || !data.learning) return;
    target.innerHTML = data.learning.learnerPaths
      .map(
        (path) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">${path.segment}</p>
              <h3>${path.focus}</h3>
            </div>
            <div class="standard-card-grid">
              <div>
                <strong>第一步动作</strong>
                <p>${path.firstAction}</p>
              </div>
              <div>
                <strong>必须提交</strong>
                ${list(path.mustSubmit)}
              </div>
              <div>
                <strong>风险提醒</strong>
                <p>${path.risk}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderLearningOnboardingDesk() {
    const target = byId("learning-onboarding-desk");
    if (!target || !data.learning || !data.learning.onboardingDesk) return;
    const downloads = data.learning.onboardingDownloads || [];
    target.innerHTML = `
      <div class="learner-onboarding-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="learner-onboarding-grid">
        ${data.learning.onboardingDesk
          .map(
            (item) => `
              <article class="learner-onboarding-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">${item.timing}</p>
                    <h3>${item.stage} ${item.title}</h3>
                  </div>
                  <span class="tag">${item.pageEvidence}</span>
                </div>
                <div class="learner-onboarding-meta">
                  <div>
                    <strong>学员输入</strong>
                    <p>${item.learnerInput}</p>
                  </div>
                  <div>
                    <strong>验收标准</strong>
                    <p>${item.acceptance}</p>
                  </div>
                </div>
                <div class="learner-onboarding-detail-grid">
                  <div>
                    <strong>Codex 可做</strong>
                    <p>${item.codexUse}</p>
                  </div>
                  <div>
                    <strong>助教检查</strong>
                    <p>${item.coachCheck}</p>
                  </div>
                  <div>
                    <strong>输出物</strong>
                    <p>${item.output}</p>
                  </div>
                </div>
                <div class="learner-onboarding-boundary">
                  <strong>人工确认边界</strong>
                  <p>${item.boundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderLearningRoadmap() {
    const target = byId("learning-roadmap");
    if (!target || !data.learning) return;
    target.innerHTML = data.learning.progressRoadmap
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.goal}</h3>
            </div>
            <div class="lesson-step-grid two-column">
              <div>
                <strong>对应模块</strong>
                <p>${step.modules}</p>
              </div>
              <div>
                <strong>学员动作</strong>
                <p>${step.learnerAction}</p>
              </div>
              <div class="span-2">
                <strong>通过证据</strong>
                <p>${step.evidence}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderLearningDeliverables() {
    const target = byId("learning-deliverables");
    if (!target || !data.learning) return;
    target.innerHTML = data.learning.deliverableChecklist
      .map(
        (item) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">${item.modules}</p>
              <h3>${item.artifact}</h3>
            </div>
            <div class="standard-card-grid">
              <div>
                <strong>业务输入</strong>
                <p>${item.businessInput}</p>
              </div>
              <div>
                <strong>Codex 输出</strong>
                <p>${item.codexOutput}</p>
              </div>
              <div>
                <strong>关联工具 / 指令</strong>
                <p>${item.linkedTool}</p>
              </div>
              <div>
                <strong>验收标准</strong>
                <p>${item.acceptance}</p>
              </div>
              <div class="span-2">
                <strong>人工确认边界</strong>
                <p>${item.manualBoundary}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderLearningSubmissionRules() {
    const target = byId("learning-submission-rules");
    if (!target || !data.learning) return;
    target.innerHTML = data.learning.submissionRules
      .map(
        (rule) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">Submission Rule</p>
              <h3>${rule.rule}</h3>
            </div>
            <div class="standard-card-grid two-column">
              <div>
                <strong>通过表现</strong>
                <p>${rule.pass}</p>
              </div>
              <div>
                <strong>不通过表现</strong>
                <p>${rule.fail}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderLearningSystemHandoff() {
    const target = byId("learning-system-handoff-content");
    if (!target || !data.learning || !data.learning.systemLessonHandoff) return;
    const handoff = data.learning.systemLessonHandoff;
    const downloads = data.learning.systemLessonHandoffDownloads || [];
    const toHref = (page) => (page.startsWith("#") ? page : `./${page}`);
    target.innerHTML = `
      <div class="learner-handoff-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="learner-handoff-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Post Class Delivery</p>
            <h3>${handoff.title}</h3>
            <p>${handoff.summary}</p>
          </div>
          ${tagRow(["提交", "初审", "返修", "回写"])}
        </div>
        <div class="learner-handoff-meta">
          ${(handoff.meta || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="learner-handoff-flow">
          ${(handoff.flow || [])
            .map(
              (step) => `
                <section>
                  <div class="lesson-step-head">
                    <span class="step-number">${step.time}</span>
                    <h4>${step.title}</h4>
                  </div>
                  <div class="home-entry-link-list">
                    ${(step.nextRoute || []).map((page) => `<a href="${toHref(page)}">${page}</a>`).join("")}
                  </div>
                  <div class="learner-handoff-detail-grid">
                    <div>
                      <strong>学员动作</strong>
                      <p>${step.learnerAction}</p>
                    </div>
                    <div>
                      <strong>提交文件</strong>
                      <p>${step.requiredFiles}</p>
                    </div>
                    <div>
                      <strong>助教闸口</strong>
                      <p>${step.assistantGate}</p>
                    </div>
                    <div>
                      <strong>Codex 辅助</strong>
                      <p>${step.codexSupport}</p>
                    </div>
                    <div class="span-2">
                      <strong>人工确认边界</strong>
                      <p>${step.manualBoundary}</p>
                    </div>
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
        <div class="learner-handoff-bottom">
          <div>
            <strong>验收状态</strong>
            ${(handoff.statusRules || []).map((item) => `<p><span>${item.status}</span>${item.rule}</p>`).join("")}
          </div>
          <div>
            <strong>展示去向</strong>
            ${(handoff.showcaseRoutes || []).map((item) => `<p><span>${item.route}</span>${item.use}</p>`).join("")}
          </div>
          <div>
            <strong>禁止通过判定</strong>
            ${list(handoff.noGoRules || [])}
          </div>
        </div>
      </article>
    `;
  }

  function renderLearningToolchainAssignment() {
    const target = byId("learning-toolchain-assignment-content");
    if (!target || !data.learning || !data.learning.toolchainAssignment) return;
    const assignment = data.learning.toolchainAssignment;
    const downloads = data.learning.toolchainAssignmentDownloads || [];
    const toHref = (page) => (page.startsWith("#") ? page : `./${page}`);
    target.innerHTML = `
      <div class="learner-toolchain-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="learner-toolchain-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Learner Toolchain Review</p>
            <h3>${assignment.title}</h3>
            <p>${assignment.summary}</p>
          </div>
          ${tagRow(["工具输出", "助教验收", "成果打包", "企业信号"])}
        </div>
        <div class="learner-toolchain-meta">
          ${(assignment.meta || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="learner-toolchain-flow">
          ${(assignment.assignments || [])
            .map(
              (item) => `
                <section>
                  <div class="lesson-step-head">
                    <span class="step-number">${item.stage}</span>
                    <h4>${item.tool}</h4>
                  </div>
                  <div class="home-entry-link-list">
                    <a href="${toHref(item.route)}">${item.route}</a>
                  </div>
                  <div class="learner-toolchain-detail-grid">
                    <div>
                      <strong>学员输入</strong>
                      <p>${item.learnerInput}</p>
                    </div>
                    <div>
                      <strong>必须输出</strong>
                      <p>${item.requiredOutput}</p>
                    </div>
                    <div>
                      <strong>助教验收</strong>
                      <p>${item.reviewGate}</p>
                    </div>
                    <div>
                      <strong>返修信号</strong>
                      <p>${item.repairSignal}</p>
                    </div>
                    <div>
                      <strong>成果包用途</strong>
                      <p>${item.portfolioUse}</p>
                    </div>
                    <div>
                      <strong>人工确认边界</strong>
                      <p>${item.manualBoundary}</p>
                    </div>
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
        <div class="learner-toolchain-bottom">
          <div>
            <strong>验收状态</strong>
            ${(assignment.reviewStates || []).map((item) => `<p><span>${item.status}</span>${item.rule}</p>`).join("")}
          </div>
          <div>
            <strong>后续路由</strong>
            ${list(assignment.handoffRoutes || [])}
          </div>
          <div>
            <strong>禁止通过</strong>
            ${list(assignment.noGoRules || [])}
          </div>
        </div>
      </article>
    `;
  }

  function renderLearningFinalPortfolio() {
    const target = byId("learning-final-portfolio");
    if (!target || !data.learning) return;
    target.innerHTML = data.learning.finalPortfolio
      .map(
        (item) => `
          <article class="info-card">
            <p class="eyebrow">${item.item}</p>
            <h3>${item.value}</h3>
            <div class="detail-block">
              <strong>验收证据</strong>
              <p>${item.proof}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderLearningPortfolioPackage() {
    const target = byId("learning-portfolio-package");
    if (!target || !data.learning || !data.learning.portfolioPackageDesk) return;
    const downloads = data.learning.portfolioPackageDownloads || [];
    target.innerHTML = `
      <div class="learner-portfolio-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="learner-portfolio-grid">
        ${data.learning.portfolioPackageDesk
          .map(
            (pkg) => `
              <article class="learner-portfolio-card">
                <div class="lesson-step-head">
                  <span class="step-number">${pkg.modules}</span>
                  <h3>${pkg.packageName}</h3>
                </div>
                <div class="detail-block">
                  <strong>包含资产</strong>
                  <p>${pkg.includedAssets}</p>
                </div>
                <div class="learner-portfolio-detail-grid">
                  <div>
                    <strong>验收证据</strong>
                    <p>${pkg.proof}</p>
                  </div>
                  <div>
                    <strong>使用场景</strong>
                    <p>${pkg.useScenario}</p>
                  </div>
                  <div>
                    <strong>复核规则</strong>
                    <p>${pkg.reviewRule}</p>
                  </div>
                  <div>
                    <strong>展示边界</strong>
                    <p>${pkg.displayBoundary}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderLearningDeliverableEvidenceLibrary() {
    const target = byId("learning-deliverable-evidence-library");
    if (!target || !data.learning || !data.learning.deliverableEvidenceLibrary) return;
    const builder = data.learning.deliverableEvidenceLibrary;
    const downloads = data.learning.deliverableEvidenceDownloads || [];
    const defaults = builder.defaults || {};
    target.innerHTML = `
      <div class="deliverable-evidence-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card deliverable-evidence-builder-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Proof Routing Desk</p>
          <h3>${builder.title}</h3>
          <p>${builder.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="deliverable-evidence-type">
              <span>证据类型</span>
              <select id="deliverable-evidence-type" data-deliverable-evidence-field="evidenceType">
                ${builder.evidenceTypes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.evidenceType === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="deliverable-evidence-display-use">
              <span>展示用途</span>
              <select id="deliverable-evidence-display-use" data-deliverable-evidence-field="displayUse">
                ${builder.displayUses
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.displayUse === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="deliverable-evidence-readiness">
              <span>成熟度</span>
              <select id="deliverable-evidence-readiness" data-deliverable-evidence-field="readinessLevel">
                ${builder.readinessLevels
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.readinessLevel === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="deliverable-evidence-audience">
              <span>查看对象</span>
              <select id="deliverable-evidence-audience" data-deliverable-evidence-field="audienceMode">
                ${builder.audienceModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.audienceMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="deliverable-evidence-boundary">
              <span>授权边界</span>
              <select id="deliverable-evidence-boundary" data-deliverable-evidence-field="boundaryMode">
                ${builder.boundaryModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.boundaryMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="deliverable-evidence-action">
              <span>下一步</span>
              <select id="deliverable-evidence-action" data-deliverable-evidence-field="nextAction">
                ${builder.nextActions
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.nextAction === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel deliverable-evidence-result" aria-live="polite">
          <div id="deliverable-evidence-result"></div>
          <div class="hero-actions compact-actions deliverable-evidence-actions">
            <button class="button secondary" type="button" id="deliverable-evidence-copy">复制证据 Brief</button>
            <button class="button secondary" type="button" id="deliverable-evidence-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="deliverable-evidence-status"></span>
        </div>
      </article>
    `;
    setupLearningDeliverableEvidenceLibrary(builder);
  }

  function setupLearningDeliverableEvidenceLibrary(builder) {
    const fields = [...document.querySelectorAll("[data-deliverable-evidence-field]")];
    const result = byId("deliverable-evidence-result");
    const copy = byId("deliverable-evidence-copy");
    const download = byId("deliverable-evidence-download");
    const status = byId("deliverable-evidence-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.deliverableEvidenceField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function getDecision({ displayUse, readinessLevel, boundaryMode, nextAction, score }) {
      const publicUse = ["enrollment-proof", "public-showcase"].includes(displayUse.id);
      const enterpriseExternal = displayUse.id === "enterprise-report" && boundaryMode.id === "high-compliance";
      const locked =
        readinessLevel.id === "blocked" ||
        boundaryMode.id === "high-compliance" ||
        (publicUse && readinessLevel.id === "draft") ||
        (displayUse.id === "public-showcase" && boundaryMode.id !== "authorized-public") ||
        nextAction.id === "hold-authorization" ||
        enterpriseExternal;
      if (locked) {
        return {
          label: "暂缓展示",
          tone: "risk",
          detail: "先完成脱敏、授权、人工复核和风险关闭，只保留内部复盘记录。"
        };
      }
      if (boundaryMode.id === "authorized-public" && ["authorized", "showcase-ready"].includes(readinessLevel.id)) {
        return {
          label: "可公开展示",
          tone: "ready",
          detail: "可按授权范围用于公开课、报名页、社群或企业说明，但仍需保留展示版本记录。"
        };
      }
      if (displayUse.id === "enrollment-proof" && score >= 34) {
        return {
          label: "可用于咨询证据",
          tone: "ready",
          detail: "适合课程顾问和试听课说明交付成果，必须使用脱敏版和禁止承诺边界。"
        };
      }
      if (readinessLevel.id === "draft") {
        return {
          label: "进入作业返修",
          tone: "repair",
          detail: "先补业务输入、字段、页面证据、人工确认人和脱敏记录。"
        };
      }
      return {
        label: "内部展示可用",
        tone: "review",
        detail: "可用于老师点评、结课验收、内部复盘或企业初步说明。"
      };
    }

    function buildBrief(values) {
      const evidenceType = pick(builder.evidenceTypes, values.evidenceType);
      const displayUse = pick(builder.displayUses, values.displayUse);
      const readinessLevel = pick(builder.readinessLevels, values.readinessLevel);
      const audienceMode = pick(builder.audienceModes, values.audienceMode);
      const boundaryMode = pick(builder.boundaryModes, values.boundaryMode);
      const nextAction = pick(builder.nextActions, values.nextAction);
      const score = evidenceType.score + displayUse.score + readinessLevel.score + audienceMode.score + nextAction.score - boundaryMode.penalty;
      const decision = getDecision({ displayUse, readinessLevel, boundaryMode, nextAction, score });
      const pageRoute = [...new Set([...evidenceType.proofPages, ...nextAction.route])];
      const dataFiles = [...new Set(evidenceType.dataFiles)];
      const downloadFamilies = [...new Set(evidenceType.downloadFamilies)];
      const runbook = [
        { stage: "01", title: "确认业务输入", detail: evidenceType.integratedHouseSample },
        { stage: "02", title: "整理样例输出", detail: evidenceType.sampleOutput },
        { stage: "03", title: "挂接页面证据", detail: pageRoute.join(" / ") },
        { stage: "04", title: "执行 Codex 任务", detail: evidenceType.codexTasks.join("；") },
        { stage: "05", title: "人工复核边界", detail: `${readinessLevel.rule} ${boundaryMode.rule}` },
        { stage: "06", title: "安排下一步", detail: `${nextAction.action} ${nextAction.businessValue}` }
      ];
      const codexPrompt = `请基于以下课程交付证据生成展示 Brief：证据类型为${evidenceType.label}，展示用途为${displayUse.label}，成熟度为${readinessLevel.label}，查看对象为${audienceMode.label}，授权边界为${boundaryMode.label}，下一步为${nextAction.label}。必须包含业务输入、集成房屋样例、页面证据、数据文件、下载资产、Codex 可做事项、人工确认事项、展示脚本、后续动作和禁止承诺边界，不得把课堂样例包装成真实成交成果。`;
      return {
        evidenceType,
        displayUse,
        readinessLevel,
        audienceMode,
        boundaryMode,
        nextAction,
        score,
        decision,
        pageRoute,
        dataFiles,
        downloadFamilies,
        runbook,
        codexPrompt
      };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const {
        evidenceType,
        displayUse,
        readinessLevel,
        audienceMode,
        boundaryMode,
        nextAction,
        score,
        decision,
        pageRoute,
        dataFiles,
        downloadFamilies,
        runbook,
        codexPrompt
      } = currentBrief;

      result.innerHTML = `
        <p class="eyebrow">${evidenceType.stage} · ${readinessLevel.status}</p>
        <h3>${evidenceType.label}</h3>
        <p>${evidenceType.summary}</p>
        <div class="deliverable-evidence-meta">
          <div>
            <strong>${score}</strong>
            <span>证据评分</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>${decision.detail}</span>
          </div>
          <div>
            <strong>${audienceMode.owner}</strong>
            <span>责任组合</span>
          </div>
        </div>
        <div class="deliverable-evidence-grid">
          <div>
            <strong>集成房屋样例</strong>
            <p>${evidenceType.integratedHouseSample}</p>
          </div>
          <div>
            <strong>样例输出</strong>
            <p>${evidenceType.sampleOutput}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(pageRoute)}
          </div>
          <div>
            <strong>数据文件</strong>
            ${list(dataFiles)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${list(downloadFamilies)}
          </div>
          <div>
            <strong>Codex 可做</strong>
            ${list(evidenceType.codexTasks)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(evidenceType.manualChecks)}
          </div>
          <div>
            <strong>展示脚本角度</strong>
            <p>${displayUse.scriptAngle}</p>
          </div>
          <div>
            <strong>查看对象关注点</strong>
            <p>${audienceMode.focus}</p>
          </div>
          <div>
            <strong>下一步动作</strong>
            <p>${nextAction.action}</p>
          </div>
          <div>
            <strong>课堂用途</strong>
            <p>${evidenceType.classroomUse}</p>
          </div>
          <div>
            <strong>商业用途</strong>
            <p>${evidenceType.commercialUse}</p>
          </div>
          <div>
            <strong>授权和脱敏</strong>
            <p>${boundaryMode.masking} 审批：${boundaryMode.approval}</p>
          </div>
          <div>
            <strong>验收问题</strong>
            <p>${audienceMode.proofQuestion}</p>
          </div>
        </div>
        <div class="deliverable-evidence-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>样例库运营规则</strong>
          ${list(builder.operatingRules)}
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildDeliverableEvidenceMarkdown(currentBrief, builder));
        setStatus("证据 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(builder.exportFilename || "deliverable-evidence-showcase-output.md", buildDeliverableEvidenceMarkdown(currentBrief, builder), "text/markdown;charset=utf-8");
      setStatus("Markdown 证据 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildDeliverableEvidenceMarkdown(brief, builder) {
    const {
      evidenceType,
      displayUse,
      readinessLevel,
      audienceMode,
      boundaryMode,
      nextAction,
      score,
      decision,
      pageRoute,
      dataFiles,
      downloadFamilies,
      runbook,
      codexPrompt
    } = brief;
    return `# 课程交付证据展示 Brief

- 证据类型：${evidenceType.label}
- 展示用途：${displayUse.label}
- 成熟度：${readinessLevel.label}
- 查看对象：${audienceMode.label}
- 授权边界：${boundaryMode.label}
- 下一步动作：${nextAction.label}
- 证据评分：${score}
- 展示结论：${decision.label}

## 证据说明
${evidenceType.summary}

## 集成房屋样例
${evidenceType.integratedHouseSample}

## 样例输出
${evidenceType.sampleOutput}

## 页面路线
${pageRoute.map((item) => `- ${item}`).join("\n")}

## 数据文件
${dataFiles.map((item) => `- ${item}`).join("\n")}

## 下载资产
${downloadFamilies.map((item) => `- ${item}`).join("\n")}

## Codex 可做事项
${evidenceType.codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认事项
${evidenceType.manualChecks.map((item) => `- ${item}`).join("\n")}

## 展示用途
- 展示对象：${displayUse.audience}
- 用途说明：${displayUse.purpose}
- 脚本角度：${displayUse.scriptAngle}
- CTA：${displayUse.cta}

## 查看对象关注点
- 关注点：${audienceMode.focus}
- 验收问题：${audienceMode.proofQuestion}
- 责任组合：${audienceMode.owner}

## 下一步动作
${nextAction.action}
${nextAction.businessValue}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 展示结论
${decision.detail}

## 授权和脱敏边界
${readinessLevel.rule}
${boundaryMode.rule}
${boundaryMode.masking}
审批：${boundaryMode.approval}

## 课堂用途
${evidenceType.classroomUse}

## 商业用途
${evidenceType.commercialUse}

## Codex 扩写任务
${codexPrompt}

## 样例库运营规则
${builder.operatingRules.map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderLearningPortfolioBriefBuilder() {
    const target = byId("learning-portfolio-brief-builder");
    if (!target || !data.learning || !data.learning.portfolioBriefBuilder) return;
    const builder = data.learning.portfolioBriefBuilder;
    const defaults = builder.defaults || {};
    target.innerHTML = `
      <article class="decision-tool-card learner-portfolio-brief-builder-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Portfolio Proof Desk</p>
          <h3>${builder.title}</h3>
          <p>${builder.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="portfolio-brief-learnerSegment">
              <span>学员类型</span>
              <select id="portfolio-brief-learnerSegment" data-portfolio-brief-field="learnerSegment">
                ${builder.learnerSegments
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.learnerSegment === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="portfolio-brief-packageFocus">
              <span>成果包重点</span>
              <select id="portfolio-brief-packageFocus" data-portfolio-brief-field="packageFocus">
                ${builder.packageFocuses
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.packageFocus === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="portfolio-brief-displayUse">
              <span>展示用途</span>
              <select id="portfolio-brief-displayUse" data-portfolio-brief-field="displayUse">
                ${builder.displayUses
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.displayUse === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="portfolio-brief-evidenceLevel">
              <span>证据成熟度</span>
              <select id="portfolio-brief-evidenceLevel" data-portfolio-brief-field="evidenceLevel">
                ${builder.evidenceLevels
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.evidenceLevel === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="portfolio-brief-displayScope">
              <span>授权范围</span>
              <select id="portfolio-brief-displayScope" data-portfolio-brief-field="displayScope">
                ${builder.displayScopes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.displayScope === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="portfolio-brief-nextGoal">
              <span>后续动作</span>
              <select id="portfolio-brief-nextGoal" data-portfolio-brief-field="nextGoal">
                ${builder.nextGoals
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.nextGoal === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel learner-portfolio-brief-result" aria-live="polite">
          <div id="portfolio-brief-result"></div>
          <div class="hero-actions compact-actions learner-portfolio-brief-actions">
            <button class="button secondary" type="button" id="portfolio-brief-copy">复制 Brief</button>
            <button class="button secondary" type="button" id="portfolio-brief-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="portfolio-brief-status"></span>
        </div>
      </article>
    `;
    setupLearningPortfolioBriefBuilder(builder);
  }

  function setupLearningPortfolioBriefBuilder(builder) {
    const fields = [...document.querySelectorAll("[data-portfolio-brief-field]")];
    const result = byId("portfolio-brief-result");
    const copy = byId("portfolio-brief-copy");
    const download = byId("portfolio-brief-download");
    const status = byId("portfolio-brief-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.portfolioBriefField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function buildBrief(values) {
      const learnerSegment = pick(builder.learnerSegments, values.learnerSegment);
      const packageFocus = pick(builder.packageFocuses, values.packageFocus);
      const displayUse = pick(builder.displayUses, values.displayUse);
      const evidenceLevel = pick(builder.evidenceLevels, values.evidenceLevel);
      const displayScope = pick(builder.displayScopes, values.displayScope);
      const nextGoal = pick(builder.nextGoals, values.nextGoal);
      const packages = (data.learning.portfolioPackageDesk || []).filter((pkg) => packageFocus.packageNames.includes(pkg.packageName));
      const pageRoute = [...new Set([...packageFocus.pageRoute, ...nextGoal.route])];
      const evidenceItems = packages.map((pkg) => pkg.proof);
      const includedAssets = packages.map((pkg) => `${pkg.packageName}：${pkg.includedAssets}`);
      const reviewRules = packages.map((pkg) => `${pkg.packageName}：${pkg.reviewRule}`);
      const displayBoundaries = packages.map((pkg) => `${pkg.packageName}：${pkg.displayBoundary}`);
      const runbook = [
        { stage: "01", title: "成果故事", detail: learnerSegment.story },
        { stage: "02", title: "展示主题", detail: packageFocus.headline },
        { stage: "03", title: "证据清单", detail: packageFocus.evidenceAsk },
        { stage: "04", title: "展示用途", detail: `${displayUse.purpose} 输出格式：${displayUse.outputFormat}` },
        { stage: "05", title: "后续动作", detail: `${nextGoal.nextAction} 商业价值：${nextGoal.businessValue}` },
        { stage: "06", title: "展示边界", detail: `${evidenceLevel.rule} ${displayScope.rule}` }
      ];
      const codexPrompt = `请基于以下学员成果 brief 生成展示说明：学员类型为${learnerSegment.label}，成果重点为${packageFocus.label}，展示用途为${displayUse.label}，证据成熟度为${evidenceLevel.label}，授权范围为${displayScope.label}。说明必须包含成果故事、业务输入、工具输出、验收证据、页面路线、下一步 CTA 和脱敏授权边界，不得把课堂样例包装成真实商业成果或承诺自动成交。`;
      return {
        learnerSegment,
        packageFocus,
        displayUse,
        evidenceLevel,
        displayScope,
        nextGoal,
        packages,
        pageRoute,
        evidenceItems,
        includedAssets,
        reviewRules,
        displayBoundaries,
        runbook,
        codexPrompt
      };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const {
        learnerSegment,
        packageFocus,
        displayUse,
        evidenceLevel,
        displayScope,
        nextGoal,
        packages,
        pageRoute,
        evidenceItems,
        includedAssets,
        reviewRules,
        displayBoundaries,
        runbook,
        codexPrompt
      } = currentBrief;

      result.innerHTML = `
        <p class="eyebrow">${displayUse.label} · ${evidenceLevel.status}</p>
        <h3>${packageFocus.label}</h3>
        <p>${packageFocus.headline}</p>
        <div class="learner-portfolio-brief-meta">
          <div>
            <strong>${learnerSegment.label}</strong>
            <span>学员类型</span>
          </div>
          <div>
            <strong>${displayUse.label}</strong>
            <span>展示用途</span>
          </div>
          <div>
            <strong>${displayScope.label}</strong>
            <span>授权范围</span>
          </div>
        </div>
        <div class="learner-portfolio-brief-grid">
          <div>
            <strong>成果故事</strong>
            <p>${learnerSegment.story}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(pageRoute)}
          </div>
          <div>
            <strong>包含成果包</strong>
            ${list(packages.map((pkg) => pkg.packageName))}
          </div>
          <div>
            <strong>展示对象</strong>
            <p>${displayUse.audience}</p>
          </div>
          <div>
            <strong>包含资产</strong>
            ${list(includedAssets)}
          </div>
          <div>
            <strong>验收证据</strong>
            ${list(evidenceItems)}
          </div>
          <div>
            <strong>复核规则</strong>
            ${list(reviewRules)}
          </div>
          <div>
            <strong>后续动作</strong>
            <p>${nextGoal.nextAction}</p>
          </div>
          <div>
            <strong>返修要求</strong>
            <p>${evidenceLevel.repair}</p>
          </div>
          <div>
            <strong>展示边界</strong>
            <p>${displayScope.masking}</p>
          </div>
        </div>
        <div class="learner-portfolio-brief-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>人工确认</strong>
          <p>${learnerSegment.risk} ${evidenceLevel.rule} ${displayScope.rule} ${displayBoundaries.join(" ")}</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildLearningPortfolioBriefMarkdown(currentBrief));
        setStatus("成果 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(builder.exportFilename || "learner-portfolio-brief-output.md", buildLearningPortfolioBriefMarkdown(currentBrief), "text/markdown;charset=utf-8");
      setStatus("Markdown 成果 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildLearningPortfolioBriefMarkdown(brief) {
    const {
      learnerSegment,
      packageFocus,
      displayUse,
      evidenceLevel,
      displayScope,
      nextGoal,
      packages,
      pageRoute,
      evidenceItems,
      includedAssets,
      reviewRules,
      displayBoundaries,
      runbook,
      codexPrompt
    } = brief;
    return `# 学员成果展示 Brief

- 学员类型：${learnerSegment.label}
- 成果重点：${packageFocus.label}
- 展示用途：${displayUse.label}
- 证据成熟度：${evidenceLevel.label}
- 授权范围：${displayScope.label}
- 后续动作：${nextGoal.label}

## 成果故事
${learnerSegment.story}

## 展示主题
${packageFocus.headline}

## 页面路线
${pageRoute.map((item) => `- ${item}`).join("\n")}

## 包含成果包
${packages.map((pkg) => `- ${pkg.packageName}：${pkg.modules}`).join("\n")}

## 包含资产
${includedAssets.map((item) => `- ${item}`).join("\n")}

## 验收证据
${evidenceItems.map((item) => `- ${item}`).join("\n")}

## 复核规则
${reviewRules.map((item) => `- ${item}`).join("\n")}

## 展示用途
- 展示对象：${displayUse.audience}
- 用途说明：${displayUse.purpose}
- 输出格式：${displayUse.outputFormat}
- CTA：${displayUse.cta}

## 后续动作
${nextGoal.nextAction}
${nextGoal.businessValue}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 展示和授权边界
${evidenceLevel.rule}
${displayScope.rule}
${learnerSegment.risk}
${displayBoundaries.map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderLearningApplicationReviewRouter() {
    const target = byId("learning-application-review-router");
    if (!target || !data.learning || !data.learning.applicationReviewRouter) return;
    const router = data.learning.applicationReviewRouter;
    const defaults = router.defaults || {};
    const downloads = data.learning.applicationReviewDownloads || [];
    target.innerHTML = `
      <article class="decision-tool-card learner-application-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Application Review Router</p>
          <h3>${router.title}</h3>
          <p>${router.summary}</p>
          <div class="learner-application-downloads">
            ${downloads
              .map(
                (download) => `
                  <a class="download-card compact" href="${download.href}" download>
                    <span>${download.format}</span>
                    <strong>${download.label}</strong>
                    <small>${download.note}</small>
                  </a>
                `
              )
              .join("")}
          </div>
          <div class="decision-input-grid">
            <label class="decision-field" for="learning-application-signal">
              <span>真实使用信号</span>
              <select id="learning-application-signal" data-learning-application-field="usageSignal">
                ${router.usageSignals
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.usageSignal === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="learning-application-evidence">
              <span>证据质量</span>
              <select id="learning-application-evidence" data-learning-application-field="evidenceQuality">
                ${router.evidenceQualities
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.evidenceQuality === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="learning-application-barrier">
              <span>主要卡点</span>
              <select id="learning-application-barrier" data-learning-application-field="useBarrier">
                ${router.useBarriers
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.useBarrier === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="learning-application-destination">
              <span>下一步去向</span>
              <select id="learning-application-destination" data-learning-application-field="nextDestination">
                ${router.nextDestinations
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.nextDestination === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="learning-application-window">
              <span>复盘周期</span>
              <select id="learning-application-window" data-learning-application-field="reviewWindow">
                ${router.reviewWindows
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.reviewWindow === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel learner-application-result" aria-live="polite">
          <div id="learning-application-review-result"></div>
          <div class="hero-actions compact-actions learner-application-actions">
            <button class="button secondary" type="button" id="learning-application-copy">复制复盘 Brief</button>
            <button class="button secondary" type="button" id="learning-application-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="learning-application-status"></span>
        </div>
      </article>
    `;
    setupLearningApplicationReviewRouter(router);
  }

  function setupLearningApplicationReviewRouter(router) {
    const fields = [...document.querySelectorAll("[data-learning-application-field]")];
    const result = byId("learning-application-review-result");
    const copy = byId("learning-application-copy");
    const download = byId("learning-application-download");
    const status = byId("learning-application-status");
    if (!fields.length || !result) return;
    let currentReview = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.learningApplicationField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function pickDecision(values, score, usageSignal, evidenceQuality, useBarrier, nextDestination) {
      if (evidenceQuality.id === "sensitive") return pick(router.decisions, "hold");
      if ((usageSignal.id === "shared-team" || nextDestination.id === "enterprise-service") && score >= 78) return pick(router.decisions, "enterprise");
      if (evidenceQuality.id === "verified" && nextDestination.id === "outcome-proof" && score >= 82) return pick(router.decisions, "proof");
      if ((useBarrier.id === "manual-boundary" || nextDestination.decisionBias === "repair") && score >= 64) return pick(router.decisions, "repair");
      if (score >= 64) return pick(router.decisions, "continue");
      return pick(router.decisions, "hold");
    }

    function buildReview(values) {
      const usageSignal = pick(router.usageSignals, values.usageSignal);
      const evidenceQuality = pick(router.evidenceQualities, values.evidenceQuality);
      const useBarrier = pick(router.useBarriers, values.useBarrier);
      const nextDestination = pick(router.nextDestinations, values.nextDestination);
      const reviewWindow = pick(router.reviewWindows, values.reviewWindow);
      const score = usageSignal.score + evidenceQuality.score + useBarrier.score + nextDestination.score;
      const decision = pickDecision(values, score, usageSignal, evidenceQuality, useBarrier, nextDestination);
      const routePages = [...new Set([...usageSignal.routePages, ...useBarrier.routePages, ...(decision.id === "enterprise" ? ["enterprise.html"] : []), ...(decision.id === "proof" ? ["enrollment.html", "marketing.html"] : [])])];
      const codexTasks = [...usageSignal.codexTasks];
      if (decision.id === "enterprise") codexTasks.push("生成企业诊断线索 Brief");
      if (decision.id === "proof") codexTasks.push("生成脱敏成果证据展示 Brief");
      if (decision.id === "repair") codexTasks.push("生成课程返修或工具 Sprint 需求清单");
      const manualGates = [usageSignal.manualGate, useBarrier.owner ? `${useBarrier.owner}确认：${useBarrier.fix}` : useBarrier.fix, evidenceQuality.rule];
      const runbook = [
        { stage: "01", title: "真实使用", detail: usageSignal.action },
        { stage: "02", title: "证据处理", detail: `${evidenceQuality.status}：${evidenceQuality.repair}` },
        { stage: "03", title: "卡点修复", detail: useBarrier.fix },
        { stage: "04", title: "下一步去向", detail: `${nextDestination.nextAction} 商业价值：${nextDestination.businessValue}` },
        { stage: "05", title: "复盘节奏", detail: `${reviewWindow.focus} ${reviewWindow.nextCheck}` },
        { stage: "06", title: "结论边界", detail: decision.detail }
      ];
      const codexPrompt = `请基于学员结课后真实业务应用复盘，生成一份可交给老师、助教、课程顾问或企业负责人看的 Brief。当前使用信号为${usageSignal.label}，证据质量为${evidenceQuality.label}，主要卡点为${useBarrier.label}，下一步去向为${nextDestination.label}，复盘周期为${reviewWindow.label}。必须说明真实业务输入、工具输出、证据缺口、页面路线、Codex 可做事项、人工确认边界和下一次复盘动作；不得把未授权或未验证内容包装成公开成果。`;
      return {
        usageSignal,
        evidenceQuality,
        useBarrier,
        nextDestination,
        reviewWindow,
        score,
        decision,
        routePages,
        codexTasks,
        manualGates,
        runbook,
        codexPrompt
      };
    }

    function renderResult() {
      currentReview = buildReview(readValues());
      const {
        usageSignal,
        evidenceQuality,
        useBarrier,
        nextDestination,
        reviewWindow,
        score,
        decision,
        routePages,
        codexTasks,
        manualGates,
        runbook,
        codexPrompt
      } = currentReview;

      result.innerHTML = `
        <p class="eyebrow">${reviewWindow.label} · ${evidenceQuality.status}</p>
        <h3>${decision.label}</h3>
        <p>${decision.detail}</p>
        <div class="learner-application-meta">
          <div>
            <strong>${score}</strong>
            <span>综合分</span>
          </div>
          <div>
            <strong>${usageSignal.label}</strong>
            <span>使用信号</span>
          </div>
          <div>
            <strong>${nextDestination.label}</strong>
            <span>路由去向</span>
          </div>
        </div>
        <div class="learner-application-grid">
          <div>
            <strong>评分规则</strong>
            <p>${decision.threshold}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>证据要求</strong>
            <p>${evidenceQuality.rule}</p>
          </div>
          <div>
            <strong>卡点修复</strong>
            <p>${useBarrier.fix}</p>
          </div>
          <div>
            <strong>Codex 可辅助</strong>
            ${list(codexTasks)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(manualGates)}
          </div>
          <div>
            <strong>复盘窗口</strong>
            <p>${reviewWindow.focus}</p>
          </div>
          <div>
            <strong>下一步动作</strong>
            <p>${nextDestination.nextAction}</p>
          </div>
        </div>
        <div class="learner-application-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>运营规则</strong>
          ${list(router.operatingRules)}
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentReview) return;
      try {
        await navigator.clipboard.writeText(buildLearningApplicationReviewMarkdown(currentReview, router));
        setStatus("应用复盘 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentReview) return;
      downloadTextFile(router.exportFilename || "learner-application-review-brief-output.md", buildLearningApplicationReviewMarkdown(currentReview, router), "text/markdown;charset=utf-8");
      setStatus("Markdown 应用复盘 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildLearningApplicationReviewMarkdown(review, router) {
    const {
      usageSignal,
      evidenceQuality,
      useBarrier,
      nextDestination,
      reviewWindow,
      score,
      decision,
      routePages,
      codexTasks,
      manualGates,
      runbook,
      codexPrompt
    } = review;
    return `# 学员真实业务应用复盘 Brief

- 复盘周期：${reviewWindow.label}
- 真实使用信号：${usageSignal.label}
- 证据质量：${evidenceQuality.label}
- 主要卡点：${useBarrier.label}
- 下一步去向：${nextDestination.label}
- 综合分：${score}
- 路由结论：${decision.label}

## 结论
${decision.detail}

## 评分规则
${decision.threshold}

## 真实使用信号
${usageSignal.action}

## 证据质量
${evidenceQuality.status}
${evidenceQuality.rule}
${evidenceQuality.repair}

## 卡点修复
${useBarrier.fix}
责任人：${useBarrier.owner}

## 下一步动作
${nextDestination.nextAction}
${nextDestination.businessValue}

## 页面路线
${routePages.map((item) => `- ${item}`).join("\n")}

## Codex 可辅助
${codexTasks.map((item) => `- ${item}`).join("\n")}

## 必须人工确认
${manualGates.map((item) => `- ${item}`).join("\n")}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 复盘窗口
${reviewWindow.focus}
${reviewWindow.nextCheck}

## Codex 扩写任务
${codexPrompt}

## 运营规则
${router.operatingRules.map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderLearningCommonFixes() {
    const target = byId("learning-common-fixes");
    if (!target || !data.learning) return;
    target.innerHTML = data.learning.commonFixes
      .map(
        (item) => `
          <article class="info-card">
            <h3>${item.issue}</h3>
            <div class="detail-block">
              <strong>修正方式</strong>
              <p>${item.fix}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderLearningBoundaries() {
    const target = byId("learning-boundaries");
    if (!target || !data.learning) return;
    target.innerHTML = `
      <div class="standard-layout">
        <div>
          <p class="eyebrow">Learner Guardrail</p>
          <h3>学员工具包必须保留人工确认责任</h3>
          <p>学员可以用 Codex 提高整理和生成效率，但正式业务仍需要由本人、团队或授权岗位复核。</p>
        </div>
        ${list(data.learning.learnerBoundaries)}
      </div>
    `;
  }

  function renderAutomationMetrics() {
    const target = byId("automation-metrics");
    if (!target || !data.automation) return;
    target.innerHTML = data.automation.metrics
      .map(
        (metric) => `
          <article class="metric playbook-metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderAutomationWorkflowMap() {
    const target = byId("automation-workflow-map");
    if (!target || !data.automation) return;
    target.innerHTML = data.automation.workflowMap
      .map(
        (item) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">${item.stage} · ${item.priority}</p>
              <h3>${item.businessPain}</h3>
            </div>
            <div class="standard-card-grid">
              <div>
                <strong>Codex 角色</strong>
                <p>${item.codexRole}</p>
              </div>
              <div>
                <strong>工具产出</strong>
                <p>${item.toolOutput}</p>
              </div>
              <div>
                <strong>关联工具</strong>
                <p>${item.linkedTool}</p>
              </div>
              <div>
                <strong>课程入口</strong>
                <p>${item.linkedCourse}</p>
              </div>
              <div class="span-2">
                <strong>人工确认边界</strong>
                <p>${item.manualBoundary}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderAutomationLevels() {
    const target = byId("automation-levels");
    if (!target || !data.automation) return;
    target.innerHTML = data.automation.automationLevels
      .map(
        (level) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">${level.level}</p>
              <h3>${level.rule}</h3>
            </div>
            <div class="standard-card-grid">
              <div>
                <strong>典型动作</strong>
                ${list(level.examples)}
              </div>
              <div>
                <strong>允许输出</strong>
                <p>${level.output}</p>
              </div>
              <div>
                <strong>边界</strong>
                <p>${level.boundary}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderAutomationScopeRouter() {
    const target = byId("automation-scope-router");
    if (!target || !data.automation?.scopeAssessmentRouter) return;
    const router = data.automation.scopeAssessmentRouter;
    target.innerHTML = `
      <div class="automation-scope-downloads">
        ${(router.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card automation-scope-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Scope Router</p>
          <h3>${router.title}</h3>
          <p>${router.summary}</p>
          <div class="decision-grid">
            <label class="decision-field" for="automation-scope-workflow">
              <span>业务动作类型</span>
              <select id="automation-scope-workflow" data-automation-scope-field="workflowType">
                ${router.workflowTypes.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="automation-scope-input">
              <span>输入资料状态</span>
              <select id="automation-scope-input" data-automation-scope-field="inputReadiness">
                ${router.inputReadiness.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="automation-scope-impact">
              <span>输出影响</span>
              <select id="automation-scope-impact" data-automation-scope-field="outputImpact">
                ${router.outputImpact.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="automation-scope-boundary">
              <span>人工边界</span>
              <select id="automation-scope-boundary" data-automation-scope-field="manualBoundary">
                ${router.manualBoundaries.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="automation-scope-deployment">
              <span>部署方式</span>
              <select id="automation-scope-deployment" data-automation-scope-field="deploymentMode">
                ${router.deploymentModes.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel automation-scope-result" aria-live="polite">
          <div id="automation-scope-result"></div>
          <div class="hero-actions compact-actions automation-scope-actions">
            <button class="button secondary" type="button" id="automation-scope-copy">复制范围 Brief</button>
            <button class="button secondary" type="button" id="automation-scope-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="automation-scope-status"></span>
        </div>
      </article>
    `;
    setupAutomationScopeRouter(router);
  }

  function setupAutomationScopeRouter(router) {
    const fields = [...document.querySelectorAll("[data-automation-scope-field]")];
    const result = byId("automation-scope-result");
    const copy = byId("automation-scope-copy");
    const download = byId("automation-scope-download");
    const status = byId("automation-scope-status");
    let currentBrief = null;

    function pick(list, id) {
      return list.find((item) => item.id === id) || list[0];
    }

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.automationScopeField] = field.value;
        return values;
      }, {});
    }

    function decide(items, score) {
      if (items.inputReadiness.id === "sensitive" || items.manualBoundary.id === "prohibited" || items.workflowType.id === "compliance-doc") {
        return router.decisions.find((decision) => decision.id === "hold");
      }
      if ((items.outputImpact.id === "enterprise" || items.deploymentMode.id === "enterprise-workbench") && score >= router.decisions.find((decision) => decision.id === "enterprise").threshold) {
        return router.decisions.find((decision) => decision.id === "enterprise");
      }
      if (score >= router.decisions.find((decision) => decision.id === "tool").threshold) {
        return router.decisions.find((decision) => decision.id === "tool");
      }
      if (score >= router.decisions.find((decision) => decision.id === "template").threshold) {
        return router.decisions.find((decision) => decision.id === "template");
      }
      return router.decisions.find((decision) => decision.id === "hold");
    }

    function buildBrief() {
      const values = readValues();
      const workflowType = pick(router.workflowTypes, values.workflowType || router.defaults.workflowType);
      const inputReadiness = pick(router.inputReadiness, values.inputReadiness || router.defaults.inputReadiness);
      const outputImpact = pick(router.outputImpact, values.outputImpact || router.defaults.outputImpact);
      const manualBoundary = pick(router.manualBoundaries, values.manualBoundary || router.defaults.manualBoundary);
      const deploymentMode = pick(router.deploymentModes, values.deploymentMode || router.defaults.deploymentMode);
      const score = Math.max(0, workflowType.score + inputReadiness.score + outputImpact.score + manualBoundary.score + deploymentMode.score);
      const decision = decide({ workflowType, inputReadiness, outputImpact, manualBoundary, deploymentMode }, score);
      const routePages = [...new Set([...outputImpact.routePages, ...deploymentMode.routePages, "automation.html"])];
      const deliverables = [...new Set([...outputImpact.deliverables, deploymentMode.output])];
      const runbook = [
        { stage: "01", title: "确认业务动作", detail: `${workflowType.label}：${workflowType.risk}` },
        { stage: "02", title: "核对输入资料", detail: `${inputReadiness.condition} ${inputReadiness.repair}` },
        { stage: "03", title: "锁定部署方式", detail: `${deploymentMode.route}：${deploymentMode.output}` },
        { stage: "04", title: "设置人工边界", detail: `${manualBoundary.status}：${manualBoundary.gate}` },
        { stage: "05", title: "进入下一步", detail: decision.nextAction }
      ];
      const codexPrompt = `请基于以下自动化范围判定生成执行 Brief：业务动作为${workflowType.label}，输入资料为${inputReadiness.label}，输出影响为${outputImpact.label}，人工边界为${manualBoundary.label}，部署方式为${deploymentMode.label}。必须包含推荐范围、页面路线、交付物、Codex 可辅助任务、必须人工确认点、禁止承诺边界、上线前检查和版本回写。`;
      return { workflowType, inputReadiness, outputImpact, manualBoundary, deploymentMode, score, decision, routePages, deliverables, runbook, codexPrompt };
    }

    function update() {
      currentBrief = buildBrief();
      const { workflowType, inputReadiness, outputImpact, manualBoundary, deploymentMode, score, decision, routePages, deliverables, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <div class="score-summary">
          <span>${decision.title}</span>
          <strong>${score} 分 · ${decision.route}</strong>
          <p>${decision.nextAction}</p>
        </div>
        <div class="automation-scope-meta">
          <div><strong>${workflowType.label}</strong><span>业务动作</span></div>
          <div><strong>${inputReadiness.label}</strong><span>输入状态</span></div>
          <div><strong>${deploymentMode.route}</strong><span>承接入口</span></div>
        </div>
        <div class="automation-scope-grid">
          <div>
            <strong>Codex 可辅助</strong>
            <p>${workflowType.codexUse}</p>
          </div>
          <div>
            <strong>人工确认</strong>
            <p>${workflowType.manualCheck} ${manualBoundary.gate}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>交付物</strong>
            ${list(deliverables)}
          </div>
          <div>
            <strong>Codex 任务</strong>
            ${list(decision.codexTasks)}
          </div>
          <div>
            <strong>人工闸口</strong>
            ${list(decision.manualGates)}
          </div>
        </div>
        <div class="automation-scope-output">
          <div>
            <span>执行步骤</span>
            ${list(runbook.map((step) => `${step.stage} ${step.title}：${step.detail}`))}
          </div>
          <div>
            <span>Codex 扩写提示</span>
            <p>${codexPrompt}</p>
          </div>
        </div>
      `;
    }

    fields.forEach((field) => {
      const defaultValue = router.defaults[field.dataset.automationScopeField];
      if (defaultValue) field.value = defaultValue;
      field.addEventListener("change", update);
    });

    copy?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildAutomationScopeMarkdown(currentBrief, router));
        if (status) status.textContent = "自动化范围 Brief 已复制。";
      } catch (error) {
        if (status) status.textContent = "当前浏览器不允许直接复制，请使用导出 MD。";
      }
    });

    download?.addEventListener("click", () => {
      downloadTextFile(router.exportFilename || "automation-scope-assessment-brief-output.md", buildAutomationScopeMarkdown(currentBrief, router), "text/markdown;charset=utf-8");
      if (status) status.textContent = "Markdown 范围 Brief 已生成下载。";
    });

    update();
  }

  function buildAutomationScopeMarkdown(brief, router) {
    if (!brief) return "";
    return [
      `# ${router.title}`,
      "",
      "## 判定结果",
      `- 推荐范围：${brief.decision.title}`,
      `- 分数：${brief.score}`,
      `- 承接路线：${brief.decision.route}`,
      `- 下一步动作：${brief.decision.nextAction}`,
      "",
      "## 业务动作与输入",
      `- 业务动作：${brief.workflowType.label}`,
      `- 输入状态：${brief.inputReadiness.label}`,
      `- 输出影响：${brief.outputImpact.label}`,
      `- 人工边界：${brief.manualBoundary.label}`,
      `- 部署方式：${brief.deploymentMode.label}`,
      "",
      "## 页面路线",
      ...brief.routePages.map((item) => `- ${item}`),
      "",
      "## 交付物",
      ...brief.deliverables.map((item) => `- ${item}`),
      "",
      "## Codex 可辅助",
      ...brief.decision.codexTasks.map((item) => `- ${item}`),
      "",
      "## 必须人工确认",
      ...brief.decision.manualGates.map((item) => `- ${item}`),
      "",
      "## 执行步骤",
      ...brief.runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`),
      "",
      "## Codex 扩写提示",
      brief.codexPrompt,
      "",
      "## 固定规则",
      ...router.operatingRules.map((item) => `- ${item}`)
    ].join("\n");
  }

  function renderAutomationToolPriority() {
    const target = byId("automation-tool-priority");
    if (!target || !data.automation) return;
    target.innerHTML = `
      <table class="data-table ops-table">
        <thead>
          <tr>
            <th>工具</th>
            <th>状态</th>
            <th>优先原因</th>
            <th>输入</th>
            <th>输出</th>
            <th>成功证据</th>
          </tr>
        </thead>
        <tbody>
          ${data.automation.toolPriorityBacklog
            .map(
              (tool) => `
                <tr>
                  <td>${tool.tool}</td>
                  <td>${tool.status}</td>
                  <td>${tool.whyFirst}</td>
                  <td>${tool.input}</td>
                  <td>${tool.output}</td>
                  <td>${tool.successEvidence}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderAutomationImplementationFlow() {
    const target = byId("automation-implementation-flow");
    if (!target || !data.automation) return;
    target.innerHTML = data.automation.implementationFlow
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid two-column">
              <div>
                <strong>动作</strong>
                <p>${step.action}</p>
              </div>
              <div>
                <strong>输出</strong>
                <p>${step.output}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderAutomationRiskGates() {
    const target = byId("automation-risk-gates");
    if (!target || !data.automation) return;
    target.innerHTML = `
      <table class="data-table ops-table">
        <thead>
          <tr>
            <th>检查口</th>
            <th>检查问题</th>
            <th>确认人</th>
            <th>发布规则</th>
          </tr>
        </thead>
        <tbody>
          ${data.automation.riskGates
            .map(
              (gate) => `
                <tr>
                  <td>${gate.gate}</td>
                  <td>${gate.check}</td>
                  <td>${gate.requiredOwner}</td>
                  <td>${gate.releaseRule}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderAutomationIntegratedHouse() {
    const target = byId("automation-integrated-house");
    if (!target || !data.automation) return;
    target.innerHTML = data.automation.integratedHouseValidation
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.step}</span>
              <h3>${step.scene}</h3>
            </div>
            <div class="lesson-step-grid two-column">
              <div>
                <strong>Codex 自动化</strong>
                <p>${step.automation}</p>
              </div>
              <div>
                <strong>人工复核</strong>
                <p>${step.manualCheck}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderMarketingMetrics() {
    const target = byId("marketing-metrics");
    if (!target || !data.marketing) return;
    target.innerHTML = data.marketing.metrics
      .map(
        (metric) => `
          <article class="metric playbook-metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderMarketingFunnel() {
    const target = byId("marketing-funnel");
    if (!target || !data.marketing) return;
    target.innerHTML = data.marketing.funnelStages
      .map(
        (stage) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${stage.stage}</span>
              <h3>${stage.title}</h3>
            </div>
            <div class="lesson-step-grid two-column">
              <div>
                <strong>目标人群</strong>
                <p>${stage.audience}</p>
              </div>
              <div>
                <strong>核心信息</strong>
                <p>${stage.message}</p>
              </div>
              <div>
                <strong>承接资产</strong>
                <p>${stage.asset}</p>
              </div>
              <div>
                <strong>下一步 CTA</strong>
                <p>${stage.cta}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderMarketingDailyOpsDesk() {
    const target = byId("marketing-daily-ops-desk");
    if (!target || !data.marketing || !data.marketing.dailyOpsDesk) return;
    const downloads = data.marketing.dailyOpsDownloads || [];
    target.innerHTML = `
      <div class="marketing-daily-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="marketing-daily-grid">
        ${data.marketing.dailyOpsDesk
          .map(
            (item) => `
              <article class="marketing-daily-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">${item.timebox}</p>
                    <h3>${item.stage} ${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="marketing-daily-meta">
                  <div>
                    <strong>输入来源</strong>
                    <p>${item.input}</p>
                  </div>
                  <div>
                    <strong>证据页面</strong>
                    <p>${item.pageEvidence}</p>
                  </div>
                </div>
                <div class="marketing-daily-detail-grid">
                  <div>
                    <strong>Codex 可做</strong>
                    <p>${item.codexTask}</p>
                  </div>
                  <div>
                    <strong>人工判断</strong>
                    <p>${item.humanDecision}</p>
                  </div>
                  <div>
                    <strong>输出物</strong>
                    <p>${item.output}</p>
                  </div>
                  <div>
                    <strong>复盘指标</strong>
                    <p>${item.metric}</p>
                  </div>
                </div>
                <div class="marketing-daily-boundary">
                  <strong>承诺边界</strong>
                  <p>${item.boundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderMarketingChannels() {
    const target = byId("marketing-channels");
    if (!target || !data.marketing) return;
    target.innerHTML = data.marketing.channelPlaybooks
      .map(
        (channel) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">${channel.channel}</p>
              <h3>${channel.role}</h3>
            </div>
            <div class="standard-card-grid">
              <div>
                <strong>内容角度</strong>
                ${list(channel.contentAngles)}
              </div>
              <div>
                <strong>主承接资料</strong>
                <p>${channel.primaryResource}</p>
              </div>
              <div>
                <strong>转化动作</strong>
                <p>${channel.conversionAction}</p>
              </div>
              <div>
                <strong>执行频率</strong>
                <p>${channel.cadence}</p>
              </div>
              <div class="span-2">
                <strong>宣传边界</strong>
                <p>${channel.boundary}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderMarketingCalendar() {
    const target = byId("marketing-calendar");
    if (!target || !data.marketing) return;
    target.innerHTML = `
      <table class="data-table ops-table">
        <thead>
          <tr>
            <th>周期</th>
            <th>主题</th>
            <th>关联页面</th>
            <th>内容资产</th>
            <th>转化动作</th>
            <th>复盘证据</th>
          </tr>
        </thead>
        <tbody>
          ${data.marketing.contentCalendar
            .map(
              (row) => `
                <tr>
                  <td>${row.week}</td>
                  <td>${row.theme}</td>
                  <td>${row.pages}</td>
                  <td>${row.assets}</td>
                  <td>${row.offer}</td>
                  <td>${row.evidence}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderMarketingAssetFactory() {
    const target = byId("marketing-asset-factory");
    if (!target || !data.marketing || !data.marketing.campaignAssetFactory) return;
    const downloads = data.marketing.campaignAssetDownloads || [];
    target.innerHTML = `
      <div class="marketing-asset-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="marketing-asset-grid">
        ${data.marketing.campaignAssetFactory
          .map(
            (item) => `
              <article class="marketing-asset-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">${item.stage}</p>
                    <h3>${item.asset}</h3>
                  </div>
                  <span class="tag">${item.handoff}</span>
                </div>
                <div class="marketing-asset-detail-grid">
                  <div>
                    <strong>目标人群</strong>
                    <p>${item.audience}</p>
                  </div>
                  <div>
                    <strong>内容角度</strong>
                    <p>${item.angle}</p>
                  </div>
                  <div>
                    <strong>证据来源</strong>
                    <p>${item.proofSource}</p>
                  </div>
                  <div>
                    <strong>下一步 CTA</strong>
                    <p>${item.cta}</p>
                  </div>
                  <div class="span-2">
                    <strong>宣传边界</strong>
                    <p>${item.boundary}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderMarketingProofCampaignRouter() {
    const target = byId("marketing-proof-campaign-router-content");
    if (!target || !data.marketing || !data.marketing.proofCampaignRouter) return;
    const router = data.marketing.proofCampaignRouter;
    const downloads = data.marketing.proofCampaignDownloads || [];
    target.innerHTML = `
      <div class="marketing-proof-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="marketing-proof-card">
        <div class="case-card-head">
          <div>
            <p class="eyebrow">Campaign Proof Router</p>
            <h3>${router.title}</h3>
          </div>
          ${tagRow(["验收", "脱敏", "授权", "发布"])}
        </div>
        <p class="marketing-proof-summary">${router.summary}</p>
        <div class="marketing-proof-meta">
          ${(router.meta || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="marketing-proof-grid">
          ${(router.routes || [])
            .map(
              (route) => `
                <article class="marketing-proof-route">
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">Content Route</p>
                      <h3>${route.channel}</h3>
                    </div>
                    <span class="tag">可复核</span>
                  </div>
                  <div class="marketing-proof-links">
                    ${(route.proofPages || [])
                      .map((page) => `<a href="./${page}">${page}</a>`)
                      .join("")}
                  </div>
                  <div class="marketing-proof-detail-grid">
                    <div>
                      <strong>证据来源</strong>
                      <p>${route.evidenceSource}</p>
                    </div>
                    <div>
                      <strong>内容用途</strong>
                      <p>${route.contentAngle}</p>
                    </div>
                    <div>
                      <strong>Codex 辅助</strong>
                      <p>${route.codexAssist}</p>
                    </div>
                    <div>
                      <strong>人工复核</strong>
                      <p>${route.humanApproval}</p>
                    </div>
                    <div>
                      <strong>下一步 CTA</strong>
                      <p>${route.cta}</p>
                    </div>
                    <div>
                      <strong>禁止口径</strong>
                      <p>${route.noGo}</p>
                    </div>
                    <div class="span-2">
                      <strong>回写动作</strong>
                      <p>${route.writeback}</p>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="marketing-proof-bottom">
          <div>
            <strong>展示前审批</strong>
            ${list(router.approvalChecklist || [])}
          </div>
          <div>
            <strong>运营信号</strong>
            ${list(router.operatingSignals || [])}
          </div>
          <div>
            <strong>回写位置</strong>
            ${list(router.writebackTargets || [])}
          </div>
        </div>
      </article>
    `;
  }

  function renderMarketingCampaignBriefBuilder() {
    const target = byId("marketing-campaign-brief-builder");
    if (!target || !data.marketing || !data.marketing.campaignBriefBuilder) return;
    const builder = data.marketing.campaignBriefBuilder;
    const defaults = builder.defaults || {};
    target.innerHTML = `
      <article class="decision-tool-card marketing-brief-builder-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Campaign Operations Desk</p>
          <h3>${builder.title}</h3>
          <p>${builder.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="marketing-brief-channel">
              <span>推广渠道</span>
              <select id="marketing-brief-channel" data-marketing-brief-field="channel">
                ${builder.channels
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.channel === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="marketing-brief-audience">
              <span>目标人群</span>
              <select id="marketing-brief-audience" data-marketing-brief-field="audience">
                ${builder.audiences
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.audience === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="marketing-brief-pain">
              <span>业务痛点</span>
              <select id="marketing-brief-pain" data-marketing-brief-field="pain">
                ${builder.pains
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.pain === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="marketing-brief-assetType">
              <span>内容形式</span>
              <select id="marketing-brief-assetType" data-marketing-brief-field="assetType">
                ${builder.assetTypes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.assetType === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="marketing-brief-conversionGoal">
              <span>转化目标</span>
              <select id="marketing-brief-conversionGoal" data-marketing-brief-field="conversionGoal">
                ${builder.conversionGoals
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.conversionGoal === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="marketing-brief-boundaryMode">
              <span>宣传边界</span>
              <select id="marketing-brief-boundaryMode" data-marketing-brief-field="boundaryMode">
                ${builder.boundaryModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.boundaryMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel marketing-brief-builder-result" aria-live="polite">
          <div id="marketing-brief-result"></div>
          <div class="hero-actions compact-actions marketing-brief-actions">
            <button class="button secondary" type="button" id="marketing-brief-copy">复制 Brief</button>
            <button class="button secondary" type="button" id="marketing-brief-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="marketing-brief-status"></span>
        </div>
      </article>
    `;
    setupMarketingCampaignBriefBuilder(builder);
  }

  function setupMarketingCampaignBriefBuilder(builder) {
    const fields = [...document.querySelectorAll("[data-marketing-brief-field]")];
    const result = byId("marketing-brief-result");
    const copy = byId("marketing-brief-copy");
    const download = byId("marketing-brief-download");
    const status = byId("marketing-brief-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.marketingBriefField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function buildBrief(values) {
      const channel = pick(builder.channels, values.channel);
      const audience = pick(builder.audiences, values.audience);
      const pain = pick(builder.pains, values.pain);
      const assetType = pick(builder.assetTypes, values.assetType);
      const conversionGoal = pick(builder.conversionGoals, values.conversionGoal);
      const boundaryMode = pick(builder.boundaryModes, values.boundaryMode);
      const pageRoute = [...new Set([...channel.proofRoute, ...conversionGoal.nextPage])];
      const scriptSteps = [
        { stage: "01", title: "开场钩子", detail: pain.hook },
        { stage: "02", title: "业务案例", detail: pain.caseAngle },
        { stage: "03", title: "页面证据", detail: `${pageRoute.join(" -> ")}；${pain.demoPoint}` },
        { stage: "04", title: "内容结构", detail: assetType.structure.join(" / ") },
        { stage: "05", title: "转化动作", detail: conversionGoal.cta },
        { stage: "06", title: "边界收口", detail: `${boundaryMode.rule} ${boundaryMode.closing}` }
      ];
      const codexPrompt = `请基于以下运营 brief 生成${assetType.label}：渠道为${channel.label}，目标人群为${audience.label}，核心痛点为${pain.label}，主案例使用集成房屋出口案例，转化目标为${conversionGoal.label}。内容必须包含业务场景、页面证据、下一步 CTA 和人工确认边界，不能承诺自动成交、自动报价或替代专业判断。`;
      return { channel, audience, pain, assetType, conversionGoal, boundaryMode, pageRoute, scriptSteps, codexPrompt };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { channel, audience, pain, assetType, conversionGoal, boundaryMode, pageRoute, scriptSteps, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${channel.label} · ${assetType.label}</p>
        <h3>${pain.headline}</h3>
        <p>${audience.concern}</p>
        <div class="marketing-brief-meta">
          <div>
            <strong>${audience.label}</strong>
            <span>目标人群</span>
          </div>
          <div>
            <strong>${conversionGoal.label}</strong>
            <span>转化目标</span>
          </div>
          <div>
            <strong>${boundaryMode.label}</strong>
            <span>宣传边界</span>
          </div>
        </div>
        <div class="marketing-brief-grid">
          <div>
            <strong>渠道形式</strong>
            <p>${channel.format}；${channel.cadence}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(pageRoute)}
          </div>
          <div>
            <strong>用户证据需求</strong>
            <p>${audience.proofNeed}</p>
          </div>
          <div>
            <strong>案例角度</strong>
            <p>${pain.caseAngle}</p>
          </div>
          <div>
            <strong>证据资产</strong>
            ${list(pain.evidenceAssets)}
          </div>
          <div>
            <strong>交付形式</strong>
            <p>${assetType.deliverable}</p>
          </div>
          <div>
            <strong>下一步 CTA</strong>
            <p>${conversionGoal.cta}</p>
          </div>
          <div>
            <strong>跟进动作</strong>
            <p>${conversionGoal.followup}</p>
          </div>
        </div>
        <div class="marketing-brief-output">
          ${scriptSteps
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>人工确认</strong>
          <p>${assetType.humanCheck} ${boundaryMode.rule} ${audience.followQuestion}</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildMarketingCampaignBriefMarkdown(currentBrief));
        setStatus("Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(builder.exportFilename || "marketing-campaign-brief-output.md", buildMarketingCampaignBriefMarkdown(currentBrief), "text/markdown;charset=utf-8");
      setStatus("Markdown Brief 已生成下载。");
    });
    renderResult();
  }

  function buildMarketingCampaignBriefMarkdown(brief) {
    const { channel, audience, pain, assetType, conversionGoal, boundaryMode, pageRoute, scriptSteps, codexPrompt } = brief;
    return `# 推广内容 Brief

- 推广渠道：${channel.label}
- 内容形式：${assetType.label}
- 目标人群：${audience.label}
- 业务痛点：${pain.label}
- 转化目标：${conversionGoal.label}
- 宣传边界：${boundaryMode.label}

## 内容主题
${pain.headline}

## 用户顾虑
${audience.concern}

## 内容钩子
${pain.hook}

## 集成房屋案例角度
${pain.caseAngle}

## 页面路线
${pageRoute.map((item) => `- ${item}`).join("\n")}

## 证据资产
${pain.evidenceAssets.map((item) => `- ${item}`).join("\n")}

## 内容结构
${assetType.structure.map((item) => `- ${item}`).join("\n")}

## 脚本步骤
${scriptSteps.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 下一步 CTA
${conversionGoal.cta}

## 跟进动作
${conversionGoal.followup}

## Codex 扩写任务
${codexPrompt}

## 人工确认边界
${assetType.humanCheck}
${boundaryMode.rule}
${audience.followQuestion}
`;
  }

  function renderMarketingWebinarScript() {
    const target = byId("marketing-webinar-script");
    if (!target || !data.marketing) return;
    target.innerHTML = data.marketing.webinarScript
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid three-column">
              <div>
                <strong>展示页面</strong>
                <p>${step.screen}</p>
              </div>
              <div class="span-2">
                <strong>讲法</strong>
                <p>${step.talk}</p>
              </div>
              <div>
                <strong>观众动作</strong>
                <p>${step.action}</p>
              </div>
              <div>
                <strong>下一步 CTA</strong>
                <p>${step.cta}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderMarketingRepurpose() {
    const target = byId("marketing-repurpose");
    if (!target || !data.marketing) return;
    target.innerHTML = data.marketing.repurposeMap
      .map(
        (item) => `
          <article class="info-card">
            <p class="eyebrow">${item.source}</p>
            <h3>${item.landingRoute}</h3>
            <div class="detail-block"><strong>可拆内容资产</strong>${list(item.derivedAssets)}</div>
            <div class="detail-block"><strong>课堂复用</strong><p>${item.classroomReuse}</p></div>
          </article>
        `
      )
      .join("");
  }

  function renderMarketingMetricsBoard() {
    const target = byId("marketing-metrics-board");
    if (!target || !data.marketing) return;
    target.innerHTML = `
      <table class="data-table ops-table">
        <thead>
          <tr>
            <th>指标</th>
            <th>负责人</th>
            <th>数据来源</th>
            <th>复盘动作</th>
          </tr>
        </thead>
        <tbody>
          ${data.marketing.metricsBoard
            .map(
              (row) => `
                <tr>
                  <td>${row.metric}</td>
                  <td>${row.owner}</td>
                  <td>${row.source}</td>
                  <td>${row.action}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderMarketingClaimBoundaries() {
    const target = byId("marketing-claim-boundaries");
    if (!target || !data.marketing) return;
    target.innerHTML = `
      <div class="standard-layout">
        <div>
          <p class="eyebrow">Trust Guardrail</p>
          <h3>招生宣传先建立可信边界</h3>
          <p>所有推广渠道都必须保持同一承诺口径，避免用短期夸大承诺换取长期投诉风险。</p>
        </div>
        ${list(data.marketing.claimBoundaries)}
      </div>
    `;
  }

  function renderPlaybookMetrics() {
    const target = byId("playbook-metrics");
    if (!target || !data.playbook) return;
    target.innerHTML = data.playbook.metrics
      .map(
        (metric) => `
          <article class="metric playbook-metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderPlaybookFirstDraftLaunchDesk() {
    const target = byId("playbook-first-draft-launch");
    if (!target || !data.playbook || !data.playbook.firstDraftLaunchDesk) return;
    const desk = data.playbook.firstDraftLaunchDesk;
    const downloads = data.playbook.firstDraftLaunchDownloads || [];
    const defaults = desk.defaults || {};
    target.innerHTML = `
      <div class="first-draft-launch-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card first-draft-launch-card">
        <div class="decision-input-panel">
          <p class="eyebrow">First Draft Gate</p>
          <h3>${desk.title}</h3>
          <p>${desk.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="first-draft-launch-scenario">
              <span>发布场景</span>
              <select id="first-draft-launch-scenario" data-first-draft-field="launchScenario">
                ${desk.launchScenarios
                  .map((item) => `<option value="${item.id}"${defaults.launchScenario === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="first-draft-evidence">
              <span>证据水平</span>
              <select id="first-draft-evidence" data-first-draft-field="evidenceLevel">
                ${desk.evidenceLevels
                  .map((item) => `<option value="${item.id}"${defaults.evidenceLevel === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="first-draft-ui">
              <span>UI 状态</span>
              <select id="first-draft-ui" data-first-draft-field="uiStatus">
                ${desk.uiStatuses
                  .map((item) => `<option value="${item.id}"${defaults.uiStatus === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="first-draft-boundary">
              <span>商业边界</span>
              <select id="first-draft-boundary" data-first-draft-field="commercialBoundary">
                ${desk.commercialBoundaries
                  .map((item) => `<option value="${item.id}"${defaults.commercialBoundary === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="first-draft-action">
              <span>下一动作</span>
              <select id="first-draft-action" data-first-draft-field="nextAction">
                ${desk.nextActions
                  .map((item) => `<option value="${item.id}"${defaults.nextAction === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel first-draft-launch-result" aria-live="polite">
          <div id="first-draft-launch-result"></div>
          <div class="hero-actions compact-actions first-draft-launch-actions">
            <button class="button secondary" type="button" id="first-draft-launch-copy">复制发布 Brief</button>
            <button class="button secondary" type="button" id="first-draft-launch-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="first-draft-launch-status"></span>
        </div>
      </article>
    `;
    setupPlaybookFirstDraftLaunchDesk(desk);
  }

  function setupPlaybookFirstDraftLaunchDesk(desk) {
    const fields = [...document.querySelectorAll("[data-first-draft-field]")];
    const result = byId("first-draft-launch-result");
    const copy = byId("first-draft-launch-copy");
    const download = byId("first-draft-launch-download");
    const status = byId("first-draft-launch-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.firstDraftField] = field.value;
        return values;
      }, {});
    }

    function pick(items, id) {
      return items.find((item) => item.id === id) || items[0];
    }

    function decideLaunch({ launchScenario, evidenceLevel, uiStatus, commercialBoundary, nextAction, score }) {
      const publicUse = ["public-preview", "trial-class", "enrollment-consultation"].includes(launchScenario.id) || ["public-preview", "trial-class-run", "enrollment-ready"].includes(nextAction.id);
      const enterpriseUse = launchScenario.id === "enterprise-demo" || nextAction.id === "enterprise-handoff" || commercialBoundary.id === "enterprise-approval";
      if (evidenceLevel.id === "weak-evidence" || uiStatus.id === "unchecked") {
        return {
          label: "先返修证据和 UI",
          tone: "repair",
          stage: "Hold",
          detail: "当前证据或 UI 验证不足，不能进入公开预览、试听课、招生咨询或企业演示。"
        };
      }
      if (publicUse && commercialBoundary.id === "draft-only") {
        return {
          label: "仅内部评审",
          tone: "review",
          stage: "Internal",
          detail: "商业边界仍停留在内部初稿，先完成承诺口径、下载资产和展示范围确认。"
        };
      }
      if (enterpriseUse) {
        return {
          label: "企业审批后展示",
          tone: "enterprise",
          stage: "Approval",
          detail: "适合企业演示或诊断，但必须先确认 scope、资料权限、岗位责任和验收边界。"
        };
      }
      if (score >= 34 && ["trial-class", "enrollment-consultation"].includes(launchScenario.id)) {
        return {
          label: "可进入试听/咨询",
          tone: "ready",
          stage: "Ready",
          detail: "证据、UI 和边界达到初稿商业展示要求，可进入试听课或报名咨询。"
        };
      }
      if (score >= 29) {
        return {
          label: "可公开预览",
          tone: "ready",
          stage: "Preview",
          detail: "可以开放给小范围潜在用户预览，收集反馈并继续回写版本池。"
        };
      }
      return {
        label: "内部评审优先",
        tone: "review",
        stage: "Review",
        detail: "适合内部团队先评审结构、内容和边界，再决定是否进入公开预览。"
      };
    }

    function buildBrief(values) {
      const launchScenario = pick(desk.launchScenarios, values.launchScenario);
      const evidenceLevel = pick(desk.evidenceLevels, values.evidenceLevel);
      const uiStatus = pick(desk.uiStatuses, values.uiStatus);
      const commercialBoundary = pick(desk.commercialBoundaries, values.commercialBoundary);
      const nextAction = pick(desk.nextActions, values.nextAction);
      const score = launchScenario.score + evidenceLevel.score + uiStatus.score + commercialBoundary.score + nextAction.score;
      const decision = decideLaunch({ launchScenario, evidenceLevel, uiStatus, commercialBoundary, nextAction, score });
      const pageRoute = [...new Set([...launchScenario.pageRoute, ...nextAction.route])];
      const downloadFocus = [...new Set([...evidenceLevel.downloadFocus, "first-draft-launch-readiness-board.csv", "first-draft-launch-brief-template.md"])];
      const codexTasks = [
        "整理初稿可展示页面和不可展示页面",
        "生成试听课或咨询话术中的证据路线",
        "汇总 UI 截图、HTTP 验证和下载资产检查结果",
        "生成下一版回写任务和负责人清单"
      ];
      const manualChecks = [
        commercialBoundary.noGo,
        uiStatus.requirement,
        "课程负责人确认讲法和作业交付",
        "运营负责人确认公开展示范围和招生承诺",
        "企业资料或学员作业公开前必须确认脱敏和授权"
      ];
      const runbook = [
        { stage: "01", title: "确认发布场景", detail: `${launchScenario.label}：${launchScenario.purpose}` },
        { stage: "02", title: "核对页面证据", detail: `${evidenceLevel.proof} ${evidenceLevel.gap}` },
        { stage: "03", title: "检查 UI 与交互", detail: `${uiStatus.requirement} ${uiStatus.repair}` },
        { stage: "04", title: "锁定商业边界", detail: `${commercialBoundary.allowedUse} ${commercialBoundary.noGo}` },
        { stage: "05", title: "执行下一动作", detail: `${nextAction.action} 负责人：${nextAction.owner}` },
        { stage: "06", title: "回写版本证据", detail: "记录截图、验证命令、下载检查、不可承诺事项和下次复查窗口。" }
      ];
      const codexPrompt = [
        `你是外贸 AI/Codex 培训平台的发布负责人。请基于“${launchScenario.label}”生成初稿发布就绪 Brief。`,
        "",
        "【证据水平】",
        `${evidenceLevel.label}：${evidenceLevel.proof}`,
        "",
        "【UI 状态】",
        `${uiStatus.label}：${uiStatus.requirement}`,
        "",
        "【商业边界】",
        `${commercialBoundary.label}：${commercialBoundary.allowedUse}`,
        "",
        "【下一动作】",
        `${nextAction.label}：${nextAction.action}`,
        "",
        "请输出：1）可展示页面；2）不可承诺事项；3）试听课/咨询讲法；4）下载资产检查；5）UI 验证记录；6）下一版回写任务。"
      ].join("\n");

      return {
        launchScenario,
        evidenceLevel,
        uiStatus,
        commercialBoundary,
        nextAction,
        score,
        decision,
        pageRoute,
        downloadFocus,
        codexTasks,
        manualChecks,
        runbook,
        codexPrompt
      };
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { launchScenario, evidenceLevel, uiStatus, commercialBoundary, nextAction, score, decision, pageRoute, downloadFocus, codexTasks, manualChecks, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <div class="case-card-head">
          <div>
            <p class="eyebrow">${decision.stage} · ${launchScenario.owner}</p>
            <h3>${launchScenario.label}</h3>
          </div>
          <span class="tag first-draft-launch-decision ${decision.tone}">${decision.label}</span>
        </div>
        <p>${launchScenario.purpose}</p>
        <div class="first-draft-launch-meta">
          <div>
            <strong>${score}</strong>
            <span>就绪分</span>
          </div>
          <div>
            <strong>${evidenceLevel.label}</strong>
            <span>${evidenceLevel.proof}</span>
          </div>
          <div>
            <strong>${uiStatus.label}</strong>
            <span>${uiStatus.repair}</span>
          </div>
          <div>
            <strong>${nextAction.label}</strong>
            <span>${nextAction.action}</span>
          </div>
        </div>
        <div class="first-draft-launch-grid">
          <div>
            <strong>发布输出</strong>
            <p>${launchScenario.output}</p>
          </div>
          <div>
            <strong>发布判断</strong>
            <p>${decision.detail}</p>
          </div>
          <div>
            <strong>可展示页面</strong>
            ${tagRow(pageRoute)}
          </div>
          <div>
            <strong>下载检查</strong>
            ${tagRow(downloadFocus)}
          </div>
          <div>
            <strong>Codex 可做</strong>
            ${list(codexTasks)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(manualChecks)}
          </div>
          <div>
            <strong>商业边界</strong>
            <p>${commercialBoundary.allowedUse}</p>
          </div>
          <div>
            <strong>禁止动作</strong>
            <p>${commercialBoundary.noGo}</p>
          </div>
        </div>
        <div class="first-draft-launch-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="first-draft-launch-checks">
          ${(desk.checklistGroups || [])
            .map(
              (group) => `
                <div>
                  <strong>${group.gate}</strong>
                  ${list(group.checks)}
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>初稿发布运营规则</strong>
          ${list(desk.operatingRules)}
        </div>
        <pre class="prompt-composer-text first-draft-launch-prompt">${escapeHtml(codexPrompt)}</pre>
      `;
      setStatus("");
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildFirstDraftLaunchMarkdown(currentBrief, desk));
        setStatus("初稿发布 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(desk.exportFilename || "first-draft-launch-brief-output.md", buildFirstDraftLaunchMarkdown(currentBrief, desk), "text/markdown;charset=utf-8");
      setStatus("Markdown 初稿发布 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildFirstDraftLaunchMarkdown(brief, desk) {
    const { launchScenario, evidenceLevel, uiStatus, commercialBoundary, nextAction, score, decision, pageRoute, downloadFocus, codexTasks, manualChecks, runbook, codexPrompt } = brief;
    return `# 初稿发布就绪 Brief

- 发布场景：${launchScenario.label}
- 就绪分：${score}
- 发布结论：${decision.label}
- 证据水平：${evidenceLevel.label}
- UI 状态：${uiStatus.label}
- 商业边界：${commercialBoundary.label}
- 下一动作：${nextAction.label}
- 负责人：${launchScenario.owner}

## 发布目的
${launchScenario.purpose}

## 发布输出
${launchScenario.output}

## 可展示页面
${pageRoute.map((item) => `- ${item}`).join("\n")}

## 下载资产检查
${downloadFocus.map((item) => `- ${item}`).join("\n")}

## Codex 可做
${codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认
${manualChecks.map((item) => `- ${item}`).join("\n")}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 发布判断
${decision.detail}

## 商业边界
${commercialBoundary.allowedUse}
${commercialBoundary.noGo}

## 检查项
${(desk.checklistGroups || []).map((group) => `### ${group.gate}\n${group.checks.map((item) => `- ${item}`).join("\n")}`).join("\n\n")}

## 初稿发布运营规则
${(desk.operatingRules || []).map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}
`;
  }

  function renderPlaybookVisualQaGate() {
    const target = byId("playbook-visual-qa-router");
    if (!target || !data.playbook || !data.playbook.visualQaGate) return;
    const gate = data.playbook.visualQaGate;
    const defaults = gate.defaults || {};
    target.innerHTML = `
      <div class="visual-qa-downloads">
        ${(gate.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card visual-qa-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Visual QA Gate</p>
          <h3>${gate.title}</h3>
          <p>${gate.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="visual-qa-context">
              <span>发布场景</span>
              <select id="visual-qa-context" data-visual-qa-field="releaseContext">
                ${gate.releaseContexts
                  .map((item) => `<option value="${item.id}"${defaults.releaseContext === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="visual-qa-area">
              <span>页面区域</span>
              <select id="visual-qa-area" data-visual-qa-field="pageArea">
                ${gate.pageAreas
                  .map((item) => `<option value="${item.id}"${defaults.pageArea === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="visual-qa-viewport">
              <span>视口风险</span>
              <select id="visual-qa-viewport" data-visual-qa-field="viewportRisk">
                ${gate.viewportRisks
                  .map((item) => `<option value="${item.id}"${defaults.viewportRisk === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="visual-qa-content">
              <span>内容风险</span>
              <select id="visual-qa-content" data-visual-qa-field="contentRisk">
                ${gate.contentRisks
                  .map((item) => `<option value="${item.id}"${defaults.contentRisk === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="visual-qa-evidence">
              <span>证据状态</span>
              <select id="visual-qa-evidence" data-visual-qa-field="evidenceState">
                ${gate.evidenceStates
                  .map((item) => `<option value="${item.id}"${defaults.evidenceState === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="visual-qa-action">
              <span>发布动作</span>
              <select id="visual-qa-action" data-visual-qa-field="releaseAction">
                ${gate.releaseActions
                  .map((item) => `<option value="${item.id}"${defaults.releaseAction === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel visual-qa-result" aria-live="polite">
          <div id="visual-qa-result"></div>
          <div class="hero-actions compact-actions visual-qa-actions">
            <button class="button secondary" type="button" id="visual-qa-copy">复制验收 Brief</button>
            <button class="button secondary" type="button" id="visual-qa-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="visual-qa-status"></span>
        </div>
      </article>
    `;
    setupPlaybookVisualQaGate(gate);
  }

  function setupPlaybookVisualQaGate(gate) {
    const fields = [...document.querySelectorAll("[data-visual-qa-field]")];
    const result = byId("visual-qa-result");
    const copy = byId("visual-qa-copy");
    const download = byId("visual-qa-download");
    const status = byId("visual-qa-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.visualQaField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decide(score, viewportRisk, evidenceState, contentRisk, releaseAction) {
      if (evidenceState.id === "needs-repair" || evidenceState.id === "not-checked" || releaseAction.id === "repair-before-release") {
        return {
          label: "先返修再发布",
          stage: "Hold",
          tone: "danger",
          action: "当前缺少视觉、响应式、交互或下载证据，不能进入公开预览、试听课、报名咨询或企业演示。",
          gate: `${evidenceState.gate}。${evidenceState.repair}`,
          next: "修复后重新执行脚本、HTTP、桌面和手机浏览器验收。"
        };
      }
      if (viewportRisk.id === "mobile-risk" || contentRisk.id === "commercial-proof") {
        return {
          label: "人工复核后发布",
          stage: "Review",
          tone: "warn",
          action: "视觉和响应式可以继续推进，但必须先复核移动端可读性、商业承诺和资料授权。",
          gate: `${viewportRisk.repair} ${contentRisk.repair}`,
          next: "由页面负责人确认后写入维护日志。"
        };
      }
      if (score >= 70 && evidenceState.id === "browser-checked") {
        return {
          label: "可发布并归档",
          stage: "Ready",
          tone: "strong",
          action: "当前模块满足视觉风格、桌面/手机、交互、下载和控制台验收要求，可发布并写维护日志。",
          gate: "发布后保留验收记录、缓存版本和下次复查窗口。",
          next: "进入公开预览、试听课、报名咨询或企业演示。"
        };
      }
      if (evidenceState.id === "script-only") {
        return {
          label: "补浏览器验收",
          stage: "Browser",
          tone: "warn",
          action: "脚本检查已经通过，但还需要真实浏览器验证渲染、无横向溢出、关键交互和控制台。",
          gate: evidenceState.repair,
          next: "补桌面和手机端浏览器记录。"
        };
      }
      return {
        label: "内部可用，继续强化",
        stage: "Internal",
        tone: "neutral",
        action: "当前可用于内部评审，但公开展示前仍需补齐截图、下载和人工边界记录。",
        gate: "未形成完整视觉验收记录前，不作为公开发布证据。",
        next: "进入版本回写或发布前复查。"
      };
    }

    function buildBrief(values) {
      const releaseContext = pick(gate.releaseContexts, values.releaseContext);
      const pageArea = pick(gate.pageAreas, values.pageArea);
      const viewportRisk = pick(gate.viewportRisks, values.viewportRisk);
      const contentRisk = pick(gate.contentRisks, values.contentRisk);
      const evidenceState = pick(gate.evidenceStates, values.evidenceState);
      const releaseAction = pick(gate.releaseActions, values.releaseAction);
      const score = Math.max(0, Math.min(100, releaseContext.score + pageArea.score + viewportRisk.score + contentRisk.score + evidenceState.score + releaseAction.score));
      const decision = decide(score, viewportRisk, evidenceState, contentRisk, releaseAction);
      const routePages = [...new Set([...pageArea.routePages, "playbook.html#playbook-visual-qa-gate"])];
      const dataFiles = [...new Set(pageArea.dataFiles)];
      const requiredProof = [...new Set([...releaseContext.requiredProof, ...viewportRisk.requiredViewports, evidenceState.proof])];
      const downloads = ["platform-visual-qa-gate.csv", "platform-visual-qa-brief-template.md", "platform-release-audit.csv", "release-writeback-routing-board.csv"];
      const runbook = [
        { stage: "01", title: "确认发布场景", detail: `${releaseContext.label}：${releaseContext.purpose}` },
        { stage: "02", title: "锁定页面区域", detail: `${pageArea.label}：${pageArea.visualFocus}` },
        { stage: "03", title: "执行视口检查", detail: `${viewportRisk.check} 需要：${viewportRisk.requiredViewports.join("、")}` },
        { stage: "04", title: "复查内容风险", detail: `${contentRisk.focus} ${contentRisk.repair}` },
        { stage: "05", title: "记录证据状态", detail: `${evidenceState.proof} ${evidenceState.repair}` },
        { stage: "06", title: "发布和回写", detail: `${releaseAction.action} 输出：${releaseAction.output}` }
      ];
      const codexPrompt = `请基于以下视觉与响应式验收 brief 生成发布验收记录：发布场景为${releaseContext.label}，页面区域为${pageArea.label}，视口风险为${viewportRisk.label}，内容风险为${contentRisk.label}，证据状态为${evidenceState.label}，发布动作为${releaseAction.label}。必须列出桌面和手机检查、页面级横向溢出、关键交互、下载入口、控制台错误、视觉风格一致性、人工确认边界、返修项、README/缓存版本回写和下次复查窗口。`;
      return { releaseContext, pageArea, viewportRisk, contentRisk, evidenceState, releaseAction, score, decision, routePages, dataFiles, requiredProof, downloads, runbook, codexPrompt };
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { releaseContext, pageArea, viewportRisk, contentRisk, evidenceState, releaseAction, score, decision, routePages, dataFiles, requiredProof, downloads, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.stage} · ${releaseContext.owner}</p>
        <h3>${pageArea.label}视觉验收 Brief</h3>
        <p>${decision.action}</p>
        <div class="visual-qa-meta">
          <div>
            <strong>${score}</strong>
            <span>视觉验收分</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>处理结论</span>
          </div>
          <div>
            <strong>${evidenceState.label}</strong>
            <span>${evidenceState.gate}</span>
          </div>
        </div>
        <div class="visual-qa-grid">
          <div>
            <strong>发布用途</strong>
            <p>${releaseContext.purpose}</p>
          </div>
          <div>
            <strong>视觉焦点</strong>
            <p>${pageArea.visualFocus}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>数据文件</strong>
            ${tagRow(dataFiles)}
          </div>
          <div>
            <strong>验收证据</strong>
            ${tagRow(requiredProof)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${tagRow(downloads)}
          </div>
          <div>
            <strong>视口要求</strong>
            <p>${viewportRisk.check} ${viewportRisk.repair}</p>
          </div>
          <div>
            <strong>内容风险</strong>
            <p>${contentRisk.focus} ${contentRisk.repair}</p>
          </div>
          <div>
            <strong>人工确认</strong>
            <p>${pageArea.manualCheck} ${releaseContext.noGo}</p>
          </div>
          <div>
            <strong>发布闸口</strong>
            <p>${decision.gate}</p>
          </div>
        </div>
        <div class="visual-qa-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>视觉验收运营规则</strong>
          ${list(gate.operatingRules)}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
      `;
      setStatus("");
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildVisualQaMarkdown(currentBrief, gate));
        setStatus("视觉验收 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(gate.exportFilename || "platform-visual-qa-brief-output.md", buildVisualQaMarkdown(currentBrief, gate), "text/markdown;charset=utf-8");
      setStatus("Markdown 视觉验收 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildVisualQaMarkdown(brief, gate) {
    const { releaseContext, pageArea, viewportRisk, contentRisk, evidenceState, releaseAction, score, decision, routePages, dataFiles, requiredProof, downloads, runbook, codexPrompt } = brief;
    return `# 视觉风格与响应式发布验收 Brief

- 发布场景：${releaseContext.label}
- 页面区域：${pageArea.label}
- 视觉验收分：${score}
- 验收结论：${decision.label}
- 视口风险：${viewportRisk.label}
- 内容风险：${contentRisk.label}
- 证据状态：${evidenceState.label}
- 发布动作：${releaseAction.label}

## 发布用途
${releaseContext.purpose}

## 页面路线
${routePages.map((item) => `- ${item}`).join("\n")}

## 数据文件
${dataFiles.map((item) => `- ${item}`).join("\n")}

## 必须验收的证据
${requiredProof.map((item) => `- ${item}`).join("\n")}

## 下载资产
${downloads.map((item) => `- ${item}`).join("\n")}

## 视觉焦点
${pageArea.visualFocus}

## 视口与内容风险
- ${viewportRisk.check}
- ${viewportRisk.repair}
- ${contentRisk.focus}
- ${contentRisk.repair}

## 人工确认
${pageArea.manualCheck}
${releaseContext.noGo}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 当前结论
${decision.action}
${decision.gate}
${decision.next}

## 运营规则
${(gate.operatingRules || []).map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}
`;
  }

  function renderPlaybookPlatformHealthAuditDesk() {
    const target = byId("playbook-platform-health-audit");
    if (!target || !data.playbook || !data.playbook.platformHealthAuditDesk) return;
    const desk = data.playbook.platformHealthAuditDesk;
    const defaults = desk.defaults || {};
    target.innerHTML = `
      <div class="platform-health-downloads">
        ${(desk.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card platform-health-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Platform Health Audit</p>
          <h3>${desk.title}</h3>
          <p>${desk.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="platform-health-auditArea">
              <span>审计维度</span>
              <select id="platform-health-auditArea" data-platform-health-field="auditArea">
                ${desk.auditAreas
                  .map((item) => `<option value="${item.id}"${defaults.auditArea === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="platform-health-evidenceStatus">
              <span>证据状态</span>
              <select id="platform-health-evidenceStatus" data-platform-health-field="evidenceStatus">
                ${desk.evidenceStatuses
                  .map((item) => `<option value="${item.id}"${defaults.evidenceStatus === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="platform-health-riskFocus">
              <span>风险焦点</span>
              <select id="platform-health-riskFocus" data-platform-health-field="riskFocus">
                ${desk.riskFocuses
                  .map((item) => `<option value="${item.id}"${defaults.riskFocus === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="platform-health-auditCadence">
              <span>审计周期</span>
              <select id="platform-health-auditCadence" data-platform-health-field="auditCadence">
                ${desk.auditCadences
                  .map((item) => `<option value="${item.id}"${defaults.auditCadence === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="platform-health-correctiveAction">
              <span>整改动作</span>
              <select id="platform-health-correctiveAction" data-platform-health-field="correctiveAction">
                ${desk.correctiveActions
                  .map((item) => `<option value="${item.id}"${defaults.correctiveAction === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel platform-health-result" aria-live="polite">
          <div id="platform-health-result"></div>
          <div class="hero-actions compact-actions platform-health-actions">
            <button class="button secondary" type="button" id="platform-health-copy">复制审计 Brief</button>
            <button class="button secondary" type="button" id="platform-health-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="platform-health-status"></span>
        </div>
      </article>
    `;
    setupPlaybookPlatformHealthAuditDesk(desk);
  }

  function setupPlaybookPlatformHealthAuditDesk(desk) {
    const fields = [...document.querySelectorAll("[data-platform-health-field]")];
    const result = byId("platform-health-result");
    const copy = byId("platform-health-copy");
    const download = byId("platform-health-download");
    const status = byId("platform-health-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.platformHealthField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decideHealth(score, evidenceStatus, riskFocus, correctiveAction) {
      if (evidenceStatus.id === "missing" || correctiveAction.id === "hold") {
        return {
          label: "暂缓并补证据",
          stage: "Hold",
          tone: "证据缺口",
          action: "当前不能作为正式课程、招生或企业服务证据，先补真实样例、页面挂载、下载资产、负责人和人工确认记录。",
          gate: evidenceStatus.gate,
          next: "进入维护日志和下次审计窗口。"
        };
      }
      if ((riskFocus.id === "data-governance" || riskFocus.id === "commercial-claims") && evidenceStatus.id !== "complete") {
        return {
          label: "人工审批后使用",
          stage: "Approval",
          tone: "高风险审计",
          action: "先完成授权、脱敏、承诺口径和公开展示审批，再允许用于招生页面、公开课或企业交付。",
          gate: riskFocus.boundary,
          next: "审批通过后进入版本回写或发布审计。"
        };
      }
      if (score >= 72 && evidenceStatus.id === "complete") {
        return {
          label: "健康，可作为平台证据",
          stage: "Green",
          tone: "健康证据",
          action: "当前维度可以纳入季度平台证据包，并继续保持维护日志和下次复查。",
          gate: "可进入公开展示、内部培训或企业服务说明，但仍要保留人工确认边界。",
          next: "记录本次审计结论，进入下次周期。"
        };
      }
      if (score >= 58) {
        return {
          label: "可运行，需回写强化",
          stage: "Amber",
          tone: "可控缺口",
          action: "当前可以内部运行，但对外展示或商业转化前需要补页面证据、下载承接、截图验证或人工审批。",
          gate: "补齐后再进入发布审计或季度证据包。",
          next: "路由到版本回写、工具 Sprint、案例 Sprint、资源补齐或企业 SOP 共建。"
        };
      }
      return {
        label: "风险偏高，先修复",
        stage: "Red",
        tone: "结构缺口",
        action: "当前维度缺少足够证据或维护闭环，不建议对外宣传或作为课程交付标准。",
        gate: "必须补业务场景、交付物、页面证据、下载资产和人工确认后再评估。",
        next: "进入整改清单并指定负责人。"
      };
    }

    function buildBrief(values) {
      const auditArea = pick(desk.auditAreas, values.auditArea);
      const evidenceStatus = pick(desk.evidenceStatuses, values.evidenceStatus);
      const riskFocus = pick(desk.riskFocuses, values.riskFocus);
      const auditCadence = pick(desk.auditCadences, values.auditCadence);
      const correctiveAction = pick(desk.correctiveActions, values.correctiveAction);
      const score = Math.max(0, Math.min(100, auditArea.score + evidenceStatus.score + auditCadence.score + correctiveAction.score - riskFocus.penalty));
      const decision = decideHealth(score, evidenceStatus, riskFocus, correctiveAction);
      const proofPages = [...new Set([...auditArea.proofPages, "playbook.html"])];
      const dataFiles = [...new Set(auditArea.dataFiles)];
      const downloadFamilies = [...new Set(auditArea.downloadFamilies)];
      const runbook = [
        { stage: "01", title: "锁定审计维度", detail: `${auditArea.label}：${auditArea.evidence}` },
        { stage: "02", title: "核对证据状态", detail: `${evidenceStatus.displayUse} ${evidenceStatus.repair}` },
        { stage: "03", title: "检查风险焦点", detail: `${riskFocus.boundary} 审批人：${riskFocus.reviewers.join("、")}` },
        { stage: "04", title: "拆分整改动作", detail: `${correctiveAction.action} 交付物：${correctiveAction.deliverables.join("、")}` },
        { stage: "05", title: "执行 Codex 辅助", detail: auditArea.codexTasks.join("；") },
        { stage: "06", title: "人工确认与复查", detail: `${auditArea.manualChecks.join("；")} ${auditCadence.nextReview}` }
      ];
      const codexPrompt = `请基于以下平台健康审计 brief 生成整改清单：审计维度为${auditArea.label}，证据状态为${evidenceStatus.label}，风险焦点为${riskFocus.label}，审计周期为${auditCadence.label}，整改动作为${correctiveAction.label}。必须输出证据页面、数据文件、下载资产、Codex可处理事项、人工确认事项、验证方式、README/维护日志回写、下一次复查窗口和禁止承诺边界。`;
      return { auditArea, evidenceStatus, riskFocus, auditCadence, correctiveAction, score, decision, proofPages, dataFiles, downloadFamilies, runbook, codexPrompt };
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { auditArea, evidenceStatus, riskFocus, auditCadence, correctiveAction, score, decision, proofPages, dataFiles, downloadFamilies, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.stage} · ${riskFocus.label}</p>
        <h3>${auditArea.label}健康审计 Brief</h3>
        <p>${decision.action}</p>
        <div class="platform-health-meta">
          <div>
            <strong>${score}</strong>
            <span>健康分</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>处理结论</span>
          </div>
          <div>
            <strong>${auditArea.owner}</strong>
            <span>负责人</span>
          </div>
        </div>
        <div class="platform-health-grid">
          <div>
            <strong>证据说明</strong>
            <p>${auditArea.evidence}</p>
          </div>
          <div>
            <strong>证据状态</strong>
            <p>${evidenceStatus.gate} ${evidenceStatus.repair}</p>
          </div>
          <div>
            <strong>证据页面</strong>
            ${tagRow(proofPages)}
          </div>
          <div>
            <strong>数据文件</strong>
            ${tagRow(dataFiles)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${tagRow(downloadFamilies)}
          </div>
          <div>
            <strong>整改动作</strong>
            <p>${correctiveAction.action}</p>
          </div>
          <div>
            <strong>Codex 可替代/辅助</strong>
            ${list(auditArea.codexTasks)}
          </div>
          <div>
            <strong>人工确认事项</strong>
            ${list(auditArea.manualChecks)}
          </div>
          <div>
            <strong>风险边界</strong>
            <p>${riskFocus.boundary}</p>
          </div>
          <div>
            <strong>审计周期</strong>
            <p>${auditCadence.rhythm} ${auditCadence.report}</p>
          </div>
          <div>
            <strong>验证方式</strong>
            <p>${correctiveAction.validation}</p>
          </div>
          <div>
            <strong>下一步升级</strong>
            <p>${auditArea.nextUpgrade}</p>
          </div>
        </div>
        <div class="platform-health-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>平台审计规则</strong>
          ${list(desk.operatingRules)}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>禁止承诺边界</strong>
          <p>${riskFocus.noGo} ${decision.gate}</p>
        </div>
      `;
      setStatus("");
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildPlatformHealthAuditMarkdown(currentBrief, desk));
        setStatus("健康审计 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(desk.exportFilename || "platform-health-audit-output.md", buildPlatformHealthAuditMarkdown(currentBrief, desk), "text/markdown;charset=utf-8");
      setStatus("Markdown 健康审计 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildPlatformHealthAuditMarkdown(brief, desk) {
    const { auditArea, evidenceStatus, riskFocus, auditCadence, correctiveAction, score, decision, proofPages, dataFiles, downloadFamilies, runbook, codexPrompt } = brief;
    return `# 平台健康审计 Brief

- 审计维度：${auditArea.label}
- 健康分：${score}
- 处理结论：${decision.label}
- 证据状态：${evidenceStatus.label}
- 风险焦点：${riskFocus.label}
- 审计周期：${auditCadence.label}
- 整改动作：${correctiveAction.label}
- 负责人：${auditArea.owner}

## 当前证据
${auditArea.evidence}

## 证据页面
${proofPages.map((page) => `- ${page}`).join("\n")}

## 数据文件
${dataFiles.map((file) => `- ${file}`).join("\n")}

## 下载资产
${downloadFamilies.map((file) => `- ${file}`).join("\n")}

## Codex 可处理
${auditArea.codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认
${auditArea.manualChecks.map((item) => `- ${item}`).join("\n")}
${riskFocus.reviewers.map((item) => `- ${item}`).join("\n")}

## 整改动作
${correctiveAction.action}
${correctiveAction.deliverables.map((item) => `- ${item}`).join("\n")}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 验证方式
${correctiveAction.validation}
${evidenceStatus.gate}
${decision.gate}

## 审计周期
${auditCadence.rhythm}
${auditCadence.report}
${auditCadence.nextReview}

## 平台审计规则
${(desk.operatingRules || []).map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${riskFocus.noGo}
${riskFocus.boundary}
`;
  }

  function renderPlaybookAuditRemediationRouter() {
    const target = byId("playbook-audit-remediation-router");
    if (!target || !data.playbook || !data.playbook.auditRemediationRouter) return;
    const router = data.playbook.auditRemediationRouter;
    const defaults = router.defaults || {};
    target.innerHTML = `
      <div class="remediation-router-downloads">
        ${(router.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card remediation-router-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Audit Remediation Router</p>
          <h3>${router.title}</h3>
          <p>${router.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="remediation-trigger">
              <span>问题来源</span>
              <select id="remediation-trigger" data-remediation-field="trigger">
                ${router.triggers
                  .map((item) => `<option value="${item.id}"${defaults.trigger === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="remediation-route">
              <span>整改路线</span>
              <select id="remediation-route" data-remediation-field="route">
                ${router.routes
                  .map((item) => `<option value="${item.id}"${defaults.route === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="remediation-evidenceNeed">
              <span>证据缺口</span>
              <select id="remediation-evidenceNeed" data-remediation-field="evidenceNeed">
                ${router.evidenceNeeds
                  .map((item) => `<option value="${item.id}"${defaults.evidenceNeed === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="remediation-urgency">
              <span>紧急度</span>
              <select id="remediation-urgency" data-remediation-field="urgency">
                ${router.urgencies
                  .map((item) => `<option value="${item.id}"${defaults.urgency === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="remediation-ownerMode">
              <span>团队配置</span>
              <select id="remediation-ownerMode" data-remediation-field="ownerMode">
                ${router.ownerModes
                  .map((item) => `<option value="${item.id}"${defaults.ownerMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="remediation-outputPackage">
              <span>输出包</span>
              <select id="remediation-outputPackage" data-remediation-field="outputPackage">
                ${router.outputPackages
                  .map((item) => `<option value="${item.id}"${defaults.outputPackage === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel remediation-router-result" aria-live="polite">
          <div id="remediation-router-result"></div>
          <div class="hero-actions compact-actions remediation-router-actions">
            <button class="button secondary" type="button" id="remediation-router-copy">复制整改 Brief</button>
            <button class="button secondary" type="button" id="remediation-router-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="remediation-router-status"></span>
        </div>
      </article>
    `;
    setupPlaybookAuditRemediationRouter(router);
  }

  function setupPlaybookAuditRemediationRouter(router) {
    const fields = [...document.querySelectorAll("[data-remediation-field]")];
    const result = byId("remediation-router-result");
    const copy = byId("remediation-router-copy");
    const download = byId("remediation-router-download");
    const status = byId("remediation-router-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.remediationField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decideRemediation(score, trigger, route, evidenceNeed, urgency) {
      if (urgency.id === "defer" || trigger.id === "audit-hold") {
        return {
          label: "进入暂缓补证",
          stage: "Hold",
          action: "当前先记录缺口、负责人、所需材料和下次复查时间，不进入公开展示、正式发布或企业交付。",
          gate: "补齐真实记录、页面证据、下载资产、授权或人工审批后再重新评审。",
          next: "回到平台健康审计复查。"
        };
      }
      if (evidenceNeed.id === "authorization" || trigger.id === "enterprise-risk" || route.id === "enterprise-sop") {
        return {
          label: "人工审批后执行",
          stage: "Approval",
          action: "先确认资料授权、scope、审批人、展示范围和验收责任，再进入整改开发或交付。",
          gate: "审批记录、脱敏范围和验收责任不完整时不得公开展示或交付。",
          next: "审批通过后进入企业 SOP、版本回写或工具/案例整改。"
        };
      }
      if (route.id === "tool-sprint" || route.id === "case-sprint") {
        return {
          label: "进入专项 Sprint",
          stage: route.stage,
          action: "将整改问题拆成输入资料、输出物、默认样例、验收标准、人工边界和验证记录。",
          gate: route.validation,
          next: "Sprint 完成后进入版本回写和健康审计复查。"
        };
      }
      if (score >= 70 || urgency.id === "same-day") {
        return {
          label: "高优先级整改",
          stage: "Priority",
          action: "立即修复主页面、数据文件、下载资产、承诺边界或验证缺口。",
          gate: "完成语法、HTTP、下载、桌面/移动端、README 和维护日志检查。",
          next: "当天或周内完成复查。"
        };
      }
      return {
        label: "周内回写整改",
        stage: route.stage,
        action: "按主路线补齐页面证据、数据字段、下载资产、负责人和复查窗口。",
        gate: route.validation,
        next: "进入周复盘或月度版本池。"
      };
    }

    function buildBrief(values) {
      const trigger = pick(router.triggers, values.trigger);
      const route = pick(router.routes, values.route);
      const evidenceNeed = pick(router.evidenceNeeds, values.evidenceNeed);
      const urgency = pick(router.urgencies, values.urgency);
      const ownerMode = pick(router.ownerModes, values.ownerMode);
      const outputPackage = pick(router.outputPackages, values.outputPackage);
      const score = Math.max(0, Math.min(100, trigger.score + route.score + evidenceNeed.score + urgency.score + ownerMode.score + outputPackage.score));
      const decision = decideRemediation(score, trigger, route, evidenceNeed, urgency);
      const routePages = [...new Set([...route.routePages, "playbook.html"])];
      const dataFiles = [...new Set(route.dataFiles)];
      const downloadFamilies = [...new Set(route.downloadFamilies)];
      const manualChecks = [...new Set([...trigger.manualChecks, route.owner, ...ownerMode.roles])];
      const runbook = [
        { stage: "01", title: "确认问题来源", detail: `${trigger.label}：${trigger.signal} 优先级：${trigger.priority}` },
        { stage: "02", title: "锁定主整改路线", detail: `${route.label}：${route.action}` },
        { stage: "03", title: "补齐证据缺口", detail: `${evidenceNeed.need} 修复：${evidenceNeed.repair}` },
        { stage: "04", title: "分配团队责任", detail: `${ownerMode.label}：${ownerMode.roles.join("；")}` },
        { stage: "05", title: "生成输出包", detail: `${outputPackage.label}：${outputPackage.deliverables.join("、")}` },
        { stage: "06", title: "执行 Codex 辅助", detail: trigger.codexTasks.join("；") },
        { stage: "07", title: "验证与复查", detail: `${route.validation} ${urgency.review} ${decision.next}` }
      ];
      const codexPrompt = `请基于以下审计整改 brief 生成执行清单：问题来源为${trigger.label}，整改路线为${route.label}，证据缺口为${evidenceNeed.label}，紧急度为${urgency.label}，团队配置为${ownerMode.label}，输出包为${outputPackage.label}。必须列出主页面、数据文件、下载资产、负责人、Codex可做事项、人工确认事项、验证方式、README/维护日志回写、复查窗口和禁止承诺边界。`;
      return { trigger, route, evidenceNeed, urgency, ownerMode, outputPackage, score, decision, routePages, dataFiles, downloadFamilies, manualChecks, runbook, codexPrompt };
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { trigger, route, evidenceNeed, urgency, ownerMode, outputPackage, score, decision, routePages, dataFiles, downloadFamilies, manualChecks, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.stage} · ${urgency.label}</p>
        <h3>${route.label}整改 Brief</h3>
        <p>${decision.action}</p>
        <div class="remediation-router-meta">
          <div>
            <strong>${score}</strong>
            <span>整改优先分</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>处理结论</span>
          </div>
          <div>
            <strong>${route.owner}</strong>
            <span>主负责人</span>
          </div>
        </div>
        <div class="remediation-router-grid">
          <div>
            <strong>问题来源</strong>
            <p>${trigger.signal}</p>
          </div>
          <div>
            <strong>证据缺口</strong>
            <p>${evidenceNeed.need}</p>
          </div>
          <div>
            <strong>主页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>数据文件</strong>
            ${tagRow(dataFiles)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${tagRow(downloadFamilies)}
          </div>
          <div>
            <strong>输出包</strong>
            ${list(outputPackage.deliverables)}
          </div>
          <div>
            <strong>Codex 可处理</strong>
            ${list(trigger.codexTasks)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(manualChecks)}
          </div>
          <div>
            <strong>紧急度</strong>
            <p>${urgency.cadence} ${urgency.deadline}</p>
          </div>
          <div>
            <strong>交接规则</strong>
            <p>${route.handoff} ${ownerMode.handoff}</p>
          </div>
          <div>
            <strong>验证方式</strong>
            <p>${route.validation} ${evidenceNeed.gate}</p>
          </div>
          <div>
            <strong>发布闸口</strong>
            <p>${decision.gate}</p>
          </div>
        </div>
        <div class="remediation-router-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>整改路由规则</strong>
          ${list(router.operatingRules)}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>禁止承诺边界</strong>
          <p>${trigger.noGo} ${route.boundary}</p>
        </div>
      `;
      setStatus("");
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildAuditRemediationMarkdown(currentBrief, router));
        setStatus("整改 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(router.exportFilename || "audit-remediation-routing-output.md", buildAuditRemediationMarkdown(currentBrief, router), "text/markdown;charset=utf-8");
      setStatus("Markdown 整改 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildAuditRemediationMarkdown(brief, router) {
    const { trigger, route, evidenceNeed, urgency, ownerMode, outputPackage, score, decision, routePages, dataFiles, downloadFamilies, manualChecks, runbook, codexPrompt } = brief;
    return `# 审计整改执行 Brief

- 问题来源：${trigger.label}
- 整改路线：${route.label}
- 整改优先分：${score}
- 处理结论：${decision.label}
- 证据缺口：${evidenceNeed.label}
- 紧急度：${urgency.label}
- 团队配置：${ownerMode.label}
- 输出包：${outputPackage.label}
- 主负责人：${route.owner}

## 问题信号
${trigger.signal}
${trigger.priority}

## 主页面路线
${routePages.map((page) => `- ${page}`).join("\n")}

## 数据文件
${dataFiles.map((file) => `- ${file}`).join("\n")}

## 下载资产
${downloadFamilies.map((file) => `- ${file}`).join("\n")}

## 证据缺口与修复
${evidenceNeed.need}
${evidenceNeed.repair}
${evidenceNeed.gate}

## 输出包
${outputPackage.deliverables.map((item) => `- ${item}`).join("\n")}
${outputPackage.proof}

## Codex 可处理
${trigger.codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认
${manualChecks.map((item) => `- ${item}`).join("\n")}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 验证方式
${route.validation}
${decision.gate}

## 复查窗口
${urgency.cadence}
${urgency.deadline}
${urgency.review}
${decision.next}

## 整改路由规则
${(router.operatingRules || []).map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${trigger.noGo}
${route.boundary}
`;
  }

  function renderPlaybookRemediationReviewDesk() {
    const target = byId("playbook-remediation-review-desk");
    if (!target || !data.playbook || !data.playbook.remediationReviewDesk) return;
    const desk = data.playbook.remediationReviewDesk;
    const defaults = desk.defaults || {};
    target.innerHTML = `
      <div class="remediation-review-downloads">
        ${(desk.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card remediation-review-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Remediation Closeout</p>
          <h3>${desk.title}</h3>
          <p>${desk.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="review-scope">
              <span>复查范围</span>
              <select id="review-scope" data-remediation-review-field="reviewScope">
                ${desk.reviewScopes.map((item) => `<option value="${item.id}"${defaults.reviewScope === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="review-completionState">
              <span>完成状态</span>
              <select id="review-completionState" data-remediation-review-field="completionState">
                ${desk.completionStates.map((item) => `<option value="${item.id}"${defaults.completionState === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="review-validationResult">
              <span>验证结果</span>
              <select id="review-validationResult" data-remediation-review-field="validationResult">
                ${desk.validationResults.map((item) => `<option value="${item.id}"${defaults.validationResult === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="review-riskClosure">
              <span>风险关闭</span>
              <select id="review-riskClosure" data-remediation-review-field="riskClosure">
                ${desk.riskClosures.map((item) => `<option value="${item.id}"${defaults.riskClosure === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="review-businessImpact">
              <span>业务影响</span>
              <select id="review-businessImpact" data-remediation-review-field="businessImpact">
                ${desk.businessImpacts.map((item) => `<option value="${item.id}"${defaults.businessImpact === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label class="decision-field" for="review-nextDestination">
              <span>下一步去向</span>
              <select id="review-nextDestination" data-remediation-review-field="nextDestination">
                ${desk.nextDestinations.map((item) => `<option value="${item.id}"${defaults.nextDestination === item.id ? " selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel remediation-review-result" aria-live="polite">
          <div id="remediation-review-result"></div>
          <div class="hero-actions compact-actions remediation-review-actions">
            <button class="button secondary" type="button" id="remediation-review-copy">复制验收 Brief</button>
            <button class="button secondary" type="button" id="remediation-review-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="remediation-review-status"></span>
        </div>
      </article>
    `;
    setupPlaybookRemediationReviewDesk(desk);
  }

  function setupPlaybookRemediationReviewDesk(desk) {
    const fields = [...document.querySelectorAll("[data-remediation-review-field]")];
    const result = byId("remediation-review-result");
    const copy = byId("remediation-review-copy");
    const download = byId("remediation-review-download");
    const status = byId("remediation-review-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.remediationReviewField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decideReview(score, completionState, validationResult, riskClosure, nextDestination) {
      if (completionState.id === "blocked" || validationResult.id === "failed" || validationResult.id === "not-run") {
        return {
          label: "返修，暂不关闭",
          stage: "Repair",
          action: "当前缺少完成证据或验证失败，必须回到整改路由台补齐后再验收。",
          gate: "未完成验证、下载、移动端、授权或人工确认前不得关闭。",
          next: "列出未完成项、负责人和复查时间。"
        };
      }
      if (riskClosure.id === "authorization-missing" || riskClosure.id === "boundary-open") {
        return {
          label: "风险未关闭",
          stage: "Risk",
          action: "先关闭授权、脱敏、公开展示和承诺边界，再允许进入证据包或对外使用。",
          gate: riskClosure.noGo,
          next: "进入审批循环或返修循环。"
        };
      }
      if (riskClosure.id === "approval-needed" || nextDestination.id === "approval-loop") {
        return {
          label: "人工审批后关闭",
          stage: "Approval",
          action: "整改结果可以内部复查，但公开展示、企业交付或高风险业务前还需审批人确认。",
          gate: "审批记录齐全后才能关闭并回写版本。",
          next: "审批通过后进入发布证据或企业交付。"
        };
      }
      if (completionState.id === "partial" || validationResult.id === "partial-pass" || nextDestination.id === "repair-loop") {
        return {
          label: "部分通过，继续返修",
          stage: "Partial",
          action: "核心方向可保留，但仍需补缺失页面、下载、截图、移动端、README 或授权记录。",
          gate: "不得作为完整平台证据。",
          next: "进入周复盘或月度版本池。"
        };
      }
      if (score >= 76 && completionState.id === "implemented" && validationResult.id === "full-pass" && riskClosure.id === "boundary-closed") {
        return {
          label: "验收关闭，可入证据包",
          stage: "Accepted",
          action: "整改范围已完成且验证通过，可以关闭任务并回写平台证据。",
          gate: "保留维护日志、验证记录、截图和下次健康审计窗口。",
          next: "进入版本回写、公开证据包或课堂/企业服务使用。"
        };
      }
      return {
        label: "可监控关闭",
        stage: "Monitor",
        action: "整改基本可用，但仍建议在下一次课堂、招生或企业交付后复查实际效果。",
        gate: "关闭前记录剩余风险和下次复查窗口。",
        next: "进入下期健康审计。"
      };
    }

    function buildBrief(values) {
      const reviewScope = pick(desk.reviewScopes, values.reviewScope);
      const completionState = pick(desk.completionStates, values.completionState);
      const validationResult = pick(desk.validationResults, values.validationResult);
      const riskClosure = pick(desk.riskClosures, values.riskClosure);
      const businessImpact = pick(desk.businessImpacts, values.businessImpact);
      const nextDestination = pick(desk.nextDestinations, values.nextDestination);
      const score = Math.max(0, Math.min(100, reviewScope.score + completionState.score + validationResult.score + riskClosure.score + businessImpact.score + nextDestination.score));
      const decision = decideReview(score, completionState, validationResult, riskClosure, nextDestination);
      const proofPages = [...new Set([...reviewScope.proofPages, "playbook.html"])];
      const dataFiles = [...new Set(reviewScope.dataFiles)];
      const downloadFamilies = [...new Set(reviewScope.downloadFamilies)];
      const manualChecks = [...new Set([...reviewScope.manualChecks, ...riskClosure.approvers])];
      const runbook = [
        { stage: "01", title: "核对整改范围", detail: `${reviewScope.label}：${reviewScope.acceptanceEvidence}` },
        { stage: "02", title: "核对完成状态", detail: `${completionState.evidence} ${completionState.repair}` },
        { stage: "03", title: "复查验证结果", detail: `${validationResult.proof} ${validationResult.repair}` },
        { stage: "04", title: "关闭风险边界", detail: `${riskClosure.status} 审批人：${riskClosure.approvers.join("、")}` },
        { stage: "05", title: "确认业务影响", detail: `${businessImpact.impact} 证据：${businessImpact.evidence}` },
        { stage: "06", title: "回写下一步", detail: `${nextDestination.action} ${nextDestination.next}` }
      ];
      const codexPrompt = `请基于以下整改复查 brief 生成验收关闭记录：复查范围为${reviewScope.label}，完成状态为${completionState.label}，验证结果为${validationResult.label}，风险关闭为${riskClosure.label}，业务影响为${businessImpact.label}，下一步去向为${nextDestination.label}。必须输出验收结论、证据页面、数据文件、下载资产、验证命令、Codex可做事项、人工确认事项、未完成项、维护日志回写和下次健康审计窗口。`;
      return { reviewScope, completionState, validationResult, riskClosure, businessImpact, nextDestination, score, decision, proofPages, dataFiles, downloadFamilies, manualChecks, runbook, codexPrompt };
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { reviewScope, completionState, validationResult, riskClosure, businessImpact, nextDestination, score, decision, proofPages, dataFiles, downloadFamilies, manualChecks, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.stage} · ${validationResult.label}</p>
        <h3>${reviewScope.label}验收 Brief</h3>
        <p>${decision.action}</p>
        <div class="remediation-review-meta">
          <div>
            <strong>${score}</strong>
            <span>验收分</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>验收结论</span>
          </div>
          <div>
            <strong>${reviewScope.owner}</strong>
            <span>主负责人</span>
          </div>
        </div>
        <div class="remediation-review-grid">
          <div>
            <strong>完成证据</strong>
            <p>${completionState.evidence}</p>
          </div>
          <div>
            <strong>验收证据</strong>
            <p>${reviewScope.acceptanceEvidence}</p>
          </div>
          <div>
            <strong>证据页面</strong>
            ${tagRow(proofPages)}
          </div>
          <div>
            <strong>数据文件</strong>
            ${tagRow(dataFiles)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${tagRow(downloadFamilies)}
          </div>
          <div>
            <strong>验证命令</strong>
            ${list(validationResult.commands)}
          </div>
          <div>
            <strong>Codex 可处理</strong>
            ${list(reviewScope.codexTasks)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(manualChecks)}
          </div>
          <div>
            <strong>风险关闭</strong>
            <p>${riskClosure.status}</p>
          </div>
          <div>
            <strong>业务影响</strong>
            <p>${businessImpact.impact}</p>
          </div>
          <div>
            <strong>下一步去向</strong>
            <p>${nextDestination.action}</p>
          </div>
          <div>
            <strong>关闭闸口</strong>
            <p>${decision.gate}</p>
          </div>
        </div>
        <div class="remediation-review-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>复查验收规则</strong>
          ${list(desk.operatingRules)}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>禁止承诺边界</strong>
          <p>${riskClosure.noGo} ${decision.gate}</p>
        </div>
      `;
      setStatus("");
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildRemediationReviewMarkdown(currentBrief, desk));
        setStatus("验收 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(desk.exportFilename || "remediation-review-closeout-output.md", buildRemediationReviewMarkdown(currentBrief, desk), "text/markdown;charset=utf-8");
      setStatus("Markdown 验收 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildRemediationReviewMarkdown(brief, desk) {
    const { reviewScope, completionState, validationResult, riskClosure, businessImpact, nextDestination, score, decision, proofPages, dataFiles, downloadFamilies, manualChecks, runbook, codexPrompt } = brief;
    return `# 整改复查与验收 Brief

- 复查范围：${reviewScope.label}
- 验收分：${score}
- 验收结论：${decision.label}
- 完成状态：${completionState.label}
- 验证结果：${validationResult.label}
- 风险关闭：${riskClosure.label}
- 业务影响：${businessImpact.label}
- 下一步去向：${nextDestination.label}
- 主负责人：${reviewScope.owner}

## 完成证据
${completionState.evidence}
${reviewScope.acceptanceEvidence}

## 证据页面
${proofPages.map((page) => `- ${page}`).join("\n")}

## 数据文件
${dataFiles.map((file) => `- ${file}`).join("\n")}

## 下载资产
${downloadFamilies.map((file) => `- ${file}`).join("\n")}

## 验证命令
${validationResult.commands.map((item) => `- ${item}`).join("\n")}

## Codex 可处理
${reviewScope.codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认
${manualChecks.map((item) => `- ${item}`).join("\n")}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 验收闸口
${decision.gate}
${validationResult.proof}
${riskClosure.status}

## 业务影响
${businessImpact.impact}
${businessImpact.evidence}

## 下一步
${nextDestination.action}
${nextDestination.next}
${reviewScope.closeoutNext}

## 复查验收规则
${(desk.operatingRules || []).map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${riskClosure.noGo}
`;
  }

  function renderPlaybookOperatingConsole() {
    const target = byId("playbook-operating-console");
    if (!target || !data.playbook || !data.playbook.operatingConsole) return;
    const ops = data.playbook.operatingConsole;
    const defaults = ops.defaults || {};
    target.innerHTML = `
      <div class="playbook-ops-downloads">
        ${(ops.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card playbook-ops-console-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Operating Brief Builder</p>
          <h3>${ops.title}</h3>
          <p>${ops.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="ops-console-focus">
              <span>运营重点</span>
              <select id="ops-console-focus" data-ops-console-field="focus">
                ${ops.focuses
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.focus === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="ops-console-dayType">
              <span>当天类型</span>
              <select id="ops-console-dayType" data-ops-console-field="dayType">
                ${ops.dayTypes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.dayType === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="ops-console-teamMode">
              <span>团队配置</span>
              <select id="ops-console-teamMode" data-ops-console-field="teamMode">
                ${ops.teamModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.teamMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="ops-console-evidenceStatus">
              <span>证据状态</span>
              <select id="ops-console-evidenceStatus" data-ops-console-field="evidenceStatus">
                ${ops.evidenceStatuses
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.evidenceStatus === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="ops-console-riskMode">
              <span>风险等级</span>
              <select id="ops-console-riskMode" data-ops-console-field="riskMode">
                ${ops.riskModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.riskMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="ops-console-reviewCycle">
              <span>复盘周期</span>
              <select id="ops-console-reviewCycle" data-ops-console-field="reviewCycle">
                ${ops.reviewCycles
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.reviewCycle === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel playbook-ops-result" aria-live="polite">
          <div id="ops-console-result"></div>
          <div class="hero-actions compact-actions playbook-ops-actions">
            <button class="button secondary" type="button" id="ops-console-copy">复制 Brief</button>
            <button class="button secondary" type="button" id="ops-console-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="ops-console-status"></span>
        </div>
      </article>
    `;
    setupPlaybookOperatingConsole(ops);
  }

  function setupPlaybookOperatingConsole(ops) {
    const fields = [...document.querySelectorAll("[data-ops-console-field]")];
    const result = byId("ops-console-result");
    const copy = byId("ops-console-copy");
    const download = byId("ops-console-download");
    const status = byId("ops-console-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.opsConsoleField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function buildBrief(values) {
      const focus = pick(ops.focuses, values.focus);
      const dayType = pick(ops.dayTypes, values.dayType);
      const teamMode = pick(ops.teamModes, values.teamMode);
      const evidenceStatus = pick(ops.evidenceStatuses, values.evidenceStatus);
      const riskMode = pick(ops.riskModes, values.riskMode);
      const reviewCycle = pick(ops.reviewCycles, values.reviewCycle);
      const routePages = [...new Set([...focus.routePages, "playbook.html"])];
      const runbook = [
        { stage: "01", title: "锁定运营目标", detail: focus.priority },
        { stage: "02", title: "确认当天节奏", detail: `${dayType.rhythm} 触发条件：${dayType.trigger}` },
        { stage: "03", title: "分配团队责任", detail: `${teamMode.roles.join("；")} ${teamMode.handoff}` },
        { stage: "04", title: "收集页面证据", detail: `${evidenceStatus.repair} 页面路线：${routePages.join(" / ")}` },
        { stage: "05", title: "执行 Codex 辅助", detail: focus.codexTasks.join("；") },
        { stage: "06", title: "人工确认与复盘", detail: `${riskMode.rule} ${reviewCycle.closeout} ${reviewCycle.next}` }
      ];
      const codexPrompt = `请基于以下培训公司运营 brief 生成当天执行清单：运营重点为${focus.label}，当天类型为${dayType.label}，团队配置为${teamMode.label}，证据状态为${evidenceStatus.label}，风险等级为${riskMode.label}，复盘周期为${reviewCycle.label}。必须输出目标、页面路线、负责人、Codex 可做事项、人工确认事项、指标、复盘动作和禁止承诺边界。`;
      return { focus, dayType, teamMode, evidenceStatus, riskMode, reviewCycle, routePages, runbook, codexPrompt };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { focus, dayType, teamMode, evidenceStatus, riskMode, reviewCycle, routePages, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${dayType.label} · ${reviewCycle.label}</p>
        <h3>${focus.label}运营 Brief</h3>
        <p>${focus.summary}</p>
        <div class="playbook-ops-meta">
          <div>
            <strong>${teamMode.label}</strong>
            <span>团队配置</span>
          </div>
          <div>
            <strong>${evidenceStatus.label}</strong>
            <span>证据状态</span>
          </div>
          <div>
            <strong>${riskMode.label}</strong>
            <span>风险等级</span>
          </div>
        </div>
        <div class="playbook-ops-grid">
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>当天检查点</strong>
            ${list(dayType.checkpoints)}
          </div>
          <div>
            <strong>Codex 可替代/辅助</strong>
            ${list(focus.codexTasks)}
          </div>
          <div>
            <strong>人工确认事项</strong>
            ${list(focus.manualDecisions)}
          </div>
          <div>
            <strong>复盘指标</strong>
            ${list(focus.metrics)}
          </div>
          <div>
            <strong>交接规则</strong>
            <p>${focus.handoff}</p>
          </div>
          <div>
            <strong>团队约束</strong>
            <p>${teamMode.constraint}</p>
          </div>
          <div>
            <strong>证据门槛</strong>
            <p>${evidenceStatus.gate}</p>
          </div>
        </div>
        <div class="playbook-ops-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>禁止承诺边界</strong>
          <p>${focus.noGo} ${riskMode.reviewer}</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildPlaybookOperatingBriefMarkdown(currentBrief));
        setStatus("运营 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(ops.exportFilename || "training-company-operating-brief-output.md", buildPlaybookOperatingBriefMarkdown(currentBrief), "text/markdown;charset=utf-8");
      setStatus("Markdown 运营 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildPlaybookOperatingBriefMarkdown(brief) {
    const { focus, dayType, teamMode, evidenceStatus, riskMode, reviewCycle, routePages, runbook, codexPrompt } = brief;
    return `# 培训公司日常运营 Brief

- 运营重点：${focus.label}
- 当天类型：${dayType.label}
- 团队配置：${teamMode.label}
- 证据状态：${evidenceStatus.label}
- 风险等级：${riskMode.label}
- 复盘周期：${reviewCycle.label}

## 今日目标
${focus.priority}

## 页面路线
${routePages.map((item) => `- ${item}`).join("\n")}

## 当天节奏
${dayType.rhythm}

## 检查点
${dayType.checkpoints.map((item) => `- ${item}`).join("\n")}

## 团队责任
${teamMode.roles.map((item) => `- ${item}`).join("\n")}

## Codex 可做事项
${focus.codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认事项
${focus.manualDecisions.map((item) => `- ${item}`).join("\n")}

## 复盘指标
${focus.metrics.map((item) => `- ${item}`).join("\n")}

## 运营运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 证据状态处理
${evidenceStatus.need}
${evidenceStatus.repair}
${evidenceStatus.gate}

## 交接规则
${focus.handoff}
${teamMode.handoff}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${focus.noGo}
${riskMode.rule}
${riskMode.reviewer}

## 复盘动作
${reviewCycle.closeout}
${reviewCycle.next}
`;
  }

  function renderPlaybookToolSprintCommandCenter() {
    const target = byId("playbook-tool-sprint-command-center");
    if (!target || !data.playbook || !data.playbook.toolSprintCommandCenter) return;
    const center = data.playbook.toolSprintCommandCenter;
    const defaults = center.defaults || {};
    target.innerHTML = `
      <div class="tool-sprint-downloads">
        ${(center.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card tool-sprint-command-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Tool Sprint Brief</p>
          <h3>${center.title}</h3>
          <p>${center.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="tool-sprint-toolCandidate">
              <span>工具候选</span>
              <select id="tool-sprint-toolCandidate" data-tool-sprint-field="toolCandidate">
                ${center.toolCandidates
                  .map((item) => `<option value="${item.id}"${defaults.toolCandidate === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="tool-sprint-sprintType">
              <span>Sprint 类型</span>
              <select id="tool-sprint-sprintType" data-tool-sprint-field="sprintType">
                ${center.sprintTypes
                  .map((item) => `<option value="${item.id}"${defaults.sprintType === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="tool-sprint-evidenceStatus">
              <span>证据状态</span>
              <select id="tool-sprint-evidenceStatus" data-tool-sprint-field="evidenceStatus">
                ${center.evidenceStatuses
                  .map((item) => `<option value="${item.id}"${defaults.evidenceStatus === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="tool-sprint-releaseTarget">
              <span>发布目标</span>
              <select id="tool-sprint-releaseTarget" data-tool-sprint-field="releaseTarget">
                ${center.releaseTargets
                  .map((item) => `<option value="${item.id}"${defaults.releaseTarget === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="tool-sprint-riskMode">
              <span>风险等级</span>
              <select id="tool-sprint-riskMode" data-tool-sprint-field="riskMode">
                ${center.riskModes
                  .map((item) => `<option value="${item.id}"${defaults.riskMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="tool-sprint-reviewCycle">
              <span>复盘节奏</span>
              <select id="tool-sprint-reviewCycle" data-tool-sprint-field="reviewCycle">
                ${center.reviewCycles
                  .map((item) => `<option value="${item.id}"${defaults.reviewCycle === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel tool-sprint-result" aria-live="polite">
          <div id="tool-sprint-result"></div>
          <div class="hero-actions compact-actions tool-sprint-actions">
            <button class="button secondary" type="button" id="tool-sprint-copy">复制 Sprint Brief</button>
            <button class="button secondary" type="button" id="tool-sprint-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="tool-sprint-status"></span>
        </div>
      </article>
    `;
    setupPlaybookToolSprintCommandCenter(center);
  }

  function setupPlaybookToolSprintCommandCenter(center) {
    const fields = [...document.querySelectorAll("[data-tool-sprint-field]")];
    const result = byId("tool-sprint-result");
    const copy = byId("tool-sprint-copy");
    const download = byId("tool-sprint-download");
    const status = byId("tool-sprint-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.toolSprintField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decideSprint(score, sprintType, evidenceStatus, releaseTarget, riskMode) {
      if (evidenceStatus.id === "scattered" || score < 55) {
        return {
          label: "先补证据，暂缓开发",
          stage: "Hold",
          action: "当前证据不足，先补业务样例、字段、输出格式、课堂记录和人工确认人。",
          nextSprint: "进入工具想法池，补齐证据后再评审。",
          releaseGate: evidenceStatus.gate
        };
      }
      if (sprintType.id === "enterprise-custom" || releaseTarget.id === "enterprise-delivery") {
        return {
          label: riskMode.id === "enterprise-private" ? "企业审批后进入工具/SOP Sprint" : "进入企业工具/SOP Sprint",
          stage: sprintType.stage,
          action: "先确认企业 scope brief、数据授权、岗位责任和验收标准，再排企业工具或 SOP 共建。",
          nextSprint: "安排企业服务负责人和交付负责人评审。",
          releaseGate: "企业授权、验收标准和合同边界确认后才允许交付。"
        };
      }
      if (sprintType.id === "light-interactive") {
        return {
          label: riskMode.id === "high-compliance" ? "审批后进入轻交互 Sprint" : "进入轻交互 Sprint",
          stage: sprintType.stage,
          action: "开发可控输入、即时输出、复制导出、移动端适配和上线验收。",
          nextSprint: riskMode.id === "high-compliance" ? "先补专业审批清单，再排开发。" : "排入下一期工具开发 sprint。",
          releaseGate: sprintType.gate
        };
      }
      if (sprintType.id === "static-prototype") {
        return {
          label: "进入静态原型验证",
          stage: sprintType.stage,
          action: "先验证老师是否能讲清输入、输出、人工边界和商业价值。",
          nextSprint: "完成试讲和用户反馈复盘后再决定是否交互化。",
          releaseGate: sprintType.gate
        };
      }
      if (sprintType.id === "industry-replication") {
        return {
          label: "进入行业字段复制",
          stage: sprintType.stage,
          action: "从集成房屋样例复制到新行业，只替换字段和样例，不复制价格和合规结论。",
          nextSprint: "先补行业字段差异表和脱敏样例。",
          releaseGate: sprintType.gate
        };
      }
      return {
        label: "进入模板加固",
        stage: sprintType.stage,
        action: "先沉淀字段、作业模板、评分清单和人工边界。",
        nextSprint: "验证学员能否完成一次作业替换。",
        releaseGate: sprintType.gate
      };
    }

    function buildBrief(values) {
      const toolCandidate = pick(center.toolCandidates, values.toolCandidate);
      const sprintType = pick(center.sprintTypes, values.sprintType);
      const evidenceStatus = pick(center.evidenceStatuses, values.evidenceStatus);
      const releaseTarget = pick(center.releaseTargets, values.releaseTarget);
      const riskMode = pick(center.riskModes, values.riskMode);
      const reviewCycle = pick(center.reviewCycles, values.reviewCycle);
      const score = Math.max(0, Math.min(100, toolCandidate.priorityScore + sprintType.score + evidenceStatus.score + releaseTarget.score + reviewCycle.score - riskMode.penalty));
      const decision = decideSprint(score, sprintType, evidenceStatus, releaseTarget, riskMode);
      const routePages = [...new Set([...toolCandidate.routePages, ...releaseTarget.routePages, "playbook.html"])];
      const runbook = [
        { stage: "01", title: "锁定工具目标", detail: toolCandidate.sprintGoal },
        { stage: "02", title: "核对证据门槛", detail: `${evidenceStatus.label}：${evidenceStatus.repair} 证据：${toolCandidate.sourceEvidence}` },
        { stage: "03", title: "确定 Sprint 范围", detail: `${sprintType.label}：${sprintType.scope}` },
        { stage: "04", title: "拆分 Codex 任务", detail: toolCandidate.codexTasks.join("；") },
        { stage: "05", title: "设置人工审批", detail: `${riskMode.tag}：${riskMode.reviewers.join("、")}确认。${riskMode.boundary}` },
        { stage: "06", title: "上线与回写", detail: `${releaseTarget.testGate} ${reviewCycle.closeout}` }
      ];
      const codexPrompt = `请基于以下工具 sprint brief 生成一份开发与验收执行清单：工具为${toolCandidate.label}，Sprint类型为${sprintType.label}，证据状态为${evidenceStatus.label}，发布目标为${releaseTarget.label}，风险等级为${riskMode.label}，复盘节奏为${reviewCycle.label}。必须包含本期目标、页面路线、输入输出、Codex任务、人工审批、上线验收、课堂/企业验证、README和维护日志回写、禁止承诺边界。`;
      return { toolCandidate, sprintType, evidenceStatus, releaseTarget, riskMode, reviewCycle, score, decision, routePages, runbook, codexPrompt };
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { toolCandidate, sprintType, evidenceStatus, releaseTarget, riskMode, reviewCycle, score, decision, routePages, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.stage} · ${riskMode.tag}</p>
        <h3>${toolCandidate.label}</h3>
        <p>${decision.action}</p>
        <div class="tool-sprint-meta">
          <div>
            <strong>${score}</strong>
            <span>Sprint 准备分</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>执行结论</span>
          </div>
          <div>
            <strong>${releaseTarget.label}</strong>
            <span>发布目标</span>
          </div>
        </div>
        <div class="tool-sprint-grid">
          <div>
            <strong>本期工具目标</strong>
            <p>${toolCandidate.sprintGoal}</p>
          </div>
          <div>
            <strong>证据来源</strong>
            <p>${toolCandidate.sourceEvidence}</p>
          </div>
          <div>
            <strong>Sprint 范围</strong>
            <p>${sprintType.scope}</p>
          </div>
          <div>
            <strong>证据闸口</strong>
            <p>${evidenceStatus.gate}；${evidenceStatus.proof}</p>
          </div>
          <div>
            <strong>交付物</strong>
            ${list([...new Set([...toolCandidate.deliverables, ...sprintType.deliverables])])}
          </div>
          <div>
            <strong>Codex 可做事项</strong>
            ${list(toolCandidate.codexTasks)}
          </div>
          <div>
            <strong>人工审批</strong>
            ${list([...toolCandidate.manualChecks, ...riskMode.reviewers])}
          </div>
          <div>
            <strong>上线验收</strong>
            <p>${toolCandidate.acceptance} ${releaseTarget.testGate}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>商业使用</strong>
            <p>${releaseTarget.commercialUse}</p>
          </div>
          <div>
            <strong>复盘节奏</strong>
            <p>${reviewCycle.cadence} ${reviewCycle.closeout}</p>
          </div>
          <div>
            <strong>下一步 Sprint</strong>
            <p>${decision.nextSprint}</p>
          </div>
        </div>
        <div class="tool-sprint-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>运营规则</strong>
          ${list(center.operatingRules)}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>禁止承诺边界</strong>
          <p>${riskMode.noGo} ${riskMode.boundary} ${decision.releaseGate}</p>
        </div>
      `;
      setStatus("");
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildToolSprintBriefMarkdown(currentBrief, center));
        setStatus("工具 Sprint Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(center.exportFilename || "tool-sprint-command-brief-output.md", buildToolSprintBriefMarkdown(currentBrief, center), "text/markdown;charset=utf-8");
      setStatus("Markdown 工具 Sprint Brief 已生成下载。");
    });
    renderResult();
  }

  function buildToolSprintBriefMarkdown(brief, center) {
    const { toolCandidate, sprintType, evidenceStatus, releaseTarget, riskMode, reviewCycle, score, decision, routePages, runbook, codexPrompt } = brief;
    return `# 工具 Sprint 执行 Brief

- 工具候选：${toolCandidate.label}
- Sprint 准备分：${score}
- 执行结论：${decision.label}
- Sprint 类型：${sprintType.label}
- 证据状态：${evidenceStatus.label}
- 发布目标：${releaseTarget.label}
- 风险等级：${riskMode.label}
- 复盘节奏：${reviewCycle.label}

## 本期工具目标
${toolCandidate.sprintGoal}

## 页面路线
${routePages.map((page) => `- ${page}`).join("\n")}

## 证据来源
${toolCandidate.sourceEvidence}
${evidenceStatus.repair}

## Sprint 范围
${sprintType.scope}

## 交付物
${[...new Set([...toolCandidate.deliverables, ...sprintType.deliverables])].map((item) => `- ${item}`).join("\n")}

## Codex 可做事项
${toolCandidate.codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工审批
${[...toolCandidate.manualChecks, ...riskMode.reviewers].map((item) => `- ${item}`).join("\n")}

## 上线验收
${toolCandidate.acceptance}
${releaseTarget.testGate}
${decision.releaseGate}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 商业使用
${releaseTarget.useScope}
${releaseTarget.commercialUse}

## 复盘节奏
${reviewCycle.cadence}
${reviewCycle.closeout}

## 运营规则
${(center.operatingRules || []).map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${riskMode.noGo}
${riskMode.boundary}
`;
  }

  function renderPlaybookGoalMatrix() {
    const target = byId("playbook-goal-matrix");
    if (!target || !data.playbook || !data.playbook.goalComplianceMatrix) return;
    const downloads = data.playbook.goalComplianceDownloads || [];
    target.innerHTML = `
      <article class="glass-panel standard-panel release-board-card">
        <div class="standard-layout">
          <div>
            <p class="eyebrow">Execution Guardrail</p>
            <h3>把目标变成可检查的上线标准</h3>
            <p>每条标准都必须能找到页面证据、上线门槛、负责人和更新触发条件，后续维护时用它判断是否偏离培训公司长期平台定位。</p>
          </div>
          <div class="version-review-downloads">
            ${downloads
              .map(
                (download) => `
                  <a class="download-tile" href="${download.href}" download>
                    <span class="tag">${download.format}</span>
                    <strong>${download.label}</strong>
                    <p>${download.note}</p>
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      </article>
      <div class="table-shell ops-table-shell">
        <table class="data-table ops-table">
          <thead>
            <tr>
              <th>目标标准</th>
              <th>当前证据</th>
              <th>上线门槛</th>
              <th>负责人</th>
              <th>更新触发</th>
            </tr>
          </thead>
          <tbody>
            ${data.playbook.goalComplianceMatrix
              .map(
                (row) => `
                  <tr>
                    <td>${row.requirement}</td>
                    <td>${row.evidence}</td>
                    <td>${row.gate}</td>
                    <td>${row.owner}</td>
                    <td>${row.updateTrigger}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderPlaybookEvidenceCoverageIndex() {
    const target = byId("playbook-evidence-coverage");
    if (!target || !data.playbook || !data.playbook.evidenceCoverageIndex) return;
    const index = data.playbook.evidenceCoverageIndex;
    target.innerHTML = `
      <div class="playbook-evidence-downloads">
        ${(index.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="playbook-evidence-card">
        <div class="case-card-head">
          <div>
            <p class="eyebrow">Platform Evidence Coverage</p>
            <h3>${index.title}</h3>
          </div>
          ${tagRow(["页面", "数据", "下载", "边界", "回写"])}
        </div>
        <p class="playbook-evidence-summary">${index.description}</p>
        <div class="playbook-evidence-meta">
          ${(index.metrics || [])
            .map(
              (metric) => `
                <div>
                  <strong>${metric.value}</strong>
                  <span>${metric.label}</span>
                  <p>${metric.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="playbook-evidence-grid">
          ${(index.coverage || [])
            .map(
              (item) => `
                <article class="playbook-evidence-item">
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">${item.owner}</p>
                      <h3>${item.area}</h3>
                    </div>
                    <span class="tag">已覆盖</span>
                  </div>
                  <p>${item.purpose}</p>
                  <div class="playbook-evidence-link-list">
                    ${(item.pageRoutes || [])
                      .map((page) => `<a href="./${page}">${page}</a>`)
                      .join("")}
                  </div>
                  <div class="playbook-evidence-detail-grid">
                    <div>
                      <strong>数据文件</strong>
                      ${tagRow(item.dataFiles || [])}
                    </div>
                    <div>
                      <strong>下载资产</strong>
                      <div class="playbook-evidence-download-list">
                        ${(item.downloads || [])
                          .map((download) => `<a href="./downloads/${download}" download>${download}</a>`)
                          .join("")}
                      </div>
                    </div>
                    <div>
                      <strong>Codex 可辅助</strong>
                      ${list(item.codexAssist || [])}
                    </div>
                    <div>
                      <strong>人工确认门槛</strong>
                      <p>${item.humanGate}</p>
                    </div>
                  </div>
                  <div class="playbook-evidence-review">
                    <strong>复盘窗口</strong>
                    <p>${item.nextReview}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="playbook-evidence-bottom">
          <strong>运营规则</strong>
          ${list(index.operatingRules || [])}
        </div>
      </article>
    `;
  }

  function renderPlaybookGoalSelfCheck() {
    const target = byId("playbook-goal-self-check");
    if (!target || !data.playbook || !data.playbook.goalSelfCheck) return;
    const checker = data.playbook.goalSelfCheck;
    const defaults = checker.defaultValues || {};
    target.innerHTML = `
      <article class="decision-tool-card goal-self-check-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Compliance Workbench</p>
          <h3>${checker.title}</h3>
          <p>${checker.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="goal-self-asset-type">
              <span>新增内容类型</span>
              <select id="goal-self-asset-type" data-goal-self-field="assetType">
                ${checker.assetTypes
                  .map(
                    (type) => `
                      <option value="${type.value}"${defaults.assetType === type.value ? " selected" : ""}>${type.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            ${checker.fields
              .map(
                (field) => `
                  <label class="decision-field" for="goal-self-${field.id}">
                    <span>${field.label}</span>
                    <textarea id="goal-self-${field.id}" data-goal-self-field="${field.id}" placeholder="${field.placeholder}">${escapeHtml(defaults[field.id] || "")}</textarea>
                  </label>
                `
              )
              .join("")}
          </div>
          <div class="goal-check-list">
            ${checker.checks
              .map(
                (check) => `
                  <label class="goal-check-item">
                    <input type="checkbox" data-goal-check="${check.id}" />
                    <span>
                      <strong>${check.title}</strong>
                      <em>${check.requirement}</em>
                    </span>
                  </label>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="decision-result-panel goal-self-result" aria-live="polite">
          <div id="goal-self-check-result"></div>
          <div class="hero-actions compact-actions goal-self-actions">
            <button class="button secondary" type="button" id="goal-self-check-copy">复制结论</button>
            <button class="button secondary" type="button" id="goal-self-check-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="goal-self-check-status"></span>
        </div>
      </article>
    `;
    setupPlaybookGoalSelfCheck(checker);
  }

  function setupPlaybookGoalSelfCheck(checker) {
    const fields = [...document.querySelectorAll("[data-goal-self-field]")];
    const checks = [...document.querySelectorAll("[data-goal-check]")];
    const result = byId("goal-self-check-result");
    const copy = byId("goal-self-check-copy");
    const download = byId("goal-self-check-download");
    const status = byId("goal-self-check-status");
    if (!fields.length || !checks.length || !result) return;
    let currentEvaluation = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.goalSelfField] = field.value.trim();
        return values;
      }, {});
    }

    function readPassedChecks() {
      return checks.filter((check) => check.checked).map((check) => check.dataset.goalCheck);
    }

    function getLevel(passedCount, missingFields) {
      if (passedCount === checker.checks.length && !missingFields.length) {
        return checker.levels.find((level) => level.id === "ready") || checker.levels[0];
      }
      if (passedCount >= 5 && missingFields.length <= 1) {
        return checker.levels.find((level) => level.id === "repair") || checker.levels[1];
      }
      return checker.levels.find((level) => level.id === "draft") || checker.levels[checker.levels.length - 1];
    }

    function evaluate() {
      const values = readValues();
      const passedIds = readPassedChecks();
      const passed = checker.checks.filter((check) => passedIds.includes(check.id));
      const missingChecks = checker.checks.filter((check) => !passedIds.includes(check.id));
      const requiredFields = checker.fields.filter((field) => field.required);
      const missingFields = requiredFields.filter((field) => !values[field.id]);
      const assetType = checker.assetTypes.find((type) => type.value === values.assetType) || checker.assetTypes[0];
      const level = getLevel(passed.length, missingFields);
      return { values, assetType, passed, missingChecks, missingFields, level };
    }

    function renderResult() {
      currentEvaluation = evaluate();
      const { values, assetType, passed, missingChecks, missingFields, level } = currentEvaluation;
      const fieldTotal = checker.fields.filter((field) => field.required).length;
      const filledCount = fieldTotal - missingFields.length;
      result.innerHTML = `
        <p class="eyebrow">${level.title}</p>
        <h3>${passed.length}/${checker.checks.length} 项标准通过</h3>
        <p>${level.summary}</p>
        <div class="goal-self-score-grid">
          <div>
            <strong>${assetType.label}</strong>
            <span>新增类型</span>
          </div>
          <div>
            <strong>${filledCount}/${fieldTotal}</strong>
            <span>必要说明</span>
          </div>
          <div>
            <strong>${missingChecks.length}</strong>
            <span>标准缺口</span>
          </div>
        </div>
        <div class="detail-block">
          <strong>当前模块</strong>
          <p>${escapeHtml(values.assetName || "未填写新增内容名称")}</p>
        </div>
        <div class="detail-block">
          <strong>需要补齐</strong>
          ${
            missingFields.length || missingChecks.length
              ? list([
                  ...missingFields.map((field) => `补写：${field.label}`),
                  ...missingChecks.map((check) => `${check.title}：${check.repair}`)
                ])
              : list(["全部标准已勾选，继续执行发布审计和维护日志。"])
          }
        </div>
        <div class="detail-block">
          <strong>下一步动作</strong>
          <p>${level.nextAction}</p>
        </div>
        <div class="detail-block">
          <strong>人工边界</strong>
          <p>${checker.boundary}</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener(field.tagName === "TEXTAREA" ? "input" : "change", renderResult));
    checks.forEach((check) => check.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentEvaluation) return;
      try {
        await navigator.clipboard.writeText(buildGoalSelfCheckMarkdown(checker, currentEvaluation));
        setStatus("自检结论已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentEvaluation) return;
      downloadTextFile("platform-goal-self-check-output.md", buildGoalSelfCheckMarkdown(checker, currentEvaluation), "text/markdown;charset=utf-8");
      setStatus("Markdown 自检结论已生成下载。");
    });
    renderResult();
  }

  function buildGoalSelfCheckMarkdown(checker, evaluation) {
    const { values, assetType, passed, missingChecks, missingFields, level } = evaluation;
    const missingLines =
      missingFields.length || missingChecks.length
        ? [
            ...missingFields.map((field) => `- 补写：${field.label}`),
            ...missingChecks.map((check) => `- ${check.title}：${check.repair}`)
          ].join("\n")
        : "- 全部标准已勾选，继续执行发布审计和维护日志。";
    return `# 新增模块合规自检结论

- 新增类型：${assetType.label}
- 内容名称：${values.assetName || "未填写"}
- 当前结论：${level.title}
- 标准通过：${passed.length}/${checker.checks.length}

## 业务场景
${values.scenario || "未填写"}

## 交付输出物
${values.deliverable || "未填写"}

## 下一步承接
${values.conversion || "未填写"}

## 已通过标准
${passed.length ? passed.map((check) => `- ${check.title}：${check.requirement}`).join("\n") : "- 暂无已勾选标准"}

## 需要补齐
${missingLines}

## 建议动作
${level.nextAction}

## 人工确认边界
${checker.boundary}
`;
  }

  function renderPlaybookReleaseBoard() {
    const target = byId("playbook-release-board");
    if (!target || !data.playbook || !data.playbook.releaseBoard) return;
    const board = data.playbook.releaseBoard;
    target.innerHTML = `
      <article class="glass-panel standard-panel release-board-card">
        <div class="standard-layout">
          <div>
            <p class="eyebrow">Operating Status</p>
            <h3>${board.title}</h3>
            <p>${board.description}</p>
            <div class="download-row">
              ${board.downloads.map((download) => downloadBlock(download)).join("")}
            </div>
          </div>
          <div>
            <strong>固定验证命令</strong>
            ${list(board.proofChecks)}
          </div>
        </div>
      </article>
      <div class="release-status-grid">
        ${board.statusCards
          .map(
            (card) => `
              <article class="metric playbook-metric">
                <strong>${card.value}</strong>
                <span>${card.label}</span>
                <p>${card.detail}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="release-board-grid">
        <div class="release-flow-list">
          ${board.releaseFlow
            .map(
              (step) => `
                <article class="lesson-step-card">
                  <div class="lesson-step-head">
                    <span class="step-number">${step.stage}</span>
                    <h3>${step.title}</h3>
                  </div>
                  <div class="lesson-step-grid two-column">
                    <div>
                      <strong>负责人</strong>
                      <p>${step.owner}</p>
                    </div>
                    <div>
                      <strong>完成证据</strong>
                      <p>${step.evidence}</p>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="table-shell release-registry-shell">
          <table class="data-table">
            <thead>
              <tr>
                <th>资产</th>
                <th>来源</th>
                <th>检查口径</th>
                <th>负责人</th>
              </tr>
            </thead>
            <tbody>
              ${board.registry
                .map(
                  (row) => `
                    <tr>
                      <td>${row.asset}</td>
                      <td><code>${row.source}</code></td>
                      <td>${row.check}</td>
                      <td>${row.owner}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderPlaybookReleaseWritebackRouter() {
    const target = byId("playbook-release-writeback-router");
    if (!target || !data.playbook || !data.playbook.releaseWritebackRouter) return;
    const router = data.playbook.releaseWritebackRouter;
    const defaults = router.defaults || {};
    target.innerHTML = `
      <div class="writeback-router-downloads">
        ${(router.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card writeback-router-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Release Writeback Router</p>
          <h3>${router.title}</h3>
          <p>${router.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="writeback-sourceSignal">
              <span>反馈来源</span>
              <select id="writeback-sourceSignal" data-writeback-field="sourceSignal">
                ${router.sourceSignals
                  .map((item) => `<option value="${item.id}"${defaults.sourceSignal === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="writeback-assetArea">
              <span>回写模块</span>
              <select id="writeback-assetArea" data-writeback-field="assetArea">
                ${router.assetAreas
                  .map((item) => `<option value="${item.id}"${defaults.assetArea === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="writeback-evidenceLevel">
              <span>证据强度</span>
              <select id="writeback-evidenceLevel" data-writeback-field="evidenceLevel">
                ${router.evidenceLevels
                  .map((item) => `<option value="${item.id}"${defaults.evidenceLevel === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="writeback-updateAction">
              <span>更新动作</span>
              <select id="writeback-updateAction" data-writeback-field="updateAction">
                ${router.updateActions
                  .map((item) => `<option value="${item.id}"${defaults.updateAction === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="writeback-riskMode">
              <span>风险等级</span>
              <select id="writeback-riskMode" data-writeback-field="riskMode">
                ${router.riskModes
                  .map((item) => `<option value="${item.id}"${defaults.riskMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="writeback-reviewWindow">
              <span>复盘窗口</span>
              <select id="writeback-reviewWindow" data-writeback-field="reviewWindow">
                ${router.reviewWindows
                  .map((item) => `<option value="${item.id}"${defaults.reviewWindow === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel writeback-router-result" aria-live="polite">
          <div id="writeback-router-result"></div>
          <div class="hero-actions compact-actions writeback-router-actions">
            <button class="button secondary" type="button" id="writeback-router-copy">复制回写 Brief</button>
            <button class="button secondary" type="button" id="writeback-router-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="writeback-router-status"></span>
        </div>
      </article>
    `;
    setupPlaybookReleaseWritebackRouter(router);
  }

  function setupPlaybookReleaseWritebackRouter(router) {
    const fields = [...document.querySelectorAll("[data-writeback-field]")];
    const result = byId("writeback-router-result");
    const copy = byId("writeback-router-copy");
    const download = byId("writeback-router-download");
    const status = byId("writeback-router-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.writebackField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decideWriteback(score, evidenceLevel, updateAction, riskMode, reviewWindow) {
      if (evidenceLevel.id === "weak" || reviewWindow.id === "defer-pool") {
        return {
          label: "进入暂缓池",
          stage: "Hold",
          action: "先记录维护日志和缺失证据，不进入正式发布或公开展示。",
          gate: "补齐真实记录、负责人、页面证据和人工确认后再评审。",
          next: "进入周复盘或月度版本池。"
        };
      }
      if (riskMode.id === "enterprise-private" || riskMode.id === "high-compliance") {
        return {
          label: "人工审批后回写",
          stage: "Approval",
          action: "先完成授权、脱敏、专业审批或服务范围确认，再回写页面和下载资产。",
          gate: riskMode.boundary,
          next: "由人工审批人确认后进入发布审计。"
        };
      }
      if (score < 48) {
        return {
          label: "进入暂缓池",
          stage: "Hold",
          action: "先记录维护日志和缺失证据，不进入正式发布或公开展示。",
          gate: "补齐真实记录、负责人、页面证据和人工确认后再评审。",
          next: "进入周复盘或月度版本池。"
        };
      }
      if (updateAction.id === "interactive-update" || updateAction.id === "new-section") {
        return {
          label: "进入发布审计",
          stage: "Release",
          action: "按页面挂载、数据源、渲染函数、样式、下载、README 和缓存版本完成发布。",
          gate: "语法、HTTP、桌面/移动端、下载和截图验证必须通过。",
          next: "发布后写维护日志并进入下期回写池。"
        };
      }
      return {
        label: "当天或周内回写",
        stage: "Writeback",
        action: "更新主页面、关联数据文件、下载引用和维护日志。",
        gate: evidenceLevel.gate,
        next: "完成后进入版本评审或周复盘。"
      };
    }

    function buildBrief(values) {
      const sourceSignal = pick(router.sourceSignals, values.sourceSignal);
      const assetArea = pick(router.assetAreas, values.assetArea);
      const evidenceLevel = pick(router.evidenceLevels, values.evidenceLevel);
      const updateAction = pick(router.updateActions, values.updateAction);
      const riskMode = pick(router.riskModes, values.riskMode);
      const reviewWindow = pick(router.reviewWindows, values.reviewWindow);
      const score = Math.max(0, Math.min(100, sourceSignal.score + evidenceLevel.score + updateAction.score + reviewWindow.score - riskMode.penalty));
      const decision = decideWriteback(score, evidenceLevel, updateAction, riskMode, reviewWindow);
      const routePages = [...new Set([...sourceSignal.routePages, ...assetArea.pageRoute, "playbook.html"])];
      const dataFiles = [...new Set(assetArea.dataFiles)];
      const downloadFamilies = [...new Set(assetArea.downloadFamilies)];
      const runbook = [
        { stage: "01", title: "确认反馈来源", detail: `${sourceSignal.label}：${sourceSignal.trigger} 证据：${sourceSignal.evidence}` },
        { stage: "02", title: "锁定主回写模块", detail: `${assetArea.label}：${assetArea.validation}` },
        { stage: "03", title: "确定更新动作", detail: `${updateAction.label}：${updateAction.scope}` },
        { stage: "04", title: "拆分 Codex 任务", detail: sourceSignal.codexTasks.join("；") },
        { stage: "05", title: "设置人工确认", detail: `${riskMode.reviewers.join("、")}确认。${riskMode.boundary}` },
        { stage: "06", title: "验证与维护日志", detail: `${updateAction.validation} ${reviewWindow.cadence} ${reviewWindow.closeout}` }
      ];
      const codexPrompt = `请基于以下版本回写 brief 生成维护日志和页面更新清单：反馈来源为${sourceSignal.label}，回写模块为${assetArea.label}，证据强度为${evidenceLevel.label}，更新动作为${updateAction.label}，风险等级为${riskMode.label}，复盘窗口为${reviewWindow.label}。必须列出主页面、相关页面、数据文件、下载资产、Codex可做事项、人工确认事项、验证命令、README和缓存版本回写、未完成项和禁止承诺边界。`;
      return { sourceSignal, assetArea, evidenceLevel, updateAction, riskMode, reviewWindow, score, decision, routePages, dataFiles, downloadFamilies, runbook, codexPrompt };
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { sourceSignal, assetArea, evidenceLevel, updateAction, riskMode, reviewWindow, score, decision, routePages, dataFiles, downloadFamilies, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.stage} · ${riskMode.label}</p>
        <h3>${assetArea.label}回写 Brief</h3>
        <p>${decision.action}</p>
        <div class="writeback-router-meta">
          <div>
            <strong>${score}</strong>
            <span>回写优先分</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>处理结论</span>
          </div>
          <div>
            <strong>${reviewWindow.label}</strong>
            <span>复盘窗口</span>
          </div>
        </div>
        <div class="writeback-router-grid">
          <div>
            <strong>反馈来源</strong>
            <p>${sourceSignal.trigger}</p>
          </div>
          <div>
            <strong>证据状态</strong>
            <p>${evidenceLevel.use} ${evidenceLevel.repair}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>数据文件</strong>
            ${tagRow(dataFiles)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${tagRow(downloadFamilies)}
          </div>
          <div>
            <strong>更新动作</strong>
            <p>${updateAction.scope}</p>
          </div>
          <div>
            <strong>Codex 可处理</strong>
            ${list(sourceSignal.codexTasks)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list([...riskMode.reviewers, assetArea.owner])}
          </div>
          <div>
            <strong>交付物</strong>
            ${list(updateAction.deliverables)}
          </div>
          <div>
            <strong>验证方式</strong>
            <p>${updateAction.validation} ${assetArea.validation}</p>
          </div>
          <div>
            <strong>维护日志动作</strong>
            <p>${reviewWindow.cadence} ${decision.next}</p>
          </div>
          <div>
            <strong>发布闸口</strong>
            <p>${decision.gate}</p>
          </div>
        </div>
        <div class="writeback-router-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>运营规则</strong>
          ${list(router.operatingRules)}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>禁止承诺边界</strong>
          <p>${riskMode.noGo} ${riskMode.boundary}</p>
        </div>
      `;
      setStatus("");
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildReleaseWritebackMarkdown(currentBrief, router));
        setStatus("回写 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(router.exportFilename || "release-writeback-routing-output.md", buildReleaseWritebackMarkdown(currentBrief, router), "text/markdown;charset=utf-8");
      setStatus("Markdown 回写 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildReleaseWritebackMarkdown(brief, router) {
    const { sourceSignal, assetArea, evidenceLevel, updateAction, riskMode, reviewWindow, score, decision, routePages, dataFiles, downloadFamilies, runbook, codexPrompt } = brief;
    return `# 版本回写与维护日志 Brief

- 反馈来源：${sourceSignal.label}
- 回写模块：${assetArea.label}
- 回写优先分：${score}
- 处理结论：${decision.label}
- 证据强度：${evidenceLevel.label}
- 更新动作：${updateAction.label}
- 风险等级：${riskMode.label}
- 复盘窗口：${reviewWindow.label}

## 反馈与证据
${sourceSignal.trigger}
${sourceSignal.evidence}

## 页面路线
${routePages.map((page) => `- ${page}`).join("\n")}

## 数据文件
${dataFiles.map((file) => `- ${file}`).join("\n")}

## 下载资产
${downloadFamilies.map((file) => `- ${file}`).join("\n")}

## Codex 可处理
${sourceSignal.codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认
${[...riskMode.reviewers, assetArea.owner].map((item) => `- ${item}`).join("\n")}

## 更新动作
${updateAction.scope}
${updateAction.deliverables.map((item) => `- ${item}`).join("\n")}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 验证方式
${updateAction.validation}
${assetArea.validation}
${decision.gate}

## 维护日志
${reviewWindow.cadence}
${reviewWindow.closeout}
${decision.next}

## 运营规则
${(router.operatingRules || []).map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${riskMode.noGo}
${riskMode.boundary}
`;
  }

  function renderPlaybookMaintenanceLogBuilder() {
    const target = byId("playbook-maintenance-log-content");
    if (!target || !data.playbook || !data.playbook.maintenanceLogBuilder) return;
    const builder = data.playbook.maintenanceLogBuilder;
    const defaults = builder.defaults || {};
    target.innerHTML = `
      <div class="maintenance-log-downloads">
        ${(builder.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card maintenance-log-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Maintenance Log Builder</p>
          <h3>${builder.title}</h3>
          <p>${builder.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="maintenance-source">
              <span>更新来源</span>
              <select id="maintenance-source" data-maintenance-log-field="updateSource">
                ${builder.updateSources
                  .map((item) => `<option value="${item.id}"${defaults.updateSource === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="maintenance-area">
              <span>资产区域</span>
              <select id="maintenance-area" data-maintenance-log-field="assetArea">
                ${builder.assetAreas
                  .map((item) => `<option value="${item.id}"${defaults.assetArea === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="maintenance-validation">
              <span>验证状态</span>
              <select id="maintenance-validation" data-maintenance-log-field="validationState">
                ${builder.validationStates
                  .map((item) => `<option value="${item.id}"${defaults.validationState === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="maintenance-decision">
              <span>发布决策</span>
              <select id="maintenance-decision" data-maintenance-log-field="releaseDecision">
                ${builder.releaseDecisions
                  .map((item) => `<option value="${item.id}"${defaults.releaseDecision === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="maintenance-next">
              <span>下期路线</span>
              <select id="maintenance-next" data-maintenance-log-field="nextRoute">
                ${builder.nextRoutes
                  .map((item) => `<option value="${item.id}"${defaults.nextRoute === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel maintenance-log-result" aria-live="polite">
          <div id="maintenance-log-result"></div>
          <div class="hero-actions compact-actions maintenance-log-actions">
            <button class="button secondary" type="button" id="maintenance-log-copy">复制维护日志</button>
            <button class="button secondary" type="button" id="maintenance-log-download">导出发布说明</button>
          </div>
          <span class="tool-action-status" id="maintenance-log-status"></span>
        </div>
      </article>
    `;
    setupPlaybookMaintenanceLogBuilder(builder);
  }

  function setupPlaybookMaintenanceLogBuilder(builder) {
    const fields = [...document.querySelectorAll("[data-maintenance-log-field]")];
    const result = byId("maintenance-log-result");
    const copy = byId("maintenance-log-copy");
    const download = byId("maintenance-log-download");
    const status = byId("maintenance-log-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.maintenanceLogField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decideMaintenance(score, validationState, releaseDecision) {
      if (validationState.id === "repair-found" || releaseDecision.id === "hold-repair") {
        return {
          label: "暂缓返修",
          stage: "Hold",
          action: "当前版本只进入维护日志和返修清单，不进入公开发布、试听课演示、资源推荐或企业交付。",
          gate: `${validationState.gate} ${validationState.repair}`,
          next: "修复后重新执行脚本、HTTP、桌面/手机、关键交互、下载和控制台验证。"
        };
      }
      if (releaseDecision.id === "approval-needed") {
        return {
          label: "等待人工审批",
          stage: "Approval",
          action: "先完成资料授权、业务审批、合规确认或服务范围确认，再发布并归档。",
          gate: releaseDecision.gate,
          next: "审批通过后补维护日志和版本发布说明。"
        };
      }
      if (validationState.id === "script-checked") {
        return {
          label: "补浏览器验收",
          stage: "Browser",
          action: "脚本检查已经通过，但还缺真实浏览器记录，暂不作为完整发布版本。",
          gate: validationState.repair,
          next: "补桌面、手机、交互、下载和控制台记录后再归档。"
        };
      }
      if (validationState.id === "full-browser-verified" && releaseDecision.id === "release-archive") {
        return {
          label: "可发布并归档",
          stage: "Ready",
          action: "本次更新已具备页面、数据、下载、验证、README、缓存版本和人工边界记录，可写入正式维护日志和版本说明。",
          gate: releaseDecision.gate,
          next: "进入版本评审或下期回写池。"
        };
      }
      if (score >= 68 && (releaseDecision.id === "public-use" || releaseDecision.id === "release-archive")) {
        return {
          label: "可用并补归档",
          stage: "Release",
          action: "可用于指定范围，但需要把验证记录、人工确认和下期回写补齐后归档。",
          gate: `${validationState.gate} ${releaseDecision.gate}`,
          next: "补维护日志和发布说明后进入下一路线。"
        };
      }
      return {
        label: "内部记录",
        stage: "Internal",
        action: "当前适合内部记录和团队复盘，公开展示前还需要补证据或负责人确认。",
        gate: validationState.gate,
        next: "进入周复盘或治理复核。"
      };
    }

    function buildBrief(values) {
      const updateSource = pick(builder.updateSources, values.updateSource);
      const assetArea = pick(builder.assetAreas, values.assetArea);
      const validationState = pick(builder.validationStates, values.validationState);
      const releaseDecision = pick(builder.releaseDecisions, values.releaseDecision);
      const nextRoute = pick(builder.nextRoutes, values.nextRoute);
      const score = Math.max(0, Math.min(100, updateSource.score + assetArea.score + validationState.score + releaseDecision.score + nextRoute.score));
      const decision = decideMaintenance(score, validationState, releaseDecision);
      const routePages = [...new Set([...updateSource.routePages, ...assetArea.pageRoute, "playbook.html#playbook-maintenance-log-builder"])];
      const dataFiles = [...new Set(assetArea.dataFiles)];
      const downloadFamilies = [...new Set(assetArea.downloadFamilies)];
      const changedFiles = [...new Set([...dataFiles, "playbook.html", "resources.html", "README.md", ...downloadFamilies.map((item) => `downloads/${item}`)])];
      const manualChecks = [...new Set([assetArea.owner, releaseDecision.owner, validationState.gate, releaseDecision.gate])];
      const validationProof = [validationState.proof, validationState.repair, releaseDecision.gate];
      const releaseNotes = [
        `本次更新来源：${updateSource.label}，触发信号为${updateSource.trigger}`,
        `涉及资产区域：${assetArea.label}，主要页面为${routePages.join("、")}`,
        `验证状态：${validationState.label}。${validationState.proof}`,
        `发布决策：${releaseDecision.label}。${releaseDecision.action}`,
        `下期路线：${nextRoute.label}。${nextRoute.action}`
      ];
      const runbook = [
        { stage: "01", title: "登记更新来源", detail: `${updateSource.label}：${updateSource.evidence}` },
        { stage: "02", title: "锁定变更范围", detail: `${assetArea.label}：${assetArea.validation}` },
        { stage: "03", title: "记录验证证据", detail: `${validationState.label}：${validationState.proof}` },
        { stage: "04", title: "写发布说明", detail: `${releaseDecision.label}：${releaseDecision.action}` },
        { stage: "05", title: "保留人工边界", detail: manualChecks.join("；") },
        { stage: "06", title: "进入下一路线", detail: `${nextRoute.label}：${nextRoute.action}` }
      ];
      const codexPrompt = `请基于以下维护日志 brief 生成版本发布说明：更新来源为${updateSource.label}，资产区域为${assetArea.label}，验证状态为${validationState.label}，发布决策为${releaseDecision.label}，下期路线为${nextRoute.label}。必须列出 changed files、页面路线、数据文件、下载资产、验证命令、桌面/手机浏览器记录、人工确认边界、发布说明、未完成项、README 和缓存版本同步、下一步回写任务。`;
      return { updateSource, assetArea, validationState, releaseDecision, nextRoute, score, decision, routePages, dataFiles, downloadFamilies, changedFiles, manualChecks, validationProof, releaseNotes, runbook, codexPrompt };
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { updateSource, assetArea, validationState, releaseDecision, nextRoute, score, decision, routePages, dataFiles, downloadFamilies, changedFiles, manualChecks, validationProof, releaseNotes, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.stage} · ${assetArea.owner}</p>
        <h3>${assetArea.label}维护日志与发布说明</h3>
        <p>${decision.action}</p>
        <div class="maintenance-log-meta">
          <div>
            <strong>${score}</strong>
            <span>维护完整分</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>发布结论</span>
          </div>
          <div>
            <strong>${nextRoute.label}</strong>
            <span>下期路线</span>
          </div>
        </div>
        <div class="maintenance-log-grid">
          <div>
            <strong>更新来源</strong>
            <p>${updateSource.trigger}</p>
          </div>
          <div>
            <strong>验证状态</strong>
            <p>${validationState.proof} ${validationState.repair}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>Changed files</strong>
            ${tagRow(changedFiles)}
          </div>
          <div>
            <strong>数据文件</strong>
            ${tagRow(dataFiles)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${tagRow(downloadFamilies)}
          </div>
          <div>
            <strong>验证证据</strong>
            ${list(validationProof)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(manualChecks)}
          </div>
          <div>
            <strong>Codex 可处理</strong>
            ${list(updateSource.codexTasks)}
          </div>
          <div>
            <strong>发布闸口</strong>
            <p>${decision.gate}</p>
          </div>
          <div>
            <strong>发布说明</strong>
            ${list(releaseNotes)}
          </div>
          <div>
            <strong>下期回写</strong>
            <p>${nextRoute.action} ${decision.next}</p>
          </div>
        </div>
        <div class="maintenance-log-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>维护日志运营规则</strong>
          ${list(builder.operatingRules)}
        </div>
        <div class="detail-block maintenance-log-prompt">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
      `;
      setStatus("");
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await copyTextWithFallback(buildMaintenanceLogMarkdown(currentBrief, builder));
        setStatus("维护日志与发布说明已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(builder.exportFilename || "maintenance-log-release-note-output.md", buildMaintenanceLogMarkdown(currentBrief, builder), "text/markdown;charset=utf-8");
      setStatus("Markdown 维护日志与发布说明已生成下载。");
    });
    renderResult();
  }

  function buildMaintenanceLogMarkdown(brief, builder) {
    const { updateSource, assetArea, validationState, releaseDecision, nextRoute, score, decision, routePages, dataFiles, downloadFamilies, changedFiles, manualChecks, validationProof, releaseNotes, runbook, codexPrompt } = brief;
    return `# 维护日志与版本发布说明 Brief

- 更新来源：${updateSource.label}
- 资产区域：${assetArea.label}
- 维护完整分：${score}
- 发布结论：${decision.label}
- 验证状态：${validationState.label}
- 发布决策：${releaseDecision.label}
- 下期路线：${nextRoute.label}

## 更新来源
${updateSource.trigger}
${updateSource.evidence}

## 页面路线
${routePages.map((item) => `- ${item}`).join("\n")}

## Changed files
${changedFiles.map((item) => `- ${item}`).join("\n")}

## 数据文件
${dataFiles.map((item) => `- ${item}`).join("\n")}

## 下载资产
${downloadFamilies.map((item) => `- ${item}`).join("\n")}

## 验证记录
${validationProof.map((item) => `- ${item}`).join("\n")}

## 人工确认边界
${manualChecks.map((item) => `- ${item}`).join("\n")}

## 发布说明
${releaseNotes.map((item) => `- ${item}`).join("\n")}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 下期回写
${nextRoute.action}
${decision.next}

## 维护日志运营规则
${(builder.operatingRules || []).map((item) => `- ${item}`).join("\n")}

## Codex 扩写任务
${codexPrompt}
`;
  }

  function renderPlaybookVersionReview() {
    const target = byId("playbook-version-review");
    if (!target || !data.playbook || !data.playbook.versionReviewBoard) return;
    const downloads = data.playbook.versionReviewDownloads || [];
    target.innerHTML = `
      <div class="version-review-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="version-review-grid">
        ${data.playbook.versionReviewBoard
          .map(
            (item) => `
              <article class="version-review-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Review ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="version-review-meta">
                  <div>
                    <strong>触发信号</strong>
                    <p>${item.feedbackSignal}</p>
                  </div>
                  <div>
                    <strong>输入证据</strong>
                    <p>${item.inputEvidence}</p>
                  </div>
                </div>
                <div class="version-review-detail-grid">
                  <div>
                    <strong>Codex 辅助</strong>
                    <p>${item.codexAssist}</p>
                  </div>
                  <div>
                    <strong>人工决策</strong>
                    <p>${item.humanDecision}</p>
                  </div>
                  <div>
                    <strong>更新范围</strong>
                    <p>${item.updateScope}</p>
                  </div>
                  <div>
                    <strong>发布门槛</strong>
                    <p>${item.releaseGate}</p>
                  </div>
                </div>
                <div class="version-review-boundary">
                  <strong>承诺边界</strong>
                  <p>${item.boundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderPlaybookDataGovernance() {
    const target = byId("playbook-data-governance");
    if (!target || !data.playbook || !data.playbook.dataGovernanceBoard) return;
    const downloads = data.playbook.dataGovernanceDownloads || [];
    target.innerHTML = `
      <div class="data-governance-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="data-governance-grid">
        ${data.playbook.dataGovernanceBoard
          .map(
            (item) => `
              <article class="data-governance-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Governance ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="data-governance-meta">
                  <div>
                    <strong>风险信号</strong>
                    <p>${item.riskSignal}</p>
                  </div>
                  <div>
                    <strong>治理动作</strong>
                    <p>${item.governanceAction}</p>
                  </div>
                </div>
                <div class="data-governance-detail-grid">
                  <div>
                    <strong>Codex 辅助</strong>
                    <p>${item.codexAssist}</p>
                  </div>
                  <div>
                    <strong>人工审批</strong>
                    <p>${item.humanApproval}</p>
                  </div>
                  <div>
                    <strong>可用范围</strong>
                    <p>${item.usableScope}</p>
                  </div>
                  <div>
                    <strong>留存证据</strong>
                    <p>${item.evidence}</p>
                  </div>
                </div>
                <div class="data-governance-boundary">
                  <strong>风险边界</strong>
                  <p>${item.boundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderPlaybookCommercialPackaging() {
    const target = byId("playbook-commercial-packaging");
    if (!target || !data.playbook || !data.playbook.commercialPackagingBoard) return;
    const downloads = data.playbook.commercialPackagingDownloads || [];
    target.innerHTML = `
      <div class="commercial-packaging-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="commercial-packaging-grid">
        ${data.playbook.commercialPackagingBoard
          .map(
            (item) => `
              <article class="commercial-packaging-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Offer ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="commercial-packaging-meta">
                  <div>
                    <strong>目标信号</strong>
                    <p>${item.targetSignal}</p>
                  </div>
                  <div>
                    <strong>产品范围</strong>
                    <p>${item.offerScope}</p>
                  </div>
                </div>
                <div class="commercial-packaging-detail-grid">
                  <div>
                    <strong>交付物</strong>
                    <p>${item.deliverables}</p>
                  </div>
                  <div>
                    <strong>Codex 辅助</strong>
                    <p>${item.codexAssist}</p>
                  </div>
                  <div>
                    <strong>人工确认</strong>
                    <p>${item.humanApproval}</p>
                  </div>
                  <div>
                    <strong>证据页面</strong>
                    <p>${item.proofPage}</p>
                  </div>
                  <div>
                    <strong>转化动作</strong>
                    <p>${item.conversionAction}</p>
                  </div>
                  <div>
                    <strong>复购信号</strong>
                    <p>${item.renewalSignal}</p>
                  </div>
                </div>
                <div class="commercial-packaging-boundary">
                  <strong>销售承诺边界</strong>
                  <p>${item.boundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderPlaybookCommercialOfferReview() {
    const target = byId("playbook-commercial-offer-router");
    if (!target || !data.playbook || !data.playbook.commercialOfferReviewRouter) return;
    const router = data.playbook.commercialOfferReviewRouter;
    const defaults = router.defaults || {};
    target.innerHTML = `
      <div class="commercial-offer-review-downloads">
        ${(router.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card commercial-offer-review-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Offer Boundary Review</p>
          <h3>${router.title}</h3>
          <p>${router.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="commercial-offer-package">
              <span>产品包</span>
              <select id="commercial-offer-package" data-commercial-offer-field="offerPackage">
                ${router.offerPackages
                  .map((item) => `<option value="${item.id}"${defaults.offerPackage === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="commercial-offer-evidence">
              <span>证据状态</span>
              <select id="commercial-offer-evidence" data-commercial-offer-field="evidenceState">
                ${router.evidenceStates
                  .map((item) => `<option value="${item.id}"${defaults.evidenceState === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="commercial-offer-scope">
              <span>范围状态</span>
              <select id="commercial-offer-scope" data-commercial-offer-field="scopeState">
                ${router.scopeStates
                  .map((item) => `<option value="${item.id}"${defaults.scopeState === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="commercial-offer-buyer">
              <span>销售阶段</span>
              <select id="commercial-offer-buyer" data-commercial-offer-field="buyerStage">
                ${router.buyerStages
                  .map((item) => `<option value="${item.id}"${defaults.buyerStage === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="commercial-offer-risk">
              <span>风险模式</span>
              <select id="commercial-offer-risk" data-commercial-offer-field="riskMode">
                ${router.riskModes
                  .map((item) => `<option value="${item.id}"${defaults.riskMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="commercial-offer-action">
              <span>下一步动作</span>
              <select id="commercial-offer-action" data-commercial-offer-field="nextAction">
                ${router.nextActions
                  .map((item) => `<option value="${item.id}"${defaults.nextAction === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel commercial-offer-review-result" aria-live="polite">
          <div id="commercial-offer-review-result"></div>
          <div class="hero-actions compact-actions commercial-offer-review-actions">
            <button class="button secondary" type="button" id="commercial-offer-review-copy">复制确认 Brief</button>
            <button class="button secondary" type="button" id="commercial-offer-review-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="commercial-offer-review-status"></span>
        </div>
      </article>
    `;
    setupPlaybookCommercialOfferReview(router);
  }

  function setupPlaybookCommercialOfferReview(router) {
    const fields = [...document.querySelectorAll("[data-commercial-offer-field]")];
    const result = byId("commercial-offer-review-result");
    const copy = byId("commercial-offer-review-copy");
    const download = byId("commercial-offer-review-download");
    const status = byId("commercial-offer-review-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.commercialOfferField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decide(score, evidenceState, scopeState, riskMode, nextAction) {
      if (nextAction.id === "hold-repair" || evidenceState.id === "idea-only" || scopeState.id === "unclear-scope") {
        return {
          label: "暂缓补证据",
          stage: "Hold",
          tone: "danger",
          action: "先补页面证据、交付范围、人工确认人和下载承接，不进入付款、签约或公开销售承诺。",
          gate: `${evidenceState.gate} ${scopeState.gate}`,
          next: "进入资源跟进、销售复盘或负责人审批。"
        };
      }
      if (riskMode.id === "private-data" || riskMode.id === "high-liability" || scopeState.id === "custom-scope") {
        return {
          label: "人工审批后确认",
          stage: "Approval",
          tone: "warn",
          action: "先完成资料授权、scope、价格或高责任事项审批，再决定是否进入产品包确认。",
          gate: `${riskMode.summary} ${riskMode.noGo}`,
          next: "由审批人确认后进入企业 scope、签约或开班交接。"
        };
      }
      if (riskMode.id === "proof-overclaim" || score < 48) {
        return {
          label: "修正话术后再推进",
          stage: "Repair",
          tone: "warn",
          action: "先删掉夸大效果、未授权案例和超出证据范围的承诺，再进入咨询或付款确认。",
          gate: riskMode.noGo,
          next: "回到商业承诺边界确认单复查。"
        };
      }
      if (nextAction.id === "enterprise-scope" || nextAction.id === "upgrade-review") {
        return {
          label: "进入下一层服务评审",
          stage: "Route",
          tone: "strong",
          action: "证据和边界足够，可进入企业 scope、续费复盘、工具 Sprint 或行业替换评审。",
          gate: "下一层服务仍需重新确认 scope、资料授权、验收和价格。",
          next: nextAction.route
        };
      }
      return {
        label: "可进入产品包确认",
        stage: "Ready",
        tone: "strong",
        action: "当前产品包、证据、范围和边界达到确认条件，可进入付款前确认、开班交接或标准咨询推进。",
        gate: "仍需保留商业承诺边界确认单和人工确认记录。",
        next: nextAction.route
      };
    }

    function buildBrief(values) {
      const offerPackage = pick(router.offerPackages, values.offerPackage);
      const evidenceState = pick(router.evidenceStates, values.evidenceState);
      const scopeState = pick(router.scopeStates, values.scopeState);
      const buyerStage = pick(router.buyerStages, values.buyerStage);
      const riskMode = pick(router.riskModes, values.riskMode);
      const nextAction = pick(router.nextActions, values.nextAction);
      const score = Math.max(0, Math.min(100, offerPackage.baseScore + evidenceState.score + scopeState.score + buyerStage.score + nextAction.score - riskMode.penalty));
      const decision = decide(score, evidenceState, scopeState, riskMode, nextAction);
      const proofPages = [...new Set([...offerPackage.proofPages, "playbook.html#playbook-commercial-offer-review"])];
      const downloads = [...new Set([...offerPackage.linkedDownloads, "course-product-sku-delivery-matrix.csv", "commercial-offer-boundary-note.md", "commercial-offer-review-router.csv"])];
      const owners = [...new Set([...offerPackage.owners, ...riskMode.reviewers])];
      const runbook = [
        { stage: "01", title: "确认产品包", detail: `${offerPackage.stage} ${offerPackage.label}：${offerPackage.target}` },
        { stage: "02", title: "核对证据", detail: `${evidenceState.summary} ${evidenceState.repair}` },
        { stage: "03", title: "锁定范围", detail: `${scopeState.summary} ${scopeState.repair}` },
        { stage: "04", title: "处理销售阶段", detail: `${buyerStage.summary} 记录：${buyerStage.requiredRecord}` },
        { stage: "05", title: "设置人工审批", detail: `${owners.join("、")}确认。${riskMode.summary}` },
        { stage: "06", title: "输出下一步", detail: `${nextAction.summary} 交付：${nextAction.deliverable}` }
      ];
      const codexPrompt = `请基于以下商业产品包评审结果，生成一份销售或企业签约前确认 Brief：产品包为${offerPackage.label}，证据状态为${evidenceState.label}，范围状态为${scopeState.label}，销售阶段为${buyerStage.label}，风险模式为${riskMode.label}，下一步动作为${nextAction.label}。必须包含适合对象、明确交付、页面证据、下载资产、Codex 可辅助事项、必须人工确认事项、禁止承诺边界、暂缓条件和维护回写动作。`;
      return { offerPackage, evidenceState, scopeState, buyerStage, riskMode, nextAction, score, decision, proofPages, downloads, owners, runbook, codexPrompt };
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { offerPackage, evidenceState, scopeState, buyerStage, riskMode, nextAction, score, decision, proofPages, downloads, owners, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.stage} · ${buyerStage.actionTone}</p>
        <h3>${offerPackage.label}评审 Brief</h3>
        <p>${decision.action}</p>
        <div class="commercial-offer-review-meta">
          <div>
            <strong>${score}</strong>
            <span>产品包确认分</span>
          </div>
          <div>
            <strong>${decision.label}</strong>
            <span>处理结论</span>
          </div>
          <div>
            <strong>${buyerStage.label}</strong>
            <span>当前阶段</span>
          </div>
        </div>
        <div class="commercial-offer-review-grid">
          <div>
            <strong>适合对象</strong>
            <p>${offerPackage.target}</p>
          </div>
          <div>
            <strong>包含范围</strong>
            ${list(offerPackage.included)}
          </div>
          <div>
            <strong>交付证据</strong>
            ${list(offerPackage.deliverableEvidence)}
          </div>
          <div>
            <strong>页面证据</strong>
            ${tagRow(proofPages)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${tagRow(downloads)}
          </div>
          <div>
            <strong>负责人</strong>
            ${tagRow(owners)}
          </div>
          <div>
            <strong>证据状态</strong>
            <p>${evidenceState.summary} ${evidenceState.repair}</p>
          </div>
          <div>
            <strong>范围状态</strong>
            <p>${scopeState.summary} ${scopeState.repair}</p>
          </div>
          <div>
            <strong>下一步动作</strong>
            <p>${nextAction.route}。${nextAction.deliverable}</p>
          </div>
          <div>
            <strong>发布闸口</strong>
            <p>${decision.gate}</p>
          </div>
        </div>
        <div class="commercial-offer-review-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>销售承诺边界</strong>
          <p>${offerPackage.manualBoundary} ${riskMode.noGo} ${offerPackage.noGo}</p>
        </div>
        <div class="detail-block">
          <strong>运营规则</strong>
          ${list(router.operatingRules)}
        </div>
      `;
      setStatus("");
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildCommercialOfferReviewMarkdown(currentBrief, router));
        setStatus("商业确认 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(router.exportFilename || "commercial-offer-review-output.md", buildCommercialOfferReviewMarkdown(currentBrief, router), "text/markdown;charset=utf-8");
      setStatus("Markdown 商业确认 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildCommercialOfferReviewMarkdown(brief, router) {
    const { offerPackage, evidenceState, scopeState, buyerStage, riskMode, nextAction, score, decision, proofPages, downloads, owners, runbook, codexPrompt } = brief;
    return `# 商业产品包承诺边界评审 Brief

- 产品包：${offerPackage.label}
- 阶段：${offerPackage.stage}
- 当前销售阶段：${buyerStage.label}
- 产品包确认分：${score}
- 处理结论：${decision.label}
- 风险模式：${riskMode.label}
- 下一步动作：${nextAction.label}

## 适合对象
${offerPackage.target}

## 明确包含
${offerPackage.included.map((item) => `- ${item}`).join("\n")}

## 交付证据
${offerPackage.deliverableEvidence.map((item) => `- ${item}`).join("\n")}

## 页面证据
${proofPages.map((page) => `- ${page}`).join("\n")}

## 下载资产
${downloads.map((item) => `- ${item}`).join("\n")}

## 证据与范围状态
- 证据状态：${evidenceState.label}。${evidenceState.summary}
- 范围状态：${scopeState.label}。${scopeState.summary}
- 销售阶段记录：${buyerStage.requiredRecord}

## 必须人工确认
${owners.map((owner) => `- ${owner}`).join("\n")}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## 当前结论
${decision.action}
${decision.next}

## Codex 可辅助
${codexPrompt}

## 禁止承诺边界
${offerPackage.manualBoundary}
${riskMode.noGo}
${offerPackage.noGo}

## 运营规则
${(router.operatingRules || []).map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderPlaybookPrinciples() {
    const target = byId("playbook-principles");
    if (!target || !data.playbook) return;
    target.innerHTML = data.playbook.principles
      .map(
        (principle) => `
          <article class="info-card">
            <h3>${principle.title}</h3>
            <p>${principle.description}</p>
            <div class="detail-block"><strong>检查标准</strong>${list(principle.checks)}</div>
          </article>
        `
      )
      .join("");
  }

  function renderPlaybookStandards() {
    const target = byId("playbook-standards");
    if (!target || !data.playbook) return;
    target.innerHTML = data.playbook.pageStandards
      .map(
        (standard) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">${standard.page}</p>
              <h3>${standard.purpose}</h3>
            </div>
            <div class="standard-card-grid two-column">
              <div>
                <strong>必备内容</strong>
                ${list(standard.required)}
              </div>
              <div>
                <strong>负责人</strong>
                <p>${standard.owner}</p>
              </div>
              <div>
                <strong>上线门槛</strong>
                <p>${standard.gate}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderPlaybookOperatingFlow() {
    const target = byId("playbook-operating-flow");
    if (!target || !data.playbook) return;
    target.innerHTML = data.playbook.operatingFlow
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid two-column">
              <div>
                <strong>输入</strong>
                <p>${step.input}</p>
              </div>
              <div>
                <strong>输出</strong>
                <p>${step.output}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderPlaybookMaintenanceCadence() {
    const target = byId("playbook-maintenance-cadence");
    if (!target || !data.playbook || !data.playbook.maintenanceCadence) return;
    target.innerHTML = data.playbook.maintenanceCadence
      .map(
        (item) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">${item.cycle}</p>
              <h3>${item.title}</h3>
            </div>
            <div class="standard-card-grid">
              <div>
                <strong>负责人</strong>
                <p>${item.owner}</p>
              </div>
              <div>
                <strong>输入信号</strong>
                ${list(item.inputs)}
              </div>
              <div>
                <strong>更新内容</strong>
                ${list(item.updates)}
              </div>
              <div class="span-2">
                <strong>完成证据</strong>
                <p>${item.evidence}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderPlaybookContentOps() {
    const target = byId("playbook-content-ops");
    if (!target || !data.playbook || !data.playbook.contentOpsMatrix) return;
    target.innerHTML = `
      <table class="data-table ops-table">
        <thead>
          <tr>
            <th>模块</th>
            <th>更新触发</th>
            <th>维护文件</th>
            <th>负责人</th>
            <th>验证口径</th>
          </tr>
        </thead>
        <tbody>
          ${data.playbook.contentOpsMatrix
            .map(
              (row) => `
                <tr>
                  <td>${row.area}</td>
                  <td>${row.trigger}</td>
                  <td><code>${row.file}</code></td>
                  <td>${row.owner}</td>
                  <td>${row.validation}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderPlaybookChecklists() {
    const target = byId("playbook-checklists");
    if (!target || !data.playbook) return;
    target.innerHTML = data.playbook.releaseChecklists
      .map(
        (checklist) => `
          <article class="info-card">
            <h3>${checklist.title}</h3>
            ${list(checklist.items)}
          </article>
        `
      )
      .join("");
  }

  function renderPlaybookRoadmap() {
    const target = byId("playbook-roadmap");
    if (!target || !data.playbook) return;
    target.innerHTML = data.playbook.roadmap
      .map(
        (item) => `
          <article class="timeline-card">
            <p class="eyebrow">${item.phase}</p>
            <h3>${item.title}</h3>
            <p>${item.focus}</p>
          </article>
        `
      )
      .join("");
  }

  function renderEnterprise() {
    const target = byId("enterprise-services");
    if (!target || !data.enterpriseServices) return;
    target.innerHTML = data.enterpriseServices
      .map(
        (service) => `
          <article class="info-card">
            <p class="eyebrow">${service.type}</p>
            <h3>${service.title}</h3>
            <p>${service.value || service.fit}</p>
            ${service.duration ? tagRow([service.duration]) : ""}
            <div class="detail-block"><strong>交付内容</strong>${list(service.deliverables)}</div>
            ${service.proof ? `<div class="detail-block"><strong>验收结果</strong><p>${service.proof}</p></div>` : ""}
          </article>
        `
      )
      .join("");
  }

  function renderEnterpriseMetrics() {
    const target = byId("enterprise-metrics");
    if (!target || !data.enterprise) return;
    target.innerHTML = data.enterprise.metrics
      .map(
        (metric) => `
          <article class="metric playbook-metric">
            <strong>${metric.value}</strong>
            <span>${metric.label}</span>
            <p>${metric.detail}</p>
          </article>
        `
      )
      .join("");
  }

  function renderEnterpriseDiagnosis() {
    const target = byId("enterprise-diagnosis");
    if (!target || !data.enterprise) return;
    target.innerHTML = data.enterprise.diagnosisFocus
      .map(
        (item) => `
          <article class="standard-card">
            <div class="standard-card-head">
              <p class="eyebrow">${item.area}</p>
              <h3>${item.symptom}</h3>
            </div>
            <div class="standard-card-grid">
              <div>
                <strong>Codex 改造方式</strong>
                <p>${item.codexFix}</p>
              </div>
              <div>
                <strong>人工确认边界</strong>
                <p>${item.manualBoundary}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderEnterpriseDiagnosisRouter() {
    const target = byId("enterprise-diagnosis-router");
    if (!target || !data.enterprise || !data.enterprise.diagnosisRouter) return;
    const router = data.enterprise.diagnosisRouter;
    target.innerHTML = `
      <article class="decision-tool-card enterprise-router-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Enterprise Intake</p>
          <h3>录入企业现状，推荐服务路径</h3>
          <div class="decision-input-grid">
            ${router.fields
              .map(
                (field) => `
                  <label class="decision-field" for="enterprise-router-${field.id}">
                    <span>${field.label}</span>
                    <select id="enterprise-router-${field.id}" data-enterprise-router-field="${field.id}">
                      ${field.options
                        .map(
                          (option) => `
                            <option value="${option.value}"${
                              router.defaultValues[field.id] === option.value ? " selected" : ""
                            }>${option.label}</option>
                          `
                        )
                        .join("")}
                    </select>
                  </label>
                `
              )
              .join("")}
          </div>
        </div>
        <div id="enterprise-router-result" class="decision-result-panel enterprise-router-result" aria-live="polite"></div>
      </article>
    `;
    setupEnterpriseDiagnosisRouter(router);
  }

  function getEnterpriseDiagnosisRoute(values, router) {
    if (values.boundary === "reject") return router.routes.boundary;
    if (values.boundary === "uncertain" || values.materials === "none" || values.materials === "basic") {
      return router.routes.prepare;
    }
    if (values.goal === "sop" || values.painPoint === "knowledge_sop") {
      return router.routes.sop;
    }
    if (values.goal === "tool" || values.painPoint === "order_docs") {
      return router.routes.tool;
    }
    if (values.goal === "training" || values.painPoint === "inquiry_quote" || values.painPoint === "customer_dev") {
      return router.routes.training;
    }
    if (values.teamStage === "mature_team" && values.materials === "full_samples") {
      return router.routes.sop;
    }
    return router.routes.diagnosis;
  }

  function setupEnterpriseDiagnosisRouter(router) {
    const fields = [...document.querySelectorAll("[data-enterprise-router-field]")];
    const result = byId("enterprise-router-result");
    if (!fields.length || !result) return;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.enterpriseRouterField] = field.value;
        return values;
      }, {});
    }

    function updateResult() {
      const values = readValues();
      const route = getEnterpriseDiagnosisRoute(values, router);
      result.innerHTML = `
        <p class="eyebrow">Recommended Package</p>
        <h3>${route.title}</h3>
        <p>${route.fit}</p>
        <div class="tag-row">
          <span class="tag">${route.serviceRef}</span>
          <span class="tag">${route.score}</span>
        </div>
        <div class="detail-block">
          <strong>下一步动作</strong>
          <p>${route.nextAction}</p>
        </div>
        <div class="detail-block">
          <strong>需要准备</strong>
          ${list(route.requiredMaterials)}
        </div>
        <div class="detail-block">
          <strong>承诺边界</strong>
          <p>${route.boundary}</p>
        </div>
        <div class="hero-actions compact-actions">
          <a class="button primary" href="${route.primaryPage}">进入推荐路径</a>
          <a class="button secondary" href="${route.secondaryPage}">查看辅助页面</a>
        </div>
      `;
    }

    fields.forEach((field) => field.addEventListener("change", updateResult));
    updateResult();
  }

  function renderEnterpriseDiagnosisBriefBuilder() {
    const target = byId("enterprise-diagnosis-brief-builder");
    if (!target || !data.enterprise || !data.enterprise.diagnosisBriefBuilder) return;
    const builder = data.enterprise.diagnosisBriefBuilder;
    const defaults = builder.defaults || {};
    target.innerHTML = `
      <article class="decision-tool-card enterprise-brief-builder-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Enterprise Proposal Desk</p>
          <h3>${builder.title}</h3>
          <p>${builder.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="enterprise-brief-teamStage">
              <span>企业阶段</span>
              <select id="enterprise-brief-teamStage" data-enterprise-brief-field="teamStage">
                ${builder.teamStages
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.teamStage === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-brief-materialLevel">
              <span>资料成熟度</span>
              <select id="enterprise-brief-materialLevel" data-enterprise-brief-field="materialLevel">
                ${builder.materialLevels
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.materialLevel === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-brief-painArea">
              <span>核心痛点</span>
              <select id="enterprise-brief-painArea" data-enterprise-brief-field="painArea">
                ${builder.painAreas
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.painArea === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-brief-serviceGoal">
              <span>服务目标</span>
              <select id="enterprise-brief-serviceGoal" data-enterprise-brief-field="serviceGoal">
                ${builder.serviceGoals
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.serviceGoal === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-brief-sampleLine">
              <span>样板业务线</span>
              <select id="enterprise-brief-sampleLine" data-enterprise-brief-field="sampleLine">
                ${builder.sampleLines
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.sampleLine === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-brief-boundaryMode">
              <span>边界口径</span>
              <select id="enterprise-brief-boundaryMode" data-enterprise-brief-field="boundaryMode">
                ${builder.boundaryModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.boundaryMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel enterprise-brief-builder-result" aria-live="polite">
          <div id="enterprise-brief-result"></div>
          <div class="hero-actions compact-actions enterprise-brief-actions">
            <button class="button secondary" type="button" id="enterprise-brief-copy">复制方案</button>
            <button class="button secondary" type="button" id="enterprise-brief-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="enterprise-brief-status"></span>
        </div>
      </article>
    `;
    setupEnterpriseDiagnosisBriefBuilder(builder);
  }

  function setupEnterpriseDiagnosisBriefBuilder(builder) {
    const fields = [...document.querySelectorAll("[data-enterprise-brief-field]")];
    const result = byId("enterprise-brief-result");
    const copy = byId("enterprise-brief-copy");
    const download = byId("enterprise-brief-download");
    const status = byId("enterprise-brief-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.enterpriseBriefField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function buildBrief(values) {
      const teamStage = pick(builder.teamStages, values.teamStage);
      const materialLevel = pick(builder.materialLevels, values.materialLevel);
      const painArea = pick(builder.painAreas, values.painArea);
      const serviceGoal = pick(builder.serviceGoals, values.serviceGoal);
      const sampleLine = pick(builder.sampleLines, values.sampleLine);
      const boundaryMode = pick(builder.boundaryModes, values.boundaryMode);
      const mapperItems = (data.enterprise.trainingPlanMapper || []).filter((item) => painArea.mapperStages.includes(item.stage));
      const pageRoute = [...new Set([...painArea.pageRoute, "enterprise.html", "playbook.html"])];
      const requiredMaterials = [...new Set(materialLevel.required)];
      const participantRoles = [...new Set(mapperItems.map((item) => item.participantRoles))];
      const acceptanceEvidence = mapperItems.map((item) => item.acceptanceEvidence);
      const toolOutputs = mapperItems.map((item) => item.toolOutput);
      const sopTasks = mapperItems.map((item) => item.sopTask);
      const manualBoundaries = mapperItems.map((item) => item.manualBoundary);
      const runbook = [
        { stage: "01", title: "诊断结论", detail: painArea.diagnosis },
        { stage: "02", title: "优先级", detail: painArea.priority },
        { stage: "03", title: "样板业务线", detail: `${sampleLine.scenario} ${sampleLine.replacement}` },
        { stage: "04", title: "服务建议", detail: `${serviceGoal.packageRef}；${serviceGoal.stagePlan}` },
        { stage: "05", title: "企业资料准备", detail: requiredMaterials.join("；") },
        { stage: "06", title: "验收与边界", detail: `${serviceGoal.acceptance} ${boundaryMode.rule}` }
      ];
      const codexPrompt = `请基于以下企业诊断 brief 生成一页式诊断方案：企业阶段为${teamStage.label}，资料成熟度为${materialLevel.label}，核心痛点为${painArea.label}，服务目标为${serviceGoal.label}，样板业务线为${sampleLine.label}。方案必须包含诊断结论、资料清单、推荐服务包、课堂/工具输出、验收证据和人工确认边界，不得承诺自动成交、自动报价、系统范围、开发周期或替代企业审批。`;
      return {
        teamStage,
        materialLevel,
        painArea,
        serviceGoal,
        sampleLine,
        boundaryMode,
        mapperItems,
        pageRoute,
        requiredMaterials,
        participantRoles,
        acceptanceEvidence,
        toolOutputs,
        sopTasks,
        manualBoundaries,
        runbook,
        codexPrompt
      };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const {
        teamStage,
        materialLevel,
        painArea,
        serviceGoal,
        sampleLine,
        boundaryMode,
        mapperItems,
        pageRoute,
        requiredMaterials,
        participantRoles,
        acceptanceEvidence,
        toolOutputs,
        sopTasks,
        manualBoundaries,
        runbook,
        codexPrompt
      } = currentBrief;

      result.innerHTML = `
        <p class="eyebrow">${serviceGoal.packageRef} · ${materialLevel.score}</p>
        <h3>${painArea.label}</h3>
        <p>${teamStage.summary}</p>
        <div class="enterprise-brief-meta">
          <div>
            <strong>${teamStage.label}</strong>
            <span>企业阶段</span>
          </div>
          <div>
            <strong>${serviceGoal.label}</strong>
            <span>服务目标</span>
          </div>
          <div>
            <strong>${boundaryMode.label}</strong>
            <span>边界口径</span>
          </div>
        </div>
        <div class="enterprise-brief-grid">
          <div>
            <strong>诊断摘要</strong>
            <p>${painArea.diagnosis}</p>
          </div>
          <div>
            <strong>样板业务线</strong>
            <p>${sampleLine.scenario}</p>
          </div>
          <div>
            <strong>页面路线</strong>
            ${tagRow(pageRoute)}
          </div>
          <div>
            <strong>服务阶段</strong>
            <p>${serviceGoal.stagePlan}</p>
          </div>
          <div>
            <strong>资料清单</strong>
            ${list(requiredMaterials)}
          </div>
          <div>
            <strong>推荐模块</strong>
            ${list(mapperItems.map((item) => item.trainingModule))}
          </div>
          <div>
            <strong>参与岗位</strong>
            ${list(participantRoles)}
          </div>
          <div>
            <strong>工具输出</strong>
            ${list(toolOutputs)}
          </div>
          <div>
            <strong>SOP 任务</strong>
            ${list(sopTasks)}
          </div>
          <div>
            <strong>验收证据</strong>
            ${list(acceptanceEvidence)}
          </div>
          <div>
            <strong>资料风险</strong>
            <p>${materialLevel.risk}</p>
          </div>
        </div>
        <div class="enterprise-brief-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>人工确认</strong>
          <p>${boundaryMode.rule} ${boundaryMode.humanOwner} ${teamStage.ownerNeed} ${manualBoundaries.join(" ")}</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildEnterpriseDiagnosisBriefMarkdown(currentBrief));
        setStatus("企业诊断方案已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(builder.exportFilename || "enterprise-diagnosis-brief-output.md", buildEnterpriseDiagnosisBriefMarkdown(currentBrief), "text/markdown;charset=utf-8");
      setStatus("Markdown 方案已生成下载。");
    });
    renderResult();
  }

  function buildEnterpriseDiagnosisBriefMarkdown(brief) {
    const {
      teamStage,
      materialLevel,
      painArea,
      serviceGoal,
      sampleLine,
      boundaryMode,
      mapperItems,
      pageRoute,
      requiredMaterials,
      participantRoles,
      acceptanceEvidence,
      toolOutputs,
      sopTasks,
      manualBoundaries,
      runbook,
      codexPrompt
    } = brief;
    return `# 企业诊断方案 Brief

- 企业阶段：${teamStage.label}
- 资料成熟度：${materialLevel.label}（${materialLevel.score}）
- 核心痛点：${painArea.label}
- 服务目标：${serviceGoal.label}
- 推荐服务包：${serviceGoal.packageRef}
- 样板业务线：${sampleLine.label}
- 边界口径：${boundaryMode.label}

## 诊断摘要
${painArea.diagnosis}

## 优先级
${painArea.priority}

## 样板业务线
${sampleLine.scenario}
${sampleLine.input}
${sampleLine.replacement}

## 页面路线
${pageRoute.map((item) => `- ${item}`).join("\n")}

## 资料清单
${requiredMaterials.map((item) => `- ${item}`).join("\n")}

## 参与岗位
${participantRoles.map((item) => `- ${item}`).join("\n")}

## 推荐课程 / 工具映射
${mapperItems
  .map(
    (item) => `- ${item.trainingModule}
  - 参与岗位：${item.participantRoles}
  - 课堂样例：${item.classCase}
  - 工具输出：${item.toolOutput}
  - SOP 任务：${item.sopTask}
  - 验收证据：${item.acceptanceEvidence}`
  )
  .join("\n")}

## 服务阶段
${serviceGoal.stagePlan}

## 交付物
${serviceGoal.deliverable}

## 验收证据
${acceptanceEvidence.map((item) => `- ${item}`).join("\n")}

## 工具输出
${toolOutputs.map((item) => `- ${item}`).join("\n")}

## SOP 任务
${sopTasks.map((item) => `- ${item}`).join("\n")}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 人工确认边界
${boundaryMode.rule}
${boundaryMode.humanOwner}
${teamStage.ownerNeed}
${materialLevel.risk}
${manualBoundaries.map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderEnterpriseLearnerSignalIntake() {
    const target = byId("enterprise-learner-signal-intake-content");
    if (!target || !data.enterprise || !data.enterprise.learnerSignalIntake) return;
    const desk = data.enterprise.learnerSignalIntake;
    const downloads = data.enterprise.learnerSignalIntakeDownloads || [];
    const toHref = (page) => (page.startsWith("#") ? page : `./${page}`);
    target.innerHTML = `
      <div class="enterprise-learner-signal-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="enterprise-learner-signal-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Learner-to-Enterprise Handoff</p>
            <h3>${desk.title}</h3>
            <p>${desk.summary}</p>
          </div>
          ${tagRow(["真实应用", "团队反馈", "授权", "诊断入口"])}
        </div>
        <div class="enterprise-learner-signal-meta">
          ${(desk.meta || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="enterprise-learner-signal-source">
          <strong>来源页面</strong>
          ${tagRow(desk.sourcePages || [])}
        </div>
        <div class="enterprise-learner-signal-grid">
          ${(desk.lanes || [])
            .map(
              (lane) => `
                <section>
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">${lane.enterpriseFit} · ${lane.recommendedRoute}</p>
                      <h4>${lane.signal}</h4>
                    </div>
                    <span class="tag">${lane.owner}</span>
                  </div>
                  <div class="home-entry-link-list">
                    ${(lane.routePages || []).map((page) => `<a href="${toHref(page)}">${page}</a>`).join("")}
                  </div>
                  <div class="enterprise-learner-signal-detail-grid">
                    <div>
                      <strong>必备证据</strong>
                      <p>${lane.requiredProof}</p>
                    </div>
                    <div>
                      <strong>Codex 辅助</strong>
                      <p>${lane.codexAssist}</p>
                    </div>
                    <div>
                      <strong>人工闸口</strong>
                      <p>${lane.manualGate}</p>
                    </div>
                    <div>
                      <strong>禁止边界</strong>
                      <p>${lane.noGo}</p>
                    </div>
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
        <div class="enterprise-learner-signal-bottom">
          <div>
            <strong>承接检查</strong>
            ${list(desk.intakeChecks || [])}
          </div>
          <div>
            <strong>平台回写去向</strong>
            ${list(desk.writebackTargets || [])}
          </div>
        </div>
      </article>
    `;
  }

  function renderEnterpriseToolchainSignalIntake() {
    const target = byId("enterprise-toolchain-signal-content");
    if (!target || !data.enterprise || !data.enterprise.toolchainSignalIntake) return;
    const desk = data.enterprise.toolchainSignalIntake;
    const downloads = data.enterprise.toolchainSignalDownloads || [];
    const toHref = (page) => (page.startsWith("#") ? page : `./${page}`);
    target.innerHTML = `
      <div class="enterprise-toolchain-signal-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="enterprise-toolchain-signal-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Toolchain-to-Enterprise Intake</p>
            <h3>${desk.title}</h3>
            <p>${desk.summary}</p>
          </div>
          ${tagRow(["企业诊断", "内训", "轻量工具", "SOP"])}
        </div>
        <div class="enterprise-toolchain-signal-meta">
          ${(desk.meta || [])
            .map(
              (item) => `
                <div>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <p>${item.note}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="enterprise-toolchain-signal-source">
          <strong>来源页面</strong>
          ${tagRow(desk.sourcePages || [])}
        </div>
        <div class="enterprise-toolchain-signal-grid">
          ${(desk.signals || [])
            .map(
              (item) => `
                <section>
                  <div class="case-card-head">
                    <div>
                      <p class="eyebrow">${item.suggestedService}</p>
                      <h4>${item.tool}</h4>
                    </div>
                    <a class="button secondary" href="${toHref(item.serviceRoute)}">进入服务</a>
                  </div>
                  <div class="enterprise-toolchain-signal-detail-grid">
                    <div>
                      <strong>企业问题</strong>
                      <p>${item.enterpriseProblem}</p>
                    </div>
                    <div>
                      <strong>诊断资料</strong>
                      <p>${item.requiredMaterials}</p>
                    </div>
                    <div>
                      <strong>Codex 辅助</strong>
                      <p>${item.codexAssist}</p>
                    </div>
                    <div>
                      <strong>人工闸口</strong>
                      <p>${item.humanGate}</p>
                    </div>
                    <div class="span-2">
                      <strong>禁止承诺</strong>
                      <p>${item.noGo}</p>
                    </div>
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
        <div class="enterprise-toolchain-signal-bottom">
          <div>
            <strong>承接审批</strong>
            ${list(desk.approvalChecks || [])}
          </div>
          <div>
            <strong>后续路由</strong>
            ${list(desk.handoffRoutes || [])}
          </div>
        </div>
      </article>
    `;
  }

  function renderEnterpriseProposalApprovalDesk() {
    const target = byId("enterprise-proposal-approval");
    if (!target || !data.enterprise || !data.enterprise.proposalApprovalDesk) return;
    const desk = data.enterprise.proposalApprovalDesk;
    const defaults = desk.defaults || {};
    target.innerHTML = `
      <div class="enterprise-proposal-downloads">
        ${(desk.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card enterprise-proposal-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Proposal Gate</p>
          <h3>${desk.title}</h3>
          <p>${desk.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="enterprise-proposal-service">
              <span>推荐服务包</span>
              <select id="enterprise-proposal-service" data-enterprise-proposal-field="servicePackage">
                ${desk.servicePackages
                  .map((item) => `<option value="${item.id}"${defaults.servicePackage === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-proposal-auth">
              <span>资料授权</span>
              <select id="enterprise-proposal-auth" data-enterprise-proposal-field="authorizationState">
                ${desk.authorizationStates
                  .map((item) => `<option value="${item.id}"${defaults.authorizationState === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-proposal-scope">
              <span>项目范围</span>
              <select id="enterprise-proposal-scope" data-enterprise-proposal-field="scopeMode">
                ${desk.scopeModes
                  .map((item) => `<option value="${item.id}"${defaults.scopeMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-proposal-approval-state">
              <span>审批状态</span>
              <select id="enterprise-proposal-approval-state" data-enterprise-proposal-field="approvalState">
                ${desk.approvalStates
                  .map((item) => `<option value="${item.id}"${defaults.approvalState === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-proposal-action">
              <span>下一步动作</span>
              <select id="enterprise-proposal-action" data-enterprise-proposal-field="launchAction">
                ${desk.launchActions
                  .map((item) => `<option value="${item.id}"${defaults.launchAction === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel enterprise-proposal-result" aria-live="polite">
          <div id="enterprise-proposal-result"></div>
          <div class="hero-actions compact-actions enterprise-proposal-actions">
            <button class="button secondary" type="button" id="enterprise-proposal-copy">复制启动 Brief</button>
            <button class="button secondary" type="button" id="enterprise-proposal-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="enterprise-proposal-status"></span>
        </div>
      </article>
    `;
    setupEnterpriseProposalApprovalDesk(desk);
  }

  function setupEnterpriseProposalApprovalDesk(desk) {
    const fields = [...document.querySelectorAll("[data-enterprise-proposal-field]")];
    const result = byId("enterprise-proposal-result");
    const copy = byId("enterprise-proposal-copy");
    const download = byId("enterprise-proposal-download");
    const status = byId("enterprise-proposal-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.enterpriseProposalField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decide(auth, scope, approval, action) {
      if (auth.id === "missing-authorization" || scope.id === "scope-unclear" || approval.id === "commercial-unapproved") {
        return {
          label: "退回补确认",
          tone: "repair",
          detail: "授权、scope 或商务条款不足，不能进入企业内训、工具 Sprint 或 SOP 共建。"
        };
      }
      if (approval.id === "technical-review" || approval.id === "leadership-approval" || auth.id === "enterprise-confidential") {
        return {
          label: "审批后启动",
          tone: "review",
          detail: "需要技术/产品评审或企业管理层确认后再进入交付。"
        };
      }
      if (action.id === "return-diagnosis") {
        return {
          label: "继续诊断",
          tone: "calm",
          detail: "当前应继续补诊断和资料，不进入项目启动。"
        };
      }
      return {
        label: "可交接启动",
        tone: "ready",
        detail: "可生成项目启动 Brief，交接企业服务、教学、产品或 SOP 团队。"
      };
    }

    function buildBrief(values) {
      const servicePackage = pick(desk.servicePackages, values.servicePackage);
      const authorizationState = pick(desk.authorizationStates, values.authorizationState);
      const scopeMode = pick(desk.scopeModes, values.scopeMode);
      const approvalState = pick(desk.approvalStates, values.approvalState);
      const launchAction = pick(desk.launchActions, values.launchAction);
      const decision = decide(authorizationState, scopeMode, approvalState, launchAction);
      const routePages = [...new Set([...servicePackage.proofPages, launchAction.nextPage, "enterprise.html", "playbook.html"])];
      const checklist = [...new Set([...approvalState.checklist, ...scopeMode.deliverableFocus, ...servicePackage.deliverables])];
      const runbook = [
        { stage: "01", title: "确认服务包", detail: `${servicePackage.label}：${servicePackage.fit}` },
        { stage: "02", title: "核对资料授权", detail: `${authorizationState.label}：${authorizationState.requirement}` },
        { stage: "03", title: "锁定项目范围", detail: `${scopeMode.label}：${scopeMode.detail}` },
        { stage: "04", title: "完成审批", detail: `${approvalState.label}：${approvalState.action}` },
        { stage: "05", title: "交接启动动作", detail: `${launchAction.label}：${launchAction.action}` },
        { stage: "06", title: "保留边界", detail: `${authorizationState.risk} ${approvalState.noGo}` }
      ];
      const codexPrompt = `请基于以下企业项目启动 brief 生成签约/交付交接清单：服务包为${servicePackage.label}，资料授权为${authorizationState.label}，项目范围为${scopeMode.label}，审批状态为${approvalState.label}，下一步动作为${launchAction.label}。必须包含页面路线、交付物、资料授权、scope、审批清单、负责人、Codex 可做事项、人工确认事项、禁止承诺边界和下次复盘窗口。`;
      return { servicePackage, authorizationState, scopeMode, approvalState, launchAction, decision, routePages, checklist, runbook, codexPrompt };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { servicePackage, authorizationState, scopeMode, approvalState, launchAction, decision, routePages, checklist, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <div class="case-card-head">
          <div>
            <p class="eyebrow">${launchAction.owner} · ${approvalState.status}</p>
            <h3>${servicePackage.label}审批结论</h3>
          </div>
          <span class="tag enterprise-proposal-decision ${decision.tone}">${decision.label}</span>
        </div>
        <p>${decision.detail}</p>
        <div class="enterprise-proposal-meta">
          <div><strong>${authorizationState.status}</strong><span>资料授权</span></div>
          <div><strong>${scopeMode.readiness}</strong><span>项目范围</span></div>
          <div><strong>${approvalState.status}</strong><span>审批状态</span></div>
        </div>
        <div class="enterprise-proposal-grid">
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>下一步交接</strong>
            <p>${launchAction.action}</p>
          </div>
          <div>
            <strong>交付物</strong>
            ${list(servicePackage.deliverables)}
          </div>
          <div>
            <strong>审批清单</strong>
            ${list(checklist)}
          </div>
          <div>
            <strong>Codex 可做</strong>
            ${list(servicePackage.codexUse)}
          </div>
          <div>
            <strong>人工确认</strong>
            ${list(servicePackage.manualCheck)}
          </div>
          <div>
            <strong>授权动作</strong>
            <p>${authorizationState.action}</p>
          </div>
          <div>
            <strong>scope 动作</strong>
            <p>${scopeMode.action}</p>
          </div>
        </div>
        <div class="enterprise-proposal-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>企业审批边界</strong>
          <p>${authorizationState.risk} ${approvalState.noGo} ${desk.operatingRules.join(" ")}</p>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildEnterpriseProposalApprovalMarkdown(currentBrief, desk));
        setStatus("企业项目启动 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(desk.exportFilename || "enterprise-proposal-approval-brief-output.md", buildEnterpriseProposalApprovalMarkdown(currentBrief, desk), "text/markdown;charset=utf-8");
      setStatus("Markdown 企业项目启动 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildEnterpriseProposalApprovalMarkdown(brief, desk) {
    const { servicePackage, authorizationState, scopeMode, approvalState, launchAction, decision, routePages, checklist, runbook, codexPrompt } = brief;
    return `# 企业项目启动审批 Brief

- 审批结论：${decision.label}
- 推荐服务包：${servicePackage.label}
- 资料授权：${authorizationState.label}
- 项目范围：${scopeMode.label}
- 审批状态：${approvalState.label}
- 下一步动作：${launchAction.label}
- 承接负责人：${launchAction.owner}

## 结论说明
${decision.detail}

## 页面路线
${routePages.map((item) => `- ${item}`).join("\n")}

## 交付物
${servicePackage.deliverables.map((item) => `- ${item}`).join("\n")}

## 审批清单
${checklist.map((item) => `- ${item}`).join("\n")}

## Codex 可做事项
${servicePackage.codexUse.map((item) => `- ${item}`).join("\n")}

## 人工确认事项
${servicePackage.manualCheck.map((item) => `- ${item}`).join("\n")}

## 启动动作
${launchAction.action}
目标页面：${launchAction.nextPage}
交接路线：${launchAction.route}

## 运行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 禁止承诺边界
${authorizationState.risk}
${approvalState.noGo}
${desk.operatingRules.map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderEnterpriseProjectKickoffDesk() {
    const target = byId("enterprise-project-kickoff-content");
    if (!target || !data.enterprise || !data.enterprise.projectKickoffDesk) return;
    const desk = data.enterprise.projectKickoffDesk;
    const defaults = desk.defaults || {};
    target.innerHTML = `
      <div class="enterprise-kickoff-downloads">
        ${(desk.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card enterprise-kickoff-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Project Kickoff</p>
          <h3>${desk.title}</h3>
          <p>${desk.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="enterprise-kickoff-mode">
              <span>启动模式</span>
              <select id="enterprise-kickoff-mode" data-enterprise-kickoff-field="kickoffMode">
                ${desk.kickoffModes
                  .map((item) => `<option value="${item.id}"${defaults.kickoffMode === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-kickoff-scope">
              <span>项目范围</span>
              <select id="enterprise-kickoff-scope" data-enterprise-kickoff-field="projectScope">
                ${desk.projectScopes
                  .map((item) => `<option value="${item.id}"${defaults.projectScope === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-kickoff-roles">
              <span>角色分工</span>
              <select id="enterprise-kickoff-roles" data-enterprise-kickoff-field="roleSetup">
                ${desk.roleSetups
                  .map((item) => `<option value="${item.id}"${defaults.roleSetup === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-kickoff-data-room">
              <span>资料室状态</span>
              <select id="enterprise-kickoff-data-room" data-enterprise-kickoff-field="dataRoomState">
                ${desk.dataRoomStates
                  .map((item) => `<option value="${item.id}"${defaults.dataRoomState === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-kickoff-milestone">
              <span>首个里程碑</span>
              <select id="enterprise-kickoff-milestone" data-enterprise-kickoff-field="firstMilestone">
                ${desk.firstMilestones
                  .map((item) => `<option value="${item.id}"${defaults.firstMilestone === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-kickoff-risk">
              <span>风险闸口</span>
              <select id="enterprise-kickoff-risk" data-enterprise-kickoff-field="riskGate">
                ${desk.riskGates
                  .map((item) => `<option value="${item.id}"${defaults.riskGate === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel enterprise-kickoff-result" aria-live="polite">
          <div id="enterprise-kickoff-result"></div>
          <div class="hero-actions compact-actions enterprise-kickoff-actions">
            <button class="button secondary" type="button" id="enterprise-kickoff-copy">复制启动 Brief</button>
            <button class="button secondary" type="button" id="enterprise-kickoff-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="enterprise-kickoff-status"></span>
        </div>
      </article>
    `;
    setupEnterpriseProjectKickoffDesk(desk);
  }

  function setupEnterpriseProjectKickoffDesk(desk) {
    const fields = [...document.querySelectorAll("[data-enterprise-kickoff-field]")];
    const result = byId("enterprise-kickoff-result");
    const copy = byId("enterprise-kickoff-copy");
    const download = byId("enterprise-kickoff-download");
    const status = byId("enterprise-kickoff-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.enterpriseKickoffField] = field.value;
        return values;
      }, {});
    }

    function pick(listItems, id) {
      return listItems.find((item) => item.id === id) || listItems[0];
    }

    function decide(values, score) {
      if (values.roleSetup.id === "owner-missing" || values.dataRoomState.id === "not-ready" || values.riskGate.id === "commercial-contract") {
        return {
          label: "暂缓启动",
          tone: "repair",
          detail: "角色、资料室或商务合同闸口不足，先补齐负责人、资料权限和商业条款，再安排企业交付。"
        };
      }
      if (values.riskGate.id === "technical-scope" || values.roleSetup.id === "leadership-review") {
        return {
          label: "评审后启动",
          tone: "review",
          detail: "需要产品/技术或管理层复核后再启动，避免把系统对接、权限或岗位制度提前包装成交付承诺。"
        };
      }
      if (values.riskGate.id === "data-permission" || values.dataRoomState.id === "confidential-controlled") {
        return {
          label: "受控启动",
          tone: "calm",
          detail: "可以在授权范围内启动，但资料只进入项目内部，不进入公开展示、招生证明或未经许可的工具样例。"
        };
      }
      if (score >= 68) {
        return {
          label: "可启动交付",
          tone: "ready",
          detail: "启动条件已基本具备，可以把项目启动 Brief 交接给教学、交付、产品或企业对接团队。"
        };
      }
      return {
        label: "补齐后启动",
        tone: "calm",
        detail: "当前可以准备启动资料，但还需补齐范围、角色、资料室或首个里程碑证据。"
      };
    }

    function buildBrief(values) {
      const kickoffMode = pick(desk.kickoffModes, values.kickoffMode);
      const projectScope = pick(desk.projectScopes, values.projectScope);
      const roleSetup = pick(desk.roleSetups, values.roleSetup);
      const dataRoomState = pick(desk.dataRoomStates, values.dataRoomState);
      const firstMilestone = pick(desk.firstMilestones, values.firstMilestone);
      const riskGate = pick(desk.riskGates, values.riskGate);
      const rawScore = kickoffMode.score + projectScope.score + roleSetup.score + dataRoomState.score + firstMilestone.score - riskGate.penalty;
      const score = Math.max(0, Math.min(100, rawScore));
      const decision = decide({ kickoffMode, projectScope, roleSetup, dataRoomState, firstMilestone, riskGate }, score);
      const routePages = [...new Set([...kickoffMode.pageRoute, ...firstMilestone.route, "enterprise.html#enterprise-project-kickoff", "enterprise.html#enterprise-delivery-board"])];
      const owners = [...new Set([...kickoffMode.owners, ...roleSetup.roles])];
      const deliverables = [...new Set([...kickoffMode.deliverables, firstMilestone.output, ...dataRoomState.proof])];
      const reviewers = [...new Set(riskGate.reviewers)];
      const runbook = [
        { stage: "01", title: "确认启动模式", detail: `${kickoffMode.label}：${kickoffMode.purpose}` },
        { stage: "02", title: "锁定项目范围", detail: `${projectScope.label}：${projectScope.scope}` },
        { stage: "03", title: "交接角色责任", detail: `${roleSetup.state}：${roleSetup.action}` },
        { stage: "04", title: "检查资料室", detail: `${dataRoomState.label}：${dataRoomState.requirement}` },
        { stage: "05", title: "安排首个里程碑", detail: `${firstMilestone.label}：${firstMilestone.milestone}` },
        { stage: "06", title: "保留风险闸口", detail: `${riskGate.label}：${riskGate.gate}` }
      ];
      const codexPrompt = `请基于以下企业项目启动 Brief 生成交接清单：启动模式为${kickoffMode.label}，项目范围为${projectScope.label}，角色分工为${roleSetup.label}，资料室状态为${dataRoomState.label}，首个里程碑为${firstMilestone.label}，风险闸口为${riskGate.label}。必须输出启动结论、负责人、交付物、页面路线、资料室检查、首个里程碑、Codex 可做事项、必须人工确认事项、禁止承诺边界和下次复盘窗口。`;
      return { kickoffMode, projectScope, roleSetup, dataRoomState, firstMilestone, riskGate, score, decision, routePages, owners, deliverables, reviewers, runbook, codexPrompt };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { kickoffMode, projectScope, roleSetup, dataRoomState, firstMilestone, riskGate, score, decision, routePages, owners, deliverables, reviewers, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <div class="case-card-head">
          <div>
            <p class="eyebrow">${kickoffMode.label} · ${roleSetup.state}</p>
            <h3>启动 Brief：${decision.label}</h3>
          </div>
          <span class="tag enterprise-kickoff-decision ${decision.tone}">${decision.label}</span>
        </div>
        <p>${decision.detail}</p>
        <div class="enterprise-kickoff-meta">
          <div><strong>${score}</strong><span>启动评分</span></div>
          <div><strong>${projectScope.label}</strong><span>项目范围</span></div>
          <div><strong>${firstMilestone.label}</strong><span>首个里程碑</span></div>
        </div>
        <div class="enterprise-kickoff-grid">
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>启动用途</strong>
            <p>${kickoffMode.purpose}</p>
          </div>
          <div>
            <strong>项目负责人</strong>
            ${list(owners)}
          </div>
          <div>
            <strong>交付物与资料证据</strong>
            ${list(deliverables)}
          </div>
          <div>
            <strong>资料室动作</strong>
            <p>${dataRoomState.action}</p>
          </div>
          <div>
            <strong>验收口径</strong>
            <p>${projectScope.acceptance}</p>
          </div>
          <div>
            <strong>风险复核人</strong>
            ${list(reviewers)}
          </div>
          <div>
            <strong>不可承诺</strong>
            <p>${projectScope.noGo} ${riskGate.gate}</p>
          </div>
        </div>
        <div class="enterprise-kickoff-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <p>${escapeHtml(codexPrompt)}</p>
        </div>
        <div class="detail-block">
          <strong>启动运营规则</strong>
          ${list(desk.operatingRules)}
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await copyTextWithFallback(buildEnterpriseProjectKickoffMarkdown(currentBrief, desk));
        setStatus("企业项目启动 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(desk.exportFilename || "enterprise-project-kickoff-output.md", buildEnterpriseProjectKickoffMarkdown(currentBrief, desk), "text/markdown;charset=utf-8");
      setStatus("Markdown 企业项目启动 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildEnterpriseProjectKickoffMarkdown(brief, desk) {
    const { kickoffMode, projectScope, roleSetup, dataRoomState, firstMilestone, riskGate, score, decision, routePages, owners, deliverables, reviewers, runbook, codexPrompt } = brief;
    return `# 企业项目启动与交接 Brief

- 启动结论：${decision.label}
- 启动评分：${score}
- 启动模式：${kickoffMode.label}
- 项目范围：${projectScope.label}
- 角色分工：${roleSetup.label}
- 资料室状态：${dataRoomState.label}
- 首个里程碑：${firstMilestone.label}
- 风险闸口：${riskGate.label}

## 结论说明
${decision.detail}

## 页面路线
${routePages.map((item) => `- ${item}`).join("\n")}

## 负责人
${owners.map((item) => `- ${item}`).join("\n")}

## 交付物与资料证据
${deliverables.map((item) => `- ${item}`).join("\n")}

## 项目范围
${projectScope.scope}
验收口径：${projectScope.acceptance}
禁止承诺：${projectScope.noGo}

## 资料室检查
${dataRoomState.requirement}
下一动作：${dataRoomState.action}

## 首个里程碑
${firstMilestone.milestone}
输出：${firstMilestone.output}

## 风险闸口
${riskGate.gate}
复核人：
${reviewers.map((item) => `- ${item}`).join("\n")}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 运营规则
${desk.operatingRules.map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderEnterpriseIntakeKit() {
    const target = byId("enterprise-intake-kit");
    if (!target || !data.enterprise || !data.enterprise.intakeKit) return;
    const kit = data.enterprise.intakeKit;
    target.innerHTML = `
      <article class="glass-panel standard-panel enterprise-intake-card">
        <div class="resource-detail-head">
          <div>
            <p class="eyebrow">Enterprise Diagnosis</p>
            <h3>${kit.title}</h3>
            <p>${kit.summary}</p>
          </div>
          ${tagRow(["访谈模板", "资料清单", "评分表"])}
        </div>
        <div class="enterprise-intake-grid">
          <div class="enterprise-intake-main">
            <div class="detail-block no-divider">
              <strong>诊断流程</strong>
            </div>
            <div class="enterprise-stage-list">
              ${kit.stages
                .map(
                  (stage) => `
                    <div class="enterprise-stage-item">
                      <div class="lesson-step-head">
                        <span class="step-number">${stage.stage}</span>
                        <h4>${stage.title}</h4>
                      </div>
                      <div class="lesson-step-grid two-column">
                        <div>
                          <strong>业务目的</strong>
                          <p>${stage.purpose}</p>
                        </div>
                        <div>
                          <strong>Codex 用法</strong>
                          <p>${stage.codexUse}</p>
                        </div>
                      </div>
                      <div class="detail-block">
                        <strong>人工确认</strong>
                        <p>${stage.manualCheck}</p>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
          <aside class="enterprise-intake-side">
            <div>
              <strong>下载资料</strong>
              ${kit.downloads.map((download) => downloadBlock(download)).join("")}
            </div>
            <div class="detail-block">
              <strong>访谈问题</strong>
              <div class="enterprise-question-list">
                ${kit.interviewBlocks
                  .map(
                    (block) => `
                      <section>
                        <span class="tag">${block.title}</span>
                        ${list(block.questions)}
                      </section>
                    `
                  )
                  .join("")}
              </div>
            </div>
            <div class="detail-block">
              <strong>成熟度评分</strong>
              <div class="score-list">
                ${kit.scoringRules
                  .map(
                    (rule) => `
                      <div>
                        <span>${rule.level} · ${rule.range}</span>
                        <p>${rule.meaning}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>
            <div class="detail-block">
              <strong>交付预览</strong>
              ${renderMiniTable(kit.deliverablePreview)}
            </div>
            <div class="detail-block">
              <strong>验收结果</strong>
              <p>${kit.proof}</p>
            </div>
          </aside>
        </div>
      </article>
    `;
  }

  function renderEnterpriseTrainingPlanMapper() {
    const target = byId("enterprise-training-plan-mapper");
    if (!target || !data.enterprise || !data.enterprise.trainingPlanMapper) return;
    const downloads = data.enterprise.trainingPlanDownloads || [];
    target.innerHTML = `
      <div class="enterprise-plan-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="enterprise-plan-grid">
        ${data.enterprise.trainingPlanMapper
          .map(
            (item) => `
              <article class="enterprise-plan-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Plan ${item.stage}</p>
                    <h3>${item.trainingModule}</h3>
                  </div>
                  <span class="tag">${item.owner}</span>
                </div>
                <div class="enterprise-plan-meta">
                  <div>
                    <strong>诊断信号</strong>
                    <p>${item.diagnosisSignal}</p>
                  </div>
                  <div>
                    <strong>参与岗位</strong>
                    <p>${item.participantRoles}</p>
                  </div>
                </div>
                <div class="enterprise-plan-detail-grid">
                  <div>
                    <strong>课堂样例</strong>
                    <p>${item.classCase}</p>
                  </div>
                  <div>
                    <strong>工具输出</strong>
                    <p>${item.toolOutput}</p>
                  </div>
                  <div>
                    <strong>SOP 任务</strong>
                    <p>${item.sopTask}</p>
                  </div>
                  <div>
                    <strong>验收证据</strong>
                    <p>${item.acceptanceEvidence}</p>
                  </div>
                </div>
                <div class="enterprise-plan-boundary">
                  <strong>人工确认边界</strong>
                  <p>${item.manualBoundary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderEnterpriseDeliveryBoard() {
    const target = byId("enterprise-delivery-board");
    if (!target || !data.enterprise || !data.enterprise.deliveryBoard) return;
    const downloads = data.enterprise.deliveryBoardDownloads || [];
    target.innerHTML = `
      <div class="enterprise-delivery-downloads">
        ${downloads
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <div class="enterprise-delivery-grid">
        ${data.enterprise.deliveryBoard
          .map(
            (item) => `
              <article class="enterprise-delivery-card">
                <div class="case-card-head">
                  <div>
                    <p class="eyebrow">Stage ${item.stage}</p>
                    <h3>${item.title}</h3>
                  </div>
                  <span class="tag">${item.serviceLink}</span>
                </div>
                <div class="enterprise-delivery-detail-grid">
                  <div>
                    <strong>业务输入</strong>
                    <p>${item.businessInput}</p>
                  </div>
                  <div>
                    <strong>交付物</strong>
                    <p>${item.deliverable}</p>
                  </div>
                  <div>
                    <strong>验收证据</strong>
                    <p>${item.acceptanceEvidence}</p>
                  </div>
                  <div>
                    <strong>企业责任</strong>
                    <p>${item.enterpriseResponsibility}</p>
                  </div>
                </div>
                <div class="lesson-step-grid two-column enterprise-delivery-boundary">
                  <div>
                    <strong>边界说明</strong>
                    <p>${item.boundary}</p>
                  </div>
                  <div>
                    <strong>下一轮扩展</strong>
                    <p>${item.nextExpansion}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderEnterpriseDeliveryWritebackRouter() {
    const target = byId("enterprise-delivery-writeback-content");
    if (!target || !data.enterprise || !data.enterprise.deliveryWritebackRouter) return;
    const router = data.enterprise.deliveryWritebackRouter;
    const defaults = router.defaults || {};
    target.innerHTML = `
      <div class="enterprise-writeback-downloads">
        ${(router.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card enterprise-writeback-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Evidence Write-back</p>
          <h3>${router.title}</h3>
          <p>${router.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="enterprise-writeback-source">
              <span>证据来源</span>
              <select id="enterprise-writeback-source" data-enterprise-writeback-field="evidenceSource">
                ${router.evidenceSources
                  .map((item) => `<option value="${item.id}"${defaults.evidenceSource === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-writeback-state">
              <span>验收状态</span>
              <select id="enterprise-writeback-state" data-enterprise-writeback-field="acceptanceState">
                ${router.acceptanceStates
                  .map((item) => `<option value="${item.id}"${defaults.acceptanceState === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-writeback-auth">
              <span>授权范围</span>
              <select id="enterprise-writeback-auth" data-enterprise-writeback-field="authorizationScope">
                ${router.authorizationScopes
                  .map((item) => `<option value="${item.id}"${defaults.authorizationScope === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-writeback-asset">
              <span>可复用资产</span>
              <select id="enterprise-writeback-asset" data-enterprise-writeback-field="reusableAsset">
                ${router.reusableAssets
                  .map((item) => `<option value="${item.id}"${defaults.reusableAsset === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-writeback-impact">
              <span>业务影响</span>
              <select id="enterprise-writeback-impact" data-enterprise-writeback-field="businessImpact">
                ${router.businessImpacts
                  .map((item) => `<option value="${item.id}"${defaults.businessImpact === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-writeback-risk">
              <span>风险边界</span>
              <select id="enterprise-writeback-risk" data-enterprise-writeback-field="riskBoundary">
                ${router.riskBoundaries
                  .map((item) => `<option value="${item.id}"${defaults.riskBoundary === item.id ? " selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel enterprise-writeback-result" aria-live="polite">
          <div id="enterprise-writeback-result"></div>
          <div class="hero-actions compact-actions enterprise-writeback-actions">
            <button class="button secondary" type="button" id="enterprise-writeback-copy">复制回写 Brief</button>
            <button class="button secondary" type="button" id="enterprise-writeback-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="enterprise-writeback-status"></span>
        </div>
      </article>
    `;
    setupEnterpriseDeliveryWritebackRouter(router);
  }

  function setupEnterpriseDeliveryWritebackRouter(router) {
    const fields = [...document.querySelectorAll("[data-enterprise-writeback-field]")];
    const result = byId("enterprise-writeback-result");
    const copy = byId("enterprise-writeback-copy");
    const download = byId("enterprise-writeback-download");
    const status = byId("enterprise-writeback-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.enterpriseWritebackField] = field.value;
        return values;
      }, {});
    }

    function pick(items, id) {
      return items.find((item) => item.id === id) || items[0];
    }

    function decide(items, score) {
      if (items.authorizationScope.id === "not-authorized" || items.acceptanceState.id === "no-owner" || items.acceptanceState.id === "disputed") {
        return {
          label: "仅内部归档",
          tone: "repair",
          summary: "授权、验收人或争议未关闭，不能进入案例、资源、招生证明或工具样例。"
        };
      }
      if (
        items.riskBoundary.id === "legal-contract" ||
        (items.authorizationScope.id === "public-showcase" && (items.riskBoundary.id === "data-sensitive" || items.riskBoundary.id === "commercial-claim"))
      ) {
        return {
          label: "审批后回写",
          tone: "review",
          summary: "可以整理为候选资产，但公开、销售或工具复用前必须完成授权、脱敏和人工审批。"
        };
      }
      if (items.reusableAsset.id === "hold-archive" || items.evidenceSource.id === "weak-evidence" || score < 58) {
        return {
          label: "先补证据",
          tone: "repair",
          summary: "当前证据链不足，先补验收记录、授权范围、脱敏版本和负责人后再回写。"
        };
      }
      if (items.authorizationScope.id === "public-showcase" || items.reusableAsset.id === "resource-proof") {
        return {
          label: "公开前审批",
          tone: "review",
          summary: "可作为公开展示候选，但需要课程、运营、企业授权人完成二次审批。"
        };
      }
      if (score >= 80) {
        return {
          label: "可回写为平台资产",
          tone: "ready",
          summary: "证据、授权和业务价值都较清楚，可以进入对应页面、下载资产和维护日志。"
        };
      }
      return {
        label: "内部回写",
        tone: "calm",
        summary: "适合先进入内部课程、工具、SOP 或维护日志，不直接公开展示。"
      };
    }

    function buildBrief(values) {
      const evidenceSource = pick(router.evidenceSources, values.evidenceSource);
      const acceptanceState = pick(router.acceptanceStates, values.acceptanceState);
      const authorizationScope = pick(router.authorizationScopes, values.authorizationScope);
      const reusableAsset = pick(router.reusableAssets, values.reusableAsset);
      const businessImpact = pick(router.businessImpacts, values.businessImpact);
      const riskBoundary = pick(router.riskBoundaries, values.riskBoundary);
      const rawScore = 44 + evidenceSource.score + acceptanceState.score + authorizationScope.score + reusableAsset.score + businessImpact.score - riskBoundary.penalty;
      const score = Math.max(0, Math.min(100, rawScore));
      const decision = decide({ evidenceSource, acceptanceState, authorizationScope, reusableAsset, businessImpact, riskBoundary }, score);
      const routePages = [...new Set([...reusableAsset.routePages, "enterprise.html#enterprise-delivery-writeback"])];
      const downloadAssets = [
        ...new Set([
          ...reusableAsset.downloads,
          ...(router.downloads || []).map((item) => item.href.replace("./downloads/", ""))
        ])
      ];
      const codexTasks = [...new Set([...evidenceSource.codexUse, "生成证据回写 Brief", "整理维护日志和复查窗口"])];
      const manualGates = [
        ...new Set([
          evidenceSource.manualGate,
          acceptanceState.repair,
          authorizationScope.requiredProof,
          `${businessImpact.owner}确认业务影响`,
          ...riskBoundary.reviewers.map((reviewer) => `${reviewer}确认`)
        ])
      ];
      const runbook = [
        { stage: "01", title: "核对证据来源", detail: `${evidenceSource.label}：${evidenceSource.summary}` },
        { stage: "02", title: "确认验收状态", detail: `${acceptanceState.status}：${acceptanceState.repair}` },
        { stage: "03", title: "锁定授权范围", detail: `${authorizationScope.label}：${authorizationScope.useScope}` },
        { stage: "04", title: "选择回写资产", detail: `${reusableAsset.label}：${reusableAsset.nextAction}` },
        { stage: "05", title: "判断业务影响", detail: `${businessImpact.label}：${businessImpact.proof}` },
        { stage: "06", title: "保留风险边界", detail: `${riskBoundary.label}：${riskBoundary.rule}` }
      ];
      const codexPrompt = `请基于以下企业交付证据回写 brief 生成平台回写清单：证据来源为${evidenceSource.label}，验收状态为${acceptanceState.label}，授权范围为${authorizationScope.label}，可复用资产为${reusableAsset.label}，业务影响为${businessImpact.label}，风险边界为${riskBoundary.label}。必须输出回写结论、页面路线、下载资产、Codex 可做事项、人工审批门槛、脱敏要求、禁止承诺和下次复查窗口。`;
      return { evidenceSource, acceptanceState, authorizationScope, reusableAsset, businessImpact, riskBoundary, score, decision, routePages, downloadAssets, codexTasks, manualGates, runbook, codexPrompt };
    }

    function renderResult() {
      currentBrief = buildBrief(readValues());
      const { evidenceSource, acceptanceState, authorizationScope, reusableAsset, businessImpact, riskBoundary, score, decision, routePages, downloadAssets, codexTasks, manualGates, runbook, codexPrompt } = currentBrief;
      result.innerHTML = `
        <div class="case-card-head">
          <div>
            <p class="eyebrow">${evidenceSource.label} · ${acceptanceState.status}</p>
            <h3>${score} 分 · ${decision.label}</h3>
          </div>
          <span class="tag enterprise-writeback-decision ${decision.tone}">${decision.label}</span>
        </div>
        <p>${decision.summary}</p>
        <div class="enterprise-writeback-meta">
          <div><strong>${authorizationScope.label}</strong><span>授权范围</span></div>
          <div><strong>${reusableAsset.label}</strong><span>可复用资产</span></div>
          <div><strong>${businessImpact.label}</strong><span>业务影响</span></div>
        </div>
        <div class="detail-block">
          <strong>证据说明</strong>
          <p>${evidenceSource.summary} ${businessImpact.proof}</p>
        </div>
        <div class="enterprise-writeback-grid">
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${list(downloadAssets)}
          </div>
          <div>
            <strong>可产出资产</strong>
            ${list(reusableAsset.deliverables)}
          </div>
          <div>
            <strong>Codex 可辅助事项</strong>
            ${list(codexTasks)}
          </div>
          <div>
            <strong>人工确认门槛</strong>
            ${list(manualGates)}
          </div>
          <div>
            <strong>风险复核人</strong>
            ${list(riskBoundary.reviewers)}
          </div>
        </div>
        <div class="enterprise-writeback-output">
          ${runbook
            .map(
              (step) => `
                <div>
                  <span>${step.stage}</span>
                  <strong>${step.title}</strong>
                  <p>${step.detail}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="detail-block">
          <strong>Codex 扩写任务</strong>
          <pre class="prompt-composer-text enterprise-writeback-prompt">${escapeHtml(codexPrompt)}</pre>
        </div>
        <div class="detail-block">
          <strong>运营规则</strong>
          ${list(router.operatingRules || [])}
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await copyTextWithFallback(buildEnterpriseDeliveryWritebackMarkdown(currentBrief, router));
        setStatus("企业证据回写 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(router.exportFilename || "enterprise-delivery-writeback-output.md", buildEnterpriseDeliveryWritebackMarkdown(currentBrief, router), "text/markdown;charset=utf-8");
      setStatus("Markdown 企业证据回写 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildEnterpriseDeliveryWritebackMarkdown(brief, router) {
    const { evidenceSource, acceptanceState, authorizationScope, reusableAsset, businessImpact, riskBoundary, score, decision, routePages, downloadAssets, codexTasks, manualGates, runbook, codexPrompt } = brief;
    return `# 企业交付证据回写与授权 Brief

- 回写结论：${decision.label}
- 回写评分：${score}
- 证据来源：${evidenceSource.label}
- 验收状态：${acceptanceState.label}
- 授权范围：${authorizationScope.label}
- 可复用资产：${reusableAsset.label}
- 业务影响：${businessImpact.label}
- 风险边界：${riskBoundary.label}

## 结论说明
${decision.summary}

## 证据摘要
${evidenceSource.summary}
${businessImpact.proof}

## 授权范围
${authorizationScope.useScope}
必备记录：${authorizationScope.requiredProof}

## 页面路线
${routePages.map((item) => `- ${item}`).join("\n")}

## 下载资产
${downloadAssets.map((item) => `- ${item}`).join("\n")}

## 可产出资产
${reusableAsset.deliverables.map((item) => `- ${item}`).join("\n")}

## Codex 可辅助事项
${codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认门槛
${manualGates.map((item) => `- ${item}`).join("\n")}

## 风险边界
${riskBoundary.rule}
复核人：
${riskBoundary.reviewers.map((item) => `- ${item}`).join("\n")}

## 执行步骤
${runbook.map((step) => `- ${step.stage} ${step.title}：${step.detail}`).join("\n")}

## Codex 扩写任务
${codexPrompt}

## 运营规则
${(router.operatingRules || []).map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderEnterpriseRenewalRouter() {
    const target = byId("enterprise-renewal-router");
    if (!target || !data.enterprise || !data.enterprise.renewalExpansionRouter) return;
    const router = data.enterprise.renewalExpansionRouter;
    const defaults = router.defaults || {};
    target.innerHTML = `
      <div class="enterprise-renewal-downloads">
        ${(router.downloads || [])
          .map(
            (download) => `
              <a class="download-tile" href="${download.href}" download>
                <span class="tag">${download.format}</span>
                <strong>${download.label}</strong>
                <p>${download.note}</p>
              </a>
            `
          )
          .join("")}
      </div>
      <article class="decision-tool-card enterprise-renewal-card">
        <div class="decision-input-panel">
          <p class="eyebrow">Renewal Router</p>
          <h3>${router.title}</h3>
          <p>${router.description}</p>
          <div class="decision-input-grid">
            <label class="decision-field" for="enterprise-renewal-delivery">
              <span>交付信号</span>
              <select id="enterprise-renewal-delivery" data-enterprise-renewal-field="deliverySignal">
                ${router.deliverySignals
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.deliverySignal === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-renewal-adoption">
              <span>岗位采纳</span>
              <select id="enterprise-renewal-adoption" data-enterprise-renewal-field="adoptionStatus">
                ${router.adoptionStatuses
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.adoptionStatus === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-renewal-evidence">
              <span>证据质量</span>
              <select id="enterprise-renewal-evidence" data-enterprise-renewal-field="evidenceQuality">
                ${router.evidenceQualities
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.evidenceQuality === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-renewal-target">
              <span>扩展目标</span>
              <select id="enterprise-renewal-target" data-enterprise-renewal-field="expansionTarget">
                ${router.expansionTargets
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.expansionTarget === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
            <label class="decision-field" for="enterprise-renewal-risk">
              <span>风险模式</span>
              <select id="enterprise-renewal-risk" data-enterprise-renewal-field="riskMode">
                ${router.riskModes
                  .map(
                    (item) => `
                      <option value="${item.id}"${defaults.riskMode === item.id ? " selected" : ""}>${item.label}</option>
                    `
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </div>
        <div class="decision-result-panel enterprise-renewal-result" aria-live="polite">
          <div id="enterprise-renewal-result"></div>
          <div class="hero-actions compact-actions enterprise-renewal-actions">
            <button class="button secondary" type="button" id="enterprise-renewal-copy">复制续约 Brief</button>
            <button class="button secondary" type="button" id="enterprise-renewal-download">导出 MD</button>
          </div>
          <span class="tool-action-status" id="enterprise-renewal-status"></span>
        </div>
      </article>
    `;
    setupEnterpriseRenewalRouter(router);
  }

  function setupEnterpriseRenewalRouter(router) {
    const fields = [...document.querySelectorAll("[data-enterprise-renewal-field]")];
    const result = byId("enterprise-renewal-result");
    const copy = byId("enterprise-renewal-copy");
    const download = byId("enterprise-renewal-download");
    const status = byId("enterprise-renewal-status");
    if (!fields.length || !result) return;
    let currentBrief = null;

    function readValues() {
      return fields.reduce((values, field) => {
        values[field.dataset.enterpriseRenewalField] = field.value;
        return values;
      }, {});
    }

    function itemById(items, id) {
      return items.find((item) => item.id === id) || items[0];
    }

    function decisionFor(score, values) {
      if (values.expansionTarget === "hold" || values.adoptionStatus === "not-used") {
        return router.decisions.find((item) => item.id === "hold") || router.decisions[router.decisions.length - 1];
      }
      return router.decisions.find((item) => score >= item.minScore) || router.decisions[router.decisions.length - 1];
    }

    function evaluate() {
      const values = readValues();
      const deliverySignal = itemById(router.deliverySignals, values.deliverySignal);
      const adoptionStatus = itemById(router.adoptionStatuses, values.adoptionStatus);
      const evidenceQuality = itemById(router.evidenceQualities, values.evidenceQuality);
      const expansionTarget = itemById(router.expansionTargets, values.expansionTarget);
      const riskMode = itemById(router.riskModes, values.riskMode);
      const score = Math.max(0, Math.min(100, 42 + deliverySignal.score + adoptionStatus.score + evidenceQuality.score + expansionTarget.score + riskMode.penalty));
      const decision = decisionFor(score, values);
      const routePages = [...new Set(expansionTarget.routePages)];
      const downloadAssets = [...new Set([...expansionTarget.downloadAssets, ...(router.downloads || []).map((item) => item.href.replace("./downloads/", ""))])];
      const codexTasks = [...new Set([...deliverySignal.codexUse, "生成续约 Brief", "整理下期复盘任务"])];
      const manualGates = [...new Set([deliverySignal.manualGate, ...riskMode.reviewers.map((reviewer) => `${reviewer}确认`)])];
      const repairTasks = [
        adoptionStatus.repair,
        evidenceQuality.repair,
        riskMode.rule,
        decision.gate
      ];
      const codexPrompt = [
        "请生成企业续约与扩展 Brief。",
        `交付信号：${deliverySignal.label}；岗位采纳：${adoptionStatus.label}；证据质量：${evidenceQuality.label}；扩展目标：${expansionTarget.label}；风险模式：${riskMode.label}。`,
        "请输出推荐路径、页面路线、交付证据、Codex 可辅助事项、人工确认门槛、禁止承诺和下次复盘窗口。"
      ].join("\n");
      return { values, deliverySignal, adoptionStatus, evidenceQuality, expansionTarget, riskMode, score, decision, routePages, downloadAssets, codexTasks, manualGates, repairTasks, codexPrompt };
    }

    function renderResult() {
      currentBrief = evaluate();
      const { deliverySignal, adoptionStatus, evidenceQuality, expansionTarget, riskMode, score, decision, routePages, downloadAssets, codexTasks, manualGates, repairTasks, codexPrompt } = currentBrief;
      result.innerHTML = `
        <p class="eyebrow">${decision.label}</p>
        <h3>${score} 分 · ${expansionTarget.label}</h3>
        <p>${decision.summary}</p>
        <div class="enterprise-renewal-meta">
          <div>
            <strong>${deliverySignal.label}</strong>
            <span>交付信号</span>
          </div>
          <div>
            <strong>${adoptionStatus.label}</strong>
            <span>岗位采纳</span>
          </div>
          <div>
            <strong>${evidenceQuality.label}</strong>
            <span>证据质量</span>
          </div>
        </div>
        <div class="detail-block">
          <strong>交付证据说明</strong>
          <p>${deliverySignal.summary} ${adoptionStatus.note} ${evidenceQuality.note}</p>
        </div>
        <div class="enterprise-renewal-grid">
          <div>
            <strong>页面路线</strong>
            ${tagRow(routePages)}
          </div>
          <div>
            <strong>下载资产</strong>
            ${list(downloadAssets)}
          </div>
          <div>
            <strong>下期交付物</strong>
            ${list(expansionTarget.deliverables)}
          </div>
          <div>
            <strong>Codex 可辅助事项</strong>
            ${list(codexTasks)}
          </div>
          <div>
            <strong>人工确认门槛</strong>
            ${list(manualGates)}
          </div>
          <div>
            <strong>需要补齐</strong>
            ${list(repairTasks)}
          </div>
        </div>
        <div class="enterprise-renewal-output">
          <div>
            <span>下一步动作</span>
            <p>${expansionTarget.nextAction}</p>
          </div>
          <div>
            <span>风险规则</span>
            <p>${riskMode.rule}</p>
          </div>
          <div>
            <span>Codex 扩写任务</span>
            <pre class="prompt-composer-text enterprise-renewal-prompt">${escapeHtml(codexPrompt)}</pre>
          </div>
        </div>
      `;
      if (status) status.textContent = "";
    }

    function setStatus(message) {
      if (status) status.textContent = message;
    }

    fields.forEach((field) => field.addEventListener("change", renderResult));
    copy?.addEventListener("click", async () => {
      if (!currentBrief) return;
      try {
        await navigator.clipboard.writeText(buildEnterpriseRenewalMarkdown(currentBrief, router));
        setStatus("企业续约 Brief 已复制。");
      } catch (error) {
        setStatus("当前浏览器不允许直接复制，请导出 Markdown。");
      }
    });
    download?.addEventListener("click", () => {
      if (!currentBrief) return;
      downloadTextFile(router.exportFilename || "enterprise-renewal-brief-output.md", buildEnterpriseRenewalMarkdown(currentBrief, router), "text/markdown;charset=utf-8");
      setStatus("Markdown 企业续约 Brief 已生成下载。");
    });
    renderResult();
  }

  function buildEnterpriseRenewalMarkdown(brief, router) {
    const { deliverySignal, adoptionStatus, evidenceQuality, expansionTarget, riskMode, score, decision, routePages, downloadAssets, codexTasks, manualGates, repairTasks, codexPrompt } = brief;
    return `# 企业续约与扩展 Brief

- 执行结论：${decision.label}
- 本期评分：${score}
- 推荐路径：${expansionTarget.label}
- 交付信号：${deliverySignal.label}
- 岗位采纳：${adoptionStatus.label}
- 证据质量：${evidenceQuality.label}
- 风险模式：${riskMode.label}

## 当前交付证据
${deliverySignal.summary}
${adoptionStatus.note}
${evidenceQuality.note}

## 页面路线
${routePages.map((item) => `- ${item}`).join("\n")}

## 下载资产
${downloadAssets.map((item) => `- ${item}`).join("\n")}

## 下期交付物
${expansionTarget.deliverables.map((item) => `- ${item}`).join("\n")}

## Codex 可辅助事项
${codexTasks.map((item) => `- ${item}`).join("\n")}

## 人工确认门槛
${manualGates.map((item) => `- ${item}`).join("\n")}

## 需要补齐
${repairTasks.map((item) => `- ${item}`).join("\n")}

## 下一步动作
${expansionTarget.nextAction}

## 风险规则
${riskMode.rule}

## Codex 扩写任务
${codexPrompt}

## 运营规则
${(router.operatingRules || []).map((item) => `- ${item}`).join("\n")}
`;
  }

  function renderEnterpriseImplementationFlow() {
    const target = byId("enterprise-implementation-flow");
    if (!target || !data.enterprise) return;
    target.innerHTML = data.enterprise.implementationFlow
      .map(
        (step) => `
          <article class="lesson-step-card">
            <div class="lesson-step-head">
              <span class="step-number">${step.stage}</span>
              <h3>${step.title}</h3>
            </div>
            <div class="lesson-step-grid three-column">
              <div>
                <strong>负责人</strong>
                <p>${step.owner}</p>
              </div>
              <div>
                <strong>输入</strong>
                <p>${step.input}</p>
              </div>
              <div>
                <strong>输出</strong>
                <p>${step.output}</p>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderEnterpriseReadiness() {
    const target = byId("enterprise-readiness");
    if (!target || !data.enterprise) return;
    target.innerHTML = data.enterprise.readinessChecklist
      .map(
        (checklist) => `
          <article class="info-card">
            <h3>${checklist.title}</h3>
            ${list(checklist.items)}
          </article>
        `
      )
      .join("");
  }

  function renderEnterpriseRiskBoundaries() {
    const target = byId("enterprise-risk-boundaries");
    if (!target || !data.enterprise) return;
    target.innerHTML = `
      <div class="standard-layout">
        <div>
          <p class="eyebrow">Manual Confirmation</p>
          <h3>企业项目不把 AI 包装成自动成交系统</h3>
          <p>Codex 在企业服务里承担整理、生成、检查和提醒角色，关键商业判断仍由企业岗位确认。</p>
        </div>
        ${list(data.enterprise.riskBoundaries)}
      </div>
    `;
  }

  function renderEnterpriseFaqs() {
    const target = byId("enterprise-faq");
    if (!target || !data.enterprise) return;
    target.innerHTML = data.enterprise.faqs
      .map(
        (item) => `
          <article class="info-card">
            <h3>${item.question}</h3>
            <p>${item.answer}</p>
          </article>
        `
      )
      .join("");
  }

  function renderPageHero() {
    const target = byId("page-hero-data");
    if (!target) return;
    const page = target.dataset.page;
    const copy = data.site.pageHeroes[page];
    if (!copy) return;
    target.innerHTML = `
      <p class="eyebrow">${copy.eyebrow}</p>
      <h1>${copy.title}</h1>
      <p class="hero-lede">${copy.description}</p>
      ${tagRow(copy.points)}
    `;
  }

  renderSiteNav();
  renderHomePain();
  renderHomeWorkflow();
  renderHomeToolPreviews();
  renderHomeRiskBoundaries();
  renderHomeStandards();
  renderHomeEntryRouter();
  renderHomeTrialBridge();
  renderHomePublicLessonRoute();
  renderHomeCommercialProofNavigator();
  renderHomeFirstDraftGuide();
  renderPageHero();
  renderSiteMap();
  renderCourse();
  renderCourseDeliveryMetrics();
  renderCourseLearningPath();
  renderCourseClassroomPlan();
  renderCourseCohortPlanner();
  renderCourseDeliveryBlueprint();
  renderCourseModuleLinkageDesk();
  renderCourseHomeworkRubric();
  renderCourseTeachingChecklist();
  renderCase();
	  renderCaseNarrative();
	  renderCaseOperations();
	  renderCaseClassroomFlow();
  renderCaseStandardLessonPack();
  renderCaseSpeakerScriptPack();
	  renderIntegratedHouseDemoCommand();
	  renderCaseToolHandoff();
  renderCaseToolchainCloseout();
	  renderCaseTeachingScript();
	  renderCaseQuoteBoard();
  renderCaseOrderTimeline();
  renderCaseDocumentCheck();
  renderCaseCenterMetrics();
  renderCaseLibrary();
  renderCaseBuildStandards();
  renderCaseReadinessBoard();
  renderCaseReplicationPlanner();
  renderCaseSprintCommandCenter();
  renderCaseFieldReplacementValidation();
  renderCasePublicationRouter();
  renderCaseReplicationKit();
  renderCasePlatformLinks();
  renderCaseExpansionRoadmap();
  renderTools();
  renderInteractiveToolDemo();
  renderToolBuildSpecs();
  renderToolIntakeBoard();
  renderToolProductizationBriefBuilder();
  renderToolLaunchBoard();
  renderToolClassroomAcceptanceBoard();
  renderToolSampleValidationBoard();
	  renderToolMockups();
	  renderPromptMetrics();
	  renderPromptWorkflow();
  renderPromptComposer();
  renderPromptDeploymentDesk();
  renderPromptPerformanceReviewRouter();
  renderPromptPacks();
  renderPromptGovernanceBoard();
	  renderPrompts();
  renderResourceFunnel();
  renderResourceFinder();
  renderResources();
  renderResourceDetails();
  renderResourceRequestRouter();
  renderResourceLeadTaggingBoard();
  renderResourceFollowupDesk();
  renderResourceConversionReviewRouter();
  renderResourceFaqs();
	  renderEnrollmentMetrics();
  renderEnrollmentAudiencePaths();
	  renderEnrollmentPackages();
  renderEnrollmentSalesDesk();
  renderEnrollmentTrialFollowup();
  renderEnrollmentConversionCommandCenter();
  renderEnrollmentDecisionTool();
  renderEnrollmentOfferBriefBuilder();
  renderEnrollmentProofDesk();
  renderEnrollmentOutcomeProof();
  renderEnrollmentToolchainProofDesk();
  renderEnrollmentShowcaseProofRouter();
  renderEnrollmentApplicationProofRouter();
  renderEnrollmentHandoffDesk();
  renderEnrollmentLearningPath();
  renderEnrollmentOutcomes();
  renderEnrollmentQualification();
  renderEnrollmentConcerns();
  renderClassroomMetrics();
  renderClassroomRunbook();
  renderClassroomSystemLessonRoute();
  renderClassroomLessonBuilder();
  renderClassroomDemoSwitchboard();
  renderClassroomExecutionDesk();
  renderClassroomInstructorReplication();
  renderClassroomRehearsalGate();
  renderClassroomAssignmentPipeline();
  renderClassroomReviewDesk();
  renderClassroomModuleHandoffs();
  renderClassroomQa();
  renderClassroomMaintenance();
  renderClassroomBoundaries();
  renderLearningMetrics();
  renderLearningPaths();
  renderLearningOnboardingDesk();
  renderLearningRoadmap();
  renderLearningDeliverables();
  renderLearningSubmissionRules();
  renderLearningSystemHandoff();
  renderLearningToolchainAssignment();
  renderLearningFinalPortfolio();
  renderLearningPortfolioPackage();
  renderLearningDeliverableEvidenceLibrary();
  renderLearningPortfolioBriefBuilder();
  renderLearningApplicationReviewRouter();
  renderLearningCommonFixes();
  renderLearningBoundaries();
  renderAutomationMetrics();
  renderAutomationWorkflowMap();
  renderAutomationLevels();
  renderAutomationScopeRouter();
  renderAutomationToolPriority();
  renderAutomationImplementationFlow();
  renderAutomationRiskGates();
  renderAutomationIntegratedHouse();
  renderMarketingMetrics();
  renderMarketingFunnel();
  renderMarketingDailyOpsDesk();
  renderMarketingChannels();
  renderMarketingCalendar();
  renderMarketingAssetFactory();
  renderMarketingProofCampaignRouter();
  renderMarketingCampaignBriefBuilder();
  renderMarketingWebinarScript();
  renderMarketingRepurpose();
  renderMarketingMetricsBoard();
  renderMarketingClaimBoundaries();
  renderPlaybookMetrics();
  renderPlaybookFirstDraftLaunchDesk();
  renderPlaybookVisualQaGate();
  renderPlaybookPlatformHealthAuditDesk();
  renderPlaybookAuditRemediationRouter();
  renderPlaybookRemediationReviewDesk();
  renderPlaybookOperatingConsole();
  renderPlaybookToolSprintCommandCenter();
  renderPlaybookGoalMatrix();
  renderPlaybookEvidenceCoverageIndex();
  renderPlaybookGoalSelfCheck();
  renderPlaybookReleaseBoard();
  renderPlaybookReleaseWritebackRouter();
  renderPlaybookMaintenanceLogBuilder();
  renderPlaybookVersionReview();
  renderPlaybookDataGovernance();
  renderPlaybookCommercialPackaging();
  renderPlaybookCommercialOfferReview();
  renderPlaybookPrinciples();
	  renderPlaybookStandards();
	  renderPlaybookOperatingFlow();
	  renderPlaybookMaintenanceCadence();
	  renderPlaybookContentOps();
	  renderPlaybookChecklists();
  renderPlaybookRoadmap();
  renderEnterprise();
  renderEnterpriseMetrics();
  renderEnterpriseDiagnosis();
  renderEnterpriseDiagnosisRouter();
  renderEnterpriseDiagnosisBriefBuilder();
  renderEnterpriseLearnerSignalIntake();
  renderEnterpriseToolchainSignalIntake();
  renderEnterpriseProposalApprovalDesk();
  renderEnterpriseProjectKickoffDesk();
  renderEnterpriseIntakeKit();
  renderEnterpriseTrainingPlanMapper();
  renderEnterpriseDeliveryBoard();
  renderEnterpriseDeliveryWritebackRouter();
  renderEnterpriseRenewalRouter();
  renderEnterpriseImplementationFlow();
  renderEnterpriseReadiness();
  renderEnterpriseRiskBoundaries();
  renderEnterpriseFaqs();
  alignHashTarget();
  window.addEventListener("hashchange", alignHashTarget);
})();
