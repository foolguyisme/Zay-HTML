import type { LucideIcon } from "lucide-react";
import { Brain, Server, Wrench } from "lucide-react";

export interface TechCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const techStackCategories: TechCategory[] = [
  {
    id: "ai-data",
    title: "AI & Data",
    icon: Brain,
    skills: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Ollama",
      "LLaMA-Factory",
      "Optuna",
    ],
  },
  {
    id: "backend-network",
    title: "Backend & Network",
    icon: Server,
    skills: ["FastAPI", "API Design", "WAN/LAN", "WebSocket"],
  },
  {
    id: "devops-tools",
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Docker", "Git", "Linux", "自動化測試"],
  },
];
