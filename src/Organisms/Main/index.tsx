import React from "react";

import { MainLeftPanel } from "@/Molecules/MainLeftPanel";
export const Main = () => {
  return (
    <main className="flex-row-reverse flex items-center justify-between max-[650px]:justify-start bg-white max-[650px]:flex-col  max-[650px]:h-[580px]">
      <div className="h-[738px] w-[746px] max-[650px]:w-[398px] max-[650px]:h-[290px] bg-[#203C8F] max-[650px]:mt-[30px] rounded-[8px]"></div>
      <MainLeftPanel />
    </main>
  );
};
