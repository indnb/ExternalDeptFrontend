"use client"
import { useInvalidWidgetStore } from '@/_store/InvalidWidget'
import React from 'react'
import {useLanguageStore} from "@/_store/LanguageChanger";

export const HackathonInfoPanelTop = ({ firstRow, secondRow }: { firstRow: string, secondRow: string }) => {

    const { contrast, fontFamily, fontSize } = useInvalidWidgetStore()
    const { language } = useLanguageStore();
    return (
        <div className='w-[100vw] flex justify-center max-w-[1800px]'>
            <div className={`w-[48vw] h-full  ${contrast ? "text-[#414141]" : "text-[#203C8F]"} text-left`}>
                <p className={`${fontFamily ? "font-kyivSerif font-[250] " : "font-kyivSans"} ${language ==`ua` ? `min-xl2:text-[266px] text-[calc(250/1552*100vw)]`:`min-xl2:text-[240px] text-[calc(190/1552*100vw)]`} h-full flex items-center `}>
                    {firstRow}
                </p>
            </div>
            <div style={{ fontFamily: "Montserrat" }}
                 className={`font-normal w-[48vw]  text-[#000000] ${fontSize ?
                     (language == 'ua' ? "text-[calc(37/1552*100vw)]  max-sm:text-[14px] min-xl2:text-[36px]" : "text-[calc(33/1552*100vw)]  max-sm:text-[12px] min-xl2:text-[30px]")
                     : (language == 'ua' ? "min-xl2:text-[32px] text-[calc(32/1552*100vw)]  max-sm:text-[10px]" : "min-xl2:text-[30px] text-[calc(30/1552*100vw)]  max-sm:text-[9px]")}
          flex items-center justify-center`}>
                {secondRow}
            </div>
        </div >
    )
}

