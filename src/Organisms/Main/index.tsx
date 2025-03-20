"use client"
import React from "react";

import { MainLeftPanel } from "@/Molecules/MainLeftPanel";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
export const Main = () => {
  const { contrast } = useInvalidWidgetStore()
  return (
    <main
      className="mt-[80px] max-[750px]:mt-[30px] flex-row-reverse flex items-center justify-between max-lg:justify-start bg-[white]
      max-lg:flex-col  max-lg:h-[580px] max-sm:h-[510px]"
    >
      <div
        className={`${contrast ? " bg-[#414141] " : " bg-[#203C8F] "}h-[738px] w-[48vw] max-[1000px]:w-[43vw]       
        max-sm:w-[80vw]
         max-lg:w-[398px] max-lg:h-[290px] max-lg:mt-[30px] rounded-[8px]
  max-sm:h-[240px]  `}
      ></div>
      <MainLeftPanel />
    </main>
  );
};
