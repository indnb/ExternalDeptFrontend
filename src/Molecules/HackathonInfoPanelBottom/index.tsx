import React from 'react'

export const HackathonInfoPanelBottom = ({ firstRow, secondRow }: { firstRow: string, secondRow: string }) => {
  return (
    <div className='w-[100vw] flex justify-center '>
      <div className='w-[46vw] h-[70px]   text-center'>
        <h1 className='h-[70px] text-left text-[10px] text-[#000000] flex items-center justify-center '>
          {firstRow}
        </h1>

      </div>
      <div className='w-[46vw] h-[70px] text-[#203C8F]  text-[64px] flex items-center justify-center'>
        {secondRow}
      </div>
    </div>
  )
}









