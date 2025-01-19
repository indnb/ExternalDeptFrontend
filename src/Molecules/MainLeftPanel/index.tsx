import React from "react";
import { Button } from "@/Atoms/Button";
import { useLanguageStore } from "@/_store/LanguageChanger";

export const MainLeftPanel = () => {
  const { language, changeLanguage } = useLanguageStore();

  return (
    <div>
      <h1
        className="text-[64px] w-[195px] max-[650px]:text-[40px] text-black leading-[40px] max-[650px]:mt-[22px] max-[650px]:w-[398px]"
        style={{ fontFamily: "Kharkiv Tone" }}
      >
        EDUCATION WITHOUT BORDERS
      </h1>
      <div className="mt-[27px]">
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
