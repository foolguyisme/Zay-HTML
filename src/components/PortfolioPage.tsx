"use client";

import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { KaggleStats } from "@/components/sections/KaggleStats";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <KaggleStats />
        <ExperienceTimeline />
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
