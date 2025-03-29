import React from 'react'
import { FooterLogoData } from './FooterLogo.data'
import { ItemFooterSocailIcon } from '@/Atoms/ItemFooterSocialIcon'
import Dyikt from "../../public/Logo.svg";
import Image from 'next/image'
export const FooterTopPanel = () => {
  return (
    <div className=' w-[93vw]  max-lg:h-[80px] h-[273px] flex items-center justify-between '>
      <div className='w-[395px] max-lg:w-[131px] max-lg:h-[52px]  flex h-[157px] text-left items-center '>
        <Image src={Dyikt} className='w-[141px] h-[141px] max-lg:h-[46px] max-lg:w-[46px] filter grayscale invert brightness-50' alt="" />
        <div className='ml-[24px]  font-montserrat  text-[28px] max-lg:text-[12px] max-lg:ml-[9px] leading-tight flex flex-col justify-center items-center'>
          Відділ <br />
          Зовнішніх<br />
          З&apos;вязків
        </div>
      </div>
      <div className='max-lg:w-[74px] w-[200px] flex justify-between'>
        {FooterLogoData.map((elem, key) => (
          <ItemFooterSocailIcon key={key} img={elem.img} link={elem.link} />
        )
        )}
      </div>
    </div>
  )
}
