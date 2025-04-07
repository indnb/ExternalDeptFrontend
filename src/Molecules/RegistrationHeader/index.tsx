import { RegistrationText } from "@/Atoms/RegistrationText";
import { RegistrationLable } from "@/Atoms/RegistrationLable";
import { BackButton } from "@/Atoms/BackButton";
import proiconsCancel from "@/public/proicons_cancel.svg"
import Image from "next/image";
import { useLanguageStore } from "@/_store/LanguageChanger";
interface RegistrationHeaderProps {
  title: string;
  onClose: () => void;
  selectedForm: "participant" | "team";

}
export const RegistrationHeader: React.FC<RegistrationHeaderProps> = ({ title, onClose, selectedForm }) => {
  const { language } = useLanguageStore()
  return (
    <div className="relative  flex items-center w-full  p-2">
      <div className="absolute   flex  justify-center items-center">
        <div className="max-w-[1800px] flex items-start justify-start w-[100vw]  max-2xl:w-[0px] ml-[0px] left-[0px] max-lg:hidden  ">
          <BackButton onClose={onClose} />
        </div>
      </div>

      <div className="flex flex-col w-[100vw] items-center justify-center flex-1 text-center">
        <RegistrationText title={title} />
        {selectedForm == "team" && <RegistrationLable title={language == "ua" ? "*Максимальна кількість учасників в команді - 6." : "Maximum number of team members - 6."} />}
      </div>
      <Image onClick={onClose} src={proiconsCancel} alt="" className="md:hidden absolute right-[20px] cursor-pointer  top-[20px]" />




    </div>
  );
};
