"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Download, ExternalLink } from "lucide-react";

const ROTATING_ROLES = [
  "Software Engineer",
  "AI Engineer",
  "Full-Stack Developer",
  "Cloud Architect",
  "ML Engineer",
];

const STRENGTHS = [
  {
    emoji: "🤖",
    title: "AI in Production",
    body: "LangChain, GPT-4, Bedrock — not demos, real systems serving real users.",
    color: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    emoji: "⚡",
    title: "Ships Fast",
    body: "1M daily API queries, 100K transactions. Systems that scale from day one.",
    color: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.25)",
  },
  {
    emoji: "☁️",
    title: "Cloud-Native",
    body: "AWS + Azure + GCP. Kubernetes, Terraform, Docker — full cloud toolkit.",
    color: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.25)",
  },
  {
    emoji: "🎓",
    title: "Research-Backed",
    body: "3.8 GPA, IEEE published, graduate researcher in agentic AI infrastructure.",
    color: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
  },
];

const CONTACTS = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "karansrinivas6@gmail.com",
    href: "mailto:karansrinivas6@gmail.com",
    primary: true,
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/karans1",
    href: "https://linkedin.com/in/karans1/",
    primary: false,
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/karansrinivas1",
    href: "https://github.com/karansrinivas1",
    primary: false,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "857-693-4231",
    href: "tel:8576934231",
    primary: false,
  },
];

function FloatingOrb({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(40px)",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

export function HireMeSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const cycleRole = () => setRoleIdx((i) => (i + 1) % ROTATING_ROLES.length);

  const copyEmail = () => {
    navigator.clipboard.writeText("karansrinivas6@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hire"
      className="section-pad"
      style={{
        borderTop: "1px solid var(--bg-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background orbs */}
      <FloatingOrb style={{ width: 380, height: 380, background: "rgba(124,58,237,0.08)", top: "-80px", left: "-100px" }} />
      <FloatingOrb style={{ width: 300, height: 300, background: "rgba(6,182,212,0.07)", bottom: "0px", right: "-80px" }} />
      <FloatingOrb style={{ width: 220, height: 220, background: "rgba(232,132,92,0.06)", top: "40%", right: "20%" }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          <p className="text-caption">Available from May 2026</p>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          <h2
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            Ready to hire a
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginTop: "0.5rem",
              cursor: "pointer",
            }}
            onClick={cycleRole}
            title="Click to cycle roles"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="gradient-text"
                style={{
                  fontSize: "clamp(2.25rem, 6vw, 4rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.04em",
                }}
              >
                {ROTATING_ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={{ rotate: [0, 15, -10, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
            >
              👋
            </motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: "0.75rem",
              color: "var(--text-tertiary)",
              marginTop: "0.6rem",
              letterSpacing: "0.06em",
            }}
          >
            ↑ click to cycle roles
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-body"
          style={{
            color: "var(--text-secondary)",
            maxWidth: "560px",
            margin: "0 auto 4rem",
            textAlign: "center",
          }}
        >
          I build AI systems that actually ship. Full-stack coverage, cloud-agnostic,
          and available full-time from May 2026. Let&apos;s build something ambitious together.
        </motion.p>

        {/* Strengths grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          {STRENGTHS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                padding: "1.5rem",
                background: s.color,
                border: `1px solid ${s.border}`,
                borderRadius: "16px",
                cursor: "default",
                transition: "box-shadow 0.25s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${s.border}`)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = "none")
              }
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{s.emoji}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.45rem",
                }}
              >
                {s.title}
              </div>
              <p style={{ fontSize: "0.825rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--bg-border)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div style={{ height: "3px", background: "linear-gradient(90deg, var(--accent), var(--accent-light), var(--accent-cyan))" }} />
          <div style={{ padding: "2rem 2.25rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "var(--text-tertiary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
                textAlign: "center",
              }}
            >
              Get in touch
            </p>

            {/* 2-column contact grid */}
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem", marginBottom: "1.5rem" }}
              className="contact-grid"
            >
              <style>{`@media(max-width:560px){.contact-grid{grid-template-columns:1fr!important}}`}</style>

              {CONTACTS.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -2 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.9rem 1rem",
                    background: c.primary
                      ? "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(6,182,212,0.1))"
                      : "var(--bg-elevated)",
                    border: c.primary
                      ? "1px solid rgba(124,58,237,0.38)"
                      : "1px solid var(--bg-border)",
                    borderRadius: "12px",
                    textDecoration: "none",
                    minWidth: 0,
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = c.primary
                      ? "rgba(124,58,237,0.65)"
                      : "rgba(124,58,237,0.3)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(124,58,237,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = c.primary
                      ? "rgba(124,58,237,0.38)"
                      : "var(--bg-border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "9px",
                      background: c.primary ? "rgba(124,58,237,0.22)" : "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: c.primary ? "var(--accent-light)" : "var(--text-secondary)",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>

                  {/* Text — minWidth:0 allows it to truncate */}
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "var(--text-tertiary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        marginBottom: "0.12rem",
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: c.primary ? "var(--accent-light)" : "var(--text-secondary)",
                        fontFamily: c.label === "Email" || c.label === "Phone" ? "var(--font-mono)" : "inherit",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", justifyContent: "center" }}>
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.65rem 1.3rem",
                  background: "var(--accent)",
                  border: "none",
                  borderRadius: "9px",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  minWidth: "130px",
                  justifyContent: "center",
                }}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
                    >
                      ✓ Copied!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
                    >
                      <Mail size={14} />
                      Copy Email
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {[
                { href: "/resume", icon: <ExternalLink size={14} />, label: "View Resume" },
                { href: "/resume.pdf", icon: <Download size={14} />, label: "Download PDF", download: "Karan_Srinivas_Resume.pdf" },
              ].map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  download={"download" in btn ? btn.download : undefined}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.65rem 1.3rem",
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--bg-border)",
                    borderRadius: "9px",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  {btn.icon}
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: "center",
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--bg-border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ color: "var(--text-tertiary)", fontSize: "0.8rem" }}>
            Karan Srinivas · Boston, MA
          </span>
          <span style={{ color: "var(--text-tertiary)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
