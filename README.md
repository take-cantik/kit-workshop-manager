# kit-workshop-manager

某工業大学のものつくり工房の鍵の管理をするためのbot

### 使用技術
LINE Bot + TypeScript + Firebase Functions + Firebase Firestore

## 初期設定

1. .firebaserc ファイルを設定
2. functions/.env.expample をもとに.env ファイルを作成&設定

## リッチメニューの初期設定

```bash
$ yarn init:richMenu
```

## デプロイ

実行環境

```bash
node 16
```

コマンド

```bash
$ cd functions

$ firebase deploy
```
