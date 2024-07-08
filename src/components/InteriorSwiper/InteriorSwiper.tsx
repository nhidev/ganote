'use client';

import Image from 'next/image';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Default, Mobile } from '@/components';
import styles from './interiorSwiper.module.scss';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

const InteriorSwiper = ({ className = '', slideList }: InteriorSwiperProps) => {
  return (
    <div className={`${styles.InteriorSwiperContainer} ${className}`}>
      <Swiper
        scrollbar
        pagination={{
          type: 'fraction',
        }}
        modules={[Scrollbar, Autoplay, Pagination]}
        spaceBetween={0}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="interior-swiper"
      >
        {slideList.map((item: slideItem, index: number) => (
          <SwiperSlide key={index}>
            <div className="slide-item">
              <Default>
                <Image
                  className="slide-img"
                  src={`/imagesN/${item.image}`}
                  priority
                  alt="swiper images"
                  height={500}
                  width={1060}
                  quality={100}
                />
              </Default>
              <Mobile>
                <Image
                  className="slide-img"
                  src={`/imagesN/mobile_${item.image}`}
                  priority
                  alt="swiper images"
                  height={400}
                  width={335}
                  quality={100}
                />
              </Mobile>
              <div className="slide-item_desc">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {item.quote && (
                  <div className="slide-item_quote">
                    <Image src={`/iconsN/quote.svg`} alt="quote icon" height={30} width={30} />
                    <p>{item.quote}</p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface InteriorSwiperProps {
  className?: string;
  slideList: slideItem[];
}

interface slideItem {
  image: string;
  title: string;
  desc: string;
  quote?: string;
}

export default InteriorSwiper;
