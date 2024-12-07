// 1. `astro:content`からユーティリティをインポート
import { z, defineCollection } from "astro:content";
import { articleSchema } from "../../articleSchema";
// 2. コレクションを定義
const articleCollection = defineCollection({
  /* ... */
  type: "content",
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      description: z.string(),
      tags: z.array(
        z.enum([
          "snake",
          "white-snake",
          "house",
          "maze",
          "indecision",
          "self-discovery",
          "life-choices",
          "problem-solving",
          "love",
          "emotion",
          "subconscious",
          "ex-partner",
          "future",
          "relationships",
          "left",
          "being-late",
          "upset",
          "eagle",
          "hawk",
          "bull",
          "black",
          "white",
          "holiness",
          "sea",
          "many-people",
          "accident",
          "anxiety",
          "tension",
          "mental-stress",
          "elevator",
          "self-improvement",
          "chocolate",
          "affection",
          "courage",
          "family-love",
          "stack-of-cash",
          "money",
          "wealth",
          "success",
          "sunflower",
          "hope",
          "growth",
          "self-actualization",
        ])
      ),
      publishedAt: z.date(),
      thumbnail: image().refine((img) => img.width >= 1080, {
        message: "カバー画像は幅1080ピクセル以上でなければなりません！",
      }),
    }),
});

export const collections = {
  article: articleCollection,
};
