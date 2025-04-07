"use client"
import { useInvalidWidgetStore } from '@/_store/InvalidWidget'
import { useLanguageStore } from '@/_store/LanguageChanger'
import React from 'react'

export const RegisterInfo = () => {
  const { language } = useLanguageStore()
  const { contrast, fontSize, fontFamily } = useInvalidWidgetStore()
  return (

    <div className='w-[100vw] flex items-center justify-center'>
      <div className={`flex h-[160px] w-[479px] rounded-[16px] p-[9px] justify-center items-center text-center text-black
       ${contrast ? "border-[#414141]" : "border-mainBlue"}
${fontFamily ? "font-kharkiv" : "font-montserrat"}
${fontSize ? "text-[24px] max-lg:text-[20px] max-sm:text-[18px]" : "text-[16px] max-lg:text-[14px] max-sm:w-[250px]"}
        border-[2px]   max-lg:h-[150px] max-sm:w-[300px]   max-lg:p-[5px] max-lg:w-[369px] max-lg:border-[1.5px]`}>
        {language == "ua" ? "Для зв'язку нам потрібен ваш нікнейм в телеграмі. Тож будь ласка зробіть пошук по ньому публічним. Дякую!"
          :
          "To contact you, we need your Telegram username. So please make it publicly searchable. Thank you!"
        }

      </div>
    </div>

  )
} 
