"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    icon: "🤖",
    name: "AI / ML",
    color: "rgba(124,58,237,0.15)",
    tags: ["LangChain", "AWS Bedrock", "Azure OpenAI", "GPT-4", "RAG", "Agentic AI", "TensorFlow", "OpenNLP", "ARIMA"],
  },
  {
    icon: "⚙️",
    name: "Backend",
    color: "rgba(139,92,246,0.12)",
    tags: ["Python", "Java / J2EE", "Spring Boot", "Django", "Flask", "Node.js", "C++", "REST APIs", "GraphQL"],
  },
  {
    icon: "🎨",
    name: "Frontend",
    color: "rgba(6,182,212,0.12)",
    tags: ["React.js", "Next.js", "TypeScript", "JavaScript", "Swift / Xcode", "HTML / CSS"],
  },
  {
    icon: "☁️",
    name: "Cloud & DevOps",
    color: "rgba(16,185,129,0.12)",
    tags: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Kafka"],
  },
  {
    icon: "🗄️",
    name: "Databases",
    color: "rgba(245,158,11,0.12)",
    tags: ["PostgreSQL", "MongoDB", "MySQL", "Azure Cosmos DB", "AWS RDS", "Snowflake", "IBM DB2", "PL/SQL"],
  },
  {
    icon: "🔒",
    name: "Testing & Standards",
    color: "rgba(239,68,68,0.1)",
    tags: ["PyTest", "JUnit", "Selenium", "TDD", "XCTest", "Mockito", "SWIFT", "NACHA", "PCI DSS"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "7rem 0",
        borderTop: "1px solid var(--bg-border)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="text-caption" style={{ marginBottom: "0.75rem" }}>
            Expertise
          </p>
          <h2 className="text-h1" style={{ color: "var(--text-primary)" }}>
            What I Build With
          </h2>
          <p
            className="text-body"
            style={{ color: "var(--text-secondary)", maxWidth: "480px", marginTop: "0.75rem" }}
          >
            Full-spectrum engineering — from agentic AI pipelines to distributed cloud systems.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
                borderRadius: "16px",
                padding: "1.6rem",
                transition: "border-color 0.25s, transform 0.25s",
              }}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.35)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.1rem" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    background: cat.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  {cat.icon}
                </div>
                <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                  {cat.name}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "0.22rem 0.6rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "5px",
                      fontSize: "0.775rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 500,
                      color: "var(--text-tertiary)",
                      cursor: "default",
                      transition: "background 0.15s, color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.1)";
                      (e.currentTarget as HTMLElement).style.color = "var(--accent-light)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)";
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* IEEE publication — expanded */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: "3rem",
            background: "var(--bg-surface)",
            border: "1px solid var(--bg-border)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Amber gradient accent bar */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(90deg, #F59E0B, #EF4444, #8B5CF6)",
            }}
          />

          <div style={{ padding: "2rem 2.25rem" }}>
            {/* Header row */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div
                style={{
                  fontSize: "2rem",
                  flexShrink: 0,
                  width: "56px",
                  height: "56px",
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                📖
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.18rem 0.65rem",
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.25)",
                      color: "#fbbf24",
                      borderRadius: "50px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    ⭐ IEEE Published
                  </span>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    October 2021
                  </span>
                </div>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.35,
                    marginBottom: "0.5rem",
                  }}
                >
                  Demand Forecasting &amp; Route Optimization in Supply Chain Industry
                </h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1rem" }}>
                  Designed and evaluated a hybrid ML pipeline that addresses two core supply-chain challenges simultaneously:
                  predicting future product demand and finding cost-minimal delivery routes. The system applies
                  <strong style={{ color: "var(--text-primary)" }}> ARIMA time-series modelling</strong> to historical order data
                  for accurate demand forecasting, then feeds those forecasts into a
                  <strong style={{ color: "var(--text-primary)" }}> Simulated Annealing</strong> meta-heuristic solver that
                  iteratively refines routing plans — escaping local optima that greedy algorithms get trapped in.
                  The combined approach significantly reduces both excess inventory costs and last-mile delivery overhead.
                </p>
                <a
                  href="https://ieeexplore.ieee.org/document/9544942/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.45rem 1rem",
                    background: "rgba(245,158,11,0.08)",
                    border: "1px solid rgba(245,158,11,0.3)",
                    borderRadius: "8px",
                    color: "#fbbf24",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.14)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.3)";
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Read on IEEE Xplore
                </a>
              </div>
            </div>

            {/* Two-column detail: how it works + impact */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              {/* ARIMA card */}
              <div
                style={{
                  padding: "1.25rem",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--bg-border)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.3rem" }}>📈</span>
                  <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)" }}>
                    ARIMA Demand Forecasting
                  </span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                  AutoRegressive Integrated Moving Average (ARIMA) captures temporal patterns — seasonality, trends, and
                  noise — in historical sales data. The model produces rolling forecasts that purchasing teams use to
                  pre-position inventory, cutting stockouts and overstock alike.
                </p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {["Time-series", "Seasonality", "Rolling forecast"].map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "0.2rem 0.55rem",
                        background: "rgba(245,158,11,0.08)",
                        border: "1px solid rgba(245,158,11,0.18)",
                        borderRadius: "5px",
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        color: "#fbbf24",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Simulated Annealing card */}
              <div
                style={{
                  padding: "1.25rem",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--bg-border)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.3rem" }}>🗺️</span>
                  <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)" }}>
                    Simulated Annealing Routing
                  </span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                  Inspired by metal-cooling physics, SA probabilistically accepts worse solutions early on to explore
                  the full solution space, then gradually focuses on optimisation — finding near-optimal multi-stop
                  routes far faster than exact solvers for real-world fleet sizes.
                </p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {["Meta-heuristic", "VRP", "Cost reduction"].map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "0.2rem 0.55rem",
                        background: "rgba(139,92,246,0.08)",
                        border: "1px solid rgba(139,92,246,0.2)",
                        borderRadius: "5px",
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-light)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact metrics */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                padding: "1.1rem 1.25rem",
                background: "rgba(245,158,11,0.04)",
                border: "1px solid rgba(245,158,11,0.12)",
                borderRadius: "10px",
              }}
            >
              {[
                { label: "Forecast accuracy", value: "↑ Significant" },
                { label: "Routing cost", value: "↓ Optimised" },
                { label: "Technique", value: "ARIMA + SA" },
                { label: "Published", value: "IEEE · 2021" },
              ].map((m) => (
                <div key={m.label} style={{ textAlign: "center", flex: "1 1 120px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#fbbf24",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {m.value}
                  </div>
                  <div className="text-caption">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
