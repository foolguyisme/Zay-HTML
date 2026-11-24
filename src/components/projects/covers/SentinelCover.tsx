"use client";

import { motion } from "framer-motion";

// 雷達掃描 + 警示清單：模擬 LaptopSentinel 每 30 秒掃描一次並列出需要看一眼的事
const BLIPS = [
  { left: "62%", top: "28%", delay: 0.4, warn: false },
  { left: "30%", top: "62%", delay: 1.3, warn: true },
  { left: "70%", top: "66%", delay: 2.1, warn: false },
];

const ROWS = [
  { ok: true, text: "Defender 正常" },
  { ok: true, text: "防火牆已啟用" },
  { ok: false, text: "新的自動啟動項目" },
];

export function SentinelCover() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center gap-4 overflow-hidden border-b border-border-dim bg-[#0a0a0a] px-4">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative h-[6.5rem] w-[6.5rem] shrink-0 rounded-full border border-cyber/30 bg-cyber/[0.03]">
        <div className="absolute inset-3 rounded-full border border-cyber/20" />
        <div className="absolute inset-[1.6rem] rounded-full border border-cyber/15" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-cyber/10" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-cyber/10" />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(0,255,136,0.35), rgba(0,255,136,0) 28%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
        />
        {BLIPS.map((b) => (
          <motion.span
            key={b.left}
            className={`absolute h-1.5 w-1.5 rounded-full ${
              b.warn
                ? "bg-amber-400 shadow-[0_0_8px_#fbbf24]"
                : "bg-terminal shadow-[0_0_6px_#00ff88]"
            }`}
            style={{ left: b.left, top: b.top }}
            animate={{ opacity: [0, 1, 0.2] }}
            transition={{ duration: 3.6, repeat: Infinity, delay: b.delay }}
          />
        ))}
      </div>

      <div className="relative min-w-0 whitespace-nowrap font-mono text-[9px] leading-relaxed sm:text-[10px]">
        <div className="mb-1 text-neutral-600">$ sentinel status</div>
        {ROWS.map((r, i) => (
          <motion.div
            key={r.text}
            className={r.ok ? "text-terminal/80" : "text-amber-300"}
            animate={r.ok ? undefined : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
          >
            {r.ok ? "✓" : "!"} {r.text}
          </motion.div>
        ))}
        <div className="mt-1 text-cyber/50">scan every 30s · local only</div>
      </div>
    </div>
  );
}
