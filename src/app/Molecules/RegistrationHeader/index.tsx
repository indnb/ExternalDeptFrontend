import {RegistrationText} from "@/src/app/Atoms/RegistrationText";
import {RegistrationLable} from "@/src/app/Atoms/RegistrationLable";

export const RegistrationHeader=()=>{
    return (
        <div>
            <RegistrationText title={'Реєстрація учасника №1'}/>
            <RegistrationLable title={'*Максимальна кількість учасників в команді - 6.'}/>
        </div>
    )
}