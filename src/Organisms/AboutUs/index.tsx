import React from "react";
import { AboutUsSlider } from "@/Molecules/AboutUsSlider";

export const AboutUs = (props: {}) => {
  return (
    <div>
      <h1
        className="text-[48px] text-black  max-[850px]:text-[32px] ml-[25px] mb-[35px] max-[850px]:mb-[10px]"
        style={{ fontFamily: "Kyiv Type Sans" }}
      >
        Про нас
      </h1>
      <AboutUsSlider />
    </div>
  );
};
