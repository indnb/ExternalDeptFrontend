import axios from "axios";
import { ICreateTeam } from ".";
import { checkError } from "@/utils/checkError";

export const onSubmitTeam = async (data: ICreateTeam, reset: any, setMessage: any, setStatusRegister: any) => {
  const { ...filteredData } = data;

  try {
    const response = await axios.post(
      `${process.env.API_PORT}/hackathon_2024/team/create`,
      JSON.stringify(filteredData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response) {
      setStatusRegister(true)

    }
    reset();
    setMessage("зареєструйтесь як учасник!");
  } catch (error: any) {
    checkError(error, setMessage)


  }
};
