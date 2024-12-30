export const getColumnPathBySlug = (slug) => {
  return `/column/${slug}`;
};

export const getSortedColumns = (columns) => {
  return columns.sort((a, b) => {
    const aDate = new Date(a.data.publishedAt);
    const bDate = new Date(b.data.publishedAt);
    return bDate - aDate;
  });
};
