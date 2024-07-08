import React from 'react';

import { LoungeInfo } from '../LoungeInfo';
import styles from './cleanBlock.module.scss';

export default function CleanBlock({ className = '' }: CleanBlockProps) {
  return (
    <div className={`${styles.CleanBlock} ${className}`}>
      <div className="cleanBlock_b-head">
        <h3>
          청소 전후 사진까지
          <br />
          확실하게
        </h3>
        <p>
          출근 시간 엄수는 기본!
          <br />
          청소 전후 사진 제공으로 클리닝 만족 UP!
        </p>
      </div>
      <LoungeInfo image1='clean-1.jpeg' image2='clean-2.jpeg' />
    </div>
  );
}

interface CleanBlockProps {
  className?: string;
}
