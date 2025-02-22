import React from "react";
import Image from "next/image";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
interface ItemInvalidWidgetProps {
  icon: string;
  text: string;
  callback: () => void
  state: string | boolean
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
    </div >
  );
};
