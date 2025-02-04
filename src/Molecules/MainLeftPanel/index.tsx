import React from "react";
import { Button } from "@/Atoms/Button";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { useRefStore } from "@/_store/RegistrationSectionLink";

export const MainLeftPanel = () => {
  const { language } = useLanguageStore();
  const { refRegistrationSection } = useRefStore();
  const handlerScroll = () => {
    refRegistrationSection.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-[738px] flex w-[52vw] flex-col justify-center items-center max-[850px]:h-[auto] max-[550px]:h-[180px]">
      <p
        className="text-left text-[20px] text-[black] ml-[0px] w-[48vw] max-[850px]:text-[0px]"
        style={{ fontFamily: "Montserrat" }}
      >
        {language == "ua" ? "Відділ зовнішніх зe’язків" : "Eng text"}
      </p>

      <h1
        className="h-[auto] text-[64px] w-[48vw] h-[auto] leading-[64px]  max-[850px]:text-[40px] max-[550px]:text-[30px] text-black 
        max-[850px]:leading-[40px] max-[850px]:mt-[22px] max-[550px]:mt-[25px]
        max-[850px]:w-[398px] max-[550px]:w-[80vw]"
        style={{ fontFamily: "Kharkiv Tone" }}
      >
        EDUCATION
        <br /> WITHOUT
        <br /> BORDERS
      </h1>
      <div className="mt-[27px] max-[550px]:mt-[20px] max-[850px]:w-[auto] w-[50vw]">
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
    </div>
  );
};
