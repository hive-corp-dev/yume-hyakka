# タグ管理指示書

## 概要
記事のタグスラッグを管理するためのワークフロー指示書です。

## 指示内容

### 1. 入力
配列形式でタグスラッグを受け取ります。
例: `["fireworks", "summer", "happiness", "celebration", "night", "excitement"]`

### 2. 実行手順

#### Step 1: config.tsでタグスラッグの存在確認
- `/src/content/config.ts`ファイルを確認
- z.enum配列（lines 13-252）内に対象のタグスラッグが存在するかチェック
- 存在する場合は無視
- 存在しない場合は次のステップへ

#### Step 2: 新しいタグの追加
**config.tsへの追加:**
- z.enum配列に新しいタグスラッグを追加
- アルファベット順で適切な位置に挿入

**articleTags.jsへの追加:**
- `/src/data/articleTags.js`に新しいタグオブジェクトを追加
- 必要な形式:
  ```javascript
  {
    slug: "tag-slug",
    label: "日本語ラベル",
    kana: "ひらがなのよみがな",
  }
  ```

### 3. 注意事項
- タグスラッグは英語のケバブケース（例: "summer-festival"）
- ラベルは日本語
- カナは全てひらがな
- 既存のタグと重複しないように注意
- 両ファイルの更新が必要

### 4. 実行例
入力: `["celebration", "excitement"]`

1. config.tsをチェック
   - "celebration"が存在しない → 追加対象
   - "excitement"が存在しない → 追加対象

2. config.tsのz.enum配列に追加:
   ```typescript
   "celebration",
   "excitement",
   ```

3. articleTags.jsに追加:
   ```javascript
   {
     slug: "celebration",
     label: "祝祭",
     kana: "しゅくさい",
   },
   {
     slug: "excitement",
     label: "興奮",
     kana: "こうふん",
   },
   ```