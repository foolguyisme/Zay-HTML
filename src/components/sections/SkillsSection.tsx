"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/skills";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between font-mono text-xs">
        <span className="text-neutral-400">{name}</span>
        <span className="text-cyber/60">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[#111]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyber-dim to-cyber"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ boxShadow: "0 0 8px rgba(0,240,255,0.4)" }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading command="ls -la ./skills/" title="技能終端" />

        <div className="grid gap-6 md:grid-cols-1">
          {skillCategories.map((category, i) => (
            <FadeInSection key={category.id} delay={i * 0.1}>
              <TerminalWindow title={`skills/${category.id}`}>
                <p className="mb-4 font-mono text-xs text-cyber">
                  # {category.title}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2 border-t border-border-dim pt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded border border-cyber/15 bg-cyber/5 px-2 py-0.5 font-mono text-[10px] text-cyber/70 transition-colors hover:border-cyber/40 hover:bg-cyber/10"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </TerminalWindow>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.3} className="mt-6">
          <p className="text-center font-mono text-xs text-neutral-600">
            // extend skills from docs — edit src/data/skills.ts
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
