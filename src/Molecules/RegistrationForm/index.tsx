'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import {onSubmitParticipant} from "./onSubmitParticiant"
import { onSubmitTeam } from "./onSubmitTeam";
import { RegistrationInput } from "@/Molecules/RegistrationInput";
import { RegistrationButton } from "src/Atoms/RegistrationButton";
import { inputsConfig as participantConfig } from "./RegistrationFormParticipant.data";
import { inputsConfig as teamConfig } from "./RegistrationFormTeam.data";

interface RegistrationFormProps {
    selectedForm: "participant" | "team";
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedForm }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);  // Состояние для отображения текста
    const [message, setMessage] = useState("");  // Состояние для текста сообщения
    const { control, handleSubmit, formState: { errors }, reset } = useForm();

    const inputsConfig = selectedForm === "participant" ? participantConfig : teamConfig;
    const onSubmit = selectedForm === "participant" ? onSubmitParticipant : onSubmitTeam;

    const handleFormSubmit = (data: any) => {
        onSubmit(data, reset, setMessage);
        setFormSubmitted(true);
    };

    return (
        <form className="w-full flex flex-col p-10" onSubmit={handleSubmit(handleFormSubmit)}>
            <RegistrationInput inputsConfig={inputsConfig} control={control} errors={errors} />
            <RegistrationButton width="300" title="Надіслати" />
            {formSubmitted && (
                <p className="text-black text-center mt-4">{message}</p>
            )}
        </form>
    );
};
