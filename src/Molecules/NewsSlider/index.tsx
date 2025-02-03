import { ItemNews } from "@/Atoms/ItemNews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import useScreenSize from "@/hook/useScreenSize";
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
  const { width } = useScreenSize();
  const [slidesToShow, setSlidesToShow] = useState<number>(1);

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    arrows: false,
  };
  useEffect(() => {
    if (width >= 850) {
      var sliderCount = width / 615;
    } else {
      var sliderCount = width / 333;
    }
    setSlidesToShow(sliderCount);
  }, [width]);
  return (
    <div className="max-[850px]:h-[230px] w-[100vw]">
      <Slider {...settings}>
        {arr.map((item, index) => (
          <ItemNews key={index} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};
