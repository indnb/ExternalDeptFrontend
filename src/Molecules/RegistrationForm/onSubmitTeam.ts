import axios from "axios";
import { ICreateTeam } from ".";

export const onSubmitTeam = async (data: ICreateTeam, reset: any, setMessage: any, setStatusRegister: any) => {
  const { passwordAgain, ...filteredData } = data;
  console.log(passwordAgain);
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
    console.log("Success answer team:", response);
    reset();
    setMessage("зареєструйтесь як учасник!");
  } catch (error: any) {
    if (error.response?.data?.message) {
      setMessage(error.response.data.message);
    } else if (error.response?.data?.error?.description) {
      setMessage(error.response.data.error.description);
    } else {
      setMessage("Произошла неизвестная ошибка");
    }
  }
};
