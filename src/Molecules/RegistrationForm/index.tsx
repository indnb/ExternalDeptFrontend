
import {RegistrationInput} from '@/Molecules/RegistrationInput'
import {RegistrationButton} from "src/Atoms/RegistrationButton";
import { useForm} from 'react-hook-form';
import {inputsConfig} from './RegisrationForm.data'

export const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();


    const onSubmit = (data: FormData) => {
        console.log(data);
    };


    return (
        <form className={`w-full flex flex-col p-10`} onSubmit={handleSubmit(onSubmit)}>
            <RegistrationInput inputsConfig={inputsConfig} control={control} errors={errors}/>
            <RegistrationButton width={"300"} title={'Надіслати'} />
        </form>
    );

};
