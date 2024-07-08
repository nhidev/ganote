/* eslint-disable consistent-return */
'use client';
import React, { memo } from 'react';
import { Collapse } from 'antd';
import styles from './cleaningSection11th.module.scss';
import Image from 'next/image';

const data = [
  {
    key: '1',
    label: '청소 가능한 업종, 불가능한 업종이 있나요?',
    children: <>
      <p><span>총무노트 청소 가능한 업종</span>
        사무실, 학원/학교, 병원, 카페/음식점, 가게/매장, 상가/건물, 펜션, 에어비앤비, 서비스 불가능 업종 외 기타 사업장
        <span>총무노트 청소 불가능한 업종</span>
      </p>
      <p>총무노트 청소 불가능한 업종
        호텔, 모텔, 휴게소, 유흥업소 (노래방, 술집, 바, 클럽 등), 기타 불법 사업장, 주방 후드 및 배기관 청소
        가전제품 분리 세척, 무거운 기구를 이동해서 청소해야 하거나, 파손의 위험이 있는 고가의 기구
      </p></>
  },
  {
    key: '2',
    label: '총무노트 멤버십 가입하지 않고도 이용할 수 있나요?',
    children: <p>Updating</p>,
  },
  {
    key: '3',
    label: '서비스 지역이 궁금해요',
    children: <p>Updating</p>,
  },
  {
    key: '4',
    label: '결제는 어떻게 진행되나요?',
    children: <p>Updating</p>,
  },
  {
    key: '5',
    label: '청소도구는 직접 가져오시나요?',
    children: <p>Updating</p>,
  },
  {
    key: '6',
    label: '법인카드로 결제할 수 있나요?',
    children: <p>Updating</p>,
  },
  {
    key: '7',
    label: '영수증 및 현금영수증 발행은 어떻게 하나요?',
    children: <p>Updating</p>,
  },
  {
    key: '8',
    label: '세금계산서, 견적서 발행은 가능한가요?',
    children: <p>Updating</p>,
  }
];

const CleaningSection11th = memo(({ className = "" }: CleaningSection11thProps) => (
  <section className={`${styles.CleaningSection11th} ${className}`}>
    <div className='cleaningSection11th-wrapper'>
      <div className='cleaningSection11th_b-head'>
        <h2>FAQ</h2>
        <h2>자주 묻는 질문</h2>
      </div>
      {/* <Image src="/icons/DownArrow.svg" width={38} height={38} alt="DownArrow" /> */}
      <div className='cleaningSection11th_b-body'>
        <Collapse defaultActiveKey={['1']} items={data}
          expandIcon={() => <Image src="/iconsN/arrow_forward_ios.svg" width={24} height={24} alt="DownArrow" />} expandIconPosition="end">
        </Collapse>
      </div>
    </div>
  </section >
));

interface CleaningSection11thProps {
  className?: string;
}

export default CleaningSection11th;