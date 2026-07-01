"use client";

import type { ProjectHighlight } from "@/data/zayaiHighlights";

interface ProjectHighlightsProps {
  highlights: ProjectHighlight[];
  compact?: boolean;
}

export function ProjectHighlights({
  highlights,
  compact = false,
}: ProjectHighlightsProps) {
  return (
    <ul
      className={`grid gap-2 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}
    >
      {highlights.map((item) => {
        const Icon = item.icon;
        return (
          <li
            key={item.title}
            className="flex gap-2.5 rounded border border-border-dim bg-[#080808] p-2.5 transition-colors hover:border-cyber/20 sm:gap-3 sm:p-3"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-cyber/25 bg-cyber/5 text-cyber sm:h-9 sm:w-9">
              <Icon size={compact ? 15 : 16} strokeWidth={1.75} />
            </div>
            <div className="min-w-0 flex-1">
              <p
                className={`font-mono font-semibold text-cyber ${
                  compact ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm"
                }`}
              >
                {item.title}
              </p>
              <p
                className={`mt-0.5 leading-snug text-neutral-500 ${
                  compact ? "text-[10px] sm:text-[11px]" : "text-[11px] sm:text-xs"
                }`}
              >
                {item.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
