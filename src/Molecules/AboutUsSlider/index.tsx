import React, { useState, useEffect } from "react";
import { aboutUsData } from "./aboutUs.data";
import { ItemAboutUs } from "@/Atoms/ItemAboutUs";
import useScreenSize from "@/hook/useScreenSize";
import 'swiper/swiper-bundle.css';
import "./AboutUsSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
export const AboutUsSlider = () => {
  const { width } = useScreenSize();
  const { image } = useInvalidWidgetStore()
  const [slidesToShow, setSlidesToShow] = useState<number>(1);


  useEffect(() => {
    const getSliderCount = (width: number, image: boolean) => {
      const breakpoints = [
        { minWidth: 850, noImage: 766, withImage: 440 },
        { minWidth: 0, noImage: 353, withImage: 240 }
      ];
      const res = breakpoints.find(bp => width >= bp.minWidth);
      if (!res) {
        return 0
      }
      const { noImage, withImage } = res
      return width / (image ? withImage : noImage);
    };

    setSlidesToShow(getSliderCount(width, image));
  }, [width, image]);
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
