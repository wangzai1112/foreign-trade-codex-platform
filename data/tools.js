window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.toolDemos = {
  productProfileDesk: {
    title: "产品资料成熟度课堂演示器",
    description:
      "用集成房屋样例演示如何把产品参数、配置、包装、认证、安装、质保和单证字段整理成可复用产品资料工作台。该演示器用于课堂和企业内训准备，不替代企业对产品事实、认证、库存和交付能力的确认。",
    exportFilename: "product-profile-classroom-output.md",
    homeworkTemplate: {
      label: "下载产品资料作业模板 MD",
      href: "./downloads/product-profile-homework-template.md",
      format: "Markdown",
      note: "用于学员把自己的脱敏产品资料整理成字段表、缺失项、人工确认人和后续工具输入。"
    },
    sampleProfile: {
      product: "20ft Expandable Prefab Container House",
      industry: "集成房屋 / 工地营地",
      classroomUse: "作为客户开发、询盘识别、报价测算、订单主数据、单证检查和企业内训的共同输入。"
    },
    fields: [
      {
        category: "基础资料",
        field: "英文产品名",
        value: "20ft Expandable Prefab Container House",
        status: "Ready",
        source: "产品目录",
        owner: "业务负责人",
        nextAction: "锁定标准英文品名，后续开发信、询盘和单证统一使用。",
        useCase: ["客户开发", "询盘回复", "单证字段"]
      },
      {
        category: "应用场景",
        field: "主要用途",
        value: "Worker accommodation, site office, mining camp, temporary housing",
        status: "Ready",
        source: "销售案例",
        owner: "销售主管",
        nextAction: "按不同客户类型拆成开发信角度和 FAQ。",
        useCase: ["客户画像", "开发信", "B2B 页面"]
      },
      {
        category: "规格参数",
        field: "尺寸与结构",
        value: "20ft expandable layout; galvanized steel frame",
        status: "Confirm",
        source: "工厂参数表",
        owner: "工厂技术",
        nextAction: "由工厂确认最终展开尺寸、折叠尺寸、结构参数和可承重边界。",
        useCase: ["询盘补问", "报价前确认", "产品页面"]
      },
      {
        category: "配置选项",
        field: "墙板与保温",
        value: "EPS / Rock Wool / PU sandwich panel options",
        status: "Confirm",
        source: "产品目录",
        owner: "技术 + 报价",
        nextAction: "确认不同墙板材料的价格、交期、防火等级和目标市场适用性。",
        useCase: ["询盘识别", "报价测算", "风险边界"]
      },
      {
        category: "配置选项",
        field: "卫浴、电气和空调预留",
        value: "Bathroom, electrical wiring, AC opening, furniture options",
        status: "Ready",
        source: "样品配置",
        owner: "业务 + 工厂",
        nextAction: "拆成标准配置和可选配置，避免报价时混在一个总价里。",
        useCase: ["报价测算", "订单主数据", "客户 FAQ"]
      },
      {
        category: "包装装柜",
        field: "包装与装柜数量",
        value: "To be confirmed by factory and forwarder",
        status: "Missing",
        source: "待补资料",
        owner: "工厂物流 + 货代",
        nextAction: "补充包装方式、单柜装载数量、毛重、体积和装柜照片。",
        useCase: ["报价测算", "订舱", "单证检查"]
      },
      {
        category: "认证合规",
        field: "防火、抗风、抗雪和认证",
        value: "Need verified reports or certificates before customer commitment",
        status: "Missing",
        source: "待补资料",
        owner: "技术 + 合规负责人",
        nextAction: "收集真实检测报告、认证文件和适用国家说明，不允许由 Codex 编造。",
        useCase: ["询盘回复", "风险边界", "企业内训"]
      },
      {
        category: "交付责任",
        field: "安装范围",
        value: "Installation guide / remote support / on-site service to be defined",
        status: "Confirm",
        source: "服务政策",
        owner: "项目交付负责人",
        nextAction: "确认是否只提供安装指南、远程支持、现场服务或当地合作方转介。",
        useCase: ["客户补问", "合同边界", "DDP 风险"]
      },
      {
        category: "售后质保",
        field: "质保和备件",
        value: "Warranty term and spare parts policy need approval",
        status: "Missing",
        source: "待补资料",
        owner: "售后 + 管理层",
        nextAction: "确认质保期限、除外责任、备件供应和索赔处理流程。",
        useCase: ["客户 FAQ", "合同条款", "企业 SOP"]
      },
      {
        category: "单证字段",
        field: "HS 编码方向",
        value: "9406 prefabricated buildings direction; final classification must be confirmed",
        status: "Confirm",
        source: "历史报关方向",
        owner: "报关行 / 单证",
        nextAction: "由报关行或专业人员确认 HS 编码、申报要素和目的国清关口径。",
        useCase: ["单证检查", "报价边界", "合规风险"]
      }
    ],
    manualBoundaries: [
      "产品尺寸、材料、承重、防火、抗风、抗雪、认证和适用国家必须来自真实资料或专业人员确认。",
      "成本、库存、产能、装柜数量、交期、包装方式和海运数据必须由工厂、报价负责人或货代确认。",
      "HS 编码、申报要素、目的国清关、税费和建筑许可必须由报关行、当地代理或专业人员确认。",
      "安装、质保、售后、赔偿和合同责任不能由工具自动承诺，必须由授权岗位确认。",
      "学员或企业提交的产品资料必须先脱敏，内部成本、供应商、客户资料和未公开技术文件不得直接进入公开页面。"
    ],
    qualityChecks: [
      "是否至少覆盖英文品名、应用场景、规格参数、配置选项、包装装柜、认证合规、安装、售后和单证字段。",
      "是否把每个字段标记为 Ready、Confirm 或 Missing，并写清资料来源和负责人。",
      "是否说明该字段会被客户开发、询盘、报价、订单、单证或企业内训哪一步复用。",
      "是否没有让 Codex 虚构认证、参数、价格、交期、库存、装柜和合规结论。",
      "是否能根据缺失项生成下一步补资料清单，并进入资源中心或企业诊断。"
    ]
  },
  leadFollowupDesk: {
    title: "客户线索分级与跟进课堂演示器",
    description:
      "用集成房屋客户开发样例演示如何把线索按国家、客户类型、需求信号和跟进阶段分成 A/B/C，并生成下一步动作。该演示器用于课堂训练，不替代真实客户判断。",
    exportFilename: "lead-followup-classroom-output.md",
    homeworkTemplate: {
      label: "下载客户线索跟进作业模板 MD",
      href: "./downloads/lead-followup-homework-template.md",
      format: "Markdown",
      note: "用于学员把自己的脱敏客户线索整理成分级、跟进动作、开发信角度和人工确认边界。"
    },
    sampleRows: [
      {
        company: "GulfBuild Contracting",
        country: "Saudi Arabia",
        type: "建筑承包商",
        demand: "80 套工地营地",
        source: "Alibaba 询盘",
        stage: "已询盘",
        lastContactDays: 2,
        signals: ["明确数量", "项目场景", "CIF 目的港", "配置需求"]
      },
      {
        company: "Andes Mining Camp",
        country: "Chile",
        type: "矿业公司",
        demand: "偏远营地",
        source: "展会名单",
        stage: "需求确认",
        lastContactDays: 5,
        signals: ["项目场景", "高价值项目", "待确认数量"]
      },
      {
        company: "Nairobi Modular Supply",
        country: "Kenya",
        type: "经销商",
        demand: "本地转售",
        source: "LinkedIn 开发",
        stage: "已触达",
        lastContactDays: 14,
        signals: ["渠道匹配", "无明确项目"]
      },
      {
        company: "Nordic Eco Cabins",
        country: "Norway",
        type: "终端项目方",
        demand: "度假营地",
        source: "网站表单",
        stage: "新线索",
        lastContactDays: 1,
        signals: ["产品兴趣", "预算未知", "项目场景"]
      }
    ],
    actionByLevel: {
      A: {
        label: "A",
        cadence: "24 小时内跟进",
        nextAction: "补齐关键字段后进入询盘识别和报价前确认。",
        angle: "围绕项目进度、数量、配置、目的港和安装责任发补问邮件。"
      },
      B: {
        label: "B",
        cadence: "3 天内跟进",
        nextAction: "先确认项目真实性、采购时间和数量，再决定是否进入报价准备。",
        angle: "发送案例、参数表和项目问题清单，推动客户给出更明确需求。"
      },
      C: {
        label: "C",
        cadence: "7-14 天培育",
        nextAction: "进入资料培育和低频触达，不占用报价和主管复核资源。",
        angle: "发送行业案例、常见配置和选型资料，观察是否出现真实项目信号。"
      }
    },
    manualBoundaries: [
      "客户真实性、采购能力、信用风险和合作价值必须由业务负责人判断。",
      "客户联系方式、隐私数据和平台规则必须由企业自行合规管理。",
      "线索分级只用于内部优先级，不等于成交概率或客户承诺。",
      "报价、付款、授信、代理合作和独家协议必须由授权岗位确认。"
    ],
    qualityChecks: [
      "是否每条线索都有来源、国家、客户类型、需求信号和当前阶段。",
      "A/B/C 分级是否能追溯到明确数量、项目场景、客户类型、近期互动等证据。",
      "下一步动作是否具体到补问、发资料、约会议、进入报价或低频培育。",
      "是否没有把线索评分当作成交概率或自动成交承诺。",
      "是否保留客户真实性、隐私合规、付款风险和合作策略的人工确认边界。"
    ]
  },
  inquiryAnalyzer: {
    title: "询盘识别课堂演示器",
    description:
      "粘贴英文询盘后，演示如何把客户信息拆成已知需求、字段证据、缺失信息、报价前闸口、风险边界和回复草稿。该演示器用于课堂训练和工具验收，不替代真实业务判断。",
    sampleInquiry:
      "Hi, we are a construction contractor in Saudi Arabia. We need 80 expandable container houses for a worker accommodation camp. Each unit should include bathroom, electrical wiring, air conditioner opening, and good insulation for hot weather. Please quote CIF Jeddah and provide lead time, loading quantity, installation guide, and warranty.",
    defaultProduct: "20ft Expandable Prefab Container House",
    workflowStage: "英文询盘 → 需求识别 → 报价前补问 → 人工复核 → 报价工具/课堂作业",
    exportFilename: "inquiry-analysis-classroom-output.md",
    readinessThresholds: {
      ready: 82,
      review: 58
    },
    homeworkTemplate: {
      label: "下载询盘识别作业模板 MD",
      href: "./downloads/inquiry-analysis-homework-template.md",
      format: "Markdown",
      note: "用于学员把自己的脱敏询盘转成需求摘要、补问清单、回复草稿和人工确认边界。"
    },
    fieldChecks: [
      {
        field: "产品方向",
        required: true,
        weight: 16,
        owner: "业务员",
        foundText: "客户已提到集成房屋/活动房方向，可匹配本课程样例产品。",
        missingQuestion: "Which product model or housing type are you interested in?",
        keywords: ["container", "expandable", "prefab", "house", "modular", "cabin"]
      },
      {
        field: "采购数量",
        required: true,
        weight: 16,
        owner: "业务员",
        foundText: "客户已给出数量，可进入配置和交付能力确认。",
        missingQuestion: "Could you share the estimated quantity for this project?",
        keywords: ["unit", "units", "sets", "pcs", "pieces", "套"]
      },
      {
        field: "使用场景",
        required: true,
        weight: 12,
        owner: "业务员",
        foundText: "客户已说明项目用途，可判断回复角度和案例匹配。",
        missingQuestion: "What will the units be used for: worker accommodation, office, camp, retail, or another purpose?",
        keywords: ["worker", "camp", "accommodation", "site", "contractor", "office", "mining"]
      },
      {
        field: "配置需求",
        required: true,
        weight: 14,
        owner: "业务 + 技术",
        foundText: "客户已提到配置项，可进入选配拆分和报价前确认。",
        missingQuestion: "Please confirm the required configuration, such as bathroom, wiring, insulation, doors, windows, and furniture.",
        keywords: ["bathroom", "toilet", "shower", "electrical", "wiring", "air conditioner", "insulation", "wall panel"]
      },
      {
        field: "贸易术语",
        required: true,
        weight: 12,
        owner: "报价负责人",
        foundText: "客户已提到贸易术语，可进入费用项边界说明。",
        missingQuestion: "Do you need FOB, CIF, CFR, EXW, or another Incoterm?",
        keywords: ["cif", "fob", "cfr", "exw", "ddp", "dap"]
      },
      {
        field: "目的港/目的地",
        required: true,
        weight: 10,
        owner: "报价 + 货代",
        foundText: "客户已提到目的港或目的地，可进入运费和交付范围确认。",
        missingQuestion: "Please confirm the destination port and whether delivery to the final project site is required.",
        keywords: ["jeddah", "riyadh", "dammam", "port", "destination", "site"]
      },
      {
        field: "交期/装柜/质保关注",
        required: false,
        weight: 10,
        owner: "工厂 + 货代 + 售后",
        foundText: "客户已提出交期、装柜、安装或质保问题，需要跨岗位人工复核。",
        missingQuestion: "Do you have target delivery time, loading, installation, or warranty requirements?",
        keywords: ["lead time", "loading", "installation", "warranty", "delivery time", "guide"]
      },
      {
        field: "认证/当地合规",
        required: false,
        weight: 10,
        owner: "技术 + 合规",
        foundText: "客户已出现合规相关信号，必须使用真实资料或专业人员确认。",
        missingQuestion: "Are there any local certification, fire rating, wind load, snow load, or building permit requirements?",
        keywords: ["certificate", "certification", "fire", "wind", "snow", "permit", "standard"]
      }
    ],
    knownSignalRules: [
      {
        label: "产品方向",
        text: "产品方向：20ft Expandable Prefab Container House",
        keywords: ["container", "expandable", "prefab", "house", "modular", "cabin"]
      },
      {
        label: "使用场景",
        text: "使用场景：工地营地或工人住宿",
        keywords: ["worker", "camp", "accommodation", "site", "contractor"]
      },
      {
        label: "卫浴配置",
        text: "配置需求：包含卫浴",
        keywords: ["bathroom", "toilet", "shower"]
      },
      {
        label: "电气配置",
        text: "配置需求：包含电气布线",
        keywords: ["electrical", "wiring", "power", "socket"]
      },
      {
        label: "保温要求",
        text: "配置需求：高温地区保温",
        keywords: ["insulation", "hot weather", "thermal", "heat"]
      },
      {
        label: "贸易术语",
        text: "贸易术语：客户提到 CIF",
        keywords: ["cif"]
      },
      {
        label: "目的港",
        text: "目的港：Jeddah",
        keywords: ["jeddah"]
      }
    ],
    missingQuestions: [
      {
        field: "项目地点",
        question: "Could you share the final project location and whether delivery is only to Jeddah port or to the project site?",
        keywords: ["project site", "site address", "riyadh", "jeddah site", "location"]
      },
      {
        field: "布局图纸",
        question: "Do you have a preferred layout drawing or room arrangement for each unit?",
        keywords: ["layout", "drawing", "floor plan", "room arrangement"]
      },
      {
        field: "墙板材料",
        question: "Which wall panel material do you prefer: EPS, rock wool, PU, or another insulation option?",
        keywords: ["eps", "rock wool", "pu", "sandwich panel", "wall panel"]
      },
      {
        field: "电气标准",
        question: "Please confirm the local electrical standard, voltage, plug type, and whether certification is required.",
        keywords: ["voltage", "plug", "electrical standard", "220v", "110v", "certification"]
      },
      {
        field: "安装责任",
        question: "Do you need only an installation guide, remote support, or on-site installation service?",
        keywords: ["installation service", "on-site", "remote support", "installer"]
      }
    ],
    riskRules: [
      {
        label: "价格",
        text: "不能根据询盘自动给最终价格，必须由工厂成本、选配、汇率、利润和物流报价确认。"
      },
      {
        label: "DDP",
        text: "如果客户要求 DDP，需要当地清关、税费、目的地派送和责任边界确认后再报价。"
      },
      {
        label: "认证",
        text: "防火、抗风、抗雪、建筑许可和认证资料不能虚构，必须由真实资料或专业人员确认。"
      },
      {
        label: "交期",
        text: "交期、装柜数量、毛重体积必须由工厂和货代确认，演示输出只能做提醒。"
      }
    ],
    replyOpening:
      "Thank you for your inquiry. We can prepare a CIF Jeddah quotation for the expandable container houses, but we need to confirm several details before issuing an accurate offer.",
    nextRoutes: [
      "报价前：进入 FOB/CIF 报价费用项检查器，但只生成结构，不自动给最终价格。",
      "课堂作业：下载询盘识别作业模板，让学员替换成自己的脱敏询盘。",
      "企业服务：如果连续出现同类询盘，进入企业 SOP 诊断和工具字段定制。",
      "运营回写：把非集成房屋询盘样例回写到工具验收板，验证行业替换规则。"
    ],
    exportAcceptance: [
      "导出文件必须包含原始询盘、字段证据、识别分数、缺失问题、回复草稿和人工确认边界。",
      "复制邮件只能作为草稿，不得包含最终价格、确定交期、认证结论、DDP 清关或安装承诺。",
      "课堂验收时老师必须说明下一步路由：报价工具、作业模板、企业诊断或版本回写。",
      "学员提交真实询盘前必须脱敏客户名称、联系方式、价格、合同和未公开项目资料。"
    ],
    qualityChecks: [
      "是否先补问再报价，而不是看到数量和目的港就直接出价。",
      "是否识别数量、产品、场景、目的港和贸易术语等关键字段。",
      "缺失字段是否覆盖项目地点、布局、墙板材料、电气标准和安装责任。",
      "回复草稿是否没有虚构价格、交期、认证、DDP 清关和安装承诺。",
      "是否把价格、交期、付款、认证、清关和当地合规列为人工确认点。"
    ]
  },
  quotationCalculator: {
    title: "FOB/CIF 报价测算课堂演示器",
    description:
      "用集成房屋示例演示报价前如何拆成本、利润、海运、保险、费用字段证据、审批闸口和人工确认边界。数字仅用于课堂演示，不代表真实价格。",
    exportFilename: "quotation-calculation-classroom-output.md",
    workflowStage: "询盘识别 → 报价费用项 → 审批闸口 → 报价说明草稿 → 订单/企业复核",
    readinessThresholds: {
      ready: 82,
      review: 58
    },
    homeworkTemplate: {
      label: "下载报价测算作业模板 MD",
      href: "./downloads/quotation-calculation-homework-template.md",
      format: "Markdown",
      note: "用于学员把自己的脱敏产品成本、费用项和报价说明整理成可复核作业。"
    },
    lockedFieldIds: ["unitCostUsd", "optionCostUsd", "domesticChargeUsd", "oceanFreightUsd"],
    lockNote: "课堂演示时可锁定成本和运费字段，防止学员误把样例数字当成可直接对外报价。",
    fields: [
      { id: "quantity", label: "数量", unit: "units", value: 80, min: 1, step: 1 },
      { id: "unitCostUsd", label: "工厂基础成本", unit: "USD/unit", value: 4350, min: 0, step: 10 },
      { id: "optionCostUsd", label: "选配成本", unit: "USD/unit", value: 620, min: 0, step: 10 },
      { id: "domesticChargeUsd", label: "国内杂费", unit: "USD/unit", value: 95, min: 0, step: 5 },
      { id: "oceanFreightUsd", label: "整单海运费", unit: "USD", value: 23800, min: 0, step: 100 },
      { id: "insurancePercent", label: "保险费率", unit: "%", value: 0.3, min: 0, step: 0.1 },
      { id: "targetProfitPercent", label: "目标利润率", unit: "%", value: 18, min: 0, step: 1 }
    ],
    fieldChecks: [
      {
        id: "quantity",
        field: "数量",
        weight: 12,
        owner: "业务员 + 客户",
        source: "询盘识别结果",
        gate: "数量应来自客户询盘或确认邮件，低数量项目需重新评估海运摊销。",
        passText: "数量可用于费用摊销和报价结构演示。",
        failText: "数量不足或缺失，先回到询盘补问。"
      },
      {
        id: "unitCostUsd",
        field: "工厂基础成本",
        weight: 18,
        owner: "工厂/报价负责人",
        source: "最新内部成本单",
        gate: "必须来自最新内部报价单或工厂确认，不得由 Codex 生成。",
        passText: "基础成本已录入，可进入报价结构演示。",
        failText: "基础成本缺失，不能输出报价结构。"
      },
      {
        id: "optionCostUsd",
        field: "选配成本",
        weight: 14,
        owner: "技术 + 报价负责人",
        source: "配置清单",
        gate: "卫浴、电气、空调口、墙板和保温材料必须单独确认。",
        passText: "选配成本已拆出，避免把配置混进总价。",
        failText: "选配成本缺失，需要确认配置是否已计入基础成本。"
      },
      {
        id: "domesticChargeUsd",
        field: "国内杂费",
        weight: 10,
        owner: "单证/货代/财务",
        source: "本地操作费用清单",
        gate: "拖车、报关、港杂、文件和包装等国内费用需要单独留痕。",
        passText: "国内费用已计入报价结构。",
        failText: "国内费用缺失，报价可能漏项。"
      },
      {
        id: "oceanFreightUsd",
        field: "整单海运费",
        weight: 18,
        owner: "货代 + 报价负责人",
        source: "有效期内运价",
        gate: "CIF 只能基于有效期内海运报价，目的港和装柜数量需复核。",
        passText: "海运费已录入，可计算 CIF 参考结构。",
        failText: "海运费为 0，不能输出 CIF，只能保留 FOB 结构演示。"
      },
      {
        id: "insurancePercent",
        field: "保险费率",
        weight: 8,
        owner: "业务/财务",
        source: "保险口径",
        gate: "CIF 保险口径、保险金额和最低收费需按公司规则确认。",
        passText: "保险费率已录入，可作为课堂测算字段。",
        failText: "保险费率缺失，CIF 结构需人工补充保险口径。"
      },
      {
        id: "targetProfitPercent",
        field: "目标利润率",
        weight: 12,
        owner: "业务负责人/管理层",
        source: "销售策略",
        gate: "利润率不能只由工具决定，需要结合客户、市场、付款、售后和汇率风险。",
        passText: "利润率处于课堂演示可解释区间。",
        failText: "利润率过低、过高或缺失，需要负责人确认报价策略。"
      },
      {
        id: "termsBoundary",
        field: "报价条款边界",
        weight: 10,
        owner: "业务负责人 + 法务/财务",
        source: "公司报价政策",
        gate: "报价有效期、付款条款、交期、DDP、清关、税费、安装和售后责任必须人工确认。",
        passText: "边界提示已进入导出内容。",
        failText: "缺少条款边界时不得对外发送报价。"
      }
    ],
    approvalGates: [
      "工厂确认：基础成本、选配、包装、装柜数量、交期和产能。",
      "货代确认：目的港、运价有效期、附加费、保险、装柜和船期。",
      "业务负责人确认：利润率、报价有效期、付款条款、客户沟通口径和是否进入正式报价。",
      "专业人员确认：DDP、清关、税费、认证、建筑许可、安装责任、合同和法务条款。"
    ],
    nextRoutes: [
      "课堂作业：学员替换为脱敏成本和费用项，输出报价结构而不是最终价格。",
      "订单跟进：报价被客户接受后，进入订单节点和交期预警看板。",
      "企业服务：企业需要真实报价流程时，进入报价 SOP 诊断和审批权限梳理。",
      "运营回写：收集海运为 0、利润异常、DDP 要求和费用漏项样例，回写字段规则。"
    ],
    exportAcceptance: [
      "导出文件必须包含输入字段、费用字段证据、发布闸口、测算结果、成本拆分、风险提醒和人工审批人。",
      "导出的 FOB/CIF 数字只能标注为课堂参考结构，不得作为真实报价或承诺。",
      "海运费为 0、利润异常、选配缺失或 DDP 边界不清时，导出必须显示返修或人工审批。",
      "任何真实企业成本、客户、供应商、合同和利润资料进入课堂前必须脱敏并确认授权。"
    ],
    requiredChecks: [
      "工厂成本、选配和包装方式必须来自最新内部报价单。",
      "装柜数量、毛重、体积和目的港海运费必须由货代复核。",
      "CIF 只覆盖到目的港，清关、税费、派送、安装和建筑许可不在本演示自动承诺范围内。",
      "最终报价有效期、汇率、付款条款、交期和售后责任需要业务负责人确认。"
    ],
    emailTemplate:
      "Based on the current sample cost structure, we can prepare a CIF Jeddah quotation. Final price will be confirmed after factory cost, loading quantity, freight validity, payment terms, and delivery schedule are checked.",
    qualityChecks: [
      "是否拆清工厂基础成本、选配成本、国内费用、海运、保险和利润。",
      "海运费为 0 时是否停止输出 CIF 承诺，只保留 FOB 结构演示。",
      "DDP、清关、税费、目的地派送、安装和建筑许可是否未被自动承诺。",
      "工厂成本、装柜数量、海运有效期、汇率、付款条款和报价有效期是否列为人工确认点。",
      "报价说明草稿是否只表达参考结构，没有把课堂测算数字包装成最终报价。"
    ]
  },
  orderTrackingBoard: {
    title: "订单跟进与交期预警课堂演示器",
    description:
      "用集成房屋订单节点演示如何追踪图纸、采购、生产、订舱和尾款，生成履约分、节点证据、交期预警、客户进度草稿和课堂作业输出。该演示器用于训练跟单逻辑，不替代真实生产、物流或财务确认。",
    exportFilename: "order-tracking-classroom-output.md",
    workflowStage: "报价确认 → 订单主数据 → 图纸/采购/生产/订舱/尾款 → 客户进度 → 单证/付款复核",
    fulfillmentThresholds: {
      ready: 82,
      review: 58
    },
    homeworkTemplate: {
      label: "下载订单跟进作业模板 MD",
      href: "./downloads/order-tracking-homework-template.md",
      format: "Markdown",
      note: "用于学员把自己的脱敏订单节点整理成进度看板、风险预警、客户进度邮件和人工确认边界。"
    },
    nodeChecks: [
      {
        node: "图纸确认",
        weight: 16,
        owner: "业务 + 客户 + 技术",
        source: "最终确认图纸 / 客户邮件",
        gate: "图纸和布局必须锁版后才能进入采购与生产，不得把修改中版本当作最终订单。",
        passText: "图纸已确认或风险可控，可继续推进。",
        failText: "图纸延期或未锁版，会影响材料采购和生产排期。"
      },
      {
        node: "墙板材料采购",
        weight: 18,
        owner: "工厂采购 + 业务",
        source: "采购单 / 材料规格确认",
        gate: "墙板材料、防火等级、保温和目标市场适用性必须在采购前确认。",
        passText: "材料规格和采购责任已明确。",
        failText: "材料未锁定属于高风险，会影响生产、认证和交期。"
      },
      {
        node: "钢结构生产",
        weight: 16,
        owner: "工厂生产",
        source: "生产计划 / 生产照片 / 数量记录",
        gate: "生产进度必须有照片、数量或工厂计划证据支撑。",
        passText: "生产节点有进度证据，可继续跟踪。",
        failText: "生产证据不足，不能对客户承诺完成日期。"
      },
      {
        node: "订舱",
        weight: 18,
        owner: "货代 + 跟单",
        source: "订舱委托 / 船期 / 装柜数据",
        gate: "订舱前必须确认装柜数量、毛重、体积、截港、船期和运费有效期。",
        passText: "订舱节点证据可用于出运安排。",
        failText: "订舱未开始或装柜数据缺失，不能承诺船期。"
      },
      {
        node: "尾款确认",
        weight: 16,
        owner: "财务 + 业务",
        source: "付款节点 / 银行水单 / 财务确认",
        gate: "发货、放单、提单和交单前必须确认尾款或公司授权条款。",
        passText: "尾款节点责任和提醒动作已明确。",
        failText: "尾款未确认会影响发货、放单和客户承诺。"
      },
      {
        node: "客户沟通",
        weight: 16,
        owner: "业务负责人",
        source: "客户进度邮件 / 内部确认记录",
        gate: "客户进度只能发送已确认事实和待确认事项，不得承诺未确认交期、船期或赔偿。",
        passText: "客户沟通边界已写入输出。",
        failText: "缺少沟通边界时不能直接发送客户更新。"
      }
    ],
    sampleRows: [
      {
        node: "图纸确认",
        owner: "业务+客户",
        plan: "2026-06-05",
        actual: "2026-06-06",
        status: "延期",
        risk: "Medium",
        evidence: "客户修改卫浴布局",
        action: "确认最终布局并锁版"
      },
      {
        node: "墙板材料采购",
        owner: "工厂采购",
        plan: "2026-06-08",
        actual: "",
        status: "待确认",
        risk: "High",
        evidence: "岩棉板规格未锁定",
        action: "业务确认墙板材料和防火要求"
      },
      {
        node: "钢结构生产",
        owner: "工厂生产",
        plan: "2026-06-15",
        actual: "",
        status: "进行中",
        risk: "Medium",
        evidence: "材料到厂后排产",
        action: "每日更新生产照片和数量"
      },
      {
        node: "订舱",
        owner: "货代+跟单",
        plan: "2026-06-22",
        actual: "",
        status: "未开始",
        risk: "High",
        evidence: "装柜数量和毛重待复核",
        action: "提前确认柜型、截港和运费有效期"
      },
      {
        node: "尾款确认",
        owner: "财务+业务",
        plan: "2026-06-25",
        actual: "",
        status: "未开始",
        risk: "Medium",
        evidence: "发货前付款节点",
        action: "准备付款提醒和装柜资料"
      }
    ],
    emailOpening:
      "Thank you for your patience. Below is the current order progress based on our internal tracking record.",
    approvalGates: [
      "业务/客户确认：图纸、配置、改单、最终订单主数据和客户可见进度。",
      "工厂确认：材料、生产排期、完工时间、质检、装柜数量、毛重和装柜照片。",
      "货代确认：订舱、截港、船期、目的港、运费有效期和出运异常。",
      "财务/管理层确认：尾款、放货、索赔、延期责任、赔偿和合同变更。"
    ],
    nextRoutes: [
      "单证检查：订舱、装柜和出运字段稳定后，进入 PI/CI/PL 单证一致性检查器。",
      "付款风险：尾款、到港后付款、OA、D/P、D/A 或信用证问题进入付款方式与 DDP 风险矩阵。",
      "企业服务：订单延期和节点失控高频出现时，进入跟单 SOP、岗位责任和审批流诊断。",
      "运营回写：收集图纸变更、材料延误、订舱异常和尾款卡点样例，回写订单节点规则。"
    ],
    exportAcceptance: [
      "导出文件必须包含输入节点、履约闸口、节点证据、风险节点、客户进度草稿、审批闸口和人工边界。",
      "客户进度草稿只能表达已确认事实和待确认事项，不得承诺未确认交期、船期、装柜或赔偿。",
      "高风险节点必须显示责任人、证据、影响和下一步动作，不能只标红。",
      "真实订单号、客户、金额、联系人、合同、付款和出运资料进入课堂前必须脱敏并确认授权。"
    ],
    manualBoundaries: [
      "生产交期、库存、装柜数量、海运舱位、目的港延误、付款和索赔必须由对应岗位确认。",
      "客户进度邮件只能说明已确认事实和待确认事项，不能虚构已完成节点或承诺最终出运日期。",
      "涉及延期、赔偿、改单、换料、尾款和合同责任时，必须由业务负责人或公司授权岗位确认。",
      "所有学员作业中的订单号、客户名称、金额和联系人必须先脱敏再用于课堂展示。"
    ],
    qualityChecks: [
      "是否每个订单节点都有负责人、计划日期、实际日期或待确认状态。",
      "高风险节点是否说明了影响原因和下一步动作，而不是只标红。",
      "客户进度邮件是否区分已完成、进行中、待确认和风险节点。",
      "是否没有自动承诺最终交期、装柜日期、船期、尾款到账或赔偿方案。",
      "是否保留生产、采购、货代、财务、客户和管理层的人工确认边界。"
    ]
  },
  documentChecker: {
    title: "单证一致性课堂演示器",
    description:
      "用 PI、CI、PL 和订舱资料演示出货前字段核对、修正复查、单证放行闸口和专业审批边界。工具只提示冲突和风险等级，最终报关、银行和清关要求仍需专业人员复核。",
    exportFilename: "document-consistency-classroom-output.md",
    workflowStage: "报价确认 → 订单主数据 → PI/CI/PL/订舱资料 → 冲突修正 → 专业复核 → 出运/交单",
    releaseThresholds: {
      ready: 86,
      review: 62
    },
    homeworkTemplate: {
      label: "下载单证检查作业模板 MD",
      href: "./downloads/document-consistency-homework-template.md",
      format: "Markdown",
      note: "用于学员把脱敏 PI、CI、PL 和订舱资料整理成冲突报告、复查记录和人工确认清单。"
    },
    sourceLabels: {
      pi: "PI",
      ci: "CI",
      pl: "PL",
      booking: "订舱资料"
    },
    fieldChecks: [
      {
        field: "Quantity",
        weight: 20,
        owner: "业务 + 单证",
        source: "订单主数据 / PI / CI / PL / 订舱资料",
        gate: "数量必须与订单主数据、CI 金额、PL 包装和订舱数量一致。",
        passText: "数量字段一致，可进入出运前复核。",
        failText: "数量冲突会影响金额、报关和客户收货，必须先修正。"
      },
      {
        field: "Product Description",
        weight: 18,
        owner: "业务 + 报关行",
        source: "产品英文名 / 报关品名 / 客户确认资料",
        gate: "品名和核心配置必须统一，报关申报口径不能由工具自动确定。",
        passText: "品名字段一致，可作为单证基础字段。",
        failText: "品名或配置描述不一致，需按订单主数据和报关口径统一。"
      },
      {
        field: "Port of Discharge",
        weight: 20,
        owner: "业务 + 货代 + 单证",
        source: "报价条款 / 客户确认 / 订舱资料",
        gate: "目的港必须与报价、客户确认和订舱一致，错误会影响出运和清关。",
        passText: "目的港一致，可进入订舱和提单确认。",
        failText: "目的港冲突属于高风险，必须由货代和业务负责人确认。"
      },
      {
        field: "Gross Weight",
        weight: 16,
        owner: "工厂 + 货代 + 单证",
        source: "装柜数据 / PL / 订舱 VGM",
        gate: "毛重需以工厂装柜、PL 和订舱/VGM 口径复核。",
        passText: "毛重字段一致，可进入出运资料复核。",
        failText: "毛重缺失或冲突会影响订舱、报关和提单，必须复核。"
      },
      {
        field: "Document Completeness",
        weight: 14,
        owner: "单证负责人",
        source: "PI / CI / PL / 订舱资料",
        gate: "关键单据字段不得缺失，缺失字段需回到对应岗位补齐。",
        passText: "关键单据字段完整。",
        failText: "存在缺失字段，不能进入正式发单。"
      },
      {
        field: "Professional Review",
        weight: 12,
        owner: "报关行 / 银行 / 货代 / 单证主管",
        source: "专业复核记录",
        gate: "HS 编码、申报要素、信用证、清关和提单确认必须由专业人员复核。",
        passText: "专业复核边界已写入导出内容。",
        failText: "缺少专业复核边界时不能视为可发单。"
      }
    ],
    sampleRows: [
      {
        field: "Quantity",
        pi: "80 units",
        ci: "78 units",
        pl: "80 units",
        booking: "80 units",
        severity: "High",
        issue: "CI 数量与订单主数据不一致，可能影响金额、报关和客户收货。",
        action: "回到订单主数据核对后修正 CI 数量。"
      },
      {
        field: "Product Description",
        pi: "Expandable container house with bathroom and electrical wiring",
        ci: "Container house",
        pl: "Expandable container house",
        booking: "Prefabricated building",
        severity: "Medium",
        issue: "品名和配置描述不统一，容易造成客户理解、清关或单证审核问题。",
        action: "统一英文品名，配置细节按订单主数据和报关要求确认。"
      },
      {
        field: "Port of Discharge",
        pi: "Jeddah",
        ci: "Jeddah",
        pl: "Dammam",
        booking: "Jeddah",
        severity: "High",
        issue: "PL 目的港与报价和订舱资料冲突，属于出货前必须立即处理的问题。",
        action: "向货代和业务负责人确认目的港，修正 PL 或订舱资料。"
      },
      {
        field: "Gross Weight",
        pi: "To be confirmed",
        ci: "",
        pl: "48,000 kg",
        booking: "46,800 kg",
        severity: "Medium",
        issue: "毛重信息缺失且 PL 与订舱资料不一致，会影响订舱、报关和提单。",
        action: "以工厂装柜数据和货代订舱口径复核后统一。"
      }
    ],
    correctedRows: [
      {
        field: "Quantity",
        pi: "80 units",
        ci: "80 units",
        pl: "80 units",
        booking: "80 units"
      },
      {
        field: "Product Description",
        pi: "Expandable prefab container house",
        ci: "Expandable prefab container house",
        pl: "Expandable prefab container house",
        booking: "Expandable prefab container house"
      },
      {
        field: "Port of Discharge",
        pi: "Jeddah",
        ci: "Jeddah",
        pl: "Jeddah",
        booking: "Jeddah"
      },
      {
        field: "Gross Weight",
        pi: "48,000 kg",
        ci: "48,000 kg",
        pl: "48,000 kg",
        booking: "48,000 kg"
      }
    ],
    manualBoundaries: [
      "HS 编码、申报要素、报关口径必须由报关行或专业人员确认。",
      "信用证项下单据必须按银行和信用证条款审查，不能只依赖工具提示。",
      "目的港清关、当地认证、税费和收货要求需要客户、货代或当地代理确认。",
      "最终对外发送的 CI、PL、提单确认件必须由授权业务或单证人员复核。"
    ],
    approvalGates: [
      "订单主数据复核：数量、品名、配置、目的港、金额和包装信息先由业务/跟单确认。",
      "工厂与货代复核：毛重、体积、装柜数量、VGM、订舱资料和船期由工厂/货代确认。",
      "单证负责人复核：PI、CI、PL、订舱资料、提单确认件和客户要求逐项核对。",
      "专业人员复核：HS 编码、申报要素、信用证、清关、银行审单和目的国要求必须由专业人员确认。"
    ],
    nextRoutes: [
      "订单跟进：字段冲突来自订单节点时，回到订单跟进与交期预警看板修正主数据。",
      "付款风险：信用证、D/P、D/A、OA 或交单条件出现时，进入付款方式与 DDP 风险矩阵。",
      "企业服务：企业单证冲突高频出现时，进入单证 SOP、岗位责任和审批流诊断。",
      "运营回写：收集数量、品名、目的港、重量和信用证冲突样例，回写单证字段规则。"
    ],
    exportAcceptance: [
      "导出文件必须包含输入字段、放行闸口、字段证据、冲突报告、修正复查、审批闸口和人工边界。",
      "修正后字段一致只代表课堂复查通过，不代表报关、银行、清关或提单确认自动通过。",
      "高风险冲突必须显示修正动作和责任人，不允许只输出“有问题”而没有业务处理路径。",
      "真实单证、客户资料、合同、信用证和出运文件进入课堂前必须脱敏并确认授权。"
    ],
    qualityChecks: [
      "是否至少核对数量、品名、目的港、毛重和订舱口径。",
      "高风险冲突是否能说明业务影响，而不是只标记不一致。",
      "处理建议是否指向订单主数据、工厂装柜数据、货代资料或客户确认来源。",
      "修正后复查是否能证明字段一致，但仍保留正式单据人工复核。",
      "是否把 HS 编码、申报要素、信用证审单、清关和正式发单列为人工确认边界。"
    ]
  },
  paymentRiskMatrix: {
    title: "付款方式与DDP风险课堂演示器",
    description:
      "用集成房屋大额订单演示如何识别 T/T、L/C、D/P、D/A、OA、尾款节点和 DDP 条款风险，生成审批分、风险证据、内部审批清单、谈判替代方案和客户谨慎回复。该演示器用于课堂训练，不替代财务、法务、信保或管理层判断。",
    exportFilename: "payment-risk-classroom-output.md",
    workflowStage: "订单履约 → 付款条款 → DDP/信用风险 → 内部审批 → 客户谈判回复 → 合同/企业复核",
    approvalThresholds: {
      ready: 82,
      review: 58
    },
    homeworkTemplate: {
      label: "下载付款风险作业模板 MD",
      href: "./downloads/payment-risk-homework-template.md",
      format: "Markdown",
      note: "用于学员把自己的脱敏付款要求整理成风险矩阵、审批清单、谈判方向和人工确认边界。"
    },
    sampleProfile: {
      customer: "新客户 / Saudi Arabia 建筑承包商",
      product: "80 套 20ft 可扩展集成房屋",
      scenario: "客户希望 30% 定金，70% 到港后付款，并要求 DDP 到项目现场。"
    },
    fields: [
      { id: "orderAmountUsd", label: "订单金额", type: "number", value: 519500, min: 0, step: 1000, unit: "USD" },
      { id: "depositPercent", label: "定金比例", type: "number", value: 30, min: 0, step: 5, unit: "%" },
      { id: "paymentMethod", label: "付款方式", type: "select", value: "T/T", options: ["T/T", "L/C at sight", "L/C usance", "D/P", "D/A", "OA"] },
      { id: "balanceTrigger", label: "尾款节点", type: "select", value: "到港后付款", options: ["发货前付清", "提单副本后付款", "见提单草稿后付款", "到港后付款", "OA 60 days"] },
      { id: "tradeTerm", label: "贸易术语", type: "select", value: "DDP 项目现场", options: ["FOB", "CIF Jeddah", "CFR", "DAP", "DDP 项目现场"] },
      { id: "buyerHistory", label: "合作记录", type: "select", value: "首次合作", options: ["首次合作", "合作过1-2单", "长期稳定客户"] }
    ],
    evidenceChecks: [
      {
        id: "orderAmountUsd",
        label: "订单金额",
        weight: 16,
        owner: "业务主管 + 财务",
        source: "报价/订单金额",
        gate: "大额订单必须进入更严格的价格、付款、合同、索赔和违约责任审批。",
        passText: "订单金额处于常规审批范围。",
        failText: "订单金额较大，需要业务主管、财务和管理层审批。"
      },
      {
        id: "depositPercent",
        label: "定金比例",
        weight: 14,
        owner: "财务 + 业务主管",
        source: "客户付款条款",
        gate: "定金应覆盖前期采购、生产投入和取消订单风险。",
        passText: "定金比例可进入常规付款结构讨论。",
        failText: "定金不足，需要提高比例或增加担保/信保/审批。"
      },
      {
        id: "paymentMethod",
        label: "付款方式",
        weight: 18,
        owner: "财务 + 银行/单证",
        source: "客户付款要求",
        gate: "OA、D/A、D/P、远期信用证和信用证条款必须由财务、银行或单证复核。",
        passText: "付款方式风险相对可控。",
        failText: "付款方式存在账期、拒付、审单或不符点风险。"
      },
      {
        id: "balanceTrigger",
        label: "尾款节点",
        weight: 18,
        owner: "财务 + 单证 + 业务",
        source: "付款节点/放单规则",
        gate: "尾款节点必须控制货权、放单、改单、到账和客户拖延风险。",
        passText: "尾款节点可进入常规复核。",
        failText: "尾款节点靠后，会放大货权和资金回收风险。"
      },
      {
        id: "tradeTerm",
        label: "贸易术语/DDP责任",
        weight: 18,
        owner: "货代 + 当地代理 + 法务/税务",
        source: "贸易术语/交付责任",
        gate: "DDP、DAP、目的地派送、清关、税费、建筑许可和现场交付责任必须专业确认。",
        passText: "贸易术语责任较清晰。",
        failText: "贸易术语涉及目的国交付或 DDP 责任，必须专业复核。"
      },
      {
        id: "buyerHistory",
        label: "客户资信/合作记录",
        weight: 14,
        owner: "业务 + 财务 + 信保",
        source: "客户背景/历史交易",
        gate: "新客户或资信未知客户不能按老客户口径开放账期或宽松条款。",
        passText: "合作记录可支撑常规审批。",
        failText: "首次合作需要客户背景、项目真实性、付款能力和授权签约人确认。"
      },
      {
        id: "contractBoundary",
        label: "合同与索赔边界",
        weight: 14,
        owner: "法务/管理层",
        source: "合同条款/公司授权政策",
        gate: "延期赔偿、质量索赔、违约责任、争议解决和合同修改必须授权确认。",
        passText: "合同边界已写入输出。",
        failText: "缺少合同边界时不能接受高风险付款或 DDP 条款。"
      }
    ],
    customerReplyOpening:
      "Thank you for sharing your preferred payment and delivery terms. For this project, we need to review the payment structure and delivery responsibility internally before confirming acceptance.",
    approvalGates: [
      "财务/信保审批：客户资信、授信额度、信保覆盖、定金比例、尾款节点和坏账风险。",
      "银行/单证审批：信用证条款、软条款、不符点、交单期限、D/P、D/A 和放单控制。",
      "货代/当地代理审批：DDP、DAP、目的国清关、税费、派送、卸货、建筑许可和现场责任。",
      "法务/管理层审批：合同违约、延期赔偿、质量索赔、争议解决、账期和大额订单授权。"
    ],
    nextRoutes: [
      "订单跟进：付款节点影响发货、装柜、放单或尾款时，回到订单履约看板更新节点责任。",
      "单证检查：信用证、D/P、D/A、放单或提单节点出现时，进入 PI/CI/PL 单证一致性检查器。",
      "企业服务：付款风险高频出现时，进入付款 SOP、审批权限、合同条款和风控岗位诊断。",
      "运营回写：收集 OA、远期信用证、到港后尾款、DDP 税费和客户资信样例，回写风险规则。"
    ],
    exportAcceptance: [
      "导出文件必须包含输入条款、审批闸口、风险证据、风险事项、谈判替代方案、客户回复和人工边界。",
      "客户回复只能表达需要内部复核和可讨论方向，不能直接接受高风险付款、DDP 或账期条款。",
      "高风险事项必须列出确认岗位、风险原因、处理动作和替代谈判方向。",
      "真实客户资信、合同、付款、信用证、银行、税费和法律资料进入课堂前必须脱敏并确认授权。"
    ],
    manualBoundaries: [
      "客户资信、授信额度、信保覆盖、坏账风险和是否接受账期必须由财务、主管或老板确认。",
      "信用证条款、软条款、交单期限、银行审单和不符点风险必须由银行、单证或专业人员确认。",
      "DDP、目的国清关、税费、当地派送、建筑许可和现场交付责任必须由当地代理、货代、税务或法务确认。",
      "合同违约责任、延期赔偿、质量索赔和争议解决条款必须由授权岗位或法务确认。",
      "课堂演示不能把风险分数包装成自动审批结论，正式接受条款前必须走企业内部审批。"
    ],
    qualityChecks: [
      "是否写清客户类型、订单金额、付款方式、尾款节点、贸易术语和合作记录。",
      "是否把到港后付款、OA、D/A、远期 L/C、DDP 和大额新客户分别说明风险原因。",
      "是否列出财务、主管、老板、信保、银行、货代、当地代理或法务等确认人。",
      "客户回复是否只表达需要内部复核和可讨论方向，没有直接接受高风险条款。",
      "是否保留资信、授信、信用证、清关税费、合同责任和索赔的人工确认边界。"
    ]
  }
};

window.TrainingPlatformData.tools = [
  {
    id: "product-profile-desk",
    title: "企业产品资料工作台",
    value: "把产品参数、配置、包装、认证、安装、售后和单证字段整理成后续客户开发、询盘、报价和企业内训都能复用的基础数据。",
    stage: "V2 轻交互优先",
    relatedTracks: ["产品资料", "企业内训", "行业案例复制"],
    inputs: ["产品名称", "规格参数", "配置选项", "包装装柜", "认证资料", "安装售后", "单证字段"],
    outputs: ["产品字段表", "缺失资料清单", "人工确认人", "后续工具输入"],
    mockupType: "table",
    mockupTitle: "集成房屋产品资料成熟度表",
    mockupColumns: ["字段", "状态", "来源", "负责人", "复用场景"],
    mockupRows: [
      ["英文产品名", "Ready", "产品目录", "业务负责人", "开发信 / 询盘 / 单证"],
      ["包装装柜", "Missing", "待补资料", "工厂物流+货代", "报价 / 订舱 / 单证"],
      ["认证合规", "Missing", "待补资料", "技术+合规", "询盘 / 风险 / 企业内训"]
    ]
  },
  {
    id: "customer-lead-database",
    title: "外贸客户线索库",
    value: "把客户来源、国家、项目类型、需求、阶段、优先级和下次跟进动作结构化。",
    stage: "V2 轻交互优先",
    relatedTracks: ["找客户", "客户跟进"],
    inputs: ["客户公司名", "国家", "客户类型", "项目场景", "需求产品", "最近跟进"],
    outputs: ["客户等级", "下一步动作", "下次跟进日期", "开发信角度"],
    mockupType: "table",
    mockupTitle: "集成房屋海外客户线索库",
    mockupColumns: ["客户", "国家", "类型", "需求", "阶段", "优先级", "下一步"],
    mockupRows: [
      ["GulfBuild Contracting", "Saudi Arabia", "建筑承包商", "80套工地营地", "已询盘", "A", "补齐配置后报价"],
      ["Andes Mining Camp", "Chile", "矿业公司", "偏远营地", "需求确认", "A", "确认气候和安装"],
      ["Nairobi Modular Supply", "Kenya", "经销商", "本地转售", "已触达", "B", "发送经销商方案"]
    ]
  },
  {
    id: "inquiry-analyzer",
    title: "询盘识别与回复工具",
    value: "粘贴客户询盘后，输出已知需求、缺失信息、报价前问题、风险点和回复草稿。",
    stage: "V2 轻交互优先",
    relatedTracks: ["回询盘", "报价前确认"],
    inputs: ["原始询盘", "产品资料", "公司信息", "风险边界"],
    outputs: ["需求摘要", "缺失字段", "补问问题", "英文回复草稿"],
    mockupType: "split",
    mockupTitle: "询盘识别输出",
    mockupInput:
      "We need 80 units of expandable container houses for a worker accommodation camp. Please quote CIF Jeddah with bathroom, electrical wiring and insulation.",
    mockupOutput: [
      "已知：80套、工地营地、CIF Jeddah、卫浴、电气、保温。",
      "缺失：项目地点、布局、墙板材料、电气标准、装柜数量。",
      "风险：DDP、当地建筑规范、认证和清关不可直接承诺。",
      "下一步：先发补问邮件，再进入报价测算。"
    ]
  },
  {
    id: "quotation-calculator",
    title: "FOB/CIF/DDP 报价测算器",
    value: "整理产品成本、选配、国内费用、海运、保险、汇率和利润，DDP 只做风险提示。",
    stage: "V2 轻交互优先",
    relatedTracks: ["做报价", "利润测算"],
    inputs: ["产品成本", "选配费用", "数量", "汇率", "运费", "保险", "目标利润"],
    outputs: ["FOB 单价", "CIF 单价", "利润率", "漏项提醒", "报价邮件"],
    mockupType: "metrics",
    mockupTitle: "FOB/CIF 报价测算预览",
    mockupMetrics: [
      ["数量", "80 units"],
      ["贸易术语", "CIF Jeddah"],
      ["报价状态", "示例结构"],
      ["DDP", "仅风险提示"]
    ],
    mockupNotes: ["示例不代表真实市场价格", "装柜数量、海运和目的港费用必须实时确认"]
  },
  {
    id: "order-tracking-board",
    title: "订单跟进看板",
    value: "追踪图纸、采购、生产、质检、包装、订舱、装柜、出运、尾款和售后节点。",
    stage: "V2 轻交互优先",
    relatedTracks: ["跟订单", "交期预警"],
    inputs: ["订单号", "客户", "产品", "计划节点", "负责人", "实际日期"],
    outputs: ["当前状态", "逾期节点", "风险等级", "客户进度邮件"],
    mockupType: "kanban",
    mockupTitle: "80套集成房屋订单看板",
    mockupColumns: [
      { title: "待确认", cards: ["图纸版本", "墙板材料"] },
      { title: "进行中", cards: ["材料采购", "钢结构生产"] },
      { title: "风险", cards: ["装柜数量待复核", "尾款条款待确认"] }
    ]
  },
  {
    id: "document-consistency-checker",
    title: "单证一致性检查表",
    value: "检查 PI、CI、PL、订舱资料之间的客户、品名、数量、金额、重量、体积和港口是否冲突。",
    stage: "V2 轻交互优先",
    relatedTracks: ["查风险", "单证检查"],
    inputs: ["PI 数据", "CI 数据", "PL 数据", "订舱资料", "提单草稿"],
    outputs: ["冲突字段", "缺失字段", "风险等级", "修改说明"],
    mockupType: "table",
    mockupTitle: "单证一致性检查",
    mockupColumns: ["字段", "PI", "CI", "PL", "风险", "建议"],
    mockupRows: [
      ["Quantity", "80", "78", "80", "High", "修正CI数量"],
      ["Port", "Jeddah", "Jeddah", "Dammam", "High", "复核订舱港口"],
      ["Description", "含卫浴电气", "简写", "可扩展房", "Medium", "统一品名"]
    ]
  },
  {
    id: "payment-risk-matrix",
    title: "付款方式风险矩阵",
    value: "对 T/T、L/C、D/P、D/A、OA 和 DDP 项目付款进行风险提示和人工确认分级。",
    stage: "V2 轻交互优先",
    relatedTracks: ["查风险", "付款风险"],
    inputs: ["客户类型", "订单金额", "付款条款", "贸易术语", "国家/地区"],
    outputs: ["风险等级", "确认问题", "内部审批点", "客户谈判方向"],
    mockupType: "metrics",
    mockupTitle: "付款方式风险矩阵",
    mockupMetrics: [
      ["T/T", "中等风险"],
      ["L/C", "需银行审单"],
      ["OA", "高风险"],
      ["DDP", "需当地确认"]
    ],
    mockupNotes: ["新客户大额订单不建议到港后付尾款", "信用证、信保和法务判断不能由AI替代"]
  }
];

window.TrainingPlatformData.toolBuildSpecs = {
  overview: {
    title: "工具开发规格书",
    description:
      "每个工具在开发前先写清业务场景、输入字段、输出结果、Codex 角色、人工确认边界和验收标准，避免把工具做成无法上课、无法维护或容易误导业务的黑箱。",
    downloads: [
      {
        label: "下载工具规格模板 CSV",
        href: "./downloads/tool-build-brief-template.csv",
        format: "CSV",
        note: "适合给后续每个工具立项、排期和验收使用。"
      },
      {
        label: "下载询盘识别器规格 MD",
        href: "./downloads/inquiry-analyzer-build-brief.md",
        format: "Markdown",
        note: "以集成房屋询盘识别器为第一套完整规格样例。"
      },
      {
        label: "下载产品资料作业模板 MD",
        href: "./downloads/product-profile-homework-template.md",
        format: "Markdown",
        note: "用于课程开端、产品资料模块和企业内训资料成熟度检查。"
      },
      {
        label: "下载询盘识别作业模板 MD",
        href: "./downloads/inquiry-analysis-homework-template.md",
        format: "Markdown",
        note: "用于课堂作业、助教返修和企业内训岗位练习。"
      },
      {
        label: "下载报价测算作业模板 MD",
        href: "./downloads/quotation-calculation-homework-template.md",
        format: "Markdown",
        note: "用于报价模块课堂作业、成本字段复核和人工确认边界检查。"
      },
      {
        label: "下载订单跟进作业模板 MD",
        href: "./downloads/order-tracking-homework-template.md",
        format: "Markdown",
        note: "用于订单模块课堂作业、节点预警、客户进度邮件和人工确认边界检查。"
      },
      {
        label: "下载付款风险作业模板 MD",
        href: "./downloads/payment-risk-homework-template.md",
        format: "Markdown",
        note: "用于风险模块课堂作业、付款条款审批、DDP 边界和客户回复检查。"
      },
      {
        label: "下载单证检查作业模板 MD",
        href: "./downloads/document-consistency-homework-template.md",
        format: "Markdown",
        note: "用于单证模块课堂作业、复查记录和人工确认边界检查。"
      },
      {
        label: "下载客户线索跟进作业模板 MD",
        href: "./downloads/lead-followup-homework-template.md",
        format: "Markdown",
        note: "用于客户开发模块课堂作业、线索分级和跟进计划检查。"
      }
    ],
    rules: [
      "先确认业务输入和人工确认人，再开发工具界面。",
      "每个工具必须能回到课程模块、课堂演示和集成房屋案例。",
      "工具输出只能作为草稿、提醒或检查结果，正式对外承诺必须人工确认。",
      "上线前至少检查桌面、平板和手机三类视口。"
    ]
  },
  specs: [
    {
      id: "spec-product-profile-desk",
      title: "企业产品资料工作台",
      priority: "P0",
      status: "已支持课堂演示、缺失项筛选、复制补资料清单和 Markdown 导出",
      scenario: "课程开端或企业内训前，需要先判断集成房屋产品资料是否足够支撑客户开发、询盘、报价、订单、单证和风险边界。",
      users: ["外贸业务员", "企业服务顾问", "主讲老师", "助教"],
      courseLinks: ["课程导入", "产品资料", "B2B 页面优化", "企业流程诊断"],
      inputs: ["产品名称", "应用场景", "规格参数", "配置选项", "包装装柜", "认证资料", "安装售后", "单证字段"],
      logic: ["按字段分类整理资料", "标记 Ready / Confirm / Missing", "统计资料成熟度", "生成缺失项补齐清单", "输出人工确认边界"],
      outputs: ["产品字段表", "成熟度概览", "缺失资料清单", "人工确认人", "英文资料草稿", "Markdown 产品资料作业包"],
      acceptance: ["至少覆盖基础资料、规格参数、配置选项、包装装柜、认证合规、安装售后和单证字段", "缺失项和待确认项必须突出显示", "输出必须说明哪些字段会被客户开发、询盘、报价、订单或单证复用", "能复制补资料清单并下载 Markdown 产品资料作业包"],
      manualBoundaries: ["产品参数、认证、库存、交期、装柜、HS 编码和合规结论必须由企业或专业人员确认", "内部成本、供应商、客户和未公开技术文件必须先脱敏"]
    },
    {
      id: "spec-inquiry-analyzer",
      title: "询盘识别与回复工具",
      priority: "P0",
      status: "已支持轻交互、复制回复和 Markdown 导出",
      scenario: "业务员收到沙特承包商 80 套集成房屋询盘，需要快速拆解需求、缺失字段和回复草稿。",
      users: ["外贸业务员", "业务主管", "试听课老师"],
      courseLinks: ["回询盘", "报价前确认", "集成房屋案例"],
      inputs: ["原始询盘", "产品资料", "公司介绍", "人工风险边界", "常见补问字段"],
      logic: ["提取数量、产品、目的港、贸易术语和配置", "匹配缺失字段", "生成补问问题", "输出风险提醒", "生成英文回复草稿"],
      outputs: ["需求摘要", "缺失字段表", "补问问题", "风险边界", "英文回复草稿"],
      acceptance: ["输入样例询盘后能识别数量、CIF Jeddah 和配置需求", "缺失字段不少于 4 项", "输出必须包含价格、交期、认证和 DDP 人工边界", "能复制回复草稿并下载 Markdown 课堂分析包"],
      manualBoundaries: ["价格、交期、付款和认证不能自动承诺", "DDP、清关、税费和安装责任必须人工确认"]
    },
    {
      id: "spec-quotation-calculator",
      title: "FOB/CIF 报价测算器",
      priority: "P0",
      status: "已支持课堂演示、字段锁定、复制报价说明和 Markdown 导出",
      scenario: "业务员需要把集成房屋成本、选配、国内费用、海运、保险和利润拆成可复核报价结构。",
      users: ["业务员", "主管", "报价负责人"],
      courseLinks: ["做报价", "利润测算", "企业流程诊断"],
      inputs: ["数量", "基础成本", "选配成本", "国内费用", "海运费", "保险费率", "目标利润率"],
      logic: ["计算 FOB 单价", "摊销海运和保险", "生成 CIF 单价", "识别漏项和异常利润", "生成报价说明草稿"],
      outputs: ["FOB 参考单价", "CIF 参考单价", "整单金额", "利润率", "漏项提醒", "报价说明"],
      acceptance: ["所有输入字段可调整并即时复算", "利润率、数量和海运费异常时给出提示", "结果区域必须说明示例不代表真实报价", "能锁定成本和运费字段，并导出 Markdown 课堂报价作业包"],
      manualBoundaries: ["工厂成本、装柜数量和海运费必须人工复核", "最终报价有效期、汇率和付款条款必须由授权岗位确认"]
    },
    {
      id: "spec-order-tracking-board",
      title: "订单跟进与交期预警看板",
      priority: "P1",
      status: "已支持课堂演示、交期预警、复制客户进度和 Markdown 导出",
      scenario: "业务员完成集成房屋报价后，需要把图纸、采购、生产、订舱、尾款等节点转成可追踪订单进度和客户更新。",
      users: ["业务员", "跟单", "生产协调", "物流负责人"],
      courseLinks: ["跟订单", "交期预警", "集成房屋案例"],
      inputs: ["订单号", "客户", "产品", "节点名称", "负责人", "计划日期", "实际日期", "当前状态", "风险证据"],
      logic: ["按节点整理进度", "识别高风险和延期状态", "生成下一步动作", "生成客户进度邮件草稿", "输出人工确认边界"],
      outputs: ["订单节点概览", "风险节点", "下一步动作", "客户进度草稿", "Markdown 订单作业包"],
      acceptance: ["至少展示图纸、采购、生产、订舱和尾款 5 类节点", "高风险和延期节点必须突出显示", "客户进度草稿不能承诺未确认交期或船期", "能复制客户进度并下载 Markdown 课堂订单作业包"],
      manualBoundaries: ["生产交期、库存、装柜数量和船期必须由工厂与货代确认", "尾款、改单、赔偿和合同责任必须由授权岗位确认"]
    },
    {
      id: "spec-document-checker",
      title: "单证一致性检查器",
      priority: "P1",
      status: "已支持课堂演示、修正复查、复制报告和 Markdown 导出",
      scenario: "出货前需要检查 PI、CI、PL 和订舱资料中数量、品名、港口、重量等字段是否冲突。",
      users: ["跟单", "单证", "业务主管"],
      courseLinks: ["查风险", "单证检查", "订单跟进"],
      inputs: ["PI 字段", "CI 字段", "PL 字段", "订舱资料", "订单主数据"],
      logic: ["标准化字段名称", "比对关键值", "识别缺失和冲突", "按严重程度分级", "输出修改建议"],
      outputs: ["冲突字段", "缺失字段", "风险等级", "处理建议", "复查结果"],
      acceptance: ["高风险冲突必须突出显示", "修正后复查能展示字段一致状态", "结果必须包含报关、信用证和清关人工复核边界", "能复制检查报告并下载 Markdown 单证作业包"],
      manualBoundaries: ["HS 编码、申报要素和信用证审单由专业人员确认", "正式 CI、PL、提单确认件必须人工复核"]
    },
    {
      id: "spec-payment-risk-matrix",
      title: "付款方式与DDP风险矩阵",
      priority: "P1",
      status: "已支持课堂演示、高风险筛选、复制客户回复和 Markdown 导出",
      scenario: "客户希望集成房屋项目采用 30% 定金、70% 到港后付款，并要求 DDP 到项目现场，需要识别付款、信用和清关责任风险。",
      users: ["业务员", "业务主管", "财务负责人", "企业服务顾问"],
      courseLinks: ["付款风险", "查风险", "集成房屋案例"],
      inputs: ["订单金额", "定金比例", "付款方式", "尾款节点", "贸易术语", "合作记录"],
      logic: ["识别账期和尾款风险", "识别 DDP 与清关税费责任", "根据金额和合作记录分级", "生成内部审批清单", "生成客户谨慎回复"],
      outputs: ["风险等级", "风险事项", "确认人", "谈判方向", "客户回复草稿", "Markdown 付款风险作业包"],
      acceptance: ["高风险付款和 DDP 条款必须突出显示", "输出必须包含财务、主管、信保、银行、货代或法务确认点", "客户回复不能直接接受未经审批的高风险条款", "能复制客户谨慎回复并下载 Markdown 课堂付款风险作业包"],
      manualBoundaries: ["客户资信、授信、信保和是否接受账期由企业确认", "信用证、DDP、清关税费、合同和索赔责任由专业人员或授权岗位确认"]
    },
    {
      id: "spec-lead-database",
      title: "客户线索库与跟进动作生成器",
      priority: "P1",
      status: "已支持课堂演示、A/B/C 分级、复制跟进计划和 Markdown 导出",
      scenario: "业务员需要把不同来源客户按国家、类型、项目、需求和跟进状态统一成可筛选客户库。",
      users: ["外贸新人", "业务主管", "企业内训团队"],
      courseLinks: ["找客户", "客户跟进", "学员最终工具包"],
      inputs: ["客户公司名", "国家", "客户类型", "项目场景", "需求产品", "最近沟通", "跟进阶段"],
      logic: ["清洗字段", "识别客户类型", "生成优先级", "推荐下一步动作", "生成跟进提醒"],
      outputs: ["客户等级", "下一步动作", "跟进日期", "开发信角度", "资料缺口"],
      acceptance: ["至少支持 A/B/C 客户分层", "每条客户必须有下一步动作", "客户判断依据可追溯到输入字段", "能复制跟进计划并下载 Markdown 线索作业包"],
      manualBoundaries: ["客户真实性、资质和合作策略由业务负责人确认", "客户隐私和联系方式由企业自行管理"]
    }
  ]
};

window.TrainingPlatformData.toolIntakeDownloads = [
  {
    label: "下载工具需求评分表 CSV",
    href: "./downloads/tool-demand-scorecard.csv",
    format: "CSV",
    note: "用于收集课堂、作业、企业咨询和招生反馈中的工具需求，并判断开发优先级。"
  },
  {
    label: "下载工具排期说明模板 MD",
    href: "./downloads/tool-priority-sprint-plan.md",
    format: "Markdown",
    note: "用于把工具候选项转成下一期开发、课堂验证或暂缓说明。"
  }
];

window.TrainingPlatformData.toolIntakeBoard = [
  {
    rank: "P0",
    tool: "询盘识别与回复工具",
    demandSignal: "试听课、正式课和企业内训都会遇到询盘信息不完整、业务员急着报价的问题。",
    teachingEvidence: "集成房屋沙特 80 套询盘已经能支撑课堂演示、作业替换和企业诊断样例。",
    buildScope: "保留文本输入、已知需求识别、缺失字段、补问问题、回复草稿和风险边界。",
    reusableOutput: "询盘识别表、补问邮件、报价前检查清单。",
    launchDecision: "已补轻交互输出、回复复制、Markdown 导出和作业模板，下一期验证行业字段替换。",
    manualBoundary: "不能自动承诺价格、交期、付款、认证、DDP、清关和安装责任。",
    owner: "课程负责人 + 产品负责人",
    nextSprint: "验证行业字段替换和课堂作业回写"
  },
  {
    rank: "P0",
    tool: "FOB/CIF 报价费用项检查器",
    demandSignal: "学员和企业最关心报价是否漏项，但真实价格、成本、运费和利润必须人工确认。",
    teachingEvidence: "报价模块、企业内训方案和集成房屋 CIF Jeddah 案例都需要统一费用项说明。",
    buildScope: "先做费用项拆分、异常利润提示、海运摊销、保险提示和报价说明草稿。",
    reusableOutput: "报价费用项清单、人工确认清单、报价邮件说明。",
    launchDecision: "已补字段锁定、报价说明复制、Markdown 导出和作业模板，下一期验证企业真实费用项替换。",
    manualBoundary: "最终价格、成本、利润率、汇率、运费有效期和付款条款由企业授权岗位确认。",
    owner: "主讲老师 + 财务/报价顾问",
    nextSprint: "验证企业真实费用项替换和报价作业返修"
  },
  {
    rank: "P1",
    tool: "订单跟进与交期预警看板",
    demandSignal: "学员做完报价后最容易卡在订单节点分散、交期风险发现晚、客户进度更新被动。",
    teachingEvidence: "集成房屋案例已有图纸、材料、生产、订舱、尾款节点，能直接支撑跟单模块演示和作业替换。",
    buildScope: "先做订单节点表、风险筛选、客户进度草稿、人工确认边界和 Markdown 作业导出。",
    reusableOutput: "订单跟进表、交期预警、客户进度邮件、人工确认清单。",
    launchDecision: "已补节点预警、客户进度复制、Markdown 导出和作业模板，下一期验证学员真实订单节点替换。",
    manualBoundary: "生产交期、库存、装柜数量、海运舱位、目的港延误、付款和索赔必须由对应岗位确认。",
    owner: "跟单顾问 + 产品负责人",
    nextSprint: "验证学员真实订单节点替换"
  },
  {
    rank: "P1",
    tool: "PI/CI/PL 单证一致性检查器",
    demandSignal: "跟单和单证岗位重复核对字段，但报关、信用证和清关规则不能被工具替代。",
    teachingEvidence: "现有单证演示器已经能展示数量、品名、港口和重量冲突。",
    buildScope: "先做表格化字段对比、高风险标记、修正后复查和人工复核提示。",
    reusableOutput: "单证冲突表、风险等级、修改建议、复查记录。",
    launchDecision: "已补修正复查、检查报告复制、Markdown 导出和作业模板，下一期收集更多脱敏单证冲突样例。",
    manualBoundary: "HS 编码、申报要素、信用证审单、目的港清关和正式单据必须专业人员复核。",
    owner: "单证顾问 + 产品负责人",
    nextSprint: "收集更多脱敏单证冲突样例并评估表格上传"
  },
  {
    rank: "P1",
    tool: "付款方式与DDP风险矩阵",
    demandSignal: "学员和企业客户经常在大额订单、到港后尾款、OA、远期信用证和 DDP 条款上缺少统一审批口径。",
    teachingEvidence: "课程 M10 已用集成房屋 30% 定金、70% 到港后付款和 DDP 到项目现场作为风险场景。",
    buildScope: "先做付款条款输入、高风险筛选、内部审批清单、客户谨慎回复和 Markdown 作业导出。",
    reusableOutput: "付款风险矩阵、DDP 风险清单、内部审批清单、客户谈判回复。",
    launchDecision: "已补高风险筛选、客户回复复制、Markdown 导出和作业模板，下一期验证企业真实付款条款替换。",
    manualBoundary: "客户资信、授信、信保、信用证、清关税费、合同责任和索赔必须由授权岗位或专业人员确认。",
    owner: "财务/风控顾问 + 产品负责人",
    nextSprint: "验证企业真实付款条款替换"
  },
  {
    rank: "P1",
    tool: "客户线索库与跟进动作生成器",
    demandSignal: "客户开发和跟进容易分散在平台、邮箱和聊天中，业务员缺少统一优先级和下一步动作。",
    teachingEvidence: "课程 M1-M3、推广线索跟进和企业诊断都需要统一客户字段。",
    buildScope: "先做客户字段库、A/B/C 分层、下一步动作、跟进日期和开发信角度。",
    reusableOutput: "客户字段库、跟进计划表、线索分级说明。",
    launchDecision: "已补轻交互分级、跟进计划复制、Markdown 导出和作业模板，下一期验证学员真实客户库脱敏样例。",
    manualBoundary: "客户真实性、合作价值、触达合规和隐私管理由业务负责人确认。",
    owner: "市场运营 + 外贸主管",
    nextSprint: "收集优秀学员客户库脱敏样例并评估可导入表格"
  },
  {
    rank: "P0",
    tool: "企业产品资料工作台",
    demandSignal: "企业内训经常卡在产品资料不完整，导致后续客户开发、询盘和报价都无法稳定演示。",
    teachingEvidence: "企业诊断到内训方案映射台已把产品资料准备列为第一阶段。",
    buildScope: "先做产品字段、资料状态、复用场景、缺失项筛选、人工确认人和 Markdown 作业导出。",
    reusableOutput: "产品主数据表、英文参数表、待补字段清单、人工确认清单。",
    launchDecision: "已补轻交互成熟度演示、缺失项筛选、补资料清单复制、Markdown 导出和作业模板。",
    manualBoundary: "产品性能、认证、库存、交期、质保和可交付能力必须由企业确认。",
    owner: "企业服务负责人 + 产品负责人",
    nextSprint: "用企业真实产品资料验证字段替换和课前资料成熟度评分"
  }
];

window.TrainingPlatformData.toolClassroomAcceptanceDownloads = [
  {
    label: "下载轻交互工具课堂验收表 CSV",
    href: "./downloads/tool-classroom-acceptance-board.csv",
    format: "CSV",
    note: "用于记录工具在试讲、正式课、作业、企业内训和资源承接中的验收证据。"
  },
  {
    label: "下载课堂验收复盘模板 MD",
    href: "./downloads/tool-classroom-acceptance-brief-template.md",
    format: "Markdown",
    note: "用于每次工具试讲或上线后复盘输入资料、输出质量、人工边界和版本回写动作。"
  }
];

window.TrainingPlatformData.toolClassroomAcceptanceBoard = [
  {
    tool: "询盘识别与回复工具",
    stage: "正式课可用",
    sourceEvidence: "集成房屋沙特 80 套询盘、字段准备分、试听课互动问题、询盘识别作业模板。",
    classroomGate: "老师能在 10 分钟内完成输入、字段证据、准备分、补问、回复草稿、下一步路由和风险边界讲解。",
    homeworkGate: "学员能提交一封脱敏询盘，并输出已知需求、字段证据、缺失字段、补问问题、英文回复和人工确认点。",
    exportGate: "复制回复草稿、复制分析 Brief 和 Markdown 导出都可用，导出内容包含字段证据、质量检查和禁止承诺事项。",
    nextRoute: "进入正式课、试听课演示、报价工具前置闸口和报名证据路由。",
    writeback: "收集 3 个非集成房屋行业询盘替换样例，回写字段权重、行业关键词和下一步路由说明。",
    manualBoundary: "价格、交期、付款、认证、DDP、清关和安装责任不得由工具自动承诺。"
  },
  {
    tool: "FOB/CIF 报价费用项检查器",
    stage: "正式课可用，企业样例待替换",
    sourceEvidence: "集成房屋 CIF Jeddah 报价场景、报价测算作业模板、费用字段证据、审批闸口和锁定字段。",
    classroomGate: "老师能讲清工厂成本、选配、国内费用、海运、保险、利润、发布分、审批责任和不可承诺事项。",
    homeworkGate: "学员能用脱敏费用项完成报价结构、字段证据、审批清单和漏项提醒，但不把演示数字作为最终价格。",
    exportGate: "报价说明复制、报价 Brief 复制和 Markdown 导出可用，导出内容必须包含费用字段证据、发布闸口、审批人和禁止承诺事项。",
    nextRoute: "进入正式课报价模块，并作为询盘工具后的报价前置闸口；企业真实费用项需单独替换验证。",
    writeback: "补充至少 2 组企业脱敏报价费用项，验证海运为 0、利润异常、选配缺失和 DDP 问题提示。",
    manualBoundary: "最终成本、利润率、汇率、运费有效期、付款条款和报价有效期必须由企业确认。"
  },
  {
    tool: "PI/CI/PL 单证一致性检查器",
    stage: "正式课可用，专业样例待扩展",
    sourceEvidence: "PI/CI/PL/订舱冲突样例、单证放行分、字段证据、专业审批闸口、修正后复查输出和单证作业模板。",
    classroomGate: "老师能展示数量、品名、目的港、重量冲突如何进入放行分、字段证据、风险等级、修正建议和专业复核边界。",
    homeworkGate: "学员能提交脱敏单证字段表，输出冲突报告、字段证据、修正复查、专业审批清单和不可自动判断的合规结论。",
    exportGate: "检查报告复制、复查 Brief 复制和 Markdown 导出可用，导出内容必须含字段证据、放行闸口、修正复查、专业审批和人工边界。",
    nextRoute: "进入正式课单证模块，并承接报价/订单后的出运前检查；企业真实单证样例需单独脱敏验证。",
    writeback: "补齐信用证、HS 编码、申报要素、提单确认和清关不进入自动结论的边界提示，并评估表格上传需求。",
    manualBoundary: "HS 编码、申报要素、信用证审单、报关、银行和目的港清关必须由专业人员复核。"
  },
  {
    tool: "订单跟进与交期预警看板",
    stage: "正式课可用，企业履约样例待扩展",
    sourceEvidence: "集成房屋图纸、采购、生产、订舱、尾款节点、履约分、节点证据、订单跟进作业模板。",
    classroomGate: "老师能用节点异常演示履约闸口、节点证据、延期风险、客户进度草稿、后续单证/付款路由和内部确认动作。",
    homeworkGate: "学员能用自己的订单节点替换样例，输出履约分、风险节点、负责人、下一步动作、审批闸口和客户进度邮件。",
    exportGate: "客户进度复制、履约 Brief 复制和 Markdown 导出可用，导出内容包含节点证据、履约闸口、风险原因、审批人和人工确认边界。",
    nextRoute: "进入正式课跟单模块，并承接报价后的履约管理；稳定后路由到单证检查和付款风险工具。",
    writeback: "收集真实订单节点替换反馈，补充图纸变更、材料延误、订舱、尾款和质检异常的课堂讲法。",
    manualBoundary: "生产计划、库存、舱位、发货、尾款、索赔和客户承诺必须由对应岗位确认。"
  },
  {
    tool: "付款方式与 DDP 风险矩阵",
    stage: "正式课可用，企业风控样例待扩展",
    sourceEvidence: "集成房屋 30/70 付款、到港后尾款、DDP 到项目现场、审批分、风险证据和付款风险作业模板。",
    classroomGate: "老师能把付款条款、客户信用、DDP 范围、审批分、风险证据、内部审批和谈判替代方案拆成可讨论清单。",
    homeworkGate: "学员能提交脱敏付款条款，输出审批分、风险证据、风险等级、内部审批人、客户谨慎回复和不可承诺事项。",
    exportGate: "客户回复复制、审批 Brief 复制和 Markdown 导出可用，导出内容要保留风险证据、审批闸口、谈判方向和人工边界。",
    nextRoute: "进入正式课付款风险模块，并承接订单履约尾款/放单问题；企业真实付款条款需单独脱敏验证。",
    writeback: "补充 OA、远期信用证、尾款到港后支付、DDP 税费责任和客户资信的企业确认样例。",
    manualBoundary: "客户资信、授信、信保、信用证、税费、合同责任和索赔必须由授权岗位确认。"
  }
];

window.TrainingPlatformData.toolSampleValidationDownloads = [
  {
    label: "下载真实样例替换验收表 CSV",
    href: "./downloads/tool-sample-validation-board.csv",
    format: "CSV",
    note: "用于记录学员或企业脱敏样例替换默认演示后的输入质量、输出质量、风险边界和回写动作。"
  },
  {
    label: "下载样例替换复盘模板 MD",
    href: "./downloads/tool-sample-validation-brief-template.md",
    format: "Markdown",
    note: "用于每次工具 Sprint 或课堂作业替换后，形成可回写到工具、课程、企业服务和招生证据的复盘记录。"
  }
];

window.TrainingPlatformData.toolSampleValidationBoard = [
  {
    tool: "企业产品资料工作台",
    sampleSource: "企业课前资料、学员主推产品表、集成房屋字段母版",
    validationGate: "必须能识别产品资料 Ready / Confirm / Missing 状态，并生成补资料清单和人工确认人。",
    evidenceNeeded: ["脱敏产品字段", "规格参数", "认证或检测资料", "包装装柜信息", "负责人确认"],
    outputCheck: "输出应包含资料成熟度、缺失项、复用场景、英文资料草稿和禁止自动判断的字段。",
    routePages: ["tools.html#tool-interactive-demo", "enterprise.html#enterprise-training-plan-mapper", "learning.html#learning-application-review"],
    writebackAction: "把高频缺失字段回写到产品资料作业模板、企业诊断资料清单和工具默认字段。",
    riskBoundary: "产品性能、认证、库存、交期、质保、HS 编码和目的国适用性必须由企业或专业人员确认。",
    nextDecision: "通过后进入正式课开课前资料准备和企业诊断前置闸口。"
  },
  {
    tool: "客户线索分级与跟进工具",
    sampleSource: "学员脱敏客户库、资源领取线索、公开课留言和企业客户开发表",
    validationGate: "每条客户必须能输出等级、判断依据、跟进节奏、下一步动作和开发信角度。",
    evidenceNeeded: ["客户国家", "客户类型", "需求产品", "沟通阶段", "最近互动"],
    outputCheck: "输出应能区分 A/B/C 优先级，且不把联系方式、个人隐私或客户资质判断写成自动结论。",
    routePages: ["tools.html#tool-intake-board", "marketing.html", "resources.html"],
    writebackAction: "把优秀脱敏客户库样例回写到客户开发模块、资源跟进标签和工具字段库。",
    riskBoundary: "客户真实性、触达合规、采购能力、信用风险和合作策略必须由业务负责人确认。",
    nextDecision: "通过后进入客户开发作业验收、资源用户分层跟进和企业销售团队内训。"
  },
  {
    tool: "询盘识别与回复工具",
    sampleSource: "学员真实脱敏询盘、公开课提交样例、企业诊断典型询盘",
    validationGate: "替换样例后仍能识别已知需求、缺失字段、补问问题、报价前闸口和英文回复草稿。",
    evidenceNeeded: ["原始询盘", "产品字段", "目标市场", "贸易条款", "客户问题"],
    outputCheck: "输出必须保留字段证据和缺失字段，不得直接承诺价格、交期、认证、DDP、清关或安装责任。",
    routePages: ["classroom.html", "case-integrated-house.html", "enrollment.html#enrollment-toolchain-proof"],
    writebackAction: "把行业关键词、常见缺失字段和错误回复倾向回写到询盘工具规则、课堂脚本和指令包。",
    riskBoundary: "报价、付款、认证、交付、DDP、清关和客户真实性由人工确认。",
    nextDecision: "通过后进入试听课演示、正式课作业和招生证据候选审核。"
  },
  {
    tool: "FOB/CIF 报价测算器",
    sampleSource: "企业脱敏费用项、学员报价作业、集成房屋 CIF Jeddah 母版",
    validationGate: "替换企业费用后仍能计算结构化报价，并识别海运为 0、利润异常、选配缺失和 DDP 责任问题。",
    evidenceNeeded: ["基础成本", "选配成本", "国内费用", "海运或保险", "利润口径"],
    outputCheck: "输出只能作为课堂测算结构，必须标明样例数字、锁定字段、审批人和最终报价禁用口径。",
    routePages: ["tools.html#tool-classroom-acceptance-board", "enterprise.html#enterprise-proposal-approval", "course.html"],
    writebackAction: "把真实费用项替换反馈回写到报价作业模板、企业内训方案和工具异常提示。",
    riskBoundary: "真实成本、利润、汇率、运费有效期、报价有效期、付款条款和 DDP 责任必须由授权岗位确认。",
    nextDecision: "通过后可进入企业内训报价模块；未通过则保留课堂 Beta，不用于销售承诺。"
  },
  {
    tool: "订单跟进与交期预警看板",
    sampleSource: "学员脱敏订单节点、企业履约节点、集成房屋图纸到尾款母版",
    validationGate: "替换订单节点后仍能输出履约分、风险节点、负责人、下一步动作和客户进度草稿。",
    evidenceNeeded: ["订单节点", "计划日期", "实际状态", "负责人", "风险证据"],
    outputCheck: "输出必须说明延期原因、内部审批和客户沟通边界，不得承诺未确认交期、船期或赔偿。",
    routePages: ["learning.html#learning-application-review", "enterprise.html#enterprise-toolchain-signal", "tools.html#tool-classroom-acceptance-board"],
    writebackAction: "把真实订单节点和异常类型回写到跟单模块、订单作业模板和企业 SOP 候选。",
    riskBoundary: "生产计划、库存、质检、订舱、尾款、索赔和客户承诺由对应岗位确认。",
    nextDecision: "通过后进入正式课跟单模块和企业 SOP 样板线。"
  },
  {
    tool: "PI/CI/PL 单证一致性检查器",
    sampleSource: "学员脱敏单证字段表、企业出运资料、集成房屋冲突样例",
    validationGate: "替换单证字段后仍能识别高风险字段冲突、修正建议、复查结果和专业审批边界。",
    evidenceNeeded: ["PI 字段", "CI 字段", "PL 字段", "订舱资料", "复查结果"],
    outputCheck: "输出必须保留字段证据和专业审批，不得自动给出报关、信用证、HS 编码或目的港清关结论。",
    routePages: ["course.html", "case-integrated-house.html", "enterprise.html#enterprise-toolchain-signal"],
    writebackAction: "把新增冲突类型回写到单证检查器、作业模板、课堂讲法和企业资料清单。",
    riskBoundary: "正式单据、提单确认、信用证审单、HS 编码、申报要素和清关判断由专业人员复核。",
    nextDecision: "通过后进入正式课单证模块；专业样例不足时继续收集，不进入公开承诺素材。"
  },
  {
    tool: "付款方式与 DDP 风险矩阵",
    sampleSource: "企业脱敏付款条款、学员风险作业、集成房屋 30/70 + DDP 母版",
    validationGate: "替换付款条款后仍能输出风险等级、审批清单、谈判方向、客户谨慎回复和人工确认边界。",
    evidenceNeeded: ["订单金额", "定金比例", "尾款节点", "贸易术语", "合作记录"],
    outputCheck: "输出不得直接接受账期、DDP、远期信用证或尾款到港后付款，必须给出内部审批人。",
    routePages: ["tools.html#tool-classroom-acceptance-board", "enterprise.html#enterprise-proposal-approval", "automation.html"],
    writebackAction: "把高频付款风险样例回写到风险模块、企业审批清单和招生宣传边界。",
    riskBoundary: "客户资信、授信、信保、信用证、税费、合同、索赔和 DDP 交付责任由授权岗位或专业人员确认。",
    nextDecision: "通过后进入企业风控岗位验证；未授权样例只能内部复盘。"
  }
];

window.TrainingPlatformData.toolProductizationBriefBuilder = {
  title: "工具产品化 Brief 生成器",
  description:
    "用于把课堂、作业、企业诊断或招生反馈中的重复外贸动作，判断成模板包、静态原型、轻交互工具或企业定制项目。输出结果可直接进入课程试讲、工具规格、开发排期、销售说明和企业服务边界确认。",
  exportFilename: "tool-productization-brief-output.md",
  downloads: [
    {
      label: "下载工具商业化成熟度板 CSV",
      href: "./downloads/tool-commercialization-readiness-board.csv",
      format: "CSV",
      note: "用于记录工具候选、证据来源、成熟度、目标用户、开发范围、商业入口和人工边界。"
    },
    {
      label: "下载工具产品化 Brief 模板 MD",
      href: "./downloads/tool-productization-brief-template.md",
      format: "Markdown",
      note: "用于把单个工具候选转成课程、开发、销售和企业交付都能复用的产品化说明。"
    }
  ],
  defaults: {
    toolCandidate: "inquiry-analyzer",
    sourceSignal: "classroom-demo",
    maturityLevel: "repeated-validated",
    userRole: "foreign-trade-sales",
    deliveryScope: "light-interactive",
    riskLevel: "medium-business"
  },
  toolCandidates: [
    {
      id: "product-profile",
      label: "企业产品资料工作台",
      scenario: "把集成房屋产品参数、配置、包装、认证、安装、质保和单证字段整理成后续客户开发、询盘、报价和企业内训的共同输入。",
      workflow: "产品资料成熟度检查",
      priorityScore: 20,
      routePages: ["tools.html", "course.html", "enterprise.html", "case-integrated-house.html"],
      inputs: ["产品英文名", "规格参数", "配置选项", "包装装柜", "认证资料", "安装售后", "单证字段"],
      outputs: ["产品字段表", "缺失资料清单", "英文资料草稿", "人工确认人清单"],
      codexTasks: ["整理字段结构", "生成缺失项补资料清单", "输出英文产品资料草稿", "生成课堂作业包"],
      manualChecks: ["产品参数、认证、库存、交期和质保", "内部成本、供应商和未公开技术资料脱敏", "HS 编码和目的国合规判断"],
      proofAssets: ["产品资料演示器", "产品资料作业模板", "企业诊断资料清单"]
    },
    {
      id: "lead-followup",
      label: "客户线索分级与跟进工具",
      scenario: "把平台、展会、LinkedIn、网站表单和老客户线索统一成 A/B/C 优先级、下一步动作和开发信角度。",
      workflow: "客户开发和线索跟进",
      priorityScore: 19,
      routePages: ["tools.html", "marketing.html", "resources.html", "course.html"],
      inputs: ["客户公司", "国家", "客户类型", "需求信号", "来源", "阶段", "最近互动"],
      outputs: ["线索等级", "跟进节奏", "开发信角度", "资料缺口", "下一步动作"],
      codexTasks: ["清洗客户字段", "生成跟进动作", "写开发信角度", "汇总线索培育计划"],
      manualChecks: ["客户真实性和采购能力", "触达平台规则和隐私合规", "代理、授信和独家合作策略"],
      proofAssets: ["客户线索演示器", "线索跟进作业模板", "资源下载跟进流程"]
    },
    {
      id: "inquiry-analyzer",
      label: "询盘识别与回复工具",
      scenario: "业务员收到集成房屋英文询盘后，快速拆出已知需求、缺失字段、补问问题、风险边界和英文回复草稿。",
      workflow: "询盘识别和报价前确认",
      priorityScore: 24,
      routePages: ["tools.html", "classroom.html", "case-integrated-house.html", "prompts.html"],
      inputs: ["原始询盘", "产品资料", "公司介绍", "常见补问字段", "风险边界"],
      outputs: ["需求摘要", "缺失字段", "补问清单", "风险提醒", "英文回复草稿"],
      codexTasks: ["提取客户需求", "生成补问清单", "起草英文回复", "导出课堂分析包"],
      manualChecks: ["价格、交期、认证和付款条款", "DDP、清关、税费和安装责任", "客户真实性和项目价值判断"],
      proofAssets: ["询盘识别演示器", "询盘作业模板", "集成房屋沙特 80 套案例"]
    },
    {
      id: "quotation-calculator",
      label: "FOB/CIF 报价测算器",
      scenario: "把集成房屋成本、选配、国内费用、海运、保险、汇率和利润拆成可复核报价结构，并提示漏项和 DDP 风险。",
      workflow: "报价测算和利润复核",
      priorityScore: 23,
      routePages: ["tools.html", "course.html", "case-integrated-house.html", "enterprise.html"],
      inputs: ["产品成本", "选配费用", "数量", "国内费用", "海运费", "保险", "目标利润"],
      outputs: ["FOB 单价", "CIF 单价", "整单金额", "利润率", "漏项提醒", "报价说明草稿"],
      codexTasks: ["拆分费用项", "生成报价结构说明", "提示漏项和异常利润", "导出报价作业包"],
      manualChecks: ["真实成本、运费、装柜数量和汇率有效期", "最终报价、付款条款和利润口径", "DDP、目的港费用和清关责任"],
      proofAssets: ["报价测算演示器", "报价作业模板", "CIF Jeddah 样例"]
    },
    {
      id: "document-checker",
      label: "PI/CI/PL 单证一致性检查器",
      scenario: "出货前检查 PI、CI、PL、订舱资料和提单草稿中的客户、品名、数量、金额、重量、体积和港口是否冲突。",
      workflow: "单证检查和出运风险",
      priorityScore: 18,
      routePages: ["tools.html", "course.html", "case-integrated-house.html"],
      inputs: ["PI 字段", "CI 字段", "PL 字段", "订舱资料", "提单草稿"],
      outputs: ["冲突字段", "缺失字段", "风险等级", "修改建议", "复查记录"],
      codexTasks: ["标准化字段名称", "比对单证关键字段", "输出冲突报告", "生成复查清单"],
      manualChecks: ["正式单据和提单确认件", "HS 编码、申报要素和信用证审单", "目的港清关和报关专业判断"],
      proofAssets: ["单证一致性演示器", "单证检查作业模板", "PI/CI/PL 冲突样例"]
    },
    {
      id: "payment-risk",
      label: "付款方式与 DDP 风险矩阵",
      scenario: "客户要求低定金、到港后尾款、OA、远期信用证或 DDP 到项目现场时，统一识别付款、信用、清关和合同责任风险。",
      workflow: "付款风险和合同边界",
      priorityScore: 21,
      routePages: ["tools.html", "course.html", "enterprise.html", "case-integrated-house.html"],
      inputs: ["订单金额", "付款方式", "尾款节点", "贸易术语", "合作记录", "目的国"],
      outputs: ["风险等级", "审批清单", "谈判方向", "客户谨慎回复", "人工确认边界"],
      codexTasks: ["整理付款条款", "生成风险提醒", "输出内部审批清单", "起草谨慎回复"],
      manualChecks: ["客户资信、授信和信保", "银行审单、合同、税务和法务判断", "DDP 清关税费和目的地交付责任"],
      proofAssets: ["付款风险演示器", "付款风险作业模板", "DDP 项目风险样例"]
    },
    {
      id: "enterprise-sop",
      label: "企业工具与 SOP 项目",
      scenario: "把企业真实重复流程改造成岗位 SOP、工具字段、内训作业和上线验收体系，适合团队培训或企业定制服务。",
      workflow: "企业内训和工具/SOP 交付",
      priorityScore: 22,
      routePages: ["enterprise.html", "playbook.html", "tools.html", "classroom.html"],
      inputs: ["企业流程访谈", "岗位角色", "真实脱敏样例", "现有表格", "审批边界", "验收标准"],
      outputs: ["企业诊断 brief", "工具字段规格", "岗位 SOP", "培训计划", "上线验收清单"],
      codexTasks: ["归纳流程卡点", "生成 SOP 草稿", "整理工具字段", "输出培训交付计划"],
      manualChecks: ["企业内部数据授权和脱敏", "管理层审批和岗位责任", "合同范围、验收标准和售后边界"],
      proofAssets: ["企业诊断 brief 生成器", "培训方案映射台", "企业交付验收板"]
    }
  ],
  sourceSignals: [
    {
      id: "classroom-demo",
      label: "课堂演示高频",
      evidence: "老师反复需要演示同一个判断、整理、检查或回复动作，学员能在课上立即替换自己的业务资料。",
      evidenceScore: 16,
      routePages: ["classroom.html", "course.html"],
      proof: "可用试讲记录、课堂提问和作业完成度作为证据。",
      nextAction: "先做静态原型或轻交互演示，再进入作业验收。"
    },
    {
      id: "learner-homework",
      label: "学员作业返修高频",
      evidence: "同类作业反复出现字段缺失、边界不清、输出无法对外使用的问题。",
      evidenceScore: 14,
      routePages: ["learning.html", "classroom.html"],
      proof: "可用作业评分、返修记录和优秀作业展示授权作为证据。",
      nextAction: "先做作业模板、评分表和返修提示，再评估交互工具。"
    },
    {
      id: "enterprise-diagnosis",
      label: "企业诊断明确痛点",
      evidence: "企业访谈中已经确认岗位重复劳动、资料分散、审批口径不统一或交付风险。",
      evidenceScore: 18,
      routePages: ["enterprise.html", "playbook.html"],
      proof: "可用企业诊断 brief、材料清单、培训范围和验收标准作为证据。",
      nextAction: "先锁定企业版本字段、数据权限和验收边界，再判断是否定制。"
    },
    {
      id: "marketing-resource",
      label: "资源下载转化信号",
      evidence: "用户下载某类模板后持续咨询同一类问题，说明工具可能成为招生或公开课入口。",
      evidenceScore: 12,
      routePages: ["resources.html", "marketing.html", "enrollment.html"],
      proof: "可用下载记录、跟进标签、公开课报名和咨询记录作为证据。",
      nextAction: "先做资源包和公开课演示，不直接承诺工具定制。"
    },
    {
      id: "sales-consultation",
      label: "招生咨询顾虑集中",
      evidence: "报课前用户反复询问工具能否直接替代自己的重复劳动、是否能用于真实业务。",
      evidenceScore: 13,
      routePages: ["enrollment.html", "tools.html"],
      proof: "可用咨询记录、顾虑回应、报课方案 brief 和转化复盘作为证据。",
      nextAction: "先用工具演示和作业产出证明学习路径，避免承诺自动成交。"
    }
  ],
  maturityLevels: [
    {
      id: "idea-only",
      label: "只有想法",
      readiness: "资料不足",
      readinessScore: 16,
      gate: "暂不进入交互开发",
      requirement: "至少补齐业务样例、输入字段、输出格式和人工确认边界。",
      repairAction: "安排一次课程负责人、业务顾问和产品负责人评审。"
    },
    {
      id: "sample-ready",
      label: "已有集成房屋样例",
      readiness: "可做规格/原型",
      readinessScore: 24,
      gate: "可以进入模板或静态原型",
      requirement: "需要补异常样例、作业验收标准和课堂替换说明。",
      repairAction: "先写工具规格书和静态 mockup，再做试讲。"
    },
    {
      id: "repeated-validated",
      label: "已被课堂/作业反复验证",
      readiness: "可做轻交互",
      readinessScore: 32,
      gate: "可以进入轻交互开发",
      requirement: "需要稳定字段、默认样例、导出格式、错误状态和移动端布局。",
      repairAction: "进入工具开发规格、轻交互实现和上线验收。"
    },
    {
      id: "enterprise-validated",
      label: "已有企业真实脱敏样例",
      readiness: "可评估企业项目",
      readinessScore: 35,
      gate: "可以评估企业定制或 SOP 项目",
      requirement: "必须确认数据授权、脱敏范围、内部审批人、交付范围和验收证据。",
      repairAction: "先做企业 scope brief 和交付验收清单，再报价企业项目。"
    }
  ],
  userRoles: [
    {
      id: "foreign-trade-sales",
      label: "外贸业务员",
      pain: "重复整理资料、回询盘、写邮件和跟进客户，占用开发客户和高价值沟通时间。",
      usage: "需要快速输出草稿、检查清单和下一步动作。",
      routePages: ["course.html", "learning.html"],
      adoptionRisk: "如果字段太复杂，学员会放弃使用；必须先用课堂样例跑通。"
    },
    {
      id: "sales-manager",
      label: "外贸主管/负责人",
      pain: "团队口径不统一，报价、客户跟进、风险判断和作业质量难以复盘。",
      usage: "需要统一标准、验收表和团队复盘看板。",
      routePages: ["enterprise.html", "playbook.html"],
      adoptionRisk: "如果不能沉淀 SOP 和责任边界，就会变成一次性演示。"
    },
    {
      id: "instructor-assistant",
      label: "主讲老师/助教",
      pain: "讲课、作业返修和学员答疑重复，缺少统一工具演示和评分标准。",
      usage: "需要课堂脚本、演示工具、作业模板和返修清单。",
      routePages: ["classroom.html", "learning.html"],
      adoptionRisk: "如果不能解释人工边界，容易被学员误解为自动替代业务判断。"
    },
    {
      id: "enterprise-team",
      label: "企业团队",
      pain: "真实流程跨业务、跟单、单证、财务、工厂和货代，重复劳动之外还有审批和责任问题。",
      usage: "需要岗位流程、权限、SOP、验收证据和内训计划。",
      routePages: ["enterprise.html", "playbook.html"],
      adoptionRisk: "如果未经授权使用真实数据，工具上线会带来隐私和商业风险。"
    }
  ],
  deliveryScopes: [
    {
      id: "template-pack",
      label: "模板包/作业包",
      stage: "Stage 02",
      valueScore: 8,
      deliverables: ["字段表", "作业模板", "评分清单", "人工确认边界"],
      acceptance: "学员能按模板替换自己的脱敏资料，并输出一份可检查作业。",
      commercialRoute: "免费资源、试听课赠品、正式课作业",
      routePages: ["resources.html", "learning.html"]
    },
    {
      id: "static-mockup",
      label: "静态原型/课程截图",
      stage: "Stage 03",
      valueScore: 11,
      deliverables: ["静态工具界面", "课堂演示脚本", "招生展示截图", "改版清单"],
      acceptance: "老师能在课上讲清输入、输出、风险边界和后续交互方向。",
      commercialRoute: "公开课展示、落地页证明、工具预售验证",
      routePages: ["tools.html", "marketing.html"]
    },
    {
      id: "light-interactive",
      label: "轻交互工具",
      stage: "Stage 04",
      valueScore: 16,
      deliverables: ["可交互页面", "默认样例", "复制/导出", "移动端适配", "上线验收"],
      acceptance: "用户能完成核心路径，输出可复制，页面明确不替代人工确认。",
      commercialRoute: "正式课交付、课后工具库、企业诊断样例",
      routePages: ["tools.html", "classroom.html"]
    },
    {
      id: "enterprise-custom",
      label: "企业定制工具/SOP",
      stage: "Stage 06",
      valueScore: 18,
      deliverables: ["企业字段规格", "岗位 SOP", "内部培训包", "验收清单", "维护计划"],
      acceptance: "企业用脱敏样例完成验收，岗位责任、数据权限和维护人清楚。",
      commercialRoute: "企业内训、工具/SOP 项目、长期顾问服务",
      routePages: ["enterprise.html", "playbook.html"]
    }
  ],
  riskLevels: [
    {
      id: "low-structure",
      label: "低风险：结构化整理",
      riskPenalty: 2,
      riskTag: "结构辅助",
      boundary: "适合做字段整理、草稿、清单和课堂作业，不涉及正式对外承诺。",
      dataRule: "仍需脱敏客户、供应商、成本和内部资料。",
      manualGate: "业务负责人确认资料准确性。"
    },
    {
      id: "medium-business",
      label: "中风险：业务判断",
      riskPenalty: 7,
      riskTag: "业务复核",
      boundary: "可以生成建议和草稿，但客户价值、报价策略、交期、付款和跟进优先级必须人工复核。",
      dataRule: "只使用脱敏样例或企业授权资料。",
      manualGate: "业务主管或课程顾问复核后才能对外使用。"
    },
    {
      id: "high-compliance",
      label: "高风险：报价/单证/合规",
      riskPenalty: 14,
      riskTag: "专业审批",
      boundary: "只能做检查、提醒和草稿，不能自动确认价格、HS 编码、信用证、清关、税费、合同和 DDP 责任。",
      dataRule: "禁止把真实合同、客户隐私、未公开成本和敏感单证直接放进公开演示。",
      manualGate: "报价负责人、单证、财务、法务、银行、货代或报关行按职责审批。"
    },
    {
      id: "enterprise-private",
      label: "企业敏感：内部数据/流程",
      riskPenalty: 12,
      riskTag: "授权交付",
      boundary: "必须先确认数据授权、展示范围、内部流程责任和项目验收标准。",
      dataRule: "企业真实资料必须脱敏、授权、留痕，并区分课堂、内部和公开展示权限。",
      manualGate: "企业负责人、项目负责人和交付负责人共同确认。"
    }
  ],
  commercializationRules: [
    "先证明业务场景和重复频率，再决定是否开发交互工具。",
    "任何工具都必须绑定课程模块、课堂演示、下载模板和人工确认边界。",
    "对外宣传只能说提高整理、检查、草稿和复盘效率，不能承诺自动成交或替代专业审批。",
    "企业定制必须先确认数据授权、岗位责任、交付范围、验收标准和后续维护人。"
  ]
};

window.TrainingPlatformData.toolLaunchDownloads = [
  {
    label: "下载工具产品化路线 CSV",
    href: "./downloads/tool-productization-roadmap.csv",
    format: "CSV",
    note: "用于把课堂高频工具排期到原型、开发、上线和维护。"
  },
  {
    label: "下载工具上线验收清单 MD",
    href: "./downloads/tool-launch-acceptance-checklist.md",
    format: "Markdown",
    note: "用于每个交互工具上线前检查业务、课堂、资源和人工边界。"
  }
];

window.TrainingPlatformData.toolLaunchBoard = [
  {
    stage: "01",
    title: "从课堂高频动作筛选工具候选",
    toolFocus: "产品资料、询盘识别、报价测算、单证检查优先",
    businessTrigger: "同一类表格、检查或回复动作在课程、作业和企业咨询中反复出现。",
    inputs: "课堂问题、学员作业、企业访谈、集成房屋演示数据",
    deliverable: "工具候选清单、用户角色、使用场景、课程入口和风险边界",
    acceptance: "每个候选工具都能对应一个外贸业务动作、一个课程模块和一个可验收输出。",
    manualBoundary: "不能因为学员觉得麻烦就把报价、合同、合规和客户承诺交给工具自动决定。",
    nextOwner: "课程负责人 + 产品负责人"
  },
  {
    stage: "02",
    title: "锁定字段与集成房屋样例",
    toolFocus: "先用 20ft 可扩展集成房屋跑通字段",
    businessTrigger: "工具想法已经明确，但输入字段、输出格式和缺失项还不稳定。",
    inputs: "产品资料、原始询盘、报价费用项、订单节点、PI/CI/PL 样例",
    deliverable: "字段字典、样例数据、异常数据、输出格式和必填/选填规则",
    acceptance: "同一批样例能同时支撑课堂演示、工具规格、下载资料和资源中心说明。",
    manualBoundary: "成本、海运、税费、认证、HS 编码和真实客户资料必须由企业或专业人员确认。",
    nextOwner: "行业顾问 + 产品负责人"
  },
  {
    stage: "03",
    title: "静态原型与课堂试讲",
    toolFocus: "先让老师能讲清楚，再考虑完整开发",
    businessTrigger: "字段已稳定，需要验证学员是否看得懂、能不能按工具输出完成作业。",
    inputs: "静态 mockup、课堂脚本、学员替换任务、助教评分表",
    deliverable: "静态工具界面、试讲记录、作业验收问题和改版清单",
    acceptance: "学员能用自己的业务资料替换样例，并说清工具输出和人工确认点。",
    manualBoundary: "课堂演示数据不能包装成真实报价或真实客户承诺。",
    nextOwner: "主讲老师 + 助教"
  },
  {
    stage: "04",
    title: "轻交互开发与边界提示",
    toolFocus: "先做可控输入、即时输出和风险提醒",
    businessTrigger: "静态原型已验证，需要减少老师手动演示和学员重复整理成本。",
    inputs: "开发规格、字段规则、样例数据、错误状态、移动端布局要求",
    deliverable: "可交互工具、默认样例、重置按钮、导出说明和边界提示",
    acceptance: "工具能在桌面和手机上完成核心路径，异常输入有提示，输出区明确不替代人工确认。",
    manualBoundary: "工具只做整理、计算、检查和草稿生成，正式业务动作仍由授权岗位确认。",
    nextOwner: "开发负责人 + 产品负责人"
  },
  {
    stage: "05",
    title: "上线验收与资源承接",
    toolFocus: "工具要能支持招生、课堂和课后作业",
    businessTrigger: "工具已能交互，需要决定是否放到课程页、资源页、试听课或企业诊断入口。",
    inputs: "验收清单、页面入口、资源卡片、下载模板、课堂作业说明",
    deliverable: "上线验收记录、资源中心入口、课堂使用说明和维护日志",
    acceptance: "工具入口能被首页、课程、课堂、资源或企业服务引用，且下载资料和页面证据一致。",
    manualBoundary: "宣传不能承诺自动成交、自动报价或替代报关、法务、税务和银行审单。",
    nextOwner: "开发负责人 + 市场运营"
  },
  {
    stage: "06",
    title: "行业复制与版本维护",
    toolFocus: "从集成房屋复制到机械、建材、家具和消费品",
    businessTrigger: "首个工具稳定后，需要用同一套字段和验收标准扩展更多行业或企业项目。",
    inputs: "行业案例复制包、企业脱敏样例、用户反馈、版本维护日志",
    deliverable: "行业字段差异表、版本更新记录、企业定制边界和下一批开发优先级",
    acceptance: "新增行业只替换业务字段和样例，不破坏原有课程、资源、边界和工具验收标准。",
    manualBoundary: "行业复制不能默认套用价格、认证、物流、清关和合同责任。",
    nextOwner: "产品负责人 + 企业服务负责人"
  }
];
