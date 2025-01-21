import {RegistrationButton} from "@/Atoms/RegistrationButton";

export const RegistrationButtons = () => {

    return (
        <div className={`flex items-center justify-center flex-col gap-6 p-2`}>
            <RegistrationButton width={"390"} title={"Реєстрація учасника"}/>
            <RegistrationButton width={"390"} title={"Реєстрація команди"}/>
        </div>
    )
}