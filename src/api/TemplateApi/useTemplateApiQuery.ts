import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTempalte = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_KEY}`);
  return response.data;
};

export const useTemplateApiQuery = () => {
  return useQuery({
    queryKey: ["template"],
    queryFn: async () => await useTempalte(),
  });
};
