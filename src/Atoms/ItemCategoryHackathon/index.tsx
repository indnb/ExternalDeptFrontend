import { useInvalidWidgetStore } from '@/_store/InvalidWidget'
import Image from 'next/image'
import React from 'react'

export const ItemCategoryHackathon = ({ img, description, name }: { img: string, description: string, name: string }) => {
  const { contrast, fontSize, fontFamily } = useInvalidWidgetStore()
  return (
    <div className='text-center flex items-center justify-center w-[83vw]  border-t-2 border-black  min-xl2:w-[1540px]'>
      <div className='max-lg:items-start max-lg:text-start text-center w-[95%]  max-lg:mb-[12px] max-xl:mt-[25px]  max-xl:mb-[25px] mb-[50px] mt-[50px] max-lg:mt-[12px] flex justify-between   
        items-center max-lg:flex-col '>
        <div className='   max-lg:text-start text-center items-center  max-lg:w-auto w-[40%] flex  justify-start  '>
          <Image
            className={`w-auto  ${contrast && "grayscale"} max-lg:h-[29px] h-[50px]  object-contain`}
            src={img}
            alt="img category"
          />
          <h1 className={` font-montserrat ${contrast ? "text-black" : "text-[#203C8F]"} font-medium text-center max-lg:ml-[9px] ml-[20px]   
  ${fontSize ? "max-lg:text-[28px] max-sm:text-[24px]   text-[44px]" :
              "max-lg:text-[20px] max-sm:text-[18px]   text-[44px]"}
mt-[0px] `}>{name}</h1>
        </div>

        <h1 className={`max-lg:mt-[14px]  max-lg:w-[auto] w-[45%]  font-normal ${fontFamily ? "font-kyivSerif" : "font-montserrat"} 
${fontSize ? "text-[calc(43/1552*100vw)]  max-sm:text-[18px] min-xl2:text-[43px]" : "text-[calc(43/1552*100vw)]  max-sm:text-[18px] min-xl2:text-[43px]"} text-black`}>

          {description}
        </h1>
      </div>
    </div >
  )
}
