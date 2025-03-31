"use client"
import { useInvalidWidgetStore } from '@/_store/InvalidWidget';
import { useLanguageStore } from '@/_store/LanguageChanger';
import React from 'react'

export const TimerStartHackathon = () => {
  const { contrast, fontFamily, fontSize } = useInvalidWidgetStore();
  const { language } = useLanguageStore()



  return (
    <div className={` ${fontFamily ? "eont-montserrat" : "font-kyivSans"}  mb-[151px] max-lg:mb-[48px]  w-[100vw] flex items-end justify-center`}>
      <div className={` ${contrast ? " text-[#414141] border-[#414141]" : "text-[#203C8F] border-[#203C8F]"}  h-[84px] w-[582px] 
${fontSize ? "text-[34px] max-lg:text-[18px]" : "text-[32px] max-lg:text-[16px]"}
 max-lg:h-[41px] border-2  rounded-[8px] max-lg:w-[284px]  flex items-center justify-center`}>
        {language == "ua" ? "Дата проведення: 6 травня" : "Date of conduction:  May 6"}
      </div>
    </div>
  )
}
