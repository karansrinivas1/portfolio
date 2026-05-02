"use client";

import { motion } from "framer-motion";
import { Download, ArrowLeft, ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const SECTION_STYLE: React.CSSProperties = {
  marginBottom: "2.5rem",
};

const LABEL_STYLE: React.CSSProperties = {
  fontSize: "0.68rem",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "var(--text-tertiary)",
  borderBottom: "1px solid var(--bg-border)",
  paddingBottom: "0.5rem",
  marginBottom: "1.25rem",
};

const CHIP_STYLE: React.CSSProperties = {
  display: "inline-block",
  padding: "0.22rem 0.65rem",
  background: "rgba(124,58,237,0.08)",
  border: "1px solid rgba(124,58,237,0.2)",
  borderRadius: "5px",
  fontSize: "0.72rem",
  fontFamily: "var(--font-mono)",
  fontWeight: 500,
  color: "var(--accent-light)",
  margin: "0.2rem",
};

const METRIC_CHIP: React.CSSProperties = {
  display: "inline-block",
  padding: "0.15rem 0.55rem",
  background: "rgba(6,182,212,0.08)",
  border: "1px solid rgba(6,182,212,0.2)",
  borderRadius: "4px",
  fontSize: "0.7rem",
  fontFamily: "var(--font-mono)",
  fontWeight: 600,
  color: "var(--accent-cyan-light)",
};

export default function ResumePage() {
  return (
    <div
      style={{
        minHeight: "100svh",
        background: "var(--bg-primary)",
        paddingBottom: "6rem",
      }}
    >
      {/* Sticky topbar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(7,7,15,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--bg-border)",
          padding: "0 1.5rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--text-secondary)",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 500,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
          }
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
            Karan Srinivas — Resume
          </span>
          <a
            href="/resume.pdf"
            download="Karan_Srinivas_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.4rem 1rem",
              background: "var(--accent)",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.8125rem",
              fontWeight: 700,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.87")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            <Download size={13} />
            Download PDF
          </a>
        </div>
      </div>

      {/* Resume content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: "860px",
          margin: "3rem auto 0",
          padding: "3rem 2.5rem",
          background: "var(--bg-surface)",
          border: "1px solid var(--bg-border)",
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
        }}
        className="resume-page-content"
      >
        <style>{`
          @media(max-width:640px){.resume-page-content{margin:1.5rem 1rem 0;padding:2rem 1.25rem;border-radius:12px}}
          .resume-page-content ::selection{background:rgba(124,58,237,0.35);color:var(--text-primary)}
        `}</style>

        {/* Gradient accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, var(--accent), var(--accent-light), var(--accent-cyan))",
          }}
        />

        {/* Name & contact header */}
        <div style={{ marginBottom: "2.5rem", paddingTop: "0.5rem" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
              marginBottom: "0.35rem",
            }}
          >
            Karan{" "}
            <span
              style={{
                background: "var(--accent-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Srinivas
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "var(--accent-cyan-light)",
              marginBottom: "1rem",
            }}
          >
            Software Engineer · AI Engineer · Full-Stack Developer
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              alignItems: "center",
            }}
          >
            {[
              { icon: <Mail size={13} />, text: "karansrinivas6@gmail.com", href: "mailto:karansrinivas6@gmail.com" },
              { icon: <Phone size={13} />, text: "857-693-4231", href: "tel:8576934231" },
              { icon: <Linkedin size={13} />, text: "linkedin.com/in/karans1", href: "https://linkedin.com/in/karans1/" },
              { icon: <Github size={13} />, text: "github.com/karansrinivas1", href: "https://github.com/karansrinivas1" },
            ].map((item) => (
              <a
                key={item.text}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.3rem 0.75rem",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--bg-border)",
                  borderRadius: "6px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent-light)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                }}
              >
                {item.icon}
                {item.text}
              </a>
            ))}
            <span style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
              Boston, MA
            </span>
          </div>
        </div>

        {/* Education */}
        <div style={SECTION_STYLE}>
          <p style={LABEL_STYLE}>Education</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.35rem" }}>
            <div>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>
                Northeastern University
              </span>
              <span style={{ color: "var(--text-tertiary)", fontSize: "0.85rem", marginLeft: "0.75rem" }}>
                Boston, MA
              </span>
            </div>
            <span style={{ ...METRIC_CHIP }}>Jan 2024 – May 2026</span>
          </div>
          <p style={{ fontSize: "0.875rem", color: "var(--accent-cyan-light)", fontWeight: 600, marginBottom: "0.25rem" }}>
            Master of Science, Computer Engineering · GPA: 3.8
          </p>
          <p style={{ fontSize: "0.825rem", color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
            Object Oriented Design · Data Structures & Algorithms · Generative AI · Operating Systems ·
            High Performance Computing · AI Agent Infrastructure · Data Science Engineering · Machine Learning
          </p>
        </div>

        {/* Experience */}
        <div style={SECTION_STYLE}>
          <p style={LABEL_STYLE}>Work Experience</p>

          {/* Vicor */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.3rem" }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: "0.975rem", color: "var(--text-primary)" }}>
                  Vicor Corporation
                </span>
                <span style={{ color: "var(--text-tertiary)", fontSize: "0.825rem", marginLeft: "0.65rem" }}>
                  Andover, MA
                </span>
              </div>
              <span style={METRIC_CHIP}>Jun 2025 – Dec 2025</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--accent-light)", fontWeight: 600, marginBottom: "0.75rem" }}>
              Software Engineer Intern / Co-op
            </p>
            <ul style={{ paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { text: "Built AI-automated API workflows (Python, Flask, Azure OpenAI, Azure Functions) for power-module selection and converter simulation", metric: "↓50% validation time" },
                { text: "Automated PyTest & CppUTest suites for C++/Python CI pipelines and HIL benches, improving I²C/PMBus regression detection", metric: "↑40% detection" },
                { text: "Cloud automation for chip simulations via Docker & Azure Container Apps", metric: "↓35% deploy time" },
                { text: "AI data layer (LangChain, Azure Cosmos DB, GPT-4.0) with 3K+ automated queries autonomously storing and analyzing simulation results", metric: "↑25% reporting" },
              ].map((b) => (
                <li key={b.metric} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {b.text} <span style={METRIC_CHIP}>{b.metric}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Graduate RA */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.3rem" }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: "0.975rem", color: "var(--text-primary)" }}>
                  Northeastern University
                </span>
                <span style={{ color: "var(--text-tertiary)", fontSize: "0.825rem", marginLeft: "0.65rem" }}>
                  Boston, MA
                </span>
              </div>
              <span style={METRIC_CHIP}>May 2024 – May 2025</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--accent-light)", fontWeight: 600, marginBottom: "0.75rem" }}>
              Graduate Research Assistant
            </p>
            <ul style={{ paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { text: "Deployed student feedback analysis system (Python, LangChain, AWS Bedrock GPT-4.0) analyzing 5,000+ submissions", metric: "↓40% manual review" },
                { text: "Built AI pipeline S3 → Lambda → Bedrock GPT-4 → RDS", metric: "↑25% throughput" },
                { text: "Developed agentic RAG app (Django, React, LangChain) delivering insights", metric: "3× faster" },
              ].map((b) => (
                <li key={b.metric} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {b.text} <span style={METRIC_CHIP}>{b.metric}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TCS */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.3rem" }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: "0.975rem", color: "var(--text-primary)" }}>
                  Tata Consultancy Services
                </span>
                <span style={{ color: "var(--text-tertiary)", fontSize: "0.825rem", marginLeft: "0.65rem" }}>
                  Bangalore, IN
                </span>
              </div>
              <span style={METRIC_CHIP}>Aug 2021 – Dec 2023</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--accent-light)", fontWeight: 600, marginBottom: "0.75rem" }}>
              Software Engineer
            </p>
            <ul style={{ paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { text: "Wire, NACHA & ACH payment features (Java/J2EE, Spring Boot, PL/SQL) — SWIFT/PCI DSS compliant", metric: "100K+ daily txns · ↑30% throughput" },
                { text: "SOA microservices on AWS (ELB, EC2, EKS, Kubernetes) via Terraform", metric: "1M daily API queries · ↑75% perf" },
                { text: "Real-time NLP chatbot (Spring Boot, Apache OpenNLP, Kafka, AWS SQS)", metric: "↑50% engagement" },
                { text: "Mobile banking iOS app (Swift / Xcode); automated XCTest, Selenium, Mockito, JUnit via Jenkins CI/CD", metric: "↓40% bugs" },
              ].map((b) => (
                <li key={b.text.slice(0, 20)} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {b.text} <span style={METRIC_CHIP}>{b.metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div style={SECTION_STYLE}>
          <p style={LABEL_STYLE}>Projects</p>
          {[
            {
              name: "Credit Card Cost Manager (Cred)",
              stack: "React.js · Django · OpenAI GPT-3.5 · MongoDB · Docker · JWT",
              desc: "AI-driven spending analysis engine autonomously categorizing multi-card transactions, surfacing insights, and routing queries via OpenAI agent layer.",
              href: "https://github.com/karansrinivas1/FinalProjectCred",
            },
            {
              name: "FocusFlow",
              stack: "React 18 · FastAPI · Python · MongoDB · Docker · Gemini AI · WebSocket · JWT",
              desc: "Unified AI-powered productivity workspace — Kanban, Pomodoro, time-blocking calendar, and an AI assistant that breaks down tasks and enables real-time collaboration.",
              href: "https://github.com/gaurav-bakale/focusflow",
            },
          ].map((p) => (
            <div key={p.name} style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.3rem", flexWrap: "wrap" }}>
                <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>{p.name}</span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.75rem",
                    color: "var(--accent-light)",
                    textDecoration: "none",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <ExternalLink size={11} />
                  GitHub
                </a>
              </div>
              <p style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--text-tertiary)", marginBottom: "0.35rem" }}>{p.stack}</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div style={SECTION_STYLE}>
          <p style={LABEL_STYLE}>Skills</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { label: "Languages", tags: ["Java", "C++", "Python", "TypeScript", "JavaScript", "SQL", "Swift", "C#"] },
              { label: "Backend", tags: ["Spring Boot", "Django", "Flask", "Node.js", "REST APIs", "GraphQL", "Hibernate"] },
              { label: "Frontend", tags: ["React.js", "Next.js", "TypeScript"] },
              { label: "Cloud / DevOps", tags: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Kafka"] },
              { label: "AI / ML", tags: ["LangChain", "AWS Bedrock", "Azure OpenAI", "GPT-4", "RAG", "Agentic AI", "TensorFlow", "ARIMA"] },
              { label: "Databases", tags: ["PostgreSQL", "MongoDB", "MySQL", "Cosmos DB", "Snowflake", "IBM DB2"] },
              { label: "Testing", tags: ["PyTest", "JUnit", "Selenium", "XCTest", "Mockito", "TDD", "PCI DSS", "SWIFT/NACHA"] },
            ].map((row) => (
              <div key={row.label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "var(--text-tertiary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    minWidth: "90px",
                    paddingTop: "0.28rem",
                    flexShrink: 0,
                  }}
                >
                  {row.label}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                  {row.tags.map((t) => (
                    <span key={t} style={CHIP_STYLE}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication */}
        <div style={SECTION_STYLE}>
          <p style={LABEL_STYLE}>Publication</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.3rem" }}>
            <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", maxWidth: "520px" }}>
              Demand Forecasting and Route Optimization in Supply Chain Industry
            </span>
            <span style={METRIC_CHIP}>IEEE · Oct 2021</span>
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.5rem" }}>
            Applied ARIMA time-series models and Simulated Annealing meta-heuristic for ML-driven demand
            forecasting and route optimization in supply chain logistics.
          </p>
          <a
            href="https://ieeexplore.ieee.org/document/9544942/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.78rem",
              color: "#fbbf24",
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
            }}
          >
            <ExternalLink size={11} />
            ieeexplore.ieee.org/document/9544942
          </a>
        </div>

        {/* Download CTA at bottom */}
        <div style={{ textAlign: "center", paddingTop: "1rem", borderTop: "1px solid var(--bg-border)" }}>
          <a
            href="/resume.pdf"
            download="Karan_Srinivas_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.8rem 2rem",
              background: "var(--accent)",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.9375rem",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.9";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            <Download size={16} />
            Download PDF Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}
