import axios from "axios";
let DataUniversity = []
let DataTeam = []

try {
  await axios.get(`${process.env.API_PORT}/hackathon_2024/university/all`).then((data) => {
    DataUniversity = data.data
  })
  await axios.get(`${process.env.API_PORT}/hackathon_2024/team/all`).then((data) => {
    DataTeam = data.data
  })
} catch (e) {

}
export const inputsConfig = [
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
        return true;
      }
    }
  },
  {
    name: "phone",
    type: "text",
    placeholder: "НОМЕР ТЕЛЕФОНУ",
    validation: {
      required: "Це поле обов'язкове",
      validate: (value: string) => {
        if (!/^[\+\(\)\d\s]+$/.test(value)) {
          return "Тільки цифри";
        }
        return true;
      }
    }
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
      }
    }
  },
  {
    name: "university",
    type: "select",
    placeholder: "НАЗВА НАВЧАЛЬНОГО ЗАКЛАДУ",
    options: DataUniversity.map((university: any) => university.name),
    validation: {
      required: "Це поле обов'язкове"
    }
  },
  {
    name: "teamName",
    type: "select",
    placeholder: "ОБЕРІТЬ КОМАНДУ",
    options: DataTeam.map((team: any) => team.name),
    validation: {
      required: "Це поле обов'язкове"
    }
  },
  {
    name: "password",
    type: "text",
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
      }
    }
  }
];
