"use client";

import {
  useEffect,
  useRef,
  useCallback,
  useState,
  type KeyboardEvent,
  type FormEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { X, Send } from "lucide-react";

interface AICommandCenterProps {
  externalOpen?: boolean;
  onExternalClose?: () => void;
}

const QUICK_CHIPS = [
  "AI/ML experience",
  "Vicor Co-op",
  "Why hire Karan?",
  "Tech stack",
  "Education",
];

const WELCOME =
  "Hey! 👋 I'm Karan's AI assistant. Ask me anything about his skills, experience, projects, or why he'd be a great hire. What would you like to know?";

export function AICommandCenter({
  externalOpen = false,
  onExternalClose,
}: AICommandCenterProps) {
  const [open, setOpen] = useState(false);
  const isOpen = open || externalOpen;

  const close = useCallback(() => {
    setOpen(false);
    onExternalClose?.();
  }, [onExternalClose]);

  const toggle = useCallback(() => {
    if (isOpen) close();
    else setOpen(true);
  }, [isOpen, close]);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    append,
    error,
  } = useChat({
    api: "/api/chat",
    onError: (err) => console.error("[Chat error]", err),
  });

  const isStreaming = status === "streaming" || status === "submitted";
  const hasUserMsg = messages.some((m) => m.role === "user");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 320);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const h = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [isOpen, close]);

  // Chip click — use append() directly (avoids setInput async timing bug)
  const sendChip = useCallback(
    (text: string) => {
      if (!text.trim() || isStreaming) return;
      append({ role: "user", content: text });
    },
    [isStreaming, append]
  );

  // Text-input form submit
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!input.trim() || isStreaming) return;
      handleSubmit(e);
    },
    [input, isStreaming, handleSubmit]
  );

  const onKey = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (!input.trim() || isStreaming) return;
        handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
      }
    },
    [input, isStreaming, handleSubmit]
  );

  return (
    <>
      {/* ── Chat panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="ai-chat-panel"
            style={{
              position: "fixed",
              bottom: 88,
              right: 24,
              zIndex: 200,
              width: 370,
              maxWidth: "calc(100vw - 48px)",
              height: 560,
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(170deg, rgba(13,11,30,0.98) 0%, rgba(8,7,18,0.99) 100%)",
              border: "1px solid rgba(124,58,237,0.28)",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow:
                "0 0 0 1px rgba(124,58,237,0.1), 0 28px 80px rgba(0,0,0,0.85), 0 0 60px rgba(124,58,237,0.12)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Karan's AI Assistant"
          >
            {/* top gradient line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "15%",
                right: "15%",
                height: 1,
                background:
                  "linear-gradient(90deg,transparent,rgba(139,92,246,0.9),rgba(6,182,212,0.6),transparent)",
                pointerEvents: "none",
              }}
            />

            {/* ── Header ── */}
            <div
              style={{
                flexShrink: 0,
                padding: "0.9rem 1.1rem",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(124,58,237,0.45)",
                    "0 0 22px rgba(124,58,237,0.7)",
                    "0 0 10px rgba(124,58,237,0.45)",
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #6D28D9 0%, #7C3AED 55%, #8B5CF6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 21,
                  flexShrink: 0,
                  border: "2px solid rgba(167,139,250,0.3)",
                }}
              >
                🤖
              </motion.div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Ask me about Karan
                </p>
                <p
                  style={{
                    margin: "2px 0 0",
                    fontSize: "0.72rem",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#22c55e",
                      display: "inline-block",
                      boxShadow: "0 0 6px rgba(34,197,94,0.6)",
                      flexShrink: 0,
                    }}
                  />
                  AI Assistant · Online
                </p>
              </div>

              <button
                onClick={close}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  color: "var(--text-tertiary)",
                  cursor: "pointer",
                  padding: "0.3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-primary)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-tertiary)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.05)";
                }}
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* ── Messages ── */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(124,58,237,0.3) transparent",
              }}
            >
              {/* Static welcome bubble */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                style={{ display: "flex", gap: "0.5rem", alignItems: "flex-end" }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#6D28D9,#8B5CF6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    flexShrink: 0,
                    border: "1px solid rgba(167,139,250,0.25)",
                    boxShadow: "0 2px 8px rgba(124,58,237,0.35)",
                  }}
                >
                  🤖
                </div>
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "0.75rem 0.95rem",
                    borderRadius: "4px 16px 16px 16px",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    background: "rgba(255,255,255,0.05)",
                    color: "var(--text-primary)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {WELCOME}
                </div>
              </motion.div>

              {/* API messages */}
              {messages.map((msg, idx) => {
                const isLast = idx === messages.length - 1;
                const isAI = msg.role === "assistant";
                const content =
                  typeof msg.content === "string" ? msg.content : "";

                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: isAI ? "flex-start" : "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    {isAI && (
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg,#6D28D9,#8B5CF6)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 13,
                          flexShrink: 0,
                          border: "1px solid rgba(167,139,250,0.25)",
                          boxShadow: "0 2px 8px rgba(124,58,237,0.35)",
                        }}
                      >
                        🤖
                      </div>
                    )}
                    <div
                      style={{
                        maxWidth: "78%",
                        padding: "0.68rem 0.95rem",
                        borderRadius: isAI
                          ? "4px 16px 16px 16px"
                          : "16px 16px 4px 16px",
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        background: isAI
                          ? "rgba(255,255,255,0.05)"
                          : "linear-gradient(135deg,#7C3AED,#5B21B6)",
                        color: "var(--text-primary)",
                        border: isAI
                          ? "1px solid rgba(255,255,255,0.07)"
                          : "none",
                        boxShadow: isAI
                          ? "none"
                          : "0 4px 16px rgba(124,58,237,0.4)",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                      }}
                    >
                      {content}

                      {/* Typing cursor */}
                      {isAI && isStreaming && isLast && content.length > 0 && (
                        <span
                          style={{
                            display: "inline-block",
                            width: 2,
                            height: 13,
                            marginLeft: 2,
                            verticalAlign: "middle",
                            background: "var(--accent-light)",
                            borderRadius: 1,
                            animation: "cursor-blink 1s step-end infinite",
                          }}
                        />
                      )}

                      {/* Loading dots (waiting for first token) */}
                      {isAI && isStreaming && isLast && content.length === 0 && (
                        <span style={{ display: "flex", gap: 4, padding: "2px 0" }}>
                          {[0, 1, 2].map((d) => (
                            <span
                              key={d}
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: "var(--accent-light)",
                                display: "inline-block",
                                animation: `dot-pulse 1.2s ease-in-out ${d * 0.15}s infinite`,
                              }}
                            />
                          ))}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* API error state */}
              {error && (
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    background: "rgba(239,68,68,0.07)",
                    border: "1px solid rgba(239,68,68,0.18)",
                    borderRadius: 12,
                    fontSize: "0.82rem",
                    lineHeight: 1.55,
                    color: "#fca5a5",
                  }}
                >
                  {/quota|429|resource_exhausted|rate.?limit/i.test(error.message ?? "")
                    ? <>
                        <span style={{ fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
                          ⚠️ Gemini quota exhausted
                        </span>
                        The AI assistant has hit its free-tier limit. You can still reach Karan directly at{" "}
                        <a
                          href="mailto:karansrinivas6@gmail.com"
                          style={{ color: "#f87171", fontWeight: 600, textDecoration: "underline" }}
                        >
                          karansrinivas6@gmail.com
                        </a>
                        {" "}or check out his{" "}
                        <a href="/resume" style={{ color: "#f87171", fontWeight: 600, textDecoration: "underline" }}>
                          resume
                        </a>.
                      </>
                    : <>
                        <span style={{ fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
                          ⚠️ Something went wrong
                        </span>
                        {error.message?.includes("GEMINI_API_KEY")
                          ? "The AI assistant isn't configured yet — please check back soon."
                          : "Unable to reach the AI assistant. Try again in a moment."}
                      </>
                  }
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* ── Quick chips (only before first user message) ── */}
            {!hasUserMsg && (
              <div
                style={{
                  flexShrink: 0,
                  padding: "0.6rem 1rem",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                }}
              >
                {QUICK_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => sendChip(chip)}
                    disabled={isStreaming}
                    style={{
                      padding: "0.3rem 0.8rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      borderRadius: 50,
                      color: "var(--text-secondary)",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "var(--font-sans)",
                      transition: "all 0.18s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(124,58,237,0.5)";
                      el.style.background = "rgba(124,58,237,0.1)";
                      el.style.color = "var(--accent-light)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(255,255,255,0.09)";
                      el.style.background = "rgba(255,255,255,0.04)";
                      el.style.color = "var(--text-secondary)";
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* ── Input ── */}
            <div
              style={{
                flexShrink: 0,
                padding: "0.65rem 0.9rem 0.9rem",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(0,0,0,0.18)",
              }}
            >
              <form
                onSubmit={onSubmit}
                style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={onKey}
                  placeholder="Ask anything about Karan..."
                  disabled={isStreaming}
                  style={{
                    flex: 1,
                    padding: "0.6rem 1rem",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 50,
                    color: "var(--text-primary)",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-sans)",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(124,58,237,0.55)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.1)")
                  }
                  aria-label="Ask a question about Karan"
                />
                <button
                  type="submit"
                  disabled={isStreaming || !input.trim()}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: input.trim()
                      ? "linear-gradient(135deg,#7C3AED,#5B21B6)"
                      : "rgba(255,255,255,0.05)",
                    border:
                      "1px solid " +
                      (input.trim()
                        ? "rgba(124,58,237,0.4)"
                        : "rgba(255,255,255,0.08)"),
                    color: input.trim() ? "#fff" : "var(--text-tertiary)",
                    cursor: input.trim() ? "pointer" : "default",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s",
                    boxShadow: input.trim()
                      ? "0 4px 14px rgba(124,58,237,0.45)"
                      : "none",
                  }}
                  aria-label="Send"
                >
                  <Send size={15} />
                </button>
              </form>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.62rem",
                  color: "var(--text-tertiary)",
                  margin: "0.45rem 0 0",
                }}
              >
                ✦ Powered by Gemini · Only answers about Karan
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating button ── */}
      <motion.button
        onClick={toggle}
        className="ai-fab"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        animate={
          !isOpen
            ? {
                boxShadow: [
                  "0 4px 20px rgba(124,58,237,0.45)",
                  "0 4px 32px rgba(124,58,237,0.7)",
                  "0 4px 20px rgba(124,58,237,0.45)",
                ],
              }
            : { boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }
        }
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 199,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: isOpen
            ? "rgba(30,26,50,0.9)"
            : "linear-gradient(135deg,#7C3AED,#5B21B6)",
          border:
            "1px solid " +
            (isOpen ? "rgba(255,255,255,0.12)" : "rgba(167,139,250,0.35)"),
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
        aria-label={isOpen ? "Close AI chat" : "Chat with Karan's AI"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ display: "flex" }}
            >
              <X size={20} color="var(--text-secondary)" />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ fontSize: 24, lineHeight: 1 }}
            >
              🤖
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
