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
      className="w-full flex flex-col gap-10 justify-center mt-[100px] max-[850px]:mt-[20px] max-[850px]:mb-[40px] mb-[80px]"
      ref={refRegistrationSection}
    >
      {!selectedForm ? (
        <div className="flex flex-col gap-6">
          <RegistrationText title={language == "ua" ? `Реєстрація на хаkатон` : "Registration for the hackathon"} />
          <div className="flex flex-col-reverse min-[850px]:flex-col gap-6">
            <RegistrationButtons setSelectedForm={setSelectedForm} />
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-center min-[850px]:hidden">
            <MobileRegistration selectedForm={selectedForm} onClose={handleClose} />
          </div>
          <div className="hidden min-[850px]:block">
            <DesktopRegistration selectedForm={selectedForm} onClose={handleClose} />
          </div>
        </>
      )}
    </div>
  );
};
