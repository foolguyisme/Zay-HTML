"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command="ls ./projects/" title="專案火力展示" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeInSection key={project.id} delay={i * 0.08}>
              <ProjectCard
                project={project}
                onClick={() => setSelected(project)}
              />
            </FadeInSection>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
