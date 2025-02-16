import React from "react";
import { InvalidWidgetHeader } from "@/Atoms/InvalidWidgetHeader";
import { InvalidData } from "./Invalid.data";
import { ItemInvalidWidget } from "@/Atoms/ItemInvalidWidget";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
interface InvalidWidgetWindowProps {
  setStateWidget: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InvalidWidgetWindow = ({
  setStateWidget,
}: InvalidWidgetWindowProps) => {
  const { } = useInvalidWidgetStore();

  return (
    <div
      className="fixed rounded-[16px]  right-[2vw] top-[36vh] h-[537px] w-[546px] bg-[white] text-white flex flex-col  items-center rounded-md shadow-md
        overflow-hidden  max-[850px]:w-[383px] max-[850px]:h-[452px] max-[850px]:top-[43vh]
        shadow-md z-40"
    >
      <InvalidWidgetHeader setStateWidget={setStateWidget} />
      <div className="flex flex-wrap gap-[31px] items-center justify-center mt-[34px]">
        {InvalidData.map((elem, index) => (
          <ItemInvalidWidget key={index} elem={elem} />
        ))}
      </div>
      <h1 className="text-[0px] max-[850px]:text-[16px] text-[black] mt-[20px]">
        Вимкнути
      </h1>
    </div>
  );
};
