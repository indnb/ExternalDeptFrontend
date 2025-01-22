import React from "react";
import { NewsSlider } from "@/Molecules/NewsSlider";

export const News = () => {
  return (
    <section className="max-[650px]:h-[290px] flex flex-col items-center justify-around relative">
      <h1
        className="max-[650px]:w-[90vw] text-black text-[32px]  "
        style={{ fontFamily: "Kyiv Type Sans" }}
      >
        News
      </h1>
      <NewsSlider />
    </section>
  );
};
