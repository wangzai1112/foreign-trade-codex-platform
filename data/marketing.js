window.TrainingPlatformData = window.TrainingPlatformData || {};

window.TrainingPlatformData.marketing = {
  metrics: [
    {
      value: "5",
      label: "转化阶段",
      detail: "内容触达、资料领取、试听课、报名咨询、系统课或企业诊断。"
    },
    {
      value: "4",
      label: "主推广渠道",
      detail: "社群私域、短视频/直播、公众号/文章、企业客户转介绍。"
    },
    {
      value: "49",
      label: "资源中心卡片",
      detail: "用资源中心的资料包、作业模板、证据表和运营表承接流量，避免只靠口头介绍课程。"
    },
    {
      value: "6",
      label: "日常运营动作",
      detail: "从早间线索检查到晚间复盘回写，形成课程顾问和运营团队的每日 SOP。"
    },
    {
      value: "1",
      label: "主演示案例",
      detail: "所有推广内容优先围绕集成房屋出口样板证明课程落地性。"
    }
  ],
  funnelStages: [
    {
      stage: "01",
      title: "内容触达",
      audience: "外贸业务员、外贸主管、工厂老板和产业带企业负责人。",
      message: "先讲外贸重复劳动和风险，不直接讲 AI 功能。",
      asset: "短内容、案例拆解、重复劳动自测题。",
      cta: "引导领取重复劳动自测表或集成房屋工具包。"
    },
    {
      stage: "02",
      title: "资料领取",
      audience: "已经意识到询盘、报价、单证或团队 SOP 有问题的人。",
      message: "让用户先拿到能打开、能照着填的资料。",
      asset: "资源中心资源卡、课堂作业模板和 70 个下载资产。",
      cta: "引导观看 10 分钟询盘识别演示课。"
    },
    {
      stage: "03",
      title: "试听演示",
      audience: "想判断课程是否真正能用的人。",
      message: "用沙特 80 套集成房屋询盘完整演示输入、Codex 操作、输出和人工边界。",
      asset: "询盘识别演示器、案例页授课脚本、试听课提纲。",
      cta: "引导查看课程体系或提交脱敏业务样例。"
    },
    {
      stage: "04",
      title: "报名咨询",
      audience: "已经有真实业务资料或明确重复劳动痛点的人。",
      message: "先判断个人系统课、免费资料预习或企业诊断哪条路径更匹配。",
      asset: "报名路径页、线索分级、咨询问题清单。",
      cta: "安排系统课报名或 15 分钟企业诊断前沟通。"
    },
    {
      stage: "05",
      title: "成交与交付",
      audience: "个人学员、团队负责人或企业客户。",
      message: "交付结果是业务工作流、工具输出和 SOP，不承诺自动成交。",
      asset: "课程交付中心、工具中心、企业服务页。",
      cta: "进入系统课、企业内训或流程改造服务。"
    }
  ],
  dailyOpsDownloads: [
    {
      label: "下载日常运营工作台 CSV",
      href: "./downloads/marketing-daily-ops-desk.csv",
      format: "CSV",
      note: "用于课程顾问、社群运营和市场运营每天处理线索、发送资料、交接企业机会。"
    },
    {
      label: "下载每日复盘记录 MD",
      href: "./downloads/marketing-daily-review-template.md",
      format: "Markdown",
      note: "用于每天晚上记录有效线索、用户顾虑、页面证据缺口和次日跟进动作。"
    }
  ],
  dailyOpsDesk: [
    {
      stage: "01",
      timebox: "09:00-09:30",
      title: "早间线索清点",
      input: "前一天资源下载、公开课留言、社群私信、报名咨询和企业表单。",
      codexTask: "Codex 按来源、用户角色、痛点关键词和资料准备度整理线索摘要。",
      humanDecision: "运营人工确认线索是否真实、是否重复、是否需要优先回复。",
      output: "A/B/C 线索清单、今日优先跟进列表、需要补问的问题。",
      pageEvidence: "报名路径 / 资源中心",
      metric: "当日待回复线索数、A 类线索数、重复或无效线索数。",
      boundary: "Codex 只做整理和建议，不自动判定成交概率或替代课程顾问判断。",
      owner: "市场运营 + 课程顾问"
    },
    {
      stage: "02",
      timebox: "09:30-11:00",
      title: "资源发送与痛点确认",
      input: "用户领取的资料类型、留言问题和当前外贸业务阶段。",
      codexTask: "Codex 根据资料类型生成跟进摘要和对应页面证据建议。",
      humanDecision: "课程顾问确认用户真实痛点，选择发送自测表、询盘演示、报价清单或企业资料包。",
      output: "资料发送记录、用户痛点标签、下一次跟进时间。",
      pageEvidence: "资源中心 / 自动化地图",
      metric: "24 小时回复率、资料打开反馈、痛点确认率。",
      boundary: "不把免费资料包装成完整课程结果，不承诺下载后即可自动成交。",
      owner: "社群运营"
    },
    {
      stage: "03",
      timebox: "11:00-12:00",
      title: "咨询前证据准备",
      input: "用户身份、产品行业、近期询盘或报价问题、报名前顾虑。",
      codexTask: "Codex 组合课程页、案例页、工具页、学员工作台和企业服务页的证据链接。",
      humanDecision: "课程顾问判断证据是否真的匹配用户行业和业务阶段。",
      output: "一页式咨询备忘、顾虑回应重点、需要人工说明的边界。",
      pageEvidence: "报名路径 / 案例中心 / 工具中心",
      metric: "证据点击率、咨询到场率、脱敏样例提交率。",
      boundary: "行业适配只能说明替换方法，不能承诺所有行业照搬集成房屋报价和物流口径。",
      owner: "课程顾问"
    },
    {
      stage: "04",
      timebox: "14:00-16:00",
      title: "试听和系统课转化跟进",
      input: "试听观看记录、用户样例资料、学习意向和预算时间安排。",
      codexTask: "Codex 整理试听反馈，生成系统课、免费资料或暂缓培育的推荐路径草稿。",
      humanDecision: "课程顾问使用报名分流诊断器确认最终路径，并处理价格、排课和学习投入问题。",
      output: "报名建议、入班准备清单、暂缓用户培育标签。",
      pageEvidence: "课程交付中心 / 学员工作台 / 报名路径",
      metric: "试听到咨询率、咨询到报名率、暂缓原因分布。",
      boundary: "价格、优惠、排课、付款和报名确认必须人工处理。",
      owner: "课程顾问 + 班主任"
    },
    {
      stage: "05",
      timebox: "16:00-17:30",
      title: "企业线索交接",
      input: "团队负责人咨询、企业表单、老学员转介绍、企业诊断资料。",
      codexTask: "Codex 按企业痛点、资料成熟度、岗位参与人和工具需求生成交接摘要。",
      humanDecision: "企业服务负责人确认是否进入诊断前沟通，明确资料脱敏和参会角色。",
      output: "企业线索交接单、诊断前资料清单、预约沟通安排。",
      pageEvidence: "企业服务 / 自动化地图 / 工具中心",
      metric: "企业预约数、到会率、资料准备完成率。",
      boundary: "未诊断前不承诺内训范围、工具开发周期、系统价格和业绩结果。",
      owner: "企业服务销售 + 项目负责人"
    },
    {
      stage: "06",
      timebox: "18:00-18:30",
      title: "晚间复盘与内容回写",
      input: "当天线索处理记录、未成交原因、用户高频顾虑和页面证据缺口。",
      codexTask: "Codex 生成当天复盘摘要、次日待办、需要更新的页面和内容选题建议。",
      humanDecision: "运营负责人决定哪些问题回写到报名页、资源页、推广页、企业服务或课程内容。",
      output: "每日复盘记录、次日跟进列表、页面维护任务。",
      pageEvidence: "运营指南 / 推广运营 / 资源中心",
      metric: "复盘完成率、页面回写项、次日跟进完成率。",
      boundary: "复盘可由 Codex 辅助总结，但对外承诺、案例公开和服务调整必须由负责人确认。",
      owner: "运营负责人"
    }
  ],
  channelPlaybooks: [
    {
      channel: "社群与私域",
      role: "承接外贸业务员和老学员转介绍。",
      contentAngles: ["每天最耗时的重复动作", "一封询盘如何拆成报价前问题", "报价漏项和 DDP 风险提醒"],
      primaryResource: "外贸重复劳动自测表",
      conversionAction: "让用户提交自测结果，再推荐试听课或系统课。",
      cadence: "每周 3-5 条短内容，每周 1 次资料领取提醒。",
      boundary: "不在社群里承诺自动开发客户、自动成交或代替人工报价。"
    },
    {
      channel: "短视频 / 直播",
      role: "用可视化演示建立信任，适合展示工具输出。",
      contentAngles: ["10 分钟拆一封集成房屋英文询盘", "FOB/CIF 报价费用项演示", "PI、CI、PL 冲突检查"],
      primaryResource: "10分钟询盘识别演示课",
      conversionAction: "引导进入工具中心或领取案例字段包。",
      cadence: "每周 2-3 条演示短视频，每月 1 场公开直播课。",
      boundary: "示例价格、报价测算和单证检查只用于演示，正式业务必须复核。"
    },
    {
      channel: "公众号 / 长文章",
      role: "承接搜索、转发和深度解释，适合教育市场认知。",
      contentAngles: ["外贸 AI 课程为什么要按业务流设计", "集成房屋出口案例全流程", "企业团队如何做流程诊断"],
      primaryResource: "集成房屋 Codex 工具包",
      conversionAction: "文章末尾进入资源中心、案例页或企业服务页。",
      cadence: "每周 1 篇深度文章，每月 1 篇案例复盘。",
      boundary: "文章不写夸大收益，不用无法验证的成交案例。"
    },
    {
      channel: "企业客户转介绍",
      role: "承接工厂、外贸团队和产业带企业的流程改造需求。",
      contentAngles: ["报价和单证风险如何团队化管理", "新人培训为什么要有字段和 SOP", "企业内训不是简单卖课"],
      primaryResource: "企业流程诊断资料",
      conversionAction: "先收集脱敏资料，再进入企业诊断和样板订单演示。",
      cadence: "每月整理 3 个企业问题，每季度沉淀 1 个行业样板。",
      boundary: "未诊断前不承诺系统定制范围、开发周期和具体业绩结果。"
    }
  ],
  contentCalendar: [
    {
      week: "第 1 周",
      theme: "重复劳动自测",
      pages: "首页 / 资源中心 / 报名路径",
      assets: "自测表、痛点短内容、社群问答",
      offer: "领取重复劳动自测表",
      evidence: "领取人数、完成自测人数、主动咨询问题"
    },
    {
      week: "第 2 周",
      theme: "询盘识别试听",
      pages: "工具中心 / 集成房屋案例页",
      assets: "询盘演示器、试听课提纲、英文回复草稿",
      offer: "观看 10 分钟询盘识别演示",
      evidence: "试听完课率、提交询盘样例人数"
    },
    {
      week: "第 3 周",
      theme: "报价与单证风险",
      pages: "工具中心 / 课程体系",
      assets: "报价测算器、单证检查器、费用项清单",
      offer: "领取报价清单和单证检查样例",
      evidence: "下载量、报价课咨询量、风险问题数量"
    },
    {
      week: "第 4 周",
      theme: "系统课和企业诊断",
      pages: "报名路径 / 企业服务 / 运营指南",
      assets: "课程模块图、企业诊断问题清单、服务包说明",
      offer: "系统课报名或企业流程诊断",
      evidence: "报名咨询数、企业诊断预约数、未成交原因"
    }
  ],
  campaignAssetDownloads: [
    {
      label: "下载推广素材生产表 CSV",
      href: "./downloads/marketing-asset-factory.csv",
      format: "CSV",
      note: "用于把业务痛点、证据页面、承接资源、CTA 和宣传边界统一到每条内容。"
    },
    {
      label: "下载公开课跟进模板 MD",
      href: "./downloads/webinar-follow-up-template.md",
      format: "Markdown",
      note: "用于公开课后把用户分流到资料领取、系统课报名或企业诊断。"
    }
  ],
  campaignAssetFactory: [
    {
      asset: "重复劳动诊断短内容",
      stage: "内容触达",
      audience: "还没有明确学习需求的外贸业务员和主管。",
      angle: "每天被客户资料整理、询盘回复、报价表和单证核对占用多少时间。",
      proofSource: "资源中心的重复劳动自测表和首页痛点区。",
      cta: "领取自测表，标出最想先优化的 3 个重复动作。",
      handoff: "资源中心 -> 报名路径",
      boundary: "不把 AI 包装成自动成交系统，只强调识别重复劳动和优先级。"
    },
    {
      asset: "询盘识别演示内容",
      stage: "试听转化",
      audience: "想判断课程是否真的能减少读询盘和写回复时间的用户。",
      angle: "一封沙特 80 套集成房屋询盘如何拆成已知需求、缺失字段和报价前问题。",
      proofSource: "工具中心询盘识别演示器、集成房屋案例页和试听课提纲。",
      cta: "观看 10 分钟询盘演示，或提交一封脱敏询盘做结构匹配。",
      handoff: "工具中心 -> 课程交付中心",
      boundary: "不能暗示工具会直接给最终报价，价格和交期仍需人工确认。"
    },
    {
      asset: "报价漏项与 DDP 风险内容",
      stage: "资料领取",
      audience: "经常担心报价漏项、利润被吃掉或贸易术语说不清的业务员。",
      angle: "FOB/CIF/DDP 费用项如何拆开，哪些费用不能由 AI 直接判断。",
      proofSource: "报价费用项清单、报价测算器和课程 M6 交付蓝图。",
      cta: "下载报价费用项清单，再看系统课报价模块。",
      handoff: "资源中心 -> 课程交付中心",
      boundary: "示例数字只演示结构，真实成本、汇率、海运和利润由企业确认。"
    },
    {
      asset: "单证冲突与风险复盘内容",
      stage: "信任建立",
      audience: "负责跟单、单证、出货和老板最终把关的人。",
      angle: "PI、CI、PL、订舱资料为什么容易冲突，以及如何先做一致性检查。",
      proofSource: "单证检查器、单证一致性检查样例和自动化边界页。",
      cta: "领取单证检查样例，判断自己的订单主数据是否统一。",
      handoff: "工具中心 -> 企业服务",
      boundary: "HS 编码、申报、信用证、银行和清关要求必须专业复核。"
    },
    {
      asset: "学员结课成果展示内容",
      stage: "报名咨询",
      audience: "担心学完没有具体成果、只拿到提示词的潜在学员。",
      angle: "结课不是聊天记录，而是 6 组可复用成果包和人工确认边界。",
      proofSource: "学员工作台、结课工具包打包清单和作业评分表。",
      cta: "查看学员交付页，判断自己能准备哪些业务资料。",
      handoff: "学员工作台 -> 报名路径",
      boundary: "不把课堂样例包装成真实商业成果，公开展示必须脱敏授权。"
    },
    {
      asset: "企业流程诊断内容",
      stage: "企业线索",
      audience: "外贸团队负责人、工厂老板和产业带企业服务客户。",
      angle: "团队报价、跟单、单证和新人培训为什么要先统一字段和审批边界。",
      proofSource: "企业服务页、诊断分流器、资料清单和企业成熟度评分表。",
      cta: "预约诊断前沟通，提交一份脱敏产品、询盘或订单样例。",
      handoff: "企业服务 -> 自动化地图",
      boundary: "未诊断前不承诺系统范围、开发周期、价格效果或替代 ERP/CRM。"
    }
  ],
  proofCampaignDownloads: [
    {
      label: "下载成果证据内容路由 CSV",
      href: "./downloads/marketing-proof-campaign-router.csv",
      format: "CSV",
      note: "用于把正式课验收成果路由到公开课、短视频、私域跟进、长文章和企业诊断素材。"
    },
    {
      label: "下载公开证据内容 Brief MD",
      href: "./downloads/marketing-proof-campaign-brief-template.md",
      format: "Markdown",
      note: "用于每次使用学员成果做内容前确认用途、授权、页面路线、CTA、禁用口径和回写动作。"
    }
  ],
  proofCampaignRouter: {
    title: "正式课成果证据公开传播路由",
    summary:
      "承接报名页成果证据路由：只有已验收、已脱敏、已授权并锁定版本的作业，才进入公开课片段、私域短内容、长文章、课程顾问跟进和企业诊断素材。",
    meta: [
      {
        value: "5",
        label: "内容去向",
        note: "公开课、短视频、私域跟进、长文章、企业诊断。"
      },
      {
        value: "4",
        label: "复核门槛",
        note: "验收、脱敏、授权、禁止承诺四道门槛缺一不可。"
      },
      {
        value: "24h",
        label: "上线前复核",
        note: "公开使用前完成授权、话术、页面路线和禁止承诺检查。"
      },
      {
        value: "3",
        label: "回写页面",
        note: "报名页、资源中心和运营手册必须同步回写。"
      }
    ],
    routes: [
      {
        channel: "公开课片段",
        evidenceSource: "正式课成果到招生证据路由中已标记为展示候选的作业。",
        contentAngle: "用一份学员作业展示从业务输入、Codex 辅助、助教验收到返修通过的过程。",
        proofPages: ["enrollment.html#enrollment-showcase-proof-router", "learning.html#learning-system-handoff", "classroom.html"],
        codexAssist: "生成 3 分钟公开课片段提纲、讲师提示卡、观众互动问题和课后分流话术。",
        humanApproval: "主讲老师确认教学口径，运营负责人确认授权、版本和不展示敏感字段。",
        cta: "查看报名页成果证据路由，提交脱敏业务样例判断是否适合系统课。",
        noGo: "不能把单个优秀作业说成所有学员都能达到同样成果。",
        writeback: "公开课问题回写到报名页顾虑回应台和营销公开课脚本。"
      },
      {
        channel: "私域短内容",
        evidenceSource: "已授权展示的字段表、检查清单、工具导出或返修前后对比。",
        contentAngle: "60-90 秒回应“学完有没有成果”，展示一个重复动作如何从聊天截图变成可复用字段或检查清单。",
        proofPages: ["enrollment.html", "learning.html", "resources.html"],
        codexAssist: "生成 3 条私域短帖、社群问答、朋友圈文案和后续补问问题。",
        humanApproval: "运营负责人确认素材没有客户、价格、合同、付款和企业内部信息。",
        cta: "领取对应模板或观看 10 分钟询盘识别演示。",
        noGo: "不能展示真实客户资料，也不能承诺 AI 自动生成最终报价或审单结论。",
        writeback: "社群评论和私信问题回写到资源 FAQ 和内容选题池。"
      },
      {
        channel: "课程顾问跟进素材",
        evidenceSource: "咨询可用但不适合公开传播的脱敏成果结构。",
        contentAngle: "针对用户顾虑发送一页式成果说明，展示课程如何验收、返修和打包结果。",
        proofPages: ["enrollment.html", "learning.html", "resources.html"],
        codexAssist: "按用户顾虑生成私聊回应、页面证据清单和下一步补问问题。",
        humanApproval: "课程顾问确认对方行业、资料准备和边界意识，不把内部复盘成果外发。",
        cta: "进入系统课咨询、提交脱敏样例或继续领取资料。",
        noGo: "内部复盘状态的成果不能发给潜在学员，不能用未授权作业做销售证明。",
        writeback: "未成交原因回写到招生转化总控台和运营日报。"
      },
      {
        channel: "长文章案例段落",
        evidenceSource: "已授权的完整成果包或集成房屋样板与学员行业替换对照。",
        contentAngle: "用长文说明一套成果如何从课堂案例、工具作业、返修记录和人工边界中形成。",
        proofPages: ["case-integrated-house.html", "cases.html", "course.html", "playbook.html"],
        codexAssist: "生成文章大纲、案例段落、截图清单、引用边界和结尾 CTA。",
        humanApproval: "内容负责人确认案例授权、行业适配说法和所有商业承诺边界。",
        cta: "查看集成房屋完整案例，领取行业替换资料或预约企业诊断。",
        noGo: "不能把课堂样例包装成真实成交案例，不能暗示所有行业参数通用。",
        writeback: "文章反馈回写到案例复制包和资源中心。"
      },
      {
        channel: "企业诊断素材",
        evidenceSource: "个人优秀作业升级成岗位流程、SOP 草案或工具需求候选的记录。",
        contentAngle: "说明个人作业如何识别团队 SOP、岗位训练和工具共建需求。",
        proofPages: ["enterprise.html", "automation.html", "playbook.html"],
        codexAssist: "整理企业诊断提纲、岗位问题、内训模块映射和服务范围草稿。",
        humanApproval: "企业服务负责人确认企业资料授权、参会岗位、项目范围和报价边界。",
        cta: "预约企业诊断前沟通，提交脱敏产品、询盘、报价或订单样例。",
        noGo: "不能在未诊断前承诺工具开发周期、系统范围、项目价格或业绩效果。",
        writeback: "企业反馈回写到企业服务页、工具需求评分和运营手册。"
      }
    ],
    approvalChecklist: [
      "成果状态必须为咨询可用或展示候选，暂缓展示不得进入内容生产。",
      "确认授权范围、展示版本、不可公开字段和撤回机制。",
      "确认内容没有客户、价格、成本、合同、付款、联系方式和企业内部审批。",
      "确认 CTA 指向资源中心、报名路径或企业服务，不制造虚假紧迫感。",
      "确认不承诺自动成交、自动报价、自动审单、保证询盘或替代专业判断。"
    ],
    operatingSignals: [
      "公开课中用户追问作业如何验收。",
      "私域用户担心学完只有提示词。",
      "短视频评论集中问行业能否替换。",
      "企业客户关注团队 SOP 和岗位训练。",
      "内容使用后出现授权、脱敏或承诺边界争议。"
    ],
    writebackTargets: [
      "报名页成果证据路由",
      "推广素材生产台",
      "公开课脚本",
      "资源中心 FAQ",
      "运营手册版本回写"
    ]
  },
  campaignBriefBuilder: {
    title: "推广内容 Brief 生成器",
    description: "把运营每天反复要写的选题、脚本、证据页、CTA 和宣传边界变成可复制 brief，再交给 Codex 扩写成具体内容。",
    exportFilename: "marketing-campaign-brief-output.md",
    defaults: {
      channel: "short-video",
      audience: "experienced-sales",
      pain: "inquiry",
      assetType: "demo-script",
      conversionGoal: "demo-lesson",
      boundaryMode: "public-demo"
    },
    channels: [
      {
        id: "private-domain",
        label: "社群与私域",
        format: "短帖 + 私聊跟进",
        cadence: "每周 3-5 条短内容，每周 1 次资料领取提醒。",
        proofRoute: ["resources.html", "enrollment.html"],
        tone: "直接、业务化、少概念，优先让用户说出自己的真实痛点。",
        landing: "资源中心 -> 报名路径"
      },
      {
        id: "short-video",
        label: "短视频 / 直播",
        format: "演示脚本 + 屏幕录制",
        cadence: "每周 2-3 条演示短视频，每月 1 场公开直播课。",
        proofRoute: ["tools.html", "case-integrated-house.html", "resources.html"],
        tone: "先展示外贸动作，再展示 Codex 输出，最后说明人工确认。",
        landing: "工具中心 -> 资源中心 -> 报名路径"
      },
      {
        id: "long-article",
        label: "公众号 / 长文章",
        format: "长文提纲 + 案例拆解",
        cadence: "每周 1 篇深度文章，每月 1 篇案例复盘。",
        proofRoute: ["cases.html", "course.html", "playbook.html"],
        tone: "解释业务逻辑、课程结构和案例复用方式，少用刺激性标题。",
        landing: "案例中心 -> 课程体系 -> 报名路径"
      },
      {
        id: "enterprise-referral",
        label: "企业转介绍",
        format: "诊断说明 + 会议邀约",
        cadence: "每月整理 3 个企业问题，每季度沉淀 1 个行业样板。",
        proofRoute: ["enterprise.html", "automation.html", "tools.html"],
        tone: "强调流程诊断、岗位协同、字段标准化和项目边界。",
        landing: "企业服务 -> 自动化地图 -> 工具中心"
      }
    ],
    audiences: [
      {
        id: "newcomer",
        label: "外贸新人",
        concern: "不知道从产品资料、客户开发、询盘回复还是报价开始学。",
        proofNeed: "先证明课程能把基础业务动作拆成表格、清单和回复草稿。",
        followQuestion: "你现在是否有一个主推产品和一封可脱敏询盘？",
        routeHint: "先领取资料，再进入系统课基础模块。"
      },
      {
        id: "experienced-sales",
        label: "有经验业务员",
        concern: "每天被资料整理、回复、报价、跟单和单证检查占用时间。",
        proofNeed: "证明 Codex 能减少重复整理和初稿生成，但最终判断仍由业务员确认。",
        followQuestion: "你最想先减少询盘、报价、订单还是单证哪一段重复劳动？",
        routeHint: "直接看工具演示，再判断是否进入系统实战课。"
      },
      {
        id: "manager",
        label: "外贸主管 / 老板",
        concern: "团队做法不统一，新人培训慢，报价和交付风险依赖个人经验。",
        proofNeed: "证明课程能沉淀 SOP、岗位交付物和统一风险边界。",
        followQuestion: "团队目前是否有统一报价字段、订单主数据和人工审批节点？",
        routeHint: "先看企业服务或团队内训路径。"
      },
      {
        id: "enterprise",
        label: "企业客户",
        concern: "想知道是否值得做企业内训、流程诊断或轻量工具原型。",
        proofNeed: "证明先诊断流程，再确认内训、工具和 SOP 范围。",
        followQuestion: "是否能提供脱敏产品、询盘、报价表或订单样例用于诊断？",
        routeHint: "进入企业诊断前沟通。"
      }
    ],
    pains: [
      {
        id: "repeat-work",
        label: "重复劳动",
        headline: "外贸每天重复整理的动作，哪些可以先工具化？",
        hook: "你每天花最多时间的不是谈客户，而是反复整理资料、复制字段和检查表格。",
        caseAngle: "用集成房屋案例演示同一份产品资料如何进入客户开发、询盘、报价和订单跟进。",
        demoPoint: "展示重复劳动自测表和首页 7 个工具输出。",
        evidenceAssets: ["重复劳动自测表", "首页工具证明", "自动化地图"]
      },
      {
        id: "inquiry",
        label: "询盘识别",
        headline: "一封英文询盘先拆需求，再决定是否报价。",
        hook: "客户问价时不要急着报价，先把已知需求、缺失字段和风险点拆出来。",
        caseAngle: "沙特客户采购 80 套 20ft 可扩展集成房屋，询问 CIF Jeddah 和 DDP 可能性。",
        demoPoint: "现场展示询盘识别、补问清单和英文回复草稿。",
        evidenceAssets: ["询盘识别演示器", "集成房屋案例页", "10 分钟试听课"]
      },
      {
        id: "quotation",
        label: "报价漏项",
        headline: "FOB/CIF/DDP 报价先拆费用项，再谈价格。",
        hook: "报价不是让 AI 编一个数字，而是把成本、贸易术语、有效期和人工确认点列清楚。",
        caseAngle: "把 80 套集成房屋的费用项拆成 FOB/CIF 结构，并标出 DDP 清关和税费风险。",
        demoPoint: "展示报价测算器、费用项清单和人工确认字段。",
        evidenceAssets: ["报价测算器", "报价费用项清单", "课程 M6 模块"]
      },
      {
        id: "documents",
        label: "单证冲突",
        headline: "PI、CI、PL 不一致，出货前先做字段检查。",
        hook: "单证风险往往不是大错误，而是品名、数量、金额、唛头和交期字段不一致。",
        caseAngle: "用集成房屋订单资料演示 PI、CI、PL 的一致性检查和冲突修复。",
        demoPoint: "展示单证检查器、冲突报告和人工复核边界。",
        evidenceAssets: ["单证检查器", "单证一致性样例", "风险边界页"]
      },
      {
        id: "enterprise-sop",
        label: "团队 SOP",
        headline: "企业提效先统一字段、岗位和审批边界。",
        hook: "团队不是缺一个 AI 工具，而是缺统一输入、统一输出和统一确认人。",
        caseAngle: "用集成房屋课程资产演示如何从样板订单进入岗位训练和 SOP 共建。",
        demoPoint: "展示企业诊断分流器、资料清单和训练计划映射。",
        evidenceAssets: ["企业诊断资料包", "训练计划映射", "交付验收台"]
      }
    ],
    assetTypes: [
      {
        id: "short-post",
        label: "社群短内容",
        deliverable: "150-300 字短帖 + 1 个互动问题 + 1 个资源 CTA。",
        structure: ["痛点提问", "业务案例一句话", "页面证据", "资料 CTA", "边界提醒"],
        codexTask: "Codex 根据 brief 扩写 3 个短帖版本，并生成私聊跟进问题。",
        humanCheck: "人工确认语气不夸大、不制造焦虑、不暗示自动成交。"
      },
      {
        id: "demo-script",
        label: "演示短视频脚本",
        deliverable: "60-90 秒口播脚本 + 3 个镜头提示 + 页面跳转顺序。",
        structure: ["开场问题", "案例输入", "工具输出", "人工边界", "领取资料"],
        codexTask: "Codex 生成口播稿、镜头脚本、字幕要点和封面标题候选。",
        humanCheck: "人工确认演示数据是样例，价格、交期和风险结论不作为真实承诺。"
      },
      {
        id: "webinar-outline",
        label: "公开课提纲",
        deliverable: "30-60 分钟公开课大纲 + 每段页面证据 + 课后跟进动作。",
        structure: ["开场定位", "案例导入", "工具演示", "课程解释", "顾虑处理", "分流 CTA"],
        codexTask: "Codex 生成公开课大纲、讲师提示卡和课后分流话术。",
        humanCheck: "人工确认报名、企业诊断、价格和排课信息。"
      },
      {
        id: "long-article",
        label: "长文章提纲",
        deliverable: "文章标题、结构大纲、案例段落、工具截图点和结尾 CTA。",
        structure: ["行业痛点", "业务流程", "集成房屋案例", "工具化方法", "学习路径", "边界说明"],
        codexTask: "Codex 生成文章大纲、段落摘要和配图/截图需求清单。",
        humanCheck: "人工确认案例使用授权、行业适配说法和服务承诺边界。"
      },
      {
        id: "consultation-note",
        label: "咨询备忘",
        deliverable: "一页式咨询前备忘 + 证据链接 + 补问问题 + 推荐路径。",
        structure: ["用户背景", "核心痛点", "证据页面", "补问问题", "推荐路径", "承诺边界"],
        codexTask: "Codex 整理用户线索，生成课程顾问咨询备忘和下一步跟进摘要。",
        humanCheck: "人工确认用户是否适合报名、是否进入企业诊断和是否需要暂缓。"
      }
    ],
    conversionGoals: [
      {
        id: "resource",
        label: "资料领取",
        cta: "领取重复劳动自测表、报价费用项清单或集成房屋案例字段包。",
        nextPage: ["resources.html"],
        followup: "24 小时内根据下载资料追问真实业务阶段。"
      },
      {
        id: "demo-lesson",
        label: "试听演示",
        cta: "观看 10 分钟询盘识别演示，或提交一封脱敏询盘做结构匹配。",
        nextPage: ["tools.html", "case-integrated-house.html"],
        followup: "试听后引导查看课程体系或报名路径。"
      },
      {
        id: "enrollment",
        label: "系统课报名",
        cta: "查看系统课 12 个模块和学员最终工具包，确认是否适合报名。",
        nextPage: ["course.html", "enrollment.html", "learning.html"],
        followup: "课程顾问确认资料准备、学习目标、价格和排课。"
      },
      {
        id: "enterprise",
        label: "企业诊断",
        cta: "预约 15 分钟诊断前沟通，提交脱敏产品、询盘、报价或订单样例。",
        nextPage: ["enterprise.html", "automation.html"],
        followup: "企业服务负责人确认资料权限、参会岗位和诊断范围。"
      },
      {
        id: "nurture",
        label: "继续培育",
        cta: "先领取资料和观看公开课，不急于报名。",
        nextPage: ["resources.html", "marketing.html"],
        followup: "按 7 天、14 天和 30 天节奏发送案例、工具和边界教育内容。"
      }
    ],
    boundaryModes: [
      {
        id: "strict",
        label: "严格边界",
        rule: "不得承诺自动开发客户、自动成交、自动报价、自动审单或替代业务员。",
        closing: "适合社群、私聊和报名咨询，优先建立长期信任。"
      },
      {
        id: "public-demo",
        label: "公开演示边界",
        rule: "所有页面、工具和案例都说明为课堂样例，真实价格、交期、付款、认证和清关必须人工确认。",
        closing: "适合短视频、直播和公开课。"
      },
      {
        id: "enterprise",
        label: "企业服务边界",
        rule: "未诊断前不承诺系统范围、工具开发周期、项目价格、效率结果或替代 ERP/CRM。",
        closing: "适合企业转介绍、诊断预约和团队内训沟通。"
      }
    ]
  },
  webinarScript: [
    {
      stage: "00",
      title: "开场定位",
      screen: "首页痛点区",
      talk: "今天不讲万能提示词，先讲外贸人每天被哪些重复动作消耗。",
      action: "让观众在评论或表单里选出最耗时的 1 个环节。",
      cta: "领取重复劳动自测表。"
    },
    {
      stage: "01",
      title: "案例导入",
      screen: "集成房屋案例页",
      talk: "用沙特 80 套集成房屋询盘说明真实业务不是一句提示词能解决。",
      action: "展示客户需求、缺失字段和人工确认边界。",
      cta: "进入案例页查看完整链路。"
    },
    {
      stage: "02",
      title: "工具演示",
      screen: "工具中心",
      talk: "同一封询盘可以转成需求表、补问问题、报价前检查和回复草稿。",
      action: "现场运行询盘识别、报价测算或单证检查演示器。",
      cta: "领取对应资料包。"
    },
    {
      stage: "03",
      title: "课程解释",
      screen: "课程体系页",
      talk: "系统课按客户开发、询盘、报价、订单和单证推进，每节课都有输出物。",
      action: "展示 12 个课程模块和作业验收标准。",
      cta: "查看报名路径。"
    },
    {
      stage: "04",
      title: "顾虑处理",
      screen: "报名路径页",
      talk: "不会编程、行业不同、担心 AI 不靠谱，这些问题都用课程边界解释清楚。",
      action: "按新人、业务员、老板三类人群分流。",
      cta: "提交自己的学习场景。"
    },
    {
      stage: "05",
      title: "成交动作",
      screen: "报名路径 / 企业服务",
      talk: "个人进入系统课，团队或企业先做流程诊断，不适合的人先领资料预习。",
      action: "给出明确下一步，不制造焦虑。",
      cta: "报名系统课或预约企业诊断。"
    }
  ],
  repurposeMap: [
    {
      source: "集成房屋完整案例",
      derivedAssets: ["长文章", "直播案例", "短视频脚本", "企业诊断样板"],
      landingRoute: "案例中心 -> 工具中心 -> 报名路径",
      classroomReuse: "作为系统课第一套完整演示案例。"
    },
    {
      source: "询盘识别演示器",
      derivedAssets: ["10分钟试听课", "社群互动题", "短视频录屏", "开发信前置问题清单"],
      landingRoute: "工具中心 -> 资源中心 -> 系统课",
      classroomReuse: "作为 M4 询盘识别模块的课堂演示。"
    },
    {
      source: "报价费用项清单",
      derivedAssets: ["报价避坑文章", "直播答疑", "企业流程诊断问题", "报价课作业模板"],
      landingRoute: "资源中心 -> 课程体系 -> 企业服务",
      classroomReuse: "作为 M6 报价测算模块的作业输入。"
    },
    {
      source: "单证一致性检查样例",
      derivedAssets: ["风险案例短内容", "单证检查下载", "企业 SOP 说明", "课后作业题"],
      landingRoute: "工具中心 -> 资源中心 -> 企业服务",
      classroomReuse: "作为 M9 单证检查模块的冲突演示。"
    }
  ],
  metricsBoard: [
    {
      metric: "资料领取数",
      owner: "市场运营",
      source: "资源中心下载、社群表单、私域领取记录",
      action: "判断哪个资料包最能触发报名咨询。"
    },
    {
      metric: "试听课完成率",
      owner: "课程运营",
      source: "公开视频数据、直播观看记录、私域反馈",
      action: "低于预期时优化开场痛点和案例演示节奏。"
    },
    {
      metric: "有效咨询率",
      owner: "课程顾问",
      source: "线索分级、咨询问题、是否有脱敏业务样例",
      action: "区分系统课、免费资料预习和企业诊断路径。"
    },
    {
      metric: "报名转化原因",
      owner: "运营负责人",
      source: "成交记录、未成交原因、学员顾虑",
      action: "反向更新报名页 FAQ、资源页说明和试听课脚本。"
    },
    {
      metric: "企业诊断预约数",
      owner: "企业服务负责人",
      source: "企业表单、转介绍、直播咨询、老学员推荐",
      action: "判断是否需要新增企业案例、服务包或诊断资料。"
    }
  ],
  claimBoundaries: [
    "推广内容不能承诺自动开发客户、自动成交、自动报价或自动替代业务员。",
    "所有价格、利润、交期、付款、认证、清关、报关、税务和法律事项必须保留人工确认边界。",
    "案例和工具演示必须说明是课堂样例，不能暗示适用于所有行业和所有企业。",
    "企业服务必须先做流程诊断，再确认内训、工具定制和 SOP 改造范围。",
    "使用学员或企业案例做宣传前必须脱敏，并获得授权。"
  ]
};
