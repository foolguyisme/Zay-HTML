"use client";

interface YoutubeCoverProps {
  embedUrl?: string;
}

export function YoutubeCover({ embedUrl }: YoutubeCoverProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg border-b border-cyber/20 bg-[#0a0a0a] glow-border">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title="Project Demo"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-cyber/50 bg-cyber/5">
            <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-cyber" />
          </div>
          <p className="font-mono text-xs text-cyber/50">
            // YouTube Demo — paste embed URL in projects.ts
          </p>
          <p className="font-mono text-[10px] text-neutral-600">
            youtubeEmbedUrl: &quot;&quot;
          </p>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-t-lg ring-1 ring-cyber/20" />
    </div>
  );
}
