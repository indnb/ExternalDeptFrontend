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
      if (
        error.response.data.message ===
        "Failed to insert team: duplicate key value violates unique constraint \"hackathon_team_2024_nickname_tg_key\""
      ) {
        setMessage({
          message: "Телеграм ім'я зайняте",
          message_eng: "Telegram username is already taken",
        });
      } else {
        setMessage({
          message: "Трапилася помилка на бекенді, спробуйте ще раз",
          message_eng: "An error occurred on the backend, please try again",
        });
      }
    } else {
      setMessage({
        message: "Трапилася помилка на бекенді, спробуйте ще раз",
        message_eng: "An error occurred on the backend, please try again",
      })
    }
  }
};
