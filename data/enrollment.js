window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.enrollment = {
  metrics: [
    {
      value: "3",
      label: "报名入口",
      detail: "免费资料预习、系统课学习、企业流程诊断三条路径分流。"
    },
    {
      value: "6",
      label: "转化阶段",
      detail: "从内容触达、资料领取、证据建立到报名确认和未成交培育。"
    },
    {
      value: "12",
      label: "系统课模块",
      detail: "覆盖产品资料、客户开发、询盘、报价、订单、单证和复盘。"
    },
    {
      value: "7",
      label: "首批工具输出",
      detail: "产品资料、客户库、询盘识别、报价测算、订单跟进、单证检查和付款风险矩阵。"
    },
    {
      value: "6",
      label: "结课成果包",
      detail: "基础资料、客户开发、询盘报价、订单单证、风险复购和展示复盘。"
    },
    {
      value: "1",
      label: "完整演示案例",
      detail: "以集成房屋出口项目贯穿课程讲解、作业和工具演示。"
    }
  ],
  audiencePaths: [
    {
      segment: "外贸新人",
      pain: "不知道如何整理产品资料、读询盘、写回复和跟进客户。",
      path: "先领取重复劳动自测表，再进入系统课基础模块。",
      outcome: "能搭建自己的产品资料表、询盘识别表和基础客户跟进表。",
      bestEntry: "免费资料 + 系统实战课"
    },
    {
      segment: "有经验业务员",
      pain: "每天做大量重复整理、报价、跟单和单证检查，时间被事务占满。",
      path: "直接进入系统实战课，重点学习报价、订单和单证工具化。",
      outcome: "把个人经验沉淀成可复用字段、模板、指令和检查清单。",
      bestEntry: "系统实战课"
    },
    {
      segment: "外贸主管 / 老板",
      pain: "团队每个人做法不一致，新人培训慢，报价和单证风险依赖个人经验。",
      path: "先看课程体系和企业服务，再决定团队内训或流程诊断。",
      outcome: "形成团队 SOP、岗位作业、工具字段和统一风险边界。",
      bestEntry: "企业诊断 / 团队内训"
    }
  ],
	  packages: [
    {
      name: "免费预习路径",
      type: "低门槛体验",
      fit: "适合还在观望、想先判断课程是否实用的学员。",
      includes: ["重复劳动自测表", "集成房屋工具包样例", "10 分钟询盘识别演示", "报价费用项清单"],
      deliverables: ["一份自测结果", "一套样例资料", "一个可复制询盘拆解思路"],
      nextStep: "完成预习后进入系统实战课或预约企业诊断。"
    },
    {
      name: "系统实战课",
      type: "核心课程",
      fit: "适合希望系统掌握 Codex 外贸业务工作流的个人学员。",
      includes: ["12 个课程模块", "集成房屋完整案例", "7 个核心工具演示", "指令库", "课堂作业"],
      deliverables: ["产品资料工作台", "客户开发字段库", "询盘回复模板", "报价检查表", "订单跟进表", "单证检查表", "付款风险矩阵"],
      nextStep: "完成课程后可把自己的行业资料替换进同一套流程。"
    },
    {
      name: "企业训练营",
      type: "团队升级",
      fit: "适合希望统一团队流程、沉淀 SOP 和定制工具的外贸企业。",
      includes: ["流程诊断", "企业产品案例课", "岗位训练", "工具原型", "SOP 共建"],
      deliverables: ["企业流程地图", "岗位 SOP", "企业内部指令库", "轻量工作台原型", "后续改造路线"],
      nextStep: "先做流程诊断，再确认内训和工具定制范围。"
    }
	  ],
	  salesDesk: {
	    leadScoring: [
	      {
	        level: "A 类线索",
	        signal: "已经有真实产品资料、近期询盘、报价表或团队流程问题。",
	        route: "系统实战课 / 企业诊断",
	        nextAction: "引导对方提交一份脱敏询盘或报价表，安排 15 分钟需求确认。",
	        boundary: "不承诺立即成交或自动替代业务判断。"
	      },
	      {
	        level: "B 类线索",
	        signal: "认可 AI 提效，但还不清楚自己卡在客户开发、询盘、报价还是单证。",
	        route: "免费资料 + 试听课",
	        nextAction: "先发重复劳动自测表，再推荐观看询盘识别演示。",
	        boundary: "不要直接推高客单价课程，先帮助对方定位问题。"
	      },
	      {
	        level: "C 类线索",
	        signal: "只想要万能提示词、自动找客户、自动报价或低成本代运营。",
	        route: "资料预习 / 暂缓报名",
	        nextAction: "解释课程边界，推荐先看免费资料判断是否匹配。",
	        boundary: "不迎合不现实期待，不承诺自动成交和违规获客。"
	      }
	    ],
	    consultationQuestions: [
	      {
	        topic: "业务阶段",
	        question: "你现在最想先优化客户开发、询盘回复、报价、跟单还是单证检查？",
	        reason: "判断对方应该进入哪一节试听或哪个课程模块。",
	        route: "对应课程模块和工具演示"
	      },
	      {
	        topic: "资料准备",
	        question: "你是否有一份可以脱敏的产品资料、询盘、报价表或订单表？",
	        reason: "确认学员能否在课堂上替换成自己的真实业务场景。",
	        route: "有资料进系统课，无资料先做预习资料包"
	      },
	      {
	        topic: "风险意识",
	        question: "你能否接受价格、交期、付款、认证、清关和法务必须人工确认？",
	        reason: "筛掉希望 AI 自动承诺关键商业事项的错误预期。",
	        route: "能接受再报名，不接受则先解释课程边界"
	      },
	      {
	        topic: "团队场景",
	        question: "这是你个人学习，还是团队想统一流程、SOP 和工具字段？",
	        reason: "区分个人系统课和企业流程诊断。",
	        route: "个人进系统课，团队进企业服务"
	      }
	    ],
	    followUpScripts: [
	      {
	        scenario: "领取资料后未报名",
	        message: "你可以先用自测表标出每天最耗时的 3 个重复动作，再对照课程模块判断先学哪一段。",
	        cta: "发送自测表 + 询盘演示课链接",
	        boundary: "不催促报名，先帮助对方完成问题定位。"
	      },
	      {
	        scenario: "看完试听课仍犹豫",
	        message: "如果你有自己的询盘或报价表，可以把敏感信息去掉，用同一套结构判断能否复制到你的产品。",
	        cta: "引导查看集成房屋案例和工具中心",
	        boundary: "不承诺适合所有行业，先做场景匹配。"
	      },
	      {
	        scenario: "企业客户咨询",
	        message: "企业团队建议先做流程诊断，确认岗位、字段、审批边界和样板产品，再决定内训或工具定制范围。",
	        cta: "预约企业流程诊断",
	        boundary: "不在未诊断前承诺完整系统、价格效果或替代 ERP/CRM。"
	      }
	    ]
	  },
	  trialFollowupDownloads: [
	    {
	      label: "下载试听课转化分流表 CSV",
	      href: "./downloads/trial-class-conversion-routing-board.csv",
	      format: "CSV",
	      note: "用于试听课报名、课中互动、课后咨询、系统课转化、企业诊断和未转化培育。"
	    },
	    {
	      label: "下载试听课 Brief 模板 MD",
	      href: "./downloads/trial-class-brief-template.md",
	      format: "Markdown",
	      note: "用于记录试听对象、演示重点、证据需求、顾虑回应、课后分流和人工边界。"
	    }
	  ],
	  trialFollowupDesk: [
	    {
	      stage: "01",
	      title: "试听前确认用户画像",
	      trigger: "用户从首页、资源包、社群或公开课报名进入试听。",
	      codexAction: "Codex 根据报名来源、角色、痛点和资料状态生成试听课 Brief 草稿。",
	      humanAction: "课程顾问确认用户是否有真实外贸场景，不要求未脱敏资料。",
	      evidence: "首页试听课路径、资源领取记录、用户痛点标签。",
	      nextCTA: "发送试听课入口和准备说明。",
	      owner: "市场运营 + 课程顾问",
	      boundary: "试听前不承诺课程一定适合、不要求提交敏感客户或价格信息。"
	    },
	    {
	      stage: "02",
	      title: "课中用集成房屋建立可信演示",
	      trigger: "用户进入 10 分钟询盘识别、报价检查或产品资料成熟度演示。",
	      codexAction: "Codex 按集成房屋样板生成已知需求、缺失字段、补问问题、风险点和输出草稿。",
	      humanAction: "主讲老师解释哪些输出可复用，哪些必须人工确认。",
	      evidence: "集成房屋案例页、工具中心、自动化边界。",
	      nextCTA: "邀请用户对照自己的产品或询盘判断能否替换。",
	      owner: "主讲老师",
	      boundary: "课中不演示 AI 直接确认最终价格、付款、合规、合同或清关结论。"
	    },
	    {
	      stage: "03",
	      title: "课后 24 小时分流",
	      trigger: "用户看完试听后表达兴趣、提出顾虑或仍未明确路径。",
	      codexAction: "Codex 汇总课中互动和顾虑，生成资料培育、系统课咨询、企业诊断或边界教育建议。",
	      humanAction: "课程顾问确认推荐路径，避免把资料不足或边界意识不清的用户直接推入高客单路径。",
	      evidence: "报名路径页、证据回应台、学员成果证据总览。",
	      nextCTA: "进入报名咨询、提交脱敏样例，或领取补充资料。",
	      owner: "课程顾问",
	      boundary: "不得用虚假稀缺、夸大收益或自动成交话术催促报名。"
	    },
	    {
	      stage: "04",
	      title: "系统课咨询与入班准备",
	      trigger: "用户已有产品资料、询盘、报价或明确重复劳动问题，准备判断系统课。",
	      codexAction: "Codex 生成报课方案 Brief、资料准备清单和首课任务草稿。",
	      humanAction: "人工确认课程包、开课时间、价格、付款、发票、资料脱敏和学习边界。",
	      evidence: "报课方案 Brief 生成器、报名入班交接台、学员工作台。",
	      nextCTA: "确认报名或进入入班交接。",
	      owner: "课程顾问 + 班主任",
	      boundary: "付款、发票、退款、优惠和排课必须人工确认。"
	    },
	    {
	      stage: "05",
	      title: "企业线索转诊断",
	      trigger: "用户代表团队或企业，关注 SOP、岗位训练、工具共建和服务范围。",
	      codexAction: "Codex 整理诊断前问题、资料清单和企业训练模块映射。",
	      humanAction: "企业服务负责人确认授权材料、参与岗位、诊断范围和下一步会议。",
	      evidence: "企业服务页、企业诊断资料清单、自动化地图。",
	      nextCTA: "预约企业诊断前沟通。",
	      owner: "企业服务负责人",
	      boundary: "未诊断前不承诺项目报价、开发周期、系统替代范围或业绩结果。"
	    },
	    {
	      stage: "06",
	      title: "未转化培育与复盘",
	      trigger: "用户看完试听未报名、未提交资料或暂时不匹配。",
	      codexAction: "Codex 按未转化原因生成 7/14/30 天内容培育标签和跟进素材。",
	      humanAction: "运营判断是否继续培育、暂停触达或邀请下一次公开课。",
	      evidence: "推广运营页、资源中心、案例中心。",
	      nextCTA: "发送新案例、工具更新或下一场公开课提醒。",
	      owner: "市场运营",
	      boundary: "不反复催单，不对暂缓用户制造焦虑或夸大紧迫感。"
	    }
	  ],
	  conversionCommandDownloads: [
	    {
	      label: "下载招生转化总控台 CSV",
	      href: "./downloads/enrollment-conversion-command-center.csv",
	      format: "CSV",
	      note: "用于把内容触达、资源领取、咨询分流、报名确认和未成交培育放进同一张运营表。"
	    },
	    {
	      label: "下载招生复盘检查清单 MD",
	      href: "./downloads/enrollment-conversion-review-checklist.md",
	      format: "Markdown",
	      note: "用于每周复盘线索质量、页面证据、Codex 自动化边界和人工确认动作。"
	    }
	  ],
	  conversionCommandCenter: [
	    {
	      stage: "01",
	      title: "内容触达到资源领取",
	      userSignal: "用户来自短视频、社群、公开课或朋友圈内容，关注重复劳动、询盘回复、报价漏项或团队 SOP 问题。",
	      evidencePage: "推广运营 / 资源中心",
	      codexAutomation: "Codex 辅助把评论、私信和公开课提问整理成痛点标签，并匹配合适的资源入口。",
	      humanAction: "运营确认用户身份、业务阶段和是否有真实外贸场景，不直接推高客单价课程。",
	      nextCTA: "领取重复劳动自测表、询盘演示课或集成房屋案例字段包。",
	      reviewMetric: "内容 CTA 点击率、资源领取率、有效问题回复率。",
	      manualBoundary: "不承诺领取资料后就能自动开发客户、自动成交或自动报价。",
	      owner: "市场运营"
	    },
	    {
	      stage: "02",
	      title: "资料领取后确认痛点",
	      userSignal: "用户已经下载资料，但尚未明确自己最需要优化客户开发、询盘、报价、订单还是单证。",
	      evidencePage: "资源中心 / 自动化地图",
	      codexAutomation: "Codex 按下载资料、用户回复和业务关键词生成初步分层建议。",
	      humanAction: "课程顾问追问真实产品、近期询盘或报价困扰，并记录是否适合进入试听或系统课。",
	      nextCTA: "发送对应课程模块、自动化边界和 10 分钟询盘识别演示课。",
	      reviewMetric: "24 小时回复率、真实痛点确认率、试听课进入率。",
	      manualBoundary: "不把未确认痛点的用户强行归入系统课或企业诊断。",
	      owner: "社群运营 + 课程顾问"
	    },
	    {
	      stage: "03",
	      title: "页面证据和试听建立信任",
	      userSignal: "用户担心课程只是讲概念、行业不适配、不会编程或 AI 输出不可靠。",
	      evidencePage: "课程交付中心 / 案例中心 / 工具中心 / 学员工作台",
	      codexAutomation: "Codex 根据顾虑自动组合页面证据、案例链接、资源文件和回应草稿。",
	      humanAction: "课程顾问确认证据是否真实匹配对方行业，不夸大集成房屋案例对所有行业的适配程度。",
	      nextCTA: "邀请用户提交一条脱敏询盘、报价字段或产品资料做场景匹配。",
	      reviewMetric: "证据页面点击率、试听完课率、脱敏样例提交率。",
	      manualBoundary: "不承诺所有行业都能直接套用同一价格、物流、认证和清关口径。",
	      owner: "课程顾问 + 主讲老师"
	    },
	    {
	      stage: "04",
	      title: "咨询分流和路径推荐",
	      userSignal: "用户已经表达学习意向，但不确定应该进入免费资料、系统课、企业诊断还是暂缓报名。",
	      evidencePage: "报名路径 / 企业服务",
	      codexAutomation: "Codex 汇总咨询问答、资料准备度、边界意识和团队场景，生成建议路线和跟进摘要。",
	      humanAction: "课程顾问使用分流诊断器确认最终路径，并把不匹配用户转入边界教育或内容培育。",
	      nextCTA: "个人用户进入系统实战课，企业用户预约 15 分钟诊断前沟通。",
	      reviewMetric: "分流准确率、A/B/C 线索比例、无效承诺拦截数。",
	      manualBoundary: "最终是否报名、是否企业立项和服务范围必须由人工确认。",
	      owner: "课程顾问"
	    },
	    {
	      stage: "05",
	      title: "报名或企业预约前确认",
	      userSignal: "用户准备付款、进班或预约企业诊断，需要确认学习产出、资料准备和服务边界。",
	      evidencePage: "学员工作台 / 企业服务 / 运营指南",
	      codexAutomation: "Codex 生成报名前准备清单、学员资料清单或企业诊断资料清单。",
	      humanAction: "人工确认价格、发票、排课、服务范围、资料脱敏和关键商业判断责任。",
	      nextCTA: "完成报名入班、提交开课资料，或预约企业诊断会。",
	      reviewMetric: "报名完成率、预约到会率、资料准备完成率。",
	      manualBoundary: "付款、合同、发票、企业服务范围和项目价格不能由 AI 自动确认。",
	      owner: "班主任 + 企业服务销售"
	    },
	    {
	      stage: "06",
	      title: "未转化用户培育与复盘",
	      userSignal: "用户未报名、未到会或暂时不匹配，但仍关注内容、资源或案例更新。",
	      evidencePage: "推广运营 / 资源中心 / 案例中心",
	      codexAutomation: "Codex 按未转化原因生成 7 天、14 天和 30 天内容培育标签与复盘摘要。",
	      humanAction: "运营判断是否继续培育、暂停跟进或邀请参加下一场公开课，不反复催单。",
	      nextCTA: "发送新案例、工具更新、公开课提醒或企业资料清单。",
	      reviewMetric: "7/14/30 天再互动率、二次预约率、退订或投诉率。",
	      manualBoundary: "不对暂缓用户过度触达，不使用虚假稀缺、夸大收益或不合规获客话术。",
	      owner: "市场运营 + 课程顾问"
	    }
	  ],
	  proofDeskDownloads: [
	    {
	      label: "下载报名咨询证据表 CSV",
	      href: "./downloads/enrollment-consultation-evidence-map.csv",
	      format: "CSV",
	      note: "用于课程顾问把常见顾虑对应到页面证据、资源和承诺边界。"
	    },
	    {
	      label: "下载顾虑回应模板 MD",
	      href: "./downloads/enrollment-objection-response-template.md",
	      format: "Markdown",
	      note: "用于社群私聊、试听课结尾、企业咨询和销售复盘。"
	    }
	  ],
	  proofDesk: [
	    {
	      concern: "担心课程只是讲 AI 概念",
	      evidence: "展示课程模块、课堂执行台、学员交付物和集成房屋完整案例。",
	      proofPage: "课程交付中心",
	      proofHref: "./course.html",
	      response: "课程不是按软件菜单讲，而是按产品资料、客户开发、询盘、报价、订单、单证和付款风险交付工具输出。",
	      nextAction: "让用户先看 12 模块交付蓝图和 10 分钟询盘演示课。",
	      boundary: "不承诺听完就自动成交，承诺的是可复用工作流和作业验收。"
	    },
	    {
	      concern: "担心自己的行业不是集成房屋",
	      evidence: "展示行业案例复制包和学员成果包中的可替换字段。",
	      proofPage: "案例中心",
	      proofHref: "./cases.html",
	      response: "集成房屋是第一套完整演示案例，训练的是产品资料、客户、询盘、报价、订单、单证和风险边界字段结构。",
	      nextAction: "引导用户下载行业案例复制包，判断自己产品能否按同一结构替换。",
	      boundary: "不保证所有行业完全一致，特殊认证、清关和合规必须行业专业确认。"
	    },
	    {
	      concern: "担心不会编程或不会开发工具",
	      evidence: "展示工具中心的字段、输入输出、静态预览和开发规格模板。",
	      proofPage: "工具中心",
	      proofHref: "./tools.html",
	      response: "第一阶段训练的是用 Codex 整理字段、生成模板、检查冲突和沉淀规格，不要求学员写代码。",
	      nextAction: "让用户先完成重复劳动自测表和一个工具规格模板。",
	      boundary: "复杂交互工具后续可开发，但课程不把编程能力作为报名前提。"
	    },
	    {
	      concern: "担心 AI 输出不可靠",
	      evidence: "展示人工确认边界、作业评分表、单证检查和风险矩阵。",
	      proofPage: "自动化地图",
	      proofHref: "./automation.html",
	      response: "课程会明确 Codex 负责整理、生成草稿、检查冲突和提示风险，最终报价、交期、付款和合规仍由人工确认。",
	      nextAction: "引导查看自动化边界和作业评分表中的人工确认项。",
	      boundary: "不允许把 AI 输出直接当作最终报价、合同、单证或法律判断。"
	    },
	    {
	      concern: "担心学完没有具体成果",
	      evidence: "展示学员工作台的 7 个作业交付物和结课工具包。",
	      proofPage: "学员工作台",
	      proofHref: "./learning.html",
	      response: "结课不是交聊天记录，而是打包成基础资料、客户开发、询盘报价、订单单证、风险复购和展示复盘成果包。",
	      nextAction: "让用户查看结课打包清单，判断自己能准备哪些业务资料。",
	      boundary: "成果质量取决于真实业务输入和返修，不能用虚构资料冒充交付。"
	    },
	    {
	      concern: "企业客户担心个人学习无法落到团队",
	      evidence: "展示企业诊断分流器、资料收集清单、团队内训和 SOP 服务包。",
	      proofPage: "企业服务",
	      proofHref: "./enterprise.html",
	      response: "团队客户先做流程诊断，确认岗位、字段、审批边界和样板订单，再决定内训或工具定制。",
	      nextAction: "预约诊断前沟通，并收集一份脱敏产品资料、询盘或订单样例。",
	      boundary: "未诊断前不承诺系统开发范围、周期、价格效果或替代 ERP/CRM。"
	    }
	  ],
	  outcomeProofDownloads: [
	    {
	      label: "下载学员成果证据总览 CSV",
	      href: "./downloads/enrollment-outcome-proof-board.csv",
	      format: "CSV",
	      note: "用于课程顾问说明结课成果、验收证据、可展示范围和人工确认边界。"
	    }
	  ],
	  outcomeProofBoard: [
	    {
	      packageName: "基础资料包",
	      sourceHomework: "产品资料工作台",
	      proofSignal: "产品参数、配置、包装、认证、安装范围和售后问题被整理成 Ready / Confirm / Missing 状态。",
	      visibleEvidence: "产品资料字段表、缺失资料清单、英文资料草稿和后续工具输入字段。",
	      linkedPage: "学员工作台",
	      linkedHref: "./learning.html",
	      salesUse: "回答“我资料不全能不能学”的顾虑，说明先补齐资料再做客户开发和报价。",
	      displayBoundary: "公开展示时隐藏供应商、真实底价、内部图纸和未公开认证文件。"
	    },
	    {
	      packageName: "客户开发包",
	      sourceHomework: "客户线索跟进器",
	      proofSignal: "目标客户被拆成客户类型、项目场景、需求阶段、A/B/C 等级和下一步动作。",
	      visibleEvidence: "客户字段库、分级规则、开发信角度、跟进节奏和可复制客户记录模板。",
	      linkedPage: "工具中心",
	      linkedHref: "./tools.html",
	      salesUse: "回答“课程是不是只教写开发信”的顾虑，展示先有客户资产再写触达内容。",
	      displayBoundary: "不得公开真实客户名称、邮箱、联系人、成交状态和未授权沟通记录。"
	    },
	    {
	      packageName: "询盘报价包",
	      sourceHomework: "询盘识别工具 + 报价测算器",
	      proofSignal: "原始询盘能拆成已知需求、缺失字段、补问问题、费用项、利润口径和报价风险。",
	      visibleEvidence: "询盘拆解表、英文补问邮件、FOB/CIF 费用项清单、DDP 风险提醒和报价前人工确认项。",
	      linkedPage: "集成房屋案例",
	      linkedHref: "./case-integrated-house.html",
	      salesUse: "回答“AI 输出会不会乱报价”的顾虑，强调 Codex 先整理结构，价格和承诺人工确认。",
	      displayBoundary: "报价样例只能展示结构，不展示真实利润、底价、客户付款条件和供应链成本。"
	    },
	    {
	      packageName: "订单单证包",
	      sourceHomework: "订单跟进看板 + 单证检查表",
	      proofSignal: "订单节点、负责人、计划日期、实际日期、异常原因和 PI/CI/PL 冲突能被统一追踪。",
	      visibleEvidence: "订单主数据、进度预警、客户更新邮件、单证冲突报告和修改说明。",
	      linkedPage: "课堂工作台",
	      linkedHref: "./classroom.html",
	      salesUse: "回答“跟单和单证靠经验怎么办”的顾虑，展示团队可复用的检查口径。",
	      displayBoundary: "真实订单号、客户、金额、重量、付款记录和物流信息不得公开展示。"
	    },
	    {
	      packageName: "风险复购包",
	      sourceHomework: "付款风险矩阵",
	      proofSignal: "付款方式、尾款节点、DDP 责任、认证清关、售后备件和复购机会被拆成风险字段。",
	      visibleEvidence: "付款风险矩阵、内部审批清单、谨慎客户回复、复购跟进节点和人工确认人。",
	      linkedPage: "自动化地图",
	      linkedHref: "./automation.html",
	      salesUse: "回答“AI 能不能替我判断付款和合规”的顾虑，说明风险提示和审批边界。",
	      displayBoundary: "客户投诉、赔付、法律争议、信用额度和企业内部审批记录不得公开展示。"
	    },
	    {
	      packageName: "展示复盘包",
	      sourceHomework: "结课工具包打包",
	      proofSignal: "学员能把零散作业整理成成果目录、返修记录、工具入口、指令入口和下一步业务使用计划。",
	      visibleEvidence: "结课成果目录、脱敏优秀作业、返修记录、展示授权状态和复盘计划。",
	      linkedPage: "资源中心",
	      linkedHref: "./resources.html",
	      salesUse: "回答“学完是不是只有聊天记录”的顾虑，展示结课成果可验收、可复用、可维护。",
	      displayBoundary: "公开案例必须脱敏并获得授权，不能把课堂样例包装成真实商业成果。"
	    }
	  ],
  toolchainProofDownloads: [
    {
      label: "下载 5 工具链成果证据路由 CSV",
      href: "./downloads/enrollment-toolchain-proof-router.csv",
      format: "CSV",
      note: "用于把学员 5 工具链作业转成咨询证据、公开展示候选、企业诊断信号或暂缓使用。"
    },
    {
      label: "下载 5 工具链证据 Brief MD",
      href: "./downloads/enrollment-toolchain-proof-brief-template.md",
      format: "Markdown",
      note: "用于课程顾问、班主任和企业服务负责人复核工具链成果证据、授权和禁止承诺边界。"
    }
  ],
  toolchainProofDesk: {
    title: "5 工具链成果到招生证据与企业信号承接台",
    summary:
      "承接学员工作台的 5 工具链作业验收结果：只有通过真实输入、工具输出、脱敏授权和人工边界复核的成果，才进入招生咨询或企业服务入口。",
    meta: [
      { value: "5", label: "工具证据", note: "询盘、报价、订单、单证和付款风控逐项承接。" },
      { value: "4", label: "使用去向", note: "咨询可用、公开候选、企业信号、暂缓使用。" },
      { value: "3", label: "审批闸口", note: "资料安全、证据真实性、承诺边界必须人工确认。" },
      { value: "0", label: "效果承诺", note: "不把工具输出包装成成交、询盘增长或自动审批结果。" }
    ],
    proofs: [
      {
        tool: "询盘识别与回复工具",
        learnerEvidence: "学员提交真实或脱敏询盘，输出已知需求、字段证据、准备分、缺失字段、补问问题和英文回复草稿。",
        consultationUse: "回应“AI 会不会乱回客户”：展示先识别字段和缺失信息，再写谨慎回复。",
        visibleProof: "可展示字段结构、准备分、补问问题和英文回复片段。",
        enterpriseSignal: "如果多名学员来自同一企业且询盘分流混乱，进入企业询盘 SOP 诊断。",
        approvalGate: "确认询盘已脱敏，客户名称、联系方式、价格、项目地址和合同线索不可公开。",
        noGo: "不能承诺工具能自动判断客户真实性、自动成交或替业务员确认报价条件。",
        sourceRoute: "learning.html#learning-toolchain-assignment"
      },
      {
        tool: "FOB/CIF 报价费用项检查器",
        learnerEvidence: "学员提交费用项、字段证据、发布闸口、审批清单、漏项提醒和报价说明草稿。",
        consultationUse: "回应“课程是不是只教提示词”：展示报价结构、审批人和不可承诺事项。",
        visibleProof: "可展示费用项层级、发布分、审批清单和 DDP 风险说明。",
        enterpriseSignal: "如果报价费用项、利润审批或运费有效期反复混乱，进入企业报价 SOP/工具诊断。",
        approvalGate: "确认真实成本、利润、供应商、运费报价和客户付款条件已隐藏。",
        noGo: "不能把演示数字当真实报价，不能承诺报价准确率或替代财务审批。",
        sourceRoute: "tools.html#quotation-demo-card"
      },
      {
        tool: "订单跟进与交期预警看板",
        learnerEvidence: "学员提交订单节点、履约分、节点证据、风险节点、审批闸口和客户进度邮件。",
        consultationUse: "回应“跟单靠经验怎么办”：展示节点、负责人、风险原因和客户表达边界。",
        visibleProof: "可展示节点结构、风险状态、下一步动作和客户进度口径。",
        enterpriseSignal: "如果订单节点跨业务、跟单、采购、生产和财务多人协作，进入企业履约流程诊断。",
        approvalGate: "确认真实订单号、客户、金额、图纸、交期、物流和付款状态已脱敏。",
        noGo: "不能承诺工具自动保证交期、自动催款、自动处理索赔或替代生产计划。",
        sourceRoute: "tools.html#order-demo-card"
      },
      {
        tool: "PI/CI/PL 单证一致性检查器",
        learnerEvidence: "学员提交单证放行分、字段证据、冲突报告、修正复查和专业审批清单。",
        consultationUse: "回应“单证错误如何降低”：展示一致性检查可以提前发现冲突，但专业审单仍需人工。",
        visibleProof: "可展示冲突字段、风险等级、修正建议和复查状态。",
        enterpriseSignal: "如果团队反复出现 PI/CI/PL/订舱字段不一致，进入企业出运前复核 SOP 诊断。",
        approvalGate: "确认单据号、客户、收货人、金额、重量、物流、银行和信用证信息已脱敏。",
        noGo: "不能把一致性检查包装成报关、银行审单、信用证审单或目的港清关结论。",
        sourceRoute: "tools.html#document-demo-card"
      },
      {
        tool: "付款方式与 DDP 风险矩阵",
        learnerEvidence: "学员提交审批分、风险证据、付款风险矩阵、内部审批清单、谈判替代方案和客户谨慎回复。",
        consultationUse: "回应“AI 能不能判断付款/DDP”：展示工具只做风险拆解和审批提示，不直接接受高风险条款。",
        visibleProof: "可展示审批分、风险证据、审批角色、谈判替代方向和禁止承诺事项。",
        enterpriseSignal: "如果付款、放单、DDP、授信或合同责任涉及团队审批，进入企业风控/合同边界诊断。",
        approvalGate: "确认客户资信、授信额度、付款记录、合同条款、银行和企业审批信息不可公开。",
        noGo: "不能承诺工具替代信保、银行、法务、财务、合同审批或税务判断。",
        sourceRoute: "tools.html#payment-demo-card"
      }
    ],
    evidenceStates: [
      {
        state: "咨询可用",
        rule: "可在一对一咨询中展示结构和学习产出，但不进入公开页面。"
      },
      {
        state: "公开候选",
        rule: "已通过验收、脱敏、授权和话术复核，可进入公开课或报名页候选。"
      },
      {
        state: "企业信号",
        rule: "成果暴露团队流程、岗位、审批或工具需求，应转企业诊断而非个人课程证明。"
      },
      {
        state: "暂缓使用",
        rule: "缺真实输入、授权、脱敏或人工边界，不能用于招生和企业沟通。"
      }
    ],
    approvalChecks: [
      "确认成果来自学员真实或脱敏业务输入，不是泛泛 AI 文案。",
      "确认工具输出包含字段证据、导出文件、验收闸口和人工确认边界。",
      "确认客户、价格、成本、合同、付款、银行、物流、内部审批和联系方式已脱敏。",
      "确认公开展示已取得授权范围、版本锁定、撤回机制和不可公开字段。",
      "确认话术只说明可复用工作流，不承诺成交、询盘数量、报价准确率、交期保障或自动审单。"
    ],
    handoffRoutes: [
      "咨询可用成果进入报名顾虑回应台和课程顾问证据库。",
      "公开候选成果进入营销证明活动路由，发布前重新走授权检查。",
      "企业信号进入企业学员信号 intake，不直接承诺企业服务范围或价格。",
      "暂缓使用成果回到学员工作台返修，不进入商业话术。"
    ]
  },
  showcaseProofRouterDownloads: [
    {
      label: "下载成果证据转化路由 CSV",
      href: "./downloads/enrollment-showcase-proof-router.csv",
      format: "CSV",
      note: "用于把正式课验收通过的作业路由到咨询回应、公开展示、企业线索或暂缓展示。"
    },
    {
      label: "下载成果展示授权检查 MD",
      href: "./downloads/enrollment-showcase-authorization-checklist.md",
      format: "Markdown",
      note: "用于公开展示、试听课引用、报名页证据和企业说明会前确认脱敏、授权、版本和禁止承诺。"
    }
  ],
  showcaseProofRouter: {
    title: "正式课成果到招生证据路由母版",
    summary:
      "把学习工作台的 72 小时作业闭环接到报名转化：只有通过验收、完成脱敏和授权的成果，才允许进入咨询证据、公开课展示或企业服务线索。",
    meta: [
      {
        value: "5",
        label: "顾虑场景",
        note: "学完没成果、行业不适配、AI 不可靠、不会编程、企业难落地。"
      },
      {
        value: "4",
        label: "证据状态",
        note: "内部复盘、咨询可用、展示候选、暂缓展示，避免误用学员作业。"
      },
      {
        value: "3",
        label: "商业去向",
        note: "系统课咨询、公开课转化、企业诊断，全部保留人工确认。"
      },
      {
        value: "24h",
        label: "审批时限",
        note: "公开使用前 24 小时完成脱敏、授权、版本和话术复核。"
      }
    ],
    routes: [
      {
        concern: "担心学完没有真实成果",
        acceptedEvidence: "正式课通过验收的六组作业资产：产品资料、询盘、报价、订单、单证、复盘授权。",
        visibleProof: "展示成果目录、返修记录、通过状态、页面路线和后续复用路径。",
        sourcePage: "learning.html#learning-system-handoff",
        sourceLabel: "作业闭环",
        salesUse: "用来说明课程不是交聊天记录，而是按作业提交、助教验收、返修和打包形成可复用资产。",
        codexAssist: "把验收通过记录整理成咨询展示 Brief、30 秒讲解稿和顾虑回应摘要。",
        humanGate: "确认成果来自真实或公开样例输入，已脱敏，未夸大学员能力或成交结果。",
        nextAction: "进入系统课咨询或结课成果证据总览。",
        noGo: "未通过验收、只有聊天截图或没有复用路径的成果不能用于转化。",
        routePages: ["learning.html", "classroom.html", "resources.html"]
      },
      {
        concern: "担心自己的行业不是集成房屋",
        acceptedEvidence: "学员把集成房屋字段替换成自己产品、客户、报价费用项或单证字段后的返修版本。",
        visibleProof: "展示字段替换前后对照、缺失资料清单、人工确认人和行业差异说明。",
        sourcePage: "cases.html",
        sourceLabel: "案例中心",
        salesUse: "说明课程训练的是业务结构替换能力，不是让所有行业照抄集成房屋参数。",
        codexAssist: "提取行业替换字段、生成相邻行业说明和可复用模板清单。",
        humanGate: "行业特殊认证、清关、价格、物流和合规判断必须由专业人员确认。",
        nextAction: "进入行业适配咨询或企业诊断前资料收集。",
        noGo: "不能把集成房屋价格、认证、装柜、交期直接套到其他行业。",
        routePages: ["cases.html", "case-integrated-house.html", "enterprise.html"]
      },
      {
        concern: "担心 AI 输出不可靠",
        acceptedEvidence: "作业中明确标出 Codex 可做事项、人工确认点、助教复核记录和禁止完成判定。",
        visibleProof: "展示报价、订单、单证或付款风险中的人工闸口和复核责任。",
        sourcePage: "automation.html",
        sourceLabel: "自动化边界",
        salesUse: "用来解释课程不是让 AI 自动报价，而是把风险点提前整理出来给人确认。",
        codexAssist: "生成风险边界说明、人工确认清单和对外谨慎话术草稿。",
        humanGate: "价格、利润、交期、付款、HS、报关、信用证、法务和合同结论必须人工确认。",
        nextAction: "进入自动化边界说明或风险模块试听。",
        noGo: "不能用学员作业证明 AI 可以替代报价、审单、报关、法务或银行判断。",
        routePages: ["automation.html", "tools.html", "prompts.html"]
      },
      {
        concern: "担心不会编程或工具做不出来",
        acceptedEvidence: "学员交付的字段表、检查清单、模板、导出文件、工具需求说明和复用路径。",
        visibleProof: "展示从作业模板到工具字段规格的路线，不展示复杂代码。",
        sourcePage: "tools.html",
        sourceLabel: "工具中心",
        salesUse: "说明第一阶段交付是业务字段和可复制模板，后续高频动作才进入工具产品化。",
        codexAssist: "把高频作业返修问题整理成工具需求评分、字段清单和轻量原型 Brief。",
        humanGate: "是否开发工具、开发周期、预算、技术边界和上线优先级由负责人确认。",
        nextAction: "进入工具中心或工具需求评分台。",
        noGo: "不能承诺学员不会编程也能独立完成复杂系统或替代 ERP/CRM。",
        routePages: ["tools.html", "learning.html", "playbook.html"]
      },
      {
        concern: "企业担心个人成果不能团队落地",
        acceptedEvidence: "优秀个人作业升级成岗位流程、验收标准、SOP 草案或工具需求候选。",
        visibleProof: "展示岗位责任、输入输出、验收证据、企业授权范围和下一步诊断建议。",
        sourcePage: "enterprise.html",
        sourceLabel: "企业服务",
        salesUse: "把个人课程成果延展为企业诊断信号，说明哪些适合内训、SOP 或工具共建。",
        codexAssist: "整理岗位流程摘要、企业诊断问题、内训模块映射和项目范围草稿。",
        humanGate: "企业资料授权、岗位参与、项目范围、报价、合同和验收责任必须由企业负责人确认。",
        nextAction: "进入企业诊断前沟通或服务范围确认。",
        noGo: "未完成企业授权和范围确认前，不能把学员个人作业包装成企业案例。",
        routePages: ["enterprise.html", "playbook.html", "automation.html"]
      }
    ],
    evidenceStates: [
      {
        state: "内部复盘",
        rule: "可用于老师点评和学员复盘，不可用于公开课、报名页或企业说明会。"
      },
      {
        state: "咨询可用",
        rule: "已脱敏，可在一对一咨询中展示结构和交付路径，但不能公开传播。"
      },
      {
        state: "展示候选",
        rule: "已通过验收、已脱敏、已锁定版本，公开前还需授权记录和话术复核。"
      },
      {
        state: "暂缓展示",
        rule: "来源、授权、边界或证据不足，停止用于招生、公开课和企业汇报。"
      }
    ],
    approvalChecks: [
      "确认成果能追溯到真实或公开样例输入，而不是泛泛 AI 文案。",
      "确认客户、价格、成本、合同、付款、联系方式和企业内部审批已脱敏。",
      "确认展示范围、授权人、版本号、撤回机制和不可公开字段。",
      "确认咨询话术没有承诺自动成交、自动报价、自动审单或保证询盘数量。",
      "确认企业相关成果已由企业负责人确认授权和使用范围。"
    ],
    writebackTargets: [
      "报名页顾虑回应台",
      "营销公开课脚本",
      "资源中心成果证据下载",
      "企业服务诊断资料",
      "运营手册版本回写"
    ]
  },
  applicationProofDownloads: [
    {
      label: "下载真实应用证据路由 CSV",
      href: "./downloads/enrollment-application-proof-router.csv",
      format: "CSV",
      note: "用于把结课后真实业务应用复盘路由到咨询证据、公开展示、企业诊断、课程返修或工具 Sprint。"
    },
    {
      label: "下载应用证据承接 Brief 模板",
      href: "./downloads/enrollment-application-proof-brief-template.md",
      format: "Markdown",
      note: "用于记录真实业务使用证据、授权范围、招生用途、企业线索和禁止承诺边界。"
    }
  ],
  applicationProofRouter: {
    title: "结课后真实应用证据承接台",
    summary:
      "承接学员工作台的真实业务应用复盘：只有已验证、已脱敏、已授权且能追溯到业务输入和工具输出的应用证据，才允许进入招生咨询、公开展示或企业诊断。",
    meta: [
      {
        value: "7/30/90",
        label: "复盘周期",
        note: "用结课后 7 天启动、30 天复用、90 天稳定使用三个窗口判断证据成熟度。"
      },
      {
        value: "6",
        label: "证据去向",
        note: "咨询可用、展示候选、企业线索、课程返修、工具 Sprint、内部保留。"
      },
      {
        value: "5",
        label: "人工闸口",
        note: "事实、脱敏、授权、对外承诺、企业权限必须人工确认。"
      },
      {
        value: "0",
        label: "效果承诺",
        note: "真实使用证据也不能被包装成成交、询盘增长、自动报价或自动审单承诺。"
      }
    ],
    lanes: [
      {
        signal: "7 天内已用于真实询盘或客户开发",
        acceptedEvidence: "脱敏后的询盘输入、客户开发目标、工具输出、人工改动和下一步跟进动作。",
        enrollmentUse: "一对一咨询中说明学员结课后能把课程工具包用于真实业务启动。",
        routeDecision: "咨询可用",
        routePages: ["learning.html#learning-application-review", "enrollment.html#enrollment-application-proof-router", "resources.html"],
        codexAssist: "生成 30 秒成果故事、页面证据路线和缺失证据清单。",
        manualGate: "课程顾问确认来源真实、已脱敏，不把启动使用说成商业结果。",
        noGo: "不能说学员已经成交、询盘增长或客户认可，除非有授权且可验证的独立证据。",
        writeback: "报名页顾虑回应台"
      },
      {
        signal: "30 天内多次复用询盘、报价、订单或客户跟进",
        acceptedEvidence: "同一成果包被多次用于真实业务，并保留截图、表格、复盘记录和人工确认点。",
        enrollmentUse: "进入成果证据展示审核，作为公开课、报名页或私域内容候选。",
        routeDecision: "展示候选",
        routePages: ["marketing.html#marketing-proof-campaign-router", "enrollment.html#enrollment-showcase-proof-router", "learning.html#learning-application-review"],
        codexAssist: "生成脱敏展示 Brief、公开课讲解片段和禁止承诺提示。",
        manualGate: "负责人确认展示授权、版本锁定、不可公开字段和撤回机制。",
        noGo: "不能展示客户名、价格、成本、合同、联系方式、未授权截图或内部审批过程。",
        writeback: "推广运营证据库"
      },
      {
        signal: "个人工作流已分享给主管或团队",
        acceptedEvidence: "团队反馈、岗位流程草案、审批需求、复用岗位和资料权限范围。",
        enrollmentUse: "作为企业诊断线索，说明个人成果可能扩展为团队 SOP、内训或工具共建。",
        routeDecision: "企业诊断",
        routePages: ["enterprise.html", "playbook.html#playbook-tool-sprint-command-center", "tools.html#tool-intake-board"],
        codexAssist: "生成企业诊断线索 Brief、岗位流程摘要和内训模块映射。",
        manualGate: "企业负责人确认资料授权、决策人、岗位范围、项目边界和商业报价责任。",
        noGo: "不能把学员个人成果包装成企业案例，不能暗示企业已经采购或认可。",
        writeback: "企业服务诊断入口"
      },
      {
        signal: "真实使用暴露课程解释或作业标准缺口",
        acceptedEvidence: "学员能指出卡在产品资料、询盘识别、报价费用、订单节点、单证或边界说明的具体位置。",
        enrollmentUse: "不进入公开展示，先作为课程返修和助教点评标准优化证据。",
        routeDecision: "课程返修",
        routePages: ["course.html", "classroom.html", "learning.html#learning-application-review"],
        codexAssist: "生成课程返修单、助教点评补充和下一轮复盘问题。",
        manualGate: "主讲老师确认问题是否来自课程设计、资料不足或学员使用方式。",
        noGo: "不能把未修复的使用失败包装成课程成果，也不能直接归因学员不会用。",
        writeback: "课程维护清单"
      },
      {
        signal: "真实使用暴露高频重复字段或人工检查瓶颈",
        acceptedEvidence: "重复出现的字段漏项、检查动作、导出格式、多人协作或人工审批节点。",
        enrollmentUse: "作为工具 Sprint 需求，不直接承诺报名后可获得新工具。",
        routeDecision: "工具 Sprint",
        routePages: ["tools.html", "automation.html", "playbook.html#playbook-tool-sprint-command-center"],
        codexAssist: "生成工具需求 Brief、字段规格、验收样例和人工检查边界。",
        manualGate: "产品负责人确认频率、适用范围、开发优先级、预算和上线边界。",
        noGo: "不能承诺工具上线日期、替代 ERP/CRM 或自动完成审批。",
        writeback: "工具需求评分台"
      },
      {
        signal: "证据不完整、未授权、敏感或只有口头描述",
        acceptedEvidence: "只有口头反馈、聊天印象、未脱敏截图或无法确认来源的材料。",
        enrollmentUse: "内部保留，生成下一次跟进计划，不进入销售话术、公开课或企业沟通。",
        routeDecision: "内部保留",
        routePages: ["learning.html#learning-application-review", "playbook.html", "resources.html"],
        codexAssist: "生成缺失证据清单、脱敏检查表和 7 天真实使用计划。",
        manualGate: "数据负责人确认资料安全，班主任确认是否继续跟进。",
        noGo: "不能用于任何公开展示、报名页证明、私域成交话术或企业案例包装。",
        writeback: "数据治理和学员复盘"
      }
    ],
    intakeChecks: [
      "先确认证据来自结课后的真实业务应用，而不是课堂演示或作业截图。",
      "确认业务输入、Codex 输出、人工改动和最终使用状态能被追溯。",
      "确认客户、价格、成本、合同、联系方式和企业内部资料已脱敏。",
      "确认学员或企业已授权具体展示范围、展示渠道、版本和撤回机制。",
      "确认咨询话术只说明可复用工作流，不承诺成交、询盘数量、报价准确率或自动审单。"
    ],
    writebackTargets: [
      "学员应用复盘台",
      "报名页成果证据路由",
      "推广内容证据库",
      "企业诊断入口",
      "工具 Sprint 指挥台",
      "课程返修和版本回写"
    ]
  },
	  handoffDownloads: [
	    {
	      label: "下载报名入班交接表 CSV",
	      href: "./downloads/enrollment-onboarding-handoff.csv",
	      format: "CSV",
	      note: "用于课程顾问、班主任、助教和老师统一报名确认后的交接动作。"
	    },
	    {
	      label: "下载开课确认单 MD",
	      href: "./downloads/enrollment-start-confirmation.md",
	      format: "Markdown",
	      note: "用于记录学员报名信息、资料准备、人工确认边界和首课任务。"
	    }
	  ],
	  handoffDesk: [
	    {
	      stage: "01",
	      title: "报名确认与路径锁定",
	      handoffTrigger: "用户确认系统课或企业训练营，需要锁定报名包、开课批次、服务边界和后续交接人。",
	      handoffInput: "咨询记录、线索标签、课程包、付款或预约状态、边界确认。",
	      codexAssist: "汇总咨询记录，生成入班摘要、风险提醒和资料准备清单草稿。",
	      humanCheck: "价格、优惠、付款、发票、退款和延期规则由负责人确认。",
	      studentAction: "确认报名信息、学习目标、可提供资料和开课时间。",
	      nextEvidence: "报名确认记录、入班摘要、人工边界确认。",
	      owner: "课程顾问 + 班主任",
	      boundary: "不由 Codex 确认收款、合同、发票、退款或服务承诺。"
	    },
	    {
	      stage: "02",
	      title: "资料准备与脱敏说明",
	      handoffTrigger: "学员已确认入班，但还没有把产品资料、询盘、报价或订单样例整理成可教学版本。",
	      handoffInput: "产品资料、询盘、报价、订单、单证样例和可公开范围。",
	      codexAssist: "按课程模块生成资料清单、脱敏提醒和缺失字段补问清单。",
	      humanCheck: "班主任确认敏感信息是否删除，业务隐私和客户信息不能进入公开课堂展示。",
	      studentAction: "提交脱敏资料，标注可课堂使用、仅老师查看或暂不使用的资料。",
	      nextEvidence: "资料清单、脱敏确认、补资料待办。",
	      owner: "班主任 + 学员",
	      boundary: "Codex 只能提示脱敏风险，不能判断商业机密、隐私授权或合规责任。"
	    },
	    {
	      stage: "03",
	      title: "学员画像与首课任务",
	      handoffTrigger: "资料初步齐备后，需要把学员角色、业务阶段、核心痛点和首课目标交给助教。",
	      handoffInput: "业务角色、行业、产品类型、近期痛点、资料成熟度和报名目标。",
	      codexAssist: "生成学员画像、首课优先级和个人作业目录草稿。",
	      humanCheck: "助教确认首课任务难度是否合适，避免一开始要求过多资料导致学员卡住。",
	      studentAction: "确认第一周学习目标，完成个人课程目录和首课准备任务。",
	      nextEvidence: "学员画像卡、首课任务单、个人资料目录。",
	      owner: "班主任 + 助教",
	      boundary: "不能把画像用于夸大承诺或给出不现实的成交、业绩和客户开发保证。"
	    },
	    {
	      stage: "04",
	      title: "助教初审与补资料",
	      handoffTrigger: "开课前需要判断学员资料是否足以支撑第一节课演示和作业。",
	      handoffInput: "入班资料清单、脱敏文件、首课任务和缺失字段。",
	      codexAssist: "检查资料字段完整度，生成补资料问题、课堂可用片段和风险提示。",
	      humanCheck: "助教确认资料是否真实、是否脱敏、是否适合进入课堂或仅用于一对一辅导。",
	      studentAction: "按补资料清单完善产品参数、客户背景、报价口径或单证样例。",
	      nextEvidence: "助教初审记录、补资料清单、可课堂使用资料列表。",
	      owner: "助教",
	      boundary: "Codex 不能替代老师或助教判断资料真实性、授权范围和业务敏感程度。"
	    },
	    {
	      stage: "05",
	      title: "老师开课前确认",
	      handoffTrigger: "正式上课前，老师需要确认本班学员资料、演示路径和风险边界是否清楚。",
	      handoffInput: "学员画像、首课资料、演示路径、常见顾虑和补资料状态。",
	      codexAssist: "整理班级共性问题，生成首课讲解重点、案例切换建议和答疑提醒。",
	      humanCheck: "主讲老师确认课堂节奏、演示案例和作业要求，不把未核实资料作为正式业务建议。",
	      studentAction: "按通知进入课堂，准备可展示资料和需要老师解答的问题。",
	      nextEvidence: "开课确认单、老师备课摘要、首课答疑清单。",
	      owner: "主讲老师 + 助教",
	      boundary: "课堂演示不能替代真实报价、合同、合规、法务或客户承诺。"
	    },
	    {
	      stage: "06",
	      title: "入班后 7 天交付复盘",
	      handoffTrigger: "学员完成首课和第一轮作业后，需要判断交付体验、资料质量和后续辅导重点。",
	      handoffInput: "首课作业、资料补齐情况、答疑记录、出勤和返修状态。",
	      codexAssist: "汇总 7 天学习记录，生成风险学员提醒、作业返修建议和后续课程重点。",
	      humanCheck: "班主任和助教确认是否需要一对一跟进、补资料、调整学习节奏或回收销售承诺问题。",
	      studentAction: "确认返修任务、下一节课准备内容和个人工具化优先级。",
	      nextEvidence: "7 天复盘记录、返修任务、后续跟进计划。",
	      owner: "班主任 + 助教 + 课程顾问",
	      boundary: "复盘只能用于改进学习交付，不用于制造焦虑、二次过度销售或夸大课程效果。"
	    }
	  ],
	  decisionTool: {
	    fields: [
	      {
	        id: "role",
	        label: "咨询对象",
	        options: [
	          { value: "newcomer", label: "外贸新人" },
	          { value: "experienced", label: "成熟业务员" },
	          { value: "manager", label: "主管 / 老板" },
	          { value: "enterprise", label: "企业团队" }
	        ]
	      },
	      {
	        id: "material",
	        label: "资料准备",
	        options: [
	          { value: "none", label: "暂时没有整理资料" },
	          { value: "product", label: "已有产品资料" },
	          { value: "inquiry_quote", label: "有询盘 / 报价表" },
	          { value: "team_process", label: "有团队流程问题" }
	        ]
	      },
	      {
	        id: "pain",
	        label: "当前最想解决",
	        options: [
	          { value: "unclear", label: "还不清楚问题在哪" },
	          { value: "inquiry", label: "询盘回复慢" },
	          { value: "quotation", label: "报价和费用项不清" },
	          { value: "documents", label: "订单 / 单证风险" },
	          { value: "sop", label: "团队 SOP 不统一" }
	        ]
	      },
	      {
	        id: "boundary",
	        label: "能否接受人工确认边界",
	        options: [
	          { value: "accept", label: "能接受，关键事项人工确认" },
	          { value: "uncertain", label: "需要先解释清楚" },
	          { value: "reject", label: "希望 AI 自动成交 / 自动报价" }
	        ]
	      }
	    ],
	    routes: {
	      resource: {
	        title: "免费资料 + 试听课",
	        fit: "适合还在观望、资料未整理、问题还不清楚的用户。",
	        nextAction: "发送重复劳动自测表和 10 分钟询盘识别演示，引导对方先定位问题。",
	        primaryPage: "./resources.html",
	        secondaryPage: "./tools.html",
	        boundary: "不急于推系统课，先让用户看到真实业务输入和工具输出。"
	      },
	      course: {
	        title: "系统实战课",
	        fit: "适合有产品资料、询盘、报价表或明确重复劳动问题的个人学员。",
	        nextAction: "引导查看课程体系和学员工作台，说明 12 个模块和结课交付物。",
	        primaryPage: "./course.html",
	        secondaryPage: "./learning.html",
	        boundary: "不承诺自动成交，强调课程交付的是可复用工作流和人工确认清单。"
	      },
	      enterprise: {
	        title: "企业流程诊断",
	        fit: "适合主管、老板或团队客户，尤其是报价、跟单、单证和新人培训口径不统一。",
	        nextAction: "预约 15 分钟诊断前沟通，收集脱敏产品、询盘、报价或订单样例。",
	        primaryPage: "./enterprise.html",
	        secondaryPage: "./automation.html",
	        boundary: "未诊断前不承诺系统定制范围、开发周期或业绩效果。"
	      },
	      boundary: {
	        title: "先做边界教育 / 暂缓报名",
	        fit: "适合只想要万能提示词、自动成交、自动报价或低成本代运营的用户。",
	        nextAction: "先解释 Codex 可以整理、生成和检查，但不能替代报价、合规、法务和成交判断。",
	        primaryPage: "./automation.html",
	        secondaryPage: "./enrollment.html",
	      boundary: "不迎合不现实期待，避免后续投诉和交付风险。"
	      }
	    },
	    defaultValues: {
	      role: "experienced",
	      material: "inquiry_quote",
	      pain: "quotation",
	      boundary: "accept"
	    }
	  },
  offerBriefBuilder: {
    title: "报课方案 Brief 生成器",
    description:
      "用于课程顾问把一次咨询转成可给学员或企业看的报课建议，明确推荐路径、页面证据、交付物、资料准备、付款前确认和人工边界。",
    exportFilename: "enrollment-offer-brief-output.md",
    downloads: [
      {
        label: "下载报课资格判断表 CSV",
        href: "./downloads/enrollment-offer-qualification-board.csv",
        format: "CSV",
        note: "用于课程顾问判断线索是否适合免费资料、系统课、陪跑、企业诊断或暂缓报名。"
      },
      {
        label: "下载报课方案 Brief 模板 MD",
        href: "./downloads/enrollment-offer-brief-template.md",
        format: "Markdown",
        note: "用于私聊咨询、试听课后跟进、企业诊断前沟通和付款前确认。"
      }
    ],
    defaults: {
      learnerType: "experienced-sales",
      materialReadiness: "real-sample",
      mainConcern: "outcome-proof",
      offerPath: "system-course",
      commitmentLevel: "ready-to-enroll",
      followupMode: "private-consult"
    },
    learnerTypes: [
      {
        id: "newcomer",
        label: "外贸新人",
        profile: "需要先理解产品资料、询盘、报价和客户跟进的基本结构。",
        routePages: ["resources.html", "course.html", "learning.html"],
        codexUse: ["整理产品资料字段", "生成基础询盘拆解", "输出首轮作业清单"],
        manualConfirm: ["产品参数", "客户真实需求", "价格和交期"],
        ownerNeed: "课程顾问先降低学习门槛，助教重点盯入班资料。"
      },
      {
        id: "experienced-sales",
        label: "有经验业务员",
        profile: "已经有产品和客户场景，希望把重复整理、询盘、报价、跟单和单证变成个人工作台。",
        routePages: ["enrollment.html", "course.html", "learning.html", "tools.html"],
        codexUse: ["整理真实询盘和报价字段", "生成跟进和报价前确认", "把作业沉淀成结课工具包"],
        manualConfirm: ["真实价格和利润", "付款条件", "客户承诺"],
        ownerNeed: "课程顾问确认对方是否有真实材料，主讲老师强调人工确认边界。"
      },
      {
        id: "manager-owner",
        label: "外贸主管 / 老板",
        profile: "更关心团队方法统一、新人训练、报价审批和成果可复制。",
        routePages: ["enrollment.html", "automation.html", "enterprise.html", "playbook.html"],
        codexUse: ["生成团队重复劳动地图", "汇总岗位训练重点", "整理工具和 SOP 优先级"],
        manualConfirm: ["团队管理规则", "报价审批责任", "资料授权范围"],
        ownerNeed: "先判断个人课是否足够，若涉及团队复制则转企业诊断。"
      },
      {
        id: "enterprise-team",
        label: "企业团队",
        profile: "需要流程诊断、团队内训、工具共建或 SOP 改造，不适合只用个人课程话术承接。",
        routePages: ["enterprise.html", "automation.html", "tools.html", "playbook.html"],
        codexUse: ["整理企业访谈纪要", "生成诊断 Brief", "映射内训模块和验收证据"],
        manualConfirm: ["服务范围", "项目报价", "企业资料脱敏授权", "验收责任"],
        ownerNeed: "企业服务负责人确认资料成熟度、岗位参与和签约边界。"
      }
    ],
    materialReadinessLevels: [
      {
        id: "none",
        label: "暂无可用材料",
        score: "低准备度",
        pageRoutes: ["resources.html", "cases.html"],
        requirement: "先领取自测表和集成房屋案例，补产品线、客户类型和最耗时重复动作。",
        repairAction: "暂不推荐直接付款，先用免费资料和试听课确认问题。",
        gate: "材料不足时不能承诺课程效果，只能做路径判断。"
      },
      {
        id: "basic-product",
        label: "有基础产品资料",
        score: "可预习",
        pageRoutes: ["course.html", "tools.html"],
        requirement: "补产品参数、认证、包装、装柜、安装和售后字段。",
        repairAction: "适合系统课咨询，但需开课前完成资料补齐。",
        gate: "产品参数、认证和价格仍需业务负责人确认。"
      },
      {
        id: "real-sample",
        label: "有脱敏询盘 / 报价",
        score: "可入班",
        pageRoutes: ["course.html", "learning.html", "case-integrated-house.html"],
        requirement: "准备一条脱敏询盘、报价字段或订单跟进样例。",
        repairAction: "适合进入系统课，并把样例用于首轮作业。",
        gate: "真实价格、利润、付款和客户承诺必须人工确认。"
      },
      {
        id: "team-sample",
        label: "有团队 / 企业样例",
        score: "企业可诊断",
        pageRoutes: ["enterprise.html", "automation.html", "playbook.html"],
        requirement: "准备脱敏产品、询盘、报价、订单或单证样例，并确认企业授权岗位。",
        repairAction: "适合企业诊断或团队内训，不建议只按个人课承诺。",
        gate: "企业资料默认不得公开，服务范围和项目价格必须人工确认。"
      }
    ],
    mainConcerns: [
      {
        id: "ai-concept",
        label: "担心只是讲 AI 概念",
        proof: "用课程模块、课堂执行台和集成房屋完整案例证明每节课都有业务输入和工具输出。",
        proofPage: "course.html",
        response: "课程按客户开发、询盘、报价、订单、单证和付款风险讲，不按软件菜单讲。",
        boundary: "不承诺听完就自动成交，承诺的是可验收作业和可复用工作流。"
      },
      {
        id: "industry-fit",
        label: "担心行业不适配",
        proof: "用案例中心和行业复制包说明集成房屋是第一套完整样板，后续按字段替换。",
        proofPage: "cases.html",
        response: "先用集成房屋跑通字段结构，再把产品资料、客户类型、报价口径和单证字段替换到自己的行业。",
        boundary: "不保证特殊认证、清关、价格和物流口径自动通用。"
      },
      {
        id: "no-code",
        label: "担心不会编程",
        proof: "用工具中心说明第一阶段训练字段、模板、检查清单和规格，不要求写代码。",
        proofPage: "tools.html",
        response: "学员先会用 Codex 生成业务表、检查项和输出格式，复杂工具后续再产品化。",
        boundary: "课程不把编程能力作为前提，也不承诺学员自己完成复杂系统开发。"
      },
      {
        id: "ai-reliability",
        label: "担心 AI 输出不可靠",
        proof: "用自动化地图和风险边界说明 Codex 只做整理、草稿、检查和风险提醒。",
        proofPage: "automation.html",
        response: "价格、利润、付款、交期、认证、合规、合同和客户承诺均保留人工确认。",
        boundary: "不允许把 AI 输出直接当最终报价、合同、单证、报关或法务结论。"
      },
      {
        id: "outcome-proof",
        label: "担心学完没有成果",
        proof: "用学员工作台和成果证据中心展示作业、返修、结课工具包和展示授权。",
        proofPage: "learning.html",
        response: "结课交付不是聊天记录，而是产品资料、客户开发、询盘报价、订单单证和风险复盘工具包。",
        boundary: "成果质量取决于真实业务输入和按要求返修，不能用虚构资料冒充交付。"
      },
      {
        id: "enterprise-team",
        label: "企业担心个人课无法落地",
        proof: "用企业服务页说明诊断、团队内训、岗位作业、工具共建和验收证据。",
        proofPage: "enterprise.html",
        response: "团队问题先做诊断，确认岗位、字段、审批边界和样板业务线，再决定内训或工具/SOP 共建。",
        boundary: "未诊断前不承诺完整系统、项目价格、开发周期或替代 ERP/CRM。"
      }
    ],
    offerPaths: [
      {
        id: "free-resource",
        label: "免费资料 + 试听课",
        packageRef: "免费预习路径",
        routePages: ["resources.html", "cases.html", "marketing.html"],
        fit: "适合资料不足、问题还不清楚或需要先建立信任的用户。",
        deliverables: ["重复劳动自测表", "10 分钟询盘识别演示", "集成房屋资料包"],
        nextCTA: "先领取资料并完成一次问题定位，再进入系统课或企业诊断。",
        acceptance: "用户能说清自己卡在客户开发、询盘、报价、跟单还是单证。"
      },
      {
        id: "system-course",
        label: "系统实战课",
        packageRef: "系统实战课",
        routePages: ["course.html", "learning.html", "classroom.html"],
        fit: "适合有真实产品、询盘或报价问题，希望搭建个人外贸 Codex 工作流的学员。",
        deliverables: ["12 个课程模块", "7 个核心工具作业", "结课工具包", "学员成果 Brief"],
        nextCTA: "确认报名包、开课时间、资料清单和首课任务。",
        acceptance: "学员能按阶段提交作业，并在结课时形成可复用工具包。"
      },
      {
        id: "coaching-repair",
        label: "作业陪跑 / 行业替换",
        packageRef: "作业陪跑与行业替换包",
        routePages: ["learning.html", "cases.html", "playbook.html"],
        fit: "适合已报名或已结课，但需要把集成房屋样板替换到自己行业的学员。",
        deliverables: ["行业字段替换", "作业返修清单", "公开展示候选", "工具需求清单"],
        nextCTA: "确认一个主推产品和一套脱敏作业，进入陪跑返修。",
        acceptance: "完成行业替换字段和一组可验收作业。"
      },
      {
        id: "enterprise-diagnosis",
        label: "企业流程诊断",
        packageRef: "企业流程诊断",
        routePages: ["enterprise.html", "automation.html", "tools.html"],
        fit: "适合主管、老板或企业团队，需要先判断资料成熟度、岗位参与和样板业务线。",
        deliverables: ["企业流程问题清单", "资料成熟度评分", "内训/工具化建议"],
        nextCTA: "预约诊断前沟通，收集脱敏材料和负责人信息。",
        acceptance: "企业能确认资料、岗位、痛点、边界和下一步服务路径。"
      },
      {
        id: "team-training",
        label: "企业团队内训 / 工具共建",
        packageRef: "企业团队内训 / 工具与 SOP 共建",
        routePages: ["enterprise.html", "tools.html", "classroom.html", "playbook.html"],
        fit: "适合企业已完成诊断或资料成熟，希望进入内训、工具原型和 SOP 共建。",
        deliverables: ["企业产品课堂案例", "岗位训练任务", "工具规格", "SOP 验收清单"],
        nextCTA: "确认服务范围、授权材料、报价、排期和验收方式。",
        acceptance: "企业完成签约前资料、范围、负责人和验收边界确认。"
      }
    ],
    commitmentLevels: [
      {
        id: "exploring",
        label: "还在观望",
        paymentStatus: "不进入付款催促",
        confirmation: "先确认痛点、资料和边界意识。",
        nextStep: "发资料、试听课和页面证据，48 小时后回访。"
      },
      {
        id: "ready-to-enroll",
        label: "准备报课",
        paymentStatus: "可进入报名确认",
        confirmation: "确认课程包、开课时间、资料准备和人工边界。",
        nextStep: "生成报课 Brief，交接班主任准备入班。"
      },
      {
        id: "paid-ready",
        label: "已付款 / 待入班",
        paymentStatus: "进入入班交接",
        confirmation: "确认收款、发票、排课、资料脱敏和首课任务。",
        nextStep: "转入报名确认到入班交接台。"
      },
      {
        id: "enterprise-evaluate",
        label: "企业评估中",
        paymentStatus: "不直接按个人课付款",
        confirmation: "确认企业资料、授权岗位、服务范围和诊断会。",
        nextStep: "进入企业诊断 Brief 和服务范围确认。"
      }
    ],
    followupModes: [
      {
        id: "private-consult",
        label: "私聊咨询",
        channel: "私域 / 社群私聊",
        routePages: ["enrollment.html", "resources.html"],
        scriptNeed: "用简短证据回应顾虑，再给出一个明确下一步。"
      },
      {
        id: "webinar-followup",
        label: "试听课后跟进",
        channel: "公开课 / 试听课",
        routePages: ["marketing.html", "resources.html", "enrollment.html"],
        scriptNeed: "按听课反馈分成资料领取、系统课咨询和企业诊断三类。"
      },
      {
        id: "class-onboarding",
        label: "报名后入班",
        channel: "班主任交接",
        routePages: ["learning.html", "classroom.html"],
        scriptNeed: "重点说清资料准备、首课任务、作业和返修规则。"
      },
      {
        id: "enterprise-call",
        label: "企业诊断前沟通",
        channel: "企业销售 / 诊断会",
        routePages: ["enterprise.html", "playbook.html"],
        scriptNeed: "确认资料授权、岗位参与、样板业务线、服务范围和验收边界。"
      }
    ]
  },
	  learningPath: [
    {
      stage: "01",
      title: "先看问题是否匹配",
      action: "完成重复劳动自测，判断自己主要卡在客户开发、询盘、报价、跟单还是单证。",
      output: "学习优先级和适合报名路径。"
    },
    {
      stage: "02",
      title: "用集成房屋案例看完整效果",
      action: "先看 20ft 可扩展集成房屋出口案例，理解课程如何把真实订单拆成工具输出。",
      output: "对课程交付方式和课堂演示有直观判断。"
    },
    {
      stage: "03",
      title: "进入系统课搭建自己的工作流",
      action: "按 12 个模块完成产品资料、客户开发、询盘、报价、订单、单证和复盘作业。",
      output: "个人或团队可复用的外贸 Codex 工作流。"
    },
    {
      stage: "04",
      title: "把课程输出转成长期工具",
      action: "把高频使用的表格、检查清单和指令沉淀到工具中心和指令库。",
      output: "可维护、可扩展、可复制给新人使用的工作台。"
    }
  ],
  outcomes: [
    {
      title: "业务动作更快",
      value: "减少重复整理资料、读询盘、写初稿和核对字段的时间。",
      proof: ["询盘识别表", "客户补问清单", "开发信草稿"]
    },
    {
      title: "报价风险更清楚",
      value: "把 FOB/CIF/DDP 费用项拆开，避免把不确定责任直接承诺给客户。",
      proof: ["报价费用项清单", "DDP 风险提醒", "人工确认点"]
    },
    {
      title: "团队经验可沉淀",
      value: "把业务员个人经验变成团队可复用字段、SOP、指令和模板。",
      proof: ["岗位 SOP", "工具字段", "新人上手路径"]
    },
    {
      title: "后续维护更简单",
      value: "课程、案例、工具、指令和资源都沉淀在网站里，后续能持续更新。",
      proof: ["数据化内容", "网页化课程", "运营指南"]
    }
  ],
  concerns: [
    {
      question: "不会编程可以报名吗？",
      answer: "可以。课程重点是外贸业务流程、字段、模板和 Codex 操作，不要求学员写代码。需要的是理解自己的产品和业务。"
    },
    {
      question: "课程会不会只是讲 AI 概念？",
      answer: "不会。课程按外贸业务场景组织，每节课都要有案例输入、操作步骤、输出物、作业和风险边界。"
    },
    {
      question: "学完能不能自动开发客户和成交？",
      answer: "不能这样承诺。课程帮助你减少重复劳动、提高回复和跟进质量，但客户成交仍取决于产品、价格、市场、服务和业务判断。"
    },
    {
      question: "我的产品不是集成房屋怎么办？",
      answer: "集成房屋是第一套完整演示案例。课程会要求你把产品参数、客户类型、报价字段和单证字段替换成自己的行业资料。"
    }
  ],
  qualificationChecklist: [
    "愿意提供或整理自己的产品资料。",
    "希望把重复劳动变成模板、表格或网页工具。",
    "能接受价格、交期、付款、合规等关键事项必须人工确认。",
    "愿意按课程作业逐步搭建自己的客户、询盘、报价和单证流程。",
    "如果是企业报名，需要负责人或主管参与流程确认。"
  ]
};
