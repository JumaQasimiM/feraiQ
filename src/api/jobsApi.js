import { fetchData } from "./api";

export const getJobs = () => {
  let url = "/db.json";
  return fetchData(url);
};

// Read jobs from the local JSON file in /public/db.json
export const getJobBySlug = async (slug) => {
  const data = await fetchData("/db.json");
  return data.jobs.find((job) => job.slug === slug) ?? null;
};

/**
 *  when using a real API endpoint
 * 
 * export const getJobBySlug = async (slug) => {
  const jobs = await fetchData(`/jobs?slug=${slug}`);
  return jobs[0] || null;
 };

 * 
*/
