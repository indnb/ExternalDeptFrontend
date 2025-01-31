import React from "react";
import Slider from "react-slick";
import { aboutUsData } from "./aboutUs.data";
import { IAboutUsData } from "@/type/IAboutUsData";
import { ItemAboutUs } from "@/Atoms/ItemAboutUs";
import { useState, useEffect } from "react";
import useScreenSize from "@/hook/useScreenSize";
export const AboutUsSlider = () => {
  const { width } = useScreenSize();
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    arrows: false,
  };
  useEffect(() => {
    if (width >= 850) {
      var sliderCount = width / 746;
    } else {
      var sliderCount = width / 333;
    }
    setSlidesToShow(sliderCount);
  }, [width]);
  return (
    <div>
      <Slider {...settings}>
        {aboutUsData.map((elem, index) => (
          <ItemAboutUs data={elem} key={index} />
        ))}
      </Slider>
    </div>
  );
};
