"use client";

import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/hero/HeroSection";
import { JourneySection } from "@/components/journey/JourneySection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { EducationSection } from "@/components/education/EducationSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { HireMeSection } from "@/components/contact/HireMeSection";
import { AICommandCenter } from "@/components/ai/AICommandCenter";
import { WelcomeGreeting } from "@/components/ui/WelcomeGreeting";

export default function Home() {
  return (
    <>
      <WelcomeGreeting />
      <Navigation />
      <main>
        <HeroSection />
        <EducationSection />
        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <HireMeSection />
      </main>
      <AICommandCenter />
    </>
  );
}
