import React from "react";
import { Button } from "@/Atoms/Button";
import { useLanguageStore } from "@/_store/LanguageChanger";

export const MainLeftPanel = () => {
  const { language, changeLanguage } = useLanguageStore();

  return (
    <div className="h-[738px] flex w-[52vw] flex-col justify-center items-center max-[850px]:h-[auto]">
      <p
        className="text-left text-[20px] text-[black] ml-[0px] w-[48vw] max-[850px]:text-[0px]"
        style={{ fontFamily: "Montserrat" }}
      >
        {language == "ua" ? "Відділ зовнішніх зe’язків" : "Eng text"}
      </p>

      <h1
        className="h-[auto] text-[64px] w-[48vw] h-[auto] leading-[64px]  max-[850px]:text-[40px] text-black max-[850px]:leading-[40px] max-[850px]:mt-[22px] max-[850px]:w-[398px]"
        style={{ fontFamily: "Kharkiv Tone" }}
      >
        EDUCATION
        <br /> WITHOUT
        <br /> BORDERS
      </h1>
      <div className="mt-[27px] max-[850px]:w-[auto] w-[50vw]">
        <Button
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
