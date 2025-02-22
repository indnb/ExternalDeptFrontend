import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import { ItemNews } from '@/Atoms/ItemNews';

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
    <div className="max-[850px]:h-[200px] w-[100vw]">
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
            {({ isActive }) => (<ItemNews title={elem.title} isActive={isActive} />)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
};
