import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { IoIosArrowBack } from "react-icons/io";

interface RegistrationBackButtonProps {
  onClose: () => void;
}

export const BackButton: React.FC<RegistrationBackButtonProps> = ({ onClose }) => {
  const { language } = useLanguageStore()
  const { fontFamily, fontSize } = useInvalidWidgetStore()
  return (
    <div onClick={onClose} className="flex flex-row text-black justify-center items-center    text-center cursor-pointer">
      <div >
        <IoIosArrowBack />
      </div>
      <p className={`
${fontSize ? "text-[25px]" : "text-[21px]"}
${fontFamily ? "font-kharkiv" : "font-montserrat"}`}>{language == 'ua' ? "Назад" : "Back"}</p>
    </div>
  );
};
