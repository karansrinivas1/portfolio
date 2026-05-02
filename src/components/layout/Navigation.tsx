"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Hire Me", href: "#hire" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(7,7,15,0.88)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(124,58,237,0.15)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <div
          className="section-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              fontWeight: 800,
              fontSize: "1.25rem",
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
              textDecoration: "none",
            }}
          >
            KS<span className="gradient-text">.</span>
          </a>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            ))}

            {/* Resume page link */}
            <a
              href="/resume"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.42rem 1rem",
                background: "linear-gradient(135deg,rgba(124,58,237,0.18),rgba(6,182,212,0.12))",
                border: "1px solid rgba(124,58,237,0.35)",
                borderRadius: "8px",
                color: "var(--accent-light)",
                textDecoration: "none",
                fontSize: "0.8125rem",
                fontWeight: 600,
                transition: "all 0.2s",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(6,182,212,0.18))";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(124,58,237,0.6)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "linear-gradient(135deg,rgba(124,58,237,0.18),rgba(6,182,212,0.12))";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(124,58,237,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              cursor: "pointer",
              padding: "0.25rem",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(7,7,15,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid var(--bg-border)",
              padding: "1.5rem",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.65rem 1.25rem",
                  background: "linear-gradient(135deg,#7C3AED,#5B21B6)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  width: "fit-content",
                }}
              >
                <Download size={15} />
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
