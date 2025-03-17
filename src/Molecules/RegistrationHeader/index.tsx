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
      <div className="hidden justify-start min-[850px]:block">
        <BackButton onClose={onClose} />
      </div>

      <div className="flex flex-col justify-center flex-1 text-center">
        <RegistrationText title={title} />
        <RegistrationLable title={language == "ua" ? "*Максимальна кількість учасників в команді - 6." : "Maximum number of team members - 6."} />
      </div>
      <Image onClick={onClose} src={proiconsCancel} alt="" className="min-[850px]:h-[0px] min-[850px]:w-[0px] absolute legt-[100vw] right-[30px]" />



    </div>
  );
};
