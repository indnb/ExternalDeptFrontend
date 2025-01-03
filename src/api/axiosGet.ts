import axios from "axios";
export interface IAxiosGet{
    path:string
}
export const axiosGet = async ({path}:IAxiosGet) => {
  const response = await axios.get(`${process.env.API_PORT}${path}`);
  return response.data;
};  