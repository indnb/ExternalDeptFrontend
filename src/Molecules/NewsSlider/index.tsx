import { ItemNews } from "@/Atoms/ItemNews";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import "./style.css"
import useScreenSize from "@/hook/useScreenSize";
const images = [
  "https://via.placeholder.com/800x400/ff7f7f/333333?text=Image+1",
  "https://via.placeholder.com/800x400/ffbf00/333333?text=Image+2",
  "https://via.placeholder.com/800x400/9f66cc/333333?text=Image+3",
  "https://via.placeholder.com/800x400/99ff99/333333?text=Image+4",
  "https://via.placeholder.com/800x400/66ccff/333333?text=Image+5"
];
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
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    arrows: false,
    slidesToShow: 2.5,
    centerPadding: '0',
    speed: 500,
  };

  return (
    <div className="max-[850px]:h-[230px] w-[100vw]">
      <Swiper
        slidesPerView={2.4}
        centeredSlides={true}
        spaceBetween={85}
        pagination={{
          type: 'fraction',
        }}
        className="mySwiper"
      >
        {arr.map((elem, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center w-[100%] max-[850px]:h-[170px] h-[480px] flex-row">
            {({ isActive }) => (<div className="flex justify-center items-center w-[100%] max-[850px]:h-[200px] h-[480px] flex-col">
              <div className={`max-[850px]:h-[90px] w-[300px] h-[300px] max-[850px]:w-[90px] rounded-[4px] bg-[#203C8F] ${isActive ? 'active' : 'not-active'}`}>
              </div>
              <h1 className={`${isActive ? 'active-text' : 'not-active'} h-[15px] text-[0px]`}>
                {elem.title}
              </h1>
            </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
};
