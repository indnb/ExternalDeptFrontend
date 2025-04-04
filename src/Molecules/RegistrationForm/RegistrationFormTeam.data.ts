import { useLanguageStore } from "@/_store/LanguageChanger";
import { InputConfig } from "../RegistrationInput";
import { useEffect, useState } from "react";
import { useTeamStore } from "@/_store/Team";
import { useUniversityStore } from "@/_store/University";

export const useRegisterTeam = () => {
  const { language } = useLanguageStore();
  const [teamConfig, setTeamConfig] = useState<InputConfig[]>([]);
  const [membersConfig, setMemeberConfig] = useState<InputConfig[][]>([])
  const [countMembers, setCountMembers] = useState<number>(1)
  const { teams } = useTeamStore()
  const { university } = useUniversityStore()

  useEffect(() => {
    if (!language) {
      setTeamConfig([]);
      return;
    }
    const config: InputConfig[] = [
      {
        name: "team_name",
        type: "text",
        placeholder: language === "ua" ? "НАЗВА КОМАНДИ" : "TEAM NAME",
        validation: {
          required: language === "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            if (!/^@?[a-zA-Zа-яА-Яіїєґ0-9_\-.\s]{2,50}$/.test(value)) {
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
        name: "captain_nickname_tg",
        type: "text",
        placeholder: language === "ua" ? "НІКНЕЙМ ЛІДЕРА В ТЕЛЕГРАМІ" : "TELEGRAM LEADER NICKNAME",
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            if (!/^@?[a-zA-Z0-9](?:[a-zA-Z0-9_]{3,30}[a-zA-Z0-9])?$/.test(value)) {
              return language == "ua" ? "Нікнейм Телеграма не відповідає формату" : "Invalid Telegram username format"
            }
            return true;
          },
        },
      },
      {
        name: "captain_name",
        type: "text",
        placeholder: language === "ua" ? "ІМ'Я ТА ПРІЗВИЩЕ ЛІДЕРА КОМАНДИ" : "FIRST AND LAST NAME",
        validation: {
          required: language === "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            if (!/^[a-zA-Zа-яА-Яіїєґ\s]+$/.test(value)) {
              return language === "ua" ? "Можна вводити тільки літери" : "Only letters are allowed";
            }
            const words = value.trim().split(/\s+/);
            if (words.length !== 2) {
              return language === "ua"
                ? "Має бути ім'я та прізвище"
                : "Must include first and last name";
            }
            if (words.some(word => word.length < 2 || word.length > 20)) {
              return language === "ua"
                ? "Кожне слово має містити від 2 до 20 символів"
                : "Each word must be between 2 and 20 characters long";
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
        name: "captain_university",
        type: "select",
        placeholder: language == "ua" ? "НАЗВА НАВЧАЛЬНОГО ЗАКЛАДУ" : "EDUCATIONAL INSTITUTION NAME",
        options: [
          ...university.map((university) => ({ id: university.id, name: language === "ua" ? university.name : university.name_eng })),
          ...university.map((university) => ({ id: university.id, name: language === "ua" ? university.name_eng : university.name }))
        ],
        validation: {
          required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
        },
      },
    ];
    const membersConfig: InputConfig[][] = [
      ...Array.from({ length: countMembers }, (_, i) => i + 1).map((elem) => {
        return [{
          name: `member_name${elem}`,
          type: "text",
          placeholder: language === "ua" ? "ІМ'Я ТА ПРІЗВИЩЕ" : "FIRST AND LAST NAME",
          validation: {
            required: language === "ua" ? "Це поле обов'язкове" : "This field is required",
            validate: (value: string) => {
              if (!/^[a-zA-Zа-яА-Яіїєґ\s]+$/.test(value)) {
                return language === "ua" ? "Можна вводити тільки літери" : "Only letters are allowed";
              }
              const words = value.trim().split(/\s+/);
              if (words.length !== 2) {
                return language === "ua"
                  ? "Має бути ім'я та прізвище"
                  : "Must include first and last name";
              }
              if (words.some(word => word.length < 2 || word.length > 20)) {
                return language === "ua"
                  ? "Кожне слово має містити від 2 до 20 символів"
                  : "Each word must be between 2 and 20 characters long";
              }
              return true;
            },
          },
        },
        {
          name: `member_university${elem}`,
          type: "select",
          placeholder: language == "ua" ? "НАЗВА НАВЧАЛЬНОГО ЗАКЛАДУ" : "EDUCATIONAL INSTITUTION NAME",
          options: [
            ...university.map((university) => ({
              id: university.id,
              name: language === "ua" ? university.name : university.name_eng
            })),
            ...university.map((university) => ({
              id: university.id,
              name: language === "ua" ? university.name_eng : university.name
            }))
          ],
          validation: {
            required: language == "ua" ? "Це поле обов'язкове" : "This field is required",
          },
        },
        {
          name: `member_phone${elem}`,
          type: "text",
          placeholder: language == "ua" ? "НОМЕР ТЕЛЕФОНУ" : "PHONE NUMBER",
          validation: {
            validate: (value: string) => {
              if (value && !/^(?:\+380\d{9}|380\d{9}|0\d{9})$/.test(value)) {
                return language == "ua"
                  ? "Формат:  380XXXXXXXXX, 0XXXXXXXXX, або інші міжнародні формати"
                  : "Format: 380XXXXXXXXX, 380XXXXXXXXX, 0XXXXXXXXX, or other international formats";
              }
              return true;
            },
          },
        },
        {
          name: `member_nickname_tg${elem}`,
          type: "text",
          placeholder: language == "ua" ? "НІКНЕЙМ В ТЕЛЕГРАМІ" : "TELEGRAM NICKNAME",
          validation: {
            validate: (value: string) => {
              if (value && !/^@?[a-zA-Z0-9](?:[a-zA-Z0-9_]{3,30}[a-zA-Z0-9])?$/.test(value)) {
                return language == "ua" ? "Нікнейм Телеграма не відповідає формату" : "Invalid Telegram username format";
              }
              return true;
            },
          },
        },]
      })
    ];
    setTeamConfig(config);
    setMemeberConfig(membersConfig)
  }, [language, countMembers]);
  return {
    teamConfig, membersConfig, setMemeberConfig, setCountMembers, countMembers
  };
}

