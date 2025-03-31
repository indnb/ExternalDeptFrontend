"use client"
import { RegistrationText } from "@/Atoms/RegistrationText";
import { RegistrationButtons } from "@/Molecules/RegistrationButtons";
import { DesktopRegistration } from "@/Organisms/DesktopRegistration";
import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { useRefStore } from "@/_store/RegistrationSectionLink";
import { useGetEntity } from "@/hook/useGetTeam";

export const Registration = () => {
  const { language } = useLanguageStore();
  useGetEntity("team")
  useGetEntity("university")

  const refRegistrationSection = useRef<any>(null);
  const [selectedForm, setSelectedForm] = useState<
    "participant" | "team" | null
  >(null);
  const handleClose = () => {
    setSelectedForm(null);
  };
  const { setRef } = useRefStore();
  const scrollButton = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (refRegistrationSection.current) {
      setRef(refRegistrationSection);
    }
  }, [refRegistrationSection]);
  useEffect(() => {
    if (selectedForm && scrollButton.current) {
      const scrollToButton = () => {
        scrollButton.current?.scrollIntoView({
          behavior: "smooth",
          block: "end"
        });
      };
      const scrollMore = () => {
        window.scrollBy(0, 50);
      };

      const timer1 = setTimeout(scrollToButton, 200);
      const timer2 = setTimeout(scrollMore, 500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [selectedForm, scrollButton]);
  return (
    <div
      className="w-full flex flex-col  justify-center  max-lg:mb-[40px]  mb-[80px]"
      ref={refRegistrationSection}

    >
      {!selectedForm ? (
        <div className="flex flex-col gap-6">
          <RegistrationText title={language == "ua" ? `Реєстрація на хаkатон ` : "Registration for the hackathon"} />
          <div className="flex  max-lgflex-row flex-col gap-6">
            <RegistrationButtons setSelectedForm={setSelectedForm} />
          </div>
        </div>
      ) : (
        <div ref={scrollButton}>
          <DesktopRegistration selectedForm={selectedForm} onClose={handleClose} />
        </div>


      )}
    </div>
  );
};
