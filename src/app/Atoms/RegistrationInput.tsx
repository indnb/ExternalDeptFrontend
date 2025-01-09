import { Controller } from 'react-hook-form';


interface InputConfig {
    name: string;
    placeholder: string;
    validation: {
        required?: string | boolean;
        pattern?: { value: RegExp; message: string };
    };
}

interface RegistrationInputProps {
    inputsConfig: InputConfig[];
    control: any;
    errors: any;
}

export const RegistrationInput: React.FC<RegistrationInputProps> = ({ inputsConfig, control, errors }) => {
    return (
        <div className="flex justify-around">
            <div className="flex flex-col gap-4">
                {inputsConfig.filter((_, index) => index % 2 === 0).map((input, index) => (
                    <div key={index} className="w-96 p-2">
                        <Controller
                            name={input.name}
                            control={control}
                            rules={input.validation}
                            render={({ field }) => (
                                <div>
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder={input.placeholder}
                                        className={`border-b-2 border-gray-300 text-black focus:border-[#203C8F] outline-none p-2 w-full ${errors[input.name] ? 'border-red-500' : ''}`}
                                    />
                                    {errors[input.name] && (
                                        <p className="text-red-500 text-sm">{errors[input.name]?.message}</p>
                                    )}
                                </div>
                            )}
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-4">
                {inputsConfig.filter((_, index) => index % 2 !== 0).map((input, index) => (
                    <div key={index} className="w-96 p-2">
                        <Controller
                            name={input.name}
                            control={control}
                            rules={input.validation}
                            render={({ field }) => (
                                <div>
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder={input.placeholder}
                                        className={`border-b-2 border-gray-300 text-black focus:border-[#203C8F] outline-none p-2 w-full ${errors[input.name] ? 'border-red-500' : ''}`}
                                    />
                                    {errors[input.name] && (
                                        <p className="text-red-500 text-sm">{errors[input.name]?.message}</p>
                                    )}
                                </div>
                            )}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
