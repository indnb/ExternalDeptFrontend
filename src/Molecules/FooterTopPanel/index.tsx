import React from 'react'
import { FooterLogoData } from './FooterLogo.data'
import { ItemFooterSocailIcon } from '@/Atoms/ItemFooterSocialIcon'
import img from "../../../public/image-removebg-preview.png"
import Image from 'next/image'
export const FooterTopPanel = () => {
  return (
    <div className=' w-[93vw] max-lg:h-[80px] h-[273px] flex items-center justify-between '>
      <div className=''>
        <Image src={img} className='filter grayscale invert brightness-50' alt="" />
      </div>
      <div className='max-lg:w-[74px] w-[250px] flex justify-between'>
        {FooterLogoData.map((elem, key) => (
          <ItemFooterSocailIcon key={key} img={elem.img} link={elem.link} />
        )
        )}
      </div>
    </div>
  )
}
