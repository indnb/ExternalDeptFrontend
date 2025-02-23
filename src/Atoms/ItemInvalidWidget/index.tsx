import React from "react";
import Image from "next/image";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
interface ItemInvalidWidgetProps {
  icon: string;
  text: string;
  callback: () => void
  state: number | boolean | string
}
export const ItemInvalidWidget = ({ elem }: { elem: ItemInvalidWidgetProps }) => {
  const { contrast } = useInvalidWidgetStore()
  return (
    <div
      onClick={() => elem.callback()}
      className={`${typeof elem.state == "boolean" && elem.state ? contrast ? "bg-[#414141]" : "bg-[#203C8F]" : "bg-white border-[black] border-[3px]"}
      w-[208px] h-[139px] rounded-[16px] border-solid   
      flex flex-col items-center justify-center gap-[auto] cursor-pointer  
      max-[850px]:w-[155px]  max-[850px]:h-[117px]`}
    >
      <Image src={elem.icon} alt="" className={` ${typeof elem.state == "boolean" && elem.state ? "invert" : null} `} />
      <h1
        className={`${typeof elem.state == "boolean" && elem.state ? "text-white" : "text-[black]"} font-medium text-[22px] text-center max-[850px]:text-[16px]`}
        style={{ fontFamily: "Montserrat" }}
      >
        {elem.text}
      </h1>
      {typeof elem.state == "number" && elem.state != 0 ?
        <div className="w-[90px] flex justify-between max-[850px]:mt-[5px] mt-[10px]">
          <div className={` w-[40px] h-[5px] rounded-[8px] bg-[#203C8F]`}></div>
          <div className={` w-[40px] h-[5px] rounded-[8px] ${elem.state == 2 ? "bg-[#203C8F]" : "bg-[#6A6A6A]"}`}></div>
        </div>
        : null}
    </div >
  );
};
