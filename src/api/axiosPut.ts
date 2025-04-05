import axios from "axios";

export interface IAxiosPost<T> {
  path: string
  body: T
}
export const axiosPut = async <T>({ path, body }: IAxiosPost<T>) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(`${process.env.API_PORT}${path}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};


