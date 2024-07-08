import React from 'react';

import styles from './interiorBlock.module.scss';

export default function InteriorBlock({ className = '', title, subTitle, items }: InteriorBlockProps) {
  return (
    <div className={`${styles.InteriorBlock} ${className}`}>
      <div className="interiorBlock_b-head">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div className="interiorBlock_b-body">
        {items.map(item => (
          <div className={styles.InteriorItem} key={item.label}>
            <div className="interiorItem_left">
              <i>{item.icon}</i>
              <label>{item.label}</label>
            </div>
            <div className="interiorItem_right">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ItemProps {
  icon: string;
  label: string;
  desc: string;
}

interface InteriorBlockProps {
  className?: string;
  title?: string;
  subTitle?: string;
  items: Array<ItemProps>;
}
