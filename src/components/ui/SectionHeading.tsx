"use client";

import { FadeInSection } from "./FadeInSection";

interface SectionHeadingProps {
  command: string;
  title: string;
}

export function SectionHeading({ command, title }: SectionHeadingProps) {
  return (
    <FadeInSection className="mb-10">
      <p className="mb-2 font-mono text-sm text-cyber/60">
        <span className="text-terminal">$</span> {command}
      </p>
      <h2 className="font-mono text-2xl font-bold text-foreground glow-text sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyber to-transparent" />
    </FadeInSection>
  );
}
