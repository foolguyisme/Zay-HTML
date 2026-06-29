"use client";

import { motion } from "framer-motion";

const MATRIX = [
  ["繁", "體", "中", "文"],
  ["↕", " ", " ", "↕"],
  ["簡", "體", "中", "文"],
];

export function AsciiCover() {
  return (
    <div className="flex aspect-video w-full items-center justify-center border-b border-border-dim bg-[#0a0a0a] p-4 font-mono">
      <div className="text-center">
        <pre className="text-[10px] leading-relaxed text-neutral-600 sm:text-xs">
{`┌─────────────────┐
│  [繁] ──matrix──│
│    ↕     OpenCC │
│  [簡] ──engine──│
└─────────────────┘`}
        </pre>
        <motion.div
          className="mt-3 flex items-center justify-center gap-4 text-lg sm:text-2xl"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="rounded border border-cyber/40 bg-cyber/10 px-3 py-1 text-cyber glow-text">
            繁
          </span>
          <motion.span
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-terminal"
          >
            ↔
          </motion.span>
          <span className="rounded border border-terminal/40 bg-terminal/10 px-3 py-1 text-terminal">
            簡
          </span>
        </motion.div>
        <div className="mt-3 grid grid-cols-4 gap-1 text-[9px] text-neutral-500">
          {MATRIX.flat().map((cell, i) => (
            <span
              key={i}
              className={`rounded px-1 py-0.5 ${cell === "↕" ? "text-cyber" : "bg-[#111]"}`}
            >
              {cell || "·"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
