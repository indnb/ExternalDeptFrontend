import { RegistrationText } from "@/Atoms/RegistrationText";
import { RegistrationButtons } from "@/Molecules/RegistrationButtons";
import { MobileRegistration } from "@/Organisms/MobileRegistration";
import { DesktopRegistration } from "@/Organisms/DesktopRegistration";
import { useRefStore } from "@/_store/RegistrationSectionLink";
import { useState, useEffect, useRef } from "react";
import { useLanguageStore } from "@/_store/LanguageChanger";

export const Registration = () => {
  const { language } = useLanguageStore();
  const refRegistrationSection = useRef<any>(null);
  const [selectedForm, setSelectedForm] = useState<
    "participant" | "team" | null
  >(null);
  const handleClose = () => {
    setSelectedForm(null);
  };

  const { setRef } = useRefStore();
  useEffect(() => {
    if (refRegistrationSection.current) {
      setRef(refRegistrationSection);
    }
  }, [refRegistrationSection]);

  return (
    <div
      className="w-full flex flex-col gap-10 justify-center mt-[100px] max-[850px]:mt-[20px]  mb-[80px]"
      ref={refRegistrationSection}
    >
      {!selectedForm ? (
        <div className="flex flex-col gap-6">
          <RegistrationText title={language == "ua" ? `Реєстрація на хаkатон ` : "Registration for the hackathon"} />
          <div className="flex  max-[850px]flex-row flex-col gap-6">
            <RegistrationButtons setSelectedForm={setSelectedForm} />
          </div>
        </div>
      ) : (
        <DesktopRegistration selectedForm={selectedForm} onClose={handleClose} />
      )}
    </div>
  );
};
