export type CoverType =
  | "youtube"
  | "terminal"
  | "chart"
  | "pipeline"
  | "ascii"
  | "keyboard"
  | "badge";

export interface Project {
  id: string;
  title: string;
  tags: string[];
  summary: string;
  coverType: CoverType;
  readmePath: string;
  youtubeEmbedUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
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
      "離線隱私・二次元 AI 桌面伴侶。串接語音辨識、TTS 與本地端大模型推論，並實作 VRAM 防護與對話記憶機制。",
    coverType: "youtube",
    readmePath: "/projects/zayai.md",
    youtubeEmbedUrl: "",
    featured: true,
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
  {
    id: "kaggle",
    title: "Kaggle 數據科學競賽成就",
    tags: ["Machine Learning", "Feature Engineering", "Data Cleaning"],
    summary:
      "Spaceship Titanic Top 7%、Titanic Top 18%、House Prices Top 31%。展現扎實的數據清理與底層特徵工程實戰力。",
    coverType: "badge",
    readmePath: "/projects/kaggle.md",
  },
];
