import { useFetch } from "./useFetch";

/**
 * Fetch single data from API:
 *
 * Supports different resource types like:
 * 1. Job
 * 2. Blog
 * 3. Service
 */
export const useFetchSingleData = (endpoint, slug) => {
  const result = useFetch(`http://localhost:5000/${endpoint}?slug=${slug}`);
  return {
    ...result,
    data: result.data?.[0] || null,
  };
};
