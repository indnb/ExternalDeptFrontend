import { useForm } from "react-hook-form";
import { RegistrationInput } from "@/Molecules/RegistrationInput";
import { RegistrationButton } from "src/Atoms/RegistrationButton";
import { inputsConfig as participantConfig } from "./RegistrationFormParticipant.data";
import { inputsConfig as teamConfig } from "./RegistrationFormTeam.data";

interface RegistrationFormProps {
    selectedForm: "participant" | "team";
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedForm }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const inputsConfig = selectedForm === "participant" ? participantConfig : teamConfig;

    return (
        <form className="w-full flex flex-col p-10" onSubmit={handleSubmit(onSubmit)}>
            <RegistrationInput inputsConfig={inputsConfig} control={control} errors={errors} />
            <RegistrationButton width={"300"} title={"Надіслати"} />
        </form>
    );
};
