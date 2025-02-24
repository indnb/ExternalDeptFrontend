export const inputsConfig = [
    {
        name: "name",
        type: "text",
        placeholder: "НАЗВА КОМАНДИ",
        validation: {
            required: "Це поле обов'язкове",
            validate: (value: string) => {
                if (!/^[a-zA-Zа-яА-Я\s]+$/.test(value)) {
                    return "Можна вводити тільки літери";
                }
                return true;
            },
        },
    },
    {
        name: "category",
        type: "select",
        placeholder: "КАТЕГОРІЯ НА ХАКАТОН",
        options: ["Web 3.0", "Military", "Education","Cybersecurity"],
        validation: {
            required: "Це поле обов'язкове",
        },
    },
    {
        name: "nickname_tg",
        type: "text",
        placeholder: "НІКНЕЙМ ЛІДЕРА В ТЕЛЕГРАМІ",
        validation: {
            required: "Це поле обов'язкове",
            validate: (value: string) => {
                if (!new RegExp("^[a-zA-Z0-9](?:[a-zA-Z0-9_]{3,30}[a-zA-Z0-9])?$").test(value)) {
                    return "Нікнейм Телеграма не відповідає формату";
                }
                return true;
            },
        },
    },
    {
        name: "password_registration",
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
            },
        },
    },
    {
        name: "passwordAgain",
        type: "text",
        placeholder: "ПІДТВЕРДЖЕННЯ ПАРОЛЮ",
        validation: {

            required: "Це поле обов'язкове",
            validate: (value: string, context: any) => {
                if (value !== context.password) {
                    return "Паролі не співпадають";
                }
                return true;
            },
        },
    },
];