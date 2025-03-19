import { useState } from "react";
import { useForm } from "react-hook-form";
import { onSubmitTeam } from "./onSubmitTeam";
import { RegistrationInput } from "@/Molecules/RegistrationInput";
import { RegistrationButton } from "src/Atoms/RegistrationButton";
import { onSubmitParticipant } from "./onSubmitParticiant";
import { useFormConfig } from "./RegistrationFormParticipant.data";
import { useRegisterTeam } from "./RegistrationFormTeam.data";
import { useLanguageStore } from "@/_store/LanguageChanger";

interface RegistrationFormProps {
  selectedForm: "participant" | "team";
  setStatusRegister: React.Dispatch<React.SetStateAction<boolean>>;

}
export interface IRegisterUser {
  name: string;
  nickname_tg: string;
  phone: string;
  password_registration: string;
  passwordAgain: string
  university: number
  teamName: number;
}

export interface ICreateTeam {
  nickname_tg: string
  password_registration: string
  passwordAgain: string
  name: string; //name command 
  category: string
}
export const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedForm, setStatusRegister }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const { language } = useLanguageStore()
  const { control, handleSubmit, formState: { errors }, reset } = useForm<ICreateTeam | IRegisterUser>();
  const { participantConfig, isLoading } = useFormConfig();
  const { teamConfig } = useRegisterTeam()
  const inputsConfig = selectedForm === "participant" ? participantConfig : teamConfig;
  const handleFormSubmit = async (data: ICreateTeam | IRegisterUser) => {
    if ("teamName" in data) {
      await onSubmitParticipant(data, reset, setMessage, setStatusRegister);
    } else {
      await onSubmitTeam(data, reset, setMessage, setStatusRegister);
    }
    setFormSubmitted(true);
  };


  return (
    <form className="w-full max-[450px]:w-[auto] flex flex-col  justify-center items-center" onSubmit={handleSubmit(handleFormSubmit)}>
      {inputsConfig && !isLoading && <RegistrationInput inputsConfig={inputsConfig} control={control} errors={errors} />}
      <div className=" mt-[90px] max-[850px]:mt-[70px]">
        <RegistrationButton width="300" title={language == "ua" ? "Надіслати" : "Send"} />
      </div>

      {formSubmitted && (
        <p className="text-black text-center mt-4">{message}</p>
      )}
    </form>
  );
};
