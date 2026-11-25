"use client";

import { motion } from "framer-motion";

// 已串接的階段（亮）與尚未實作的階段（虛線、暗），誠實呈現 MVP 目前的進度
const LIVE = ["Project", "Story", "Resolver", "Director"];
const PLANNED = ["Prompt", "Provider", "Render"];

export function StoryflowCover() {
  return (
    <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-3 overflow-hidden border-b border-border-dim bg-[#0a0a0a] px-3 font-mono">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative flex items-center">
        {LIVE.map((label, i) => (
          <div key={label} className="flex items-center">
            <motion.div
              className="rounded border border-cyber/40 bg-cyber/10 px-1.5 py-1 text-[9px] text-cyber"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.45 }}
            >
              {label}
            </motion.div>
            {i < LIVE.length - 1 && (
              <span className="mx-1 text-[10px] text-terminal/70">→</span>
            )}
          </div>
        ))}
      </div>

      <div className="relative flex items-center gap-1.5">
        <span className="mr-0.5 text-[8px] text-neutral-600">planned</span>
        {PLANNED.map((label) => (
          <div
            key={label}
            className="rounded border border-dashed border-neutral-700 px-1.5 py-0.5 text-[9px] text-neutral-600"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-[16rem] rounded border border-border-dim bg-[#0d0d0d] px-2.5 py-1.5 text-[9px] leading-snug">
        <span className="text-neutral-600">$ run-project</span>
        <motion.span
          className="ml-2 text-terminal"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.25, 0.85, 1] }}
        >
          finish: completed
        </motion.span>
      </div>
    </div>
  );
}
