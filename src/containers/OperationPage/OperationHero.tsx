'use client';

import { Button } from 'antd';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { memo } from 'react';

import { leadFormModalAtom } from '@/atoms';
import withTheme from '@/theme';
import styles from './operationHero.module.scss';

const data = ["예산에 맞는 복지 설계", "직원 CS 접수, 해결", "A4용지 최저가 찾아보기", "비품 재고 체크하기"];

const OperationHero = memo(({ className = '' }: OperationHeroProps) => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);

  return (
    <section className={`${styles.OperationHero} ${className}`}>
      <div className="hero-container">
        <div className="hero_b-left">
          <div className="hero-top">
            <h1>
              가장 간편한
              <br />
              사무실 운영 관리
            </h1>
            <p>총무 업무의 혁신이 시작됩니다</p>
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
          <div className="hero-top">
            <h4>
              {data.map((e, i) => (
                <span key={i}>{e}</span>
              ))}
            </h4>
            <p>사무실 관련 업무가 사라진다면?</p>
          </div>
          <div className="hero-bottom">
            <Image width={335} height={240} src="/iconsN/hero-img.svg" priority alt="hero banner" />
          </div>
        </div>
      </div>
    </section>
  );
});

interface OperationHeroProps {
  className?: string;
}

export default OperationHero;
