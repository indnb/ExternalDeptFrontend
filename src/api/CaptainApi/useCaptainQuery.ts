import { useQuery } from "@tanstack/react-query";
import { axiosGetAuth } from "../axiosGet";
import { axiosDeleteAuth } from "../axiosDelete";

export const useGetCaptainApiQuery = () => {
  return useQuery({
    queryKey: ["get_captain"],
    queryFn: async () => await axiosGetAuth({ path: "/hackathon_2025/team_captain/all" }),
  });
};

export const useDeleteCaptainApiQuery = () => {
  return useQuery({
    queryKey: ["delete_captain"],
    queryFn: async () => await axiosDeleteAuth({ path: "/hackathon_2025/team_captain/all" }),
  });
};

