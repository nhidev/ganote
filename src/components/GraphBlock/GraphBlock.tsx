import Image from 'next/image';
import React from 'react';

import styles from './graphBlock.module.scss';

export default function GraphBlock({ className = '', image, title, subTitle, total }: GraphBlockProps) {
  return (
    <div className={`${className} ${styles.GraphBlock}`}>
      <div className="graphBlock-head">
        <p className="graphBlock-title">{title}</p>
        <p className="graphBlock-subtitle">{subTitle}</p>
        <p className="graphBlock-amount">{total}</p>
      </div>
      <Image src={`/imagesN/${image}`} quality={100} width={530} height={234} alt={'chart'} loading="lazy" />
    </div>
  );
}
interface GraphBlockProps {
  className?: string;
  image: string;
  title: string;
  subTitle: string;
  total: string;
}
