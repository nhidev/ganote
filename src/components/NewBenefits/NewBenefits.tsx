import Image from 'next/image';
import React from 'react';

import styles from './newBenefits.module.scss';

export default function NewBenefits({ className = '', title, subTitle, items }: NewBenefitsProps) {
  return (
    <div className={`${styles.NewBenefits} ${className}`}>
      <div className="newBenefits_b-head">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div className="newBenefits_b-body">
        <h4>📢 알려드려요</h4>
        <p>이 달의 업데이트</p>
        <div className="image-block">
          {items.map((item, index) => (
            <div className="image-item" key={index}>
              <Image quality={100} width={176} height={104} src={`/imagesN/${item.image}`} alt="images interior" />
              {item.label && <label>{item.label}</label>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ItemProps {
  image?: string;
  label?: string;
}

interface NewBenefitsProps {
  className?: string;
  title?: string;
  subTitle?: string;
  items: Array<ItemProps>;
}
