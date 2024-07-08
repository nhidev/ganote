import localFont from 'next/font/local';
import Link from 'next/link';
import React from 'react';

import stylesBtn from '../Button/Button.module.scss';
import styles from './header.module.scss';

const YeongdeokFont = localFont({ src: '../../../public/fonts/Yeongdeok Sea.ttf' });

export default function HeaderMenu({ className }: { className: string }) {
  return (
    <div className={`${styles.HeaderEvent} ${className}`}>
      <Link href="/interior" className={stylesBtn.Button}>
        사무실 인테리어
      </Link>
      <button className={stylesBtn.Button}>
        사무 공간 운영 관리 <span className={`${YeongdeokFont?.className} ${styles.HighlightText}`}>준비 중</span>
      </button>
    </div>
  );
}
