import React, { useState } from 'react';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import Select from 'react-select';
import { IOption } from '@/Molecules/RegistrationInput';
export interface InputFieldProps {
  field: any;
  placeholder: string;
  error?: string;
  type: string;
  options?: IOption[];
}

export const RegistrationInputField: React.FC<InputFieldProps> = ({ field, placeholder, error, type, options }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const selectOptions = options?.map(option => ({
    value: option.id,
    label: option.name
  }));
  const handleChange = selectedOption => {
    field.onChange(selectedOption ? selectedOption.value : '');
  };

  const selectedValue = selectOptions?.find(option => option.value === field.value);


  return (
    <div className="relative ">
      {type === "select" ? (
        <Select
          {...field}
          value={selectedValue}
          onChange={handleChange}
          options={selectOptions}
          placeholder={placeholder}
          classNamePrefix="selectOption"
          styles={{
            control: (provided) => ({
              ...provided,
              padding: '.1rem',
              '@media (max-width: 850px)': {
                padding: '.1.2rem',
              },
              border: 'none',
              borderBottom: '2px solid #D1D5DB',
              boxShadow: 'none',
              '&:hover': {
                border: 'none',
                borderBottom: '2px solid #D1D5DB',
              },
              '&:focus-within': {
                borderBottom: '2px solid #203C8F',
              },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? '#203C8F' : 'white',
              color: state.isSelected ? 'white' : 'black',
              '&:hover': {
                backgroundColor: '#203C8F',
                color: 'white',
              },
            }),
            placeholder: (provided) => ({
              ...provided,
              color: '#A0A0A0',
              '@media (max-width: 850px)': {
                fontSize: '12px',
              },
            }),
          }}
        />) : (
        <div className="relative">
          <input
            {...field}
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            value={field.value || ""}
            placeholder={placeholder}
            className={` text-black border-b-2 border-gray-300 max-[450px]:text-[10px] focus:border-[#203C8F] max-lg:text-[12px] outline-none p-2 w-full ${error ? 'border-red-500' : ''}`}
          />
          {type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className=" absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          )}
        </div>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
