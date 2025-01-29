import React from "react";
import Slider from "react-slick";
import { aboutUsData } from "./aboutUs.data";
import { IAboutUsData } from "@/type/IAboutUsData";
import { ItemAboutUs } from "@/Atoms/ItemAboutUs";
export const AboutUsSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [],
  };
  return (
    <div>
      <Slider {...settings}>
        {aboutUsData.map((elem, index) => (
          <ItemAboutUs data={elem} key={index} />
        ))}
      </Slider>{" "}
    </div>
  );
};
