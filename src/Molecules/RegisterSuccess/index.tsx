"use client"
import { useInvalidWidgetStore } from '@/_store/InvalidWidget';
import { useLanguageStore } from '@/_store/LanguageChanger';
import { BackButton } from '@/Atoms/BackButton';
import React, { useEffect } from 'react'
interface RegisterSuccessProps {
  onClose: () => void;
  registerType: "participant" | "team";

}
import proiconsCancel from "@/public/proicons_cancel.svg"
import Image from "next/image";
import { useQueryClient } from '@tanstack/react-query';
export default function RegisterSuccess({ onClose, registerType }: RegisterSuccessProps) {
  const { language } = useLanguageStore();
  const { fontFamily, fontSize } = useInvalidWidgetStore()
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries<any>(["team"]);
  }, [])

  return (
    <div className={`   h-[500px] max-lg:h-[450px]  justify-center text-black relative flex flex-col items-center w-full  p-2`}>
      <div className=" max-2xl:w-[0px] top-[0px] left-[25px] max-lg:hidden absolute ">
        <BackButton onClose={onClose} />
      </div>
      {registerType == 'team' ?
        <><h1 className={` text-center ${fontSize ? "text-[65px] max-lg:text-[34px]" : "text-[60px] max-lg:text-[30px]"} ${fontFamily ? "font-kyivSerif" : "font-kyivSans"}`}>
          {language === 'ua' ? (
            <>
              Ви успішно створили команду!<br />До зустрічі!
            </>
          ) : (
            <>
              You have successfully created the team!<br />See you!
            </>

          )}
        </h1>
          <p className={`
w-[65vw] text-center mt-[30px]
${fontFamily ? "font-kharkiv" : "font-montserrat"}
${fontSize ? "text-[26px]" : "text-[20px]"}
`}>
            {
              language == "ua" ?
                "Не забудьте самостійно зареєструватися та надіслати пароль вашим товаришам по команді."
                :
                "Don't forget to register yourself and send the password to your teammates."
            }
          </p></> :
        <h1 className={` text-center ${fontSize ? "text-[65px] max-lg:text-[34px]" : "text-[60px] max-lg:text-[30px]"} ${fontFamily ? "font-kyivSerif" : "font-kyivSans"}`}>

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

      }
      <Image onClick={onClose} src={proiconsCancel} alt="" className="cursor-pointer md:hidden absolute right-[20px]  top-[20px]" />

    </div >
  )
}

