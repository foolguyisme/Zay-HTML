"use client";

import type { CoverType } from "@/data/projects";
import { YoutubeCover } from "./covers/YoutubeCover";
import { TerminalCover } from "./covers/TerminalCover";
import { ChartCover } from "./covers/ChartCover";
import { PipelineCover } from "./covers/PipelineCover";
import { AsciiCover } from "./covers/AsciiCover";
import { KeyboardCover } from "./covers/KeyboardCover";
import { BadgeCover } from "./covers/BadgeCover";

interface ProjectCoverProps {
  type: CoverType;
  youtubeEmbedUrl?: string;
  coverImage?: string;
  coverImageAlt?: string;
}

export function ProjectCover({
  type,
  youtubeEmbedUrl,
  coverImage,
  coverImageAlt,
}: ProjectCoverProps) {
  switch (type) {
    case "youtube":
      return (
        <YoutubeCover
          embedUrl={youtubeEmbedUrl}
          imageSrc={coverImage}
          imageAlt={coverImageAlt}
        />
      );
    case "terminal":
      return <TerminalCover />;
    case "chart":
      return <ChartCover />;
    case "pipeline":
      return <PipelineCover />;
    case "ascii":
      return <AsciiCover />;
    case "keyboard":
      return <KeyboardCover />;
    case "badge":
      return <BadgeCover />;
    default:
      return null;
  }
}
