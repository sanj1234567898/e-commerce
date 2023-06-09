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

function Slider({ images }) {
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
        {images &&
          images.map((obj, id) => {
            return (
              <SwiperSlide key={id}>
                <Image
                  src={obj.image}
                  alt={obj.desc}
                  width={"1000"}
                  height={"1000"}
                  placeholder={"blur"}
                  blurDataURL={
                    "data:image/jpeg;base64,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"
                  }
                  loading="lazy"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export default Slider;
