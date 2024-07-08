'use client';

import { Button } from 'antd';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { memo } from 'react';

import { leadFormModalAtom } from '@/atoms';
import withTheme from '@/theme';
import styles from './interiorConsultationSection.module.scss';

const InteriorConsultationSection = memo(() => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);

  return (
    <section className={styles.InteriorConsultationSection}>
      <div className="interiorConsultationSection_b-container">
        <div className="interiorConsultationSection_b-head">
          <h2>아직 망설여지시나요?</h2>
          <h2>상담은 무료입니다</h2>
        </div>

        <div className="interiorConsultationSection_b-btn">
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
    </section>
  );
});

export default InteriorConsultationSection;
