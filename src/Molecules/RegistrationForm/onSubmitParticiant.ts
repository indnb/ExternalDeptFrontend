import axios from "axios";
import { IRegisterUser } from ".";


export const onSubmitParticipant = async (data: IRegisterUser, reset: any, setMessage: any, setStatusRegister: any) => {

  try {



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
        phone: data.phone,
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
      setMessage(error.response.data.message);
    } else if (error.response?.data?.error?.description) {
      setMessage(error.response.data.error.description);
    } else {
      setMessage("Произошла неизвестная ошибка");
    }
  }
};
