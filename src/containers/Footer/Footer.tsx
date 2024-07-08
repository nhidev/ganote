import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ROUTE } from '@/utils/constants';
import styles from './footer.module.scss';

const footerData = [
  {
    label: '주식회사',
    value: '이십사쩜칠',
  },
  {
    label: '대표',
    value: '이선욱',
  },
  {
    label: '사업자등록번호',
    value: '864-86-02783',
  },
  {
    label: '상담 및 문의',
    value: '070-4102-2407',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footer_container">
        <div className="footer_logo">
          <Link href={ROUTE.HOME}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '76rem', height: 'auto' }}
              src="/iconsN/logo-footer.svg"
              alt="logo"
            />
          </Link>
        </div>
        <ul>
          {footerData.map(item => (
            <li key={item.label}>
              {item.label} <b>{item.value}</b>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
