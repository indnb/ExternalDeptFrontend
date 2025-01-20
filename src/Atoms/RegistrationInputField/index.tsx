import React from 'react';

interface InputFieldProps {
    field: any;
    placeholder: string;
    error?: string;
    type: string;
}

export const InputField: React.FC<InputFieldProps> = ({ field, placeholder, error, type }) => {
    return (
        <div>
            <input
                {...field}
                type={type}
                placeholder={placeholder}
                className={`border-b-2 border-gray-300 text-black focus:border-[#203C8F] outline-none p-2 w-full ${error ? 'border-red-500' : ''}`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};
