import React from "react";
import { InvalidWidgetHeader } from "@/Atoms/InvalidWidgetHeader";
import { InvalidData } from "./Invalid.data";
import Image from "next/image";
interface InvalidWidgetWindowProps {
  setStateWidget: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InvalidWidgetWindow = ({
  setStateWidget,
}: InvalidWidgetWindowProps) => {
  return (
    <div
      className="fixed rounded-[16px]  right-[2vw] top-[30vh] h-[537px] w-[546px] bg-[white] text-white flex flex-col  items-center rounded-md shadow-md
        overflow-hidden
        shadow-md z-40"
    >
      <InvalidWidgetHeader setStateWidget={setStateWidget} />
      <div className="flex flex-wrap gap-[31px] items-center justify-center mt-[34px]">
        {InvalidData.map((elem, index) => (
          <div
            key={index}
            className="w-[208px] h-[139px] rounded-[16px] border-solid border-[black] border-[3px] 
            flex flex-col items-center justify-center gap-[auto] cursor-pointer"
          >
            <Image src={elem.icon} alt="" />
            <h1
              className="text-[black] font-medium text-[24px] text-center "
              style={{ fontFamily: "Montserrat" }}
            >
              {elem.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
