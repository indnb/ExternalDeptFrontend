import React from "react";
import { Button } from "@/Atoms/Button";
import { useLanguageStore } from "@/_store/LanguageChanger";

export const Main = () => {
  const { language, changeLanguage } = useLanguageStore();

  return (
    <main className="h-[580px] flex items-center justify-start bg-white max-[650px]:flex-col">
      <div className="max-[650px]:w-[398px] max-[650px]:h-[290px] bg-[#203C8F] max-[650px]:mt-[30px] rounded-[8px]"></div>
      <h1
        className="text-[40px] text-black leading-[40px] max-[650px]:mt-[22px] max-[650px]:w-[398px]"
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
    </main>
  );
};
