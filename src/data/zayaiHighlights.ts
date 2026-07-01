import type { LucideIcon } from "lucide-react";
import { Drama, Eye, Home, Palette } from "lucide-react";

export interface ProjectHighlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const zayaiHighlights: ProjectHighlight[] = [
  {
    title: "極致捏角",
    description: "從內在個性到外觀立繪（如黑長直），完全由您定義。",
    icon: Palette,
  },
  {
    title: "全能互動",
    description: "不僅支援語音與文字交流，更能「看懂您的螢幕」給予專屬回饋。",
    icon: Eye,
  },
  {
    title: "動態反饋",
    description: "立繪表情會根據聊天語境即時變化，使其更加生動。",
    icon: Drama,
  },
  {
    title: "專屬大廳",
    description: "隨時回到首頁，輕鬆回顧您創造的所有 AI 角色。",
    icon: Home,
  },
];
