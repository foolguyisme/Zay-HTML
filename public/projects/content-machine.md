# ContentMachine 本地端電子小說生成工作流

## 概述

為了讓自己能在本地端產出電子小說而寫的系統。它以開源專案 [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)（MIT 授權）的短影片生成流程為起點，另外重新設計了一套 **v3 架構**：以 Clean Architecture 與 DDD 分層，把「專案、故事、角色與場景、分鏡」建成可驗證的資料模型與流程，原本的 MoneyPrinterTurbo 程式（legacy）則維持可執行、並行保留。

> 目前是 v3.0 Integration MVP：已完成到「分鏡規劃」，**Prompt Builder、Provider、Render 仍是 placeholder**，還不會實際產出圖片、影片、語音或字幕。

## 資料流（MVP 已串接的部分）

```
Project → Loader → Story → Reference Resolver → Director → Workflow
                                                              ↓
                        Prompt Builder · Provider · Render（規劃中）
```

## 分八個階段建構

1. **Foundation**：工程骨架、依賴方向與品質工具
2. **Domain Model**：不可變的領域模型（Story、Scene、Shot、Character、Camera 等）
3. **Project Workspace & Asset Management**：專案資料夾結構、資產管理、原子寫入與路徑安全
4. **Story Engine**：故事模型與序列化
5. **Story Schema & Project Loader**：`story.json` 格式與版本驗證、專案載入
6. **Asset Resolver & Reference Engine**：解析每個鏡頭引用的角色、場景與資產，並共用單一快取
7. **AI Capability Layer**：與供應商無關的能力層（請求、回應、重試、取消、進度、錯誤）
8. **Director Agent & Shot Planning Engine**：分析故事、規劃鏡頭、檢查一致性並排出時間軸

## 設計重點

- **依賴由外向內**：Domain 不依賴任何外層；Application 以 Protocol 描述外部需求；具體實作只在組合根注入
- **不可變資料**：Pydantic v2 凍結模型與 tuple 集合，Story 以 JSON 序列化、Workspace 設定用 YAML
- **確定性規劃**：Director 的分析與鏡頭規劃是確定性的，相同輸入得到相同結果
- **安全的檔案處理**：原子寫入、路徑限制與符號連結檢查
- **新舊並存、漸進遷移**：legacy 保持可執行，每次只遷移一個可驗證的能力切片，並以對照測試保證行為
- **不做假功能**：未接線的部分一律標示為 planned 或 placeholder

## 品質

- 約 650 個測試函式（pytest + coverage.py）
- Black、isort、Ruff 格式與靜態檢查
- GitHub Actions：Linux（Python 3.12／3.13）與 Windows（Python 3.12）

## 技術棧

Python 3.12 · uv · Pydantic v2 · PyYAML · FastAPI / Uvicorn（legacy API）· pytest · Ruff · GitHub Actions
