import React from "react";

import { MainLeftPanel } from "@/Molecules/MainLeftPanel";
export const Main = () => {
  return (
    <main
      className="mt-[120px] max-[750px]:mt-[70px] flex-row-reverse flex items-center justify-between max-[850px]:justify-start bg-white 
      max-[850px]:flex-col  max-[850px]:h-[580px] max-[550px]:h-[410px]"
    >
      <div
        className="h-[738px] w-[48vw] max-[1000px]:w-[43vw]       
        max-[500px]:w-[80vw]
         max-[850px]:w-[398px] max-[850px]:h-[290px] bg-[#203C8F] max-[850px]:mt-[30px] rounded-[8px]
    max-[500px]:h-[240px]  "
      ></div>
      <MainLeftPanel />
    </main>
  );
};
