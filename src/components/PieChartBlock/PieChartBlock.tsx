'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

import styles from './pieChartBlock.module.scss';

const Pie = dynamic(() => import('@ant-design/charts').then(({ Pie }) => Pie), { ssr: false });

const PieChartBlock = ({ title, items, className = '', image }: PieChartBlockProps, key: any) => {
  const config = {
    appendPadding: 0,
    data: items,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    autoFit: true,
    renderer: 'svg' as const,
    legend: false as const,
    label: false as const,
    tooltip: false as const,
    statistic: {
      title: false as const,
      content: false as const,
    },
    color: items && items.map(item => item.color),
    pieStyle: {
      lineWidth: 0,
    },
  };
  return (
    <div className={`${styles.PieChartBlockWrapper}  ${className}`} key={key}>
      <p className="pie_chart-title">{title}</p>
      <div className={`${image ? 'has-chart-image' : ''} pie_chart`}>
        {image ? (
          <Image
            className="pie-chart-img"
            quality={100}
            width={92}
            height={92}
            src={`/imagesN/${image}`}
            alt="pie chart"
          />
        ) : (
          <Pie {...config} />
        )}
      </div>
      <ul className={items && items.length <= 4 ? 'pie_chart-2col' : ''}>
        {items.map(item => (
          <li key={item.key + item.type}>
            <i style={{ backgroundColor: item.color }} />
            <span>{item.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface itemProps {
  key?: any;
  type: string;
  color: string;
  value: string | number;
}

interface PieChartBlockProps {
  title: string;
  items: Array<itemProps>;
  className?: string;
  image?: string;
}

export default PieChartBlock;
