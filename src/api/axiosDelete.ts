import axios from "axios";
export interface IAxiosDelet {
  path: string
}
export const axiosDeleteAuth = async ({ path }: IAxiosDelet) => {
  const token = localStorage.getItem("token");
  const response = await axios.delete(`${process.env.API_PORT}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

