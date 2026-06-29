"use client";

import { type ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function TerminalWindow({
  title = "terminal",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-border-dim bg-card glow-border ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border-dim bg-[#111] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-neutral-500">
          {title}
        </span>
      </div>
      <div className="relative p-4 sm:p-6">{children}</div>
    </div>
  );
}
