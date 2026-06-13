import { fetchData } from "./api";

export const getNews = () => {
  return fetchData("/db.json");
};

// Read news from the local JSON file in /public/db.json
export const getNewsBySlug = async (slug) => {
  const data = await fetchData("/db.json");
  return data.news.find((n) => n.slug === slug) ?? null;
};

/**
 *  when using a real API endpoint
 * 
 * export const getNewsBySlug = async (slug) => {
  const news = await fetchData(`/news?slug=${slug}`);
  return news[0] || null;
 };

 * 
*/
