window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.course = {
  id: "foreign-trade-codex-automation",
  title: "外贸业务 Codex 自动化实战课",
  tagline: "把重复劳动交给工具，把时间留给客户开发和成交推进。",
  promise:
    "学员围绕一个完整出口案例，搭建客户开发、询盘回复、报价测算、订单跟进、单证检查和风险提示工作台。",
  deliveryMetrics: [
    {
      value: "5",
      label: "业务主线",
      detail: "客户开发、询盘、报价、订单、风险控制按外贸流程推进。"
    },
    {
      value: "12",
      label: "课程模块",
      detail: "每个模块都有业务痛点、案例场景、操作步骤、输出物和作业。"
    },
    {
      value: "7",
      label: "核心作业包",
      detail: "产品资料、客户库、询盘表、报价表、订单看板、单证检查表和付款风险矩阵。"
    },
    {
      value: "1",
      label: "完整主案例",
      detail: "集成房屋出口项目贯穿课堂讲解和工具演示。"
    }
  ],
  learningPath: [
    {
      stage: "01",
      title: "先统一工作台",
      focus: "建立课程目录、数据脱敏规则和产品资料表。",
      output: "学员能把自己的产品资料整理成后续所有模块可复用的基础数据。"
    },
    {
      stage: "02",
      title: "再跑通业务流",
      focus: "按客户开发、询盘、报价、订单和单证顺序完成课堂演示。",
      output: "学员看到一个出口订单如何从客户线索一路进入交付和风险检查。"
    },
    {
      stage: "03",
      title: "把作业变成工具",
      focus: "把高频字段、模板和检查清单沉淀成客户库、报价器和单证表。",
      output: "学员拿到可复制到自己行业的工具化输出物。"
    },
    {
      stage: "04",
      title: "最后做复盘升级",
      focus: "检查输出质量、人工确认边界和后续工具维护方式。",
      output: "学员知道哪些可以自动化，哪些必须由业务、主管或专业人员确认。"
    }
  ],
  classroomPlan: [
    {
      stage: "课前",
      title: "准备输入资料",
      teacherAction: "确认本节课使用的产品资料、询盘、报价表或单证样例是否脱敏。",
      studentAction: "准备自己的产品参数、客户问题或历史表格。",
      output: "课堂输入资料包"
    },
    {
      stage: "演示",
      title: "先用集成房屋案例跑一遍",
      teacherAction: "按页面展示原始输入、Codex 操作、输出结果和风险边界。",
      studentAction: "记录字段结构和可替换部分。",
      output: "课堂演示结果"
    },
    {
      stage: "替换",
      title: "学员替换成自己的业务场景",
      teacherAction: "指导学员把案例字段替换成自己的产品、客户、报价或单证字段。",
      studentAction: "完成个人或团队版本的作业。",
      output: "个人业务工作流"
    },
    {
      stage: "验收",
      title: "检查输出物和人工确认点",
      teacherAction: "按验收标准检查输出是否真实、完整、可复用。",
      studentAction: "修正虚构信息、缺失字段和不清楚的风险边界。",
      output: "可交付作业版本"
    }
  ],
  cohortPlannerDownloads: [
    {
      label: "下载开班交付排期表 CSV",
      href: "./downloads/course-cohort-delivery-plan.csv",
      format: "CSV",
      note: "用于系统课、陪跑班、公开课转正和企业内训的开班排期、角色分工和作业验收。"
    },
    {
      label: "下载开班交付 Brief 模板 MD",
      href: "./downloads/course-cohort-brief-template.md",
      format: "Markdown",
      note: "用于招生付款前确认、班主任开班、老师备课、助教验收和企业交付交接。"
    }
  ],
  cohortPlanner: {
    title: "开班交付排期台",
    description:
      "把课程产品、班型节奏、学员资料状态和风险等级组合成可执行开班方案，避免招生承诺、课堂交付、作业验收和企业服务脱节。",
    exportFilename: "course-cohort-delivery-brief-output.md",
    defaults: {
      offerTrack: "system-course",
      cadence: "six-week",
      learnerReadiness: "has-product",
      deliveryRisk: "normal-boundary",
      nextAction: "assign-prework"
    },
    offerTracks: [
      {
        id: "free-preview",
        label: "免费预习 / 公开课",
        score: 5,
        fit: "适合还在观望、只想先判断课程是否实用的外贸人或企业负责人。",
        promise: "只交付自测、样例、10 分钟演示和课程路径判断。",
        deliverables: ["重复劳动自测", "集成房屋样例", "询盘识别演示", "下一步咨询问题"],
        owner: "市场运营 + 课程顾问",
        boundary: "免费资料和公开课不承诺学完即成交、自动找客户或自动报价。",
        pageRoute: ["resources.html", "marketing.html", "enrollment.html"]
      },
      {
        id: "system-course",
        label: "个人系统实战课",
        score: 9,
        fit: "适合已有产品、询盘、报价或跟单痛点，希望系统搭建个人外贸工作台的学员。",
        promise: "交付 12 个模块、集成房屋完整案例、工具演示、作业返修和结课工具包。",
        deliverables: ["产品资料工作台", "客户开发字段库", "询盘识别表", "报价检查表", "订单看板", "单证检查表", "付款风险矩阵"],
        owner: "主讲老师 + 助教 + 班主任",
        boundary: "系统课训练方法和输出物，不承诺询盘数量、成交结果或替代最终业务判断。",
        pageRoute: ["course.html", "classroom.html", "learning.html"]
      },
      {
        id: "coaching-pack",
        label: "作业陪跑与行业替换包",
        score: 8,
        fit: "适合已报名或已结课，但需要把集成房屋样例替换到自己行业的学员。",
        promise: "围绕一个主推产品完成资料补齐、作业返修、展示版本和工具需求沉淀。",
        deliverables: ["行业替换字段表", "作业返修记录", "展示授权版本", "工具需求清单"],
        owner: "助教负责人 + 内容负责人",
        boundary: "陪跑帮助完成资料和输出，不替代学员提供真实成本、客户判断、合同或合规结论。",
        pageRoute: ["learning.html", "cases.html", "prompts.html"]
      },
      {
        id: "enterprise-training",
        label: "企业团队内训",
        score: 8,
        fit: "适合企业已有产品、团队岗位和流程痛点，希望统一 SOP、指令库和工具字段。",
        promise: "先确认资料权限，再围绕企业样板产品做岗位训练、作业验收和 SOP/工具共建建议。",
        deliverables: ["企业资料清单", "岗位训练任务", "团队指令库", "内训复盘报告", "SOP/工具需求"],
        owner: "企业服务负责人 + 主讲老师",
        boundary: "企业内训不替代企业报价审批、法务合规、财务判断、客户最终承诺或团队管理决策。",
        pageRoute: ["enterprise.html", "classroom.html", "playbook.html"]
      }
    ],
    cadences: [
      {
        id: "two-week",
        label: "2 周体验冲刺",
        score: 5,
        duration: "2 周",
        rhythm: "每周 1 次公开课/小班课 + 1 次作业返修。",
        bestFor: "试听转化、资料预习、询盘识别和报价结构入门。",
        modules: ["M0", "M4", "M6"],
        requiredRoles: ["课程顾问", "主讲老师", "助教"],
        schedule: [
          { week: "W0", focus: "入班与资料准备", modules: "M0", classroom: "工作台、脱敏和产品资料表", homework: "提交产品资料和一封询盘", evidence: "预习清单和资料状态", route: ["resources.html", "learning.html"] },
          { week: "W1", focus: "询盘识别演示", modules: "M4", classroom: "集成房屋询盘识别和回复草稿", homework: "拆解自己的询盘", evidence: "询盘识别表", route: ["case-integrated-house.html", "tools.html"] },
          { week: "W2", focus: "报价结构与咨询转化", modules: "M6", classroom: "FOB/CIF 费用项和 DDP 边界", homework: "报价确认清单", evidence: "报价结构草稿", route: ["course.html", "enrollment.html"] }
        ]
      },
      {
        id: "four-week",
        label: "4 周密集实战",
        score: 7,
        duration: "4 周",
        rhythm: "每周 1 次正课 + 1 次作业点评，适合已有资料的个人学员。",
        bestFor: "快速完成客户开发、询盘、报价、订单和风险边界的核心输出。",
        modules: ["M0-M3", "M4-M6", "M7-M9", "M10-M11"],
        requiredRoles: ["主讲老师", "助教", "班主任"],
        schedule: [
          { week: "W0", focus: "开班与资料确认", modules: "M0", classroom: "产品资料、脱敏、学习目标", homework: "产品资料表", evidence: "入班资料清单", route: ["learning.html", "resources.html"] },
          { week: "W1", focus: "客户开发系统", modules: "M1-M3", classroom: "客户画像、线索库、开发信", homework: "20 条线索和 3 封开发信", evidence: "客户开发包", route: ["course.html", "prompts.html"] },
          { week: "W2", focus: "询盘与报价", modules: "M4-M6", classroom: "询盘识别、产品资料、报价结构", homework: "询盘识别表和报价检查表", evidence: "询盘报价包", route: ["case-integrated-house.html", "tools.html"] },
          { week: "W3", focus: "订单与单证", modules: "M7-M9", classroom: "PI、订单看板、单证一致性", homework: "订单主数据和单证规则", evidence: "订单单证包", route: ["course.html", "learning.html"] },
          { week: "W4", focus: "风险与结课打包", modules: "M10-M11", classroom: "付款风险、售后复购、成果展示", homework: "结课工具包和返修清单", evidence: "结课作品集", route: ["learning.html", "enrollment.html"] }
        ]
      },
      {
        id: "six-week",
        label: "6 周系统交付",
        score: 9,
        duration: "6 周",
        rhythm: "每周 1 次正课 + 1 次助教点评 + 1 次运营提醒，适合正式系统课。",
        bestFor: "完整跑通 12 个模块、7 个作业包和结课成果展示。",
        modules: ["M0", "M1-M3", "M4-M5", "M6-M8", "M9-M10", "M11"],
        requiredRoles: ["主讲老师", "助教", "班主任", "课程运营"],
        schedule: [
          { week: "W0", focus: "入班准备", modules: "M0", classroom: "工作台、产品资料、脱敏规则", homework: "产品资料表和资料缺口", evidence: "基础资料包", route: ["learning.html", "resources.html"] },
          { week: "W1", focus: "客户开发", modules: "M1-M3", classroom: "客户画像、线索库、开发信", homework: "客户画像、线索库、跟进序列", evidence: "客户开发包", route: ["course.html", "prompts.html"] },
          { week: "W2", focus: "询盘与产品资料", modules: "M4-M5", classroom: "询盘识别、报价前补问、产品参数", homework: "询盘识别表和产品 FAQ", evidence: "询盘资料包", route: ["case-integrated-house.html", "tools.html"] },
          { week: "W3", focus: "报价与订单", modules: "M6-M8", classroom: "FOB/CIF、PI、订单看板", homework: "报价结构和订单主数据", evidence: "报价订单包", route: ["course.html", "tools.html"] },
          { week: "W4", focus: "单证与风险", modules: "M9-M10", classroom: "单证一致性、付款、DDP、合规", homework: "单证检查规则和付款风险矩阵", evidence: "风险控制包", route: ["tools.html", "playbook.html"] },
          { week: "W5", focus: "售后复购与作品集", modules: "M11", classroom: "安装资料、售后回访、结课展示", homework: "结课工具包和展示授权判断", evidence: "最终作品集", route: ["learning.html", "cases.html"] },
          { week: "W6", focus: "结课复盘与升级", modules: "复盘", classroom: "优秀作业、返修、工具需求、企业升级", homework: "下一步工具或企业诊断需求", evidence: "复盘 Brief", route: ["enrollment.html", "enterprise.html"] }
        ]
      },
      {
        id: "enterprise-workshop",
        label: "企业 3 阶段内训",
        score: 8,
        duration: "2-4 周",
        rhythm: "诊断、样板课、岗位作业验收三段推进，可按企业资料成熟度延长。",
        bestFor: "团队 SOP、岗位训练、企业样板产品和工具共建前置。",
        modules: ["诊断", "样板课", "岗位作业", "复盘"],
        requiredRoles: ["企业负责人", "企业服务负责人", "主讲老师", "助教"],
        schedule: [
          { week: "S1", focus: "企业诊断", modules: "诊断", classroom: "访谈、资料清单、流程痛点和权限确认", homework: "企业提交脱敏产品、询盘、报价或订单样例", evidence: "诊断 Brief", route: ["enterprise.html", "playbook.html"] },
          { week: "S2", focus: "样板产品课", modules: "M0-M6", classroom: "把集成房屋换成企业产品，跑客户、询盘和报价", homework: "岗位作业初稿", evidence: "企业样板课输出", route: ["classroom.html", "course.html"] },
          { week: "S3", focus: "岗位作业验收", modules: "M7-M10", classroom: "业务、跟单、单证、主管分别验收输出", homework: "岗位 SOP 和返修任务", evidence: "内训验收表", route: ["learning.html", "tools.html"] },
          { week: "S4", focus: "SOP/工具共建建议", modules: "复盘", classroom: "沉淀工具字段、SOP 更新和后续版本范围", homework: "确认下一阶段范围", evidence: "企业交付复盘", route: ["enterprise.html", "playbook.html"] }
        ]
      }
    ],
    learnerReadiness: [
      {
        id: "sample-only",
        label: "仅用课堂样例",
        score: 2,
        status: "学员还没有可脱敏产品、询盘或订单资料。",
        prework: "先用集成房屋样例跑通，再要求课后补个人资料。",
        support: "发放产品资料模板、询盘样例和脱敏说明。",
        risk: "不能让学员现场编造客户、价格、认证或订单。"
      },
      {
        id: "has-product",
        label: "已有产品资料",
        score: 6,
        status: "学员有产品参数、图片、配置或常见问题，但询盘和报价资料不完整。",
        prework: "先补产品主数据，再进入客户开发、询盘和报价。",
        support: "助教检查产品资料缺口、敏感字段和人工确认人。",
        risk: "认证、防火、抗风、价格和交期必须回到真实资料。"
      },
      {
        id: "has-inquiry",
        label: "已有询盘/报价",
        score: 8,
        status: "学员能提交近期询盘、报价表或订单字段，适合正课替换实操。",
        prework: "入班前脱敏一份询盘和一份报价字段表。",
        support: "助教先做资料脱敏和缺失字段检查。",
        risk: "客户名、联系方式、成本、利润、合同和内部审批不得公开。"
      },
      {
        id: "team-ready",
        label: "企业团队资料齐备",
        score: 7,
        status: "企业能提供样板产品、多岗位参与人和脱敏业务样例。",
        prework: "先确认授权范围、岗位责任和验收标准。",
        support: "按业务、跟单、单证、主管分组准备材料。",
        risk: "企业资料不得进入公开课、招生页或通用工具测试样例。"
      }
    ],
    deliveryRisks: [
      {
        id: "normal-boundary",
        label: "常规边界",
        score: 7,
        warning: "课程可正常开班，仍需在报价、认证、付款和单证处强调人工确认。",
        check: "开班确认单、作业提交规则、人工边界说明。"
      },
      {
        id: "material-gap",
        label: "资料缺口明显",
        score: 3,
        warning: "学员资料不足时，先降低承诺，只保证样例练习和资料补齐路径。",
        check: "预习资料、缺失字段表、助教补课安排。"
      },
      {
        id: "public-proof-risk",
        label: "公开展示风险",
        score: 1,
        warning: "学员作业或企业样例未授权前，不能进入公开课、招生页或社群展示。",
        check: "脱敏记录、授权范围、展示版本和撤回机制。"
      },
      {
        id: "enterprise-private",
        label: "企业内部资料",
        score: 2,
        warning: "只能用于企业项目内部，需确认权限、岗位责任和验收边界。",
        check: "企业授权、资料权限、项目范围、审批责任人。"
      }
    ],
    nextActions: [
      {
        id: "open-class",
        label: "进入公开课",
        score: 4,
        action: "把排期压缩成 10-20 分钟高频痛点演示，并接资源领取或咨询。",
        route: ["marketing.html", "resources.html"],
        owner: "市场运营 + 主讲老师"
      },
      {
        id: "assign-prework",
        label: "布置课前资料",
        score: 6,
        action: "生成入班资料清单、脱敏说明和第一周作业要求。",
        route: ["learning.html", "resources.html"],
        owner: "班主任 + 助教"
      },
      {
        id: "confirm-enrollment",
        label: "确认报名承诺",
        score: 6,
        action: "输出付款前确认口径、交付范围、作业边界和不承诺事项。",
        route: ["enrollment.html", "playbook.html"],
        owner: "课程顾问 + 班主任"
      },
      {
        id: "assistant-review",
        label: "进入助教验收",
        score: 7,
        action: "把每周作业拆成助教检查项、返修规则和优秀作业入库判断。",
        route: ["classroom.html", "learning.html"],
        owner: "助教负责人"
      },
      {
        id: "enterprise-diagnosis",
        label: "转企业诊断",
        score: 8,
        action: "生成企业资料清单、访谈问题、岗位责任和内训/工具共建判断。",
        route: ["enterprise.html", "playbook.html"],
        owner: "企业服务负责人"
      },
      {
        id: "tool-sprint",
        label: "沉淀工具 Sprint",
        score: 7,
        action: "把排期中重复出现的作业字段和检查规则转入工具规格。",
        route: ["tools.html", "automation.html", "playbook.html"],
        owner: "产品负责人"
      }
    ],
    operatingRules: [
      "招生承诺只能讲课程交付物、作业验收和工具辅助，不能承诺成交、询盘数量、报价准确率或企业业绩。",
      "开班前必须确认学员资料状态；没有资料的学员先用集成房屋样例，不能现场编造业务数据。",
      "公开课、招生页和资源中心只使用集成房屋教学样例或已授权展示材料。",
      "企业内训必须先确认授权、岗位责任、资料边界和验收标准，再替换企业真实资料。",
      "每周课后要把高频返修、优秀作业、工具需求和招生顾虑回写到课堂、学员、工具、指令或运营指南。"
    ]
  },
  deliveryBlueprintDownloads: [
    {
      label: "下载课程模块交付蓝图 CSV",
      href: "./downloads/course-delivery-blueprint.csv",
      format: "CSV",
      note: "用于老师备课、助教验收和后续课程模块扩展。"
    },
    {
      label: "下载单节课执行模板 MD",
      href: "./downloads/lesson-runbook-template.md",
      format: "Markdown",
      note: "用于把任意一节课整理成可直播、可复盘、可交接的执行脚本。"
    }
  ],
  deliveryBlueprint: [
    {
      module: "M0",
      title: "课程导入与外贸 Codex 工作台搭建",
      classObjective: "让学员先建立文件、字段、脱敏和人工确认规则，避免后续课程只停留在聊天。",
      teacherCue: "先展示一个混乱的业务文件夹，再切到标准工作台目录，说明课程交付物会持续沉淀。",
      codexDemo: "让 Codex 根据产品资料生成文件夹结构、字段表和敏感信息脱敏提醒。",
      learnerTask: "用自己的产品建立课程工作台，并标记客户、价格、成本、合同等不可公开资料。",
      acceptance: "能提交产品资料表、目录截图和脱敏说明，且人工确认字段清楚。",
      template: "工作台目录模板 / 产品资料表 / 脱敏规则",
      frequentIssue: "学员会急着写提示词，老师要拉回到业务资料和字段标准。"
    },
    {
      module: "M1",
      title: "集成房屋目标市场与客户画像",
      classObjective: "让学员从应用场景出发拆客户，而不是从邮箱和平台列表开始。",
      teacherCue: "用集成房屋的工地营地、矿业营地、经销商和政府项目展示客户差异。",
      codexDemo: "输入产品用途和目标国家，让 Codex 输出客户类型、痛点、资格判断字段和报价前问题。",
      learnerTask: "为自己的产品拆出 3 类目标客户，并写出每类客户的采购动机和筛选字段。",
      acceptance: "客户类型具体，能连接到询盘、报价和后续跟进动作。",
      template: "客户画像表 / 市场初筛表",
      frequentIssue: "客户画像过泛，例如只写进口商、批发商，需要追问使用场景和采购角色。"
    },
    {
      module: "M2",
      title: "客户线索库与跟进系统",
      classObjective: "把客户信息变成可筛选、可跟进、可复盘的业务资产。",
      teacherCue: "先讲为什么线索库不是通讯录，再展示 A/B/C 分级和下一步动作字段。",
      codexDemo: "把模拟客户信息转成线索库字段，并生成优先级、跟进理由和下一步动作。",
      learnerTask: "整理至少 20 条客户线索，补齐来源、国家、客户类型、状态和下一步动作。",
      acceptance: "线索能按价值和紧急度排序，且跟进动作不是空泛提醒。",
      template: "客户线索库 / 跟进计划表",
      frequentIssue: "只收集邮箱不判断客户质量，需要补客户业务类型和匹配度。"
    },
    {
      module: "M3",
      title: "开发信与跟进话术库",
      classObjective: "让开发信基于客户场景和产品事实，而不是一封邮件群发所有人。",
      teacherCue: "对比通用开发信和按沙特建筑承包商定制的邮件，让学员看到差异。",
      codexDemo: "根据客户画像、产品卖点和限制条件生成首封邮件、三轮跟进和真实性检查表。",
      learnerTask: "为 3 类客户分别生成开发信和跟进序列，并标出不能承诺的内容。",
      acceptance: "邮件能说明客户场景、产品匹配点、下一步问题和真实边界。",
      template: "开发信序列 / 邮件真实性检查清单",
      frequentIssue: "邮件太像广告，老师要要求补客户场景、项目痛点和具体下一步。"
    },
    {
      module: "M4",
      title: "询盘识别与回复",
      classObjective: "训练学员先拆需求、缺失字段和风险点，再决定如何回复和是否报价。",
      teacherCue: "先问为什么不能直接给 80 套集成房屋报价，再展示配置、港口和贸易术语缺口。",
      codexDemo: "粘贴原始询盘，输出已知需求、缺失信息、报价前问题、风险提示和英文回复草稿。",
      learnerTask: "拆解一封自己的询盘，标出已知信息、缺失字段、补问问题和回复草稿。",
      acceptance: "能清楚说明哪些信息不足以报价，且回复没有虚构价格、库存和认证。",
      template: "询盘识别表 / 报价前确认清单",
      frequentIssue: "学员只要回复邮件，不做结构化表格，需要强制沉淀字段。"
    },
    {
      module: "M5",
      title: "产品资料、参数表和 B2B 页面优化",
      classObjective: "把复杂产品资料变成客户能判断、业务能复用、工具能读取的结构。",
      teacherCue: "展示集成房屋参数、选配、应用场景和 FAQ 如何同时服务页面、询盘和报价。",
      codexDemo: "根据产品资料生成英文参数表、FAQ、详情页结构和素材拍摄清单。",
      learnerTask: "补齐自己的产品参数表，并整理客户常问问题和可选配置字段。",
      acceptance: "参数来自真实资料，字段能被询盘、报价和单证模块继续复用。",
      template: "英文参数表 / 产品 FAQ / 素材清单",
      frequentIssue: "学员容易让 AI 编卖点，老师要要求所有参数回到真实资料。"
    },
    {
      module: "M6",
      title: "FOB/CIF/DDP 报价测算",
      classObjective: "让学员建立报价费用项和人工确认意识，减少漏算、错算和过度承诺。",
      teacherCue: "强调课堂数字只是结构演示，真实报价必须回到成本、装柜、汇率和运费确认。",
      codexDemo: "输入产品、数量、费用项和贸易术语，生成 FOB/CIF 报价结构和 DDP 风险提醒。",
      learnerTask: "用自己的产品完成一份 FOB/CIF 报价结构，并列出至少 5 个确认点。",
      acceptance: "费用项完整，报价边界清楚，DDP、清关和税费没有被自动承诺。",
      template: "报价测算表 / DDP 风险清单 / 报价邮件",
      frequentIssue: "学员想直接得到价格，老师要区分计算结构和真实商业确认。"
    },
    {
      module: "M7",
      title: "PI、合同和订单主数据",
      classObjective: "把报价结果转成统一订单主数据，减少 PI、合同、CI 和 PL 后续冲突。",
      teacherCue: "展示同一订单字段在报价、PI、CI、PL 中反复出现，说明主数据的重要性。",
      codexDemo: "从报价样例提取订单字段，生成 PI 字段清单、订单主数据和合同条款检查项。",
      learnerTask: "把一个报价样例转成订单主数据，补充图纸版本、配置和客户确认日期。",
      acceptance: "订单字段能被跟单看板和单证检查继续引用，关键条款有人工确认人。",
      template: "PI 字段表 / 订单主数据 / 合同条款检查清单",
      frequentIssue: "学员把 PI 当成普通文档编辑，需要拉回主数据源。"
    },
    {
      module: "M8",
      title: "生产、验货、装柜与订单跟进看板",
      classObjective: "让订单节点、负责人、异常和客户更新从聊天记录进入可维护看板。",
      teacherCue: "用墙板材料延误案例展示内部催办和对外说明不能混在一起。",
      codexDemo: "根据订单主数据生成节点看板、逾期提醒、内部催办和客户进度邮件。",
      learnerTask: "为 3 个订单建立看板样例，并写一封延期客户说明邮件。",
      acceptance: "节点有计划日期、负责人、状态和下一步动作，对外承诺前有内部确认。",
      template: "订单跟进看板 / 异常记录表 / 客户进度邮件",
      frequentIssue: "看板只有日期没有责任人，老师要补负责人和确认动作。"
    },
    {
      module: "M9",
      title: "出口单证与一致性检查",
      classObjective: "让学员理解单证不是最后填表，而是订单主数据一致性的结果。",
      teacherCue: "先展示 PI、CI、PL 数量和重量冲突，再演示如何从主数据复查。",
      codexDemo: "输入订单主数据和冲突样例，输出冲突字段、风险等级和修改说明。",
      learnerTask: "列出自己产品 CI/PL 关键字段，并设计 3 个单证冲突检查规则。",
      acceptance: "检查规则能发现数量、金额、品名、港口、重量和箱数冲突。",
      template: "CI/PL 字段表 / 单证一致性检查表",
      frequentIssue: "学员只关注格式，不检查数据来源，需要回到订单主数据。"
    },
    {
      module: "M10",
      title: "付款、信用、合规和风险边界",
      classObjective: "训练学员识别高风险付款、DDP、信用证、买家资信和合规问题。",
      teacherCue: "用 30% 定金、70% 到港后付款和 DDP 到项目现场说明成交越大边界越重要。",
      codexDemo: "根据付款要求生成风险矩阵、内部审批清单和谨慎客户回复。",
      learnerTask: "为一个客户付款要求写风险清单，并列出主管、财务、法务或信保确认点。",
      acceptance: "风险分级清楚，专业判断没有交给 Codex 直接结论化。",
      template: "付款风险矩阵 / 内部审批清单 / 客户回复",
      frequentIssue: "学员把风险提示写得像拒绝客户，老师要改成可继续推进的确认话术。"
    },
    {
      module: "M11",
      title: "售后、安装和复购",
      classObjective: "把交付后的安装、投诉、配件和复购机会纳入客户生命周期。",
      teacherCue: "提醒学员外贸订单不是出货结束，售后记录会反过来影响复购和案例沉淀。",
      codexDemo: "生成安装资料清单、售后反馈表、回访邮件和复购提醒字段。",
      learnerTask: "写一份售后回访流程，并设计老客户复购提醒字段。",
      acceptance: "售后问题有分类、责任人、处理状态和复购触发条件。",
      template: "安装资料清单 / 售后记录表 / 复购提醒表",
      frequentIssue: "学员只写回访邮件，老师要补售后字段和复购触发规则。"
    }
  ],
  moduleLinkageDownloads: [
    {
      label: "下载课程模块联动地图 CSV",
      href: "./downloads/course-module-linkage-map.csv",
      format: "CSV",
      note: "用于把每个课程模块对应到案例场景、工具输出、作业证据、招生口径和企业延伸。"
    },
    {
      label: "下载模块联动 Brief 模板 MD",
      href: "./downloads/course-module-linkage-brief-template.md",
      format: "Markdown",
      note: "用于老师备课、公开课脚本、顾问咨询证据和企业内训模块确认。"
    }
  ],
  moduleLinkageDesk: {
    title: "课程模块联动作战台",
    description:
      "选择一个课程模块后，直接看到集成房屋演示、关联工具/指令/下载、学员作业证据、招生讲法、企业服务延伸和人工确认边界。",
    exportFilename: "course-module-linkage-brief-output.md",
    defaults: {
      moduleId: "M4",
      teachingMode: "system-class",
      audienceMode: "experienced-sales",
      evidenceMode: "integrated-house-sample",
      nextAction: "assign-homework"
    },
    teachingModes: [
      {
        id: "system-class",
        label: "系统课正课",
        score: 9,
        focus: "完整讲清业务痛点、案例演示、Codex 操作、学员替换、作业验收和人工边界。",
        output: "课堂讲解脚本 + 学员作业任务 + 助教验收点。",
        owner: "主讲老师 + 助教"
      },
      {
        id: "public-demo",
        label: "公开课演示",
        score: 7,
        focus: "保留最能证明价值的业务动作，展示输入、输出和边界，不进入敏感真实资料。",
        output: "10-20 分钟演示脚本 + 咨询 CTA + 禁止承诺话术。",
        owner: "主讲老师 + 课程顾问"
      },
      {
        id: "homework-review",
        label: "作业点评",
        score: 6,
        focus: "对照标准样例检查学员字段、输出物、可复用性、脱敏和人工确认责任。",
        output: "返修清单 + 优秀作业入库判断 + 下一步工具需求。",
        owner: "助教 + 班主任"
      },
      {
        id: "enterprise-training",
        label: "企业内训",
        score: 8,
        focus: "把模块替换为企业主推产品或样板订单，明确岗位责任、资料权限和验收证据。",
        output: "企业模块脚本 + 岗位任务 + SOP/工具需求。",
        owner: "企业项目负责人 + 授课老师"
      },
      {
        id: "tool-sprint",
        label: "工具 Sprint",
        score: 5,
        focus: "把模块中的高频字段、重复动作和检查规则沉淀为工具规格、原型或测试样例。",
        output: "工具需求 brief + 字段定义 + 验收样例。",
        owner: "课程负责人 + 产品负责人"
      }
    ],
    audienceModes: [
      {
        id: "newcomer",
        label: "外贸新人",
        score: 4,
        concern: "不知道每节课学完要交什么，也担心不会替换到自己的产品。",
        proofNeed: "用简单字段和集成房屋样例展示从输入到输出的路径。",
        explanationStyle: "少讲系统概念，多给步骤、模板和通过标准。"
      },
      {
        id: "experienced-sales",
        label: "成熟业务员",
        score: 6,
        concern: "担心课程只是提示词，不能真正减少重复整理和漏项检查。",
        proofNeed: "展示工具输出、字段复用、报价/订单/单证风险减少。",
        explanationStyle: "强调经验沉淀、效率提升、人工确认和后续复用。"
      },
      {
        id: "manager",
        label: "主管 / 老板",
        score: 7,
        concern: "关心团队能否复制、能否培训新人、能否形成 SOP。",
        proofNeed: "展示岗位责任、验收证据、作业标准和工具化路线。",
        explanationStyle: "用管理语言说明流程统一、风险降低和团队交接。"
      },
      {
        id: "enterprise",
        label: "企业客户",
        score: 8,
        concern: "担心内训泛泛而谈，无法落到本企业资料、岗位和交付验收。",
        proofNeed: "展示企业资料替换、岗位任务、SOP 输出、工具需求和边界确认。",
        explanationStyle: "先诊断资料成熟度，再承诺培训范围和验收方式。"
      }
    ],
    evidenceModes: [
      {
        id: "integrated-house-sample",
        label: "集成房屋样例",
        score: 8,
        rule: "可作为第一套公开演示样例，用于系统课、公开课、工具测试和页面证据。",
        masking: "保留结构化字段和模拟业务信息，不包装成真实成交成果。"
      },
      {
        id: "learner-homework",
        label: "学员作业",
        score: 6,
        rule: "可用于内部点评和结课验收，公开前必须脱敏并确认授权范围。",
        masking: "隐藏客户、价格、成本、合同、付款、联系方式和内部审批。"
      },
      {
        id: "authorized-showcase",
        label: "授权展示",
        score: 10,
        rule: "可按授权范围用于试听课、报名页、社群案例或企业说明会。",
        masking: "保留授权记录、展示版本、撤回机制和不可公开字段清单。"
      },
      {
        id: "enterprise-internal",
        label: "企业内部",
        score: 4,
        rule: "只能用于企业项目内部复盘、内训验收、SOP 或工具需求确认。",
        masking: "不得进入公开课、招生页、社群或通用工具测试样例。"
      },
      {
        id: "repair-needed",
        label: "待返修",
        score: -3,
        rule: "证据不完整或边界不清，只能进入返修，不能用于公开展示和咨询证据。",
        masking: "先补业务输入、页面证据、字段来源、人工确认人和脱敏记录。"
      }
    ],
    nextActions: [
      {
        id: "assign-homework",
        label: "布置作业",
        score: 5,
        action: "把本模块输出转成学员作业任务、提交格式和助教验收清单。",
        route: ["learning.html", "classroom.html"],
        businessValue: "保证每节课都有可验收交付物。"
      },
      {
        id: "build-consultation-proof",
        label: "生成咨询证据",
        score: 7,
        action: "把本模块的输入、输出、工具和边界整理成课程顾问可讲的证据口径。",
        route: ["enrollment.html", "marketing.html"],
        businessValue: "回应学员报名前对课程效果和交付物的顾虑。"
      },
      {
        id: "enterprise-handoff",
        label: "转企业内训",
        score: 8,
        action: "判断本模块是否能替换为企业产品、订单或岗位流程，进入企业诊断和训练计划。",
        route: ["enterprise.html", "playbook.html"],
        businessValue: "把个人课程模块升级为团队训练或 SOP 服务。"
      },
      {
        id: "route-tool-sprint",
        label: "进入工具 Sprint",
        score: 6,
        action: "把本模块高频重复动作转成工具字段、交互原型和验收样例。",
        route: ["tools.html", "automation.html", "playbook.html"],
        businessValue: "让课程内容继续沉淀为可复用工具资产。"
      },
      {
        id: "update-resource",
        label: "更新资源包",
        score: 4,
        action: "把模块样例、作业模板、风险清单或指令片段回写到资源中心。",
        route: ["resources.html", "prompts.html"],
        businessValue: "让资源下载继续承接课程预习、招生线索和课后复盘。"
      }
    ],
    moduleRoutes: [
      {
        id: "M0",
        workflowStage: "基础工作台",
        caseScene: "用 20ft 可扩展集成房屋建立产品资料、课程目录、脱敏规则和人工确认字段。",
        linkedTools: ["产品资料成熟度检查", "资料脱敏清单", "工作台目录模板"],
        linkedPrompts: ["产品资料整理指令", "资料脱敏检查指令"],
        linkedDownloads: ["integrated-house-toolkit.csv", "product-profile-homework-template.md", "learner-preclass-sanitization-template.md"],
        learnerEvidence: "产品资料表、目录截图、脱敏说明、不可公开字段清单。",
        classroomScript: "先展示混乱资料，再展示标准工作台，让学员明白后续所有工具都依赖字段底座。",
        enrollmentProof: "证明课程从第一节开始交付业务资产，而不是只教聊天提示词。",
        enterpriseExtension: "可升级为企业资料目录规范、权限边界和团队数据治理培训。",
        codexTasks: ["生成目录结构", "整理产品字段", "标记敏感信息", "输出待补资料"],
        manualChecks: ["真实资料来源", "客户和价格脱敏", "认证和交期确认人"],
        pageRoute: ["course.html", "learning.html", "resources.html"]
      },
      {
        id: "M1",
        workflowStage: "客户画像",
        caseScene: "围绕沙特建筑承包商、矿业营地、经销商、政府项目和度假营地拆分集成房屋客户画像。",
        linkedTools: ["客户画像字段库", "目标市场初筛表", "客户资格判断表"],
        linkedPrompts: ["客户画像生成指令", "市场机会初筛指令"],
        linkedDownloads: ["lead-field-library.csv", "integrated-house-prompt-pack.md"],
        learnerEvidence: "3 类目标客户画像、采购动机、报价前问题和客户资格字段。",
        classroomScript: "先问产品能解决什么场景，再拆谁会采购，避免从邮箱列表开始找客户。",
        enrollmentProof: "回应“我不知道找什么客户”的顾虑，展示从产品到客户画像的路径。",
        enterpriseExtension: "可用于企业目标客户统一、销售分工和新人训练。",
        codexTasks: ["拆分客户类型", "提炼客户痛点", "生成资格字段", "输出报价前问题"],
        manualChecks: ["市场真实性", "当地规范", "客户触达合规"],
        pageRoute: ["course.html", "tools.html", "prompts.html"]
      },
      {
        id: "M2",
        workflowStage: "客户线索库",
        caseScene: "把沙特承包商、智利矿业公司、肯尼亚经销商等线索整理成 A/B/C 分级和下次动作。",
        linkedTools: ["客户线索分级", "跟进计划生成器", "客户库字段模板"],
        linkedPrompts: ["线索分级指令", "跟进动作生成指令"],
        linkedDownloads: ["lead-field-library.csv", "lead-followup-homework-template.md"],
        learnerEvidence: "至少 20 条线索、来源、国家、客户类型、状态、优先级和下一步动作。",
        classroomScript: "对比通讯录和可复盘客户库，说明跟进不是提醒日期，而是下一步业务动作。",
        enrollmentProof: "证明课程能把零散客户信息转成可持续开发的资产。",
        enterpriseExtension: "可升级为团队线索库字段、分配规则和跟进 SOP。",
        codexTasks: ["设计线索字段", "生成客户优先级", "输出跟进理由", "生成下一步动作"],
        manualChecks: ["客户真实性", "数据来源", "隐私和触达合规"],
        pageRoute: ["course.html", "tools.html", "learning.html"]
      },
      {
        id: "M3",
        workflowStage: "开发信序列",
        caseScene: "为沙特建筑承包商、矿业营地采购商和经销商分别生成不同切入角度的英文开发信。",
        linkedTools: ["开发信生成器", "跟进序列模板", "邮件真实性检查"],
        linkedPrompts: ["开发信指令", "三轮跟进指令", "邮件边界检查指令"],
        linkedDownloads: ["integrated-house-prompt-pack.md", "prompt-quality-checklist.csv"],
        learnerEvidence: "3 类客户开发信、3 轮跟进、真实性检查清单和不可承诺字段。",
        classroomScript: "先展示通用开发信为什么失败，再展示按客户场景生成的差异化邮件。",
        enrollmentProof: "证明 AI 不是批量套话，而是围绕客户场景和产品事实生成内容。",
        enterpriseExtension: "可升级为团队开发信话术库、审核规则和新人训练包。",
        codexTasks: ["生成首封邮件", "生成跟进序列", "检查空泛表达", "输出真实性检查"],
        manualChecks: ["不能虚构案例", "不能虚构认证", "遵守邮件发送规则"],
        pageRoute: ["course.html", "prompts.html", "marketing.html"]
      },
      {
        id: "M4",
        workflowStage: "询盘识别",
        caseScene: "沙特客户询问 80 套工地营地用集成房屋，要求 CIF Jeddah、卫浴、电气和保温配置。",
        linkedTools: ["询盘识别课堂演示器", "报价前补问清单", "英文回复草稿生成"],
        linkedPrompts: ["询盘拆解指令", "报价前问题指令", "英文回复边界检查"],
        linkedDownloads: ["demo-lesson-inquiry-analysis.md", "inquiry-analysis-homework-template.md"],
        learnerEvidence: "询盘识别表、已知需求、缺失字段、报价前问题、回复草稿和风险点。",
        classroomScript: "先问为什么不能直接报价，再演示如何拆已知信息、缺失字段和补问问题。",
        enrollmentProof: "最适合公开课展示，能快速证明课程会减少读询盘和漏问的重复劳动。",
        enterpriseExtension: "可升级为企业询盘分流 SOP、报价前资料清单和客服/业务协作规则。",
        codexTasks: ["提取已知需求", "列缺失字段", "生成补问问题", "生成英文回复"],
        manualChecks: ["价格", "库存", "认证", "交期", "DDP 和清关"],
        pageRoute: ["course.html", "case-integrated-house.html", "tools.html"]
      },
      {
        id: "M5",
        workflowStage: "产品资料优化",
        caseScene: "基于 20ft 可扩展集成房屋生成英文参数表、应用场景、可选配置、FAQ 和素材清单。",
        linkedTools: ["产品资料工作台", "英文参数表生成", "FAQ 和素材清单"],
        linkedPrompts: ["产品页面结构指令", "FAQ 生成指令", "素材清单指令"],
        linkedDownloads: ["integrated-house-toolkit.csv", "product-profile-homework-template.md"],
        learnerEvidence: "英文参数表、产品详情页结构、FAQ、客户常问问题和可选配置字段。",
        classroomScript: "讲清产品资料不是美化文案，而是后续询盘、报价、单证都能读取的字段底座。",
        enrollmentProof: "回应“我的产品复杂能不能用”的顾虑，展示复杂产品也能结构化。",
        enterpriseExtension: "可升级为企业产品主数据、B2B 页面标准和资料维护 SOP。",
        codexTasks: ["生成英文规格表", "整理应用场景", "生成 FAQ", "输出素材拍摄清单"],
        manualChecks: ["参数来源", "认证文件", "抗风防火", "交付能力"],
        pageRoute: ["course.html", "case-integrated-house.html", "resources.html"]
      },
      {
        id: "M6",
        workflowStage: "报价结构",
        caseScene: "为 80 套集成房屋建立 CIF Jeddah 报价结构，FOB/CIF 可计算，DDP 只做风险讨论。",
        linkedTools: ["FOB/CIF 报价测算器", "DDP 风险提醒", "报价邮件生成"],
        linkedPrompts: ["报价费用项检查指令", "报价邮件指令", "DDP 边界指令"],
        linkedDownloads: ["quotation-cost-checklist.csv", "quotation-calculation-homework-template.md"],
        learnerEvidence: "FOB/CIF 报价费用项、漏项提醒、报价邮件草稿和人工确认点。",
        classroomScript: "强调课堂数字是结构演示，真实报价必须回到成本、装柜、汇率和运费确认。",
        enrollmentProof: "回应“AI 能不能帮我报价”的顾虑，讲清能整理结构但不能替代最终报价。",
        enterpriseExtension: "可升级为企业报价费用项 SOP、审批流程和报价工具原型。",
        codexTasks: ["拆费用项", "检查漏项", "生成报价结构", "输出 DDP 风险"],
        manualChecks: ["成本", "利润", "装柜", "汇率", "海运", "有效期"],
        pageRoute: ["course.html", "tools.html", "automation.html"]
      },
      {
        id: "M7",
        workflowStage: "订单主数据",
        caseScene: "将沙特 80 套项目报价结果转成 PI 字段和订单主数据，记录图纸版本、配置和客户确认日期。",
        linkedTools: ["订单主数据表", "PI 字段清单", "合同条款检查"],
        linkedPrompts: ["订单字段提取指令", "PI 检查指令", "合同条款检查指令"],
        linkedDownloads: ["order-tracking-homework-template.md", "course-delivery-blueprint.csv"],
        learnerEvidence: "PI 字段、订单主数据、图纸版本、配置确认和关键条款人工确认人。",
        classroomScript: "展示同一字段如何贯穿报价、PI、CI、PL，说明主数据比单份文档更重要。",
        enrollmentProof: "证明课程能把报价后的订单执行也纳入工作台，不只停留在获客和文案。",
        enterpriseExtension: "可升级为企业订单主数据规范、岗位责任和单证协作 SOP。",
        codexTasks: ["提取订单字段", "生成 PI 字段清单", "整理主数据", "列合同检查项"],
        manualChecks: ["合同条款", "保修", "安装", "违约责任", "客户确认"],
        pageRoute: ["course.html", "tools.html", "learning.html"]
      },
      {
        id: "M8",
        workflowStage: "跟单看板",
        caseScene: "为 80 套集成房屋订单建立图纸、采购、生产、质检、订舱、装柜和出运节点看板。",
        linkedTools: ["订单跟进看板", "异常记录表", "客户进度邮件"],
        linkedPrompts: ["节点看板生成指令", "延期说明指令", "内部催办指令"],
        linkedDownloads: ["order-tracking-homework-template.md", "classroom-delivery-desk.csv"],
        learnerEvidence: "订单节点、计划日期、负责人、状态、异常记录和客户更新邮件。",
        classroomScript: "用材料延误案例区分内部催办和客户说明，提醒对外承诺前必须内部确认。",
        enrollmentProof: "证明课程能减少订单跟进混乱，适合成熟业务员和主管关注。",
        enterpriseExtension: "可升级为团队跟单看板、异常升级机制和客户沟通 SOP。",
        codexTasks: ["生成节点看板", "标记逾期", "生成内部催办", "生成客户说明"],
        manualChecks: ["真实交期", "生产计划", "尾款", "发货承诺"],
        pageRoute: ["course.html", "tools.html", "enterprise.html"]
      },
      {
        id: "M9",
        workflowStage: "单证一致性",
        caseScene: "构造 PI 数量 80、CI 数量 78、PL 毛重与订舱不一致等冲突，演示单证检查。",
        linkedTools: ["单证一致性检查器", "CI/PL 字段表", "冲突修正说明"],
        linkedPrompts: ["单证冲突检查指令", "修改说明指令", "风险等级判断指令"],
        linkedDownloads: ["document-consistency-check.csv", "document-consistency-homework-template.md"],
        learnerEvidence: "CI/PL 关键字段、冲突检查规则、风险等级和修正说明。",
        classroomScript: "强调单证不是最后填表，而是订单主数据一致性的结果。",
        enrollmentProof: "适合证明 Codex 能辅助检查重复字段和一致性风险，但不替代专业单证判断。",
        enterpriseExtension: "可升级为企业单证复核 SOP、出货前检查表和工具化规则。",
        codexTasks: ["比对 PI/CI/PL", "输出冲突字段", "生成风险等级", "生成修改说明"],
        manualChecks: ["HS 编码", "银行要求", "清关要求", "申报责任"],
        pageRoute: ["course.html", "tools.html", "automation.html"]
      },
      {
        id: "M10",
        workflowStage: "付款风险",
        caseScene: "客户要求 30% 定金、70% 到港后付款并希望 DDP 到项目现场，课程演示风险矩阵和审批清单。",
        linkedTools: ["付款风险矩阵", "DDP 风险清单", "内部审批清单"],
        linkedPrompts: ["付款风险分析指令", "谨慎回复指令", "内部审批指令"],
        linkedDownloads: ["payment-risk-homework-template.md", "assignment-review-scorecard.csv"],
        learnerEvidence: "付款风险清单、主管/财务/法务/信保确认点和谨慎客户回复。",
        classroomScript: "讲清风险提示不是拒绝客户，而是把高风险条件转成可继续推进的确认动作。",
        enrollmentProof: "回应“AI 会不会乱承诺”的顾虑，展示平台一直保留人工审批边界。",
        enterpriseExtension: "可升级为企业付款审批、信用评估和 DDP 风险 SOP。",
        codexTasks: ["生成风险矩阵", "列内部审批", "生成谨慎回复", "拆 DDP 风险"],
        manualChecks: ["银行", "法务", "信保", "合规", "财务审批"],
        pageRoute: ["course.html", "tools.html", "playbook.html"]
      },
      {
        id: "M11",
        workflowStage: "售后复购",
        caseScene: "为沙特工地营地项目设计到港、安装前、安装中、安装后 30 天和 90 天复购跟进流程。",
        linkedTools: ["安装资料清单", "售后反馈表", "复购提醒字段"],
        linkedPrompts: ["售后回访指令", "安装资料指令", "复购提醒指令"],
        linkedDownloads: ["learner-final-review-template.md", "payment-risk-homework-template.md"],
        learnerEvidence: "售后回访流程、安装资料清单、反馈记录和复购提醒字段。",
        classroomScript: "提醒学员订单不是出货结束，售后记录会反过来影响复购和案例沉淀。",
        enrollmentProof: "证明课程覆盖客户生命周期，不只做一次成交前沟通。",
        enterpriseExtension: "可升级为企业售后 SOP、客户成功流程和老客户复购机制。",
        codexTasks: ["生成安装清单", "设计反馈表", "生成回访邮件", "建立复购提醒"],
        manualChecks: ["安装责任", "投诉处理", "赔付", "库存交期", "复购承诺"],
        pageRoute: ["course.html", "learning.html", "enterprise.html"]
      }
    ],
    operatingRules: [
      "每个模块必须同时能说明业务痛点、集成房屋案例、Codex 操作、工具输出、学员作业和人工确认边界。",
      "公开课只使用集成房屋样例或已授权展示样例，不展示真实客户、成本、合同、付款和企业内部审批。",
      "课程顾问讲交付证据时，必须讲清工具能辅助整理、生成、检查和导出，但不能承诺自动成交或替代最终报价。",
      "企业内训必须先确认资料成熟度、岗位责任、授权范围和验收标准，再替换企业真实产品或订单。",
      "高频课堂卡点、作业返修和企业需求要回写到工具 Sprint、资源中心或运营指南，不能停留在临时聊天记录。"
    ]
  },
  homeworkRubric: [
    {
      criterion: "业务场景真实",
      pass: "作业必须来自真实产品、真实客户类型或脱敏业务样例。",
      fail: "只写通用 AI 提示词，没有外贸业务输入。"
    },
    {
      criterion: "字段结构完整",
      pass: "包含必填字段、负责人、状态、下一步动作和人工确认点。",
      fail: "只有一段文案，没有表格字段或可复用结构。"
    },
    {
      criterion: "输出物可复用",
      pass: "作业能在后续询盘、报价、订单或单证环节继续使用。",
      fail: "一次性结果，无法复制到下一个客户或订单。"
    },
    {
      criterion: "风险边界清楚",
      pass: "价格、交期、付款、认证、清关、税费、法务等事项标出人工确认人。",
      fail: "让 Codex 直接做最终承诺或虚构专业判断。"
    }
  ],
  teachingChecklist: [
    {
      title: "老师课前检查",
      items: ["本节案例输入是否脱敏", "页面数据是否和讲义一致", "下载资源是否可打开", "关键风险边界是否已标注"]
    },
    {
      title: "课堂讲解检查",
      items: ["先讲业务痛点再讲 Codex 操作", "展示输入到输出的全过程", "解释哪些字段可以替换", "提醒人工确认责任"]
    },
    {
      title: "课后验收检查",
      items: ["学员是否提交可复用表格", "作业是否关联自己的产品", "输出物是否能进入工具库", "是否留下下一步优化任务"]
    }
  ],
  tracks: [
    {
      id: "customer-development",
      title: "找客户",
      description: "从产品出发定义目标市场、客户画像、客户线索库和开发信系统。",
      modules: ["M1 客户画像", "M2 线索库", "M3 开发信"]
    },
    {
      id: "inquiry-response",
      title: "回询盘",
      description: "把客户询盘拆成需求表、缺失信息、报价前问题和回复草稿。",
      modules: ["M4 询盘识别", "M5 产品资料"]
    },
    {
      id: "quotation",
      title: "做报价",
      description: "建立 FOB/CIF/DDP 风险意识和费用项模型，减少漏算与错算。",
      modules: ["M6 报价测算"]
    },
    {
      id: "order-delivery",
      title: "跟订单",
      description: "把 PI、订单主数据、生产节点、装柜和客户进度更新纳入统一工作台。",
      modules: ["M7 订单主数据", "M8 跟单看板"]
    },
    {
      id: "risk-control",
      title: "查风险",
      description: "对单证、付款、DDP、合规和售后风险设置人工确认边界。",
      modules: ["M9 单证检查", "M10 风险边界", "M11 售后复购"]
    }
  ],
  modules: [
    {
      id: "M0",
      track: "基础准备",
      title: "课程导入与外贸 Codex 工作台搭建",
      goal: "搭建课程目录、数据脱敏规则和集成房屋产品基础资料表。",
      pain: "外贸团队常把客户、报价、订单、单证资料分散在不同文件和聊天记录里，新人难上手，经验难沉淀。",
      scenario: "以 20ft 可扩展集成房屋为课程样品，先建立产品资料、演示数据和文件夹结构。",
      steps: ["建立课程项目目录", "录入产品基础资料", "标注必须人工确认的字段", "说明 Codex 可做与不可做的边界"],
      deliverables: ["工作台目录", "产品资料表", "数据脱敏说明"],
      homework: ["用自己的产品补一份产品资料表", "删除或脱敏真实客户和报价信息"],
      risks: ["不要上传真实敏感客户资料", "不要让 Codex 虚构产品认证、交期或价格"]
    },
    {
      id: "M1",
      track: "找客户",
      title: "集成房屋目标市场与客户画像",
      goal: "从产品应用场景出发，拆分建筑承包商、矿业营地、经销商、政府项目和度假营地客户。",
      pain: "很多外贸开发从找邮箱开始，导致客户类型不清、开发角度单一、线索质量低。",
      scenario: "围绕沙特、智利、肯尼亚、菲律宾、澳洲等市场，拆分集成房屋项目客户画像。",
      steps: ["列出产品应用场景", "拆分 5 类 B2B 客户", "提炼每类客户痛点", "设计客户资格判断字段"],
      deliverables: ["客户画像表", "国家初筛表", "客户分级规则"],
      homework: ["为自己的产品拆 3 类目标客户", "写出每类客户的报价前确认问题"],
      risks: ["不把所有国家都视为同等机会", "当地建筑规范和许可必须由客户或当地专业人员确认"]
    },
    {
      id: "M2",
      track: "找客户",
      title: "客户线索库与跟进系统",
      goal: "把零散客户信息整理成可筛选、可跟进、可复盘的客户资产。",
      pain: "客户信息散在邮箱、表格、平台和聊天记录里，后续跟进靠记忆，容易漏掉高价值客户。",
      scenario: "整理 6 个模拟客户，包括沙特建筑承包商、智利矿业公司、肯尼亚经销商等。",
      steps: ["设计客户线索字段", "区分必填字段和增强字段", "设定 A/B/C 客户等级", "生成下一步跟进动作"],
      deliverables: ["客户线索库", "跟进计划表", "客户优先级规则"],
      homework: ["整理至少 20 条客户线索", "为 5 个客户写出下一步跟进动作"],
      risks: ["不做违规抓取", "不鼓励骚扰式群发", "客户隐私数据要脱敏"]
    },
    {
      id: "M3",
      track: "找客户",
      title: "开发信与跟进话术库",
      goal: "根据不同客户类型生成开发信、跟进信和唤醒邮件。",
      pain: "外贸开发信同质化严重，常常一封邮件群发所有客户，缺少客户场景相关性。",
      scenario: "为沙特建筑承包商、矿业营地采购商、经销商分别生成不同切入角度的英文开发信。",
      steps: ["输入客户画像和产品卖点", "生成首封开发信", "生成 3 轮跟进邮件", "检查邮件是否过度营销"],
      deliverables: ["开发信模板", "跟进序列", "邮件真实性检查清单"],
      homework: ["为 3 类客户各写一封开发信", "为一个未回复客户设计 3 次跟进"],
      risks: ["不承诺群发效果", "遵守邮件发送规则", "不能虚构案例、认证和交付能力"]
    },
    {
      id: "M4",
      track: "回询盘",
      title: "询盘识别与回复",
      goal: "把原始询盘拆成已知需求、缺失信息、报价前问题、风险点和回复草稿。",
      pain: "业务员容易看到询盘就急着报价，但集成房屋如果配置、项目地、贸易术语没确认，报价风险很高。",
      scenario: "沙特建筑承包商询问 80 套工地营地用集成房屋，要求 CIF Jeddah、卫浴、电气和保温配置。",
      steps: ["粘贴原始询盘", "提取已知需求", "列出缺失信息", "生成报价前问题", "生成英文回复草稿"],
      deliverables: ["询盘识别表", "报价前确认清单", "回复草稿"],
      homework: ["拆解一封自己的询盘", "标出哪些信息不足以直接报价"],
      risks: ["不能虚构价格、认证、库存、交期", "DDP 和清关要求必须谨慎处理"]
    },
    {
      id: "M5",
      track: "回询盘",
      title: "产品资料、参数表和 B2B 页面优化",
      goal: "把集成房屋复杂参数整理成客户看得懂的产品资料和 FAQ。",
      pain: "产品页面如果只堆图片和泛泛卖点，客户很难判断是否适合自己的项目。",
      scenario: "基于 20ft 可扩展集成房屋，生成英文参数表、应用场景、可选配置、FAQ 和素材清单。",
      steps: ["整理产品基础资料", "生成英文规格表", "生成 B2B 标题和详情页结构", "生成 FAQ 和素材拍摄清单"],
      deliverables: ["英文参数表", "产品详情页文案", "FAQ"],
      homework: ["补齐自己的产品参数表", "写出 10 个客户常问问题"],
      risks: ["参数只能来自真实资料", "不能虚构防火、抗风、抗雪或认证"]
    },
    {
      id: "M6",
      track: "做报价",
      title: "FOB/CIF/DDP 报价测算",
      goal: "建立集成房屋报价费用项模型，输出 FOB/CIF 报价并对 DDP 做风险提示。",
      pain: "集成房屋报价涉及选配、包装、装柜、海运、保险、汇率和目的港费用，漏算会直接影响利润。",
      scenario: "为 80 套集成房屋项目建立 CIF Jeddah 报价结构，DDP 只作为风险讨论。",
      steps: ["列出产品和选配费用", "加入国内费用和海运保险", "输出 FOB/CIF 结构", "生成 DDP 风险提醒"],
      deliverables: ["报价测算器", "DDP 风险提示", "报价邮件模板"],
      homework: ["用自己的产品完成一份 FOB/CIF 报价结构", "列出至少 5 个报价人工确认点"],
      risks: ["示例价格不代表真实报价", "装柜数量和海运必须实时确认", "DDP 不能直接承诺"]
    },
    {
      id: "M7",
      track: "跟订单",
      title: "PI、合同和订单主数据",
      goal: "把报价结果转成 PI 草稿和订单主数据，后续单证和跟单复用同一份数据。",
      pain: "报价、PI、合同、CI、PL 如果各自复制修改，后续非常容易出现数量、金额、配置不一致。",
      scenario: "将沙特 80 套项目报价结果转成 PI 字段和订单主数据，记录图纸版本、配置和客户确认日期。",
      steps: ["从报价中提取订单字段", "生成 PI 字段清单", "建立订单主数据", "生成合同条款检查清单"],
      deliverables: ["PI 模板", "订单主数据表", "合同条款检查清单"],
      homework: ["把一个报价样例转成订单主数据", "补充图纸版本和配置确认字段"],
      risks: ["不生成最终法律合同", "保修、安装、违约责任需负责人或法务确认"]
    },
    {
      id: "M8",
      track: "跟订单",
      title: "生产、验货、装柜与订单跟进看板",
      goal: "把图纸、采购、生产、质检、订舱、装柜和出运节点可视化。",
      pain: "订单跟进靠聊天记录和个人记忆，交期异常发现晚，对客户解释被动。",
      scenario: "为 80 套集成房屋订单建立节点看板，并模拟墙板材料延误后的内部催办和客户说明。",
      steps: ["设计订单节点", "录入计划日期和负责人", "标记逾期节点", "生成客户进度更新邮件"],
      deliverables: ["订单跟进看板", "异常记录表", "客户进度邮件"],
      homework: ["为 3 个订单建立看板样例", "写一封延期客户说明邮件"],
      risks: ["真实交期必须由供应链确认", "对外承诺前先完成内部确认"]
    },
    {
      id: "M9",
      track: "查风险",
      title: "出口单证与一致性检查",
      goal: "基于订单主数据生成 CI/PL 草稿，并检查 PI、CI、PL、订舱资料之间的冲突。",
      pain: "单证错误常来自前期主数据不统一，数量、重量、金额、品名、港口一旦冲突会影响清关和收款。",
      scenario: "构造 PI 数量 80、CI 数量 78、PL 毛重与订舱不一致等冲突，演示检查表如何发现问题。",
      steps: ["从订单主数据生成 CI/PL 字段", "录入冲突样例", "输出冲突字段和风险等级", "生成修改说明"],
      deliverables: ["CI 模板", "PL 模板", "单证一致性检查表"],
      homework: ["为自己的产品列出 CI/PL 关键字段", "设计 3 个单证冲突检查规则"],
      risks: ["HS 编码和申报由专业人员确认", "银行和目的国清关要求需人工复核"]
    },
    {
      id: "M10",
      track: "查风险",
      title: "付款、信用、合规和风险边界",
      goal: "建立付款条款、DDP、信用证、买家资信和合规人工确认机制。",
      pain: "大额项目如果付款结构、客户资信、DDP、信用证和合规边界不清，成交越大风险越大。",
      scenario: "客户希望 30% 定金、70% 到港后付款并要求 DDP 到项目现场，课程演示如何生成风险报告。",
      steps: ["分析付款条款", "列出买家资信问题", "识别 DDP 风险", "生成内部审批清单和客户回复"],
      deliverables: ["付款风险矩阵", "买家资信表", "DDP 风险清单"],
      homework: ["为一个客户付款要求写风险清单", "列出需要主管审批的条件"],
      risks: ["不替代银行审单、法务、信保和合规判断", "不绕过制裁和出口管制限制"]
    },
    {
      id: "M11",
      track: "查风险",
      title: "售后、安装和复购",
      goal: "把出货后的安装资料、售后反馈和复购维护纳入客户生命周期。",
      pain: "很多外贸订单出货后就结束跟进，安装问题、配件问题和复购机会没有系统记录。",
      scenario: "为沙特工地营地项目设计到港、安装前、安装中、安装后 30 天和 90 天复购跟进流程。",
      steps: ["生成安装资料清单", "设计售后反馈表", "生成回访邮件", "建立复购提醒节点"],
      deliverables: ["安装资料清单", "售后记录表", "复购提醒表"],
      homework: ["写一份售后回访流程", "设计老客户复购提醒字段"],
      risks: ["安装责任需在报价和合同阶段明确", "客户投诉处理必须经过负责人确认"]
    }
  ]
};
