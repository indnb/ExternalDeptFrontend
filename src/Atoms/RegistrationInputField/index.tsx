import React from 'react';

interface InputFieldProps {
    field: any;
    placeholder: string;
    error?: string;
    type: string;
}

export const InputField: React.FC<InputFieldProps> = ({ field, placeholder, error, type }) => {
    return (
        <div className="w-full ">
            <input
                {...field}
                type={type}
                placeholder={placeholder}
                className={`border-b-2 border-gray-300 text-black focus:border-[#203C8F] outline-none p-2 w-full max-[420px]:w-64 max-[850px]:w-full max-[960px]:w-64 max-[1050px]:w-72   ${error ? 'border-red-500' : ''}`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};
