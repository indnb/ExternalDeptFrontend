import {RegistrationText} from "@/src/app/Atoms/RegistrationText";
import {RegistrationInput} from "@/src/app/Atoms/RegistrationInput";
import {RegistrationLabel} from "@/src/app/Atoms/RegistrationLabel";

export const RegistrationHeader=()=>{
    return (
        <div>
            <RegistrationText title={'Реєстрація учасника №1'}/>
            <RegistrationLabel title={'*Максимальна кількість учасників в команді - 6.'}/>
        </div>
    )
}