window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.learning = {
  metrics: [
    {
      value: "12",
      label: "课程模块",
      detail: "从产品资料、客户开发、询盘、报价、订单到单证和复盘。"
    },
    {
      value: "7",
      label: "核心交付物",
      detail: "每个学员最终形成自己的外贸 Codex 业务工具包。"
    },
    {
      value: "4",
      label: "学习检查点",
      detail: "资料准备、流程跑通、工具替换、最终复盘四次验收。"
    },
    {
      value: "6",
      label: "入班准备动作",
      detail: "从资料确认、脱敏、样例选择到目录搭建和第一节课任务。"
    },
    {
      value: "1",
      label: "样板案例",
      detail: "先用集成房屋案例练习，再替换成自己的产品资料。"
    }
  ],
  learnerPaths: [
    {
      segment: "外贸新人",
      focus: "先建立产品资料、询盘识别和客户跟进的基础结构。",
      firstAction: "下载重复劳动自测表，选出最常处理的 1 个产品。",
      mustSubmit: ["产品资料表", "询盘识别表", "基础客户跟进表"],
      risk: "不要急着做复杂报价和自动化工具，先把业务字段补齐。"
    },
    {
      segment: "成熟业务员",
      focus: "把已有经验沉淀成可复用字段、模板、检查表和跟进节奏。",
      firstAction: "选择 1 个真实或脱敏询盘，把历史报价和单证字段整理出来。",
      mustSubmit: ["报价费用项清单", "订单跟进看板", "单证一致性检查表"],
      risk: "不能把个人经验直接交给工具执行，关键商业判断仍需本人确认。"
    },
    {
      segment: "主管 / 老板",
      focus: "把团队做法统一成 SOP、岗位边界和可交接的新人训练路径。",
      firstAction: "选一个样板订单，标出业务、跟单、单证、财务和负责人确认节点。",
      mustSubmit: ["团队流程地图", "岗位确认点", "新人上手清单"],
      risk: "不要在未诊断流程前要求定制系统，先把字段、权限和审批边界说清。"
    }
  ],
  onboardingDownloads: [
    {
      label: "下载学员入班资料清单 CSV",
      href: "./downloads/learner-onboarding-material-checklist.csv",
      format: "CSV",
      note: "用于学员入班前准备产品、询盘、报价、订单、单证和人工确认资料。"
    },
    {
      label: "下载课前资料脱敏模板 MD",
      href: "./downloads/learner-preclass-sanitization-template.md",
      format: "Markdown",
      note: "用于把真实业务资料处理成可上课、可点评、可展示的安全样例。"
    }
  ],
  onboardingDesk: [
    {
      stage: "01",
      title: "确认学习角色和业务目标",
      timing: "报名后当天",
      learnerInput: "学员身份、主营产品、目标市场、当前最耗时的外贸环节。",
      codexUse: "Codex 根据报名信息整理学习目标、优先模块和需要准备的资料类型。",
      coachCheck: "班主任确认学员是新人、成熟业务员、主管还是企业学员，并判断是否需要企业服务分流。",
      output: "学员画像、学习优先级、第一周资料准备清单。",
      pageEvidence: "报名路径 / 课程交付中心",
      acceptance: "能说清本期课程先解决客户开发、询盘、报价、订单、单证或团队 SOP 中的哪一个主问题。",
      boundary: "学习目标可以由 Codex 辅助整理，但是否适合课程和是否企业分流必须人工确认。"
    },
    {
      stage: "02",
      title: "收集基础产品资料",
      timing: "开课前 48 小时",
      learnerInput: "产品参数、应用场景、配置选项、图片素材、认证资料和常见客户问题。",
      codexUse: "Codex 把零散资料整理成产品主数据字段和缺失信息清单。",
      coachCheck: "助教检查产品资料是否足够支撑询盘识别和报价前补问。",
      output: "产品资料工作台初版、待补字段、人工确认人。",
      pageEvidence: "学员工作台 / 集成房屋案例",
      acceptance: "至少有一个主推产品能写清参数、用途、配置、目标客户和不能由 AI 编造的字段。",
      boundary: "产品性能、认证、库存、交期和可交付能力必须由工厂或负责人确认。"
    },
    {
      stage: "03",
      title: "选择一条真实业务样例",
      timing: "开课前 24 小时",
      learnerInput: "一封脱敏询盘、历史报价表、订单记录或单证样例。",
      codexUse: "Codex 识别样例可用于客户开发、询盘、报价、订单或单证哪个模块。",
      coachCheck: "助教确认样例难度适合课堂，不含敏感客户、成本、合同或隐私信息。",
      output: "课程样例标签、适用模块、需要补问的问题。",
      pageEvidence: "课堂工作台 / 工具中心",
      acceptance: "样例能支持至少一个课程演示动作，并能替换集成房屋案例中的同类字段。",
      boundary: "不得把未脱敏的客户名称、联系方式、合同、成本和付款信息直接用于课堂。"
    },
    {
      stage: "04",
      title: "完成资料脱敏和展示授权",
      timing: "首次提交前",
      learnerInput: "客户名称、联系人、价格、成本、合同编号、收货人、付款和内部审批信息。",
      codexUse: "Codex 根据脱敏规则生成替换建议和公开展示风险提醒。",
      coachCheck: "班主任或助教人工检查是否仍包含敏感字段，并确认展示范围。",
      output: "脱敏版样例、不可公开字段清单、展示授权状态。",
      pageEvidence: "学员工作台 / 运营指南",
      acceptance: "公开点评材料不含可识别客户、真实成本、合同编号、付款细节和内部审批信息。",
      boundary: "资料是否可公开、是否可用于招生案例和是否获得授权必须人工确认。"
    },
    {
      stage: "05",
      title: "搭建个人课程目录",
      timing: "第一节课前",
      learnerInput: "课程文件夹、作业模板、下载资料、指令入口和工具入口。",
      codexUse: "Codex 生成个人课程目录结构、文件命名规范和后续维护清单。",
      coachCheck: "助教确认目录能对应 12 个模块、7 个交付物和结课工具包。",
      output: "个人外贸 Codex 工作台目录、作业提交路径、版本命名规则。",
      pageEvidence: "课程交付中心 / 指令库 / 工具中心",
      acceptance: "学员能在目录中快速找到产品资料、客户开发、询盘、报价、订单、单证和复盘区域。",
      boundary: "目录结构可由 Codex 建议，但真实文件权限、云盘分享和企业资料安全由学员或企业确认。"
    },
    {
      stage: "06",
      title: "完成第一节课前任务",
      timing: "开课当天",
      learnerInput: "重复劳动自测、一个主推产品、一个业务样例、最想优化的工作环节。",
      codexUse: "Codex 生成课前学习摘要、第一节课提问清单和需要老师关注的卡点。",
      coachCheck: "班主任确认学员已具备上课输入，没有准备好的学员先进入补资料任务。",
      output: "课前准备通过记录、第一节课目标、补资料待办。",
      pageEvidence: "课堂工作台 / 资源中心",
      acceptance: "正式上课前能打开自己的资料、说明脱敏方式，并知道第一节课要产出什么。",
      boundary: "没准备资料的学员不强行进入复杂工具演示，先补齐业务输入。"
    }
  ],
  progressRoadmap: [
    {
      stage: "准备期",
      modules: "M0",
      goal: "建立学习项目目录、脱敏规则和产品基础资料。",
      learnerAction: "选定一个产品或样板订单，把真实敏感信息移除后作为课程输入。",
      evidence: "能打开自己的产品资料表，并说明哪些字段必须人工确认。"
    },
    {
      stage: "第 1 阶段",
      modules: "M1-M3",
      goal: "完成客户画像、线索字段和开发信序列。",
      learnerAction: "用自己的产品拆 3 类客户，并整理至少 20 条线索字段。",
      evidence: "客户分级、下一步动作和开发信角度能对应真实客户类型。"
    },
    {
      stage: "第 2 阶段",
      modules: "M4-M6",
      goal: "完成询盘识别、产品资料优化和 FOB/CIF 报价结构。",
      learnerAction: "拆解一封真实询盘，并输出报价前确认问题和费用项清单。",
      evidence: "不会直接报价，能说清价格、交期、DDP 和认证的人工确认人。"
    },
    {
      stage: "第 3 阶段",
      modules: "M7-M9",
      goal: "把报价结果转成订单主数据、跟单看板和单证检查表。",
      learnerAction: "用一个订单样例建立 PI 字段、节点看板和单证冲突规则。",
      evidence: "数量、品名、港口、金额、重量和节点负责人能前后一致。"
    },
    {
      stage: "第 4 阶段",
      modules: "M10-M11",
      goal: "补齐付款风险、合规边界、售后和复购维护。",
      learnerAction: "为一个付款条件或售后场景写风险清单和客户回复草稿。",
      evidence: "不替代银行、报关、法务、信保和企业负责人判断。"
    },
    {
      stage: "结课交付",
      modules: "Final",
      goal: "把零散作业整理成个人外贸 Codex 工作台。",
      learnerAction: "提交最终工具包目录、核心表格、提示词、风险边界和下一步优化计划。",
      evidence: "自己或团队下一个客户、询盘、报价或订单可以继续复用。"
    }
  ],
  deliverableChecklist: [
    {
      artifact: "产品资料工作台",
      modules: "M0 / M5",
      businessInput: "产品参数、应用场景、配置选项、图片素材和 FAQ。",
      codexOutput: "英文参数表、产品页面结构、FAQ 和素材清单。",
      linkedTool: "产品资料整理指令 / 资源中心资料包",
      acceptance: "所有参数来自真实资料，认证、抗风、防火、交期等不虚构。",
      manualBoundary: "产品参数、认证文件和可交付能力由工厂或负责人确认。"
    },
    {
      artifact: "客户画像与线索库",
      modules: "M1 / M2",
      businessInput: "目标国家、客户类型、项目场景、公司资料和跟进记录。",
      codexOutput: "客户画像、线索字段、客户等级和下一步跟进动作。",
      linkedTool: "客户开发字段库",
      acceptance: "客户分类能对应产品场景，至少有 A/B/C 优先级和下次动作。",
      manualBoundary: "客户真实性、隐私合规和触达方式由业务人员确认。"
    },
    {
      artifact: "开发信与跟进序列",
      modules: "M3",
      businessInput: "客户画像、产品卖点、公司真实能力和过往沟通记录。",
      codexOutput: "首封开发信、3 轮跟进邮件和真实性检查清单。",
      linkedTool: "开发信指令库",
      acceptance: "邮件切入角度和客户场景相关，不群发同一套空泛话术。",
      manualBoundary: "不能虚构合作案例、库存、认证、价格和交付能力。"
    },
    {
      artifact: "询盘识别与回复包",
      modules: "M4",
      businessInput: "客户原始询盘、产品资料、报价边界和公司信息。",
      codexOutput: "已知需求、缺失字段、报价前问题、风险点和英文回复草稿。",
      linkedTool: "询盘识别课堂演示器",
      acceptance: "能说明哪些信息不足以报价，并生成清晰补问问题。",
      manualBoundary: "价格、库存、认证、交期、付款和 DDP 不能自动承诺。"
    },
    {
      artifact: "报价费用项与说明邮件",
      modules: "M6",
      businessInput: "成本、选配、包装、国内费用、运费、保险、汇率和利润。",
      codexOutput: "FOB/CIF 报价结构、漏项提醒、DDP 风险提示和报价说明草稿。",
      linkedTool: "FOB/CIF 报价测算器",
      acceptance: "费用项分层清楚，CIF 和 DDP 责任边界没有混淆。",
      manualBoundary: "最终报价、利润率、汇率、运费有效期和付款条件由负责人确认。"
    },
    {
      artifact: "订单主数据与跟单看板",
      modules: "M7 / M8",
      businessInput: "报价结果、PI 字段、图纸版本、生产节点、负责人和计划日期。",
      codexOutput: "订单主数据表、跟单看板、异常记录和客户进度邮件。",
      linkedTool: "订单跟进看板",
      acceptance: "每个节点有负责人、计划日期、异常动作和对外更新口径。",
      manualBoundary: "交期、生产安排、尾款和发货承诺必须内部确认后再对外发送。"
    },
    {
      artifact: "单证检查与风险复盘包",
      modules: "M9-M11",
      businessInput: "PI、CI、PL、订舱资料、付款条件、售后记录和复购节点。",
      codexOutput: "单证冲突报告、付款风险矩阵、售后回访表和复购提醒。",
      linkedTool: "单证一致性检查器 / 风险报告指令",
      acceptance: "能发现数量、品名、港口、重量、金额等冲突，并写明处理建议。",
      manualBoundary: "报关、银行、信用证、税务、法务、信保和合规判断必须专业复核。"
    }
  ],
  submissionRules: [
    {
      rule: "每份作业必须有真实业务输入",
      pass: "来自自己的产品、客户、询盘、报价或脱敏订单。",
      fail: "只提交 AI 生成的一段通用文案。"
    },
    {
      rule: "每份作业必须能继续复用",
      pass: "有表格字段、状态、负责人、下一步动作或检查规则。",
      fail: "只解决一次聊天问题，不能用于下一封询盘或下一个订单。"
    },
    {
      rule: "每份作业必须写清人工确认点",
      pass: "价格、交期、付款、认证、清关、税费、法务和合规有明确确认人。",
      fail: "让 Codex 直接给最终判断或对客户做承诺。"
    },
    {
      rule: "每份作业必须保护敏感资料",
      pass: "客户、价格、合同、成本和联系方式已脱敏或授权使用。",
      fail: "把真实敏感资料直接放进课堂展示或公开页面。"
    }
  ],
  systemLessonHandoffDownloads: [
    {
      label: "下载正式课作业交付闭环 CSV",
      href: "./downloads/system-lesson-assignment-handoff-board.csv",
      format: "CSV",
      note: "用于系统课课后 72 小时内管理学员提交、助教初审、老师抽评、返修和平台回写。"
    },
    {
      label: "下载学员提交与授权 Brief MD",
      href: "./downloads/system-lesson-homework-submission-brief.md",
      format: "Markdown",
      note: "用于学员提交正式课作业时说明业务输入、脱敏状态、人工确认点、展示授权和返修任务。"
    }
  ],
  systemLessonHandoff: {
    title: "集成房屋正式课 0-72 小时作业交付闭环",
    summary:
      "把课堂页的 90 分钟正式授课路线转成课后运营动作：学员按六组资产提交，助教按安全和可复用标准验收，优秀成果再进入招生证据或企业服务线索。",
    meta: [
      {
        value: "72h",
        label: "闭环窗口",
        note: "正式课后 72 小时内完成初审、返修路线、抽评候选和平台回写。"
      },
      {
        value: "6",
        label: "提交资产",
        note: "产品资料、询盘、报价、订单、单证、复盘授权六组最小交付物。"
      },
      {
        value: "4",
        label: "验收状态",
        note: "待补资料、初审通过、返修中、可入库候选，避免作业状态混乱。"
      },
      {
        value: "3",
        label: "展示去向",
        note: "内部复盘、招生证据候选、企业 SOP 候选，全部需要人工确认。"
      }
    ],
    flow: [
      {
        time: "课后 0-2h",
        title: "确认提交入口和版本命名",
        learnerAction: "按课堂要求建立作业文件夹，写清产品、客户类型、目的港、贸易术语和版本号。",
        requiredFiles: "提交说明、资料脱敏记录、课堂输出截图或导出文件。",
        assistantGate: "确认学员知道提交路径、命名规则、返修时限和不能公开的字段。",
        codexSupport: "生成提交清单、版本命名建议和缺失资料提醒。",
        manualBoundary: "真实文件权限、企业资料授权、云盘分享范围由学员或企业负责人确认。",
        nextRoute: ["classroom.html", "resources.html"]
      },
      {
        time: "课后 2-12h",
        title: "提交六组最小作业资产",
        learnerAction: "围绕集成房屋正式课结构，替换成自己的产品或脱敏样例，提交六组最小资产。",
        requiredFiles: "产品资料缺口、询盘识别、报价字段、订单节点、单证风险、200 字复盘。",
        assistantGate: "检查是否只有聊天截图，是否缺少表格字段、负责人、下一步动作或人工确认点。",
        codexSupport: "把散乱材料整理成字段表、缺口清单、风险提醒和返修建议草稿。",
        manualBoundary: "价格、成本、运费、交期、HS、清关、合同和付款不能由 Codex 直接判定。",
        nextRoute: ["case-integrated-house.html", "tools.html", "learning.html"]
      },
      {
        time: "课后 12-24h",
        title: "助教初审和资料安全拦截",
        learnerAction: "根据助教要求补充来源说明、删除敏感信息或降级为公开样例练习。",
        requiredFiles: "脱敏版本、敏感字段清单、资料来源说明、展示范围初步选择。",
        assistantGate: "先查客户、价格、成本、合同、付款、联系方式和企业内部审批是否泄露。",
        codexSupport: "辅助标出疑似敏感字段、缺失来源、前后不一致和展示风险。",
        manualBoundary: "是否可用于课堂点评、优秀作业库或招生展示，必须由助教和负责人确认。",
        nextRoute: ["learning.html", "playbook.html"]
      },
      {
        time: "课后 24-48h",
        title: "Codex 辅助检查和老师抽评",
        learnerAction: "等待初审结论，按问题标签准备返修，不把 Codex 输出直接发给客户。",
        requiredFiles: "问题标签、质量检查记录、老师抽评候选、返修优先级。",
        assistantGate: "把缺字段、不可复用、边界不清、业务逻辑错误和展示风险分开标记。",
        codexSupport: "生成质量检查摘要、返修清单、优秀样例展示草稿和老师抽评要点。",
        manualBoundary: "Codex 检查结论必须由助教复核后才能反馈给学员，老师决定抽评样例。",
        nextRoute: ["classroom.html", "prompts.html"]
      },
      {
        time: "课后 48-72h",
        title: "学员返修和通过判定",
        learnerAction: "按返修清单补业务输入、缺失字段、人工确认人、脱敏记录和复用路径。",
        requiredFiles: "二次提交版本、已修复项、未解决项、下一步业务使用计划。",
        assistantGate: "确认返修是否达到最低通过标准，不达标则安排补基础资料或降级任务。",
        codexSupport: "对比前后版本，提取已修复项、仍缺字段和新增风险点。",
        manualBoundary: "未通过作业不能进入结课成果包、招生证据或企业服务样例。",
        nextRoute: ["learning.html", "enrollment.html"]
      },
      {
        time: "72h+",
        title: "成果打包、展示授权和平台回写",
        learnerAction: "确认作业用途：仅个人复盘、结课成果包、公开展示候选或企业 SOP 候选。",
        requiredFiles: "成果包目录、授权范围、不可公开字段、撤回机制和平台回写任务。",
        assistantGate: "只把已脱敏、已授权、可追溯到真实输入和人工确认边界的成果放入样例库。",
        codexSupport: "整理成果展示 Brief、FAQ 草稿、模板改进项和工具字段优化建议。",
        manualBoundary: "公开展示、企业汇报、商业承诺和工具迭代优先级必须由负责人确认。",
        nextRoute: ["resources.html", "marketing.html", "enterprise.html", "playbook.html"]
      }
    ],
    statusRules: [
      {
        status: "待补资料",
        rule: "缺真实输入、缺来源、缺脱敏记录或只有泛泛文案，不能进入老师抽评。"
      },
      {
        status: "初审通过",
        rule: "资料安全、模块归属和最小字段达标，可进入质量检查或老师抽评候选。"
      },
      {
        status: "返修中",
        rule: "有业务价值但缺字段、边界或复用结构，必须按优先级补交。"
      },
      {
        status: "可入库候选",
        rule: "已通过验收、已脱敏、可追溯、可复用，但公开前仍需授权和版本锁定。"
      }
    ],
    showcaseRoutes: [
      {
        route: "仅内部复盘",
        use: "用于老师点评、学员复盘和企业内部训练，不进入公开页面。"
      },
      {
        route: "招生证据候选",
        use: "只展示结构、字段、流程和学习变化，用于回应报名前对交付物的顾虑。"
      },
      {
        route: "企业 SOP 候选",
        use: "把个人作业升级为岗位流程、验收标准或工具需求，需要企业负责人确认。"
      }
    ],
    noGoRules: [
      "没有脱敏记录和资料来源的作业不能进入点评、展示或企业汇报。",
      "只有聊天截图、没有表格字段和复用路径的作业不能算正式课交付。",
      "Codex 返修建议不能未经助教复核直接发给学员。",
      "未通过验收的作业不能进入结课工具包和招生证据。",
      "公开展示前必须确认授权范围、不可公开字段、撤回机制和版本锁定。"
    ]
  },
  toolchainAssignmentDownloads: [
    {
      label: "下载 5 工具链学员提交验收表 CSV",
      href: "./downloads/learner-toolchain-assignment-review-board.csv",
      format: "CSV",
      note: "用于学员按询盘、报价、订单、单证和付款风控提交工具输出，并让助教逐项验收。"
    },
    {
      label: "下载 5 工具链作业提交 Brief MD",
      href: "./downloads/learner-toolchain-assignment-brief-template.md",
      format: "Markdown",
      note: "用于学员说明每个工具的业务输入、脱敏状态、人工确认人、返修项和后续复用计划。"
    }
  ],
  toolchainAssignment: {
    title: "集成房屋 5 工具链学员作业验收台",
    summary:
      "承接案例页的 5 工具端到端路线，把课堂演示变成学员可提交、助教可验收、结课可打包、招生和企业服务可谨慎引用的交付链。",
    meta: [
      { value: "5", label: "工具作业", note: "询盘、报价、订单、单证和付款风控逐项提交。" },
      { value: "3", label: "通过证据", note: "真实输入、工具输出、人工确认边界缺一不可。" },
      { value: "72h", label: "初审窗口", note: "课后 72 小时内完成安全检查、质量判断和返修路线。" },
      { value: "4", label: "后续去向", note: "个人复用、结课成果包、招生证据候选或企业诊断信号。" }
    ],
    assignments: [
      {
        stage: "01",
        tool: "询盘识别与回复工具",
        route: "tools.html#inquiry-demo-card",
        learnerInput: "一封真实或脱敏询盘、产品资料、目标市场和报价边界。",
        requiredOutput: "已知需求、字段证据、准备分、缺失字段、补问问题、英文回复草稿和下一步路由。",
        reviewGate: "能解释为什么不能直接报价，并把客户问题和内部确认事项分开。",
        repairSignal: "只有 AI 回复草稿，没有字段证据、缺失信息或人工确认点。",
        portfolioUse: "放入结课成果包的询盘识别区，作为报价前确认流程的起点。",
        manualBoundary: "价格、交期、认证、DDP、清关和安装责任不得自动承诺。"
      },
      {
        stage: "02",
        tool: "FOB/CIF 报价费用项检查器",
        route: "tools.html#quotation-demo-card",
        learnerInput: "产品成本、选配、包装、国内费用、运费、保险、汇率、利润和报价有效期。",
        requiredOutput: "报价结构、字段证据、发布闸口、审批清单、漏项提醒、报价说明草稿和导出 Markdown。",
        reviewGate: "发布分、审批人和不可承诺事项清楚，演示数字没有被当作最终报价。",
        repairSignal: "只提交一个总价，缺少费用项、确认人、有效期或 DDP 风险边界。",
        portfolioUse: "放入报价费用项区，后续可替换真实费用项形成企业报价 SOP。",
        manualBoundary: "最终价格、利润率、汇率、运费有效期、付款条件和报价有效期必须由负责人确认。"
      },
      {
        stage: "03",
        tool: "订单跟进与交期预警看板",
        route: "tools.html#order-demo-card",
        learnerInput: "一个脱敏订单节点表，至少包含图纸、定金、采购、生产、订舱、出运和尾款。",
        requiredOutput: "履约分、节点证据、风险节点、审批闸口、客户进度邮件、后续单证/付款路由。",
        reviewGate: "每个风险节点都有负责人、原因、下一步动作和对客户表达边界。",
        repairSignal: "节点只有日期，没有负责人、输入、输出、风险原因或客户更新口径。",
        portfolioUse: "放入订单履约区，作为报价确认后团队协作和客户更新模板。",
        manualBoundary: "生产计划、舱位、质检、发货、尾款、索赔和客户承诺必须由对应岗位确认。"
      },
      {
        stage: "04",
        tool: "PI/CI/PL 单证一致性检查器",
        route: "tools.html#document-demo-card",
        learnerInput: "PI、CI、PL 或订舱资料中的脱敏字段，至少覆盖数量、品名、重量、港口和贸易术语。",
        requiredOutput: "单证放行分、字段证据、冲突报告、修正复查、专业审批清单和导出验收。",
        reviewGate: "高风险冲突必须先修正复查，且不能把一致性检查当专业报关或银行审单结论。",
        repairSignal: "只标出字段不一致，没有风险等级、修正动作、复查结果或专业复核人。",
        portfolioUse: "放入单证检查区，后续可扩展为出运前复核 SOP。",
        manualBoundary: "HS 编码、申报要素、信用证、报关、银行和目的港清关必须专业复核。"
      },
      {
        stage: "05",
        tool: "付款方式与 DDP 风险矩阵",
        route: "tools.html#payment-demo-card",
        learnerInput: "一组脱敏付款条款、贸易术语、尾款节点、客户资信信息和合同责任边界。",
        requiredOutput: "审批分、风险证据、付款风险矩阵、内部审批清单、谈判替代方案和客户谨慎回复。",
        reviewGate: "高风险条款必须列出审批人、风险原因、替代谈判方案和不可自动承诺事项。",
        repairSignal: "直接接受 OA、到港后尾款或 DDP 条款，没有审批、替代方案和合同边界。",
        portfolioUse: "放入付款风控区，作为企业内训或主管复盘的重点样例候选。",
        manualBoundary: "客户资信、授信、信保、信用证、税费、合同责任和索赔必须由授权岗位确认。"
      }
    ],
    reviewStates: [
      {
        status: "可通过",
        rule: "五个工具均有真实或脱敏输入、可追溯输出、导出文件、人工确认边界和下一步复用路线。"
      },
      {
        status: "局部通过",
        rule: "至少三个工具达标，其余工具需补字段、负责人、导出文件或人工确认说明。"
      },
      {
        status: "返修优先",
        rule: "存在敏感资料泄露、虚构业务输入、直接对外承诺或把工具输出当最终结论的情况。"
      },
      {
        status: "企业诊断信号",
        rule: "学员作业暴露团队流程、审批、资料权限或工具需求，应进入企业服务线索复核。"
      }
    ],
    handoffRoutes: [
      "通过的 5 工具链作业进入结课成果包和个人工作台目录。",
      "有展示价值的脱敏作业进入成果证据 Brief，但公开前必须单独授权。",
      "暴露团队流程和审批问题的作业进入企业诊断信号 intake，不直接作为销售承诺。",
      "高频返修问题回写到工具课堂验收板、指令库和案例页工具链闭环。"
    ],
    noGoRules: [
      "未脱敏客户、价格、成本、合同、付款或内部审批资料不得提交到公开点评。",
      "只有截图、没有导出文件和字段表的工具作业不能进入结课成果包。",
      "任何工具输出都不能作为最终报价、合同、财务、报关、银行或法律结论。",
      "公开展示和企业汇报必须重新确认授权范围、版本锁定和撤回机制。"
    ]
  },
  finalPortfolio: [
    {
      item: "个人外贸 Codex 工作台目录",
      value: "后续所有课程作业、客户资料、报价表和单证检查都有统一存放位置。",
      proof: "能按模块找到每个文件和下一步维护动作。"
    },
    {
      item: "业务字段字典",
      value: "把产品、客户、询盘、报价、订单和单证字段统一成可复用语言。",
      proof: "换一个客户或订单时不需要重新设计字段。"
    },
    {
      item: "可复制提示词和工具入口",
      value: "把常用 Codex 操作沉淀为指令库和工具中心入口。",
      proof: "能从作业直接跳到对应工具或提示词继续处理。"
    },
    {
      item: "人工确认边界清单",
      value: "明确哪些由 Codex 辅助，哪些必须由业务、主管、货代、财务或专业人员确认。",
      proof: "对外发送前能逐项复核关键商业风险。"
    }
  ],
  portfolioPackageDownloads: [
    {
      label: "下载结课工具包打包清单 CSV",
      href: "./downloads/learner-portfolio-packaging.csv",
      format: "CSV",
      note: "用于学员结课前逐项整理成果包、验收证据和展示边界。"
    },
    {
      label: "下载结课复盘模板 MD",
      href: "./downloads/learner-final-review-template.md",
      format: "Markdown",
      note: "用于学员复盘课程成果、返修任务、下一步业务使用计划和人工确认边界。"
    }
  ],
  portfolioPackageDesk: [
    {
      packageName: "基础资料包",
      modules: "M0 / M5",
      includedAssets: "课程工作台目录、产品资料表、英文参数表、FAQ、素材清单、脱敏规则。",
      proof: "换一个客户询盘时，能直接调用产品参数、配置选项、图片素材和常见问题。",
      useScenario: "用于后续询盘回复、产品页面优化、报价前确认和新人上手。",
      reviewRule: "参数必须来自真实资料，认证、抗风、防火、交期和库存不得由 Codex 编造。",
      displayBoundary: "公开展示时隐藏真实成本、供应商、内部图纸和未公开认证文件。"
    },
    {
      packageName: "客户开发包",
      modules: "M1-M3",
      includedAssets: "客户画像、国家初筛表、客户线索库、开发信序列、跟进节奏和真实性检查清单。",
      proof: "能说清楚目标客户是谁、为什么匹配、下一步如何触达和跟进。",
      useScenario: "用于日常客户开发、团队线索分配、公开课演示和销售咨询承接。",
      reviewRule: "客户分类必须具体到应用场景和采购角色，开发信不能同质化群发。",
      displayBoundary: "客户名称、邮箱、联系人、沟通记录和来源渠道必须脱敏或授权。"
    },
    {
      packageName: "询盘与报价包",
      modules: "M4-M6",
      includedAssets: "询盘识别表、报价前补问清单、FOB/CIF 报价费用项表、DDP 风险提示和报价说明邮件。",
      proof: "能从一封原始询盘拆出已知需求、缺失信息、费用项和必须人工确认的报价边界。",
      useScenario: "用于减少读询盘时间、降低漏项报价风险、训练新人报价前检查。",
      reviewRule: "不能直接输出最终价格，成本、运费、汇率、利润和有效期必须有确认人。",
      displayBoundary: "报价样例公开展示时只能保留结构，不展示真实利润、底价和客户条件。"
    },
    {
      packageName: "订单与单证包",
      modules: "M7-M9",
      includedAssets: "PI 字段表、订单主数据、跟单看板、异常记录、CI/PL 字段表和单证一致性检查表。",
      proof: "报价、PI、CI、PL 和订舱资料能回到同一份订单主数据检查一致性。",
      useScenario: "用于订单跟进、出货前复核、单证协作和客户进度更新。",
      reviewRule: "每个节点必须有负责人、计划日期、状态、异常动作和对外更新口径。",
      displayBoundary: "订单金额、客户名称、合同编号、收货人和付款信息必须脱敏。"
    },
    {
      packageName: "风险与复购包",
      modules: "M10-M11",
      includedAssets: "付款风险矩阵、DDP 风险清单、内部审批清单、售后反馈表、安装资料清单和复购提醒字段。",
      proof: "能把高风险付款、清关、认证、售后和复购机会拆成可跟进字段。",
      useScenario: "用于主管审批、客户沟通、售后复盘、老客户维护和企业内训。",
      reviewRule: "银行、报关、法务、信保、合规和安装责任不能由 Codex 直接判断。",
      displayBoundary: "客户投诉、赔付、法律争议和内部审批记录不得公开展示。"
    },
    {
      packageName: "展示与复盘包",
      modules: "Final",
      includedAssets: "成果目录、优秀作业脱敏版、返修记录、提示词入口、工具入口、下一步业务使用计划。",
      proof: "学员能向老师、主管或企业客户展示自己已经形成可复用工作流，而不是只看完课程。",
      useScenario: "用于结课汇报、企业内训验收、招生案例展示和后续工具定制需求识别。",
      reviewRule: "必须说明每个成果从哪个业务输入产生、如何复用、谁负责最终确认。",
      displayBoundary: "公开案例必须脱敏并获得学员或企业授权，不能把课堂样例包装成真实商业成果。"
    }
  ],
  deliverableEvidenceDownloads: [
    {
      label: "下载交付证据样例库 CSV",
      href: "./downloads/deliverable-evidence-library.csv",
      format: "CSV",
      note: "用于把课程作业、工具输出、页面证据、展示用途、授权边界和下一步动作统一记录。"
    },
    {
      label: "下载证据展示 Brief 模板 MD",
      href: "./downloads/deliverable-evidence-showcase-template.md",
      format: "Markdown",
      note: "用于老师、顾问或企业项目负责人把优秀作业改成可审核、可复用的展示说明。"
    }
  ],
  deliverableEvidenceLibrary: {
    title: "课程交付证据样例库",
    description: "把学员作业和工具输出整理成真实可检查的证据样例，既能服务课堂验收，也能支撑招生咨询、企业汇报和后续工具需求沉淀。",
    exportFilename: "deliverable-evidence-showcase-output.md",
    defaults: {
      evidenceType: "full-portfolio",
      displayUse: "enrollment-proof",
      readinessLevel: "showcase-ready",
      audienceMode: "consultant",
      boundaryMode: "sanitized",
      nextAction: "use-in-consultation"
    },
    evidenceTypes: [
      {
        id: "product-profile",
        label: "产品资料证据",
        stage: "M0 / M5",
        score: 14,
        summary: "证明学员能把零散产品资料整理成英文参数、配置、FAQ、图片素材和待补字段。",
        integratedHouseSample: "集成房屋样例包含尺寸、结构体系、抗风、防火、保温、配置选项、应用场景和必须人工确认的认证资料。",
        proofPages: ["learning.html", "case-integrated-house.html", "resources.html"],
        dataFiles: ["data/learning.js", "data/cases.js", "data/resources.js"],
        downloadFamilies: ["integrated-house-toolkit.csv", "product-profile-homework-template.md", "learner-portfolio-packaging.csv"],
        codexTasks: ["整理产品主数据字段", "生成英文参数表初稿", "列出缺失资料", "输出 FAQ 和图片素材清单"],
        manualChecks: ["产品参数来自真实资料", "认证、抗风、防火和交期由工厂确认", "未公开图纸和供应商信息已隐藏"],
        sampleOutput: "集成房屋产品资料工作台：参数表、配置选项、FAQ、素材清单、待补资料和人工确认人。",
        classroomUse: "第一节课用来演示资料拆解、字段补齐和行业替换方法。",
        commercialUse: "可向潜在学员说明课程不是只写文案，而是先搭建可复用的产品资料底座。"
      },
      {
        id: "lead-development",
        label: "客户开发证据",
        stage: "M1-M3",
        score: 15,
        summary: "证明学员能从产品应用场景推导客户类型、线索字段、客户等级、开发角度和跟进节奏。",
        integratedHouseSample: "集成房屋样例把建筑承包商、营地运营商、经销商、政府项目和临时安置项目拆成不同客户画像。",
        proofPages: ["tools.html", "prompts.html", "learning.html"],
        dataFiles: ["data/tools.js", "data/prompts.js", "data/learning.js"],
        downloadFamilies: ["lead-field-library.csv", "lead-followup-homework-template.md", "integrated-house-prompt-pack.md"],
        codexTasks: ["生成客户画像字段", "整理 A/B/C 线索优先级", "输出开发信角度", "生成跟进节奏和下次动作"],
        manualChecks: ["客户真实性和触达方式由业务员确认", "不公开客户邮箱、联系人和沟通记录", "不虚构合作案例和供货能力"],
        sampleOutput: "目标客户分级表、线索字段库、开发信序列和下一步跟进动作。",
        classroomUse: "用于演示从产品到客户画像再到开发信的完整路径。",
        commercialUse: "可作为招生咨询中回应“我能不能找到客户”的证据，但不能承诺自动获客。"
      },
      {
        id: "inquiry-quotation",
        label: "询盘报价证据",
        stage: "M4-M6",
        score: 18,
        summary: "证明学员能读懂询盘、识别缺失信息、生成报价前补问，并把 FOB/CIF/DDP 费用边界拆清楚。",
        integratedHouseSample: "集成房屋询盘样例包含数量、用途、目的港、配置、安装、交期和是否需要 CIF/DDP 的判断点。",
        proofPages: ["case-integrated-house.html", "tools.html", "course.html"],
        dataFiles: ["data/cases.js", "data/tools.js", "data/course.js"],
        downloadFamilies: ["demo-lesson-inquiry-analysis.md", "quotation-cost-checklist.csv", "quotation-calculation-homework-template.md"],
        codexTasks: ["拆解已知需求和缺失字段", "生成报价前问题", "整理 FOB/CIF 费用项", "生成英文回复草稿和风险提醒"],
        manualChecks: ["最终价格、成本、运费、汇率和利润由负责人确认", "DDP、清关和税费不由 Codex 直接承诺", "报价有效期和付款条件已复核"],
        sampleOutput: "询盘识别表、报价前补问清单、FOB/CIF 费用项结构和英文报价说明草稿。",
        classroomUse: "公开课和系统课都可以用它展示“减少重复判断和漏项报价”的价值。",
        commercialUse: "适合做试听课转化证据，但必须强调工具辅助报价结构，不替代最终报价决策。"
      },
      {
        id: "order-document",
        label: "订单单证证据",
        stage: "M7-M9",
        score: 17,
        summary: "证明学员能把报价结果、PI、订单节点、CI/PL 和订舱资料回到同一份订单主数据检查。",
        integratedHouseSample: "集成房屋样板订单覆盖 PI 字段、生产节点、包装数量、毛净重、港口、CI/PL 一致性和出货前检查。",
        proofPages: ["tools.html", "automation.html", "learning.html"],
        dataFiles: ["data/tools.js", "data/automation.js", "data/learning.js"],
        downloadFamilies: ["document-consistency-check.csv", "document-consistency-homework-template.md", "order-tracking-homework-template.md"],
        codexTasks: ["生成订单主数据表", "整理跟单节点看板", "检查 PI/CI/PL 字段冲突", "生成客户进度更新邮件"],
        manualChecks: ["生产计划、尾款和发货承诺需内部确认", "客户名称、合同号、收货人和付款信息已脱敏", "报关和银行要求由专业人员复核"],
        sampleOutput: "订单主数据、跟单看板、异常记录、单证冲突报告和客户进度说明。",
        classroomUse: "用于训练学员把报价后的工作转成节点、负责人和风险提示。",
        commercialUse: "适合企业内训说明团队协作价值，也能沉淀订单跟进工具需求。"
      },
      {
        id: "risk-repeat",
        label: "风险复购证据",
        stage: "M10-M11",
        score: 16,
        summary: "证明学员能把付款、DDP、清关、认证、售后、安装和复购机会拆成可复盘字段。",
        integratedHouseSample: "集成房屋场景包含 T/T、尾款、目的国清关、安装资料、售后反馈和老客户扩展采购提醒。",
        proofPages: ["automation.html", "tools.html", "learning.html"],
        dataFiles: ["data/automation.js", "data/tools.js", "data/learning.js"],
        downloadFamilies: ["payment-risk-homework-template.md", "assignment-review-scorecard.csv", "learner-final-review-template.md"],
        codexTasks: ["整理付款风险矩阵", "生成 DDP 风险提醒", "输出售后回访字段", "生成复购提醒和客户维护草稿"],
        manualChecks: ["银行、法务、信保、报关和税务判断必须专业复核", "客户投诉和赔付信息不得公开", "复购承诺不能替代真实库存和交期确认"],
        sampleOutput: "付款风险矩阵、内部审批清单、售后回访表和复购提醒字段。",
        classroomUse: "用于结课阶段说明 Codex 在风险识别和复盘中的边界。",
        commercialUse: "可引导成熟业务员和老板关注流程管理价值，而不是只看单次文案生成。"
      },
      {
        id: "full-portfolio",
        label: "完整成果包证据",
        stage: "Final",
        score: 20,
        summary: "证明学员最终拿到的是一套可复用的外贸 Codex 工作流资产，而不是零散聊天记录。",
        integratedHouseSample: "以集成房屋为完整样例，串联产品资料、客户开发、询盘报价、订单单证、风险复购和展示复盘。",
        proofPages: ["learning.html", "enrollment.html", "playbook.html"],
        dataFiles: ["data/learning.js", "data/enrollment.js", "data/playbook.js"],
        downloadFamilies: ["learner-portfolio-packaging.csv", "learner-final-review-template.md", "enrollment-outcome-proof-board.csv"],
        codexTasks: ["汇总成果目录", "整理页面证据", "生成结课 Brief", "输出返修清单和后续使用计划"],
        manualChecks: ["优秀作业公开前必须脱敏和授权", "不能把课堂样例包装成真实成交案例", "成果必须能对应真实业务输入和复用路径"],
        sampleOutput: "六组结课成果包、页面路线、验收证据、授权边界、下一步业务使用计划。",
        classroomUse: "用于结课验收、公开课收尾和课程顾问说明学完能拿到什么。",
        commercialUse: "这是招生转化的核心证据，能降低学员对“只是提示词课”的顾虑。"
      },
      {
        id: "enterprise-sop",
        label: "企业 SOP 证据",
        stage: "Enterprise",
        score: 19,
        summary: "证明个人作业可以升级为团队 SOP、岗位责任、验收标准和轻量工具需求。",
        integratedHouseSample: "以一条集成房屋样板业务线说明业务、跟单、单证、财务、主管在客户、报价、订单和单证中的责任边界。",
        proofPages: ["enterprise.html", "playbook.html", "learning.html"],
        dataFiles: ["data/enterprise.js", "data/playbook.js", "data/learning.js"],
        downloadFamilies: ["enterprise-training-plan-mapper.csv", "enterprise-service-delivery-plan.csv", "enterprise-project-acceptance-checklist.md"],
        codexTasks: ["整理岗位流程", "生成 SOP 草案", "拆分验收证据", "识别工具化需求和企业服务范围"],
        manualChecks: ["企业授权、资料权限和项目范围必须确认", "不能承诺系统范围、开发周期和自动成交", "企业负责人需确认岗位责任和验收标准"],
        sampleOutput: "企业流程诊断摘要、岗位 SOP 草案、训练计划、验收证据和工具需求清单。",
        classroomUse: "用于说明优秀个人成果如何进入团队训练和企业服务。",
        commercialUse: "适合企业诊断和内训汇报，但必须先确认 scope、授权和交付边界。"
      }
    ],
    displayUses: [
      {
        id: "teacher-review",
        label: "老师验收",
        score: 8,
        audience: "主讲老师、助教、班主任",
        purpose: "判断作业是否达到结课标准，并生成返修任务。",
        scriptAngle: "先看业务输入，再看工具输出、验收证据和人工确认点。",
        cta: "进入作业返修或结课复盘。"
      },
      {
        id: "enrollment-proof",
        label: "招生咨询",
        score: 11,
        audience: "潜在学员、试听课观众、课程顾问",
        purpose: "证明课程交付的是业务工作流资产，而不是单次聊天答案。",
        scriptAngle: "用脱敏样例展示学完后能节省哪些重复整理、检查和生成动作。",
        cta: "进入报名路径或提交脱敏样例做匹配。"
      },
      {
        id: "enterprise-report",
        label: "企业汇报",
        score: 10,
        audience: "企业负责人、业务主管、培训负责人",
        purpose: "说明岗位训练、流程复用、工具需求和下一阶段服务建议。",
        scriptAngle: "把证据放到团队责任、交付验收和 SOP 更新里说明。",
        cta: "进入企业诊断或项目复盘。"
      },
      {
        id: "public-showcase",
        label: "公开展示",
        score: 7,
        audience: "私域社群、公开课、官网访客",
        purpose: "展示课程方法和工具产出，但不泄露真实商业资料。",
        scriptAngle: "只展示结构、字段、流程和学习前后变化，不展示敏感细节。",
        cta: "查看课程体系、案例中心或资源下载。"
      }
    ],
    readinessLevels: [
      {
        id: "draft",
        label: "初稿待返修",
        score: 2,
        status: "返修",
        rule: "只可用于内部点评，不可用于公开展示、招生证据或企业汇报。",
        repair: "补业务输入、字段完整度、页面证据、下载资产和人工确认人。"
      },
      {
        id: "reviewed",
        label: "已通过验收",
        score: 7,
        status: "内部可用",
        rule: "可用于老师点评、结课复盘和咨询时的结构说明。",
        repair: "公开前仍需二次脱敏，并确认展示范围。"
      },
      {
        id: "showcase-ready",
        label: "可展示候选",
        score: 10,
        status: "展示候选",
        rule: "可进入招生或公开展示审核，但必须保留脱敏和授权记录。",
        repair: "补展示授权、不可公开字段清单、撤回机制和页面证据。"
      },
      {
        id: "authorized",
        label: "已授权展示",
        score: 13,
        status: "可展示",
        rule: "已获得学员或企业授权，可按授权范围进入试听课、报名页或企业说明会。",
        repair: "持续记录展示版本、授权范围和撤回机制。"
      },
      {
        id: "blocked",
        label: "暂缓展示",
        score: -6,
        status: "暂缓",
        rule: "存在敏感资料、证据不足、口径夸大或授权缺失，必须停止对外使用。",
        repair: "先完成脱敏、授权、复核和风险关闭，再重新进入展示审核。"
      }
    ],
    audienceModes: [
      {
        id: "learner",
        label: "学员本人",
        score: 4,
        focus: "看懂自己哪里达标、哪里返修、后续怎么在真实业务中继续用。",
        proofQuestion: "我能不能用这套成果处理下一个客户、询盘、报价或订单？",
        owner: "学员 + 助教"
      },
      {
        id: "consultant",
        label: "课程顾问",
        score: 6,
        focus: "用真实输出回应报名顾虑，讲清学完交付物和边界。",
        proofQuestion: "这个样例能不能让潜在学员看懂课程价值？",
        owner: "课程顾问 + 班主任"
      },
      {
        id: "teacher",
        label: "授课老师",
        score: 5,
        focus: "判断证据是否适合课堂演示、作业点评和标准化验收。",
        proofQuestion: "这个样例是否能讲清业务输入、Codex 操作和人工确认边界？",
        owner: "主讲老师 + 助教"
      },
      {
        id: "enterprise-manager",
        label: "企业负责人",
        score: 7,
        focus: "看团队是否能复用，岗位责任和后续工具/SOP 需求是否清楚。",
        proofQuestion: "这份证据能不能变成团队训练、SOP 或工具需求？",
        owner: "企业负责人 + 项目负责人"
      },
      {
        id: "public",
        label: "公开访客",
        score: 3,
        focus: "只看结构化成果和方法，不接触真实客户、价格、合同和内部审批。",
        proofQuestion: "公开版本是否足够清楚，同时不泄露任何敏感信息？",
        owner: "运营负责人 + 合规复核人"
      }
    ],
    boundaryModes: [
      {
        id: "internal-only",
        label: "仅内部",
        penalty: 0,
        rule: "只给老师、助教、学员或企业内部复盘使用。",
        masking: "仍需隐藏客户、成本、合同、付款、联系方式和内部审批。",
        approval: "班主任或项目负责人确认即可。"
      },
      {
        id: "sanitized",
        label: "脱敏展示",
        penalty: 1,
        rule: "可展示结构、字段、流程和学习变化，但不展示可识别信息。",
        masking: "用行业、国家、角色、样例编号和模拟金额替代敏感字段。",
        approval: "运营负责人检查脱敏记录，必要时补学员确认。"
      },
      {
        id: "authorized-public",
        label: "授权公开",
        penalty: 0,
        rule: "已获得明确授权，可按记录范围用于公开课、报名页、社群或企业说明。",
        masking: "保留授权范围、展示版本、撤回机制和不可公开字段清单。",
        approval: "学员或企业授权人签字确认。"
      },
      {
        id: "high-compliance",
        label: "高合规风险",
        penalty: 10,
        rule: "涉及真实合同、付款、争议、客户隐私、企业内部审批或法务敏感内容。",
        masking: "默认不公开，除非完成专业复核、书面授权和展示版本锁定。",
        approval: "企业负责人、法务/财务/合规角色和项目负责人共同确认。"
      }
    ],
    nextActions: [
      {
        id: "repair-homework",
        label: "作业返修",
        score: 3,
        action: "生成返修清单，要求补业务输入、缺失字段、人工确认人、脱敏记录和复核证据。",
        route: ["classroom.html", "learning.html"],
        businessValue: "提升结课通过率，减少老师和助教重复解释。"
      },
      {
        id: "package-portfolio",
        label: "打包成果包",
        score: 5,
        action: "把样例放入基础资料包、客户开发包、询盘报价包、订单单证包、风险复购包或展示复盘包。",
        route: ["learning.html", "resources.html"],
        businessValue: "让学员结课时有完整成果目录和后续复用路径。"
      },
      {
        id: "use-in-consultation",
        label: "用于咨询证据",
        score: 8,
        action: "整理为课程顾问可讲的展示 Brief，配合报名页、试听课和资源下载入口使用。",
        route: ["enrollment.html", "marketing.html"],
        businessValue: "降低“只是提示词课”“不知道学完拿到什么”的报名顾虑。"
      },
      {
        id: "enterprise-diagnosis",
        label: "转企业诊断",
        score: 7,
        action: "判断是否能升级为团队 SOP、岗位训练、企业内训或工具共建需求。",
        route: ["enterprise.html", "playbook.html"],
        businessValue: "把优秀个人成果转成企业服务线索和项目验收证据。"
      },
      {
        id: "route-to-tool-sprint",
        label: "进入工具 Sprint",
        score: 6,
        action: "把高频重复操作、返修痛点和手动检查点记录到工具产品化与 Sprint 指挥台。",
        route: ["tools.html", "automation.html", "playbook.html"],
        businessValue: "为后续工具开发提供真实需求和验收样例。"
      },
      {
        id: "hold-authorization",
        label: "等待授权",
        score: 1,
        action: "暂停展示，只保留内部复盘记录，完成脱敏、授权、风险复核后再决定用途。",
        route: ["playbook.html", "learning.html"],
        businessValue: "避免展示口径、资料安全和商业承诺风险。"
      }
    ],
    operatingRules: [
      "证据样例必须能追溯到业务输入、Codex 输出、页面证据、下载资产和人工确认边界。",
      "没有真实业务输入、没有脱敏记录、没有授权范围或只有通用文案的内容，不进入招生展示。",
      "集成房屋案例是第一套公开演示样例，学员真实资料只能在脱敏和授权后作为补充证据。",
      "Codex 可以整理、生成、检查和导出 Brief，但展示许可、商业承诺、企业权限和专业判断必须人工确认。",
      "每次公开课、报名页或企业汇报使用证据前，都要重新检查版本、授权、敏感字段和禁止承诺边界。"
    ]
  },
  portfolioBriefBuilder: {
    title: "学员成果展示 Brief 生成器",
    description: "把结课成果包按展示用途、证据成熟度和授权范围打包成可复制 brief，方便老师验收、课程顾问咨询、企业汇报和后续服务识别。",
    exportFilename: "learner-portfolio-brief-output.md",
    defaults: {
      learnerSegment: "experienced-sales",
      packageFocus: "inquiry-quote",
      displayUse: "enrollment-proof",
      evidenceLevel: "reviewed",
      displayScope: "sanitized-public",
      nextGoal: "course-upgrade"
    },
    learnerSegments: [
      {
        id: "newcomer",
        label: "外贸新人",
        story: "从没有结构化资料，到能整理产品、识别询盘和建立基础客户跟进表。",
        proofNeed: "重点证明学员能把零散资料变成表格、清单和下一步动作。",
        reviewer: "班主任 + 助教",
        risk: "不要把基础练习包装成成熟业务能力或真实成交案例。"
      },
      {
        id: "experienced-sales",
        label: "成熟业务员",
        story: "把已有经验沉淀成可复用字段、模板、报价检查和订单跟进工作流。",
        proofNeed: "重点证明学员能减少重复整理、降低漏项风险并保留人工确认点。",
        reviewer: "主讲老师 + 助教",
        risk: "不要公开真实利润、客户条件、底价、供应商和未授权客户信息。"
      },
      {
        id: "manager",
        label: "主管 / 老板",
        story: "把个人经验和岗位动作整理成团队 SOP、交付标准和新人上手路径。",
        proofNeed: "重点证明成果能被团队复用，并能说明岗位责任和审批边界。",
        reviewer: "课程负责人 + 企业负责人",
        risk: "不要让展示结果绕开企业审批、权限和内部资料管理制度。"
      },
      {
        id: "enterprise-trainee",
        label: "企业内训学员",
        story: "把企业样板产品或样板订单转成岗位训练、工具输出和阶段验收证据。",
        proofNeed: "重点证明企业资料已经脱敏、岗位可执行、验收证据明确。",
        reviewer: "企业项目负责人 + 授课老师",
        risk: "未经企业授权不得把内训成果用于公开招生或案例宣传。"
      }
    ],
    packageFocuses: [
      {
        id: "foundation",
        label: "基础资料成果",
        packageNames: ["基础资料包"],
        headline: "把产品资料整理成后续客户开发、询盘和报价都能复用的基础工作台。",
        evidenceAsk: "需要展示产品字段、待补资料、人工确认人和脱敏规则。",
        pageRoute: ["learning.html", "case-integrated-house.html", "resources.html"]
      },
      {
        id: "customer-development",
        label: "客户开发成果",
        packageNames: ["客户开发包"],
        headline: "把目标客户、线索字段和跟进节奏整理成可持续开发的客户工作流。",
        evidenceAsk: "需要展示客户画像、A/B/C 分级、下一步动作和开发信角度。",
        pageRoute: ["tools.html", "prompts.html", "learning.html"]
      },
      {
        id: "inquiry-quote",
        label: "询盘报价成果",
        packageNames: ["询盘与报价包"],
        headline: "从原始询盘拆出已知需求、缺失信息、报价前问题和人工确认的费用项。",
        evidenceAsk: "需要展示询盘识别表、报价前补问、FOB/CIF 费用项和报价边界。",
        pageRoute: ["case-integrated-house.html", "tools.html", "course.html"]
      },
      {
        id: "order-docs",
        label: "订单单证成果",
        packageNames: ["订单与单证包"],
        headline: "把 PI、订单节点、CI/PL 和出货前检查统一到订单主数据里。",
        evidenceAsk: "需要展示订单主数据、节点看板、单证一致性检查和异常记录。",
        pageRoute: ["tools.html", "automation.html", "learning.html"]
      },
      {
        id: "risk-repeat",
        label: "风险复购成果",
        packageNames: ["风险与复购包"],
        headline: "把付款、清关、认证、售后和复购机会拆成可复盘的风险与跟进字段。",
        evidenceAsk: "需要展示风险矩阵、内部审批清单、售后反馈和复购提醒字段。",
        pageRoute: ["automation.html", "tools.html", "learning.html"]
      },
      {
        id: "full-portfolio",
        label: "完整结课工具包",
        packageNames: ["基础资料包", "客户开发包", "询盘与报价包", "订单与单证包", "风险与复购包", "展示与复盘包"],
        headline: "把 7 个核心作业整理成 6 组可复用成果包，形成个人或团队工作流资产。",
        evidenceAsk: "需要展示成果目录、来源作业、返修记录、工具入口、指令入口和下一步业务使用计划。",
        pageRoute: ["learning.html", "enrollment.html", "playbook.html"]
      }
    ],
    displayUses: [
      {
        id: "teacher-review",
        label: "结课验收",
        audience: "老师、助教、班主任",
        purpose: "判断学员是否达到结课交付标准，并标出返修任务。",
        cta: "进入结课复盘，补齐缺失字段和人工确认点。",
        outputFormat: "验收摘要 + 返修清单 + 下一步业务使用计划。"
      },
      {
        id: "enrollment-proof",
        label: "招生咨询证据",
        audience: "潜在学员、试听课观众、课程顾问",
        purpose: "证明课程交付的是业务工作流资产，不是聊天记录或零散提示词。",
        cta: "查看报名路径或提交一份脱敏业务样例做匹配。",
        outputFormat: "成果故事 + 页面证据 + 可展示边界 + 报名 CTA。"
      },
      {
        id: "enterprise-report",
        label: "企业内训汇报",
        audience: "企业负责人、业务主管、培训负责人",
        purpose: "说明岗位训练输出、团队复用价值和下一阶段工具/SOP 建议。",
        cta: "进入企业项目复盘，确认是否扩展到第二条产品线或工具原型。",
        outputFormat: "岗位成果 + 验收证据 + 企业责任 + 下一阶段建议。"
      },
      {
        id: "personal-workbench",
        label: "个人工作台复盘",
        audience: "学员本人、直属主管",
        purpose: "帮助学员把结课成果变成后续真实业务中可继续维护的工作台。",
        cta: "选择下一封询盘、下一个客户或下一张订单继续复用。",
        outputFormat: "个人成果目录 + 复用路径 + 维护节奏 + 风险边界。"
      }
    ],
    evidenceLevels: [
      {
        id: "draft",
        label: "初稿待返修",
        status: "需要返修",
        rule: "只可用于内部点评，不可用于公开展示或招生证据。",
        repair: "补真实业务输入、字段完整度、人工确认人和脱敏记录。"
      },
      {
        id: "reviewed",
        label: "已通过验收",
        status: "可内部展示",
        rule: "可用于结课复盘、老师点评和咨询时的结构说明。",
        repair: "公开前仍需再次脱敏，并确认学员或企业授权范围。"
      },
      {
        id: "showcase-ready",
        label: "可展示候选",
        status: "可进入展示审核",
        rule: "可作为招生证据候选，但必须完成脱敏、授权和展示边界记录。",
        repair: "补展示授权说明、不可公开字段清单和对应页面证据。"
      }
    ],
    displayScopes: [
      {
        id: "internal-only",
        label: "仅内部验收",
        rule: "仅用于老师、助教和学员本人复盘，不进入公开案例、社群展示或招生材料。",
        masking: "仍需隐藏客户、价格、合同、成本和联系方式。"
      },
      {
        id: "sanitized-public",
        label: "脱敏公开展示",
        rule: "可公开展示结构、字段和学习过程，但不展示真实客户、价格、成本、合同和内部审批。",
        masking: "用行业、国家、角色和样例编号替代可识别信息。"
      },
      {
        id: "authorized-case",
        label: "授权案例展示",
        rule: "已获得学员或企业明确授权，可用于试听课、报名页、公开课或企业说明会。",
        masking: "授权范围、撤回机制和展示版本必须有记录。"
      }
    ],
    nextGoals: [
      {
        id: "repair",
        label: "作业返修",
        nextAction: "生成返修任务清单，学员按缺失字段、边界和脱敏问题补交。",
        route: ["classroom.html", "learning.html"],
        businessValue: "提高结课通过率，减少助教重复点评。"
      },
      {
        id: "course-upgrade",
        label: "报名转化证据",
        nextAction: "把脱敏成果转成试听课结尾或私域咨询的页面证据。",
        route: ["enrollment.html", "marketing.html"],
        businessValue: "帮助潜在学员看清学完能拿到什么。"
      },
      {
        id: "enterprise-service",
        label: "企业服务线索",
        nextAction: "判断成果是否能升级为团队 SOP、企业内训或轻量工具原型。",
        route: ["enterprise.html", "playbook.html"],
        businessValue: "从优秀个人作业识别企业内训和工具共建需求。"
      },
      {
        id: "tool-demand",
        label: "工具需求沉淀",
        nextAction: "把高频返修问题和重复操作记录到工具需求评分台。",
        route: ["tools.html", "automation.html"],
        businessValue: "把作业痛点转成下一批工具开发依据。"
      }
    ]
  },
  applicationReviewDownloads: [
    {
      label: "下载应用复盘路由 CSV",
      href: "./downloads/learner-application-review-router.csv",
      format: "CSV",
      note: "用于结课后 7/30/90 天判断真实业务使用、证据质量、卡点和下一步去向。"
    },
    {
      label: "下载应用复盘 Brief 模板 MD",
      href: "./downloads/learner-application-review-brief-template.md",
      format: "Markdown",
      note: "用于记录学员真实使用证据、返修原因、工具需求、企业线索和人工确认边界。"
    }
  ],
  applicationReviewRouter: {
    title: "学员真实业务应用复盘路由器",
    summary:
      "结课后按真实使用信号、证据质量、使用卡点和下一步去向，判断学员应进入个人继续使用、课程返修、工具 Sprint、招生证据或企业诊断。",
    exportFilename: "learner-application-review-brief-output.md",
    defaults: {
      usageSignal: "real-inquiry",
      evidenceQuality: "partial",
      useBarrier: "missing-product-data",
      nextDestination: "personal-workspace",
      reviewWindow: "day-7"
    },
    usageSignals: [
      {
        id: "real-inquiry",
        label: "已用于真实询盘",
        score: 22,
        action: "保留询盘输入、工具输出、改动记录和对外发送前的人工确认点。",
        routePages: ["learning.html", "tools.html", "case-integrated-house.html"],
        codexTasks: ["整理询盘使用摘要", "对比原始输入和工具输出变化", "生成下一封询盘复用计划"],
        manualGate: "学员确认客户事实、报价前问题和对外发送内容。"
      },
      {
        id: "quotation-order",
        label: "已用于报价或订单",
        score: 24,
        action: "进入人工复核和工具 refinement，重点检查价格、费用、交期、付款和单证字段。",
        routePages: ["tools.html", "automation.html", "learning.html"],
        codexTasks: ["抽取报价或订单字段", "生成缺失项和返修清单", "沉淀工具需求样例"],
        manualGate: "负责人确认价格条款、交期、付款、认证、合同和单证责任。"
      },
      {
        id: "shared-team",
        label: "已分享给团队",
        score: 26,
        action: "判断是否具备团队 SOP、企业内训、轻量工具或企业诊断线索。",
        routePages: ["enterprise.html", "playbook.html", "tools.html"],
        codexTasks: ["把个人工作流映射为团队 SOP", "整理企业诊断线索 Brief", "列出岗位责任和权限边界"],
        manualGate: "团队负责人确认授权、资料范围、复用岗位和决策人。"
      },
      {
        id: "not-used",
        label: "暂未真实使用",
        score: 8,
        action: "安排 7 天小动作，选择下一封询盘、下一个客户或下一张订单做低风险复用。",
        routePages: ["learning.html", "prompts.html", "resources.html"],
        codexTasks: ["生成 7 天行动计划", "整理下一次真实业务输入清单", "生成使用提醒话术"],
        manualGate: "学员选择真实业务任务，并确认仍有联系许可。"
      }
    ],
    evidenceQualities: [
      {
        id: "verified",
        label: "已验证真实使用",
        score: 24,
        status: "可进入成果证据候选",
        rule: "已有脱敏截图、表格、沟通记录或业务输出，可进入展示审核。",
        repair: "补授权范围、不可公开字段和展示版本。"
      },
      {
        id: "partial",
        label: "只有部分记录",
        score: 14,
        status: "需要补证据",
        rule: "可用于内部复盘，不可直接作为公开成果证据。",
        repair: "补原始业务输入、工具输出、人工改动和下一步动作。"
      },
      {
        id: "none",
        label: "没有证据",
        score: 4,
        status: "继续跟进",
        rule: "只能生成使用计划，不得宣称业务效果或课程成果。",
        repair: "选择下一次真实业务任务，并建立证据收集表。"
      },
      {
        id: "sensitive",
        label: "敏感或未授权",
        score: -12,
        status: "内部保留",
        rule: "暂停公开展示，只能内部复盘和脱敏处理。",
        repair: "完成数据脱敏、授权确认和展示边界复核。"
      }
    ],
    useBarriers: [
      {
        id: "missing-product-data",
        label: "产品资料不完整",
        score: 12,
        fix: "回到产品资料工作台，补规格、图片、包装、认证、MOQ、价格条件和常见问题。",
        owner: "学员 + 助教",
        routePages: ["learning.html", "case-integrated-house.html", "resources.html"]
      },
      {
        id: "no-real-inquiry",
        label: "还没有真实询盘",
        score: 10,
        fix: "选择客户开发或模拟询盘作低风险练习，同时约定下一次真实询盘复盘时间。",
        owner: "学员 + 班主任",
        routePages: ["prompts.html", "learning.html", "resources.html"]
      },
      {
        id: "manual-boundary",
        label: "不清楚人工边界",
        score: -8,
        fix: "先做人工确认边界辅导，明确 AI 可整理、可生成、可检查，但不能替代报价、承诺和审批。",
        owner: "主讲老师 + 助教",
        routePages: ["classroom.html", "learning.html", "playbook.html"]
      },
      {
        id: "team-approval",
        label: "需要团队审批",
        score: 16,
        fix: "生成团队审批 Brief，确认资料范围、岗位责任、复用权限和企业服务入口。",
        owner: "学员主管 + 企业负责人",
        routePages: ["enterprise.html", "playbook.html", "tools.html"]
      }
    ],
    nextDestinations: [
      {
        id: "personal-workspace",
        label: "个人继续使用",
        score: 14,
        decisionBias: "continue",
        nextAction: "生成 30 天复用计划，并约定下一次真实业务复盘点。",
        businessValue: "提高学员真实使用率，减少结课后工具包闲置。"
      },
      {
        id: "course-repair",
        label: "课程返修",
        score: 16,
        decisionBias: "repair",
        nextAction: "把卡点写回课程模块、助教点评和作业返修清单。",
        businessValue: "把真实使用问题转成课程迭代证据。"
      },
      {
        id: "tool-sprint",
        label: "工具 Sprint",
        score: 20,
        decisionBias: "repair",
        nextAction: "把高频重复、字段漏项和人工检查点转成工具需求 Brief。",
        businessValue: "为后续可复用工具开发提供真实验收样例。"
      },
      {
        id: "enterprise-service",
        label: "企业诊断",
        score: 24,
        decisionBias: "enterprise",
        nextAction: "确认决策人、团队岗位、资料权限和企业诊断会时间。",
        businessValue: "把个人优秀成果升级为企业内训、SOP 或工具共建线索。"
      },
      {
        id: "outcome-proof",
        label: "招生证据候选",
        score: 22,
        decisionBias: "proof",
        nextAction: "生成脱敏成果证据 Brief，交由负责人审核是否进入试听课或报名页。",
        businessValue: "用真实学习后应用证据回答“学完能用在哪里”。"
      }
    ],
    reviewWindows: [
      {
        id: "day-7",
        label: "结课后 7 天",
        focus: "确认是否已经启动一次真实使用，优先解决资料缺口和边界不清。",
        nextCheck: "7 天内再复盘一次具体业务动作。"
      },
      {
        id: "day-30",
        label: "结课后 30 天",
        focus: "确认工具包是否进入稳定业务流程，判断是否能转为成果证据、工具需求或企业线索。",
        nextCheck: "30 天后检查复用频率、团队反馈和新增需求。"
      },
      {
        id: "day-90",
        label: "结课后 90 天",
        focus: "判断是否形成长期工作台、复购服务、企业扩展或课程案例沉淀。",
        nextCheck: "进入季度复盘和企业续约/扩展判断。"
      }
    ],
    decisions: [
      {
        id: "proof",
        label: "成果证据候选",
        threshold: "82+，且证据已验证并选择招生证据候选",
        detail: "进入成果证据审核，完成脱敏、授权、展示口径和禁止承诺复核后，才可用于招生或公开课。"
      },
      {
        id: "enterprise",
        label: "企业诊断线索",
        threshold: "78+，且有团队使用或企业服务去向",
        detail: "进入企业诊断入口，确认决策人、资料权限、岗位范围和可被团队复用的 SOP 或工具需求。"
      },
      {
        id: "repair",
        label: "课程 / 工具返修",
        threshold: "64+，但卡点来自课程、工具或人工边界",
        detail: "进入课程返修或工具 Sprint，先修复字段、流程和边界，再安排下一轮真实使用复盘。"
      },
      {
        id: "continue",
        label: "个人继续使用",
        threshold: "64+，但暂无公开证据或企业线索",
        detail: "生成 30 天个人复用计划，把下一次真实询盘、报价、订单或客户开发作为复盘对象。"
      },
      {
        id: "hold",
        label: "内部保留",
        threshold: "敏感、未授权或低于 64",
        detail: "不进入公开展示或企业销售，只保留内部复盘、脱敏处理和下一次跟进计划。"
      }
    ],
    operatingRules: [
      "结课后应用复盘必须先问真实业务使用，再问证据质量，最后才判断能否招生展示或企业转化。",
      "没有证据、未脱敏、未授权或含敏感客户信息的内容，不允许进入公开课、报名页或销售话术。",
      "Codex 可以整理复盘摘要、生成计划、输出工具需求和企业线索 Brief，但真实业务事实、对外内容、价格交期付款和授权必须人工确认。",
      "个人学员成果优先服务真实使用；只有证据充分且边界清楚时，才进入成果证据或企业诊断。",
      "复盘结论必须回写到课程、工具、资源、招生证据或企业服务入口，避免结课后数据断层。"
    ]
  },
  commonFixes: [
    {
      issue: "作业看起来完整，但没有真实业务场景",
      fix: "要求学员补充产品、客户类型、国家、数量、贸易术语或订单节点。"
    },
    {
      issue: "输出结果太像文案，不能变成工具",
      fix: "改成表格字段、检查清单、状态列、负责人和下一步动作。"
    },
    {
      issue: "学员把 AI 结果当成最终报价或承诺",
      fix: "回到人工确认边界，让学员标出成本、运费、交期、付款和认证确认人。"
    },
    {
      issue: "行业和集成房屋差异较大",
      fix: "先保留业务结构，再替换产品参数、客户类型、报价费用项和单证字段。"
    }
  ],
  learnerBoundaries: [
    "学员可以用 Codex 整理、生成、检查和复盘，但不能把输出直接当成最终商业结论。",
    "所有对外发送的邮件、报价、PI、合同、单证和承诺，必须由学员或企业授权岗位确认。",
    "提交作业时必须保护客户、价格、成本、合同和联系方式等敏感信息。",
    "最终工具包是个人或团队的工作流资产，不是自动成交系统。",
    "优秀作业用于公开展示前，必须脱敏并获得学员或企业授权。"
  ]
};
