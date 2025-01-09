import {RegistrationHeader} from "@/src/app/Molecules/RegistrationHeader";
import {RegistrationForm} from "@/src/app/Molecules/RegistrationForm";

export const Registration =()=>{
    return (
        <div className="bg-white">
            <RegistrationHeader/>
            <RegistrationForm/>
        </div>
    )
}