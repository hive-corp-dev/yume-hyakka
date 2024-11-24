import { articleTags } from "../data/article-tags";

export const getTagDataBySlug = (slug) => {
  const tagData = articleTags.find((tag) => tag.slug === slug);
  return tagData;
};

export const getTagListBySlugs = (slugs) => {
  const tagList = articleTags.filter((tag) => slugs.includes(tag.slug));
  return tagList;
};

export const sortTagsByKana = (tags) => {
  return tags.sort((a, b) => a.kana.localeCompare(b.kana));
};
