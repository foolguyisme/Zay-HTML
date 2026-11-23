# 聲譯：本機即時字幕

## 概述

Windows 桌面即時字幕與翻譯工具。可選三種字幕輸入方式，翻譯結果顯示在可拖曳的本機置頂浮窗。語音辨識與翻譯都在本機執行，**字幕文字不會送到雲端翻譯服務**；首次安裝後可離線使用。

## 資料流

```
分頁音訊 / 系統音訊 → faster-whisper 辨識 ┐
YouTube CC 字幕文字 ─────────────────────┼→ Ollama 本機翻譯 → 桌面置頂浮窗
影片畫面 → RapidOCR 讀字幕區 ─────────────┘
```

## 三種輸入方式

1. **純音訊 · 語音辨識**：擷取鎖定的瀏覽器分頁、虛擬音訊線上的單一程式，或整個播放裝置；戴耳機也能用，不需麥克風
2. **YouTube CC 字幕文字**：直接讀取播放器目前顯示的 CC，不呼叫 YouTube Captions API
3. **影片畫面 OCR**：每秒擷取一次畫面下方字幕，適用燒錄在影片上的字幕

## 核心功能

- 語音辨識：Whisper Base / Small / Medium，或歌詞專用 HeartTranscriptor 0.8B（首次選用時於本機轉成 CTranslate2 INT8/FP16）
- 翻譯：預設 PLaMo 3 Translate 0.8B（約 573 MB），可切換 2B 或 Qwen2.5 3B；切換時卸載未選模型以節省顯示記憶體
- **音樂／歌詞連貫模式**：以前四句原文與譯文作為翻譯上下文，累積約 5 秒片段再辨識，換取更完整的詞句脈絡
- 自動偵測 NVIDIA GPU，沒有時切換 CPU；OCR 走 ONNX Runtime CPU，避免與 4 GB 顯示卡上的模型搶記憶體
- Chrome / Edge 擴充功能負責分頁鎖定與擷取，控制台可一鍵下載擴充功能

## 技術棧

Python · FastAPI · Uvicorn · faster-whisper · CTranslate2 · Ollama · RapidOCR · ONNX Runtime · soundcard · Chrome Extension (MV3)
