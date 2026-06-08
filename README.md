# Training Platform Blueprint

This folder is the website-first structure for the long-term training company platform.

The site should become the source of truth for:

- Lead generation, commercial proof routing, trial-class conversion, and course conversion.
- Enrollment conversion command center for lead routing, proof mapping, and sales review.
- Commercial product packaging for course SKUs, delivery promises, boundary confirmation, and renewal review.
- Course delivery and classroom presentation.
- Classroom runbooks, demo switching, instructor replication, homework review, repair tracking, and post-class maintenance.
- Learner workspace for onboarding, homework, deliverable review, and final portfolio packaging.
- Automation map for Codex roles, tool outputs, priorities, and manual boundaries.
- Case demonstrations.
- Tool library previews, productization roadmaps, and future interactive tools.
- Codex prompt library and governance workflow.
- Resource downloads, follow-up routing, and lead nurturing.
- Marketing operations, daily sales ops, proof campaign routing, and campaign planning.
- Enterprise training, diagnosis-to-training-plan mapping, consulting entry points, and delivery acceptance boards.
- Internal operating playbook for long-term platform maintenance, first-draft launch readiness, platform health audits, audit remediation routing, remediation closeout review, tool sprint execution, release write-back routing, version review, data governance, and release planning.

The first complete course and case are:

- Course: 外贸业务 Codex 自动化实战课
- Case: 20ft 可扩展集成房屋出口项目

## Maintenance Rule

Do not hard-code course content into page markup when avoidable. Add or update content in `data/*.js`, then let the page render it.

Keep global navigation in `data/site.js` under `site.navigation`; page headers render from that single source.

## Verification

Run the platform verifier after adding or changing pages, data files, downloads, cross-page routes, or interactive tools:

```sh
node scripts/verify-platform.mjs
```

For the release-style check that also starts a temporary local server and verifies key HTTP targets:

```sh
node scripts/verify-platform.mjs --http
```

The verifier checks JavaScript syntax, local HTML assets, data-layer page routes, cross-page anchors, download inventory, and key HTTP responses. It is intended to preserve the long-term platform rule that every update remains page-routable, downloadable, and maintainable from `data/*.js`.

Current V1 inventory baseline: 14 HTML pages, 14 data files, and 168 download assets.

## First Build Stages

1. Static architecture shell.
2. Data-driven landing page and course overview.
3. Classroom delivery desk, case center, and integrated-house case page.
4. Tool previews.
5. Prompt library.
6. Resource center and operating playbook.
7. Interactive tools.
8. Student, marketing, and enterprise service layers.

## Current Pages

- `index.html` — platform overview, role-based entry router, trial-class conversion bridge, integrated public lesson route, commercial proof navigator, first-draft delivery guide, current 7-tool proof, and long-term training company navigation.
- `course.html` — course delivery center with workflow tracks, module cards, cohort delivery planner, 12-module delivery blueprint, and module linkage desk for case, tool, prompt, homework, enrollment proof, and enterprise handoff routing.
- `classroom.html` — classroom runbook, integrated-house system lesson route, lesson builder, demo switchboard, lesson execution desk, instructor replication, rehearsal gate, homework review pipeline, repair desk, QA playbook, and post-class maintenance.
- `learning.html` — learner paths, onboarding desk, progress roadmap, deliverable checklist, submission rules, integrated-house formal lesson homework handoff, 5-toolchain learner assignment review, portfolio packaging, deliverable evidence library, portfolio brief builder, post-course application review router, and final portfolio.
- `automation.html` — Codex automation map, workflow boundaries, automation scope router, tool priority, implementation flow, and risk gates.
- `enrollment.html` — enrollment decision path, audience segmentation, offer structure, trial-class follow-up desk, conversion command center, consultation router, offer brief builder, proof desk, outcome proof center, 5-toolchain proof routing, formal-lesson showcase proof router, post-course application proof router, onboarding handoff, outcomes, and learner objections.
- `cases.html` — case center overview, first complete case entry, industry readiness scoring, replication planner, machinery field-replacement validation, case sprint command center, publication/resource routing, replication kit, and future case roadmap.
- `case-integrated-house.html` — first complete classroom case for integrated-house export, including 90-minute standard lesson pack, screen-by-screen speaker script, public-demo conversion scripts, demo command desk, 5-tool end-to-end closeout route, inquiry, quotation, order, document, and risk demonstration flow.
- `tools.html` — tool library planning, interactive demos, product profile gap copy/export, lead follow-up copy/export, inquiry reply copy/export, quotation field lock/export, order progress copy/export, document report copy/export, payment risk copy/export, build specs, demand scoring, productization brief builder, launch roadmap, classroom acceptance loop, real-sample validation board, and future tool entry.
- `prompts.html` — reusable Codex prompt library, prompt composer, deployment and acceptance desk, performance review router, classroom prompt pack, governance workflow, and quality checks.
- `resources.html` — resource package, resource finder, platform evidence governance downloads, demo lesson, request-intake router, lead tagging, follow-up routing, 7-day conversion review, and template download planning.
- `marketing.html` — promotion operations, conversion funnel, daily ops desk, campaign calendar, asset factory, formal-lesson proof campaign router, campaign brief builder, public lesson script, and claim boundaries.
- `enterprise.html` — enterprise training, workflow diagnosis router, diagnosis brief builder, learner-to-enterprise signal intake, 5-toolchain enterprise signal intake, proposal approval desk, project kickoff command center, intake kit, diagnosis-to-training-plan mapper, delivery acceptance board, delivery evidence write-back router, renewal expansion router, customization, and SOP services.
- `playbook.html` — operating guide, first-draft launch readiness desk, visual and responsive QA gate, platform health audit desk, audit remediation router, remediation closeout review, daily operating console, tool sprint command center, goal compliance matrix, evidence coverage index, self-check workbench, release board, write-back router, maintenance log builder, version review, data governance, commercial packaging, commercial offer boundary review, and maintenance standards for course, case, tool, resource, and services.

## Current Data Files

- `data/home.js` — homepage entry router, trial-class conversion bridge, integrated public lesson route, commercial proof navigator, first-draft delivery guide, pain points, workflow narrative, tool previews, risk boundary, and company course standards.
- `data/site.js` — platform architecture, page hero copy, resources, platform evidence governance, case sprint and publication downloads, resource request intake, lead tagging, follow-up and 7-day conversion review routing, enterprise renewal downloads, and enterprise services.
- `data/enrollment.js` — enrollment metrics, audience paths, course packages, sales desk, trial-class follow-up desk, conversion command center, consultation router, offer brief builder, proof desk, outcome proof board, 5-toolchain proof routing, formal-lesson showcase proof router, post-course application proof router, onboarding handoff, learning path, outcomes, qualification checks, and concerns.
- `data/playbook.js` — operating guide metrics, first-draft launch readiness desk, visual and responsive QA gate, platform health audit desk, audit remediation router, remediation closeout review, daily operating console, tool sprint command center, long-term goal compliance matrix, evidence coverage index, self-check workbench, release board, write-back router, maintenance log builder, version review, data governance, commercial packaging, commercial offer boundary review, principles, page standards, release checklists, and roadmap.
- `data/enterprise.js` — enterprise diagnosis focus, diagnosis router, diagnosis brief builder, learner-to-enterprise signal intake, 5-toolchain enterprise signal intake, proposal approval desk, project kickoff command center, intake kit, training plan mapper, service packages, delivery board, delivery evidence write-back router, renewal expansion router, implementation flow, readiness checks, risk boundaries, and FAQs.
- `data/marketing.js` — marketing funnel, daily ops desk, channel playbooks, campaign calendar, asset factory, formal-lesson proof campaign router, campaign brief builder, webinar script, reuse map, metrics, and claim boundaries.
- `data/cases.js` — case center metrics, case library cards, readiness board, replication planner, machinery field-replacement validation, case sprint command center, publication/resource router, replication kit, standards, platform links, and expansion roadmap.
- `data/course-foreign-trade-codex.js` — workflow tracks, course delivery plan, cohort delivery planner, 12-module delivery blueprint, module linkage desk, homework rubric, teaching checklist, and course modules.
- `data/classroom.js` — classroom runbook, integrated-house system lesson route, lesson builder, demo switchboard, lesson execution desk, instructor replication, rehearsal gate, homework review pipeline, repair desk, module handoffs, QA playbook, and post-class maintenance.
- `data/learning.js` — learner paths, onboarding desk, progress roadmap, deliverable checklist, submission rules, integrated-house formal lesson homework handoff, 5-toolchain learner assignment review, portfolio packaging, deliverable evidence library, portfolio brief builder, post-course application review router, final portfolio, and learner boundaries.
- `data/automation.js` — workflow automation map, automation levels, automation scope router, tool priority backlog, implementation flow, risk gates, and integrated-house validation path.
- `data/case-integrated-house.js` — integrated-house product, inquiry, 90-minute standard lesson pack, screen-by-screen speaker script, public-demo conversion scripts, quotation, order, document, risk case data, and demo command desk.
- `data/tools.js` — tool library metadata, classroom demos, build specs, demand scoring board, productization brief builder, launch board, classroom acceptance board, real-sample validation board, inputs, outputs, and manual boundaries.
- `data/prompts.js` — reusable Codex prompts, prompt composer, prompt deployment desk, performance review router, classroom prompt pack, governance board, workflow, and quality checks.

## Current Download Files

- `downloads/repeat-work-audit.csv` — repeated-work self-audit worksheet.
- `downloads/platform-goal-compliance-matrix.csv` — goal compliance matrix for checking every future course, page, tool, case, resource, and enterprise-service update against the long-term platform standard.
- `downloads/platform-evidence-coverage-index.csv` — platform evidence coverage index for mapping enrollment, course delivery, classroom demo, cases, tools, prompts, resources, enterprise service, and governance to pages, data files, downloads, Codex tasks, manual gates, owners, and review windows.
- `downloads/platform-evidence-review-template.md` — evidence coverage review template for recording page evidence, data files, downloads, manual boundaries, gaps, and write-back actions after classes, public lessons, enterprise diagnosis, tool launches, or releases.
- `downloads/first-draft-launch-readiness-board.csv` — first-draft launch readiness board for checking page evidence, UI status, downloads, commercial boundaries, owners, and next actions before internal review, public preview, trial class, enrollment consultation, or enterprise demo.
- `downloads/first-draft-launch-brief-template.md` — first-draft launch brief template for recording display scope, UI verification, no-go claims, trial-class talking points, and version write-back tasks.
- `downloads/platform-visual-qa-gate.csv` — visual and responsive QA gate for recording release context, page routes, desktop/mobile checks, style consistency, interactions, downloads, console status, manual boundaries, and release decisions.
- `downloads/platform-visual-qa-brief-template.md` — visual QA brief template for documenting screenshots, responsive checks, interaction checks, repair items, manual approvals, and maintenance write-back.
- `downloads/platform-maintenance-log-builder.csv` — maintenance log builder for recording update source, asset area, page routes, data files, downloads, validation status, release decision, manual checks, and next route.
- `downloads/platform-maintenance-log-release-note-template.md` — maintenance log and release note template for documenting changed files, validation evidence, manual boundaries, release notes, and next write-back tasks.
- `downloads/platform-health-audit-board.csv` — platform health audit board for reviewing enrollment, course, classroom, case, tools, prompts, resources, enterprise service, and governance evidence.
- `downloads/platform-health-audit-template.md` — platform health audit record template for weekly, monthly, quarterly, and pre-release evidence review.
- `downloads/audit-remediation-routing-board.csv` — audit remediation routing board for assigning health-audit, release, classroom, enrollment, and enterprise gaps to the correct execution chain.
- `downloads/audit-remediation-brief-template.md` — remediation execution brief template for version write-back, tool sprint, case sprint, resource asset, enterprise SOP, and governance review tasks.
- `downloads/remediation-review-acceptance-board.csv` — remediation acceptance board for checking completion evidence, validation, risk closure, business impact, and next destination.
- `downloads/remediation-closeout-template.md` — remediation closeout record template for accepted, partial, approval-needed, blocked, or next-version remediation work.
- `downloads/training-company-operating-desk.csv` — daily operating desk for routing enrollment, classroom, learner success, enterprise service, tool sprint, and platform release work.
- `downloads/daily-operating-brief-template.md` — daily operating brief template for morning planning, evening review, public lesson days, class start days, enterprise diagnosis, and release days.
- `downloads/homepage-entry-routing-board.csv` — homepage visitor routing board for mapping roles, pains, goals, evidence, Codex tasks, manual checks, and next actions.
- `downloads/homepage-entry-brief-template.md` — homepage entry route brief template for course consultation, trial lesson routing, enterprise diagnosis, and internal handoff.
- `downloads/trial-class-conversion-routing-board.csv` — trial-class conversion routing board for pre-class profiling, in-class evidence, 24-hour follow-up, system course consultation, enterprise diagnosis, and nurture actions.
- `downloads/trial-class-brief-template.md` — trial-class brief template for public lessons, private trial classes, enrollment consultation, and enterprise diagnosis pre-talks.
- `downloads/homepage-commercial-proof-map.csv` — commercial proof routing map for matching visitor segments, concerns, decision stages, proof pages, download assets, visible outputs, CTAs, and boundaries.
- `downloads/commercial-proof-brief-template.md` — commercial proof brief template for private consultation, trial-class follow-up, enterprise pre-diagnosis, and internal sales review.
- `downloads/integrated-house-toolkit.csv` — integrated-house case field package.
- `downloads/integrated-house-90min-lesson-runbook.csv` — 90-minute integrated-house standard lesson runbook for teacher actions, page routes, Codex operations, learner outputs, assistant checks, boundaries, and write-back targets.
- `downloads/integrated-house-standard-lesson-brief.md` — instructor brief template for running the integrated-house standard lesson, homework review, enrollment proof, enterprise replacement, and post-class write-back.
- `downloads/integrated-house-system-lesson-route.csv` — integrated-house system lesson route for the 90-minute formal class, connecting teacher actions, assistant checks, learner outputs, Codex support, manual gates, and platform write-back.
- `downloads/system-lesson-delivery-brief-template.md` — system lesson delivery brief template for pre-class preparation, classroom notes, homework acceptance, post-class write-back, and next-lesson repair planning.
- `downloads/system-lesson-assignment-handoff-board.csv` — formal lesson assignment handoff board for the 72-hour post-class loop, connecting learner submissions, assistant gates, Codex checks, manual boundaries, repair, showcase authorization, and write-back.
- `downloads/system-lesson-homework-submission-brief.md` — system lesson homework submission and authorization brief for learner files, sensitive-field masking, assistant review, teacher acceptance, showcase permission, and platform write-back.
- `downloads/enrollment-showcase-proof-router.csv` — formal-lesson showcase proof router for converting accepted learner homework into enrollment proof, public-showcase candidates, enterprise signals, or hold decisions with manual gates.
- `downloads/enrollment-showcase-authorization-checklist.md` — showcase authorization checklist for masking, permission scope, version lock, revocation path, page route, and no-go claims before using learner outputs in consultation or public proof.
- `downloads/enrollment-toolchain-proof-router.csv` — 5-toolchain enrollment proof router for turning inquiry, quotation, order, document, and payment-risk learner evidence into consultation proof, public candidates, enterprise signals, or hold decisions.
- `downloads/enrollment-toolchain-proof-brief-template.md` — 5-toolchain enrollment proof brief template for checking learner evidence, consultation use, visible proof, enterprise signals, approval gates, no-go claims, evidence status, and next routes.
- `downloads/enrollment-application-proof-router.csv` — post-course real-use proof router for moving verified learner application evidence into consultation proof, showcase review, enterprise diagnosis, course repair, tool sprint, or hold decisions.
- `downloads/enrollment-application-proof-brief-template.md` — post-course real-use proof brief template for recording source evidence, enrollment use, Codex assistance, authorization scope, and no-go claims.
- `downloads/marketing-proof-campaign-router.csv` — proof campaign router for using accepted formal-lesson outcomes in public lessons, private-domain content, long articles, advisor follow-up, and enterprise diagnosis with authorization gates.
- `downloads/marketing-proof-campaign-brief-template.md` — proof campaign brief template for checking source evidence, authorization, content structure, no-go claims, review ownership, and write-back tasks before publishing.
- `downloads/integrated-house-screen-by-screen-script.csv` — screen-by-screen integrated-house speaker script for live teaching, trial lessons, recordings, audience actions, proof points, transitions, and boundaries.
- `downloads/integrated-house-public-demo-conversion-script.md` — public-demo conversion script for integrated-house lessons, including opening, screen flow, resource CTA, enrollment CTA, enterprise diagnosis CTA, nurture route, and instructor checks.
- `downloads/public-lesson-route-board.csv` — public lesson route board for connecting homepage trial entry, integrated-house case, tool demos, classroom rehearsal, enrollment routing, enterprise diagnosis, and operating write-back.
- `downloads/public-lesson-route-brief-template.md` — public lesson route brief template for rehearsal, launch review, lead routing, no-go boundaries, and next-session platform updates.
- `downloads/demo-lesson-inquiry-analysis.md` — 10-minute inquiry analysis demo lesson outline.
- `downloads/integrated-house-demo-command-board.csv` — integrated-house demo command board for routing product, inquiry, quotation, order, document, and risk stages to tools, homework, enrollment proof, enterprise extensions, Codex tasks, and manual checks.
- `downloads/integrated-house-demo-brief-template.md` — integrated-house demo brief template for system classes, public demos, enrollment consultation, homework review, and enterprise training handoff.
- `downloads/integrated-house-toolchain-closeout-board.csv` — integrated-house 5-tool closeout board for checking inquiry, quotation, order, document, and payment risk tools across inputs, outputs, acceptance gates, next routes, Codex assistance, manual confirmation, homework assets, and write-back targets.
- `downloads/integrated-house-toolchain-closeout-brief-template.md` — integrated-house toolchain closeout brief template for recording formal-class, public-demo, enrollment, enterprise, and tool-release evidence across the full 5-tool route.
- `downloads/course-module-linkage-map.csv` — course module linkage map for connecting each module to integrated-house scenes, tools, prompts, downloads, homework evidence, enrollment proof, enterprise extensions, Codex tasks, and manual checks.
- `downloads/course-module-linkage-brief-template.md` — module linkage brief template for lesson preparation, public demo scripts, consultation proof, and enterprise training handoff.
- `downloads/quotation-cost-checklist.csv` — FOB/CIF/DDP quotation cost checklist.
- `downloads/lead-field-library.csv` — customer development field library.
- `downloads/lead-followup-homework-template.md` — lead follow-up homework template for customer fields, A/B/C scoring, next actions, outreach angle, and manual confirmation boundaries.
- `downloads/document-consistency-check.csv` — PI/CI/PL consistency check sample.
- `downloads/document-consistency-homework-template.md` — document consistency homework template for PI/CI/PL field comparison, document release gate, field evidence, conflict report, repair review, professional approval gates, export acceptance, and manual confirmation boundaries.
- `downloads/enterprise-diagnosis-intake.md` — enterprise workflow diagnosis interview template.
- `downloads/enterprise-material-checklist.csv` — enterprise diagnosis material collection checklist.
- `downloads/enterprise-readiness-scorecard.csv` — enterprise readiness and service routing scorecard.
- `downloads/enterprise-learner-signal-intake-router.csv` — learner real-use to enterprise diagnosis signal intake router for authorization, decision-maker, role scope, route decision, Codex assistance, and no-go boundaries.
- `downloads/enterprise-learner-signal-brief-template.md` — learner-to-enterprise signal brief template for recording source evidence, team feedback, role scope, authorization, recommended route, and manual gates.
- `downloads/enterprise-toolchain-signal-intake-board.csv` — 5-toolchain enterprise diagnosis signal intake board for routing inquiry, quotation, order, document, and payment-risk evidence into diagnosis materials, service suggestions, Codex assistance, human gates, and no-go commitments.
- `downloads/enterprise-toolchain-signal-brief-template.md` — 5-toolchain enterprise diagnosis brief template for recording source learner evidence, enterprise authorization, role scope, service recommendation, manual gates, no-go promises, and platform write-back.
- `downloads/enterprise-training-plan-mapper.csv` — diagnosis-to-training-plan mapper for enterprise training scope, roles, outputs, SOP tasks, and acceptance evidence.
- `downloads/enterprise-training-scope-brief.md` — enterprise training scope confirmation brief for materials, boundaries, acceptance, and next steps.
- `downloads/enterprise-proposal-approval-board.csv` — enterprise proposal approval board for confirming post-diagnosis service package, data authorization, scope, commercial approval, product/technical review, and kickoff handoff.
- `downloads/enterprise-project-kickoff-brief-template.md` — enterprise project kickoff brief template for service scope, authorization, responsibilities, deliverables, acceptance evidence, and no-go commitments.
- `downloads/enterprise-project-kickoff-command-center.csv` — enterprise project kickoff command center for startup mode, scope, roles, data-room state, first milestone, risk gates, owners, and review windows.
- `downloads/enterprise-project-kickoff-meeting-note-template.md` — kickoff meeting note template for signed/approved enterprise projects, data room, role handoff, first deliverables, risk gates, and next actions.
- `downloads/enterprise-delivery-writeback-router.csv` — enterprise delivery evidence write-back router for moving accepted evidence into cases, tools, resources, SOP, renewal briefs, or internal archive with authorization gates.
- `downloads/enterprise-delivery-evidence-authorization-template.md` — enterprise delivery evidence authorization template for recording source, acceptance, usage scope, masking requirements, risk boundaries, and withdrawal path.
- `downloads/tool-build-brief-template.csv` — reusable tool development specification template.
- `downloads/inquiry-analyzer-build-brief.md` — first complete build brief for the inquiry analyzer.
- `downloads/product-profile-homework-template.md` — product profile homework template for product fields, readiness status, missing materials, reuse mapping, English draft, and manual confirmation boundaries.
- `downloads/inquiry-analysis-homework-template.md` — inquiry analysis homework template for known needs, field evidence, readiness score, missing fields, follow-up questions, reply draft, next route, export acceptance, and manual boundaries.
- `downloads/quotation-calculation-homework-template.md` — quotation calculation homework template for cost fields, FOB/CIF structure, field evidence, release gate, approval checklist, risk reminders, reply draft, export acceptance, and manual confirmation boundaries.
- `downloads/order-tracking-homework-template.md` — order tracking homework template for order nodes, fulfillment gate, node evidence, delivery risk alerts, approval gates, customer progress draft, next routes, export acceptance, and manual confirmation boundaries.
- `downloads/payment-risk-homework-template.md` — payment risk homework template for payment terms, approval gate, risk evidence, DDP responsibility, approval roles, negotiation alternatives, reply draft, next routes, export acceptance, and manual confirmation boundaries.
- `downloads/tool-demand-scorecard.csv` — tool demand scoring table for prioritizing classroom, homework, enterprise, and marketing tool needs.
- `downloads/tool-priority-sprint-plan.md` — sprint planning template for tool scope, validation evidence, deferral reasons, and next updates.
- `downloads/automation-scope-assessment-router.csv` — automation scope assessment router for deciding whether a workflow becomes a prompt, checklist, light tool, enterprise project, or no-go item.
- `downloads/automation-scope-brief-template.md` — automation scope brief template for recording business action, input readiness, recommended scope, Codex assist, manual gates, and launch checks.
- `downloads/tool-commercialization-readiness-board.csv` — tool commercialization readiness board for mapping tool candidate, source signal, maturity, target user, delivery scope, commercial route, evidence, Codex tasks, manual boundaries, and next action.
- `downloads/tool-productization-brief-template.md` — tool productization brief template for turning a repeated workflow into course, development, sales, enterprise delivery, and boundary planning.
- `downloads/tool-sprint-command-center.csv` — tool sprint command center for connecting productization briefs to development, classroom validation, enterprise approval, release targets, and version write-back.
- `downloads/tool-sprint-review-template.md` — tool sprint review template for recording development scope, Codex tasks, manual approvals, verification, unfinished repairs, and platform write-back.
- `downloads/release-writeback-routing-board.csv` — release write-back routing board for mapping feedback source, asset area, evidence level, update action, risk mode, files, downloads, owners, validation, and review window.
- `downloads/release-writeback-note-template.md` — release write-back note template for maintenance logs after tool release, classroom review, enrollment feedback, resource download, enterprise delivery, or case expansion.
- `downloads/tool-productization-roadmap.csv` — tool productization roadmap for staging classroom ideas into launchable tools.
- `downloads/tool-launch-acceptance-checklist.md` — launch acceptance checklist for interactive tool release and maintenance.
- `downloads/tool-classroom-acceptance-board.csv` — classroom acceptance board for checking light interactive tools across teaching, homework, export, next route, write-back, and manual boundaries.
- `downloads/tool-classroom-acceptance-brief-template.md` — classroom acceptance review template for recording tool trial evidence, homework requirements, export checks, manual boundaries, and version write-back.
- `downloads/tool-sample-validation-board.csv` — real-sample validation board for checking whether light interactive tools still work with sanitized learner or enterprise samples.
- `downloads/tool-sample-validation-brief-template.md` — real-sample validation brief template for recording authorization, input evidence, output quality, manual boundaries, and version write-back.
- `downloads/integrated-house-prompt-pack.md` — classroom prompt pack for the integrated-house case.
- `downloads/prompt-quality-checklist.csv` — prompt quality checklist for teaching and homework review.
- `downloads/prompt-deployment-routing-board.csv` — prompt deployment routing board for assigning prompts to course delivery, homework review, tool specs, public proof, resource follow-up, and enterprise SOP.
- `downloads/prompt-deployment-brief-template.md` — prompt deployment brief template for classroom preparation, assistant review, tool sprints, consultation proof, and enterprise handoff.
- `downloads/prompt-performance-review-router.csv` — prompt performance review router for deciding whether deployed prompts should scale, repair, hold, or roll back.
- `downloads/prompt-optimization-brief-template.md` — prompt optimization brief template for recording output evidence, issue attribution, Codex repair tasks, manual gates, and version write-back.
- `downloads/prompt-governance-board.csv` — prompt governance board for prompt creation, industry replacement, and version maintenance.
- `downloads/prompt-industry-replacement-template.md` — industry replacement template for adapting integrated-house prompts to other products.
- `downloads/platform-release-audit.csv` — release audit checklist for every platform update.
- `downloads/content-maintenance-log.csv` — maintenance log template for tracking content changes.
- `downloads/platform-maintenance-log-builder.csv` — maintenance log builder for release archive, repair closeout, resource updates, tool launches, and enterprise delivery records.
- `downloads/platform-maintenance-log-release-note-template.md` — release note brief template for platform updates, validation records, human gates, and next-route write-back.
- `downloads/curriculum-version-review-board.csv` — version review board for scoring sales, classroom, tool, case, resource, and enterprise feedback.
- `downloads/platform-version-release-note.md` — release note template for version scope, evidence, integrated-house validation, boundaries, checks, and follow-up.
- `downloads/data-sanitization-authorization-board.csv` — data governance board for sanitization, authorization scope, public use, tool testing, and withdrawal review.
- `downloads/public-showcase-authorization-note.md` — public showcase authorization note for learner work, enterprise samples, demo lessons, and marketing evidence.
- `downloads/course-product-sku-delivery-matrix.csv` — commercial product SKU and delivery matrix for free resources, system course, coaching, enterprise diagnosis, training, and tool/SOP projects.
- `downloads/commercial-offer-boundary-note.md` — commercial offer boundary confirmation note for payment, enterprise signing, delivery handoff, renewal, and upgrade review.
- `downloads/commercial-offer-review-router.csv` — commercial offer boundary review router for checking product packages, evidence state, scope, risk mode, next action, manual reviewers, and no-go claims before payment, signing, or renewal.
- `downloads/commercial-offer-review-brief-template.md` — commercial offer review brief template for recording fit, deliverables, evidence pages, download assets, Codex assist scope, manual approvals, no-go commitments, and maintenance write-back.
- `downloads/industry-case-build-brief.md` — industry case build brief template.
- `downloads/industry-case-intake.csv` — industry case intake checklist for new case data.
- `downloads/industry-case-readiness-scorecard.csv` — industry case readiness scorecard for ranking complete case, resource pack, classroom fragment, or deferral decisions.
- `downloads/industry-case-field-replacement-board.csv` — industry case field-replacement validation board for checking whether integrated-house case fields can migrate into adjacent industries such as machinery equipment.
- `downloads/industry-case-field-replacement-brief-template.md` — industry case field-replacement brief template for recording sample authorization, replacement fields, tool outputs, manual boundaries, and publishing decisions.
- `downloads/industry-case-sprint-plan.md` — industry case sprint planning template for scope, missing materials, platform links, and deferral reasons.
- `downloads/industry-case-sprint-command-center.csv` — industry case sprint command center for routing candidate industries into full case, resource pack, marketing fragment, enterprise diagnosis, or hold decisions with evidence, pages, downloads, Codex tasks, manual gates, owners, review windows, and next actions.
- `downloads/industry-case-sprint-brief-template.md` — industry case sprint brief template for recording candidate evidence, current sprint delivery, Codex assistance, manual approval gates, publish decisions, and no-go commitments.
- `downloads/industry-case-publication-router.csv` — industry case publication router for deciding whether a case sprint output enters a full case, classroom fragment, resource pack, marketing asset, enterprise diagnosis material, or internal archive.
- `downloads/industry-case-publication-brief-template.md` — industry case publication brief template for recording publishing scope, authorization boundaries, page routes, download assets, manual approvals, no-go claims, and version write-back.
- `downloads/course-delivery-blueprint.csv` — 12-module delivery blueprint for lesson planning and homework review.
- `downloads/course-cohort-delivery-plan.csv` — cohort delivery plan for system classes, coaching packs, public demo conversion, enterprise training, weekly modules, homework evidence, owners, and manual boundaries.
- `downloads/course-cohort-brief-template.md` — cohort delivery brief template for enrollment confirmation, class opening, teacher preparation, assistant review, and enterprise handoff.
- `downloads/lesson-runbook-template.md` — single-lesson runbook template for classroom delivery and maintenance.
- `downloads/classroom-delivery-desk.csv` — classroom execution desk for live teaching, demos, checks, and maintenance.
- `downloads/instructor-delivery-certification.csv` — instructor and assistant certification table for trial teaching, tool demos, homework review, public lesson conversion, and enterprise training replacement.
- `downloads/teaching-observation-review.md` — teaching observation review template for class audit, instructor calibration, conversion claims, and maintenance follow-up.
- `downloads/classroom-rehearsal-gate-board.csv` — classroom rehearsal gate board for checking screen-by-screen trial teaching, tool demos, public lesson conversion CTA, launch decisions, no-go boundaries, and write-back targets.
- `downloads/public-demo-launch-review-template.md` — public demo launch review template for pre-launch checks, screen-by-screen review, lead routing, high-frequency questions, no-go claim review, and next-session updates.
- `downloads/assignment-review-scorecard.csv` — homework review scorecard for assistant checks and repair guidance.
- `downloads/assignment-repair-tracker.csv` — assignment repair tracker for review status, repair tasks, and showcase readiness.
- `downloads/assignment-showcase-intake-template.md` — showcase intake template for sanitized and authorized excellent homework examples.
- `downloads/learner-onboarding-material-checklist.csv` — learner onboarding material checklist for pre-class inputs, sanitization, and first-lesson readiness.
- `downloads/learner-preclass-sanitization-template.md` — pre-class sanitization template for safe teaching and public review samples.
- `downloads/learner-toolchain-assignment-review-board.csv` — 5-toolchain learner assignment review board for checking inquiry, quotation, order, document, and payment-risk homework across inputs, outputs, assistant gates, repair signals, portfolio use, manual confirmation, status, and next route.
- `downloads/learner-toolchain-assignment-brief-template.md` — 5-toolchain learner assignment brief template for recording learner inputs, tool outputs, export files, manual confirmation people, repair issues, authorization, and next routing.
- `downloads/learner-portfolio-packaging.csv` — final learner portfolio packaging checklist.
- `downloads/learner-final-review-template.md` — learner final review template for repair tasks and next-use planning.
- `downloads/deliverable-evidence-library.csv` — deliverable evidence library for mapping course outputs, page proof, Codex tasks, manual checks, display use, authorization boundaries, and next actions.
- `downloads/deliverable-evidence-showcase-template.md` — evidence showcase brief template for turning learner or enterprise deliverables into reviewed teaching, consultation, and reporting proof.
- `downloads/learner-application-review-router.csv` — post-course learner application review router for scoring real use, evidence, barriers, next destination, Codex tasks, and manual gates.
- `downloads/learner-application-review-brief-template.md` — post-course learner application review brief template for recording real business use, evidence, barriers, routing conclusion, and manual confirmation.
- `downloads/enrollment-consultation-evidence-map.csv` — enrollment objection-to-proof map for sales consultation.
- `downloads/enrollment-objection-response-template.md` — objection response template for private consultation and webinar follow-up.
- `downloads/enrollment-offer-qualification-board.csv` — enrollment offer qualification board for mapping learner type, material readiness, concerns, offer path, evidence, and manual checks.
- `downloads/enrollment-offer-brief-template.md` — enrollment offer brief template for consultation, trial lesson follow-up, payment confirmation, and enterprise diagnosis handoff.
- `downloads/enrollment-outcome-proof-board.csv` — learner outcome proof board for showing six final portfolio packages, evidence, consultation use, and display boundaries.
- `downloads/enrollment-conversion-command-center.csv` — enrollment conversion command center for content, resource, consultation, signup, and nurture stages.
- `downloads/enrollment-conversion-review-checklist.md` — weekly enrollment conversion review checklist.
- `downloads/enrollment-onboarding-handoff.csv` — signup-to-class handoff table for advisor, class manager, assistant, and teacher operations.
- `downloads/enrollment-start-confirmation.md` — start confirmation note for signup scope, materials, boundaries, first lesson, and 7-day review.
- `downloads/marketing-daily-ops-desk.csv` — daily sales and marketing operations desk for lead triage, consultation, handoff, and review.
- `downloads/marketing-daily-review-template.md` — daily review template for lead quality, page evidence, boundaries, and follow-up actions.
- `downloads/marketing-asset-factory.csv` — campaign asset factory for content angles, proof sources, CTAs, and claim boundaries.
- `downloads/webinar-follow-up-template.md` — public lesson follow-up template for learner and enterprise lead routing.
- `downloads/resource-lead-tagging-board.csv` — resource lead tagging board for routing users to demo lesson, enrollment, enterprise diagnosis, or nurture.
- `downloads/resource-lead-tagging-note.md` — resource lead tagging note template for recording user signals, evidence pages, next action, and boundaries.
- `downloads/resource-request-intake-router.csv` — resource request intake router for scoring visitor role, resource need, business stage, contact readiness, boundary awareness, and next route.
- `downloads/resource-request-intake-note-template.md` — resource request intake note template for recording user signal, recommended route, Codex assist, manual gates, and follow-up review.
- `downloads/resource-follow-up-sequence.csv` — resource download follow-up sequence for 0-7 day lead routing.
- `downloads/resource-lead-routing-playbook.md` — lead routing playbook for resource users, course prospects, and enterprise leads.
- `downloads/resource-conversion-review-router.csv` — 7-day resource conversion review router for deciding system-course consultation, enterprise diagnosis, trial demo, nurture, FAQ write-back, or hold.
- `downloads/resource-conversion-review-brief-template.md` — 7-day resource conversion review brief template for recording user response, sample readiness, page evidence, owner handoff, no-go claims, and version write-back.
- `downloads/enterprise-service-delivery-plan.csv` — enterprise service delivery plan for stage, deliverable, acceptance evidence, and responsibility tracking.
- `downloads/enterprise-project-acceptance-checklist.md` — enterprise project acceptance checklist for handoff, boundary, and next-expansion review.
- `downloads/enterprise-renewal-expansion-router.csv` — enterprise renewal and expansion router for post-acceptance evidence, adoption, scope, risk, and next-stage decision tracking.
- `downloads/enterprise-renewal-brief-template.md` — enterprise renewal brief template for acceptance evidence, expansion target, Codex scope, manual gates, and next delivery commitments.

## Course Module Standard

Every course module should include:

- Business pain.
- Case scenario.
- Teacher delivery cue.
- Classroom operation steps.
- Deliverables.
- Student homework.
- Homework acceptance criteria.
- Frequent learner issue.
- Risk boundaries and manual confirmation points.
