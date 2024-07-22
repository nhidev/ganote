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
      <p>총무노트 청소 가능한 업종
        <span>사무실, 학원/학교, 병원, 카페/음식점, 가게/매장, 상가/건물, 펜션, 에어비앤비, 서비스 불가능 업종 외 기타 사업장</span>
      </p>
      <p>총무노트 청소 불가능한 업종<span>호텔, 모텔, 휴게소, 유흥업소 (노래방, 술집, 바, 클럽 등), 기타 불법 사업장, 무거운 기구를 이동해서 청소해야 하거나, 파손의 위험이 있는 고가의 기구</span>
      </p></>
  },
  {
    key: '2',
    label: '총무노트 멤버십 가입하지 않고도 이용할 수 있나요?',
    children: <p>네 이용 가능합니다. 멤버십에 가입하지 않더라도 1회로도 총무노트 사무실 청소 서비스를 이용해보실 수 있습니다.</p>,
  },
  {
    key: '3',
    label: '서비스 지역이 궁금해요',
    children: <p>총무노트 서비스는 서울 전지역과 경기도, 인천 등 수도권 지역에 서비스를 제공 드리고 있습니다.</p>,
  },
  {
    key: '4',
    label: '결제는 어떻게 진행되나요?',
    children: <p>총무노트에서 당월말일 세금계산서를 발행 드리며, 계좌이체를 통해 결제해주시면 됩니다.</p>,
  },
  {
    key: '5',
    label: '청소도구는 직접 가져오시나요?',
    children: <p>네 총무노트에서 청소 도구를 직접 가져가 서비스를 제공 드립니다. 저희 총무노트는 사무실 청소에 필요한 전문 청소도구를 구비하고 있습니다.</p>,
  },
  {
    key: '6',
    label: '법인카드로 결제할 수 있나요?',
    children: <p>법인카드 결제 서비스는 준비중에 있습니다.</p>,
  },
  {
    key: '7',
    label: '영수증 및 현금영수증 발행은 어떻게 하나요?',
    children: <p>현금영수증의 경우 휴대폰번호(소득증빙), 사업자등록번호(지출증빙)를 전달 주시면 발행 드립니다.</p>,
  },
  {
    key: '8',
    label: '세금계산서, 견적서 발행은 가능한가요?',
    children: <p><p>네 세금계산서와 견적서 발행 가능합니다. 필요 시 <a href="mailto:24.7@24dot7company.com">24.7@24dot7company.com</a> 로 언제든 관련 내용 요청 부탁 드립니다.</p></p>,
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