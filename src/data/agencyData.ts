import { ServiceItem, CaseStudy, TechItem, JobOpening, WorkflowStep, Testimonial } from '../types/index.ts';
import caseStudyAiFintech from '../assets/images/casestudy_ai_fintech_1793362557759.jpg';
import caseStudyEnterpriseErp from '../assets/images/casestudy_enterprise_erp_1793362560339.jpg';
import caseStudyHealthMobile from '../assets/images/casestudy_health_mobile_1793362560308.jpg';
import heroAgencyImage from '../assets/images/hero_modern_it_agency_1793362557738.jpg';

export const COMPANY_INFO = {
  name: 'House of Vibes',
  shortName: 'HOV',
  tagline: 'Empowering Digital Evolution with Software, AI, Web & Mobile Excellence.',
  phone: '+91 7600764647',
  phoneTel: 'tel:+917600764647',
  whatsappUrl: 'https://wa.me/917600764647',
  email: 'contact@houseofvibes.in',
  emailMailto: 'mailto:contact@houseofvibes.in',
  address: 'Gate 4, Ambica Apartment, 76/905, Near Pallav Cross Road, Naranpura, Ahmedabad, Gujarat 380063',
  googleMapsPublishedUrl: 'https://maps.app.goo.gl/eGNN4FZCeszKRSRN8',
  mapEmbedUrl: 'https://maps.google.com/maps?q=23.0603908,72.5501098+(House+of+Vibes)&t=&z=17&ie=UTF8&iwloc=B&output=embed',
  established: 2021,
};

export const STATS = [
  { label: 'Completed Projects', value: 250, suffix: '+', subtext: 'Delivered across 14 countries' },
  { label: 'Enterprise Clients', value: 100, suffix: '+', subtext: 'High-retention partnerships' },
  { label: 'Senior Engineers', value: 30, suffix: '+', subtext: 'Full-stack & AI specialists' },
  { label: 'Client Satisfaction', value: 99, suffix: '%', subtext: 'On-time delivery record' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    shortDesc: 'Bespoke enterprise ERPs, microservices engines, and high-load distributed architectures.',
    fullDesc: 'We architect and build fault-tolerant enterprise software that runs your core business operations. From modular microservices to multi-tenant SaaS backbones, our systems scale seamlessly to millions of concurrent operations with zero data loss.',
    category: 'software',
    iconName: 'Cpu',
    features: [
      'Enterprise ERP & CRM customized workflows',
      'Event-driven distributed microservices',
      'High-throughput transactional database schemas',
      'Legacy modernization & cloud migration',
    ],
    deliverables: [
      'Production-ready containerized microservices',
      'Complete OpenAPI/Swagger specifications',
      'High-availability database failover clustering',
      'Zero-downtime deployment pipelines',
    ],
    techStack: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
    businessImpact: '4.8x average transaction capacity boost with 99.99% uptime SLAs.',
  },
  {
    id: 'web-development',
    title: 'Web & Web App Development',
    shortDesc: 'Ultra-fast Next.js/React web platforms, high-conversion SaaS, and PWAs.',
    fullDesc: 'Engineered for speed, SEO domination, and fluid interactivity. We construct web applications with sub-second initial loads, strict accessibility, and bulletproof client-side state engines designed for global scale.',
    category: 'web',
    iconName: 'Globe',
    features: [
      'Full-stack Next.js and React SPA/SSR solutions',
      'Progressive Web Apps (PWAs) with offline sync',
      'High-conversion B2B customer portals',
      'Headless e-commerce and checkout engines',
    ],
    deliverables: [
      'Lighthouse 95+ performance scores across all audits',
      'Multi-currency global checkout integration',
      'Automated end-to-end integration test suites',
      'Comprehensive content management workflows',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Prisma'],
    businessImpact: '62% reduction in initial bounce rates and 3.4x faster checkout velocity.',
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    shortDesc: 'Native iOS & Android and cross-platform Flutter/React Native applications.',
    fullDesc: 'From high-frequency consumer apps to mission-critical enterprise field tools, we craft fluid 60fps mobile experiences that take full advantage of native device capabilities, biometric security, and offline queues.',
    category: 'mobile',
    iconName: 'Smartphone',
    features: [
      'Cross-platform Flutter & React Native velocity',
      'Native Swift (iOS) and Kotlin (Android) performance',
      'Offline-first data sync with local SQLite/Realm',
      'Hardware integration (Bluetooth LE, GPS, NFC, Camera)',
    ],
    deliverables: [
      'Verified App Store & Google Play submissions',
      'Automated OTA release management pipelines',
      'Biometric authentication and secure keystore storage',
      'Battery-optimized background synchronization',
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
    businessImpact: 'Over 1.8M downloads across client apps with consistent 4.8+ App Store ratings.',
  },
  {
    id: 'ai-ml-solutions',
    title: 'AI & Machine Learning Solutions',
    shortDesc: 'Custom LLM agents, retrieval-augmented generation (RAG), and predictive intelligence.',
    fullDesc: 'Turn proprietary enterprise data into automated competitive advantages. We build autonomous AI workflows, semantic vector retrieval pipelines, custom fine-tuned models, and real-time inference microservices.',
    category: 'ai',
    iconName: 'Sparkles',
    features: [
      'Enterprise LLM orchestration with LangChain & LlamaIndex',
      'High-precision RAG search across internal documents',
      'Autonomous multi-agent task execution systems',
      'Predictive analytics & computer vision algorithms',
    ],
    deliverables: [
      'Custom fine-tuned or grounded LLM microservice',
      'Vector database cluster (pgvector, Pinecone, Qdrant)',
      'Prompt evaluation & hallucination guardrails',
      'Audit logging and compliance guardrails',
    ],
    techStack: ['Python', 'PyTorch', 'LangChain', 'Gemini API', 'pgvector', 'FastAPI'],
    businessImpact: '80% reduction in manual document triage time and 94% customer query resolution.',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, DevOps & Security',
    shortDesc: 'Scalable AWS/GCP/Azure infrastructure, GitOps pipelines, and SOC2 compliance.',
    fullDesc: 'Resilient cloud infrastructure that guarantees high availability and rapid software release cycles. We containerize workloads with Kubernetes, automate infrastructure as code with Terraform, and enforce zero-trust security postures.',
    category: 'cloud',
    iconName: 'Cloud',
    features: [
      'Kubernetes cluster orchestration (EKS, GKE)',
      'Infrastructure as Code (Terraform, Pulumi)',
      'GitOps CI/CD pipelines (GitHub Actions, ArgoCD)',
      'Zero-trust security and SOC2 compliance automation',
    ],
    deliverables: [
      'Production cluster with multi-region redundancy',
      '24/7 automated observability with Prometheus/Grafana',
      'Automated security scanning & vulnerability alerts',
      'Disaster recovery playbooks with RPO < 5 mins',
    ],
    techStack: ['AWS', 'Google Cloud', 'Kubernetes', 'Terraform', 'Docker', 'Grafana'],
    businessImpact: '99.99% infrastructure uptime with 4x faster production release velocity.',
  },
  {
    id: 'uiux-design',
    title: 'UI/UX & Product Design',
    shortDesc: 'Design systems, interactive prototypes, and high-fidelity product design.',
    fullDesc: 'Digital experiences engineered to convert. We combine quantitative behavioral research with meticulous aesthetic craft to create intuitive product interfaces, comprehensive Figma design systems, and delightful micro-interactions.',
    category: 'design',
    iconName: 'Palette',
    features: [
      'End-to-end design thinking & user journey mapping',
      'Enterprise Figma component libraries & token systems',
      'Interactive micro-prototypes with tactile feedback',
      'Usability testing & conversion rate optimization (CRO)',
    ],
    deliverables: [
      'Production-ready Figma token library',
      'High-fidelity interactive prototypes',
      'Clickable user test reports & session heatmaps',
      'Complete developer handoff documentation',
    ],
    techStack: ['Figma', 'Tokens Studio', 'Framer', 'Protopie', 'Tailwind CSS'],
    businessImpact: '+44% user onboarding completion and 35% shorter feature adoption time.',
  },
];

export const TECH_CATEGORIES = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'aiml', name: 'AI & ML' },
  { id: 'cloud', name: 'Cloud & DevOps' },
];

export const TECH_ITEMS: TechItem[] = [
  { name: 'React 19', category: 'frontend', description: 'Declarative component architecture with concurrent rendering', useCase: 'Enterprise dashboards & SaaS web consoles', maturity: 'High Performance' },
  { name: 'Next.js 15', category: 'frontend', description: 'Hybrid SSR & static edge rendering framework', useCase: 'High-conversion B2B web applications', maturity: 'Enterprise Standard' },
  { name: 'TypeScript', category: 'frontend', description: 'Strict typed JavaScript for rock-solid codebases', useCase: 'Mission-critical distributed applications', maturity: 'Industry Standard' },
  { name: 'Tailwind CSS', category: 'frontend', description: 'Utility-first modern styling engine', useCase: 'Pixel-perfect, lightweight, maintainable UI systems', maturity: 'High Performance' },
  { name: 'Vue.js 3', category: 'frontend', description: 'Progressive reactive JavaScript framework', useCase: 'Interactive portal workflows & customer portals', maturity: 'Enterprise Standard' },
  { name: 'Node.js', category: 'backend', description: 'Event-driven asynchronous JavaScript runtime', useCase: 'Real-time APIs, microservices & proxy layers', maturity: 'Industry Standard' },
  { name: 'Go (Golang)', category: 'backend', description: 'Compiled high-concurrency systems language', useCase: 'High-throughput payment engines & streaming data', maturity: 'High Performance' },
  { name: 'Python', category: 'backend', description: 'Versatile backend language with deep AI ecosystem', useCase: 'Data ingestion, ML pipelines & automation services', maturity: 'Industry Standard' },
  { name: 'PostgreSQL', category: 'backend', description: 'Battle-tested relational database with JSON & vector support', useCase: 'Core transactional data ledger & pgvector storage', maturity: 'Enterprise Standard' },
  { name: 'Redis', category: 'backend', description: 'Ultra-low latency in-memory data store', useCase: 'Distributed caching, pub/sub & rate limiting', maturity: 'High Performance' },
  { name: 'Flutter', category: 'mobile', description: 'Google multi-platform native UI compilation', useCase: 'High-fidelity iOS and Android native apps', maturity: 'Enterprise Standard' },
  { name: 'React Native', category: 'mobile', description: 'Native mobile framework powered by React', useCase: 'Cross-platform mobile apps with native bridges', maturity: 'Industry Standard' },
  { name: 'Swift (iOS)', category: 'mobile', description: 'Native Apple platform performance language', useCase: 'iOS native apps utilizing ARKit, CoreML & Widgets', maturity: 'High Performance' },
  { name: 'Kotlin (Android)', category: 'mobile', description: 'Modern concise language for Android OS', useCase: 'Hardware-intensive field and enterprise Android apps', maturity: 'High Performance' },
  { name: 'LangChain & LlamaIndex', category: 'aiml', description: 'Orchestration framework for LLMs & agents', useCase: 'Multi-step autonomous business logic agents', maturity: 'High Performance' },
  { name: 'Gemini AI API', category: 'aiml', description: 'Multimodal AI reasoning & code synthesis', useCase: 'Intelligent document parsing & semantic generation', maturity: 'Industry Standard' },
  { name: 'PyTorch', category: 'aiml', description: 'Deep learning research and production framework', useCase: 'Custom computer vision and predictive models', maturity: 'Enterprise Standard' },
  { name: 'Qdrant & Pinecone', category: 'aiml', description: 'High-dimensional vector similarity indexing', useCase: 'Sub-10ms semantic search across enterprise docs', maturity: 'High Performance' },
  { name: 'Amazon Web Services', category: 'cloud', description: 'Comprehensive global cloud computing infrastructure', useCase: 'Multi-region enterprise cloud infrastructure', maturity: 'Enterprise Standard' },
  { name: 'Kubernetes', category: 'cloud', description: 'Automated container deployment and orchestration', useCase: 'Elastic auto-scaling microservices fleets', maturity: 'Industry Standard' },
  { name: 'Terraform', category: 'cloud', description: 'Declarative Infrastructure as Code platform', useCase: 'Automated repeatable cloud environment provisioning', maturity: 'High Performance' },
  { name: 'Docker', category: 'cloud', description: 'Lightweight container isolation for services', useCase: 'Hermetic builds and production deployment reproducibility', maturity: 'Industry Standard' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nexus-fintech',
    title: 'Nexus AI Financial Intelligence Platform',
    client: 'Apex Financial Holdings (London / Zurich)',
    category: 'AI & ML',
    summary: 'Autonomous risk analytics and portfolio forecasting engine handling $1.2B in daily asset movements.',
    challenge: 'The client faced 4-hour calculation delays analyzing cross-border forex and equity shifts across 14 fragmented legacy systems with high slippage risk.',
    solution: 'Engineered a low-latency streaming pipeline using Go, Redis, and custom fine-tuned transformer models with pgvector to deliver real-time risk alerts in under 120ms.',
    architecture: [
      'Distributed event ingestion using Apache Kafka at 85k events/sec',
      'Go microservices calculating predictive risk indices via GPU clusters',
      'Real-time WebSocket data broadcasting to React 19 visual trading desks',
      'Multi-region AWS deployment with sub-millisecond failover capabilities',
    ],
    metrics: [
      { label: 'Latency Reduction', value: '<120ms', change: '-98.4% compute latency' },
      { label: 'Daily Trading Volume', value: '$1.2B+', change: 'Zero dropped transactions' },
      { label: 'Forecasting Accuracy', value: '94.8%', change: '+31% over baseline models' },
    ],
    tags: ['AI & ML', 'Predictive Modeling', 'Go', 'React', 'Kafka', 'pgvector'],
    techStack: ['Go', 'Python', 'React 19', 'Kafka', 'PostgreSQL', 'Redis'],
    imageUrl: caseStudyAiFintech,
  },
  {
    id: 'omni-erp',
    title: 'Global Supply Chain & Cloud ERP Matrix',
    client: 'Vanguard Industrial Logistics (Singapore)',
    category: 'Enterprise Software',
    summary: 'Unified cloud ERP modernizing warehouse fulfillment, multi-tier procurement, and customs manifests.',
    challenge: 'Three siloed legacy ERPs led to inventory discrepancies of up to 14% and caused critical maritime supply chain bottlenecks during peak holiday seasons.',
    solution: 'Designed and implemented an event-driven modular ERP backbone with dynamic inventory allocation, automated EDI billing, and real-time fleet GPS telemetry.',
    architecture: [
      'Event-driven modular monolith transitioning cleanly into microservices',
      'PostgreSQL multi-tenant database partitioning with zero cross-tenant leakage',
      'Automated customs documentation generation engine compliant with WTO standards',
      'Real-time warehouse barcode and RFID scanner integration layer',
    ],
    metrics: [
      { label: 'Order Processing Speed', value: '3.8x', change: 'Cut dispatch cycle from 48h to 12h' },
      { label: 'Inventory Discrepancy', value: '0.04%', change: 'Down from 14.2% prior year' },
      { label: 'Annual Operational Savings', value: '$2.4M', change: 'First year ROI validated' },
    ],
    tags: ['Enterprise Software', 'Supply Chain', 'Node.js', 'PostgreSQL', 'Kubernetes'],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'Tailwind CSS'],
    imageUrl: caseStudyEnterpriseErp,
  },
  {
    id: 'vitalwatch-mobile',
    title: 'VitalWatch Biometric Telemetry Mobile Suite',
    client: 'CardioPulse Digital Health (San Francisco)',
    category: 'Mobile Apps',
    summary: 'HIPAA-compliant iOS and Android app monitoring cardiovascular telemetry and arrhythmia anomalies.',
    challenge: 'Transmitting sensitive Bluetooth LE sensor data continuously without draining battery or risking patient private health information over public networks.',
    solution: 'Crafted an offline-first Flutter application utilizing native C++ Bluetooth decoders and AES-256 end-to-end encrypted packet synchronization with medical cloud endpoints.',
    architecture: [
      'High-throughput Bluetooth Low Energy (BLE) background packet daemon',
      'Local SQLite database queue storing 14 days of encrypted biometric pulses',
      'Sub-second arrhythmia anomaly detection triggering priority clinician push alerts',
      'End-to-end HIPAA and GDPR verified cryptographic validation',
    ],
    metrics: [
      { label: 'Active Monitored Patients', value: '450k+', change: 'Across 120 hospital networks' },
      { label: 'Battery Consumption', value: '<2.1%', change: 'Per 24 hours of background BLE' },
      { label: 'App Store Rating', value: '4.9/5', change: 'Over 18,000 verified patient reviews' },
    ],
    tags: ['Mobile Apps', 'Flutter', 'Healthcare', 'Bluetooth LE', 'HIPAA'],
    techStack: ['Flutter', 'Dart', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
    imageUrl: caseStudyHealthMobile,
  },
  {
    id: 'aurora-b2b-saas',
    title: 'Aurora Autonomous B2B Commerce Engine',
    client: 'HyperScale Retail Alliance (Dubai)',
    category: 'Web Apps',
    summary: 'Edge-rendered wholesale procurement portal handling 180,000 SKUs with personalized catalog pricing.',
    challenge: 'Slow product catalog searches (>3.5s) caused significant B2B contract abandonment during multi-million dollar vendor re-ordering sessions.',
    solution: 'Re-architected the frontend onto Next.js 15 edge nodes with distributed search caching, reducing search latency to 45ms and modernizing invoice generation.',
    architecture: [
      'Next.js 15 incremental static regeneration deployed across 30 edge regions',
      'Sub-50ms elastic search indexing with dynamic volume tiered discount pricing',
      'Automated multi-currency tax calculation and corporate credit approvals',
      'Seamless ERP integration with SAP and Microsoft Dynamics 365',
    ],
    metrics: [
      { label: 'Catalog Search Speed', value: '45ms', change: 'Improved from 3.5 seconds' },
      { label: 'B2B Checkout Conversion', value: '+42%', change: 'In first 90 days post-launch' },
      { label: 'Quarterly Gross Volume', value: '$84M', change: 'Handled without downtime' },
    ],
    tags: ['Web Apps', 'Next.js', 'E-Commerce', 'Edge Computing', 'TypeScript'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redis', 'Stripe'],
    imageUrl: heroAgencyImage,
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    name: 'Discovery & Product Architecture',
    phase: 'Phase 1 · Weeks 1-2',
    duration: '1 - 2 Weeks',
    description: 'We dissect your business goals, user personas, technical constraints, and data flows to construct an unshakeable architectural blueprint.',
    activities: [
      'Executive stakeholder interviews and KPI definition',
      'Technical feasibility assessment and system topology design',
      'Database schema modeling and entity-relationship diagrams',
      'Security posture, compliance & infrastructure requirements',
    ],
    outputs: ['Technical Architecture Document (TAD)', 'Interactive User Journey Wireframes', 'Database Entity Schema', 'Sprint Delivery Roadmap'],
  },
  {
    step: '02',
    name: 'Rapid Prototyping & UX System',
    phase: 'Phase 2 · Weeks 2-4',
    duration: '2 - 3 Weeks',
    description: 'We produce interactive, clickable prototypes in Figma alongside comprehensive design tokens, ensuring visual mastery before writing code.',
    activities: [
      'Design token definition (typography, elevation, colors)',
      'High-fidelity interactive prototype development',
      'User accessibility (WCAG AA) and contrast validation',
      'Stakeholder review and design sign-off sprint',
    ],
    outputs: ['Figma Master Component Library', 'Clickable Mobile & Desktop Prototypes', 'Asset Inventory & SVG Specifications'],
  },
  {
    step: '03',
    name: 'Agile Engineering Sprints',
    phase: 'Phase 3 · Sprints 1-6',
    duration: '4 - 12 Weeks',
    description: 'Disciplined 2-week agile sprints with bi-weekly staging deployments, continuous code reviews, and transparent velocity reporting.',
    activities: [
      'Clean modular frontend and backend engineering',
      'Bi-weekly staging environment releases for live client testing',
      'Automated unit testing with >85% code coverage',
      'Strict API versioning and backward compatibility checks',
    ],
    outputs: ['Live Staging Environments', 'Sprint Demo Recordings', 'Bi-weekly Velocity Reports', 'Git Audit Trails'],
  },
  {
    step: '04',
    name: 'Automated QA & Security Hardening',
    phase: 'Phase 4 · Final Verification',
    duration: '1 - 2 Weeks',
    description: 'Rigorous end-to-end integration tests, load stress testing, security penetration audits, and cross-browser visual verification.',
    activities: [
      'Automated end-to-end user journey test runs',
      'Stress and concurrency load testing under 10x traffic bursts',
      'OWASP Top 10 vulnerability remediation',
      'Cross-device mobile and desktop responsive verification',
    ],
    outputs: ['Security & Pen-Test Audit Report', 'Load Testing Benchmark Signoff', 'Zero Critical Vulnerability Clearance'],
  },
  {
    step: '05',
    name: 'Cloud Deployment & Zero-Downtime Launch',
    phase: 'Phase 5 · Production Cutover',
    duration: 'Week of Launch',
    description: 'Production rollout orchestrated through automated CI/CD pipelines with multi-region redundancy, DNS failover, and live traffic cutovers.',
    activities: [
      'Production cluster provisioning with Terraform and Kubernetes',
      'Database migration rehearsal and live data validation',
      'Real-time observability instrumentation (metrics, traces, error alarms)',
      'DNS cutover and edge CDN SSL propagation',
    ],
    outputs: ['Production Live Status', 'Grafana Observability Dashboard', 'Disaster Recovery Runbook', 'Cloud Asset Handover'],
  },
  {
    step: '06',
    name: 'SLA Support & Continuous Evolution',
    phase: 'Phase 6 · Ongoing Partnership',
    duration: 'Continuous Partnership',
    description: 'Guaranteed 99.99% uptime SLAs, proactive dependency patching, monthly performance audits, and rapid feature iteration sprints.',
    activities: [
      '24/7 infrastructure health probers and alerting',
      'Monthly performance, SEO, and security audits',
      'Feature roadmap ideation and quarterly reviews',
      'Dedicated Slack / WhatsApp VIP channel support',
    ],
    outputs: ['Monthly Uptime SLA Reports', 'Security Patch Changelogs', 'Quarterly Technical Roadmap Updates'],
  },
];

export const CORE_VALUES = [
  {
    title: 'Zero Compromise On Engineering Rigor',
    desc: 'We write strict TypeScript, decoupled business logic, and self-documenting code built to endure beyond team rotations.',
    metric: '100% Type-Safe Architecture',
  },
  {
    title: 'Transparent, High-Velocity Delivery',
    desc: 'No black-box development. You get live staging URLs, direct access to senior architects, and verifiable bi-weekly milestones.',
    metric: '2-Week Agile Cadence',
  },
  {
    title: 'Enterprise-Grade Security by Default',
    desc: 'From OWASP hardening and role-based access control to end-to-end encryption, security is baked into our foundation, never bolted on.',
    metric: 'SOC2 & HIPAA Compliant Patterns',
  },
  {
    title: 'Outcome-Obsessed Business Alignment',
    desc: 'We do not build software for the sake of technology; we build systems that measurably cut costs, scale revenue, and protect margins.',
    metric: '3.8x Average Client ROI',
  },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'sr-fullstack-dev',
    title: 'Senior Full-Stack Engineer (React + Node/Go)',
    department: 'Engineering',
    location: 'Ahmedabad, Gujarat (Hybrid / Onsite)',
    type: 'Full-Time',
    experience: '4 - 7 Years',
    salaryRange: '₹14,00,000 - ₹24,00,000 / yr',
    description: 'We are seeking an elite full-stack engineer who crafts clean architectures, understands distributed systems, and loves building ultra-fluid web experiences.',
    responsibilities: [
      'Architect and build high-throughput microservices using Node.js and Go',
      'Lead frontend development using React 19, TypeScript, and modern styling architectures',
      'Optimize relational databases (PostgreSQL) and distributed caching systems',
      'Mentor junior engineers and champion clean code standards and automated testing',
    ],
    requirements: [
      '4+ years of production experience with TypeScript, React, and Node.js or Go',
      'Demonstrated expertise in relational database schema design and SQL optimization',
      'Deep understanding of microservices, Docker, and CI/CD pipelines',
      'Strong communication skills and collaborative problem-solving attitude',
    ],
  },
  {
    id: 'ai-solutions-architect',
    title: 'Senior AI & ML Solutions Engineer',
    department: 'AI & ML',
    location: 'Ahmedabad, Gujarat (Hybrid)',
    type: 'Full-Time',
    experience: '3 - 6 Years',
    salaryRange: '₹16,00,000 - ₹28,00,000 / yr',
    description: 'Lead the design and production deployment of autonomous LLM agents, semantic vector databases, and enterprise predictive intelligence workflows.',
    responsibilities: [
      'Design high-precision RAG pipelines using pgvector, Qdrant, and LangChain',
      'Evaluate, fine-tune, and integrate enterprise multimodal LLMs into client products',
      'Build scalable Python/FastAPI microservices for real-time model inference',
      'Implement safety guardrails, hallucination metrics, and compliance logs',
    ],
    requirements: [
      'Strong hands-on background in Python, PyTorch, LangChain, and vector databases',
      'Proven track record taking LLM applications into production environments',
      'Familiarity with containerization and cloud GPU infrastructure (AWS/GCP)',
      'Degree in Computer Science, Mathematics, or equivalent practical experience',
    ],
  },
  {
    id: 'react-native-specialist',
    title: 'Senior Mobile App Developer (Flutter & React Native)',
    department: 'Mobile',
    location: 'Ahmedabad, Gujarat (Hybrid / Onsite)',
    type: 'Full-Time',
    experience: '3 - 6 Years',
    salaryRange: '₹12,00,000 - ₹20,00,000 / yr',
    description: 'Craft buttery-smooth 60fps mobile applications with offline sync, biometric security, and native device integrations for global enterprise clients.',
    responsibilities: [
      'Build and maintain cross-platform mobile apps using Flutter and React Native',
      'Integrate native iOS (Swift) and Android (Kotlin) platform channels',
      'Implement offline-first caching schemas with SQLite/Realm',
      'Manage app store submission, beta testing, and automated deployment pipelines',
    ],
    requirements: [
      '3+ years building and shipping production mobile applications to App Store and Play Store',
      'In-depth knowledge of mobile state management, lifecycle, and memory optimization',
      'Experience with Bluetooth LE, push notifications, and background location services',
      'Strong UI fidelity matching Figma designs to the pixel',
    ],
  },
  {
    id: 'senior-product-designer',
    title: 'Senior UI/UX & Product Designer',
    department: 'Design',
    location: 'Ahmedabad, Gujarat (Hybrid)',
    type: 'Full-Time',
    experience: '3 - 5 Years',
    salaryRange: '₹10,00,000 - ₹18,00,000 / yr',
    description: 'Transform complex enterprise software workflows into clean, intuitive, and visually breathtaking digital interfaces.',
    responsibilities: [
      'Lead product discovery workshops, journey mapping, and wireframing',
      'Build and maintain multi-brand design systems and token libraries in Figma',
      'Produce interactive micro-interaction prototypes that guide engineering implementation',
      'Conduct usability tests and iterate based on quantitative customer analytics',
    ],
    requirements: [
      'Strong portfolio demonstrating high-craft digital products, SaaS, or mobile applications',
      'Mastery of Figma, auto-layout, interactive prototyping, and design token architectures',
      'Strong understanding of HTML/CSS constraints and developer handoff workflows',
      'Passionate about typography, layout rhythm, and micro-animations',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'House of Vibes re-architected our entire trading analytics engine in under four months. The system has processed over $1.2B in volume without a single dropped packet. Their engineering rigor is truly world-class.',
    name: 'Julian Vance',
    role: 'Chief Technology Officer',
    company: 'Apex Financial Holdings',
    location: 'London, UK',
    metric: '98.4% Latency Drop',
  },
  {
    id: 't2',
    quote: 'Finding an agency that treats your product with the same obsessive ownership as internal founders is rare. House of Vibes scaled our logistics ERP to 120 regional hubs on time and on budget.',
    name: 'Mei-Ling Tan',
    role: 'VP of Global Operations',
    company: 'Vanguard Industrial Logistics',
    location: 'Singapore',
    metric: '$2.4M Cost Savings',
  },
  {
    id: 't3',
    quote: 'Our patient biometric app needed HIPAA compliance, 60fps responsiveness, and near-zero battery drain. The House of Vibes mobile team nailed every benchmark. It now commands a 4.9 rating with 450,000 active users.',
    name: 'Dr. Marcus Vance',
    role: 'Head of Digital Therapeutics',
    company: 'CardioPulse Health',
    location: 'San Francisco, USA',
    metric: '450k+ Active Patients',
  },
];

export const BENEFITS = [
  { title: 'Flexible Work Culture', desc: 'Hybrid options with core collaboration hours and respect for uninterrupted deep work time.' },
  { title: 'Top-Tier Tech Gear', desc: 'Latest MacBook Pro M-series workstations, dual 4K monitors, and ergonomic setup budget.' },
  { title: 'Annual Learning Stipend', desc: '₹75,00,000/yr personal allowance for conferences, cloud certifications, books, and courses.' },
  { title: 'Comprehensive Health Insurance', desc: 'Full medical coverage for you and your dependents with zero deduction hassles.' },
  { title: 'Performance Bonuses', desc: 'Bi-annual project milestone bonuses tied to client success and architectural delivery.' },
  { title: 'Transparent Growth Ladder', desc: 'Clearly defined engineering progression from Junior to Staff Architect with zero politics.' },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Process' | 'Engagement' | 'Security & IP' | 'Architecture' | 'SLA Support' | 'AI & ML';
}

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How does House of Vibes structure project delivery & sprint milestones?',
    answer: 'We operate on transparent 2-week agile sprints. Every sprint begins with technical planning and entity modeling, followed by continuous commits to a dedicated client Git repository, bi-weekly live staging deployments, and recorded video demos. Clients receive direct Slack or WhatsApp access to their dedicated lead architect.',
    category: 'Process',
  },
  {
    id: 'f2',
    question: 'What engagement models do you offer (Fixed-Price vs. Dedicated Squad)?',
    answer: 'We offer two flexible models: 1) Fixed-Price Milestone Contracts for projects with well-defined specifications and deliverables, and 2) Dedicated Senior Engineering Pods (Staff Architect + Senior Full-Stack / AI Engineers + QA) billed on monthly velocity retainers for evolving enterprise platforms.',
    category: 'Engagement',
  },
  {
    id: 'f3',
    question: 'How do you protect client intellectual property, codebases, and data privacy?',
    answer: 'Strict security and IP protection are standard practice. We execute mutual non-disclosure agreements (NDAs) prior to any architectural review. 100% of the code, intellectual property, infrastructure configurations, and assets created belong exclusively to your organization from day one.',
    category: 'Security & IP',
  },
  {
    id: 'f4',
    question: 'Can you modernize our legacy monolithic systems without downtime?',
    answer: 'Yes. We specialize in zero-downtime legacy strangler migrations. We wrap existing databases with high-throughput event buses (Kafka/Redis) or proxy layers, incrementally carve out high-load modules into microservices, and deploy to Kubernetes or cloud-native serverless without halting live customer traffic.',
    category: 'Architecture',
  },
  {
    id: 'f5',
    question: 'What happens post-launch? Do you provide 24/7 SLA maintenance and monitoring?',
    answer: 'Yes, our SLA maintenance agreements include 99.99% infrastructure uptime commitments, 24/7 automated synthetic probers (Grafana/Prometheus), sub-15 minute critical incident response times, monthly dependency security audits, and continuous performance optimization.',
    category: 'SLA Support',
  },
  {
    id: 'f6',
    question: 'How do you integrate Custom AI Agents and LLMs into existing software?',
    answer: 'We build enterprise-grade RAG and agentic workflows using pgvector, Qdrant, and LangChain with strict hallucination guardrails. Your proprietary business documents and CRM data remain isolated in your private cloud with zero public model training leakage.',
    category: 'AI & ML',
  },
];

export const DESIGN_TOKENS = [
  { name: 'Color Discipline', value: 'Obsidian #090D16 & Slate #0F172A neutral canvas paired with Electric Cyan #00D8FF & Indigo #4F46E5 accents' },
  { name: 'Typography System', value: 'Plus Jakarta Sans for display titles, DM Sans for high-legibility body, and JetBrains Mono for tabular numbers' },
  { name: 'Elevation & Surfaces', value: 'Single-elevation glassmorphism blur panels with 1px subtle hairline borders (0.08 alpha)' },
  { name: 'Micro-Interactions', value: 'Cubic bezier 150-200ms settling curves for tactile button feedbacks, smooth drawers, and tab transitions' },
];

