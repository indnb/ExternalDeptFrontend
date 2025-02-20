import { IoIosArrowBack } from "react-icons/io";

interface RegistrationBackButtonProps {
    onClose: () => void;
}

export const BackButton: React.FC<RegistrationBackButtonProps> = ({ onClose }) => {
    return (
        <div onClick={onClose} className="flex flex-row text-black items-center self-center text-center cursor-pointer">
            <div className="text-2xl">
                <IoIosArrowBack />
            </div>
            <p>Назад</p>
        </div>
    );
};
