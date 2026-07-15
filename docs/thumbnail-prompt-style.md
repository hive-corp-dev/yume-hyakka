# Thumbnail Prompt Style Guide

このプロジェクトの夢占い記事サムネイルを生成するときは、毎回このファイルを参照する。

## 基本方針

- 既存プロンプトの主軸は `realistic photograph`、`realistic artistic photograph`、`natural lighting`、`high quality photo`、`--style raw` に近い質感。
- ただし、すべてをリアル写真に固定しない。題材によっては、幻想的・象徴的・イラスト寄りの表現を使ってよい。
- 判断基準は「記事テーマが自然に伝わるか」「既存サムネイル一覧に混ざって違和感が少ないか」「夢占いメディアとして品があるか」。
- 日常物・場所・食べ物・一般的な動物はリアル寄りを基本にする。
- 龍、鳳凰、宝石、月、星、神社、夢そのものの象徴などは、`realistic artistic photograph`、`mystical atmosphere`、`ethereal lighting` 程度の演出を許容する。
- 夢占いらしい象徴性は入れるが、演出を盛る場合も「安っぽいファンタジー背景」や「ゲーム・アニメ調」に寄せすぎない。
- ただの素材写真のように味気ない画像も避ける。日常的な題材でも、光、構図、奥行き、色温度、余韻によって「夢を扱うサイトらしい美しさ」を出す。

## 必須の画作り

- アスペクト比は記事表示に合わせて横長 16:9 を前提にする。
- 主題は一目でわかるように中央または三分割位置に置く。
- 余白を少し残し、トリミングされても主題が崩れない構図にする。
- 光は自然光、窓明かり、朝夕の柔らかい光、室内の控えめな照明を基本にする。象徴性が必要な題材では、控えめな神秘的光を足してよい。
- 色は自然な範囲で、少しだけ温かみや透明感を足す。
- 人物を出す場合は顔を強く主張させず、後ろ姿・手元・シルエットなど匿名性を保つ。
- 画として弱い場合は、反射、逆光、薄い霧、柔らかなカーテン、自然な光の筋などで雰囲気を補う。ただし魔法エフェクトを主役にしない。

## 避ける表現

- 題材に必要ないアニメ調、ゲーム背景調、絵本調、過度なデジタルペイント。
- 題材に必要ない魔法陣、星屑、過剰な発光、浮遊物、非現実的な巨大月、異世界ポータル。
- 露骨なホラー、恐怖を煽る演出、血、暴力、危険を強調する構図。
- 文字、看板、ロゴ、透かし、読めるノート文字。
- 彩度が高すぎるネオンカラー、派手なレンズフレア。
- 主題と関係ない装飾を増やすこと。

## 表現レンジの選び方

### A. リアル写真寄り

日常的な物、場所、食べ物、人間関係、一般的な動物、自然風景はこのレンジを優先する。

例: 学校、駅、財布、ラーメン、川、バス、同級生、パン、スマホ、部屋。

ただし、A でも「記録写真」ではなく、夢占いサイトのサムネイルとして成立する美しさを持たせる。必要に応じて `dreamlike but realistic`, `poetic atmosphere`, `soft cinematic light` を加えてよい。

```text
Use case: photorealistic-natural
Asset type: 16:9 thumbnail for a Japanese dream-interpretation article
Primary request: A realistic photograph of <subject>, symbolizing <main meanings>.
Scene/backdrop: <natural or everyday setting related to the topic>.
Subject: <clear main subject>, easy to recognize at thumbnail size.
Mood: calm, introspective, gentle, suitable for a dream interpretation media site.
Lighting: natural soft light, subtle shadows, soft cinematic light when it improves the mood.
Style: realistic photograph, editorial lifestyle / nature photo, high quality, dreamlike but grounded.
Composition: 16:9, clean focal point, moderate depth of field, no text, no letters, no watermark.
Avoid: bland stock-photo look, excessive glow, surreal fantasy elements, horror, violence, fear-bait, unreadable clutter.
```

### B. リアルアート写真寄り

宝石、月、星、神社、神秘的な動物、象徴性が強い自然物などはこのレンジを使ってよい。

例: アメジスト、エメラルド、満月、星座、鳥居、白蛇、狐、蝶、鳳凰。

```text
Use case: photorealistic-natural
Asset type: 16:9 thumbnail for a Japanese dream-interpretation article
Primary request: A realistic artistic photograph of <subject>, symbolizing <main meanings>.
Scene/backdrop: <natural or culturally fitting setting>.
Subject: <clear main subject>, elegant and recognizable.
Mood: calm, mysterious, spiritual, refined, suitable for a dream interpretation media site.
Lighting: natural or ethereal lighting, restrained mystical atmosphere, not flashy.
Style: realistic artistic photograph, high quality, cinematic but grounded.
Composition: 16:9, clean focal point, no text, no letters, no watermark.
Avoid: cheap fantasy art, anime style, game background, excessive particles, horror, violence, fear-bait.
```

### C. 幻想・イラスト寄り

現実写真では表現しにくい架空・神話・強い夢象徴の題材だけに使う。使う場合も、既存サイトに混ざるように落ち着いた質感にする。

例: 龍、鳳凰、夢の中の抽象的な場面、現実に存在しない象徴表現。

```text
Use case: stylized-concept
Asset type: 16:9 thumbnail for a Japanese dream-interpretation article
Primary request: A refined symbolic illustration / realistic fantasy artwork of <subject>, symbolizing <main meanings>.
Scene/backdrop: <simple symbolic setting>, restrained and elegant.
Subject: <clear main subject>, not overloaded with decoration.
Mood: calm, spiritual, dignified, suitable for a Japanese dream interpretation media site.
Lighting: soft cinematic lighting, controlled glow only where it supports the subject.
Style: realistic fantasy art or painterly illustration, mature editorial quality, not anime, not game UI, not children-book style.
Composition: 16:9, clean focal point, no text, no letters, no watermark.
Avoid: excessive magical particles, neon colors, cheap fantasy, horror, violence, fear-bait.
```

## 旧テンプレートとの違い

- 「リアル写真だけ」を正解にしない。
- 題材ごとに A / B / C のレンジを選ぶ。
- 迷ったら A から始めるが、神秘性がテーマ理解に必要なら B、現実写真で不自然なら C を選ぶ。

## トピック別の寄せ方

- 動物: 基本は自然環境の中のリアルな写真。白蛇・狐・蝶などスピリチュアル文脈が強い場合は B。
- 食べ物: 実写の料理写真。湯気や質感は自然に、過度に光らせない。
- 場所: 実在しそうな風景・室内・街角。非現実的なポータルや異世界感は避ける。
- 人間関係: 顔を出しすぎず、手元、後ろ姿、空席、距離感で表現する。
- 宝石・天体・神社仏閣: リアル写真に神秘的な光を少し足す。B が合いやすい。
- 神話・架空存在: C を使ってよい。ただし落ち着いた大人向けの質感にする。
- 感情・抽象概念: まず具体物や自然風景で比喩する。必要なら B または C で象徴性を補う。

## 生成前チェック

1. 題材に対して A / B / C のどれが自然か選んだか。
2. 既存サムネイルのトーンから外れていないか。
3. 夢占いらしい象徴性が、題材に対して過不足なく入っているか。
4. 記事テーマがサムネイルで一目で伝わるか。
5. 文字・ロゴ・読める記号が出にくい指示になっているか。
6. ただの素材写真のように弱すぎないか。夢占いサイトとして見たくなる余韻があるか。

## 生成後チェック

- 選んだレンジと出力が合っているか確認する。
- A の題材なのにイラスト感が強い場合は採用しない。
- B / C の題材でも、星屑・魔法・過剰な発光が主題より目立つ場合は採用しない。
- 記事一覧に混ざって違和感が少ないものだけを記事フォルダへコピーする。
- 採用した画像だけを `src/content/article/images/<slug>/thumb.png` に配置する。
