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
    children: <p>네 총무노트 사무실 청소 서비스는 멤버십에 가입하지 않더라도 1회로도 이용 가능합니다.</p>,
  },
  {
    key: '3',
    label: '서비스 지역이 궁금해요',
    children: <p>총무노트 서비스는 서울 전지역과 경기도, 인천 등 수도권 지역에서 이용하실 수 있습니다.</p>,
  },
  {
    key: '4',
    label: '결제는 어떻게 진행되나요?',
    children: <p>결제는 총무노트 어드민에 등록하신 카드와 결제 정보로 진행 가능합니다</p>,
  },
  {
    key: '5',
    label: '청소도구는 직접 가져오시나요?',
    children: <p>사무실 청소에 필요한 청소도구는 총무노트에서 모두 가져갑니다.</p>,
  },
  {
    key: '6',
    label: '법인카드로 결제할 수 있나요?',
    children: <p>법인카드로 결제 가능합니다. 카드정보와 사업자등록번호를 입력하여 사용하실 법인카드를 등록해주세요.<br />
      등록하신 카드로 자동 결제됩니다. 단, 법인카드의 관리자가 온라인 업종 결제 제한을<br />
      걸어두셨을 경우 결제가 진행되지 않으니 주의해주세요</p>,
  },
  {
    key: '7',
    label: '영수증 및 현금영수증 발행은 어떻게 하나요?',
    children: <p>영수증의 경우, 나이스 페이먼츠에서 사용하신 신용카드 사용내역을 확인하실 수 있습니다.<br />
      카카오페이 등 페이류의 경우 카카오톡이나 카카오페이 앱에서 확인하실 수 있습니다.<br />
      현금영수증의 경우 휴대폰번호(소득증빙), 사업자등록번호(지출증빙)을 결제할 때 입력해주세요</p>,
  },
  {
    key: '8',
    label: '세금계산서, 견적서 발행은 가능한가요?',
    children: <p><p>세금계산서와 견적서 발행은 가능합니다. 필요 시 <a href="mailto:24.7@24dot7company.com">24.7@24dot7company.com</a> 로<br />
      관련 내용을 요청 부탁드립니다.</p></p>,
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