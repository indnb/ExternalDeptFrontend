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
  const { contrast } = useInvalidWidgetStore()
  return (

    <div className={`${contrast ? "bg-[#414141]" : "bg-[#203C8F]"} h-[164px] w-[100%] flex items-center justify-center max-[850px]:h-[94px]`}>
      <h1
        className="text-[24px] text-[bold] font-semibold flex max-[850px]:text-[20px]"
        style={{ fontFamily: "Montserrat" }}
      >
        Доступність
      </h1>
      <button
        onClick={handlerClose}
        className="bg-none absolute right-[29px] w-[24px] h-[24px] top-[29px] max-[850px]:top-[15px] max-[850px]:right-[15px]"
      >
        <Image src={Cross} alt="" className="w-[24px] h-[24px]" />
      </button>
    </div>
  );
};
