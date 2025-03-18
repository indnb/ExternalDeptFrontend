import { useLanguageStore } from "@/_store/LanguageChanger";
import { useTeamApiQuery } from "@/api/useGetTeam";
import { useUniversityApiQuery } from "@/api/useGetUniversity";
import { InputFieldProps } from "@/Atoms/RegistrationInputField";
import axios from "axios";
import { useEffect, useState } from "react";
import { InputConfig } from "../RegistrationInput";
let DataTeam = []
export interface IUniversity {
  id: number,
  name: string,
  name_eng: string
}
export interface ITeam {
  id: number,
  name: string,
}
export const useFormConfig = () => {
  const { data: universityData, error: universityError, isLoading: isUniversityLoading } = useUniversityApiQuery();
  const { data: teamData, error: teamError, isLoading: isTeamLoading } = useTeamApiQuery();
  const { language } = useLanguageStore()

  const [participantConfig, setParticipantConfig] = useState<InputConfig[]>([])
  useEffect(() => {
    if (isUniversityLoading || isTeamLoading || universityError || teamError) {
      return;
    }


    const config: InputConfig[] = [
      {
        name: "name",
        type: "text",
        placeholder: language == "ua" ? "ІМ'Я ПРІЗВИЩЕ" : "FIRST AND LAST NAME",
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            if (!/^[a-zA-Zа-яА-Я\s]+$/.test(value)) {
              return language == "ua" ? "Можна вводити тільки літери" : "Only letters are allowed";
            }
            const words = value.trim().split(/\s+/);
            if (words.length !== 2) {
              return language == "ua" ? "Має бути прізвище та ім'я" : "Must include first and last name";
            }
            return true;
          },
        }
      },
      {
        name: "phone",
        type: "text",
        placeholder: language == "ua" ? "НОМЕР ТЕЛЕФОНУ" : "PHONE NUMBER",
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            if (!/^\d+$/.test(value)) {
              return language == "ua" ? "Тільки цифри" : "Only digits are allowed"
            }
            if (value.length !== 10) {
              return language == "ua" ? "Номер складається з 10 цифр" : "Phone number must be 10 digits"
            }
            return true;
          },
        },
      },
      {
        name: "nickname_tg",
        type: "text",
        placeholder: language == "ua" ? "НІКНЕЙМ В ТЕЛЕГРАМІ" : "TELEGRAM NICKNAME",
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9_]{3,30}[a-zA-Z0-9])?$/.test(value)) {
              return language == "ua" ? "Нікнейм Телеграма не відповідає формату" : "Invalid Telegram username format"
            }
            return true;
          },
        },
      },
      {
        name: "university",
        type: "select",
        placeholder: language == "ua" ? "НАЗВА НАВЧАЛЬНОГО ЗАКЛАДУ" : "EDUCATIONAL INSTITUTION NAME",
        options: universityData.flatMap((university) => [
          { id: university.id, name: university.name },
          { id: university.id, name: university.name_eng },
        ]),
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
        },
      },
      {
        name: "teamName",
        type: "select",
        placeholder: language == "ua" ? "ОБЕРІТЬ КОМАНДУ" : "CHOOSE A TEAM",
        options: teamData.map((team) => ({ name: team.name, id: team.id })),
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
        },
      },
      {
        name: "password_registration",
        type: "password",
        placeholder: language == "ua" ? "ПАРОЛЬ" : "PASSWORD",
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            const isValidPassword = (input: string) => {
              if (input.length < 10 || input.length > 20) return false;
              return /[A-Z]/.test(input) && /[a-z]/.test(input) && /\d/.test(input) && /[!@#$%^&*()_+=\-{}\[\]|\\:;'<>,.?/~`]/.test(input);
            };
            if (!isValidPassword(value)) {
              return language == "ua" ? "Пароль має бути від 10 до 20 символів і містити цифри, символи, великі та малі літери" : "Password must be 10-20 characters long and include digits, symbols, uppercase, and lowercase letters."
            }
            return true;
          },
        },
      },
      {
        name: "passwordAgain",
        type: "password",
        placeholder: language == "ua" ? "ПІДТВЕРДЖЕННЯ ПАРОЛЮ" : "CONFIRM PASSWORD",
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string, formValues: any) => {
            if (value !== formValues.password_registration) {
              return language == "ua" ? "Паролі не співпадають" : "Passwords do not match"
            }
            return true;
          },
        },
      },
    ];
    setParticipantConfig(config)

  }, [language, universityData, teamData, isUniversityLoading, isTeamLoading, universityError, teamError]);
  return { participantConfig, isLoading: isUniversityLoading, error: universityError }; return {
    participantConfig,
    isLoading: isUniversityLoading || isTeamLoading,
    error: universityError || teamError,
  };
};
