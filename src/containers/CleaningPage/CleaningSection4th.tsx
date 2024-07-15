/* eslint-disable unicorn/numeric-separators-style */
/* eslint-disable consistent-return */
'use client';
import React, { memo } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './cleaningSection4th.module.scss';

import 'swiper/css';

const data = [
  {
    id: 1,
    text1: '연간 서비스 이용 후',
    text2: '사옥 확장/ 이동 시에도',
    text3: '재계약',
    text4: '100%',
  },
  {
    id: 2,
    text1: '수도권 전문',
    text2: '사무실 청소',
    text3: '누적',
    text4: '25,000평',
  },
  {
    id: 3,
    text1: '다양한 규모의 ',
    text2: '기업에서 이용 중 ',
    text3: '스타트업부터',
    text4: '대기업까지',
  },
]
const SLIDE_DATA = [
  {
    quote: <>“저희같이 큰 사무실은 청소하기도 쉽지 않고 금방 더러워져서 사무실 환경 관리가 쉽지 않은데요,<br />
      총무노트 정기 사무실 청소 이용 후에 늘 깨끗한 환경을 유지할 수 있었어요.<br />
      대표님 방 같은 경우 좀 더 신경써달라고 요청사항에 남겨드리는데 전문 매니저분께서 잘 해주신 덕분에<br />
      대표님도 만족하셔서 꾸준히 유지할 계획입니다”</>,
    desc: '-총무노트 사무실 청소 52회 이용 중-',
  },
  {
    quote: <>“다른 사무실 청소 업체를 사용해봤는데 작업자에 따라 청소 퀄리티가 들쑥날쑥한 경험이 있어서 아쉬웠어요.<br />
      근데 총무노트는 사무실 전용으로 마감재와 환경에 대해 전문 교육 받은 매니저님들과 함께해서인지<br />
      언제나 퀄리티에 만족합니다. 급하게 요청드리는 내용도 친절하게 답변 주시고 빠르게 해결해주셔서 좋아요”</>,
    desc: '-총무노트 사무실 청소 86회 이용 중-',
  },
  {
    quote: <>"확실히 야근이 줄었어요.<br />
      제가 총무노트를 알기 이전에 했던 많은 고민을 지금 똑같이 하고 계시는 주변 대표님이나 총무들에게 서비스를 적극 추천중이에요"</>,
    desc: '-총무노트 사무실 청소 25회 이용 중-',
  }
];

const CleaningSection4th = memo(({ className = "" }: CleaningSection4thProps) => (
  <section className={`${styles.CleaningSection4th} ${className}`}>
    <div className='cleaningSection4th-container'>
      <div className='cleaningSection4th_b-head'>
        <h2>고객 후기가 증명하는</h2>
        <h2> <span>총무노트 </span>오피스 클리닝</h2>
      </div>
      <ul className='cleaningSection4th_b-body'>
        {data.map((item) => (
          <li key={item.id}>
            <h4>{item.text1}{`\n`}{item.text2}</h4>
            <p className='text-color'><span>{item.text3}</span>{`\n`}<span>{item.text4}</span></p>
          </li>
        ))}
      </ul>

      <div className='cleaningSection4th_b-bot fade-up-element'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop
          className={styles.CleaningSwiper}
        >
          {SLIDE_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide-item">
                <div className="slide-item_desc">
                  <h3>{item.quote}</h3>
                  <p>{item.desc}</p>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  </section>
));

interface CleaningSection4thProps {
  className?: string;
}

export default CleaningSection4th;