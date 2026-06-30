import type { LucideIcon } from "lucide-react";
import { Briefcase, Building2, GraduationCap, Rocket } from "lucide-react";

export interface ExperienceItem {
  id: string;
  type: string;
  title: string;
  organization: string;
  description: string;
  icon: LucideIcon;
  accent: "cyber" | "terminal" | "dim";
}

export const experiences: ExperienceItem[] = [
  {
    id: "current",
    type: "現職",
    title: "QA 軟體工程師",
    organization: "一安智能股份有限公司",
    description: "專注網路與系統自動化",
    icon: Briefcase,
    accent: "cyber",
  },
  {
    id: "ai-program",
    type: "進修",
    title: "AI 產學計畫",
    organization: "成大 × 經濟部",
    description: "深化 LLM 與底層技術",
    icon: Rocket,
    accent: "terminal",
  },
  {
    id: "internship",
    type: "實習",
    title: "實習生",
    organization: "台灣人壽資訊開發科",
    description: "參與 APIM 與大語言模型應用",
    icon: Building2,
    accent: "dim",
  },
  {
    id: "ta",
    type: "學歷",
    title: "大數據分析課程助教 / 機器學習助教",
    organization: "中信金融管理學院",
    description: "帶領特徵工程實作",
    icon: GraduationCap,
    accent: "dim",
  },
];
