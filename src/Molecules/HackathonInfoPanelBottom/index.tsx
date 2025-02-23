import { useInvalidWidgetStore } from '@/_store/InvalidWidget'
import React from 'react'

export const HackathonInfoPanelBottom = ({ firstRow, secondRow }: { firstRow: string, secondRow: string }) => {
  const { contrast, fontFamily, fontSize } = useInvalidWidgetStore()

  return (
    <div className='w-[100vw] flex justify-center mt-[-50px] max-[850px]:mt-[-0px] max-w-[1800px]'>
      <div className='w-[47vw]     text-center'>

        <h1 style={{ fontFamily: "Montserrat" }} className={` h-full text-left ${fontSize ? "text-[calc(37/1552*100vw)]  max-[550px]:text-[14px]" : "text-[calc(32/1552*100vw)]  max-[550px]:text-[10px]"}
        text-[#000000] flex items-center justify-center `}>

          {firstRow}
        </h1>

      </div>

      <div className={`w-[47vw] ${contrast ? "text-[#414141]" : "text-[#203C8F]"} ${fontFamily ? "font-kyivSerif font-[250] " : "font-kyivSans"}   max-[850px]:h-full  text-[calc(256/1552*100vw)] flex items-center justify-center`}>

        {secondRow}
      </div>
    </div>
  )
}







