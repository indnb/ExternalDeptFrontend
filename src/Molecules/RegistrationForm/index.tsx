import { useForm } from "react-hook-form";
import axios from "axios";
import { RegistrationInput } from "@/Molecules/RegistrationInput";
import { RegistrationButton } from "src/Atoms/RegistrationButton";
import { inputsConfig as participantConfig } from "./RegistrationFormParticipant.data";
import { inputsConfig as teamConfig } from "./RegistrationFormTeam.data";

interface RegistrationFormProps {
  selectedForm: "participant" | "team";
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedForm }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmitParticipant = async (data: any) => {
    let DataUniversity
    let DataTeam

    try {

    } catch (e) {

    }

    const university = DataUniversity.data.find((univ: any) => univ.name === data.university);
    const team = DataTeam.data.find((team: any) => team.name === data.teamName);

    const match = data.name.match(/^(\S+)\s+(\S+)/)

    const filteredData = {

      "team_data": {
        "id": team.id,
        "password": data.password,
      },
      "user_data": {
        "first_name": match[1],
        "last_name": match[2],
        "nickname_tg": data.nickname_tg,
        "phone": data.phone,
        "team_id": team.id,
        "university_id": university.id
      }
    }
    try {
      const response = await axios.post(`${process.env.API_PORT}/hackathon_2024/user/registration_by_tg`, JSON.stringify(filteredData), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("secssus answer participant:");
    } catch (error) {
      console.error("error participant:", error);
    }
  };

  const onSubmitTeam = async (data: any) => {

    const { passwordAgain, ...filteredData } = data;

    try {
      const response = await axios.post(`${process.env.API_PORT}/hackathon_2024/team/create`, JSON.stringify(filteredData), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("secssus answer team:");
    } catch (error) {
      console.error("error team:", error);
    }
  };

  const inputsConfig = selectedForm === "participant" ? participantConfig : teamConfig;
  const onSubmit = selectedForm === "participant" ? onSubmitParticipant : onSubmitTeam;

  return (
    <form className="w-full flex flex-col p-10" onSubmit={handleSubmit(onSubmit)}>
      <RegistrationInput inputsConfig={inputsConfig} control={control} errors={errors} />
      <RegistrationButton width="300" title="Надіслати" />
    </form>
  );
};
