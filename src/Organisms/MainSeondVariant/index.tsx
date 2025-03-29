"use client"
import React from 'react'
import { Button } from "@/Atoms/Button";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { useRefStore } from "@/_store/RegistrationSectionLink";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

export const MainSecondVariant = () => {
  const { language } = useLanguageStore();
  const { refRegistrationSection } = useRefStore();
  const { fontFamily } = useInvalidWidgetStore()
  const handlerScroll = () => {
    if (refRegistrationSection?.current) {
      refRegistrationSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='mt-[80px] h-[690px] max-lg:mt-[30px] max-lg:[407px] flex flex-col justify-center items-center w-[100vw] max-lg:h-[431px] '>
      <div className="relative w-[90vw] msx-w-[1300px] text-[100px] h-[336px] max-lg:h-[195px] 
        max-lg:w-[361px]
        max-lg:text-[50px] font-kharkiv text-[black] max-sm:text-[48px]">
        <div className="absolute top-0  w-full ">EDUCATION</div>
        <div className="absolute top-[110px] w-full flex items-center justify-center  transform rotate-[-7deg]
          max-lg:rotate-[-4deg] max-lg:top-[74px]">
          <div className='w-[692px] h-[135px] bg-mainBlue text-center text-white
            max-lg:w-[322px] max-lg:h-[64px] 
'>
            WITHOUT
          </div>

        </div>
        <div className="absolute top-[210px] w-full 
          flex items-end justify-end max-lg:justify-center max-lg:items-center
          max-lg:top-[155px]          ">BORDERS</div>
      </div>
      <p
        className="text-left text-[0px] text-[black] max-lg:text-[14px] max-lg:mt-[18px]"
        style={{ fontFamily: "Montserrat" }}
      >
        {language == "ua" ? "Відділ зовнішніх зe’язків" : "Department of External Relations"}
      </p>
      <div className=" max-sm:mt-[20px] max-lg:w-[auto] mt-[140px] max-lg:mt-[58px]">
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
