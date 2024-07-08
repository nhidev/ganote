import Image from 'next/image';
import React from 'react';

import styles from './educationBlock.module.scss';

export default function EducationBlock({className = ''}: EducationBlockProps) {
  return (
    <div className={`${styles.EducationBlock} ${className}`}>
      <div className="educationBlock_b-head">
        <h3>
          철저한 청소 매뉴얼
          <br />
          교육 시스템
        </h3>
      </div>
      <div className="educationBlock_b-body">
        <div className="educationBlock-circle">
          <p>
            2주 이상
            <br />
            교육
          </p>
        </div>
        <Image width={42} height={18} src="/iconsN/mul-arrow-r.svg" alt="arrow" />

        <div className="educationBlock-circle orange">
          <p>
            📕
            <br />
            업무 시작
          </p>
        </div>
      </div>
    </div>
  );
}

interface EducationBlockProps {
  className?: string;
}
