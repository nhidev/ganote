import Image from 'next/image';
import React from 'react';

import styles from './savingBlock.module.scss';

const data = [
  {
    title: '오픈 마켓 최저가',
    price: '60,000',
    hasOpacity: true,
  },
  {
    title: '총무노트 도매가',
    price: '59,000',
  },
];

export default function SavingBlock({ className = '', subTitle }: SavingBlockProps) {
  return (
    <div className={`${styles.SavingBlock} ${className}`}>
      <div className="savingBlock_b-head">
        <h3>
          최저가 찾는 시간
          <br />
          100% 절감
        </h3>
        <p>{subTitle}</p>
      </div>
      <div className="savingBlock_b-body">
        <ul>
          {data.map(item => (
            <li className={item.hasOpacity ? 'hasOpacity' : ''} key={item.title}>
              <p>
                <span>{item.title}</span>
                <span>{item.price}원</span>
              </p>
              {!item.hasOpacity && <Image src={`/iconsN/check.svg`} width={16} height={16} alt="check" />}
            </li>
          ))}
        </ul>
        <p className="savingBlock-sub">대량 구매 도매가 자동 적용</p>
      </div>
    </div>
  );
}

interface SavingBlockProps {
  className?: string;
  subTitle?: string;
}
