"use client"
import React from 'react'
import { Button } from "@/Atoms/Button";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { useRefStore } from "@/_store/RegistrationSectionLink";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
import "./mainSecondVariant.css"
export const MainSecondVariant = () => {
  const { language } = useLanguageStore();
  const { refRegistrationSection } = useRefStore();
  const { fontFamily, contrast } = useInvalidWidgetStore()
  const handlerScroll = () => {
    if (refRegistrationSection?.current) {
      refRegistrationSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='mt-[80px] h-[870px] max-lg:mt-[30px] max-lg:[407px] flex flex-col justify-center items-center w-[100vw] max-lg:h-[465px] '>
      <div className={`education-container ${fontFamily ? "font-kyivSerif" : "font-kharkiv"}`}>
        <div className="education-title">EDUCATION</div>
        <div className="education-without-border">
          <div className={`content ${fontFamily ? " flex justify-center items-center" : "text-center"} ${contrast ? "bg-[#414141]" : "bg-[#203C8F]"}`}>
            WITHOUT
          </div>

        </div>
        <div className="education-borders">BORDERS</div>

      </div>
      <p
        className={`text-left text-[0px] text-[black] max-lg:text-[14px] max-lg:mt-[12px]
         ${fontFamily ? "font-kharkiv" : "font-montserrat"} `}
      >
        {language == "ua" ? "Відділ зовнішніх зв’язків" : "Department of External Relations"}
      </p>
      <div className="  max-lg:w-[auto] mt-[140px] max-lg:mt-[58px]">
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
  )
}
