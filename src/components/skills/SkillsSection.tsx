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

        {/* IEEE publication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: "3rem",
            padding: "1.75rem 2rem",
            background: "var(--bg-surface)",
            border: "1px solid var(--bg-border)",
            borderRadius: "16px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            gap: "1.5rem",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, var(--accent), var(--accent-warm))",
            }}
          />
          <div
            style={{
              fontSize: "2rem",
              flexShrink: 0,
              width: "52px",
              height: "52px",
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.2)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            📖
          </div>
          <div>
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
                marginBottom: "0.6rem",
              }}
            >
              ⭐ IEEE Published · October 2021
            </span>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "var(--text-primary)",
                marginBottom: "0.4rem",
              }}
            >
              Demand Forecasting &amp; Route Optimization in Supply Chain Industry
            </h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Applied ARIMA models and Simulated Annealing for ML-driven demand forecasting and
              route optimization, improving forecast accuracy at scale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
