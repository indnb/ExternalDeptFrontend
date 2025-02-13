import React from 'react'

export const HackathonInfoPanelTop = ({ firstRow, secondRow }: { firstRow: string, secondRow: string }) => {
  return (
    <div className='w-[100vw] flex justify-center '>
      <div className='w-[46vw] h-[70px] text-[64px] text-[#203C8F] text-left'>
        <h1 className='h-[70px]  flex items-center '>
          {firstRow}
        </h1>

      </div>
      <div className='w-[46vw] h-[70px] text-[#000000] text-[10px] flex items-center justify-center'>
        {secondRow}
      </div>
    </div>
  )
}
