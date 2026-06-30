"use client";

import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

const professionalStory =
  "高中因遊戲設計社接觸C語言埋下種子。雖與資工系擦身而過，但在中信金融管理學院期間，意外開啟了 Python、數據分析與機器學習的大門，並擔任了兩年大數據課程助教。曾在台灣人壽資訊開發科實習，退伍後參與「成大與經濟部AI產學計畫」深化底層技術。現任 QA 工程師，專注於網路資安與自動化，但下班後持續開發 AI 模型，渴望將這份熱忱投入 AI 訓練與數據分析領域。";

const hiddenStats = {
  "PT經驗": ["公仔店理貨員", "扭蛋包裝員", "日文語音翻譯"],
  awards: ["領過獎學金"],
  hobbies: [
    "玩電腦遊戲",
    "每日跑步",
    "重度 TCG 玩家 (UA, WS, 遊戲王, 碧藍航線)",
  ],
} as const;

type BadgeVariant = "cyber" | "terminal" | "neutral";

const badgeStyles: Record<BadgeVariant, string> = {
  cyber:
    "border-cyber/20 bg-cyber/5 text-cyber/80 hover:border-cyber/40 hover:bg-cyber/10",
  terminal:
    "border-terminal/20 bg-terminal/5 text-terminal/80 hover:border-terminal/40 hover:bg-terminal/10",
  neutral:
    "border-border-dim bg-[#111] text-neutral-400 hover:border-neutral-600",
};

function JsonArrayField({
  keyName,
  values,
  variant,
  isLast = false,
}: {
  keyName: string;
  values: readonly string[];
  variant: BadgeVariant;
  isLast?: boolean;
}) {
  const isMultiline = values.length > 2;

  return (
    <div>
      <span className="text-cyber">&quot;{keyName}&quot;</span>
      <span className="text-neutral-500">: [</span>
      {isMultiline ? (
        <div className="mt-2 flex flex-wrap gap-2 pl-2">
          {values.map((item) => (
            <span
              key={item}
              className={`rounded border px-2 py-0.5 transition-colors ${badgeStyles[variant]}`}
            >
              &quot;{item}&quot;
            </span>
          ))}
        </div>
      ) : (
        values.map((item) => (
          <span
            key={item}
            className={`ml-2 inline-block rounded border px-2 py-0.5 transition-colors ${badgeStyles[variant]}`}
          >
            &quot;{item}&quot;
          </span>
        ))
      )}
      <span className="text-neutral-500">{isLast ? "]" : "],"}</span>
    </div>
  );
}

export function AboutSection() {
  const statEntries = Object.entries(hiddenStats) as [
    keyof typeof hiddenStats,
    readonly string[],
  ][];

  const variantMap: Record<keyof typeof hiddenStats, BadgeVariant> = {
    "PT經驗": "cyber",
    awards: "terminal",
    hobbies: "neutral",
  };

  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading command="cat about.txt" title="whoami" />

        <FadeInSection delay={0.1}>
          <TerminalWindow title="whoami — profile.json">
            <div className="space-y-6 font-mono text-sm">
              <div>
                <p className="mb-3 text-xs text-cyber">// Professional Story</p>
                <p className="leading-relaxed text-neutral-400">
                  {professionalStory}
                </p>
              </div>

              <div className="rounded border border-border-dim bg-[#080808] p-4">
                <p className="mb-3 text-xs text-terminal">
                  {`{`}
                  <span className="text-neutral-600"> // hidden_stats</span>
                </p>
                <div className="space-y-3 pl-4 text-xs">
                  {statEntries.map(([key, values], index) => (
                    <JsonArrayField
                      key={key}
                      keyName={key}
                      values={values}
                      variant={variantMap[key]}
                      isLast={index === statEntries.length - 1}
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-terminal">{`}`}</p>
              </div>
            </div>
          </TerminalWindow>
        </FadeInSection>
      </div>
    </section>
  );
}
