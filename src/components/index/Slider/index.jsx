import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/slider/girl.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slider/woman.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slider/asia.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slider/portrait (1).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slider/portrait (2).jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
