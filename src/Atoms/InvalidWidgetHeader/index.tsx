import React from "react";
import Image from "next/image";
import Cross from "@/public/Cross.svg";
interface InvalidWidgetHeaderProps {
  setStateWidget: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InvalidWidgetHeader = ({
  setStateWidget,
}: InvalidWidgetHeaderProps) => {
  const handlerClose = () => {
    setStateWidget(false);
  };

  return (
    <div className="bg-[#203C8F] h-[164px] w-[100%] flex items-center justify-center">
      <h1
        className="text-[24px] text-[bold] font-semibold flex"
        style={{ fontFamily: "Montserrat" }}
      >
        Доступність
      </h1>
      <button
        onClick={handlerClose}
        className="bg-none absolute right-[29px] w-[24px] h-[24px] top-[29px]"
      >
        <Image src={Cross} alt="" className="w-[24px] h-[24px]" />
      </button>
    </div>
  );
};
