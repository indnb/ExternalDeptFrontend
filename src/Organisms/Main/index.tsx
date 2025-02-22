import React from "react";

import { MainLeftPanel } from "@/Molecules/MainLeftPanel";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
export const Main = () => {
  const { contrast } = useInvalidWidgetStore()
  return (
    <main
      className="mt-[80px] max-[750px]:mt-[30px] flex-row-reverse flex items-center justify-between max-[850px]:justify-start bg-[white]
      max-[850px]:flex-col  max-[850px]:h-[580px] max-[550px]:h-[510px]"
    >
      <div
        className={`${contrast ? " bg-[#414141] " : " bg-[#203C8F] "}h-[738px] w-[48vw] max-[1000px]:w-[43vw]       
        max-[500px]:w-[80vw]
         max-[850px]:w-[398px] max-[850px]:h-[290px] max-[850px]:mt-[30px] rounded-[8px]
    max-[500px]:h-[240px]  `}
      ></div>
      <MainLeftPanel />
    </main>
  );
};
