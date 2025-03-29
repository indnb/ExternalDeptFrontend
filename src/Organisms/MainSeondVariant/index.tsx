import React from 'react'

export const MainSecondVariant = () => {
  return (
    <div className='mt-[80px] max-[750px]:mt-[30px] flex flex-col justify-center items-center w-[100vw]'>
      <div className="relative w-[90vw] text-[100px] h-[326px] font-kharkiv text-[black]">
        <div className="absolute top-0 w-full ">EDUCATION</div>
        <div className="absolute top-[100px] w-full flex items-center justify-center  transform rotate-[-8deg]">
          <div className='w-[692px] h-[135px] bg-mainBlue text-center text-white'>
            WITHOUT
          </div>

        </div>
        <div className="absolute top-[200px] w-full flex items-end justify-end">BORDERS</div>
      </div>

    </div>
  )
}
