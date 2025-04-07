"use client"
import React from 'react'
import { FooterLogoData } from './FooterLogo.data'
import { ItemFooterSocailIcon } from '@/Atoms/ItemFooterSocialIcon'
import Dyikt from "../../public/Logo.svg";
import Image from 'next/image'
import { useInvalidWidgetStore } from '@/_store/InvalidWidget';
import { useLanguageStore } from '@/_store/LanguageChanger';
export const FooterTopPanel = () => {
  const { language } = useLanguageStore()
  const { fontFamily, fontSize } = useInvalidWidgetStore()
  return (
    <div className=' w-[93vw]  max-lg:h-[80px] h-[273px] flex items-center justify-between '>
      <div className='w-[455px] max-lg:w-[191px] max-lg:h-[52px]  flex h-[157px] text-left items-center '>
        <Image src={Dyikt} className='w-[141px] h-[141px] max-lg:h-[46px] max-lg:w-[46px] filter grayscale invert brightness-50' alt="" />
        <div className={`ml-[24px]   text-[white]   max-lg:ml-[9px] leading-tight flex flex-col justify-center items-center 
${fontSize ? "text-[36px] max-lg:text-[18px]" : "text-[28px] max-lg:text-[12px]"}
${fontFamily ? "font-kharkiv" : "font-montserrat"}
`}>
          {language == "ua" ? <>   Відділ <br />
            Зовнішніх<br />
            З&apos;вязків
          </> : <>
            Department&nbsp;of <br />
            External<br />
            Relations
          </>}

        </div>
      </div>
      <div className='max-lg:w-[94px] w-[180px] flex justify-between'>
        {FooterLogoData.map((elem, key) => (
          <ItemFooterSocailIcon key={key} img={elem.img} link={elem.link} />
        )
        )}
      </div>
    </div>
  )
}
