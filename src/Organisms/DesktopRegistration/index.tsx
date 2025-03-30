"use client"
import { RegistrationHeader } from "@/Molecules/RegistrationHeader";
import { RegistrationForm } from "@/Molecules/RegistrationForm";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { useState } from "react";
import RegisterSuccess from "@/Molecules/RegisterSuccess";
import { RegisterInfo } from "@/Molecules/RegisterInfo";

interface DesktopRegistrationProps {
  selectedForm: "participant" | "team";
  onClose: () => void;
}

export const DesktopRegistration: React.FC<DesktopRegistrationProps> = ({ selectedForm, onClose }) => {
  const { language } = useLanguageStore();
  const [statusRegister, setStatusRegister] = useState<boolean>(false)

  const formTitles: Record<DesktopRegistrationProps["selectedForm"], { text: string, text_eng: string }> = {
    participant: { text: "Реєстрація учасника", text_eng: "Participant Registration" },
    team: { text: "Реєстрація команди", text_eng: "Team Registration" }
  };


  return (
    <div>
      {statusRegister ?
        <RegisterSuccess onClose={onClose} />
        :
        <>
          <RegistrationHeader onClose={onClose} title={language == "ua" ? formTitles[selectedForm].text : formTitles[selectedForm].text_eng} />
          {selectedForm == "team" && <RegisterInfo />}
          <RegistrationForm selectedForm={selectedForm} setStatusRegister={setStatusRegister} />
        </>
      }

    </div>
  );
};
