window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.home = {
  entryRouter: {
    title: "首页角色路径规划器",
    description:
      "让不同身份的访客先判断自己该从免费资料、试听课、系统课、课堂交付、企业诊断、工具共建还是运营指南进入，避免首页只展示内容却没有下一步动作。",
    exportFilename: "homepage-entry-route-brief-output.md",
    downloads: [
      {
        label: "下载首页入口分流表 CSV",
        href: "./downloads/homepage-entry-routing-board.csv",
        format: "CSV",
        note: "用于课程顾问、运营和老师判断访客身份、痛点、证据页面和下一步动作。"
      },
      {
        label: "下载入口路径 Brief 模板 MD",
        href: "./downloads/homepage-entry-brief-template.md",
        format: "Markdown",
        note: "用于把一次咨询、试听课报名或企业诊断线索转成可跟进路径。"
      }
    ],
    defaults: {
      role: "individual-sales",
      painArea: "inquiry-quote",
      goal: "system-course",
      evidenceLevel: "basic-product",
      urgency: "this-week"
    },
    roles: [
      {
        id: "individual-sales",
        label: "个人外贸业务员",
        summary: "适合想把产品资料、询盘、报价和跟单重复动作整理成个人工作台的学员。",
        routePages: ["resources.html", "enrollment.html", "learning.html"],
        codexUse: ["整理产品资料和客户字段", "生成询盘拆解和英文回复草稿", "输出报价前确认清单"],
        manualConfirm: ["真实价格和利润", "产品参数和认证", "客户承诺和付款条件"],
        owner: "课程顾问 + 主讲老师",
        nextAction: "先领取资料或看试听课，再判断是否进入系统课。"
      },
      {
        id: "trade-manager",
        label: "外贸主管 / 老板",
        summary: "适合希望统一团队资料、报价口径、作业验收和新人训练方法的管理者。",
        routePages: ["enrollment.html", "automation.html", "enterprise.html", "playbook.html"],
        codexUse: ["整理团队重复劳动地图", "生成岗位训练建议", "汇总工具化优先级"],
        manualConfirm: ["团队考核标准", "报价审批责任", "企业资料授权范围"],
        owner: "运营负责人 + 企业服务负责人",
        nextAction: "先做重复劳动自测，再判断个人课、团队内训或企业诊断。"
      },
      {
        id: "enterprise-owner",
        label: "企业客户",
        summary: "适合工厂、贸易公司或产业带企业评估团队内训、流程诊断、工具/SOP 共建。",
        routePages: ["enterprise.html", "automation.html", "tools.html", "playbook.html"],
        codexUse: ["整理访谈纪要和流程痛点", "生成企业诊断 Brief", "映射内训模块和工具输出"],
        manualConfirm: ["服务范围和报价", "资料脱敏授权", "企业内部审批和验收责任"],
        owner: "企业服务负责人",
        nextAction: "预约企业诊断，先确认资料成熟度和样板业务线。"
      },
      {
        id: "instructor-assistant",
        label: "老师 / 助教",
        summary: "适合把课程内容、课堂演示、作业验收和返修规则统一成可复制交付流程的教学团队。",
        routePages: ["course.html", "classroom.html", "learning.html", "prompts.html"],
        codexUse: ["生成课堂 runbook", "整理学员作业返修建议", "汇总课堂卡点和讲师复制清单"],
        manualConfirm: ["作业是否通过", "展示是否授权", "课堂承诺是否越界"],
        owner: "主讲老师 + 助教负责人",
        nextAction: "进入课堂工作台，按集成房屋样板跑通一节课。"
      },
      {
        id: "marketing-operator",
        label: "市场 / 课程顾问",
        summary: "适合把内容引流、资料领取、试听课、报名咨询和企业线索分流做成可复盘流程。",
        routePages: ["resources.html", "marketing.html", "enrollment.html", "playbook.html"],
        codexUse: ["给线索打标签", "生成试听课跟进摘要", "把顾虑匹配到证据页面"],
        manualConfirm: ["用户是否适合报名", "跟进口径是否夸大", "企业线索是否进入诊断"],
        owner: "市场运营 + 课程顾问",
        nextAction: "进入推广运营页，按日常运营台处理线索和复盘。"
      },
      {
        id: "tool-product",
        label: "工具 / 产品共建",
        summary: "适合把课堂高频模板、企业重复流程和学员作业卡点升级成轻交互工具或开发规格。",
        routePages: ["tools.html", "automation.html", "prompts.html", "case-integrated-house.html"],
        codexUse: ["生成字段字典", "整理测试样例", "草拟工具开发规格和验收清单"],
        manualConfirm: ["工具是否有真实业务输入", "上线范围和承诺", "人工确认边界"],
        owner: "产品负责人 + 开发负责人",
        nextAction: "进入工具中心，用集成房屋样板先跑通输入、输出和验收。"
      }
    ],
    painAreas: [
      {
        id: "product-data",
        label: "产品资料不完整",
        diagnosis: "先补产品字段、认证、包装、装柜、安装和售后，避免 Codex 输出空泛。",
        pageRoutes: ["course.html", "tools.html", "case-integrated-house.html"],
        deliverable: "产品资料表、缺失字段清单、英文资料草稿和人工确认人。"
      },
      {
        id: "inquiry-quote",
        label: "询盘和报价效率低",
        diagnosis: "优先训练询盘识别、缺失信息、费用项检查和报价边界。",
        pageRoutes: ["resources.html", "enrollment.html", "case-integrated-house.html"],
        deliverable: "询盘拆解表、报价前问题、FOB/CIF 字段和英文回复草稿。"
      },
      {
        id: "customer-dev",
        label: "客户开发难持续",
        diagnosis: "先把客户字段、客户分级和跟进节奏标准化，不急着群发。",
        pageRoutes: ["course.html", "tools.html", "marketing.html"],
        deliverable: "客户线索库、A/B/C 分级、开发角度和下一步跟进动作。"
      },
      {
        id: "classroom-delivery",
        label: "课程交付要复制",
        diagnosis: "把老师讲法、演示切换、作业点评和返修标准统一到课堂工作台。",
        pageRoutes: ["classroom.html", "learning.html", "prompts.html"],
        deliverable: "单节课 runbook、课堂演示顺序、作业评分和返修记录。"
      },
      {
        id: "learner-proof",
        label: "学员成果要展示",
        diagnosis: "把结课工具包、成果 Brief、展示授权和招生证据分开管理。",
        pageRoutes: ["learning.html", "enrollment.html", "playbook.html"],
        deliverable: "学员最终工具包、成果展示 Brief、授权状态和证据边界。"
      },
      {
        id: "enterprise-process",
        label: "企业流程混乱",
        diagnosis: "先做企业资料成熟度和重复劳动诊断，再决定内训、工具或 SOP 共建。",
        pageRoutes: ["enterprise.html", "automation.html", "playbook.html"],
        deliverable: "企业诊断 Brief、资料清单、内训模块映射和交付验收证据。"
      },
      {
        id: "toolization",
        label: "想把重复动作做成工具",
        diagnosis: "先判断是否有真实业务输入、可复用输出、集成房屋样板和人工确认边界。",
        pageRoutes: ["tools.html", "automation.html", "prompts.html"],
        deliverable: "工具需求评分、字段字典、开发 Brief 和上线验收清单。"
      }
    ],
    goals: [
      {
        id: "free-resource",
        label: "先领取资料",
        routePages: ["resources.html", "cases.html"],
        cta: "先下载自测表、集成房屋资料包或试听课提纲。",
        evidenceNeed: "需要留下身份、产品线或当前痛点标签，便于后续分流。"
      },
      {
        id: "demo-lesson",
        label: "先看试听课",
        routePages: ["resources.html", "marketing.html", "enrollment.html"],
        cta: "进入 10 分钟询盘识别演示课，再判断是否报名或预约企业诊断。",
        evidenceNeed: "需要准备一个脱敏询盘或当前报价卡点。"
      },
      {
        id: "system-course",
        label: "判断系统课",
        routePages: ["enrollment.html", "course.html", "learning.html"],
        cta: "进入报名路径，确认适合对象、课程包、交付物和入班准备。",
        evidenceNeed: "需要准备产品资料、询盘或跟单问题，避免只学概念。"
      },
      {
        id: "enterprise-diagnosis",
        label: "预约企业诊断",
        routePages: ["enterprise.html", "automation.html", "tools.html"],
        cta: "进入企业服务，先确认资料成熟度、岗位参与和样板业务线。",
        evidenceNeed: "需要脱敏产品、询盘、报价、订单或单证样例。"
      },
      {
        id: "tool-sop",
        label: "评估工具 / SOP",
        routePages: ["tools.html", "playbook.html"],
        cta: "进入工具中心和运营指南，先做需求评分和上线边界确认。",
        evidenceNeed: "需要证明该动作重复出现，并且可用字段和验收标准描述清楚。"
      },
      {
        id: "internal-ops",
        label: "做内部运营",
        routePages: ["playbook.html", "marketing.html", "classroom.html"],
        cta: "进入运营指南，生成日常运营 Brief，再回到推广、课堂或学员工作台执行。",
        evidenceNeed: "需要明确当天运营重点、负责人、页面证据和复盘指标。"
      }
    ],
    evidenceLevels: [
      {
        id: "no-material",
        label: "暂无材料",
        readiness: "适合先领取资料和观看试听课。",
        pageRoutes: ["resources.html", "cases.html"],
        requirement: "先填写产品线、目标客户和当前最耗时的重复动作。",
        boundary: "材料不足时不建议直接承诺课程效果或企业改造范围。"
      },
      {
        id: "basic-product",
        label: "有基础产品资料",
        readiness: "适合进入系统课咨询或产品资料工作台。",
        pageRoutes: ["course.html", "tools.html"],
        requirement: "补齐参数、包装、认证、安装、装柜和售后字段。",
        boundary: "产品参数、认证和价格仍需业务负责人确认。"
      },
      {
        id: "real-inquiry",
        label: "有脱敏询盘 / 报价",
        readiness: "适合试听课、系统课或企业诊断的高质量输入。",
        pageRoutes: ["resources.html", "enrollment.html", "enterprise.html"],
        requirement: "脱敏客户名、联系方式、真实价格、合同编号和敏感付款信息。",
        boundary: "Codex 可拆解和生成草稿，但报价、付款和客户承诺必须人工确认。"
      },
      {
        id: "authorized-showcase",
        label: "有授权展示样例",
        readiness: "适合进入学员成果展示、招生证据或公开课样例。",
        pageRoutes: ["learning.html", "enrollment.html", "playbook.html"],
        requirement: "确认展示范围、有效期、撤回方式和不可公开字段。",
        boundary: "一次课堂使用授权不等于公开招生展示授权。"
      },
      {
        id: "enterprise-samples",
        label: "有企业样例",
        readiness: "适合进入企业诊断、团队内训或工具/SOP 共建。",
        pageRoutes: ["enterprise.html", "tools.html", "playbook.html"],
        requirement: "确认企业授权岗位、资料范围、参与岗位和验收责任。",
        boundary: "企业资料默认不公开，不进入营销或公开案例。"
      }
    ],
    urgencies: [
      {
        id: "learn-first",
        label: "先了解方法",
        timing: "今天先走资源和案例预览，不急着报名或企业诊断。",
        nextStep: "领取资料包，记录一个业务痛点，48 小时内回到试听课或报名路径。"
      },
      {
        id: "this-week",
        label: "本周想判断",
        timing: "本周需要完成试听、咨询或企业初步诊断。",
        nextStep: "先生成入口路径 Brief，再安排试听课、报名咨询或企业访谈。"
      },
      {
        id: "class-ready",
        label: "准备开班交付",
        timing: "已经进入课程交付，需要老师、助教和学员材料同步。",
        nextStep: "进入课堂工作台和学员工作台，确认 runbook、作业和返修标准。"
      },
      {
        id: "project-now",
        label: "企业项目在推进",
        timing: "需要尽快把企业资料、诊断、方案和验收边界说清楚。",
        nextStep: "进入企业服务页，生成诊断 Brief 并确认资料授权。"
      }
    ]
  },
  trialBridge: {
    title: "试听课转化路径生成器",
    description:
      "把首页访客转成可执行的试听课 Brief：明确试听对象、演示重点、证据需求、主要顾虑、课后分流、Codex 可做事项和人工确认边界。",
    exportFilename: "trial-class-conversion-brief-output.md",
    downloads: [
      {
        label: "下载试听课转化分流表 CSV",
        href: "./downloads/trial-class-conversion-routing-board.csv",
        format: "CSV",
        note: "用于市场、课程顾问和主讲老师统一试听课前准备、课中证据、课后跟进和边界确认。"
      },
      {
        label: "下载试听课 Brief 模板 MD",
        href: "./downloads/trial-class-brief-template.md",
        format: "Markdown",
        note: "用于公开课、私域试听、报名咨询和企业诊断前沟通。"
      }
    ],
    defaults: {
      learnerSegment: "experienced-sales",
      demoFocus: "inquiry-analysis",
      proofNeed: "outcome-proof",
      concern: "ai-reliability",
      followupRoute: "system-course"
    },
    learnerSegments: [
      {
        id: "newcomer",
        label: "外贸新人",
        profile: "需要先看到产品资料、询盘、报价和客户跟进的基本结构，不适合一开始讲太复杂的系统改造。",
        owner: "课程顾问 + 助教",
        routePages: ["resources.html", "course.html", "learning.html"],
        codexUse: ["整理基础产品字段", "拆解一条简单询盘", "生成首轮学习任务"],
        manualConfirm: ["产品参数", "客户真实需求", "报价和交期"]
      },
      {
        id: "experienced-sales",
        label: "有经验业务员",
        profile: "已经有产品、客户和询盘场景，最关心能否减少重复回复、报价检查和跟单整理。",
        owner: "课程顾问 + 主讲老师",
        routePages: ["enrollment.html", "course.html", "case-integrated-house.html", "tools.html"],
        codexUse: ["拆解真实询盘字段", "生成英文补问信", "输出报价前人工确认清单"],
        manualConfirm: ["真实价格", "利润口径", "付款条件", "客户承诺"]
      },
      {
        id: "manager-owner",
        label: "外贸主管 / 老板",
        profile: "更关心团队做法是否可复制、新人能不能被训练、报价和单证风险能不能统一检查。",
        owner: "课程顾问 + 企业服务负责人",
        routePages: ["enrollment.html", "automation.html", "enterprise.html", "playbook.html"],
        codexUse: ["整理团队重复劳动地图", "生成岗位训练重点", "汇总工具/SOP 优先级"],
        manualConfirm: ["团队审批规则", "服务范围", "资料授权", "企业内部责任"]
      },
      {
        id: "enterprise-team",
        label: "企业团队",
        profile: "需要先用试听建立方法可信度，再进入资料成熟度诊断和团队内训范围确认。",
        owner: "企业服务负责人 + 主讲老师",
        routePages: ["enterprise.html", "automation.html", "tools.html", "playbook.html"],
        codexUse: ["整理诊断前访谈问题", "映射内训模块", "生成企业资料清单草稿"],
        manualConfirm: ["项目报价", "企业授权", "签约范围", "验收责任"]
      }
    ],
    demoFocuses: [
      {
        id: "inquiry-analysis",
        label: "10 分钟询盘识别",
        scene: "沙特客户询问 80 套 20ft 可扩展集成房屋，要求 CIF Jeddah。",
        demoPage: "case-integrated-house.html",
        toolPage: "tools.html",
        deliverable: "已知需求、缺失信息、补问问题、风险点和英文回复草稿。",
        evidence: "最适合作为首页到报名咨询的第一段试听，因为用户能快速看到 Codex 从聊天变成业务结构。"
      },
      {
        id: "quotation-check",
        label: "报价费用项检查",
        scene: "用 FOB/CIF/DDP 对比说明费用项、利润、运费、保险和 DDP 风险边界。",
        demoPage: "case-integrated-house.html",
        toolPage: "tools.html",
        deliverable: "报价前确认表、费用项清单、DDP 谨慎提醒和人工审批项。",
        evidence: "适合已经有报价困扰的业务员或老板，但必须强调价格和利润不能由 Codex 自动确认。"
      },
      {
        id: "product-profile",
        label: "产品资料成熟度",
        scene: "用集成房屋参数、包装、装柜、认证、安装和售后字段说明资料不完整会导致后续输出空泛。",
        demoPage: "case-integrated-house.html",
        toolPage: "tools.html",
        deliverable: "Ready / Confirm / Missing 字段表、补资料清单和英文资料草稿。",
        evidence: "适合资料较乱的新学员或工厂型企业，先补输入质量再谈自动化。"
      },
      {
        id: "order-document-risk",
        label: "订单单证风险检查",
        scene: "用订单节点、PI/CI/PL 冲突和付款风险展示跟单与单证检查的边界。",
        demoPage: "classroom.html",
        toolPage: "automation.html",
        deliverable: "订单风险节点、单证冲突报告、付款风险提醒和人工确认人。",
        evidence: "适合团队管理者和企业客户，展示训练价值不止是写邮件。"
      }
    ],
    proofNeeds: [
      {
        id: "business-practical",
        label: "想看是否真的实用",
        response: "优先展示输入、结构化输出和下一步业务动作，不讲模型原理。",
        proofPages: ["course.html", "tools.html", "case-integrated-house.html"],
        successSignal: "用户能说出自己的一条业务流程可以按同样字段替换。"
      },
      {
        id: "industry-fit",
        label: "想判断行业能否替换",
        response: "说明集成房屋是第一套完整样板，训练的是产品、客户、询盘、报价、订单和风险字段结构。",
        proofPages: ["cases.html", "case-integrated-house.html", "resources.html"],
        successSignal: "用户能提交一个主推产品或一条脱敏询盘做匹配。"
      },
      {
        id: "no-code",
        label: "担心不会编程",
        response: "强调第一阶段训练字段、模板、指令、检查清单和工具规格，不要求学员写代码。",
        proofPages: ["tools.html", "prompts.html", "learning.html"],
        successSignal: "用户理解课程交付物不是代码，而是可复制业务工作台。"
      },
      {
        id: "outcome-proof",
        label: "想知道学完拿到什么",
        response: "把试听演示连接到学员工作台和结课成果包，展示作业、返修和最终工具包。",
        proofPages: ["learning.html", "enrollment.html", "course.html"],
        successSignal: "用户能判断自己能准备哪些资料并完成哪些作业。"
      }
    ],
    concerns: [
      {
        id: "ai-reliability",
        label: "担心 AI 输出不可靠",
        answer: "试听中必须展示 Codex 只负责整理、草稿、检查和提醒，最终报价、交期、付款、合规由人工确认。",
        noGo: "不能演示 AI 直接生成最终报价、合同承诺、合规结论或付款判断。"
      },
      {
        id: "data-privacy",
        label: "担心资料隐私",
        answer: "试听前要求脱敏，公开展示只使用集成房屋样板或已授权材料。",
        noGo: "不能要求用户提交真实客户名、联系方式、底价、合同编号或企业机密。"
      },
      {
        id: "time-cost",
        label: "担心没时间学",
        answer: "试听只演示一个高频动作，并把系统课拆成每周可交付作业。",
        noGo: "不能承诺不投入资料和练习也能自动提效。"
      },
      {
        id: "price-value",
        label: "担心课程价值不够",
        answer: "用作业交付、工具输出和页面证据说明价值来自可复用工作流。",
        noGo: "不能用自动成交、收益翻倍、快速暴涨等话术支撑转化。"
      }
    ],
    followupRoutes: [
      {
        id: "resource-nurture",
        label: "资料培育",
        status: "先培育",
        targetPage: "resources.html",
        nextAction: "发送重复劳动自测表、试听回放和集成房屋资料包，48 小时后追问一个业务痛点。",
        owner: "市场运营"
      },
      {
        id: "system-course",
        label: "系统课咨询",
        status: "可咨询",
        targetPage: "enrollment.html",
        nextAction: "进入报名路径，确认资料准备、课程包、开课时间和人工边界。",
        owner: "课程顾问"
      },
      {
        id: "enterprise-diagnosis",
        label: "企业诊断",
        status: "转企业",
        targetPage: "enterprise.html",
        nextAction: "预约 15 分钟诊断前沟通，收集脱敏样例和岗位参与信息。",
        owner: "企业服务负责人"
      },
      {
        id: "boundary-education",
        label: "边界教育 / 暂缓",
        status: "暂缓报名",
        targetPage: "automation.html",
        nextAction: "先解释 Codex 自动化边界，不适合承诺自动找客户、自动成交或自动报价。",
        owner: "课程顾问"
      }
    ]
  },
  publicLessonRoute: {
    title: "集成房屋公开课 6 步讲课路线",
    summary:
      "用于把 20-30 分钟公开课从入口、案例、工具、课堂检查、报名承接到运营回写串成一条稳定路线。老师按步骤讲业务问题和页面证据，运营按同一张表复盘线索和下一版内容。",
    downloads: [
      {
        label: "下载公开课讲课路线表 CSV",
        href: "./downloads/public-lesson-route-board.csv",
        format: "CSV",
        note: "用于公开课、试讲、录课和私域直播前统一页面路线、讲师动作、观众动作、证据和边界。"
      },
      {
        label: "下载公开课路线 Brief 模板 MD",
        href: "./downloads/public-lesson-route-brief-template.md",
        format: "Markdown",
        note: "用于开课前排练、课后复盘、线索分流、页面回写和下一场公开课改版。"
      }
    ],
    routeMeta: [
      {
        label: "时长",
        value: "20-30 min",
        note: "适合公开课开场、私域试听或报名咨询前演示。"
      },
      {
        label: "主案例",
        value: "集成房屋出口",
        note: "沙特客户 80 套 20ft 可扩展集成房屋询盘。"
      },
      {
        label: "目标",
        value: "转入四类承接",
        note: "资料领取、系统课报名、企业诊断或继续培育。"
      },
      {
        label: "底线",
        value: "不越界承诺",
        note: "不说自动成交、自动报价、自动清关或替代审批。"
      }
    ],
    steps: [
      {
        stage: "01",
        title: "首页定位与试听入口",
        pageRoute: ["index.html#trial-class", "resources.html"],
        teacherMove: "先讲外贸人每天被产品资料、询盘、报价、跟单和单证重复动作占用，不从模型原理开场。",
        codexAssist: "生成试听课路径 Brief、访客角色分流和课程顾问跟进摘要。",
        humanCheck: "确认听众身份、是否有脱敏资料、是否适合公开课展示。",
        visibleProof: "首页试听路径、资料中心入口和重复劳动自测表。",
        handoff: "进入集成房屋案例总览。"
      },
      {
        stage: "02",
        title: "集成房屋案例总览",
        pageRoute: ["case-integrated-house.html", "cases.html"],
        teacherMove: "用 80 套 20ft 可扩展集成房屋说明课程按真实业务链路讲，不是泛泛提示词。",
        codexAssist: "整理产品字段、客户背景、询盘场景和页面讲解提纲。",
        humanCheck: "确认案例为教学样例，不能当真实报价、合同或合规结论。",
        visibleProof: "案例产品资料、业务流程、逐屏讲解稿和公开课转化话术。",
        handoff: "切到询盘识别和报价工具演示。"
      },
      {
        stage: "03",
        title: "工具演示与输出证据",
        pageRoute: ["tools.html", "prompts.html"],
        teacherMove: "展示询盘识别、报价字段、订单节点和单证检查如何把聊天内容变成可验收输出。",
        codexAssist: "生成需求拆解、补问问题、回复草稿、费用项检查和单证冲突提示。",
        humanCheck: "价格、利润、付款、交期、报关、税务、法务和客户承诺必须人工确认。",
        visibleProof: "工具演示器、导出模板、课堂指令包和人工边界说明。",
        handoff: "回到课堂工作台检查老师是否讲得出边界。"
      },
      {
        stage: "04",
        title: "课堂排练与上线检查",
        pageRoute: ["classroom.html#classroom-rehearsal-gate", "classroom.html"],
        teacherMove: "按逐屏稿试讲 15-20 分钟，说明每一屏的观众动作、页面证据、CTA 和禁止承诺。",
        codexAssist: "整理试讲记录、负责人批注、返修动作和公开课上线复盘模板。",
        humanCheck: "主讲老师、课程负责人和运营负责人确认可以公开展示。",
        visibleProof: "试讲排练检查台、课堂 runbook、讲师复制认证和上线 no-go 规则。",
        handoff: "进入报名承接和企业诊断分流。"
      },
      {
        stage: "05",
        title: "报名承接与企业分流",
        pageRoute: ["enrollment.html", "enterprise.html", "marketing.html"],
        teacherMove: "公开课结尾不给单一路径，按资料领取、系统课、企业诊断和继续培育四类分流。",
        codexAssist: "生成课后跟进标签、顾虑证据 Brief、课程顾问话术和企业诊断前问题。",
        humanCheck: "课程价格、交付范围、企业项目 scope、付款和服务承诺必须人工确认。",
        visibleProof: "报名路径、转化总控、企业服务入口和推广运营复盘台。",
        handoff: "公开课结束后 24 小时内回写运营指南。"
      },
      {
        stage: "06",
        title: "课后复盘与版本回写",
        pageRoute: ["playbook.html", "resources.html", "marketing.html"],
        teacherMove: "把观众问题、线索分流、页面卡点、工具问题和承诺边界写回平台，而不是留在聊天记录里。",
        codexAssist: "汇总公开课问答、生成 FAQ 更新项、拆分页面修改任务和下一场公开课 Brief。",
        humanCheck: "运营负责人确认哪些内容能公开、哪些进入系统课、哪些进入企业服务或暂缓。",
        visibleProof: "运营指南发布看板、版本回写路由、资源跟进和营销日常复盘。",
        handoff: "沉淀下一场公开课母版。"
      }
    ],
    noGoRules: [
      "未完成逐屏试讲、工具演示和上线检查前，不对外发布录课或直播。",
      "公开课只使用集成房屋公开样例或已授权脱敏资料，不展示真实客户、成本、合同、付款和企业内部流程。",
      "工具输出只能作为草稿、检查、提醒和结构化证据，不能说成最终报价、最终合同或专业合规结论。",
      "结尾不得制造焦虑、虚假稀缺、收益承诺或自动成交承诺。",
      "公开课后的问题、线索和页面缺口必须回写到资源、报名、课堂、案例、工具、营销或运营指南。"
    ],
    nextActions: [
      {
        label: "给主讲老师",
        action: "先按 6 步路线录一次内部试讲，标出卡顿、跳屏和边界遗漏。"
      },
      {
        label: "给课程顾问",
        action: "用报名路径和商业证据页承接试听后的顾虑，不靠临场承诺。"
      },
      {
        label: "给运营负责人",
        action: "公开课后 24 小时内完成线索分流、FAQ 更新和版本回写。"
      }
    ]
  },
  commercialProofNavigator: {
    title: "商业证据路径导航器",
    description:
      "用于把用户报课前的顾虑转成可展示证据：页面路径、下载资产、工具输出、可讲口径、下一步 CTA 和必须人工确认的边界。",
    exportFilename: "commercial-proof-brief-output.md",
    downloads: [
      {
        label: "下载商业证据路径表 CSV",
        href: "./downloads/homepage-commercial-proof-map.csv",
        format: "CSV",
        note: "用于市场、课程顾问、老师和企业服务团队统一首页、试听课、报名咨询和企业诊断的证据路径。"
      },
      {
        label: "下载商业证据 Brief 模板 MD",
        href: "./downloads/commercial-proof-brief-template.md",
        format: "Markdown",
        note: "用于私域咨询、公开课复盘、报名页优化、企业诊断前沟通和销售培训。"
      }
    ],
    defaults: {
      visitor: "experienced-sales",
      concern: "outcome-proof",
      decisionStage: "trial-followup"
    },
    visitors: [
      {
        id: "newcomer",
        label: "外贸新人",
        question: "我不会 AI、资料也不完整，能不能学出实际东西？",
        routePages: ["resources.html", "course.html", "learning.html"],
        proofAngle: "先证明课程按业务流程拆解，不要求一开始就会编程或准备完整系统。",
        codexUse: ["整理基础产品字段", "生成首轮询盘拆解", "输出学习任务和作业清单"],
        manualCheck: ["产品参数", "真实客户需求", "价格和交期"],
        owner: "课程顾问 + 助教"
      },
      {
        id: "experienced-sales",
        label: "有经验业务员",
        question: "课程能不能真正减少询盘、报价、跟单和单证这些重复劳动？",
        routePages: ["case-integrated-house.html", "tools.html", "learning.html", "enrollment.html"],
        proofAngle: "重点展示集成房屋样板、7 个工具输出和结课成果，而不是泛泛讲 AI 概念。",
        codexUse: ["拆解真实询盘", "生成报价前确认清单", "把作业打包成个人工具包"],
        manualCheck: ["真实价格", "利润口径", "付款条件", "客户承诺"],
        owner: "课程顾问 + 主讲老师"
      },
      {
        id: "manager-owner",
        label: "外贸主管 / 老板",
        question: "个人学会了以后，团队能不能复制，新人能不能按同一套方法训练？",
        routePages: ["automation.html", "classroom.html", "enterprise.html", "playbook.html"],
        proofAngle: "重点展示岗位训练、课堂 runbook、工具字段、企业诊断和运营指南，证明可复制交付。",
        codexUse: ["整理团队重复劳动地图", "生成岗位训练重点", "汇总 SOP 和工具化优先级"],
        manualCheck: ["团队审批规则", "岗位责任", "资料授权", "服务范围"],
        owner: "课程顾问 + 企业服务负责人"
      },
      {
        id: "enterprise-team",
        label: "企业团队",
        question: "企业资料敏感、岗位多、流程复杂，能不能先诊断再决定内训或工具共建？",
        routePages: ["enterprise.html", "automation.html", "tools.html", "playbook.html"],
        proofAngle: "重点展示企业诊断资料包、内训方案映射、交付验收和资料脱敏授权边界。",
        codexUse: ["整理诊断访谈纪要", "映射内训模块", "生成企业资料清单草稿"],
        manualCheck: ["企业授权", "项目报价", "签约范围", "验收责任"],
        owner: "企业服务负责人"
      },
      {
        id: "instructor-operator",
        label: "老师 / 运营团队",
        question: "这套网站能不能长期作为培训公司指南，而不是一次性落地页？",
        routePages: ["course.html", "classroom.html", "marketing.html", "playbook.html"],
        proofAngle: "重点展示课程、课堂、推广、发布、回写和版本维护模块，证明内容可长期维护。",
        codexUse: ["生成课堂 runbook", "整理咨询和作业反馈", "形成版本回写建议"],
        manualCheck: ["课堂承诺", "公开展示授权", "发布验收", "维护负责人"],
        owner: "课程负责人 + 运营负责人"
      }
    ],
    concerns: [
      {
        id: "ai-concept",
        label: "担心只是讲 AI 概念",
        proofStatement: "用课程模块、课堂执行台、工具中心和集成房屋完整案例证明每节课都有业务输入和可验收输出。",
        proofPages: ["course.html", "classroom.html", "tools.html", "case-integrated-house.html"],
        downloads: ["course-delivery-blueprint.csv", "course-module-linkage-map.csv", "integrated-house-demo-command-board.csv"],
        visibleOutput: "12 模块交付蓝图、课堂 runbook、工具输出卡和集成房屋演示指挥表。",
        boundary: "不承诺听完就自动成交，承诺的是可复用流程、作业和工具输出。"
      },
      {
        id: "industry-fit",
        label: "担心行业不适配",
        proofStatement: "用案例中心说明集成房屋是第一套完整样板，训练的是字段结构和流程替换方法。",
        proofPages: ["cases.html", "case-integrated-house.html", "resources.html"],
        downloads: ["industry-case-intake.csv", "industry-case-readiness-scorecard.csv", "integrated-house-toolkit.csv"],
        visibleOutput: "行业案例准入评分、集成房屋字段包和行业替换 Brief。",
        boundary: "特殊认证、清关、价格、物流和合规口径必须按行业专业确认。"
      },
      {
        id: "ai-reliability",
        label: "担心 AI 输出不可靠",
        proofStatement: "用自动化地图、风险边界、单证检查和付款风险作业证明 Codex 只做辅助，不替代最终判断。",
        proofPages: ["automation.html", "tools.html", "learning.html"],
        downloads: ["document-consistency-check.csv", "payment-risk-homework-template.md", "platform-goal-compliance-matrix.csv"],
        visibleOutput: "人工确认清单、单证冲突报告、付款风险矩阵和自动化边界说明。",
        boundary: "最终报价、合同、付款、交期、报关、税务、法务和合规结论必须人工确认。"
      },
      {
        id: "outcome-proof",
        label: "担心学完没有成果",
        proofStatement: "用学员工作台、成果证据库和报名页成果总览展示结课后能拿到的工具包和作业证据。",
        proofPages: ["learning.html", "enrollment.html", "tools.html"],
        downloads: ["enrollment-outcome-proof-board.csv", "deliverable-evidence-library.csv", "learner-portfolio-packaging.csv"],
        visibleOutput: "结课成果包、作业返修记录、工具入口、指令入口和展示授权状态。",
        boundary: "成果质量取决于真实业务输入和返修，不能用虚构资料冒充学习交付。"
      },
      {
        id: "enterprise-privacy",
        label: "担心企业资料和隐私",
        proofStatement: "用企业服务页、资料治理台和授权模板说明企业资料默认不公开，先脱敏、授权、留痕。",
        proofPages: ["enterprise.html", "playbook.html", "automation.html"],
        downloads: ["enterprise-material-checklist.csv", "data-sanitization-authorization-board.csv", "public-showcase-authorization-note.md"],
        visibleOutput: "企业资料清单、脱敏授权表、公开展示授权说明和企业诊断范围。",
        boundary: "企业真实资料默认不得公开，项目范围、价格、签约和验收责任必须人工确认。"
      },
      {
        id: "long-term-platform",
        label: "担心后续维护断档",
        proofStatement: "用运营指南、发布看板、版本回写和资源维护证明网站是长期平台，不是一次性页面。",
        proofPages: ["playbook.html", "marketing.html", "resources.html"],
        downloads: ["platform-release-audit.csv", "content-maintenance-log.csv", "release-writeback-routing-board.csv"],
        visibleOutput: "发布审计表、内容维护日志、版本回写路由和日常运营台。",
        boundary: "没有真实反馈、负责人、页面证据和验收方式的内容不进入正式发布。"
      }
    ],
    decisionStages: [
      {
        id: "homepage-review",
        label: "刚看首页",
        cta: "先生成试听课路径或领取资料包。",
        routePages: ["index.html", "resources.html"],
        evidenceDepth: "用 1 个痛点、1 个工具输出和 1 个边界说明建立基本信任。",
        nextAction: "进入试听课转化路径，判断是否需要系统课、企业诊断或资料培育。"
      },
      {
        id: "trial-followup",
        label: "试听课后",
        cta: "用页面证据回应顾虑，再决定系统课、企业诊断或继续培育。",
        routePages: ["enrollment.html", "case-integrated-house.html"],
        evidenceDepth: "用演示场景、作业输出、下载资产和人工边界说明课程价值。",
        nextAction: "生成商业证据 Brief，交给课程顾问做 24 小时跟进。"
      },
      {
        id: "enrollment-consult",
        label: "报名咨询中",
        cta: "进入报名路径，确认课程包、资料准备、付款前人工边界和入班交接。",
        routePages: ["enrollment.html", "learning.html"],
        evidenceDepth: "用成果证据、报课方案、入班交接和作业验收降低决策顾虑。",
        nextAction: "进入报课方案 Brief 生成器，确认是否适合报名。"
      },
      {
        id: "enterprise-precheck",
        label: "企业诊断前",
        cta: "进入企业服务，确认资料成熟度、岗位参与和诊断范围。",
        routePages: ["enterprise.html", "automation.html"],
        evidenceDepth: "用企业资料包、内训方案映射和交付验收说明服务边界。",
        nextAction: "预约企业诊断前沟通，收集脱敏样例和授权岗位。"
      },
      {
        id: "internal-sales-review",
        label: "内部销售复盘",
        cta: "回到运营指南和推广运营页，复盘证据是否真实、是否越界。",
        routePages: ["playbook.html", "marketing.html"],
        evidenceDepth: "用发布审计、维护日志和转化复盘检查页面证据是否支撑销售动作。",
        nextAction: "把高频顾虑回写到报名页、资源页、课程页或企业服务页。"
      }
    ]
  },
  firstDraftGuide: {
    title: "培训公司初稿交付路线图",
    summary:
      "用于把当前网站初稿从“页面很多”整理成“可以验收、可以讲课、可以招生、可以企业演示、可以后续维护”的五条执行路线。每条路线都保留 Codex 辅助和人工确认边界。",
    downloads: [
      {
        label: "下载初稿发布就绪表 CSV",
        href: "./downloads/first-draft-launch-readiness-board.csv",
        format: "CSV",
        note: "用于检查页面证据、UI 状态、下载资产、商业边界、负责人和下一步动作。"
      },
      {
        label: "下载初稿发布 Brief 模板 MD",
        href: "./downloads/first-draft-launch-brief-template.md",
        format: "Markdown",
        note: "用于记录展示范围、验证截图、不可承诺事项、讲课路线和版本回写任务。"
      }
    ],
    metrics: [
      {
        value: "14",
        label: "页面入口",
        note: "首页、课程、课堂、学员、案例、工具、指令、资源、报名、推广、企业和运营指南已拆分维护。"
      },
      {
        value: "140",
        label: "下载资产",
        note: "课程交付、作业验收、学员应用复盘、真实应用证据承接、招生证据、公开课、资源领取分流、自动化范围判定、指令复盘、企业诊断、学员到企业线索承接、企业续约、工具 Sprint 和版本回写都已有可领取表。"
      },
      {
        value: "5",
        label: "验收路线",
        note: "内部评审、讲课试跑、招生承接、企业诊断和后续维护。"
      },
      {
        value: "24h",
        label: "回写窗口",
        note: "公开课、咨询、企业沟通和内部评审后的问题必须在 24 小时内进入版本池。"
      }
    ],
    routes: [
      {
        stage: "01",
        title: "内部初稿验收",
        owner: "课程负责人 + 运营负责人",
        pageRoute: ["index.html", "course.html", "playbook.html#playbook-first-draft-launch"],
        goal: "先确认网站不是零散页面，而是能支撑课程、招生、课堂、工具、资源和企业服务的统一平台。",
        codexAssist: "整理页面清单、下载资产清单、缺口优先级和下一版返修任务。",
        humanGate: "负责人确认当前版本哪些可以展示、哪些只能内部使用、哪些承诺口径不能对外说。",
        output: "初稿发布 Brief、内部评审问题清单和下一版维护任务。"
      },
      {
        stage: "02",
        title: "讲课试跑",
        owner: "主讲老师 + 助教负责人",
        pageRoute: ["classroom.html#classroom-rehearsal-gate", "case-integrated-house.html", "learning.html#learning-system-handoff"],
        goal: "用集成房屋样板跑一遍 20-30 分钟公开课和 90 分钟正式课，确认老师能顺畅讲页面、切工具、布置作业。",
        codexAssist: "生成逐屏讲稿、试讲问题记录、助教检查点和课后作业提交提醒。",
        humanGate: "老师确认讲课节奏、外贸判断边界、作业验收标准和公开展示授权。",
        output: "试讲复盘、课堂返修清单、正式课作业闭环和下一场公开课母版。"
      },
      {
        stage: "03",
        title: "招生承接",
        owner: "课程顾问 + 市场运营",
        pageRoute: ["enrollment.html#enrollment-showcase-proof-router", "marketing.html#marketing-proof-campaign-router", "resources.html"],
        goal: "把报课顾虑、学员成果证据、公开课内容和资源领取串起来，形成试听后 0-7 天可跟进流程。",
        codexAssist: "生成咨询证据 Brief、私域跟进话术、资源分流标签和未成交原因复盘。",
        humanGate: "课程价格、付款、交付范围、展示授权和不夸大承诺必须人工确认。",
        output: "报名咨询路线、正式课成果证据路由、推广内容路由和资源跟进任务。"
      },
      {
        stage: "04",
        title: "企业诊断演示",
        owner: "企业服务负责人",
        pageRoute: ["enterprise.html", "automation.html", "tools.html#tool-launch-board"],
        goal: "把个人系统课成果延展到企业资料成熟度、岗位 SOP、团队内训和工具/SOP 共建的诊断入口。",
        codexAssist: "整理企业访谈问题、资料清单、内训模块映射、工具需求评分和项目启动 Brief。",
        humanGate: "企业资料授权、scope、报价、项目周期、验收责任和内部审批必须人工确认。",
        output: "企业诊断 Brief、训练计划映射、工具需求候选和项目边界清单。"
      },
      {
        stage: "05",
        title: "版本维护闭环",
        owner: "开发负责人 + 内容负责人",
        pageRoute: ["playbook.html#playbook-release-writeback-router", "resources.html", "marketing.html"],
        goal: "把公开课问题、咨询顾虑、课堂卡点、企业反馈和工具需求回写到对应页面和数据文件。",
        codexAssist: "汇总反馈、生成版本回写任务、检查数据文件关联、草拟资源 FAQ 和下一版发布说明。",
        humanGate: "负责人确认哪些反馈真实、哪些适合公开、哪些进入工具 Sprint 或下一版课程。",
        output: "维护日志、版本回写路由、资源更新、营销选题和下一轮工具 Sprint。"
      }
    ],
    gates: [
      "页面证据：每条路线都能找到真实页面、下载资产和下一步动作。",
      "UI 证据：桌面和移动端关键入口无明显遮挡、溢出或不可点击问题。",
      "商业边界：不承诺自动成交、自动报价、自动审单、收益保证或替代专业判断。",
      "授权边界：学员成果、企业资料和客户资料公开前必须脱敏、授权、留撤回路径。",
      "维护责任：每次评审、公开课、咨询或企业沟通后都要指定回写负责人和时间。"
    ],
    handoff: [
      {
        role: "给老板/负责人",
        action: "用本模块判断初稿是否能进入内部评审、公开预览、试听课或企业演示。"
      },
      {
        role: "给老师/助教",
        action: "先走讲课试跑路线，确认能按页面讲清楚案例、工具、作业和边界。"
      },
      {
        role: "给课程顾问/运营",
        action: "用招生承接路线做试听后跟进，不靠临时销售话术。"
      },
      {
        role: "给开发/内容团队",
        action: "用版本维护路线把问题回写到数据文件、页面模块和下载资产。"
      }
    ]
  },
  painPoints: [
    {
      title: "产品资料不成体系",
      problem: "参数、配置、包装、认证、安装和售后资料分散，后续开发信、询盘和报价都要反复补信息。",
      codexFix: "用产品资料工作台统一字段，标记 Ready/Confirm/Missing，先补齐资料再进入客户开发和报价。"
    },
    {
      title: "客户资料散",
      problem: "客户信息分散在平台、邮箱、微信、Excel 和个人记忆里，无法形成可复盘的客户资产。",
      codexFix: "用客户线索库统一字段，自动生成客户等级、跟进动作和开发角度。"
    },
    {
      title: "询盘回复慢",
      problem: "客户只问价格或信息不完整，业务员容易急着报价，后续反复追问。",
      codexFix: "把询盘拆成已知需求、缺失信息、报价前问题、风险点和英文回复草稿。"
    },
    {
      title: "报价反复算",
      problem: "FOB、CIF、DDP 涉及选配、包装、装柜、运费、保险、汇率和利润，容易漏项。",
      codexFix: "用报价测算器结构化费用项，DDP 只输出风险提醒，不直接承诺。"
    },
    {
      title: "订单进度靠记忆",
      problem: "图纸、采购、生产、质检、订舱、装柜和尾款节点分散，异常发现太晚。",
      codexFix: "用订单跟进看板记录计划日期、实际日期、负责人、风险等级和下一步动作。"
    },
    {
      title: "单证核对靠肉眼",
      problem: "PI、CI、PL、订舱资料中的数量、重量、金额、品名、港口容易不一致。",
      codexFix: "用单证一致性检查表自动列出冲突字段和修改建议。"
    },
    {
      title: "付款风险靠经验",
      problem: "到港后付款、OA、D/A、远期信用证和 DDP 项目责任容易被成交压力掩盖。",
      codexFix: "用付款风险矩阵生成风险事项、内部审批清单和谨慎客户回复，保留财务、信保、法务和管理层确认。"
    }
  ],
  workflow: [
    {
      title: "搭资料",
      before: "产品参数、认证、包装和售后资料分散，AI 输出容易空泛。",
      after: "产品资料工作台、缺失字段、人工确认人、后续工具输入。"
    },
    {
      title: "找客户",
      before: "盲目找邮箱、复制客户资料、手工记录跟进。",
      after: "客户画像、线索库、客户分级、下一步跟进动作。"
    },
    {
      title: "回询盘",
      before: "临时写回复，客户信息缺失也直接报价。",
      after: "询盘识别、缺失字段、补问问题、回复草稿。"
    },
    {
      title: "做报价",
      before: "Excel 手算，费用项、汇率、运费和利润容易漏。",
      after: "报价费用项、FOB/CIF 结构、DDP 风险提示。"
    },
    {
      title: "跟订单",
      before: "订单节点在聊天记录里，异常靠人工追。",
      after: "订单主数据、进度看板、异常记录、客户更新邮件。"
    },
    {
      title: "查风险",
      before: "单证、付款、合规和售后风险没有统一检查口径。",
      after: "单证一致性、付款矩阵、人工确认清单、复购节点。"
    }
  ],
  toolPreviews: [
    {
      title: "产品资料工作台",
      subtitle: "20ft 集成房屋资料成熟度",
      rows: [
        ["Ready", "英文品名 / 应用场景 / 标准配置"],
        ["待确认", "尺寸结构 / 墙板保温 / 安装范围"],
        ["缺失", "包装装柜 / 认证合规 / 质保备件"],
        ["输出", "补资料清单 + 英文资料草稿"]
      ]
    },
    {
      title: "客户线索跟进器",
      subtitle: "海外客户 A/B/C 分级",
      rows: [
        ["A 级", "明确数量 / 项目场景 / 近期互动"],
        ["B 级", "需求待确认 / 适合资料培育"],
        ["C 级", "无明确项目 / 低频触达"],
        ["输出", "下一步动作 + 开发信角度"]
      ]
    },
    {
      title: "询盘识别工具",
      subtitle: "沙特 80 套集成房屋询盘",
      rows: [
        ["客户类型", "建筑承包商"],
        ["已知需求", "80 units / CIF Jeddah"],
        ["缺失信息", "布局、墙板、装柜、安装"],
        ["风险点", "DDP、认证、当地许可"]
      ]
    },
    {
      title: "报价测算器",
      subtitle: "FOB/CIF 结构化报价",
      rows: [
        ["产品", "20ft expandable house"],
        ["选配", "Bathroom / electrical / insulation"],
        ["费用", "Domestic + freight + insurance"],
        ["输出", "CIF + profit + valid date"]
      ]
    },
    {
      title: "单证检查表",
      subtitle: "PI / CI / PL 冲突检查",
      rows: [
        ["数量", "PI 80 / CI 78"],
        ["重量", "PL 与订舱不一致"],
        ["品名", "描述缺少选配"],
        ["处理", "生成修改说明"]
      ]
    },
    {
      title: "订单跟进看板",
      subtitle: "图纸、采购、生产、订舱节点",
      rows: [
        ["延期", "图纸确认晚 1 天"],
        ["高风险", "墙板材料未锁定"],
        ["待确认", "装柜数量和毛重"],
        ["输出", "客户进度邮件 + 交期预警"]
      ]
    },
    {
      title: "付款风险矩阵",
      subtitle: "30% 定金 + 到港尾款 + DDP",
      rows: [
        ["高风险", "尾款节点靠后"],
        ["高风险", "DDP 到项目现场"],
        ["审批", "财务 / 信保 / 货代 / 法务"],
        ["输出", "谈判方向 + 谨慎回复"]
      ]
    }
  ],
  riskColumns: [
    {
      title: "适合 Codex 自动化",
      items: ["产品字段整理", "客户分级", "询盘拆解", "费用项检查", "订单节点预警", "单证冲突提示", "付款风险提醒", "邮件草稿"]
    },
    {
      title: "必须人工确认",
      items: ["真实价格", "产品参数", "交期库存", "认证文件", "HS 归类方向", "客户信用", "账期授信", "合同责任"]
    },
    {
      title: "禁止自动替代",
      items: ["报关提交", "税务申报", "法律合同结论", "信用证终审", "违规抓取", "骚扰式群发"]
    }
  ],
  standards: [
    "每门课必须有真实业务场景，不讲空泛 AI 概念。",
    "每节课必须有工具、模板、检查表或可复制指令作为交付。",
    "每个案例必须说明 Codex 能做什么、不能做什么。",
    "每个模块必须能在网页上直接授课和演示。",
    "所有内容尽量数据化维护，新增课程不重写页面结构。"
  ]
};
