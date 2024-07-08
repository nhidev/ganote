import React from 'react';

import { GraphBlock } from '../GraphBlock';
import { PieChartBlock } from '../PieChartBlock';
import styles from './checkingBlock.module.scss';

const pieData: any = [
  {
    key: 1,
    type: '22%',
    value: 22,
    color: '#BE7346',
  },
  {
    key: 2,
    type: '20%',
    value: 20,
    color: '#FFB25C',
  },
  {
    key: 3,
    type: '20% ',
    value: 20,
    color: '#FFE8CE',
  },
  {
    key: 4,

    type: '13%',
    value: 13,
    color: '#FFF7EF',
  },
  {
    key: 5,
    type: '13% ',
    value: 13,
    color: '#FFF',
  },
  {
    key: 6,
    type: '12%',
    value: 12,
    color: '#DAB49D',
  },
];

export default function CheckingBlock({ className = '' }: CheckingBlockProps) {
  return (
    <div className={`${styles.CheckingBlock} ${className}`}>
      <div className="checkingBlock_b-head">
        <h3>{`어디서 얼마나 썼는지 한눈에 파악해 \n줄일 수 있는 비용도 확인하세요`}</h3>
        <p>실시간 Dashboard 및 월간 리포트 제공</p>
      </div>
      <div className="checkingBlock_b-body">
        <PieChartBlock className="checkingBlock_b-pie" title="가장 많이 구매한 카테고리" items={pieData} />
        <GraphBlock
          image="chart-column.svg"
          title="구매 금액 그래프"
          subTitle="전체 카테고리 구매 금액"
          total="₩ 880,000 원"
        />
      </div>
      <div className="checkingBlock_b-foot">
        <p className="checkingBlock-title">총무노트 서비스 항목</p>
        <div className="checkingBlock-item">
          <p>탕비실 용품</p>
          <p>원두커피, 각종 티백, 시리얼, 우유, 시럽, 핸드타월, 물티슈, 시리얼 디스펜서, 종이컵, 이외 일회용품</p>
        </div>
        <div className="checkingBlock-item">
          <p>사무실 비품</p>
          <p>
            A4/A3 용지, 스테이플러, 제침기, 인주, 클립, 대봉투/소봉투, 테이프, 풀 가위, 커터칼, 자, 보드마카, 지우개,
            멀티탭, HDMI 케이블, 미니 콘솔장 외 100여 가지
          </p>
        </div>
      </div>
    </div>
  );
}

interface CheckingBlockProps {
  className?: string;
}
