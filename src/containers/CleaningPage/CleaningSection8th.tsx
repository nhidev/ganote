/* eslint-disable consistent-return */
'use client';
import React, { memo } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Image from 'next/image';
import withTheme from '@/theme';
import styles from './cleaningSection8th.module.scss';
interface TabItemProps {
  id: number;
  image: string;
  textArr: string[];
}

const data: TabItemProps[] = [
  {
    id: 1,
    image: '/imagesN/cleaning-section8-bg1.jpg',
    textArr: ['업무 공간 바닥 청소 및 먼지 제거', '물걸레 청소', '회의실, 라운지, 흡연실, 폰부스 등 정리 및 청소', '정리정돈', '파지함 비우기', '집기, 가구, 전자제품 표면 청소', '손이 닿는 유리창 청소', '회의실 유리문 청소', '창문 틈새 먼지 닦기', '쓰레기 분리수거 및 배출', '화분 물주기']
  },
  {
    id: 2,
    image: '/imagesN/cleaning-section8-bg2.jpg',
    textArr: ['설거지', '싱크대 청소 및 정리정돈', '개수대 청소', '조리대, 전자렌지 등 탕비실 가전 표면 청소', '커피머신 커피 찌꺼기 청소', '수납장 정리정돈', '음식물 쓰레기 배출']
  },
  {
    id: 3,
    image: '/imagesN/cleaning-section8-bg3.jpg',
    textArr: ['화장실 바닥 청소', '물걸레 청소', '세면대, 거울 청소', '변기 청소', '화장실 휴지통 비우기', '수납장 및 욕실 용품 정리정돈', '화장실 문, 문고리 청소']
  },
  {
    id: 4,
    image: '/imagesN/cleaning-section8-bg4.jpg',
    textArr: ['에어컨 분리 청소', '사무실 입주 청소', '카페트 청소', '엘리베이터 청소', '계단 및 복도 청소']
  }
];

const TabContent: React.FC<TabItemProps> = (item) => (
  <div className='tabs-content'>
    <ul className='tabs-content-left'>
      {item.textArr.map((text, index) =>
        <li key={index}>
          <Image src="/iconsN/tabler_checkbox.svg" alt="arrow-right" width={22} height={22} />
          {text}
        </li >
      )}

    </ul>
    <Image className='tabs-content-right' src={item.image} alt={item.image} width={941} height={627} />
  </div>
);

const CleaningSection8th = memo(({ className = "" }: CleaningSection8thProps) => {

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '사무실',
      children: <TabContent {...data[0]} />,
    },
    {
      key: '2',
      label: '탕비실',
      children: <TabContent  {...data[1]} />,
    },
    {
      key: '3',
      label: '화장실',
      children: <TabContent  {...data[2]} />,
    },
    {
      key: '4',
      label: '별도 협의',
      children: <TabContent  {...data[3]} />,
    },
  ];

  return (
    <section className={`${styles.CleaningSection8th} ${className}`}>
      <div className='cleaningSection8th-container'>
        <div className='cleaningSection8th_b-head'>
          <h2>
            사무실 정기 청소 서비스 범위
          </h2>
          <h2>
            빈틈없이 늘 깨끗한 사무실
          </h2>
        </div>
        <div className='cleaningSection8th_b-body fade-up-element'>
          {withTheme(
            <Tabs defaultActiveKey="1" items={items} />
          )}

        </div>
      </div>
    </section>
  )
});


interface CleaningSection8thProps {
  className?: string;
}

export default CleaningSection8th;