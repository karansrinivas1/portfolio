"use client";

import {
  useEffect,
  useRef,
  useCallback,
  type KeyboardEvent,
  type FormEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { Mic, X } from "lucide-react";

interface AICommandCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTED_PROMPTS = [
  "What AI systems has Karan built?",
  "Tell me about his work at Vicor",
  "Why should I hire Karan?",
  "What's his tech stack?",
  "Tell me about his education",
] as const;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.97, y: 8, transition: { duration: 0.2 } },
};

export function AICommandCenter({ isOpen, onClose }: AICommandCenterProps) {
  const { messages, input, handleInputChange, handleSubmit, status, setInput } = useChat({
    api: "/api/chat",
  });

  const isStreaming = status === "streaming" || status === "submitted";
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: globalThis.KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const handleSend = useCallback(
    (text: string) => {
      if (!text.trim() || isStreaming) return;
      setInput(text);
      // Small delay so setInput propagates
      setTimeout(() => {
        const form = document.getElementById("ai-chat-form") as HTMLFormElement | null;
        form?.requestSubmit();
      }, 10);
    },
    [isStreaming, setInput]
  );

  const onInputKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        const form = document.getElementById("ai-chat-form") as HTMLFormElement | null;
        form?.requestSubmit();
      }
    },
    []
  );

  const onFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmit(e);
    },
    [handleSubmit]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {/* Backdrop */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "relative",
              zIndex: 10,
              width: "100%",
              maxWidth: "640px",
              maxHeight: "82vh",
              background: "var(--bg-surface)",
              border: "1px solid var(--bg-border)",
              borderRadius: "20px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="AI Assistant"
          >
            {/* Header / Input form */}
            <form id="ai-chat-form" onSubmit={onFormSubmit} style={{ flexShrink: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 1.25rem",
                  borderBottom: "1px solid var(--bg-border)",
                }}
              >
                {/* Purple dot */}
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                    boxShadow: "0 0 10px var(--accent-glow)",
                  }}
                />

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={onInputKeyDown}
                  placeholder="Ask me anything about Karan…"
                  disabled={isStreaming}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "var(--text-primary)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    fontFamily: "var(--font-sans)",
                  }}
                  aria-label="Ask a question"
                />

                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-tertiary)",
                    cursor: "pointer",
                    padding: "0.25rem",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")}
                  aria-label="Close"
                >
                  <X size={17} />
                </button>
              </div>
            </form>

            {/* Suggested prompts — shown when no messages */}
            {messages.length === 0 && (
              <div style={{ flexShrink: 0, padding: "1.1rem 1.25rem", borderBottom: "1px solid var(--bg-border)" }}>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-tertiary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Suggested
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {SUGGESTED_PROMPTS.map((prompt, i) => (
                    <motion.button
                      key={prompt}
                      type="button"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      onClick={() => handleSend(prompt)}
                      disabled={isStreaming}
                      style={{
                        padding: "0.35rem 0.85rem",
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        borderRadius: "50px",
                        color: "var(--text-secondary)",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "border-color 0.2s, color 0.2s, background 0.2s",
                        fontFamily: "var(--font-sans)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                        (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--glass-border)";
                        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                        (e.currentTarget as HTMLElement).style.background = "var(--glass-bg)";
                      }}
                    >
                      {prompt}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.length > 0 && (
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                  scrollbarWidth: "thin",
                }}
              >
                {messages.map((msg, idx) => {
                  const isLast = idx === messages.length - 1;
                  const isAssistant = msg.role === "assistant";
                  const content = typeof msg.content === "string" ? msg.content : "";

                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        display: "flex",
                        justifyContent: isAssistant ? "flex-start" : "flex-end",
                      }}
                    >
                      <div
                        style={{
                          maxWidth: "80%",
                          padding: "0.7rem 1rem",
                          borderRadius: isAssistant ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          background: isAssistant ? "var(--bg-elevated)" : "var(--accent)",
                          color: isAssistant ? "var(--text-primary)" : "#fff",
                          border: isAssistant ? "1px solid var(--bg-border)" : "none",
                        }}
                      >
                        {content}

                        {/* Blinking cursor while streaming */}
                        {isAssistant && isStreaming && isLast && content.length > 0 && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "6px",
                              height: "13px",
                              marginLeft: "2px",
                              verticalAlign: "middle",
                              background: "var(--accent-light)",
                              borderRadius: "2px",
                              animation: "cursor-blink 1s step-end infinite",
                            }}
                          />
                        )}

                        {/* Loading dots for empty streaming message */}
                        {isAssistant && isStreaming && isLast && content.length === 0 && (
                          <span style={{ display: "flex", gap: "4px", padding: "2px 0" }}>
                            {[0, 1, 2].map((d) => (
                              <span
                                key={d}
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  background: "var(--text-tertiary)",
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
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Footer hint */}
            <div
              style={{
                flexShrink: 0,
                padding: "0.75rem 1.25rem",
                borderTop: "1px solid var(--bg-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>
                Powered by Gemini 1.5 Flash
              </span>
              <span style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>
                Press{" "}
                <kbd
                  style={{
                    padding: "0.1rem 0.35rem",
                    background: "var(--bg-elevated)",
                    borderRadius: "3px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  ESC
                </kbd>{" "}
                to close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
