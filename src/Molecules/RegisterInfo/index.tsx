"use client"
import { useInvalidWidgetStore } from '@/_store/InvalidWidget'
import { useLanguageStore } from '@/_store/LanguageChanger'
import React from 'react'

export const RegisterInfo = () => {
  const { language } = useLanguageStore()
  const { contrast, fontSize, fontFamily } = useInvalidWidgetStore()
  return (

    <div className='w-[100vw] flex items-center justify-center'>
      <div className={`flex h-[160px] w-[459px] rounded-[16px] p-[9px] justify-center items-center text-center text-black
       ${contrast ? "border-[#414141]" : "border-mainBlue"}
${fontFamily ? "font-kharkiv" : "font-montserrat"}
${fontSize ? "text-[18px] max-lg:text-[16px]" : "text-[16px] max-lg:text-[14px]"}
        border-[2px]   max-lg:h-[130px]   max-lg:p-[5px] max-lg:w-[369px] max-lg:border-[1.5px]`}>
        {language == "ua" ? "Після реєстрації команди збережіть пароль та поділіться ним з іншими учасниками вашої команди. Не забудьте також зареєструватися самі."
          :
          "After registering the team, save the password and share it with other members of your team. Don't forget to register yourself as well."
        }

      </div>
    </div>

  )
} 
