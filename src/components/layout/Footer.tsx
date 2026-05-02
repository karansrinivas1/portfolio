"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      style={{
        borderTop: "1px solid var(--bg-border)",
        padding: "5rem 0 3rem",
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center" }}
        >
          <p className="text-caption" style={{ marginBottom: "1.5rem" }}>
            Get in touch
          </p>
          <h2
            className="text-h1"
            style={{ marginBottom: "1rem", color: "var(--text-primary)" }}
          >
            Let&apos;s build something{" "}
            <span className="gradient-text">great together.</span>
          </h2>
          <p
            className="text-body"
            style={{
              color: "var(--text-secondary)",
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
            }}
          >
            Open to full-time SWE and AI Engineer roles starting May 2026. If
            you&apos;re building something ambitious, I&apos;d love to chat.
          </p>

          <a
            href="mailto:karansrinivas6@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.875rem 2rem",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
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
            <Mail size={18} />
            karansrinivas6@gmail.com
          </a>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                href: "https://linkedin.com/in/karans1/",
                icon: <Linkedin size={15} />,
                label: "LinkedIn",
              },
              {
                href: "https://github.com/karansrinivas1",
                icon: <Github size={15} />,
                label: "GitHub",
              },
              {
                href: "tel:857-693-4231",
                icon: <Phone size={15} />,
                label: "857-693-4231",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.55rem 1.1rem",
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "8px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
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
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div
          style={{
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
        </div>
      </div>
    </footer>
  );
}
