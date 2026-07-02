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
    </>
  );
}
