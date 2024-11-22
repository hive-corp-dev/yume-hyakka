// 1. `astro:content`からユーティリティをインポート
import { z, defineCollection } from "astro:content";
import { articleSchema } from "../../articleSchema";
// 2. コレクションを定義
const articleCollection = defineCollection({
  /* ... */
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.enum(["snake", "white-snake"])),
    publishedAt: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  article: articleCollection,
};
