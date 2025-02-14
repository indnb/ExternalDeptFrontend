import Image from 'next/image'
import React from 'react'

export const ItemCategoryHackathon = ({ img, description }: { img: string, description: string }) => {
  return (
    <div className='max-[850px]:h-[91px] flex items-center justify-center w-[83vw] border-t-2 border-black'>
      <div className='w-[63vw] h-[63px] flex justify-between flex-col items-start'>
        <Image className='max-[850px]:w-[auto] max-[850px]:h-[25px]' src={img} alt="img category" />
        <h1 className='text-[10px] text-black'>
          {description}
        </h1>
      </div>
    </div>
  )
}
