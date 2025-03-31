import React from "react";
import { IAboutUsData } from "@/type/IAboutUsData";
import Image from "next/image";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
import { useLanguageStore } from "@/_store/LanguageChanger";

export const ItemAboutUs = ({ data }: { data: IAboutUsData }) => {
  const { contrast, fontSize, image, fontFamily } = useInvalidWidgetStore()
  const { language } = useLanguageStore()
  return (
    <div
      style={{
        boxShadow: "2px -4px 3px 1px rgba(173, 159, 173, 0.05)",
      }}
      className={`${!image ? "w-[721px] max-lg:w-[314px]" :
        "w-[400px] max-lg:w-[200px]"} h-[auto]
       max-lg:h-[auto] flex bg-[white] ml-[20px] items-center justify-start rounded-[8px] mt-[5px]` }
    >
      {!image ? <Image
        className={`${contrast ? 'filter grayscale brightness-90' : ''} 
        w-[350px] 
        max-lg:w-[154px]  object-fill rounded-[4px]`}
        src={data.img}
        alt=""
      /> : null}
      <div className="text-[black] h-[auto] ml-[20px] max-lg:ml-[10px]">
        <h1
          className={`${fontFamily ? "font-kyivSerif" : "font-kyivSans"}  ${fontSize ? "text-[44px] max-lg:text-[20px]" : "text-[38px] max-lg:text-[16px]"} text-[center] font-[530] `}
        >
          {language == "ua" ? data.name : data.name_eng}
        </h1>
        <p
          className={`${fontSize ? "text-[26px] max-lg:text-[15px]" : "text-[20px] max-lg:text-[11px]"} text-[center] ${fontFamily ? "font-kyivSerif" : "font-montserrat"} `}
        >
          {language == "ua" ? data.text : data.text_eng}
        </p>
      </div>
    </div>
  );
};
