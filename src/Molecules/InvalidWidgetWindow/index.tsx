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
      className="fixed rounded-[16px]  right-[2vw] bottom-[30px] h-[537px] w-[546px] bg-[white] text-white flex flex-col  items-center rounded-md shadow-md
        overflow-hidden max-[450px]:w-[360px] max-[450px]:right-[1vw]  max-lg:w-[383px] max-lg:h-[452px] 
        shadow-md z-40"
    >
      <InvalidWidgetHeader setStateWidget={setStateWidget} />
      <div className="flex flex-wrap gap-[31px] items-center justify-center mt-[34px]">
        {InvalidData.map((elem, index) => (
          <ItemInvalidWidget key={index} elem={elem} />
        ))}
      </div>
      <h1 className="text-[0px] max-lg:text-[16px] text-[black] mt-[20px]">
        Вимкнути
      </h1>
    </div>
  );
};
