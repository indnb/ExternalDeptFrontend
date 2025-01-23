export const inputsConfig = [
    { name: "name", type: "text", placeholder: "ІМ'Я ПРІЗВИЩЕ", validation: { required: "Це поле обов'язкове", pattern: { value: /^[a-zA-Zа-яА-Я\s]+$/, message: "Можна вводити тільки літери" } } },
    { name: "phone", type: "text", placeholder: "+38 099 000 00 00", validation: { required: "Це поле обов'язкове", pattern: { value: /^[\+\(\)\d\s]+$/, message: "Тільки цифри" } } },
    { name: "email", type: "text", placeholder: "Нікнейм в телеграмі", validation: { required: "Це поле обов'язкове" } },
    { name: "category", type: "text", placeholder: "Назва навчального закладу", validation: { required: "Це поле обов'язкове" } },
    { name: "teamName", type: "text", placeholder: "Назва команди", validation: { required: "Це поле обов'язкове" } },
    { name: "school", type: "text", placeholder: "Пароль", validation: { required: "Це поле обов'язкове" } },
];