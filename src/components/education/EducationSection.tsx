"use client";

import { motion } from "framer-motion";

const COURSES = [
  "Object Oriented Design",
  "Data Structures & Algorithms",
  "Generative AI",
  "Operating Systems",
  "High Performance Computing",
  "AI Agent Infrastructure",
  "Data Science Engineering",
  "Machine Learning",
];

export function EducationSection() {
  return (
    <section
      id="education"
      style={{ padding: "7rem 0", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="text-caption" style={{ marginBottom: "0.75rem" }}>
            Academic background
          </p>
          <h2 className="text-h1" style={{ color: "var(--text-primary)" }}>
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--bg-border)",
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Top gradient bar */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(90deg, var(--accent), var(--accent-light), var(--accent-cyan))",
            }}
          />

          <div
            style={{
              padding: "2.5rem",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "2rem",
              alignItems: "start",
            }}
            className="edu-inner"
          >
            <style>{`@media(max-width:640px){.edu-inner{grid-template-columns:1fr!important}}`}</style>

            <div>
              {/* School tag */}
              <span
                style={{
                  display: "inline-block",
                  padding: "0.2rem 0.75rem",
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.28)",
                  borderRadius: "50px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--accent-light)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1.25rem",
                }}
              >
                Master&apos;s Degree · GPA 3.8 / 4.0
              </span>

              <h3
                className="text-h2"
                style={{ color: "var(--text-primary)", marginBottom: "0.4rem" }}
              >
                Northeastern University
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--accent-cyan-light)",
                  fontWeight: 600,
                  marginBottom: "1.25rem",
                }}
              >
                M.S. Computer Engineering · Boston, MA
              </p>

              <p
                className="text-body"
                style={{ color: "var(--text-secondary)", marginBottom: "1.75rem", maxWidth: "600px" }}
              >
                Focused on AI systems, distributed computing, and software engineering at scale.
                Conducting graduate research in applied LLM pipelines and agentic AI infrastructure
                while maintaining a 3.8 GPA.
              </p>

              {/* Coursework */}
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--text-tertiary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.75rem",
                }}
              >
                Key Coursework
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {COURSES.map((c, i) => (
                  <motion.span
                    key={c}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 * i }}
                    style={{
                      padding: "0.28rem 0.75rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "6px",
                      fontSize: "0.78rem",
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
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Right side: degree visual */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.15))",
                  border: "1px solid rgba(124,58,237,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3.2rem",
                }}
              >
                🎓
              </div>

              {/* Timeline */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", alignItems: "center" }}>
                {[
                  { label: "Started", value: "Jan 2024" },
                  { label: "Graduating", value: "May 2026" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "0.5rem 1rem",
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--bg-border)",
                      borderRadius: "8px",
                      textAlign: "center",
                      minWidth: "110px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: "var(--accent-cyan-light)",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {item.value}
                    </div>
                    <div className="text-caption">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
