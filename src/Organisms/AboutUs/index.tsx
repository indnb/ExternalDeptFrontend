import React from "react";
import { AboutUsSlider } from "@/Molecules/AboutUsSlider";
import { useLanguageStore } from "@/_store/LanguageChanger";

export const AboutUs = () => {
  const { language } = useLanguageStore();

  return (
    <div className="w-[100vw]">
      <h1
        className="text-[48px] text-black  max-[850px]:text-[32px] ml-[25px] mb-[35px] mt-[138px] max-[850px]:mb-[10px] max-[850px]:mt-[30px]"
        style={{ fontFamily: "Kyiv Type Sans" }}
      >
        {language == "ua" ? "Про нас" : "About Us"}
      </h1>
      <AboutUsSlider />
    </div>
  );
};
