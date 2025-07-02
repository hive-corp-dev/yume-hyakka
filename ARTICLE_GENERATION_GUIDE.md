# 夢占い記事生成ガイド

**重要**: このガイドは操作手順を説明するものです。記事の構造や品質基準については `article-config.json` を参照してください。

## 記事生成の手順

### 1. 事前準備
1. **article-config.json の確認**
   - 記事構造、文字数、タグカテゴリを確認
   - 画像生成プロンプトをチェック

2. **既存記事の確認**
   - `src/content/article/` フォルダ内で重複チェック
   - 類似テーマの記事を参考にする

3. **タグの確認**
   - `src/data/articleTags.js` で既存タグを確認
   - 新規タグが必要な場合は後述の手順で追加

**新しいタグが必要な場合のみ実行してください：**

1. **`src/content/config.ts`にタグを追記**
   ```typescript
   z.enum([
     "existing-tag1",
     "existing-tag2", 
     "new-tag-slug", // 新しいタグを追加
   ])
   ```

2. **`src/data/articleTags.js`に追記**
   ```javascript
   {
     slug: "new-tag-slug",
     label: "新タグ名",
     kana: "しんたぐめい",
   }
   ```

### 3. 記事作成
1. **ファイル名決定**
   - `article-config.json` の `fileNaming` ルールに従う
   - 英語小文字、ハイフン区切り、30文字以内

2. **記事ファイル作成**
   - `src/content/article/{slug}.mdx` として作成
   - `article-config.json` の構造仕様に従う

3. **フロントマター設定**
   ```yaml
   ---
   isDraft: false
   title: "[article-config.json のタイトルパターンを使用]"
   description: "[160文字以内、キーワード含む]"
   tags: ["[config.json の tagCategories から選択]"]
   publishedAt: [日時]
   thumbnail: "./images/{slug}/thumb.png"
   ---
   ```

### 4. 品質チェック
`article-config.json` の `qualityChecklist` に従って確認：

#### 技術チェック
- [ ] フロントマター正確性
- [ ] ファイル名が命名規則準拠
- [ ] 画像ファイル存在
- [ ] タグがconfig.tsに存在
- [ ] 公開日時適切

#### コンテンツチェック
- [ ] 誤字脱字なし
- [ ] 見出し構造適切
- [ ] AdUnit配置3箇所
- [ ] 内容論理的
- [ ] SEO要素最適化

#### 品質チェック
- [ ] 独自性あり
- [ ] 読者に有益
- [ ] 適切文字数（2000-3000）
- [ ] ポジティブトーン
- [ ] 実践的アドバイス含む

## 重要な参照先

### 主要設定ファイル（優先順）
1. **`article-config.json`** - 記事構造、品質基準、画像生成プロンプト
2. **`src/content/config.ts`** - タグの技術的定義
3. **`src/data/articleTags.js`** - タグの表示用データ

### その他参照ファイル
- **既存記事**: `src/content/article/` - 参考例
- **記事アイデア**: `data/articleIdeas.json` - テーマ候補

## 記事生成時の注意点

1. **article-config.json を最優先**で参照する
2. **新タグは両ファイル**（config.ts + articleTags.js）に追加必須
3. **品質チェックリスト**は必ず全項目確認
4. **文体・トーン**は config.json の contentGuidelines に従う
5. **画像生成**は config.json の imageRequirements を参照

この手順に従うことで、一貫性のある高品質な夢占い記事を効率的に生成できます。