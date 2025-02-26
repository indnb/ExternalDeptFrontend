import React, { useState } from 'react';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
interface InputFieldProps {
    field: any;
    placeholder: string;
    error?: string;
    type: string;
    options?: string[];
}

export const RegistrationInputField: React.FC<InputFieldProps> = ({ field, placeholder, error, type, options }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="w-full relative">
            {type === "select" ? (
                <select
                    {...field}
                    className={`border-b-2 bg-white border-gray-300 text-black focus:border-[#203C8F] outline-none p-2 w-full ${error ? 'border-red-500' : ''}`}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options?.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            ) : (
                <div className="relative">
                    <input
                        {...field}
                        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                        placeholder={placeholder}
                        className={`border-b-2 border-gray-300 text-black focus:border-[#203C8F] outline-none p-2 w-full ${error ? 'border-red-500' : ''}`}
                    />
                    {type === 'password' && (
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <FaEyeSlash/> : <FaEye/>}
                        </button>
                    )}
                </div>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};
