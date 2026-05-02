"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Github, Mail, Sparkles } from "lucide-react";

const RESEARCH_PAPER_URL = "https://ieeexplore.ieee.org/document/9544942/";

const STATS = [
  { value: 3.8, suffix: "", label: "GPA · Northeastern", decimal: true },
  { value: 4, suffix: "+", label: "Years experience", decimal: false },
  { value: 1, suffix: "M+", label: "Daily API queries", decimal: false },
  { value: 5000, suffix: "+", label: "Users via AI systems", decimal: false },
];

function useCounter(target: number, decimal: boolean, shouldStart: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(target * eased);
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [target, shouldStart]);
  return decimal ? count.toFixed(1) : target >= 1000 ? Math.floor(count).toLocaleString() : Math.floor(count).toString();
}

function StatCounter({ value, suffix, label, decimal }: (typeof STATS)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const display = useCounter(value, decimal, started);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          fontWeight: 800,
          background: "var(--accent-gradient)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          marginBottom: "0.35rem",
        }}
      >
        {display}{suffix}
      </div>
      <div className="text-caption">{label}</div>
    </div>
  );
}

export function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById("experience");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "80px",
        paddingBottom: "4rem",
      }}
    >
      <div className="section-container">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.35rem 1rem",
            background: "rgba(6,182,212,0.07)",
            border: "1px solid rgba(6,182,212,0.22)",
            borderRadius: "50px",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 0 0 rgba(34,197,94,0.4)",
              animation: "pulse-dot 2s infinite",
            }}
          />
          <style>{`@keyframes pulse-dot{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.4)}50%{box-shadow:0 0 0 6px rgba(34,197,94,0)}}`}</style>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent-cyan-light)",
              letterSpacing: "0.02em",
            }}
          >
            Open to full-time roles · May 2026
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-display"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ color: "var(--text-primary)", marginBottom: "1.5rem" }}
        >
          <span className="gradient-text">Software Engineer</span>
          <br />
          who ships scalable
          <br />
          systems at speed.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: "var(--text-secondary)",
            maxWidth: "560px",
            marginBottom: "2.5rem",
          }}
        >
          Hi, I&apos;m <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Karan Srinivas</strong> — a full-stack software engineer
          with 4+ years building production systems across AI pipelines, cloud
          infrastructure, payments, and mobile. I turn complex problems into
          clean, reliable software.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-ctas"
          style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "4rem" }}
        >
          <button
            onClick={scrollToNext}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              background: "var(--accent)",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              cursor: "pointer",
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
            See My Work
          </button>

          <a
            href="mailto:karansrinivas6@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "10px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9375rem",
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
            <Mail size={16} />
            Get in Touch
          </a>

          <a
            href="https://github.com/karansrinivas1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "10px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9375rem",
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
            <Github size={16} />
            GitHub
          </a>

          <a
            href="#hire"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("hire")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.15))",
              border: "1px solid rgba(124,58,237,0.45)",
              borderRadius: "10px",
              color: "var(--accent-light)",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.9375rem",
              transition: "all 0.2s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(6,182,212,0.22))";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.7)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.15))";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.45)";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            <Sparkles size={16} />
            Hire Me
          </a>

          <a
            href={RESEARCH_PAPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "10px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9375rem",
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
            <ExternalLink size={16} />
            IEEE Paper
          </a>

        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--bg-border)",
            border: "1px solid var(--bg-border)",
            borderRadius: "12px",
            overflow: "hidden",
            maxWidth: "700px",
          }}
          className="stats-grid"
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ background: "var(--bg-surface)" }}>
              <StatCounter {...s} />
            </div>
          ))}
        </motion.div>

        <style>{`.stats-grid{grid-template-columns:repeat(4,1fr)}@media(max-width:600px){.stats-grid{grid-template-columns:repeat(2,1fr)}}`}</style>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "4rem",
          color: "var(--text-tertiary)",
        }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  );
}
