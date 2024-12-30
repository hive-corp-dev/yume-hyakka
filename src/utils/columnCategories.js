import { columnCategories } from "@data/columnCategories";

// 単体のカテゴリースラッグから、単体のカテゴリーのデータを取得
export const getColumnCategoryDataBySlug = (slug) => {
  const categoryData = columnCategories.find((category) => category.slug === slug);
  return categoryData;
};

// categoryのURLを取得
export const getColumnCategoryUrl = (slug) => {
  return `/column/category/${slug}`;
};

// getStaticPathsに渡すためのパスを生成
export const columnCategoryPaths = columnCategories.map((category) => ({
  params: { category: category.slug },
}));
