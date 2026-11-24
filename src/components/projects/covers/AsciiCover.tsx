"use client";

import { motion } from "framer-motion";

export function AsciiCover() {
  return (
    <div className="flex aspect-video w-full items-center justify-center border-b border-border-dim bg-[#0a0a0a] p-3 font-mono">
      <div className="text-center">
        <pre className="text-[10px] leading-snug text-neutral-600">
{`┌─────────────────┐
│  [繁] ──matrix──│
│    ↕     OpenCC │
│  [簡] ──engine──│
└─────────────────┘`}
        </pre>
        <motion.div
          className="mt-2 flex items-center justify-center gap-4 text-lg"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="rounded border border-cyber/40 bg-cyber/10 px-3 py-0.5 text-cyber glow-text">
            繁
          </span>
          <motion.span
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-terminal"
          >
            ↔
          </motion.span>
          <span className="rounded border border-terminal/40 bg-terminal/10 px-3 py-0.5 text-terminal">
            簡
          </span>
        </motion.div>
      </div>
    </div>
  );
}
