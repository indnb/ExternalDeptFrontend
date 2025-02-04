"use client";
import React from "react";
import Image from "next/image";
import { InvalidWidgetWindow } from "@/Molecules/InvalidWidgetWindow";
import InvalidImg from "@/public/InvalidImg.svg";
import { useState } from "react";
export const InvalidWidget = () => {
  const [widget, setWidget] = useState<boolean>(true);
  const handlerSwitchInvalididget = () => {};
  return (
    <div>
      <InvalidWidgetWindow />
      <button
        onClick={handlerSwitchInvalididget}
        className="fixed left-[94vw] top-[90vh]  h-[50px] w-[50px] bg-[none] rounded-[50%] text-white flex items-center justify-center  shadow-md z-40"
      >
        <Image className="rounded-[50px] bg-[none]" src={InvalidImg} alt="" />
      </button>
    </div>
  );
};
