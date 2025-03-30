"use client"
import { useLanguageStore } from '@/_store/LanguageChanger'
import React from 'react'

export const RegisterInfo = () => {
  const { language } = useLanguageStore()
  return (

    <div className='w-[100vw] flex items-center justify-center'>
      <div className='flex h-[140px] w-[449px] rounded-[16px] text-[16px] justify-center items-center text-center text-black border-[2px] border-mainBlue max-lg:text-[14px] max-lg:h-[100px] max-lg:w-[349px] max-lg:border-[1.5px]'>
        {language ? "Після реєстрації команди збережіть пароль та поділіться ним з іншими учасниками вашої команди. Не забудьте також зареєструватися самі."
          :
          "After registering the team, save the password and share it with other members of your team. Don't forget to register yourself as well."
        }

      </div>
    </div>

  )
} 
