window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.automation = {
  metrics: [
    {
      value: "8",
      label: "业务环节",
      detail: "产品资料、客户开发、询盘、报价、订单、跟单、单证、风险复盘。"
    },
    {
      value: "3",
      label: "自动化等级",
      detail: "可自动化、辅助生成后人工确认、禁止自动替代。"
    },
    {
      value: "6",
      label: "优先工具",
      detail: "先开发课堂高频、字段清晰、人工边界明确的轻量工具。"
    },
    {
      value: "1",
      label: "主验证案例",
      detail: "用集成房屋出口样板验证每个自动化节点。"
    }
  ],
  workflowMap: [
    {
      stage: "产品资料",
      businessPain: "产品参数、配置、包装、认证、安装和售后资料分散，后续询盘和报价反复补信息。",
      codexRole: "整理字段、生成资料采集表、标出缺失资料和人工确认字段。",
      toolOutput: "产品资料工作台、英文规格表、FAQ 和素材清单。",
      linkedTool: "产品资料工作台 / 产品资料整理指令 / 资源中心资料包",
      linkedCourse: "M0 / M5",
      manualBoundary: "产品参数、认证、交期、库存、安装责任和售后能力必须由企业确认。",
      priority: "高"
    },
    {
      stage: "客户开发",
      businessPain: "客户资料散、筛选标准不清、开发信同质化，业务员大量时间花在低质量线索整理上。",
      codexRole: "整理客户画像、字段库、客户等级和下一步跟进动作。",
      toolOutput: "客户线索库、客户分级规则、开发信角度。",
      linkedTool: "外贸客户线索库 / 客户开发字段库",
      linkedCourse: "M1-M3",
      manualBoundary: "客户真实性、隐私合规、发送频率和合作判断由业务人员确认。",
      priority: "高"
    },
    {
      stage: "询盘识别",
      businessPain: "业务员看到数量和目的港就急着报价，配置、项目地、贸易术语和责任边界未确认。",
      codexRole: "拆解已知需求、缺失字段、报价前问题、风险点和英文回复草稿。",
      toolOutput: "询盘识别表、补问清单、英文回复草稿。",
      linkedTool: "询盘识别课堂演示器",
      linkedCourse: "M4",
      manualBoundary: "价格、认证、库存、交期、DDP、清关和当地合规不能自动承诺。",
      priority: "最高"
    },
    {
      stage: "报价测算",
      businessPain: "FOB/CIF/DDP 涉及成本、选配、装柜、海运、保险、汇率和利润，漏项会直接影响利润。",
      codexRole: "拆分费用项、生成漏项提醒、输出报价说明草稿和 DDP 风险提示。",
      toolOutput: "FOB/CIF 报价结构、费用项清单、报价邮件草稿。",
      linkedTool: "FOB/CIF 报价测算器",
      linkedCourse: "M6",
      manualBoundary: "最终成本、利润率、运费有效期、汇率、付款条款和报价有效期必须人工确认。",
      priority: "最高"
    },
    {
      stage: "订单主数据",
      businessPain: "报价、PI、合同、CI、PL 各自复制修改，数量、金额、配置和港口容易前后不一致。",
      codexRole: "从报价提取订单字段，生成 PI 字段清单和订单主数据模板。",
      toolOutput: "PI 字段表、订单主数据表、合同条款检查清单。",
      linkedTool: "订单主数据模板",
      linkedCourse: "M7",
      manualBoundary: "合同条款、保修、违约责任、付款和客户承诺需要负责人或法务确认。",
      priority: "高"
    },
    {
      stage: "跟单看板",
      businessPain: "图纸、采购、生产、质检、订舱、装柜和尾款节点分散，异常发现晚。",
      codexRole: "整理节点、负责人、计划日期、异常记录和客户进度邮件草稿。",
      toolOutput: "订单跟进看板、异常记录表、客户进度邮件。",
      linkedTool: "订单跟进看板",
      linkedCourse: "M8",
      manualBoundary: "真实生产计划、交期、尾款、发货和客户承诺必须内部确认。",
      priority: "中"
    },
    {
      stage: "单证检查",
      businessPain: "PI、CI、PL、订舱资料和提单草稿之间字段冲突，影响清关、收款和客户收货。",
      codexRole: "比对字段、提示冲突、给出风险等级和修改建议。",
      toolOutput: "单证一致性检查表、冲突报告、修正后复查结果。",
      linkedTool: "单证一致性课堂演示器",
      linkedCourse: "M9",
      manualBoundary: "HS 编码、申报要素、信用证、银行审单、报关和目的港清关必须专业复核。",
      priority: "最高"
    },
    {
      stage: "风险与复盘",
      businessPain: "付款、DDP、客户信用、售后、复购和经验复盘没有统一记录，团队经验难沉淀。",
      codexRole: "生成风险矩阵、人工确认清单、售后回访节点和复盘报告草稿。",
      toolOutput: "付款风险矩阵、DDP 风险清单、售后回访表、复购提醒。",
      linkedTool: "付款方式风险矩阵 / 风险边界指令",
      linkedCourse: "M10-M11",
      manualBoundary: "银行、信保、法务、税务、合规和管理层决策不能由 Codex 替代。",
      priority: "中"
    }
  ],
  automationLevels: [
    {
      level: "L1 可自动化整理",
      rule: "适合字段抽取、格式转换、草稿生成、清单整理和重复性检查。",
      examples: ["询盘需求拆解", "客户字段整理", "开发信初稿", "单证冲突提示"],
      output: "表格、清单、草稿、风险提示",
      boundary: "输出仍需由业务人员检查事实和语气。"
    },
    {
      level: "L2 辅助判断后人工确认",
      rule: "适合报价结构、风险分级、客户优先级、订单异常和付款风险分析。",
      examples: ["FOB/CIF 结构", "A/B/C 客户等级", "订单异常提醒", "DDP 风险矩阵"],
      output: "建议、分级、提醒、审批清单",
      boundary: "价格、利润、信用、付款和交期由负责人确认。"
    },
    {
      level: "L3 禁止自动替代",
      rule: "不能让 Codex 做最终商业承诺、专业审单、法律税务结论或违规获客。",
      examples: ["最终报价", "报关申报", "信用证终审", "法务合同结论", "骚扰式群发"],
      output: "只允许生成准备材料或提醒",
      boundary: "必须交给授权岗位或专业机构确认。"
    }
  ],
  scopeAssessmentRouter: {
    title: "自动化范围判定台",
    summary:
      "用于把一个外贸业务动作先判定为提示词模板、下载清单、轻交互工具、企业项目，或暂缓/禁止自动化。判定必须同时看输入资料、输出影响、人工确认人和部署方式。",
    exportFilename: "automation-scope-assessment-brief-output.md",
    downloads: [
      {
        label: "下载自动化范围判定表 CSV",
        href: "./downloads/automation-scope-assessment-router.csv",
        format: "CSV",
        note: "用于课程、工具、资源和企业项目立项前判断自动化边界。"
      },
      {
        label: "下载范围判定 Brief 模板 MD",
        href: "./downloads/automation-scope-brief-template.md",
        format: "Markdown",
        note: "用于记录业务动作、输入资料、推荐范围、Codex 辅助和人工确认点。"
      }
    ],
    defaults: {
      workflowType: "customer-draft",
      inputReadiness: "partial",
      outputImpact: "classroom",
      manualBoundary: "owner-confirmed",
      deploymentMode: "light-tool"
    },
    workflowTypes: [
      {
        id: "field-extraction",
        label: "字段整理 / 格式转换",
        score: 18,
        risk: "低风险重复整理",
        codexUse: "抽取字段、转成表格、生成缺失项和复盘摘要。",
        manualCheck: "业务人员确认事实、字段来源和遗漏项。"
      },
      {
        id: "customer-draft",
        label: "客户沟通草稿",
        score: 14,
        risk: "对外口径需复核",
        codexUse: "生成开发信、询盘回复、进度说明和风险提醒。",
        manualCheck: "发送前确认语气、承诺、价格、交期和客户上下文。"
      },
      {
        id: "pricing-contract",
        label: "报价 / 合同 / 付款",
        score: 8,
        risk: "商业承诺高风险",
        codexUse: "准备费用项、审批问题、条款检查和报价说明草稿。",
        manualCheck: "授权负责人确认价格、利润、付款、责任和有效期。"
      },
      {
        id: "compliance-doc",
        label: "单证 / 合规 / 法务",
        score: -12,
        risk: "专业结论禁止替代",
        codexUse: "整理冲突清单、复核材料和专业确认问题。",
        manualCheck: "单证、报关、银行、法务、税务或合规人员给最终结论。"
      }
    ],
    inputReadiness: [
      {
        id: "structured",
        label: "结构化且已脱敏",
        score: 22,
        condition: "字段、样例、来源和授权清楚。",
        repair: "可直接进入课堂原型或工具 Sprint。"
      },
      {
        id: "partial",
        label: "资料部分完整",
        score: 14,
        condition: "有主样例，但缺字段、责任人或复核资料。",
        repair: "先生成缺失字段清单，再进入模板或演示。"
      },
      {
        id: "unclear",
        label: "资料混乱不清",
        score: 4,
        condition: "来源、字段、版本或业务目标不清楚。",
        repair: "先做资料接收和脱敏授权，不进入工具开发。"
      },
      {
        id: "sensitive",
        label: "敏感且未授权",
        score: -10,
        condition: "含客户、价格、合同、内部流程或未授权企业资料。",
        repair: "先完成脱敏和授权确认。"
      }
    ],
    outputImpact: [
      {
        id: "classroom",
        label: "课堂演示",
        score: 14,
        deliverables: ["演示脚本", "页面证据", "作业样例"],
        routePages: ["automation.html", "classroom.html", "case-integrated-house.html"]
      },
      {
        id: "homework",
        label: "学员作业验收",
        score: 18,
        deliverables: ["作业模板", "评分表", "返修清单"],
        routePages: ["course.html", "learning.html", "classroom.html"]
      },
      {
        id: "enterprise",
        label: "企业流程交付",
        score: 24,
        deliverables: ["企业范围 Brief", "SOP/工具范围", "验收证据"],
        routePages: ["enterprise.html", "tools.html", "playbook.html"]
      },
      {
        id: "external-send",
        label: "对外客户发送",
        score: 10,
        deliverables: ["草稿", "发送前检查清单", "负责人确认记录"],
        routePages: ["tools.html", "automation.html", "enrollment.html"]
      }
    ],
    manualBoundaries: [
      {
        id: "owner-confirmed",
        label: "确认人明确",
        score: 20,
        status: "可进入排期",
        gate: "已明确业务、财务、单证、企业或老师负责人。"
      },
      {
        id: "owner-unclear",
        label: "确认人不清楚",
        score: 6,
        status: "先补责任人",
        gate: "必须先指定确认人和验收人。"
      },
      {
        id: "prohibited",
        label: "存在禁止替代",
        score: -24,
        status: "暂缓或禁止",
        gate: "不得把 Codex 包装成最终报价、合规结论、专业审单或自动成交。"
      }
    ],
    deploymentModes: [
      {
        id: "prompt",
        label: "指令模板",
        score: 12,
        route: "指令库",
        output: "可复制提示词和质量检查。",
        routePages: ["prompts.html", "course.html"]
      },
      {
        id: "checklist",
        label: "下载清单 / CSV",
        score: 16,
        route: "资源中心",
        output: "可领取表格、清单或 Brief 模板。",
        routePages: ["resources.html", "playbook.html"]
      },
      {
        id: "light-tool",
        label: "轻交互工具",
        score: 22,
        route: "工具中心",
        output: "网页演示器、复制输出和 Markdown 导出。",
        routePages: ["tools.html", "classroom.html"]
      },
      {
        id: "enterprise-workbench",
        label: "企业工作台",
        score: 26,
        route: "企业服务",
        output: "企业诊断、SOP/工具共建和验收交付。",
        routePages: ["enterprise.html", "tools.html", "playbook.html"]
      }
    ],
    decisions: [
      {
        id: "enterprise",
        title: "进入企业项目范围确认",
        threshold: 84,
        route: "企业诊断 / SOP 或工具共建",
        nextAction: "进入企业服务页，先确认资料授权、岗位责任、交付范围和验收证据。",
        codexTasks: ["整理企业流程痛点", "生成资料清单", "输出范围 Brief", "生成验收证据清单"],
        manualGates: ["企业资料授权", "决策人确认", "岗位责任", "交付范围和价格"]
      },
      {
        id: "tool",
        title: "进入工具 Sprint",
        threshold: 76,
        route: "工具中心 / 产品化 Brief",
        nextAction: "进入工具产品化 Brief 或工具 Sprint 指挥台，锁定输入、输出、验收和人工边界。",
        codexTasks: ["生成工具规格", "整理测试样例", "输出验收清单", "生成 README 回写说明"],
        manualGates: ["样例授权", "工具验收", "课堂试跑", "人工确认人"]
      },
      {
        id: "template",
        title: "先做课堂模板或下载清单",
        threshold: 58,
        route: "课程 / 资源 / 指令库",
        nextAction: "先沉淀为提示词、CSV、作业模板或课堂讲解，再观察是否值得工具化。",
        codexTasks: ["生成提示词", "生成下载模板", "整理课堂话术", "输出返修规则"],
        manualGates: ["老师确认讲法", "资源负责人确认下载", "禁止夸大自动化", "学员作业验收"]
      },
      {
        id: "hold",
        title: "暂缓或禁止自动化",
        threshold: 0,
        route: "资料接收 / 边界纠偏",
        nextAction: "先补资料、脱敏、授权或专业确认，不进入工具、课程或企业交付承诺。",
        codexTasks: ["生成缺失资料清单", "生成脱敏授权清单", "输出禁止承诺说明", "整理人工复核问题"],
        manualGates: ["资料授权", "专业复核", "确认人指定", "不承诺替代人工判断"]
      }
    ],
    operatingRules: [
      "只要选择敏感未授权资料，默认暂缓，不进入公开页面或工具开发。",
      "只要存在禁止替代，必须先做边界纠偏，不能包装成自动报价、自动审单或自动成交。",
      "企业工作台必须绑定企业负责人、资料授权和验收证据。",
      "轻交互工具上线前必须有课堂试跑、移动端检查、下载资产和 README 回写。"
    ]
  },
  toolPriorityBacklog: [
    {
      tool: "询盘识别课堂演示器",
      status: "已交互化",
      whyFirst: "输入文本清晰，输出结构稳定，适合公开课快速展示 Codex 提效。",
      input: "客户英文询盘、产品资料、报价边界。",
      output: "需求摘要、缺失字段、补问问题、英文回复草稿。",
      successEvidence: "学员能判断为什么不能直接报价。"
    },
    {
      tool: "FOB/CIF 报价测算器",
      status: "已交互化",
      whyFirst: "报价是高价值痛点，能直接体现费用项结构和人工确认边界。",
      input: "成本、选配、数量、国内费用、海运、保险、利润率。",
      output: "FOB/CIF 参考结构、漏项提醒、报价说明草稿。",
      successEvidence: "学员能区分 CIF 和 DDP 责任。"
    },
    {
      tool: "单证一致性检查器",
      status: "已交互化",
      whyFirst: "字段比对逻辑明确，适合训练学员回到订单主数据复核。",
      input: "PI、CI、PL、订舱资料和提单草稿字段。",
      output: "冲突字段、风险等级、修改建议。",
      successEvidence: "学员能发现数量、品名、港口、重量和金额冲突。"
    },
    {
      tool: "客户线索库",
      status: "V1 模板预览",
      whyFirst: "客户开发是招生痛点，但需要更强的数据录入和筛选规则。",
      input: "客户公司、国家、类型、项目场景、需求和跟进记录。",
      output: "客户等级、下一步动作、开发信角度。",
      successEvidence: "学员能整理 20 条线索并分出优先级。"
    },
    {
      tool: "订单跟进看板",
      status: "V1 模板预览",
      whyFirst: "适合企业团队内训，能把岗位协同和交期风险可视化。",
      input: "订单号、节点、负责人、计划日期、实际日期。",
      output: "当前状态、逾期节点、客户进度邮件。",
      successEvidence: "团队能统一看板和异常处理口径。"
    },
    {
      tool: "付款方式风险矩阵",
      status: "V1 模板预览",
      whyFirst: "风险高但需要专业边界，适合作为企业服务诊断工具。",
      input: "客户类型、订单金额、付款条款、贸易术语、国家地区。",
      output: "风险等级、确认问题、内部审批点。",
      successEvidence: "业务员不再把高风险付款条件直接承诺给客户。"
    }
  ],
  implementationFlow: [
    {
      stage: "01",
      title: "从真实重复劳动开始",
      action: "收集学员和企业每天重复做的整理、检查、回复、报价、跟单和复盘动作。",
      output: "自动化候选清单"
    },
    {
      stage: "02",
      title: "拆成输入、处理、输出",
      action: "每个动作都必须写清输入资料、Codex 处理方式、输出格式和人工确认点。",
      output: "工具规格卡"
    },
    {
      stage: "03",
      title: "先做课堂可演示版本",
      action: "用集成房屋案例制作静态预览或轻交互工具，让学员先看懂业务价值。",
      output: "课堂演示工具"
    },
    {
      stage: "04",
      title: "再接入学员作业和企业诊断",
      action: "当同一工具在作业和企业咨询里反复出现，再升级字段、保存、导入和导出能力。",
      output: "可复制工具模块"
    }
  ],
  riskGates: [
    {
      gate: "报价类输出",
      check: "是否把示例价格、运费、利润率或汇率当作真实报价。",
      requiredOwner: "业务负责人 / 财务 / 货代",
      releaseRule: "没有人工确认人，不允许对外发送。"
    },
    {
      gate: "单证类输出",
      check: "是否涉及 HS 编码、申报要素、信用证条款、报关口径或目的港清关。",
      requiredOwner: "单证 / 报关行 / 银行 / 货代",
      releaseRule: "工具只能提示冲突，不能替代专业审单。"
    },
    {
      gate: "客户开发输出",
      check: "是否涉及隐私数据、违规抓取、未经授权群发或虚构案例。",
      requiredOwner: "业务员 / 主管",
      releaseRule: "触达前必须确认来源、合规和邮件真实性。"
    },
    {
      gate: "企业案例输出",
      check: "是否包含真实客户、价格、成本、合同、联系方式或内部流程。",
      requiredOwner: "企业负责人",
      releaseRule: "公开展示前必须脱敏和授权。"
    },
    {
      gate: "风险判断输出",
      check: "是否涉及法务、税务、信保、制裁、出口管制或大额付款风险。",
      requiredOwner: "法务 / 财务 / 信保 / 管理层",
      releaseRule: "Codex 只做准备材料和提醒，不做最终结论。"
    }
  ],
  integratedHouseValidation: [
    {
      step: "01",
      scene: "沙特客户询问 80 套工地营地集成房屋。",
      automation: "自动拆解需求和缺失字段。",
      manualCheck: "配置、布局、认证、安装责任和项目地。"
    },
    {
      step: "02",
      scene: "客户要求 CIF Jeddah 并询问交期和装柜数量。",
      automation: "自动生成报价费用项和补问清单。",
      manualCheck: "工厂成本、装柜、海运有效期、汇率和利润。"
    },
    {
      step: "03",
      scene: "报价转成 PI 和订单主数据。",
      automation: "自动提取字段、生成订单主数据模板。",
      manualCheck: "付款条款、图纸版本、保修、合同责任。"
    },
    {
      step: "04",
      scene: "出货前检查 PI、CI、PL 和订舱资料。",
      automation: "自动提示数量、品名、港口和重量冲突。",
      manualCheck: "报关、信用证、清关要求和最终发单。"
    }
  ]
};
