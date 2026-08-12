export const profileData = {
  name: "Nunna Mokshith",
  title: "Agentic AI Systems Engineer & PIML Researcher",
  institution: "Amrita Vishwa Vidyapeetham (Amritapuri Campus)",
  degree: "B.Tech in Robotics & Artificial Intelligence",
  status: "Semester 5 (S5)",
  cgpa: "8.94",
  secondaryEducation: "Narayana E-Techno Junior College (94.7%)",
  bio: "Engineering high-reliability agentic AI systems, physics-informed neural architectures, and mission-critical embedded robotics. Actively seeking Research & Development (R&D) Internship programs in Agentic AI, Robotics, and SciML.",
  resumePath: "./Nunna_Mokshith_FlowCV_Resume_2026-07-14 (1).pdf",
  email: "mokshith.nunna@gmail.com",
  github: "https://github.com/mokshith-nunna",
  linkedin: "https://linkedin.com/in/mokshith-nunna",
  location: "Amritapuri, Kollam, Kerala, India",
  badge: "OPEN FOR RESEARCH & DEVELOPMENT INTERNSHIPS"
};

export const statsData = [
  { label: "Academic CGPA", value: "8.94", subtext: "S5 Robotics & AI @ Amrita" },
  { label: "Research Papers", value: "4", subtext: "ICRM Published | IEEE & Elsevier" },
  { label: "Flagship Systems", value: "6+", subtext: "Agentic AI, SciML & IoT Systems" },
  { label: "Google Micro-Certs", value: "3", subtext: "Responsible AI & MLOps (2026)" }
];

export const projectsData = [
  {
    id: "wellsy-v2",
    title: "Wellsy v2.0: Multi-Interface Autonomous AI System Daemon",
    category: "Agentic AI & Daemons",
    date: "08/2026",
    badge: "Flagship System",
    description: "Autonomous background system daemon (`pystray`) and multi-interface AI command center featuring a futuristic dark HUD web dashboard (`localhost:8765`), interactive terminal CLI (`wellsy.py`), and persistent automation engine.",
    metrics: [
      { label: "Risk Interception", value: "4-Tier Risk Engine" },
      { label: "Security Encryption", value: "AES-256 Fernet Storage" },
      { label: "Gate Mechanism", value: "Async WebSocket Gate" }
    ],
    highlights: [
      "Built background daemon (`pystray`) with a dark cyberpunk HUD web dashboard and CLI command interface.",
      "Integrated 4-tier risk governance (`SAFE`, `LOW_RISK`, `HIGH_RISK`, `DANGER`) with real-time WebSocket confirmation gates for manual UI approval.",
      "Engineered passive file scanner generating session diff summaries without reading raw contents.",
      "Implemented custom Model Context Protocol (MCP) server for standardized agent tool execution."
    ],
    tags: ["Python asyncio", "FastAPI", "WebSockets", "pystray", "AES-256", "MCP", "SQLite"]
  },
  {
    id: "pino-molecules",
    title: "Physics-Guided Diffusion for 3D Molecular Candidate Generation",
    category: "PIML & GenAI",
    date: "03/2026",
    badge: "IEEE IES Finalist",
    description: "Generative AI framework utilizing Physics-Informed Neural Operators (PINO) and a dual-head Graph Neural Network (GNN) optimizing for geometric denoising and thermodynamic stability via Gibbs free-energy loss.",
    metrics: [
      { label: "Structural Validity", value: "89.5% (+15.5%)" },
      { label: "Gibbs MAE Reduction", value: "-63% Error" },
      { label: "Lipinski Compliance", value: "76.5% Pass" }
    ],
    highlights: [
      "IEEE IES 2026 Generative AI Challenge Finalist (Milestone 3).",
      "Coupled equivariant diffusion with physical energy landscape constraints to prevent non-physical molecular state collapses.",
      "Generated 250 unique thermodynamic candidates in 62.5s across a 3-stage RDKit validation cascade."
    ],
    tags: ["PyTorch", "GNN", "PINO", "Gibbs Free Energy", "RDKit", "3D Molecular Graph"]
  },
  {
    id: "piml-diagnostics",
    title: "Physics-Informed Multi-Modal Industrial Diagnostic Framework",
    category: "PIML & GenAI",
    date: "05/2026",
    badge: "Research Project",
    description: "Physics-Informed Machine Learning (PIML) framework merging tabular sensor data science with mechanical heuristics (True Mechanical Power, Specific Thermal Load, Torque Shock).",
    metrics: [
      { label: "Catastrophic Recall", value: "85.2% Recall" },
      { label: "Explainability", value: "100% SHAP Audited" },
      { label: "Class Imbalance", value: "SMOTE + Ensemble" }
    ],
    highlights: [
      "Engineered physical mechanical indicators directly into feature space to reduce false negatives.",
      "Tackled severe sensor failure class imbalance using synthetic SMOTE oversampling and a Custom Hybrid Ensemble.",
      "Extracted SHAP-based feature importance breakdown to validate domain physics alignment."
    ],
    tags: ["Physics-Informed ML", "SMOTE", "SHAP", "LightGBM", "XGBoost", "Python Data Science"]
  },
  {
    id: "gsm-smart-switch",
    title: "Hybrid GSM & Wi-Fi Smart Switch for Industrial Automation",
    category: "Embedded & Robotics",
    date: "12/2025",
    badge: "Hardware & IoT",
    description: "Mission-critical dual-mode industrial switch coupling an ESP8266 NodeMCU with an A7670C GSM/LTE module supervised by Prof. Sumesh K.P.",
    metrics: [
      { label: "Uptime Reliability", value: "100% Field Uptime" },
      { label: "Failover Mode", value: "Dual GSM/Wi-Fi" },
      { label: "SMS Interrupt", value: "<250ms Response" }
    ],
    highlights: [
      "Designed asynchronous SMS interrupt handling to override local network lockups.",
      "Achieved 100% operational uptime for remote hardware resets in off-grid industrial environments.",
      "Fabricated custom PCB schematics and dual-layer communication stack."
    ],
    tags: ["ESP8266", "A7670C GSM/LTE", "C/C++", "PCB Design", "Hardware Interrupts"]
  },
  {
    id: "gesture-sense",
    title: "GestureSense: OpenCV & MediaPipe Cybernetic Air Interface",
    category: "Computer Vision",
    date: "08/2026",
    badge: "Interactive CV",
    description: "Real-time hand landmark tracking and spatial air interface supporting touchless gesture air mouse, spatial air piano synthesizer, and arm skeleton kinematics.",
    metrics: [
      { label: "Frame Rate", value: "30+ FPS Real-Time" },
      { label: "Landmark Nodes", value: "21 Hand 3D Nodes" },
      { label: "Modes", value: "Air Mouse & Piano" }
    ],
    highlights: [
      "Built real-time spatial air interface using MediaPipe hand landmarks and OpenCV HUD rendering.",
      "Integrated audio sound synthesizer with spatial gesture coordinate maps.",
      "Implemented custom gesture trainer and air mouse control algorithm."
    ],
    tags: ["OpenCV", "MediaPipe", "Python", "Spatial Math", "Pygame Audio", "Computer Vision"]
  },
  {
    id: "wellsy-v1",
    title: "Wellsy v1.0: Asynchronous Desktop AI Agent Engine",
    category: "Agentic AI & Daemons",
    date: "07/2026",
    badge: "Desktop AI Engine",
    description: "Offline-capable desktop AI assistant utilizing an asynchronous FastAPI WebSocket backend, Electron.js dashboard, LangGraph/LangChain ReAct state machine engine, and custom MCP tool server.",
    metrics: [
      { label: "Agent Engine", value: "LangGraph ReAct" },
      { label: "Native Tools", value: "Multi-Threaded C++" },
      { label: "Protocols", value: "MCP & Local RAG" }
    ],
    highlights: [
      "Engineered a native, fully offline-capable personal AI desktop assistant with FastAPI WebSockets & Electron.js.",
      "Developed multi-node LangGraph ReAct state machine with custom MCP server for standardized tool execution.",
      "Programmed multi-threaded native C++ file-scanning backend tools and voice-native dialog speech-to-text modules."
    ],
    tags: ["LangGraph", "LangChain", "FastAPI", "WebSockets", "Electron.js", "C++", "MCP Server", "RAG"]
  },
  {
    id: "evolution-edge",
    title: "Evolution Edge: Self-Evolving Neural Bridge",
    category: "PIML & GenAI",
    date: "05/2026",
    badge: "AMD ROCm & NPU Engine",
    description: "Hybrid AI pipeline utilizing ROCm 6.x and ONNX Runtime to orchestrate low-latency inference on Ryzen AI NPUs with symbolic confidence-based escalation to AMD Instinct MI300X clusters.",
    metrics: [
      { label: "NPU Acceleration", value: "Ryzen AI & ONNX" },
      { label: "Cloud Escalation", value: "AMD MI300X Cluster" },
      { label: "On-Device Learning", value: "PEFT & Distillation" }
    ],
    highlights: [
      "Engineered hybrid AI pipeline utilizing ROCm 6.x and ONNX Runtime for low-latency Ryzen AI NPU inference.",
      "Implemented symbolic confidence-based escalation to AMD Instinct MI300X cloud-scale clusters.",
      "Architected persistent on-device learning through knowledge distillation and PEFT-driven weight updates."
    ],
    tags: ["ROCm 6.x", "ONNX Runtime", "Ryzen AI NPU", "AMD MI300X", "PEFT", "Knowledge Distillation", "Edge AI"]
  }
];

export const researchPapers = [
  {
    id: "icrm-car",
    title: "Small Scale Raspberry Pi Based Autonomous Car: A Practical Guide to Understand Complexity",
    venue: "International Conference on Robotics and Mechatronics (ICRM)",
    status: "Published & Presented",
    type: "Conference Paper",
    year: "2025",
    abstract: "Presents a comprehensive architectural blueprint and experimental evaluation of a low-cost, small-scale autonomous car. Utilizes Raspberry Pi for real-time computer vision lane detection, ultrasonic spatial mapping, and closed-loop motor feedback.",
    citations: "Nunna Mokshith et al., 'Small Scale Raspberry Pi Based Autonomous Car: A Practical Guide to Understand Complexity', ICRM."
  },
  {
    id: "ieee-diffusion",
    title: "Physics-Guided Equivariant Diffusion Framework for 3D Molecular Candidate Generation Toward Catalyst Discovery",
    venue: "IEEE IES 2026 Conference",
    status: "Under Review (Finalist)",
    type: "Conference Paper",
    year: "2026",
    abstract: "Introduces an equivariant 3D diffusion model constrained by physical force fields and Gibbs free energy surfaces. Demonstrates superior structural validity and Lipinski rule compliance over unconstrained generative models.",
    citations: "Nunna Mokshith et al., 'Physics-Guided Equivariant Diffusion Framework for 3D Molecular Candidate Generation Toward Catalyst Discovery', IEEE IES 2026."
  },
  {
    id: "piml-paper",
    title: "Physics-Informed Multi-Modal Industrial Diagnostics: A Framework Integrating Mechanical Heuristics with Ensemble Learning",
    venue: "IEEE/Springer Journal Track",
    status: "Manuscript Under Review",
    type: "Journal Paper",
    year: "2026",
    abstract: "Proposes an end-to-end diagnostic paradigm that explicitly embeds mechanical power equations and thermal load heuristics into machine learning pipelines, yielding 85.2% catastrophic failure recall.",
    citations: "Nunna Mokshith et al., 'Physics-Informed Multi-Modal Industrial Diagnostics: A Framework Integrating Mechanical Heuristics with Ensemble Learning'."
  },
  {
    id: "desalination-paper",
    title: "Performance Evaluation and Desalination Efficiency Analysis of Low-Cost Parabolic Dish Solar Desalination System",
    venue: "Elsevier Next Energy Journal",
    status: "Under Review (ID: NXENER-D-26-01950)",
    type: "Journal Paper",
    year: "2026",
    abstract: "Provides empirical energy balance modeling and thermal efficiency analysis for a low-cost parabolic dish solar desalination apparatus, evaluating yield improvements across varying thermal flux levels.",
    citations: "Nunna Mokshith et al., 'Performance Evaluation and Desalination Efficiency Analysis of Low-Cost Parabolic Dish Solar Desalination System', Elsevier Next Energy (NXENER-D-26-01950)."
  }
];

export const certificationsData = [
  {
    title: "Responsible AI for Developers: Fairness & Bias",
    issuer: "Google SkillsBuild",
    date: "July 19, 2026",
    category: "AI Ethics & Governance",
    description: "Identifying algorithmic bias, implementing statistical fairness constraints, and ethical AI deployment pipelines."
  },
  {
    title: "MLOps with Agent Platform: Model Evaluation",
    issuer: "Google SkillsBuild",
    date: "July 15, 2026",
    category: "MLOps & Systems",
    description: "Agent platform evaluation metrics, model performance auditing, continuous deployment loops, and benchmark tracking."
  },
  {
    title: "MLOps for Generative AI",
    issuer: "Google SkillsBuild",
    date: "July 15, 2026",
    category: "MLOps & GenAI",
    description: "LLM CI/CD pipelines, context window management, latent space tracking, and production LLM governance."
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Skills",
    date: "June 2026",
    category: "Cloud Infrastructure",
    description: "Core GCP infrastructure, compute engine, storage buckets, networking, and cloud IAM security."
  },
  {
    title: "Deploy and Manage Generative AI Models",
    issuer: "Google Skills",
    date: "June 2026",
    category: "Generative AI",
    description: "Prompt tuning, model deployment, monitoring LLM latency, and endpoint scaling on cloud infrastructure."
  },
  {
    title: "Quantum Computing with IBM Quantum Qiskit",
    issuer: "IBM",
    date: "Nov 2025",
    category: "Quantum Computing",
    description: "Quantum circuit creation, Qiskit SDK, superposition, entanglement, and running jobs on IBM Quantum hardware."
  },
  {
    title: "Computer Vision using Raspberry Pi & OpenCV",
    issuer: "Infosys Springboard",
    date: "Nov 2025",
    category: "Robotics & CV",
    description: "Real-time video processing, edge device vision pipelines, contour detection, and Raspberry Pi hardware integration."
  },
  {
    title: "Data Science Fundamentals",
    issuer: "Scaler",
    date: "April 2026",
    category: "Data Science",
    description: "Advanced exploratory data analysis, statistical modeling, hypothesis testing, and pandas pipeline optimization."
  },
  {
    title: "Machine Learning for Beginners",
    issuer: "Simplilearn",
    date: "May 2026",
    category: "Machine Learning",
    description: "Foundational ML algorithms, supervised vs unsupervised learning paradigms, feature engineering, and scikit-learn."
  },
  {
    title: "Developing Interpersonal Skills",
    issuer: "IBM via Coursera",
    date: "Oct 2025",
    category: "Professional Leadership",
    description: "Strategic communication protocols, crisis management, cross-functional collaboration, and athletic squad leadership."
  }
];

export const skillsCategories = [
  {
    category: "Agentic AI & Systems",
    skills: [
      { name: "LangGraph / LangChain", level: 92 },
      { name: "Model Context Protocol (MCP)", level: 95 },
      { name: "ReAct Loops & RAG Pipelines", level: 90 },
      { name: "Python (asyncio, OOP, FastApi)", level: 94 },
      { name: "System Daemons & WebSockets", level: 88 }
    ]
  },
  {
    category: "Physics-Informed ML & SciML",
    skills: [
      { name: "Scientific ML (POD, DMD, SINDy)", level: 92 },
      { name: "Physics-Informed Neural Operators (PINO)", level: 88 },
      { name: "Graph Neural Networks (GNNs)", level: 86 },
      { name: "3D Equivariant Diffusion Models", level: 85 },
      { name: "SMOTE & SHAP Explainability", level: 90 }
    ]
  },
  {
    category: "Robotics & Embedded Systems",
    skills: [
      { name: "ROS 2, micro-ROS & URDF Modeling", level: 90 },
      { name: "Bio-Inspired Soft Robotics (TerraProbe)", level: 88 },
      { name: "ESP8266 & Arduino Microcontrollers", level: 92 },
      { name: "GSM/LTE Hardware Failover (A7670C)", level: 90 },
      { name: "Computer Vision (OpenCV, MediaPipe)", level: 88 }
    ]
  }
];

export const leadershipData = {
  athletic: {
    role: "Field Hockey Team Captain & Center Player",
    squadSize: "20-member Squad",
    highlights: [
      "Captained and led a 20-member squad across high-stakes competitive inter-college tournaments.",
      "Executed real-time tactical positioning, squad rotation strategy, and on-field split-second decision making under intense pressure.",
      "Fostered high situational confidence and public presentation skills directly applicable to software architecture pitches and tech demos."
    ]
  },
  hackathons: [
    {
      name: "Amrita Hack Horizon Hackathon",
      date: "July 2026",
      team: "Team Hack Horizon",
      organizer: "Nitrostack & WeKan Enterprises",
      signoff: "Verified by CEOs Abhishek Pandit & Pablo Jiménez Godoy",
      details: "Engineered Nitro-Stack 2.0, a high-throughput agentic execution engine for multi-agent workflows."
    },
    {
      name: "Guidewire DEVTrails University Hackathon",
      date: "March 2026",
      team: "Lead Architect",
      organizer: "Guidewire Software",
      signoff: "Enterprise Insurance Automation",
      details: "Built automated insurance claim workflow agent with risk score rules engine."
    },
    {
      name: "The Safety Blueprint Workshop",
      date: "2025 - 2026",
      team: "Technical Facilitator",
      organizer: "Civic-Police Collaboration",
      signoff: "Municipal Safety Standards",
      details: "Co-developed municipal safety indicators and household crisis parameter blueprints."
    },
    {
      name: "Urban X Challenge Ideathon",
      date: "2025",
      team: "System Designer",
      organizer: "National Institute of Urban Management",
      signoff: "Urban Infrastructure Planning",
      details: "Proposed IoT-assisted smart waste sorting and logistics dispatch routing."
    }
  ]
};
