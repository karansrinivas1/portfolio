"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function WelcomeGreeting() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("ks_greeted")) {
      sessionStorage.setItem("ks_greeted", "1");
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 4200);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          onClick={() => setVisible(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(7,7,15,0.93)",
            backdropFilter: "blur(28px) saturate(160%)",
            WebkitBackdropFilter: "blur(28px) saturate(160%)",
            cursor: "pointer",
          }}
        >
          <motion.div
            initial={{ scale: 0.55, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: -30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.05 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.75rem",
              userSelect: "none",
            }}
          >
            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 280, damping: 22 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,58,237,0.35)",
                borderRadius: "20px 20px 20px 6px",
                padding: "1.1rem 2rem",
                textAlign: "center",
                boxShadow:
                  "0 8px 40px rgba(124,58,237,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.75rem, 5vw, 2.25rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  margin: 0,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                }}
              >
                Hello! 👋
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  margin: "0.4rem 0 0",
                  background: "var(--accent-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.01em",
                }}
              >
                I&apos;m Karan — Welcome to my portfolio
              </p>
            </motion.div>

            {/* Memoji with floating animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "relative" }}
            >
              {/* Glow ring */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: -12,
                  borderRadius: "44px",
                  background:
                    "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
                  filter: "blur(8px)",
                }}
              />
              <div
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: "36px",
                  overflow: "hidden",
                  boxShadow:
                    "0 24px 60px rgba(124,58,237,0.45), 0 0 0 1px rgba(124,58,237,0.25)",
                  position: "relative",
                }}
              >
                <Image
                  src="/memoji.png"
                  alt="Karan Srinivas"
                  width={160}
                  height={160}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  priority
                />
              </div>
            </motion.div>

            {/* Dismiss hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{
                fontSize: "0.72rem",
                color: "var(--text-tertiary)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Click anywhere to continue
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
