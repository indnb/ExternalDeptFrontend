import { Controller } from "react-hook-form";
import { RegistrationInputField } from "@/Atoms/RegistrationInputField";

export interface InputConfig {
  name: string;
  placeholder: string;
  type: string;
  validation: any
  options?: IOption[];
}
export interface IOption {
  name: string;
  id: number | string;
}
interface RegistrationInputProps {
  inputsConfig: InputConfig[];
  control: any;
  errors: any;
}

export const RegistrationInput: React.FC<RegistrationInputProps> = ({ inputsConfig, control, errors }) => {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-[10vw] w-[auto] p-[auto] gap-y-6 self-center mt-[70px]
      max-[850px]:flex max-[850px]:flex-col max-[850px]:items-center max-[850px]:h-[auto] max-[850px]:gap-y-2 max-[850px]:p-2">
      {inputsConfig.map((input, index) => (
        <div key={index} className="w-96 max-[850px]:w-[366px] max-[450px]:w-[300px] p-2">
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
                options={input.options}
              />
            )}
          />
        </div>
      ))}
    </div>
  );
};
