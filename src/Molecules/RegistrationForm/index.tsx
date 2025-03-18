'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { onSubmitTeam } from "./onSubmitTeam";
import { RegistrationInput } from "@/Molecules/RegistrationInput";
import { RegistrationButton } from "src/Atoms/RegistrationButton";
import { inputsConfig as teamConfig } from "./RegistrationFormTeam.data";
import { onSubmitParticipant } from "./onSubmitParticiant";
import { useFormConfig } from "./RegistrationFormParticipant.data";

interface RegistrationFormProps {
  selectedForm: "participant" | "team";
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
export const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedForm }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const { control, handleSubmit, formState: { errors }, reset } = useForm<ICreateTeam | IRegisterUser>();
  const { participantConfig, isLoading } = useFormConfig();
  const inputsConfig = selectedForm === "participant" ? participantConfig : teamConfig;
  const onSubmit = selectedForm === "participant" ? onSubmitParticipant : onSubmitTeam;
  const handleFormSubmit = async (data: ICreateTeam | IRegisterUser) => {
    if ("teamName" in data) {
      await onSubmitParticipant(data, reset, setMessage);
    } else {
      await onSubmitTeam(data, reset, setMessage);
    }
    setFormSubmitted(true);
  };


  return (
    <form className="w-full max-[450px]:w-[90vw] flex flex-col p-10 justify-center items-center" onSubmit={handleSubmit(handleFormSubmit)}>
      {!isLoading && inputsConfig && <RegistrationInput inputsConfig={inputsConfig} control={control} errors={errors} />}
      <RegistrationButton width="300" title="Надіслати" />
      {formSubmitted && (
        <p className="text-black text-center mt-4">{message}</p>
      )}
    </form>
  );
};
