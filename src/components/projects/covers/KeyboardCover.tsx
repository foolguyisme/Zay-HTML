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
    <div className="flex aspect-video w-full items-center justify-center gap-4 border-b border-border-dim bg-[#0d0d0d] p-3">
      <div className="w-[7.5rem] shrink-0">
        <div className="mb-1.5 font-mono text-[10px] text-neutral-500">
          Swing Calculator
        </div>
        <div className="rounded border border-border-dim bg-[#111] px-3 py-2 text-right font-mono text-base text-cyber">
          {active ?? "0"}
        </div>
        <div className="mt-1.5 font-mono text-[9px] text-neutral-600">
          1 + 2 × 3 = 7
        </div>
      </div>
      <div className="grid w-[9.5rem] shrink-0 grid-cols-4 gap-1">
        {KEYS.flat().map((key) => (
          <button
            key={key}
            type="button"
            onMouseEnter={() => setActive(key)}
            onMouseLeave={() => setActive(null)}
            className="rounded border border-border-dim bg-[#151515] py-1 font-mono text-xs text-neutral-400 transition-colors hover:border-cyber/50 hover:bg-cyber/10 hover:text-cyber"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
