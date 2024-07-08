'use client';

import { memo } from 'react';
import { Button, Table } from 'antd';
import Image from 'next/image';
import { useSetAtom } from 'jotai';
import { leadFormModalAtom } from '@/atoms';

import styles from './cleaningSection9th.module.scss';

export const COLUMNS_CLEANING = [
  {
    title: `사무실 \n면적`,
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: `예상 청소 시간\n(1주)`,
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: `단기 청소\n(1회)`,
    dataIndex: 'shortCleaning',
    key: 'shortCleaning',
  },
  {
    title: `정기 청소\n(2회)`,
    dataIndex: 'regularCleaning',
    key: 'regularCleaning',
    render(regularCleaning: string[]) {
      return <>{regularCleaning[0]} <span>{regularCleaning[1]}</span></>;
    },
  },
];

export const DATA_CLEANING = [
  {
    key: '1',
    area: '50평 이상',
    price: '1시간',
    shortCleaning: '250,000원',
    regularCleaning: ['400,000원', '20% OFF'],
  },
  {
    key: '2',
    area: '100평 이상',
    price: '1.5시간',
    shortCleaning: '450,000원',
    regularCleaning: ['650,000원', '28% OFF'],
  },
  {
    key: '3',
    area: '200평 이상',
    price: '2.5시간',
    shortCleaning: '700,000원',
    regularCleaning: ['1,000,000원', '29% OFF'],
  },
  {
    key: '4',
    area: '300평 이상',
    price: '3시간',
    shortCleaning: '900,000원',
    regularCleaning: ['1,400,000원', '22% OFF'],
  },
  {
    key: '5',
    area: '400평 이상',
    price: '3.5시간',
    shortCleaning: '1,100,000원',
    regularCleaning: ['1,700,000원', '23% OFF'],
  },
  {
    key: '6',
    area: '500평 이상',
    price: '4시간',
    shortCleaning: '1,300,000원',
    regularCleaning: ['2,000,000원', '23% OFF'],
  },
];

const CleaningSection9th = memo(() => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);

  return (
    <section className={styles.CleaningSection9th}>
      <div className="cleaningSection9th-container">
        <div className="cleaningSection9th_b-head">
          <h2>서비스 요금</h2>
          <h2>수도권 어디서나 합리적으로</h2>
        </div>
        <div className="cleaningSection9th_b-body">
          <Table className='custom-table' columns={COLUMNS_CLEANING} dataSource={DATA_CLEANING} pagination={false} />
          <p className='table-note'>{`총무노트 사무실청소의 가격은 주소지와 멤버십 가입, \n청소 횟수에 따라 비용이 달라질 수 있습니다.`}</p>
        </div>
        <div className="cleaningSection9th_b-foot">
          <Button
            className="g-cta-button"
            icon={<Image width={12} height={14} src="/iconsN/ic-arrow-right.svg" alt="icon" />}
            onClick={(event) => {
              setLeadFormModal({ open: true, isDownload: false });
              event.currentTarget.blur();
            }}
          >
            1회 사용도 가능! 상담 받아보기
          </Button>
        </div>
      </div>
    </section>
  )
});

export default CleaningSection9th;
