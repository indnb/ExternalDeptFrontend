import axios from "axios";
export interface IAxiosGet{
    path:string
}
export const axiosGet = async ({path}:IAxiosGet) => {
  const response = await axios.get(`${process.env.REACT_APP_API_KEY}${path}`);
  return response.data;
};