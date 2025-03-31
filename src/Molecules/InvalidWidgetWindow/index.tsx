import React from "react";
import { InvalidWidgetHeader } from "@/Atoms/InvalidWidgetHeader";
import { ItemInvalidWidget } from "@/Atoms/ItemInvalidWidget";
import { useGetInvalidData } from "./Invalid.data";

interface InvalidWidgetWindowProps {
  setStateWidget: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InvalidWidgetWindow = ({
  setStateWidget,
}: InvalidWidgetWindowProps) => {
  const InvalidData = useGetInvalidData();
  return (
    <div
      className="fixed rounded-[16px]  right-[2vw] bottom-[30px] h-[537px] w-[546px] bg-[white] text-white flex flex-col  items-center 
        overflow-hidden max-sm:w-[320px] max-sm:h-[380px] max-sm:right-[1vw]  max-lg:w-[383px] max-lg:h-[442px] 
        shadow-md z-40"
    >
      <InvalidWidgetHeader setStateWidget={setStateWidget} />
      <div className="flex flex-wrap gap-[31px] max-sm:gap-[20px] max-sm:mt-[20px] items-center justify-center mt-[34px] mb-[20px] max-lg:mb-0">
        {InvalidData.map((elem, index) => (
          <ItemInvalidWidget key={index} elem={elem} />
        ))}
      </div>

    </div>
  );
};
