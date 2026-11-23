"use client";

import { motion } from "framer-motion";

// 8×6 區塊格：亮的格子代表寫入了浮水印位元，掃描線代表追查時逐區塊讀取
const COLS = 8;
const BITS = [
  1, 0, 1, 1, 0, 1, 0, 0,
  0, 1, 1, 0, 1, 0, 1, 1,
  1, 1, 0, 1, 0, 0, 1, 0,
  0, 0, 1, 0, 1, 1, 0, 1,
  1, 0, 0, 1, 1, 0, 1, 0,
  0, 1, 0, 0, 1, 1, 0, 1,
];

export function WatermarkCover() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center gap-4 overflow-hidden border-b border-border-dim bg-[#0a0a0a] px-4 sm:gap-6">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative">
        <div
          className="grid gap-[3px] rounded border border-border-dim bg-[#0d0d0d] p-2"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        >
          {BITS.map((bit, i) => (
            <motion.span
              key={i}
              className={`h-3 w-3 rounded-[2px] sm:h-4 sm:w-4 ${
                bit ? "bg-cyber/40" : "bg-[#161622]"
              }`}
              animate={bit ? { opacity: [0.35, 1, 0.35] } : undefined}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: (i % COLS) * 0.12 + Math.floor(i / COLS) * 0.05,
              }}
            />
          ))}
        </div>
        <motion.div
          className="pointer-events-none absolute inset-x-1 h-px bg-terminal shadow-[0_0_10px_#00ff88]"
          animate={{ top: ["6%", "84%", "6%"] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        />
        <p className="mt-1.5 text-center font-mono text-[8px] text-neutral-600 sm:text-[9px]">
          Haar LL · 4×4 SVD · QIM
        </p>
      </div>

      <div className="relative whitespace-nowrap font-mono text-[9px] leading-relaxed sm:text-[11px]">
        <div className="text-neutral-600">$ wm3 trace</div>
        <div className="text-neutral-500">align .. ok</div>
        <div className="text-neutral-500">RS .... ok</div>
        <motion.div
          className="text-terminal"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.2, 0.85, 1] }}
        >
          → user_0427
        </motion.div>
        <div className="mt-1 text-cyber/50">PSNR ≈ 42 dB</div>
      </div>
    </div>
  );
}
