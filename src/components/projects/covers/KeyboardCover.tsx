"use client";

import { useState } from "react";

const KEYS = [
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
];

export function KeyboardCover() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="flex aspect-video w-full items-center justify-center border-b border-border-dim bg-[#0d0d0d] p-4">
      <div className="w-full max-w-[180px]">
        <div className="mb-2 text-center font-mono text-[10px] text-neutral-500">
          Swing Calculator
        </div>
        <div className="mb-2 rounded border border-border-dim bg-[#111] px-3 py-2 text-right font-mono text-sm text-cyber">
          {active ?? "0"}
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {KEYS.flat().map((key) => (
            <button
              key={key}
              type="button"
              onMouseEnter={() => setActive(key)}
              onMouseLeave={() => setActive(null)}
              className="rounded border border-border-dim bg-[#151515] py-2 font-mono text-xs text-neutral-400 transition-colors hover:border-cyber/50 hover:bg-cyber/10 hover:text-cyber"
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
