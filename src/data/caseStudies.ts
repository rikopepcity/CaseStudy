export type IndustryCategory =
  | 'Fintech & Banking'
  | 'Enterprise SaaS'
  | 'Travel & Luxury'
  | 'Healthcare'
  | 'Automotive';

export type ServiceCategory =
  | 'UI/UX Design'
  | 'UX Research'
  | 'Design System'
  | 'Product Design'
  | 'Mobile App'
  | 'Web Design';

export type OutcomeCategory =
  | 'Usability'
  | 'Workflow Efficiency'
  | 'Conversion'
  | 'Scalability'
  | 'Market Presence';

export type ScaleCategory = 'Enterprise' | 'Scaleup' | 'Growth';

export interface CaseMetric {
  value: string;
  label: string;
  context: string;
}

export interface CaseChapter {
  index: string;
  title: string;
  summary: string;
  details: string[];
  highlightTitle: string;
  highlightBody: string;
}

export interface ModuleBlueprint {
  id: string;
  name: string;
  role: string;
  description: string;
  specs: string[];
}

export interface CaseFaq {
  question: string;
  answer: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  order: string;
  client: string;
  headline: string;
  tagline: string;
  shortDescription: string;
  year: string;
  role: string;
  coverImage: string;
  fallbackGradient: string;
  industries: IndustryCategory[];
  services: ServiceCategory[];
  outcomes: OutcomeCategory[];
  stage: ScaleCategory;
  metrics: CaseMetric[];
  aboutTitle: string;
  aboutParagraphs: string[];
  chapters: CaseChapter[];
  modules: ModuleBlueprint[];
  faqs: CaseFaq[];
}

export const DESIGNER_PROFILE = {
  name: 'Ruturaj Rane',
  title: 'Lead UX/UI & Product Designer',
  email: 'ruturajranestar@gmail.com',
  portraitImage: '/src/assets/images/designer_studio_portrait_1795523356703.jpg',
  location: 'Mumbai, India',
  experienceYears: '8+',
  summary:
    'Specializing in high-trust enterprise platforms, fintech workflows, multi-market design systems, and conversion-focused digital products shipped across banking, capital markets, healthcare, luxury travel, and automotive SaaS.',
  tools: ['Figma', 'Design Tokens', 'Interactive Prototyping', 'Usability Testing', 'Information Architecture', 'WCAG AA Systems'],
  expertise: [
    {
      index: '01',
      title: 'Enterprise UX & Complex Workflows',
      description:
        'Structuring multi-role approval queues, institutional dashboards, and high-density operational tools so expert teams move with clarity and zero guesswork.',
      proofSlug: 'icici-bank-cib',
      proofLabel: 'See ICICI Bank-CIB',
    },
    {
      index: '02',
      title: 'Scalable Multi-Market Design Systems',
      description:
        'Building token-driven component libraries engineered for localization, cultural adaptation, and rapid engineering handoff across global product squads.',
      proofSlug: 'general-global-health',
      proofLabel: 'See General Global Health',
    },
    {
      index: '03',
      title: 'Fintech, Payments & Trading Craft',
      description:
        'Designing trustworthy financial interfaces where precision typography, latency feedback, and frictionless checkout build immediate user confidence.',
      proofSlug: 'sbicap-security',
      proofLabel: 'See SBI CAP Securities',
    },
    {
      index: '04',
      title: 'Product Strategy & Experience Redesign',
      description:
        'Partnering from stakeholder discovery through validated prototypes to modernize legacy software without disrupting mission-critical daily operations.',
      proofSlug: 'ey',
      proofLabel: 'See EY Asset Management',
    },
  ],
  process: [
    {
      index: '01',
      phase: 'Discovery & Stakeholder Alignment',
      duration: 'Weeks 1–2',
      description:
        'Auditing existing product friction, mapping regulatory and business constraints, and interviewing domain practitioners across operations, finance, and support.',
    },
    {
      index: '02',
      phase: 'Information Architecture & Flows',
      duration: 'Weeks 3–4',
      description:
        'Consolidating fragmented navigation trees into task-first user journeys, wireframing edge cases, and validating mental models before visual polish.',
    },
    {
      index: '03',
      phase: 'Interface Craft & Design System',
      duration: 'Weeks 5–8',
      description:
        'Establishing typographic hierarchy, semantic color tokens, responsive grid geometry, and interactive high-fidelity prototypes tested with target users.',
    },
    {
      index: '04',
      phase: 'Engineering Handoff & QA',
      duration: 'Weeks 9–10',
      description:
        'Delivering annotated Figma specifications, state matrices, accessibility contrast audits, and live implementation reviews alongside frontend teams.',
    },
  ],
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'icici',
    slug: 'icici-bank-cib',
    order: '01',
    client: 'ICICI Bank-CIB',
    headline: 'Reshaping the corporate internet banking experience for high-volume treasury teams',
    tagline: 'Reshaping the banking experience',
    shortDescription:
      'Unified fragmented corporate cash management, bulk vendor payouts, and multi-tier authorization workflows into a high-trust enterprise banking workspace.',
    year: '2024',
    role: 'Lead UX/UI Designer',
    coverImage: '/src/assets/images/case_icici_cib_1795523352408.jpg',
    fallbackGradient: 'from-zinc-900 via-slate-900 to-orange-950',
    industries: ['Fintech & Banking', 'Enterprise SaaS'],
    services: ['UI/UX Design', 'UX Research', 'Design System', 'Product Design'],
    outcomes: ['Usability', 'Workflow Efficiency'],
    stage: 'Enterprise',
    metrics: [
      {
        value: '42%',
        label: 'Faster approval turnaround',
        context: 'Reduced multi-level treasury sign-off steps from 7 screens to a unified action drawer',
      },
      {
        value: '12+',
        label: 'Core banking modules unified',
        context: 'Treasury liquidity, bulk NEFT/RTGS, trade finance, and role permissions under one IA',
      },
      {
        value: '3.4x',
        label: 'Higher task completion rate',
        context: 'Validated across corporate CFOs and finance controllers during usability testing',
      },
    ],
    aboutTitle: 'Modernizing Institutional Cash Management Without Disrupting Compliance',
    aboutParagraphs: [
      'ICICI Bank Corporate Internet Banking (CIB) serves thousands of enterprise treasurers, CFOs, and finance controllers managing multi-crore daily liquidity, vendor payouts, and trade settlements. Over years of incremental additions, critical workflows had splintered across legacy frames and inconsistent forms.',
      'Our mandate was to reimagine the entire corporate banking surface—establishing clear visual hierarchy, rapid exception handling, and role-aware dashboards while honoring strict banking auditability and maker-checker security standards.',
    ],
    chapters: [
      {
        index: '01',
        title: 'Task-First Information Architecture',
        summary:
          'We reorganized 60+ legacy menu links around how corporate finance teams actually structure their workday: liquidity visibility first, pending approvals second, and scheduled disbursements third.',
        details: [
          'Conducted workflow shadowing with corporate makers, checkers, and treasury heads to pinpoint drop-offs.',
          'Replaced nested popup tables with persistent contextual slide-over drawers for invoice inspection.',
        ],
        highlightTitle: 'Unified Maker-Checker Queue',
        highlightBody:
          'Approvers can inspect batch payroll totals, flagged compliance exceptions, and audit trails in one view before executing batch OTP authorization.',
      },
      {
        index: '02',
        title: 'Financial Precision & Typographic Hierarchy',
        summary:
          'Enterprise banking users scan thousands of rupee and multi-currency figures daily. We introduced tabular numeric alignment, restrained terracotta-orange action cues, and clear status labeling.',
        details: [
          'Built a dedicated financial table system with pinned summary rows and instant CSV/MIS export affordances.',
          'Paired status colors with explicit textual indicators so critical hold states are never conveyed by hue alone.',
        ],
        highlightTitle: 'Zero-Ambiguity Ledger Tables',
        highlightBody:
          'Every transaction line clearly separates beneficiary metadata, settlement rail, and authorization tier with crisp 1px structural dividers.',
      },
      {
        index: '03',
        title: 'Modular Design System for Scale',
        summary:
          'To support parallel engineering squads across payments, trade finance, and corporate cards, we documented a reusable component architecture.',
        details: [
          'Delivered standardized form patterns, multi-step payment wizards, and accessible WCAG AA contrast tokens.',
          'Reduced front-end specification ambiguity across 12 core banking journeys.',
        ],
        highlightTitle: 'Cross-Portal Token Consistency',
        highlightBody:
          'Unified spacing, elevation, and interaction patterns across desktop treasury consoles and mobile executive approval companions.',
      },
    ],
    modules: [
      {
        id: 'liquidity',
        name: 'Consolidated Liquidity Overview',
        role: 'CFO & Treasurer Cockpit',
        description:
          'Real-time cash position across domestic and international subsidiaries with 30-day inflow vs. outflow forecasting.',
        specs: ['Tabular currency alignment', 'Account group filters', 'Instant statement export'],
      },
      {
        id: 'approvals',
        name: 'Batch Approval Matrix',
        role: 'Checker & Authorizer Flow',
        description:
          'Side-by-side comparison of pending wire transfers, payroll batches, and vendor disbursements with inline policy checks.',
        specs: ['Bulk select & authorize', 'Inline anomaly flags', 'Audit timestamp log'],
      },
      {
        id: 'beneficiary',
        name: 'Smart Payment Initiation',
        role: 'Maker Workflow',
        description:
          'Guided transfer rail selection (IMPS, NEFT, RTGS, SWIFT) that surfaces cut-off windows and fee transparency automatically.',
        specs: ['Auto rail validation', 'Saved template presets', 'Draft recovery state'],
      },
    ],
    faqs: [
      {
        question: 'How did the redesign simplify multi-level corporate approval workflows?',
        answer:
          'Instead of forcing authorizers to click into individual transaction pages and lose context, we introduced a split-pane approval workbench showing the batch summary on the left and full beneficiary/compliance details on the right.',
      },
      {
        question: 'How were legacy compliance and audit requirements preserved?',
        answer:
          'Every action state—initiated, verified, held, or rejected—surfaces immutable timestamps, user IDs, and dual-factor checkpoints without cluttering the primary reading surface.',
      },
      {
        question: 'What visual standards were applied to dense financial data?',
        answer:
          'We enforced tabular numerals, generous row breathing room, and disciplined 60-30-10 surface contrast so high-value numbers remain scannable during peak settlement hours.',
      },
    ],
  },
  {
    id: 'ey',
    slug: 'ey',
    order: '02',
    client: 'EY',
    headline: 'Seamless dashboard for a powerful enterprise assets management platform',
    tagline: 'Seamless dashboard for a powerful assets management',
    shortDescription:
      'Designed an analytical command center for Ernst & Young stakeholders to monitor global asset performance, depreciation health, and portfolio allocation in real time.',
    year: '2024',
    role: 'Senior UX/UI Designer',
    coverImage: '/src/assets/images/case_ey_assets_1795523352801.jpg',
    fallbackGradient: 'from-zinc-900 via-neutral-900 to-amber-950',
    industries: ['Enterprise SaaS', 'Fintech & Banking'],
    services: ['UI/UX Design', 'Product Design', 'Design System'],
    outcomes: ['Workflow Efficiency', 'Usability'],
    stage: 'Enterprise',
    metrics: [
      {
        value: '38%',
        label: 'Reduction in report prep time',
        context: 'Consolidated 6 disparate asset spreadsheets into live portfolio drill-downs',
      },
      {
        value: '8',
        label: 'Core analytics views shipped',
        context: 'Portfolio overview, lifecycle health, ROI benchmarking, and maintenance forecasting',
      },
      {
        value: '99.2%',
        label: 'Filter accuracy in UAT',
        context: 'Multi-dimensional region, asset class, and fiscal quarter slicing with zero confusion',
      },
    ],
    aboutTitle: 'Turning Complex Multi-Region Asset Telemetry Into Executive Clarity',
    aboutParagraphs: [
      'Enterprise advisory teams at EY manage vast inventories spanning physical infrastructure, fleet logistics, IT hardware, and facility capital. Previously, portfolio managers switched between static ERP exports and manual slide decks to evaluate asset ROI.',
      'We designed a cohesive enterprise dashboard system that transforms raw asset telemetry into calm, scannable executive intelligence—pairing dark charcoal structural clarity with EY-aligned gold accents.',
    ],
    chapters: [
      {
        index: '01',
        title: 'Executive-to-Analyst Drill-Down Architecture',
        summary:
          'Balanced high-level portfolio KPIs for partners with deep tabular filtering for asset operations analysts.',
        details: [
          'Structured the workspace into a three-tier visual rhythm: portfolio trend lines, allocation breakdown, and actionable asset ledger.',
          'Enabled instant switching between fiscal quarters and asset categories without full page reloads.',
        ],
        highlightTitle: 'Zero-Clutter Telemetry Grid',
        highlightBody:
          'Removed decorative gauges in favor of crisp comparative trend lines and weighted allocation rings with explicit percentage labels.',
      },
      {
        index: '02',
        title: 'Predictive Maintenance & Lifecycle Signals',
        summary:
          'Surfaced early depreciation alerts and maintenance schedules directly inside the asset registry so teams prevent costly downtime.',
        details: [
          'Paired asset health scores with clear textual status badges (`Optimal`, `Inspection Due`, `Critical`) and service history timelines.',
          'Built one-click audit packet generation for quarterly compliance reviews.',
        ],
        highlightTitle: 'Contextual Health Diagnostics',
        highlightBody:
          'Clicking any facility or fleet row opens a non-blocking detail panel showing utilization curves and upcoming service windows.',
      },
      {
        index: '03',
        title: 'Enterprise Design Language Alignment',
        summary:
          'Crafted a disciplined dark-and-neutral interface system tuned for long analytical sessions without eye fatigue.',
        details: [
          'Calibrated surface luminance deltas under 12% across cards, tables, and chart tooltips.',
          'Standardized chart typography with tabular numerals for vertical column alignment.',
        ],
        highlightTitle: 'Accessible Data Visualization',
        highlightBody:
          'Distinct line patterns, direct data labels, and hover crosshairs ensure every metric reads effortlessly across desktop monitors.',
      },
    ],
    modules: [
      {
        id: 'overview',
        name: 'Portfolio Performance Trends',
        role: 'Multi-Quarter Benchmarking',
        description:
          'Interactive time-series comparison across machinery, vehicles, IT, and facility assets with instant baseline toggling.',
        specs: ['Quarter-over-quarter delta', 'Hover value crosshair', 'Exportable SVG charts'],
      },
      {
        id: 'allocation',
        name: 'Capital Allocation Matrix',
        role: 'Portfolio Distribution',
        description:
          'Weighted asset class breakdown linking capital exposure directly to current ROI and maintenance overhead.',
        specs: ['Interactive segment focus', 'Region drill-down', 'Cost-to-value ratio'],
      },
      {
        id: 'ledger',
        name: 'Searchable Asset Registry',
        role: 'Operations & Audit Table',
        description:
          'High-density sortable ledger tracking asset ID, location, valuation, ROI, and live operational health.',
        specs: ['Pinned column headers', 'Saved filter views', 'Bulk audit export'],
      },
    ],
    faqs: [
      {
        question: 'How did the dashboard handle large enterprise datasets without slowing down the UX?',
        answer:
          'We designed progressive disclosure patterns—aggregating regional totals at the top layer while deferring granular asset histories to on-demand slide-over drawers and paginated virtual tables.',
      },
      {
        question: 'Why choose a restrained charcoal palette with muted gold accents?',
        answer:
          'Asset managers spend hours inside analytical consoles. Low-glare charcoal surfaces reduce visual fatigue while reserving high-contrast gold strictly for primary focus lines and active controls.',
      },
    ],
  },
  {
    id: 'asuaire',
    slug: 'asuaire',
    order: '03',
    client: 'Asuaire',
    headline: 'Crafting an intuitive digital experience for bespoke luxury travel curation',
    tagline: 'Crafting the intuitive digital experience for a travel company',
    shortDescription:
      'Elevated a boutique travel brand with an editorial discovery platform, seamless multi-leg itinerary planner, and mobile companion concierge.',
    year: '2023',
    role: 'UX/UI Designer',
    coverImage: '/src/assets/images/case_asuaire_travel_1795523354028.jpg',
    fallbackGradient: 'from-stone-900 via-zinc-900 to-stone-800',
    industries: ['Travel & Luxury'],
    services: ['UI/UX Design', 'Web Design', 'Mobile App', 'UX Research'],
    outcomes: ['Conversion', 'Market Presence', 'Usability'],
    stage: 'Scaleup',
    metrics: [
      {
        value: '54%',
        label: 'Increase in trip inquiries',
        context: 'Streamlined 5-step bespoke itinerary request into an inspiring interactive flow',
      },
      {
        value: '2.8x',
        label: 'Longer destination session dwell',
        context: 'Editorial destination storytelling paired directly with curated stay previews',
      },
      {
        value: '19',
        label: 'Responsive screen templates',
        context: 'Cohesive desktop editorial web and mobile day-by-day journey companion',
      },
    ],
    aboutTitle: 'Translating High-Touch Travel Concierge Service Into Digital Warmth',
    aboutParagraphs: [
      'Asuaire curates private coastal escapes, boutique stays, and tailored cultural journeys for discerning travelers. Their previous web presence behaved like a rigid flight aggregator—undercutting the bespoke craftsmanship of their travel advisors.',
      'We crafted an editorial-first digital experience that pairs magazine-grade destination storytelling with effortless mobile itinerary management.',
    ],
    chapters: [
      {
        index: '01',
        title: 'Editorial Discovery Over Search Friction',
        summary:
          'Replaced intimidating multi-input booking bars with curated seasonal collections, mood-based filtering, and rich regional narratives.',
        details: [
          'Positioned destination photography as the primary focal anchor on warm travertine-inspired surfaces.',
          'Built lightweight save-to-shortlist interactions without forcing early account creation.',
        ],
        highlightTitle: 'Curated Portfolio Showcase',
        highlightBody:
          'Each destination page reads like a private travel monograph while keeping advisor consultation one tap away.',
      },
      {
        index: '02',
        title: 'Interactive Day-by-Day Itinerary Companion',
        summary:
          'Designed a companion mobile experience so booked travelers have transfers, yacht charters, dining reservations, and concierge chat at their fingertips.',
        details: [
          'Structured daily timelines cleanly by morning, afternoon, and evening with offline-ready boarding passes.',
          'Minimized visual noise so travelers focus on the journey rather than interface chrome.',
        ],
        highlightTitle: 'Zero-Stress Travel Timeline',
        highlightBody:
          'Live schedule cards surface exact pickup times, dress codes, and local advisor contacts in one scrollable feed.',
      },
      {
        index: '03',
        title: 'High-Intent Concierge Conversion Flow',
        summary:
          'Reimagined the inquiry form as a conversational trip brief capturing traveler preferences, pace, and celebration milestones.',
        details: [
          'Reduced abandonment by breaking preferences into visual selection cards rather than long text boxes.',
          'Delivered immediate confirmation with assigned travel specialist details.',
        ],
        highlightTitle: 'Personalized Brief Capture',
        highlightBody:
          'Travelers define dates, group profile, and experience pillars in under 90 seconds.',
      },
    ],
    modules: [
      {
        id: 'editorial',
        name: 'Destination Monograph Pages',
        role: 'Web Discovery Experience',
        description:
          'Asymmetric editorial grids combining regional photography, seasonal timing guides, and curated villa highlights.',
        specs: ['Responsive editorial grid', 'Curated stay previews', 'Direct advisor anchor'],
      },
      {
        id: 'itinerary',
        name: 'Mobile Journey Timeline',
        role: 'iOS & Android Companion',
        description:
          'Chronological day-by-day trip planner holding private charters, boutique hotel check-ins, and concierge messaging.',
        specs: ['Offline itinerary cache', 'Interactive map pins', 'Instant concierge thread'],
      },
      {
        id: 'concierge',
        name: 'Bespoke Trip Brief Builder',
        role: 'Lead Conversion Flow',
        description:
          'Guided preference selector matching travelers with tailored routes and dedicated regional specialists.',
        specs: ['Visual pace selector', 'Flexible date ranges', 'Instant advisor matching'],
      },
    ],
    faqs: [
      {
        question: 'How did the UX balance editorial inspiration with booking utility?',
        answer:
          'We led with spacious visual storytelling and destination context, while anchoring persistent lightweight actions—shortlisting a stay or requesting a tailored itinerary—directly alongside each collection.',
      },
      {
        question: 'What made the mobile companion essential for Asuaire travelers?',
        answer:
          'Luxury travelers value seamless logistics once on the ground. Consolidating vouchers, private driver details, and dining times into one calm timeline eliminated PDF email digging.',
      },
    ],
  },
  {
    id: 'general-global-health',
    slug: 'general-global-health',
    order: '04',
    client: 'General Global Health',
    headline: 'Putting together a global healthcare design system in tune with cultural insights',
    tagline: 'Putting together a design system in tune with cultural insights',
    shortDescription:
      'Engineered an accessible, multi-region healthcare insurance design system and patient portal calibrated for linguistic, cultural, and regulatory diversity.',
    year: '2024',
    role: 'Lead Design Systems Designer',
    coverImage: '/src/assets/images/case_general_global_health_1795523353695.jpg',
    fallbackGradient: 'from-teal-950 via-slate-900 to-zinc-900',
    industries: ['Healthcare', 'Enterprise SaaS'],
    services: ['Design System', 'UX Research', 'UI/UX Design', 'Product Design'],
    outcomes: ['Scalability', 'Usability'],
    stage: 'Enterprise',
    metrics: [
      {
        value: '18',
        label: 'Modular UI patterns & tokens',
        context: 'Full cross-cultural component library covering plans, provider search, and claims',
      },
      {
        value: '100%',
        label: 'WCAG AA contrast compliance',
        context: 'Verified across light, high-contrast, and multi-script regional deployments',
      },
      {
        value: '45%',
        label: 'Faster regional portal rollout',
        context: 'Shared semantic tokens enabled rapid adaptation across Europe, Asia, and MENA',
      },
    ],
    aboutTitle: 'Designing Empathetic Healthcare Clarity Across Cultural Contexts',
    aboutParagraphs: [
      'Navigating health coverage and medical claims is inherently stressful—especially for expatriates, global families, and cross-border corporate teams. General Global Health needed a unified product design system capable of adapting cleanly across diverse regional expectations without fragmenting brand trust.',
      'Grounded in cross-cultural UX research, we built a modular token and component architecture governing typography scales, plan comparison cards, provider directories, and multi-step medical claims.',
    ],
    chapters: [
      {
        index: '01',
        title: 'Cultural & Linguistic UX Research',
        summary:
          'Studied how patients in Europe, Asia, and Middle Eastern markets interpret medical terminology, color symbolism, and benefit density.',
        details: [
          'Tested reading comprehension across translated policy summaries where character expansion exceeded 35%.',
          'Replaced culturally ambiguous iconography with clear, universally understood medical labels.',
        ],
        highlightTitle: 'Flexible Multi-Script Layouts',
        highlightBody:
          'Every card and button container was stress-tested with expanded German, French, and localized character strings so layouts never break.',
      },
      {
        index: '02',
        title: 'Semantic Token & Component Architecture',
        summary:
          'Established strict typographic scales, calm emerald-teal healthcare palettes, and modular plan cards engineered for transparent comparison.',
        details: [
          'Created clear visual separation between core coverage tiers, deductible limits, and regional exclusions.',
          'Published exhaustive Figma variables mapped 1:1 to front-end CSS design tokens.',
        ],
        highlightTitle: 'Transparent Policy Comparison',
        highlightBody:
          'Patients compare Global Core, Family Care, and Regional plans side by side without hunting through fine-print PDFs.',
      },
      {
        index: '03',
        title: 'Empathetic Care Discovery & Claims Flow',
        summary:
          'Streamlined hospital search and reimbursement submission for users navigating urgent medical situations.',
        details: [
          'Built location-aware provider cards displaying languages spoken, direct-billing eligibility, and emergency directions.',
          'Simplified claim uploads into a 3-step guided flow with real-time document validation.',
        ],
        highlightTitle: 'Direct-Billing Confidence',
        highlightBody:
          'Clear visual indicators confirm cashless hospital coverage upfront, removing financial anxiety during emergencies.',
      },
    ],
    modules: [
      {
        id: 'tokens',
        name: 'Cross-Cultural Token System',
        role: 'Design Foundation',
        description:
          'Semantic color, spacing, and typography tokens tested for WCAG AA legibility and multi-language string expansion.',
        specs: ['WCAG AA verified', 'RTL & expansion ready', '1:1 Figma-to-CSS variables'],
      },
      {
        id: 'plans',
        name: 'Modular Coverage Cards',
        role: 'Policy Selection UX',
        description:
          'Scannable tier cards highlighting coverage caps, regional scope, and monthly premiums in plain human language.',
        specs: ['Side-by-side comparison', 'Plain-English benefits', 'Zero hidden fee traps'],
      },
      {
        id: 'findcare',
        name: 'Global Find-Care Portal',
        role: 'Patient Utility Flow',
        description:
          'Provider search directory filtering international clinics by specialty, spoken language, and cashless direct billing.',
        specs: ['Direct-billing filter', 'Spoken language tags', 'Guided claim upload'],
      },
    ],
    faqs: [
      {
        question: 'Why did cultural insights play such a central role in this design system?',
        answer:
          'Healthcare trust varies significantly by region. Some markets expect concise high-level assurance while others demand detailed regulatory breakdowns upfront. Our modular system adapts content density without breaking layout consistency.',
      },
      {
        question: 'How does the system enforce accessibility for patients under stress?',
        answer:
          'We enforced minimum 4.5:1 text contrast, generous touch targets (44px+ on mobile), clear error recovery messaging, and plain-language labels free of insurance jargon.',
      },
    ],
  },
  {
    id: 'vaspay',
    slug: 'vaspay',
    order: '05',
    client: 'Vaspay',
    headline: 'Establishing a trusted mobile payment presence tailored for Nigerian audiences',
    tagline: 'Marking a strong presence of payment method to Nigerian market audiences',
    shortDescription:
      'Designed a fast, resilient payment checkout and merchant settlement experience built around Nigerian banking habits, Naira clarity, and mobile-first speed.',
    year: '2023',
    role: 'Product & UX/UI Designer',
    coverImage: '/src/assets/images/case_vaspay_fintech_1795523354185.jpg',
    fallbackGradient: 'from-emerald-950 via-zinc-900 to-neutral-950',
    industries: ['Fintech & Banking'],
    services: ['Mobile App', 'UI/UX Design', 'UX Research', 'Product Design'],
    outcomes: ['Market Presence', 'Conversion', 'Usability'],
    stage: 'Growth',
    metrics: [
      {
        value: '31%',
        label: 'Higher checkout completion',
        context: 'Reduced payment method selection friction across card, wallet, and instant bank transfer',
      },
      {
        value: '< 18s',
        label: 'Average checkout time',
        context: 'Streamlined one-tap QR scan and saved Naira wallet confirmation flow',
      },
      {
        value: '14',
        label: 'End-to-end payment flows',
        context: 'P2P transfers, utility bills, airtime top-ups, and instant merchant checkout',
      },
    ],
    aboutTitle: 'Building Instant Payment Confidence for Mobile-First Nigerian Commerce',
    aboutParagraphs: [
      'Nigeria’s digital payments ecosystem moves rapidly, yet shoppers frequently encounter failed redirects, unclear transaction fees, and slow checkout pages on intermittent mobile networks.',
      'Vaspay partnered with us to establish a strong, recognizable market presence—designing a mobile-first payment platform and merchant checkout that feels effortless, transparent, and unmistakably trustworthy.',
    ],
    chapters: [
      {
        index: '01',
        title: 'Local Payment Behavior Research',
        summary:
          'Mapped how Nigerian consumers alternate between bank transfers, debit cards, USSD codes, and QR payments depending on transaction size and connectivity.',
        details: [
          'Prioritized instant bank transfer and wallet balance visibility above legacy multi-field card forms.',
          'Designed resilient pending/reconciling states so users never wonder if a Naira debit succeeded.',
        ],
        highlightTitle: 'Connectivity-Resilient States',
        highlightBody:
          'Clear confirmation receipts and retry affordances eliminate double-charge anxiety on variable mobile networks.',
      },
      {
        index: '02',
        title: 'High-Contrast Emerald Brand & UI Craft',
        summary:
          'Paired deep forest emerald with crisp white surfaces to project institutional reliability alongside modern fintech speed.',
        details: [
          'Emphasized Naira (₦) totals using bold tabular numerals so amounts verify at a single glance.',
          'Grouped frequent daily actions—Send Money, Bills & Airtime, Scan & Pay—within thumb reach.',
        ],
        highlightTitle: 'Thumb-Zone Primary Actions',
        highlightBody:
          'Every high-frequency payment action sits cleanly in the lower two-thirds of the mobile viewport for one-handed use.',
      },
      {
        index: '03',
        title: 'Frictionless Merchant Checkout SDK',
        summary:
          'Created a plug-and-play checkout modal that lets merchants embed Vaspay across web and mobile storefronts seamlessly.',
        details: [
          'Reduced checkout steps to 2 taps for returning wallet users.',
          'Included itemized order summaries and transparent security cues right above the pay action.',
        ],
        highlightTitle: 'Two-Tap Instant Checkout',
        highlightBody:
          'Shoppers verify merchant name, itemized basket, and payment rail on one focused sheet.',
      },
    ],
    modules: [
      {
        id: 'quickpay',
        name: 'Quick Pay & P2P Home',
        role: 'Consumer Wallet Hub',
        description:
          'Action-first home screen putting Send Money, Bills & Airtime, Scan & Pay, and recent contacts upfront.',
        specs: ['Thumb-reachable grid', 'Recent payee shortcuts', 'Live Naira ledger'],
      },
      {
        id: 'checkout',
        name: 'Instant Merchant Checkout',
        role: 'Payment Gateway UI',
        description:
          'Clean itemized payment sheet supporting saved cards, Vaspay wallet, and instant bank transfer switching.',
        specs: ['Zero-redirect modal', 'Clear fee breakdown', 'Instant receipt share'],
      },
      {
        id: 'bills',
        name: 'Utilities & Airtime Flow',
        role: 'Daily Retention Engine',
        description:
          'Rapid recurring bill payments for electricity, cable, and mobile data with saved meter and subscriber IDs.',
        specs: ['Auto-saved meter IDs', 'One-tap repeat pay', 'SMS & in-app receipts'],
      },
    ],
    faqs: [
      {
        question: 'How did the design build trust specifically for Nigerian market audiences?',
        answer:
          'By prioritizing explicit Naira amount clarity, transparent merchant verification, unmistakable transaction status feedback, and local rails like instant bank transfer alongside card payments.',
      },
      {
        question: 'How were slow or unstable mobile connections accounted for?',
        answer:
          'We kept UI payloads lightweight, avoided heavy decorative animations during checkout, and designed explicit verifying/pending states that prevent users from accidentally submitting duplicate payments.',
      },
    ],
  },
  {
    id: 'sbicap-security',
    slug: 'sbicap-security',
    order: '06',
    client: 'SBI CAP Securities',
    headline: 'Secure trading guaranteed across institutional and retail capital markets',
    tagline: 'Secure trading guaranteed',
    shortDescription:
      'Re-architected a high-speed equity, derivatives, and wealth trading suite uniting real-time charting, market depth, and instant order execution.',
    year: '2024',
    role: 'Lead UX/UI Designer',
    coverImage: '/src/assets/images/case_sbicap_trading_1795523355193.jpg',
    fallbackGradient: 'from-slate-950 via-zinc-900 to-emerald-950',
    industries: ['Fintech & Banking', 'Enterprise SaaS'],
    services: ['Product Design', 'UI/UX Design', 'Mobile App', 'Design System'],
    outcomes: ['Usability', 'Workflow Efficiency', 'Conversion'],
    stage: 'Enterprise',
    metrics: [
      {
        value: '18+',
        label: 'Integrated trading workflows',
        context: 'Equity cash, F&O option chains, mutual funds, IPOs, and portfolio analytics',
      },
      {
        value: '2.1x',
        label: 'Faster order ticket execution',
        context: 'Streamlined buy/sell order placement with pre-filled margin and brokerage clarity',
      },
      {
        value: '4.7/5',
        label: 'Active trader usability score',
        context: 'Tested across intraday retail traders and wealth advisory desks',
      },
    ],
    aboutTitle: 'Engineering Precision and Speed Into Every Market Tick',
    aboutParagraphs: [
      'SBI CAP Securities powers equity, derivatives, and wealth investing for a massive base of active Indian retail and institutional traders. In volatile markets, every millisecond—and every pixel of legibility—counts.',
      'We re-designed the web trading terminal and companion mobile app to deliver uninterrupted market awareness: crisp candlestick charting, order-book depth, real-time watchlists, and fail-safe order confirmation.',
    ],
    chapters: [
      {
        index: '01',
        title: 'High-Density Terminal Ergonomics',
        summary:
          'Organized multi-panel web workspaces so traders monitor charts, depth books, open positions, and watchlists simultaneously without overlapping windows.',
        details: [
          'Applied dark obsidian canvases with carefully calibrated emerald and amber indicators to eliminate screen glare.',
          'Enforced monospace tabular alignment across every bid/ask price, volume, and P&L column.',
        ],
        highlightTitle: 'Synchronized Multi-Panel Layout',
        highlightBody:
          'Clicking any ticker in the watchlist instantly updates the candlestick chart, depth ladder, and order ticket in unison.',
      },
      {
        index: '02',
        title: 'Fail-Safe Order Execution & Margin Clarity',
        summary:
          'Eliminated fat-finger errors and unexpected margin rejections by surfacing available funds, order type presets, and estimated charges upfront.',
        details: [
          'Separated Intraday, Delivery, and Bracket orders into unmistakable segmented controls.',
          'Added swipe-to-execute safeguards on mobile for high-value derivative trades.',
        ],
        highlightTitle: 'Zero-Surprise Order Ticket',
        highlightBody:
          'Traders see exact required margin and brokerage impact live as they adjust lot quantities.',
      },
      {
        index: '03',
        title: 'Seamless Desktop-to-Mobile Continuity',
        summary:
          'Unified watchlists, custom technical indicators, and portfolio alerts across widescreen desktop monitors and on-the-go mobile apps.',
        details: [
          'Designed compact sparkline watchlist cards on mobile for instant pre-market scanning.',
          'Built one-tap portfolio hedging and stop-loss modification flows.',
        ],
        highlightTitle: 'Consistent Cross-Device Watchlists',
        highlightBody:
          'Pinned scrips, price alerts, and active orders stay synced in real time between desktop desk and mobile pocket.',
      },
    ],
    modules: [
      {
        id: 'terminal',
        name: 'Multi-Panel Trading Terminal',
        role: 'Web Workspace',
        description:
          'Synchronized charting canvas, market depth chart, live order book, and portfolio summary in one zero-lag grid.',
        specs: ['Tabular tick updates', 'Multi-timeframe charts', 'Keyboard order shortcuts'],
      },
      {
        id: 'mobile-watchlist',
        name: 'Sparkline Mobile Watchlist',
        role: 'Mobile Companion',
        description:
          'Glanceable equity and index cards with real-time intraday curves, percentage deltas, and instant buy/sell triggers.',
        specs: ['Live sparkline curves', 'Custom scrip groups', 'Swipe order ticket'],
      },
      {
        id: 'security',
        name: 'Verified Order & Margin Guard',
        role: 'Risk & Security Layer',
        description:
          'Pre-trade margin validation, session lock controls, and instant trade confirmation receipts ensuring secure execution.',
        specs: ['Live margin check', 'Biometric trade confirm', 'Instant contract notes'],
      },
    ],
    faqs: [
      {
        question: 'How did you keep high-density financial data readable on both desktop and mobile?',
        answer:
          'We used strict typographic hierarchy with monospace tabular numbers, eliminated decorative card clutter, and restricted bright emerald/amber accents exclusively to directional market signals and primary actions.',
      },
      {
        question: 'How does the interface protect traders from accidental order placement?',
        answer:
          'Order tickets clearly separate Buy vs. Sell intent, calculate required margin in real time before submission, and require an explicit confirmation step for high-exposure derivative lots.',
      },
    ],
  },
  {
    id: 'dabadu',
    slug: 'dabadu',
    order: '07',
    client: 'Dabadu',
    headline: 'Unifying automotive dealership CRM, AI service retention, and digital deal-desking',
    tagline: 'Automotive dealership XRM & deal-desking platform',
    shortDescription:
      'Crafted an end-to-end automotive XRM platform uniting showroom lead pipelines, vehicle inventory, financing estimators, and mobile lot tools.',
    year: '2024',
    role: 'Senior Product Designer',
    coverImage: '/src/assets/images/case_dabadu_automotive_1795523355144.jpg',
    fallbackGradient: 'from-blue-950 via-slate-900 to-zinc-950',
    industries: ['Automotive', 'Enterprise SaaS'],
    services: ['Product Design', 'UI/UX Design', 'Mobile App', 'Design System'],
    outcomes: ['Workflow Efficiency', 'Conversion', 'Scalability'],
    stage: 'Scaleup',
    metrics: [
      {
        value: '35%',
        label: 'Faster showroom deal desking',
        context: 'Sales reps structure lease, finance, and cash comparisons alongside buyers on tablet',
      },
      {
        value: '9',
        label: 'Integrated dealership modules',
        context: 'Lead pipeline, vehicle inventory, lender matrix, equity mining, and service AI',
      },
      {
        value: '100%',
        label: 'Mobile lot parity',
        context: 'Full license scanning and walk-up customer capture on the dealership lot',
      },
    ],
    aboutTitle: 'Bridging Showroom Sales, Finance Desking, and Service Retention in One XRM',
    aboutParagraphs: [
      'Car dealerships traditionally juggle disconnected tools for internet leads, showroom walk-ins, F&I lending submissions, and service-bay follow-ups. Sales consultants lose momentum switching between spreadsheets and clunky legacy DMS screens while customers wait.',
      'For Dabadu XRM, we designed a cohesive desktop and tablet dealership operating system—bringing pipeline velocity, live vehicle inventory, transparent financing estimators, and AI-assisted service retention into one modern interface.',
    ],
    chapters: [
      {
        index: '01',
        title: 'Showroom-Ready Deal Desking & Financing',
        summary:
          'Transformed complex monthly payment calculations into an interactive tablet presentation that builds buyer trust right at the showroom desk.',
        details: [
          'Paired live MSRP, trade-in equity, term sliders, and APR adjustments with transparent payment curves.',
          'Enabled instant side-by-side lease vs. finance scenario sharing.',
        ],
        highlightTitle: 'Interactive Tablet Deal Sheet',
        highlightBody:
          'Sales consultants adjust down payments and loan terms in real time with buyers, eliminating back-office delays.',
      },
      {
        index: '02',
        title: 'Unified Sales Pipeline & Inventory Linking',
        summary:
          'Connected CRM lead stages directly to live vehicle stock status so reps never pitch a sold unit or miss an equity trade-in opportunity.',
        details: [
          'Built drag-and-drop pipeline stages (`Lead`, `Qualified`, `Offer`, `Deal Pending`, `Closed`) with SLA timers.',
          'Embedded VIN-level inventory cards showing days-on-lot and trade-in match indicators.',
        ],
        highlightTitle: 'Equity-Driven Lead Prioritization',
        highlightBody:
          'Surface high-equity service customers automatically so sales teams capture upgrades before competitors.',
      },
      {
        index: '03',
        title: 'AI Service Retention & Mobile Lot Capture',
        summary:
          'Extended the desktop XRM onto iPad and mobile devices for lot walk-ups and automated service lane follow-ups.',
        details: [
          'Designed rapid driver-license scan-to-CRM profile creation for walk-in test drives.',
          'Automated declined-service reminders and appointment confirmations.',
        ],
        highlightTitle: 'Walk-Up to Test Drive in 60 Seconds',
        highlightBody:
          'Reps capture customer credentials, assign a stock unit, and log test-drive notes right from the lot.',
      },
    ],
    modules: [
      {
        id: 'pipeline',
        name: 'Dealership Sales Pipeline',
        role: 'Desktop Command Center',
        description:
          'Kanban and list CRM tracking inbound digital leads, showroom visits, pending offers, and closing velocity.',
        specs: ['Round-robin lead routing', 'VIN stock linking', 'SLA response timers'],
      },
      {
        id: 'desking',
        name: 'Tablet Financing Estimator',
        role: 'Showroom F&I Experience',
        description:
          'Customer-facing tablet calculator adjusting MSRP, down payment, APR, and term length with live payment curve.',
        specs: ['Real-time APR sliders', 'Trade-in equity input', 'Direct lender submission'],
      },
      {
        id: 'inventory',
        name: 'Live Vehicle Inventory Grid',
        role: 'Lot & Stock Management',
        description:
          'Filterable dealership inventory tracking pricing, mileage, trim specs, and active buyer interest per VIN.',
        specs: ['Instant VIN lookup', 'Days-on-lot metrics', 'Quick-share spec sheets'],
      },
    ],
    faqs: [
      {
        question: 'How did the UX bridge sales, finance, and service departments?',
        answer:
          'Instead of siloing customer history by department, every buyer profile tracks vehicle ownership, service visits, equity valuation, and active deal proposals in one shared timeline.',
      },
      {
        question: 'Why was tablet ergonomics critical for Dabadu?',
        answer:
          'Dealership reps spend half their day walking the lot or sitting beside customers. Designing large, touch-friendly controls and clear customer-facing financing charts turned the tablet into a trust-building sales tool.',
      },
    ],
  },
];
