export const getArticlePathBySlug = (slug) => {
  return `/article/${slug}`;
};

export const getSortedPosts = (posts) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.publishedAt);
    const bDate = new Date(b.data.publishedAt);
    return bDate - aDate;
  });
};
