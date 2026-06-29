"use client";

import { useEffect, useState } from "react";

const LINES = [
  "$ loading model...",
  "Loading Qwen2.5-Coder...",
  "| Sandbox evaluation passed.",
];

export function TerminalCover() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentLine = LINES[lineIndex];
    if (charIndex < currentLine.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 45);
      return () => clearTimeout(t);
    }
    if (lineIndex < LINES.length - 1) {
      const t = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex(0);
      setCharIndex(0);
    }, 3000);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex]);

  return (
    <div className="flex aspect-video w-full flex-col justify-center border-b border-border-dim bg-[#0d0d0d] p-4 font-mono text-[11px] sm:text-xs">
      <div className="mb-2 text-neutral-600">ai-coder@sandbox:~</div>
      {LINES.slice(0, lineIndex).map((line, i) => (
        <div key={i} className="text-terminal">
          {line}
        </div>
      ))}
      <div className="text-cyber">
        {LINES[lineIndex]?.slice(0, charIndex)}
        <span className="cursor-blink text-cyber">▌</span>
      </div>
    </div>
  );
}
