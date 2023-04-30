import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex items-center justify-between px-2 -top-64 relative z-40">
      <button
        onClick={() => swiper.slidePrev()}
        className="py-2 px-2 rounded-full bg-white hover:bg-primary text-secondary hover:text-white shadow-lg transition-colors"
      >
        <SlArrowLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="py-2 px-2 rounded-full bg-white hover:bg-primary text-secondary hover:text-white shadow-lg transition-colors"
      >
        <SlArrowRight />
      </button>
    </div>
  );
};
