"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { ProjectCover } from "./ProjectCover";
import { ProjectHighlights } from "./ProjectHighlights";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!project) return;
    setLoading(true);
    fetch(project.readmePath)
      .then((res) => res.text())
      .then(setMarkdown)
      .catch(() => setMarkdown("# Error\n\nFailed to load project documentation."))
      .finally(() => setLoading(false));
  }, [project]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-cyber/30 bg-[#0a0a0a] glow-border-strong"
          >
            <div className="flex items-center justify-between border-b border-border-dim bg-[#111] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-neutral-400">
                  {project.id}.md
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded p-1 text-neutral-400 transition-colors hover:bg-cyber/10 hover:text-cyber"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto">
              <ProjectCover
                type={project.coverType}
                youtubeEmbedUrl={project.youtubeEmbedUrl}
                coverImage={project.coverImage}
                coverImageAlt={`${project.title} preview`}
              />
              <div className="p-6">
                <h3 className="mb-2 font-mono text-xl font-bold text-cyber glow-text">
                  {project.title}
                </h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-cyber/20 bg-cyber/5 px-2 py-0.5 font-mono text-[10px] text-cyber/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-neutral-400">{project.summary}</p>
                {project.highlightItems && (
                  <div className="mb-6">
                    <p className="mb-3 font-mono text-xs text-cyber">
                      // core_highlights
                    </p>
                    <ProjectHighlights highlights={project.highlightItems} />
                  </div>
                )}
                <div className="border-t border-border-dim pt-4">
                  {loading ? (
                    <div className="flex items-center gap-2 font-mono text-sm text-neutral-500">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading README...
                    </div>
                  ) : (
                    <MarkdownRenderer content={markdown} />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
