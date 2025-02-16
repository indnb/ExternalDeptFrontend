import React from "react"; import { NewsSlider } from "@/Molecules/NewsSlider";
import { useLanguageStore } from "@/_store/LanguageChanger";

export const News = () => {
  const { language } = useLanguageStore();

  return (
    <section className="max-[850px]:h-[240px] h-[700px]  flex flex-col relative">
      <h1
        className="max-[850px]:w-[90vw] w-[95vw] text-black max-[850px]:text-[32px]  text-[48px] ml-[25px] mb-[35px] max-[850px]:mb-[10px]"
        style={{ fontFamily: "Kyiv Type Sans" }}
      >
        {language == "ua" ? "Новини" : "News"}
      </h1>
      <NewsSlider />
    </section>
  );
};
