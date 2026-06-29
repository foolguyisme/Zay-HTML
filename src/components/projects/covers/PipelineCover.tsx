"use client";

import { motion } from "framer-motion";
import { Brain, FileText, Music } from "lucide-react";

const steps = [
  { icon: Music, label: "Audio", emoji: "🎵" },
  { icon: Brain, label: "Whisper", emoji: "🧠" },
  { icon: Brain, label: "GPT", emoji: "🤖" },
  { icon: FileText, label: "SRT", emoji: "📄" },
];

export function PipelineCover() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center gap-1 border-b border-border-dim bg-[#0a0a0a] px-2 sm:gap-3 sm:px-4">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center">
          <motion.div
            className="flex flex-col items-center gap-1"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyber/30 bg-cyber/5 text-lg sm:h-12 sm:w-12">
              {step.emoji}
            </div>
            <span className="font-mono text-[8px] text-cyber/60 sm:text-[10px]">
              {step.label}
            </span>
          </motion.div>
          {i < steps.length - 1 && (
            <div className="relative mx-1 flex w-6 items-center sm:mx-2 sm:w-10">
              <div className="h-px w-full bg-gradient-to-r from-cyber/40 to-cyber/10" />
              <motion.div
                className="absolute h-1.5 w-1.5 rounded-full bg-cyber shadow-[0_0_8px_#00f0ff]"
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear",
                }}
              />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-cyber/40">
                →
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
