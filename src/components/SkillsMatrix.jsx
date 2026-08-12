import React, { useState } from 'react';
import { Cpu, Terminal, Shield, CheckCircle, Code, Layers, Zap, Server, Activity } from 'lucide-react';

export const techStackData = [
  {
    category: "Agentic AI & Systems",
    subtitle: "Autonomous Agents, System Daemons & Tool Protocols",
    items: [
      {
        name: "Model Context Protocol (MCP)",
        tier: "Production Core",
        application: "Wellsy v2.0 & Nitro-Stack 2.0",
        description: "Standardized tool execution protocol & context servers for multi-agent workflows.",
        tools: ["MCP Servers", "JSON-RPC", "Tool Schemas"]
      },
      {
        name: "LangGraph & LangChain",
        tier: "Agentic Architecture",
        application: "Autonomous ReAct Loops",
        description: "Stateful graph-based multi-agent orchestration, cyclic ReAct loops, and dynamic tool routing.",
        tools: ["StateGraph", "Pydantic AI", "RAG Pipelines"]
      },
      {
        name: "Python System Daemons (asyncio)",
        tier: "System Backend",
        application: "Wellsy v2.0 Daemon (`pystray`)",
        description: "Background OS daemon processes, asynchronous task scheduling, and WebSocket gates.",
        tools: ["asyncio", "pystray", "FastAPI", "WebSockets"]
      },
      {
        name: "System Governance & Encryption",
        tier: "Security Architecture",
        application: "4-Tier Risk Engine & AES-256",
        description: "Risk governance rules engine with real-time UI interception gates and encrypted storage.",
        tools: ["AES-256 Fernet", "SQLite", "Risk Interceptor"]
      }
    ]
  },
  {
    category: "Physics-Informed ML & SciML",
    subtitle: "SciML, Neural Operators & Generative Diffusion",
    items: [
      {
        name: "Physics-Informed Neural Operators (PINO)",
        tier: "Research Engine",
        application: "IEEE IES 2026 Finalist Pipeline",
        description: "PDE-constrained operator learning for modeling physical fields and energy landscapes.",
        tools: ["PyTorch", "PINO", "PDE Constraints"]
      },
      {
        name: "3D Equivariant Diffusion Models",
        tier: "Generative AI",
        application: "3D Molecular Candidate Generation",
        description: "Geometric denoising diffusion models constrained by Gibbs free-energy surfaces.",
        tools: ["GNNs", "Gibbs Loss", "RDKit Cascade"]
      },
      {
        name: "Asynchronous Agent Engines (LangGraph)",
        tier: "Desktop AI Engine",
        application: "Wellsy v1.0 Agent Architecture",
        description: "Multi-node state machine engines, Reasoning and Acting (ReAct) loops, and multi-threaded native C++ file tools.",
        tools: ["LangGraph", "FastAPI", "WebSockets", "C++"]
      },
      {
        name: "Evolution Edge (Neural Bridge)",
        tier: "Edge AI & NPU Acceleration",
        application: "Evolution Edge AI Pipeline",
        description: "Low-latency inference on Ryzen AI NPUs with ONNX Runtime & ROCm 6.x, escalating to AMD MI300X clusters with PEFT & knowledge distillation.",
        tools: ["ROCm 6.x", "ONNX Runtime", "Ryzen AI NPU", "PEFT"]
      },
      {
        name: "Imbalanced ML & Explainability",
        tier: "Industrial Diagnostics",
        application: "Industrial Predictive Maintenance",
        description: "Handling extreme sensor failure imbalance with SMOTE and SHAP feature attribution.",
        tools: ["SMOTE", "SHAP", "LightGBM", "XGBoost"]
      }
    ]
  },
  {
    category: "Robotics & Embedded Systems",
    subtitle: "ROS 2 Middleware, Soft Robotics & Hardware Drivers",
    items: [
      {
        name: "ROS 2 & micro-ROS Middleware",
        tier: "Robotics Middleware",
        application: "Autonomous Car & Kinematics",
        description: "Distributed node architectures, publisher-subscriber loops, and micro-ROS drivers.",
        tools: ["ROS 2 Humble", "micro-ROS", "URDF Models"]
      },
      {
        name: "Embedded IoT Hardware (ESP8266)",
        tier: "Hardware Firmware",
        application: "Hybrid GSM/Wi-Fi Smart Switch",
        description: "Off-grid dual failover firmware, SMS interrupt handling, and custom PCB schematics.",
        tools: ["ESP8266", "A7670C GSM/LTE", "C/C++"]
      },
      {
        name: "Computer Vision & Air Interfaces",
        tier: "Real-Time Perception",
        application: "GestureSense & Pi Autonomous Car",
        description: "MediaPipe 21 hand-landmark tracking, spatial kinematics, and OpenCV HUD rendering.",
        tools: ["OpenCV", "MediaPipe", "Raspberry Pi"]
      },
      {
        name: "Kinematic Simulation & Modeling",
        tier: "Simulation Engine",
        application: "Robot Kinematics & Gazebo",
        description: "3D robot description modeling, joint spatial kinematics, and Gazebo physical simulation.",
        tools: ["URDF", "Gazebo", "Kinematics Drive"]
      }
    ]
  },
  {
    category: "Cloud & MLOps Infrastructure",
    subtitle: "Google Cloud Platform, Model Audit & CI/CD",
    items: [
      {
        name: "Generative AI MLOps & CI/CD",
        tier: "Google Micro-Credential",
        application: "Model Evaluation Pipelines",
        description: "Latent space tracking, LLM context governance, and continuous evaluation loops.",
        tools: ["MLOps", "LLM Evaluation", "Google Skills"]
      },
      {
        name: "Google Cloud Infrastructure",
        tier: "Cloud Platform",
        application: "GCP Compute & Model Endpoints",
        description: "Cloud IAM, compute instances, cloud storage buckets, and GenAI model deployment.",
        tools: ["GCP Engine", "Cloud IAM", "GCS Buckets"]
      },
      {
        name: "Quantum Computing (Qiskit)",
        tier: "IBM Credential",
        application: "IBM Quantum Hardware",
        description: "Quantum circuit creation, superposition, entanglement, and Qiskit SDK execution.",
        tools: ["Qiskit", "Quantum Circuits", "IBM Quantum"]
      }
    ]
  }
];

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" style={{ padding: '80px 0' }}>
      <div className="section-container">
        
        <div className="section-header">
          <div className="badge-glow" style={{ marginBottom: '12px' }}>
            <Cpu size={14} />
            TECHNICAL CAPABILITIES & ARCHITECTURE
          </div>
          <h2 className="section-title">
            Engineering & <span className="gradient-text">Research Stack</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated mastery across agentic orchestration protocols, physics-informed machine learning, and embedded robotics.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          {techStackData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                background: activeTab === idx ? 'linear-gradient(135deg, #00f2fe, #6366f1)' : 'rgba(255, 255, 255, 0.04)',
                color: activeTab === idx ? '#070a12' : 'var(--text-muted)',
                border: activeTab === idx ? 'none' : '1px solid var(--border-subtle)',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Subtitle Banner */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '0.95rem', color: 'var(--color-primary)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
            // {techStackData[activeTab].subtitle}
          </span>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid-2">
          {techStackData[activeTab].items.map((item, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge-glow" style={{ fontSize: '0.78rem' }}>{item.tier}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Zap size={14} />
                    {item.application}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
                  {item.name}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {item.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {item.tools.map((t, tIdx) => (
                  <span key={tIdx} style={{
                    background: 'rgba(0, 242, 254, 0.06)',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                    color: 'var(--text-main)',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
