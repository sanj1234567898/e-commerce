import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";

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
          <Image
            src="/img/slider/girl.jpg"
            alt=""
            width={"1000"}
            height={"1000"}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/slider/woman.jpg"
            alt=""
            width={"1000"}
            height={"1000"}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/slider/asia.jpg"
            alt=""
            width={"1000"}
            height={"1000"}
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/slider/portrait (1).jpg"
            width={"1000"}
            height={"1000"}
            loading="lazy"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/slider/portrait (2).jpg"
            alt=""
            width={"1000"}
            height={"1000"}
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
