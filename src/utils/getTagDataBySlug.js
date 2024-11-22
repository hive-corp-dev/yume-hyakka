import { articleTags } from "../data/article-tags";

export const getTagDataBySlug = slug => {
  const tagData = articleTags.find(tag => tag.slug === slug);

  return tagData;
};
