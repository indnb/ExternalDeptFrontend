import React from "react";
import Image from "next/image";
import Cross from "@/public/Cross.svg";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
interface InvalidWidgetHeaderProps {
  setStateWidget: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InvalidWidgetHeader = ({
  setStateWidget,
}: InvalidWidgetHeaderProps) => {
  const handlerClose = () => {
    setStateWidget(false);
  };
  const { fontSize, contrast, fontFamily } = useInvalidWidgetStore()
  return (

    <div className={`${contrast ? "bg-[#414141]" : "bg-[#203C8F]"} h-[164px] w-[100%] flex items-center justify-center max-lg:h-[94px] max-sm:h-[84px]`}>
      <h1
        className={` 
${fontFamily ? "font-kharkiv" : "font-montserrat"}
${fontSize ? "text-[28px]  max-lg:text-[22px]" : "text-[24px]  max-lg:text-[20px]"}
text-[bold] font-semibold flex`}
      >
        Доступність
      </h1>
      <button
        onClick={handlerClose}
        className="bg-none absolute right-[29px] w-[24px] h-[24px] top-[29px] max-lg:w-[18px] max-lg:h-[18px] max-lg:top-[15px] max-lg:right-[15px]"
      >
        <Image src={Cross} alt="" className="w-[24px] h-[24px]" />
      </button>
    </div>
  );
};
