window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.enterprise = {
  metrics: [
    {
      value: "6",
      label: "诊断流程节点",
      detail: "客户开发、询盘、报价、订单、单证、收款风险"
    },
    {
      value: "4",
      label: "企业交付包",
      detail: "流程诊断、团队内训、轻量工具、SOP 知识库"
    },
    {
      value: "3",
      label: "核心岗位协同",
      detail: "业务、跟单、主管或老板共同确认流程和边界"
    },
    {
      value: "6",
      label: "方案映射项",
      detail: "把诊断痛点映射到内训模块、岗位、工具、SOP 和验收证据"
    },
    {
      value: "1",
      label: "企业样板线",
      detail: "先选一个产品或一类订单跑通，再复制到更多产品线"
    }
  ],
  diagnosisFocus: [
    {
      area: "客户开发",
      symptom: "客户资料分散，开发信重复写，跟进优先级凭感觉。",
      codexFix: "建立客户字段库、搜索指令、客户分层和跟进动作模板。",
      manualBoundary: "目标市场、客户资质和合作判断由业务负责人确认。"
    },
    {
      area: "询盘处理",
      symptom: "业务员反复读询盘、漏问关键参数、回复口径不统一。",
      codexFix: "把原始询盘拆成需求表、缺失问题、回复草稿和风险提示。",
      manualBoundary: "价格、交期、付款方式和客户承诺必须人工确认。"
    },
    {
      area: "报价测算",
      symptom: "费用项依赖个人经验，FOB/CIF/DDP 漏项后才发现利润被吃掉。",
      codexFix: "标准化产品、包装、国内费用、海运、保险和目的港风险字段。",
      manualBoundary: "成本、利润率、税费、物流报价和 DDP 责任由企业确认。"
    },
    {
      area: "订单跟单",
      symptom: "生产、收款、出货、单证节点靠聊天记录追踪。",
      codexFix: "生成订单主数据、节点看板、风险提醒和跨岗位待办。",
      manualBoundary: "生产计划、收款确认和发货安排以企业真实系统为准。"
    },
    {
      area: "单证检查",
      symptom: "PI、CI、PL 字段不一致，问题经常到出货前才集中暴露。",
      codexFix: "对收货人、品名、数量、金额、贸易条款和箱单字段做初步一致性检查。",
      manualBoundary: "报关、信用证、目的港清关和合规要求必须由专业人员复核。"
    },
    {
      area: "知识沉淀",
      symptom: "新人靠老员工口头带，离职或换岗后流程断层。",
      codexFix: "把岗位经验沉淀为 SOP、FAQ、指令库和新人上手路径。",
      manualBoundary: "组织分工、审批权限和客户策略由管理层决定。"
    }
  ],
  diagnosisRouter: {
    fields: [
      {
        id: "teamStage",
        label: "企业外贸团队阶段",
        options: [
          { value: "boss_only", label: "老板或单人业务在推进" },
          { value: "small_team", label: "2-5 人小团队" },
          { value: "growing_team", label: "业务、跟单已有分工" },
          { value: "mature_team", label: "多产品线或多岗位协同" }
        ]
      },
      {
        id: "materials",
        label: "目前可提供的业务资料",
        options: [
          { value: "none", label: "几乎没有历史资料" },
          { value: "basic", label: "只有产品介绍或图片" },
          { value: "product_docs", label: "有产品参数、报价或询盘" },
          { value: "process_docs", label: "有客户、报价、订单表格" },
          { value: "full_samples", label: "有脱敏订单和单证样例" }
        ]
      },
      {
        id: "painPoint",
        label: "最想先解决的问题",
        options: [
          { value: "unclear", label: "不知道从哪里开始改" },
          { value: "customer_dev", label: "客户开发和跟进低效" },
          { value: "inquiry_quote", label: "询盘回复和报价反复重做" },
          { value: "order_docs", label: "订单、单证和节点容易漏" },
          { value: "knowledge_sop", label: "经验无法沉淀成团队 SOP" }
        ]
      },
      {
        id: "goal",
        label: "本次咨询期望结果",
        options: [
          { value: "diagnosis", label: "先诊断流程和优先级" },
          { value: "training", label: "给团队做产品专属内训" },
          { value: "tool", label: "做一个轻量业务工作台" },
          { value: "sop", label: "共建长期 SOP 和知识库" }
        ]
      },
      {
        id: "boundary",
        label: "对人工确认边界的接受度",
        options: [
          { value: "accept", label: "接受关键报价、合同和合规人工确认" },
          { value: "uncertain", label: "需要先解释 AI 能做和不能做什么" },
          { value: "reject", label: "希望 AI 自动决定价格、交期或合同" }
        ]
      }
    ],
    defaultValues: {
      teamStage: "growing_team",
      materials: "process_docs",
      painPoint: "inquiry_quote",
      goal: "training",
      boundary: "accept"
    },
    routes: {
      prepare: {
        title: "先做资料准备与流程自测",
        serviceRef: "诊断前准备",
        fit: "适合资料不足、边界还没确认，或暂时无法提供脱敏业务样例的企业。",
        score: "资料成熟度不足",
        nextAction: "先领取重复劳动自查表和集成房屋案例字段包，整理一个主推产品、一条典型询盘或一张报价表后再预约诊断。",
        requiredMaterials: ["主推产品资料", "目标客户类型", "近期询盘或常见问题", "现有报价表或跟进表"],
        boundary: "此阶段只做流程自查和资料准备，不承诺工具定制或团队效率结果。",
        primaryPage: "./resources.html",
        secondaryPage: "./automation.html"
      },
      diagnosis: {
        title: "外贸流程提效诊断",
        serviceRef: "入门诊断",
        fit: "适合已经有外贸动作，但还不清楚客户开发、报价、订单或单证哪个环节最值得先改造的企业。",
        score: "先定位优先级",
        nextAction: "安排流程访谈，梳理重复劳动、字段缺失、人工审批点和第一条样板业务线。",
        requiredMaterials: ["岗位分工", "客户开发记录", "询盘样例", "报价表", "订单或单证样例"],
        boundary: "诊断只给出流程、字段和优先级建议，不替企业做最终商业决策。",
        primaryPage: "./enterprise.html",
        secondaryPage: "./playbook.html"
      },
      training: {
        title: "企业产品专属 Codex 训练营",
        serviceRef: "团队内训",
        fit: "适合已有业务、跟单或主管参与，希望团队用同一套方法完成客户开发、询盘、报价和作业输出的企业。",
        score: "适合课程交付",
        nextAction: "选择一个主推产品和一组脱敏询盘，把课堂案例、练习作业和内部指令库统一到企业场景。",
        requiredMaterials: ["主推产品资料", "典型客户画像", "脱敏询盘", "报价字段", "业务员常见回复"],
        boundary: "课程训练可以生成草稿、表格和检查清单，正式报价和客户承诺必须由授权岗位确认。",
        primaryPage: "./classroom.html",
        secondaryPage: "./learning.html"
      },
      tool: {
        title: "轻量外贸业务工作台",
        serviceRef: "工具定制",
        fit: "适合已经有 Excel、报价、订单或单证表格，但字段分散、重复录入和检查成本高的企业。",
        score: "适合工具原型",
        nextAction: "先做字段标准化和工具原型，跑通客户、询盘、报价、订单或单证中的一个高频流程。",
        requiredMaterials: ["现有 Excel 表", "字段说明", "报价逻辑", "订单节点", "检查规则"],
        boundary: "轻量工作台先解决重复整理和一致性检查，不一次性替代 ERP、CRM、财务或报关系统。",
        primaryPage: "./tools.html",
        secondaryPage: "./automation.html"
      },
      sop: {
        title: "外贸 SOP 与知识库共建",
        serviceRef: "长期改造",
        fit: "适合多岗位协同、人员培训频繁或希望把个人经验沉淀成团队资产的企业。",
        score: "适合长期共建",
        nextAction: "建立岗位 SOP、FAQ 知识库、案例复盘机制和版本更新规则，再按产品线逐步扩展。",
        requiredMaterials: ["岗位流程", "典型订单", "历史问题清单", "新人培训资料", "审批规则"],
        boundary: "SOP 共建需要企业管理层确认分工、权限和审批节点，不能只由外部顾问单方面定义。",
        primaryPage: "./playbook.html",
        secondaryPage: "./enterprise.html"
      },
      boundary: {
        title: "先做自动化边界说明，暂缓企业项目",
        serviceRef: "边界澄清",
        fit: "适合还希望 AI 自动决定价格、交期、合同或合规结论的企业，需要先统一预期再进入服务。",
        score: "需要先校准预期",
        nextAction: "先阅读自动化边界和风险门槛，确认 Codex 只负责整理、生成、检查和提醒，再决定是否预约诊断。",
        requiredMaterials: ["关键风险问题", "企业审批规则", "报价和合同确认人", "合规复核岗位"],
        boundary: "在边界未确认前，不进入工具定制或团队内训承诺。",
        primaryPage: "./automation.html",
        secondaryPage: "./enrollment.html"
      }
    }
  },
  diagnosisBriefBuilder: {
    title: "企业诊断方案生成器",
    description: "选择企业阶段、资料成熟度、核心痛点、服务目标、样板业务线和边界口径，生成可复制给销售、老师和企业客户确认的诊断 brief。",
    exportFilename: "enterprise-diagnosis-brief-output.md",
    defaults: {
      teamStage: "growing-team",
      materialLevel: "process-docs",
      painArea: "inquiry-quote",
      serviceGoal: "training",
      sampleLine: "integrated-house",
      boundaryMode: "enterprise-training"
    },
    teamStages: [
      {
        id: "solo",
        label: "老板或单人业务",
        summary: "流程主要靠个人经验推进，适合先做资料准备和重复劳动诊断。",
        ownerNeed: "老板或核心业务必须参与确认产品、客户、报价和交付边界。",
        risk: "不要一开始承诺复杂系统，先选一个主推产品跑通样板。"
      },
      {
        id: "small-team",
        label: "2-5 人小团队",
        summary: "已有基本分工，但客户、询盘、报价和跟单字段不统一。",
        ownerNeed: "业务主管需要确认字段标准、报价权限和对外回复口径。",
        risk: "内训前必须明确哪些表格、客户和报价资料可以脱敏使用。"
      },
      {
        id: "growing-team",
        label: "业务跟单已有分工",
        summary: "业务、跟单、主管已有协作，适合进入企业内训或轻量工具原型。",
        ownerNeed: "业务、跟单、单证和主管需要共同确认输入、输出和审批节点。",
        risk: "不能让课堂输出绕开企业原有审批流程。"
      },
      {
        id: "multi-line",
        label: "多产品线协同",
        summary: "多产品、多岗位、多表格并行，适合先做样板线，再复制到其他产品线。",
        ownerNeed: "管理层需要指定样板线负责人、维护人和扩展优先级。",
        risk: "长期 SOP 和工具共建需要版本维护责任，不能只做一次培训。"
      }
    ],
    materialLevels: [
      {
        id: "basic",
        label: "只有产品介绍或图片",
        score: "资料成熟度 C",
        required: ["主推产品资料", "目标客户类型", "常见客户问题", "产品认证和交期确认人"],
        nextAction: "先补齐产品字段和脱敏规则，再安排正式诊断。",
        risk: "资料不足时不进入报价、订单和单证工具承诺。"
      },
      {
        id: "product-docs",
        label: "有产品参数和典型询盘",
        score: "资料成熟度 B",
        required: ["产品参数表", "脱敏询盘", "常见回复", "报价前必须确认项"],
        nextAction: "可以先跑询盘识别和产品资料模块，确认课堂替换效果。",
        risk: "报价数字、交期和认证仍需企业负责人确认。"
      },
      {
        id: "process-docs",
        label: "有报价、订单或流程表",
        score: "资料成熟度 A-",
        required: ["报价表", "订单节点", "跟单记录", "岗位分工", "审批规则"],
        nextAction: "适合进入企业内训方案或轻量工具原型范围确认。",
        risk: "需要提前划清哪些字段可用于课堂，哪些只能内部查看。"
      },
      {
        id: "full-samples",
        label: "有脱敏订单和单证样例",
        score: "资料成熟度 A",
        required: ["脱敏订单", "PI/CI/PL 样例", "费用项规则", "异常处理记录", "SOP 草稿"],
        nextAction: "可以从样板订单进入工具/SOP 共建，并准备阶段验收。",
        risk: "单证、清关、信用证和合规结论必须由专业岗位复核。"
      }
    ],
    painAreas: [
      {
        id: "product-data",
        label: "产品资料字段不统一",
        mapperStages: ["01"],
        diagnosis: "产品资料分散，图片、参数、认证和 FAQ 不能直接进入客户开发、询盘回复和报价。",
        priority: "先统一产品主数据，再进入客户开发或报价训练。",
        pageRoute: ["course.html", "classroom.html", "tools.html"]
      },
      {
        id: "customer-dev",
        label: "客户开发和跟进低效",
        mapperStages: ["02"],
        diagnosis: "客户字段分散，开发信、跟进节奏和线索优先级依赖个人经验。",
        priority: "先建立客户字段、A/B/C 分层和三轮跟进规则。",
        pageRoute: ["course.html", "tools.html", "learning.html"]
      },
      {
        id: "inquiry-quote",
        label: "询盘回复和报价反复重做",
        mapperStages: ["03", "04"],
        diagnosis: "询盘回复慢、漏问关键字段，报价费用项和贸易术语边界不统一。",
        priority: "先用脱敏询盘跑通需求拆解，再把报价费用项和人工确认点锁定。",
        pageRoute: ["case-integrated-house.html", "tools.html", "course.html"]
      },
      {
        id: "order-docs",
        label: "订单跟单和单证容易漏",
        mapperStages: ["05"],
        diagnosis: "订单、收款、出货和单证字段分散，节点责任人和异常升级不清楚。",
        priority: "先统一订单主数据、节点看板和 PI/CI/PL 一致性检查。",
        pageRoute: ["tools.html", "automation.html", "enterprise.html"]
      },
      {
        id: "knowledge-sop",
        label: "经验无法沉淀为 SOP",
        mapperStages: ["06"],
        diagnosis: "新人培训靠口头传授，优秀业务经验没有进入岗位 SOP、FAQ 和指令库。",
        priority: "先把一条样板业务线打包成团队 SOP，再设版本维护责任。",
        pageRoute: ["playbook.html", "prompts.html", "enterprise.html"]
      }
    ],
    serviceGoals: [
      {
        id: "diagnosis",
        label: "先做流程诊断",
        packageRef: "外贸流程提效诊断",
        stagePlan: "1-2 周完成访谈、流程地图、问题清单、字段缺口和改造路线。",
        deliverable: "诊断报告、资料缺口清单、工具化优先级和下一步服务建议。",
        acceptance: "企业负责人确认优先改造环节、资料授权和人工审批边界。"
      },
      {
        id: "training",
        label: "企业产品专属内训",
        packageRef: "企业产品专属 Codex 训练营",
        stagePlan: "2-4 周完成样板产品课、岗位训练、作业点评和内部指令库。",
        deliverable: "企业案例课、岗位作业、课堂输出、内部指令库和团队使用规范。",
        acceptance: "参训岗位能用企业资料完成至少一组可复用输出，并说明正式对外前的复核人。"
      },
      {
        id: "tool",
        label: "轻量工具原型",
        packageRef: "轻量外贸业务工作台",
        stagePlan: "3-6 周完成字段标准化、轻交互原型、测试样例和维护说明。",
        deliverable: "工具规格、字段字典、轻量工作台、检查规则和上线验收清单。",
        acceptance: "工具能处理脱敏样例，且每个自动整理字段都有人工确认或维护责任。"
      },
      {
        id: "sop",
        label: "SOP 与知识库共建",
        packageRef: "外贸 SOP 与知识库共建",
        stagePlan: "按月迭代岗位 SOP、FAQ、指令治理和新产品线复制规则。",
        deliverable: "岗位 SOP、知识库目录、版本维护清单、培训复盘和扩展路线。",
        acceptance: "企业确认 SOP 负责人、更新节奏、权限边界和下一条产品线复制计划。"
      }
    ],
    sampleLines: [
      {
        id: "integrated-house",
        label: "集成房屋样板线",
        scenario: "用沙特 80 套 20ft 可扩展集成房屋询盘作为第一套演示样板。",
        input: "集成房屋产品资料、询盘、报价结构、订单节点和单证样例。",
        replacement: "先看标准案例，再替换为企业主推产品和脱敏询盘。"
      },
      {
        id: "company-product",
        label: "企业主推产品",
        scenario: "直接用企业主推产品建立产品资料、客户画像和询盘回复样板。",
        input: "企业产品参数、认证、图片、FAQ、目标市场和典型客户问题。",
        replacement: "适合资料已经脱敏且负责人愿意参与确认的企业。"
      },
      {
        id: "sample-order",
        label: "样板订单链路",
        scenario: "选择一组脱敏订单，从 PI、生产节点、收款、出货到单证一致性检查。",
        input: "订单主数据、PI/CI/PL、节点表、异常记录和岗位分工。",
        replacement: "适合已有订单和单证样例、希望进入工具或 SOP 共建的企业。"
      }
    ],
    boundaryModes: [
      {
        id: "diagnosis-only",
        label: "诊断边界",
        rule: "本阶段只输出流程、字段、资料缺口和优先级建议，不承诺成交、利润提升、系统范围或工期。",
        humanOwner: "企业负责人和企业服务负责人共同确认是否进入下一阶段。"
      },
      {
        id: "enterprise-training",
        label: "内训边界",
        rule: "课堂可生成草稿、表格、检查清单和 SOP 初稿，正式报价、合同、交期、清关和客户承诺必须由授权岗位确认。",
        humanOwner: "业务主管、财务/老板、单证或合规岗位确认正式对外内容。"
      },
      {
        id: "tool-project",
        label: "工具项目边界",
        rule: "轻量工具先解决重复整理和一致性检查，不一次性替代 ERP、CRM、财务、报关或法务系统。",
        humanOwner: "项目负责人、工具维护人和企业负责人确认字段权限、验收方式和维护节奏。"
      }
    ]
  },
  learnerSignalIntakeDownloads: [
    {
      label: "下载学员企业线索承接表 CSV",
      href: "./downloads/enterprise-learner-signal-intake-router.csv",
      format: "CSV",
      note: "用于把学员真实应用证据判断为企业诊断、内训预诊断、工具/SOP 探索、个人跟进、内部保留或课程返修。"
    },
    {
      label: "下载企业线索 Brief 模板 MD",
      href: "./downloads/enterprise-learner-signal-brief-template.md",
      format: "Markdown",
      note: "用于记录从个人学员成果升级到企业沟通前的授权、岗位、决策人、资料范围和禁止承诺。"
    }
  ],
  learnerSignalIntake: {
    title: "学员真实应用到企业诊断线索承接台",
    summary:
      "承接学习页和报名页的真实应用证据：当个人学员成果出现团队复用、主管关注、流程瓶颈或工具/SOP 信号时，先做授权和企业适配审核，再进入企业诊断或内部保留。",
    meta: [
      {
        value: "3",
        label: "来源页面",
        note: "学习应用复盘、报名真实应用证据承接和企业诊断页共同构成线索链路。"
      },
      {
        value: "6",
        label: "线索去向",
        note: "企业诊断、内训预诊断、工具/SOP 探索、个人跟进、内部保留、课程返修。"
      },
      {
        value: "5",
        label: "人工确认",
        note: "授权、决策人、资料范围、项目报价、交付边界必须人工确认。"
      },
      {
        value: "0",
        label: "自动升级",
        note: "个人学员成果不能自动升级为企业案例或企业销售线索。"
      }
    ],
    sourcePages: [
      "learning.html#learning-application-review",
      "enrollment.html#enrollment-application-proof-router",
      "enterprise.html#enterprise-learner-signal-intake"
    ],
    lanes: [
      {
        signal: "个人工作流已分享给团队",
        requiredProof: "脱敏后的学员工作流、团队反馈、涉及岗位、复用场景和团队负责人意见。",
        enterpriseFit: "高",
        recommendedRoute: "企业流程诊断",
        routePages: ["enterprise.html#enterprise-diagnosis-router", "enterprise.html#enterprise-diagnosis-brief-builder", "playbook.html"],
        codexAssist: "整理团队流程摘要、岗位问题清单和诊断前访谈问题。",
        manualGate: "团队负责人确认授权、资料范围、决策人和是否允许进入企业沟通。",
        noGo: "不能把个人学员成果包装成企业案例，不能暗示企业已经认可或采购。",
        owner: "企业服务销售 + 班主任"
      },
      {
        signal: "主管提出团队推广或培训需求",
        requiredProof: "主管意向、目标岗位、样板产品或订单、当前流程问题和预算/决策人线索。",
        enterpriseFit: "高",
        recommendedRoute: "企业内训预诊断",
        routePages: ["enterprise.html#enterprise-training-plan-mapper", "course.html", "classroom.html"],
        codexAssist: "把学员个人成果映射到企业内训模块、参与岗位和课堂样例。",
        manualGate: "主管确认业务范围、参与岗位、资料授权和预算 owner。",
        noGo: "不能承诺团队采纳率、培训效果或项目周期，必须先完成诊断。",
        owner: "企业服务负责人 + 主讲老师"
      },
      {
        signal: "真实使用暴露团队流程瓶颈",
        requiredProof: "多次出现的字段漏项、审批延迟、交接混乱、重复整理或人工检查瓶颈。",
        enterpriseFit: "中",
        recommendedRoute: "工具 / SOP 探索",
        routePages: ["tools.html", "automation.html", "playbook.html#playbook-tool-sprint-command-center"],
        codexAssist: "生成工具/SOP 信号 Brief、字段规格草稿和验收样例。",
        manualGate: "产品负责人确认频率、适用范围、企业资料权限和工具/SOP 优先级。",
        noGo: "不能承诺工具交付日期，也不能承诺替代企业 ERP、CRM、财务或审批系统。",
        owner: "产品负责人 + 企业项目负责人"
      },
      {
        signal: "只有个人学员表达团队兴趣",
        requiredProof: "学员希望团队使用，但没有主管反馈、授权、决策人或团队资料范围。",
        enterpriseFit: "低",
        recommendedRoute: "个人继续跟进",
        routePages: ["learning.html#learning-application-review", "enrollment.html#enrollment-application-proof-router", "resources.html"],
        codexAssist: "生成个人 30 天使用计划和下一次团队沟通前准备清单。",
        manualGate: "班主任确认是否允许联系团队，学员确认当前不具备企业线索条件。",
        noGo: "不能把个人意愿直接转给企业销售，不应制造企业线索假阳性。",
        owner: "班主任 + 课程顾问"
      },
      {
        signal: "涉及敏感企业或客户资料",
        requiredProof: "材料中包含客户、价格、成本、合同、联系方式、内部审批或未授权团队资料。",
        enterpriseFit: "暂缓",
        recommendedRoute: "内部治理",
        routePages: ["playbook.html", "resources.html", "enterprise.html#enterprise-risk-boundaries"],
        codexAssist: "生成脱敏清单、授权确认项和禁止传播提醒。",
        manualGate: "数据负责人和企业资料 owner 确认脱敏、授权和展示范围。",
        noGo: "不能分享给销售、市场、公开课或企业诊断团队，直到完成授权。",
        owner: "数据治理负责人 + 企业资料 owner"
      },
      {
        signal: "企业扩展请求实际来自课程卡点",
        requiredProof: "学员真实使用失败主要因为课程解释不清、作业标准不明确或资料准备不足。",
        enterpriseFit: "返修",
        recommendedRoute: "课程返修后再判断",
        routePages: ["course.html", "classroom.html", "learning.html#learning-application-review"],
        codexAssist: "生成课程返修单、助教点评补充和下一次真实使用复盘问题。",
        manualGate: "主讲老师确认是否先修课程，不在未修复前对企业升级销售。",
        noGo: "不能用课程缺口包装企业升级需求，也不能用企业服务替代应有的作业返修。",
        owner: "主讲老师 + 助教"
      }
    ],
    intakeChecks: [
      "确认线索来自结课后真实业务应用，而不是课堂作业或未验证的聊天记录。",
      "确认学员是否已分享给团队、主管是否反馈、是否存在企业决策人或预算 owner。",
      "确认企业资料、客户资料、价格、合同、联系方式和内部审批信息已脱敏或获得授权。",
      "确认企业沟通只进入诊断，不承诺培训效果、工具交付周期、成交结果或系统替代范围。",
      "确认不适合企业化的线索回到个人复盘、课程返修或内部治理，不强行转销售。"
    ],
    writebackTargets: [
      "企业诊断方案生成器",
      "企业诊断资料包",
      "报名真实应用证据承接台",
      "学员应用复盘台",
      "工具 Sprint 指挥台",
      "课程返修和版本回写"
    ]
  },
  toolchainSignalDownloads: [
    {
      label: "下载 5 工具链企业诊断信号表 CSV",
      href: "./downloads/enterprise-toolchain-signal-intake-board.csv",
      format: "CSV",
      note: "用于把询盘、报价、订单、单证和付款风控作业证据转成企业诊断材料、服务包建议和人工审批边界。"
    },
    {
      label: "下载 5 工具链企业诊断 Brief MD",
      href: "./downloads/enterprise-toolchain-signal-brief-template.md",
      format: "Markdown",
      note: "用于企业服务负责人复核企业资料授权、岗位范围、服务包建议、禁止承诺和下一步诊断动作。"
    }
  ],
  toolchainSignalIntake: {
    title: "5 工具链企业诊断信号承接台",
    summary:
      "承接报名页 5 工具链成果证据和学员页 5 工具链作业：当个人工具输出暴露团队流程、岗位审批、资料权限或高频重复问题时，先转成企业诊断材料，而不是直接承诺内训或工具项目。",
    meta: [
      { value: "5", label: "诊断切入点", note: "询盘、报价、订单、单证、付款风控逐项判断企业化价值。" },
      { value: "4", label: "服务去向", note: "流程诊断、企业内训、轻量工具、SOP 共建。" },
      { value: "5", label: "人工审批", note: "授权、决策人、岗位范围、资料边界、商业报价必须人工确认。" },
      { value: "0", label: "直接成交承诺", note: "任何学员作业都不能自动升级为企业项目承诺。" }
    ],
    sourcePages: [
      "enrollment.html#enrollment-toolchain-proof",
      "learning.html#learning-toolchain-assignment",
      "enterprise.html#enterprise-learner-signal-intake"
    ],
    signals: [
      {
        tool: "询盘识别与回复工具",
        enterpriseProblem: "业务员询盘分流口径不一，报价前补问、内部确认和客户回复依赖个人经验。",
        requiredMaterials: "3-5 封脱敏询盘、产品资料、现有回复模板、报价前审批人和客户分流规则。",
        suggestedService: "企业产品专属 Codex 训练营",
        serviceRoute: "enterprise.html#enterprise-training-plan-mapper",
        codexAssist: "整理询盘字段、缺失问题、回复口径、内部确认清单和岗位训练样例。",
        humanGate: "业务主管确认报价前必问字段、客户承诺边界和对外回复审批流程。",
        noGo: "不能承诺自动识别客户真假、自动报价、自动成交或替代业务主管审核。"
      },
      {
        tool: "FOB/CIF 报价费用项检查器",
        enterpriseProblem: "报价费用项、利润口径、运费有效期和 DDP 责任分散在个人表格里，缺少统一审批。",
        requiredMaterials: "脱敏报价表、费用项说明、利润审批规则、货代报价有效期、DDP/付款争议样例。",
        suggestedService: "轻量外贸业务工作台",
        serviceRoute: "enterprise.html#enterprise-proposal-approval",
        codexAssist: "整理报价字段字典、漏项检查规则、发布闸口、审批角色和工具原型 Brief。",
        humanGate: "财务、业务负责人和企业负责人确认成本、利润、汇率、运费、付款和报价有效期。",
        noGo: "不能承诺报价准确率、利润提升、自动审批或替代财务/负责人确认。"
      },
      {
        tool: "订单跟进与交期预警看板",
        enterpriseProblem: "订单节点、生产、订舱、尾款和客户进度分散在聊天记录中，风险发现晚。",
        requiredMaterials: "脱敏订单节点表、岗位分工、异常记录、客户更新邮件、尾款/放单规则。",
        suggestedService: "外贸流程提效诊断",
        serviceRoute: "enterprise.html#enterprise-diagnosis-router",
        codexAssist: "生成订单主数据字段、节点责任表、风险升级规则和客户进度模板。",
        humanGate: "业务、跟单、采购、生产、财务和主管确认节点责任、交期口径和客户承诺边界。",
        noGo: "不能承诺自动保证交期、自动催款、自动处理索赔或替代生产计划。"
      },
      {
        tool: "PI/CI/PL 单证一致性检查器",
        enterpriseProblem: "PI、CI、PL、订舱资料反复字段不一致，出货前才暴露数量、品名、重量和港口风险。",
        requiredMaterials: "脱敏 PI/CI/PL/订舱样例、单证字段规则、报关/银行/清关复核岗位和历史冲突记录。",
        suggestedService: "外贸 SOP 与知识库共建",
        serviceRoute: "enterprise.html#enterprise-training-plan-mapper",
        codexAssist: "整理出运前复核 SOP、字段一致性规则、冲突等级和修正复查样例。",
        humanGate: "单证、报关、银行、货代和业务负责人确认专业审单、申报和目的港清关边界。",
        noGo: "不能把一致性检查当作报关、信用证审单、银行审单或目的港清关结论。"
      },
      {
        tool: "付款方式与 DDP 风险矩阵",
        enterpriseProblem: "付款条款、DDP、到港后尾款、授信和合同责任缺少统一风控审批口径。",
        requiredMaterials: "脱敏付款条款、合同条款片段、客户资信规则、信保/银行要求、历史风险样例。",
        suggestedService: "外贸 SOP 与知识库共建",
        serviceRoute: "enterprise.html#enterprise-proposal-approval",
        codexAssist: "整理付款风险矩阵、审批角色、谈判替代方案、客户谨慎回复和合同边界清单。",
        humanGate: "财务、法务、信保、银行、税务和企业负责人确认授信、合同责任、税费和索赔边界。",
        noGo: "不能承诺替代信保、银行、法务、财务、合同审批或税务判断。"
      }
    ],
    approvalChecks: [
      "确认企业资料、客户资料、价格、成本、合同、付款、银行和内部审批已脱敏或获得授权。",
      "确认至少有一个企业负责人或主管愿意参与诊断，不只依赖个人学员转述。",
      "确认服务建议只是诊断前判断，不代表项目报价、周期、交付范围或效果承诺。",
      "确认每个工具链问题都有对应岗位和人工审批人，不让 Codex 绕开企业责任链。",
      "确认不适合企业化的信号回到个人作业返修、课程返修或内部治理。"
    ],
    handoffRoutes: [
      "询盘和报价类问题优先进入企业内训或轻量工具诊断。",
      "订单和单证类问题优先进入流程诊断和 SOP 共建。",
      "付款和 DDP 风险类问题必须先过财务/法务/信保边界确认。",
      "资料授权不足或决策人不明确时，先回到企业诊断资料包，不进入方案审批。"
    ]
  },
  proposalApprovalDesk: {
    title: "诊断会后方案审批台",
    description:
      "用于企业诊断会后把服务包、资料授权、项目范围、验收证据、签约状态和下一步交付动作锁定，避免未确认 scope 就进入内训、工具原型或 SOP 共建。",
    exportFilename: "enterprise-proposal-approval-brief-output.md",
    downloads: [
      {
        label: "下载企业方案审批表 CSV",
        href: "./downloads/enterprise-proposal-approval-board.csv",
        format: "CSV",
        note: "用于诊断会后确认服务包、资料授权、项目范围、验收证据、人工审批和下一步交付动作。"
      },
      {
        label: "下载企业项目启动 Brief 模板 MD",
        href: "./downloads/enterprise-project-kickoff-brief-template.md",
        format: "Markdown",
        note: "用于签约前后交接企业负责人、主讲老师、产品负责人、交付负责人和工具/SOP 团队。"
      }
    ],
    defaults: {
      servicePackage: "enterprise-training",
      authorizationState: "sanitized-authorized",
      scopeMode: "sample-line-locked",
      approvalState: "commercial-approved",
      launchAction: "kickoff-training"
    },
    servicePackages: [
      {
        id: "diagnosis-only",
        label: "外贸流程提效诊断",
        fit: "适合诊断后仍需补资料、校准优先级或暂不进入付费内训/工具项目的企业。",
        proofPages: ["enterprise.html", "automation.html", "playbook.html"],
        deliverables: ["流程问题清单", "资料缺口清单", "工具化优先级", "下一步服务建议"],
        codexUse: ["整理访谈纪要", "生成诊断报告草稿", "汇总资料缺口"],
        manualCheck: ["企业是否继续立项", "诊断结论是否准确", "下一阶段服务范围"]
      },
      {
        id: "enterprise-training",
        label: "企业产品专属内训",
        fit: "适合已经确认主推产品、参训岗位和课堂替换样例的企业。",
        proofPages: ["classroom.html", "course.html", "learning.html", "enterprise.html"],
        deliverables: ["企业产品案例课", "岗位训练任务", "课堂作业点评", "团队指令库"],
        codexUse: ["生成企业课堂 runbook", "整理岗位作业", "输出课后复盘摘要"],
        manualCheck: ["开课时间", "参训岗位", "资料脱敏", "正式对外审批"]
      },
      {
        id: "tool-prototype",
        label: "轻量工具原型",
        fit: "适合企业已有 Excel、报价、订单或单证样例，需要先做一个高频流程原型。",
        proofPages: ["tools.html", "automation.html", "enterprise.html", "playbook.html"],
        deliverables: ["字段字典", "工具规格", "测试样例", "验收清单"],
        codexUse: ["整理字段规则", "生成工具开发 Brief", "汇总测试样例和边界"],
        manualCheck: ["工具范围", "数据权限", "验收标准", "维护负责人"]
      },
      {
        id: "sop-knowledge",
        label: "SOP 与知识库共建",
        fit: "适合企业已经完成诊断或内训，希望把岗位经验、FAQ、指令库和版本维护沉淀为长期资产。",
        proofPages: ["playbook.html", "prompts.html", "classroom.html", "enterprise.html"],
        deliverables: ["岗位 SOP", "企业内部指令库", "FAQ 知识库", "版本维护清单"],
        codexUse: ["整理 SOP 草稿", "生成 FAQ 分类", "汇总版本维护建议"],
        manualCheck: ["岗位制度", "审批权限", "知识库负责人", "更新节奏"]
      }
    ],
    authorizationStates: [
      {
        id: "missing-authorization",
        label: "授权缺失",
        status: "暂缓进入项目",
        requirement: "企业尚未确认资料来源、脱敏范围、课堂使用范围或公开展示权限。",
        action: "先补资料脱敏和授权记录，只允许内部诊断使用。",
        risk: "不能进入公开展示、团队内训或工具测试。"
      },
      {
        id: "internal-only",
        label: "仅内部诊断",
        status: "可内部评审",
        requirement: "资料可供企业服务负责人和老师内部评审，但不能用于课堂、招生或工具测试。",
        action: "继续补授权范围，明确哪些字段可进入课堂或工具样例。",
        risk: "不能把内部资料放进公开课、报名页或下载资产。"
      },
      {
        id: "sanitized-authorized",
        label: "已脱敏授权",
        status: "可进入交付准备",
        requirement: "脱敏资料、授权范围、使用目的、撤回方式和负责人已确认。",
        action: "可进入内训准备、工具测试或 SOP 共建排期。",
        risk: "仍不得展示真实客户、底价、合同、付款和内部审批记录。"
      },
      {
        id: "enterprise-confidential",
        label: "企业保密项目",
        status: "企业审批后交付",
        requirement: "资料仅限项目内部，需签约范围、参与岗位、访问权限和验收责任确认。",
        action: "由企业服务负责人和企业授权人共同确认项目启动条件。",
        risk: "不得公开案例化，不进入营销或招生证明材料。"
      }
    ],
    scopeModes: [
      {
        id: "scope-unclear",
        label: "范围不清",
        readiness: "暂缓签约",
        detail: "服务包、样板业务线、参与岗位、交付物或验收证据仍不清楚。",
        action: "先回到诊断 Brief，补服务边界和验收标准。",
        deliverableFocus: ["范围说明", "缺口清单", "下一次确认会"]
      },
      {
        id: "sample-line-locked",
        label: "样板线已锁定",
        readiness: "可启动一期",
        detail: "已选择一个主推产品、一个询盘/报价/订单样例和一组参训岗位。",
        action: "可进入一期内训或工具原型交付准备。",
        deliverableFocus: ["样板产品", "岗位任务", "首期验收证据"]
      },
      {
        id: "multi-role-training",
        label: "多岗位内训",
        readiness: "可排课交付",
        detail: "业务、跟单、主管或单证岗位已确认参与范围和课堂作业。",
        action: "进入课堂 runbook、资料包和作业验收准备。",
        deliverableFocus: ["岗位作业", "课堂 runbook", "作业评分表"]
      },
      {
        id: "tool-sop-scope",
        label: "工具/SOP 范围明确",
        readiness: "可进入项目 Sprint",
        detail: "字段、规则、测试样例、验收方式和维护人已确认。",
        action: "进入工具 Sprint 或 SOP 共建排期。",
        deliverableFocus: ["字段字典", "工具 Brief", "SOP 验收表"]
      }
    ],
    approvalStates: [
      {
        id: "commercial-unapproved",
        label: "商务未确认",
        status: "不可启动",
        checklist: ["价格", "合同", "发票", "付款", "退款/延期", "服务范围"],
        action: "先由销售和企业负责人确认商务条款。",
        noGo: "不能排课、不能安排工具开发、不能对外承诺项目周期。"
      },
      {
        id: "commercial-approved",
        label: "商务已确认",
        status: "可交接启动",
        checklist: ["服务包", "排期", "付款/预约", "负责人", "资料清单", "人工边界"],
        action: "进入项目启动 Brief 和团队交接。",
        noGo: "仍不能承诺自动成交、业绩结果或替代企业内部审批。"
      },
      {
        id: "technical-review",
        label: "需技术/产品评审",
        status: "评审后启动",
        checklist: ["字段复杂度", "工具范围", "测试样例", "权限边界", "开发周期", "验收方式"],
        action: "先让产品负责人和开发负责人评估工具/SOP 范围。",
        noGo: "技术范围未评审前不能报价复杂系统或承诺开发周期。"
      },
      {
        id: "leadership-approval",
        label: "企业管理层审批",
        status: "审批后启动",
        checklist: ["企业负责人", "参训岗位", "资料授权", "内部审批", "验收责任", "保密要求"],
        action: "由企业授权人确认项目范围和参与岗位。",
        noGo: "不能绕开企业负责人直接向岗位人员承诺交付。"
      }
    ],
    launchActions: [
      {
        id: "return-diagnosis",
        label: "退回补诊断",
        nextPage: "enterprise.html",
        action: "补齐资料授权、服务范围、验收证据和人工边界后再评估启动。",
        owner: "企业服务负责人",
        route: "诊断 Brief / 资料包"
      },
      {
        id: "kickoff-training",
        label: "启动企业内训",
        nextPage: "classroom.html",
        action: "生成企业项目启动 Brief，交接主讲老师、助教、班主任和企业负责人。",
        owner: "主讲老师 + 企业服务负责人",
        route: "课堂 runbook / 学员作业 / 课后复盘"
      },
      {
        id: "kickoff-tool",
        label: "启动工具 Sprint",
        nextPage: "tools.html",
        action: "生成工具 Sprint Brief，锁定字段字典、测试样例、验收方式和维护负责人。",
        owner: "产品负责人 + 企业服务负责人",
        route: "工具中心 / 运营指南"
      },
      {
        id: "kickoff-sop",
        label: "启动 SOP 共建",
        nextPage: "playbook.html",
        action: "进入 SOP/知识库共建排期，确认岗位制度、FAQ 分类、指令治理和版本维护节奏。",
        owner: "课程负责人 + 企业负责人",
        route: "运营指南 / 指令库"
      }
    ],
    operatingRules: [
      "没有资料脱敏和授权记录的企业项目只能内部诊断，不能进入公开课、招生证明或工具测试。",
      "服务包、样板业务线、参与岗位、交付物和验收证据未明确前，不进入签约或排课承诺。",
      "工具原型、SOP 共建和复杂系统范围必须经过产品/技术评审，不能在诊断会后直接承诺周期。",
      "价格、合同、发票、付款、退款、延期、排课和企业签约范围必须由人工确认。",
      "企业项目默认不进入公开展示，除非企业授权人明确确认展示范围、有效期和撤回方式。"
    ]
  },
  projectKickoffDesk: {
    title: "企业项目启动与交接指挥台",
    description:
      "用于企业方案审批通过后，把启动模式、项目范围、角色分工、资料室状态、首个里程碑和风险闸口转成可执行的项目启动 Brief，避免签约后靠口头交接推进。",
    exportFilename: "enterprise-project-kickoff-output.md",
    downloads: [
      {
        label: "下载企业项目启动指挥表 CSV",
        href: "./downloads/enterprise-project-kickoff-command-center.csv",
        format: "CSV",
        note: "用于项目启动会、角色交接、资料室检查、里程碑排期、风险闸口和平台回写。"
      },
      {
        label: "下载企业启动会记录模板 MD",
        href: "./downloads/enterprise-project-kickoff-meeting-note-template.md",
        format: "Markdown",
        note: "用于签约后记录启动会结论、企业责任、首期交付、人工确认边界和下次复盘。"
      }
    ],
    defaults: {
      kickoffMode: "enterprise-training",
      projectScope: "sample-line",
      roleSetup: "core-team-ready",
      dataRoomState: "sanitized-ready",
      firstMilestone: "training-rehearsal",
      riskGate: "standard-boundary"
    },
    kickoffModes: [
      {
        id: "diagnosis-project",
        label: "流程诊断项目",
        score: 12,
        purpose: "诊断会后仍需补流程地图、资料成熟度、工具优先级和下一阶段建议。",
        owners: ["企业服务负责人", "销售顾问", "企业负责人"],
        deliverables: ["访谈纪要", "流程地图", "资料缺口", "优先级建议"],
        pageRoute: ["enterprise.html#enterprise-intake-kit", "enterprise.html#enterprise-diagnosis-brief-builder"]
      },
      {
        id: "enterprise-training",
        label: "企业内训项目",
        score: 18,
        purpose: "已确认主推产品、参训岗位和课堂替换样例，进入排课、资料包和岗位作业准备。",
        owners: ["主讲老师", "助教", "班主任", "企业培训负责人"],
        deliverables: ["企业课堂 runbook", "岗位作业", "内训资料包", "课后复盘"],
        pageRoute: ["classroom.html", "learning.html", "enterprise.html#enterprise-training-plan-mapper"]
      },
      {
        id: "tool-sprint",
        label: "轻量工具 Sprint",
        score: 17,
        purpose: "已确认字段、样例和验收方式，进入工具规格、原型、测试样例和维护说明。",
        owners: ["产品负责人", "开发负责人", "企业项目负责人"],
        deliverables: ["字段字典", "工具 Brief", "测试样例", "验收清单"],
        pageRoute: ["tools.html", "automation.html", "playbook.html#playbook-tool-sprint-command-center"]
      },
      {
        id: "sop-retainer",
        label: "SOP / 知识库共建",
        score: 15,
        purpose: "已确认岗位制度、FAQ 分类、指令治理和版本维护责任，进入月度共建节奏。",
        owners: ["课程负责人", "企业负责人", "岗位 SOP owner"],
        deliverables: ["岗位 SOP 目录", "FAQ 知识库", "内部指令库", "版本维护记录"],
        pageRoute: ["prompts.html", "playbook.html", "enterprise.html#enterprise-renewal-expansion"]
      }
    ],
    projectScopes: [
      {
        id: "diagnosis-only",
        label: "仅诊断范围",
        score: 6,
        scope: "只承诺流程诊断、资料缺口、优先级和下一步建议。",
        acceptance: "企业确认诊断报告和下一阶段是否立项。",
        noGo: "不得提前承诺内训效果、工具交付或 SOP 共建周期。"
      },
      {
        id: "sample-line",
        label: "单条样板业务线",
        score: 16,
        scope: "围绕一个主推产品、一组脱敏询盘/报价/订单样例和一组核心岗位交付。",
        acceptance: "样板线能跑通课堂、作业、工具或 SOP 验收。",
        noGo: "不得默认扩展到所有产品线或所有岗位。"
      },
      {
        id: "multi-role",
        label: "多岗位协同",
        score: 14,
        scope: "业务、跟单、主管、单证或财务岗位共同参与，需锁定岗位责任和审批节点。",
        acceptance: "每个岗位都有输入、输出、作业或验收责任。",
        noGo: "不得绕开企业负责人直接改变岗位制度。"
      },
      {
        id: "tool-sop",
        label: "工具 / SOP 范围",
        score: 13,
        scope: "锁定字段、权限、测试样例、维护人和版本复盘方式。",
        acceptance: "工具或 SOP 能处理脱敏样例，并说明人工确认点。",
        noGo: "不得承诺替代 ERP、CRM、财务、报关、法务或企业审批系统。"
      }
    ],
    roleSetups: [
      {
        id: "owner-missing",
        label: "负责人缺失",
        score: 0,
        state: "不可启动",
        action: "先确认企业负责人、项目对接人、资料 owner 和验收人。",
        roles: ["企业负责人", "项目对接人", "资料 owner", "验收人"]
      },
      {
        id: "core-team-ready",
        label: "核心角色齐备",
        score: 16,
        state: "可启动一期",
        action: "企业负责人、项目对接人、主讲老师、助教和交付负责人已经明确。",
        roles: ["企业负责人", "项目对接人", "主讲老师", "助教", "交付负责人"]
      },
      {
        id: "product-tech-ready",
        label: "产品技术已加入",
        score: 14,
        state: "可启动工具线",
        action: "产品、开发、企业资料 owner 和交付负责人已参与工具或 SOP 范围评审。",
        roles: ["产品负责人", "开发负责人", "企业资料 owner", "交付负责人"]
      },
      {
        id: "leadership-review",
        label: "等待管理层复核",
        score: 5,
        state: "审批后启动",
        action: "企业管理层还需确认岗位参与、资料权限、预算、验收责任或保密要求。",
        roles: ["企业管理层", "企业服务负责人", "销售负责人"]
      }
    ],
    dataRoomStates: [
      {
        id: "not-ready",
        label: "资料室未建",
        score: 0,
        requirement: "尚未统一资料目录、脱敏规则、文件权限、版本命名和不可使用资料清单。",
        action: "先建立项目资料室和脱敏授权记录。",
        proof: ["资料目录", "脱敏规则", "权限清单"]
      },
      {
        id: "sanitized-ready",
        label: "脱敏资料齐备",
        score: 16,
        requirement: "主推产品、询盘/报价/订单样例、岗位资料和不可公开字段已脱敏。",
        action: "可进入内训、工具测试或 SOP 共建。",
        proof: ["脱敏产品资料", "脱敏业务样例", "不可公开字段清单"]
      },
      {
        id: "confidential-controlled",
        label: "保密权限受控",
        score: 11,
        requirement: "企业资料仅限项目内部，访问权限、撤回方式和保密边界已记录。",
        action: "仅在授权范围内使用，不进入公开展示或招生证据。",
        proof: ["权限记录", "保密边界", "撤回方式"]
      },
      {
        id: "sample-gap",
        label: "样例仍有缺口",
        score: 6,
        requirement: "缺少关键字段、订单节点、单证样例、审批规则或岗位资料。",
        action: "先补样例，不安排复杂工具或多岗位训练。",
        proof: ["缺口清单", "补资料负责人", "下次提交时间"]
      }
    ],
    firstMilestones: [
      {
        id: "diagnosis-map",
        label: "完成流程地图",
        score: 8,
        milestone: "7 天内完成流程访谈、问题清单、资料缺口和第一阶段建议。",
        output: "诊断摘要、流程地图、优先级建议。",
        route: ["enterprise.html#enterprise-intake-kit", "playbook.html#playbook-maintenance-log-builder"]
      },
      {
        id: "training-rehearsal",
        label: "完成内训试讲",
        score: 12,
        milestone: "开课前完成企业资料替换、讲师试讲、岗位作业和课堂边界复核。",
        output: "企业课堂 runbook、试讲记录、岗位作业包。",
        route: ["classroom.html", "learning.html"]
      },
      {
        id: "tool-prototype",
        label: "完成工具原型",
        score: 11,
        milestone: "首个 Sprint 完成字段字典、默认样例、脱敏样例测试和验收清单。",
        output: "工具规格、原型验收、维护说明。",
        route: ["tools.html", "playbook.html#playbook-tool-sprint-command-center"]
      },
      {
        id: "sop-outline",
        label: "完成 SOP 目录",
        score: 10,
        milestone: "首月完成岗位 SOP 目录、FAQ 分类、指令治理和版本维护节奏。",
        output: "SOP 目录、FAQ 初稿、版本维护表。",
        route: ["prompts.html", "playbook.html"]
      }
    ],
    riskGates: [
      {
        id: "standard-boundary",
        label: "常规人工边界",
        penalty: 0,
        gate: "价格、合同、交期、付款、合规和客户承诺仍由企业授权岗位确认。",
        reviewers: ["企业负责人", "企业服务负责人"]
      },
      {
        id: "commercial-contract",
        label: "商务合同未锁定",
        penalty: 14,
        gate: "价格、合同、付款、发票、退款、延期或服务范围未确认前，不安排交付。",
        reviewers: ["销售负责人", "企业负责人", "财务/法务"]
      },
      {
        id: "data-permission",
        label: "数据权限风险",
        penalty: 10,
        gate: "涉及真实客户、价格、成本、合同、联系方式或内部审批时，必须确认权限和脱敏范围。",
        reviewers: ["企业资料 owner", "数据治理负责人", "交付负责人"]
      },
      {
        id: "technical-scope",
        label: "技术范围风险",
        penalty: 12,
        gate: "导入导出、权限、系统对接、复杂字段或自动化规则必须先过产品/技术评审。",
        reviewers: ["产品负责人", "开发负责人", "企业项目负责人"]
      }
    ],
    operatingRules: [
      "启动会必须明确企业负责人、项目对接人、资料 owner、验收人和平台内部交付负责人。",
      "企业资料室先完成脱敏、权限、版本命名和不可使用字段清单，再进入课堂或工具测试。",
      "首个里程碑必须能形成可验收输出：流程地图、试讲记录、工具原型或 SOP 目录。",
      "合同、付款、发票、延期、退款、服务范围和技术周期必须由人工确认，不能由 Codex 自动承诺。",
      "项目启动后要回写企业服务页、交付看板、维护日志和下次复盘窗口。"
    ]
  },
  intakeKit: {
    title: "企业诊断资料包",
    summary: "把企业咨询从口头聊天变成可收集、可评分、可复盘的诊断流程，适合销售顾问、企业服务负责人和授课老师共同使用。",
    proof: "完成资料包后，团队应能判断企业是否适合启动诊断、内训、轻量工具或 SOP 共建，并明确需要企业人工确认的风险点。",
    downloads: [
      {
        label: "下载访谈记录模板 MD",
        href: "./downloads/enterprise-diagnosis-intake.md",
        format: "Markdown",
        note: "用于首次企业访谈、会议纪要和诊断交付前确认。"
      },
      {
        label: "下载资料清单 CSV",
        href: "./downloads/enterprise-material-checklist.csv",
        format: "CSV",
        note: "用于收集产品、询盘、报价、订单和单证样例。"
      },
      {
        label: "下载成熟度评分表 CSV",
        href: "./downloads/enterprise-readiness-scorecard.csv",
        format: "CSV",
        note: "用于判断先诊断、先内训、先工具化或暂缓项目。"
      }
    ],
    stages: [
      {
        stage: "01",
        title: "咨询前资料收集",
        purpose: "确认企业是否有主推产品、典型询盘、报价表、订单节点和单证样例。",
        codexUse: "把企业提供的资料整理成字段清单、缺失项和脱敏建议。",
        manualCheck: "客户隐私、价格成本、合同和真实订单由企业自行脱敏。"
      },
      {
        stage: "02",
        title: "60 分钟流程访谈",
        purpose: "围绕客户开发、询盘、报价、订单、单证、知识沉淀六个节点找重复劳动。",
        codexUse: "把访谈记录整理为流程地图、痛点清单和可自动化候选项。",
        manualCheck: "岗位分工、审批权限和优先级由企业负责人确认。"
      },
      {
        stage: "03",
        title: "成熟度评分",
        purpose: "按资料完整度、流程稳定性、团队配合度和风险边界接受度给出启动建议。",
        codexUse: "生成评分解释、推荐服务包和下一步资料补充清单。",
        manualCheck: "是否进入付费诊断、内训或工具定制由销售和企业共同确认。"
      },
      {
        stage: "04",
        title: "诊断后交付预览",
        purpose: "给企业展示会拿到什么：流程问题清单、字段缺失清单、工具化路线和人工边界。",
        codexUse: "输出诊断报告初稿、会议纪要和下一轮项目计划。",
        manualCheck: "所有对效果、成本、工期和系统范围的承诺必须再次确认。"
      }
    ],
    interviewBlocks: [
      {
        title: "业务现状",
        questions: ["目前主推产品和目标市场是什么？", "每天最重复的外贸动作是哪三个？", "哪些工作必须老板或主管确认？"]
      },
      {
        title: "资料与字段",
        questions: ["是否有脱敏询盘、报价表、订单表和单证样例？", "现有 Excel 字段是否统一？", "哪些字段经常缺失或重复录入？"]
      },
      {
        title: "团队与流程",
        questions: ["业务、跟单、单证和主管如何协作？", "新人上手目前靠什么资料？", "哪些节点容易因为聊天记录分散而漏掉？"]
      },
      {
        title: "风险边界",
        questions: ["报价、交期、付款和合同由谁最终确认？", "是否接受 Codex 只生成草稿和检查建议？", "有哪些资料不能进入工具或课堂演示？"]
      }
    ],
    scoringRules: [
      {
        level: "A",
        range: "80-100",
        meaning: "资料较完整、流程稳定、负责人愿意参与，可进入企业内训或轻量工具原型。"
      },
      {
        level: "B",
        range: "60-79",
        meaning: "有部分资料和明确痛点，建议先做 1-2 周流程诊断再决定服务包。"
      },
      {
        level: "C",
        range: "40-59",
        meaning: "资料不足或流程不稳定，先做资料准备、自测和边界说明。"
      },
      {
        level: "D",
        range: "0-39",
        meaning: "尚不适合承诺企业项目，优先补产品资料、业务样例和人工审批规则。"
      }
    ],
    deliverablePreview: [
      ["流程地图", "客户开发、询盘、报价、订单、单证、知识沉淀"],
      ["问题清单", "重复动作、字段缺失、风险节点、岗位协同问题"],
      ["服务建议", "资料准备、流程诊断、企业内训、工具原型或 SOP 共建"],
      ["人工边界", "价格、利润、交期、合同、合规和客户承诺"]
    ]
  },
  trainingPlanDownloads: [
    {
      label: "下载企业内训方案映射表 CSV",
      href: "./downloads/enterprise-training-plan-mapper.csv",
      format: "CSV",
      note: "用于把诊断痛点、课程模块、岗位参与、工具输出和验收证据统一成方案。"
    },
    {
      label: "下载企业内训范围确认书 MD",
      href: "./downloads/enterprise-training-scope-brief.md",
      format: "Markdown",
      note: "用于诊断后确认本期内训范围、企业责任、资料脱敏和人工审批边界。"
    }
  ],
  trainingPlanMapper: [
    {
      stage: "01",
      diagnosisSignal: "企业资料不足，只有产品介绍或图片，业务员不知道怎么把产品资料转成外贸表达。",
      trainingModule: "M0 产品资料准备 / M5 产品资料优化",
      participantRoles: "业务员、产品负责人、老板或工厂技术负责人",
      classCase: "先用集成房屋产品主数据演示，再替换企业主推产品参数和 FAQ。",
      toolOutput: "企业产品资料工作台、英文参数表、待补字段清单。",
      sopTask: "建立产品资料更新责任人、认证文件确认规则和对外资料版本命名。",
      acceptanceEvidence: "企业能提交一份脱敏产品资料表，并标出哪些字段必须由工厂或负责人确认。",
      manualBoundary: "产品性能、认证、库存、交期和可交付能力不能由 Codex 编造。",
      owner: "产品负责人 + 主讲老师"
    },
    {
      stage: "02",
      diagnosisSignal: "客户开发靠个人经验，客户字段分散，开发信和跟进节奏不统一。",
      trainingModule: "M1 客户画像 / M2 客户搜索 / M3 开发信",
      participantRoles: "业务员、外贸主管、市场运营",
      classCase: "用集成房屋目标客户拆出承包商、经销商、项目方，再替换企业目标市场。",
      toolOutput: "客户开发字段库、A/B/C 线索分级表、开发信和三轮跟进模板。",
      sopTask: "统一客户字段、跟进状态、触达记录和负责人交接规则。",
      acceptanceEvidence: "企业能完成 3 类目标客户画像和至少 20 条可跟进线索字段。",
      manualBoundary: "客户真实性、触达合规、合作判断和报价权限必须由业务负责人确认。",
      owner: "外贸主管 + 课程顾问"
    },
    {
      stage: "03",
      diagnosisSignal: "询盘回复慢，漏问关键参数，业务员直接报价导致风险前置不足。",
      trainingModule: "M4 询盘识别 / M5 产品资料补齐",
      participantRoles: "业务员、销售主管、产品负责人",
      classCase: "用沙特 80 套集成房屋询盘演示已知需求、缺失字段和报价前补问。",
      toolOutput: "询盘识别表、报价前问题清单、英文回复草稿、风险提示。",
      sopTask: "建立询盘初筛字段、报价前必须补问项和主管确认节点。",
      acceptanceEvidence: "企业业务员能用脱敏询盘输出结构化需求表，并说明为什么暂不能直接报价。",
      manualBoundary: "价格、交期、付款、认证、DDP 和客户承诺必须人工确认。",
      owner: "业务主管 + 助教"
    },
    {
      stage: "04",
      diagnosisSignal: "报价费用项依赖个人经验，FOB/CIF/DDP 边界不清，漏项后利润被压缩。",
      trainingModule: "M6 报价结构 / M10 风险边界",
      participantRoles: "业务员、财务、物流或货代接口、老板",
      classCase: "用集成房屋 FOB/CIF 报价结构演示费用拆分和 DDP 风险提醒。",
      toolOutput: "报价费用项清单、人工确认清单、报价说明邮件草稿。",
      sopTask: "定义成本、利润、汇率、运费有效期和特殊条款的审批人。",
      acceptanceEvidence: "企业能用一张脱敏报价表拆出产品、包装、国内费用、运费、保险和利润确认点。",
      manualBoundary: "最终价格、利润率、汇率、运费、付款条件和税费责任由企业确认。",
      owner: "财务/老板 + 主讲老师"
    },
    {
      stage: "05",
      diagnosisSignal: "订单、生产、收款、出货和单证节点靠聊天记录推进，容易漏责任人和节点状态。",
      trainingModule: "M7 PI 与订单主数据 / M8 订单跟进 / M9 单证检查",
      participantRoles: "业务员、跟单、单证、生产或仓储负责人",
      classCase: "用集成房屋订单节点和 PI/CI/PL 冲突样例演示一致性检查。",
      toolOutput: "订单主数据表、跟单看板、单证一致性检查表、异常记录表。",
      sopTask: "建立订单字段、节点负责人、异常升级和对外进度更新口径。",
      acceptanceEvidence: "企业能用脱敏订单跑通 PI、节点看板和单证字段一致性检查。",
      manualBoundary: "交期、收款、发货、报关、信用证和清关要求必须由授权岗位复核。",
      owner: "跟单主管 + 单证负责人"
    },
    {
      stage: "06",
      diagnosisSignal: "新人培训靠口头传授，老业务经验没有沉淀，企业希望形成长期 SOP 和知识库。",
      trainingModule: "Final 结课工具包 / SOP 共建 / 指令治理",
      participantRoles: "企业负责人、外贸主管、骨干业务员、培训负责人",
      classCase: "用集成房屋课程资产演示如何把案例、工具、指令和作业打包成团队 SOP。",
      toolOutput: "岗位 SOP、企业内部指令库、FAQ 知识库、版本维护清单。",
      sopTask: "定义 SOP 负责人、更新周期、优秀作业入库和新产品线复制规则。",
      acceptanceEvidence: "企业能确认一套新人上手路径和一份可维护知识库目录。",
      manualBoundary: "岗位分工、审批权限、绩效要求和组织制度必须由企业管理层确认。",
      owner: "企业负责人 + 课程负责人"
    }
  ],
  servicePackages: [
    {
      type: "入门诊断",
      title: "外贸流程提效诊断",
      fit: "适合还不确定从哪里开始改造的外贸团队。",
      duration: "1-2 周",
      deliverables: ["岗位访谈", "流程问题清单", "字段缺失清单", "工具化优先级", "改造路线图"],
      proof: "交付后企业能知道哪些环节适合先用 Codex 自动化，哪些必须保留人工审批。"
    },
    {
      type: "团队内训",
      title: "企业产品专属 Codex 训练营",
      fit: "适合有业务团队、跟单团队，想统一使用方法和输出标准的企业。",
      duration: "2-4 周",
      deliverables: ["企业产品案例课", "岗位操作训练", "学员作业点评", "内部指令库", "团队使用规范"],
      proof: "交付后团队能用自己的产品资料完成客户开发、询盘、报价和单证演示。"
    },
    {
      type: "工具定制",
      title: "轻量外贸业务工作台",
      fit: "适合已有 Excel、报价表和订单表，但维护成本高、字段不统一的团队。",
      duration: "3-6 周",
      deliverables: ["字段标准化", "工具原型", "数据导入规则", "检查逻辑", "维护说明"],
      proof: "交付后企业拥有可持续维护的客户、询盘、报价、订单或单证工作台。"
    },
    {
      type: "长期改造",
      title: "外贸 SOP 与知识库共建",
      fit: "适合希望把个人经验变成团队资产，并持续扩展到更多产品线的企业。",
      duration: "按月迭代",
      deliverables: ["岗位 SOP", "FAQ 知识库", "培训复盘", "流程版本记录", "新增案例机制"],
      proof: "交付后企业能持续沉淀新案例、新工具和新人培训资料。"
    }
  ],
  deliveryBoardDownloads: [
    {
      label: "下载企业交付计划 CSV",
      href: "./downloads/enterprise-service-delivery-plan.csv",
      format: "CSV",
      note: "用于项目启动会、阶段推进、责任分工和验收复盘。"
    },
    {
      label: "下载项目验收清单 MD",
      href: "./downloads/enterprise-project-acceptance-checklist.md",
      format: "Markdown",
      note: "用于每个阶段确认交付证据、企业责任和人工边界。"
    }
  ],
  deliveryBoard: [
    {
      stage: "01",
      title: "诊断立项与范围确认",
      serviceLink: "入门诊断",
      businessInput: "主推产品、团队岗位、现有表格、典型询盘或订单样例",
      deliverable: "项目范围说明、流程地图、重复劳动清单和资料脱敏规则",
      acceptanceEvidence: "企业负责人确认优先改造环节、资料清单和人工审批边界",
      enterpriseResponsibility: "提供脱敏样例，指定业务、跟单和主管确认人",
      boundary: "不承诺成交、利润提升或替代企业商业决策。",
      nextExpansion: "资料完整后进入样板业务线建模。"
    },
    {
      stage: "02",
      title: "样板业务线建模",
      serviceLink: "团队内训 / 工具定制",
      businessInput: "一个主推产品、一类目标客户、一组脱敏询盘、报价字段和订单节点",
      deliverable: "客户字段、询盘字段、报价字段、订单节点和单证检查字段",
      acceptanceEvidence: "一条样板客户开发到报价或单证检查链路可复用，并通过岗位复核",
      enterpriseResponsibility: "补齐产品参数、费用项、报价口径、审批人和不可使用资料清单",
      boundary: "样板线只验证字段和流程，不直接替企业向真实客户承诺。",
      nextExpansion: "样板线稳定后转入团队训练或轻量工具原型。"
    },
    {
      stage: "03",
      title: "团队内训与岗位作业",
      serviceLink: "企业产品专属 Codex 训练营",
      businessInput: "企业样板线、岗位分工、课堂练习资料、业务员常见回复和主管点评口径",
      deliverable: "岗位训练课、课堂操作记录、学员作业、内部指令库和团队使用规范",
      acceptanceEvidence: "业务、跟单或主管能用企业资料完成至少一组客户开发、询盘回复或报价作业",
      enterpriseResponsibility: "安排参训岗位、提交作业、确认正式客户沟通前的审批流程",
      boundary: "课堂作业是训练成果，正式报价、交期、付款和合同仍需授权岗位确认。",
      nextExpansion: "作业稳定后选择高频流程升级为轻量工作台。"
    },
    {
      stage: "04",
      title: "轻量工具原型或 SOP 共建",
      serviceLink: "工具定制 / 长期改造",
      businessInput: "已验收字段、现有 Excel、报价逻辑、订单节点、单证规则和岗位 SOP 草稿",
      deliverable: "轻量网页或表格工作台、字段说明、检查规则、维护说明和 SOP 初版",
      acceptanceEvidence: "工具能处理脱敏样例，SOP 能说明输入、输出、责任人、人工确认点和更新规则",
      enterpriseResponsibility: "指定维护人，提供测试样例，确认哪些字段可自动整理、哪些必须人工审批",
      boundary: "原型先解决重复整理和一致性检查，不一次性替代 ERP、CRM、财务或报关系统。",
      nextExpansion: "用真实反馈决定是否对接更多产品线或现有系统。"
    },
    {
      stage: "05",
      title: "验收交接与下一轮扩展",
      serviceLink: "复盘续约",
      businessInput: "阶段交付物、课堂作业、工具测试记录、企业反馈和后续业务优先级",
      deliverable: "项目验收清单、维护日志、内部使用说明、下一轮扩展建议和边界复核表",
      acceptanceEvidence: "双方确认已交付内容、未覆盖范围、企业自维护责任和下一步扩展优先级",
      enterpriseResponsibility: "确认验收人、维护人、内部推广方式和后续资料更新节奏",
      boundary: "复盘只评估流程和交付物，不把短期成交或市场结果作为唯一验收依据。",
      nextExpansion: "复制到第二条产品线、第二个岗位流程或长期 SOP 知识库。"
    }
  ],
  deliveryWritebackRouter: {
    title: "企业交付证据回写与授权路由台",
    description:
      "企业项目阶段验收后，先判断证据来源、验收状态、授权范围、可复用资产、业务影响和风险边界，再决定进入案例中心、工具 Sprint、资源证明、内部 SOP、续约 Brief 或仅内部归档。",
    exportFilename: "enterprise-delivery-writeback-output.md",
    downloads: [
      {
        label: "下载交付证据回写路由表 CSV",
        href: "./downloads/enterprise-delivery-writeback-router.csv",
        format: "CSV",
        note: "用于把企业验收证据安全路由到案例、工具、资源、SOP、续约或内部归档。"
      },
      {
        label: "下载企业证据授权记录模板 MD",
        href: "./downloads/enterprise-delivery-evidence-authorization-template.md",
        format: "Markdown",
        note: "用于记录企业证据来源、授权范围、脱敏要求、公开边界和撤回方式。"
      }
    ],
    defaults: {
      evidenceSource: "accepted-deliverable",
      acceptanceState: "approved-internal",
      authorizationScope: "anonymized-teaching",
      reusableAsset: "tool-sprint",
      businessImpact: "team-efficiency",
      riskBoundary: "standard-masking"
    },
    evidenceSources: [
      {
        id: "accepted-deliverable",
        label: "阶段交付物已验收",
        score: 20,
        summary: "企业确认流程地图、岗位作业、工具样例或 SOP 初稿已完成阶段验收。",
        codexUse: ["整理验收摘要", "提取可复用字段", "生成回写候选清单"],
        manualGate: "验收人确认已交付范围、未覆盖范围和后续使用方式。"
      },
      {
        id: "classroom-artifact",
        label: "企业内训课堂产物",
        score: 16,
        summary: "来自企业内训课堂、岗位作业、试讲记录或团队点评。",
        codexUse: ["整理课堂作业亮点", "生成脱敏讲解稿", "提取常见岗位卡点"],
        manualGate: "主讲老师和企业授权岗位确认是否可脱敏复用。"
      },
      {
        id: "tool-feedback",
        label: "工具使用反馈",
        score: 18,
        summary: "企业使用轻量工具后反馈字段、权限、导入导出、异常处理或验收问题。",
        codexUse: ["汇总工具反馈", "生成维护 Sprint Brief", "整理测试样例"],
        manualGate: "产品负责人和企业资料 owner 确认字段、权限和测试样例边界。"
      },
      {
        id: "sop-material",
        label: "岗位 SOP 材料",
        score: 15,
        summary: "来自岗位制度、FAQ、内部指令库、培训复盘或新人上手资料。",
        codexUse: ["生成 SOP 目录", "整理 FAQ 分类", "输出指令治理清单"],
        manualGate: "企业管理层确认岗位制度、审批权限和内部推广范围。"
      },
      {
        id: "weak-evidence",
        label: "证据仍不完整",
        score: -18,
        summary: "只有口头反馈、截图缺失、验收人不明确或资料来源不完整。",
        codexUse: ["整理缺口清单", "生成补证据任务", "记录暂缓原因"],
        manualGate: "企业服务负责人确认不进入公开展示、案例或工具样例。"
      }
    ],
    acceptanceStates: [
      { id: "approved-internal", label: "内部验收通过", score: 16, status: "可内部回写", repair: "保留验收人、日期、交付范围和下次复查窗口。" },
      { id: "partial-accepted", label: "部分验收", score: 6, status: "先补证据", repair: "补未覆盖范围、企业责任和下一次验收条件。" },
      { id: "owner-review", label: "等待负责人确认", score: 2, status: "审批后回写", repair: "先让企业负责人或授权岗位确认用途和范围。" },
      { id: "disputed", label: "验收有争议", score: -20, status: "暂停回写", repair: "先关闭争议、返修交付物，再判断是否进入平台资产。" },
      { id: "no-owner", label: "没有验收人", score: -24, status: "不可回写", repair: "必须补验收人、责任人和授权记录。" }
    ],
    authorizationScopes: [
      {
        id: "internal-only",
        label: "仅平台内部复盘",
        score: 8,
        useScope: "只用于项目复盘、课程内部改进和维护日志，不进入公开课或销售证明。",
        requiredProof: "内部复盘记录和资料来源说明。"
      },
      {
        id: "anonymized-teaching",
        label: "可脱敏教学使用",
        score: 18,
        useScope: "可用于课堂讲解、老师备课、工具测试或内部案例片段，但不得暴露企业和客户身份。",
        requiredProof: "脱敏版本、授权范围、有效期和撤回方式。"
      },
      {
        id: "public-showcase",
        label: "可公开展示候选",
        score: 22,
        useScope: "可进入公开课、案例中心、资源中心或招生证明候选，但必须二次审批。",
        requiredProof: "企业授权人签字/确认、展示范围、渠道、有效期和撤回机制。"
      },
      {
        id: "enterprise-confidential",
        label: "企业保密资料",
        score: -8,
        useScope: "仅限企业项目内部，不进入公开页面、下载资源或通用工具样例。",
        requiredProof: "保密边界、访问权限和不可使用字段清单。"
      },
      {
        id: "not-authorized",
        label: "未授权复用",
        score: -30,
        useScope: "只能归档为项目内部记录，不能进入教学、推广、案例、资源或工具样例。",
        requiredProof: "未授权原因、归档位置和下次重审条件。"
      }
    ],
    reusableAssets: [
      {
        id: "case-fragment",
        label: "行业案例片段",
        score: 14,
        routePages: ["cases.html", "case-integrated-house.html", "enterprise.html#enterprise-delivery-writeback"],
        downloads: ["industry-case-sprint-command-center.csv", "industry-case-field-replacement-brief-template.md"],
        deliverables: ["脱敏业务片段", "字段差异", "讲解边界", "案例准入判断"],
        nextAction: "进入案例 Sprint，先确认是否能脱敏为行业案例片段。"
      },
      {
        id: "tool-sprint",
        label: "工具维护 Sprint",
        score: 16,
        routePages: ["tools.html", "playbook.html#playbook-tool-sprint-command-center", "enterprise.html#enterprise-delivery-writeback"],
        downloads: ["tool-sprint-command-center.csv", "tool-sprint-review-template.md", "tool-sample-validation-board.csv"],
        deliverables: ["工具需求", "字段样例", "测试用例", "验收修复项"],
        nextAction: "进入工具 Sprint，先锁定字段、样例和人工审批边界。"
      },
      {
        id: "prompt-sop",
        label: "内部 SOP / 指令库",
        score: 15,
        routePages: ["prompts.html", "playbook.html#playbook-data-governance", "enterprise.html#enterprise-delivery-writeback"],
        downloads: ["prompt-governance-board.csv", "prompt-performance-review-router.csv", "content-maintenance-log.csv"],
        deliverables: ["岗位 SOP", "内部指令", "FAQ 分类", "版本维护记录"],
        nextAction: "进入 SOP/指令治理，先确认岗位 owner 和更新节奏。"
      },
      {
        id: "resource-proof",
        label: "资源 / 招生证明候选",
        score: 12,
        routePages: ["resources.html", "enrollment.html", "marketing.html", "enterprise.html#enterprise-delivery-writeback"],
        downloads: ["platform-evidence-review-template.md", "public-showcase-authorization-note.md", "marketing-proof-campaign-router.csv"],
        deliverables: ["脱敏证明片段", "展示说明", "不夸大承诺边界", "审批记录"],
        nextAction: "进入公开展示审批，未完成授权前只保留内部草稿。"
      },
      {
        id: "renewal-brief",
        label: "续约 Brief 输入",
        score: 10,
        routePages: ["enterprise.html#enterprise-renewal-expansion", "playbook.html#playbook-commercial-offer-review"],
        downloads: ["enterprise-renewal-expansion-router.csv", "enterprise-renewal-brief-template.md", "commercial-offer-review-router.csv"],
        deliverables: ["验收摘要", "扩展目标", "未覆盖范围", "新范围审批"],
        nextAction: "进入续约与扩展路由台，先确认新范围和报价审批。"
      },
      {
        id: "hold-archive",
        label: "仅内部归档",
        score: -18,
        routePages: ["playbook.html#playbook-maintenance-log-builder", "enterprise.html#enterprise-delivery-writeback"],
        downloads: ["platform-maintenance-log-builder.csv", "platform-maintenance-log-release-note-template.md"],
        deliverables: ["暂缓原因", "补证据清单", "责任人", "重审日期"],
        nextAction: "只写入维护日志，补授权和验收证据前不对外复用。"
      }
    ],
    businessImpacts: [
      { id: "team-efficiency", label: "团队效率证据", score: 12, proof: "能说明字段统一、交接减少、作业可验收或岗位协同改善。", owner: "企业服务负责人" },
      { id: "sales-proof", label: "招生/销售证明", score: 9, proof: "能说明课程或企业服务的交付过程，但不得承诺成交、利润或结果。", owner: "运营负责人" },
      { id: "tool-demand", label: "工具需求强", score: 14, proof: "反馈集中在字段、权限、批量处理、导入导出或异常检查。", owner: "产品负责人" },
      { id: "course-repair", label: "课程返修信号", score: 6, proof: "暴露了课堂讲法、作业说明或工具使用门槛不足。", owner: "课程负责人" },
      { id: "no-impact", label: "业务影响不清", score: -12, proof: "无法说明交付物如何被岗位使用或对流程有什么改变。", owner: "企业项目负责人" }
    ],
    riskBoundaries: [
      {
        id: "standard-masking",
        label: "常规脱敏边界",
        penalty: 0,
        rule: "去除企业名称、客户信息、价格、成本、合同、联系人和内部审批细节后可进入下一步评审。",
        reviewers: ["企业服务负责人", "内容负责人"]
      },
      {
        id: "data-sensitive",
        label: "数据敏感",
        penalty: 18,
        rule: "涉及真实客户、成本、价格、合同、联系方式或内部系统字段时，只能在授权范围内使用。",
        reviewers: ["企业资料 owner", "数据治理负责人", "交付负责人"]
      },
      {
        id: "commercial-claim",
        label: "商业承诺风险",
        penalty: 14,
        rule: "不能把企业满意、效率改善或阶段验收包装成成交、利润、ROI 或业绩承诺。",
        reviewers: ["运营负责人", "销售负责人", "企业服务负责人"]
      },
      {
        id: "technical-scope",
        label: "技术范围风险",
        penalty: 10,
        rule: "导入导出、权限、系统对接、批量处理和自动化规则必须经过产品/技术评审。",
        reviewers: ["产品负责人", "开发负责人", "企业项目负责人"]
      },
      {
        id: "legal-contract",
        label: "合同/法务风险",
        penalty: 24,
        rule: "涉及合同、法务、税务、报关、付款、违约或客户承诺时，不进入公开展示和自动化承诺。",
        reviewers: ["企业负责人", "财务/法务", "企业服务负责人"]
      }
    ],
    operatingRules: [
      "企业交付证据默认不公开，先确认验收人、授权范围、脱敏版本和撤回方式。",
      "可公开展示候选必须二次审批，不能把企业内部资料直接放入案例、资源、招生页或工具样例。",
      "Codex 可以整理摘要、字段、讲解稿和回写任务，但不能替代企业授权、商业承诺、法务和技术范围判断。",
      "每次回写都要留下目标页面、下载资产、负责人、人工闸口和下次复查窗口。",
      "未授权、验收争议、数据敏感或商业承诺风险未关闭时，只能内部归档或补证据。"
    ]
  },
  renewalExpansionRouter: {
    title: "企业续约与扩展路由台",
    description:
      "企业项目验收后，用交付信号、岗位采纳、证据质量、扩展目标和风险模式判断下一步：复制到第二条产品线、进入工具维护、启动 SOP/知识库共建、长期顾问复盘，或暂缓续约。",
    exportFilename: "enterprise-renewal-brief-output.md",
    downloads: [
      {
        label: "下载企业续约扩展路由表 CSV",
        href: "./downloads/enterprise-renewal-expansion-router.csv",
        format: "CSV",
        note: "用于企业项目验收后判断续约、扩展、工具维护、SOP 共建或暂缓。"
      },
      {
        label: "下载企业续约 Brief 模板 MD",
        href: "./downloads/enterprise-renewal-brief-template.md",
        format: "Markdown",
        note: "用于记录已交付证据、扩展路径、人工确认门槛和下一轮复盘窗口。"
      }
    ],
    defaults: {
      deliverySignal: "accepted-line",
      adoptionStatus: "core-team",
      evidenceQuality: "verified",
      expansionTarget: "second-line",
      riskMode: "standard"
    },
    deliverySignals: [
      {
        id: "accepted-line",
        label: "样板线已验收",
        score: 24,
        summary: "首条样板产品或样板订单已经完成字段、作业、工具或 SOP 验收。",
        codexUse: ["整理验收摘要", "生成第二条线字段差异", "草拟复制计划"],
        manualGate: "企业确认已交付范围、未覆盖范围和新产品线资料授权。"
      },
      {
        id: "tool-feedback",
        label: "工具已上线但有新需求",
        score: 18,
        summary: "轻量工具或表格工作台已被使用，企业提出导入导出、权限、更多字段或异常处理。",
        codexUse: ["汇总工具反馈", "整理版本需求", "生成维护 Sprint Brief"],
        manualGate: "产品负责人和企业负责人确认新版本范围、数据权限和维护责任。"
      },
      {
        id: "sop-demand",
        label: "岗位希望持续沉淀 SOP",
        score: 20,
        summary: "内训后多个岗位希望继续沉淀 SOP、FAQ、指令库和新人上手路径。",
        codexUse: ["整理 SOP 草稿", "生成 FAQ 分类", "汇总岗位反馈"],
        manualGate: "企业管理层确认 SOP 负责人、更新节奏和内部推广方式。"
      },
      {
        id: "weak-proof",
        label: "使用证据不足",
        score: -18,
        summary: "项目已交付，但企业使用弱、负责人缺失或反馈集中在未覆盖范围。",
        codexUse: ["整理未使用原因", "生成补证据清单", "记录暂缓原因"],
        manualGate: "企业和销售共同确认不夸大续约价值，先补使用证据。"
      }
    ],
    adoptionStatuses: [
      { id: "core-team", label: "核心岗位已使用", score: 18, note: "适合进入扩展或续约。", repair: "继续记录岗位使用证据和负责人。" },
      { id: "partial-team", label: "少数岗位试用", score: 7, note: "适合先做小范围扩展。", repair: "补岗位培训、内部推广和使用反馈。" },
      { id: "owner-only", label: "只有负责人认可", score: -6, note: "暂不建议扩大范围。", repair: "先让实际岗位完成一次可验收使用。" },
      { id: "not-used", label: "交付后未使用", score: -24, note: "优先复盘原因。", repair: "先明确未使用原因、维护人和内部阻力。" }
    ],
    evidenceQualities: [
      { id: "verified", label: "有验收与使用记录", score: 16, note: "有扩展依据。", repair: "进入续约前补齐新范围授权。" },
      { id: "anecdotal", label: "只有口头反馈", score: 2, note: "需要补证据。", repair: "补截图、作业、工具记录或岗位反馈。" },
      { id: "unclear", label: "证据不清", score: -16, note: "不适合报价续约。", repair: "先回到验收清单和维护日志。" }
    ],
    expansionTargets: [
      {
        id: "second-line",
        label: "复制到第二条产品线",
        score: 14,
        routePages: ["enterprise.html", "cases.html", "tools.html"],
        deliverables: ["第二条产品线资料成熟度检查", "字段差异表", "复制课表", "新样例验收"],
        downloadAssets: ["enterprise-service-delivery-plan.csv", "industry-case-sprint-command-center.csv", "tool-sprint-command-center.csv"],
        nextAction: "生成第二条产品线复制 Brief，先跑资料成熟度检查。"
      },
      {
        id: "tool-maintenance",
        label: "工具维护升级",
        score: 12,
        routePages: ["enterprise.html", "tools.html", "playbook.html#playbook-tool-sprint-command-center"],
        deliverables: ["工具版本需求", "字段和权限范围", "维护 Sprint", "验收清单"],
        downloadAssets: ["tool-sprint-command-center.csv", "tool-sprint-review-template.md", "enterprise-project-acceptance-checklist.md"],
        nextAction: "进入工具维护 Sprint，先锁定字段和权限范围。"
      },
      {
        id: "sop-retainer",
        label: "岗位 SOP / 知识库共建",
        score: 15,
        routePages: ["enterprise.html", "prompts.html", "classroom.html", "playbook.html"],
        deliverables: ["岗位 SOP 目录", "FAQ 知识库", "内部指令治理", "月度复盘机制"],
        downloadAssets: ["enterprise-training-plan-mapper.csv", "prompt-governance-board.csv", "content-maintenance-log.csv"],
        nextAction: "进入月度 SOP 共建，先确定岗位目录和更新节奏。"
      },
      {
        id: "hold",
        label: "暂缓续约",
        score: -20,
        routePages: ["enterprise.html", "playbook.html"],
        deliverables: ["未使用原因", "补证据清单", "下次复盘窗口"],
        downloadAssets: ["enterprise-project-acceptance-checklist.md", "release-writeback-note-template.md"],
        nextAction: "先补使用证据和负责人，不进入续约报价。"
      }
    ],
    riskModes: [
      {
        id: "standard",
        label: "常规企业边界",
        penalty: 0,
        rule: "可讨论复制、维护或 SOP 共建，但仍需确认新范围和验收证据。",
        reviewers: ["企业服务负责人", "企业负责人"]
      },
      {
        id: "data-permission",
        label: "数据权限风险",
        penalty: -8,
        rule: "涉及导入导出、权限、企业内部系统或更多真实数据时，先确认数据边界。",
        reviewers: ["产品负责人", "企业授权岗位", "交付负责人"]
      },
      {
        id: "scope-change",
        label: "范围变更风险",
        penalty: -10,
        rule: "新产品线、新岗位或新系统范围必须重新确认报价、周期和验收责任。",
        reviewers: ["企业服务负责人", "销售负责人", "企业管理层"]
      },
      {
        id: "weak-adoption",
        label: "采纳不足风险",
        penalty: -18,
        rule: "实际岗位未使用或证据不足时，不能直接推动续约或扩大承诺。",
        reviewers: ["运营负责人", "企业项目负责人"]
      }
    ],
    decisions: [
      {
        id: "expand",
        minScore: 82,
        label: "进入扩展续约",
        summary: "交付证据、岗位采纳和扩展目标都清楚，可以进入下一轮产品线、工具或 SOP 共建。",
        gate: "续约前确认新范围、新报价、新验收人和资料授权。"
      },
      {
        id: "repair",
        minScore: 56,
        label: "先补证据再报价",
        summary: "已有续约价值，但使用证据、岗位采纳或新范围仍需补齐。",
        gate: "先补使用记录、岗位反馈、资料授权和扩展范围。"
      },
      {
        id: "hold",
        minScore: 0,
        label: "暂缓续约",
        summary: "当前证据不足或风险过高，先回到验收复盘和补证据，不进入续约报价。",
        gate: "不得把未使用或未覆盖范围包装成续约价值。"
      }
    ],
    operatingRules: [
      "企业续约必须基于已交付证据和真实使用记录，不能只基于满意口头反馈。",
      "第二条产品线、工具维护和 SOP 共建都属于新范围，必须重新确认报价、授权、验收和维护责任。",
      "Codex 可整理复盘、生成差异表和草拟计划，但不能替企业决定预算、岗位责任或系统边界。",
      "续约暂缓也要形成复盘记录，把未使用原因回写到企业服务、工具 Sprint 或课程交付改进。"
    ]
  },
  implementationFlow: [
    {
      stage: "01",
      title: "流程访谈",
      owner: "企业负责人 + 业务骨干",
      input: "现有业务流程、岗位分工、常用表格、典型客户问题",
      output: "流程地图和重复劳动清单"
    },
    {
      stage: "02",
      title: "样板产品选择",
      owner: "课程顾问 + 企业业务负责人",
      input: "一个主推产品、一类目标客户、一组真实询盘或订单",
      output: "企业专属演示案例"
    },
    {
      stage: "03",
      title: "课程与工具共建",
      owner: "老师 + 开发负责人",
      input: "产品参数、报价字段、订单节点、单证样例",
      output: "训练课、工具原型、指令库和作业"
    },
    {
      stage: "04",
      title: "团队训练与复盘",
      owner: "业务、跟单、主管共同参与",
      input: "课堂操作、岗位作业、真实工作反馈",
      output: "岗位 SOP、使用边界和下一轮改造计划"
    }
  ],
  readinessChecklist: [
    {
      title: "企业需要先准备的资料",
      items: ["主推产品资料", "典型客户类型", "近期询盘样例", "报价表或成本表", "订单跟进表", "PI/CI/PL 样例"]
    },
    {
      title: "适合优先启动的企业",
      items: ["外贸团队已有稳定产品", "重复询盘和报价较多", "老板或主管愿意统一流程", "能提供脱敏样例用于训练"]
    },
    {
      title: "暂不适合直接定制的情况",
      items: ["产品和客户方向频繁变化", "没有任何历史业务资料", "希望 AI 自动承诺价格或交期", "不愿安排业务人员参与确认"]
    },
    {
      title: "诊断后确认的范围",
      items: ["优先改造流程", "工具字段边界", "人工审批节点", "内训岗位范围", "后续维护负责人"]
    }
  ],
  riskBoundaries: [
    "Codex 不替企业自动决定价格、利润率、付款条件或最终报价。",
    "Codex 不替代报关、税务、法务、银行审单和目的国合规判断。",
    "工具定制先以轻量工作台和字段标准化为主，不承诺一次性替代 ERP、CRM 或财务系统。",
    "企业内训必须使用脱敏资料，客户隐私、价格成本和合同信息由企业自行管理。",
    "所有对客户发出的正式邮件、报价、PI、合同和交期承诺，必须由企业负责人或授权岗位确认。"
  ],
  faqs: [
    {
      question: "企业服务和普通课程有什么区别？",
      answer: "普通课程使用统一案例训练学员，企业服务会基于企业自己的产品、客户、表格和岗位分工重建流程。"
    },
    {
      question: "能不能直接帮公司做一个完整系统？",
      answer: "第一步通常不建议直接做大系统。先通过诊断确认字段、流程和人工审批点，再决定做轻量工作台还是对接现有系统。"
    },
    {
      question: "企业资料比较敏感怎么办？",
      answer: "企业可以先提供脱敏样例。课程和工具只需要字段结构、流程逻辑和典型问题，不需要公开真实客户隐私。"
    },
    {
      question: "多久能看到效果？",
      answer: "如果企业能提供样板产品和典型询盘，通常可以先在 1-2 周内完成诊断和样板演示，再决定后续内训或工具定制。"
    }
  ]
};

window.TrainingPlatformData.enterpriseServices = window.TrainingPlatformData.enterprise.servicePackages;
