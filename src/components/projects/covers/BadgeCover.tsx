"use client";

import { motion } from "framer-motion";

export function BadgeCover() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden border-b border-border-dim bg-[#0a0a0a]">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <motion.div
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <svg width="140" height="160" viewBox="0 0 140 160" className="drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          <defs>
            <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="50%" stopColor="#0f3460" />
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(0,240,255,0.4)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M70 10 L120 35 L120 95 L70 150 L20 95 L20 35 Z"
            fill="url(#badgeGrad)"
            stroke="#00f0ff"
            strokeWidth="1.5"
            opacity="0.9"
          />
          <path
            d="M70 10 L120 35 L120 95 L70 150 L20 95 L20 35 Z"
            fill="url(#shine)"
            opacity="0.5"
          />
          <text
            x="70"
            y="72"
            textAnchor="middle"
            fill="#00f0ff"
            fontSize="22"
            fontFamily="monospace"
            fontWeight="bold"
          >
            TOP
          </text>
          <text
            x="70"
            y="98"
            textAnchor="middle"
            fill="#00ff88"
            fontSize="18"
            fontFamily="monospace"
            fontWeight="bold"
          >
            7%
          </text>
        </svg>
      </motion.div>
      <p className="absolute bottom-3 font-mono text-[9px] text-cyber/40">
        Kaggle Achievement
      </p>
    </div>
  );
}
