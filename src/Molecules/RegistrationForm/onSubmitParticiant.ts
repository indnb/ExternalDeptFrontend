import axios from "axios";
import { IRegisterUser } from ".";
import { checkError } from "@/utils/checkError";


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
    checkError(error, setMessage)

  }
};


function formatPhoneNumber(phone: string) {
  const digits = phone.replace(/\D/g, '');

  if (digits.startsWith('0')) {
    return digits;
  }

  let formatted = digits;
  if (digits.length > 10) {
    formatted = digits.slice(digits.length - 10);
  }

  if (!formatted.startsWith('0')) {
    formatted = '0' + formatted;
  }

  return formatted;
}
