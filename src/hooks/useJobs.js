import { useQuery } from "@tanstack/react-query";
import { getJobs, getJobBySlug } from "../api/jobsApi";
export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });
};

export const useJob = (slug) => {
  return useQuery({
    queryKey: ["job", slug],
    queryFn: () => getJobBySlug(slug),
    enabled: !!slug,
  });
};
