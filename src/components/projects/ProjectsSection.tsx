"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    tag: "Full-stack · AI",
    tagColor: "rgba(124,58,237,0.12)",
    tagBorderColor: "rgba(124,58,237,0.25)",
    tagTextColor: "var(--accent-light)",
    accentColor: "var(--accent)",
    barGradient: "linear-gradient(90deg, var(--accent), var(--accent-light), var(--accent-warm))",
    icon: "💳",
    iconBg: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(232,132,92,0.15))",
    title: "Credit Card Cost Manager",
    subtitle: "Cred",
    subtitleColor: "var(--accent-warm)",
    period: "Jan – Apr 2025",
    description:
      "AI-driven spending analysis engine that autonomously categorizes transactions across a multi-card portfolio and surfaces personalized spending insights. An OpenAI agent layer routes user queries, triggers bill payment workflows, and integrates JWT-secured REST APIs for a seamless full-stack experience.",
    metrics: [
      { label: "Transaction efficiency", value: "↑35%" },
      { label: "Auth method", value: "JWT" },
      { label: "AI model", value: "GPT-3.5" },
    ],
    stack: ["React.js", "Django", "Python", "OpenAI GPT-3.5", "MongoDB", "Docker", "JWT", "REST APIs"],
    links: [
      {
        href: "https://github.com/karansrinivas1/FinalProjectCred",
        icon: "github",
        label: "View on GitHub",
        primary: true,
      },
      {
        href: "https://github.com/karansrinivas1/Cred",
        icon: "external",
        label: "Cred Repo",
        primary: false,
      },
    ],
  },
  {
    tag: "Full-stack · AI · Productivity",
    tagColor: "rgba(6,182,212,0.1)",
    tagBorderColor: "rgba(6,182,212,0.25)",
    tagTextColor: "var(--accent-cyan-light)",
    accentColor: "var(--accent-cyan)",
    barGradient: "linear-gradient(90deg, #06B6D4, #8B5CF6, #3B82F6)",
    icon: "⚡",
    iconBg: "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.15))",
    title: "FocusFlow",
    subtitle: "Productivity Workspace",
    subtitleColor: "var(--accent-cyan)",
    period: "2024 – 2025",
    description:
      "Unified AI-powered productivity workspace combining Kanban task management, Pomodoro timer with streak tracking, time-blocking calendar, and an AI assistant (Gemini + OpenAI) that autonomously breaks down tasks, suggests schedules, and enables real-time team collaboration via WebSockets.",
    metrics: [
      { label: "Real-time", value: "WebSocket" },
      { label: "AI models", value: "Gemini + GPT" },
      { label: "Auth", value: "JWT + bcrypt" },
    ],
    stack: ["React 18", "FastAPI", "Python", "MongoDB", "Docker", "Gemini AI", "WebSocket", "JWT"],
    links: [
      {
        href: "https://github.com/gaurav-bakale/focusflow",
        icon: "github",
        label: "View on GitHub",
        primary: true,
      },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-pad"
      style={{ borderTop: "1px solid var(--bg-border)" }}
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
            Featured projects
          </p>
          <h2 className="text-h1" style={{ color: "var(--text-primary)" }}>
            Things I&apos;ve Built
          </h2>
        </motion.div>

        {/* Project cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  project.accentColor)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "var(--bg-border)")
              }
            >
              {/* Gradient accent bar */}
              <div
                style={{ height: "3px", background: project.barGradient }}
              />

              <div
                style={{
                  padding: "2.25rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "2rem",
                  alignItems: "start",
                }}
                className="proj-inner"
              >
                <style>{`@media(max-width:640px){.proj-inner{grid-template-columns:1fr!important}}`}</style>

                <div>
                  {/* Tag */}
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.2rem 0.75rem",
                      background: project.tagColor,
                      border: `1px solid ${project.tagBorderColor}`,
                      borderRadius: "50px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: project.tagTextColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-h2"
                    style={{ color: "var(--text-primary)", marginBottom: "1rem" }}
                  >
                    {project.title}
                    <span
                      style={{
                        marginLeft: "0.75rem",
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-mono)",
                        color: project.subtitleColor,
                        fontWeight: 600,
                      }}
                    >
                      {project.subtitle}
                    </span>
                  </h3>

                  {/* Description */}
                  <p
                    className="text-body"
                    style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}
                  >
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "1.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {project.metrics.map((m) => (
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
                            color: project.tagTextColor,
                            marginBottom: "0.2rem",
                          }}
                        >
                          {m.value}
                        </div>
                        <div className="text-caption">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginBottom: "2rem",
                    }}
                  >
                    {project.stack.map((t) => (
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
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          padding: "0.6rem 1.25rem",
                          background: link.primary ? project.accentColor : "var(--glass-bg)",
                          border: link.primary
                            ? "none"
                            : "1px solid var(--glass-border)",
                          borderRadius: "8px",
                          color: link.primary ? "#fff" : "var(--text-secondary)",
                          textDecoration: "none",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          transition: "opacity 0.2s, border-color 0.2s, color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          if (link.primary) {
                            (e.currentTarget as HTMLElement).style.opacity = "0.88";
                          } else {
                            (e.currentTarget as HTMLElement).style.borderColor =
                              project.accentColor;
                            (e.currentTarget as HTMLElement).style.color =
                              "var(--text-primary)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.opacity = "1";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "var(--glass-border)";
                          (e.currentTarget as HTMLElement).style.color = link.primary
                            ? "#fff"
                            : "var(--text-secondary)";
                        }}
                      >
                        {link.icon === "github" ? (
                          <Github size={15} />
                        ) : (
                          <ExternalLink size={15} />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Icon */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "20px",
                      background: project.iconBg,
                      border: "1px solid var(--glass-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3rem",
                    }}
                  >
                    {project.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-tertiary)",
                      textAlign: "center",
                    }}
                  >
                    {project.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
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
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-secondary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-tertiary)")
            }
          >
            <Github size={15} />
            More projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
