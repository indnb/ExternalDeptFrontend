import { Controller } from "react-hook-form";
import { RegistrationInputField } from "@/Atoms/RegistrationInputField";

export interface InputConfig {
  name: string;
  placeholder: string;
  type: string;
  validation: any
  options?: IOption[];
}
export interface IMembers {
  memebers: InputConfig[]
}
export interface IOption {
  name: string;
  id: number | string;
}
interface RegistrationInputProps {
  inputsConfig: InputConfig[];
  control: any;
  errors: any;
  setUniversity?: React.Dispatch<React.SetStateAction<any>>;
  university?: any

}

export const RegistrationInput: React.FC<RegistrationInputProps> = ({ setUniversity, inputsConfig, control, errors, university }) => {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-[10vw] w-[auto] p-[auto] gap-y-6 self-center mt-[70px]
      max-lg:flex max-lg:flex-col max-lg:items-center max-lg:h-[auto] max-lg:gap-y-2 max-lg:p-2">
      {inputsConfig.map((input, index) => (
        <div key={index} className="w-96 max-lg:w-[366px] max-[450px]:w-[300px] p-2">
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
                setUniversity={setUniversity}
                university={university}
                validation={input.validation}
              />
            )}
          />
        </div>
      ))}
    </div>
  );
};
