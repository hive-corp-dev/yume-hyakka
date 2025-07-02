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

export const getRelatedArticles = (currentArticle, allArticles, limit = 6) => {
  if (!currentArticle || !allArticles) return [];
  
  const currentTags = currentArticle.data.tags || [];
  
  // 現在の記事を除外
  const otherArticles = allArticles.filter(article => 
    article.slug !== currentArticle.slug && article.data.isDraft === false
  );
  
  // 各記事に対して関連度スコアを計算
  const articlesWithScore = otherArticles.map(article => {
    const articleTags = article.data.tags || [];
    
    // 共通タグの数を計算
    const commonTags = currentTags.filter(tag => articleTags.includes(tag));
    const score = commonTags.length;
    
    return {
      article,
      score,
      commonTags
    };
  });
  
  // スコアでソートし、同じスコアの場合は公開日順
  const sortedArticles = articlesWithScore
    .filter(item => item.score > 0) // 関連タグがある記事のみ
    .sort((a, b) => {
      if (a.score !== b.score) {
        return b.score - a.score; // スコア降順
      }
      // スコアが同じ場合は公開日降順
      const aDate = new Date(a.article.data.publishedAt);
      const bDate = new Date(b.article.data.publishedAt);
      return bDate - aDate;
    });
  
  // 関連記事が見つからない場合は、最新記事を返す
  if (sortedArticles.length === 0) {
    const latestArticles = getSortedPosts(otherArticles).slice(0, limit);
    return latestArticles.map(article => ({
      article,
      score: 0,
      commonTags: []
    }));
  }
  
  return sortedArticles.slice(0, limit);
};
