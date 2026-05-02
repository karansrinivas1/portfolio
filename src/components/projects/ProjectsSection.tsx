"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section
      id="projects"
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
            Featured project
          </p>
          <h2 className="text-h1" style={{ color: "var(--text-primary)" }}>
            Things I&apos;ve Built
          </h2>
        </motion.div>

        {/* Cred — featured card */}
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
            transition: "border-color 0.3s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)")}
        >
          {/* Top gradient bar */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(90deg, var(--accent), var(--accent-light), var(--accent-warm))",
            }}
          />

          <div style={{ padding: "2.5rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}
            className="proj-inner"
          >
            <style>{`@media(max-width:640px){.proj-inner{grid-template-columns:1fr!important}}`}</style>

            <div>
              {/* Category tag */}
              <span
                style={{
                  display: "inline-block",
                  padding: "0.2rem 0.75rem",
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  borderRadius: "50px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--accent-light)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1.25rem",
                }}
              >
                Full-stack · AI
              </span>

              <h3
                className="text-h2"
                style={{ color: "var(--text-primary)", marginBottom: "1rem" }}
              >
                Credit Card Cost Manager
                <span
                  style={{
                    marginLeft: "0.75rem",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-warm)",
                    fontWeight: 600,
                  }}
                >
                  Cred
                </span>
              </h3>

              <p
                className="text-body"
                style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}
              >
                AI-driven spending analysis engine that autonomously categorizes
                transactions across a multi-card portfolio and surfaces
                personalized spending insights. An OpenAI agent layer routes
                user queries, triggers bill payment workflows, and integrates
                JWT-secured REST APIs for a seamless full-stack experience.
              </p>

              {/* Impact metrics */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1.75rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "Transaction efficiency", value: "↑35%" },
                  { label: "Auth method", value: "JWT" },
                  { label: "AI model", value: "GPT-3.5" },
                ].map((m) => (
                  <div
                    key={m.label}
                    style={{
                      padding: "0.6rem 1rem",
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--bg-border)",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "var(--accent-light)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {m.value}
                    </div>
                    <div className="text-caption">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2rem" }}>
                {["React.js", "Django", "Python", "OpenAI GPT-3.5", "MongoDB", "Docker", "JWT", "REST APIs"].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.25rem 0.65rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 500,
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href="https://github.com/karansrinivas1/FinalProjectCred"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.6rem 1.25rem",
                    background: "var(--accent)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  <Github size={15} />
                  View on GitHub
                </a>

                <a
                  href="https://github.com/karansrinivas1/Cred"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.6rem 1.25rem",
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    borderRadius: "8px",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--glass-border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  <ExternalLink size={15} />
                  Cred Repo
                </a>
              </div>
            </div>

            {/* Right: project icon / visual */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(232,132,92,0.15))",
                  border: "1px solid var(--glass-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                }}
              >
                💳
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-tertiary)",
                  textAlign: "center",
                }}
              >
                Jan – Apr 2025
              </span>
            </div>
          </div>
        </motion.div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: "center", marginTop: "2.5rem" }}
        >
          <a
            href="https://github.com/karansrinivas1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--text-tertiary)",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")}
          >
            <Github size={15} />
            More projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
