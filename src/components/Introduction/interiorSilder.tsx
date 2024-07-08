'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';

import styles from './introduction.module.scss';

export default function InteriorSilder() {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        modules={[Pagination, Autoplay]}
        className={`mySwiper ${styles?.introductionSlides}`}
      >
        {['2', '3', '4'].map(number => (
          <SwiperSlide key={number}>
            <Image
              src={`/images/interior-intro-img-${number}.png`}
              fill
              unoptimized
              quality={100}
              alt="Introduction images"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
