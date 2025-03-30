"use client"
import { useInvalidWidgetStore } from '@/_store/InvalidWidget'
import React from 'react'
import { useLanguageStore } from "@/_store/LanguageChanger";



export const HackathonInfoPanelBottom = ({ firstRow, secondRow }: { firstRow: string, secondRow: string }) => {

  const { contrast, fontFamily, fontSize } = useInvalidWidgetStore()
  const { language } = useLanguageStore();
  return (
    <div className='w-[100vw] flex justify-center mt-[-50px] max-lg:mt-[-0px] max-w-[1800px]'>
      <div className='w-[47vw] text-center'>
        <h1 style={{ fontFamily: "Montserrat" }} className={` h-full text-left ${fontSize ? (language == 'ua' ? "text-[calc(37/1552*100vw)]  max-lg:text-[14px] min-xl2:text-[36px]" : "text-[calc(33/1552*100vw)]  max-lg:text-[12px] min-xl2:text-[30px]")
          : (language == 'ua' ? "min-xl2:text-[32px] text-[calc(32/1552*100vw)]  max-lg:text-[12px]" : "min-xl2:text-[30px] text-[calc(30/1552*100vw)]  max-sm:text-[9px]")}

        text-[#000000] flex items-center justify-center `}>
          {firstRow}
        </h1>
      </div>
      <div className={`w-[47vw] ${contrast ? "text-[#414141]" : "text-[#203C8F]"} ${fontFamily ? "font-kyivSerif font-[250] " : "font-kyivSans"}   max-lg:h-full   ${language == `ua` ? `min-xl2:text-[266px] text-[calc(250/1552*100vw)]` : `min-xl2:text-[240px] text-[calc(190/1552*100vw)]`} flex items-center justify-center`}>
        {secondRow}
      </div>
    </div>
  )
}




