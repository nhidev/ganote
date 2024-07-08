'use client';

import Image from 'next/image';
import React from 'react';

import styles from './requestBlock.module.scss';
import { Default, Mobile } from '@/components';

export default function RequestBlock({ className = '', title, subTitle, block1, block2, titleMobile }: RequestBlockProps) {

  return (
    <div className={`${styles.RequestBlock} ${className}`}>
      <div className="requestBlock_b-head">
        <h3>
          <Default>{title}</Default>
          <Mobile>{titleMobile || title}</Mobile>
        </h3>
        <p>{subTitle}</p>
      </div>
      <div className="requestBlock_b-container">
        <div className="requestBlock_b-left">
          <div className="requestBlock_block">
            <label className="requestBlock-close">
              <Image width={22} height={22} src="/iconsN/close.svg" alt="close" />
            </label>
            <div className="requestBlock-head">
              <p className="requestBlock-title">{block1.title}</p>
              <p className="requestBlock-subTitle">{block1.subTitle}</p>
            </div>
            <div className="requestBlock-item">
              <p className="requestBlock-title">{block1.dropdownTitle}</p>
              <label>
                <p>{block1.dropdownText}</p>
                <Image width={22} height={22} src="/iconsN/expand_more.svg" alt="dropdown" />
              </label>
            </div>
            <div className="requestBlock-item">
              <p className="requestBlock-title">{block1.detailTitle}</p>
              <div className="requestBlock-message">
                <p>{block1.detailDescription}</p>
              </div>
            </div>
          </div>
          <p className="requestBlock-sub">{block1.sub}</p>
        </div>
        <div className="requestBlock_b-right">
          <div className="requestBlock_block">
            <label className="requestBlock-close">
              <Image width={22} height={22} src="/iconsN/close.svg" alt="close" />
            </label>
            <div className="requestBlock-head">
              <p className="requestBlock-title">{block2.title}</p>
              <p className="requestBlock-subTitle">{block2.subTitle}</p>
            </div>
            <ul>
              {block2.items.map(item => (
                <li key={item.title + item.value}>
                  <label className={item?.highlight ? 'highlight' : ''}>
                    <p>{item.title}</p>
                    <h4>{item.value}</h4>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <p className="requestBlock-sub">{block2.sub}</p>
        </div>
      </div>
    </div>
  );
}

interface Block1Props {
  title: string;
  subTitle: string;
  dropdownTitle: string;
  dropdownText: string;
  detailTitle: string;
  detailDescription: string;
  sub: string;
}

interface Block2Props {
  title: string;
  subTitle: string;
  sub: string;
  items: Array<{
    title: string;
    value: string | number;
    highlight?: boolean;
  }>;
}

interface RequestBlockProps {
  className?: string;
  title?: string;
  subTitle?: string;
  block1: Block1Props;
  block2: Block2Props;
  titleMobile?: string;
}
