'use client';

import { Button } from 'antd';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { memo } from 'react';

import { leadFormModalAtom } from '@/atoms';
import withTheme from '@/theme';
import styles from './operationSection7th.module.scss';

const OperationSection7thCp = memo(() => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);

  return (
    <section className={styles.OperationSection7th}>
      <div className="operationSection7th_b-container">
        <div className="operationSection7th_b-head">
          <h2>더 체계적이고 편리하게</h2>
          <h2>총무노트와 함께하세요</h2>
        </div>
        <div className="operationSection7th_b-body">
          <Image width={69} height={45} src="/iconsN/fly.svg" alt="fly" />
          <div>
            <p>
              <strong>총무노트</strong>
            </p>
            <p>7월 먼슬리 리포트와</p>
            <p>세금계산서가 발행되었습니다</p>
          </div>
        </div>
        <div className="operationSection7th_b-text">
          <p>이 모든 업무가 세금계산서 지출 결의</p>
          <p>
            <strong>단 한 번으로 끝!</strong>
          </p>
        </div>

        <div className="operationSection7th_b-btn">
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
        </div>
      </div>
    </section>
  );
});

const OperationSection7th = () => {
  return withTheme(<OperationSection7thCp />);
};

export default OperationSection7th;
