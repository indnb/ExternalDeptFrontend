import React from "react";
import { IAboutUsData } from "@/type/IAboutUsData";
import Image from "next/image";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

export const ItemAboutUs = ({ data }: { data: IAboutUsData }) => {
  const { contrast, fontSize } = useInvalidWidgetStore()
  return (
    <div
      style={{
        boxShadow: "2px -4px 3px 1px rgba(173, 159, 173, 0.35)",
      }}
      className="w-[721px] h-[472px]
      max-[850px]:w-[314px] max-[850px]:h-[191px] flex bg-[white] ml-[20px] items-center justify-start rounded-[8px] "
    >
      <Image
        className={`${contrast ? 'filter grayscale brightness-90' : ''} 
        w-[350px] h-[472px]
        max-[850px]:w-[154px] max-[850px]:h-[191px] object-fit rounded-[4px]`}
        src={data.img}
        alt=""
      />
      <div className="text-[black] h-[auto] ml-[20px] max-[850px]:ml-[10px]">
        <h1
          className={`${fontSize ? "text-[46px] max-[850px]:text-[20px]" : "text-[38px] max-[850px]:text-[16px]"} text-[center] font-[530]`}
          style={{ fontFamily: "Montserrat" }}
        >
          {data.name}
        </h1>
        <p
          style={{ fontFamily: "Montserrat" }}
          className={`${fontSize ? "text-[26px] max-[850px]:text-[15px]" : "text-[20px] max-[850px]:text-[11px]"} text-[center]`}
        >
          {data.text}
        </p>
      </div>
    </div>
  );
};
