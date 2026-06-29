"use client";

import { motion, useInView } from "framer-motion";
import { House, Rocket, Ship, Trophy } from "lucide-react";
import { useRef } from "react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export interface KaggleCompetition {
  id: string;
  name: string;
  nameZh: string;
  topPercent: number;
  icon: typeof Rocket;
  highlight?: boolean;
}

export const kaggleCompetitions: KaggleCompetition[] = [
  {
    id: "spaceship-titanic",
    name: "Spaceship Titanic",
    nameZh: "太空泰坦尼克號",
    topPercent: 7,
    icon: Rocket,
    highlight: true,
  },
  {
    id: "titanic",
    name: "Titanic",
    nameZh: "泰坦尼克號",
    topPercent: 18,
    icon: Ship,
  },
  {
    id: "house-prices",
    name: "House Prices",
    nameZh: "房價預測",
    topPercent: 31,
    icon: House,
  },
];

function BeatRing({
  beatPercent,
  topPercent,
  inView,
}: {
  beatPercent: number;
  topPercent: number;
  inView: boolean;
}) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28">
      <svg
        className="-rotate-90"
        width="100%"
        height="100%"
        viewBox="0 0 88 88"
        aria-hidden
      >
        <circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke="rgba(0,240,255,0.08)"
          strokeWidth="6"
        />
        <motion.circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: inView
              ? circumference - (beatPercent / 100) * circumference
              : circumference,
          }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ filter: "drop-shadow(0 0 6px rgba(0,240,255,0.5))" }}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#00f0ff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="font-mono text-lg font-bold text-cyber glow-text sm:text-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          {beatPercent}%
        </motion.span>
        <span className="font-mono text-[8px] text-neutral-500 sm:text-[9px]">
          defeated
        </span>
      </div>
      <motion.div
        className="absolute -right-1 -top-1 rounded border border-terminal/40 bg-terminal/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-terminal"
        initial={{ opacity: 0, y: 4 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.4 }}
      >
        TOP {topPercent}%
      </motion.div>
    </div>
  );
}

function CompetitionRow({
  competition,
  index,
}: {
  competition: KaggleCompetition;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const beatPercent = 100 - competition.topPercent;
  const Icon = competition.icon;
  const isHighlight = competition.highlight;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`rounded-lg border p-4 sm:p-5 ${
        isHighlight
          ? "border-cyber/40 bg-cyber/5 glow-border"
          : "border-border-dim bg-[#080808]"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        {isHighlight && (
          <BeatRing
            beatPercent={beatPercent}
            topPercent={competition.topPercent}
            inView={inView}
          />
        )}

        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-start gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                isHighlight
                  ? "border-cyber/40 bg-cyber/10 text-cyber"
                  : "border-border-dim bg-[#111] text-neutral-400"
              }`}
            >
              <Icon size={20} strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3
                  className={`font-mono text-sm font-semibold sm:text-base ${
                    isHighlight ? "text-cyber glow-text" : "text-foreground"
                  }`}
                >
                  {competition.name}
                </h3>
                {!isHighlight && (
                  <span className="rounded border border-cyber/25 bg-cyber/5 px-2 py-0.5 font-mono text-[10px] text-cyber">
                    TOP {competition.topPercent}%
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-neutral-500">
                {competition.nameZh}
              </p>
            </div>
            {isHighlight && (
              <Trophy
                size={18}
                className="ml-auto shrink-0 text-terminal"
                aria-label="Best result"
              />
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-between font-mono text-xs">
              <span className="text-neutral-500">
                <span className="text-terminal">beat_rate</span> =
              </span>
              <motion.span
                className={
                  isHighlight
                    ? "text-base font-bold text-cyber glow-text sm:text-lg"
                    : "text-sm font-semibold text-foreground"
                }
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                擊敗{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {beatPercent}%
                </motion.span>{" "}
                的參賽者
              </motion.span>
            </div>

            <div className="relative h-3 overflow-hidden rounded-full bg-[#111] sm:h-3.5">
              <div className="absolute inset-0 opacity-30">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-0 h-full w-px bg-neutral-700"
                    style={{ left: `${(i + 1) * 10}%` }}
                  />
                ))}
              </div>
              <motion.div
                className={`relative h-full rounded-full ${
                  isHighlight
                    ? "bg-gradient-to-r from-cyber-dim via-cyber to-terminal"
                    : "bg-gradient-to-r from-cyber-dim/80 to-cyber/80"
                }`}
                initial={{ width: "0%" }}
                animate={inView ? { width: `${beatPercent}%` } : { width: "0%" }}
                transition={{
                  duration: isHighlight ? 1.6 : 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 + index * 0.15,
                }}
                style={{
                  boxShadow: isHighlight
                    ? "0 0 16px rgba(0,240,255,0.5), 0 0 32px rgba(0,240,255,0.15)"
                    : "0 0 8px rgba(0,240,255,0.25)",
                }}
              />
              {inView && isHighlight && (
                <motion.div
                  className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_#00f0ff]"
                  initial={{ left: "0%", opacity: 0 }}
                  animate={{ left: `${beatPercent}%`, opacity: [0, 1, 1, 0] }}
                  transition={{
                    left: { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
                    opacity: { duration: 1.6, delay: 0.3 },
                  }}
                  style={{ marginLeft: -4 }}
                />
              )}
            </div>

            <div className="flex justify-between font-mono text-[10px] text-neutral-600">
              <span>0%</span>
              <span className={isHighlight ? "text-cyber/60" : ""}>
                percentile rank
              </span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function KaggleStats() {
  const best = kaggleCompetitions.find((c) => c.highlight);

  return (
    <section id="kaggle" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          command="kaggle competitions --list --ranked"
          title="Kaggle 競賽成績"
        />

        <FadeInSection delay={0.1}>
          <TerminalWindow title="kaggle@leaderboard:~">
            <div className="mb-6 space-y-1 font-mono text-xs text-neutral-500">
              <p>
                <span className="text-terminal">$</span> python rank_analysis.py
              </p>
              <p className="text-cyber/70">
                # Top % = 你的排名百分位 · beat_rate = 100 − top%
              </p>
              {best && (
                <motion.p
                  className="text-terminal"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  ★ best_run: {best.name} → 擊敗 {100 - best.topPercent}% 對手
                </motion.p>
              )}
            </div>

            <div className="space-y-4">
              {kaggleCompetitions.map((competition, index) => (
                <CompetitionRow
                  key={competition.id}
                  competition={competition}
                  index={index}
                />
              ))}
            </div>

            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-border-dim pt-5 font-mono text-[10px] text-neutral-600 sm:text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8 }}
            >
              <span>
                <span className="text-cyber">3</span> competitions
              </span>
              <span className="text-neutral-700">|</span>
              <span>
                best:{" "}
                <span className="text-terminal">Top {best?.topPercent}%</span>
              </span>
              <span className="text-neutral-700">|</span>
              <span>ML · Feature Engineering · Data Cleaning</span>
            </motion.div>
          </TerminalWindow>
        </FadeInSection>
      </div>
    </section>
  );
}
