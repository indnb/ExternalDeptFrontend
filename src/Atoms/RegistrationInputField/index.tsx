import { NoOptionsMessage } from "../NoOptions"
import React, { useState } from 'react';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import Select from 'react-select';
import { IOption } from '@/Molecules/RegistrationInput';
import { useLanguageStore } from "@/_store/LanguageChanger";
export interface InputFieldProps {
  field: any;
  placeholder: string;
  error?: string;
  type: string;
  options?: IOption[];
  setUniversity?: React.Dispatch<React.SetStateAction<any | undefined>>;
  university?: any
  validation: any
}

export const RegistrationInputField: React.FC<InputFieldProps> = ({ validation, university, setUniversity, field, placeholder, error, type, options }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { language } = useLanguageStore()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const selectOptions = options?.map(option => ({
    value: option.id,
    label: option.name
  }));
  const handleChange = (selectedOption) => {
    field.onChange(selectedOption ? selectedOption.value : '');

    if (selectedOption && setUniversity && options && options?.length > 10) {

      setUniversity({ label: selectedOption?.label, value: selectedOption?.value });
    }
  };

  const selectedValue = selectOptions?.find(option => option.value === field.value);


  return (
    <div className="relative  w-[100%]">
      {type === "select" ? (
        <div className="max-lg:h-[59px] flex items-center w-[350px]">
          <Select
            {...field}
            value={selectedValue}
            onChange={handleChange}
            options={selectOptions}
            placeholder={placeholder}
            components={{ NoOptionsMessage }}
            defaultValue={university}
            classNamePrefix="selectOption"
            menuPortalTarget={document.body}
            styles={{
              control: (provided) => ({
                ...provided,
                padding: '.1rem',
                '@media (max-width: 850px)': {
                  padding: '.1.2rem',
                  width: "350px",

                },
                border: 'none',
                borderBottom: '2px solid #D1D5DB',
                boxShadow: 'none',
                width: "368px",
                backgroundColor: 'transparent',
                '&:hover': {
                  border: 'none',
                  borderBottom: '2px solid #D1D5DB',
                },
                '&:focus-within': {
                  borderBottom: '2px solid #203C8F',
                },
              }),
              noOptionsMessage: (provided) => ({
                ...provided,
                fontSize: "14px",
                color: "#A0A0A0",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? '#203C8F' : 'transparent',
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
                  fontSize: '16px',
                },
              }),
              menu: (provided) => ({
                ...provided,
                zIndex: 0,
              }),
            }}
          />
        </div>
      ) : (
        <div className="relative">
          <input
            {...field}
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            value={field.value || ""}
            placeholder={placeholder}
            className={` text-black  bg-transparent
border-b-2 border-gray-300  focus:border-[#203C8F] max-lg:text-[16px] outline-none p-2 w-full ${error ? 'border-red-500' : ''}`}
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
      {!error && !validation.required &&
        <p className="text-[#6A6A6A] opacity-65 text-sm">
          {language == "ua" ? "*Це поле не обов'язкове"
            :
            "*This field is optional"}
        </p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
