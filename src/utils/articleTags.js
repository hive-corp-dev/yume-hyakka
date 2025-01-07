import { articleTags } from "../data/articleTags";

// 単体のタグスラッグから、単体のタグのデータを取得
export const getTagDataBySlug = (slug) => {
  const tagData = articleTags.find((tag) => tag.slug === slug);
  return tagData;
};

// 複数のタグスラッグから、複数のタグのデータを取得
export const getTagListBySlugs = (slugs) => {
  const tagList = articleTags.filter((tag) => slugs.includes(tag.slug));
  return tagList;
};

// タグをカナ順にソート
export const sortTagsByKana = (tags) => {
  return tags.sort((a, b) => a.kana.localeCompare(b.kana));
};

// タグのURLを取得
export const getTagUrl = (slug) => {
  return `/article/keyword/${slug}`;
};

// 記事が1つ以上あるタグのみを取得
export const getTagsWithArticles = (articles) => {
  const filteredTags = articleTags.filter((tag) => {
    const tagArticles = articles.filter((article) => article.data.tags.includes(tag.slug));
    return tagArticles.length > 0;
  });

  return filteredTags;
};

// getStaticPathsに渡すためのパスを生成
export const tagPaths = articleTags.map((tag) => ({
  params: { keyword: tag.slug },
}));

// キーワードの最初の文字でフィルタリング
export const filterByKanaInitials = (tags, variants) => {
  return tags.filter((tag) => variants.some((variant) => tag.kana.startsWith(variant)));
};
