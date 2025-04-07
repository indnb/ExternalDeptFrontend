import React from "react";
import { IAboutUsData } from "@/type/IAboutUsData";
import Image from "next/image";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
import { useLanguageStore } from "@/_store/LanguageChanger";
import rustCrad from "@/public/708853-middle.png"
import Link from "next/link";
export const ItemAboutUs = ({ data }: { data: IAboutUsData }) => {
  const { contrast, fontSize, image, fontFamily } = useInvalidWidgetStore()
  const { language } = useLanguageStore()
  return (
    <div
      style={{
        boxShadow: "2px -4px 3px 1px rgba(173, 159, 173, 0.05)",
      }}
      className={`${!image ? "w-[721px] max-lg:w-[314px]" :
        "w-[400px] max-lg:w-[200px]"} h-[auto] relative 
       max-lg:h-[auto] min-h-[100%] flex bg-[white] ml-[20px] items-center justify-start rounded-[8px] mt-[5px]` }
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
          className={`${fontFamily ? "font-kyivSerif" : "font-kyivSans"}  mb-[5px]
${fontSize ? "text-[48px]  max-lg:text-[26px]" : "text-[38px] max-lg:text-[16px]"} text-[center] font-[530] `}
        >
          {language == "ua" ? data.name : data.name_eng}
        </h1>
        <p
          className={`${fontSize ? "text-[30px] max-lg:text-[17px]" : "text-[20px] max-lg:text-[11px]"} text-[center] ${fontFamily ? "font-kyivSerif" : "font-montserrat"} `}
        >
          {language == "ua" ? data.text : data.text_eng}
        </p>
        {data.rustyDock &&
          <Link
            className="absolute cursor-pointer h-auto msx-lg:w-[45px] w-[75px] right-[10px] bottom-0 transition-transform duration-300 hover:scale-110"
            href="/rusty/index.html"
          >
            <Image className={`${contrast ? 'filter grayscale brightness-90' : ''}  `} src={rustCrad} alt="" />
          </Link>

        }
      </div>
    </div>
  );
};
