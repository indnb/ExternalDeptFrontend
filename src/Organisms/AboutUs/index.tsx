"use client";
import React from "react";
import { AboutUsSlider } from "@/Molecules/AboutUsSlider";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

export const AboutUs = () => {
  const { language } = useLanguageStore();
  const { fontFamily, fontSize } = useInvalidWidgetStore()

  return (
    <div className="w-[100vw] mb-[185px] max-lg:mb-[70px]">
      <h1
        className={` ${fontFamily ? "font-kyivSerif" : "font-kyivSans"}
text-black font-normal   ml-[25px] mb-[35px]  max-lg:mb-[10px] 
        ${fontSize ? "text-[60px] max-lg:text-[42px]" : "text-[48px] max-lg:text-[32px]"}

`}
      >
        {language == "ua" ? "Про нас" : "About Us"}
      </h1>
      <AboutUsSlider />
    </div>
  );
};
