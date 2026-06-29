"use client";

export function ChartCover() {
  const candles = [
    { x: 30, o: 70, c: 55, h: 75, l: 50, up: false },
    { x: 55, o: 55, c: 65, h: 68, l: 52, up: true },
    { x: 80, o: 65, c: 50, h: 70, l: 45, up: false },
    { x: 105, o: 50, c: 60, h: 63, l: 48, up: true },
    { x: 130, o: 60, c: 75, h: 78, l: 58, up: true },
    { x: 155, o: 75, c: 68, h: 80, l: 65, up: false },
    { x: 180, o: 68, c: 82, h: 85, l: 66, up: true },
    { x: 205, o: 82, c: 78, h: 88, l: 75, up: false },
    { x: 230, o: 78, c: 90, h: 93, l: 76, up: true },
    { x: 255, o: 90, c: 85, h: 95, l: 83, up: false },
  ];

  const trendPoints =
    "20,75 50,68 80,72 110,58 140,65 170,78 200,72 230,88 260,82";

  return (
    <div className="relative aspect-video w-full overflow-hidden border-b border-border-dim bg-[#080808]">
      <svg viewBox="0 0 280 120" className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 16}
            x2="280"
            y2={i * 16}
            stroke="rgba(0,240,255,0.06)"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 30}
            y1="0"
            x2={i * 30}
            y2="120"
            stroke="rgba(0,240,255,0.06)"
            strokeWidth="0.5"
          />
        ))}
        <rect x="0" y="0" width="280" height="120" fill="url(#gridFade)" />
        {candles.map((c, i) => {
          const top = Math.min(c.o, c.c);
          const bodyH = Math.abs(c.o - c.c) || 1;
          const color = c.up ? "#00ff88" : "#ff4466";
          return (
            <g key={i} filter="url(#glow)">
              <line
                x1={c.x}
                y1={120 - c.h}
                x2={c.x}
                y2={120 - c.l}
                stroke={color}
                strokeWidth="1"
                opacity="0.8"
              />
              <rect
                x={c.x - 6}
                y={120 - top - bodyH}
                width="12"
                height={bodyH}
                fill={color}
                opacity="0.9"
              />
            </g>
          );
        })}
        <polyline
          points={trendPoints}
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1.5"
          opacity="0.7"
          filter="url(#glow)"
        />
      </svg>
      <div className="absolute bottom-2 left-3 font-mono text-[9px] text-cyber/40">
        OHLCV · Walk-Forward
      </div>
    </div>
  );
}
