import type { ProjectHighlight } from "@/data/zayaiHighlights";
import { zayaiHighlights } from "@/data/zayaiHighlights";
import { motivationsById } from "@/data/motivations";

export type CoverType =
  | "youtube"
  | "terminal"
  | "chart"
  | "pipeline"
  | "ascii"
  | "keyboard"
  | "badge"
  | "watermark"
  | "guard"
  | "caption"
  | "sentinel";

export interface Project {
  id: string;
  title: string;
  tags: string[];
  summary: string;
  coverType: CoverType;
  readmePath: string;
  youtubeEmbedUrl?: string;
  coverImage?: string;
  featured?: boolean;
  highlightItems?: ProjectHighlight[];
  motivation?: string;
}

const baseProjects: Omit<Project, "motivation">[] = [
  {
    id: "zayai",
    title: "ZAYAI_Connecting_dimensions",
    tags: [
      "Python",
      "Ollama",
      "LLaMA-Factory",
      "Faster-Whisper",
      "FastAPI",
      "pyttsx3",
    ],
    summary:
      "離線隱私・全模態 AI 桌面伴侶 — 從捏角、螢幕互動到動態立繪，打造專屬二次元靈魂。",
    coverType: "youtube",
    readmePath: "/projects/zayai.md",
    coverImage: "/image.png",
    featured: true,
    highlightItems: zayaiHighlights,
  },
  {
    id: "ai-coder",
    title: "AI Coder Project",
    tags: ["Python", "FastAPI", "Docker", "LLaMA-Factory", "Qwen2.5-Coder"],
    summary:
      "完整的本地端程式碼生成平台。整合 Web UI、Docker 隔離沙盒執行驗證，並支援微調訓練流程 (SFT)。",
    coverType: "terminal",
    readmePath: "/projects/ai-coder.md",
    featured: true,
  },
  {
    id: "wm3-watermark",
    title: "wm3 盲浮水印外流溯源系統",
    tags: [
      "Python",
      "NumPy",
      "Numba / CuPy",
      "OpenCV",
      "Reed-Solomon",
      "FastAPI",
      "Vue 3",
    ],
    summary:
      "把每位使用者的識別碼藏進圖片亮度，外流後即使被壓縮、截圖、縮放或裁切仍能指認來源；證據不足寧可回報無法溯源也不誤指認。有原圖時 31 種攻擊成功率 99%，寫入速度較 V2 快 60 倍以上。",
    coverType: "watermark",
    readmePath: "/projects/wm3-watermark.md",
  },
  {
    id: "ai-guard",
    title: "AI Guard 企業生成式 AI 資料防護",
    tags: ["JavaScript", "Chrome Extension (MV3)", "Node.js", "DLP", "Privacy"],
    summary:
      "在員工把資料送進 ChatGPT、Claude、Gemini、Copilot 之前，於瀏覽器本機偵測 Email、卡號、API 金鑰與企業關鍵字，依政策提醒、遮罩或阻擋；事件只留中繼資料，不保存提示原文。",
    coverType: "guard",
    readmePath: "/projects/ai-guard.md",
  },
  {
    id: "laptop-sentinel",
    title: "LaptopSentinel 個人筆電入侵監測系統",
    tags: ["C#", ".NET 10", "WPF", "SQLite", "Windows Defender", "xUnit"],
    summary:
      "常駐托盤的本機入侵監測工具：整合 Defender 事件、TCP 連線與自動啟動項目，依證據關聯出警示並用白話說明下一步；離線運作、不自動刪檔或上傳資料，精簡版僅 4.4 MiB。",
    coverType: "sentinel",
    readmePath: "/projects/laptop-sentinel.md",
  },
  {
    id: "shengyi-captions",
    title: "聲譯：本機即時字幕",
    tags: [
      "Python",
      "faster-whisper",
      "Ollama",
      "RapidOCR",
      "FastAPI",
      "Chrome Extension",
    ],
    summary:
      "Windows 桌面即時字幕翻譯：分頁音訊、YouTube CC、畫面 OCR 三種輸入，本機 Whisper 辨識加 Ollama 翻譯，結果顯示在可拖曳的置頂浮窗，字幕不送雲端。",
    coverType: "caption",
    readmePath: "/projects/shengyi-captions.md",
  },
  {
    id: "finance-ts",
    title: "金融時間序列特徵工程與預測系統",
    tags: ["Python", "Pandas", "yfinance", "Parquet", "Optuna", "Scikit-learn"],
    summary:
      "建構完整的機器學習 Pipeline，處理百萬級別 OHLCV 數據。實作特徵工程（Log Return、Vol 等），並導入 Walk-Forward 驗證優化模型。",
    coverType: "chart",
    readmePath: "/projects/finance-ts.md",
  },
  {
    id: "subtitle-translator",
    title: "Japanese → Chinese Subtitle Translator",
    tags: ["Python", "OpenAI API (Whisper/GPT-4)", "Subtitle Processing"],
    summary:
      "端到端自動化字幕產出系統。整合語音辨識與 GPT 上下文感知翻譯，具備防節流與 API 模組化設計。",
    coverType: "pipeline",
    readmePath: "/projects/subtitle-translator.md",
  },
  {
    id: "opencc",
    title: "OpenCC Subtitle Converter",
    tags: ["Python", "OpenCC", "CLI"],
    summary:
      "基於 OpenCC 引擎的高效能轉換工具，支援字幕與多種編碼文件批次處理，具備嚴謹的錯誤處理與 CLI 介面。",
    coverType: "ascii",
    readmePath: "/projects/opencc.md",
  },
  {
    id: "java-swing",
    title: "Java Swing Utilities",
    tags: ["Java 11+", "Swing", "Maven", "java.awt.Robot"],
    summary:
      "實作標準 Java GUI 設計模式，包含具備運算子優先級的計算機，與操作系統底層硬體事件的滑鼠自動化連點工具。",
    coverType: "keyboard",
    readmePath: "/projects/java-swing.md",
  },
];

export const projects: Project[] = baseProjects.map((p) => ({
  ...p,
  motivation: motivationsById[p.id],
}));
