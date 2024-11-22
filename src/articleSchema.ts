import { z } from "astro:content";
import { articleTags } from "./data/article-tags";

// タグのスラッグを動的に取得
// const validTags = articleTags.map((tag) => tag.slug);
const tagSlugs = ["snake", "white-snake"] as const;

const generateArticleSchema = () => {
  return z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    // tags: z.array(
    //   z.string().refine((tag) => validTags.includes(tag), {
    //     message: "Invalid tag",
    //   })
    // ),
    tags: z.array(z.enum(tagSlugs)),
    publishedAt: z.date(),
    image: z.string().optional(),
  });
};

export const articleSchema = generateArticleSchema();
