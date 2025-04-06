import { useLanguageStore } from "@/_store/LanguageChanger";
import { useEffect, useState } from "react";
import { InputConfig } from "../RegistrationInput";
import { useTeamStore } from "@/_store/Team";
import { useUniversityStore } from "@/_store/University";
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
  const { teams } = useTeamStore()
  const { university } = useUniversityStore()
  const { language } = useLanguageStore()

  const [participantConfig, setParticipantConfig] = useState<InputConfig[]>([])
  useEffect(() => {


    const config: InputConfig[] = [
      {
        name: "captain_name",
        type: "text",
        placeholder: language === "ua"
          ? "ІМ'Я ТА ПРІЗВИЩЕ ЛІДЕРА КОМАНДИ"
          : "FIRST AND LAST NAME",
        validation: {
          required: language === "ua"
            ? "Це поле обов'язкове"
            : "This field is required",
          validate: (value: string) => {
            if (!/^[a-zA-Zа-яА-ЯІіЇїЄєҐґ\s\-]+$/.test(value)) {
              return language === "ua"
                ? "Можна вводити тільки літери"
                : "Only letters are allowed";
            }

            const words = value.trim().split(/\s+/);
            if (words.length !== 2) {
              return language === "ua"
                ? "Має бути ім'я та прізвище"
                : "Must include first and last name";
            }

            const [firstName, lastName] = words;

            if (firstName.length < 2 || firstName.length > 25) {
              return language === "ua"
                ? "Ім'я має містити від 2 до 25 символів"
                : "First name must be between 2 and 25 characters long";
            }

            if (lastName.length < 2 || lastName.length > 100) {
              return language === "ua"
                ? "Прізвище має містити від 2 до 100 символів"
                : "Last name must be between 2 and 100 characters long";
            }

            if ((firstName + lastName).length > 125) {
              return language === "ua"
                ? "Загальна кількість символів не повинна перевищувати 125"
                : "Total character count must not exceed 125";
            }

            return true;
          },
        },
      },
      {
        name: "captain_phone",
        type: "text",
        placeholder: language == "ua" ? "НОМЕР ТЕЛЕФОНУ" : "PHONE NUMBER",
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            if (!/^(?:\+380\d{9}|380\d{9}|0\d{9})$/.test(value)) {
              return language == "ua"
                ? "Формат:  380XXXXXXXXX, 0XXXXXXXXX, або інші міжнародні формати"
                : "Format:  380XXXXXXXXX, 0XXXXXXXXX, or other international formats";
            }
            return true;
          },
        },
      },
      {
        name: "captain_nickname_tg",
        type: "text",
        placeholder: language == "ua" ? "НІКНЕЙМ В ТЕЛЕГРАМІ" : "TELEGRAM NICKNAME",
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            if (!/^@?[a-zA-Z0-9](?:[a-zA-Z0-9_]{3,30}[a-zA-Z0-9])?$/.test(value)) {
              return language == "ua"
                ? "Нікнейм Телеграма не відповідає формату"
                : "Invalid Telegram username format";
            }
            return true;
          },
        },
      },
      {
        name: "captain_university",
        type: "select",
        placeholder: language == "ua" ? "НАЗВА НАВЧАЛЬНОГО ЗАКЛАДУ" : "EDUCATIONAL INSTITUTION NAME",
        options: [
          ...university.map((university) => ({
            id: university.id,
            name: language === "ua" ? university.name : university.name_eng,
          })),
          ...university.map((university) => ({
            id: university.id,
            name: language === "ua" ? university.name_eng : university.name,
          })),
        ].sort((a, b) => {
          const startsWithQuoteA = a.name.startsWith('"');
          const startsWithQuoteB = b.name.startsWith('"');

          if (startsWithQuoteA && !startsWithQuoteB) return 1;
          if (!startsWithQuoteA && startsWithQuoteB) return -1;
          return a.name.localeCompare(b.name);
        }),
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
        },
      },
      {
        name: "category",
        type: "select",
        placeholder: language === "ua" ? "КАТЕГОРІЯ НА ХАКАТОН" : "HACKATHON CATEGORY",
        options: [
          { id: "Software", name: "Software" },
          { id: "Gamedev", name: "GameDev" },
          { id: "Blockchain", name: "Blockchain" },
          { id: "IoT", name: "IoT" },
        ],
        validation: {
          required: language === "ua" ? "Це поле обов'язкове" : "This field is required",
        },
      },
      {
        name: "team_name",
        type: "text",
        placeholder: language === "ua" ? "НАЗВА КОМАНДИ" : "TEAM NAME",
        validation: {
          validate: (value: string) => {
            if (!/^[a-zA-Zа-яА-Яіїєґ0-9\s]{2,50}$/.test(value)) {
              return language === "ua"
                ? "Можна вводити тільки літери та числа (2-50 символів)"
                : "Only letters and numbers allowed (2-50 characters)";
            }
            const isTaken = teams.some((team) => team.name === value);
            if (isTaken) {
              return language === "ua" ? "Назва зайнята" : "Name was taken";
            }
            return true;
          },
        },
      }

    ];
    setParticipantConfig(config)

  }, [language, teams, university]);
  return { participantConfig };





};
