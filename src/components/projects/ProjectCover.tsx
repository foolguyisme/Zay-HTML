"use client";

import type { ReactNode } from "react";
import type { CoverType } from "@/data/projects";
import { YoutubeCover } from "./covers/YoutubeCover";
import { TerminalCover } from "./covers/TerminalCover";
import { ChartCover } from "./covers/ChartCover";
import { PipelineCover } from "./covers/PipelineCover";
import { AsciiCover } from "./covers/AsciiCover";
import { KeyboardCover } from "./covers/KeyboardCover";
import { BadgeCover } from "./covers/BadgeCover";
import { WatermarkCover } from "./covers/WatermarkCover";
import { GuardCover } from "./covers/GuardCover";
import { CaptionCover } from "./covers/CaptionCover";

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
  let cover: ReactNode = null;

  switch (type) {
    case "youtube":
      cover = (
        <YoutubeCover
          embedUrl={youtubeEmbedUrl}
          imageSrc={coverImage}
          imageAlt={coverImageAlt}
        />
      );
      break;
    case "terminal":
      cover = <TerminalCover />;
      break;
    case "chart":
      cover = <ChartCover />;
      break;
    case "pipeline":
      cover = <PipelineCover />;
      break;
    case "ascii":
      cover = <AsciiCover />;
      break;
    case "keyboard":
      cover = <KeyboardCover />;
      break;
    case "badge":
      cover = <BadgeCover />;
      break;
    case "watermark":
      cover = <WatermarkCover />;
      break;
    case "guard":
      cover = <GuardCover />;
      break;
    case "caption":
      cover = <CaptionCover />;
      break;
  }

  if (!cover) return null;
  return <div className="cover-frame">{cover}</div>;
}
