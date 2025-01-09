import {RegistrationInput} from "@/src/app/Atoms/RegistrationInput";
import {RegistrationSendButton} from "@/src/app/Atoms/RegistrationSendButton";
import { useForm} from 'react-hook-form';

export const RegistrationForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const inputsConfig = [
        { name: "name", placeholder: "ІМ'Я ПРІЗВИЩЕ", validation: { required: "Це поле обов'язкове", pattern: { value: /^[a-zA-Zа-яА-Я\s]+$/, message: "Можна вводити тільки літери" } } },
        { name: "phone", placeholder: "ТЕЛЕФОН", validation: { required: "Це поле обов'язкове", pattern: { value: /^[\+\(\)\d\s]+$/, message: "Тільки цифри" } } },
        { name: "email", placeholder: "ЕЛЕКТРОННА ПОШТА", validation: { required: "Це поле обов'язкове" } },
        { name: "category", placeholder: "КАТЕГОРІЯ", validation: { required: "Це поле обов'язкове" } },
        { name: "teamName", placeholder: "НАЗВА КОМАНДИ", validation: { required: "Це поле обов'язкове" } },
        { name: "school", placeholder: "НАЗВА НАВЧАЛЬНОГО ЗАКЛАДУ", validation: { required: "Це поле обов'язкове" } },
    ];

    return (
        <form className={`w-full flex flex-col p-10`} onSubmit={handleSubmit(onSubmit)}>
            <RegistrationInput inputsConfig={inputsConfig} control={control} errors={errors} />
            <RegistrationSendButton title={'Надіслати'} />
        </form>
    );
};
