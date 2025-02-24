import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

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


  return (
    <div className="max-[850px]:h-[200px] max-[550px]:w-[99vw] w-[100vw] overflow-x-hidden">
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
