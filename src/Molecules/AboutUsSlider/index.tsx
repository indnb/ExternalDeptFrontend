import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { aboutUsData } from "./aboutUs.data";
import { IAboutUsData } from "@/type/IAboutUsData";
import { ItemAboutUs } from "@/Atoms/ItemAboutUs";
import useScreenSize from "@/hook/useScreenSize";
import "./AboutUsSlider.css";
export const AboutUsSlider = () => {
  const { width } = useScreenSize();
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    arrows: false,
    slidesToScroll: 1,
    beforeChange: (_, next) => {
      setActiveSlide(next);
    },
  };
  useEffect(() => {
    console.log(activeSlide);
  }, [activeSlide]);
  useEffect(() => {
    if (width >= 850) {
      var sliderCount = width / 766;
    } else {
      var sliderCount = width / 353;
    }

    setSlidesToShow(sliderCount);
  }, [width]);
  return (
    <div className="w-[98.5vw] ">
      <Slider {...settings} ref={sliderRef}>
        {aboutUsData.map((elem, index) => (
          <ItemAboutUs data={elem} key={index} />
        ))}
      </Slider>
    </div>
  );
};
