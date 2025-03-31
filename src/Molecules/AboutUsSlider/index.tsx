import React, { useState, useEffect } from "react";
import { aboutUsData } from "./aboutUs.data";
import { ItemAboutUs } from "@/Atoms/ItemAboutUs";
import useScreenSize from "@/hook/useScreenSize";
import 'swiper/swiper-bundle.css';
import "./AboutUsSlider.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

export const AboutUsSlider = () => {
  const { width } = useScreenSize();
  const { image } = useInvalidWidgetStore();
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const showNavigation = aboutUsData.length > slidesToShow;

  useEffect(() => {
    const getSliderCount = (width: number, image: boolean) => {
      const breakpoints = [
        { minWidth: 851, noImage: 766, withImage: 440 },
        { minWidth: 0, noImage: 353, withImage: 240 }
      ];
      const res = breakpoints.find(bp => width >= bp.minWidth);
      if (!res) return 1;

      const { noImage, withImage } = res;
      const count = width / (image ? withImage : noImage);
      return Math.round(count * 10) / 10;
    };

    setSlidesToShow(getSliderCount(width, image));
  }, [width, image]);

  useEffect(() => {
    if (swiperInstance) {
      const updateNavigation = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(
          swiperInstance.isEnd ||
          swiperInstance.activeIndex + Math.floor(slidesToShow) >= aboutUsData.length
        );
      };

      updateNavigation();
      swiperInstance.on('slideChange', updateNavigation);
      return () => swiperInstance.off('slideChange', updateNavigation);
    }
  }, [swiperInstance, slidesToShow]);

  return (
    <div className="flex w-[98.5vw] mt-[5px] relative">
      {showNavigation && !isBeginning && (
        <div className="absolute w-[5vw] z-10 h-full bg-red flex justify-center items-center top-[0px] left-[0px]">
          <button
            className="ml-[29px]"
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous slide"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      )}

      <Swiper
        slidesPerView={slidesToShow}
        style={{ minWidth: '90%' }}
        onSwiper={setSwiperInstance}
        onReachEnd={() => setIsEnd(true)}
        onReachBeginning={() => setIsBeginning(true)}
      >
        {aboutUsData.map((elem, index) => (
          <SwiperSlide key={index}>
            <ItemAboutUs data={elem} />
          </SwiperSlide>
        ))}
      </Swiper>

      {showNavigation && !isEnd && (
        <div className="absolute w-[5vw] z-10 h-full bg-red flex justify-center items-center top-[0px] right-[0px]">
          <button
            className="mr-[29px]"
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next slide"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" strokeWidth="0.3">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
