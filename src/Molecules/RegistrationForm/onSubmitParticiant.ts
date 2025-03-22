import axios from "axios";
import { IRegisterUser } from ".";


export const onSubmitParticipant = async (data: IRegisterUser, reset: any, setMessage: any, setStatusRegister: any) => {

  try {
    const number = formatPhoneNumber(data.phone)
    const match = data.name.match(/^(\S+)\s+(\S+)/);

    const filteredData = {
      team_data: {
        id: data.teamName,
        password: data.password_registration,
      },
      user_data: {
        first_name: match ? match[1] : '',
        last_name: match ? match[2] : '',
        nickname_tg: data.nickname_tg,
        phone: number,
        team_id: data.teamName,
        university_id: data.university,
      },
    };

    const response = await axios.post(
      `${process.env.API_PORT}/hackathon_2024/user/registration_by_tg`,
      JSON.stringify(filteredData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response)
    if (response) {
      setStatusRegister(true)
    }
    console.log("Success answer participant:", response);
    setMessage("Форма надіслана!");
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



function formatPhoneNumber(number: string) {
  if (number.startsWith("+380")) return "0" + number.slice(4);
  if (number.startsWith("380")) return "0" + number.slice(3);
  return number;
}

