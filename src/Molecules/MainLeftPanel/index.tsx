import React from "react";
import { Button } from "@/Atoms/Button";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { useRefStore } from "@/_store/RegistrationSectionLink";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

export const MainLeftPanel = () => {
  const { language } = useLanguageStore();
  const { refRegistrationSection } = useRefStore();
  const { fontFamily } = useInvalidWidgetStore()
  const handlerScroll = () => {
    if (refRegistrationSection?.current) {
      refRegistrationSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-[738px] flex w-[52vw] flex-col justify-center items-center max-lg:h-[auto] max-sm:h-[180px]">
      <p
        className="text-left text-[20px] text-[black] ml-[0px] w-[48vw] max-lg:text-[0px]"
        style={{ fontFamily: "Montserrat" }}
      >
        {language == "ua" ? "Відділ зовнішніх зe’язків" : "Department of External Relations"}
      </p>

      <h1
        className={`h-[auto] text-[64px] w-[48vw]  leading-[64px]  max-lg:text-[40px] max-sm:text-[30px] text-black 
        max-lg:leading-[40px] max-lg:mt-[22px] max-sm:mt-[25px]
        max-lg:w-[398px] max-sm:w-[80vw] ${fontFamily ? "font-kyivSerif" : "font-kyivSans"}`}
      //style={{
      //  fontFamily: fontFamily ? "Kharkiv Tone" : "Kyiv*Type Serif",
      //}}
      >
        EDUCATION
        <br /> WITHOUT
        <br /> BORDERS
      </h1>
      <div className="mt-[27px] max-sm:mt-[20px] max-lg:w-[auto] w-[50vw]">
        <Button
          callback={handlerScroll}
          title={
            language == "ua"
              ? "Реєстрація на хакатон"
              : "Hackathon registration"
          }
          colorButton="blue"
        />
      </div>
    </div >
  );
};
