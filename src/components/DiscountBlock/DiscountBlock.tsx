import Image from 'next/image';
import React from 'react';

import styles from './discountBlock.module.scss';

export default function DiscountBlock({ className = '' }: DiscountBlockProps) {
  return (
    <div className={`${styles.DiscountBlock} ${className}`}>
      <div className="discountBlock_b-head">
        <h3>{`가견적 대신 \n확실한 할인가 제공`}</h3>
      </div>
      <div className="discountBlock_b-body">
        <div className="discountBlock_b-left">
          <div className="discountBlock-list">
            <p className="discountBlock-title">가견적</p>
            <ul>
              <li>
                <p>+ 추가 금액</p>
              </li>
              <li>
                <p>+ 추가 금액</p>
              </li>
              <li>
                <p>+ 추가 금액</p>
              </li>
            </ul>
          </div>
          <p className="discountBlock-sub">타 업체</p>
        </div>
        <div className="discountBlock-vs">VS</div>

        <div className="discountBlock_b-right">
          <Image src={`/imagesN/book-2.svg`} width={110} height={144} alt="book" />
          <p>총무노트</p>
        </div>
      </div>
    </div>
  );
}

interface DiscountBlockProps {
  className?: string;
}
