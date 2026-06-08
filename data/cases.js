window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.cases = {
  metrics: [
    {
      value: "1",
      label: "已完成样板案例",
      detail: "集成房屋出口案例已覆盖询盘、报价、订单、单证和风险检查。"
    },
    {
      value: "5",
      label: "案例建设环节",
      detail: "客户开发、询盘处理、报价测算、订单跟进、单证审核。"
    },
    {
      value: "4",
      label: "后续行业方向",
      detail: "机械设备、家具建材、消费品、电子配件可按同一结构复制。"
    },
    {
      value: "6",
      label: "联动平台模块",
      detail: "课程、工具、指令、资源、企业服务、运营指南共同复用案例。"
    }
  ],
  featuredCases: [
    {
      id: "integrated-house-export",
      status: "已完成",
      statusLevel: "ready",
      industry: "集成房屋 / 项目型建材",
      title: "20ft 可扩展集成房屋出口案例",
      description:
        "以沙特建筑承包商采购 80 套工地营地住房为主线，演示客户询盘、CIF Jeddah 报价、订单跟进、单证检查和 DDP 风险边界。",
      page: "./case-integrated-house.html",
      workflow: ["客户画像", "询盘拆解", "报价结构", "订单主数据", "单证检查"],
      courseUse: "用于系统课主案例、资源包样例、企业诊断样板和工具中心截图。",
      toolOutputs: ["询盘识别表", "报价费用项清单", "订单时间线", "单证一致性检查表"],
      manualBoundaries: ["DDP 不直接承诺", "HS Code 人工复核", "认证与建筑许可需专业确认"]
    },
    {
      id: "machinery-equipment",
      status: "规划中",
      statusLevel: "planned",
      industry: "机械设备 / B2B 耐用品",
      title: "机械设备出口询盘与技术参数确认案例",
      description:
        "围绕型号、产能、电压、备件、安装调试、质保和付款条件，训练技术型询盘拆解与报价前确认。",
      workflow: ["技术参数", "配置确认", "报价条款", "售后边界", "备件清单"],
      courseUse: "后续用于技术型产品客户开发、询盘和报价模块扩展。",
      toolOutputs: ["技术参数核对表", "报价前问题清单", "售后范围说明", "备件字段库"],
      manualBoundaries: ["技术承诺需工程师确认", "安装调试范围需合同确认", "质保条款需管理层确认"]
    },
    {
      id: "furniture-building-materials",
      status: "规划中",
      statusLevel: "planned",
      industry: "家具建材 / 批量定制",
      title: "家具建材定制订单报价与打样案例",
      description:
        "围绕尺寸、材质、颜色、包装、打样、验货和装柜，训练定制订单报价字段和生产跟进节点。",
      workflow: ["客户规格", "打样确认", "批量报价", "生产节点", "验货装柜"],
      courseUse: "后续用于消费建材类学员的产品资料和报价字段训练。",
      toolOutputs: ["规格字段表", "打样确认清单", "生产跟进看板", "包装装柜检查表"],
      manualBoundaries: ["材质和色差需样品确认", "验货标准需客户确认", "包装强度需工厂确认"]
    },
    {
      id: "consumer-goods",
      status: "规划中",
      statusLevel: "planned",
      industry: "消费品 / 快速询盘",
      title: "消费品小批量询盘与复购跟进案例",
      description:
        "围绕 MOQ、包装、认证、样品费、复购节奏和渠道客户分层，训练高频询盘的快速处理。",
      workflow: ["MOQ 判断", "样品报价", "包装认证", "客户分层", "复购跟进"],
      courseUse: "后续用于新人高频询盘处理、开发信和客户跟进课程。",
      toolOutputs: ["快速询盘识别表", "样品费回复模板", "客户等级表", "复购提醒清单"],
      manualBoundaries: ["认证真实性需资料确认", "渠道授权需管理层确认", "样品承诺需库存确认"]
    },
    {
      id: "electronic-accessories",
      status: "规划中",
      statusLevel: "planned",
      industry: "电子配件 / 规格认证",
      title: "电子配件规格、认证和交期风险案例",
      description:
        "围绕规格兼容性、认证资料、测试报告、包装标签、交期和售后问题，训练风险提示和客户沟通。",
      workflow: ["规格兼容", "认证资料", "测试报告", "交期确认", "售后问题"],
      courseUse: "后续用于认证敏感型产品的询盘、报价和风险边界课程。",
      toolOutputs: ["规格兼容表", "认证资料清单", "风险回复草稿", "售后 FAQ"],
      manualBoundaries: ["认证和测试报告不可虚构", "兼容性需技术确认", "合规要求需目标市场确认"]
    }
  ],
  buildStandards: [
    {
      title: "案例必须从真实业务输入开始",
      description: "至少包含产品资料、客户类型、原始询盘或订单背景，不能只写行业介绍。",
      checks: ["有产品参数", "有客户角色", "有业务动作", "有原始输入样例"]
    },
    {
      title: "案例必须能串起课程和工具",
      description: "一个合格案例要能连接课程模块、工具卡片、指令库和学员作业。",
      checks: ["能上课演示", "能生成工具输出", "能布置作业", "能复盘问题"]
    },
    {
      title: "案例必须保留人工确认边界",
      description: "报价、付款、交期、认证、清关、税务、法务和客户承诺必须标出责任人。",
      checks: ["标出风险点", "标出确认人", "不虚构资质", "不替代专业判断"]
    },
    {
      title: "案例必须便于复制到学员行业",
      description: "老师讲完案例后，学员要能替换成自己的产品、客户、字段和订单节点。",
      checks: ["有可替换字段", "有模板结构", "有行业差异提醒", "有复用路径"]
    }
  ],
  readinessDownloads: [
    {
      label: "下载案例准入评分表 CSV",
      href: "./downloads/industry-case-readiness-scorecard.csv",
      format: "CSV",
      note: "用于判断新增行业是否具备完整案例开发条件。"
    },
    {
      label: "下载案例开发排期说明 MD",
      href: "./downloads/industry-case-sprint-plan.md",
      format: "Markdown",
      note: "用于说明本期案例开发范围、资料缺口、负责人和暂缓理由。"
    }
  ],
  readinessBoard: [
    {
      rank: "Ready",
      industry: "集成房屋 / 项目型建材",
      score: "92",
      readinessSignal: "已有完整产品、询盘、报价、订单、单证和风险样例，可直接用于系统课和工具演示。",
      materialStatus: "产品主数据、沙特询盘、CIF Jeddah 报价结构、订单节点和 PI/CI/PL 冲突样例已齐全。",
      courseFit: "覆盖客户开发、询盘、报价、订单、单证、风险边界和企业诊断。",
      toolFit: "可支撑询盘识别器、报价测算器、订单看板和单证一致性检查。",
      conversionFit: "适合做试听课、资料包、企业咨询样板和课程落地证明。",
      nextDecision: "继续作为主案例打磨，并作为后续行业复制母版。",
      manualBoundary: "价格、交期、DDP、HS Code、认证、清关和建筑许可必须人工确认。",
      owner: "课程负责人 + 行业顾问"
    },
    {
      rank: "P0",
      industry: "机械设备 / B2B 耐用品",
      score: "78",
      readinessSignal: "企业咨询和学员行业里技术型产品占比高，询盘常卡在型号、产能、电压、安装和售后。",
      materialStatus: "已有案例方向和字段框架，但缺少脱敏原始询盘、报价样例、备件清单和售后条款。",
      courseFit: "适合扩展产品资料、技术询盘、报价前确认和风险边界模块。",
      toolFit: "可沉淀技术参数核对表、报价前问题清单、备件字段库和售后范围说明。",
      conversionFit: "适合面向机械、设备、工厂型外贸团队做企业内训引流。",
      nextDecision: "进入资料收集和样例补齐阶段，暂不新建完整案例页。",
      manualBoundary: "技术承诺、安装调试、质保条款和安全合规必须由工程师或管理层确认。",
      owner: "行业顾问 + 企业服务负责人"
    },
    {
      rank: "P1",
      industry: "家具建材 / 批量定制",
      score: "70",
      readinessSignal: "定制订单涉及尺寸、材质、颜色、包装、打样和验货，适合补充非项目型建材案例。",
      materialStatus: "已有业务链路设想，但缺少完整打样记录、包装装柜样例和客户验货标准。",
      courseFit: "适合产品资料、报价字段、订单跟进、打样确认和生产节点训练。",
      toolFit: "可沉淀规格字段表、打样确认清单、生产跟进看板和包装装柜检查表。",
      conversionFit: "适合吸引家具、建材、家居用品类学员，补充集成房屋以外的定制型样板。",
      nextDecision: "先做资料包和字段模板，等待真实脱敏订单后再升级完整案例。",
      manualBoundary: "材质、色差、样品确认、验货标准和包装强度必须由客户或工厂确认。",
      owner: "内容负责人 + 行业资料提供方"
    },
    {
      rank: "P1",
      industry: "消费品 / 快速询盘",
      score: "66",
      readinessSignal: "新人和小团队常见高频询盘、MOQ、样品费、包装和复购跟进问题，适合做轻量案例。",
      materialStatus: "已有课程使用价值，但缺少稳定产品、认证样例、渠道客户分层和复购记录。",
      courseFit: "适合客户开发、快速询盘、开发信、客户分层和复购跟进模块。",
      toolFit: "可沉淀快速询盘识别表、样品费回复模板、客户等级表和复购提醒清单。",
      conversionFit: "适合作为免费资料和短视频内容，不宜优先做成完整长案例。",
      nextDecision: "先进入资源和推广素材层，暂缓完整课堂案例开发。",
      manualBoundary: "MOQ、库存、认证、渠道授权、样品承诺和交期必须人工确认。",
      owner: "市场运营 + 主讲老师"
    },
    {
      rank: "P2",
      industry: "电子配件 / 规格认证",
      score: "58",
      readinessSignal: "规格兼容、认证、测试报告和售后风险明显，但专业边界更高，资料不足时容易误导。",
      materialStatus: "只有案例方向和风险点，缺少真实规格表、测试报告、认证资料和售后问题记录。",
      courseFit: "适合未来扩展认证敏感型产品的风险边界课程。",
      toolFit: "可沉淀规格兼容表、认证资料清单、风险回复草稿和售后 FAQ。",
      conversionFit: "能服务部分电子类学员，但当前不适合做公开主案例。",
      nextDecision: "暂缓开发，先收集专业资料和合规边界。",
      manualBoundary: "认证、测试报告、兼容性、目标市场合规和售后责任不能由 Codex 推断。",
      owner: "专业顾问 + 课程负责人"
    }
  ],
  caseReplicationPlanner: {
    title: "行业案例复制规划器",
    description:
      "选择目标行业、资料成熟度和平台用途，先判断该行业适合做完整课堂案例、资源包、推广素材、企业诊断样板，还是暂缓开发。",
    defaults: {
      targetIndustry: "machinery-equipment",
      materialDepth: "partial_fields",
      chainCoverage: "inquiry_quote",
      authorization: "need_sanitize",
      primaryUse: "enterprise"
    },
    industries: [
      {
        value: "integrated-house-export",
        label: "集成房屋 / 项目型建材",
        baseScore: 92,
        baseStage: "完整样板",
        evidence: "产品、客户、询盘、CIF Jeddah 报价、订单节点、PI/CI/PL 冲突和 DDP 风险样例齐全。",
        outputs: ["询盘识别表", "报价费用项清单", "订单时间线", "单证一致性检查表"],
        missing: ["继续补优秀作业样例", "补企业诊断复盘证据"],
        boundary: "DDP、HS Code、认证、清关、建筑许可和付款节点必须人工确认。",
        owner: "课程负责人 + 行业顾问"
      },
      {
        value: "machinery-equipment",
        label: "机械设备 / B2B 耐用品",
        baseScore: 78,
        baseStage: "优先立项",
        evidence: "技术型产品咨询和学员需求高，适合训练型号、产能、电压、安装、售后和备件字段。",
        outputs: ["技术参数核对表", "报价前问题清单", "售后范围说明", "备件字段库"],
        missing: ["脱敏原始询盘", "报价样例", "备件清单", "售后条款"],
        boundary: "技术承诺、安装调试、质保条款和安全合规必须由工程师或管理层确认。",
        owner: "行业顾问 + 企业服务负责人"
      },
      {
        value: "furniture-building-materials",
        label: "家具建材 / 批量定制",
        baseScore: 70,
        baseStage: "资料包优先",
        evidence: "适合训练尺寸、材质、颜色、包装、打样、验货和装柜等定制订单字段。",
        outputs: ["规格字段表", "打样确认清单", "生产跟进看板", "包装装柜检查表"],
        missing: ["完整打样记录", "包装装柜样例", "客户验货标准"],
        boundary: "材质、色差、样品确认、验货标准和包装强度必须由客户或工厂确认。",
        owner: "内容负责人 + 行业资料提供方"
      },
      {
        value: "consumer-goods",
        label: "消费品 / 快速询盘",
        baseScore: 66,
        baseStage: "推广素材优先",
        evidence: "适合训练 MOQ、样品费、包装、认证、客户分层和复购节奏。",
        outputs: ["快速询盘识别表", "样品费回复模板", "客户等级表", "复购提醒清单"],
        missing: ["稳定产品样例", "认证样例", "渠道客户分层", "复购记录"],
        boundary: "MOQ、库存、认证、渠道授权、样品承诺和交期必须人工确认。",
        owner: "市场运营 + 主讲老师"
      },
      {
        value: "electronic-accessories",
        label: "电子配件 / 规格认证",
        baseScore: 58,
        baseStage: "暂缓开发",
        evidence: "规格兼容、认证、测试报告和售后风险明显，但专业边界高，资料不足时不适合公开讲解。",
        outputs: ["规格兼容表", "认证资料清单", "风险回复草稿", "售后 FAQ"],
        missing: ["真实规格表", "测试报告", "认证资料", "售后问题记录"],
        boundary: "认证、测试报告、兼容性、目标市场合规和售后责任不能由 Codex 推断。",
        owner: "专业顾问 + 课程负责人"
      }
    ],
    selectors: [
      {
        id: "materialDepth",
        label: "资料成熟度",
        options: [
          { value: "full_samples", label: "完整脱敏样例", score: 18, note: "可支撑课堂和工具验证。" },
          { value: "partial_fields", label: "只有字段框架", score: 7, note: "适合先做资料包或短课。" },
          { value: "idea_only", label: "只有行业方向", score: -12, note: "需要先收集材料。" }
        ]
      },
      {
        id: "chainCoverage",
        label: "业务链路覆盖",
        options: [
          { value: "full_chain", label: "产品-询盘-报价-订单-单证-风险", score: 16, note: "具备完整案例条件。" },
          { value: "inquiry_quote", label: "询盘与报价为主", score: 6, note: "可先做课堂片段。" },
          { value: "product_only", label: "只有产品资料", score: -10, note: "不能直接做完整案例。" }
        ]
      },
      {
        id: "authorization",
        label: "脱敏与授权",
        options: [
          { value: "sanitized", label: "已脱敏并授权展示", score: 14, note: "可进入公开或课堂使用。" },
          { value: "need_sanitize", label: "需要脱敏确认", score: -4, note: "先走资料治理流程。" },
          { value: "none", label: "无授权或来源不清", score: -28, note: "不得进入公开页面或工具测试。" }
        ]
      },
      {
        id: "primaryUse",
        label: "本期主要用途",
        options: [
          { value: "classroom", label: "系统课完整课堂案例", score: 10, note: "要求最高，需要完整链路。" },
          { value: "resource", label: "资源包或试听课", score: 5, note: "可从一个业务片段开始。" },
          { value: "marketing", label: "推广内容和直播课", score: 3, note: "必须注意承诺边界。" },
          { value: "enterprise", label: "企业诊断样板", score: 8, note: "需要企业流程和角色资料。" }
        ]
      }
    ],
    routes: [
      {
        id: "full_case",
        minScore: 88,
        title: "进入完整案例开发",
        summary: "资料和业务链路足够，可以规划独立案例页、课堂脚本、工具输出和资源包。",
        nextAction: "先按集成房屋母版补齐字段矩阵，再建立案例页和课堂演示路径。",
        publishTarget: "案例中心 + 课程体系 + 工具中心 + 资源中心",
        requiredChecks: ["完整链路样例", "脱敏授权记录", "至少 3 个工具输出", "人工边界说明", "移动端页面验证"]
      },
      {
        id: "resource_first",
        minScore: 72,
        title: "先做资源包或试听片段",
        summary: "已有业务价值，但资料还不足以支撑完整案例，适合先做资料包、试听课或课堂片段。",
        nextAction: "优先产出字段清单、询盘模板或报价前确认表，并继续收集真实样例。",
        publishTarget: "资源中心 + 课堂工作台 + 推广运营",
        requiredChecks: ["明确单一业务动作", "可下载模板", "下一步转化动作", "人工确认边界"]
      },
      {
        id: "enterprise_diagnosis",
        minScore: 62,
        title: "进入企业诊断素材池",
        summary: "行业有咨询价值，但资料更适合作为企业访谈和流程诊断，不宜立刻公开成课程案例。",
        nextAction: "用企业诊断表收集流程、角色、资料权限和工具需求，再判断是否升级案例。",
        publishTarget: "企业服务 + 运营指南",
        requiredChecks: ["企业访谈记录", "资料权限确认", "流程痛点", "工具需求评分"]
      },
      {
        id: "pause",
        minScore: 0,
        title: "暂缓开发",
        summary: "当前资料、授权或业务链路不足，先不要承诺公开案例、课程效果或工具上线。",
        nextAction: "补产品主数据、原始询盘、报价样例、订单/单证证据和授权记录后再评估。",
        publishTarget: "暂不发布",
        requiredChecks: ["补资料", "补授权", "补人工边界", "重新评分"]
      }
    ],
    manualBoundary:
      "规划器只用于课程产品排期，不代表可以直接公开企业资料或承诺交付结果。真实价格、利润、付款、交期、认证、清关、合规和客户承诺仍必须人工确认。"
  },
  fieldReplacementValidation: {
    title: "机械设备相邻行业字段替换验证台",
    description:
      "把集成房屋完整案例拆成可替换字段，再映射到机械设备 P0 候选行业。当前只做字段验证、资源包和企业诊断素材准备，不直接承诺完整案例页。",
    baseCase: "20ft 可扩展集成房屋出口项目",
    targetIndustry: "机械设备 / B2B 耐用品",
    targetSample: "数控金属管切割设备出口询盘样例",
    readinessDecision: "先进入字段替换验证 + 企业诊断素材池",
    downloads: [
      {
        label: "下载行业字段替换验证表 CSV",
        href: "./downloads/industry-case-field-replacement-board.csv",
        format: "CSV",
        note: "用于把集成房屋母版字段替换到机械设备、家具建材或消费品等候选行业。"
      },
      {
        label: "下载字段替换复盘 Brief 模板 MD",
        href: "./downloads/industry-case-field-replacement-brief-template.md",
        format: "Markdown",
        note: "用于记录替换样例、资料缺口、工具输出、人工边界和下一步发布决策。"
      }
    ],
    metrics: [
      {
        value: "7",
        label: "替换字段组",
        detail: "产品主数据、客户场景、询盘、报价、订单、单证、风险边界。"
      },
      {
        value: "4",
        label: "优先工具输出",
        detail: "技术参数核对、报价前补问、备件字段库、售后范围说明。"
      },
      {
        value: "P0",
        label: "候选优先级",
        detail: "机械设备已在案例准入中列为优先立项，但仍缺少真实脱敏样例。"
      }
    ],
    rows: [
      {
        fieldGroup: "产品主数据",
        integratedHouseField: "20ft 可扩展集成房屋、墙板、电气、卫浴、保温、装柜数量和安装资料。",
        machineryReplacement: "设备型号、加工对象、功率、管径范围、产能、控制系统、电压、备件和安装调试范围。",
        requiredEvidence: ["产品规格表", "选配清单", "电压与功率", "备件清单", "安装调试说明"],
        toolOutput: "技术参数核对表 + 产品资料成熟度检查",
        routePages: ["tools.html#tool-sample-validation-board", "enterprise.html#enterprise-training-plan-mapper", "course.html"],
        manualBoundary: "技术参数、产能、兼容材料、安全标准和安装要求必须由工程师或企业技术负责人确认。",
        validationDecision: "可替换，但必须先补技术参数和工程确认人。"
      },
      {
        fieldGroup: "客户与应用场景",
        integratedHouseField: "沙特建筑承包商，用于工地住宿营地，采购 80 套项目型产品。",
        machineryReplacement: "海外金属加工厂或设备经销商，用于扩产、替换旧设备或承接新订单。",
        requiredEvidence: ["客户类型", "应用行业", "采购目的", "现有设备痛点", "决策角色"],
        toolOutput: "客户画像与场景判断表",
        routePages: ["cases.html#case-replication-planner", "marketing.html", "resources.html"],
        manualBoundary: "客户真实性、采购预算、项目周期和竞争品牌信息不能由 Codex 推断。",
        validationDecision: "适合企业诊断和客户开发课程，不直接作为公开成功案例。"
      },
      {
        fieldGroup: "询盘与补问",
        integratedHouseField: "CIF Jeddah 询盘，客户已给数量和目的港，但缺少配置、认证和交付边界。",
        machineryReplacement: "客户询问设备型号、产能、加工材料、目标电压、安装培训、备件和质保。",
        requiredEvidence: ["原始询盘", "加工材料", "产能要求", "目标电压", "安装培训问题"],
        toolOutput: "技术型询盘识别表 + 报价前补问清单",
        routePages: ["classroom.html", "prompts.html", "tools.html"],
        manualBoundary: "性能承诺、样机测试、安装培训和质保条款必须由技术或售后岗位确认。",
        validationDecision: "可进入公开课片段，但只能展示拆解方法，不承诺设备适配。"
      },
      {
        fieldGroup: "报价结构",
        integratedHouseField: "基础成本、选配、国内费用、海运、保险、利润和 CIF 单价。",
        machineryReplacement: "设备主机、选配模块、木箱包装、备件、调试培训、海运、保险、付款条款和质保成本。",
        requiredEvidence: ["主机价格结构", "选配模块", "包装费用", "备件价格", "售后成本"],
        toolOutput: "机械设备报价前确认表 + 费用项漏项检查",
        routePages: ["tools.html#tool-classroom-acceptance-board", "enterprise.html#enterprise-proposal-approval", "playbook.html#playbook-tool-sprint-command-center"],
        manualBoundary: "真实成本、折扣、利润、汇率、运费有效期、付款条款和售后费用必须由授权岗位确认。",
        validationDecision: "只适合内部或企业脱敏样例验证，暂不公开展示真实数字。"
      },
      {
        fieldGroup: "订单与交付节点",
        integratedHouseField: "图纸确认、采购、生产、订舱、尾款、装柜和客户进度更新。",
        machineryReplacement: "技术确认、图纸或方案确认、生产排期、出厂测试、包装、订舱、安装资料和备件发运。",
        requiredEvidence: ["生产节点", "出厂测试记录", "包装照片", "安装资料", "备件发运记录"],
        toolOutput: "设备订单节点看板 + 客户进度邮件草稿",
        routePages: ["learning.html#learning-application-review", "tools.html#tool-sample-validation-board", "enterprise.html#enterprise-toolchain-signal"],
        manualBoundary: "生产周期、测试结论、包装强度、船期、安装安排和延误承诺必须由对应岗位确认。",
        validationDecision: "可用于企业 SOP 候选，需补真实脱敏订单节点。"
      },
      {
        fieldGroup: "单证与资料一致性",
        integratedHouseField: "PI、CI、PL、订舱资料中的品名、数量、重量、港口和贸易条款一致性。",
        machineryReplacement: "PI、CI、PL、装箱单、设备铭牌、木箱件数、重量体积、HS 编码和原产地资料一致性。",
        requiredEvidence: ["PI/CI/PL 字段", "包装清单", "重量体积", "铭牌信息", "HS 编码待确认"],
        toolOutput: "机械设备单证字段一致性检查表",
        routePages: ["case-integrated-house.html", "tools.html#tool-classroom-acceptance-board", "course.html"],
        manualBoundary: "HS 编码、申报要素、木包装要求、原产地证明和目的国清关必须由专业人员确认。",
        validationDecision: "可做字段替换，但合规结论只能作为人工复核清单。"
      },
      {
        fieldGroup: "风险与售后边界",
        integratedHouseField: "DDP、认证、建筑许可、安装责任、付款节点和清关风险。",
        machineryReplacement: "安装调试、远程支持、现场服务、质保除外责任、备件供应、付款账期和安全合规。",
        requiredEvidence: ["售后条款", "质保范围", "安装责任", "备件周期", "付款风险"],
        toolOutput: "售后范围说明 + 风险回复草稿",
        routePages: ["enterprise.html", "automation.html", "playbook.html"],
        manualBoundary: "安全合规、质保责任、现场安装、索赔、账期和法务条款必须由企业授权岗位确认。",
        validationDecision: "适合企业诊断，不适合公开承诺为自动风控结论。"
      }
    ],
    closeout: [
      {
        title: "通过项",
        detail: "产品资料、询盘拆解、报价前确认、订单节点和售后边界都能从集成房屋母版迁移。"
      },
      {
        title: "缺口项",
        detail: "仍缺少脱敏原始询盘、真实报价结构、备件清单、出厂测试记录和售后条款样例。"
      },
      {
        title: "下一步",
        detail: "先进入资源包和企业诊断素材池，收集 2 条脱敏询盘和 1 份报价结构后再评估完整案例。"
      }
    ],
    manualBoundary:
      "字段替换验证只证明结构可迁移，不证明机械设备案例已经可公开发布。技术、价格、交付、安装、质保、认证、清关和合同责任必须由人工确认。"
  },
  caseSprintCommandCenter: {
    title: "行业案例 Sprint 执行台",
    description:
      "把案例复制规划器的结论转成可执行 Sprint：明确本期候选行业、执行目标、证据状态、发布路线、风险模式、页面/数据/下载资产、Codex 任务、人工审批和回写窗口。",
    exportFilename: "industry-case-sprint-brief-output.md",
    downloads: [
      {
        label: "下载行业案例 Sprint 执行台 CSV",
        href: "./downloads/industry-case-sprint-command-center.csv",
        format: "CSV",
        note: "用于记录案例候选、Sprint 目标、证据状态、发布路线、风险模式、负责人和下一步动作。"
      },
      {
        label: "下载案例 Sprint Brief 模板 MD",
        href: "./downloads/industry-case-sprint-brief-template.md",
        format: "Markdown",
        note: "用于每期行业案例开发、资料包、推广素材或企业诊断素材的执行复盘。"
      },
      {
        label: "下载行业字段替换验证表 CSV",
        href: "./downloads/industry-case-field-replacement-board.csv",
        format: "CSV",
        note: "用于把集成房屋母版字段替换到机械设备等候选行业后再决定发布范围。"
      },
      {
        label: "下载字段替换复盘模板 MD",
        href: "./downloads/industry-case-field-replacement-brief-template.md",
        format: "Markdown",
        note: "用于记录字段替换、工具输出、人工边界、资料缺口和回写动作。"
      }
    ],
    defaults: {
      candidate: "machinery-equipment",
      sprintGoal: "enterprise-resource",
      evidenceState: "partial-authorized",
      releaseRoute: "enterprise-resource",
      riskMode: "enterprise-private",
      reviewWindow: "seven-days"
    },
    candidates: [
      {
        id: "machinery-equipment",
        label: "机械设备",
        owner: "行业顾问 + 企业服务负责人",
        sourceSignal: "企业咨询和学员行业里技术型产品占比高，询盘常卡在型号、产能、电压、安装和售后。",
        basePages: ["cases.html", "enterprise.html", "tools.html", "playbook.html#playbook-evidence-coverage-index"],
        dataFiles: ["data/cases.js", "data/enterprise.js", "data/tools.js"],
        downloads: ["industry-case-intake.csv", "industry-case-sprint-plan.md", "enterprise-material-checklist.csv"],
        codexTasks: ["整理技术参数字段", "生成报价前补问清单", "草拟企业访谈问题", "生成资源包结构"],
        manualGates: ["工程师确认技术参数", "企业确认资料授权", "负责人确认不公开成本、合同和客户资料"],
        missingEvidence: ["2 条脱敏原始询盘", "1 份报价结构", "备件清单", "售后条款"],
        nextAction: "先收集脱敏询盘和报价结构，再判断是否升级完整案例。"
      },
      {
        id: "furniture-building-materials",
        label: "家具建材",
        owner: "内容负责人 + 主讲老师",
        sourceSignal: "定制订单涉及尺寸、材质、颜色、包装、打样和验货，适合做资料包和课堂片段。",
        basePages: ["cases.html", "resources.html", "classroom.html", "tools.html"],
        dataFiles: ["data/cases.js", "data/site.js", "data/classroom.js", "data/tools.js"],
        downloads: ["industry-case-intake.csv", "product-profile-homework-template.md", "quotation-calculation-homework-template.md"],
        codexTasks: ["整理尺寸材质字段", "生成打样确认清单", "草拟课堂片段", "生成作业模板替换说明"],
        manualGates: ["客户规格确认", "色差和样品确认", "包装和验货标准确认"],
        missingEvidence: ["完整打样记录", "包装装柜样例", "客户验货标准"],
        nextAction: "先发布字段清单和打样确认作业，不新建完整案例页。"
      },
      {
        id: "consumer-goods",
        label: "消费品",
        owner: "市场运营 + 课程顾问",
        sourceSignal: "新人和小团队常见 MOQ、样品费、包装、认证、客户分层和复购问题，适合短内容和试听课。",
        basePages: ["marketing.html", "resources.html", "enrollment.html", "cases.html"],
        dataFiles: ["data/marketing.js", "data/site.js", "data/enrollment.js", "data/cases.js"],
        downloads: ["resource-lead-tagging-board.csv", "trial-class-brief-template.md", "lead-followup-homework-template.md"],
        codexTasks: ["生成短内容选题", "整理 MOQ 和样品费问题", "生成跟进标签", "草拟试听课片段"],
        manualGates: ["MOQ 和库存确认", "认证真实性确认", "渠道授权和样品承诺确认"],
        missingEvidence: ["稳定产品样例", "认证样例", "客户分层记录", "复购记录"],
        nextAction: "先做 3 条短内容和 1 个资料下载入口，观察转化信号。"
      },
      {
        id: "electronic-accessories",
        label: "电子配件",
        owner: "专业顾问 + 课程负责人",
        sourceSignal: "规格兼容、认证、测试报告和售后风险明显，但专业边界高，资料不足时不适合公开讲解。",
        basePages: ["cases.html", "playbook.html", "prompts.html"],
        dataFiles: ["data/cases.js", "data/playbook.js", "data/prompts.js"],
        downloads: ["industry-case-readiness-scorecard.csv", "data-sanitization-authorization-board.csv", "prompt-quality-checklist.csv"],
        codexTasks: ["生成资料缺口清单", "整理风险问题", "草拟专业顾问访谈提纲", "记录暂缓原因"],
        manualGates: ["认证和测试报告确认", "兼容性确认", "目标市场合规确认", "售后责任确认"],
        missingEvidence: ["真实规格表", "测试报告", "认证资料", "售后问题记录"],
        nextAction: "只进入资料收集，不进入公开课、招生证据或工具测试。"
      }
    ],
    sprintGoals: [
      {
        id: "full-case",
        label: "完整案例开发",
        score: 18,
        scope: "本期目标是新建完整案例页、课堂脚本、工具输出、资源包和企业诊断样板。",
        deliverables: ["完整案例页", "课堂脚本", "工具输出", "资源包", "发布审计"],
        gate: "必须有完整链路、脱敏授权和至少 3 个可验收工具输出。"
      },
      {
        id: "enterprise-resource",
        label: "企业诊断 + 资源包",
        score: 10,
        scope: "本期先沉淀企业访谈问题、资料清单、字段模板和资源中心入口。",
        deliverables: ["企业访谈问题", "资料清单", "字段模板", "资源卡片"],
        gate: "必须确认企业资料授权和不可公开字段。"
      },
      {
        id: "marketing-fragment",
        label: "推广素材 + 试听片段",
        score: 5,
        scope: "本期只做短内容、公开课片段和资料领取承接，不承诺完整课程案例。",
        deliverables: ["短内容选题", "试听课片段", "资料领取入口", "未成交复盘"],
        gate: "必须保留行业适配和人工确认边界。"
      },
      {
        id: "hold-collect",
        label: "暂缓开发，只收资料",
        score: -16,
        scope: "本期只做资料缺口和专业顾问访谈，不进入公开页面或工具测试。",
        deliverables: ["资料缺口清单", "访谈提纲", "暂缓原因", "下次评估窗口"],
        gate: "不得用于公开课、招生证据或企业交付承诺。"
      }
    ],
    evidenceStates: [
      {
        id: "full-authorized",
        label: "完整脱敏并授权",
        score: 18,
        note: "可以评估完整案例页和课堂演示。",
        repair: "进入发布审计前仍要确认展示范围、撤回机制和不可公开字段。"
      },
      {
        id: "partial-authorized",
        label: "部分资料已脱敏",
        score: 6,
        note: "适合先做资源包、课堂片段或企业诊断素材。",
        repair: "补齐原始询盘、报价、订单/单证或授权记录。"
      },
      {
        id: "internal-only",
        label: "仅内部可看",
        score: -8,
        note: "只能内部评审，不进入公开资源或营销。",
        repair: "先走资料治理台，确认脱敏、授权、用途和撤回方式。"
      },
      {
        id: "unknown-source",
        label: "来源或授权不清",
        score: -32,
        note: "必须暂缓开发。",
        repair: "退回资料提供方，补来源、授权和敏感字段处理。"
      }
    ],
    releaseRoutes: [
      {
        id: "case-course-tool",
        label: "案例页 + 课程 + 工具",
        score: 16,
        publishTarget: "案例中心、课程体系、工具中心、资源中心",
        tests: ["页面证据", "工具输出", "课堂脚本", "下载资产", "移动端检查"]
      },
      {
        id: "enterprise-resource",
        label: "企业服务 + 资源中心",
        score: 9,
        publishTarget: "企业服务、资源中心、运营指南",
        tests: ["资料清单", "企业访谈", "资源入口", "授权边界"]
      },
      {
        id: "marketing-resource",
        label: "推广运营 + 资源中心",
        score: 4,
        publishTarget: "推广运营、资源中心、报名路径",
        tests: ["内容选题", "试听片段", "CTA", "承诺边界"]
      },
      {
        id: "internal-hold",
        label: "内部资料池",
        score: -10,
        publishTarget: "暂不公开",
        tests: ["资料缺口", "授权状态", "专业边界", "下次评估"]
      }
    ],
    riskModes: [
      {
        id: "standard",
        label: "常规课堂风险",
        penalty: 0,
        rule: "按课程、工具和资源边界确认即可。",
        reviewers: ["课程负责人", "主讲老师"]
      },
      {
        id: "public-proof",
        label: "公开展示风险",
        penalty: -6,
        rule: "公开课、短视频、资源包和招生证据必须确认脱敏、授权和禁止承诺。",
        reviewers: ["课程负责人", "运营负责人", "资料提供方"]
      },
      {
        id: "enterprise-private",
        label: "企业资料风险",
        penalty: -10,
        rule: "企业真实资料默认不公开，只能在授权范围内用于诊断、内训或内部工具测试。",
        reviewers: ["企业服务负责人", "企业授权岗位", "交付负责人"]
      },
      {
        id: "regulated",
        label: "高专业边界风险",
        penalty: -18,
        rule: "涉及认证、测试报告、合规、法务、税务、清关或安全承诺时，先暂缓公开。",
        reviewers: ["专业顾问", "课程负责人", "企业授权岗位"]
      }
    ],
    reviewWindows: [
      {
        id: "seven-days",
        label: "7 天",
        cadence: "适合资料包、短内容或企业访谈快速补证据。",
        closeout: "7 天内确认是否升级、继续补资料或暂缓。"
      },
      {
        id: "fourteen-days",
        label: "14 天",
        cadence: "适合课堂片段和资源包联动，需要收集课堂反馈。",
        closeout: "14 天后按下载、互动、作业质量和资料授权复盘。"
      },
      {
        id: "thirty-days",
        label: "30 天",
        cadence: "适合高专业边界或企业资料不足的案例方向。",
        closeout: "30 天后只按资料完整度和专家确认情况重新评分。"
      }
    ],
    decisions: [
      {
        id: "ready",
        minScore: 88,
        label: "进入完整案例 Sprint",
        summary: "证据和授权足以支撑完整案例、课堂脚本、工具输出和资源承接。",
        releaseGate: "发布前必须完成完整页面、下载资产、浏览器验证和人工边界审查。"
      },
      {
        id: "resource",
        minScore: 68,
        label: "先做资源/企业素材 Sprint",
        summary: "有明确业务价值，但暂不适合完整案例页，先做资源包、企业诊断或课堂片段。",
        releaseGate: "只能发布到资源、企业或课堂片段，不得包装成完整行业案例。"
      },
      {
        id: "repair",
        minScore: 42,
        label: "补资料后复评",
        summary: "资料或授权仍不完整，先补证据、授权、人工边界和样板输出。",
        releaseGate: "未补齐前只能内部评审。"
      },
      {
        id: "hold",
        minScore: 0,
        label: "暂缓，不进入公开开发",
        summary: "资料、授权或专业边界不满足上线要求，不能进入公开课、招生证据或工具测试。",
        releaseGate: "只保留在内部资料池和下次复盘窗口。"
      }
    ],
    operatingRules: [
      "行业案例 Sprint 必须从集成房屋母版出发，先判断哪些字段可替换，哪些行业风险不能套用。",
      "没有脱敏授权、没有原始业务输入、没有人工确认门槛的行业方向不能进入公开页面。",
      "资源包、推广素材和企业诊断素材都不能被销售话术包装成完整案例或效果承诺。",
      "Sprint 结束后必须回写案例中心、资源中心、企业服务、工具需求或运营指南。"
    ]
  },
  casePublicationRouter: {
    title: "行业案例发布与资源化路由台",
    description:
      "把案例 Sprint 的输出继续路由到完整案例页、课堂片段、资源中心、推广素材、企业诊断素材或内部资料池，并同步判断授权范围、人工审批、下载资产和版本回写。",
    exportFilename: "industry-case-publication-brief-output.md",
    downloads: [
      {
        label: "下载行业案例发布路由表 CSV",
        href: "./downloads/industry-case-publication-router.csv",
        format: "CSV",
        note: "用于记录案例 Sprint 结束后进入课程、资源、营销、企业诊断或内部归档的发布决策。"
      },
      {
        label: "下载案例发布 Brief 模板 MD",
        href: "./downloads/industry-case-publication-brief-template.md",
        format: "Markdown",
        note: "用于记录发布范围、授权边界、页面路线、下载资产、人工审批和版本回写任务。"
      },
      {
        label: "下载行业案例 Sprint 执行台 CSV",
        href: "./downloads/industry-case-sprint-command-center.csv",
        format: "CSV",
        note: "发布路由必须承接 Sprint 执行台的候选行业、证据状态、风险模式和回写窗口。"
      }
    ],
    defaults: {
      sourceAsset: "machinery-field-pack",
      publicationMode: "enterprise-resource",
      evidenceLevel: "partial-authorized",
      authorizationScope: "enterprise-private",
      platformDestination: "enterprise-resource",
      riskGate: "private-data",
      reviewWindow: "seven-days"
    },
    sourceAssets: [
      {
        id: "machinery-field-pack",
        label: "机械设备字段替换包",
        owner: "行业顾问 + 企业服务负责人",
        sprintSource: "机械设备 P0 字段替换验证",
        evidenceSignal: "已有技术参数、询盘字段和报价前补问框架，但仍缺少 2 条脱敏原始询盘和 1 份报价结构。",
        basePages: ["cases.html#case-field-replacement-validation", "enterprise.html", "tools.html"],
        dataFiles: ["data/cases.js", "data/enterprise.js", "data/tools.js"],
        sourceDownloads: ["industry-case-field-replacement-board.csv", "enterprise-material-checklist.csv", "tool-build-brief-template.csv"],
        codexTasks: ["生成机械设备资源包说明", "整理技术参数字段差异", "草拟企业访谈问题", "生成报价前补问清单"],
        manualGates: ["工程师确认技术参数", "企业确认资料授权", "负责人确认不公开成本、合同和客户资料"],
        noGoClaims: ["不得宣称机械设备完整案例已上线", "不得公开企业报价、合同和客户身份"],
        nextAction: "先作为企业诊断素材和资源包发布，补齐脱敏询盘后再评估完整案例页。"
      },
      {
        id: "furniture-sampling-pack",
        label: "家具建材打样确认包",
        owner: "内容负责人 + 主讲老师",
        sprintSource: "家具建材资料包候选",
        evidenceSignal: "已有尺寸、材质、颜色、包装和打样确认场景，缺少客户验货标准和完整装柜样例。",
        basePages: ["cases.html", "resources.html", "classroom.html"],
        dataFiles: ["data/cases.js", "data/site.js", "data/classroom.js"],
        sourceDownloads: ["industry-case-intake.csv", "product-profile-homework-template.md", "quotation-calculation-homework-template.md"],
        codexTasks: ["整理打样确认清单", "生成课堂片段讲法", "草拟资源包卡片", "补作业模板替换说明"],
        manualGates: ["客户规格确认", "色差和样品确认", "包装和验货标准确认"],
        noGoClaims: ["不得承诺打样一次通过", "不得替代客户验货和质量标准确认"],
        nextAction: "先发布资源包和课堂片段，收集真实打样记录后再升级案例。"
      },
      {
        id: "consumer-followup-pack",
        label: "消费品 MOQ 与复购跟进包",
        owner: "市场运营 + 课程顾问",
        sprintSource: "消费品推广素材候选",
        evidenceSignal: "MOQ、样品费、包装、客户分层和复购跟进问题高频出现，适合短内容和试听课承接。",
        basePages: ["marketing.html", "resources.html", "enrollment.html"],
        dataFiles: ["data/marketing.js", "data/site.js", "data/enrollment.js"],
        sourceDownloads: ["resource-lead-tagging-board.csv", "trial-class-brief-template.md", "lead-followup-homework-template.md"],
        codexTasks: ["生成 3 条短内容选题", "整理 MOQ 和样品费答疑", "生成试听课片段", "补资源领取标签"],
        manualGates: ["MOQ 和库存确认", "认证真实性确认", "渠道授权和样品承诺确认"],
        noGoClaims: ["不得承诺自动成交或复购", "不得替代库存、认证和渠道授权判断"],
        nextAction: "先进入推广运营和资源中心，观察 7 天咨询信号。"
      },
      {
        id: "electronic-compliance-hold",
        label: "电子配件认证风险资料池",
        owner: "专业顾问 + 课程负责人",
        sprintSource: "电子配件暂缓候选",
        evidenceSignal: "只有规格、兼容、认证和售后风险方向，缺少真实规格表、测试报告、认证资料和售后记录。",
        basePages: ["cases.html", "playbook.html", "prompts.html"],
        dataFiles: ["data/cases.js", "data/playbook.js", "data/prompts.js"],
        sourceDownloads: ["industry-case-readiness-scorecard.csv", "data-sanitization-authorization-board.csv", "prompt-quality-checklist.csv"],
        codexTasks: ["生成资料缺口清单", "整理风险问题", "草拟专业顾问访谈提纲", "记录暂缓原因"],
        manualGates: ["认证和测试报告确认", "兼容性确认", "目标市场合规确认", "售后责任确认"],
        noGoClaims: ["不得进入公开课或招生证据", "不得用 Codex 推断认证、测试和兼容结论"],
        nextAction: "只进入内部资料池和专家访谈，不进入公开发布。"
      }
    ],
    publicationModes: [
      {
        id: "full-case",
        label: "完整案例页",
        score: 18,
        deliverables: ["完整案例页面", "课堂脚本", "工具输出样例", "资源包", "发布审计"],
        outputPages: ["cases.html", "course.html", "tools.html", "resources.html"],
        gate: "必须有完整链路、脱敏授权、人工边界和至少 3 个可验收工具输出。"
      },
      {
        id: "course-fragment",
        label: "课堂片段",
        score: 10,
        deliverables: ["课堂讲法", "作业替换说明", "老师提醒", "助教验收项"],
        outputPages: ["classroom.html", "course.html", "learning.html"],
        gate: "只能作为片段教学，不得包装成完整行业案例。"
      },
      {
        id: "resource-pack",
        label: "资源包",
        score: 8,
        deliverables: ["资源卡片", "下载模板", "领取标签", "下一步 CTA"],
        outputPages: ["resources.html", "marketing.html", "enrollment.html"],
        gate: "必须说明适合对象、解决问题、下载内容、承诺边界和跟进路线。"
      },
      {
        id: "enterprise-resource",
        label: "企业诊断素材",
        score: 6,
        deliverables: ["企业访谈问题", "资料清单", "scope 提醒", "内训替换线索"],
        outputPages: ["enterprise.html", "playbook.html", "tools.html"],
        gate: "企业资料默认不公开，必须确认授权范围和交付边界。"
      },
      {
        id: "internal-archive",
        label: "内部归档",
        score: -18,
        deliverables: ["资料缺口", "暂缓原因", "复评窗口", "负责人"],
        outputPages: ["playbook.html"],
        gate: "不得进入公开页面、资源下载、招生证据或工具测试。"
      }
    ],
    evidenceLevels: [
      {
        id: "complete-authorized",
        label: "完整授权证据",
        score: 18,
        note: "可评估公开案例、资源包和课堂演示。",
        repair: "发布前仍需锁定脱敏版本、撤回路径和不可公开字段。"
      },
      {
        id: "partial-authorized",
        label: "部分授权证据",
        score: 6,
        note: "适合资源包、课堂片段或企业诊断素材。",
        repair: "补齐原始询盘、报价结构、订单/单证样例或授权记录。"
      },
      {
        id: "classroom-only",
        label: "仅课堂内部使用",
        score: -4,
        note: "可用于老师内部讲法和作业替换，不进入公开营销。",
        repair: "补展示授权和可公开版本后再进入资源或案例页。"
      },
      {
        id: "enterprise-private",
        label: "企业私有资料",
        score: -8,
        note: "只用于企业诊断、内训或内部工具测试。",
        repair: "确认企业授权岗位、使用范围、脱敏要求和撤回机制。"
      },
      {
        id: "unknown-source",
        label: "来源或授权不清",
        score: -34,
        note: "必须暂缓发布。",
        repair: "退回资料提供方，补来源、授权、敏感字段处理和使用目的。"
      }
    ],
    authorizationScopes: [
      {
        id: "public-masked",
        label: "可公开脱敏展示",
        score: 16,
        permittedUse: "案例页、资源中心、公开课、招生咨询和课堂演示。",
        prohibitedUse: "不得公开客户身份、真实价格、合同、成本利润和未授权附件。"
      },
      {
        id: "classroom-internal",
        label: "仅课堂内部展示",
        score: 4,
        permittedUse: "正式课、作业讲评和老师内部教研。",
        prohibitedUse: "不得进入营销素材、公开资源、招生证明或企业对外样板。"
      },
      {
        id: "enterprise-private",
        label: "仅企业项目使用",
        score: -6,
        permittedUse: "企业诊断、内训、scope 确认和项目内部复盘。",
        prohibitedUse: "不得进入公开页面、资源下载、短视频、公开课或报名话术。"
      },
      {
        id: "internal-review",
        label: "仅内部评审",
        score: -14,
        permittedUse: "资料缺口复盘、专家访谈和下次准入评分。",
        prohibitedUse: "不得用于课堂、营销、招生、资源下载或企业交付承诺。"
      },
      {
        id: "no-authorization",
        label: "无授权",
        score: -42,
        permittedUse: "不使用，只记录缺口。",
        prohibitedUse: "不得复制、展示、训练工具、公开发布或进入销售证明。"
      }
    ],
    platformDestinations: [
      {
        id: "case-course-tool",
        label: "案例 + 课程 + 工具",
        score: 15,
        pageRoutes: ["cases.html", "course.html", "tools.html", "prompts.html"],
        writeback: ["案例库状态", "课程模块链接", "工具需求池", "指令替换说明"],
        validation: ["案例卡片", "课堂脚本", "工具输出", "下载资产", "移动端检查"]
      },
      {
        id: "resource-marketing",
        label: "资源 + 推广 + 报名",
        score: 9,
        pageRoutes: ["resources.html", "marketing.html", "enrollment.html"],
        writeback: ["资源卡片", "内容选题", "咨询证据", "跟进标签"],
        validation: ["资源下载", "CTA", "承诺边界", "试听课承接"]
      },
      {
        id: "enterprise-resource",
        label: "企业服务 + 资源中心",
        score: 7,
        pageRoutes: ["enterprise.html", "resources.html", "playbook.html"],
        writeback: ["企业诊断资料", "资源说明", "scope 边界", "交付证据回写"],
        validation: ["授权范围", "企业访谈", "资料清单", "内部/公开边界"]
      },
      {
        id: "internal-governance",
        label: "内部治理归档",
        score: -12,
        pageRoutes: ["playbook.html", "cases.html"],
        writeback: ["资料缺口", "暂缓原因", "复评窗口", "负责人"],
        validation: ["来源确认", "授权状态", "专业边界", "下次评估"]
      }
    ],
    riskGates: [
      {
        id: "standard",
        label: "常规教学风险",
        penalty: 0,
        rule: "按课程、工具和资源边界确认即可。",
        reviewers: ["课程负责人", "主讲老师"]
      },
      {
        id: "public-proof",
        label: "公开证明风险",
        penalty: -8,
        rule: "公开课、资源包、招生证明和短内容必须确认脱敏授权、禁止承诺和撤回机制。",
        reviewers: ["课程负责人", "运营负责人", "资料提供方"]
      },
      {
        id: "private-data",
        label: "企业私有资料风险",
        penalty: -12,
        rule: "企业真实资料默认不公开，只能在授权范围内用于诊断、内训或内部工具测试。",
        reviewers: ["企业服务负责人", "企业授权岗位", "交付负责人"]
      },
      {
        id: "regulated",
        label: "认证合规高风险",
        penalty: -22,
        rule: "涉及认证、测试、兼容、法务、税务、清关或安全承诺时，先暂缓公开。",
        reviewers: ["专业顾问", "课程负责人", "企业授权岗位"]
      }
    ],
    reviewWindows: [
      {
        id: "seven-days",
        label: "7 天",
        cadence: "适合资源包、短内容、企业访谈问题和轻量课堂片段。",
        closeout: "7 天后复盘下载、咨询、授权补齐和是否升级。"
      },
      {
        id: "fourteen-days",
        label: "14 天",
        cadence: "适合课堂片段、资料包和工具需求联动。",
        closeout: "14 天后按课堂反馈、作业质量、下载转化和资料授权复盘。"
      },
      {
        id: "thirty-days",
        label: "30 天",
        cadence: "适合企业私有资料、高专业边界或证据不足的候选案例。",
        closeout: "30 天后只按资料完整度、专家确认和授权状态重新评分。"
      }
    ],
    decisions: [
      {
        id: "publish",
        minScore: 86,
        label: "允许公开发布",
        summary: "证据、授权和人工边界足以支撑公开案例、资源包或课堂演示。",
        releaseGate: "发布前必须完成页面、数据、下载、移动端和人工边界审查。"
      },
      {
        id: "restricted",
        minScore: 62,
        label: "限制范围发布",
        summary: "可以进入资源包、课堂片段或企业诊断素材，但不能包装成完整公开案例。",
        releaseGate: "必须在页面和下载中明确使用范围、禁止承诺和复盘窗口。"
      },
      {
        id: "repair",
        minScore: 38,
        label: "补证据后再发布",
        summary: "资料、授权或人工边界仍不完整，先补缺口和审批记录。",
        releaseGate: "未补齐前只能内部评审或小范围课堂使用。"
      },
      {
        id: "hold",
        minScore: 0,
        label: "暂缓发布",
        summary: "来源、授权或专业边界不足，不进入公开课、招生证据、资源下载或工具测试。",
        releaseGate: "只保留缺口、负责人和下次评估窗口。"
      }
    ],
    operatingRules: [
      "案例发布必须承接案例 Sprint 结果，不能跳过证据、授权和人工边界直接上线。",
      "资源包、课堂片段、营销素材和企业诊断素材要分别标明可用范围，不能互相冒充完整案例。",
      "企业私有资料默认不可公开，只有明确授权和脱敏版本才能进入案例页、资源中心或招生证明。",
      "每次发布或暂缓都要回写页面路线、下载资产、负责人、复盘窗口和版本维护记录。"
    ]
  },
  replicationKit: {
    title: "行业案例复制包",
    description:
      "把集成房屋案例沉淀成可复制的方法，后续新增机械、家具建材、消费品或电子配件案例时，先按同一套字段收集资料，再决定是否进入课程、工具、指令和资源中心。",
    downloads: [
      {
        label: "下载行业案例立项模板 MD",
        href: "./downloads/industry-case-build-brief.md",
        format: "Markdown",
        note: "用于新增行业案例前的立项、资料确认和上课路径设计。"
      },
      {
        label: "下载行业案例资料清单 CSV",
        href: "./downloads/industry-case-intake.csv",
        format: "CSV",
        note: "用于收集产品、客户、询盘、报价、订单、单证和风险样例。"
      }
    ],
    intakeFlow: [
      {
        stage: "01",
        title: "选行业和产品",
        owner: "行业顾问 + 课程负责人",
        output: "确定一个主推产品、一类目标客户和一个可讲清楚的订单场景。",
        boundary: "不能只选热门行业，必须有可脱敏的真实业务资料。"
      },
      {
        stage: "02",
        title: "收集完整链路资料",
        owner: "内容负责人 + 企业资料提供方",
        output: "产品参数、客户画像、原始询盘、报价字段、订单节点和单证样例。",
        boundary: "客户隐私、成本利润、合同和真实订单必须先脱敏。"
      },
      {
        stage: "03",
        title: "映射到课程和工具",
        owner: "主讲老师 + 产品负责人",
        output: "课程模块、工具输出、指令包、资源下载和学员作业说明。",
        boundary: "无法生成工具输出或作业的内容不进入完整案例。"
      },
      {
        stage: "04",
        title: "补人工确认边界",
        owner: "课程负责人 + 专业顾问",
        output: "报价、付款、认证、清关、税务、法务和客户承诺边界。",
        boundary: "专业判断必须由企业、行业顾问或授权岗位确认。"
      },
      {
        stage: "05",
        title: "发布到案例中心",
        owner: "开发负责人 + 运营负责人",
        output: "案例卡片、完整案例页、资源包和运营维护记录。",
        boundary: "发布前必须通过页面、数据、下载和移动端检查。"
      }
    ],
    fieldMatrix: [
      {
        field: "产品主数据",
        integratedHouseExample: "20ft 可扩展集成房屋、卫浴、电气、保温、装柜数量",
        newCaseRequirement: "明确产品型号、规格、选配、包装、认证和报价字段。",
        linkedModule: "产品资料 / 报价 / 单证"
      },
      {
        field: "客户与场景",
        integratedHouseExample: "沙特建筑承包商，工地住宿营地，80 套采购需求",
        newCaseRequirement: "明确客户类型、采购用途、目标市场、决策角色和痛点。",
        linkedModule: "客户开发 / 询盘处理"
      },
      {
        field: "询盘与报价",
        integratedHouseExample: "CIF Jeddah 询盘、配置缺失、DDP 风险提示",
        newCaseRequirement: "提供原始询盘、缺失字段、报价条款、费用项和补问问题。",
        linkedModule: "询盘识别 / 报价测算"
      },
      {
        field: "订单与单证",
        integratedHouseExample: "订单节点、PI/CI/PL 字段冲突、订舱资料",
        newCaseRequirement: "提供订单主数据、生产节点、单证字段和常见冲突样例。",
        linkedModule: "订单跟进 / 单证检查"
      },
      {
        field: "风险边界",
        integratedHouseExample: "DDP、HS Code、认证、清关、建筑许可人工确认",
        newCaseRequirement: "列出行业特有风险、确认人、对客户表达和禁止自动承诺项。",
        linkedModule: "风险控制 / 企业诊断"
      }
    ],
    qualityGates: [
      "案例必须有一个可完整讲完的业务链路，而不是只有产品介绍。",
      "案例必须能生成至少 3 个工具输出，例如询盘表、报价清单、订单看板或单证检查表。",
      "案例必须能给学员布置替换作业，让学员换成自己的产品和客户资料。",
      "案例必须能拆成资源包或试听课入口，用于招生和企业咨询承接。",
      "案例必须写清人工确认边界，尤其是价格、付款、交期、认证、清关和合规。"
    ]
  },
  expansionRoadmap: [
    {
      phase: "当前阶段",
      title: "打磨集成房屋完整案例",
      focus: "让首套案例同时服务课程、工具、资源、企业服务和宣传展示。"
    },
    {
      phase: "下一阶段",
      title: "新增机械设备案例",
      focus: "补齐技术参数、安装调试、质保和备件等技术型产品训练场景。"
    },
    {
      phase: "第三阶段",
      title: "新增家具建材和消费品案例",
      focus: "覆盖定制订单、高频询盘、样品报价、包装和复购跟进。"
    },
    {
      phase: "长期阶段",
      title: "形成行业案例库",
      focus: "每个新案例都独立维护数据文件，并复用同一课程、工具和风险边界标准。"
    }
  ],
  platformLinks: [
    {
      title: "课程体系",
      value: "案例用于老师课堂演示和学员作业，不只是营销故事。",
      href: "./course.html"
    },
    {
      title: "工具中心",
      value: "案例中的重复字段会沉淀为询盘、报价、订单和单证工具。",
      href: "./tools.html"
    },
    {
      title: "资源中心",
      value: "完整案例可以拆成资料包、试听课和模板下载。",
      href: "./resources.html"
    },
    {
      title: "企业服务",
      value: "企业客户可以用案例判断自己的流程是否适合改造。",
      href: "./enterprise.html"
    }
  ]
};
