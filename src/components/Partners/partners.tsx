'use client';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './partners.module.scss';

import 'swiper/css';

const partnerLogos = [
  {
    url: '/icons/partner-Samsung.svg',
    width: 92,
    height: 40,
    alt: 'SAMSUNG',
  },
  {
    url: '/icons/partner-redBuffalo.svg',
    width: 43,
    height: 40,
    alt: 'Company',
  },
  {
    url: '/icons/partner-doosan.svg',
    width: 127,
    height: 40,
    alt: 'DOOSAN',
  },
  {
    url: '/icons/partner-spark.svg',
    width: 155,
    height: 40,
    alt: 'SPARKPLUS',
  },
  {
    url: '/icons/partner-setting.svg',
    width: 176,
    height: 40,
    alt: 'BKI',
  },
  {
    url: '/icons/partner-8s.svg',
    width: 52,
    height: 40,
    alt: '8 Seconds',
  },
  {
    url: '/icons/partner-thinkcoffee.svg',
    width: 162,
    height: 40,
    alt: 'THINK COFFEE',
  },
  {
    url: '/icons/partner-fas.svg',
    width: 103,
    height: 40,
    alt: 'FASTFIVE',
  },
  {
    url: '/icons/partner-ceo.svg',
    width: 43,
    height: 40,
    alt: 'CEO',
  },
  {
    url: '/icons/partner-amore.svg',
    width: 182,
    height: 40,
    alt: 'AMOREPACIFIC',
  },
];

const Partners = () => {
  const slideArrImg = (
    <SwiperSlide className={styles.swiperSlide}>
      {partnerLogos.map((img, index) => (
        <Image key={index} src={img?.url} alt={img?.alt} width={img?.width} height={img?.height} unoptimized priority />
      ))}
    </SwiperSlide>
  );

  return (
    <section className={`${styles?.partner} scrollToThis`}>
      <Swiper
        autoplay={{ delay: 0, disableOnInteraction: false }}
        loop={true}
        speed={50_000}
        slidesPerView={'auto'}
        modules={[Autoplay]}
        className={`mySwiper ${styles?.swiperWrapper}`}
      >
        {slideArrImg}
        {slideArrImg}
        {slideArrImg}
        {slideArrImg}
        {slideArrImg}
        {slideArrImg}
        {slideArrImg}
        {slideArrImg}
      </Swiper>
    </section>
  );
};

export default Partners;
