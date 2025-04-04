import { useQuery } from "@tanstack/react-query";
import { axiosGet } from "./axiosGet";


export const useTeamApiQuery = () => {
  return useQuery({
    queryKey: ["team"],
    queryFn: async () => await axiosGet({ path: "/hackathon_2025/team/all" }),
  });
};

