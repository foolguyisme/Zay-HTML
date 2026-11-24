"use client";

import { Lightbulb } from "lucide-react";

interface ProjectMotivationProps {
  text: string;
}

export function ProjectMotivation({ text }: ProjectMotivationProps) {
  return (
    <div className="flex gap-3 rounded border border-amber-400/15 bg-amber-400/[0.03] p-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-amber-400/25 bg-amber-400/5 text-amber-400">
        <Lightbulb size={15} strokeWidth={1.75} />
      </div>
      <p className="min-w-0 flex-1 self-center text-sm leading-relaxed text-neutral-300">
        {text}
      </p>
    </div>
  );
}
