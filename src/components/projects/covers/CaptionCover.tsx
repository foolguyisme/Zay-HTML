"use client";

import { motion } from "framer-motion";

const BARS = 28;

// 波形 → 原文字幕 → 本機翻譯字幕，模擬桌面置頂浮窗
export function CaptionCover() {
  return (
    <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-2 overflow-hidden border-b border-border-dim bg-[#0a0a0a] px-4 sm:gap-3">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative flex h-8 items-center gap-[3px] sm:h-10">
        {Array.from({ length: BARS }).map((_, i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-cyber/60"
            animate={{ height: ["20%", `${35 + ((i * 37) % 60)}%`, "20%"] }}
            transition={{
              duration: 1.1 + (i % 5) * 0.15,
              repeat: Infinity,
              delay: i * 0.04,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative flex gap-1.5 font-mono text-[8px] sm:text-[9px]">
        {["Tab Audio", "YouTube CC", "Frame OCR"].map((src, i) => (
          <span
            key={src}
            className={`rounded border px-1.5 py-0.5 ${
              i === 0
                ? "border-cyber/40 bg-cyber/10 text-cyber"
                : "border-border-dim text-neutral-600"
            }`}
          >
            {src}
          </span>
        ))}
      </div>

      <motion.div
        className="relative rounded-md border border-border-dim bg-black/70 px-4 py-2 text-center shadow-[0_0_24px_rgba(0,240,255,0.08)]"
        animate={{ y: [4, 0, 0, 4], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.15, 0.85, 1] }}
      >
        <div className="text-[9px] text-neutral-500 sm:text-[10px]">
          君の声が聞こえる
        </div>
        <div className="text-xs font-medium text-terminal sm:text-sm">
          我聽得見你的聲音
        </div>
      </motion.div>

      <p className="relative font-mono text-[8px] text-cyber/40 sm:text-[9px]">
        faster-whisper → Ollama · 100% local
      </p>
    </div>
  );
}
