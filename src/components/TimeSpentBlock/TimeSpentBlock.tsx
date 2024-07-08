import Image from 'next/image';
import React from 'react';

import styles from './timeSpentBlock.module.scss';
import { Default, Mobile } from '../MediaQuery';

export default function TimeSpentBlock({ className = '' }: TimeSpentBlockProps) {
  return (
    <div className={`${styles.TimeSpentBlock} ${className}`}>
      <div className="timeSpentBlock_b-head">
        <h3>비품 관리 소요 시간</h3>
      </div>
      <div className="timeSpentBlock_b-body">
        <div className="timeSpentBlock_b-top">
          <Mobile>
              <Image
                src={`/imagesN/time-required-chart_mobile.png`}
                width={295}
                height={160}
                unoptimized
                alt="time required"
              />
          </Mobile>
          <Default>
            <div className="timeSpentBlock-chart">
              <Image
                src={`/imagesN/time-required-chart.svg`}
                width={295}
                height={160}
                alt="time required"
                quality={100}
              />
            </div>
            </Default>
          <p>기존</p>
        </div>
        <div className="timeSpentBlock-vs">VS</div>

        <div className="timeSpentBlock_b-bot">
          <Image src={`/imagesN/book-1.svg`} width={110} height={144} alt="book" />
          <p>총무노트</p>
        </div>
      </div>
    </div>
  );
}

interface TimeSpentBlockProps {
  className?: string;
}
