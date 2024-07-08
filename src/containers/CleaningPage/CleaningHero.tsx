'use client';

import { Button } from 'antd';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { memo } from 'react';

import { leadFormModalAtom } from '@/atoms';
import withTheme from '@/theme';
import styles from './cleaningHero.module.scss';

const CleaningHero = memo(({ className = '' }: CleaningHeroProps) => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);

  return (
    <section className={`${styles.CleaningHero} ${className}`}>
      <div className="hero-container">
        <div className="hero_b-left">
          <div className="hero-top">
            <h1>
              가장 <span>체계적인</span>
              <br />
              사무실 청소
            </h1>
            <p>사무실 정기 청소
              <br />
              총무노트에 맡기고 더 중요한 일에 집중하세요</p>
          </div>
          <div className="hero-bottom">
            {withTheme(
              <>
                <Button
                  type="primary"
                  className="g-cta-button"
                  icon={<Image width={12} height={10} src="/iconsN/ic-arrow-right.svg" alt="icon" />}
                  onClick={(event) => {
                    setLeadFormModal({ open: true, isDownload: false });
                    event.currentTarget.blur();
                  }}
                >
                  상담 신청하기
                </Button>
                <Button
                  className="g-cta-button"
                  icon={<Image width={12} height={14} src="/iconsN/ic-arrow-down-primary.svg" alt="icon" />}
                  onClick={(event) => {
                    setLeadFormModal({ open: true, isDownload: true });
                    event.currentTarget.blur();
                  }}
                >
                  소개서 다운받기
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="hero_b-right">
          <Image width={243} height={240} src="/imagesN/cleaning-hero-img.svg" priority alt="hero banner" />
        </div>
      </div>
    </section>
  );
});

interface CleaningHeroProps {
  className?: string;
}

export default CleaningHero;
