"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

// 模擬員工把含敏感資料的文字貼進 AI 對話框，擴充功能在本機遮罩後才送出
const SEGMENTS: { text: string; secret?: string; label?: string }[] = [
  { text: "請幫我回覆 " },
  { text: "", secret: "amy@corp.example", label: "[EMAIL]" },
  { text: "，卡號 " },
  { text: "", secret: "4111 1111 1111 1111", label: "[CARD]" },
  { text: " 的退款進度" },
];

const CYCLE = { duration: 4, repeat: Infinity, times: [0, 0.3, 0.4, 0.9, 1] };

export function GuardCover() {
  return (
    <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-3 overflow-hidden border-b border-border-dim bg-[#0a0a0a] px-4">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative w-full max-w-[290px] rounded-md border border-border-dim bg-[#0d0d0d] p-3 font-mono text-[9px] leading-relaxed text-neutral-400 sm:text-[11px]">
        <div className="mb-1.5 flex items-center justify-between text-[8px] text-neutral-600 sm:text-[9px]">
          <span>chat.ai / prompt</span>
          <span className="text-cyber/60">MV3 extension</span>
        </div>
        {SEGMENTS.map((seg, i) =>
          seg.secret ? (
            <span key={i} className="relative inline-block align-bottom">
              <motion.span
                className="text-red-400/90"
                animate={{ opacity: [1, 1, 0, 0, 1] }}
                transition={CYCLE}
              >
                {seg.secret}
              </motion.span>
              <motion.span
                className="absolute inset-0 rounded-[2px] bg-terminal/15 text-center text-terminal"
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={CYCLE}
              >
                {seg.label}
              </motion.span>
            </span>
          ) : (
            <span key={i}>{seg.text}</span>
          ),
        )}
      </div>

      <motion.div
        className="relative flex items-center gap-2 rounded border border-terminal/30 bg-terminal/5 px-2.5 py-1 font-mono text-[9px] text-terminal sm:text-[10px]"
        animate={{ opacity: [0.4, 0.4, 1, 1, 0.4] }}
        transition={CYCLE}
      >
        <ShieldCheck className="h-3.5 w-3.5" />
        2 hits · masked locally · prompt never logged
      </motion.div>
    </div>
  );
}
