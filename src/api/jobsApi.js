import { fetchData } from "./api";

export const getJobs = () => {
  return fetchData("/jobs");
};

export const getJobBySlug = async (slug) => {
  const jobs = await fetchData(`/jobs?slug=${slug}`);
  return jobs[0] || null;
};
