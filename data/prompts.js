window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.promptMetrics = [
  {
    value: "10",
    label: "核心指令",
    detail: "覆盖产品资料、客户开发、询盘、报价、订单、单证和风险检查。"
  },
  {
    value: "6",
    label: "标准字段",
    detail: "每条指令都维护场景、输入、输出、工具、边界和质量检查。"
  },
  {
    value: "1",
    label: "主案例",
    detail: "全部优先围绕集成房屋出口案例演示，后续再替换行业。"
  },
  {
    value: "0",
    label: "最终承诺",
    detail: "价格、交期、认证、法务、税费和清关不由指令自动承诺。"
  }
];

window.TrainingPlatformData.promptWorkflow = [
  {
    stage: "01",
    title: "先给业务背景",
    input: "产品、客户类型、国家、贸易术语、订单阶段。",
    output: "Codex 能理解这是外贸业务问题，而不是通用写作任务。",
    teachingPoint: "提示词第一段必须交代真实业务场景。"
  },
  {
    stage: "02",
    title: "再限定输入资料",
    input: "产品参数、客户原文、报价字段、订单主数据或单证字段。",
    output: "模型只能基于已给资料整理，不把空白字段编成事实。",
    teachingPoint: "资料不足时要求输出缺失字段，而不是补故事。"
  },
  {
    stage: "03",
    title: "明确输出格式",
    input: "表格、清单、邮件草稿、风险矩阵、检查报告。",
    output: "学员拿到可复制到工具库或表格里的结构化结果。",
    teachingPoint: "课程交付物要能复用，不只是一段好看的文案。"
  },
  {
    stage: "04",
    title: "写清人工边界",
    input: "价格、交期、认证、付款、清关、税费、法务、合规。",
    output: "输出中自动标注必须人工确认的人和事项。",
    teachingPoint: "边界越清楚，工具越适合真实业务落地。"
  }
];

window.TrainingPlatformData.promptPacks = {
  overview: {
    title: "集成房屋课堂指令包",
    description:
      "把 10 条核心指令按课堂顺序组合成一套可复制训练包，老师可直接用于演示，学员可替换成自己的产品、客户和订单资料。",
    downloads: [
      {
        label: "下载集成房屋指令包 MD",
        href: "./downloads/integrated-house-prompt-pack.md",
        format: "Markdown",
        note: "包含课堂顺序、完整指令、替换字段和人工边界。"
      },
      {
        label: "下载指令质量检查表 CSV",
        href: "./downloads/prompt-quality-checklist.csv",
        format: "CSV",
        note: "用于老师备课、学员作业验收和指令库维护。"
      }
    ],
    setup: [
      "先准备产品资料、目标客户、原始询盘、报价字段、订单主数据和单证样例。",
      "每次演示只替换一个业务变量，避免同时改产品、国家、客户和贸易术语。",
      "所有输出先作为课堂草稿，正式报价、合同、单证和客户承诺必须人工确认。"
    ]
  },
  sequences: [
    {
      stage: "01",
      title: "课前产品主数据",
      promptIds: ["product-profile"],
      businessInput: "20ft 可扩展集成房屋的规格、配置、包装、装柜和认证资料。",
      expectedOutput: "产品基础资料采集表和人工确认字段。",
      classroomUse: "用于后续客户开发、询盘、报价、PI、CI、PL 复用同一套字段。"
    },
    {
      stage: "02",
      title: "客户开发与跟进",
      promptIds: ["customer-persona", "lead-follow-up", "development-email"],
      businessInput: "目标国家、客户类型、采购场景和客户线索表。",
      expectedOutput: "客户画像、A/B/C 分级、下一步动作、开发信和三轮跟进邮件。",
      classroomUse: "演示如何把找客户从零散搜索变成可记录、可筛选、可复盘的客户库。"
    },
    {
      stage: "03",
      title: "询盘识别与报价前确认",
      promptIds: ["inquiry-analysis"],
      businessInput: "沙特承包商 80 套集成房屋英文询盘和产品资料。",
      expectedOutput: "已知需求、缺失字段、补问问题、风险提醒和英文回复草稿。",
      classroomUse: "连接询盘识别工具，训练学员先补问再报价。"
    },
    {
      stage: "04",
      title: "报价、订单和单证",
      promptIds: ["quotation-model", "pi-order-master", "order-progress-update", "document-check"],
      businessInput: "成本、选配、数量、海运、付款条款、订单节点和单证字段。",
      expectedOutput: "FOB/CIF 报价结构、PI 字段、订单看板、单证一致性检查表。",
      classroomUse: "把一个项目从报价推进到订单交付和出货前检查。"
    },
    {
      stage: "05",
      title: "风险边界复盘",
      promptIds: ["risk-boundary"],
      businessInput: "DDP、认证、付款方式、目的港和售后责任等高风险问题。",
      expectedOutput: "风险矩阵、人工确认人和对客户的谨慎表达。",
      classroomUse: "作为每次课堂演示的最后一步，防止学员把 AI 草稿当最终承诺。"
    }
  ],
  qualityGates: [
    {
      gate: "业务场景",
      checks: ["是否说明产品、客户、国家、订单阶段", "是否能回到集成房屋案例或学员自己的产品"]
    },
    {
      gate: "输入资料",
      checks: ["是否列出已知资料", "是否要求未知字段标记为待确认", "是否避免让 Codex 自行补事实"]
    },
    {
      gate: "输出格式",
      checks: ["是否输出表格、清单、邮件草稿或检查报告", "是否能复制到工具、作业或企业诊断资料"]
    },
    {
      gate: "人工边界",
      checks: ["是否标明价格、交期、付款、认证、法务和清关边界", "是否说明由谁确认"]
    },
    {
      gate: "课堂复用",
      checks: ["是否有演示顺序", "是否能替换成其他行业", "是否有作业验收标准"]
    }
  ],
  commonFixes: [
    {
      problem: "指令太像通用写作任务",
      fix: "补上产品、客户类型、目标国家、贸易术语和订单阶段。"
    },
    {
      problem: "输出看起来完整但有虚构事实",
      fix: "要求未知信息必须标记为待确认，并单独输出缺失字段。"
    },
    {
      problem: "学员拿到结果后不知道如何落地",
      fix: "指定输出格式为字段表、检查表、邮件草稿或订单看板。"
    },
    {
      problem: "没有风险边界",
      fix: "强制每条指令输出人工确认人和不能自动承诺的事项。"
    }
  ]
};

window.TrainingPlatformData.promptComposer = {
  title: "外贸 Codex 指令组装器",
  description:
    "把业务场景、行业资料、输出格式和人工边界组合成一条可直接课堂演示、学员替换和作业验收的 Codex 指令。",
  defaults: {
    workflow: "inquiry-analysis",
    industry: "integrated-house",
    outputFormat: "table-email",
    boundaryMode: "strict",
    teachingMode: "classroom"
  },
  workflows: [
    {
      id: "product-profile",
      label: "产品资料主数据",
      module: "M0",
      businessContext: "课程开始前整理产品规格、配置、包装、认证、报价和单证字段。",
      task: "基于已给资料生成产品主数据表，标记缺失字段和必须人工确认的字段。",
      inputChecklist: ["产品名称与型号", "规格参数", "可选配置", "包装装柜", "认证与安装资料"],
      expectedOutputs: ["产品主数据表", "缺失字段清单", "人工确认字段"],
      linkedTool: "产品资料表",
      qualityGate: "输出字段必须能继续被报价、PI、CI、PL 和学员作业复用。"
    },
    {
      id: "customer-development",
      label: "客户开发与跟进",
      module: "M1-M3",
      businessContext: "从目标国家、客户类型和采购场景出发，建立客户画像和跟进动作。",
      task: "生成客户画像、A/B/C 优先级、开发信角度和三轮跟进邮件方向。",
      inputChecklist: ["目标国家", "客户类型", "采购场景", "客户线索", "最近沟通记录"],
      expectedOutputs: ["客户画像表", "线索分级", "开发信与跟进方向"],
      linkedTool: "客户线索库",
      qualityGate: "不得虚构客户背景、合作案例、认证、库存或成交概率。"
    },
    {
      id: "inquiry-analysis",
      label: "询盘识别与回复",
      module: "M4",
      businessContext: "客户发来采购询盘，业务员需要先拆需求、补问缺失信息，再决定是否报价。",
      task: "分析询盘，输出已知需求、缺失字段、报价前问题、风险提醒和英文回复草稿。",
      inputChecklist: ["客户原始询盘", "产品资料", "目标市场", "报价边界", "公司基础信息"],
      expectedOutputs: ["需求摘要", "缺失字段", "补问问题", "英文回复草稿"],
      linkedTool: "询盘识别工具",
      qualityGate: "客户问题和内部待确认事项要分开，未知内容必须标记为待确认。"
    },
    {
      id: "quotation-model",
      label: "报价测算与报价说明",
      module: "M6",
      businessContext: "业务员准备报价，需要整理费用项、贸易术语、利润口径和漏项风险。",
      task: "生成 FOB/CIF 报价结构、漏项检查表、报价说明和客户邮件草稿。",
      inputChecklist: ["产品成本", "选配费用", "数量", "目的港", "运费与保险", "目标利润"],
      expectedOutputs: ["费用项表", "报价说明", "漏项风险", "客户邮件草稿"],
      linkedTool: "报价测算器",
      qualityGate: "最终价格、汇率、运费有效期、利润和 DDP 承诺必须人工确认。"
    },
    {
      id: "order-document",
      label: "订单跟进与单证检查",
      module: "M7-M9",
      businessContext: "订单确认后，需要把 PI、订单主数据、生产节点、CI、PL 和订舱字段统一起来。",
      task: "生成订单主数据、节点看板、客户进度邮件和单证一致性检查表。",
      inputChecklist: ["PI 字段", "订单节点", "生产进度", "CI/PL 字段", "订舱资料"],
      expectedOutputs: ["订单看板", "客户进度邮件", "单证冲突表", "返修说明"],
      linkedTool: "订单跟进看板 / 单证一致性检查表",
      qualityGate: "所有出货、金额、重量、港口、HS Code 和报关信息必须回到真实资料确认。"
    },
    {
      id: "risk-boundary",
      label: "付款、DDP 与合规风险",
      module: "M10",
      businessContext: "客户提出 DDP、认证、付款、清关或售后要求，需要先识别不能由 Codex 自动承诺的事项。",
      task: "生成风险矩阵、内部确认人、客户谨慎表达和禁止自动承诺清单。",
      inputChecklist: ["贸易术语", "付款方式", "目标国家", "认证资料", "售后责任"],
      expectedOutputs: ["风险矩阵", "人工确认人", "客户沟通口径", "禁止承诺项"],
      linkedTool: "付款方式风险矩阵",
      qualityGate: "清关、税费、法务、认证、付款风险和当地合规不能由模型替代判断。"
    }
  ],
  industries: [
    {
      id: "integrated-house",
      label: "集成房屋出口",
      productContext: "20ft 可扩展集成房屋，沙特建筑承包商采购 80 套，用于工地住宿营地，目标港 Jeddah。",
      knownFields: ["产品规格", "配置选项", "装柜数量", "CIF Jeddah 场景", "DDP 风险"],
      missingFields: ["当地建筑许可", "防火/抗风/抗雪认证适用性", "最终运费", "HS Code", "DDP 清关税费"],
      boundary: "DDP、HS Code、认证、清关、建筑许可、付款和交期必须人工确认。"
    },
    {
      id: "machinery",
      label: "机械设备出口",
      productContext: "技术型 B2B 设备，客户关注型号、产能、电压、安装调试、备件、质保和售后范围。",
      knownFields: ["型号", "产能", "电压", "配置", "备件"],
      missingFields: ["工程师确认参数", "安装调试范围", "安全合规", "质保条款", "现场条件"],
      boundary: "技术承诺、安装调试、质保、安全合规和售后责任必须由工程师或管理层确认。"
    },
    {
      id: "furniture-materials",
      label: "家具建材定制",
      productContext: "批量定制订单，客户关注尺寸、材质、颜色、包装、打样、验货、装柜和生产节点。",
      knownFields: ["尺寸", "材质", "颜色", "包装", "打样"],
      missingFields: ["样品确认", "验货标准", "色差范围", "包装强度", "装柜方案"],
      boundary: "材质、色差、样品确认、验货标准和包装强度必须由客户或工厂确认。"
    },
    {
      id: "consumer-goods",
      label: "消费品快速询盘",
      productContext: "高频小批量询盘，客户关注 MOQ、样品费、包装、认证、交期、渠道和复购节奏。",
      knownFields: ["MOQ", "样品费", "包装", "认证", "渠道类型"],
      missingFields: ["库存", "真实认证", "渠道授权", "样品发货时间", "复购记录"],
      boundary: "MOQ、库存、认证、渠道授权、样品承诺和交期必须人工确认。"
    }
  ],
  outputFormats: [
    {
      id: "table-email",
      label: "表格 + 英文邮件草稿",
      instruction: "输出结构化表格，并在表格后提供一封克制、专业的英文邮件草稿。",
      bestFor: "询盘、报价、客户回复"
    },
    {
      id: "checklist",
      label: "检查清单 + 缺失字段",
      instruction: "输出检查清单，按已知资料、缺失资料、待人工确认资料分组。",
      bestFor: "产品资料、单证、风险复核"
    },
    {
      id: "dashboard",
      label: "看板 + 下一步动作",
      instruction: "输出看板字段，包含状态、负责人、风险等级、下一步动作和客户沟通建议。",
      bestFor: "订单跟进、客户线索、企业诊断"
    },
    {
      id: "lesson-demo",
      label: "课堂演示脚本",
      instruction: "输出老师演示步骤、学员替换字段、常见错误和作业验收标准。",
      bestFor: "直播课、面授课、企业内训"
    }
  ],
  boundaryModes: [
    {
      id: "strict",
      label: "严格边界",
      instruction: "所有未知信息必须标记为待确认；不得虚构价格、交期、认证、库存、合作案例、合同责任或合规结论。",
      badge: "推荐"
    },
    {
      id: "classroom",
      label: "课堂演示边界",
      instruction: "可以生成教学草稿，但必须在输出结尾列出正式业务使用前必须人工确认的事项。",
      badge: "演示"
    },
    {
      id: "enterprise",
      label: "企业内训边界",
      instruction: "先要求企业确认资料权限和脱敏范围，再输出 SOP、工具字段或客户沟通草稿。",
      badge: "企业"
    }
  ],
  teachingModes: [
    {
      id: "classroom",
      label: "课堂演示",
      instruction: "输出中加入老师讲解提示和学员作业验收点。"
    },
    {
      id: "homework",
      label: "学员作业",
      instruction: "输出中加入学员需替换的字段、提交标准和返修规则。"
    },
    {
      id: "enterprise",
      label: "企业诊断",
      instruction: "输出中加入企业资料清单、岗位责任人和后续 SOP/工具共建建议。"
    }
  ],
  exportFilename: "foreign-trade-codex-prompt.md"
};

window.TrainingPlatformData.promptDeploymentDownloads = [
  {
    label: "下载指令部署路由表 CSV",
    href: "./downloads/prompt-deployment-routing-board.csv",
    format: "CSV",
    note: "用于把每条指令分流到课程、作业、工具、资源、招生证据或企业 SOP。"
  },
  {
    label: "下载指令部署简报模板 MD",
    href: "./downloads/prompt-deployment-brief-template.md",
    format: "Markdown",
    note: "用于老师备课、助教验收、工具 Sprint、公开课展示和企业交付交接。"
  }
];

window.TrainingPlatformData.promptDeploymentDesk = {
  title: "指令部署与验收台",
  description:
    "把已经组装好的外贸 Codex 指令放进真实运营链路：课堂怎么讲、作业怎么收、工具怎么立项、招生怎么展示、企业怎么审批。",
  exportFilename: "prompt-deployment-brief-output.md",
  defaults: {
    workflow: "inquiry-analysis",
    deploymentTarget: "system-class",
    audienceMode: "teacher-assistant",
    evidenceStatus: "integrated-house-sample",
    nextAction: "assign-homework"
  },
  deploymentTargets: [
    {
      id: "system-class",
      label: "系统课部署",
      score: 9,
      purpose: "进入正式课程模块，作为老师演示和学员跟练的标准指令。",
      output: "课件演示脚本、学员替换字段、课堂检查点和课后作业。",
      owner: "主讲老师",
      pageRoute: ["course.html", "classroom.html", "learning.html"]
    },
    {
      id: "homework-review",
      label: "作业验收",
      score: 7,
      purpose: "用于助教批改学员提交的行业版指令和输出结果。",
      output: "评分意见、返修任务、优秀作业候选和学员成果包。",
      owner: "助教",
      pageRoute: ["learning.html", "classroom.html"]
    },
    {
      id: "public-demo",
      label: "公开课展示",
      score: 7,
      purpose: "把稳定样例转成公开课、直播课或短视频里的可视化证明。",
      output: "公开演示步骤、截图证据、转化话术边界和跟进入口。",
      owner: "市场运营",
      pageRoute: ["marketing.html", "enrollment.html", "case-integrated-house.html"]
    },
    {
      id: "tool-spec",
      label: "工具规格",
      score: 8,
      purpose: "把反复使用的指令沉淀成可复制的工具需求。",
      output: "输入字段、输出字段、验收规则、边界说明和开发优先级。",
      owner: "产品负责人",
      pageRoute: ["tools.html", "automation.html", "playbook.html"]
    },
    {
      id: "enterprise-sop",
      label: "企业 SOP",
      score: 8,
      purpose: "把指令纳入企业内训或咨询项目的岗位流程。",
      output: "岗位责任人、资料权限、SOP 步骤、验收证据和审批边界。",
      owner: "企业服务负责人",
      pageRoute: ["enterprise.html", "playbook.html"]
    },
    {
      id: "resource-lead",
      label: "资源承接",
      score: 6,
      purpose: "把指令作为可领取资源或跟进素材，承接潜在学员兴趣。",
      output: "资源说明、用户标签、跟进序列、课程入口和边界提示。",
      owner: "课程顾问 + 运营",
      pageRoute: ["resources.html", "enrollment.html"]
    }
  ],
  audienceModes: [
    {
      id: "learner",
      label: "学员",
      score: 4,
      concern: "担心指令太复杂、资料不全、替换后跑不出可用结果。",
      proofNeed: "看得懂的操作步骤、作业模板、返修标准和优秀样例。",
      explanationStyle: "先讲业务场景，再讲替换字段，最后讲人工确认。"
    },
    {
      id: "teacher-assistant",
      label: "老师/助教",
      score: 6,
      concern: "担心不同老师讲法不一致，助教验收口径不统一。",
      proofNeed: "演示顺序、评分表、返修规则和版本回写入口。",
      explanationStyle: "用模块、证据、质量门槛和维护动作表达。"
    },
    {
      id: "consultant",
      label: "课程顾问",
      score: 6,
      concern: "担心无法把指令价值讲成学员愿意付费的结果。",
      proofNeed: "痛点、前后对比、可展示成果、边界说明和下一步咨询问题。",
      explanationStyle: "少讲技术，多讲省下的重复劳动和能拿走的交付物。"
    },
    {
      id: "enterprise-manager",
      label: "企业负责人",
      score: 8,
      concern: "担心客户资料、价格、审批和岗位责任被 AI 越权处理。",
      proofNeed: "资料权限、审批节点、岗位责任、人工边界和交付验收证据。",
      explanationStyle: "用 SOP、权限、审批、验收和风险控制表达。"
    }
  ],
  evidenceStatuses: [
    {
      id: "integrated-house-sample",
      label: "集成房屋样例",
      score: 8,
      rule: "可用于课堂演示、公开课样例和工具规格，不代表真实报价或真实客户承诺。",
      masking: "保留教学字段，替换敏感客户名、价格、供应商和真实订单编号。"
    },
    {
      id: "learner-homework",
      label: "学员作业",
      score: 6,
      rule: "可用于作业验收和内部教学复盘；公开展示前必须完成脱敏和授权。",
      masking: "隐藏公司名、客户名、真实价格、利润、联系方式和合同信息。"
    },
    {
      id: "authorized-showcase",
      label: "授权展示",
      score: 10,
      rule: "可进入招生证据、公开课展示和资源中心，但仍需保留边界说明。",
      masking: "按授权范围展示，保留撤回和定期复审机制。"
    },
    {
      id: "enterprise-private",
      label: "企业内部",
      score: 3,
      rule: "只能用于企业内训、诊断和 SOP 共建，不进入公开课、资源下载或招生页。",
      masking: "企业自管敏感资料，平台只保留脱敏流程、角色和验收结论。"
    },
    {
      id: "repair-needed",
      label: "待返修",
      score: -4,
      rule: "输出证据不完整、边界不清或资料来源不明时，不能进入展示、工具或企业交付。",
      masking: "先补齐资料来源、缺失字段、人工确认人和返修说明。"
    }
  ],
  nextActions: [
    {
      id: "assign-homework",
      label: "布置作业",
      score: 5,
      action: "生成学员替换字段、提交标准和助教验收重点。",
      route: ["learning.html", "classroom.html"],
      businessValue: "把听课转成可检查的学员交付物。"
    },
    {
      id: "update-prompt-pack",
      label: "回写指令包",
      score: 4,
      action: "更新指令包、行业替换模板和版本维护记录。",
      route: ["prompts.html", "playbook.html"],
      businessValue: "让课堂卡点变成下一版课程资产。"
    },
    {
      id: "route-tool-sprint",
      label: "进入工具 Sprint",
      score: 7,
      action: "生成工具字段、验收规则、优先级和开发说明。",
      route: ["tools.html", "automation.html", "playbook.html"],
      businessValue: "把高频重复劳动转成可复制工具。"
    },
    {
      id: "consultation-proof",
      label: "生成咨询证据",
      score: 7,
      action: "整理前后对比、可展示结果、边界说明和顾问跟进问题。",
      route: ["enrollment.html", "marketing.html"],
      businessValue: "帮助学员理解课程不是讲概念，而是交付业务结果。"
    },
    {
      id: "enterprise-handoff",
      label: "转企业交付",
      score: 8,
      action: "生成企业资料清单、岗位责任、审批节点和验收证据。",
      route: ["enterprise.html", "playbook.html"],
      businessValue: "把课程能力升级为企业内训或咨询项目。"
    },
    {
      id: "resource-followup",
      label: "进入资源跟进",
      score: 5,
      action: "生成资源领取后的标签、跟进节奏和下一步入口。",
      route: ["resources.html", "enrollment.html"],
      businessValue: "把免费资源用户分流到系统课、咨询或企业诊断。"
    }
  ],
  workflowRoutes: [
    {
      workflow: "product-profile",
      pageRoute: ["course.html", "learning.html", "tools.html"],
      downloadFamilies: ["product-profile-homework-template.md", "integrated-house-toolkit.csv", "tool-build-brief-template.csv"],
      codexTasks: ["整理产品主数据表", "标记缺失字段", "生成学员替换说明"],
      manualChecks: ["认证资料", "HS Code", "规格参数", "包装装柜"],
      classroomEvidence: "产品主数据表能继续进入报价、PI、CI、PL 和学员作业。",
      deploymentProof: "字段被至少两个后续模块复用，且缺失字段没有被虚构。",
      enterpriseExtension: "转成企业产品资料主数据 SOP。"
    },
    {
      workflow: "customer-development",
      pageRoute: ["course.html", "tools.html", "resources.html"],
      downloadFamilies: ["lead-field-library.csv", "lead-followup-homework-template.md", "resource-lead-tagging-board.csv"],
      codexTasks: ["拆客户画像", "生成开发信方向", "设计三轮跟进"],
      manualChecks: ["线索来源", "客户真实性", "国家机会判断", "合作案例"],
      classroomEvidence: "客户画像和跟进动作能落到客户线索库字段。",
      deploymentProof: "每个客户分级都有下一步动作和不可虚构字段。",
      enterpriseExtension: "转成企业销售团队客户开发 SOP。"
    },
    {
      workflow: "inquiry-analysis",
      pageRoute: ["case-integrated-house.html", "tools.html", "learning.html"],
      downloadFamilies: ["demo-lesson-inquiry-analysis.md", "inquiry-analysis-homework-template.md", "inquiry-analyzer-build-brief.md"],
      codexTasks: ["拆解询盘", "输出缺失字段", "生成英文补问邮件"],
      manualChecks: ["报价条件", "真实库存", "产品适配", "认证与当地要求"],
      classroomEvidence: "沙特 80 套集成房屋询盘能输出已知需求、缺失字段和回复草稿。",
      deploymentProof: "客户问题和内部待确认事项分开，报价前不直接承诺。",
      enterpriseExtension: "转成企业询盘分级与回复 SOP。"
    },
    {
      workflow: "quotation-model",
      pageRoute: ["course.html", "tools.html", "automation.html"],
      downloadFamilies: ["quotation-cost-checklist.csv", "quotation-calculation-homework-template.md", "tool-productization-brief-template.md"],
      codexTasks: ["整理费用项", "生成漏项检查", "输出报价邮件草稿"],
      manualChecks: ["最终价格", "汇率", "运费有效期", "利润", "DDP 承诺"],
      classroomEvidence: "FOB/CIF 报价结构能解释费用项、漏项和人工确认点。",
      deploymentProof: "报价草稿明确哪些字段来自资料、哪些字段要管理层确认。",
      enterpriseExtension: "转成企业报价审批与报价说明 SOP。"
    },
    {
      workflow: "order-document",
      pageRoute: ["course.html", "case-integrated-house.html", "tools.html"],
      downloadFamilies: ["order-tracking-homework-template.md", "document-consistency-check.csv", "document-consistency-homework-template.md"],
      codexTasks: ["生成订单节点看板", "输出客户进度邮件", "检查 PI/CI/PL 字段一致性"],
      manualChecks: ["金额", "重量", "港口", "HS Code", "报关资料"],
      classroomEvidence: "订单跟进和单证检查能从同一套订单主数据回溯。",
      deploymentProof: "所有冲突字段都有返修说明和人工确认责任人。",
      enterpriseExtension: "转成企业订单执行与单证复核 SOP。"
    },
    {
      workflow: "risk-boundary",
      pageRoute: ["course.html", "tools.html", "enterprise.html"],
      downloadFamilies: ["payment-risk-homework-template.md", "enterprise-readiness-scorecard.csv", "commercial-offer-boundary-note.md"],
      codexTasks: ["生成风险矩阵", "列出人工确认人", "输出客户谨慎表达"],
      manualChecks: ["DDP", "清关税费", "法务", "认证", "付款风险"],
      classroomEvidence: "高风险问题先被拆成风险、责任人和客户表达，而不是直接答应。",
      deploymentProof: "禁止承诺项清晰，且能说明谁有审批权。",
      enterpriseExtension: "转成企业风险审批和客户沟通 SOP。"
    }
  ],
  operatingRules: [
    "公开课、招生页和资源下载只使用集成房屋教学样例或已授权展示材料。",
    "企业内部资料只能用于企业项目，不能被转成公开证据、资源包或招生素材。",
    "每次指令部署都要记录页面入口、下载资产、人工确认人和下次回写位置。",
    "指令连续三次在课堂或作业中被重复使用，才进入工具 Sprint 候选。",
    "任何涉及价格、认证、交期、合同、清关、税费和法务的输出，只能作为草稿或检查清单。"
  ]
};

window.TrainingPlatformData.promptPerformanceReviewDownloads = [
  {
    label: "下载指令效果复盘路由 CSV",
    href: "./downloads/prompt-performance-review-router.csv",
    format: "CSV",
    note: "用于指令进入课堂、作业、工具或企业 SOP 后判断保留、返修、暂缓或回滚。"
  },
  {
    label: "下载指令优化 Brief 模板 MD",
    href: "./downloads/prompt-optimization-brief-template.md",
    format: "Markdown",
    note: "用于记录指令输出证据、问题归因、Codex 优化任务和人工确认边界。"
  }
];

window.TrainingPlatformData.promptPerformanceReviewRouter = {
  title: "指令效果复盘与优化台",
  summary:
    "指令部署后必须复盘真实输出。根据使用场景、证据质量、问题类型、风险等级和下一步去向，判断保留扩展、返修、暂缓或回滚，避免未验证指令继续进入课堂、工具或企业服务。",
  exportFilename: "prompt-performance-review-brief-output.md",
  defaults: {
    usageContext: "classroom-demo",
    evidenceQuality: "partial",
    issueType: "missing-input",
    riskLevel: "low-teaching",
    nextDestination: "update-prompt-pack"
  },
  usageContexts: [
    {
      id: "classroom-demo",
      label: "课堂演示",
      score: 16,
      owner: "主讲老师",
      proofPage: "classroom.html",
      reviewFocus: "讲解是否顺、学员是否能跟上、输出能否连接作业。",
      codexUse: "整理老师课堂观察、提炼卡点、生成新版讲解步骤。"
    },
    {
      id: "homework-review",
      label: "作业验收",
      score: 18,
      owner: "助教",
      proofPage: "learning.html",
      reviewFocus: "学员替换后是否仍能输出可验收结果，评分是否公平。",
      codexUse: "抽取常见错误、生成返修样例和评分口径。"
    },
    {
      id: "tool-output",
      label: "工具输出",
      score: 22,
      owner: "产品负责人",
      proofPage: "tools.html",
      reviewFocus: "指令是否可转成稳定输入字段、输出格式和验收用例。",
      codexUse: "把指令问题映射到工具字段、验收样例和 Sprint 任务。"
    },
    {
      id: "enterprise-sop",
      label: "企业 SOP",
      score: 24,
      owner: "企业服务负责人",
      proofPage: "enterprise.html",
      reviewFocus: "企业岗位是否采纳，资料权限、审批和验收责任是否清楚。",
      codexUse: "整理企业反馈、岗位采用问题和 SOP 优化建议。"
    }
  ],
  evidenceQualities: [
    {
      id: "verified",
      label: "已验证输出",
      score: 22,
      status: "可扩展",
      rule: "有课堂截图、作业记录、工具测试或企业验收证据，且来源可追溯。"
    },
    {
      id: "partial",
      label: "部分证据",
      score: 12,
      status: "先返修",
      rule: "有样例但覆盖不全，需要补充更多行业、作业或企业样例。"
    },
    {
      id: "weak",
      label: "弱证据",
      score: 4,
      status: "进入复盘池",
      rule: "只有口头反馈或单次感觉，不作为公开证据或稳定版本。"
    },
    {
      id: "contradictory",
      label: "冲突或高风险证据",
      score: -12,
      status: "回滚候选",
      rule: "输出自相矛盾、误导学员、越过人工边界或使用了未授权资料。"
    }
  ],
  issueTypes: [
    {
      id: "missing-input",
      label: "输入字段缺失",
      score: 14,
      repair: "补充输入检查、缺失字段表和待人工确认字段。",
      riskNote: "资料不足不能让 Codex 补写成事实。"
    },
    {
      id: "vague-output",
      label: "输出结构空泛",
      score: 10,
      repair: "重写输出格式、示例行、验收标准和不通过示例。",
      riskNote: "只给建议不算交付，必须能进入作业或工具输出。"
    },
    {
      id: "boundary-confusion",
      label: "人工边界混乱",
      score: -8,
      repair: "增加禁止承诺、确认人和对外发送前检查。",
      riskNote: "价格、交期、单证、合规和客户承诺必须人工确认。"
    },
    {
      id: "fabricated-facts",
      label: "事实虚构",
      score: -18,
      repair: "回滚旧版本，强制加入已知/未知分离和证据来源规则。",
      riskNote: "虚构事实的指令不能进入公开课、作业验收或企业服务。"
    }
  ],
  riskLevels: [
    {
      id: "low-teaching",
      label: "低教学风险",
      score: 12,
      gate: "老师确认讲解顺序和作业入口。",
      reviewers: ["主讲老师"]
    },
    {
      id: "commercial-claim",
      label: "商业宣传风险",
      score: -8,
      gate: "课程顾问确认不夸大效果、不承诺自动成交。",
      reviewers: ["课程顾问", "运营负责人"]
    },
    {
      id: "confidential-data",
      label: "敏感资料风险",
      score: -16,
      gate: "资料所有者确认脱敏和授权范围。",
      reviewers: ["资料所有者", "内容负责人"]
    },
    {
      id: "compliance-legal",
      label: "合规或法务风险",
      score: -22,
      gate: "专业人员复核前不得复用。",
      reviewers: ["单证/法务/财务/合规负责人"]
    }
  ],
  nextDestinations: [
    {
      id: "update-prompt-pack",
      label: "回写指令包",
      score: 16,
      routePages: ["prompts.html", "playbook.html"],
      downloads: ["integrated-house-prompt-pack.md", "prompt-governance-board.csv"],
      nextAction: "更新指令包、版本说明和课堂使用说明。"
    },
    {
      id: "update-tool-spec",
      label: "更新工具规格",
      score: 18,
      routePages: ["tools.html", "automation.html", "playbook.html"],
      downloads: ["tool-build-brief-template.csv", "tool-sprint-command-center.csv"],
      nextAction: "把指令问题转成工具字段、验收样例和 Sprint 任务。"
    },
    {
      id: "update-homework-rubric",
      label: "更新作业评分",
      score: 14,
      routePages: ["learning.html", "classroom.html", "course.html"],
      downloads: ["assignment-review-scorecard.csv", "assignment-repair-tracker.csv"],
      nextAction: "更新作业评分表、返修样例和助教口径。"
    },
    {
      id: "enterprise-sop-review",
      label: "企业 SOP 复核",
      score: 20,
      routePages: ["enterprise.html", "playbook.html"],
      downloads: ["enterprise-service-delivery-plan.csv", "enterprise-project-acceptance-checklist.md"],
      nextAction: "进入企业审批、岗位责任和验收证据复核。"
    }
  ],
  decisions: [
    {
      id: "scale",
      title: "保留并扩展",
      threshold: 78,
      action: "进入指令包、工具规格或企业 SOP 的稳定版本，并记录版本差异。",
      codexTasks: ["整理通过证据", "生成新版指令", "输出版本差异", "生成发布说明"],
      manualGates: ["负责人批准", "展示授权确认", "人工边界复核"]
    },
    {
      id: "repair",
      title: "返修后复用",
      threshold: 58,
      action: "先补输入、输出格式、边界说明或验收样例，再进入下一轮课堂或作业验证。",
      codexTasks: ["整理失败样例", "生成返修清单", "重写输入检查", "生成复测用例"],
      manualGates: ["老师/助教复核", "产品负责人确认", "下次复盘窗口"]
    },
    {
      id: "hold",
      title: "暂缓进入复盘池",
      threshold: 0,
      action: "证据不足或价值不稳定，先进入版本池，等更多课堂、作业或企业样例后再判断。",
      codexTasks: ["生成缺失证据清单", "整理待问问题", "归档旧输出", "设置复盘提醒"],
      manualGates: ["证据负责人", "复盘时间", "不公开展示"]
    },
    {
      id: "rollback",
      title: "回滚或下架",
      threshold: -999,
      action: "存在事实虚构、敏感资料、合规风险或边界越权，立即从公开和教学链路撤下。",
      codexTasks: ["生成回滚说明", "整理风险证据", "输出纠偏话术", "标记禁止复用"],
      manualGates: ["内容负责人批准", "资料授权复核", "风险负责人确认"]
    }
  ],
  operatingRules: [
    "事实虚构、敏感未授权或合规法务风险出现任一项，默认回滚或暂缓。",
    "只有弱证据时不能进入公开课、招生证据或稳定工具规格。",
    "每次指令优化都要写清影响页面、下载资产、负责人和下次复盘窗口。",
    "企业 SOP 指令必须保留企业资料权限、岗位责任和验收证据。"
  ]
};

window.TrainingPlatformData.promptGovernanceDownloads = [
  {
    label: "下载指令治理台 CSV",
    href: "./downloads/prompt-governance-board.csv",
    format: "CSV",
    note: "用于新增指令、课堂返修、行业替换和版本维护。"
  },
  {
    label: "下载行业替换模板 MD",
    href: "./downloads/prompt-industry-replacement-template.md",
    format: "Markdown",
    note: "用于把集成房屋指令替换成机械、家具、建材或企业产品。"
  }
];

window.TrainingPlatformData.promptGovernanceBoard = [
  {
    stage: "01",
    title: "新增指令立项",
    trigger: "课堂、作业或企业咨询中反复出现同一类 Codex 操作需求。",
    requiredInput: "业务动作、适用课程模块、目标用户、关联案例和可验收输出物。",
    promptAction: "先写业务场景和输入资料，不直接写通用提示词。",
    outputEvidence: "指令立项卡、对应课程入口、关联工具或资源入口。",
    qualityGate: "必须说明该指令解决哪个外贸动作，以及学员最后要交什么结果。",
    manualBoundary: "不能为追求效果而让指令自动承诺价格、交期、认证、合同或合规结论。",
    owner: "课程老师 + 内容负责人"
  },
  {
    stage: "02",
    title: "输入资料校验",
    trigger: "指令输出质量不稳定，或学员经常因为资料不全得到空泛结果。",
    requiredInput: "产品资料、目标客户、原始询盘、报价字段、订单主数据或单证字段。",
    promptAction: "要求 Codex 先列出已知资料、缺失资料和待人工确认字段。",
    outputEvidence: "输入资料清单、缺失字段表和禁止虚构字段说明。",
    qualityGate: "未知信息必须标记为待确认，不能被补写成事实。",
    manualBoundary: "敏感客户资料、真实价格、成本和合同条款必须脱敏或由企业自行保管。",
    owner: "助教 + 学员"
  },
  {
    stage: "03",
    title: "集成房屋样例验证",
    trigger: "新指令准备进入课堂或资源中心前，需要先用主案例验证。",
    requiredInput: "20ft 可扩展集成房屋产品资料、沙特询盘、报价字段、订单和单证样例。",
    promptAction: "用固定样例跑出表格、清单、邮件草稿或检查报告。",
    outputEvidence: "课堂截图、输出样例、质量检查结果和人工确认提示。",
    qualityGate: "输出能被课堂讲解、工具中心、学员作业和资源下载共同引用。",
    manualBoundary: "集成房屋样例只用于教学演示，不代表真实报价、真实交期或真实认证承诺。",
    owner: "主讲老师 + 产品负责人"
  },
  {
    stage: "04",
    title: "质量门槛与风险复核",
    trigger: "指令准备进入正式课程、作业验收或企业内训资料。",
    requiredInput: "指令文本、样例输出、质量检查表、风险边界和作业验收标准。",
    promptAction: "检查是否有业务场景、输入限制、输出格式、人工边界和课堂用法。",
    outputEvidence: "通过/返修结论、返修原因和正式版本号。",
    qualityGate: "每条指令都必须能说明输入、输出、质量检查和不能自动替代的人工判断。",
    manualBoundary: "风险复核不通过的指令不能进入对外宣传、学员作业或企业服务交付。",
    owner: "课程负责人 + 助教"
  },
  {
    stage: "05",
    title: "行业替换与学员作业",
    trigger: "学员或企业需要把集成房屋指令换成自己的产品和目标客户。",
    requiredInput: "行业产品资料、目标客户类型、常见询盘、报价字段和必须人工确认的规则。",
    promptAction: "只替换产品、客户、国家和字段，不改变输出格式、质量门槛和人工边界。",
    outputEvidence: "学员行业版指令、替换字段表、作业验收记录和返修建议。",
    qualityGate: "替换后仍能产出同类业务结果，并能解释哪些内容来自学员资料。",
    manualBoundary: "不能套用集成房屋价格、认证、物流和合同责任到其他行业。",
    owner: "学员 + 助教"
  },
  {
    stage: "06",
    title: "版本维护与资源回写",
    trigger: "课堂卡点、工具改版、资源下载反馈或企业内训复盘后，需要更新指令。",
    requiredInput: "真实问题、旧版本指令、返修原因、更新字段和影响页面。",
    promptAction: "记录版本变更，回写到指令库、课程页、工具页、资源中心和运营指南。",
    outputEvidence: "版本日志、更新后的下载文件、页面挂载点和验证记录。",
    qualityGate: "更新不能破坏原有课堂顺序、资源入口、人工边界和学员作业标准。",
    manualBoundary: "版本更新必须保留旧版风险说明，不能把未验证的新输出包装成稳定承诺。",
    owner: "内容负责人 + 开发负责人"
  }
];

window.TrainingPlatformData.prompts = [
  {
    id: "product-profile",
    module: "M0",
    category: "产品资料",
    title: "生成集成房屋产品资料采集表",
    useCase: "课程开始时把产品规格、配置、包装、报价和单证字段整理成统一主数据。",
    relatedTool: "产品资料表",
    inputData: ["产品名称", "规格参数", "可选配置", "包装装柜", "认证资料"],
    outputs: ["产品主数据表", "必填字段", "人工确认字段"],
    manualBoundaries: ["认证、防火、抗风、抗雪参数必须来自真实资料", "HS 编码和申报要由专业人员确认"],
    qualityChecks: ["字段能否被报价、PI、CI、PL 继续复用", "是否标出未知字段而不是虚构"],
    prompt:
      "请基于“20ft Expandable Prefab Container House”这个外贸产品，帮我设计一份产品基础资料采集表。字段要覆盖规格、材料、包装、装柜、认证、安装、售后、报价和单证需要的信息。输出为表格，并标记哪些字段必须由人工确认。"
  },
  {
    id: "customer-persona",
    module: "M1",
    category: "客户开发",
    title: "拆分海外 B2B 客户画像",
    useCase: "从集成房屋产品出发，定义客户类型、采购场景、开发角度和报价前问题。",
    relatedTool: "客户线索库",
    inputData: ["产品应用场景", "目标国家", "客户类型", "历史成交线索"],
    outputs: ["客户画像表", "开发切入角度", "报价前问题"],
    manualBoundaries: ["不要把所有国家都当成同等机会", "当地项目许可和建筑规范不能由 Codex 判断"],
    qualityChecks: ["客户类型是否足够具体", "每类客户是否有不同开发角度"],
    prompt:
      "我是一家中国集成房屋厂家，主推20ft可扩展集装箱房，应用于工地宿舍、矿业营地、临时办公室和营地民宿。请帮我拆分海外B2B目标客户画像，包括客户类型、采购场景、核心痛点、常问问题、开发信切入角度、报价前必须确认的信息。"
  },
  {
    id: "lead-follow-up",
    module: "M2",
    category: "客户开发",
    title: "生成客户分级与跟进动作",
    useCase: "把客户线索库中的零散客户，转成优先级、下一步动作和跟进节奏。",
    relatedTool: "客户线索库",
    inputData: ["客户公司", "国家", "客户类型", "需求阶段", "最近沟通记录"],
    outputs: ["A/B/C 分级", "下一步动作", "跟进邮件方向"],
    manualBoundaries: ["不能违规抓取或骚扰式群发", "客户隐私和真实联系方式要脱敏"],
    qualityChecks: ["每条线索是否有下一步动作", "高价值客户是否有人工跟进理由"],
    prompt:
      "请根据这份外贸客户线索表，为每个客户判断A/B/C优先级，输出判断理由、下一步跟进动作、建议跟进日期和一封简短英文跟进邮件方向。请不要虚构客户背景，不确定的信息标记为待确认。"
  },
  {
    id: "development-email",
    module: "M3",
    category: "客户开发",
    title: "生成开发信与三轮跟进序列",
    useCase: "为不同客户类型生成不群发、不空泛的英文开发信和跟进信。",
    relatedTool: "开发信话术库",
    inputData: ["客户画像", "产品卖点", "应用场景", "客户可能痛点"],
    outputs: ["首封开发信", "三轮跟进邮件", "真实性检查"],
    manualBoundaries: ["不能虚构合作案例、认证、库存和交付能力", "邮件发送规则需由业务团队遵守"],
    qualityChecks: ["邮件是否和客户场景相关", "是否避免夸大承诺和泛泛营销"],
    prompt:
      "请基于以下客户画像和集成房屋产品资料，生成一封首封英文开发信和三轮后续跟进邮件。要求：语气专业克制，每封邮件只聚焦一个业务场景，不虚构案例、证书、价格和交期，并在最后列出需要人工确认的事实。"
  },
  {
    id: "inquiry-analysis",
    module: "M4",
    category: "询盘处理",
    title: "分析客户询盘并生成回复草稿",
    useCase: "把客户原始询盘拆解为结构化需求，识别缺失信息和风险点。",
    relatedTool: "询盘识别工具",
    inputData: ["客户原始询盘", "产品资料", "公司基础信息", "报价边界"],
    outputs: ["需求摘要", "缺失字段", "补问问题", "英文回复草稿"],
    manualBoundaries: ["价格、认证、库存、交期不能虚构", "DDP、清关、税费需要人工确认"],
    qualityChecks: ["是否先补问再报价", "客户问题和内部问题是否分开"],
    prompt:
      "请分析这封集成房屋询盘，输出：客户类型、采购场景、已知需求、缺失信息、报价前必须确认的问题、风险点、英文回复草稿。注意不要虚构价格、认证、交期和DDP清关能力。"
  },
  {
    id: "quotation-model",
    module: "M6",
    category: "报价测算",
    title: "设计 FOB/CIF 报价测算表",
    useCase: "建立集成房屋报价费用项模型，并将 DDP 作为风险讨论而非直接承诺。",
    relatedTool: "报价测算器",
    inputData: ["产品成本", "选配费用", "数量", "运费", "保险", "目标利润"],
    outputs: ["FOB/CIF 结构", "漏项检查", "报价邮件模板"],
    manualBoundaries: ["最终价格必须由工厂、货代和业务负责人确认", "DDP 不直接承诺"],
    qualityChecks: ["费用项是否完整", "是否标明运费有效期和汇率口径"],
    prompt:
      "请帮我设计一个集成房屋FOB/CIF报价测算表。产品是20ft可扩展集成房屋，订单数量80套，目的港Jeddah。表格需要包含产品成本、选配、包装、国内费用、海运、保险、汇率、目标利润率、报价有效期和漏项检查。DDP只输出风险提示，不直接计算承诺价。"
  },
  {
    id: "pi-order-master",
    module: "M7",
    category: "订单主数据",
    title: "从报价生成 PI 和订单主数据字段",
    useCase: "报价确认后，把字段统一到订单主数据，减少后续单证冲突。",
    relatedTool: "订单主数据表",
    inputData: ["报价结构", "客户信息", "产品配置", "付款条款", "贸易术语"],
    outputs: ["PI 字段清单", "订单主数据表", "合同条款检查"],
    manualBoundaries: ["最终合同条款、违约责任、保修责任需负责人或法务确认", "客户收货信息要核对"],
    qualityChecks: ["PI、CI、PL 是否可复用同一套字段", "图纸版本和配置确认日期是否记录"],
    prompt:
      "请把这份集成房屋报价结构转成PI字段清单和订单主数据表。字段要覆盖客户、收货人、产品型号、数量、配置、图纸版本、贸易术语、付款方式、包装、装柜、交期、保修和售后联系人。请标出必须人工确认或法务确认的字段。"
  },
  {
    id: "order-progress-update",
    module: "M8",
    category: "订单跟进",
    title: "生成订单节点看板和客户进度邮件",
    useCase: "把生产、质检、订舱、装柜和出运节点转成跟单看板与客户更新。",
    relatedTool: "订单跟进看板",
    inputData: ["订单主数据", "计划节点", "实际进度", "异常说明", "负责人"],
    outputs: ["订单看板", "逾期风险", "客户进度邮件"],
    manualBoundaries: ["生产进度、装柜日期和出运日期必须由责任人确认", "异常原因不能随意编写"],
    qualityChecks: ["每个节点是否有负责人", "客户邮件是否如实说明风险和下一步"],
    prompt:
      "请基于这份订单主数据和生产节点，生成一个订单跟进看板。输出每个节点的计划日期、实际状态、负责人、风险等级、下一步动作，并写一封英文客户进度更新邮件。不要虚构已完成事项，未确认的时间标记为待确认。"
  },
  {
    id: "document-check",
    module: "M9",
    category: "单证检查",
    title: "生成单证一致性检查表",
    useCase: "检查 PI、CI、PL、订舱资料之间是否存在字段冲突。",
    relatedTool: "单证一致性检查表",
    inputData: ["PI", "CI", "PL", "订舱资料", "提单草稿"],
    outputs: ["字段冲突", "风险等级", "修改说明"],
    manualBoundaries: ["报关、银行、目的国清关要求需专业人员复核", "HS 编码和申报要人工确认"],
    qualityChecks: ["数量、金额、重量、港口是否一致", "修改建议是否回到订单主数据"],
    prompt:
      "请基于这份集成房屋订单主数据，生成Commercial Invoice和Packing List字段草稿，并设计一份单证一致性检查表。重点检查客户名称、地址、产品描述、数量、金额、币种、净重、毛重、体积、唛头、装柜数量、贸易术语、起运港和目的港。"
  },
  {
    id: "risk-boundary",
    module: "M10",
    category: "风险控制",
    title: "生成 DDP、认证和付款风险边界",
    useCase: "把容易被 AI 误承诺的事项整理成人工确认矩阵。",
    relatedTool: "付款方式风险矩阵",
    inputData: ["贸易术语", "付款方式", "客户国家", "项目要求", "认证资料"],
    outputs: ["风险分级", "人工确认人", "客户沟通口径"],
    manualBoundaries: ["税费、清关、当地派送、法务和合规不由 Codex 判断", "付款风险需主管或财务确认"],
    qualityChecks: ["是否把 DDP 拆成清关、税费、派送、责任", "是否给出内部确认人"],
    prompt:
      "请基于这个集成房屋项目，生成一份风险边界矩阵。重点覆盖DDP、清关税费、当地派送、建筑许可、防火/抗风/抗雪认证、付款方式、尾款和售后责任。每项输出风险等级、为什么有风险、需要谁确认、对客户如何谨慎表达。"
  }
];
