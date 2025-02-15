import React from 'react'
import { FooterLogoData } from './FooterLogo.data'
import { ItemFooterSocailIcon } from '@/Atoms/ItemFooterSocialIcon'
export const FooterTopPanel = () => {
  return (
    <div className=' w-[93vw] max-[850px]:h-[80px] h-[273px] flex items-center justify-between '>
      <div className=''></div>
      <div className='max-[850px]:w-[124px] w-[376px] flex justify-between'>
        {FooterLogoData.map((elem) => (
          <ItemFooterSocailIcon img={elem.img} link={elem.link} />
        )

        )}
      </div>
    </div>
  )
}
