import { RegistrationHeader } from "@/Molecules/RegistrationHeader";
import { RegistrationForm } from "@/Molecules/RegistrationForm";
import { useLanguageStore } from "@/_store/LanguageChanger";

interface DesktopRegistrationProps {
  selectedForm: "participant" | "team";
  onClose: () => void;
}

export const DesktopRegistration: React.FC<DesktopRegistrationProps> = ({ selectedForm, onClose }) => {
  const { language } = useLanguageStore();

  const formTitles: Record<DesktopRegistrationProps["selectedForm"], { text: string, text_eng: string }> = {
    participant: { text: "Реєстрація учасника", text_eng: "Participant Registration" },
    team: { text: "Реєстрація команди", text_eng: "Team Registration" }
  };


  return (
    <div className="bg-white">
      <RegistrationHeader onClose={onClose} title={language == "ua" ? formTitles[selectedForm].text : formTitles[selectedForm].text_eng} />
      <RegistrationForm selectedForm={selectedForm} />
    </div>
  );
};
