
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ICaptain } from "@/Molecules/CaptainRow";
import { axiosPut } from "../axiosPut";
import { axiosDeleteAuth } from "../axiosDelete";

export const useEditCaptainMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ICaptain) => {
      return axiosPut<ICaptain>({ path: "/hackathon_2025/team_captain/by_data", body });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get_captain'] });
    }
  });
};

export const useDeleteCaptainMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => axiosDeleteAuth({ path: `/hackathon_2025/team_captain/by_team_id/${id}` }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get_captain'] });
    },
  });
};


