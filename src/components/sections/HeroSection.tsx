"use client";

import { GitBranch, Mail } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Typewriter } from "@/components/ui/Typewriter";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scanline relative flex min-h-screen items-center justify-center px-4 pt-20"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber/5 via-transparent to-transparent" />

      <FadeInSection className="relative z-10 w-full max-w-3xl">
        <TerminalWindow title="foolguyisme@portfolio:~">
          <div className="space-y-4 font-mono">
            <p className="text-xs text-neutral-500 sm:text-sm">
              <span className="text-terminal">guest@portfolio</span>
              <span className="text-neutral-600">:</span>
              <span className="text-cyber-dim">~</span>
              <span className="text-neutral-600">$</span> whoami
            </p>

            <h1 className="text-3xl font-bold text-foreground glow-text sm:text-5xl">
              <Typewriter text="蔡秉儒 / Tsai" speed={100} />
            </h1>

            <p className="text-base text-cyber sm:text-lg">
              <span className="text-neutral-500">{">"}</span> foolguyisme{" "}
              <span className="text-neutral-600">// 蠢才更要精進自己</span>
            </p>

            <p className="text-sm text-neutral-400 sm:text-base">
              <span className="text-terminal">export</span> SLOGAN=
              <span className="text-cyber">
                &quot;愛數據分析 | 愛訓練AI | 愛二次元 | 愛玩TCG&quot;
              </span>
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <GlowButton
                href="https://github.com/foolguyisme"
                external
              >
                <GitBranch size={16} />
                View GitHub
              </GlowButton>
              <GlowButton href="mailto:a0912159652@gmail.com">
                <Mail size={16} />
                Contact Me
              </GlowButton>
            </div>

            <p className="cursor-blink pt-6 text-xs text-neutral-600">
              <span className="text-terminal">█</span> scroll to explore...
            </p>
          </div>
        </TerminalWindow>
      </FadeInSection>
    </section>
  );
}
