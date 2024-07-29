/* eslint-disable consistent-return */
'use client';
import React, { memo } from 'react';
import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';

import Image from 'next/image';
import { LoungeInfo, NewBenefits, GraphBlock, PieChartBlock } from '@/components';
import withTheme from '@/theme';
import { useSetAtom } from 'jotai';
import { leadFormModalAtom } from '@/atoms';
import styles from './cleaningSection5th.module.scss';

interface RequestItemProps {
  desc: string;
  label: string;
}

const PIE_01_DATA: any = [
  {
    key: '원두 커피',
    type: '원두 커피',
    value: 32,
    color: '#BE7346',
  },
  {
    key: '물티슈',
    type: '물티슈',
    value: 17,
    color: '#FF8F43',
  },
  {
    key: '시리얼',
    type: '시리얼',
    value: 15,
    color: '#FFB25C',
  },
  {
    key: '보드마카',
    type: '보드마카',
    value: 8,
    color: '#FFC98D',
  },
  {
    key: '우유',
    type: '우유',
    value: 8,
    color: '#FFF',
  },
  {
    key: '티백',
    type: '티백',
    value: 7,
    color: '#E7CEB8',
  },
  {
    key: '핸드타월',
    type: '핸드타월',
    value: 5,
    color: '#EDE1D7',
  },
  {
    key: 'A4용지',
    type: 'A4용지',
    value: 5,
    color: '#FFF',
  },
  {
    key: '종이컵',
    type: '종이컵',
    value: 4,
    color: '#FFF',
  },
];

const PIE_02_DATA: any = [
  {
    key: 'TEAM A',
    type: 'TEAM A',
    value: 48,
    color: '#BE7346',
  },
  {
    key: 'TEAM B',
    type: 'TEAM B',
    value: 34,
    color: '#FF8F43',
  },
  {
    key: 'TEAM C',
    type: 'TEAM C',
    value: 16,
    color: '#FF8F43',
  },
  {
    key: 'TEAM D',
    type: 'TEAM D',
    value: 12,
    color: '#FFC98D',
  },
  {
    key: 'TEAM E',
    type: 'TEAM E',
    value: 8,
    color: '#FFF',
  },
];

const PIE_04_DATA: any = [
  {
    key: 1,
    type: '양이 부족함',
    value: 50,
    color: '#BE7346',
  },
  {
    key: 2,
    type: '다양한 종류',
    value: 37,
    color: '#FF8F43',
  },
  {
    key: 3,
    type: '메뉴 변경',
    value: 20,
    color: '#FFC98D',
  },
  {
    key: 4,
    type: '음료수 추가',
    value: 12,
    color: '#FFF',
  },
];

const requestItems: RequestItemProps[] = [
  {
    desc: '비품 추가 요청',
    label: '5건',
  },
  {
    desc: '긴급 클리닝 요청',
    label: '10/11, 11/15',
  },
  {
    desc: '부가 서비스 구독 요청',
    label: '임직원 생일 이벤트',
  },
];

const NEW_BENEFITS_ITEMS: any = [
  {
    label: '임직원 생일 이벤트',
    image: 'cleaning-section5th-1.png',
  },
  {
    label: '설날 단체 선물',
    image: 'cleaning-section5th-2.png',
  },
  {
    label: '설 선물 사전예약',
    image: 'cleaning-section5th-3.png',
  },
  {
    label: '발렌타인데이 꽃다발 만들기',
    image: 'cleaning-section5th-4.png',
  },
]

const TabContent1 = () => (
  <div className='tabs-content'>
    <div className='tabs-content-left' >
      <h3>청소 후<br />
        사진 제공</h3>
      <p>사무실 청소 후 사진을 제공해드려요.<br />
        클리닝 만족도와 직원 만족도가 함께 올라가요</p>
    </div>
    <LoungeInfo className='tabs-content-right' image1='cleaning-section5-1.jpg' image2='cleaning-section5-2.jpg' />
  </div>
);
const TabContent2 = () => {
  const renderRequestBlock = () => (
    <div className={`${styles.RequestBlock}`}>
      <h5>서비스 제공 요청</h5>
      {requestItems.map((request, index) => (
        <div className="request-item" key={index}>
          <p>{request.desc}</p>
          <label>{request.label}</label>
        </div>
      ))}
    </div>
  );

  return (
    <div className='tabs-content'>
      <div className='tabs-content-left' >
        <h3>보고서도<br />
          총무노트가</h3>
        <p>월간 보고문서 때문에 야근할 필요가 없어요<br />
          총무노트가 드리는 리포트로<br />
          월 별 요청사항부터<br />
          어디서 얼마나 썼는지 한눈에 파악해서<br />
          줄일 수 있는 비용을 확인해보세요.</p>
      </div>
      <div className={`${styles.ManagementGraphChart}`}>
        <GraphBlock
          image="dashboard-chart-column.svg"
          title="월 별 사무실 운영 Dashboard"
          subTitle=""
          total=""
          className={`${styles.ManagementGraph}`}
        />
        <div className={styles.ManagementPieChartBlock}>
          <PieChartBlock
            className="managementPieChart-pie"
            title="상품별 구매 비율"
            items={PIE_01_DATA}
          />
          <PieChartBlock
            className="managementPieChart-pie"
            title="조직별 구매 비율"
            items={PIE_02_DATA}
          />
          {renderRequestBlock()}
          <PieChartBlock
            className="managementPieChart-pie"
            title="월별 요청사항"
            items={PIE_04_DATA}
          />
        </div>
      </div>

    </div>
  )
};

const TabContent3 = () => (
  <div className='tabs-content'>
    <div className='tabs-content-left' >
      <h3>시즌 관리,<br />
        놓치지마세요.</h3>
      <p>시즌 별로 총무님이 챙기셔야 하는<br />
        이벤트를 알려드려요<br />
        총무노트의 사무실 데이터 베이스로<br />
        우리 사무실 공간을 더욱 체계적으로 관리하세요</p>
    </div>
    <NewBenefits
      title=''
      subTitle=''
      items={NEW_BENEFITS_ITEMS}
      className={`${styles.NewBenefits} fade-up-element`}
    />
  </div>
);

const CleaningSection5th = memo(({ className = "" }: CleaningSection5thProps) => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '청소 사진',
      children: <TabContent1 />,
    },
    {
      key: '2',
      label: '월간 보고서',
      children: <TabContent2 />,
    },
    {
      key: '3',
      label: '시즌 관리',
      children: <TabContent3 />,
    },
  ];

  return (
    <section className={`${styles.CleaningSection5th} ${className}`}>
      <div className='cleaningSection5th-container'>
        <div className='cleaningSection5th_b-head'>
          <h2>
            국내 유일 GA SaaS 플랫폼
          </h2>
          <h2>
            총무노트는 가능합니다
          </h2>
        </div>
        <div className='cleaningSection5th_b-body fade-up-element'>
          {withTheme(<Tabs defaultActiveKey="1" items={items}/>)}
        </div>
        <div className="cleaningSection5th_b-foot">
          <Button
            className="g-cta-button"
            icon={<Image width={12} height={14} src="/iconsN/ic-arrow-right.svg" alt="icon" />}
            onClick={(event) => {
              setLeadFormModal({ open: true, isDownload: false });
              event.currentTarget.blur();
            }}
          >
            총무노트 상담 받기
          </Button>
        </div>
      </div>
    </section>
  )
});


interface CleaningSection5thProps {
  className?: string;
}

export default CleaningSection5th;