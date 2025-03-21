"use client";
import React from "react";
import { AboutUsSlider } from "@/Molecules/AboutUsSlider";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

export const AboutUs = () => {
  const { language } = useLanguageStore();
  const { fontFamily } = useInvalidWidgetStore()

  return (
    <div className="w-[100vw]">
      <h1
        className={`text-[48px] ${fontFamily ? "font-kyivSerif" : "font-kyivSans"}
text-black font-normal  max-lg:text-[32px] ml-[25px] mb-[35px] mt-[138px] max-lg:mb-[10px] max-lg:mt-[30px]`}
      >
        {language == "ua" ? "Про нас" : "About Us"}
      </h1>
      <AboutUsSlider />
    </div>
  );
};
