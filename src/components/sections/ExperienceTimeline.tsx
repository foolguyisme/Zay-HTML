"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const accentStyles = {
  cyber: {
    dot: "bg-cyber shadow-[0_0_10px_rgba(0,240,255,0.6)]",
    type: "text-cyber border-cyber/30 bg-cyber/10",
    line: "from-cyber/60",
  },
  terminal: {
    dot: "bg-terminal shadow-[0_0_10px_rgba(0,255,136,0.5)]",
    type: "text-terminal border-terminal/30 bg-terminal/10",
    line: "from-terminal/50",
  },
  dim: {
    dot: "bg-cyber-dim shadow-[0_0_8px_rgba(59,130,246,0.4)]",
    type: "text-cyber-dim border-cyber-dim/30 bg-cyber-dim/10",
    line: "from-cyber-dim/40",
  },
};

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof experiences)[number];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const styles = accentStyles[item.accent];
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative flex gap-4 sm:gap-6"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-dim bg-[#0a0a0a] sm:h-11 sm:w-11`}
          animate={inView ? { scale: [0.8, 1.05, 1] } : {}}
          transition={{ delay: index * 0.12 + 0.2, duration: 0.4 }}
        >
          <div className={`absolute h-3 w-3 rounded-full ${styles.dot}`} />
          <Icon
            size={16}
            className="relative z-10 text-neutral-400"
            strokeWidth={1.75}
          />
        </motion.div>
        {!isLast && (
          <motion.div
            className={`mt-1 w-px flex-1 bg-gradient-to-b ${styles.line} to-transparent`}
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 + 0.3 }}
            style={{ minHeight: 48 }}
          />
        )}
      </div>

      <div
        className={`glow-hover mb-8 flex-1 rounded-lg border border-border-dim bg-card p-4 sm:mb-10 sm:p-5 ${
          index === 0 ? "border-cyber/25 glow-border" : ""
        }`}
      >
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={`rounded border px-2 py-0.5 font-mono text-[10px] font-medium sm:text-xs ${styles.type}`}
          >
            {item.type}
          </span>
          {index === 0 && (
            <span className="font-mono text-[10px] text-terminal">
              ● current
            </span>
          )}
        </div>
        <h3 className="font-mono text-sm font-semibold text-foreground sm:text-base">
          {item.title}
        </h3>
        <p className="mt-0.5 font-mono text-xs text-cyber/70">
          @ {item.organization}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-neutral-500 sm:text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading command="git log --oneline --graph" title="經歷時間軸" />

        <FadeInSection delay={0.1}>
          <div className="relative">
            <div className="absolute left-[19px] top-0 hidden h-full w-px bg-border-dim sm:left-[21px] sm:block" />
            <div className="space-y-0">
              {experiences.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
