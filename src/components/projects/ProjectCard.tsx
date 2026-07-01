"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";
import { ProjectHighlights } from "./ProjectHighlights";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex={0}
      className="glow-hover group cursor-pointer overflow-hidden rounded-lg border border-border-dim bg-card"
    >
      <ProjectCover
        type={project.coverType}
        youtubeEmbedUrl={project.youtubeEmbedUrl}
        coverImage={project.coverImage}
        coverImageAlt={`${project.title} preview`}
      />
      <div className="p-4 sm:p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-mono text-sm font-semibold text-foreground transition-colors group-hover:text-cyber sm:text-base">
            {project.title}
          </h3>
          {project.featured && (
            <span className="shrink-0 rounded bg-cyber/10 px-1.5 py-0.5 font-mono text-[9px] text-cyber">
              MAIN
            </span>
          )}
        </div>
        <p className="mb-3 text-xs leading-relaxed text-neutral-500">
          {project.summary}
        </p>
        {project.highlightItems ? (
          <div className="mb-3">
            <ProjectHighlights
              highlights={project.highlightItems}
              compact
            />
          </div>
        ) : null}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded border border-border-dim px-1.5 py-0.5 font-mono text-[9px] text-neutral-500 transition-colors group-hover:border-cyber/20 group-hover:text-cyber/70"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-[9px] text-neutral-600">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
