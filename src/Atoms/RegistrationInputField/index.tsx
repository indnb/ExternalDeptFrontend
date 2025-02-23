import React from 'react';

interface InputFieldProps {
    field: any;
    placeholder: string;
    error?: string;
    type: string;
    options?: string[]; // Добавляем options для select
}

export const RegistrationInputField: React.FC<InputFieldProps> = ({ field, placeholder, error, type, options }) => {
    return (
        <div className="w-full">
            {type === "select" ? (
                <select
                    {...field}
                    className={`border-b-2 bg-white border-gray-300 text-black focus:border-[#203C8F] outline-none p-2 w-full max-[420px]:w-64 max-[850px]:w-full max-[960px]:w-64 max-[1050px]:w-72 ${error ? 'border-red-500' : ''}`}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options?.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            ) : (
                <input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className={`border-b-2 border-gray-300 text-black focus:border-[#203C8F] outline-none p-2 w-full max-[420px]:w-64 max-[850px]:w-full max-[960px]:w-64 max-[1050px]:w-72 ${error ? 'border-red-500' : ''}`}
                />
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};