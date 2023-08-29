import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Slider.module.css';
import 'swiper/css';

function Slider() {
    return (
        <Swiper
            className={style.slider__wrapper}
            spaceBetween={15}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className={style.slide}></SwiperSlide>
            <SwiperSlide className={style.slide}></SwiperSlide>
            <SwiperSlide className={style.slide}></SwiperSlide>
            <SwiperSlide className={style.slide}></SwiperSlide>
            <SwiperSlide className={style.slide}></SwiperSlide>
            <SwiperSlide className={style.slide}></SwiperSlide>
            <SwiperSlide className={style.slide}></SwiperSlide>
        </Swiper>
    )
}

export default Slider