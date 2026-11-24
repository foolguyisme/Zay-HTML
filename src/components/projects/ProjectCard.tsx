"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

// 所有卡片固定同樣的結構與高度：封面 16:9、標題 2 行、摘要 4 行、標籤 1 排。
// 超出的文字以省略號截斷，完整內容與核心亮點在點開後的詳細視窗中顯示。
export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex={0}
      className="glow-hover group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-border-dim bg-card"
    >
      <ProjectCover
        type={project.coverType}
        youtubeEmbedUrl={project.youtubeEmbedUrl}
        coverImage={project.coverImage}
        coverImageAlt={`${project.title} preview`}
      />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 min-h-[2.5rem] font-mono text-sm font-semibold leading-5 text-foreground transition-colors group-hover:text-cyber sm:text-base sm:leading-5">
            {project.title}
          </h3>
          {project.featured && (
            <span className="shrink-0 rounded bg-cyber/10 px-1.5 py-0.5 font-mono text-[9px] text-cyber">
              MAIN
            </span>
          )}
        </div>
        <p className="mb-3 line-clamp-4 min-h-[5.25rem] text-xs leading-[1.3125rem] text-neutral-500">
          {project.summary}
        </p>
        <div className="mt-auto flex h-[1.625rem] flex-wrap gap-1.5 overflow-hidden">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="max-w-[11rem] truncate rounded border border-border-dim px-1.5 py-0.5 font-mono text-[9px] text-neutral-500 transition-colors group-hover:border-cyber/20 group-hover:text-cyber/70"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="py-0.5 font-mono text-[9px] text-neutral-600">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
