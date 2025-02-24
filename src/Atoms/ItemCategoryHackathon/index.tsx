import { useInvalidWidgetStore } from '@/_store/InvalidWidget'
import Image from 'next/image'
import React from 'react'

export const ItemCategoryHackathon = ({ img, description }: { img: string, description: string }) => {
  const { contrast, fontSize } = useInvalidWidgetStore()
  return (
    <div className=' flex items-center justify-center w-[83vw] border-t-2 border-black  '>
      <div className='max-[850px]:w-[63vw]  max-[850px]:mb-[12px] max-[1300px]:mt-[25px] max-[1300px]:mb-[25px] mb-[50px] mt-[50px] max-[850px]:mt-[12px] flex justify-between   items-center max-[850px]:flex-col items-start'>
        <div className='max-[850px]:w-auto w-[41vw] flex items-start justify-start'>
          <Image
            className={`w-auto  ${contrast && "grayscale"} max-[850px]:h-[25px] max-[1300px]:h-[50px] h-[78px] object-contain`}
            src={img}
            alt="img category"
          />
        </div>

        <h1 className={`max-[850px]:mt-[11px] max-[850px]:w-[auto] w-[39vw] font-montserrat font-normal ${fontSize ? "text-[calc(27/1552*100vw)] max-[550px]:text-[14px]" : "text-[calc(23/1552*100vw)] max-[550px]:text-[10px]"} text-black`}>

          {description}
        </h1>
      </div>
    </div>
  )
}
