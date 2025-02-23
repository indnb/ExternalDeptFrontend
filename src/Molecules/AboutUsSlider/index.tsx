import React, { useState, useEffect } from "react";
import { aboutUsData } from "./aboutUs.data";
import { ItemAboutUs } from "@/Atoms/ItemAboutUs";
import useScreenSize from "@/hook/useScreenSize";
import 'swiper/swiper-bundle.css';
import "./AboutUsSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
export const AboutUsSlider = () => {
  const { width } = useScreenSize();
  const [slidesToShow, setSlidesToShow] = useState<number>(1);


  useEffect(() => {
    let sliderCount
    if (width >= 850) {
      sliderCount = width / 766;
    } else {
      sliderCount = width / 353;
    }

    setSlidesToShow(sliderCount);
  }, [width]);
  return (
    <div className="flex w-[98.5vw]  mt-[5px]">
      <Swiper
        slidesPerView={slidesToShow}
      >
        {aboutUsData.map((elem, index) => (
          <SwiperSlide key={index}>
            <ItemAboutUs data={elem} />
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};
