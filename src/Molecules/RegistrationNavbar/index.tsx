import { RegistrationImage } from "@/Atoms/RegistrationImage";
import { RxCross1 } from "react-icons/rx";
interface RegistrationNavbarProps {
    onClose: () => void;
}

export const RegistrationNavbar: React.FC<RegistrationNavbarProps> = ({ onClose }) => {
    return (
        <div className="flex flex-row justify-between w-full pt-2 p-1">
            <RegistrationImage />
            <span
                className="text-black text-2xl flex text-center items-center self-center cursor-pointer"
                onClick={onClose}
            >
            <RxCross1/>
            </span>
        </div>
    );
};
