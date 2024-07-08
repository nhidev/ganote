'use client';

import Image from 'next/image';
import { memo } from 'react';
import { Autoplay, Keyboard, Navigation, Pagination, Scrollbar, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/scrollbar';

import { Default, Mobile } from '@/components';
import styles from './interiorOffice.module.scss';

const data = [
  {
    id: 1,
    image: '/imagesN/office-0.png',
  },
  {
    id: 2,
    image: '/imagesN/office-1.png',
  },
  {
    id: 3,
    image: '/imagesN/office-2.png',
  },
  {
    id: 4,
    image: '/imagesN/office-3.png',
  },
  {
    id: 5,
    image: '/imagesN/office-4.png',
  },
  {
    id: 6,
    image: '/imagesN/office-5.png',
  },
];

const InteriorOffice = memo(() => {
  return (
    <section className={styles.InteriorOffice}>
      <div className="interiorOffice_b-container">
        <div className="interiorOffice_b-head">
          <label>
            <Image width={20} height={20} src="/iconsN/emoji_events.svg" alt="icon" />
            <p>전문성</p>
          </label>
          <h2>강남에 구축한 오피스만</h2>
          <h2>약 10,000평</h2>
        </div>

        <Default>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={20000}
            loop={true}
            modules={[Virtual, Autoplay]}
            className={styles.InteriorOfficeSliderBg}
          >
            {data.map(item => (
              <SwiperSlide key={item.id}>
                <Image width={660} height={540} quality={100} src={item.image} alt="office" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Default>

        <div className="interiorOffice_b-body">
          <div className="interiorOffice_b-left">
            <div className="interiorOffice-title">
              <h4>{`메탈릭한 톤부터 밝은 분위기 \n사내 카페부터 제품 쇼룸까지`}</h4>
              <h3>{`브랜드의 특성을 고려한 \n디자인을 제안드립니다`}</h3>
            </div>

            <Default>
              <div className="interiorOffice-desc">
                <h4>14+a</h4>
                <p>{`최고의 전문가와 함께 14년 이상의 \n오피스 인테리어 전문가가 담당합니다.`}</p>
              </div>
            </Default>
          </div>

          <div className="interiorOffice_b-right">
            <div className="interiorOffice-slider-wrapper">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                centeredSlides={false}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  769: {
                    spaceBetween: 0,
                    slidesPerView: 1,
                  },
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                scrollbar={true}
                navigation={true}
                pagination={{
                  clickable: true,
                  type: 'fraction',
                }}
                loop
                modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                className="interiorOffice-slider"
              >
                {data.map(item => (
                  <SwiperSlide key={item.id}>
                    <Image width={660} height={540} quality={100} src={item.image} alt="office" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <Mobile>
            <div className="interiorOffice-desc">
              <h4>14+a</h4>
              <p>{`최고의 전문가와 함께 14년 이상의 \n오피스 인테리어 전문가가 담당합니다.`}</p>
            </div>
          </Mobile>
        </div>
      </div>
    </section>
  );
});

export default InteriorOffice;
