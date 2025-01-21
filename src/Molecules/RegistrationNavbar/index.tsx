import {RegistrationImage} from "@/Atoms/RegistrationImage";

export const RegistrationNavbar = () => {
    return (
        <div className="flex flex-row justify-between w-full pt-2 p-1">
            <RegistrationImage/>
            <span className={`text-black text-2xl flex text-center items-center self-center`}>&#10006;</span>
        </div>
    )
}