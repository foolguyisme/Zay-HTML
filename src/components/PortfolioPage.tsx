"use client";

import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { KaggleStats } from "@/components/sections/KaggleStats";

export function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <KaggleStats />
        <ProjectsSection />
      </main>
      <footer className="border-t border-border-dim px-4 py-8 text-center">
        <p className="font-mono text-xs text-neutral-600">
          <span className="text-terminal">$</span> echo &quot;Built with Next.js
          · Tailwind · Framer Motion&quot; © 2026 foolguyisme
        </p>
      </footer>
    </>
  );
}
