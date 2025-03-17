import { useLanguageStore } from "@/_store/LanguageChanger";
import { IRegisterButtonData, RegisterButtonData } from "./Register.data";
import { RegisterButton } from "@/Atoms/RegisterButton";

interface RegistrationButtonsProps {
  setSelectedForm: (form: "participant" | "team") => void;
}

export const RegistrationButtons: React.FC<RegistrationButtonsProps> = ({ setSelectedForm }) => {
  const { language } = useLanguageStore();

  return (
    <div className="flex  items-center gap-6 p-2 sm:flex-row justify-center">
      {RegisterButtonData.map((elem: IRegisterButtonData, index) => (
        <RegisterButton
          key={index}
          img={elem.img}
          text={language == "ua" ? elem.text : elem.text_eng}
          callback={() => {
            setSelectedForm(elem.formType as "participant" | "team");
            window.scrollBy({ top: window.innerHeight + 10000, behavior: "smooth" });
          }}
        />
      ))}
    </div>
  );
};
