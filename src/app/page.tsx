"use client";

import { useState, useEffect, useCallback } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { JourneySection } from "@/components/journey/JourneySection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { AICommandCenter } from "@/components/ai/AICommandCenter";

export default function Home() {
  const [aiOpen, setAiOpen] = useState(false);

  const openAI  = useCallback(() => setAiOpen(true),  []);
  const closeAI = useCallback(() => setAiOpen(false), []);

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setAiOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <Navigation onAIClick={openAI} />

      <main>
        <HeroSection onAIClick={openAI} />
        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </main>

      <AICommandCenter isOpen={aiOpen} onClose={closeAI} />
    </>
  );
}
