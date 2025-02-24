import { Controller } from "react-hook-form";
import { RegistrationInputField } from "@/Atoms/RegistrationInputField";

interface InputConfig {
    name: string;
    placeholder: string;
    type: string;
    validation: {
        required?: string | boolean;
        pattern?: { value: RegExp; message: string };
    };
    options?: string[];
}

interface RegistrationInputProps {
    inputsConfig: InputConfig[];
    control: any;
    errors: any;
}

export const RegistrationInput: React.FC<RegistrationInputProps> = ({ inputsConfig, control, errors }) => {
    return (
        <div className="grid grid-cols-2 gap-x-72 p-4 gap-y-6 self-center max-[850px]:flex max-[850px]:flex-col">
            {inputsConfig.map((input, index) => (
                <div key={index} className="w-96 p-2">
                    <Controller
                        name={input.name}
                        control={control}
                        rules={input.validation}
                        render={({ field }) => (
                            <RegistrationInputField
                                type={input.type}
                                field={field}
                                placeholder={input.placeholder}
                                error={errors[input.name]?.message}
                                options={input.options} // Передаем options
                            />
                        )}
                    />
                </div>
            ))}
        </div>
    );
};