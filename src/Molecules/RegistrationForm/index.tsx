import {RegistrationInput} from '@/Molecules/RegistrationInput'
import {RegistrationButton} from "src/Atoms/RegistrationButton";
import { useForm} from 'react-hook-form';

export const RegistrationForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    const inputsConfig = [
        { name: "name", type: "text", placeholder: "ІМ'Я ПРІЗВИЩЕ", validation: { required: "Це поле обов'язкове", pattern: { value: /^[a-zA-Zа-яА-Я\s]+$/, message: "Можна вводити тільки літери" } } },
        { name: "phone", type: "text", placeholder: "+38 099 000 00 00", validation: { required: "Це поле обов'язкове", pattern: { value: /^[\+\(\)\d\s]+$/, message: "Тільки цифри" } } },
        { name: "email", type: "text", placeholder: "Нікнейм в телеграмі", validation: { required: "Це поле обов'язкове" } },
        { name: "category", type: "text", placeholder: "Назва навчального закладу", validation: { required: "Це поле обов'язкове" } },
        { name: "teamName", type: "text", placeholder: "Назва команди", validation: { required: "Це поле обов'язкове" } },
        { name: "school", type: "text", placeholder: "Пароль", validation: { required: "Це поле обов'язкове" } },
    ];


    return (
        <form className={`w-full flex flex-col p-10`} onSubmit={handleSubmit(onSubmit)}>
            <RegistrationInput inputsConfig={inputsConfig} control={control} errors={errors}/>
            <RegistrationButton width={"300"} title={'Надіслати'} />
        </form>
    );
};
