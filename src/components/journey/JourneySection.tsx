"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const JOBS = [
  {
    period: "Jun 2025 – Dec 2025",
    company: "Vicor Corporation",
    role: "Software Engineer Intern / Co-op",
    location: "Andover, MA",
    url: "https://www.vicorpower.com",
    bullets: [
      {
        text: "Built AI-automated API workflows (Python, Flask, Azure OpenAI, Azure Functions) for power-module selection and converter simulation",
        metric: "↓50% validation time",
      },
      {
        text: "Automated PyTest & CppUTest suites for C++/Python CI pipelines and HIL benches, improving I²C/PMBus regression detection",
        metric: "↑40% detection",
      },
      {
        text: "Cloud automation for chip simulations via Docker & Azure Container Apps",
        metric: "↓35% deploy time",
      },
      {
        text: "AI data layer (LangChain, Azure Cosmos DB, GPT-4.0) with 3K+ automated queries autonomously storing and analyzing simulation results",
        metric: "↑25% reporting speed",
      },
    ],
    stack: ["Python", "Flask", "Azure OpenAI", "LangChain", "Cosmos DB", "Docker", "Azure Functions", "C++", "PyTest"],
    color: "var(--accent)",
  },
  {
    period: "May 2024 – May 2025",
    company: "Northeastern University",
    role: "Graduate Research Assistant",
    location: "Boston, MA",
    url: "https://www.northeastern.edu",
    bullets: [
      {
        text: "Deployed student feedback analysis system (Python, LangChain, AWS Bedrock GPT-4.0) analyzing 5,000+ student submissions",
        metric: "↓40% manual review",
      },
      {
        text: "Built AI pipeline S3 → Lambda → Bedrock GPT-4 → RDS for autonomous feedback ingestion",
        metric: "↑25% throughput",
      },
      {
        text: "Developed agentic RAG app (Django, React, LangChain) where LLM agents autonomously route and summarize feedback",
        metric: "3× faster delivery",
      },
    ],
    stack: ["Python", "LangChain", "AWS Bedrock", "GPT-4", "Django", "React", "AWS Lambda", "RAG"],
    color: "var(--accent-warm)",
  },
  {
    period: "Aug 2021 – Dec 2023",
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    location: "Bangalore, IN",
    url: "https://www.tcs.com",
    bullets: [
      {
        text: "Wire, NACHA & ACH payment features (Java/J2EE, Spring Boot, PL/SQL) — SWIFT/PCI DSS compliant",
        metric: "100K+ daily transactions",
      },
      {
        text: "SOA microservices on AWS (ELB, EC2, S3, EKS, Kubernetes) via Terraform — full IaC",
        metric: "1M daily API queries",
      },
      {
        text: "Real-time NLP chatbot (Spring Boot, Apache OpenNLP, Kafka, AWS SQS)",
        metric: "↑50% user engagement",
      },
      {
        text: "Mobile banking iOS app in Swift / Xcode — account management, transfers, transaction tracking",
        metric: "",
      },
      {
        text: "Automated XCTest, Selenium, Mockito, JUnit suites via Jenkins CI/CD across all banking modules",
        metric: "↓40% production bugs",
      },
    ],
    stack: ["Java/J2EE", "Spring Boot", "AWS EKS", "Kubernetes", "Terraform", "Kafka", "PL/SQL", "Swift", "Jenkins"],
    color: "var(--accent-light)",
  },
];

export function JourneySection() {
  return (
    <section
      id="experience"
      style={{ padding: "7rem 0" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <p className="text-caption" style={{ marginBottom: "0.75rem" }}>
            Work experience
          </p>
          <h2 className="text-h1" style={{ color: "var(--text-primary)" }}>
            The Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "0.5rem",
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, var(--accent), var(--accent-warm), var(--accent-light), transparent)",
              opacity: 0.3,
            }}
          />

          {JOBS.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                paddingLeft: "2.5rem",
                paddingBottom: i < JOBS.length - 1 ? "4rem" : 0,
                position: "relative",
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-5px",
                  top: "0.4rem",
                  width: "11px",
                  height: "11px",
                  borderRadius: "50%",
                  background: job.color,
                  boxShadow: `0 0 0 3px var(--bg-primary), 0 0 12px ${job.color}`,
                }}
              />

              {/* Period */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.775rem",
                  fontWeight: 600,
                  color: job.color,
                  letterSpacing: "0.04em",
                  marginBottom: "0.4rem",
                }}
              >
                {job.period}
              </p>

              {/* Company */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                <h3 className="text-h2" style={{ color: "var(--text-primary)" }}>
                  {job.company}
                </h3>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-tertiary)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")}
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.25rem",
                  fontWeight: 500,
                }}
              >
                {job.role} · {job.location}
              </p>

              {/* Bullets */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.25rem" }}>
                {job.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.75rem",
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    <span style={{ color: job.color, fontSize: "0.7rem", flexShrink: 0 }}>→</span>
                    <span>
                      {b.text}
                      {b.metric && (
                        <>
                          {" "}
                          <span
                            style={{
                              display: "inline",
                              padding: "0.05rem 0.45rem",
                              background: "rgba(34,197,94,0.1)",
                              border: "1px solid rgba(34,197,94,0.2)",
                              borderRadius: "4px",
                              color: "#4ade80",
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            {b.metric}
                          </span>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {job.stack.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.2rem 0.6rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
