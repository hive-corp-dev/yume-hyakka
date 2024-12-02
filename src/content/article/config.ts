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
          "ocean",
          "many-people",
          "accident",
          "anxiety",
          "tension",
          "mental-stress",
          "elevator",
          "self-improvement",
        ])
      ),
      publishedAt: z.date(),
      // image: z.string().optional(),
      image: image(),
    }),
});

export const collections = {
  article: articleCollection,
};
