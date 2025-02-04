"use client";
import React from "react";
import Image from "next/image";
import { InvalidWidgetWindow } from "@/Molecules/InvalidWidgetWindow";
import InvalidImg from "@/public/InvalidImg.svg";
import { useState } from "react";
export const InvalidWidget = () => {
  const [stateWidget, setStateWidget] = useState<boolean>(false);
  const handlerSwitchInvalididget = () => {
    setStateWidget(!stateWidget);
  };
  return (
    <div>
      {stateWidget ? (
        <InvalidWidgetWindow setStateWidget={setStateWidget} />
      ) : null}
      <button
        onClick={handlerSwitchInvalididget}
        className="fixed right-[2vw]  top-[90vh]  h-[50px] w-[50px] bg-[none] rounded-[50%] text-white flex items-center justify-center  shadow-md z-30"
      >
        <Image className="rounded-[50px] bg-[none]" src={InvalidImg} alt="" />
      </button>
    </div>
  );
};
