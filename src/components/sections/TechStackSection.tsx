"use client";

import { motion } from "framer-motion";
import { techStackCategories } from "@/data/techStack";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

const accentBorder: Record<string, string> = {
  "ai-data": "border-cyber/30 hover:border-cyber/50",
  "backend-network": "border-cyber-dim/30 hover:border-cyber-dim/50",
  "devops-tools": "border-terminal/30 hover:border-terminal/50",
};

const accentIcon: Record<string, string> = {
  "ai-data": "text-cyber bg-cyber/10 border-cyber/30",
  "backend-network": "text-cyber-dim bg-cyber-dim/10 border-cyber-dim/30",
  "devops-tools": "text-terminal bg-terminal/10 border-terminal/30",
};

export function TechStackSection() {
  return (
    <section id="tech-stack" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          command="npm list --depth=0"
          title="Tech Stack 核心技術棧"
        />

        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
          {techStackCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <FadeInSection key={category.id} delay={i * 0.1}>
                <TerminalWindow
                  title={`stack/${category.id}`}
                  className="h-full glow-hover"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border ${accentIcon[category.id]}`}
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + j * 0.05 }}
                        className={`rounded border bg-[#080808] px-2.5 py-1 font-mono text-[11px] text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyber sm:text-xs ${accentBorder[category.id]}`}
                        style={{
                          boxShadow: "0 0 0 transparent",
                        }}
                        whileHover={{
                          boxShadow: "0 0 12px rgba(0,240,255,0.15)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </TerminalWindow>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
