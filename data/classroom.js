window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.classroom = {
  metrics: [
    {
      value: "6",
      label: "课堂阶段",
      detail: "开场、案例、工具、替换、验收、课后维护按固定节奏执行。"
    },
    {
      value: "3",
      label: "主演示工具",
      detail: "询盘识别、报价测算、单证检查是第一批课堂交互演示。"
    },
    {
      value: "6",
      label: "作业交付物",
      detail: "产品资料、客户库、询盘表、报价结构、订单看板、单证检查表。"
    },
    {
      value: "6",
      label: "返修闭环",
      detail: "从助教初审、Codex 检查、老师抽评到学员返修和平台回写。"
    },
    {
      value: "6",
      label: "授课复制关",
      detail: "讲师试讲、助教校准、工具演示、转化口径和企业替换按统一标准验收。"
    },
    {
      value: "1",
      label: "主案例",
      detail: "集成房屋出口案例贯穿公开课、系统课和企业内训。"
    }
  ],
  sessionRunbook: [
    {
      stage: "00",
      title: "课前 15 分钟检查",
      teacherAction: "打开课程页、集成房屋案例页、工具中心和资源中心，确认下载文件、工具演示和页面导航都可用。",
      learnerAction: "准备自己的产品资料、近期询盘、报价表或脱敏订单样例。",
      output: "课堂输入资料清单",
      boundary: "没有真实资料的学员先用集成房屋样例练习，不能临时编造业务数据。"
    },
    {
      stage: "01",
      title: "开场定位",
      teacherAction: "先讲外贸重复劳动和人工确认边界，再说明本节课会产出什么工具或表格。",
      learnerAction: "选出自己当前最想优化的环节：客户开发、询盘、报价、订单或单证。",
      output: "本节学习目标",
      boundary: "不承诺 AI 自动成交、自动报价或自动替代业务判断。"
    },
    {
      stage: "02",
      title: "集成房屋案例演示",
      teacherAction: "按询盘、报价、订单、单证顺序跑一遍集成房屋样板，让学员看到完整业务链路。",
      learnerAction: "记录哪些字段可以替换成自己的产品和客户资料。",
      output: "案例字段替换清单",
      boundary: "案例价格、配置和时间节点只做课堂演示，正式业务必须回到企业真实数据。"
    },
    {
      stage: "03",
      title: "工具现场演示",
      teacherAction: "进入工具中心运行询盘识别、报价测算或单证检查，展示输入、输出和人工确认点。",
      learnerAction: "把工具输出复制到自己的课堂作业模板中。",
      output: "工具输出初稿",
      boundary: "工具只生成结构化辅助结果，对外邮件、报价和单证必须人工复核。"
    },
    {
      stage: "04",
      title: "学员替换实操",
      teacherAction: "指导学员把集成房屋字段替换为自己的产品、客户、报价或单证字段。",
      learnerAction: "提交一份可复用作业，而不是一次性聊天结果。",
      output: "个人业务工作流版本",
      boundary: "作业需使用真实或脱敏资料，敏感客户、成本和合同信息不得公开。"
    },
    {
      stage: "05",
      title: "验收与课后维护",
      teacherAction: "按验收规则检查作业是否真实、完整、可复用，并记录高频问题用于更新网站数据。",
      learnerAction: "修正缺失字段、虚构内容和不清楚的人工确认点。",
      output: "可交付作业版本和维护记录",
      boundary: "未通过验收的作业不能作为宣传案例或企业服务样板。"
    }
  ],
  systemLessonRouteDownloads: [
    {
      label: "下载系统课授课路线 CSV",
      href: "./downloads/integrated-house-system-lesson-route.csv",
      format: "CSV",
      note: "用于主讲老师、助教和运营按 90 分钟节奏执行正式课、企业内训或讲师复制。"
    },
    {
      label: "下载系统课交付 Brief 模板 MD",
      href: "./downloads/system-lesson-delivery-brief-template.md",
      format: "Markdown",
      note: "用于课前准备、课堂记录、作业验收、课后回写和下一节课返修安排。"
    }
  ],
  systemLessonRoute: {
    title: "集成房屋 90 分钟系统课正式授课母版",
    summary:
      "把案例页 90 分钟标准课包升级成课堂执行母版：每个时间段同时说明主讲老师讲什么、助教查什么、学员交什么、课后要回写到哪里。",
    meta: [
      {
        label: "课堂时长",
        value: "90 min",
        note: "适合系统课正课、试听升级课和企业内训样板课。"
      },
      {
        label: "责任线",
        value: "4",
        note: "主讲老师、助教、学员作业、平台回写同步推进。"
      },
      {
        label: "核心输出",
        value: "6",
        note: "产品资料、询盘、报价、订单、单证和风险复盘。"
      },
      {
        label: "主案例",
        value: "集成房屋",
        note: "80 套 20ft 可扩展集成房屋出口到 Jeddah。"
      }
    ],
    phases: [
      {
        time: "00-08",
        title: "开场定位和边界确认",
        pageRoute: ["case-integrated-house.html", "course.html"],
        teacherLine: "说明今天用一条集成房屋业务线跑完整流程，课堂目标是形成可替换工作流，不是复制案例参数。",
        assistantCheck: "确认学员是否带了产品、询盘、报价或订单样例；未带资料的学员使用公开样例。",
        learnerOutput: "写下自己的产品、客户类型、目的港、贸易术语和本节课想替换的业务环节。",
        writeback: "如果学员普遍不知道准备什么，回写资源中心的课前资料说明。",
        codexRole: "整理课堂目标、资料准备提醒和人工边界开场话术。",
        manualGate: "价格、交期、合规、付款、清关、法务和客户承诺先声明必须人工确认。"
      },
      {
        time: "08-22",
        title: "产品资料作为字段底座",
        pageRoute: ["case-integrated-house.html", "tools.html", "resources.html"],
        teacherLine: "展示集成房屋规格、选配、包装、装柜、认证、安装和售后字段，说明输入不足会让后续输出空泛。",
        assistantCheck: "检查学员产品资料是否脱敏、是否有来源、是否标出 Ready / Confirm / Missing。",
        learnerOutput: "产品资料缺口清单，至少 8 个字段、3 个缺失资料和负责人。",
        writeback: "高频缺失字段回写到产品资料作业模板和工具中心默认字段。",
        codexRole: "生成字段清单、缺失资料提醒、英文资料草稿和 FAQ 初稿。",
        manualGate: "认证、防火、抗风、抗雪、HS 方向、装柜和质保不能凭空生成。"
      },
      {
        time: "22-42",
        title: "询盘拆解和报价前补问",
        pageRoute: ["case-integrated-house.html", "tools.html", "prompts.html"],
        teacherLine: "用沙特客户 80 套询盘演示已知需求、缺失字段、报价前补问和英文回复草稿。",
        assistantCheck: "检查学员是否直接报价，是否把客户问题和内部确认问题分开。",
        learnerOutput: "询盘识别表、缺失字段、客户补问、内部确认清单和英文回复草稿。",
        writeback: "高频询盘问题回写到资源 FAQ、指令库和询盘作业模板。",
        codexRole: "拆解原始询盘、生成补问问题、内部确认清单和英文回复草稿。",
        manualGate: "DDP、认证、交期、价格、付款和当地合规不能在客户回复里直接承诺。"
      },
      {
        time: "42-58",
        title: "报价结构和 DDP 风险",
        pageRoute: ["case-integrated-house.html", "tools.html", "learning.html"],
        teacherLine: "把报价拆成基础价、选配、包装、国内费用、海运、保险、汇率、利润和有效期。",
        assistantCheck: "检查学员是否列出费用项来源、确认人和不可自动确认字段。",
        learnerOutput: "FOB/CIF 报价字段表、漏项清单、DDP 风险提醒和报价说明草稿。",
        writeback: "报价漏项集中时回写报价费用项清单和课堂工具默认样例。",
        codexRole: "生成费用项结构、漏项提醒、报价说明和风险边界提示。",
        manualGate: "最终价格、成本、汇率、运费、利润、付款和有效期必须由业务负责人确认。"
      },
      {
        time: "58-72",
        title: "订单主数据和跟单节点",
        pageRoute: ["case-integrated-house.html", "classroom.html", "learning.html"],
        teacherLine: "说明报价确认后要沉淀 PI 字段、图纸版本、配置、生产节点、订舱和尾款节点。",
        assistantCheck: "检查订单字段是否可复用，是否每个节点都有负责人、输入、输出和风险条件。",
        learnerOutput: "订单主数据初稿、跟单节点看板和客户进度邮件草稿。",
        writeback: "订单节点卡点回写到课堂执行台和订单跟进作业模板。",
        codexRole: "从报价字段生成订单主数据、节点提醒、异常提示和客户进度邮件。",
        manualGate: "图纸版本、收款状态、生产排期、订舱日期和发货承诺必须人工确认。"
      },
      {
        time: "72-90",
        title: "单证风险、作业布置和课后回写",
        pageRoute: ["case-integrated-house.html", "tools.html", "playbook.html"],
        teacherLine: "展示 PI/CI/PL/订舱字段冲突，再布置作业和说明哪些成果能进入学员作品包。",
        assistantCheck: "检查学员是否能指出冲突字段、修正动作、复核人和展示授权要求。",
        learnerOutput: "单证冲突报告、付款风险矩阵、作业提交计划和 200 字复盘。",
        writeback: "课后 24 小时内把 FAQ、工具字段、作业模板和讲师卡点写回平台。",
        codexRole: "生成冲突报告、修正说明、作业清单、课后复盘和下一节课提醒。",
        manualGate: "报关、银行、信用证、HS 编码、目的港清关、税务和法务必须专业复核。"
      }
    ],
    deliverables: [
      "产品资料缺口清单",
      "询盘识别表和英文回复草稿",
      "FOB/CIF 报价字段表",
      "订单主数据和跟单节点看板",
      "单证冲突报告和付款风险矩阵",
      "课后返修清单和平台回写记录"
    ],
    roleRules: [
      {
        role: "主讲老师",
        rule: "每段先讲业务问题，再展示页面证据和 Codex 输出，最后落到人工确认边界。"
      },
      {
        role: "助教",
        rule: "实时记录学员卡点、敏感资料、缺失字段和作业返修任务，不把 Codex 建议直接发给学员。"
      },
      {
        role: "学员",
        rule: "必须用真实或脱敏资料替换案例字段，最终提交可复用业务资产，不提交一次性聊天记录。"
      },
      {
        role: "运营负责人",
        rule: "课后 24 小时内完成 FAQ、资源、工具、作业模板、讲师卡点和版本任务回写。"
      }
    ],
    noGoRules: [
      "系统课不能只讲案例，不让学员替换自己的产品、询盘、报价或单证资料。",
      "未脱敏、来源不明或未授权的资料不得进入课堂展示、作业点评或优秀样例库。",
      "Codex 输出不能被包装成最终报价、合同承诺、报关结论、银行审单结论或法律意见。",
      "助教不得直接把未经人工复核的 Codex 返修建议发给学员。",
      "课后没有作业验收和平台回写记录时，本节课不能算完成交付。"
    ]
  },
  lessonBuilder: {
    title: "单节课教案生成器",
    description:
      "选择课程模块、课型、学员状态和重点工具，生成老师可直接用于直播、面授、公开课或企业内训的课堂 runbook。",
    defaults: {
      module: "inquiry-analysis",
      classType: "system-class",
      learnerStage: "has-inquiry",
      focusMode: "tool-output",
      boundaryMode: "strict"
    },
    modules: [
      {
        id: "product-profile",
        label: "M0 产品资料与课程工作台",
        objective: "让学员先建立产品主数据、脱敏规则和后续可复用字段。",
        caseScenario: "20ft 可扩展集成房屋的规格、配置、包装、装柜、认证和安装资料整理。",
        route: ["course.html", "resources.html", "prompts.html"],
        demoSteps: ["展示集成房屋产品主数据", "标出缺失资料和人工确认字段", "让学员替换自己的产品字段"],
        learnerOutput: "产品资料表、缺失字段清单、脱敏说明",
        assistantCheck: "字段是否真实、是否脱敏、是否能继续进入询盘、报价和单证模块。",
        homework: "提交一份自己的产品主数据表，并标出至少 8 个必须人工确认字段。",
        manualBoundary: "认证、防火、抗风、抗雪、HS Code 和申报字段必须来自真实资料。"
      },
      {
        id: "customer-development",
        label: "M1-M3 客户开发与跟进",
        objective: "让学员把客户开发从泛泛找邮箱变成目标客户画像、线索评分和跟进动作。",
        caseScenario: "以沙特建筑承包商、营地运营方和项目采购方为目标客户拆开发角度。",
        route: ["course.html", "prompts.html", "tools.html"],
        demoSteps: ["拆集成房屋目标客户画像", "生成 A/B/C 线索评分", "生成首封开发信和跟进方向"],
        learnerOutput: "客户画像表、线索分级、开发信和跟进计划",
        assistantCheck: "客户类型是否具体，是否虚构合作案例、认证、库存或成交概率。",
        homework: "整理 3 类目标客户、20 条线索字段和 3 封开发/跟进邮件。",
        manualBoundary: "客户隐私、真实联系方式、平台规则和邮件发送频率必须人工确认。"
      },
      {
        id: "inquiry-analysis",
        label: "M4 询盘识别与回复",
        objective: "训练学员先拆需求、缺失字段和风险点，再决定如何回复和是否报价。",
        caseScenario: "沙特建筑承包商采购 80 套 20ft 可扩展集成房屋，询问 CIF Jeddah 和 DDP 可能性。",
        route: ["tools.html", "case-integrated-house.html", "prompts.html"],
        demoSteps: ["展示原始询盘", "运行询盘识别工具", "拆已知需求和缺失字段", "生成英文回复草稿"],
        learnerOutput: "询盘识别表、报价前补问清单、英文回复草稿",
        assistantCheck: "是否直接报价，是否标出缺失字段，是否把 DDP、认证和交期列为人工确认。",
        homework: "拆解一封自己的询盘，提交已知需求、缺失字段、补问问题和回复草稿。",
        manualBoundary: "价格、认证、库存、交期、DDP 清关和税费不能虚构。"
      },
      {
        id: "quotation-order",
        label: "M6-M8 报价、PI 与订单跟进",
        objective: "让学员建立报价费用项、订单主数据和跟单看板，减少漏项和过度承诺。",
        caseScenario: "80 套集成房屋从 CIF Jeddah 报价结构进入 PI 字段和订单节点看板。",
        route: ["tools.html", "course.html", "learning.html"],
        demoSteps: ["演示 FOB/CIF 费用项", "标出 DDP 风险", "转成 PI 字段", "建立订单节点看板"],
        learnerOutput: "报价费用项表、PI 字段表、订单主数据、跟单看板",
        assistantCheck: "费用项是否完整，运费和利润是否标注人工确认，订单字段是否可复用。",
        homework: "用自己的产品提交一份 FOB/CIF 报价结构和订单主数据草稿。",
        manualBoundary: "最终价格、汇率、运费有效期、利润、交期和合同条款必须人工确认。"
      },
      {
        id: "document-risk",
        label: "M9-M10 单证、付款与风险边界",
        objective: "让学员理解单证一致性、付款条件、DDP 和合规边界不能交给 AI 自动结论化。",
        caseScenario: "集成房屋 PI、CI、PL 字段冲突，以及 DDP、认证、尾款和清关风险。",
        route: ["tools.html", "automation.html", "case-integrated-house.html"],
        demoSteps: ["展示 PI/CI/PL 冲突", "运行单证一致性检查", "生成付款风险矩阵", "输出客户谨慎表达"],
        learnerOutput: "单证冲突表、付款风险矩阵、客户沟通口径",
        assistantCheck: "是否回到订单主数据，是否标出 HS Code、清关、银行、法务和合规确认人。",
        homework: "提交 3 条单证检查规则和一份付款/合规风险边界矩阵。",
        manualBoundary: "报关、银行、目的国清关、税务、法务、认证和付款风险必须由专业人员复核。"
      }
    ],
    classTypes: [
      {
        id: "public-demo",
        label: "公开课 / 试听课",
        duration: "30-45 分钟",
        opening: "先用一个高频痛点吸引，再展示一个可见工具输出，最后引导资源领取或报名咨询。",
        emphasis: "少讲全链路，多讲一个强场景和一个可复制结果。",
        conversion: "引导进入资源中心、报名路径或 10 分钟演示课。"
      },
      {
        id: "system-class",
        label: "系统课正课",
        duration: "90-120 分钟",
        opening: "先复盘上节作业，再用集成房屋主案例演示，最后让学员替换成自己的资料。",
        emphasis: "讲完整输入、操作、输出、作业、返修和边界。",
        conversion: "沉淀学员作业和结课工具包，不做强销售。"
      },
      {
        id: "enterprise-training",
        label: "企业内训",
        duration: "120-180 分钟",
        opening: "先确认企业资料权限、岗位角色和流程痛点，再替换集成房屋案例为企业产品。",
        emphasis: "强调岗位分工、SOP、工具字段和验收证据。",
        conversion: "引导进入企业诊断、工具/SOP 共建或长期陪跑。"
      }
    ],
    learnerStages: [
      {
        id: "no-materials",
        label: "学员资料不足",
        adjustment: "先用集成房屋样例跑通，不要求学员立即输出完整个人版本。",
        support: "发放产品资料模板、询盘样例和脱敏说明。",
        risk: "避免让学员现场编造产品、客户或订单资料。"
      },
      {
        id: "has-inquiry",
        label: "已有产品或询盘",
        adjustment: "先跑主案例，再给 20-30 分钟让学员替换自己的产品和询盘。",
        support: "助教检查缺失字段、敏感信息和不能自动承诺的事项。",
        risk: "真实客户、成本、合同和联系方式必须脱敏。"
      },
      {
        id: "team-process",
        label: "企业团队流程",
        adjustment: "按岗位分组：业务、跟单、单证、主管分别确认输入和输出。",
        support: "记录流程痛点、负责人、系统字段和后续 SOP 共建范围。",
        risk: "企业内部审批、价格权限和客户承诺不能由课堂现场直接决定。"
      }
    ],
    focusModes: [
      {
        id: "tool-output",
        label: "工具输出优先",
        instruction: "课堂必须生成可复制的表格、清单、看板或邮件草稿。",
        evidence: "现场截图、导出 Markdown 或下载模板。"
      },
      {
        id: "prompt-practice",
        label: "指令练习优先",
        instruction: "课堂重点放在指令结构、输入限制、输出格式和行业替换。",
        evidence: "指令组装结果、替换字段表和质量检查。"
      },
      {
        id: "assignment-review",
        label: "作业点评优先",
        instruction: "课堂重点放在作业返修、助教检查、老师抽评和优秀样例入库。",
        evidence: "作业评分表、返修任务和入库授权记录。"
      }
    ],
    boundaryModes: [
      {
        id: "strict",
        label: "严格人工确认",
        rule: "价格、利润、付款、交期、认证、HS Code、清关、税务、法务和客户承诺必须列出人工确认人。",
        closing: "所有课堂输出先作为内部草稿，正式对外前必须由负责人复核。"
      },
      {
        id: "demo",
        label: "课堂演示边界",
        rule: "允许使用集成房屋样例数字演示结构，但必须反复声明示例不是实际报价或交付承诺。",
        closing: "学员替换行业时不能直接套用集成房屋价格、认证、物流和合同责任。"
      },
      {
        id: "enterprise",
        label: "企业资料边界",
        rule: "企业资料必须先确认授权、脱敏和内部权限，课堂不得公开敏感客户、成本、合同或员工绩效数据。",
        closing: "企业输出进入 SOP 或工具共建前，需要项目负责人验收。"
      }
    ],
    exportFilename: "classroom-lesson-runbook-output.md"
  },
  demoSwitchboard: [
    {
      module: "M4 询盘识别",
      page: "./tools.html",
      demo: "询盘识别课堂演示器",
      input: "沙特建筑承包商 80 套集成房屋英文询盘。",
      output: "已知需求、缺失字段、报价前问题、风险边界、英文回复草稿。",
      teacherCue: "先问学员为什么不能直接报价，再运行工具。"
    },
    {
      module: "M6 报价测算",
      page: "./tools.html",
      demo: "FOB/CIF 报价测算课堂演示器",
      input: "数量、基础成本、选配、国内费用、海运、保险和利润率。",
      output: "FOB/CIF 参考结构、成本拆分、漏项提醒、报价说明草稿。",
      teacherCue: "强调示例数字不是实际报价，真实报价必须由工厂、货代和负责人确认。"
    },
    {
      module: "M9 单证检查",
      page: "./tools.html",
      demo: "单证一致性课堂演示器",
      input: "PI、CI、PL 和订舱资料中的冲突字段。",
      output: "冲突报告、风险等级、修改建议和人工复核边界。",
      teacherCue: "先看冲突样例，再切换修正后复查，让学员理解回到订单主数据的重要性。"
    },
    {
      module: "集成房屋完整案例",
      page: "./case-integrated-house.html",
      demo: "案例页授课脚本",
      input: "产品规格、原始询盘、报价结构、订单节点和单证冲突样例。",
      output: "完整课堂演示链路和作业布置口径。",
      teacherCue: "公开课讲 15 分钟版本，系统课讲完整链路，企业课替换成企业产品。"
    }
  ],
  lessonExecutionDownloads: [
    {
      label: "下载课堂执行台 CSV",
      href: "./downloads/classroom-delivery-desk.csv",
      format: "CSV",
      note: "用于老师直播、面授和企业内训时安排模块、页面、演示和作业验收。"
    },
    {
      label: "下载作业点评评分表 CSV",
      href: "./downloads/assignment-review-scorecard.csv",
      format: "CSV",
      note: "用于助教和老师统一作业点评、返修和优秀作业入库标准。"
    }
  ],
  lessonExecutionDesk: [
    {
      stage: "01",
      title: "课前资料与边界确认",
      modules: "M0",
      route: "课程页 + 资源中心",
      liveAction: "确认学员是否有主推产品、历史询盘、报价表、订单或单证样例，并完成脱敏。",
      demoEvidence: "展示集成房屋产品资料表、课程目录和脱敏规则。",
      learnerOutput: "个人课程工作台、产品资料表、敏感字段清单。",
      assistantCheck: "资料是否真实、是否脱敏、是否能进入后续至少 3 个课程模块。",
      maintenanceSignal: "如果多数人没有资料，补资源中心的课前资料包和样例说明。"
    },
    {
      stage: "02",
      title: "客户开发与开发信课堂",
      modules: "M1-M3",
      route: "课程页 + 指令库 + 资源中心",
      liveAction: "用集成房屋拆客户画像、线索字段和开发信，再让学员替换成自己的产品。",
      demoEvidence: "客户画像表、线索库字段、首封开发信和三轮跟进话术。",
      learnerOutput: "3 类目标客户、20 条线索字段、3 封开发信或跟进邮件。",
      assistantCheck: "客户类型是否具体，开发信是否基于场景，是否虚构案例、认证或交付能力。",
      maintenanceSignal: "如果邮件同质化严重，补开发信对比样例和真实性检查清单。"
    },
    {
      stage: "03",
      title: "询盘识别与产品资料课堂",
      modules: "M4-M5",
      route: "工具中心 + 集成房屋案例页",
      liveAction: "现场运行询盘识别工具，拆已知需求、缺失字段、报价前问题和回复草稿。",
      demoEvidence: "沙特 80 套集成房屋询盘、询盘识别表、英文回复草稿、产品 FAQ。",
      learnerOutput: "自己的询盘识别表、报价前补问清单、产品 FAQ。",
      assistantCheck: "是否直接报价，是否标出缺失字段，产品参数是否来自真实资料。",
      maintenanceSignal: "如果大量学员卡在产品资料，补产品参数字段库和行业样例。"
    },
    {
      stage: "04",
      title: "报价、PI 与订单跟进课堂",
      modules: "M6-M8",
      route: "工具中心 + 课程页 + 学员工作台",
      liveAction: "演示 FOB/CIF 报价结构，再转成订单主数据和跟单看板。",
      demoEvidence: "报价测算器、DDP 风险提示、PI 字段表、订单节点看板。",
      learnerOutput: "报价费用项表、人工确认清单、订单主数据、跟单看板。",
      assistantCheck: "费用项是否完整，真实成本和运费是否标注人工确认，订单字段是否可复用。",
      maintenanceSignal: "如果报价漏项集中，补报价费用项下载模板和课堂演示数字说明。"
    },
    {
      stage: "05",
      title: "单证、付款风险与售后课堂",
      modules: "M9-M11",
      route: "工具中心 + 自动化边界页",
      liveAction: "用单证冲突样例演示一致性检查，再讲付款、DDP、合规和售后复购边界。",
      demoEvidence: "PI/CI/PL 冲突报告、付款风险矩阵、售后回访节点。",
      learnerOutput: "单证检查规则、付款风险清单、售后反馈和复购提醒字段。",
      assistantCheck: "是否把 HS 编码、清关、银行、法务和合规判断交给人工确认。",
      maintenanceSignal: "如果风险话术过硬或过软，补客户沟通口径和内部审批样例。"
    },
    {
      stage: "06",
      title: "作业点评、返修与入库",
      modules: "Final",
      route: "学员工作台 + 运营指南",
      liveAction: "按评分表抽查作业，把优秀样例、常见问题和返修任务沉淀回网站。",
      demoEvidence: "作业评分表、优秀作业脱敏样例、维护日志。",
      learnerOutput: "结课工具包、返修清单、下一步业务使用计划。",
      assistantCheck: "作业是否真实、可复用、可演示、可入库，并保留授权和脱敏记录。",
      maintenanceSignal: "每期课至少沉淀 1 个 FAQ、1 个模板改进或 1 个工具字段改进。"
    }
  ],
  instructorReplicationDownloads: [
    {
      label: "下载讲师授课认证表 CSV",
      href: "./downloads/instructor-delivery-certification.csv",
      format: "CSV",
      note: "用于新讲师、助教和企业内训老师完成试讲、演示和作业点评校准。"
    },
    {
      label: "下载听课观察复盘模板 MD",
      href: "./downloads/teaching-observation-review.md",
      format: "Markdown",
      note: "用于负责人听课、公开课复盘和企业内训交付质量检查。"
    }
  ],
  instructorReplicationBoard: [
    {
      stage: "01",
      title: "读取课程标准与页面路线",
      trainingGoal: "新讲师能按网站页面讲清平台结构、课程模块、案例路线、工具输出和人工边界。",
      requiredEvidence: "能独立说明课程页、课堂工作台、集成房屋案例、工具中心、指令库和学员工作台的使用顺序。",
      codexAssist: "Codex 可把指定课程模块整理成 15 分钟试讲提纲、页面切换顺序和提问清单。",
      mentorCheck: "负责人检查讲师是否按业务场景讲，不按 AI 功能菜单讲。",
      passStandard: "能在 15 分钟内讲清本节课输入、操作、输出、作业和边界。",
      owner: "课程负责人",
      riskBoundary: "不能把页面内容背成口播稿，必须能解释真实外贸业务逻辑。"
    },
    {
      stage: "02",
      title: "集成房屋案例试讲",
      trainingGoal: "讲师能用集成房屋出口案例跑通客户开发、询盘、报价、订单和单证的核心链路。",
      requiredEvidence: "能讲清 20ft 可扩展集成房屋产品、沙特客户询盘、CIF Jeddah 报价口径和 DDP 风险边界。",
      codexAssist: "Codex 可生成案例讲解卡、字段替换提示和课堂追问问题。",
      mentorCheck: "负责人检查案例字段是否前后一致，讲师是否知道哪些数字只用于课堂演示。",
      passStandard: "能用案例引出至少 3 个学员可替换字段和 3 个必须人工确认点。",
      owner: "主讲老师 + 行业顾问",
      riskBoundary: "不能把示例价格、交期、配置和贸易条款当成真实业务建议。"
    },
    {
      stage: "03",
      title: "工具演示与边界校准",
      trainingGoal: "讲师能演示询盘识别、报价测算和单证检查，并说明 Codex 只能辅助生成和检查。",
      requiredEvidence: "能现场展示输入、输出、人工确认字段、错误输出处理和学员作业承接。",
      codexAssist: "Codex 可生成演示步骤、异常输出示例和边界提醒卡。",
      mentorCheck: "负责人检查讲师是否在每次输出后都提醒价格、交期、付款、合规和单证需人工确认。",
      passStandard: "工具演示不追求炫技，必须能让学员拿到可复制模板和检查清单。",
      owner: "产品负责人 + 主讲老师",
      riskBoundary: "不得宣传工具自动报价、自动成交、自动审单或替代 ERP/CRM。"
    },
    {
      stage: "04",
      title: "助教作业点评校准",
      trainingGoal: "助教能按统一标准初审作业、打问题标签、使用 Codex 辅助检查并给出可执行返修任务。",
      requiredEvidence: "能独立完成 3 份样例作业初审：一份通过、一份返修、一份因脱敏或来源问题退回。",
      codexAssist: "Codex 可辅助提取缺失字段、前后冲突、疑似敏感信息和返修建议草稿。",
      mentorCheck: "老师抽查助教反馈是否具体、不过度要求、不过度依赖 Codex 建议。",
      passStandard: "反馈必须包含问题标签、优先级、返修动作、复核标准和人工确认边界。",
      owner: "助教负责人",
      riskBoundary: "Codex 检查结果不能直接发给学员，必须由助教确认后再反馈。"
    },
    {
      stage: "05",
      title: "公开课转化口径校准",
      trainingGoal: "讲师能在公开课中展示课程价值，但不夸大效果、不制造虚假稀缺、不承诺自动成交。",
      requiredEvidence: "能完成 10 分钟询盘识别公开课结尾，引导资料领取、系统课或企业诊断。",
      codexAssist: "Codex 可按高频顾虑生成结尾 CTA、证据页面组合和咨询跟进摘要。",
      mentorCheck: "运营负责人检查转化口径是否和报名页、资源中心、企业服务页一致。",
      passStandard: "结尾必须包含页面证据、下一步动作和承诺边界，不能只催报名。",
      owner: "市场运营 + 课程负责人",
      riskBoundary: "不得承诺学完必成交、自动开发客户、自动报价或保证询盘数量。"
    },
    {
      stage: "06",
      title: "企业内训替换能力认证",
      trainingGoal: "讲师能把集成房屋案例替换成企业主推产品，并围绕岗位、流程、工具和 SOP 组织内训。",
      requiredEvidence: "能根据一份脱敏企业资料生成内训课程路线、岗位参与表、工具输出和验收证据。",
      codexAssist: "Codex 可整理企业资料、生成诊断摘要、内训模块映射和 SOP 草稿。",
      mentorCheck: "企业服务负责人检查诊断结论、内训范围、工具定制边界和企业责任是否清楚。",
      passStandard: "能说明哪些内容进标准课、哪些进企业定制、哪些必须暂缓或人工审批。",
      owner: "企业服务负责人",
      riskBoundary: "未完成诊断前不得承诺系统开发范围、项目周期、业绩效果或替代企业审批流程。"
    }
  ],
  rehearsalGateDownloads: [
    {
      label: "下载试讲排练检查表 CSV",
      href: "./downloads/classroom-rehearsal-gate-board.csv",
      format: "CSV",
      note: "用于新讲师、公开课老师和运营负责人在试讲、录屏、上线前逐项确认。"
    },
    {
      label: "下载公开课上线复盘模板 MD",
      href: "./downloads/public-demo-launch-review-template.md",
      format: "Markdown",
      note: "用于记录逐屏讲稿、页面证据、观众互动、CTA、禁止承诺和课后回写任务。"
    }
  ],
  rehearsalGate: {
    title: "集成房屋公开课试讲上线门槛",
    summary:
      "把案例页逐屏讲稿、课堂工作台、营销公开课脚本和报名/企业承接页面接成一个上线前检查流程，确保每场公开课都有证据、有 CTA、有边界、有回写。",
    readinessSignals: [
      "讲师能按 S1-S6 逐屏讲清案例总览、询盘、报价、订单、单证和下一步。",
      "每一屏都能说明页面证据、观众互动、工具输出和人工确认边界。",
      "结尾能按资料领取、系统课报名、企业诊断和继续培育四类线索分流。",
      "运营负责人确认公开课不展示真实客户、成本、合同、付款或未授权学员作业。"
    ],
    gates: [
      {
        stage: "01",
        title: "逐屏稿试讲",
        owner: "主讲老师 + 课程负责人",
        sourcePages: ["case-integrated-house.html", "classroom.html"],
        input: "集成房屋逐屏讲解稿、90 分钟标准课 runbook、讲师授课认证表。",
        liveCheck: "讲师能在 15-20 分钟内讲完 S1-S6，不跳过人工边界和观众互动。",
        passEvidence: "试讲录像、逐屏检查表、负责人批注和返修记录。",
        repairAction: "话术太散时回到案例页逐屏稿，补老师话术、转场句和边界提醒。",
        launchDecision: "通过后进入录屏或小范围公开课。"
      },
      {
        stage: "02",
        title: "工具演示与页面切换",
        owner: "产品负责人 + 主讲老师",
        sourcePages: ["tools.html", "case-integrated-house.html", "prompts.html"],
        input: "询盘识别器、报价测算器、单证检查器和对应下载模板。",
        liveCheck: "工具演示能展示输入、输出、导出、异常输出处理和人工确认字段。",
        passEvidence: "工具演示截图、导出文件、错误输出处理说明。",
        repairAction: "如果只讲概念不出结果，必须补工具输入样例和导出证据。",
        launchDecision: "通过后允许在公开课展示工具，不通过只讲案例页。"
      },
      {
        stage: "03",
        title: "公开课转化口径",
        owner: "市场运营 + 课程顾问",
        sourcePages: ["marketing.html", "resources.html", "enrollment.html", "enterprise.html"],
        input: "公开课转化话术、资源领取路径、报名咨询路径和企业诊断入口。",
        liveCheck: "结尾给出四类分流：领取资料、报名咨询、企业诊断、继续培育。",
        passEvidence: "结尾话术、CTA 链接、跟进标签和禁止承诺清单。",
        repairAction: "如果只催报名，必须补资料领取和继续培育路径。",
        launchDecision: "通过后可进入直播、私域试听或社群公开课。"
      },
      {
        stage: "04",
        title: "上线后复盘回写",
        owner: "运营负责人 + 助教负责人",
        sourcePages: ["playbook.html", "marketing.html", "classroom.html"],
        input: "观看数据、互动问题、线索分流、咨询反馈、讲师卡点和工具问题。",
        liveCheck: "公开课结束 24 小时内完成线索分流和内容回写，不把问题留在聊天记录里。",
        passEvidence: "复盘 Brief、线索分流表、FAQ 更新项、工具/案例修订项。",
        repairAction: "如果没有回写证据，下次公开课不得直接复用旧稿。",
        launchDecision: "通过后沉淀为下一场公开课母版。"
      }
    ],
    noGoRules: [
      "未完成逐屏试讲和负责人批注，不能对外直播或录课发布。",
      "不能展示真实客户、真实成本、合同、付款、企业内部审批或未授权学员作业。",
      "工具演示不能说成自动报价、自动成交、自动审单或替代专业判断。",
      "公开课结尾不能制造焦虑、虚假稀缺或承诺学完必有业绩。",
      "所有公开课问题和转化数据必须回写到营销、报名、课堂、案例、工具或运营指南。"
    ]
  },
  assignmentPipeline: [
    {
      step: "01",
      title: "收作业",
      owner: "助教 / 班主任",
      input: "学员产品资料、询盘、报价表、订单表或单证样例。",
      check: "是否脱敏、是否来自真实业务、是否能对应课程模块。",
      output: "待点评作业池"
    },
    {
      step: "02",
      title: "初步分类",
      owner: "助教",
      input: "学员提交的文件或表格。",
      check: "按产品资料、客户开发、询盘、报价、订单、单证分组。",
      output: "模块化作业清单"
    },
    {
      step: "03",
      title: "老师点评",
      owner: "主讲老师",
      input: "高频问题和典型优秀作业。",
      check: "是否有字段缺失、人工边界不清、输出不可复用或业务逻辑错误。",
      output: "作业点评记录"
    },
    {
      step: "04",
      title: "转成平台更新",
      owner: "课程负责人",
      input: "课堂中反复出现的问题。",
      check: "是否需要更新课程模块、提示词、工具字段、资源说明或企业服务 FAQ。",
      output: "网站维护任务"
    }
  ],
  reviewDeskDownloads: [
    {
      label: "下载作业返修跟踪表 CSV",
      href: "./downloads/assignment-repair-tracker.csv",
      format: "CSV",
      note: "用于助教按模块记录问题类型、返修动作、复核状态和是否可入库。"
    },
    {
      label: "下载优秀作业入库模板 MD",
      href: "./downloads/assignment-showcase-intake-template.md",
      format: "Markdown",
      note: "用于优秀学员作业脱敏、授权、页面证据和后续推广或课堂复用。"
    }
  ],
  reviewDesk: [
    {
      stage: "01",
      title: "助教初审与资料安全检查",
      trigger: "学员提交产品资料、询盘、报价、订单、单证或结课工具包。",
      codexAssist: "Codex 可按提交说明提取模块、文件类型、缺失字段和疑似敏感信息。",
      teacherAction: "助教确认资料是否脱敏、是否真实、是否对应课程模块，敏感内容先退回处理。",
      learnerFeedback: "提示学员补齐来源、删除客户隐私、标出人工确认点。",
      repairOutput: "初审状态、敏感字段清单、补交资料任务。",
      archiveRule: "未脱敏或来源不明的作业不能进入老师点评、优秀作业库或公开展示。",
      metric: "24 小时初审完成率、敏感资料拦截数。",
      owner: "助教 / 班主任"
    },
    {
      stage: "02",
      title: "按模块归类和问题打标",
      trigger: "作业已通过基础安全检查，但质量和模块归属不清。",
      codexAssist: "Codex 根据字段和内容把作业归入产品资料、客户开发、询盘、报价、订单、单证或风险复盘。",
      teacherAction: "助教人工确认归类，并标记主要问题：缺字段、不可复用、边界不清、业务逻辑错误或展示风险。",
      learnerFeedback: "给学员一条明确返修路线，不同时要求修改所有问题。",
      repairOutput: "模块标签、问题标签、返修优先级。",
      archiveRule: "只有模块归属和问题标签清楚的作业才能进入老师抽评池。",
      metric: "归类准确率、高频问题标签数。",
      owner: "助教"
    },
    {
      stage: "03",
      title: "Codex 辅助质量检查",
      trigger: "作业需要检查字段完整性、前后矛盾、人工确认点和复用结构。",
      codexAssist: "Codex 生成字段缺口、风险提示、返修建议和可复用结构检查清单。",
      teacherAction: "助教复核 Codex 建议，删除不准确建议，保留真正可执行的返修项。",
      learnerFeedback: "把建议改成可操作任务，例如补充目标客户、拆分费用项、标注确认人。",
      repairOutput: "返修建议草稿、质量检查记录、人工复核结论。",
      archiveRule: "Codex 检查结果不能直接发给学员，必须由助教确认后再反馈。",
      metric: "Codex 建议采纳率、人工修正项数量。",
      owner: "助教 + Codex"
    },
    {
      stage: "04",
      title: "老师抽评和优秀样例选择",
      trigger: "某类作业集中出现高频问题，或出现可作为课堂样例的优秀作业。",
      codexAssist: "Codex 汇总同类问题、提炼点评要点，并生成优秀样例的展示结构草稿。",
      teacherAction: "主讲老师选择 2-3 个典型作业点评，明确通过标准和优秀样例入库条件。",
      learnerFeedback: "课堂或社群中说明为什么通过、为什么退回、如何返修。",
      repairOutput: "老师点评记录、优秀作业候选、班级共性问题。",
      archiveRule: "优秀样例入库前必须二次脱敏并确认授权，不把课堂样例包装成真实商业成果。",
      metric: "抽评覆盖模块数、优秀样例候选数。",
      owner: "主讲老师"
    },
    {
      stage: "05",
      title: "学员返修和复核",
      trigger: "学员根据点评提交二次版本或补充资料。",
      codexAssist: "Codex 对比前后版本，提取已修复项、仍未解决项和新增风险点。",
      teacherAction: "助教确认返修是否达到最低通过标准，必要时安排单独答疑或降级任务。",
      learnerFeedback: "给出通过、继续返修或转入补基础资料的明确结论。",
      repairOutput: "返修状态、通过记录、二次待办。",
      archiveRule: "未通过作业不能进入结课成果包，需保留返修记录和下一步任务。",
      metric: "一次通过率、二次通过率、超过两次返修比例。",
      owner: "助教 / 班主任"
    },
    {
      stage: "06",
      title: "入库、展示和平台回写",
      trigger: "作业通过验收，或高频问题需要沉淀为课程、资源、工具或 FAQ 更新。",
      codexAssist: "Codex 整理优秀作业展示稿、FAQ 草稿、模板改进项和工具字段优化建议。",
      teacherAction: "课程负责人决定哪些内容入库、公开展示、回写网站或进入工具迭代。",
      learnerFeedback: "通知学员作业通过、入库状态、展示授权和后续业务使用建议。",
      repairOutput: "优秀作业库、FAQ 更新、资源或工具维护任务。",
      archiveRule: "公开展示必须脱敏并获得授权；企业作业还需企业负责人确认展示范围。",
      metric: "入库作业数、回写页面项、工具字段改进项。",
      owner: "课程负责人 + 内容负责人"
    }
  ],
  moduleHandoffs: [
    {
      courseModule: "M0-M3",
      classroomFocus: "产品资料、客户画像、线索库和开发信。",
      artifact: "产品资料表、客户线索库、开发信序列。",
      toolOrPrompt: "客户开发字段库、产品资料整理指令、开发信指令。",
      acceptance: "字段完整，客户类型清楚，不虚构案例和认证。"
    },
    {
      courseModule: "M4-M5",
      classroomFocus: "询盘识别、报价前问题和产品资料页。",
      artifact: "询盘识别表、补问清单、英文回复草稿、FAQ。",
      toolOrPrompt: "询盘识别演示器、询盘回复指令、产品页面指令。",
      acceptance: "不直接报价，缺失信息和风险边界清楚。"
    },
    {
      courseModule: "M6",
      classroomFocus: "FOB/CIF 报价结构和 DDP 风险。",
      artifact: "报价费用项清单、报价说明邮件、人工确认点。",
      toolOrPrompt: "报价测算器、报价检查指令。",
      acceptance: "成本、运费、保险、利润和有效期分开确认。"
    },
    {
      courseModule: "M7-M8",
      classroomFocus: "PI、订单主数据、生产节点和客户进度更新。",
      artifact: "订单主数据表、跟单看板、客户进度邮件。",
      toolOrPrompt: "订单跟进看板、客户更新邮件指令。",
      acceptance: "节点负责人、计划日期、异常动作和对外口径清楚。"
    },
    {
      courseModule: "M9-M11",
      classroomFocus: "单证一致性、付款风险、售后和复购。",
      artifact: "单证检查表、付款风险矩阵、售后回访节点。",
      toolOrPrompt: "单证一致性检查器、风险报告指令。",
      acceptance: "专业事项保留人工复核，不用工具替代报关、银行、法务和合规判断。"
    }
  ],
  qaPlaybook: [
    {
      question: "老师现场被问到具体价格怎么办？",
      answer: "明确课堂数字只用于结构演示。真实报价必须回到产品配置、工厂成本、汇率、装柜、运费、利润和付款条件确认。"
    },
    {
      question: "学员说自己的行业不是集成房屋怎么办？",
      answer: "先让学员找对应字段：产品参数、客户类型、询盘问题、报价费用项和单证字段。课程训练的是业务结构，不是只服务一个产品。"
    },
    {
      question: "学员只想要万能提示词怎么办？",
      answer: "引导回到业务输入和输出物。没有真实字段、样例和验收标准，提示词不能稳定产生可用结果。"
    },
    {
      question: "企业客户希望直接定制工具怎么办？",
      answer: "先进入企业流程诊断，确认岗位、字段、审批边界和样板订单，再决定内训或工具定制范围。"
    }
  ],
  postClassMaintenance: [
    {
      signal: "多个学员在同一字段卡住",
      update: "补充课程模块步骤、工具字段说明或资源下载样例。",
      file: "data/course-foreign-trade-codex.js / data/tools.js / data/site.js"
    },
    {
      signal: "同一问题反复出现在答疑区",
      update: "加入课堂工作台 QA、报名页顾虑或企业服务 FAQ。",
      file: "data/classroom.js / data/enrollment.js / data/enterprise.js"
    },
    {
      signal: "某个工具演示转化效果好",
      update: "把工具输出改成推广素材、试听课片段或资源中心下载。",
      file: "data/marketing.js / data/site.js / downloads/"
    },
    {
      signal: "企业样板资料足够完整",
      update: "沉淀新行业案例或企业内训案例，但必须先脱敏和确认授权。",
      file: "data/cases.js / data/enterprise.js"
    }
  ],
  classroomBoundaries: [
    "课堂演示可以用 Codex 整理字段、生成草稿、检查冲突和提示风险。",
    "课堂不得把示例报价、交期、付款、认证、清关和法律判断当作真实承诺。",
    "学员作业必须使用真实或脱敏资料，不能用虚构内容冒充案例验证。",
    "对外发送邮件、报价、PI、合同和单证前必须由业务负责人或授权岗位确认。",
    "优秀作业或企业案例用于宣传前，必须脱敏并获得授权。"
  ]
};
