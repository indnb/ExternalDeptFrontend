import { useLanguageStore } from "@/_store/LanguageChanger";
import { useTeamApiQuery } from "@/api/useGetTeam";
import { useUniversityApiQuery } from "@/api/useGetUniversity";
import { useEffect, useState } from "react";
import { InputConfig } from "../RegistrationInput";
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
            if (!/^\+?380\d{9}$|^380\d{9}$|^0\d{9}$/.test(value)) {
              return language == "ua"
                ? "Формат: +380XXXXXXXXX, 380XXXXXXXXX або 0XXXXXXXXX"
                : "Format: +380XXXXXXXXX, 380XXXXXXXXX, or 0XXXXXXXXX";
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
        options: [
          ...universityData.map((university) => ({ id: university.id, name: language === "ua" ? university.name : university.name_eng })),
          ...universityData.map((university) => ({ id: university.id, name: language === "ua" ? university.name_eng : university.name }))
        ],
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
        placeholder: language === "ua" ? "ПАРОЛЬ КОМАНДИ" : "PASSWORD TEAM",
        validation: {
          required: language === "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            const isValidPassword = value.length >= 10 && value.length <= 20 &&
              /[A-Z]/.test(value) &&
              /[a-z]/.test(value) &&
              /\d/.test(value) &&
              /[!@#$%^&*()_+=\-{}\[\]|\\:;'<>,.?/~`]/.test(value) &&
              !/[а-яА-ЯёЁіІїЇєЄґҐ]/.test(value);

            return isValidPassword || (language === "ua"
              ? "Пароль має бути від 10 до 20 символів, містити цифри, символи, великі та малі літери та не містити кирилицю."
              : "Password must be between 10 and 20 characters, contain digits, symbols, uppercase, lowercase letters, and not contain Cyrillic.");
          },
        },
      },

    ];
    setParticipantConfig(config)

  }, [language, universityData, teamData, isUniversityLoading, isTeamLoading, universityError, teamError]);
  return { participantConfig, isLoading: isUniversityLoading, error: universityError };





};
