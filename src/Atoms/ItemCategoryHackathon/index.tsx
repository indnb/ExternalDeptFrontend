import { useInvalidWidgetStore } from '@/_store/InvalidWidget'
import Image from 'next/image'
import React from 'react'

export const ItemCategoryHackathon = ({ img, description, name }: { img: string, description: string, name: string }) => {
  const { contrast, fontSize } = useInvalidWidgetStore()
  return (
    <div className='text-center flex items-center justify-center w-[83vw] border-t-2 border-black  '>
      <div className='text-center max-[850px]:w-[63vw]  max-[850px]:mb-[12px] max-[1300px]:mt-[25px] max-[1300px]:mb-[25px] mb-[50px] mt-[50px] max-[850px]:mt-[12px] flex justify-between   items-center max-[850px]:flex-col '>
        <div className='text-center  items-center  max-[850px]:w-auto w-[41vw] flex  justify-start'>
          <Image
            className={`w-auto  ${contrast && "grayscale"} max-[850px]:h-[25px] max-[1300px]:h-[50px] h-[78px] object-contain`}
            src={img}
            alt="img category"
          />
          <h1 className=" font-montserrat font-medium text-center max-[850px]:ml-[9px] ml-[20px] max-[1050px]:text-[38px]  max-[850px]:text-[24px]   text-[44px] mt-[0px] text-[#203C8F]">{name}</h1>
        </div>

        <h1 className={`max-[850px]:mt-[11px] max-[850px]:w-[auto] w-[39vw] font-montserrat font-normal ${fontSize ? "text-[calc(27/1552*100vw)] max-[550px]:text-[14px]" : "text-[calc(23/1552*100vw)] max-[550px]:text-[10px]"} text-black`}>

          {description}
        </h1>
      </div>
    </div >
  )
}
