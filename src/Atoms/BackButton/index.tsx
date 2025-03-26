import { useLanguageStore } from "@/_store/LanguageChanger";
import { IoIosArrowBack } from "react-icons/io";

interface RegistrationBackButtonProps {
  onClose: () => void;
}

export const BackButton: React.FC<RegistrationBackButtonProps> = ({ onClose }) => {
  const { language } = useLanguageStore()
  return (
    <div onClick={onClose} className="flex flex-row text-black    text-center cursor-pointer">
      <div className="text-2xl">
        <IoIosArrowBack />
      </div>
      <p>{language == 'ua' ? "Назад" : "Back"}</p>
    </div>
  );
};
