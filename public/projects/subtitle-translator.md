# Japanese → Chinese Subtitle Translator

## 概述

端到端自動化 AI 雙語字幕翻譯系統，從音訊輸入到 SRT 字幕產出全自動化。

## 資料流

```
Audio → Whisper (語音辨識) → GPT-4 (上下文翻譯) → SRT 字幕
```

## 核心功能

- OpenAI Whisper API 語音轉文字
- GPT-4 上下文感知翻譯，保留語氣與專有名詞
- 防節流 (Rate Limiting) 機制
- 模組化 API 設計，易於替換後端

## 技術棧

Python · OpenAI API (Whisper/GPT-4) · Subtitle Processing
