import { useTeamApiQuery } from "@/api/useGetTeam";
import { useUniversityApiQuery } from "@/api/useGetUniversity";
import { InputFieldProps } from "@/Atoms/RegistrationInputField";
import axios from "axios";
import { useEffect } from "react";
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

  if (isUniversityLoading || isTeamLoading || universityError || teamError) {
    return { inputsConfig: [], isLoading: isUniversityLoading || isTeamLoading, error: universityError || teamError };
  }
  const participantConfig = [
    {
      name: "name",
      type: "text",
      placeholder: "ІМ'Я ПРІЗВИЩЕ",
      validation: {
        required: "Це поле обов'язкове",
        validate: (value: string) => {
          if (!/^[a-zA-Zа-яА-Я\s]+$/.test(value)) {
            return "Можна вводити тільки літери";
          }
          const words = value.trim().split(/\s+/);
          if (words.length !== 2) {
            return "Має бути прізвище та і'мя";
          }
          return true;
        },
      }
    },
    {
      name: "phone",
      type: "text",
      placeholder: "НОМЕР ТЕЛЕФОНУ",
      validation: {
        required: "Це поле обов'язкове",
        validate: (value: string) => {
          if (!/^[\d]+$/.test(value)) {
            return "Тільки цифри";
          }
          if (value.length !== 10) {
            return "Номер складається з 10 цифр";
          }
          return true;
        },
      },
    },
    {
      name: "nickname_tg",
      type: "text",
      placeholder: "НІКНЕЙМ В ТЕЛЕГРАМІ",
      validation: {
        required: "Це поле обов'язкове",
        validate: (value: string) => {
          if (!new RegExp("^[a-zA-Z0-9](?:[a-zA-Z0-9_]{3,30}[a-zA-Z0-9])?$").test(value)) {
            return "Нікнейм Телеграма не відповідає формату";
          }
          return true;
        },
      }
    },
    {
      name: "university",
      type: "select",
      placeholder: "НАЗВА НАВЧАЛЬНОГО ЗАКЛАДУ",
      options: universityData.flatMap((university: IUniversity) => {
        const { id, name, name_eng } = university;
        return [
          { id, name },
          { id, name: name_eng }
        ];
      }),
      validation: {
        required: "Це поле обов'язкове"
      }
    },
    {
      name: "teamName",
      type: "select",
      placeholder: "ОБЕРІТЬ КОМАНДУ",
      options: teamData.map((team: ITeam) => {
        return {
          name: team.name,
          id: team.id
        }
      }),
      validation: {
        required: "Це поле обов'язкове"
      }
    },
    {
      name: "password_registration",
      type: "password",
      placeholder: "ПАРОЛЬ",
      validation: {
        required: "Це поле обов'язкове",
        validate: (value: string) => {
          const isValidPassword = (input: string) => {
            if (input.length < 10 || input.length > 20) return false;
            const hasDigit = /\d/.test(input);
            const hasSymbol = /[!@#$%^&*()_+=\-{}\[\]|\\:;'<>,.?/~`]/.test(input);
            const hasLowercase = /[a-z]/.test(input);
            const hasUppercase = /[A-Z]/.test(input);

            return hasDigit && hasSymbol && hasLowercase && hasUppercase;
          };
          if (!isValidPassword(value)) {
            return "Пароль має бути від 10 до 20 символів і містити цифри, символи, великі та малі літери.";
          }
          return true;
        },
      },
    },
    {
      name: "passwordAgain",
      type: "password",
      placeholder: "ПІДТВЕРДЖЕННЯ ПАРОЛЮ",
      validation: {

        required: "Це поле обов'язкове",
        validate: (value: string, formValues: any) => {
          if (value !== formValues.password_registration) {
            return "Паролі не співпадають";
          }
          return true;
        },
      },
    },
  ];
  return { participantConfig, isLoading: isUniversityLoading, error: universityError };
};
