import {RegistrationHeader} from "@/Molecules/RegistrationHeader";
import {RegistrationForm} from "@/Molecules/RegistrationForm";
import {RegistrationNavbar} from "@/Molecules/RegistrationNavbar";

export const MobileRegistration = () => {
    return (
        <div className="bg-white shadow-lg shadow-gray-500 rounded-lg w-[90%] flex flex-col text-center items-center self-center">
            <RegistrationNavbar/>
            <RegistrationHeader/>
            <RegistrationForm/>
        </div>
    )
}