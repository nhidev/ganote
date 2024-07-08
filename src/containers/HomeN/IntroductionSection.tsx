'use client';

import { Button } from 'antd';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { memo } from 'react';

import { leadFormModalAtom } from '@/atoms';
import withTheme from '@/theme';
import styles from './introductionSection.module.scss';

const IntroductionSection = memo(({ className = '' }: IntroductionSectionProps) => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);
  return (
    <section className={`${styles.IntroductionSection} ${className}`}>
      <div className="introduction-container">
        <div className="introduction_b-left">
          <div className="introduction-top">
            <h1>
              총무업무 통합관리로
              <br />
              정확하고 더 빠르게
            </h1>
            <p>국내 유일 오피스 전문</p>
            <p>GA SaaS 플랫폼, 총무노트</p>
          </div>
          <div className="introduction-bottom">
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
        <div className="introduction_b-right">
          <Image priority width={335} height={240} src="/imagesN/illust-04.svg" alt="introduction banner" />
        </div>
      </div>
    </section>
  );
});

interface IntroductionSectionProps {
  className?: string;
}

export default IntroductionSection;
