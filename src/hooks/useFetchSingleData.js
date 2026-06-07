import { useFetch } from "./useFetch";

/**
 *  fetch single:
 *      1.job
 *      2.blog
 *      3.service
 *
 */
export const useFetchSingleData = (endpoint, slug) => {
  const result = useFetch(`http://localhost:5000/${endpoint}?slug=${slug}`);
  return {
    ...result,
    data: result.data?.[0] || null,
  };
};
