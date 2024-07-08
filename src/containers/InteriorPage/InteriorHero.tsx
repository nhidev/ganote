'use client';

import { Button } from 'antd';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { memo } from 'react';

import { leadFormModalAtom } from '@/atoms';
import withTheme from '@/theme';
import styles from './interiorHero.module.scss';

const InteriorHero = memo(({ className = '' }: InteriorHeroProps) => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);

  return (
    <section className={`${styles.InteriorHero} ${className}`}>
      <div className="hero-container">
        <div className="hero_b-left">
          <div className="hero-top">
            <h1>{`사무실 인테리어 업무 \n복잡하게만 느껴지나요?`}</h1>
            <p>{`총무보다 더 꼼꼼하고 세심하게, \n복잡한 일들은 총무노트에게 맡기세요`}</p>
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
          <div className="hero-bottom">
            <Image width={400} height={394} src="/imagesN/hero-banner-i.svg" priority alt="hero banner" />
          </div>
        </div>
      </div>
    </section>
  );
});

interface InteriorHeroProps {
  className?: string;
}

export default InteriorHero;
