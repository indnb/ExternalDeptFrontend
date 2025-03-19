import { useLanguageStore } from "@/_store/LanguageChanger";
import { InputConfig } from "../RegistrationInput";
import { useEffect, useState } from "react";

export const useRegisterTeam = () => {
  const { language } = useLanguageStore();
  const [teamConfig, setTeamConfig] = useState<InputConfig[]>([]);

  useEffect(() => {
    if (!language) {
      setTeamConfig([]);
      return;
    }
    const config: InputConfig[] = [
      {
        name: "name",
        type: "text",
        placeholder: language === "ua" ? "НАЗВА КОМАНДИ" : "TEAM NAME",
        validation: {
          required: language === "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => /^[a-zA-Zа-яА-Я\s]+$/.test(value) || (language === "ua" ? "Можна вводити тільки літери" : "Only letters are allowed"),
        },
      },
      {
        name: "category",
        type: "select",
        placeholder: language === "ua" ? "КАТЕГОРІЯ НА ХАКАТОН" : "HACKATHON CATEGORY",
        options: [
          { id: "Software", name: "Software" },
          { id: "gamedev", name: "GameDev" },
          { id: "blockchain", name: "Blockchain" },
          { id: "iot", name: "IoT" },
        ],
        validation: {
          required: language === "ua" ? "Це поле обов'язкове" : "This field is required",
        },
      },
      {
        name: "nickname_tg",
        type: "text",
        placeholder: language === "ua" ? "НІКНЕЙМ ЛІДЕРА В ТЕЛЕГРАМІ" : "TELEGRAM LEADER NICKNAME",
        validation: {
          required: language === "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => /^[a-zA-Z0-9_]{4,32}$/.test(value) || (language === "ua" ? "Нікнейм Телеграма не відповідає формату" : "Telegram nickname format is incorrect"),
        },
      },
      {
        name: "password_registration",
        type: "password",
        placeholder: language === "ua" ? "ПАРОЛЬ" : "PASSWORD",
        validation: {
          required: language === "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string) => {
            const isValidPassword = value.length >= 10 && value.length <= 20 &&
              /[A-Z]/.test(value) &&
              /[a-z]/.test(value) &&
              /\d/.test(value) &&
              /[!@#$%^&*()_+=\-{}\[\]|\\:;'<>,.?/~`]/.test(value);

            return isValidPassword || (language === "ua"
              ? "Пароль має бути від 10 до 20 символів і містити цифри, символи, великі та малі літери."
              : "Password must be between 10 and 20 characters and contain digits, symbols, uppercase, and lowercase letters.");
          },
        },
      },
      {
        name: "passwordAgain",
        type: "password",
        placeholder: language === "ua" ? "ПІДТВЕРДЖЕННЯ ПАРОЛЮ" : "CONFIRM PASSWORD",
        validation: {
          required: language === "ua" ? "Це поле обов'язкове" : "This field is required",
          validate: (value: string, formValues: any) => value === formValues?.password_registration || (language === "ua" ? "Паролі не співпадають" : "Passwords do not match"),
        },
      },
    ];
    setTeamConfig(config);
  }, [language]);
  return { teamConfig };
};

