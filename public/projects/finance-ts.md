# 金融時間序列特徵工程與預測系統

## 概述

建構端到端的機器學習 Pipeline，處理百萬級別 OHLCV 金融數據，實作特徵工程與 Walk-Forward 驗證。

## 核心功能

- 百萬級 OHLCV 數據處理與 Parquet 儲存
- 特徵工程：Log Return、波動率 (Vol)、移動平均等
- Optuna 超參數優化
- Walk-Forward 驗證避免未來資訊洩漏

## 技術棧

Python · Pandas · yfinance · Parquet · Optuna · Scikit-learn
