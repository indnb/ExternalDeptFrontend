import React from "react";
import Image from "next/image";
interface ItemInvalidWidgetProps {
  icon: string;
  text: string;
}
export const ItemInvalidWidget = ({ elem }: ItemInvalidWidgetProps) => {
  return (
    <div
      className="w-[208px] h-[139px] rounded-[16px] border-solid border-[black] border-[3px] 
            flex flex-col items-center justify-center gap-[auto] cursor-pointer
       max-[850px]:w-[155px]  max-[850px]:h-[117px]"
    >
      <Image src={elem.icon} alt="" />
      <h1
        className="text-[black] font-medium text-[22px] text-center max-[850px]:text-[16px]"
        style={{ fontFamily: "Montserrat" }}
      >
        {elem.text}
      </h1>
    </div>
  );
};
