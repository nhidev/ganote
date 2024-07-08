'use client';

import { Button } from 'antd';
import Image from 'next/image';
import { memo } from 'react';
import { useRouter } from 'next/navigation'

import { Default, InteriorSwiper, Mobile } from '@/components';
import withTheme from '@/theme';
import styles from './officeInteriorSection.module.scss';

const INTERIOR_SLIDE_LIST = [
  {
    image: 'interior-slide-01.png',
    title: '강남 인근 IT 기업 사무실',
    desc: '프로젝트 기간: 1개월',
  },
  {
    image: 'interior-slide-02.png',
    title: '용산구 컨설팅 회사 사무실',
    desc: '프로젝트 기간: 3개월',
  },
  {
    image: 'interior-slide-03.png',
    title: '자동차 대기업 분사 사무실',
    desc: '프로젝트 기간: 1개월',
  },
  {
    image: 'interior-slide-04.png',
    title: '성수동 패션 브랜드 사무실',
    desc: '프로젝트 기간: 2개월',
  },
];

const OfficeInteriorSection = memo(({ className = '' }: OfficeInteriorSectionProps) => {
  const router = useRouter();
  return (
    <section className={`${styles.OfficeInteriorSection} ${className}`}>
      <div className="office-interior_top">
        <h2>사무실 인테리어</h2>
        <p>강남에만 10,000평 이상 총무의 입장에서 꼼꼼하게</p>
        <Default>
          {withTheme(
            <Button
              className="our-service-btn g-cta-button"
              type="primary"
              icon={<Image width={12} height={10} src="/iconsN/ic-arrow-right.svg" alt="go to operation page" />}
              onClick={() => router.push('/interior')}
            >
              서비스 알아보기
            </Button>
          )}
        </Default>
      </div>
      <div className="office-interior_bottom">
        <InteriorSwiper slideList={INTERIOR_SLIDE_LIST} />
        <Mobile>
          {withTheme(
            <Button
              className="our-service-btn g-cta-button"
              type="primary"
              icon={<Image width={12} height={10} src="/iconsN/ic-arrow-right.svg" alt="go to operation page" />}
              onClick={() => router.push('/interior')}
            >
             서비스 알아보기
            </Button>
          )}
        </Mobile>
      </div>
    </section>
  );
});

interface OfficeInteriorSectionProps {
  className?: string;
}

export default OfficeInteriorSection;
