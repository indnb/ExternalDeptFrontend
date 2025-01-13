import { useQuery } from "@tanstack/react-query";
import { axiosGet } from "../axiosGet";


export const useTemplateApiQuery = () => {
  return useQuery({
    queryKey: ["template"],
    queryFn: async () => await axiosGet({path:"/path"}),
  });
};
