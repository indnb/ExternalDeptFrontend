import { RegistrationText } from "@/Atoms/RegistrationText";
import { RegistrationLable } from "@/Atoms/RegistrationLable";
import { BackButton } from "@/Atoms/BackButton";
import proiconsCancel from "@/public/proicons_cancel.svg"
import Image from "next/image";
import { useLanguageStore } from "@/_store/LanguageChanger";
interface RegistrationHeaderProps {
  title: string;
  onClose: () => void;
}
export const RegistrationHeader: React.FC<RegistrationHeaderProps> = ({ title, onClose }) => {
  const { language } = useLanguageStore()
  return (
    <div className="relative flex items-center w-full p-2">
      <div className=" justify-start  ">
        <BackButton onClose={onClose} />
      </div>

      <div className="flex flex-col justify-center flex-1 text-center">
        <RegistrationText title={title} />
        <RegistrationLable title={language == "ua" ? "*Максимальна кількість учасників в команді - 6." : "Maximum number of team members - 6."} />
      </div>
      <Image onClick={onClose} src={proiconsCancel} alt="" className="md:hidden absolute right-[30px] min-[850px]:invisible" />




    </div>
  );
};
