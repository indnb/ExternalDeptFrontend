import { useInvalidWidgetStore } from '@/_store/InvalidWidget';
import { useLanguageStore } from '@/_store/LanguageChanger';
import React from 'react'

export default function RegisterSuccess() {
  const { language } = useLanguageStore();
  const { fontFamily } = useInvalidWidgetStore()

  return (
    <div className={`${fontFamily ? "font-kyivSerif" : "font-kyivSans"} text-center text-[60px] max-2xl-[850px]:text-[30px] h-[500px] max-lg:h-[550px] flex items-center justify-center text-black `}>
      <h1 >
        {language === 'ua' ? (
          <>
            Ви успішно зареєструвались!<br />До зустрічі!
          </>
        ) : (
          <>
            You have successfully registered!<br />See you soon!
          </>
        )}
      </h1>
    </div>
  )
}

