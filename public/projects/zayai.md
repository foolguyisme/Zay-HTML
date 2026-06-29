# ZAYAI_Connecting_dimensions

> 全模態 AI 桌面伴侶 — 離線隱私・二次元靈魂

## 概述

ZAYAI 是一套本地端運行的 AI 桌面伴侶系統，整合語音辨識、文字轉語音 (TTS) 與大語言模型推論，打造具備個性的二次元互動體驗。

## 核心功能

- **語音互動**：Faster-Whisper 即時語音辨識 + pyttsx3 本地 TTS
- **本地推論**：透過 Ollama 串接微調後的 LLaMA 模型，資料不出本機
- **VRAM 防護**：動態監控顯存用量，防止模型推論時 OOM
- **對話記憶**：多輪上下文管理，維持角色一致性
- **FastAPI 後端**：RESTful API 架構，前後端分離

## 技術棧

| 層級 | 技術 |
|------|------|
| 模型訓練 | LLaMA-Factory |
| 推論引擎 | Ollama |
| 語音辨識 | Faster-Whisper |
| 後端框架 | FastAPI |
| 語音合成 | pyttsx3 |

## 亮點

- 完全離線運行，保護使用者隱私
- 支援角色人設微調 (SFT)
- 模組化架構，易於擴充新功能模組
