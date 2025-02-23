import { useInvalidWidgetStore } from '@/_store/InvalidWidget'
import React from 'react'

export const HackathonInfoPanelTop = ({ firstRow, secondRow }: { firstRow: string, secondRow: string }) => {
  const { contrast, fontFamily, fontSize } = useInvalidWidgetStore()
  return (

    <div className='w-[100vw] flex justify-center max-w-[1800px]'>
      <div className={`w-[48vw] h-full  ${contrast ? "text-[#414141]" : "text-[#203C8F]"} text-left`}>
        <p className={`${fontFamily ? "font-kyivSerif font-[250] " : "font-kyivSans"}  h-full  flex items-center min-[1800px]:text-[266px] text-[calc(250/1552*100vw)]`}


        >
          {firstRow}
        </p>

      </div>
      <div style={{ fontFamily: "Montserrat" }}

        className={`font-normal w-[48vw]  text-[#000000] ${fontSize ? "text-[calc(37/1552*100vw)]  max-[550px]:text-[14px] min-[1800px]:text-[36px]" : "min-[1800px]:text-[32px] text-[calc(32/1552*100vw)]  max-[550px]:text-[10px]"}
flex items-center justify-center`}>

        {secondRow}
      </div>
    </div >
  )
}
