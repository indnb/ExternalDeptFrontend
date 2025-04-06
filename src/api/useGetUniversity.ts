import { useQuery } from "@tanstack/react-query";
import { axiosGet } from "./axiosGet";


export const useUniversityApiQuery = () => {
  return useQuery({
    queryKey: ["hackathon"],
    queryFn: async () => await axiosGet({ path: "/hackathon_2025/university/all" }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity
  });
};

