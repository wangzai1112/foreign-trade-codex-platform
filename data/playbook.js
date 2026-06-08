window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.playbook = {
  metrics: [
    {
      value: "14",
      label: "长期平台入口",
      detail: "首页、课程、课堂、学员、自动化、案例、集成房屋案例、工具、指令、资源、报名、推广、企业服务和运营指南"
    },
    {
      value: "14",
      label: "内容数据层",
      detail: "首页、课程、课堂、学员、自动化、案例、集成房屋案例、工具、指令、资源、报名、推广、企业和运营指南分文件维护"
    },
    {
      value: "5",
      label: "上线检查口",
      detail: "业务场景、工具输出、网页承载、资料脱敏授权、人工确认边界、转化动作必须齐全"
    },
    {
      value: "1",
      label: "首套完整案例",
      detail: "以集成房屋出口作为课程、资源和工具演示的共同样板"
    }
  ],
  firstDraftLaunchDownloads: [
    {
      label: "下载初稿发布就绪表 CSV",
      href: "./downloads/first-draft-launch-readiness-board.csv",
      format: "CSV",
      note: "用于内部评审、公开预览、试听课、报名咨询和企业演示前逐项确认页面、证据、UI、下载和边界。"
    },
    {
      label: "下载初稿发布 Brief 模板 MD",
      href: "./downloads/first-draft-launch-brief-template.md",
      format: "Markdown",
      note: "用于记录初稿发布范围、可展示页面、不可承诺事项、验证截图、负责人和下一步回写。"
    }
  ],
  firstDraftLaunchDesk: {
    title: "初稿发布就绪台",
    description:
      "把当前网站初稿按发布场景、证据水平、UI 状态、商业边界和下一步动作打分，判断是进入内部评审、公开预览、试听课、报名咨询，还是先返修。",
    exportFilename: "first-draft-launch-brief-output.md",
    defaults: {
      launchScenario: "trial-class",
      evidenceLevel: "cross-page-linked",
      uiStatus: "desktop-mobile-checked",
      commercialBoundary: "sales-ready-boundary",
      nextAction: "trial-class-run"
    },
    launchScenarios: [
      {
        id: "internal-review",
        label: "内部团队评审",
        score: 6,
        purpose: "给课程、运营、顾问、助教和企业服务负责人看结构是否完整。",
        audience: "内部团队",
        output: "问题清单、角色分工、返修优先级和下一版范围。",
        owner: "负责人 + 内容负责人",
        pageRoute: ["index.html", "course.html", "playbook.html"]
      },
      {
        id: "public-preview",
        label: "公开预览",
        score: 7,
        purpose: "给社群或潜在学员看课程方向、主案例、工具样例和资源入口。",
        audience: "潜在学员",
        output: "公开预览链接、资源入口、反馈表和不承诺边界。",
        owner: "市场运营 + 课程顾问",
        pageRoute: ["index.html", "resources.html", "cases.html", "tools.html"]
      },
      {
        id: "trial-class",
        label: "试听课演示",
        score: 8,
        purpose: "用集成房屋询盘识别或报价结构演示课程真实业务价值。",
        audience: "试听课学员",
        output: "试听课脚本、演示页面、跟进资源和报名咨询问题。",
        owner: "主讲老师 + 课程顾问",
        pageRoute: ["classroom.html", "case-integrated-house.html", "tools.html", "enrollment.html"]
      },
      {
        id: "enrollment-consultation",
        label: "报名咨询",
        score: 8,
        purpose: "让顾问围绕交付物、开班排期、学员顾虑和人工边界讲清报名价值。",
        audience: "报名咨询用户",
        output: "咨询证据地图、开班 Brief、顾虑回应和付款前确认边界。",
        owner: "课程顾问 + 班主任",
        pageRoute: ["enrollment.html", "course.html", "learning.html", "playbook.html"]
      },
      {
        id: "enterprise-demo",
        label: "企业演示",
        score: 7,
        purpose: "给企业负责人展示课程如何转成团队内训、SOP 和工具共建。",
        audience: "企业负责人",
        output: "企业诊断入口、资料清单、样板演示和交付验收边界。",
        owner: "企业服务负责人",
        pageRoute: ["enterprise.html", "automation.html", "tools.html", "playbook.html"]
      }
    ],
    evidenceLevels: [
      {
        id: "structure-ready",
        label: "结构已成型",
        score: 5,
        proof: "14 个页面、导航、数据文件和基础下载已经存在。",
        gap: "还需要用关键页面截图和用户路径验证展示效果。",
        downloadFocus: ["platform-release-audit.csv", "content-maintenance-log.csv"]
      },
      {
        id: "cross-page-linked",
        label: "跨页面已联动",
        score: 8,
        proof: "课程、课堂、案例、工具、指令、资源、报名和企业服务能互相路由。",
        gap: "继续检查不同角色进入后的下一步是否清楚。",
        downloadFocus: ["homepage-entry-routing-board.csv", "course-module-linkage-map.csv", "course-cohort-delivery-plan.csv"]
      },
      {
        id: "integrated-house-complete",
        label: "主案例可演示",
        score: 8,
        proof: "集成房屋案例已覆盖产品、询盘、报价、订单、单证和风险演示。",
        gap: "真实商业展示时仍需说明案例是教学样例，不代表真实报价或真实客户承诺。",
        downloadFocus: ["integrated-house-toolkit.csv", "integrated-house-demo-command-board.csv"]
      },
      {
        id: "downloads-verified",
        label: "下载资产已验证",
        score: 9,
        proof: "关键 CSV/MD 下载资产可访问，并在 README 和发布看板中维护。",
        gap: "后续每次新增资产仍需同步 README、发布看板和 HTTP 检查。",
        downloadFocus: ["platform-release-audit.csv", "release-writeback-routing-board.csv"]
      },
      {
        id: "weak-evidence",
        label: "证据仍偏弱",
        score: 2,
        proof: "页面存在，但缺少截图、演示路径、下载资产或人工边界证明。",
        gap: "不能进入公开预览、试听课或招生咨询，先补页面证据和验证记录。",
        downloadFocus: ["audit-remediation-routing-board.csv", "audit-remediation-brief-template.md"]
      }
    ],
    uiStatuses: [
      {
        id: "unchecked",
        label: "未做 UI 检查",
        score: 1,
        requirement: "需要至少检查桌面端、手机端、关键控件、下载按钮和横向溢出。",
        repair: "先跑浏览器截图和移动端验证，再允许对外展示。"
      },
      {
        id: "desktop-reviewed",
        label: "桌面端已看",
        score: 5,
        requirement: "适合内部评审，但还不能证明手机端、社群用户和移动咨询场景可用。",
        repair: "继续补 390px 手机端、按钮和下载行为检查。"
      },
      {
        id: "desktop-mobile-checked",
        label: "桌面与手机已检查",
        score: 8,
        requirement: "可用于初稿预览和试听课演示，但对外招生前仍需确认承诺边界。",
        repair: "保留截图路径、验证结论和下次 UI 复查窗口。"
      },
      {
        id: "interaction-verified",
        label: "交互与导出已验证",
        score: 9,
        requirement: "关键工作台已验证下拉、复制、导出、HTTP 和控制台状态。",
        repair: "可进入公开预览或咨询证据，但仍需运营负责人批准商业话术。"
      }
    ],
    commercialBoundaries: [
      {
        id: "draft-only",
        label: "仅内部初稿",
        score: 3,
        allowedUse: "只能内部评审和收集修改意见。",
        noGo: "不能发给潜在学员、不能作为报名页证据、不能进入企业演示。"
      },
      {
        id: "public-proof-limited",
        label: "公开样例有限展示",
        score: 6,
        allowedUse: "可以展示集成房屋教学样例、工具思路和资源入口。",
        noGo: "不能展示未授权学员作业、企业资料、真实价格、成本、合同和客户信息。"
      },
      {
        id: "sales-ready-boundary",
        label: "报名咨询边界清楚",
        score: 8,
        allowedUse: "可以用于试听课跟进和报名咨询，重点讲课程交付物、开班排期和人工确认边界。",
        noGo: "不能承诺自动成交、自动报价、询盘数量、业绩提升或替代业务负责人。"
      },
      {
        id: "enterprise-approval",
        label: "企业审批后展示",
        score: 5,
        allowedUse: "只适合企业诊断或内部演示，展示前确认 scope、资料权限和岗位责任。",
        noGo: "不能把企业内部资料转为公开课、招生页或通用资源样例。"
      }
    ],
    nextActions: [
      {
        id: "internal-audit",
        label: "进入内部评审",
        score: 4,
        action: "召集课程、运营、顾问、助教和企业服务负责人按页面逐项评审。",
        route: ["playbook.html", "README.md"],
        owner: "负责人"
      },
      {
        id: "public-preview",
        label: "发布公开预览",
        score: 6,
        action: "开放首页、课程页、资源页和集成房屋样例，收集用户反馈。",
        route: ["index.html", "resources.html", "cases.html"],
        owner: "市场运营"
      },
      {
        id: "trial-class-run",
        label: "安排试听课",
        score: 7,
        action: "用课堂工作台和集成房屋询盘识别演示，课后进入报名咨询。",
        route: ["classroom.html", "case-integrated-house.html", "enrollment.html"],
        owner: "主讲老师 + 课程顾问"
      },
      {
        id: "enrollment-ready",
        label: "进入报名咨询",
        score: 8,
        action: "让顾问按学员顾虑、开班排期、交付物和付款前边界进行咨询。",
        route: ["enrollment.html", "course.html", "learning.html"],
        owner: "课程顾问 + 班主任"
      },
      {
        id: "enterprise-handoff",
        label: "转企业演示",
        score: 7,
        action: "准备企业诊断资料清单、演示范围、岗位责任和验收方式。",
        route: ["enterprise.html", "automation.html", "playbook.html"],
        owner: "企业服务负责人"
      },
      {
        id: "version-writeback",
        label: "回写版本池",
        score: 5,
        action: "把评审问题、UI 截图、下载缺口和下一版内容写回维护日志。",
        route: ["playbook.html"],
        owner: "内容负责人 + 开发负责人"
      }
    ],
    checklistGroups: [
      {
        gate: "页面证据",
        checks: ["首页角色入口清楚", "课程页能说明学什么和怎么交付", "案例页能跑通集成房屋演示", "工具页有可见输出"]
      },
      {
        gate: "商业转化",
        checks: ["报名路径能回应顾虑", "资源领取有后续跟进", "开班排期和交付范围清楚", "企业服务有诊断入口"]
      },
      {
        gate: "UI 与交互",
        checks: ["桌面端可读", "手机端无横向溢出", "关键工作台可切换", "下载/复制按钮可用"]
      },
      {
        gate: "人工边界",
        checks: ["价格、交期、认证、清关、税费、法务和合同不自动承诺", "公开展示材料有脱敏和授权", "企业资料不外用"]
      }
    ],
    operatingRules: [
      "初稿可以先进入内部评审，但公开预览、试听课和招生咨询必须有可展示页面、下载资产、UI 检查和边界说明。",
      "对外展示优先使用集成房屋教学样例，不使用未授权学员作业或企业资料。",
      "报名咨询只能承诺课程交付物、工具辅助、作业验收和开班节奏，不能承诺成交、询盘数量或替代业务判断。",
      "每次初稿发布都要记录截图、验证命令、可展示页面、不可承诺事项和下一步回写位置。",
      "发现 UI 溢出、下载失效、页面空白或承诺边界不清时，先返修再发布。"
    ]
  },
  visualQaGate: {
    title: "视觉风格与响应式发布验收台",
    description:
      "用于每次新增页面、工具、资源、销售入口或企业服务模块后，把视觉风格、桌面/手机布局、关键交互、下载入口和人工边界转成可记录的发布验收 Brief。",
    exportFilename: "platform-visual-qa-brief-output.md",
    downloads: [
      {
        label: "下载视觉响应式验收表 CSV",
        href: "./downloads/platform-visual-qa-gate.csv",
        format: "CSV",
        note: "用于记录页面、视口、风格、交互、溢出、控制台和发布结论。"
      },
      {
        label: "下载视觉验收 Brief 模板 MD",
        href: "./downloads/platform-visual-qa-brief-template.md",
        format: "Markdown",
        note: "用于发布前、公开课前、企业演示前记录截图证据和返修动作。"
      }
    ],
    defaults: {
      releaseContext: "trial-demo",
      pageArea: "playbook",
      viewportRisk: "desktop-mobile",
      contentRisk: "dense-decision",
      evidenceState: "browser-checked",
      releaseAction: "release-with-log"
    },
    releaseContexts: [
      {
        id: "internal-review",
        label: "内部评审",
        score: 8,
        purpose: "给课程、运营、开发、顾问和企业服务团队看结构、视觉和页面证据。",
        requiredProof: ["桌面截图", "关键模块 DOM 渲染", "下载入口可见"],
        owner: "开发负责人 + 内容负责人",
        noGo: "不能把内部评审截图直接当成公开招生素材。"
      },
      {
        id: "public-preview",
        label: "公开预览",
        score: 12,
        purpose: "给社群、潜在学员或公开课报名页展示课程方向、主案例和工具输出。",
        requiredProof: ["桌面截图", "手机截图", "资源下载链接", "无横向溢出"],
        owner: "市场运营 + 课程顾问",
        noGo: "公开预览不能展示未授权学员作业、企业资料、真实价格或成交暗示。"
      },
      {
        id: "trial-demo",
        label: "试听课演示",
        score: 14,
        purpose: "老师在课堂中切换首页、案例、工具、报名或资源页面进行演示。",
        requiredProof: ["桌面 1280px 验收", "手机 390px 验收", "关键交互可用", "控制台无错误"],
        owner: "主讲老师 + 开发负责人",
        noGo: "试听课演示不能用空白模块、失效下载或未验收交互作为课程能力证明。"
      },
      {
        id: "enrollment-consultation",
        label: "报名咨询",
        score: 13,
        purpose: "课程顾问按页面证据讲清交付物、边界、开班资料和付款前确认。",
        requiredProof: ["报名路径页面", "交付证据模块", "商业边界模块", "移动端咨询可读"],
        owner: "课程顾问 + 运营负责人",
        noGo: "不能用视觉包装替代真实交付证据，不能承诺自动成交或自动报价。"
      },
      {
        id: "enterprise-demo",
        label: "企业演示",
        score: 12,
        purpose: "向企业负责人展示诊断、内训、工具/SOP 共建和验收闭环。",
        requiredProof: ["企业页关键模块", "Scope 与验收入口", "资料授权边界", "桌面投屏可读"],
        owner: "企业服务负责人 + 开发负责人",
        noGo: "企业演示不能展示其他企业资料、真实客户信息、合同、成本或内部 SOP。"
      }
    ],
    pageAreas: [
      {
        id: "home-enrollment",
        label: "首页与报名路径",
        score: 14,
        routePages: ["index.html", "enrollment.html", "resources.html"],
        dataFiles: ["data/home.js", "data/enrollment.js", "data/site.js"],
        visualFocus: "角色入口、商业证据、试听课、报名咨询和资源 CTA 要清楚，移动端按钮不能换行挤压。",
        manualCheck: "课程顾问确认页面证据不夸大成果和成交。"
      },
      {
        id: "course-classroom",
        label: "课程与课堂交付",
        score: 16,
        routePages: ["course.html", "classroom.html", "case-integrated-house.html"],
        dataFiles: ["data/course-foreign-trade-codex.js", "data/classroom.js", "data/case-integrated-house.js"],
        visualFocus: "课程模块、课堂 runbook、演示切换和集成房屋案例要能被老师投屏讲清。",
        manualCheck: "主讲老师确认课堂顺序、讲法和人工边界。"
      },
      {
        id: "tools-prompts",
        label: "工具与指令库",
        score: 17,
        routePages: ["tools.html", "tools.html#tool-sample-validation-board", "prompts.html"],
        dataFiles: ["data/tools.js", "data/prompts.js", "assets/app.js"],
        visualFocus: "交互工具、复制导出、指令结果和真实样例验收要无重叠、无横向溢出、控件可点。",
        manualCheck: "产品负责人确认工具输出不替代人工判断。"
      },
      {
        id: "enterprise",
        label: "企业服务入口",
        score: 15,
        routePages: ["enterprise.html", "automation.html", "playbook.html#playbook-commercial-offer-review"],
        dataFiles: ["data/enterprise.js", "data/automation.js", "data/playbook.js"],
        visualFocus: "企业诊断、Scope、方案审批、交付验收和续费复盘要适合企业会议投屏。",
        manualCheck: "企业服务负责人确认资料授权、scope、报价和验收责任。"
      },
      {
        id: "playbook",
        label: "运营指南与治理工具",
        score: 18,
        routePages: ["playbook.html", "playbook.html#playbook-visual-qa-gate", "playbook.html#playbook-evidence-coverage-index"],
        dataFiles: ["data/playbook.js", "assets/app.js", "assets/styles.css", "README.md"],
        visualFocus: "决策器、审计台、证据索引和下载入口要支撑长期维护，不因卡片密集导致阅读断层。",
        manualCheck: "负责人确认验收记录、README、下载资产和缓存版本同步。"
      }
    ],
    viewportRisks: [
      {
        id: "desktop-only",
        label: "仅桌面可见",
        score: 4,
        check: "只适合内部投屏，不能证明手机咨询、社群访问和移动资源下载可用。",
        requiredViewports: ["1280x900"],
        repair: "补 390x844 手机端和关键按钮检查。"
      },
      {
        id: "desktop-mobile",
        label: "桌面与手机双端",
        score: 12,
        check: "覆盖桌面投屏和手机咨询场景，适合公开预览、试听课或报名咨询。",
        requiredViewports: ["1280x900", "390x844"],
        repair: "保留无横向溢出和关键模块渲染记录。"
      },
      {
        id: "interaction-heavy",
        label: "交互密集页面",
        score: 10,
        check: "需要验证下拉、按钮、复制、导出、结果区和状态提示。",
        requiredViewports: ["1280x900", "390x844", "核心交互路径"],
        repair: "交互失败或结果区空白时不能对外演示。"
      },
      {
        id: "mobile-risk",
        label: "移动端高风险",
        score: 2,
        check: "长表格、长标签、密集卡片或多列控件可能导致溢出、遮挡或按钮不可读。",
        requiredViewports: ["390x844", "375x812"],
        repair: "先改单列、换行、overflow-wrap 和控件尺寸。"
      }
    ],
    contentRisks: [
      {
        id: "standard-content",
        label: "标准内容",
        score: 10,
        focus: "普通卡片、短段落和下载入口，按标准页面验收即可。",
        repair: "若无下载入口或边界说明，需要补资源承接。"
      },
      {
        id: "dense-decision",
        label: "密集决策器",
        score: 8,
        focus: "包含多下拉、多标签、结果网格、长边界文案和导出按钮。",
        repair: "重点检查按钮换行、标签挤压、结果区长文本和移动端单列。"
      },
      {
        id: "table-heavy",
        label: "表格密集",
        score: 6,
        focus: "包含数据表、索引表、长文件名或下载清单。",
        repair: "需要确认表格横向滚动在容器内，不带来页面级横向溢出。"
      },
      {
        id: "commercial-proof",
        label: "商业证据敏感",
        score: 5,
        focus: "涉及招生、付款、企业签约、成果展示或营销证据。",
        repair: "视觉通过后仍需确认不夸大承诺、授权范围和人工边界。"
      }
    ],
    evidenceStates: [
      {
        id: "not-checked",
        label: "未验收",
        score: 0,
        gate: "不能发布",
        proof: "还没有运行脚本、HTTP 或浏览器检查。",
        repair: "先跑 node scripts/verify-platform.mjs --http，并完成桌面/移动端浏览器检查。"
      },
      {
        id: "script-only",
        label: "仅脚本通过",
        score: 6,
        gate: "内部可继续",
        proof: "语法、引用、下载和 HTTP 通过，但缺少真实渲染和移动端证据。",
        repair: "补浏览器 DOM、控制台、溢出和关键交互检查。"
      },
      {
        id: "browser-checked",
        label: "浏览器已验收",
        score: 14,
        gate: "可进入发布",
        proof: "脚本、HTTP、桌面、手机、下载入口和控制台已检查。",
        repair: "把结果写入发布 Brief、README 或维护日志。"
      },
      {
        id: "needs-repair",
        label: "发现返修项",
        score: 2,
        gate: "先返修",
        proof: "存在页面空白、横向溢出、按钮不可读、控制台错误、下载失效或承诺边界缺失。",
        repair: "修复后重新跑完整验收。"
      }
    ],
    releaseActions: [
      {
        id: "repair-before-release",
        label: "返修后再发布",
        score: 0,
        action: "修复视觉、布局、交互、下载或边界问题后重新验收。",
        output: "返修清单、负责人、复查时间。",
        owner: "开发负责人 + 内容负责人"
      },
      {
        id: "internal-log",
        label: "内部记录",
        score: 4,
        action: "记录当前可读性和剩余问题，只用于内部评审。",
        output: "内部截图、缺口清单、下一版任务。",
        owner: "开发负责人"
      },
      {
        id: "release-with-log",
        label: "发布并写维护日志",
        score: 10,
        action: "发布当前模块，并同步维护日志、README、下载资产和缓存版本。",
        output: "发布说明、验收记录、下一次复查窗口。",
        owner: "开发负责人 + 运营负责人"
      },
      {
        id: "public-demo-ready",
        label: "可公开演示",
        score: 12,
        action: "允许进入公开预览、试听课、报名咨询或企业演示，但保留人工承诺边界。",
        output: "演示页清单、截图证据、禁止承诺口径。",
        owner: "负责人 + 使用场景负责人"
      }
    ],
    operatingRules: [
      "视觉验收必须同时检查商务简约风格、液态毛玻璃一致性、页面可读性、移动端单列和按钮可用性。",
      "脚本通过不等于发布完成，新增前端模块必须用浏览器确认桌面、手机、控制台、下载入口和页面级横向溢出。",
      "表格可以在容器内横向滚动，但页面本身不能出现横向溢出或文本遮挡。",
      "涉及招生、付款、企业签约或成果展示的页面，视觉通过后仍需人工确认承诺边界和资料授权。",
      "每次视觉验收结论要回写到发布 Brief、资源下载或维护日志，作为下次扩展的证据。"
    ]
  },
  platformHealthAuditDesk: {
    title: "平台健康审计与证据台",
    description:
      "用于每周、每月、季度或发布前检查培训公司平台是否仍符合长期 goal：招生能转化、课程能交付、课堂能演示、案例能复制、工具能迭代、指令能治理、资源能承接、企业服务能验收、运营能回写。",
    exportFilename: "platform-health-audit-output.md",
    downloads: [
      {
        label: "下载平台健康审计表 CSV",
        href: "./downloads/platform-health-audit-board.csv",
        format: "CSV",
        note: "用于按平台模块记录证据页面、数据文件、下载资产、负责人、Codex 任务、人工确认和整改动作。"
      },
      {
        label: "下载健康审计记录模板 MD",
        href: "./downloads/platform-health-audit-template.md",
        format: "Markdown",
        note: "用于季度审计、发布前检查、团队复盘和对外展示证据整理。"
      }
    ],
    defaults: {
      auditArea: "tools",
      evidenceStatus: "partial",
      riskFocus: "manual-boundary",
      auditCadence: "monthly",
      correctiveAction: "tool-sprint"
    },
    auditAreas: [
      {
        id: "admissions",
        label: "招生转化",
        score: 24,
        owner: "运营负责人 + 课程顾问",
        proofPages: ["index.html", "resources.html", "marketing.html", "enrollment.html"],
        dataFiles: ["data/home.js", "data/site.js", "data/marketing.js", "data/enrollment.js"],
        downloadFamilies: ["homepage-entry-routing-board.csv", "public-lesson-route-board.csv", "resource-lead-tagging-board.csv", "enrollment-showcase-proof-router.csv", "enrollment-showcase-authorization-checklist.md", "enrollment-application-proof-router.csv", "enrollment-application-proof-brief-template.md", "marketing-proof-campaign-router.csv", "marketing-proof-campaign-brief-template.md", "enrollment-conversion-command-center.csv"],
        evidence:
          "角色入口、资源领取、公开课跟进、顾虑证据、咨询分流和入班交接能说明学员为什么报课、担心什么、下一步如何进入课程。",
        codexTasks: ["汇总咨询顾虑", "匹配证据页面", "生成试听课跟进 Brief", "检查宣传承诺边界"],
        manualChecks: ["报名承诺是否越界", "线索是否适合系统课或企业诊断", "付款和交付范围是否确认"],
        nextUpgrade: "补高频顾虑证据、结果展示边界和试听课后的 0-7 天跟进记录。"
      },
      {
        id: "course",
        label: "课程交付",
        score: 26,
        owner: "主讲老师 + 课程运营",
        proofPages: ["course.html", "classroom.html", "learning.html"],
        dataFiles: ["data/course-foreign-trade-codex.js", "data/classroom.js", "data/learning.js"],
        downloadFamilies: ["course-delivery-blueprint.csv", "course-cohort-delivery-plan.csv", "course-cohort-brief-template.md", "integrated-house-system-lesson-route.csv", "system-lesson-delivery-brief-template.md", "system-lesson-assignment-handoff-board.csv", "system-lesson-homework-submission-brief.md", "lesson-runbook-template.md", "assignment-review-scorecard.csv"],
        evidence:
          "课程模块、单节课 runbook、作业验收、学员交付物和最终作品包能形成从上课到复用的交付闭环。",
        codexTasks: ["生成单节课讲义", "整理作业返修建议", "提炼课堂卡点", "生成学员作品包装 Brief"],
        manualChecks: ["课程节奏是否适合学员水平", "作业是否真实可验收", "关键外贸判断是否由老师确认"],
        nextUpgrade: "把每个模块的输入资料、演示动作、作业模板和验收标准继续网页化。"
      },
      {
        id: "classroom",
        label: "课堂演示",
        score: 23,
        owner: "主讲老师 + 助教",
        proofPages: ["classroom.html", "case-integrated-house.html", "tools.html", "tools.html#tool-classroom-acceptance-board"],
        dataFiles: ["data/classroom.js", "data/case-integrated-house.js", "data/tools.js"],
        downloadFamilies: ["classroom-delivery-desk.csv", "integrated-house-system-lesson-route.csv", "system-lesson-delivery-brief-template.md", "system-lesson-assignment-handoff-board.csv", "system-lesson-homework-submission-brief.md", "instructor-delivery-certification.csv", "teaching-observation-review.md", "classroom-rehearsal-gate-board.csv", "public-lesson-route-brief-template.md", "tool-classroom-acceptance-board.csv", "tool-classroom-acceptance-brief-template.md"],
        evidence:
          "课堂工作台、演示切换、讲师复制、作业返修和课后复盘能让不同老师按同一口径讲出工具价值和人工边界。",
        codexTasks: ["生成课堂演示脚本", "整理答疑摘要", "提取讲师提醒", "更新教学观察记录"],
        manualChecks: ["老师是否能现场解释工具输出", "学员资料是否脱敏", "公开展示是否授权"],
        nextUpgrade: "继续把高频课堂片段沉淀为可复制演示脚本和老师验收卡。"
      },
      {
        id: "case-system",
        label: "案例中心",
        score: 24,
        owner: "行业顾问 + 内容负责人",
        proofPages: ["cases.html", "cases.html#case-field-replacement-validation", "cases.html#case-publication-router", "case-integrated-house.html", "course.html"],
        dataFiles: ["data/cases.js", "data/case-integrated-house.js", "data/course-foreign-trade-codex.js"],
        downloadFamilies: ["integrated-house-toolkit.csv", "industry-case-intake.csv", "industry-case-readiness-scorecard.csv", "industry-case-field-replacement-board.csv", "industry-case-field-replacement-brief-template.md", "industry-case-publication-router.csv", "industry-case-publication-brief-template.md"],
        evidence:
          "集成房屋样板已贯穿产品资料、询盘、报价、订单、单证和付款风险，机械设备相邻行业已进入字段替换验证，案例发布路由已补齐资源化、企业诊断和内部归档边界。",
        codexTasks: ["生成行业字段缺口表", "提炼案例讲解脚本", "输出复制行业准入评分", "生成字段替换复盘", "整理案例 sprint 计划", "生成案例发布 Brief"],
        manualChecks: ["行业样例是否真实可讲", "字段替换是否有证据", "报价和合规是否需要专业确认", "是否允许公开展示", "是否锁定发布授权范围"],
        nextUpgrade: "继续补机械设备脱敏询盘、报价结构和售后条款，再评估是否进入完整案例页。"
      },
      {
        id: "tools",
        label: "工具中心",
        score: 27,
        owner: "产品负责人 + 开发负责人",
        proofPages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "tools.html#tool-sample-validation-board", "automation.html", "playbook.html"],
        dataFiles: ["data/tools.js", "data/automation.js", "data/playbook.js", "assets/app.js"],
        downloadFamilies: ["tool-build-brief-template.csv", "tool-demand-scorecard.csv", "tool-sprint-command-center.csv", "tool-classroom-acceptance-board.csv", "tool-classroom-acceptance-brief-template.md", "tool-sample-validation-board.csv", "tool-sample-validation-brief-template.md"],
        evidence:
          "工具库已覆盖产品资料、客户线索、询盘、报价、订单、单证和付款风险，并能继续进入产品化 brief、课堂验收、真实样例替换、sprint 和发布回写。",
        codexTasks: ["生成工具需求评分", "输出开发 Brief", "整理验收清单", "生成样例替换复盘", "生成版本回写记录"],
        manualChecks: ["工具是否来自重复业务动作", "是否有默认样例和导出结果", "真实样例是否脱敏授权", "风险类结果是否需要人工审批"],
        nextUpgrade: "优先把高频作业模板升级为可交互工具，再用学员或企业脱敏样例完成替换验收。"
      },
      {
        id: "prompts",
        label: "指令库",
        score: 22,
        owner: "课程老师 + 内容负责人",
        proofPages: ["prompts.html", "classroom.html", "tools.html"],
        dataFiles: ["data/prompts.js", "data/course-foreign-trade-codex.js", "data/tools.js"],
        downloadFamilies: ["integrated-house-prompt-pack.md", "prompt-quality-checklist.csv", "prompt-deployment-routing-board.csv", "prompt-deployment-brief-template.md", "prompt-governance-board.csv"],
        evidence:
          "指令库能说明适用模块、输入资料、输出结果、课堂顺序、质量检查、行业替换和人工确认边界。",
        codexTasks: ["优化提示词结构", "生成行业替换版", "检查输出质量", "维护指令版本记录"],
        manualChecks: ["指令是否依赖真实资料", "是否误导学员跳过人工判断", "是否保留质量检查标准"],
        nextUpgrade: "把高频课堂指令和工具字段绑定，减少学员只复制提示词却不会判断输入的情况。"
      },
      {
        id: "resources",
        label: "资源中心",
        score: 23,
        owner: "市场运营 + 内容负责人",
        proofPages: ["resources.html", "resources.html#resource-conversion-review", "marketing.html", "enrollment.html"],
        dataFiles: ["data/site.js", "data/marketing.js", "data/enrollment.js"],
        downloadFamilies: ["resource-lead-tagging-board.csv", "resource-follow-up-sequence.csv", "resource-lead-routing-playbook.md", "resource-conversion-review-router.csv", "resource-conversion-review-brief-template.md"],
        evidence:
          "资源下载、线索标签、跟进序列、7 天转化复盘和课程/企业服务承接能让免费资料成为招生和企业诊断入口。",
        codexTasks: ["生成领取用户标签", "整理后续跟进话术", "匹配资源和试听课", "更新资源承接说明", "生成 7 天转化复盘 Brief"],
        manualChecks: ["资源是否真的解决用户痛点", "后续跟进是否过度营销", "用户是否适合报名或企业诊断", "样例授权和联系频率是否确认"],
        nextUpgrade: "后续接入真实表单、CRM 或私域记录时，把 7 天复盘结果回写到报名、资源和企业服务页面。"
      },
      {
        id: "enterprise",
        label: "企业服务",
        score: 25,
        owner: "企业服务负责人 + 交付负责人",
        proofPages: ["enterprise.html", "tools.html", "playbook.html"],
        dataFiles: ["data/enterprise.js", "data/tools.js", "data/playbook.js"],
        downloadFamilies: ["enterprise-learner-signal-intake-router.csv", "enterprise-learner-signal-brief-template.md", "enterprise-project-kickoff-command-center.csv", "enterprise-project-kickoff-meeting-note-template.md", "enterprise-service-delivery-plan.csv", "enterprise-project-acceptance-checklist.md", "enterprise-delivery-writeback-router.csv", "enterprise-delivery-evidence-authorization-template.md", "enterprise-training-scope-brief.md"],
        evidence:
          "企业诊断、内训方案、交付验收、资料清单和工具/SOP 共建能把个人课程延展为团队服务。",
        codexTasks: ["整理诊断访谈", "生成内训范围 Brief", "拆分 SOP 和工具需求", "输出验收清单"],
        manualChecks: ["企业资料是否授权", "交付范围是否写入 scope", "验收责任和后续维护是否确认"],
        nextUpgrade: "把企业服务样例脱敏后回写到课程、工具和案例，形成可销售但不过度承诺的证据。"
      },
      {
        id: "governance",
        label: "运营治理",
        score: 26,
        owner: "负责人 + 内容/开发/运营",
        proofPages: ["playbook.html", "README.md"],
        dataFiles: ["data/playbook.js", "README.md", "assets/app.js"],
        downloadFamilies: ["platform-goal-compliance-matrix.csv", "platform-release-audit.csv", "platform-visual-qa-gate.csv", "platform-visual-qa-brief-template.md", "platform-maintenance-log-builder.csv", "platform-maintenance-log-release-note-template.md", "release-writeback-routing-board.csv"],
        evidence:
          "目标矩阵、自检台、发布看板、版本回写、版本评审、数据治理、商业包装和维护节奏能约束所有后续更新。",
        codexTasks: ["生成发布审计清单", "整理维护日志", "检查下载引用", "汇总下期版本池"],
        manualChecks: ["是否按 goal 更新", "是否同步 README 和缓存版本", "是否完成移动端和下载验证"],
        nextUpgrade: "建立月度平台健康审计记录，把修复动作回写到具体页面和下载资产。"
      }
    ],
    evidenceStatuses: [
      {
        id: "complete",
        label: "证据完整",
        score: 32,
        gate: "可作为平台健康证据",
        repair: "只需记录审计结论、维护日志和下次复查窗口。",
        displayUse: "可用于内部复盘、招生咨询证据或企业服务说明。"
      },
      {
        id: "partial",
        label: "部分证据",
        score: 20,
        gate: "可内部使用，公开前需补证据",
        repair: "补页面引用、下载资产、截图、负责人、默认样例或课堂验证。",
        displayUse: "适合进入月度回写或小范围试运行。"
      },
      {
        id: "stale",
        label: "证据过期",
        score: 12,
        gate: "需要复核后再对外使用",
        repair: "复查页面内容、课程口径、下载文件、工具样例和商业承诺是否仍有效。",
        displayUse: "只能用于内部排查，不能作为最新招生或企业交付证据。"
      },
      {
        id: "missing",
        label: "证据缺失",
        score: 4,
        gate: "不可发布或对外展示",
        repair: "先补真实业务样例、页面挂载、数据文件、下载资产、负责人和人工确认记录。",
        displayUse: "只进入暂缓池，不作为课程或营销证据。"
      }
    ],
    riskFocuses: [
      {
        id: "manual-boundary",
        label: "人工边界",
        penalty: 5,
        boundary: "Codex 可以整理、生成草稿、检查一致性和汇总证据，正式价格、付款、交期、法务、税务、认证和客户承诺必须人工确认。",
        reviewers: ["课程负责人", "业务负责人"],
        noGo: "不能承诺自动成交、自动报价、自动审单或替代业务负责人。"
      },
      {
        id: "commercial-claims",
        label: "商业宣传",
        penalty: 9,
        boundary: "招生、公开课、社群和企业宣传必须使用可验证证据，不夸大效率、成交、获客和企业改造结果。",
        reviewers: ["运营负责人", "课程负责人"],
        noGo: "不能用单个样例包装成普遍效果，不能制造焦虑式销售。"
      },
      {
        id: "data-governance",
        label: "资料授权",
        penalty: 10,
        boundary: "学员作业、企业样例、询盘、报价、单证、客户资料和内部 SOP 必须脱敏、授权、留痕，并区分课堂内部与公开展示范围。",
        reviewers: ["资料提供方", "企业服务负责人", "运营负责人"],
        noGo: "不能公开展示未授权资料，不能把企业内部信息放入资源或营销页面。"
      },
      {
        id: "mobile-visual",
        label: "移动端与展示",
        penalty: 6,
        boundary: "所有新增模块必须在桌面和 390px 左右移动视口检查文字换行、卡片高度、按钮可点、表格可读和无横向溢出。",
        reviewers: ["开发负责人", "内容负责人"],
        noGo: "不能把过宽表格、长按钮或遮挡文字作为正式授课页面。"
      },
      {
        id: "maintenance-drift",
        label: "维护漂移",
        penalty: 7,
        boundary: "新增页面、下载、工具和数据字段必须同步 README、缓存版本、验证记录和版本回写，不让平台变成无法追踪的临时资料库。",
        reviewers: ["开发负责人", "运营负责人"],
        noGo: "不能只在聊天记录或离线文档里更新，不回写网站和维护日志。"
      }
    ],
    auditCadences: [
      {
        id: "weekly",
        label: "周度运营审计",
        score: 7,
        rhythm: "每周检查招生、课堂、工具和资源中的高频问题，优先修复影响转化和授课的缺口。",
        report: "形成周复盘 Brief 和下周回写动作。",
        nextReview: "下周一或公开课后复查。"
      },
      {
        id: "monthly",
        label: "月度版本审计",
        score: 8,
        rhythm: "每月把课程、案例、工具、下载、咨询和企业反馈统一评分，决定本期版本范围。",
        report: "形成月度版本候选、发布审计和维护日志。",
        nextReview: "下月版本规划前复查。"
      },
      {
        id: "quarterly",
        label: "季度平台审计",
        score: 10,
        rhythm: "每季度检查平台是否仍能支撑招生、交付、工具、企业服务和长期维护，形成管理层证据包。",
        report: "形成平台健康报告、整改路线和对外展示证据清单。",
        nextReview: "下季度课程或服务包调整前复查。"
      },
      {
        id: "pre-release",
        label: "发布前审计",
        score: 6,
        rhythm: "新增页面、工具、下载或企业服务上线前执行，确认数据、页面、下载、README、缓存版本和人工边界。",
        report: "形成发布前 Go/Repair/Hold 结论。",
        nextReview: "发布当天完成验证后复查。"
      }
    ],
    correctiveActions: [
      {
        id: "content-writeback",
        label: "页面与数据回写",
        score: 12,
        action: "更新页面挂载、data/*.js 字段、FAQ、顾虑证据、课程说明或运营日志。",
        deliverables: ["数据字段", "页面模块", "README 说明", "维护日志"],
        validation: "语法、页面挂载、缓存版本和桌面/移动端渲染检查通过。"
      },
      {
        id: "resource-asset",
        label: "补下载与资源承接",
        score: 11,
        action: "新增或修复 CSV/Markdown 模板、资源卡片、跟进标签和下一步 CTA。",
        deliverables: ["下载文件", "资源入口", "跟进模板", "HTTP 200 检查"],
        validation: "下载文件存在，资源中心和对应业务页面能说明用途。"
      },
      {
        id: "tool-sprint",
        label: "进入工具 Sprint",
        score: 15,
        action: "把重复工作拆成工具 Brief、默认样例、交互字段、导出结果、课堂验证和企业审批。",
        deliverables: ["工具 Brief", "交互模块", "导出结果", "验收截图"],
        validation: "工具必须保留业务场景、输出物、人工边界和移动端检查。"
      },
      {
        id: "case-sprint",
        label: "进入案例 Sprint",
        score: 13,
        action: "补行业样例、字段准入、集成房屋替换验证、课堂讲法和公开展示授权。",
        deliverables: ["案例 intake", "准入评分", "讲解脚本", "授权边界"],
        validation: "案例能串起产品、客户、询盘、报价、订单、单证和风险。"
      },
      {
        id: "enterprise-sop",
        label: "企业 SOP 共建",
        score: 14,
        action: "把企业诊断问题转成内训范围、岗位责任、工具/SOP 任务和验收证据。",
        deliverables: ["scope brief", "SOP 草案", "工具需求", "验收清单"],
        validation: "企业授权、交付范围、验收责任和维护边界必须人工确认。"
      },
      {
        id: "hold",
        label: "暂缓并补证据",
        score: 3,
        action: "当前不发布，不对外展示，只记录缺口、负责人、所需材料和下次审计时间。",
        deliverables: ["缺口清单", "证据需求", "负责人", "下次复查时间"],
        validation: "补齐真实记录、授权和页面证据后再评审。"
      }
    ],
    operatingRules: [
      "平台健康审计不是页面美观检查，而是确认招生、交付、工具、案例、资源和企业服务是否能共同支撑商业落地。",
      "每次审计必须落到页面、数据文件、下载资产、负责人、验证方式和人工确认边界。",
      "高风险内容先人工审批，再允许公开展示或进入企业服务交付。",
      "发现缺口后必须路由到版本回写、工具 Sprint、案例 Sprint、资源补齐或企业 SOP 共建，不能只停留在会议记录。"
    ]
  },
  auditRemediationRouter: {
    title: "审计整改执行链路由台",
    description:
      "用于把平台健康审计、发布前检查、课堂反馈、招生顾虑、资源转化和企业交付中的缺口，路由到可执行的整改链路，明确页面、数据、下载、负责人、Codex 任务、人工审批和复查窗口。",
    exportFilename: "audit-remediation-routing-output.md",
    downloads: [
      {
        label: "下载审计整改路由表 CSV",
        href: "./downloads/audit-remediation-routing-board.csv",
        format: "CSV",
        note: "用于记录审计问题来源、整改路线、证据缺口、负责人、页面数据、下载资产、验证方式和下次复查。"
      },
      {
        label: "下载整改执行 Brief 模板 MD",
        href: "./downloads/audit-remediation-brief-template.md",
        format: "Markdown",
        note: "用于把平台审计结论转成版本回写、工具 Sprint、案例 Sprint、资源补齐或企业 SOP 的执行任务。"
      }
    ],
    defaults: {
      trigger: "audit-amber",
      route: "tool-sprint",
      evidenceNeed: "business-output",
      urgency: "weekly",
      ownerMode: "product-dev",
      outputPackage: "tool-package"
    },
    triggers: [
      {
        id: "audit-hold",
        label: "健康审计 Hold",
        score: 18,
        signal: "平台健康审计结论为暂缓，缺少真实样例、页面证据、下载资产、负责人或人工确认记录。",
        priority: "先补证据，不进入公开展示或正式发布。",
        codexTasks: ["整理缺口清单", "生成证据需求", "拆分补齐任务", "草拟维护日志"],
        manualChecks: ["是否允许继续开发", "负责人是否确认缺口", "是否需要暂停对外展示"],
        noGo: "不能把 Hold 项作为招生、课堂或企业交付证据。"
      },
      {
        id: "audit-amber",
        label: "健康审计 Amber",
        score: 16,
        signal: "平台健康审计显示模块可内部运行，但对外展示、招生转化或企业服务前需要补证据。",
        priority: "优先补页面引用、下载承接、截图、默认样例、课堂验证或人工审批。",
        codexTasks: ["生成整改 Brief", "匹配关联页面", "整理验证命令", "更新下期版本池"],
        manualChecks: ["是否可小范围使用", "公开前还缺什么审批", "整改是否影响课程承诺"],
        noGo: "不能把部分证据包装成完整平台能力。"
      },
      {
        id: "pre-release-fail",
        label: "发布前检查未通过",
        score: 20,
        signal: "新增页面、工具、下载或企业服务上线前发现数据语法、HTTP、移动端、下载引用、README 或缓存版本缺口。",
        priority: "先修复发布闸口，再允许上线。",
        codexTasks: ["生成发布修复清单", "检查文件引用", "整理 HTTP 目标", "补 README 回写项"],
        manualChecks: ["是否需要延期发布", "是否有承诺口径风险", "修复范围是否影响其他页面"],
        noGo: "不能在验证不完整时对外宣称版本完成。"
      },
      {
        id: "classroom-gap",
        label: "课堂证据缺口",
        score: 15,
        signal: "老师演示、作业返修、学员卡点或讲师复制中反复出现同一类证据不足。",
        priority: "把课堂问题回写到课程、课堂工作台、案例、工具或作业模板。",
        codexTasks: ["归类课堂卡点", "生成作业返修说明", "提炼讲师提醒", "更新课后复盘草稿"],
        manualChecks: ["老师是否确认讲法", "作业是否可验收", "公开展示是否授权"],
        noGo: "不能把课堂草稿当成最终业务结论。"
      },
      {
        id: "enrollment-gap",
        label: "招生证据缺口",
        score: 14,
        signal: "咨询中反复被问到课程价值、时间投入、工具落地、结果展示或企业适配，但页面证据不足。",
        priority: "补招生证据、资源承接、试听课跟进和顾虑回应。",
        codexTasks: ["汇总咨询问题", "匹配证据页面", "生成顾虑回应草稿", "整理跟进标签"],
        manualChecks: ["话术是否夸大", "是否适合报名或企业诊断", "是否需要补真实成果证据"],
        noGo: "不能承诺学完必成交、自动获客或自动报价。"
      },
      {
        id: "enterprise-risk",
        label: "企业交付审批风险",
        score: 19,
        signal: "企业诊断、内训、工具/SOP 共建或公开样例涉及敏感资料、交付范围、验收责任或授权边界。",
        priority: "先审批授权、scope、资料脱敏和验收，再进入交付或公开展示。",
        codexTasks: ["整理企业访谈摘要", "生成 scope brief", "拆分 SOP 任务", "输出验收清单"],
        manualChecks: ["资料是否授权", "交付范围是否签字确认", "验收责任是否明确"],
        noGo: "不能公开展示未授权企业资料，不能替代企业管理审批。"
      }
    ],
    routes: [
      {
        id: "writeback",
        label: "版本回写",
        score: 15,
        stage: "Writeback",
        owner: "内容负责人 + 开发负责人",
        routePages: ["playbook.html", "course.html", "tools.html"],
        dataFiles: ["data/playbook.js", "README.md", "assets/app.js"],
        downloadFamilies: ["release-writeback-routing-board.csv", "release-writeback-note-template.md", "content-maintenance-log.csv", "platform-visual-qa-gate.csv", "platform-visual-qa-brief-template.md", "platform-maintenance-log-builder.csv", "platform-maintenance-log-release-note-template.md"],
        action: "更新主页面、关联数据文件、README、缓存版本、下载引用和维护日志。",
        validation: "语法、HTTP、下载文件、桌面/移动端和维护日志检查通过。",
        handoff: "完成后进入发布看板或版本评审。",
        boundary: "回写只能说明维护动作，不能扩大课程或工具承诺。"
      },
      {
        id: "tool-sprint",
        label: "工具 Sprint",
        score: 18,
        stage: "Sprint",
        owner: "产品负责人 + 开发负责人",
        routePages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "tools.html#tool-sample-validation-board", "automation.html", "playbook.html"],
        dataFiles: ["data/tools.js", "data/automation.js", "data/playbook.js", "assets/app.js"],
        downloadFamilies: ["tool-sprint-command-center.csv", "tool-sprint-review-template.md", "tool-build-brief-template.csv", "tool-classroom-acceptance-board.csv", "tool-classroom-acceptance-brief-template.md", "tool-sample-validation-board.csv", "tool-sample-validation-brief-template.md"],
        action: "把重复工作转成工具 Brief、默认样例、交互字段、导出结果、课堂验证、真实样例替换和发布回写。",
        validation: "工具有业务场景、输出物、默认样例、人工边界、复制/导出、真实样例替换和移动端检查。",
        handoff: "完成后回到工具中心、课堂演示和版本回写。",
        boundary: "工具不能替代最终报价、审单、法务、税务或客户承诺。"
      },
      {
        id: "case-sprint",
        label: "案例 Sprint",
        score: 16,
        stage: "Sprint",
        owner: "行业顾问 + 内容负责人",
        routePages: ["cases.html", "cases.html#case-field-replacement-validation", "cases.html#case-publication-router", "case-integrated-house.html", "course.html"],
        dataFiles: ["data/cases.js", "data/case-integrated-house.js", "data/course-foreign-trade-codex.js"],
        downloadFamilies: ["industry-case-intake.csv", "industry-case-readiness-scorecard.csv", "industry-case-sprint-plan.md", "industry-case-field-replacement-board.csv", "industry-case-field-replacement-brief-template.md", "industry-case-publication-router.csv", "industry-case-publication-brief-template.md"],
        action: "补行业字段、集成房屋替换验证、机械设备字段替换、课堂讲法、公开展示授权、案例准入评分和发布资源化路由。",
        validation: "案例能串起产品、客户、询盘、报价、订单、单证、风险、字段替换证据、发布范围和人工确认边界。",
        handoff: "通过后进入案例中心、课堂演示或资源包。",
        boundary: "样板验证不代表所有行业通用，特殊合规仍需专业确认。"
      },
      {
        id: "resource-asset",
        label: "资源补齐",
        score: 14,
        stage: "Asset",
        owner: "市场运营 + 内容负责人",
        routePages: ["resources.html", "marketing.html", "enrollment.html"],
        dataFiles: ["data/site.js", "data/marketing.js", "data/enrollment.js", "README.md"],
        downloadFamilies: ["resource-lead-tagging-board.csv", "resource-follow-up-sequence.csv", "resource-lead-routing-playbook.md", "resource-conversion-review-router.csv", "resource-conversion-review-brief-template.md"],
        action: "补免费资料、下载模板、领取标签、跟进序列、试听课承接和报名/企业分流。",
        validation: "资源有目标人群、业务痛点、下载文件、下一步 CTA、跟进方式和承诺边界。",
        handoff: "完成后进入资源中心、推广运营和报名路径。",
        boundary: "资源不能变成夸大承诺的销售诱饵。"
      },
      {
        id: "enterprise-sop",
        label: "企业 SOP 共建",
        score: 17,
        stage: "Approval",
        owner: "企业服务负责人 + 交付负责人",
        routePages: ["enterprise.html", "tools.html", "playbook.html"],
        dataFiles: ["data/enterprise.js", "data/tools.js", "data/playbook.js"],
        downloadFamilies: ["enterprise-training-scope-brief.md", "enterprise-project-kickoff-command-center.csv", "enterprise-project-kickoff-meeting-note-template.md", "enterprise-service-delivery-plan.csv", "enterprise-project-acceptance-checklist.md", "enterprise-delivery-writeback-router.csv", "enterprise-delivery-evidence-authorization-template.md"],
        action: "确认企业诊断、scope、岗位责任、工具/SOP 任务、资料授权和交付验收。",
        validation: "企业授权、交付范围、验收责任、资料脱敏和后续维护边界确认后才可交付。",
        handoff: "审批后进入企业服务交付、工具共建或案例脱敏回写。",
        boundary: "不能公开展示未授权资料，不能替代企业内部审批。"
      },
      {
        id: "governance-review",
        label: "治理复核",
        score: 13,
        stage: "Review",
        owner: "负责人 + 运营负责人",
        routePages: ["playbook.html", "README.md"],
        dataFiles: ["data/playbook.js", "README.md"],
        downloadFamilies: ["platform-health-audit-board.csv", "platform-release-audit.csv", "platform-visual-qa-gate.csv", "platform-visual-qa-brief-template.md", "platform-maintenance-log-builder.csv", "platform-maintenance-log-release-note-template.md", "platform-goal-compliance-matrix.csv"],
        action: "复查 goal、发布门槛、资料授权、商业承诺、维护日志和下载资产是否一致。",
        validation: "目标矩阵、自检、健康审计、发布看板和版本回写口径一致。",
        handoff: "通过后进入下一期版本规划或管理层复盘。",
        boundary: "治理复核不能代替具体模块的业务负责人确认。"
      }
    ],
    evidenceNeeds: [
      {
        id: "page-data",
        label: "页面/数据缺口",
        score: 12,
        need: "缺少 HTML 挂载区、data/*.js 字段、渲染函数、样式或 README 说明。",
        repair: "补页面挂载、数据结构、渲染函数、样式、缓存版本和 README。",
        gate: "页面能直接用于授课或咨询展示。"
      },
      {
        id: "download-asset",
        label: "下载资产缺口",
        score: 10,
        need: "缺少 CSV/Markdown 模板、下载入口、资源说明或 HTTP 200 验证。",
        repair: "补下载文件、数据引用、README 列表和资源/课程/工具说明。",
        gate: "下载文件存在且能说明业务用途。"
      },
      {
        id: "business-output",
        label: "业务输出缺口",
        score: 13,
        need: "缺少学员或企业能拿走复用的输出物、字段表、检查清单、英文草稿或验收标准。",
        repair: "补业务输入、输出格式、验收标准、默认样例和人工确认点。",
        gate: "能用集成房屋样板跑通输入、操作、输出和复盘。"
      },
      {
        id: "authorization",
        label: "授权/审批缺口",
        score: 15,
        need: "涉及学员作业、企业资料、报价、单证、付款、合规或公开展示，但授权和审批记录不足。",
        repair: "补脱敏、授权范围、审批人、展示边界和撤回方式。",
        gate: "人工审批完成前不得公开展示或正式交付。"
      },
      {
        id: "mobile-validation",
        label: "移动端/展示缺口",
        score: 8,
        need: "桌面可用，但手机视口可能出现文字遮挡、标签溢出、按钮拥挤或表格不可读。",
        repair: "补响应式样式、长文本换行、截图验证和横向溢出检查。",
        gate: "390px 和桌面视口均可读、可点、无横向溢出。"
      },
      {
        id: "conversion-proof",
        label: "转化证据缺口",
        score: 11,
        need: "资源、推广或报名路径缺少下一步 CTA、证据页面、顾虑回应、跟进节奏或成果边界。",
        repair: "补用户角色、痛点、资源承接、试听课跟进、报名/企业分流和承诺边界。",
        gate: "能说明用户为什么继续咨询、报名或进入企业诊断。"
      }
    ],
    urgencies: [
      {
        id: "same-day",
        label: "当天修复",
        score: 12,
        cadence: "发布日、公开课、企业交付或严重承诺风险必须当天处理。",
        deadline: "24 小时内形成修复记录和复查结果。",
        review: "当天复查并写维护日志。"
      },
      {
        id: "weekly",
        label: "周内整改",
        score: 9,
        cadence: "影响课堂、工具、资源或招生转化，但不阻塞当日发布的问题进入周内整改。",
        deadline: "本周内完成主页面、数据或下载补齐。",
        review: "周复盘时检查是否回写。"
      },
      {
        id: "monthly",
        label: "月度排期",
        score: 6,
        cadence: "涉及跨页面、跨课程、行业扩展或企业服务范围的问题进入月度版本池。",
        deadline: "下月版本规划前完成评审。",
        review: "月度版本审计时复查。"
      },
      {
        id: "defer",
        label: "暂缓池",
        score: 1,
        cadence: "证据不足、价值不清、授权未定或风险过高时只记录，不进入开发和公开展示。",
        deadline: "补齐证据后重新评审。",
        review: "下次健康审计时复查。"
      }
    ],
    ownerModes: [
      {
        id: "content-dev",
        label: "内容 + 开发",
        score: 7,
        roles: ["内容负责人补业务场景和交付物", "开发负责人补页面、样式和验证", "运营负责人回写 README 和维护日志"],
        handoff: "适合页面、数据、下载和缓存版本缺口。"
      },
      {
        id: "product-dev",
        label: "产品 + 开发",
        score: 8,
        roles: ["产品负责人确认工具范围", "开发负责人实现交互或规格", "主讲老师做课堂验证"],
        handoff: "适合工具 Sprint、交互模块和默认样例。"
      },
      {
        id: "teacher-ops",
        label: "老师 + 运营",
        score: 6,
        roles: ["主讲老师确认讲法和作业", "助教整理返修记录", "运营负责人补咨询或资源承接"],
        handoff: "适合课堂证据、作业模板、招生顾虑和资源跟进。"
      },
      {
        id: "enterprise-delivery",
        label: "企业 + 交付",
        score: 9,
        roles: ["企业服务负责人确认 scope", "交付负责人确认 SOP 和验收", "资料提供方确认授权"],
        handoff: "适合企业服务、授权审批、资料脱敏和验收边界。"
      }
    ],
    outputPackages: [
      {
        id: "release-package",
        label: "版本回写包",
        score: 7,
        deliverables: ["维护日志", "页面更新清单", "数据文件清单", "下载引用", "验证命令"],
        proof: "用于发布看板、版本回写和 README 同步。"
      },
      {
        id: "tool-package",
        label: "工具 Sprint 包",
        score: 9,
        deliverables: ["工具 Brief", "默认样例", "交互字段", "导出结果", "验收截图"],
        proof: "用于工具中心、课堂演示和企业工具/SOP 共建。"
      },
      {
        id: "case-package",
        label: "案例 Sprint 包",
        score: 8,
        deliverables: ["案例 intake", "字段准入评分", "集成房屋替换验证", "讲解脚本", "授权边界"],
        proof: "用于案例中心、课堂演示和行业扩展。"
      },
      {
        id: "resource-package",
        label: "资源转化包",
        score: 7,
        deliverables: ["下载模板", "资源卡片", "领取标签", "跟进序列", "报名/企业分流"],
        proof: "用于资源中心、推广运营和报名路径。"
      },
      {
        id: "enterprise-package",
        label: "企业交付包",
        score: 8,
        deliverables: ["scope brief", "资料清单", "SOP 任务", "工具需求", "验收清单"],
        proof: "用于企业诊断、内训、工具共建和交付验收。"
      }
    ],
    operatingRules: [
      "整改路由必须从真实审计结论或业务反馈进入，不能为了做页面而制造任务。",
      "每条整改必须指定主路线，只能有一个主负责人，相关页面和数据文件作为协同项。",
      "授权、报价、付款、单证、合规和企业私密资料问题先人工审批，再允许公开展示或交付。",
      "完成整改后必须回到健康审计或版本回写复查，避免任务完成但平台证据没有更新。"
    ]
  },
  remediationReviewDesk: {
    title: "整改复查与验收闭环台",
    description:
      "用于在整改执行后复查完成证据、验证结果、风险关闭、业务影响和下一步去向，决定是否验收关闭、返修、进入人工审批或回到版本池，确保每次整改都真正回写到平台证据。",
    exportFilename: "remediation-review-closeout-output.md",
    downloads: [
      {
        label: "下载整改验收复查表 CSV",
        href: "./downloads/remediation-review-acceptance-board.csv",
        format: "CSV",
        note: "用于记录整改路线、完成证据、验证结果、风险关闭、业务影响、验收结论和下次复查。"
      },
      {
        label: "下载整改关闭记录模板 MD",
        href: "./downloads/remediation-closeout-template.md",
        format: "Markdown",
        note: "用于工具 Sprint、案例 Sprint、资源补齐、企业 SOP 和版本回写完成后的验收记录。"
      }
    ],
    defaults: {
      reviewScope: "tool-sprint",
      completionState: "implemented",
      validationResult: "full-pass",
      riskClosure: "boundary-closed",
      businessImpact: "classroom-ready",
      nextDestination: "release-writeback"
    },
    reviewScopes: [
      {
        id: "writeback",
        label: "版本回写整改",
        score: 16,
        owner: "内容负责人 + 开发负责人",
        proofPages: ["playbook.html", "course.html", "tools.html"],
        dataFiles: ["data/playbook.js", "README.md", "assets/app.js"],
        downloadFamilies: ["release-writeback-routing-board.csv", "release-writeback-note-template.md", "content-maintenance-log.csv", "platform-maintenance-log-builder.csv", "platform-maintenance-log-release-note-template.md"],
        acceptanceEvidence: "主页面、数据文件、README、缓存版本、下载引用和维护日志已同步。",
        codexTasks: ["汇总回写差异", "整理维护日志", "生成发布说明", "检查下载引用"],
        manualChecks: ["回写是否符合 goal", "是否影响其他页面口径", "是否需要进入版本评审"],
        closeoutNext: "进入发布看板或版本评审。"
      },
      {
        id: "tool-sprint",
        label: "工具 Sprint 整改",
        score: 18,
        owner: "产品负责人 + 开发负责人",
        proofPages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "tools.html#tool-sample-validation-board", "automation.html", "classroom.html", "playbook.html"],
        dataFiles: ["data/tools.js", "data/automation.js", "data/classroom.js", "assets/app.js"],
        downloadFamilies: ["tool-sprint-command-center.csv", "tool-sprint-review-template.md", "tool-build-brief-template.csv", "tool-classroom-acceptance-board.csv", "tool-classroom-acceptance-brief-template.md", "tool-sample-validation-board.csv", "tool-sample-validation-brief-template.md"],
        acceptanceEvidence: "工具有业务场景、默认样例、真实替换样例、交互字段、复制/导出、验收截图、课堂验证和人工边界。",
        codexTasks: ["整理工具验收结果", "生成课堂演示说明", "汇总未完成字段", "生成样例替换复盘", "输出下期工具候选"],
        manualChecks: ["工具是否真正减少重复劳动", "默认样例是否能用集成房屋跑通", "真实样例是否脱敏授权", "高风险输出是否有人审"],
        closeoutNext: "进入工具中心证据、课堂演示或企业工具/SOP 共建。"
      },
      {
        id: "case-sprint",
        label: "案例 Sprint 整改",
        score: 16,
        owner: "行业顾问 + 内容负责人",
        proofPages: ["cases.html", "cases.html#case-field-replacement-validation", "cases.html#case-publication-router", "case-integrated-house.html", "course.html"],
        dataFiles: ["data/cases.js", "data/case-integrated-house.js", "data/course-foreign-trade-codex.js"],
        downloadFamilies: ["industry-case-intake.csv", "industry-case-readiness-scorecard.csv", "industry-case-sprint-plan.md", "industry-case-field-replacement-board.csv", "industry-case-field-replacement-brief-template.md", "industry-case-publication-router.csv", "industry-case-publication-brief-template.md"],
        acceptanceEvidence: "案例字段、集成房屋替换验证、机械设备字段替换记录、课堂讲法、授权边界、准入评分和发布路由已补齐。",
        codexTasks: ["生成案例复查摘要", "整理字段差异", "更新讲解脚本", "输出行业替换注意事项", "生成字段替换复盘", "生成案例发布复盘"],
        manualChecks: ["行业样例是否真实可讲", "字段替换是否有证据", "公开展示是否授权", "报价和合规是否人工确认", "资源化发布范围是否可用"],
        closeoutNext: "进入案例中心、课程模块或资源包。"
      },
      {
        id: "resource-asset",
        label: "资源补齐整改",
        score: 15,
        owner: "市场运营 + 内容负责人",
        proofPages: ["resources.html", "marketing.html", "enrollment.html"],
        dataFiles: ["data/site.js", "data/marketing.js", "data/enrollment.js", "README.md"],
        downloadFamilies: ["resource-lead-tagging-board.csv", "resource-follow-up-sequence.csv", "resource-lead-routing-playbook.md", "resource-conversion-review-router.csv", "resource-conversion-review-brief-template.md"],
        acceptanceEvidence: "资源卡片、下载文件、领取标签、跟进序列、CTA、报名/企业分流和承诺边界已同步。",
        codexTasks: ["汇总资源领取反馈", "生成跟进标签", "更新资源说明", "整理转化证据"],
        manualChecks: ["资源是否解决真实痛点", "跟进话术是否夸大", "是否适合进入报名或企业诊断"],
        closeoutNext: "进入资源中心、推广运营和报名路径复盘。"
      },
      {
        id: "enterprise-sop",
        label: "企业 SOP 整改",
        score: 17,
        owner: "企业服务负责人 + 交付负责人",
        proofPages: ["enterprise.html", "tools.html", "playbook.html"],
        dataFiles: ["data/enterprise.js", "data/tools.js", "data/playbook.js"],
        downloadFamilies: ["enterprise-training-scope-brief.md", "enterprise-project-kickoff-command-center.csv", "enterprise-project-kickoff-meeting-note-template.md", "enterprise-service-delivery-plan.csv", "enterprise-project-acceptance-checklist.md", "enterprise-delivery-writeback-router.csv", "enterprise-delivery-evidence-authorization-template.md"],
        acceptanceEvidence: "企业 scope、资料清单、SOP 任务、工具需求、授权记录和验收清单已确认。",
        codexTasks: ["整理企业交付复盘", "生成 SOP 差异摘要", "提炼可公开脱敏证据", "输出下轮扩展建议"],
        manualChecks: ["资料是否授权", "交付范围是否确认", "验收责任是否明确"],
        closeoutNext: "进入企业交付验收、工具共建或脱敏案例回写。"
      },
      {
        id: "governance-review",
        label: "治理复核整改",
        score: 14,
        owner: "负责人 + 运营负责人",
        proofPages: ["playbook.html", "README.md"],
        dataFiles: ["data/playbook.js", "README.md"],
        downloadFamilies: ["platform-health-audit-board.csv", "platform-release-audit.csv", "platform-maintenance-log-builder.csv", "platform-maintenance-log-release-note-template.md", "platform-goal-compliance-matrix.csv"],
        acceptanceEvidence: "goal、发布门槛、资料授权、商业承诺、维护日志和下载资产口径一致。",
        codexTasks: ["生成治理复查摘要", "检查 goal 对齐", "整理未完成项", "输出下期版本池"],
        manualChecks: ["是否仍符合长期平台标准", "是否需要负责人审批", "是否存在承诺口径冲突"],
        closeoutNext: "进入管理层复盘或下期平台健康审计。"
      }
    ],
    completionStates: [
      {
        id: "implemented",
        label: "已按范围完成",
        score: 22,
        evidence: "主整改项已完成，相关页面、数据、下载和维护记录有可查证据。",
        repair: "只需完成验收记录和下次复查窗口。",
        gate: "可进入验证结果判断。"
      },
      {
        id: "partial",
        label: "部分完成",
        score: 12,
        evidence: "核心问题有所改善，但仍有页面、下载、授权、验证或 README 未完成。",
        repair: "列出未完成项、负责人和下次复查时间。",
        gate: "不能直接关闭，只能小范围使用或继续返修。"
      },
      {
        id: "blocked",
        label: "被依赖阻塞",
        score: 4,
        evidence: "资料、授权、专业审批、企业确认或开发依赖未完成。",
        repair: "记录阻塞条件和外部依赖，不对外展示。",
        gate: "依赖解除前不能验收关闭。"
      },
      {
        id: "over-scope",
        label: "超出原范围",
        score: 8,
        evidence: "整改过程中发现新问题，已经超出本次 brief 的原始范围。",
        repair: "拆分成新整改路由或月度版本候选。",
        gate: "原任务可部分关闭，新范围另行评审。"
      }
    ],
    validationResults: [
      {
        id: "full-pass",
        label: "验证通过",
        score: 20,
        proof: "语法、HTTP、下载、桌面/移动端、导出或截图验证均通过。",
        commands: ["node --check assets/app.js", "for f in data/*.js; do node --check \"$f\" || exit 1; done", "HTTP 页面和新增下载 200", "桌面/移动端渲染和导出检查"],
        repair: "记录验证命令、截图和导出文件名。"
      },
      {
        id: "partial-pass",
        label: "部分通过",
        score: 10,
        proof: "核心页面可用，但仍缺移动端、下载、导出、截图或部分关联页面验证。",
        commands: ["补缺失验证项", "复查下载引用", "补移动端截图"],
        repair: "补齐验证后再进入正式关闭。"
      },
      {
        id: "failed",
        label: "验证失败",
        score: 2,
        proof: "存在语法错误、HTTP 失败、下载缺失、导出失败、移动端溢出或控制台错误。",
        commands: ["定位失败项", "修复后重跑全量验证"],
        repair: "必须返修，不允许关闭。"
      },
      {
        id: "not-run",
        label: "未验证",
        score: 0,
        proof: "没有执行当前范围所需的验证命令或浏览器检查。",
        commands: ["先执行语法、HTTP、下载和渲染检查"],
        repair: "验证完成前不得宣称整改完成。"
      }
    ],
    riskClosures: [
      {
        id: "boundary-closed",
        label: "边界已关闭",
        score: 18,
        status: "人工边界、禁止承诺、授权范围和展示口径已写入页面或记录。",
        approvers: ["课程负责人", "运营负责人"],
        noGo: "仍不得承诺自动成交、自动报价、替代审单或替代管理审批。"
      },
      {
        id: "approval-needed",
        label: "仍需人工审批",
        score: 8,
        status: "内容可内部使用，但公开展示、企业交付或高风险业务前还需负责人审批。",
        approvers: ["业务负责人", "资料提供方", "企业服务负责人"],
        noGo: "审批前不得公开展示或正式交付。"
      },
      {
        id: "authorization-missing",
        label: "授权仍缺失",
        score: 2,
        status: "涉及学员、企业、报价、单证、客户或内部 SOP 的资料仍缺授权或脱敏记录。",
        approvers: ["资料提供方", "运营负责人", "企业服务负责人"],
        noGo: "不得公开展示、不得进入营销页面、不得作为案例证据。"
      },
      {
        id: "boundary-open",
        label: "边界仍开放",
        score: 4,
        status: "页面或下载仍可能被理解为效果承诺、自动业务判断或替代专业审批。",
        approvers: ["课程负责人", "运营负责人"],
        noGo: "先改口径，再允许对外使用。"
      }
    ],
    businessImpacts: [
      {
        id: "classroom-ready",
        label: "可进入课堂",
        score: 12,
        impact: "老师能直接按网页讲解，学员能完成作业并获得可复用输出物。",
        evidence: "课堂 runbook、默认样例、作业验收和讲师提醒已更新。"
      },
      {
        id: "enrollment-proof",
        label: "可作为招生证据",
        score: 11,
        impact: "能回应报课顾虑、资源领取后的下一步动作和课程价值证明。",
        evidence: "证据页面、顾虑回应、跟进路径和承诺边界已同步。"
      },
      {
        id: "enterprise-ready",
        label: "可进入企业服务",
        score: 13,
        impact: "能支撑企业诊断、内训、工具/SOP 共建或交付验收。",
        evidence: "scope、资料清单、授权、SOP 任务和验收标准已确认。"
      },
      {
        id: "internal-only",
        label: "仅内部使用",
        score: 6,
        impact: "适合内部复盘、老师试讲或下期规划，暂不对外展示。",
        evidence: "仍需补公开证据、授权或完整验证。"
      }
    ],
    nextDestinations: [
      {
        id: "release-writeback",
        label: "关闭并回写版本",
        score: 12,
        action: "写入维护日志、README、发布看板和下次健康审计记录。",
        next: "进入平台发布证据或下期版本池。"
      },
      {
        id: "public-proof",
        label: "进入公开证据包",
        score: 10,
        action: "整理可公开展示的页面、截图、资源、案例和边界说明。",
        next: "用于招生咨询、公开课或企业服务说明。"
      },
      {
        id: "repair-loop",
        label: "返修循环",
        score: 3,
        action: "列出未完成项、责任人、所需资料和下次复查时间。",
        next: "回到整改路由台重新分派。"
      },
      {
        id: "approval-loop",
        label: "审批循环",
        score: 4,
        action: "等待资料授权、企业确认、专业审批或负责人签字。",
        next: "审批完成后重新验收。"
      },
      {
        id: "next-version",
        label: "进入下期版本池",
        score: 6,
        action: "把超出范围的新需求拆成月度版本候选，不阻塞本期已完成范围。",
        next: "进入版本评审和路线图。"
      }
    ],
    operatingRules: [
      "复查验收必须基于实际完成证据，不能只看整改 Brief 或口头确认。",
      "验证失败、授权缺失、边界开放或未执行关键检查时，不允许验收关闭。",
      "验收通过后必须回写版本、README、维护日志和下次健康审计记录。",
      "超出原范围的新问题应进入下期版本池，避免本期整改无限扩大。"
    ]
  },
  operatingConsole: {
    title: "培训公司日常运营总控台",
    description:
      "把招生转化、课程交付、课堂复盘、学员成果、企业服务、工具迭代和平台发布统一成每天可执行的运营 Brief，避免团队只看页面标准，却不知道当天该抓什么。",
    exportFilename: "training-company-operating-brief-output.md",
    downloads: [
      {
        label: "下载日常运营总控表 CSV",
        href: "./downloads/training-company-operating-desk.csv",
        format: "CSV",
        note: "用于每天记录运营重点、页面证据、负责人、Codex 任务、人工确认和复盘指标。"
      },
      {
        label: "下载每日运营 Brief 模板 MD",
        href: "./downloads/daily-operating-brief-template.md",
        format: "Markdown",
        note: "用于晨会、晚复盘、公开课、开班和企业诊断前的统一口径。"
      }
    ],
    defaults: {
      focus: "enrollment",
      dayType: "normal-day",
      teamMode: "small-team",
      evidenceStatus: "partial-evidence",
      riskMode: "standard",
      reviewCycle: "weekly"
    },
    focuses: [
      {
        id: "enrollment",
        label: "招生转化",
        summary: "把资源领取、试听课、报名咨询和学员顾虑转成可跟进的咨询证据和成交路径。",
        priority: "优先检查新增线索是否有来源标签、对应资源、下一步动作和不夸大的承诺边界。",
        routePages: ["resources.html", "marketing.html", "enrollment.html", "learning.html"],
        codexTasks: ["整理资源领取留言并打标签", "生成试听课跟进摘要", "把常见顾虑匹配到证据页面", "草拟咨询后续动作"],
        manualDecisions: ["是否允许进入报名咨询", "是否需要安排试听课", "是否适合系统课或企业诊断", "销售承诺是否越界"],
        metrics: ["资源领取数", "试听预约数", "咨询到课率", "顾虑处理完成率", "报名入班交接完整率"],
        handoff: "高意向个人线索进入报名路径；企业线索进入企业诊断；证据不足线索回到资源跟进。",
        noGo: "不承诺学完必成交、自动获客、自动报价或替代业务负责人的商业判断。"
      },
      {
        id: "classroom",
        label: "课堂交付",
        summary: "把老师授课、案例演示、作业布置、助教点评和返修跟踪统一到课堂工作台。",
        priority: "优先确认本节课输入资料、集成房屋演示、作业输出、助教验收和人工确认边界是否齐全。",
        routePages: ["course.html", "classroom.html", "case-integrated-house.html", "learning.html"],
        codexTasks: ["生成单节课 runbook", "整理课堂卡点和答疑摘要", "生成作业返修建议", "汇总讲师复制检查项"],
        manualDecisions: ["课程节奏是否调整", "学员作业是否通过验收", "公开展示是否授权", "关键报价和合规点是否需人工确认"],
        metrics: ["到课率", "作业提交率", "一次验收通过率", "返修完成率", "课堂卡点收敛数"],
        handoff: "课堂问题进入学员工作台返修；高频卡点进入课程版本评审；优秀作业进入展示授权流程。",
        noGo: "不能把 Codex 输出当成最终报价、合同、单证、认证或法务判断。"
      },
      {
        id: "learner-success",
        label: "学员成果",
        summary: "把学员作业、交付物、结课工具包和公开展示证据转成可验收、可复用、可转介绍的成果资产。",
        priority: "优先确认每位学员是否有入班资料、阶段作业、返修记录、结课工具包和展示授权状态。",
        routePages: ["learning.html", "enrollment.html", "resources.html", "playbook.html"],
        codexTasks: ["汇总学员交付物缺口", "生成返修任务清单", "生成成果展示 Brief", "归档公开展示候选案例"],
        manualDecisions: ["是否允许结课验收", "是否进入优秀作业展示", "是否需要补脱敏授权", "是否适合升级陪跑或企业服务"],
        metrics: ["入班资料完成率", "阶段作业完成率", "结课工具包完成率", "授权展示通过率", "升级服务线索数"],
        handoff: "合格成果进入报名证据库；未合格成果进入返修；企业潜在线索进入企业服务诊断。",
        noGo: "不能公开展示未授权资料，不能把学员阶段草稿包装成真实商业成果。"
      },
      {
        id: "enterprise-service",
        label: "企业服务",
        summary: "把企业咨询、流程诊断、内训方案、工具/SOP 共建和交付验收转成项目型服务流程。",
        priority: "优先确认企业资料成熟度、岗位参与、样板业务线、服务边界、验收证据和签约前资料清单。",
        routePages: ["enterprise.html", "automation.html", "tools.html", "playbook.html"],
        codexTasks: ["整理企业访谈纪要", "生成诊断 Brief", "映射内训模块和工具输出", "形成验收清单和下一轮扩展建议"],
        manualDecisions: ["是否进入企业诊断", "服务范围和报价是否确认", "资料是否允许用于内训", "工具共建是否超出当前阶段"],
        metrics: ["诊断预约数", "资料清单完成率", "方案确认率", "内训交付验收率", "工具/SOP 共建机会数"],
        handoff: "成熟企业进入诊断方案；资料不足企业先补材料；工具需求进入工具优先级评分。",
        noGo: "不能承诺短期业绩、代运营、自动成交、替代企业管理审批或一次性替代 ERP/CRM。"
      },
      {
        id: "tool-sprint",
        label: "工具迭代",
        summary: "把课堂高频动作、企业重复流程和学员作业卡点沉淀成轻交互工具或开发规格。",
        priority: "优先判断该工具是否有真实业务输入、可复用输出、集成房屋样板、验收标准和人工确认边界。",
        routePages: ["tools.html", "automation.html", "prompts.html", "case-integrated-house.html"],
        codexTasks: ["生成工具需求评分", "整理字段字典和测试样例", "草拟开发规格", "生成上线验收清单"],
        manualDecisions: ["是否进入开发排期", "字段和输出是否真实可用", "是否需要企业定制", "上线承诺是否过度"],
        metrics: ["需求评分", "课堂复用次数", "作业节省时间", "企业适配度", "上线验收完成率"],
        handoff: "高分工具进入开发 brief；中分工具保留静态模板；低分工具回到指令库或课程演示。",
        noGo: "不能为了展示技术而开发无业务输入、无验收标准、无人工边界的工具。"
      },
      {
        id: "platform-release",
        label: "平台发布",
        summary: "把新增页面、数据文件、下载资产、缓存版本、浏览器校验和维护日志统一成发布闭环。",
        priority: "优先确认新增内容是否同步数据源、页面挂载、下载资源、README、缓存版本和验证证据。",
        routePages: ["playbook.html", "resources.html", "tools.html", "enterprise.html"],
        codexTasks: ["生成发布审计草稿", "检索旧版本缓存号", "检查下载资源引用", "整理验证结果和下期回写"],
        manualDecisions: ["是否允许上线", "是否需要回滚口径", "是否影响招生或企业承诺", "是否进入下期路线图"],
        metrics: ["页面 200 检查", "下载资源 200 检查", "控制台错误数", "移动端溢出数", "维护日志完成率"],
        handoff: "通过发布审计后进入对外使用；未通过项进入版本评审和维护日志。",
        noGo: "未验证页面、下载、移动端和人工边界前，不能对外宣称版本已完成。"
      }
    ],
    dayTypes: [
      {
        id: "normal-day",
        label: "日常运营日",
        rhythm: "晨会定目标，中午查线索和作业，晚间复盘页面证据和下一步动作。",
        trigger: "没有大型公开课、开班或企业诊断，但需要保持招生、课堂和资源维护节奏。",
        checkpoints: ["09:30 确认今日重点", "14:00 检查线索和作业状态", "18:00 写入复盘和明日动作"],
        output: "形成一份日常运营 Brief 和次日任务池。"
      },
      {
        id: "open-class-day",
        label: "公开课 / 试听课日",
        rhythm: "课前统一演示材料，课中记录高频问题，课后按个人报名和企业诊断分流。",
        trigger: "需要用集成房屋案例、询盘演示或工具预览完成转化。",
        checkpoints: ["课前检查公开素材授权", "课中记录学员顾虑", "课后 2 小时内完成分流跟进"],
        output: "形成公开课复盘、跟进话术和报名/企业线索清单。"
      },
      {
        id: "class-start-day",
        label: "开班 / 交付日",
        rhythm: "确认入班资料、课堂 runbook、作业模板、助教分工和课后返修规则。",
        trigger: "新班开课、模块交付或企业内训启动。",
        checkpoints: ["课前确认资料脱敏", "课中记录卡点", "课后同步作业和返修标准"],
        output: "形成课堂交付记录、作业验收规则和学员下一步任务。"
      },
      {
        id: "enterprise-diagnosis-day",
        label: "企业诊断日",
        rhythm: "访谈前确认资料清单，访谈中记录流程痛点，访谈后生成诊断 Brief 和服务边界。",
        trigger: "企业预约诊断、内训方案沟通或工具/SOP 共建评估。",
        checkpoints: ["访谈前确认授权范围", "访谈中定位样板业务线", "访谈后 24 小时内生成方案 Brief"],
        output: "形成企业诊断方案、资料缺口和服务路径建议。"
      },
      {
        id: "release-day",
        label: "版本发布日",
        rhythm: "发布前查数据和页面，发布中验证 HTTP 和渲染，发布后写维护日志和下期回写。",
        trigger: "新增页面、交互工具、资源包、课程版本或企业服务模块。",
        checkpoints: ["改动前确认目标矩阵", "上线前跑语法和 HTTP", "上线后截图和维护日志归档"],
        output: "形成发布审计记录、验证结果和下期版本池。"
      }
    ],
    teamModes: [
      {
        id: "solo",
        label: "单人推进",
        roles: ["负责人兼内容、运营和交付", "Codex 负责草稿、检查和汇总", "关键承诺由本人最终确认"],
        constraint: "优先做一条主线，不同时推进招生、课堂、企业和工具开发。",
        handoff: "当天只保留 3 个必须完成动作，其余进入维护日志。"
      },
      {
        id: "small-team",
        label: "小团队",
        roles: ["课程负责人", "运营/课程顾问", "助教/内容维护", "Codex 辅助生成和校验"],
        constraint: "需要明确谁收集证据、谁回复用户、谁更新页面、谁确认商业边界。",
        handoff: "用运营 Brief 分配负责人，晚复盘确认是否进入下一个页面或服务。"
      },
      {
        id: "full-team",
        label: "完整运营团队",
        roles: ["市场运营", "课程顾问", "主讲老师", "助教负责人", "产品/开发", "企业服务负责人"],
        constraint: "要避免多岗位口径不一致，所有转化、交付、企业服务都回到页面证据和运营指南。",
        handoff: "用页面路线和验收证据做跨岗位交接，避免口头传递。"
      }
    ],
    evidenceStatuses: [
      {
        id: "scattered",
        label: "证据分散",
        need: "缺少统一页面证据或下载承接，团队靠临时聊天记录推进。",
        repair: "先把业务输入、页面路线、下载文件、人工边界补齐，再做对外动作。",
        gate: "证据分散时只允许内部试运行，不建议公开宣传或承诺交付。"
      },
      {
        id: "partial-evidence",
        label: "部分证据具备",
        need: "已有页面或下载，但缺少复盘记录、授权状态、验收标准或下一步动作。",
        repair: "用运营 Brief 补齐缺口，并把缺口写入维护日志或版本评审。",
        gate: "可以小范围使用，但对外展示前必须确认承诺边界和资料授权。"
      },
      {
        id: "ready-evidence",
        label: "证据可用",
        need: "页面、下载、作业/咨询证据、授权状态和人工边界都可追溯。",
        repair: "进入正式运营，持续收集转化、课堂、企业和工具反馈。",
        gate: "允许用于招生咨询、课堂交付或企业方案，但仍需人工确认关键商业判断。"
      }
    ],
    riskModes: [
      {
        id: "standard",
        label: "常规边界",
        rule: "保持 Codex 只做整理、草稿、检查和辅助判断的统一口径。",
        reviewer: "运营负责人确认话术，课程负责人确认教学边界。"
      },
      {
        id: "public-proof",
        label: "公开展示",
        rule: "公开课、短视频、招生页面和学员成果展示必须先确认脱敏、授权和可展示范围。",
        reviewer: "课程负责人、运营负责人和资料提供方共同确认。"
      },
      {
        id: "enterprise-private",
        label: "企业资料",
        rule: "企业样例默认不得公开，只能在授权范围内用于诊断、内训、工具测试或内部交付。",
        reviewer: "企业服务负责人和企业授权岗位共同确认。"
      }
    ],
    reviewCycles: [
      {
        id: "daily",
        label: "日复盘",
        closeout: "当天确认线索、作业、课堂、企业或发布动作是否闭环。",
        next: "形成明日 3 个优先动作和未完成原因。"
      },
      {
        id: "weekly",
        label: "周复盘",
        closeout: "每周汇总招生顾虑、课堂卡点、工具需求和企业咨询。",
        next: "选择一个高频问题进入版本评审、资源补充或工具规格。"
      },
      {
        id: "monthly",
        label: "月度版本复盘",
        closeout: "每月评估课程、案例、工具、资源、企业服务是否支撑商业落地。",
        next: "决定下月新增行业案例、交互工具、企业服务包或招生证据。"
      }
    ]
  },
  toolSprintCommandCenter: {
    title: "工具 Sprint 执行与验收台",
    description:
      "用于把工具产品化 Brief 转成可执行的 sprint：明确本期工具范围、证据门槛、页面路线、Codex 任务、人工审批、上线验收、商业入口和版本回写。",
    exportFilename: "tool-sprint-command-brief-output.md",
    downloads: [
      {
        label: "下载工具 Sprint 执行台 CSV",
        href: "./downloads/tool-sprint-command-center.csv",
        format: "CSV",
        note: "用于记录工具候选、sprint 类型、证据状态、发布目标、风险等级、负责人、验收标准和回写动作。"
      },
      {
        label: "下载工具 Sprint 复盘模板 MD",
        href: "./downloads/tool-sprint-review-template.md",
        format: "Markdown",
        note: "用于每期工具开发、课堂验证、企业验收或版本发布后的复盘。"
      },
      {
        label: "下载真实样例替换验收表 CSV",
        href: "./downloads/tool-sample-validation-board.csv",
        format: "CSV",
        note: "用于把工具 Sprint 的课堂工具放进学员或企业脱敏样例里复测。"
      },
      {
        label: "下载样例替换复盘模板 MD",
        href: "./downloads/tool-sample-validation-brief-template.md",
        format: "Markdown",
        note: "用于记录样例授权、输出质量、人工边界和版本回写动作。"
      }
    ],
    defaults: {
      toolCandidate: "inquiry-analyzer",
      sprintType: "light-interactive",
      evidenceStatus: "ready-evidence",
      releaseTarget: "classroom-beta",
      riskMode: "standard-business",
      reviewCycle: "weekly-sprint"
    },
    toolCandidates: [
      {
        id: "product-profile",
        label: "企业产品资料工作台",
        priorityScore: 18,
        sprintGoal: "把产品资料成熟度、缺失项、人工确认人和英文资料草稿稳定成所有课程、工具和企业诊断的共同输入。",
        sourceEvidence: "产品资料演示器、产品资料作业模板、企业诊断资料清单和集成房屋字段样例。",
        routePages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "course.html", "enterprise.html", "case-integrated-house.html"],
        deliverables: ["产品字段表", "缺失资料清单", "英文资料草稿", "人工确认人清单"],
        codexTasks: ["整理字段结构", "生成缺失项补资料清单", "输出英文产品资料草稿", "生成课堂作业包"],
        manualChecks: ["产品参数、认证、库存、交期和质保", "内部成本和未公开资料脱敏", "HS 编码和目的国合规判断"],
        acceptance: "学员或企业能用脱敏产品资料替换集成房屋样例，并输出可复核的产品资料作业包。",
        owner: "产品负责人 + 行业顾问"
      },
      {
        id: "lead-followup",
        label: "客户线索分级与跟进工具",
        priorityScore: 17,
        sprintGoal: "把客户来源、类型、需求信号、跟进阶段和下一步动作沉淀为客户开发模块的标准工具。",
        sourceEvidence: "客户线索演示器、线索跟进作业模板、资源下载跟进流程和推广线索标签。",
        routePages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "marketing.html", "resources.html", "course.html"],
        deliverables: ["A/B/C 分级", "跟进节奏", "开发信角度", "资料缺口", "下一步动作"],
        codexTasks: ["清洗客户字段", "生成跟进动作", "草拟开发信角度", "汇总线索培育计划"],
        manualChecks: ["客户真实性和采购能力", "触达平台规则和隐私合规", "代理、授信和合作策略"],
        acceptance: "课堂能演示线索分级，学员能替换自己的脱敏客户库，并说明人工判断边界。",
        owner: "市场运营 + 外贸主管"
      },
      {
        id: "inquiry-analyzer",
        label: "询盘识别与回复工具",
        priorityScore: 24,
        sprintGoal: "把集成房屋英文询盘拆成已知需求、缺失字段、补问清单、风险边界和英文回复草稿。",
        sourceEvidence: "询盘识别演示器、询盘作业模板、集成房屋沙特 80 套询盘和课堂试讲记录。",
        routePages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "classroom.html", "case-integrated-house.html", "prompts.html"],
        deliverables: ["需求摘要", "缺失字段", "补问清单", "风险提醒", "英文回复草稿"],
        codexTasks: ["提取客户需求", "生成补问清单", "起草英文回复", "导出课堂分析包"],
        manualChecks: ["价格、交期、认证和付款条款", "DDP、清关、税费和安装责任", "客户真实性和项目价值判断"],
        acceptance: "默认样例和替换询盘均能输出可复制回复，且明确不能自动承诺报价、交期和 DDP。",
        owner: "产品负责人 + 主讲老师"
      },
      {
        id: "quotation-calculator",
        label: "FOB/CIF 报价测算器",
        priorityScore: 23,
        sprintGoal: "把成本、选配、国内费用、海运、保险、汇率和利润拆成可复核报价结构。",
        sourceEvidence: "报价测算演示器、报价作业模板、CIF Jeddah 集成房屋样例和企业真实费用项替换需求。",
        routePages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "course.html", "case-integrated-house.html", "enterprise.html"],
        deliverables: ["FOB 单价", "CIF 单价", "整单金额", "利润率", "漏项提醒", "报价说明草稿"],
        codexTasks: ["拆分费用项", "生成报价结构说明", "提示漏项和异常利润", "导出报价作业包"],
        manualChecks: ["真实成本、运费、装柜数量和汇率有效期", "最终报价和利润口径", "DDP、目的港费用和清关责任"],
        acceptance: "工具输出只能作为课堂测算结构，正式价格、利润、运费和付款条款必须授权岗位确认。",
        owner: "报价顾问 + 产品负责人"
      },
      {
        id: "document-checker",
        label: "PI/CI/PL 单证一致性检查器",
        priorityScore: 18,
        sprintGoal: "把 PI、CI、PL、订舱资料和提单草稿中的字段冲突检查成可复查报告。",
        sourceEvidence: "单证一致性演示器、单证检查作业模板和 PI/CI/PL 冲突样例。",
        routePages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "course.html", "case-integrated-house.html"],
        deliverables: ["冲突字段", "缺失字段", "风险等级", "修改建议", "复查记录"],
        codexTasks: ["标准化字段名称", "比对单证关键字段", "输出冲突报告", "生成复查清单"],
        manualChecks: ["正式单据和提单确认件", "HS 编码、申报要素和信用证审单", "目的港清关和报关专业判断"],
        acceptance: "能识别高风险字段冲突，并把专业审单、报关和清关责任保留给人工岗位。",
        owner: "单证顾问 + 产品负责人"
      },
      {
        id: "payment-risk",
        label: "付款方式与 DDP 风险矩阵",
        priorityScore: 21,
        sprintGoal: "把低定金、到港后尾款、OA、远期信用证和 DDP 条款转成风险等级、审批清单和客户谨慎回复。",
        sourceEvidence: "付款风险演示器、付款风险作业模板和 DDP 项目风险样例。",
        routePages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "course.html", "enterprise.html", "case-integrated-house.html"],
        deliverables: ["风险等级", "审批清单", "谈判方向", "客户谨慎回复", "人工确认边界"],
        codexTasks: ["整理付款条款", "生成风险提醒", "输出内部审批清单", "起草谨慎回复"],
        manualChecks: ["客户资信、授信和信保", "银行审单、合同、税务和法务判断", "DDP 清关税费和目的地交付责任"],
        acceptance: "客户回复不能直接接受未经审批的高风险条款，必须提示财务、法务、银行或货代确认。",
        owner: "财务/风控顾问 + 产品负责人"
      },
      {
        id: "enterprise-sop",
        label: "企业工具与 SOP 项目",
        priorityScore: 22,
        sprintGoal: "把企业真实重复流程改造成岗位 SOP、工具字段、内训作业和上线验收体系。",
        sourceEvidence: "企业诊断 brief、岗位访谈、企业材料清单、培训方案映射台和企业交付验收板。",
        routePages: ["enterprise.html", "playbook.html", "tools.html", "tools.html#tool-classroom-acceptance-board", "classroom.html"],
        deliverables: ["企业诊断 brief", "工具字段规格", "岗位 SOP", "培训计划", "上线验收清单"],
        codexTasks: ["归纳流程卡点", "生成 SOP 草稿", "整理工具字段", "输出培训交付计划"],
        manualChecks: ["企业内部数据授权和脱敏", "管理层审批和岗位责任", "合同范围、验收标准和售后边界"],
        acceptance: "企业用授权脱敏样例完成验收，岗位责任、数据权限、维护人和后续服务范围清楚。",
        owner: "企业服务负责人 + 交付负责人"
      }
    ],
    sprintTypes: [
      {
        id: "template-hardening",
        label: "模板/作业包加固",
        stage: "Sprint 01",
        score: 8,
        scope: "先完善字段、作业模板、评分清单和人工边界，不进入交互开发。",
        deliverables: ["字段字典", "作业模板", "评分清单", "边界说明"],
        gate: "学员能用自己的脱敏资料替换样例，并完成一次作业验收。"
      },
      {
        id: "static-prototype",
        label: "静态原型验证",
        stage: "Sprint 02",
        score: 10,
        scope: "先做静态工具界面、课堂脚本和招生展示截图，验证老师能否讲清楚。",
        deliverables: ["静态 mockup", "课堂演示脚本", "招生展示截图", "改版清单"],
        gate: "完成一次试讲和一次用户反馈复盘后，再决定是否轻交互。"
      },
      {
        id: "light-interactive",
        label: "轻交互工具开发",
        stage: "Sprint 03",
        score: 16,
        scope: "开发可控输入、即时输出、复制导出、移动端适配和上线验收。",
        deliverables: ["交互页面", "默认样例", "复制/导出", "移动端适配", "上线验收记录"],
        gate: "桌面和手机完成核心路径，输出区明确不替代人工确认。"
      },
      {
        id: "industry-replication",
        label: "行业字段复制",
        stage: "Sprint 04",
        score: 14,
        scope: "从集成房屋复制到机械、建材、家具或消费品，只替换行业字段和样例。",
        deliverables: ["行业字段差异表", "替换样例", "课堂脚本", "维护记录"],
        gate: "新增行业不能默认套用价格、认证、物流、清关和合同责任。"
      },
      {
        id: "enterprise-custom",
        label: "企业定制工具/SOP",
        stage: "Sprint 05",
        score: 18,
        scope: "把企业真实流程转成字段规格、岗位 SOP、内训任务、验收清单和维护计划。",
        deliverables: ["企业字段规格", "岗位 SOP", "内训作业", "验收清单", "维护计划"],
        gate: "企业 scope brief、数据授权和验收标准确认后才允许报价和交付。"
      }
    ],
    evidenceStatuses: [
      {
        id: "scattered",
        label: "证据分散",
        score: 6,
        gate: "暂不进入开发",
        repair: "先补业务样例、字段、输出格式、课堂记录和人工确认人。",
        proof: "只能作为内部想法池，不建议对外展示。"
      },
      {
        id: "partial-evidence",
        label: "部分证据具备",
        score: 14,
        gate: "只允许模板或静态验证",
        repair: "补作业验收、异常样例、下载承接和页面证据。",
        proof: "可小范围用于试讲或内部评审。"
      },
      {
        id: "ready-evidence",
        label: "证据可用",
        score: 24,
        gate: "可进入轻交互或课堂 beta",
        repair: "补齐发布审计、移动端检查和维护日志。",
        proof: "可用于正式课、课堂演示和资源承接。"
      },
      {
        id: "enterprise-authorized",
        label: "企业授权证据",
        score: 28,
        gate: "可评估企业定制",
        repair: "确认授权范围、脱敏规则、岗位责任和项目验收。",
        proof: "可用于企业内训和工具/SOP 项目，不默认公开展示。"
      }
    ],
    releaseTargets: [
      {
        id: "internal-review",
        label: "内部评审",
        score: 6,
        useScope: "只给课程、产品和运营团队评估，不对外展示。",
        routePages: ["playbook.html", "tools.html"],
        testGate: "数据语法、页面挂载、边界口径和负责人确认。",
        commercialUse: "暂不进入招生或企业承诺。"
      },
      {
        id: "classroom-beta",
        label: "课堂 Beta",
        score: 12,
        useScope: "用于正式课或公开课演示，收集学员作业替换反馈。",
        routePages: ["classroom.html", "learning.html", "tools.html", "tools.html#tool-classroom-acceptance-board"],
        testGate: "默认样例、学员替换、复制导出、课堂验收板和助教评分均可运行。",
        commercialUse: "可作为正式课交付证据，但不能承诺自动成交。"
      },
      {
        id: "resource-entry",
        label: "资源/试听入口",
        score: 10,
        useScope: "用于资源中心、试听课或营销页面展示工具价值。",
        routePages: ["resources.html", "marketing.html", "enrollment.html"],
        testGate: "下载承接、咨询分流、宣传边界和跟进标签必须齐全。",
        commercialUse: "可用于转化引导，必须回到报名咨询或企业诊断。"
      },
      {
        id: "enterprise-delivery",
        label: "企业交付",
        score: 14,
        useScope: "用于企业诊断、团队内训、工具/SOP 共建或项目验收。",
        routePages: ["enterprise.html", "playbook.html", "tools.html", "tools.html#tool-classroom-acceptance-board"],
        testGate: "数据授权、岗位责任、交付范围、课堂验收、项目验收标准和维护人必须明确。",
        commercialUse: "可进入企业服务报价，但必须签署范围和边界。"
      },
      {
        id: "platform-release",
        label: "平台正式发布",
        score: 13,
        useScope: "进入工具中心、课堂、资源、报名或企业服务的长期维护入口。",
        routePages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "playbook.html", "course.html"],
        testGate: "语法、HTTP、桌面/移动端、下载资源、课堂验收板、README、缓存版本和截图验证通过。",
        commercialUse: "可作为平台工具资产对外展示，仍需人工确认关键业务结论。"
      }
    ],
    riskModes: [
      {
        id: "standard-business",
        label: "常规业务边界",
        penalty: 3,
        tag: "业务复核",
        boundary: "工具只做整理、草稿、检查和辅助判断，正式业务动作仍由负责人确认。",
        reviewers: ["课程负责人", "产品负责人"],
        noGo: "不承诺自动成交、自动获客、自动报价。"
      },
      {
        id: "high-compliance",
        label: "报价/单证/合规高风险",
        penalty: 12,
        tag: "专业审批",
        boundary: "价格、成本、利润、付款、HS 编码、信用证、清关、税费、合同和 DDP 责任只能提示，不能自动决定。",
        reviewers: ["报价负责人", "财务/风控", "单证/报关", "法务或外部专业人员"],
        noGo: "不能把工具检查结果当作最终报价、正式单据、银行审单或合规结论。"
      },
      {
        id: "enterprise-private",
        label: "企业敏感资料",
        penalty: 10,
        tag: "授权交付",
        boundary: "企业真实资料必须脱敏、授权、留痕，并区分内部交付、课堂演示和公开展示权限。",
        reviewers: ["企业服务负责人", "企业授权岗位", "交付负责人"],
        noGo: "不能公开展示未授权资料，不能替代企业管理审批或一次性替代 ERP/CRM。"
      }
    ],
    reviewCycles: [
      {
        id: "weekly-sprint",
        label: "周度工具 Sprint",
        score: 6,
        cadence: "每周固定收集课堂、作业、企业和招生反馈，选择一个工具动作推进。",
        closeout: "周末记录完成范围、未完成原因、下期依赖和页面回写。"
      },
      {
        id: "release-review",
        label: "发布日复盘",
        score: 5,
        cadence: "每次上线前后检查页面、数据、下载、截图和承诺边界。",
        closeout: "发布后写维护日志，更新 README 和下期版本池。"
      },
      {
        id: "classroom-review",
        label: "课堂验证复盘",
        score: 5,
        cadence: "公开课或正式课后收集学员替换、卡点、作业通过率和老师演示问题。",
        closeout: "把课堂卡点回写到课程、工具、指令或作业模板。"
      },
      {
        id: "enterprise-acceptance",
        label: "企业验收复盘",
        score: 7,
        cadence: "企业诊断、内训或工具/SOP 项目后按交付范围和验收证据复盘。",
        closeout: "确认是否进入下一业务线扩展、工具维护或长期顾问服务。"
      }
    ],
    operatingRules: [
      "工具 sprint 必须从真实业务动作进入，不能为了展示技术而开发。",
      "每期只推进一个主工具或一个明确字段替换，避免工具库变成不可维护的半成品集合。",
      "上线前必须同时通过课程价值、页面证据、下载承接、人工边界和移动端渲染检查。",
      "企业定制必须先确认数据授权、交付范围、验收标准和维护责任，再进入报价或开发。"
    ]
  },
  goalComplianceDownloads: [
    {
      label: "下载目标执行矩阵 CSV",
      href: "./downloads/platform-goal-compliance-matrix.csv",
      format: "CSV",
      note: "用于每次新增页面、课程、工具或企业服务前逐条验收 goal 标准。"
    }
  ],
  goalComplianceMatrix: [
    {
      requirement: "以业务场景为核心",
      evidence: "首页痛点、课程模块、课堂工作台、自动化地图和案例中心都从客户开发、询盘、报价、订单、单证、付款风险等外贸动作进入。",
      gate: "新增内容必须先写清业务输入、使用角色、课堂场景和输出用途，不能只讲 AI 功能菜单。",
      owner: "课程负责人 + 内容负责人",
      updateTrigger: "出现新的业务痛点、行业案例、企业咨询或学员作业卡点。"
    },
    {
      requirement: "以工具产出为交付",
      evidence: "工具中心已维护产品资料、客户线索、询盘识别、报价测算、订单跟进、单证检查和付款风险 7 个核心工具演示。",
      gate: "新增模块必须有可复制输出物、作业验收标准和资源/下载承接，不能只停留在讲解稿。",
      owner: "产品负责人 + 主讲老师",
      updateTrigger: "同一模板、字段或检查动作在课堂和咨询中反复出现。"
    },
    {
      requirement: "以网页为课程主载体",
      evidence: "14 个 HTML 页面覆盖招生、课程、课堂、学员、案例、工具、指令、资源、推广、企业服务和运营指南。",
      gate: "关键内容优先写入 data/*.js 并由页面渲染，老师能直接打开网页授课或做咨询证明。",
      owner: "开发负责人 + 课程运营",
      updateTrigger: "课程资料、课堂演示、下载包或企业服务出现离线文档无法统一维护的情况。"
    },
    {
      requirement: "集成房屋作为第一套完整案例",
      evidence: "集成房屋案例页和数据文件已贯穿产品资料、沙特询盘、CIF Jeddah 报价、订单节点、单证冲突和 DDP/付款风险。",
      gate: "新增行业案例前必须先能替换集成房屋字段，并保留客户、产品、报价、订单、单证和风险六类证据。",
      owner: "行业顾问 + 内容负责人",
      updateTrigger: "准备扩展机械、家具、建材、消费品等新行业案例。"
    },
    {
      requirement: "明确 Codex 和人工确认边界",
      evidence: "首页风险边界、自动化地图、工具中心、报名页、企业服务和运营指南均写明价格、利润、付款、交期、合规、法务和审单需人工确认。",
      gate: "任何页面不得承诺自动成交、自动报价、自动审单、替代报关/税务/法务或替代管理层审批。",
      owner: "课程负责人 + 运营负责人",
      updateTrigger: "新增工具、推广文案、企业服务包或学员公开案例。"
    },
    {
      requirement: "商务简约与液态毛玻璃风格",
      evidence: "全站共用 assets/styles.css，采用深色商务主色、玻璃面板、克制卡片、数据表和运营工作台布局。",
      gate: "新增模块必须通过 390px 与桌面视口检查，不能出现横向溢出、文字遮挡、过度营销化视觉或一屏只有装饰。",
      owner: "开发负责人",
      updateTrigger: "新增页面、表格、工具卡、下载卡或交互工具。"
    },
    {
      requirement: "数据化维护和长期扩展",
      evidence: "主要内容拆分到 14 个 data/*.js 文件，README 记录页面、数据文件、下载资产和课程模块标准。",
      gate: "新增内容必须同步数据源、页面挂载点、README、下载引用、缓存版本和验证记录。",
      owner: "开发负责人 + 内容负责人",
      updateTrigger: "任何页面内容、下载资产、导航入口或课程模块发生更新。"
    },
    {
      requirement: "商业落地闭环",
      evidence: "报名路径、资源中心、推广运营和企业服务已连接免费资源、试听课、系统课、陪跑、企业诊断、团队内训和工具/SOP 共建。",
      gate: "新增资源或活动必须写清目标人群、下一步动作、证据页面、承诺边界和复盘指标。",
      owner: "运营负责人 + 企业服务负责人",
      updateTrigger: "新增推广渠道、试听课、企业咨询入口、课程 SKU 或复购服务。"
    }
  ],
  evidenceCoverageIndex: {
    title: "全站证据覆盖索引",
    description:
      "给负责人、老师、课程顾问、运营、产品和企业服务团队使用：每一类平台能力都要能追溯到页面、数据文件、下载资产、Codex 可辅助事项和人工确认门槛。",
    downloads: [
      {
        label: "下载全站证据覆盖索引 CSV",
        href: "./downloads/platform-evidence-coverage-index.csv",
        format: "CSV",
        note: "用于按平台能力检查页面、数据文件、下载资产、负责人、Codex 任务和人工确认门槛。"
      },
      {
        label: "下载证据覆盖复盘模板 MD",
        href: "./downloads/platform-evidence-review-template.md",
        format: "Markdown",
        note: "用于公开课、正式课、企业诊断、工具上线和版本发布后的证据复盘。"
      }
    ],
    metrics: [
      {
        value: "14",
        label: "页面入口",
        note: "首页、课程、课堂、学员、自动化、案例中心、集成房屋案例、工具、指令、资源、报名、推广、企业和运营指南。"
      },
      {
        value: "14",
        label: "数据文件",
        note: "主要内容均由 data/*.js 维护，新增模块先补数据，再补渲染和样式。"
      },
      {
        value: "168",
        label: "下载资产",
        note: "资源 7 天转化复盘、案例发布路由、企业交付回写、工具 sprint、课程交付、课堂演示、报名咨询、推广运营和治理审计均有可下载承接资产。"
      },
      {
        value: "9",
        label: "覆盖能力",
        note: "招生、课程、课堂、案例、工具、指令、资源、企业和运营治理。"
      }
    ],
    coverage: [
      {
        area: "招生转化",
        purpose: "把免费资源、试听课、报名前顾虑、正式课成果证据和企业线索分流成可复盘转化路径。",
        pageRoutes: ["index.html#entry-router", "resources.html", "enrollment.html", "marketing.html"],
        dataFiles: ["data/home.js", "data/site.js", "data/enrollment.js", "data/marketing.js"],
        downloads: ["homepage-entry-routing-board.csv", "commercial-proof-brief-template.md", "enrollment-conversion-command-center.csv", "marketing-proof-campaign-router.csv"],
        codexAssist: ["归纳访客身份和顾虑", "匹配证据页面和资源", "生成试听后跟进摘要", "整理内容选题和复盘"],
        humanGate: "课程价格、付款、交付范围、展示授权和销售承诺必须人工确认。",
        owner: "运营负责人 + 课程顾问",
        nextReview: "每次公开课、资料领取或报名咨询后 24 小时回写。"
      },
      {
        area: "课程交付",
        purpose: "把系统课、陪跑课和企业内训拆成可上课、可提交、可验收、可复盘的模块化交付。",
        pageRoutes: ["course.html", "learning.html", "classroom.html#classroom-system-lesson-route"],
        dataFiles: ["data/course-foreign-trade-codex.js", "data/learning.js", "data/classroom.js"],
        downloads: ["course-delivery-blueprint.csv", "course-cohort-delivery-plan.csv", "system-lesson-assignment-handoff-board.csv"],
        codexAssist: ["生成课程排期", "草拟作业要求", "汇总助教验收建议", "生成学员返修摘要"],
        humanGate: "课程节奏、作业通过、学员承诺和成果展示必须由教学团队确认。",
        owner: "课程负责人 + 主讲老师",
        nextReview: "每个模块课后复盘一次。"
      },
      {
        area: "课堂演示",
        purpose: "让老师按网页路线完成讲课、工具切换、助教检查、作业布置和课后维护。",
        pageRoutes: ["classroom.html", "case-integrated-house.html", "tools.html", "prompts.html"],
        dataFiles: ["data/classroom.js", "data/case-integrated-house.js", "data/tools.js", "data/prompts.js"],
        downloads: ["classroom-delivery-desk.csv", "classroom-rehearsal-gate-board.csv", "integrated-house-screen-by-screen-script.csv"],
        codexAssist: ["生成逐屏讲稿", "整理演示切换路线", "记录课堂问题", "生成助教检查点"],
        humanGate: "讲课节奏、业务判断、公开展示授权和 CTA 口径必须人工确认。",
        owner: "主讲老师 + 助教负责人",
        nextReview: "每次试讲、公开课或正式课后复盘。"
      },
      {
        area: "集成房屋案例",
        purpose: "以第一套完整案例承载产品资料、询盘、报价、订单、单证和风险边界，后续行业按同一母版复制。",
        pageRoutes: ["cases.html", "cases.html#case-field-replacement-validation", "cases.html#case-publication-router", "case-integrated-house.html", "course.html", "enterprise.html"],
        dataFiles: ["data/cases.js", "data/case-integrated-house.js", "data/course-foreign-trade-codex.js", "data/enterprise.js"],
        downloads: ["integrated-house-toolkit.csv", "integrated-house-demo-command-board.csv", "industry-case-readiness-scorecard.csv", "industry-case-field-replacement-board.csv", "industry-case-field-replacement-brief-template.md", "industry-case-publication-router.csv", "industry-case-publication-brief-template.md"],
        codexAssist: ["整理字段替换", "生成案例演示 brief", "汇总行业复制缺口", "生成机械设备字段替换复盘", "生成企业诊断样板", "生成发布与资源化 Brief"],
        humanGate: "产品参数、价格、认证、交付、清关和付款风险必须人工确认。",
        owner: "行业顾问 + 内容负责人",
        nextReview: "新增行业案例前先按集成房屋母版审查。"
      },
      {
        area: "工具库",
        purpose: "把课堂高频动作和企业重复流程升级成字段清楚、输出可验收、边界可解释的工具资产。",
        pageRoutes: ["tools.html", "tools.html#tool-classroom-acceptance-board", "tools.html#tool-sample-validation-board", "automation.html", "classroom.html", "enterprise.html"],
        dataFiles: ["data/tools.js", "data/automation.js", "data/classroom.js", "data/enterprise.js"],
        downloads: ["tool-build-brief-template.csv", "tool-demand-scorecard.csv", "tool-sprint-command-center.csv", "tool-launch-acceptance-checklist.md", "tool-classroom-acceptance-board.csv", "tool-classroom-acceptance-brief-template.md", "tool-sample-validation-board.csv", "tool-sample-validation-brief-template.md"],
        codexAssist: ["生成字段字典", "整理测试样例", "草拟工具 brief", "生成样例替换复盘", "生成上线验收和版本回写任务"],
        humanGate: "工具开发范围、真实数据授权、输出可用性、样例展示范围和商业承诺必须人工确认。",
        owner: "产品负责人 + 开发负责人",
        nextReview: "每期工具 sprint 后验收。"
      },
      {
        area: "指令库",
        purpose: "把课程中的 Codex 操作沉淀为可复制、可替换、可验收、可治理的业务场景指令资产。",
        pageRoutes: ["prompts.html", "course.html", "tools.html", "enterprise.html"],
        dataFiles: ["data/prompts.js", "data/course-foreign-trade-codex.js", "data/tools.js", "data/enterprise.js"],
        downloads: ["integrated-house-prompt-pack.md", "prompt-quality-checklist.csv", "prompt-deployment-routing-board.csv", "prompt-governance-board.csv"],
        codexAssist: ["生成业务场景指令", "辅助行业替换", "生成质量检查", "整理部署建议"],
        humanGate: "输入资料真实性、输出是否可公开、质量门槛和人工边界必须确认。",
        owner: "内容负责人 + 主讲老师",
        nextReview: "新增指令或行业替换前审查。"
      },
      {
        area: "资源下载",
        purpose: "把免费资料、试听课模板、作业包和运营跟进连接到系统课、公开课和企业诊断。",
        pageRoutes: ["resources.html", "resources.html#resource-conversion-review", "index.html#trial-class", "marketing.html", "enrollment.html"],
        dataFiles: ["data/site.js", "data/home.js", "data/marketing.js", "data/enrollment.js"],
        downloads: ["repeat-work-audit.csv", "resource-lead-tagging-board.csv", "resource-follow-up-sequence.csv", "resource-conversion-review-router.csv", "resource-conversion-review-brief-template.md", "trial-class-brief-template.md"],
        codexAssist: ["生成资源标签", "整理跟进序列", "草拟试听课 brief", "汇总培育选题", "生成 7 天转化复盘"],
        humanGate: "联系方式使用、触达频率、资料适配和销售边界必须人工确认。",
        owner: "市场运营 + 课程顾问",
        nextReview: "每周复盘下载转化和跟进质量。"
      },
      {
        area: "商业产品包装",
        purpose: "把免费资料、系统课、陪跑、企业诊断、团队内训和工具共建统一成可销售、可交付、可验收的产品包。",
        pageRoutes: ["playbook.html#playbook-commercial-offer-review", "enrollment.html", "enterprise.html", "resources.html"],
        dataFiles: ["data/playbook.js", "data/enrollment.js", "data/enterprise.js", "data/site.js"],
        downloads: ["course-product-sku-delivery-matrix.csv", "commercial-offer-boundary-note.md", "commercial-offer-review-router.csv", "commercial-offer-review-brief-template.md"],
        codexAssist: ["生成付款前确认 Brief", "整理产品包缺口", "匹配证据页面和下载资产", "输出销售边界和暂缓原因"],
        humanGate: "价格、付款、开班、企业 scope、合同、交付验收、复购和高责任承诺必须人工确认。",
        owner: "负责人 + 课程顾问 + 企业服务负责人",
        nextReview: "每次销售话术更新、付款确认、企业签约或续费复盘前检查。"
      },
      {
        area: "企业服务",
        purpose: "把企业咨询从临时沟通变成资料成熟度诊断、内训方案、工具/SOP 共建和验收闭环。",
        pageRoutes: ["enterprise.html", "automation.html", "tools.html", "playbook.html#playbook-evidence-coverage-index"],
        dataFiles: ["data/enterprise.js", "data/automation.js", "data/tools.js", "data/playbook.js"],
        downloads: ["enterprise-material-checklist.csv", "enterprise-training-plan-mapper.csv", "enterprise-project-kickoff-command-center.csv", "enterprise-project-kickoff-meeting-note-template.md", "enterprise-service-delivery-plan.csv", "enterprise-project-acceptance-checklist.md", "enterprise-delivery-writeback-router.csv", "enterprise-delivery-evidence-authorization-template.md"],
        codexAssist: ["整理访谈纪要", "生成资料清单", "映射内训模块", "草拟 SOP 和验收 brief"],
        humanGate: "企业授权、scope、报价、合同、项目周期和验收责任必须人工确认。",
        owner: "企业服务负责人 + 交付负责人",
        nextReview: "每次企业诊断、内训或验收后复盘。"
      },
      {
        area: "运营治理",
        purpose: "把目标矩阵、发布审计、维护日志、资料授权和缓存版本统一成可追踪的长期运营机制。",
        pageRoutes: ["playbook.html", "README.md", "downloads/"],
        dataFiles: ["data/playbook.js", "data/site.js", "README.md"],
        downloads: ["platform-evidence-coverage-index.csv", "platform-evidence-review-template.md", "platform-release-audit.csv", "platform-visual-qa-gate.csv", "platform-visual-qa-brief-template.md", "platform-maintenance-log-builder.csv", "platform-maintenance-log-release-note-template.md", "content-maintenance-log.csv"],
        codexAssist: ["检查页面证据", "核对下载引用", "整理缓存版本", "生成维护日志和下期回写"],
        humanGate: "是否上线、是否公开、是否进入销售或企业承诺必须由负责人确认。",
        owner: "开发负责人 + 内容负责人",
        nextReview: "每次发布前后各检查一次。"
      }
    ],
    operatingRules: [
      "每类能力至少要有页面证据、数据文件、下载资产、负责人、Codex 辅助事项和人工确认门槛。",
      "新增页面或资源时，先看本索引是否已有承接路线；没有承接路线时先进入目标矩阵和自检台。",
      "企业资料、学员成果、价格、付款、合规、单证、法务和公开展示永远不能只由 Codex 判断。",
      "每次发布后把新增下载资产、缓存版本、README 和资源中心同步，否则视为维护未闭环。"
    ]
  },
  goalSelfCheck: {
    title: "新增模块合规自检台",
    description:
      "用于每次新增课程模块、工具、资源、页面、推广活动或企业服务前，先判断是否符合培训公司长期平台标准。",
    defaultValues: {
      assetType: "tool",
      assetName: "集成房屋询盘识别演示工具",
      scenario: "沙特建筑承包商采购 80 套 20ft 可扩展集成房屋，业务员需要快速拆解需求和缺失信息。",
      deliverable: "需求识别表、缺失信息清单、英文回复草稿和人工确认边界。",
      conversion: "资源中心领取演示课资料，进入 10 分钟试听课，再进入报名路径或企业诊断。"
    },
    assetTypes: [
      { value: "course", label: "课程模块" },
      { value: "classroom", label: "课堂演示" },
      { value: "tool", label: "工具功能" },
      { value: "prompt", label: "指令包" },
      { value: "resource", label: "资源下载" },
      { value: "case", label: "行业案例" },
      { value: "marketing", label: "推广活动" },
      { value: "enterprise", label: "企业服务" }
    ],
    fields: [
      {
        id: "assetName",
        label: "新增内容名称",
        placeholder: "例：集成房屋询盘识别演示工具",
        required: true
      },
      {
        id: "scenario",
        label: "真实业务场景",
        placeholder: "写清客户、产品、业务动作和卡点",
        required: true
      },
      {
        id: "deliverable",
        label: "交付输出物",
        placeholder: "写清学员或企业能拿走复用的表格、清单、指令或报告",
        required: true
      },
      {
        id: "conversion",
        label: "下一步承接动作",
        placeholder: "写清进入资源、试听、报名、课堂、企业诊断或复盘的路径",
        required: true
      }
    ],
    checks: [
      {
        id: "businessScenario",
        title: "业务场景完整",
        requirement: "已写清业务输入、使用角色、课堂/咨询场景和输出用途。",
        repair: "补客户类型、产品条件、使用角色和业务动作，避免只写 AI 功能。"
      },
      {
        id: "toolOutput",
        title: "工具产出明确",
        requirement: "已有可复制输出物、作业验收标准或下载承接。",
        repair: "补表格、清单、检查报告、英文草稿、指令包或作业模板。"
      },
      {
        id: "webCarrier",
        title: "网页承载",
        requirement: "内容优先进入 data/*.js，并有页面挂载点和可直接授课的展示方式。",
        repair: "补数据源、HTML 挂载区、渲染函数、README 说明和缓存版本。"
      },
      {
        id: "integratedHouse",
        title: "集成房屋样板可验证",
        requirement: "能用集成房屋案例先跑通，再考虑替换到其他行业。",
        repair: "补 20ft 可扩展集成房屋的产品、询盘、报价、订单、单证或风险证据。"
      },
      {
        id: "manualBoundary",
        title: "人工确认边界清楚",
        requirement: "价格、利润、付款、交期、认证、合规、审单和客户承诺均标出人工确认点。",
        repair: "补禁止承诺项，明确 Codex 只做整理、草稿、检查和辅助判断。"
      },
      {
        id: "visualResponsive",
        title: "视觉和响应式通过",
        requirement: "符合商务简约与液态毛玻璃风格，390px 和桌面视口无横向溢出或文字遮挡。",
        repair: "补移动端检查、文本换行、稳定尺寸和卡片/表格响应式样式。"
      },
      {
        id: "dataMaintenance",
        title: "数据化可维护",
        requirement: "同步数据源、下载引用、README、缓存版本和验证记录。",
        repair: "补维护记录、下载文件存在性检查、旧版本号清理和数据语法检查。"
      },
      {
        id: "commercialLoop",
        title: "商业闭环明确",
        requirement: "写清目标人群、下一步 CTA、证据页面、承诺边界和复盘指标。",
        repair: "补从资料领取、试听、报名、课堂、企业服务或继续培育的承接路径。"
      }
    ],
    levels: [
      {
        id: "ready",
        minPassed: 8,
        title: "可进入发布审计",
        summary: "8 项标准全部具备，可以进入发布审计、HTTP 检查和移动端渲染验证。",
        nextAction: "下载或复制自检结论，继续执行发布审计表和内容维护日志。"
      },
      {
        id: "repair",
        minPassed: 5,
        title: "需要返修后再发布",
        summary: "核心方向基本正确，但仍有标准缺口，暂不建议作为正式课程或招生页面发布。",
        nextAction: "优先补未通过项，再重新跑页面、下载和边界检查。"
      },
      {
        id: "draft",
        minPassed: 0,
        title: "暂缓上线",
        summary: "当前更像想法草稿，还没有形成培训公司长期平台可维护的交付模块。",
        nextAction: "先补业务场景、交付输出物、人工边界和转化承接，再进入页面开发。"
      }
    ],
    boundary:
      "自检通过不代表可以替代人工审批。价格、利润、付款、交期、法务、税务、认证、报关和客户承诺仍必须由负责人确认。"
  },
  principles: [
    {
      title: "以业务场景为核心",
      description: "每个页面和模块都必须从外贸动作出发，例如客户开发、询盘、报价、跟单、单证，而不是从 AI 功能出发。",
      checks: ["有真实业务输入", "有角色和使用场景", "能对应课程讲解"]
    },
    {
      title: "以工具产出为交付",
      description: "学员最终拿走的不是概念，而是客户库、询盘表、报价字段、订单看板、单证检查表和可复制指令。",
      checks: ["有明确输出物", "能复制到自己行业", "能作为作业验收"]
    },
    {
      title: "以网页为课程主载体",
      description: "课程内容、案例演示、工具预览和下载资源都优先沉淀在网站中，老师上课和后续维护都围绕网页展开。",
      checks: ["页面可直接授课", "模块可独立分享", "数据可持续更新"]
    },
    {
      title: "明确自动化边界",
      description: "Codex 可以整理、检查、生成草稿和辅助判断，但价格、利润、付款、交期、合规和客户承诺必须人工确认。",
      checks: ["标出人工确认点", "不替代专业审单", "不自动承诺客户"]
    },
    {
      title: "资料脱敏和授权可追溯",
      description: "学员作业、企业样例、行业案例和公开展示素材必须先确认脱敏、授权范围和可使用场景，再进入课堂、资源或营销页面。",
      checks: ["有脱敏记录", "有授权范围", "可撤回和复盘"]
    }
  ],
  releaseBoard: {
    title: "平台发布与维护看板",
    description:
      "每次新增课程、案例、工具、指令、资源或企业服务时，都要从内容、页面、下载文件、转化动作和人工边界五个维度完成发布审计。",
    downloads: [
      {
        label: "下载发布审计表 CSV",
        href: "./downloads/platform-release-audit.csv",
        format: "CSV",
        note: "用于每次上线前逐项确认页面、数据、下载和边界。"
      },
      {
        label: "下载内容维护日志 CSV",
        href: "./downloads/content-maintenance-log.csv",
        format: "CSV",
        note: "用于记录每次新增、修改、验证和后续动作。"
      }
    ],
    statusCards: [
      {
        value: "14",
        label: "HTML 页面",
        detail: "覆盖首页、课程、课堂、学员、自动化、案例、工具、指令、资源、报名、推广、企业和运营指南。"
      },
      {
        value: "14",
        label: "数据文件",
        detail: "所有主要内容都通过 data/*.js 维护，页面只负责渲染结构。"
      },
      {
        value: "168",
        label: "下载资产",
        detail: "课程交付、开班排期、课程模块联动、集成房屋标准课、系统课正式授课、正式课作业提交闭环、正式课成果招生证据路由、结课后真实应用证据承接、正式课成果公开传播、学员结课后应用复盘、学员到企业线索承接、集成房屋逐屏讲解、集成房屋公开课转化、公开课试讲上线、公开课复盘回写、集成房屋演示指挥、课堂执行、讲师复制、作业返修、学员入班、学员成果、成果证据、交付证据样例、产品资料作业、询盘识别作业、报价测算作业、订单跟进作业、付款风险作业、单证检查作业、客户线索跟进作业、资料脱敏授权、商业产品包、试听课转化、商业证据索引、报名咨询、招生转化、报名入班交接、日常运营、推广素材、资源领取意向、资源标签分流、资源跟进、资源 7 天转化复盘、资源复盘 Brief、自动化范围判定、案例复制、案例准入评分、案例发布路由、案例发布 Brief、企业诊断、企业方案审批、企业项目启动、企业启动会记录、企业内训方案、企业交付、企业证据回写、企业证据授权、企业续约扩展、工具规格、工具需求评分、工具产品化、工具 Sprint、平台健康审计、初稿发布、视觉响应式验收、审计整改路由、整改复查验收、版本回写、维护日志发布说明、工具上线、指令包、指令部署、指令复盘、指令治理、版本评审、目标执行矩阵和运营审计表形成可领取资产。"
      },
      {
        value: "5",
        label: "发布检查维度",
        detail: "业务场景、工具输出、下载文件、转化路径、人工确认边界。"
      }
    ],
    releaseFlow: [
      {
        stage: "01",
        title: "改数据源",
        owner: "内容负责人",
        evidence: "新增或修改 data/*.js 中的结构化字段，不把课程正文直接写死在 HTML。"
      },
      {
        stage: "02",
        title: "补页面挂载点",
        owner: "开发负责人",
        evidence: "HTML 有对应 section 和 id，assets/app.js 有渲染函数，样式符合商务简约和液态毛玻璃风格。"
      },
      {
        stage: "03",
        title: "查交付资产",
        owner: "课程运营",
        evidence: "下载文件存在、资源中心可承接、课堂或企业服务能直接引用。"
      },
      {
        stage: "04",
        title: "验边界与转化",
        owner: "课程负责人 + 运营负责人",
        evidence: "页面写清下一步 CTA，不承诺自动成交、自动报价或替代专业判断。"
      },
      {
        stage: "05",
        title: "记录维护日志",
        owner: "运营负责人",
        evidence: "记录改动范围、验证命令、负责人和下次复盘动作。"
      }
    ],
    registry: [
      {
        asset: "页面与导航",
        source: "*.html + data/site.js",
        check: "导航 13 个入口一致，页面缓存版本同步，新增页面有 page hero 和 CTA。",
        owner: "开发负责人"
      },
      {
        asset: "课程与课堂",
        source: "data/course-foreign-trade-codex.js + data/classroom.js + data/learning.js",
        check: "课程、开班排期、课堂执行台、讲师复制、作业返修、学员入班、作业评分和学员交付物能互相引用，人工边界一致。",
        owner: "主讲老师 + 助教"
      },
      {
        asset: "案例与工具",
        source: "data/case-integrated-house.js + data/cases.js + data/tools.js",
        check: "集成房屋案例能支撑工具演示，新增行业有准入评分，工具有输入、输出、规格、需求评分、上线阶段和验收标准。",
        owner: "产品负责人"
      },
      {
        asset: "指令与资源",
        source: "data/prompts.js + data/site.js + downloads/",
        check: "指令包、部署验收、治理流程、资源卡片、招生总控、领取跟进和下载文件一致，资源都有下一步转化动作。",
        owner: "内容负责人 + 市场运营"
      },
      {
        asset: "报名、推广和企业服务",
        source: "data/enrollment.js + data/marketing.js + data/enterprise.js",
        check: "个人报名、招生总控、顾虑证据、日常运营、推广承接、企业诊断分流、企业内训方案和企业交付验收能闭环，承诺边界不冲突。",
        owner: "运营负责人 + 企业服务负责人"
      }
    ],
    proofChecks: [
      "node --check assets/app.js",
      "for f in data/*.js; do node --check \"$f\" || exit 1; done",
      "本地 HTTP 检查 14 个页面全部返回 200",
      "新增下载文件 HTTP 返回 200",
      "轻量渲染检查确认新增模块已挂载"
    ]
  },
  releaseWritebackRouter: {
    title: "版本回写与维护日志路由台",
    description:
      "用于把发布结果、课堂反馈、招生顾虑、企业交付、资源下载和工具 sprint 复盘路由到正确页面、数据文件、下载资产和维护日志，避免反馈停留在聊天记录或临时文档。",
    exportFilename: "release-writeback-routing-output.md",
    downloads: [
      {
        label: "下载版本回写路由表 CSV",
        href: "./downloads/release-writeback-routing-board.csv",
        format: "CSV",
        note: "用于记录反馈来源、回写模块、证据强度、更新动作、风险等级、维护文件、人工确认和下期复盘。"
      },
      {
        label: "下载维护日志回写模板 MD",
        href: "./downloads/release-writeback-note-template.md",
        format: "Markdown",
        note: "用于每次发布、课堂复盘、企业交付或工具迭代后的统一维护记录。"
      }
    ],
    defaults: {
      sourceSignal: "tool-sprint-release",
      assetArea: "tools",
      evidenceLevel: "validated",
      updateAction: "interactive-update",
      riskMode: "standard-business",
      reviewWindow: "weekly-review"
    },
    sourceSignals: [
      {
        id: "tool-sprint-release",
        label: "工具 Sprint 发布",
        score: 18,
        trigger: "工具 sprint 已完成默认样例、复制导出、课堂验收、真实样例替换、移动端验证或企业验收，需要回写工具中心和运营指南。",
        evidence: "工具 Sprint Brief、课堂验收板、样例替换验收表、浏览器截图、下载文件、验收清单和维护日志。",
        routePages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "tools.html#tool-sample-validation-board", "playbook.html", "classroom.html"],
        codexTasks: ["汇总工具 sprint 结果", "生成回写清单", "更新 README 草稿", "整理下期工具候选", "生成真实样例替换复盘"]
      },
      {
        id: "classroom-feedback",
        label: "课堂卡点 / 作业返修",
        score: 16,
        trigger: "正式课或公开课后，学员在同一工具、指令、作业或案例字段上反复出错。",
        evidence: "课堂记录、作业评分、返修追踪、老师复盘和助教建议。",
        routePages: ["classroom.html", "learning.html", "course.html"],
        codexTasks: ["归类课堂卡点", "生成作业返修说明", "更新课堂 runbook 草稿", "提炼讲师提醒"]
      },
      {
        id: "enrollment-objection",
        label: "招生顾虑 / 咨询反馈",
        score: 14,
        trigger: "报名咨询中反复出现关于课程价值、工具能否落地、时间投入、企业适配或付款边界的问题。",
        evidence: "咨询记录、顾虑回应、试听课跟进、报名方案 brief 和成交/未成交原因。",
        routePages: ["enrollment.html", "marketing.html", "resources.html"],
        codexTasks: ["整理高频顾虑", "匹配证据页面", "生成咨询话术草稿", "更新推广素材 brief"]
      },
      {
        id: "resource-download-signal",
        label: "资源下载 / 跟进标签",
        score: 12,
        trigger: "用户领取模板或试听资料后，后续咨询集中在同一业务问题或同一工具输出。",
        evidence: "资源下载记录、标签分流、跟进序列、用户问题和转化路径。",
        routePages: ["resources.html", "marketing.html", "enrollment.html"],
        codexTasks: ["汇总资源领取信号", "生成跟进标签", "更新资源卡片说明", "补资源转化路线"]
      },
      {
        id: "enterprise-delivery-feedback",
        label: "企业交付 / SOP 反馈",
        score: 20,
        trigger: "企业诊断、团队内训或工具/SOP 项目验收后，需要把真实流程问题回写成课程、工具或企业服务资产。",
        evidence: "企业诊断 brief、scope brief、交付验收表、授权脱敏样例和项目复盘。",
        routePages: ["enterprise.html", "tools.html", "playbook.html"],
        codexTasks: ["整理企业交付复盘", "生成 SOP 版本差异", "更新服务边界草稿", "提炼可公开的脱敏案例"]
      },
      {
        id: "case-expansion-signal",
        label: "行业案例扩展信号",
        score: 15,
        trigger: "准备从集成房屋复制到机械、建材、家具或消费品，需要判断案例字段和发布范围是否完整。",
        evidence: "行业案例 intake、准入评分、字段缺口、样例询盘、发布授权和人工确认边界。",
        routePages: ["cases.html", "cases.html#case-field-replacement-validation", "cases.html#case-publication-router", "case-integrated-house.html", "course.html"],
        codexTasks: ["整理行业字段差异", "生成案例准入评分", "补行业替换说明", "生成字段替换复盘", "更新案例 sprint 计划", "生成案例发布路由"]
      }
    ],
    assetAreas: [
      {
        id: "course",
        label: "课程体系",
        pageRoute: ["course.html", "classroom.html", "learning.html"],
        dataFiles: ["data/course-foreign-trade-codex.js", "data/classroom.js", "data/learning.js"],
        downloadFamilies: ["course-delivery-blueprint.csv", "course-cohort-delivery-plan.csv", "course-cohort-brief-template.md", "lesson-runbook-template.md", "assignment-review-scorecard.csv"],
        owner: "主讲老师 + 课程运营",
        validation: "模块仍包含业务痛点、案例、老师讲法、Codex 演示、输出物、作业、验收标准、常见卡点和风险边界。"
      },
      {
        id: "tools",
        label: "工具中心",
        pageRoute: ["tools.html", "tools.html#tool-classroom-acceptance-board", "tools.html#tool-sample-validation-board", "automation.html", "playbook.html"],
        dataFiles: ["data/tools.js", "data/automation.js", "assets/app.js"],
        downloadFamilies: ["tool-build-brief-template.csv", "tool-demand-scorecard.csv", "tool-sprint-command-center.csv", "tool-classroom-acceptance-board.csv", "tool-classroom-acceptance-brief-template.md", "tool-sample-validation-board.csv", "tool-sample-validation-brief-template.md"],
        owner: "产品负责人 + 开发负责人",
        validation: "工具必须保留业务场景、输入字段、输出结果、产品化 brief、课堂验收、真实样例替换验收、sprint 验收、人工边界和移动端检查。"
      },
      {
        id: "resources",
        label: "资源中心",
        pageRoute: ["resources.html", "resources.html#resource-conversion-review", "marketing.html", "enrollment.html"],
        dataFiles: ["data/site.js", "data/marketing.js", "data/enrollment.js"],
        downloadFamilies: ["resource-lead-tagging-board.csv", "resource-follow-up-sequence.csv", "resource-lead-routing-playbook.md", "resource-conversion-review-router.csv", "resource-conversion-review-brief-template.md"],
        owner: "市场运营 + 课程顾问",
        validation: "每个资源都必须有目标人群、下载承接、跟进标签、7 天转化复盘、下一步 CTA 和不夸大承诺的边界。"
      },
      {
        id: "commercial",
        label: "商业产品包装",
        pageRoute: ["playbook.html#playbook-commercial-offer-review", "enrollment.html", "enterprise.html", "resources.html"],
        dataFiles: ["data/playbook.js", "data/enrollment.js", "data/enterprise.js", "data/site.js"],
        downloadFamilies: ["course-product-sku-delivery-matrix.csv", "commercial-offer-boundary-note.md", "commercial-offer-review-router.csv", "commercial-offer-review-brief-template.md"],
        owner: "负责人 + 课程顾问 + 企业服务负责人",
        validation: "商业产品包必须绑定页面证据、交付物、下载资产、付款或签约前确认、人工边界和禁止承诺口径。"
      },
      {
        id: "enterprise",
        label: "企业服务",
        pageRoute: ["enterprise.html", "tools.html", "playbook.html"],
        dataFiles: ["data/enterprise.js", "data/tools.js", "data/playbook.js"],
        downloadFamilies: ["enterprise-project-kickoff-command-center.csv", "enterprise-project-kickoff-meeting-note-template.md", "enterprise-service-delivery-plan.csv", "enterprise-project-acceptance-checklist.md", "enterprise-delivery-writeback-router.csv", "enterprise-delivery-evidence-authorization-template.md", "enterprise-training-scope-brief.md"],
        owner: "企业服务负责人 + 交付负责人",
        validation: "企业服务必须先判断资料成熟度、授权范围、岗位责任、交付边界和验收证据。"
      },
      {
        id: "cases",
        label: "案例中心",
        pageRoute: ["cases.html", "cases.html#case-field-replacement-validation", "cases.html#case-publication-router", "case-integrated-house.html", "course.html"],
        dataFiles: ["data/cases.js", "data/case-integrated-house.js"],
        downloadFamilies: ["industry-case-intake.csv", "industry-case-readiness-scorecard.csv", "industry-case-sprint-plan.md", "industry-case-field-replacement-board.csv", "industry-case-field-replacement-brief-template.md", "industry-case-publication-router.csv", "industry-case-publication-brief-template.md"],
        owner: "行业顾问 + 内容负责人",
        validation: "案例必须能串起客户开发、询盘、报价、订单、单证、风险、字段替换证据、发布范围和人工确认边界。"
      },
      {
        id: "prompts",
        label: "指令库",
        pageRoute: ["prompts.html", "classroom.html", "tools.html"],
        dataFiles: ["data/prompts.js", "data/course-foreign-trade-codex.js"],
        downloadFamilies: ["integrated-house-prompt-pack.md", "prompt-quality-checklist.csv", "prompt-deployment-routing-board.csv", "prompt-deployment-brief-template.md", "prompt-governance-board.csv"],
        owner: "课程老师 + 内容负责人",
        validation: "指令必须有输入资料、输出结果、质量检查、行业替换规则、版本维护和人工确认边界。"
      },
      {
        id: "playbook",
        label: "运营指南",
        pageRoute: ["playbook.html", "tools.html", "enterprise.html"],
        dataFiles: ["data/playbook.js", "README.md"],
        downloadFamilies: ["platform-release-audit.csv", "platform-visual-qa-gate.csv", "platform-visual-qa-brief-template.md", "platform-maintenance-log-builder.csv", "platform-maintenance-log-release-note-template.md", "content-maintenance-log.csv", "release-writeback-routing-board.csv"],
        owner: "负责人 + 内容/开发/运营",
        validation: "运营指南必须同步目标矩阵、发布看板、版本评审、维护节奏、下载资产和验证记录。"
      }
    ],
    evidenceLevels: [
      {
        id: "weak",
        label: "证据不足",
        score: 4,
        gate: "暂不发布",
        repair: "先补真实记录、页面证据、负责人和验收方式。",
        use: "只进入想法池或周复盘。"
      },
      {
        id: "partial",
        label: "部分证据",
        score: 10,
        gate: "小范围试运行",
        repair: "补下载承接、异常样例、边界说明和移动端检查。",
        use: "可用于内部评审或课堂试讲。"
      },
      {
        id: "validated",
        label: "已验证",
        score: 18,
        gate: "可进入发布审计",
        repair: "补 README、缓存版本、HTTP 和截图记录。",
        use: "可用于正式课、资源承接或工具中心。"
      },
      {
        id: "authorized",
        label: "已授权",
        score: 20,
        gate: "可用于授权范围",
        repair: "补授权记录、脱敏范围、撤回方式和展示边界。",
        use: "可用于企业内训、授权案例或公开展示。"
      }
    ],
    updateActions: [
      {
        id: "copy-update",
        label: "更新页面文案/FAQ",
        score: 6,
        scope: "调整说明、顾虑回应、FAQ、课堂提醒或宣传边界。",
        deliverables: ["页面文案", "FAQ", "咨询话术", "边界说明"],
        validation: "文案不承诺自动成交、自动报价或替代专业判断。"
      },
      {
        id: "data-update",
        label: "更新数据结构",
        score: 10,
        scope: "新增或调整 data/*.js 字段、卡片、表格、路线、评分或边界。",
        deliverables: ["数据字段", "页面挂载", "渲染函数", "README 说明"],
        validation: "数据语法检查通过，页面显示与原有结构一致。"
      },
      {
        id: "download-add",
        label: "新增下载资产",
        score: 8,
        scope: "新增 CSV/Markdown 模板、作业包、验收表、brief 或运营记录。",
        deliverables: ["下载文件", "数据引用", "README 列表", "HTTP 200 检查"],
        validation: "下载文件可访问，资源/课程/工具页面能说明用途。"
      },
      {
        id: "interactive-update",
        label: "更新交互工具",
        score: 14,
        scope: "新增输入字段、输出卡片、复制导出、场景切换或移动端适配。",
        deliverables: ["交互模块", "默认样例", "导出文件", "浏览器截图"],
        validation: "桌面和手机核心路径通过，无控制台错误和横向溢出。"
      },
      {
        id: "new-section",
        label: "新增页面模块",
        score: 12,
        scope: "新增一个课程、工具、资源、企业或运营模块。",
        deliverables: ["HTML 挂载区", "数据结构", "渲染函数", "样式", "验证截图"],
        validation: "模块符合业务场景、工具输出、人工边界和网页主载体标准。"
      }
    ],
    riskModes: [
      {
        id: "standard-business",
        label: "常规业务边界",
        penalty: 3,
        boundary: "Codex 可以整理、草拟、检查和汇总，正式业务动作仍由负责人确认。",
        reviewers: ["内容负责人", "课程负责人"],
        noGo: "不承诺自动成交、自动获客、自动报价。"
      },
      {
        id: "public-proof",
        label: "公开展示",
        penalty: 7,
        boundary: "公开课、招生页面、学员成果和企业样例必须确认脱敏、授权和可展示范围。",
        reviewers: ["运营负责人", "资料提供方", "课程负责人"],
        noGo: "不能公开展示未授权资料或把课堂草稿包装成真实商业成果。"
      },
      {
        id: "high-compliance",
        label: "报价/单证/合规",
        penalty: 12,
        boundary: "价格、成本、付款、HS 编码、信用证、清关、税费、合同和 DDP 责任只能提示，不能自动决定。",
        reviewers: ["报价负责人", "财务/风控", "单证/报关", "法务或外部专业人员"],
        noGo: "不能把工具输出当作最终报价、正式单据或合规结论。"
      },
      {
        id: "enterprise-private",
        label: "企业敏感资料",
        penalty: 10,
        boundary: "企业真实资料必须脱敏、授权、留痕，并区分内部交付、课堂演示和公开展示权限。",
        reviewers: ["企业服务负责人", "企业授权岗位", "交付负责人"],
        noGo: "不能公开展示未授权资料，不能替代企业管理审批。"
      }
    ],
    reviewWindows: [
      {
        id: "same-day",
        label: "当天回写",
        score: 6,
        cadence: "当天完成维护日志、页面证据和未完成项记录。",
        closeout: "适用于发布日、公开课和企业交付后的即时修正。"
      },
      {
        id: "weekly-review",
        label: "周复盘回写",
        score: 5,
        cadence: "每周汇总招生、课堂、工具、资源和企业反馈后统一回写。",
        closeout: "适用于非紧急但反复出现的问题。"
      },
      {
        id: "monthly-version",
        label: "月度版本回写",
        score: 4,
        cadence: "每月把高价值反馈汇总为版本候选、下载资产和路线图更新。",
        closeout: "适用于跨页面、跨课程或企业服务范围较大的改动。"
      },
      {
        id: "defer-pool",
        label: "暂缓池",
        score: 1,
        cadence: "证据不足、价值不清或风险过高时，只记录在维护日志和下期候选池。",
        closeout: "适用于需要更多样例、授权或专业审批的问题。"
      }
    ],
    operatingRules: [
      "每条回写都必须能追溯到真实反馈、页面证据、负责人和验证方式。",
      "同一问题涉及多个页面时，先选主页面，再同步相关数据文件和下载资产。",
      "维护日志必须记录未完成项、人工确认人和下一次复盘窗口。",
      "企业资料、学员成果、报价、单证和合规类内容必须先过人工审批再公开展示。"
    ]
  },
  maintenanceLogBuilder: {
    title: "维护日志与版本发布说明生成器",
    description:
      "用于每次平台更新后，把更新来源、资产区域、验证状态、发布决策和下期路线整理成可复制的维护日志、发布说明、验证记录和下一轮 Codex 回写任务。",
    exportFilename: "maintenance-log-release-note-output.md",
    downloads: [
      {
        label: "下载维护日志生成表 CSV",
        href: "./downloads/platform-maintenance-log-builder.csv",
        format: "CSV",
        note: "用于记录更新来源、页面路线、数据文件、下载资产、验证状态、发布结论、人工检查和下期路线。"
      },
      {
        label: "下载发布说明 Brief 模板 MD",
        href: "./downloads/platform-maintenance-log-release-note-template.md",
        format: "Markdown",
        note: "用于生成对内维护日志、版本发布说明、验证记录、人工确认边界和下次回写任务。"
      }
    ],
    defaults: {
      updateSource: "visual-qa-release",
      assetArea: "playbook",
      validationState: "full-browser-verified",
      releaseDecision: "release-archive",
      nextRoute: "version-review"
    },
    updateSources: [
      {
        id: "tool-sprint",
        label: "工具 Sprint 发布",
        score: 18,
        trigger: "工具完成默认样例、复制导出、课堂验收、真实样例替换、移动端验证或企业验收，需要沉淀为正式版本记录。",
        evidence: "工具 Sprint Brief、课堂验收板、样例替换验收表、截图、下载文件和维护日志。",
        routePages: ["tools.html", "tools.html#tool-classroom-acceptance-board", "tools.html#tool-sample-validation-board", "playbook.html"],
        codexTasks: ["汇总工具更新范围", "生成发布说明", "更新 README 资产列表", "整理下期工具候选"]
      },
      {
        id: "classroom-feedback",
        label: "课堂卡点回写",
        score: 16,
        trigger: "正式课、公开课或作业返修中出现重复问题，需要更新课程讲法、作业模板、工具默认样例或讲师提醒。",
        evidence: "课堂记录、作业评分、返修标签、老师复盘和助教建议。",
        routePages: ["classroom.html", "course.html", "learning.html", "tools.html"],
        codexTasks: ["归类课堂卡点", "生成作业返修说明", "更新课堂 runbook", "提炼讲师提醒"]
      },
      {
        id: "enrollment-feedback",
        label: "招生咨询反馈",
        score: 14,
        trigger: "报名咨询、试听课跟进或资源领取后，用户反复追问课程价值、时间投入、工具落地、企业适配或付款边界。",
        evidence: "咨询记录、顾虑回应、试听课跟进、报名方案 brief 和成交/未成交原因。",
        routePages: ["enrollment.html", "marketing.html", "resources.html", "index.html"],
        codexTasks: ["整理高频顾虑", "匹配页面证据", "生成咨询话术草稿", "更新推广素材 brief"]
      },
      {
        id: "resource-download",
        label: "资源下载信号",
        score: 12,
        trigger: "用户领取模板、清单或试听资料后，后续咨询集中在同一业务问题、工具输出或课程入口。",
        evidence: "资源下载记录、标签分流、跟进序列、用户问题和转化路径。",
        routePages: ["resources.html", "marketing.html", "enrollment.html"],
        codexTasks: ["汇总资源领取信号", "生成跟进标签", "更新资源卡片说明", "补资源转化路线"]
      },
      {
        id: "enterprise-delivery",
        label: "企业交付复盘",
        score: 20,
        trigger: "企业诊断、团队内训或工具/SOP 项目验收后，需要把真实流程问题回写成课程、工具、案例或企业服务资产。",
        evidence: "企业诊断 brief、scope brief、交付验收表、授权脱敏样例和项目复盘。",
        routePages: ["enterprise.html", "tools.html", "automation.html", "playbook.html"],
        codexTasks: ["整理企业交付复盘", "生成 SOP 版本差异", "更新服务边界草稿", "提炼可公开的脱敏案例"]
      },
      {
        id: "case-expansion",
        label: "行业案例扩展",
        score: 15,
        trigger: "准备从集成房屋复制到机械、建材、家具或消费品，需要判断案例字段、样例询盘、报价结构、发布范围和人工边界是否完整。",
        evidence: "行业案例 intake、准入评分、字段缺口、样例询盘、字段替换验证、发布授权和人工确认边界。",
        routePages: ["cases.html", "cases.html#case-field-replacement-validation", "cases.html#case-publication-router", "case-integrated-house.html", "course.html"],
        codexTasks: ["整理行业字段差异", "生成案例准入评分", "补行业替换说明", "生成字段替换复盘", "生成案例发布 Brief"]
      },
      {
        id: "visual-qa-release",
        label: "视觉验收发布",
        score: 19,
        trigger: "页面、工具、资源或企业服务模块已完成桌面/手机、关键交互、下载入口、控制台和无横向溢出检查，需要归档发布证据。",
        evidence: "视觉 QA Brief、桌面与手机浏览器记录、下载 HTTP 检查、控制台错误记录、README 和缓存版本。",
        routePages: ["playbook.html#playbook-visual-qa-gate", "playbook.html#playbook-maintenance-log-builder", "resources.html"],
        codexTasks: ["整理视觉验收记录", "生成维护日志", "更新资源中心", "同步缓存版本和 README"]
      }
    ],
    assetAreas: [
      {
        id: "home",
        label: "首页与导航",
        score: 14,
        pageRoute: ["index.html", "resources.html", "enrollment.html"],
        dataFiles: ["data/home.js", "data/site.js", "assets/app.js"],
        downloadFamilies: ["homepage-entry-routing-board.csv", "public-lesson-route-board.csv", "resource-lead-tagging-board.csv"],
        owner: "运营负责人 + 开发负责人",
        validation: "角色入口、CTA、资源承接、报名分流和人工边界一致，导航缓存版本同步。"
      },
      {
        id: "course",
        label: "课程与课堂",
        score: 16,
        pageRoute: ["course.html", "classroom.html", "learning.html", "case-integrated-house.html"],
        dataFiles: ["data/course-foreign-trade-codex.js", "data/classroom.js", "data/learning.js"],
        downloadFamilies: ["course-delivery-blueprint.csv", "lesson-runbook-template.md", "assignment-review-scorecard.csv"],
        owner: "主讲老师 + 课程运营",
        validation: "课程模块、课堂 runbook、作业验收、学员交付物和人工确认边界能闭环。"
      },
      {
        id: "tools",
        label: "工具中心",
        score: 18,
        pageRoute: ["tools.html", "automation.html", "classroom.html", "playbook.html"],
        dataFiles: ["data/tools.js", "data/automation.js", "assets/app.js"],
        downloadFamilies: ["tool-build-brief-template.csv", "tool-demand-scorecard.csv", "tool-sprint-command-center.csv", "tool-classroom-acceptance-board.csv"],
        owner: "产品负责人 + 开发负责人",
        validation: "工具必须保留输入字段、默认样例、输出结果、复制导出、真实样例替换和人工确认边界。"
      },
      {
        id: "resources",
        label: "资源中心",
        score: 13,
        pageRoute: ["resources.html", "marketing.html", "enrollment.html"],
        dataFiles: ["data/site.js", "data/marketing.js", "data/enrollment.js"],
        downloadFamilies: ["resource-lead-tagging-board.csv", "resource-follow-up-sequence.csv", "resource-lead-routing-playbook.md", "resource-conversion-review-router.csv", "resource-conversion-review-brief-template.md"],
        owner: "市场运营 + 内容负责人",
        validation: "每个资源都有目标人群、下载承接、跟进标签、下一步 CTA 和不过度承诺边界。"
      },
      {
        id: "enterprise",
        label: "企业服务",
        score: 17,
        pageRoute: ["enterprise.html", "automation.html", "tools.html", "playbook.html"],
        dataFiles: ["data/enterprise.js", "data/automation.js", "data/tools.js", "data/playbook.js"],
        downloadFamilies: ["enterprise-project-kickoff-command-center.csv", "enterprise-project-kickoff-meeting-note-template.md", "enterprise-service-delivery-plan.csv", "enterprise-project-acceptance-checklist.md", "enterprise-delivery-writeback-router.csv", "enterprise-delivery-evidence-authorization-template.md", "enterprise-training-scope-brief.md"],
        owner: "企业服务负责人 + 交付负责人",
        validation: "企业 scope、资料授权、岗位责任、验收标准和后续维护边界确认后才能发布。"
      },
      {
        id: "cases",
        label: "案例中心",
        score: 15,
        pageRoute: ["cases.html", "case-integrated-house.html", "course.html"],
        dataFiles: ["data/cases.js", "data/case-integrated-house.js", "data/course-foreign-trade-codex.js"],
        downloadFamilies: ["industry-case-intake.csv", "industry-case-readiness-scorecard.csv", "industry-case-field-replacement-board.csv"],
        owner: "行业顾问 + 内容负责人",
        validation: "案例能串起客户开发、询盘、报价、订单、单证、风险、字段替换和人工确认边界。"
      },
      {
        id: "prompts",
        label: "指令库",
        score: 13,
        pageRoute: ["prompts.html", "classroom.html", "tools.html"],
        dataFiles: ["data/prompts.js", "data/course-foreign-trade-codex.js", "data/tools.js"],
        downloadFamilies: ["integrated-house-prompt-pack.md", "prompt-quality-checklist.csv", "prompt-governance-board.csv"],
        owner: "课程老师 + 内容负责人",
        validation: "指令有输入资料、输出结果、质量检查、行业替换、版本记录和人工确认边界。"
      },
      {
        id: "playbook",
        label: "运营治理",
        score: 19,
        pageRoute: ["playbook.html", "playbook.html#playbook-maintenance-log-builder", "resources.html"],
        dataFiles: ["data/playbook.js", "data/site.js", "assets/app.js", "assets/styles.css", "README.md"],
        downloadFamilies: ["platform-release-audit.csv", "platform-visual-qa-gate.csv", "platform-maintenance-log-builder.csv", "platform-maintenance-log-release-note-template.md", "content-maintenance-log.csv", "platform-version-release-note.md"],
        owner: "负责人 + 内容/开发/运营",
        validation: "目标矩阵、发布审计、视觉验收、版本回写、维护日志、下载资产、README 和缓存版本保持一致。"
      },
      {
        id: "commercial",
        label: "商业产品包装",
        score: 14,
        pageRoute: ["playbook.html#playbook-commercial-offer-review", "enrollment.html", "enterprise.html", "resources.html"],
        dataFiles: ["data/playbook.js", "data/enrollment.js", "data/enterprise.js", "data/site.js"],
        downloadFamilies: ["course-product-sku-delivery-matrix.csv", "commercial-offer-boundary-note.md", "commercial-offer-review-router.csv"],
        owner: "负责人 + 课程顾问 + 企业服务负责人",
        validation: "产品包必须绑定页面证据、交付物、付款或签约前确认、人工边界和禁止承诺口径。"
      }
    ],
    validationStates: [
      {
        id: "draft-only",
        label: "仅草稿",
        score: 4,
        proof: "已有改动想法或草稿，但缺页面渲染、下载引用、脚本检查或浏览器记录。",
        repair: "先补 HTML 挂载、data 字段、渲染函数、下载文件和 README。",
        gate: "不得公开发布。"
      },
      {
        id: "script-checked",
        label: "脚本通过",
        score: 12,
        proof: "node --check、引用检查或平台验证脚本通过，但还缺真实浏览器桌面/手机记录。",
        repair: "补桌面 1280px、手机 390px、关键交互、下载和控制台检查。",
        gate: "可内部复核，公开前补浏览器验收。"
      },
      {
        id: "browser-checked",
        label: "浏览器已验",
        score: 18,
        proof: "已在本地浏览器检查新增模块渲染、控件切换、无明显溢出和控制台状态。",
        repair: "补资源中心、下载 HTTP、README、缓存版本和维护日志归档。",
        gate: "可进入发布归档前复核。"
      },
      {
        id: "full-browser-verified",
        label: "双端完整验收",
        score: 24,
        proof: "脚本、HTTP、桌面、手机、关键交互、下载入口、资源中心、控制台和缓存版本均已验证。",
        repair: "只需写入维护日志、发布说明和下次复查窗口。",
        gate: "可发布并归档。"
      },
      {
        id: "repair-found",
        label: "发现返修项",
        score: 2,
        proof: "发现页面空白、交互失败、下载失效、横向溢出、控制台错误或承诺边界冲突。",
        repair: "先修复并重新执行脚本、HTTP、桌面/手机和下载验证。",
        gate: "暂缓发布。"
      }
    ],
    releaseDecisions: [
      {
        id: "hold-repair",
        label: "暂缓返修",
        score: 1,
        action: "只记录维护日志和返修项，不进入公开发布、试听课演示或企业交付。",
        gate: "修复后重新生成发布说明。",
        owner: "开发负责人 + 内容负责人"
      },
      {
        id: "internal-log",
        label: "内部记录",
        score: 8,
        action: "作为内部维护记录保留，暂不对外展示，不进入销售或企业承诺。",
        gate: "需补浏览器、下载或人工确认后再公开。",
        owner: "内容负责人"
      },
      {
        id: "release-archive",
        label: "发布并归档",
        score: 18,
        action: "同步页面、数据、样式、下载、资源中心、README、缓存版本、维护日志和版本说明。",
        gate: "验证通过后可作为正式版本记录。",
        owner: "开发负责人 + 运营负责人"
      },
      {
        id: "public-use",
        label: "公开使用",
        score: 16,
        action: "可用于公开课、报名咨询、资源中心或企业演示，但必须保留人工确认边界。",
        gate: "公开展示资料需要脱敏、授权和负责人确认。",
        owner: "运营负责人 + 课程负责人"
      },
      {
        id: "approval-needed",
        label: "需人工审批",
        score: 5,
        action: "涉及企业资料、学员成果、价格、合同、报价、单证、合规或商业承诺时，先审批再发布。",
        gate: "未审批前不得公开展示或对外承诺。",
        owner: "负责人 + 资料/业务审批人"
      }
    ],
    nextRoutes: [
      {
        id: "version-review",
        label: "进入版本评审",
        score: 8,
        action: "把本次更新、验证记录、未完成项和下次候选写入版本评审台。",
        routePages: ["playbook.html#playbook-version-review", "playbook.html#playbook-release-writeback-router"]
      },
      {
        id: "tool-sprint",
        label: "进入工具 Sprint",
        score: 10,
        action: "把重复业务动作、默认样例、验收要求和人工边界拆成工具开发 brief。",
        routePages: ["tools.html", "playbook.html#playbook-tool-sprint-command-center"]
      },
      {
        id: "case-sprint",
        label: "进入案例 Sprint",
        score: 8,
        action: "把行业字段缺口、样例询盘、报价结构、公开展示边界和资源化发布范围进入案例扩展。",
        routePages: ["cases.html", "cases.html#case-field-replacement-validation", "cases.html#case-publication-router"]
      },
      {
        id: "resource-followup",
        label: "进入资源跟进",
        score: 7,
        action: "把新增下载、领取标签、跟进序列和报名/企业分流写回资源中心。",
        routePages: ["resources.html", "marketing.html", "enrollment.html"]
      },
      {
        id: "enterprise-scope",
        label: "进入企业 Scope",
        score: 9,
        action: "把企业资料、岗位责任、交付范围、验收标准和后续维护写入企业服务。",
        routePages: ["enterprise.html", "automation.html", "playbook.html#playbook-data-governance"]
      },
      {
        id: "governance-review",
        label: "进入治理复核",
        score: 6,
        action: "复查 goal、承诺边界、资料授权、下载引用、README、缓存版本和维护日志一致性。",
        routePages: ["playbook.html#playbook-evidence-coverage-index", "playbook.html#playbook-release-board"]
      }
    ],
    operatingRules: [
      "维护日志必须写清 changed files、页面路线、数据文件、下载资产、验证命令、浏览器记录、README 和缓存版本。",
      "发布说明只描述已完成的页面、工具、资源、课程、案例或企业服务能力，不扩大课程承诺。",
      "发现返修项时先记录问题和修复路线，不把草稿包装成正式版本。",
      "涉及学员成果、企业资料、价格、合同、报价、单证、税费、合规或法务时，必须保留人工审批边界。",
      "每次发布都要留下下一步路线：版本评审、工具 Sprint、案例 Sprint、资源跟进、企业 Scope 或治理复核。"
    ]
  },
  versionReviewDownloads: [
    {
      label: "下载版本迭代评审表 CSV",
      href: "./downloads/curriculum-version-review-board.csv",
      format: "CSV",
      note: "用于把招生、课堂、工具、案例和企业反馈统一评分，决定本期更新范围。"
    },
    {
      label: "下载版本发布说明模板 MD",
      href: "./downloads/platform-version-release-note.md",
      format: "Markdown",
      note: "用于记录本期版本目标、改动证据、人工边界、验证结果和下期回写。"
    }
  ],
  versionReviewBoard: [
    {
      stage: "01",
      title: "反馈收集与归类",
      feedbackSignal: "招生顾虑、资源领取问题、课堂卡点、作业返修、工具需求、行业案例和企业咨询同时出现。",
      inputEvidence: "咨询记录、课堂记录、作业标签、工具使用反馈、企业访谈摘要和资源下载数据。",
      codexAssist: "Codex 汇总原始反馈，按课程、案例、工具、资源、报名、企业服务和边界问题分类。",
      humanDecision: "运营负责人确认哪些反馈是真实高频问题，哪些只是个别需求或不符合课程定位。",
      updateScope: "形成候选版本问题池。",
      releaseGate: "没有真实记录或只有单次主观判断的问题不进入版本排期。",
      owner: "运营负责人 + 内容负责人",
      boundary: "不能为了迎合用户期待，把自动成交、自动报价、代运营等不现实需求纳入课程承诺。"
    },
    {
      stage: "02",
      title: "业务价值与商业影响评分",
      feedbackSignal: "候选问题过多，需要判断先改课程、先补资源、先做工具还是先扩展案例。",
      inputEvidence: "影响人数、转化影响、课堂阻塞程度、企业服务价值、资料完整度和维护成本。",
      codexAssist: "Codex 生成评分建议、影响范围、依赖页面和可能的低成本替代方案。",
      humanDecision: "负责人按业务价值、交付风险和维护成本决定优先级，不让单一销售声音压过教学质量。",
      updateScope: "形成 A/B/C 三级版本候选。",
      releaseGate: "没有负责人、证据页面和验收方式的候选项暂缓。",
      owner: "课程负责人 + 运营负责人",
      boundary: "评分只用于版本排期，不能当作对学员或企业客户的效果承诺。"
    },
    {
      stage: "03",
      title: "课程 / 案例 / 工具 / 资源拆分",
      feedbackSignal: "一个问题可能同时涉及课程讲法、案例字段、工具规格、指令模板和资源承接。",
      inputEvidence: "现有课程模块、案例数据、工具字段、指令库、资源卡片和企业服务包。",
      codexAssist: "Codex 拆分该问题需要更新的数据文件、页面挂载点、下载文件和课堂演示证据。",
      humanDecision: "内容、产品和开发负责人确认本期做网页内容、下载模板、工具规格还是交互工具。",
      updateScope: "形成跨页面更新清单和暂缓清单。",
      releaseGate: "不能只改一个页面导致课程、资源、工具和企业服务口径不一致。",
      owner: "内容负责人 + 产品负责人",
      boundary: "工具规格、企业服务范围和宣传口径必须保留人工确认人。"
    },
    {
      stage: "04",
      title: "集成房屋样板验证",
      feedbackSignal: "准备新增模块、工具或资源前，需要先用首套完整案例证明结构能跑通。",
      inputEvidence: "20ft 可扩展集成房屋产品、沙特询盘、报价、订单、单证和风险数据。",
      codexAssist: "Codex 用集成房屋数据生成试跑输出、字段缺口、风险提醒和课堂讲解草稿。",
      humanDecision: "主讲老师和行业顾问确认样板是否真实、可讲、可替换且不误导其他行业。",
      updateScope: "通过后进入正式版本开发；不通过则补案例字段或暂缓。",
      releaseGate: "无法用集成房屋样板说明输入、输出、作业和边界的内容不进入正式课。",
      owner: "主讲老师 + 行业顾问",
      boundary: "样板验证不等于所有行业通用，特殊认证、清关、法务和价格仍需专业确认。"
    },
    {
      stage: "05",
      title: "页面数据和下载资产排期",
      feedbackSignal: "版本范围确定后，需要安排具体数据文件、页面挂载点、样式、下载模板和缓存版本。",
      inputEvidence: "更新清单、负责人、下载文件草稿、数据字段、页面位置和验证命令。",
      codexAssist: "Codex 可生成数据结构草稿、下载模板、README 更新项和校验脚本。",
      humanDecision: "开发和内容负责人确认命名、页面顺序、视觉一致性、移动端可读性和资源中心承接。",
      updateScope: "形成可执行 sprint 任务。",
      releaseGate: "没有下载资产、资源入口或维护记录的版本不能算完整发布。",
      owner: "开发负责人 + 内容负责人",
      boundary: "Codex 可生成草稿和检查项，但最终上线范围、命名和承诺边界由人工确认。"
    },
    {
      stage: "06",
      title: "发布复盘和下期回写",
      feedbackSignal: "版本发布后，需要确认页面、下载、招生、课堂和企业服务是否真的改善。",
      inputEvidence: "HTTP 检查、浏览器截图、资源下载、咨询问题变化、课堂作业表现和企业反馈。",
      codexAssist: "Codex 汇总验证结果、未完成项、下期候选和维护日志草稿。",
      humanDecision: "负责人确认本期发布是否通过、是否需要回滚口径、是否进入下期路线图。",
      updateScope: "形成版本发布说明和下期版本池。",
      releaseGate: "未验证页面访问、下载引用、移动端和人工边界前，不对外宣称版本完成。",
      owner: "负责人 + 运营负责人",
      boundary: "复盘用于改进课程和服务，不用于夸大效果、制造焦虑或过度销售。"
    }
  ],
  dataGovernanceDownloads: [
    {
      label: "下载资料脱敏授权治理表 CSV",
      href: "./downloads/data-sanitization-authorization-board.csv",
      format: "CSV",
      note: "用于记录资料接收、敏感字段、脱敏方式、授权范围、使用场景和撤回状态。"
    },
    {
      label: "下载公开展示授权确认单 MD",
      href: "./downloads/public-showcase-authorization-note.md",
      format: "Markdown",
      note: "用于优秀作业、企业案例、公开课样例和招生证据使用前的人工确认。"
    }
  ],
  dataGovernanceBoard: [
    {
      stage: "01",
      title: "资料接收与风险分级",
      riskSignal: "学员或企业提交产品资料、询盘、报价、订单、单证、客户名单、聊天记录或内部 SOP。",
      governanceAction: "按公开资料、课堂内部资料、企业私密资料、禁止上传资料四类分级。",
      codexAssist: "Codex 可根据文件说明提取资料类型、可能敏感字段和适用课程模块。",
      humanApproval: "班主任或企业服务负责人确认资料来源、使用目的和是否需要退回重提。",
      usableScope: "仅进入相应课程、课堂、企业诊断或内部评审流程。",
      evidence: "资料接收记录、风险等级、负责人和下一步动作。",
      owner: "班主任 + 企业服务负责人",
      boundary: "未经确认来源和使用目的的资料不能上传到课堂、案例库、工具样例或公开页面。"
    },
    {
      stage: "02",
      title: "敏感字段脱敏与替换",
      riskSignal: "资料中包含客户名称、联系人、电话、邮箱、合同编号、真实成本、付款信息、收货人或内部审批记录。",
      governanceAction: "用代称、区间、示例编号、字段结构和虚拟标签替换可识别或商业敏感信息。",
      codexAssist: "Codex 可提示疑似敏感字段、生成替换建议和脱敏前后检查清单。",
      humanApproval: "助教或负责人逐项确认脱敏是否完整，关键商业机密由资料提供方最终确认。",
      usableScope: "可用于课堂内部演示、助教点评或企业项目内部训练。",
      evidence: "脱敏版本、不可公开字段清单、人工确认记录。",
      owner: "助教 + 资料提供方",
      boundary: "Codex 只能提示脱敏风险，不能替代资料所有方判断商业机密和隐私授权。"
    },
    {
      stage: "03",
      title: "使用范围授权确认",
      riskSignal: "同一份资料可能被用于作业点评、优秀样例、公开课、招生页面、资源包、企业案例或工具测试。",
      governanceAction: "把授权范围拆成仅老师查看、班级内部、公开课、招生展示、企业内训、禁止公开六类。",
      codexAssist: "Codex 可生成授权确认摘要、用途说明和不同展示范围的风险提醒。",
      humanApproval: "学员、企业负责人或授权岗位确认使用范围、有效期和是否允许撤回。",
      usableScope: "只在授权范围内使用，不跨用途复用。",
      evidence: "授权确认单、有效期、撤回方式和责任人。",
      owner: "课程运营 + 企业负责人",
      boundary: "一次课堂使用授权不等于公开展示授权，企业资料默认不得公开。"
    },
    {
      stage: "04",
      title: "课堂展示与公开传播审批",
      riskSignal: "准备把学员作业、企业样例、询盘拆解、报价结构或单证冲突用于公开课、短视频、社群或招生页面。",
      governanceAction: "检查展示材料是否只保留业务结构、学习过程、工具输出和人工边界，不暴露真实客户或商业数据。",
      codexAssist: "Codex 可生成公开展示稿、打码提醒、边界说明和风险自查清单。",
      humanApproval: "课程负责人和运营负责人共同审批公开版本，企业资料还需企业授权人确认。",
      usableScope: "公开课、营销素材、案例中心或资源中心中已批准的片段。",
      evidence: "公开版本、审批记录、展示渠道和到期复查时间。",
      owner: "课程负责人 + 运营负责人",
      boundary: "不能把未授权样例包装成真实商业成果，不能展示真实客户、成本、合同和付款细节。"
    },
    {
      stage: "05",
      title: "工具测试与数据留存控制",
      riskSignal: "把脱敏询盘、报价、订单或单证样例用于工具演示、开发规格、测试数据或企业轻量工作台。",
      governanceAction: "只保留工具必须字段，分离测试样例、课堂样例和企业真实资料。",
      codexAssist: "Codex 可生成最小测试数据、字段字典、异常样例和删除清单。",
      humanApproval: "产品负责人确认工具测试不需要真实客户身份、真实成本、合同或账号信息。",
      usableScope: "工具中心静态预览、交互工具测试、企业项目内部测试。",
      evidence: "测试数据版本、字段来源、删除记录和负责人。",
      owner: "产品负责人 + 开发负责人",
      boundary: "工具开发不得要求上传非必要敏感资料，不把企业真实数据混入公开演示环境。"
    },
    {
      stage: "06",
      title: "撤回、复查与事故复盘",
      riskSignal: "学员或企业要求撤回展示授权，发现脱敏不完整，或公开材料被误用。",
      governanceAction: "停止使用相关素材，标记受影响页面、下载、课程片段和推广内容，并完成复查。",
      codexAssist: "Codex 可帮助检索引用位置、生成整改清单和复盘记录草稿。",
      humanApproval: "负责人确认下架、替换、通知和后续防范动作是否完成。",
      usableScope: "只保留必要的内部审计记录，不继续用于教学、推广或案例。",
      evidence: "撤回记录、处理清单、复查结论和下次预防动作。",
      owner: "负责人 + 运营负责人",
      boundary: "发现资料误用时不能继续传播，不能用模糊授权解释已经超范围的展示。"
    }
  ],
  commercialPackagingDownloads: [
    {
      label: "下载课程产品 SKU 交付矩阵 CSV",
      href: "./downloads/course-product-sku-delivery-matrix.csv",
      format: "CSV",
      note: "用于统一免费资料、系统课、陪跑、企业诊断、团队内训和工具共建的交付范围。"
    },
    {
      label: "下载商业承诺边界确认单 MD",
      href: "./downloads/commercial-offer-boundary-note.md",
      format: "Markdown",
      note: "用于销售咨询、付款前确认、企业签约和续费复盘前人工校准承诺。"
    }
  ],
  commercialPackagingBoard: [
    {
      stage: "01",
      title: "免费预习路径",
      targetSignal: "用户刚接触课程，关注重复劳动、询盘回复或报价漏项，但尚未确认是否适合系统学习。",
      offerScope: "提供自测表、集成房屋样例、10 分钟询盘演示和基础报价费用项模板。",
      deliverables: "用户能完成一次问题定位，并知道系统课会围绕哪些真实业务输出展开。",
      codexAssist: "Codex 可根据自测结果和用户留言生成痛点标签、试听课推荐和后续跟进摘要。",
      humanApproval: "运营确认用户不是被过度销售，只引导到低门槛资料和试听入口。",
      proofPage: "资源中心 / 自动化地图 / 案例中心",
      conversionAction: "进入试听课、提交脱敏询盘或预约系统课咨询。",
      renewalSignal: "持续下载资源、追问行业适配或愿意提交真实样例。",
      owner: "市场运营 + 社群运营",
      boundary: "免费资料只证明方法和样例可理解，不承诺下载后即可自动获客、自动成交或自动报价。"
    },
    {
      stage: "02",
      title: "个人系统实战课",
      targetSignal: "个人学员已有产品、询盘、报价或跟单痛点，希望把外贸重复动作沉淀成自己的工作台。",
      offerScope: "交付 12 个课程模块、集成房屋完整案例、工具模板、指令包、作业返修和结课工具包。",
      deliverables: "产品资料表、客户开发字段库、询盘识别表、报价检查表、订单看板、单证检查表和个人复盘清单。",
      codexAssist: "Codex 可辅助整理学员资料、生成作业初稿、做格式检查和归纳返修建议。",
      humanApproval: "老师和助教确认作业是否真实、脱敏、可复用，并确认关键商业判断没有交给 AI 自动决定。",
      proofPage: "课程交付中心 / 课堂工作台 / 学员工作台",
      conversionAction: "报名系统课并完成入班资料准备。",
      renewalSignal: "结课后需要行业替换、作业陪跑、工具交互化或企业团队复制。",
      owner: "课程顾问 + 主讲老师 + 助教",
      boundary: "系统课训练业务流程和工具输出，不承诺学完必成交、必有询盘或自动替代业务负责人判断。"
    },
    {
      stage: "03",
      title: "作业陪跑与行业替换包",
      targetSignal: "学员已报名或已结课，但在把集成房屋样例替换到自己行业时卡在资料、字段或工具输出。",
      offerScope: "围绕一个主推产品，做资料补齐、询盘拆解、报价字段、订单节点和单证字段的陪跑返修。",
      deliverables: "行业替换字段表、作业返修记录、可公开展示版本、后续工具需求清单。",
      codexAssist: "Codex 可生成行业字段差异、返修清单、展示授权草稿和工具需求草案。",
      humanApproval: "助教和课程负责人确认作业质量、公开展示授权和是否适合升级成案例或工具需求。",
      proofPage: "学员工作台 / 案例中心 / 资料治理台",
      conversionAction: "从系统课升级为陪跑服务，或进入企业团队内训咨询。",
      renewalSignal: "同一行业多人需要替换、同类问题反复出现或企业希望团队统一口径。",
      owner: "助教负责人 + 内容负责人",
      boundary: "陪跑帮助学员完成资料和输出，不代替学员提供真实成本、客户判断、合同或合规结论。"
    },
    {
      stage: "04",
      title: "企业流程诊断",
      targetSignal: "企业客户提到团队效率、Excel 混乱、报价漏项、单证风险或新人培训依赖老员工。",
      offerScope: "先做访谈、资料清单、成熟度评分、重复劳动地图和第一条样板业务线建议。",
      deliverables: "企业流程问题清单、优先级地图、资料成熟度评分、内训或工具化建议。",
      codexAssist: "Codex 可整理访谈纪要、归类流程痛点、生成字段缺口和初步服务路径建议。",
      humanApproval: "企业服务负责人确认资料真实性、服务范围、报价和是否进入内训或工具共建。",
      proofPage: "企业服务 / 自动化地图 / 运营指南",
      conversionAction: "预约企业诊断并确认诊断资料、负责人和时间。",
      renewalSignal: "企业能提供脱敏询盘、报价、订单或单证样例，并愿意安排多岗位参与。",
      owner: "企业服务销售 + 企业服务负责人",
      boundary: "诊断只输出流程、字段和优先级建议，不承诺短期业绩、团队成交结果或替代企业管理决策。"
    },
    {
      stage: "05",
      title: "企业团队内训",
      targetSignal: "企业已有产品和团队岗位，希望销售、跟单、主管按统一方法完成客户开发、询盘、报价和作业。",
      offerScope: "围绕企业主推产品重建课堂案例、岗位作业、团队指令库、作业验收和交付复盘。",
      deliverables: "企业产品课堂案例、岗位训练任务、团队指令库、作业评分表和内训复盘报告。",
      codexAssist: "Codex 可把企业样例转成课堂草稿、岗位练习和 SOP 初稿，并辅助作业初筛。",
      humanApproval: "企业授权岗位确认产品资料、价格边界、客户承诺、交付节奏和内部审批责任。",
      proofPage: "课堂工作台 / 企业服务 / 指令库",
      conversionAction: "签约团队内训，完成资料脱敏和授课范围确认。",
      renewalSignal: "内训后出现多个岗位 SOP、工具字段或持续作业验收需求。",
      owner: "企业服务负责人 + 主讲老师",
      boundary: "企业内训不替代企业销售管理、报价审批、法务合规、财务和客户最终承诺。"
    },
    {
      stage: "06",
      title: "工具与 SOP 共建",
      targetSignal: "企业已完成诊断或内训，希望把反复使用的表格、检查器、指令和岗位经验沉淀为长期系统。",
      offerScope: "把一个高频流程升级为轻量工作台、字段字典、操作 SOP、验收清单和后续版本计划。",
      deliverables: "工具开发规格、轻量工作台原型、SOP 知识库、验收证据和版本维护计划。",
      codexAssist: "Codex 可生成字段字典、测试样例、SOP 草稿、异常检查和版本发布记录。",
      humanApproval: "产品负责人、开发负责人和企业负责人确认工具范围、数据边界、验收方式和后续维护责任。",
      proofPage: "工具中心 / 企业服务 / 运营指南",
      conversionAction: "进入工具共建或 SOP 长期维护项目。",
      renewalSignal: "工具上线后需要导入导出、权限、更多产品线、更多岗位或季度复盘。",
      owner: "产品负责人 + 企业服务负责人",
      boundary: "工具共建先解决重复整理和一致性检查，不一次性替代 ERP、CRM、报关、财务或法务系统。"
    }
  ],
  commercialOfferReviewRouter: {
    title: "商业产品包承诺边界评审器",
    description:
      "用于销售咨询、付款确认、企业签约和续费复盘前，确认当前产品包是否有足够证据、交付范围、人工边界和下一步动作，避免把课程、工具或企业服务卖成无法验收的承诺。",
    exportFilename: "commercial-offer-review-brief-output.md",
    downloads: [
      {
        label: "下载商业产品包评审表 CSV",
        href: "./downloads/commercial-offer-review-router.csv",
        format: "CSV",
        note: "用于课程顾问、企业销售和负责人在报价或收款前统一评审产品包、证据和风险。"
      },
      {
        label: "下载商业评审 Brief 模板 MD",
        href: "./downloads/commercial-offer-review-brief-template.md",
        format: "Markdown",
        note: "用于记录销售口径、交付范围、人工确认点、暂缓原因和续费复盘。"
      }
    ],
    defaults: {
      offerPackage: "system-course",
      evidenceState: "page-download-ready",
      scopeState: "standard-scope",
      buyerStage: "payment-confirm",
      riskMode: "normal-boundary",
      nextAction: "confirm-start"
    },
    offerPackages: [
      {
        id: "free-resource",
        label: "免费预习路径",
        stage: "SKU 01",
        baseScore: 10,
        target: "刚关注外贸重复劳动、询盘回复或报价漏项，但尚未确认是否适合系统课的用户。",
        included: ["重复劳动自测", "集成房屋样例", "10 分钟询盘演示", "基础报价费用项模板"],
        deliverableEvidence: ["问题定位结果", "资源领取记录", "试听课或社群跟进标签"],
        proofPages: ["resources.html", "automation.html", "cases.html"],
        linkedDownloads: ["repeat-work-audit.csv", "resource-lead-tagging-board.csv", "trial-class-brief-template.md"],
        owners: ["市场运营", "社群运营"],
        manualBoundary: "只能引导理解方法和样例，不能承诺下载资料后自动获客、自动成交或自动报价。",
        noGo: "不得把免费资源包装成完整课程交付或企业诊断结论。"
      },
      {
        id: "system-course",
        label: "个人系统实战课",
        stage: "SKU 02",
        baseScore: 18,
        target: "已有产品、询盘、报价或跟单痛点，希望把外贸重复动作沉淀成个人工作台的学员。",
        included: ["12 个课程模块", "集成房屋完整案例", "工具模板", "指令包", "作业返修", "结课工具包"],
        deliverableEvidence: ["产品资料工作台", "客户开发字段库", "询盘识别表", "报价检查表", "订单看板", "单证检查表"],
        proofPages: ["course.html", "classroom.html", "learning.html", "tools.html"],
        linkedDownloads: ["course-delivery-blueprint.csv", "course-cohort-delivery-plan.csv", "learner-toolchain-assignment-review-board.csv"],
        owners: ["课程顾问", "主讲老师", "助教"],
        manualBoundary: "课程训练业务流程和工具输出，关键价格、客户判断、交期、合同和合规结论必须由学员或企业负责人确认。",
        noGo: "不得承诺学完必成交、必有询盘、自动替代业务负责人判断或代替真实业务执行。"
      },
      {
        id: "coaching-replacement",
        label: "作业陪跑与行业替换包",
        stage: "SKU 03",
        baseScore: 16,
        target: "学员在把集成房屋样例替换到自己行业时，卡在资料、字段、工具输出或展示授权。",
        included: ["主推产品资料补齐", "询盘拆解", "报价字段返修", "订单节点和单证字段复盘", "展示授权检查"],
        deliverableEvidence: ["行业替换字段表", "作业返修记录", "可公开展示版本", "后续工具需求清单"],
        proofPages: ["learning.html", "cases.html", "cases.html#case-field-replacement-validation", "cases.html#case-publication-router", "playbook.html#playbook-data-governance"],
        linkedDownloads: ["industry-case-field-replacement-board.csv", "industry-case-publication-router.csv", "learner-application-review-router.csv", "public-showcase-authorization-note.md"],
        owners: ["助教负责人", "内容负责人"],
        manualBoundary: "陪跑只帮助完成资料和输出，不代替学员提供真实成本、客户判断、合同条款或合规结论。",
        noGo: "不得把未授权作业包装成公开案例，不得直接承诺行业替换一定能产生客户或订单。"
      },
      {
        id: "enterprise-diagnosis",
        label: "企业流程诊断",
        stage: "SKU 04",
        baseScore: 20,
        target: "企业客户提出团队效率、Excel 混乱、报价漏项、单证风险或新人培训依赖老员工。",
        included: ["访谈", "资料清单", "成熟度评分", "重复劳动地图", "第一条样板业务线建议"],
        deliverableEvidence: ["企业流程问题清单", "优先级地图", "资料成熟度评分", "内训或工具化建议"],
        proofPages: ["enterprise.html", "automation.html", "playbook.html"],
        linkedDownloads: ["enterprise-diagnosis-intake.md", "enterprise-material-checklist.csv", "enterprise-readiness-scorecard.csv"],
        owners: ["企业服务销售", "企业服务负责人"],
        manualBoundary: "诊断只输出流程、字段和优先级建议，资料真实性、服务范围、报价和后续签约必须人工确认。",
        noGo: "不得承诺短期业绩、团队成交结果、降本比例或替代企业管理决策。"
      },
      {
        id: "enterprise-training",
        label: "企业团队内训",
        stage: "SKU 05",
        baseScore: 22,
        target: "企业已有产品和团队岗位，希望销售、跟单、主管按统一方法完成客户开发、询盘、报价和作业。",
        included: ["企业产品课堂案例", "岗位作业", "团队指令库", "作业验收", "内训复盘"],
        deliverableEvidence: ["企业课堂案例", "岗位训练任务", "团队指令库", "作业评分表", "内训复盘报告"],
        proofPages: ["classroom.html", "enterprise.html", "prompts.html", "learning.html"],
        linkedDownloads: ["enterprise-training-plan-mapper.csv", "enterprise-training-scope-brief.md", "enterprise-project-acceptance-checklist.md", "enterprise-delivery-writeback-router.csv", "enterprise-delivery-evidence-authorization-template.md"],
        owners: ["企业服务负责人", "主讲老师", "企业授权岗位"],
        manualBoundary: "企业授权岗位必须确认产品资料、价格边界、客户承诺、交付节奏和内部审批责任。",
        noGo: "不得替代企业销售管理、报价审批、法务合规、财务、报关和客户最终承诺。"
      },
      {
        id: "tool-sop-project",
        label: "工具与 SOP 共建",
        stage: "SKU 06",
        baseScore: 24,
        target: "企业已完成诊断或内训，希望把反复使用的表格、检查器、指令和岗位经验沉淀为长期系统。",
        included: ["轻量工作台", "字段字典", "操作 SOP", "验收清单", "版本维护计划"],
        deliverableEvidence: ["工具开发规格", "轻量工作台原型", "SOP 知识库", "验收证据", "版本维护计划"],
        proofPages: ["tools.html", "tools.html#tool-sample-validation-board", "enterprise.html", "playbook.html#playbook-tool-sprint-command-center"],
        linkedDownloads: ["tool-sprint-command-center.csv", "tool-sprint-review-template.md", "enterprise-service-delivery-plan.csv", "enterprise-delivery-writeback-router.csv"],
        owners: ["产品负责人", "开发负责人", "企业服务负责人"],
        manualBoundary: "产品、开发和企业负责人必须确认工具范围、数据边界、验收方式和后续维护责任。",
        noGo: "不得一次性替代 ERP、CRM、报关、财务、法务系统或承诺无人维护也能长期准确。"
      }
    ],
    evidenceStates: [
      {
        id: "idea-only",
        label: "只有口头需求",
        score: 2,
        summary: "当前只有聊天记录、临时咨询或销售判断，缺少页面证据和下载承接。",
        repair: "先补用户画像、目标问题、页面路线、下载资产和人工边界，再进入产品包确认。",
        gate: "不能报价或收款，只能进入需求记录。"
      },
      {
        id: "page-only",
        label: "有页面无交付证据",
        score: 8,
        summary: "页面能说明产品包，但缺少作业、验收、下载或企业 scope 记录。",
        repair: "补交付物、验收方式、下载模板和负责人。",
        gate: "可以预约咨询，但付款或签约前必须补齐交付证据。"
      },
      {
        id: "page-download-ready",
        label: "页面和下载齐全",
        score: 16,
        summary: "已有页面路线、下载资产、交付物和基本边界，可进入标准产品确认。",
        repair: "付款或签约前补具体学员/企业资料、时间和负责人。",
        gate: "可进入销售确认和交付排期。"
      },
      {
        id: "validated-output",
        label: "已有验收输出",
        score: 22,
        summary: "已有课堂、学员、工具或企业项目验收输出，能支撑升级、复购或签约判断。",
        repair: "补授权范围、脱敏版本和续费复盘口径。",
        gate: "可用于授权范围内的咨询证明和复购评审。"
      }
    ],
    scopeStates: [
      {
        id: "unclear-scope",
        label: "范围未锁定",
        score: 0,
        summary: "用户目标、交付周期、资料范围或验收方式仍不清楚。",
        repair: "先使用商业承诺边界确认单，明确包含和不包含内容。",
        gate: "范围未锁定前不得收款、签约或对外承诺结果。"
      },
      {
        id: "standard-scope",
        label: "标准范围",
        score: 10,
        summary: "产品包范围和标准交付物清楚，适合按现有课程或服务交付。",
        repair: "补具体排期、资料提交要求和验收窗口。",
        gate: "可进入标准确认。"
      },
      {
        id: "custom-scope",
        label: "需要定制",
        score: 6,
        summary: "需求超出标准课程或模板，需要企业服务、工具或 SOP 负责人评估。",
        repair: "先拆分需求、资料授权、岗位责任、开发范围和报价审批。",
        gate: "必须人工审批后进入企业方案或工具共建。"
      }
    ],
    buyerStages: [
      {
        id: "resource-followup",
        label: "资源领取后",
        score: 4,
        actionTone: "轻咨询",
        summary: "适合继续教育和邀请试听，不适合直接推高价服务。",
        requiredRecord: "资源标签、问题定位和下一次触达记录。"
      },
      {
        id: "course-consultation",
        label: "系统课咨询",
        score: 8,
        actionTone: "课程匹配",
        summary: "适合核对学员资料、目标和适配班型。",
        requiredRecord: "报名资格、产品资料状态、课程路径和付款前确认。"
      },
      {
        id: "payment-confirm",
        label: "付款前确认",
        score: 12,
        actionTone: "承诺锁定",
        summary: "必须锁定交付物、人工边界、开课节奏和退款/延期口径。",
        requiredRecord: "商业承诺边界确认单和入班交接记录。"
      },
      {
        id: "enterprise-signing",
        label: "企业签约前",
        score: 10,
        actionTone: "Scope 审批",
        summary: "必须确认资料授权、岗位责任、服务范围、报价和验收方式。",
        requiredRecord: "企业 scope brief、项目启动 brief 和验收清单。"
      },
      {
        id: "renewal-review",
        label: "续费复盘",
        score: 10,
        actionTone: "复购评审",
        summary: "必须基于交付验收、采纳证据和下一步目标，而不是销售口头判断。",
        requiredRecord: "交付验收、使用证据、续约 brief 和下期范围。"
      }
    ],
    riskModes: [
      {
        id: "normal-boundary",
        label: "标准边界",
        penalty: 0,
        reviewers: ["课程顾问", "主讲老师或企业服务负责人"],
        summary: "需求与产品包匹配，关键承诺边界可按标准确认。",
        noGo: "仍不得承诺自动成交、自动报价、自动合规或替代负责人判断。"
      },
      {
        id: "proof-overclaim",
        label: "证据夸大风险",
        penalty: 12,
        reviewers: ["运营负责人", "课程负责人"],
        summary: "销售或公开话术可能把课堂样例、工具输出或学员成果包装成商业结果。",
        noGo: "必须删除保证效果、成交暗示、未授权案例和超出证据范围的表述。"
      },
      {
        id: "private-data",
        label: "私密资料风险",
        penalty: 14,
        reviewers: ["资料提供方", "课程运营或企业服务负责人"],
        summary: "涉及学员或企业真实产品、客户、报价、订单、合同、付款或内部 SOP。",
        noGo: "未经脱敏和授权不得公开展示、用于销售证据或进入工具测试。"
      },
      {
        id: "high-liability",
        label: "高责任承诺风险",
        penalty: 18,
        reviewers: ["负责人", "财务/法务/企业授权岗位"],
        summary: "涉及报价、税费、清关、DDP、合同、付款、法务、交付责任或企业定制开发。",
        noGo: "不得由 Codex 或课程顾问直接确认高责任商业、合规和合同事项。"
      }
    ],
    nextActions: [
      {
        id: "nurture-only",
        label: "继续培育",
        score: 0,
        route: "资源跟进 / 试听课",
        summary: "先提供低门槛资源、试听课或资料准备清单，不进入收费承诺。",
        deliverable: "跟进标签、用户问题、下一次触达任务。"
      },
      {
        id: "confirm-start",
        label: "确认报名或开班",
        score: 10,
        route: "报名确认 / 开班交接",
        summary: "可进入付款确认、入班资料收集和老师备课。",
        deliverable: "付款前确认、入班资料清单、第一节课目标。"
      },
      {
        id: "enterprise-scope",
        label: "进入企业 scope",
        score: 8,
        route: "企业诊断 / Scope 审批",
        summary: "先做企业资料、岗位、服务范围和验收方式确认。",
        deliverable: "企业 scope brief、项目启动 brief、资料授权记录。"
      },
      {
        id: "upgrade-review",
        label: "升级或续费评审",
        score: 8,
        route: "续费复盘 / 工具 Sprint",
        summary: "基于验收证据判断是否进入陪跑、内训、工具或 SOP 共建。",
        deliverable: "续约 brief、下一阶段范围、未覆盖边界。"
      },
      {
        id: "hold-repair",
        label: "暂缓补证据",
        score: -4,
        route: "补资料 / 人工审批",
        summary: "证据、范围、授权或高责任事项不足，先进入暂缓和补证据。",
        deliverable: "缺口清单、负责人、复查日期。"
      }
    ],
    operatingRules: [
      "销售或企业服务承诺必须绑定页面证据、下载资产、交付验收和人工确认人。",
      "没有资料授权、scope、验收方式或高责任审批时，只能进入暂缓或人工审批。",
      "Codex 可生成确认 Brief、缺口清单和跟进话术，但不能替代价格、合同、合规、财务和企业管理判断。",
      "通过评审的产品包要回写到报名路径、企业服务、资源跟进或版本维护日志。"
    ]
  },
  pageStandards: [
    {
      page: "课程模块",
      purpose: "把业务动作拆成可上课、可演示、可交作业的训练单元。",
      required: ["业务痛点", "案例场景", "老师讲法", "Codex 操作步骤", "输出物", "学员作业", "验收标准", "常见卡点", "风险边界"],
      owner: "课程老师 + 内容负责人",
      gate: "没有可交付输出物、课堂讲法和作业验收标准的模块不进入正式课。"
    },
    {
      page: "课堂工作台",
      purpose: "把课程页面、案例页面、工具演示和作业验收串成老师可直接执行的授课流程。",
      required: ["课前检查", "资料脱敏", "课堂流程", "演示切换", "模块执行台", "讲师复制", "作业点评", "返修跟踪", "评分表", "答疑口径", "课后维护"],
      owner: "主讲老师 + 助教 + 课程运营",
      gate: "每节课必须能说明输入资料、工具输出、学员输出、助教检查、作业标准、讲师复制标准和人工确认边界。"
    },
    {
      page: "学员工作台",
      purpose: "把报名后的学习路径、作业提交、交付物验收和结课工具包标准化。",
      required: ["学员路径", "入班准备", "资料脱敏", "阶段路线", "交付物清单", "提交规则", "成果打包", "展示授权", "展示边界", "常见修正", "结课工具包"],
      owner: "课程运营 + 助教 + 主讲老师",
      gate: "每个交付物必须有业务输入、Codex 输出、验收标准、展示边界和人工确认边界。"
    },
    {
      page: "自动化地图",
      purpose: "把外贸流程中 Codex 可自动化、可辅助和禁止替代的边界统一到课程、工具和企业诊断里。",
      required: ["业务环节", "Codex 角色", "工具产出", "课程入口", "人工边界", "工具优先级"],
      owner: "课程负责人 + 产品负责人 + 企业服务负责人",
      gate: "没有业务输入、工具输出和人工确认人的自动化项不能进入工具开发或对外宣传。"
    },
    {
      page: "行业案例",
      purpose: "用一个完整订单链路承载课堂演示和工具复用。",
      required: ["产品参数", "目标客户", "原始询盘", "报价口径", "订单节点", "单证冲突", "脱敏授权", "准入评分", "复制模板", "复盘重点"],
      owner: "行业顾问 + 课程老师",
      gate: "案例必须能串起至少客户开发、询盘、报价和单证检查，并能沉淀为可复制资料模板。"
    },
    {
      page: "工具中心",
      purpose: "把课程里重复使用的表格、检查器和工作台独立沉淀。",
      required: ["业务场景", "输入字段", "输出结果", "适用课程", "开发规格", "需求评分", "上线阶段", "维护责任", "验收标准", "人工确认点", "静态预览", "后续交互化路径"],
      owner: "产品负责人 + 开发负责人",
      gate: "没有字段定义、开发规格、验收标准和风险边界的工具不能对外展示。"
    },
    {
      page: "指令库",
      purpose: "把课程中的 Codex 操作沉淀为可复制、可替换、可验收的课堂指令资产。",
      required: ["业务场景", "输入资料", "输出格式", "课堂顺序", "治理流程", "行业替换", "版本维护", "质量检查", "人工边界", "下载指令包"],
      owner: "课程老师 + 助教 + 内容负责人",
      gate: "没有业务输入、输出格式、质量检查和人工确认边界的指令不能进入课堂指令包。"
    },
    {
      page: "资源中心",
      purpose: "承接推广流量，让用户先拿到可用资料，再进入试听和系统课。",
      required: ["适合对象", "资料包含内容", "转化作用", "资料预览", "领取标签", "领取跟进", "线索分流", "下一步动作", "承诺边界", "FAQ"],
      owner: "市场负责人 + 课程顾问",
      gate: "每个免费资源都必须连接一个正式课程模块或企业服务入口。"
    },
    {
      page: "报名路径",
      purpose: "把适合对象、课程包、咨询分流、顾虑证据和承诺边界统一成转化决策页。",
      required: ["适合对象", "课程包", "产品 SKU", "交付范围", "线索分级", "招生总控", "分流诊断", "顾虑证据", "入班交接", "学习结果", "承诺边界"],
      owner: "课程顾问 + 运营负责人",
      gate: "报名页必须用页面证据回答顾虑，并把成交学员交接到班主任、助教和老师，不能承诺自动成交、自动报价或替代专业判断。"
    },
    {
      page: "推广运营",
      purpose: "把内容触达、资料领取、试听课、报名咨询和企业诊断串成可复盘增长流程。",
      required: ["转化链路", "日常工作台", "渠道打法", "内容排期", "素材生产台", "公开课脚本", "复盘指标", "宣传边界"],
      owner: "市场运营 + 课程负责人",
      gate: "每条推广内容都必须有业务痛点、页面证据、承接资源、下一步 CTA 和不夸大承诺的边界说明。"
    },
    {
      page: "企业服务",
      purpose: "把单人学习升级为团队流程诊断、内训和工具定制。",
      required: ["服务类型", "适合企业", "产品 SKU", "诊断问题", "分流规则", "访谈模板", "资料脱敏", "内训方案", "交付内容", "交付看板", "验收证据", "所需资料", "评估标准"],
      owner: "企业服务负责人",
      gate: "企业服务必须先判断资料成熟度、企业痛点和人工确认边界，再承诺培训或工具定制范围。"
    }
  ],
	  operatingFlow: [
    {
      stage: "01",
      title: "发现可课程化的业务问题",
      input: "学员咨询、企业访谈、社群问题、业务员重复劳动记录",
      output: "问题清单、目标用户、可自动化环节、人工确认边界"
    },
    {
      stage: "02",
      title: "转成网页课程与案例",
      input: "真实产品资料、询盘、报价表、订单记录和单证样例",
      output: "课程模块、课堂演示案例、作业要求和可复制指令"
    },
    {
      stage: "03",
      title: "沉淀成工具和资源",
      input: "课堂中反复使用的字段、模板、检查清单和输出格式",
      output: "工具卡片、静态 mockup、资料包、试听课和下载入口"
    },
    {
      stage: "04",
      title: "用数据持续迭代",
      input: "报名问题、试听转化、作业质量、企业内训反馈",
	      output: "课程版本更新、资源替换、工具优先级和企业服务 SOP"
	    }
	  ],
	  maintenanceCadence: [
	    {
	      cycle: "每周",
	      title: "招生与咨询反馈复盘",
	      owner: "运营负责人 + 课程顾问",
	      inputs: ["资源下载问题", "试听课留言", "报名顾虑", "企业咨询问题"],
	      updates: ["报名页常见顾虑", "资源页 FAQ", "咨询转化工作台", "下周推广主题"],
	      evidence: "至少沉淀 3 个真实问题，并判断是否需要新增资源或试听课。"
	    },
	    {
	      cycle: "每两周",
	      title: "课程作业和工具输出复盘",
	      owner: "主讲老师 + 产品负责人",
	      inputs: ["学员作业", "课堂卡点", "工具使用反馈", "指令输出质量"],
	      updates: ["课程模块作业要求", "指令库质量检查", "工具中心字段和演示数据"],
	      evidence: "至少选 1 个高频作业问题，转成字段、模板或工具改进。"
	    },
	    {
	      cycle: "每月",
	      title: "行业案例与企业服务复盘",
	      owner: "课程负责人 + 企业服务负责人",
	      inputs: ["企业访谈", "行业样例", "成交/未成交原因", "团队内训反馈"],
	      updates: ["案例中心扩展计划", "企业服务诊断问题", "运营路线图"],
	      evidence: "决定是否新增一个行业案例、一个企业服务包或一个工具优先级。"
	    },
	    {
	      cycle: "每季度",
	      title: "平台版本审计",
	      owner: "负责人 + 内容/开发/运营",
	      inputs: ["页面回归结果", "课程转化数据", "资源使用数据", "工具维护成本"],
	      updates: ["平台建设指标", "上线检查清单", "后续建设路线图"],
	      evidence: "完成一次全站内容、样式、导航、移动端和承诺边界审计。"
	    }
	  ],
	  contentOpsMatrix: [
	    {
	      area: "课程体系",
	      trigger: "课堂讲解不顺、作业质量低、模块顺序需要调整。",
	      file: "data/course-foreign-trade-codex.js",
	      owner: "主讲老师",
	      validation: "模块仍包含业务痛点、案例、老师讲法、Codex 演示、输出物、作业、验收标准、常见卡点和风险边界。"
	    },
	    {
	      area: "课堂工作台",
	      trigger: "老师授课流程不顺、演示入口分散、作业点评口径不统一或课后问题反复出现。",
	      file: "data/classroom.js",
	      owner: "主讲老师 + 助教",
	      validation: "课堂流程、演示切换、模块执行台、讲师复制、作业评分、返修跟踪、答疑口径和人工边界都能直接支持上课。"
	    },
	    {
	      area: "学员工作台",
	      trigger: "学员不知道先做什么、交付物不成体系、作业通过标准不清或结课成果难展示。",
	      file: "data/learning.js",
	      owner: "课程运营 + 助教",
	      validation: "入班准备、学习路径、作业清单、成果打包、展示边界、结课工具包和人工确认边界能直接指导学员完成课程。"
	    },
	    {
	      area: "自动化地图",
	      trigger: "新增工具规划、企业提出自动化需求、课程需要解释 Codex 可做与不可做的边界。",
	      file: "data/automation.js",
	      owner: "课程负责人 + 产品负责人",
	      validation: "每个自动化节点都有业务痛点、Codex 角色、工具产出、课程入口和人工确认边界。"
	    },
	    {
	      area: "案例中心",
	      trigger: "新增行业样板、企业提供脱敏订单、现有案例字段不够完整。",
	      file: "data/cases.js / data/case-integrated-house.js",
	      owner: "行业顾问 + 内容负责人",
	      validation: "案例能串起客户开发、询盘、报价、订单、单证、准入评分、复制模板和人工确认边界。"
	    },
	    {
	      area: "工具中心",
	      trigger: "同一表格或检查动作在课堂中反复出现。",
	      file: "data/tools.js / assets/app.js",
	      owner: "产品负责人 + 开发负责人",
	      validation: "工具有业务场景、输入字段、输出结果、开发规格、需求评分、上线阶段、验收标准、演示数据、人工确认边界和移动端检查。"
	    },
	    {
	      area: "指令库",
	      trigger: "老师或学员反复使用同一类 Codex 操作。",
	      file: "data/prompts.js",
	      owner: "课程老师",
	      validation: "指令有适用模块、输入资料、输出结果、课堂顺序、治理流程、行业替换规则、版本维护、人工边界、质量检查和可下载指令包。"
	    },
	    {
	      area: "资源中心",
	      trigger: "推广需要新的免费资料、试听课、模板或企业诊断入口。",
	      file: "data/site.js / downloads/",
	      owner: "市场运营",
	      validation: "每个资源都连接一个课程模块、下一步动作、领取标签、领取跟进、7 天转化复盘、线索分流、承诺边界和下载文件。"
	    },
	    {
	      area: "报名路径",
	      trigger: "咨询中出现新的报课顾虑、线索分级不清或转化路径变长。",
	      file: "data/enrollment.js",
	      owner: "课程顾问 + 运营负责人",
	      validation: "招生总控、顾虑证据、咨询分流和入班交接能对应到页面证据、资源下载、下一步动作和承诺边界，不承诺自动成交、自动报价或替代专业判断。"
	    },
	    {
	      area: "推广运营",
	      trigger: "新渠道启动、资料领取转化低、试听课完课率低或企业线索增多。",
	      file: "data/marketing.js",
	      owner: "市场运营 + 课程负责人",
	      validation: "日常工作台、内容和公开课能回到资源、试听、报名或企业服务页面，有页面证据、CTA 和宣传承诺边界。"
	    },
	    {
	      area: "企业服务",
	      trigger: "企业咨询集中在流程诊断、团队内训或工具定制。",
	      file: "data/enterprise.js",
	      owner: "企业服务负责人",
	      validation: "诊断分流结果能对应服务包和内训方案，交付看板能说明阶段、验收证据、企业责任、资料脱敏和人工审批边界。"
	    }
	  ],
	  releaseChecklists: [
    {
      title: "内容上线前",
      items: ["是否有真实外贸业务场景", "是否有学员能拿走的输出物", "是否写清 Codex 操作步骤", "是否标出人工确认边界"]
    },
    {
      title: "页面上线前",
      items: ["是否有清晰标题和转化动作", "是否保持商务简约和毛玻璃风格", "移动端是否无横向溢出", "导航是否能进入该页面"]
    },
    {
      title: "教学使用前",
      items: ["老师能否直接按页面讲课", "案例数据是否前后一致", "课堂作业是否可验收", "常见疑问是否已有解释"]
    },
    {
      title: "商业推广前",
      items: ["免费资料是否连接试听课", "试听课是否连接系统课", "企业咨询是否有诊断口径", "宣传承诺是否避开不确定风险"]
    }
  ],
  roadmap: [
    {
      phase: "第一阶段",
      title: "内容和页面标准化",
      focus: "完善课程、案例、工具、指令、资源和企业服务页面，让网站可以直接用于讲课和转化。"
    },
    {
      phase: "第二阶段",
      title: "工具从静态预览升级为可交互",
      focus: "优先开发询盘识别、报价费用项检查、单证一致性检查和客户库维护工具。"
    },
    {
      phase: "第三阶段",
      title: "行业案例扩展",
      focus: "在集成房屋案例稳定后，复制到机械设备、家具、建材、消费品等外贸行业。"
    },
    {
      phase: "第四阶段",
      title: "企业服务产品化",
      focus: "把流程诊断、内训、工具定制和 SOP 建设形成标准交付包，支持团队和企业客户。"
    }
  ]
};
