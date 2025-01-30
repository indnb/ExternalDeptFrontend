import React from "react";
import Slider from "react-slick";
import { aboutUsData } from "./aboutUs.data";
import { IAboutUsData } from "@/type/IAboutUsData";
import { ItemAboutUs } from "@/Atoms/ItemAboutUs";
export const AboutUsSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1.75,
        },
      },
      {
        breakpoint: 1404,
        settings: {
          slidesToShow: 1.5,
        },
      },

      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 1.35,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
        },
      },

      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 658,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1.25,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
