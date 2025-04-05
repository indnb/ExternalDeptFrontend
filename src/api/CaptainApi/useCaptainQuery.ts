import { useQuery } from "@tanstack/react-query";
import { axiosGetAuth } from "../axiosGet";

export const useGetCaptainApiQuery = () => {
  return useQuery({
    queryKey: ["get_captain"],
    queryFn: async () => await axiosGetAuth({ path: "/hackathon_2025/team_captain/all" }),
  });
};

