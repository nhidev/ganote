'use client';

import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

import { MEDIA_SIZE } from '@/utils/constants';

const Column = dynamic(() => import('@ant-design/charts').then(({ Column }) => Column), { ssr: false });

const ColumnChart = ({ ...rest }) => {
  const isMobile = useMediaQuery({ maxWidth: MEDIA_SIZE.tablet });

  const data = [
    {
      month: '1월',
      amount: 900,
    },
    {
      month: '2월',
      amount: 900,
    },
    {
      month: '3월',
      amount: 1400,
    },
    {
      month: '4월',
      amount: 800,
    },
    {
      month: '5월',
      amount: 1250,
    },
    {
      month: '6월',
      amount: 2200,
    },
    {
      month: '7월',
      amount: 500,
    },
    {
      month: '8월',
      amount: 900,
    },
    {
      month: '9월',
      amount: 1200,
    },
    {
      month: '10월',
      amount: 1300,
    },
    {
      month: '11월',
      amount: 1650,
    },
    {
      month: '12월',
      amount: 900,
    },
  ];
  const config = {
    data,
    xField: 'month',
    yField: 'amount',
    xAxis: {
      label: {
        autoHide: false,
        autoRotate: false,
        style: {
          fill: '#09101D',
          fontSize: isMobile ? 10 : 14,
          fontWeight: 400,
          fontFamily: 'Pretendard, sans-serif',
        },
      },
      tickLine: { style: { lineWidth: 0 } },
    },
    yAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
        formatter: (v: any) => (v != 0 ? v + ' 만 원' : ''),
        style: {
          fill: '#09101D',
          fontSize: isMobile ? 10 : 14,
          fontWeight: 400,
          fontFamily: 'Pretendard, sans-serif',
        },
      },
    },
    meta: {
      month: {
        alias: '월',
      },
      amount: {
        alias: '만 원',
      },
    },
    maxColumnWidth: isMobile ? 6 : 18,
    columnStyle: {
      fill: '#be7346',
      stroke: '#be7346',
      lineWidth: 1,
      radius: [isMobile ? 6 : 8, isMobile ? 6 : 8, 0, 0],
      fontFamily: 'Pretendard, sans-serif',
      fontWeight: 400,
      fontSize: isMobile ? 10 : 14,
    },
    renderer: 'svg' as const,
    tooltip: false as const,
    appendPadding: [0, 0, 10, 0], // Fix: text is hidden
  };
  return <Column {...config} {...rest} className="element-active" />;
};

export default ColumnChart;
