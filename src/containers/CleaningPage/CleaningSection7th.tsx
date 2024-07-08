/* eslint-disable consistent-return */
'use client';
import React, { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_SIZE } from '@/utils/constants';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './cleaningSection7th.module.scss';
import Image from 'next/image';

const dataNav = ['기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고', '기업 로고',]
const dataContent = [
  {
    id: 1,
    tag: '기업 로고',
    title: '업무 능률이 \n올랐어요',
    text: '늘 깨끗한 사무실과 탕비실, 회의실을 마주해서인지 직원들의 업무 능률이 올랐어요. 시즌에 맞게 에어컨 청소랑 카페트 청소도 프로모션을 해주셔서 합리적으로 청결을 유지할 수 있어요.'
  },
  {
    id: 2,
    tag: '기업 로고',
    title: '항상 빠르게 \n답변해주세요',
    text: '급하게 사무실 청소가 필요한 일들이 생기는데, 그럴 때마다 1시간 안에 답변해주셔서 믿음직해요. 무분별한 견적이 아니라 저희가 필요한 장소에 필요한 시간만큼만 선택할 수 있어서 합리적이에요.'
  },
  {
    id: 3,
    tag: '기업 로고',
    title: '작은 사무실도 \n사용하기 좋아요',
    text: '저희같은 개발 전문 사무실의 경우 야근이랑 회의가 많아 늘 지저분한데, 매주 2시간 사용으로 이렇게 깔끔해질 수 있다는게 놀라워요. 사무실 정기 청소 이후에 비염이 없어져서 더 쾌적하게 업무에 집중할 수 있어요'
  }
]
const CleaningSection7th = memo(({ className = "" }: CleaningSection7thProps) => {
  const isMobile = useMediaQuery({ maxWidth: MEDIA_SIZE.tablet });

  return (
    <section className={`${styles.CleaningSection7th} ${className}`}>
      <div className='cleaningSection7th-container'>
        <div className='cleaningSection7th_b-head'>
          <h2> 국내 유일 GA SaaS 플랫폼</h2>
          <h2>총무노트는 가능합니다</h2>
        </div>

        <div className='cleaningSection7th_b-body'>
          <div className='cards-nav'>
            {dataNav.map((item, index) => (
              <span key={index}>
                {item}
              </span>
            ))}
          </div>
          <Swiper
            modules={[Scrollbar, Autoplay, Pagination, A11y]}
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={isMobile ? 20 : 40}
            scrollbar
            pagination={{
              type: 'fraction',
            }}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            // loop
            className={styles.CleaningSwiper}
          >
            {dataContent.map((item) => (
              <SwiperSlide key={item.id} className='card-item'>
                <span>{item.tag}</span>
                <h5>{item.title}</h5>
                <p>
                  <Image src="/iconsN/quote-icon.svg" width={24} height={24} alt="arrow-right" />
                  {item.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section >
  )
});

interface CleaningSection7thProps {
  className?: string;
}

export default CleaningSection7th;