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

const dataNav = [
  "com-logo1.svg",
  "com-logo2.svg",
  "com-logo3.svg",
  "com-logo4.svg",
  "com-logo5.svg",
  "com-logo6.svg",
  "com-logo7.svg",
  "com-logo8.svg",
  "com-logo9.svg",
  "com-logo10.svg",
  "com-logo11.svg",
  "com-logo12.svg",
]
const dataContent = [
  {
    id: 1,
    logo: 'com-logo1.svg',
    title: '총무팀의 일원이 \n되어주셨어요',
    text: `총무노트 담당자 분과 미팅을 하며\n가장 인상 깊었던 말은, '총무 팀의 일원이\n되어 드리겠다'는 말이었어요. \n메신저를 통한 실시간 대응과 웹사이트 \n솔루션을 통해 상황을 공유하고 리포트를 \n제공 받는다는 점이 매우 든든했습니다.
`
  },
  {
    id: 2,
    logo: 'creative-partners-logo.svg',
    title: '어떤 상황에도\n든든해요',
    text: `총무노트가 전담 어카운트 매니저가 배정되어\n사무실 비품 관리부터, 시설 유지 보수,\nF&B 관리까지 케어를 해주니 따로 리소스를\n쓸 필요가 없어요.\n비품이나 청소 소모품이 필요한\n사소한 상황부터 시설 유지 보수까지\n모두 대응해 주셔서 아주 든든합니다.`
  },
  {
    id: 3,
    logo: 'portier-logo.svg',
    title: '근무자들의 만족도가\n크게 올랐어요',
    text: `솔루션을 통해 인력 배치 현황과\n근무 스케줄 확인, 발주 품목의 실시간\n재고 관리로 매우 편리해졌고 담당자의\n리소스 절감은 물론, 근무자들의 만족도도\n크게  향상되었습니다. 무엇보다 총무노트의\n친절하고 책임감 있는 태도에 가장 만족하며,\n신뢰가 더 깊어졌습니다.`
  }
]
const CleaningSection7th = memo(({ className = "" }: CleaningSection7thProps) => {
  const isMobile = useMediaQuery({ maxWidth: MEDIA_SIZE.tablet });

  return (
    <section className={`${styles.CleaningSection7th} ${className}`}>
      <div className='cleaningSection7th-container'>
        <div className='cleaningSection7th_b-head'>
          <h2>성장하는 기업은 총무노트와 함께합니다</h2>
        </div>
        <div className='cleaningSection7th_b-body'>
          <div className='cards-nav'>
            {dataNav.map((image, index) => (
              <Image key={index} src={`/imagesN/${image}`} quality={100} width={140} height={44} alt={'logo'} />
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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className={styles.CleaningSwiper}
          >
            {dataContent.map((item) => (
              <SwiperSlide key={item.id} className='card-item'>
                <Image className='company-logo' src={`/imagesN/${item.logo}`} quality={100} width={140} height={44} alt={'logo'} />
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