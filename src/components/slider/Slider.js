import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedCards from './FeaturedCards'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300:{
                width:300,
                slidePerView:1,
            },
            480:{
                width:480,
                slidePerView:1,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
              
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><FeaturedCards/></SwiperSlide>
        <SwiperSlide><FeaturedCards/></SwiperSlide>
        <SwiperSlide><FeaturedCards/></SwiperSlide>
        <SwiperSlide><FeaturedCards/></SwiperSlide>
        <SwiperSlide><FeaturedCards/></SwiperSlide>
        <SwiperSlide><FeaturedCards/></SwiperSlide>
        <SwiperSlide><FeaturedCards/></SwiperSlide>
        <SwiperSlide><FeaturedCards/></SwiperSlide>
        <SwiperSlide><FeaturedCards/></SwiperSlide>
      </Swiper>
    </>
  );
}
