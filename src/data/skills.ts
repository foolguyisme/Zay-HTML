export interface SkillCategory {
  id: string;
  title: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "程式與標記語言",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 70 },
      { name: "SQL", level: 85 },
      { name: "HTML", level: 80 },
      { name: "C++", level: 65 },
      { name: "Node.js", level: 70 },
      { name: "Java", level: 75 },
    ],
  },
  {
    id: "ai-data",
    title: "AI 與數據分析",
    skills: [
      { name: "Pandas", level: 88 },
      { name: "Ollama", level: 85 },
      { name: "Scikit-learn", level: 82 },
      { name: "Scapy", level: 70 },
    ],
  },
  {
    id: "dev-tools",
    title: "開發與網路工具",
    skills: [
      { name: "Git", level: 85 },
      { name: "Linux", level: 80 },
      { name: "API", level: 88 },
      { name: "Cursor", level: 90 },
      { name: "Gemini", level: 85 },
      { name: "Canva", level: 75 },
      { name: "Spreadsheets", level: 80 },
    ],
  },
];
