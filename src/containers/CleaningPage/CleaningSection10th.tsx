/* eslint-disable consistent-return */
'use client';
import React, { memo } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import withTheme from '@/theme';
import styles from './cleaningSection10th.module.scss';

const data = [
  {
    id: 1,
    image: '/imagesN/cleaning-section10th-1.png',
    subTitle: '여름철 사무실 환경 관리',
    mainTitle: '습기 관리',
    description: '에어컨 필터 \n곰팡이 및 악취 방지',
    ctaText: '자세히 보기',
  },
  {
    id: 2,
    image: '/imagesN/cleaning-section10th-2.png',
    subTitle: '여름철 사무실 환경 관리',
    mainTitle: '해충 방제',
    description: '정기 방제 서비스 \n쓰레기통 관리 강화',
    ctaText: '자세히 보기',
  },
  {
    id: 3,
    image: '/imagesN/cleaning-section10th-3.png',
    subTitle: '봄 가을철 사무실 환경 관리',
    mainTitle: '대청소',
    description: '창문, 블라인드, 커튼 세척 \n카펫, 바닥 딥클리닝 등',
    ctaText: '자세히 보기',
  },
]
const CleaningSection10th = memo(({ className = "" }: CleaningSection10thProps) => (
  <section className={`${styles.CleaningSection10th} ${className}`}>
    <div className='cleaningSection10th-wrapper'>
      <div className='cleaningSection10th_b-head'>
        <h2>사무실 정기관리</h2>
        <h2>함께 쓰면 좋은 총무노트 추천 클리닝</h2>
      </div>
      <ul className='cleaningSection10th_b-body'>
        {data.map((item, index) => (
          <li key={index} className='fade-up-element'>
            <Image className='card-image' src={item.image} alt="card image" width={415} height={276} />
            <div className='card-body'>
              <h6>{item.subTitle}</h6>
              <h3>{item.mainTitle}</h3>
              <p>{item.description}</p>
              {withTheme(
                <>
                  <Button
                    type="primary"
                    className="g-cta-button"
                    icon={<Image width={16} height={16} src="/iconsN/ic-arrow-right.svg" alt="icon" />}
                  >
                    {item.ctaText}
                  </Button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
));

interface CleaningSection10thProps {
  className?: string;
}

export default CleaningSection10th;