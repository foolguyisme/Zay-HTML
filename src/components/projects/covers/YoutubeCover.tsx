"use client";

import Image from "next/image";

interface YoutubeCoverProps {
  embedUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function YoutubeCover({
  embedUrl,
  imageSrc,
  imageAlt = "Project cover",
}: YoutubeCoverProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg border-b border-cyber/20 bg-[#0a0a0a] glow-border">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      ) : embedUrl ? (
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
            // Demo media — set coverImage or youtubeEmbedUrl in projects.ts
          </p>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-t-lg ring-1 ring-cyber/20" />
    </div>
  );
}
