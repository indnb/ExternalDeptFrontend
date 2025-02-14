import React from 'react'

export const HackathonInfoPanelTop = ({ firstRow, secondRow }: { firstRow: string, secondRow: string }) => {
  return (
    <div className='w-[100vw] flex justify-center '>
      <div className='w-[48vw] h-full  text-[#203C8F] text-left'>
        <h1 className='h-full  flex items-center  text-[calc(250/1552*100vw)]' style={{ fontFamily: "Kyiv Type Sans" }}

        >
          {firstRow}
        </h1>

      </div>
      <div style={{ fontFamily: "Montserrat" }}
        className='font-normal w-[48vw]  text-[#000000] text-[calc(32/1552*100vw)]  max-[550px]:text-[10px] flex items-center justify-center'>
        {secondRow}
      </div>
    </div>
  )
}
