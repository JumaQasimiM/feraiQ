import { useQuery } from "@tanstack/react-query";
import { getJobs, getJobBySlug } from "../api/jobsApi";

// filter jobType base [full or part time]
export const useJobs = (jobType) => {
  return useQuery({
    queryKey: ["jobs", jobType],

    queryFn: async () => {
      const data = await getJobs("/db.json");

      if (jobType === "all") return data;

      return {
        ...data,
        jobs: data.jobs.filter((job) => job.type === jobType),
      };
    },
  });
};

// export const useJobs = (jobType, page) => {
//   return useQuery({
//     queryKey: ["jobs", jobType, page],
//     queryFn: ({ queryKey }) => {
//       const [, jobType, page] = queryKey;
//       let url = `http://localhost:5000/jobs?_page=${page}&_limit=6`;
//       if (fitler != "all") {
//         url += `&type=${jobType}`;
//       }
//       return getJobs(url);
//     },
//   });
// };
export const useJob = (slug) => {
  return useQuery({
    queryKey: ["job", slug],
    queryFn: () => getJobBySlug(slug),
    enabled: !!slug,
  });
};
