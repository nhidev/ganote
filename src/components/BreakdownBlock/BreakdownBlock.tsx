'use client';

import { Checkbox } from 'antd';
import React from 'react';

import withTheme from '@/theme';
import styles from './breakdownBlock.module.scss';

const BreakdownBlock = ({
  className = '',
  title,
  subTitle,
  items,
  detailTitle,
  detailDescription,
  sub,
}: BreakdownBlockProps) => {
  return (
    <div className={`${styles.BreakdownBlock} ${className}`}>
      <div className="breakdownBlock_b-head">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div className="breakdownBlock_b-body">
        <ul>
          {items.map(item => (
            <li key={item.title}>
              {withTheme(
                <Checkbox checked={item.checked}>{item.title}</Checkbox>
              )}
            </li>
          ))}
        </ul>
        <div className="breakdownBlock-detail">
          <p className="breakdownBlock-title">{detailTitle}</p>
          <div className="breakdownBlock-content">
            <p>{detailDescription}</p>
          </div>
        </div>

        <p className="breakdownBlock-sub">{sub}</p>
      </div>
    </div>
  );
};

interface ItemProps {
  title: string;
  checked: boolean;
}

interface BreakdownBlockProps {
  className?: string;
  title: string;
  subTitle: string;
  items: Array<ItemProps>;
  detailTitle?: string;
  detailDescription?: string;
  sub?: string;
}


export default BreakdownBlock;
