import React from "react";
import { ItemNews } from "@/Atoms/ItemNews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const arr: INews[] = [
  {
    title: "Крейзі новини відділу",
  },
  {
    title: "Крейзі новини відділу",
  },
  {
    title: "Крейзі новини відділу",
  },
];
export interface INews {
  title: string;
}
export const NewsSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

  return (
    <div className="h-[230px] w-[100vw]">
      <Slider {...settings}>
        {arr.map((item, index) => (
          <ItemNews key={index} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};
