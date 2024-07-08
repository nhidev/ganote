import Image from 'next/image';
import React from 'react';

import styles from './responsibilityManagementBlock.module.scss';

export default function ResponsibilityManagementBlock({ className = '' }: ResponsibilityManagementBlockProps) {
  return (
    <div className={`${styles.ResponsibilityManagementBlock} ${className}`}>
      <div className="responsibilityManagementBlock_b-head">
        <h3>
          10년 경력 사무실 전문가 <br />
          현장 책임 관리
        </h3>
        <p>전화 한 번으로 시설 문제 컨설팅 완료!</p>
      </div>
      <div className="responsibilityManagementBlock_b-body">
        <Image src={`/imagesN/light.svg`} width={407} height={380} alt="light" />
      </div>
    </div>
  );
}

interface ResponsibilityManagementBlockProps {
  className?: string;
}
