"use client";
import Image from "next/image";
import { InvalidWidgetWindow } from "@/Molecules/InvalidWidgetWindow";
import InvalidImg from "@/public/InvalidImg.svg";
import { useState } from "react";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
export const InvalidWidget = () => {
  const [stateWidget, setStateWidget] = useState<boolean>(false);
  const handlerSwitchInvalididget = () => {
    setStateWidget(!stateWidget);
  };
  const { contrast } = useInvalidWidgetStore()
  return (
    <div>
      {stateWidget ? (
        <InvalidWidgetWindow setStateWidget={setStateWidget} />
      ) : null}
      <button
        onClick={handlerSwitchInvalididget}
        className="fixed right-[2vw]  top-[90vh]  h-[50px] w-[50px] bg-[none] rounded-[50%] text-white flex items-center justify-center  shadow-md z-30"
      >
        <Image className={`rounded-[50px] bg-none ${contrast && "grayscale"} `} src={InvalidImg} alt="" />
      </button>
    </div>
  );
};
