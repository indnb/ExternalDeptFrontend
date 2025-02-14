import React from 'react'

export const HackathonInfoPanelBottom = ({ firstRow, secondRow }: { firstRow: string, secondRow: string }) => {
  return (
    <div className='w-[100vw] flex justify-center mt-[-50px] '>
      <div className='w-[46vw]     text-center'>
        <h1 style={{ fontFamily: "Montserrat" }} className=' h-full text-left text-[calc(32/1552*100vw)]  
          max-[550px]:text-[10px] text-[#000000] flex items-center justify-center '>
          {firstRow}
        </h1>

      </div>
      <div style={{ fontFamily: "" }} className='w-[46vw]   max-[850px]:h-full text-[#203C8F] text-[calc(266/1552*100vw)] flex items-center justify-center'>
        {secondRow}
      </div>
    </div>
  )
}







