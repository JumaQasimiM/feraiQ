import { useQuery } from "@tanstack/react-query";
import { getNews, getNewsBySlug } from "../api/newsApi";

export const useNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });
};

export const useOneNews = (slug) => {
  return useQuery({
    queryKey: ["oneNews", slug],
    queryFn: () => getNewsBySlug(slug),
    enabled: !!slug,
  });
};
