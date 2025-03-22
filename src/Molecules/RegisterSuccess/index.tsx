import { useInvalidWidgetStore } from '@/_store/InvalidWidget';
import { useLanguageStore } from '@/_store/LanguageChanger';
import { BackButton } from '@/Atoms/BackButton';
import React from 'react'
interface RegisterSuccessProps {
  onClose: () => void;
}
import proiconsCancel from "@/public/proicons_cancel.svg"
import Image from "next/image";
export default function RegisterSuccess({ onClose }: RegisterSuccessProps) {
  const { language } = useLanguageStore();
  const { fontFamily } = useInvalidWidgetStore()

  return (
    <div className={`   h-[500px] max-lg:h-[450px]  justify-center text-black relative flex items-center w-full  p-2`}>
      <div className=" max-2xl:w-[0px] top-[0px] left-[25px] max-lg:hidden absolute ">
        <BackButton onClose={onClose} />
      </div>
      <h1 className={`max-lg:text-[30px] text-center text-[60px] ${fontFamily ? "font-kyivSerif" : "font-kyivSans"}`}>
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
      <Image onClick={onClose} src={proiconsCancel} alt="" className="md:hidden absolute right-[20px]  top-[20px]" />

    </div>
  )
}

