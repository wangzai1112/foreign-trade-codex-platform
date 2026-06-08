window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.integratedHouseCase = {
  id: "integrated-house-export",
  title: "20ft 可扩展集成房屋出口案例",
  summary:
    "中国集成房屋厂家收到沙特建筑承包商询盘：80 套工地营地住房，要求卫浴、电气、高温地区保温配置，并希望获得 CIF Jeddah 报价。",
  workflow: ["客户画像", "询盘拆解", "报价测算", "PI/订单", "跟单看板", "单证检查", "风险提示"],
  productSpecs: [
    { label: "Product", value: "20ft Expandable Prefab Container House" },
    { label: "Application", value: "Worker accommodation, site office, mining camp, temporary housing" },
    { label: "Structure", value: "Galvanized steel frame" },
    { label: "Wall Panel", value: "EPS / Rock Wool / PU sandwich panel, final configuration to be confirmed" },
    { label: "Options", value: "Bathroom, electrical wiring, AC opening, furniture, insulation upgrade" },
    { label: "Trade Term", value: "CIF Jeddah for demo; DDP only as risk discussion" },
    { label: "HS Direction", value: "9406 prefabricated buildings direction; final classification must be confirmed by customs professional" }
  ],
  sampleInquiry:
    "Hi, we are a construction contractor in Saudi Arabia. We need 80 units of expandable container houses for a worker accommodation camp. Each unit should include bathroom, electrical wiring, air conditioner opening, and good insulation for hot weather. Please quote CIF Jeddah and provide lead time, loading quantity, installation guide, and warranty.",
  demoScenario: {
    title: "沙特建筑承包商 80 套工地营地项目",
    description:
      "客户已有明确采购数量和使用场景，但报价前仍需确认配置、保温方案、装柜数量、安装责任、保修范围和当地合规要求。课程用这个场景演示 Codex 如何把复杂询盘拆成可执行清单。",
    confirmationPoints: ["数量 80 units", "CIF Jeddah", "高温地区保温", "卫浴和电气", "安装与保修"]
  },
  inquiryAnalysis: [
    "客户类型：沙特建筑承包商，可能服务工地营地或项目总包。",
    "已知需求：80 套可扩展集成房屋，含卫浴、电气、空调预留和高温地区保温。",
    "缺失信息：项目地点、目标交期、具体房型布局、墙板材料、用电标准、是否需要家具、是否需要安装指导。",
    "报价前问题：确认 CIF Jeddah 是否只到港，目的港费用和内陆运输由谁承担。",
    "风险点：不可直接承诺 DDP、清关、当地建筑许可、抗风抗雪、防火等级或认证。"
  ],
  classroomFlow: [
    {
      stage: "01",
      title: "识别询盘",
      input: "客户要求 80 套、CIF Jeddah、卫浴、电气、保温和安装说明。",
      codexAction: "把原始询盘拆成客户类型、已知需求、缺失字段、风险点。",
      output: "询盘识别表 + 报价前问题清单",
      teachingPoint: "不要看到数量和目的港就直接报价，先判断配置和责任边界。"
    },
    {
      stage: "02",
      title: "补齐报价前信息",
      input: "墙板材料、布局、电气标准、装柜数量、安装责任未确认。",
      codexAction: "生成需要向客户补问的问题，并按必须确认/可后续确认分级。",
      output: "客户补问邮件 + 内部确认清单",
      teachingPoint: "把客户问题和内部问题分开，避免把不确定内容直接发给客户。"
    },
    {
      stage: "03",
      title: "搭建报价结构",
      input: "80 套项目订单，贸易术语先按 CIF Jeddah 演示。",
      codexAction: "列出产品、选配、包装、国内费用、海运、保险、汇率、利润和有效期。",
      output: "FOB/CIF 报价结构 + DDP 风险提醒",
      teachingPoint: "DDP 不是多加一个运费，而是涉及清关、税费、派送和责任边界。"
    },
    {
      stage: "04",
      title: "生成订单主数据",
      input: "报价确认后需要 PI、图纸版本、配置、装柜和交期节点。",
      codexAction: "从报价字段生成订单主数据，后续 PI、CI、PL、跟单都复用它。",
      output: "PI 字段 + 订单主数据表",
      teachingPoint: "单证错误很多不是单证阶段造成的，而是订单主数据一开始就不统一。"
    },
    {
      stage: "05",
      title: "检查单证冲突",
      input: "PI、CI、PL、订舱资料存在数量、重量、品名和目的港差异。",
      codexAction: "对比关键字段，输出冲突、风险等级和修改说明。",
      output: "单证一致性检查报告",
      teachingPoint: "Codex 只能提示冲突，最终报关、银行和目的国要求仍需人工复核。"
    }
  ],
  standardLessonPack: {
    title: "集成房屋 90 分钟标准课",
    description:
      "用于系统课、试听课升级版和企业内训样例课，把 20ft 可扩展集成房屋出口案例讲成一节有输入、有演示、有练习、有验收和有转化证据的完整课堂。",
    duration: "90 min",
    audience: "外贸业务员、外贸主管、建材/项目型产品团队、企业内训试点客户",
    promise:
      "学员完成后应能把自己的产品、询盘、报价字段和单证样例替换进同一套流程，而不是只复制集成房屋案例。",
    downloads: [
      {
        label: "下载 90 分钟标准课 runbook CSV",
        href: "./downloads/integrated-house-90min-lesson-runbook.csv",
        format: "CSV",
        note: "用于老师、助教和课程顾问按时间节点准备课堂、演示、作业、验收和回写动作。"
      },
      {
        label: "下载标准课讲师 Brief 模板 MD",
        href: "./downloads/integrated-house-standard-lesson-brief.md",
        format: "Markdown",
        note: "用于开课前统一老师讲法、页面路线、工具输入、作业标准、招生证据和人工边界。"
      }
    ],
    preclassChecklist: [
      "准备集成房屋公开样例，不使用真实客户、真实成本、合同、付款或企业内部审批资料。",
      "确认本节课打开页面：case-integrated-house.html、tools.html、classroom.html、learning.html、resources.html。",
      "准备四份输入：产品资料、英文询盘、报价字段、PI/CI/PL 冲突样例。",
      "提前说明 Codex 只负责整理、生成、检查和导出，不替代价格、交期、合规、清关、税务或法务判断。",
      "给学员准备替换任务：自己的产品字段、一封脱敏询盘、一组报价字段和一个单证/订单检查样例。"
    ],
    timeline: [
      {
        time: "00-08",
        title: "开场定位和承诺边界",
        teacherAction: "说明本节课用 80 套集成房屋项目串联询盘、报价、订单、单证和风险，不讲抽象提示词。",
        screenRoute: ["case-integrated-house.html", "course.html"],
        codexOperation: "不直接运行工具，先展示业务全链路和本节课验收标准。",
        learnerOutput: "写下自己要替换的产品、客户类型、目的港和贸易术语。",
        acceptance: "学员知道本节课输出是流程初稿，不是最终报价或成交承诺。"
      },
      {
        time: "08-22",
        title: "产品资料作为字段底座",
        teacherAction: "展示集成房屋产品参数、选配、安装、质保、HS 方向和必须人工确认字段。",
        screenRoute: ["case-integrated-house.html", "tools.html"],
        codexOperation: "让 Codex 整理产品字段、缺失资料、FAQ 和英文参数草稿。",
        learnerOutput: "个人产品资料缺口清单。",
        acceptance: "至少列出 8 个产品字段、3 个缺失资料和 3 个人工确认人。"
      },
      {
        time: "22-42",
        title: "询盘拆解和报价前补问",
        teacherAction: "用沙特建筑承包商 80 套询盘演示已知需求、缺失信息、报价前问题和英文回复草稿。",
        screenRoute: ["case-integrated-house.html", "tools.html", "prompts.html"],
        codexOperation: "提取已知字段、缺失字段、客户补问、内部确认清单和英文回复。",
        learnerOutput: "询盘识别表 + 补问邮件草稿。",
        acceptance: "区分客户问题和内部问题，不能把 DDP、认证、交期和最终价格直接承诺给客户。"
      },
      {
        time: "42-58",
        title: "报价结构和 DDP 风险",
        teacherAction: "把 80 套项目拆成基础价、选配、包装、国内费用、海运、保险、汇率、利润和有效期。",
        screenRoute: ["case-integrated-house.html", "tools.html"],
        codexOperation: "生成 FOB/CIF 报价结构、漏项提醒、报价说明和 DDP 风险提示。",
        learnerOutput: "FOB/CIF 报价字段表 + 漏项清单。",
        acceptance: "能说清哪些字段可模板化，哪些必须工厂、货代、财务或负责人确认。"
      },
      {
        time: "58-72",
        title: "订单主数据和跟单节点",
        teacherAction: "说明报价确认后如何沉淀 PI 字段、图纸版本、配置、生产节点、订舱和尾款节点。",
        screenRoute: ["case-integrated-house.html", "classroom.html"],
        codexOperation: "从报价字段生成订单主数据、跟单节点和客户进度邮件草稿。",
        learnerOutput: "订单主数据初稿 + 跟单节点看板。",
        acceptance: "每个节点都有负责人、输入、输出、风险和人工确认条件。"
      },
      {
        time: "72-84",
        title: "单证一致性和风险复核",
        teacherAction: "展示 PI 数量、CI 数量、PL 目的港和重量等冲突，训练学员回到订单主数据核对。",
        screenRoute: ["case-integrated-house.html", "tools.html"],
        codexOperation: "对比 PI/CI/PL/订舱字段，输出冲突、等级、修正建议和复查说明。",
        learnerOutput: "单证冲突报告 + 修正说明。",
        acceptance: "学员能指出 Codex 只做一致性提示，报关、银行、信用证和目的港要求必须专业复核。"
      },
      {
        time: "84-90",
        title: "作业布置、招生证据和企业替换",
        teacherAction: "总结本节课产出的四类作业，并说明系统课、咨询报名和企业内训如何继续。",
        screenRoute: ["learning.html", "enrollment.html", "enterprise.html", "playbook.html"],
        codexOperation: "生成作业提交要求、助教验收清单、咨询跟进口径和企业替换问题。",
        learnerOutput: "个人外贸 Codex 工作流初稿提交计划。",
        acceptance: "学员知道课后提交什么、助教怎么验收、哪些成果可公开展示、哪些必须脱敏授权。"
      }
    ],
    classroomOutputs: [
      {
        name: "产品资料缺口清单",
        proof: "产品字段、缺失资料、资料负责人、不可编造参数。",
        page: "case-integrated-house.html / resources.html"
      },
      {
        name: "询盘识别表",
        proof: "已知需求、缺失字段、客户补问、内部确认、英文回复草稿。",
        page: "case-integrated-house.html / tools.html"
      },
      {
        name: "FOB/CIF 报价字段表",
        proof: "费用项、确认人、有效期、漏项提醒、DDP 风险边界。",
        page: "case-integrated-house.html / tools.html"
      },
      {
        name: "订单主数据和单证冲突报告",
        proof: "PI/CI/PL/订舱字段一致性、风险等级、修正说明。",
        page: "case-integrated-house.html / classroom.html"
      }
    ],
    homeworkPack: [
      "提交一份脱敏产品资料表，至少包含产品名、用途、规格、选配、包装、认证、安装、质保和单证字段。",
      "提交一封真实或脱敏询盘的识别表，区分已知需求、缺失字段、客户补问和内部确认。",
      "提交一份报价字段表，标明 FOB/CIF 可模板化项、必须人工确认项和不能承诺的 DDP 风险。",
      "提交一份订单或单证一致性检查样例，包含冲突字段、风险等级、修正动作和人工复核人。",
      "提交一段 200 字复盘：哪些重复劳动可用 Codex 替代，哪些业务判断仍必须自己确认。"
    ],
    gradingRubric: [
      {
        criterion: "业务输入真实可替换",
        pass: "使用自己行业的脱敏资料，字段来源明确。",
        fail: "只照抄集成房屋案例或使用虚构信息冒充验证。"
      },
      {
        criterion: "Codex 输出可复用",
        pass: "输出包含表格、邮件、清单或检查报告，可用于下一单复用。",
        fail: "只有聊天记录，没有形成业务资产。"
      },
      {
        criterion: "人工边界清楚",
        pass: "价格、交期、认证、清关、付款、单证和合规都有确认人。",
        fail: "把 AI 草稿当最终报价、合同、报关或法务结论。"
      },
      {
        criterion: "后续承接明确",
        pass: "能进入工具演示、作业点评、招生咨询或企业诊断。",
        fail: "课堂结束后不知道继续提交什么或如何应用。"
      }
    ],
    conversionUse: [
      "公开课：选择 22-42 分钟询盘拆解段，证明课程能减少读询盘、漏问和写回复的重复劳动。",
      "报名咨询：展示四类课堂输出，回答学员关心的学完能拿到什么。",
      "系统课：把 90 分钟拆成 M4-M9 的标准演示母版，后续让学员替换行业资料。",
      "企业内训：把集成房屋替换为企业主推产品、样板询盘、报价表和订单/单证样例。",
      "平台维护：把课堂问题、优秀作业和工具需求回写到案例库、工具中心、指令库和运营指南。"
    ],
    manualBoundaries: [
      "不得把模拟报价、运费、税费、DDP、清关、认证、建筑许可或安装责任包装成真实承诺。",
      "不得公开展示真实客户、成本、合同、付款、银行资料、企业内部审批或未授权学员作业。",
      "不得承诺 Codex 自动成交、自动报价、自动报关或替代专业判断。",
      "所有可公开使用的课堂成果必须有脱敏、授权、展示范围和撤回机制。"
    ]
  },
  speakerScriptPack: {
    title: "集成房屋案例逐屏讲解母版",
    description:
      "用于主讲老师、公开课老师、课程顾问和新讲师试讲，把案例页每一屏的讲法、点击动作、观众互动、转场句和转化 CTA 标准化。",
    downloads: [
      {
        label: "下载逐屏讲解稿 CSV",
        href: "./downloads/integrated-house-screen-by-screen-script.csv",
        format: "CSV",
        note: "用于直播、试讲、录课和新讲师复制时逐屏对照执行。"
      },
      {
        label: "下载公开课转化话术 MD",
        href: "./downloads/integrated-house-public-demo-conversion-script.md",
        format: "Markdown",
        note: "用于 10-20 分钟公开课、私域试听和课后报名/企业诊断分流。"
      }
    ],
    openingLine:
      "今天不讲抽象 AI，也不演示万能提示词。我们只用一封沙特客户要 80 套集成房屋的询盘，看看 Codex 能替业务员省掉哪些重复整理工作，哪些判断仍然必须由人确认。",
    screenScripts: [
      {
        stage: "S1",
        screen: "案例总览",
        pageRoute: ["case-integrated-house.html"],
        duration: "2-3 min",
        teacherLine: "先让大家看到完整业务链路：客户画像、询盘拆解、报价测算、订单主数据、单证检查和风险提示。",
        clickAction: "打开案例总览和产品资料，停留在 workflow 标签和产品规格字段。",
        audienceAction: "请观众在纸上写下自己行业里的产品名、客户类型、目的港和贸易术语。",
        visibleProof: "页面能展示一套完整业务流，而不是单点提示词。",
        transition: "有了业务链路，下一步先看客户原始询盘里到底有什么、缺什么。",
        boundary: "说明案例为教学样例，数字、配置和贸易条件不能当真实报价使用。"
      },
      {
        stage: "S2",
        screen: "询盘拆解",
        pageRoute: ["case-integrated-house.html", "tools.html"],
        duration: "5-7 min",
        teacherLine: "客户已经给了 80 套、CIF Jeddah、卫浴、电气和保温，但仍不能直接报价，因为布局、电气标准、墙板材料、安装和合规没有确认。",
        clickAction: "展示原始英文询盘，再切到工具中心询盘识别演示器。",
        audienceAction: "让观众判断哪些是已知需求，哪些是报价前必须追问的问题。",
        visibleProof: "输出询盘识别表、缺失字段、客户补问和英文回复草稿。",
        transition: "询盘拆清楚以后，不是马上报一个价格，而是先搭报价结构。",
        boundary: "价格、交期、认证、DDP、清关和当地合规不能由 Codex 自动承诺。"
      },
      {
        stage: "S3",
        screen: "报价结构",
        pageRoute: ["case-integrated-house.html", "tools.html"],
        duration: "4-6 min",
        teacherLine: "报价不是一个单价，而是基础价、选配、包装、国内费用、海运、保险、汇率、利润和有效期组成的结构。",
        clickAction: "展示报价测算看板和工具中心报价测算器。",
        audienceAction: "让观众说出自己报价里最容易漏的 2 个费用项。",
        visibleProof: "输出 FOB/CIF 报价结构、漏项提醒和 DDP 风险提示。",
        transition: "报价确认后，真正决定后续效率的是订单主数据是否统一。",
        boundary: "成本、运费、汇率、利润、付款和税费必须由工厂、货代、财务或负责人确认。"
      },
      {
        stage: "S4",
        screen: "订单主数据",
        pageRoute: ["case-integrated-house.html", "classroom.html"],
        duration: "3-5 min",
        teacherLine: "很多单证错误不是单证员最后填错，而是订单字段一开始没有统一。",
        clickAction: "展示订单跟进时间线和课堂工作台的模块执行路线。",
        audienceAction: "请观众选一个自己订单里最常变动的字段，比如图纸版本、包装、港口或交期。",
        visibleProof: "输出 PI 字段、订单主数据、跟单节点和客户进度说明。",
        transition: "字段统一以后，我们再看故意设置的单证冲突。",
        boundary: "图纸版本、收款、生产排期和发货日期不能由工具替负责人确认。"
      },
      {
        stage: "S5",
        screen: "单证一致性",
        pageRoute: ["case-integrated-house.html", "tools.html"],
        duration: "4-6 min",
        teacherLine: "现在看 PI、CI、PL 和订舱资料，数量、品名、重量、目的港只要一个字段冲突，就可能造成后续风险。",
        clickAction: "展示单证一致性检查表，再切到工具中心单证检查器。",
        audienceAction: "让观众找出 PI、CI、PL 中至少 2 个冲突字段。",
        visibleProof: "输出冲突字段、风险等级、处理建议和修正说明。",
        transition: "到这里，大家已经看到 Codex 能帮我们整理、生成和检查，但仍然不能替代专业判断。",
        boundary: "报关、信用证、银行审单、HS 编码和目的港清关必须由专业人员复核。"
      },
      {
        stage: "S6",
        screen: "课程交付和下一步",
        pageRoute: ["learning.html", "enrollment.html", "enterprise.html"],
        duration: "3-5 min",
        teacherLine: "这节公开课只展示了一条业务线。系统课会让你把自己的产品、询盘、报价和单证资料替换进来，并通过作业验收沉淀成自己的工作流。",
        clickAction: "打开学员工作台、报名路径和企业服务入口。",
        audienceAction: "请观众选择下一步：领取资料、自测重复劳动、提交一封脱敏询盘、咨询系统课或预约企业诊断。",
        visibleProof: "展示学员作业、课程模块、报名方案和企业诊断承接页面。",
        transition: "如果你想判断自己适不适合学，先提交一条脱敏业务资料，比直接问价格更有价值。",
        boundary: "不能承诺学完自动成交、自动报价、自动开发客户或替代企业审批。"
      }
    ],
    conversionScripts: [
      {
        scenario: "公开课结尾",
        concern: "观众觉得内容有用，但不确定自己行业能不能套用。",
        response: "你不用先相信它适合所有行业。你只需要拿一条自己的脱敏询盘，按今天这个结构拆一次，就能判断哪些重复劳动可以替代。",
        proofRoute: ["case-integrated-house.html", "tools.html", "resources.html"],
        cta: "领取集成房屋字段包和询盘作业模板，提交一封脱敏询盘做结构匹配。",
        noGo: "不承诺任何行业都能一键套用，也不承诺自动成交。"
      },
      {
        scenario: "报名咨询",
        concern: "学员担心课程只是提示词，学完没有实际交付物。",
        response: "课程交付不是聊天记录，而是产品资料表、询盘识别表、报价字段表、订单节点表和单证冲突报告。",
        proofRoute: ["learning.html", "course.html", "case-integrated-house.html"],
        cta: "先看学员工作台和 12 模块课程体系，再确认你要提交的第一份资料。",
        noGo: "不把课堂样例包装成真实商业结果，不承诺学完自动涨业绩。"
      },
      {
        scenario: "企业线索",
        concern: "企业负责人关心能不能替换成自己产品和团队流程。",
        response: "企业不应该直接照搬集成房屋案例，而是先做资料成熟度和流程诊断，再决定做内训、SOP 还是轻量工具。",
        proofRoute: ["enterprise.html", "automation.html", "playbook.html"],
        cta: "预约诊断前沟通，提交主推产品、典型询盘、报价表或订单样例。",
        noGo: "未诊断前不承诺工具范围、开发周期、效率结果或替代 ERP/CRM。"
      },
      {
        scenario: "暂缓培育",
        concern: "用户现在不报名，只想继续观察。",
        response: "可以先不报名。你可以用免费资料做一次重复劳动自测，再看 10 分钟询盘识别演示，判断它是否真的减少你的整理时间。",
        proofRoute: ["resources.html", "marketing.html", "tools.html"],
        cta: "加入下次公开课提醒，或领取报价费用项清单。",
        noGo: "不催促付款，不制造焦虑，不用夸大承诺转化。"
      }
    ],
    instructorChecks: [
      "每一屏都必须先讲业务问题，再展示 Codex 操作，最后落到输出物和人工边界。",
      "公开课默认只展示集成房屋公开样例，不展示真实客户、真实成本、合同和付款资料。",
      "讲师不得把工具输出说成最终报价、最终合同、报关结论、法律意见或清关承诺。",
      "结尾 CTA 必须给出资料领取、提交脱敏样例、报名咨询、企业诊断或继续培育五类分流。",
      "公开课问题要回写到营销页、报名页、资源 FAQ、案例页或工具中心。"
    ]
  },
  demoCommandDownloads: [
    {
      label: "下载集成房屋演示指挥台 CSV",
      href: "./downloads/integrated-house-demo-command-board.csv",
      format: "CSV",
      note: "用于把案例阶段、演示场景、工具入口、作业证据、招生讲法、企业延伸和人工边界统一记录。"
    },
    {
      label: "下载案例演示 Brief 模板 MD",
      href: "./downloads/integrated-house-demo-brief-template.md",
      format: "Markdown",
      note: "用于老师、顾问和企业内训负责人把集成房屋案例改成可执行演示脚本。"
    }
  ],
  demoCommandDesk: {
    title: "集成房屋案例演示指挥台",
    description:
      "把第一套完整案例拆成可选择的演示阶段，按系统课、公开课、作业点评、招生咨询或企业内训生成执行 brief。",
    exportFilename: "integrated-house-demo-brief-output.md",
    defaults: {
      demoStage: "inquiry",
      sessionMode: "system-class",
      audienceMode: "experienced-sales",
      evidenceStatus: "public-sample",
      nextAction: "assign-homework"
    },
    demoStages: [
      {
        id: "product",
        label: "产品资料",
        module: "M0 / M5",
        score: 14,
        scene: "20ft 可扩展集成房屋，包含结构、墙板、卫浴、电气、保温、包装装柜、安装和质保字段。",
        input: "产品规格、选配、应用场景、认证方向、图片素材和不可由 AI 编造的资料来源。",
        codexTasks: ["整理产品字段", "生成英文参数表", "列缺失资料", "输出 FAQ 和素材清单"],
        toolRoute: ["产品资料成熟度课堂演示器", "产品资料工作台", "资料脱敏清单"],
        output: "产品字段表、英文参数表、FAQ、素材清单、待补资料和人工确认人。",
        classroomScript: "先证明产品资料是后续询盘、报价、订单和单证工具的字段底座。",
        enrollmentProof: "回应复杂产品能不能用 AI/Codex 结构化的问题。",
        enterpriseExtension: "可升级为企业产品主数据、资料权限和 B2B 页面标准。",
        downloads: ["integrated-house-toolkit.csv", "product-profile-homework-template.md"],
        manualChecks: ["参数来源", "认证文件", "抗风防火", "库存交期", "HS 方向"]
      },
      {
        id: "inquiry",
        label: "询盘拆解",
        module: "M4",
        score: 18,
        scene: "沙特建筑承包商询问 80 套工地营地用集成房屋，要求 CIF Jeddah、卫浴、电气、空调预留和高温保温。",
        input: "客户原始英文询盘、产品基础资料和报价边界。",
        codexTasks: ["提取已知需求", "列缺失字段", "生成报价前问题", "生成英文回复草稿"],
        toolRoute: ["询盘识别课堂演示器", "报价前补问清单", "英文回复草稿生成"],
        output: "询盘识别表、缺失字段、报价前补问、风险提醒和英文回复草稿。",
        classroomScript: "先问为什么不能直接报价，再展示 Codex 如何把原始询盘拆成可执行业务动作。",
        enrollmentProof: "最适合公开课展示，能证明课程会减少读询盘和漏问的重复劳动。",
        enterpriseExtension: "可升级为企业询盘分流 SOP、报价前资料清单和业务/客服协作规则。",
        downloads: ["demo-lesson-inquiry-analysis.md", "inquiry-analysis-homework-template.md"],
        manualChecks: ["价格", "库存", "认证", "交期", "DDP", "清关"]
      },
      {
        id: "quote",
        label: "报价结构",
        module: "M6",
        score: 17,
        scene: "为 80 套集成房屋建立 CIF Jeddah 报价结构，FOB/CIF 可演示，DDP 只做风险讨论。",
        input: "产品基础价、选配、国内费用、海运、保险、汇率、利润、报价有效期和付款条件。",
        codexTasks: ["拆费用项", "检查漏项", "生成报价结构", "输出 DDP 风险提醒"],
        toolRoute: ["FOB/CIF 报价测算课堂演示器", "报价费用项检查", "报价邮件生成"],
        output: "FOB/CIF 报价结构、费用项清单、漏项提醒、报价说明草稿和 DDP 风险提示。",
        classroomScript: "强调报价不是一个单价，而是成本、选配、装柜、海运、保险、汇率和利润的组合。",
        enrollmentProof: "讲清 Codex 能辅助报价结构和漏项检查，但不能替代最终商业报价。",
        enterpriseExtension: "可升级为企业报价费用项 SOP、审批流程和报价工具原型。",
        downloads: ["quotation-cost-checklist.csv", "quotation-calculation-homework-template.md"],
        manualChecks: ["成本", "利润", "装柜", "海运", "汇率", "付款条件"]
      },
      {
        id: "order",
        label: "订单跟进",
        module: "M7 / M8",
        score: 16,
        scene: "报价确认后转成 PI、订单主数据、图纸版本、配置确认、生产节点和客户进度更新。",
        input: "报价字段、PI 字段、图纸版本、客户确认日期、生产计划、负责人和异常记录。",
        codexTasks: ["提取订单字段", "生成订单主数据", "建立节点看板", "生成客户进度邮件"],
        toolRoute: ["订单主数据表", "订单跟进看板", "异常记录表"],
        output: "PI 字段、订单主数据、跟单看板、异常记录和客户进度说明。",
        classroomScript: "展示同一订单字段如何贯穿报价、PI、CI、PL 和订舱资料。",
        enrollmentProof: "证明课程覆盖报价后的执行阶段，适合成熟业务员和主管关注。",
        enterpriseExtension: "可升级为团队订单主数据规范、跟单看板和岗位协作 SOP。",
        downloads: ["order-tracking-homework-template.md", "classroom-delivery-desk.csv"],
        manualChecks: ["图纸版本", "收款状态", "生产计划", "尾款", "发货承诺"]
      },
      {
        id: "document",
        label: "单证检查",
        module: "M9",
        score: 16,
        scene: "故意设置 PI 数量 80、CI 数量 78、PL 目的港 Dammam 等冲突，演示一致性检查。",
        input: "PI、CI、PL、订舱资料中的数量、品名、港口、重量、箱数和产品描述。",
        codexTasks: ["比对 PI/CI/PL", "输出冲突字段", "生成风险等级", "生成修改说明"],
        toolRoute: ["单证一致性课堂演示器", "CI/PL 字段表", "冲突修正说明"],
        output: "单证冲突报告、风险等级、处理建议、修正说明和复查结果。",
        classroomScript: "说明单证错误很多不是最后填表造成，而是订单主数据从一开始就不统一。",
        enrollmentProof: "证明 Codex 能辅助一致性检查，但不替代报关、银行和清关专业判断。",
        enterpriseExtension: "可升级为企业出货前复核 SOP、单证检查规则和工具测试样例。",
        downloads: ["document-consistency-check.csv", "document-consistency-homework-template.md"],
        manualChecks: ["HS 编码", "报关申报", "信用证", "银行审单", "目的港清关"]
      },
      {
        id: "risk",
        label: "风险边界",
        module: "M10 / M11",
        score: 15,
        scene: "客户希望 DDP 到项目现场、确认安装指南和质保，课程演示付款、清关、合规、售后和复购边界。",
        input: "付款条件、DDP 要求、安装责任、保修范围、售后记录和复购提醒。",
        codexTasks: ["生成风险矩阵", "列内部审批", "生成谨慎回复", "整理售后回访字段"],
        toolRoute: ["付款风险矩阵", "DDP 风险清单", "售后复购提醒"],
        output: "付款风险矩阵、内部审批清单、谨慎客户回复、售后回访表和复购提醒字段。",
        classroomScript: "讲清风险提示不是拒绝客户，而是把高风险条件转成内部确认和可继续推进的动作。",
        enrollmentProof: "回应 AI 会不会乱承诺的问题，展示课程始终保留人工审批边界。",
        enterpriseExtension: "可升级为企业付款审批、DDP 风险、售后和客户成功 SOP。",
        downloads: ["payment-risk-homework-template.md", "learner-final-review-template.md"],
        manualChecks: ["银行", "法务", "信保", "报关", "税务", "企业负责人"]
      }
    ],
    sessionModes: [
      {
        id: "system-class",
        label: "系统课正课",
        score: 8,
        focus: "完整讲清输入、Codex 操作、工具输出、学员替换、作业验收和人工边界。",
        deliverable: "课堂脚本 + 作业任务 + 助教验收清单。",
        owner: "主讲老师 + 助教"
      },
      {
        id: "public-demo",
        label: "公开课演示",
        score: 7,
        focus: "选择最容易看懂的业务动作，展示案例价值和课程交付证据，避免触碰真实敏感资料。",
        deliverable: "10-20 分钟演示脚本 + 咨询 CTA + 禁止承诺话术。",
        owner: "主讲老师 + 课程顾问"
      },
      {
        id: "consultation-proof",
        label: "招生咨询证据",
        score: 6,
        focus: "把案例输出讲成潜在学员能理解的课程成果，回答“学完能拿到什么”。",
        deliverable: "咨询讲法 + 页面证据 + 后续报名或资料提交动作。",
        owner: "课程顾问 + 班主任"
      },
      {
        id: "homework-review",
        label: "作业点评",
        score: 5,
        focus: "对照集成房屋标准样例检查学员字段、输出、脱敏、复用路径和人工确认。",
        deliverable: "返修清单 + 优秀作业入库判断。",
        owner: "助教 + 班主任"
      },
      {
        id: "enterprise-training",
        label: "企业内训",
        score: 8,
        focus: "把集成房屋样例替换成企业主推产品或样板订单，确认岗位责任和验收证据。",
        deliverable: "企业内训模块脚本 + 岗位任务 + SOP/工具需求。",
        owner: "企业项目负责人 + 授课老师"
      }
    ],
    audienceModes: [
      {
        id: "newcomer",
        label: "外贸新人",
        score: 4,
        concern: "不知道从一封询盘到报价、订单、单证之间如何衔接。",
        proofNeed: "需要看到清晰步骤、模板字段和通过标准。",
        explanationStyle: "少讲管理概念，多讲输入、输出、作业和下一步。"
      },
      {
        id: "experienced-sales",
        label: "成熟业务员",
        score: 6,
        concern: "担心只是提示词演示，不能减少真实业务中的重复整理、漏问和漏项。",
        proofNeed: "需要看到工具输出、字段复用、风险检查和人工确认责任。",
        explanationStyle: "强调效率提升、经验沉淀和下一单复用。"
      },
      {
        id: "manager",
        label: "主管 / 老板",
        score: 7,
        concern: "关心团队能否复制、能否培训新人、能否形成统一 SOP 和工具。",
        proofNeed: "需要看到岗位责任、验收标准、工具化路线和企业服务边界。",
        explanationStyle: "用流程、责任、验收和风险语言说明价值。"
      },
      {
        id: "enterprise",
        label: "企业客户",
        score: 8,
        concern: "担心案例和企业真实产品差距大，无法落到资料、岗位和项目验收。",
        proofNeed: "需要看到如何替换企业资料、确认授权、形成 SOP 和工具需求。",
        explanationStyle: "先确认资料成熟度和权限，再给出内训范围。"
      }
    ],
    evidenceStatuses: [
      {
        id: "public-sample",
        label: "公开样例",
        score: 8,
        rule: "可用于系统课、公开课、招生咨询和工具演示。",
        masking: "这是模拟/脱敏教学样例，不能包装成真实成交成果。"
      },
      {
        id: "classroom-only",
        label: "仅课堂",
        score: 5,
        rule: "可用于系统课和作业点评，不进入公开营销页面。",
        masking: "保留教学结构，避免展示可能误导成交结果的细节。"
      },
      {
        id: "authorized-showcase",
        label: "授权展示",
        score: 10,
        rule: "可按授权范围进入公开课、报名页、社群或企业说明。",
        masking: "必须记录授权范围、展示版本、撤回机制和不可公开字段。"
      },
      {
        id: "enterprise-private",
        label: "企业内部",
        score: 3,
        rule: "只能用于企业项目内部复盘、内训验收或 SOP/工具需求确认。",
        masking: "不得进入公开课、招生页面、社群或通用工具测试样例。"
      },
      {
        id: "repair-needed",
        label: "待返修",
        score: -4,
        rule: "当前证据不足，只能进入返修，不能对外展示或用于咨询承诺。",
        masking: "先补业务输入、字段来源、脱敏授权、页面证据和人工确认人。"
      }
    ],
    nextActions: [
      {
        id: "assign-homework",
        label: "布置作业",
        score: 5,
        action: "把本阶段输出转成学员作业任务、提交格式和助教验收清单。",
        route: ["learning.html", "classroom.html"],
        businessValue: "让案例演示最终落到学员可提交的交付物。"
      },
      {
        id: "open-tools",
        label: "进入工具演示",
        score: 6,
        action: "切到工具中心，用同一份案例输入演示字段、输出和导出结果。",
        route: ["tools.html", "automation.html"],
        businessValue: "证明课程不是只讲案例，而是能进入可复制工具。"
      },
      {
        id: "consultation-cta",
        label: "转报名咨询",
        score: 7,
        action: "把演示结果转成课程顾问可讲的证据口径，引导提交脱敏资料或进入报名路径。",
        route: ["enrollment.html", "marketing.html"],
        businessValue: "用案例输出回应报名顾虑，降低“只是提示词课”的疑虑。"
      },
      {
        id: "enterprise-diagnosis",
        label: "转企业诊断",
        score: 8,
        action: "判断企业是否能用主推产品、样板询盘、报价表或订单替换集成房屋案例。",
        route: ["enterprise.html", "playbook.html"],
        businessValue: "把公开案例升级为企业内训、SOP 或工具共建入口。"
      },
      {
        id: "case-writeback",
        label: "回写案例库",
        score: 4,
        action: "把课堂问题、作业返修、工具需求或企业反馈回写到案例中心和运营指南。",
        route: ["cases.html", "playbook.html"],
        businessValue: "让第一套案例持续变成可维护母版。"
      }
    ],
    operatingRules: [
      "集成房屋案例是第一套完整公开演示母版，所有阶段都必须能说明输入、Codex 操作、工具输出、学员作业和人工确认边界。",
      "公开课和招生咨询默认只使用集成房屋样例或授权展示样例，不展示真实客户、成本、合同、付款和企业内部审批。",
      "演示脚本必须把 Codex 定位为整理、生成、检查和导出工具，不能承诺自动成交、自动报价或替代专业判断。",
      "企业内训替换真实资料前，必须确认资料成熟度、权限、脱敏、岗位责任和验收标准。",
      "每次演示后的高频问题要回写到课程模块、工具中心、指令库、资源中心或运营指南。"
    ]
  },
  toolchainCloseout: {
    title: "集成房屋 5 工具端到端课堂链路",
    description:
      "把已经完成课堂验收的 5 个轻交互工具串成同一条业务路线：一封询盘进入报价、订单、单证和付款风控，最终形成学员作业、招生证据、企业诊断和版本回写。",
    downloads: [
      {
        label: "下载 5 工具课堂链路 CSV",
        href: "./downloads/integrated-house-toolchain-closeout-board.csv",
        format: "CSV",
        note: "用于老师和助教按工具顺序检查输入、输出、验收、下载、人工边界和下一步路由。"
      },
      {
        label: "下载工具链复盘 Brief MD",
        href: "./downloads/integrated-house-toolchain-closeout-brief-template.md",
        format: "Markdown",
        note: "用于正式课、公开课、企业内训或工具上线后记录整条链路的课堂证据和回写动作。"
      }
    ],
    summaryMetrics: [
      { value: "5", label: "已闭环交互工具", detail: "询盘、报价、订单、单证和付款风控均有复制、导出和作业验收。" },
      { value: "1", label: "统一业务主线", detail: "沙特 80 套集成房屋项目贯穿全链路，避免工具碎片化。" },
      { value: "4", label: "商业承接入口", detail: "正式课、公开课、招生咨询和企业诊断均可使用同一套证据。" }
    ],
    route: [
      {
        stage: "01",
        module: "M4 询盘识别",
        tool: "询盘识别与回复工具",
        anchor: "./tools.html#inquiry-demo-card",
        caseInput: "沙特承包商 80 套集成房屋英文询盘。",
        output: "已知需求、字段证据、准备分、缺失字段、补问问题、英文回复和下一步路由。",
        acceptance: "准备分和字段证据必须能解释为什么现在不能直接报价。",
        nextRoute: "进入报价测算；若关键字段缺失，则先发客户补问并回到产品资料。",
        manualBoundary: "价格、交期、认证、DDP、清关和安装责任不得自动承诺。",
        download: "inquiry-analysis-homework-template.md"
      },
      {
        stage: "02",
        module: "M6 报价结构",
        tool: "FOB/CIF 报价费用项检查器",
        anchor: "./tools.html#quotation-demo-card",
        caseInput: "80 套集成房屋、CIF Jeddah、产品成本、选配、国内费用、海运、保险和利润。",
        output: "报价结构、费用字段证据、发布闸口、审批清单、漏项提醒和报价说明。",
        acceptance: "发布分不足时不能作为正式报价，只能作为内部测算和待确认清单。",
        nextRoute: "报价通过后进入订单主数据；DDP 问题同步进入付款和合同风控。",
        manualBoundary: "成本、利润率、汇率、运费有效期、付款条款和报价有效期必须由企业确认。",
        download: "quotation-calculation-homework-template.md"
      },
      {
        stage: "03",
        module: "M7/M8 订单履约",
        tool: "订单跟进与交期预警看板",
        anchor: "./tools.html#order-demo-card",
        caseInput: "图纸确认、定金到账、采购、生产、质检、订舱、出运和尾款节点。",
        output: "履约分、节点证据、延期风险、审批闸口、客户进度邮件和后续单证/付款路由。",
        acceptance: "每个风险节点必须有负责人、原因、下一步动作和客户表达边界。",
        nextRoute: "出运前进入单证检查；尾款、放单和到港后付款进入付款风控。",
        manualBoundary: "生产计划、舱位、质检、发货、尾款、索赔和客户承诺必须由对应岗位确认。",
        download: "order-tracking-homework-template.md"
      },
      {
        stage: "04",
        module: "M9 单证检查",
        tool: "PI/CI/PL 单证一致性检查器",
        anchor: "./tools.html#document-demo-card",
        caseInput: "PI、CI、PL 和订舱资料中的数量、品名、重量、体积、港口和贸易术语。",
        output: "单证放行分、字段证据、冲突报告、修正复查、专业审批清单和导出验收。",
        acceptance: "高风险冲突必须先修正复查，不能把一致性检查当报关或银行审单结论。",
        nextRoute: "放行后进入出运和收款复盘；冲突未闭合则回到订单主数据。",
        manualBoundary: "HS 编码、申报要素、信用证、报关、银行和目的港清关必须专业复核。",
        download: "document-consistency-homework-template.md"
      },
      {
        stage: "05",
        module: "M10 付款与 DDP 风控",
        tool: "付款方式与 DDP 风险矩阵",
        anchor: "./tools.html#payment-demo-card",
        caseInput: "30% 定金、70% 到港后付款、DDP 到项目现场、客户资信和合同责任边界。",
        output: "审批分、风险证据、付款风险矩阵、内部审批清单、谈判替代方案和客户谨慎回复。",
        acceptance: "高风险条款必须列出审批人、风险原因、替代谈判方案和不可自动承诺事项。",
        nextRoute: "进入企业风控样例替换、合同和财务审批或案例版本回写。",
        manualBoundary: "客户资信、授信、信保、信用证、税费、合同责任和索赔必须由授权岗位确认。",
        download: "payment-risk-homework-template.md"
      }
    ],
    closeoutGates: [
      "课堂演示必须按询盘、报价、订单、单证、付款风控顺序讲清输入继承关系，不能把工具当孤立按钮。",
      "每个工具输出都必须至少包含一个可复制文本、一个 Markdown 或作业导出、一个验收闸口和一个人工确认边界。",
      "正式课作业必须让学员用自己的脱敏产品或订单字段替换集成房屋样例，不能只提交课堂截图。",
      "公开课和招生咨询只展示公开样例或授权成果，不展示真实客户、成本、合同、付款和企业审批资料。",
      "企业内训替换真实数据前必须先过资料授权、岗位责任、脱敏范围、验收标准和回写范围确认。"
    ],
    businessRoutes: [
      {
        destination: "正式课交付",
        route: "case-integrated-house.html → tools.html → learning.html → classroom.html",
        proof: "学员能提交 5 类工具作业，并通过助教验收。"
      },
      {
        destination: "公开课/招生转化",
        route: "case-integrated-house.html → tools.html → enrollment.html → resources.html",
        proof: "用端到端输出证明课程交付物，不承诺自动成交或自动报价。"
      },
      {
        destination: "企业诊断/内训",
        route: "case-integrated-house.html → enterprise.html → automation.html → playbook.html",
        proof: "判断企业能否用主推产品、样板询盘、报价表、订单和付款条款替换样例。"
      },
      {
        destination: "版本回写/工具迭代",
        route: "tools.html#tool-classroom-acceptance-board → playbook.html#playbook-tool-sprint-command-center",
        proof: "课堂问题、作业返修和企业样例进入下一轮字段权重、验收标准和下载资产更新。"
      }
    ]
  },
  toolHandoff: [
    {
      stage: "产品资料阶段",
      tool: "产品资料成熟度课堂演示器",
      page: "./tools.html",
      input: "20ft 可扩展集成房屋的英文品名、应用场景、规格参数、配置、包装装柜、认证、安装、质保和单证字段。",
      output: "产品字段表、资料成熟度、缺失资料清单、负责人、英文资料草稿和人工确认边界。",
      manualBoundary: "产品参数、认证、库存、交期、装柜数量、HS 编码和合规结论必须由企业或专业人员确认。",
      classroomUse: "先判断产品资料能否支撑后续客户开发、询盘、报价和单证，再进入正式业务流演示。"
    },
    {
      stage: "询盘阶段",
      tool: "询盘识别课堂演示器",
      page: "./tools.html",
      input: "客户原始英文询盘、产品资料和报价边界。",
      output: "已知需求、缺失字段、补问问题、风险提醒和英文回复草稿。",
      manualBoundary: "价格、交期、认证、DDP、清关和当地合规不能由工具自动承诺。",
      classroomUse: "先让学员看到原始询盘，再对照工具输出判断哪些信息还不能报价。"
    },
    {
      stage: "报价阶段",
      tool: "FOB/CIF 报价测算课堂演示器",
      page: "./tools.html",
      input: "数量、工厂成本、选配、国内杂费、海运、保险和目标利润。",
      output: "FOB/CIF 参考结构、利润率、成本拆分、漏项提醒和报价说明草稿。",
      manualBoundary: "工厂成本、装柜数量、海运有效期、汇率、利润率和付款条款必须人工确认。",
      classroomUse: "把报价拆成字段和责任人，让学员理解 DDP 不是简单加运费。"
    },
    {
      stage: "订单履约阶段",
      tool: "订单跟进与交期预警看板",
      page: "./tools.html#order-demo-card",
      input: "图纸、定金、采购、生产、订舱、出运、尾款和异常记录。",
      output: "履约分、节点证据、风险节点、客户进度草稿、审批闸口和后续单证/付款路由。",
      manualBoundary: "生产计划、库存、舱位、发货、尾款、索赔和客户承诺必须由对应岗位确认。",
      classroomUse: "承接报价后的执行阶段，让学员看到同一套字段如何进入订单主数据和客户进度沟通。"
    },
    {
      stage: "出货阶段",
      tool: "单证一致性课堂演示器",
      page: "./tools.html#document-demo-card",
      input: "PI、CI、PL 和订舱资料中的数量、品名、港口、重量等字段。",
      output: "冲突字段、风险等级、处理建议、修正后复查结果和人工确认边界。",
      manualBoundary: "报关、信用证、HS 编码、目的港清关和银行审单必须由专业人员复核。",
      classroomUse: "先看故意设置的冲突，再点击修正后复查，训练学员回到订单主数据核对。"
    },
    {
      stage: "付款风控阶段",
      tool: "付款方式与 DDP 风险矩阵",
      page: "./tools.html#payment-demo-card",
      input: "30% 定金、70% 到港后付款、DDP 到项目现场、客户资信和合同边界。",
      output: "审批分、风险证据、付款风险矩阵、内部审批、谈判替代方案和客户谨慎回复。",
      manualBoundary: "客户资信、授信、信保、信用证、税费、合同责任和索赔必须由授权岗位确认。",
      classroomUse: "把订单尾款、放单、DDP 和合同责任放到最后复盘，训练学员把高风险条件转成审批和谈判动作。"
    }
  ],
  teachingScript: [
    {
      stage: "00",
      title: "开场定位",
      screen: "案例总览和产品资料",
      teacherTalk: "这节课不讲抽象 AI，而是用 80 套集成房屋订单演示外贸业务如何从询盘走到报价、订单和单证。",
      learnerAction: "记录自己产品里可以替换的字段：产品、客户类型、贸易术语、配置和目的港。",
      output: "个人行业替换字段清单",
      boundary: "提醒学员案例数字和配置仅用于课堂演示，不代表真实报价。"
    },
    {
      stage: "01",
      title: "读询盘",
      screen: "询盘拆解演示 + 工具中心询盘识别器",
      teacherTalk: "客户看似已经给了数量和目的港，但配置、布局、电气标准、安装责任和当地要求仍然不完整。",
      learnerAction: "把自己的一封询盘按已知需求、缺失字段、报价前问题拆开。",
      output: "询盘识别表 + 客户补问邮件",
      boundary: "不能因为客户问 price 就直接输出最终价格。"
    },
    {
      stage: "02",
      title: "做报价",
      screen: "报价测算看板 + 工具中心报价测算器",
      teacherTalk: "报价不是一个单价，而是产品成本、选配、包装、国内费用、海运、保险、汇率和利润的组合。",
      learnerAction: "列出自己的产品报价字段，并标注哪些字段必须找工厂或货代确认。",
      output: "FOB/CIF 报价结构 + 漏项检查",
      boundary: "DDP、税费、清关、当地派送和利润率不能由 Codex 自动决定。"
    },
    {
      stage: "03",
      title: "转订单",
      screen: "订单主数据和跟进时间线",
      teacherTalk: "报价确认后要先统一订单主数据，否则后面的 PI、CI、PL 和订舱资料会不断复制错误。",
      learnerAction: "把报价字段转成订单主数据字段，并补上负责人和计划节点。",
      output: "订单主数据表 + 跟单节点看板",
      boundary: "图纸版本、收款状态、生产排期和发货日期必须由真实负责人确认。"
    },
    {
      stage: "04",
      title: "查单证",
      screen: "单证一致性检查演示 + 工具中心单证检查器",
      teacherTalk: "单证错误很多不是最后一刻造成的，而是订单字段一开始就不统一。",
      learnerAction: "检查 PI、CI、PL、订舱资料中的数量、品名、重量和目的港是否一致。",
      output: "单证冲突报告 + 修正说明",
      boundary: "报关、信用证、银行审单和目的国清关要求必须专业复核。"
    },
    {
      stage: "05",
      title: "布置作业",
      screen: "课程模块、指令库和资源下载",
      teacherTalk: "学员不是照抄集成房屋案例，而是把同一套字段和边界换成自己的产品。",
      learnerAction: "提交自己的产品资料、询盘拆解、报价字段和一个单证检查样例。",
      output: "个人外贸 Codex 工作流初稿",
      boundary: "作业必须使用真实或脱敏业务资料，不能用虚构案例冒充业务验证。"
    }
  ],
  quotationStructure: [
    "产品基础价：20ft 可扩展集成房屋基础配置，示例数据不代表真实报价。",
    "选配费用：卫浴、电气、空调预留、家具、保温板升级分别列项。",
    "包装和装柜：每柜装载量、毛重、体积必须由工厂和货代确认。",
    "CIF 费用：FOB 基础上加入海运和保险，运费设置有效期。",
    "DDP 处理：只输出风险提示，需当地清关、税费和派送确认后再报价。"
  ],
  quoteBoard: [
    { item: "Base Unit", basis: "20ft expandable house", owner: "Factory", status: "Need current cost" },
    { item: "Options", basis: "Bathroom / electrical / AC opening / insulation", owner: "Sales + Engineer", status: "Confirm configuration" },
    { item: "Packing", basis: "Seaworthy package and container loading", owner: "Factory + Forwarder", status: "Manual confirmation" },
    { item: "Domestic Fees", basis: "Inland trucking / customs / port charges", owner: "Logistics", status: "Template estimate" },
    { item: "Freight & Insurance", basis: "CIF Jeddah", owner: "Forwarder", status: "Valid date required" },
    { item: "DDP", basis: "Customs, tax, inland delivery", owner: "Local agent", status: "Risk only, no promise" }
  ],
  orderMasterData: [
    "客户信息、收货人、通知方、目的港、贸易术语、付款方式。",
    "产品型号、数量、配置、图纸版本、客户确认日期。",
    "包装方式、装柜数量、预计毛重、体积、唛头。",
    "生产节点、质检节点、订舱节点、装柜日期和出运日期。",
    "安装说明、保修范围、备件和售后联系人。"
  ],
  orderTimeline: [
    { step: "图纸确认", owner: "Sales / Engineer", plan: "T+2 days", risk: "客户布局未确认会影响报价和生产" },
    { step: "定金到账", owner: "Finance", plan: "T+5 days", risk: "未到账不可排产" },
    { step: "材料采购", owner: "Purchasing", plan: "T+7 days", risk: "墙板材料和电气标准需确认" },
    { step: "生产质检", owner: "Factory QC", plan: "T+25 days", risk: "配置错误会影响交付和安装" },
    { step: "订舱装柜", owner: "Logistics", plan: "T+30 days", risk: "装柜数量和毛重体积必须复核" },
    { step: "出运与尾款", owner: "Sales / Finance", plan: "T+35 days", risk: "尾款条款和放单条件需明确" }
  ],
  documentConflicts: [
    "PI 数量为 80 units，但 CI 数量误写为 78 units。",
    "Packing List 毛重与订舱资料毛重不一致。",
    "PI 产品描述包含 bathroom and electrical wiring，但 CI 只写 container house。",
    "目的港在报价中为 Jeddah，但订舱资料误填 Dammam。"
  ],
  documentCheckRows: [
    {
      field: "Quantity",
      pi: "80 units",
      ci: "78 units",
      pl: "80 units",
      level: "High",
      action: "CI 数量需回到订单主数据核对后修正。"
    },
    {
      field: "Gross Weight",
      pi: "To be confirmed",
      ci: "Not shown",
      pl: "48,000 kg",
      level: "Medium",
      action: "以工厂装柜数据和货代订舱资料复核。"
    },
    {
      field: "Product Description",
      pi: "With bathroom and electrical wiring",
      ci: "Container house",
      pl: "Expandable container house",
      level: "Medium",
      action: "统一英文品名和配置描述，避免清关或客户误解。"
    },
    {
      field: "Port of Discharge",
      pi: "Jeddah",
      ci: "Jeddah",
      pl: "Dammam",
      level: "High",
      action: "PL/订舱资料目的港需立即确认。"
    }
  ],
  riskBoundaries: [
    "Do not invent certifications, wind load, snow load, fire rating, delivery time, warranty, or loading quantity.",
    "DDP requires local customs, tax, and delivery confirmation before quotation.",
    "Building codes and permits must be confirmed by local professionals.",
    "HS code and declaration data must be confirmed by customs broker or qualified staff."
  ]
};
