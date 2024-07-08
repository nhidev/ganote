import Image from 'next/image';
import React from 'react';

import { Default, Mobile } from '../MediaQuery';
import styles from './benefitBlock.module.scss';

const data = [
  {
    title: '총 유지보수 업무 횟수',
    sub: 'Maintenace request',
    amount: 112,
  },
  {
    title: '완료된 유지보수 업무 횟수',
    sub: 'Maintenace request',
    amount: 100,
  },
  {
    title: '잔존 유지보수 업무 횟수',
    sub: 'Maintenace request',
    amount: 12,
  },
];

export default function BenefitBlock({ className = "" }: BenefitBlockProps) {
  return (
    <div className={`${styles.BenefitBlock} ${className}`}>
      <div className="benefitBlock_b-head">
        <h3>{`간편한 출동 요청과 \n특별한 오피스 시설 유지 관리 혜택까지`}</h3>
      </div>
      <div className="benefitBlock_b-body">
        <div className="benefitBlock_b-top">
          <h4>대시보드</h4>
          <p>KEF 컴퍼니의 유지보수 현황입니다.</p>

          <div className="benefitBlock-right">
            <label className="benefitBlock-noti">
              <Image src={`/iconsN/noti.svg`} width={36} height={26} alt={'notification'} />
            </label>
            <label className="benefitBlock-acount">
              <Image src={`/iconsN/account_circle.svg`} width={36} height={26} alt={'notification'} />
              <p>김노트</p>
            </label>
          </div>
        </div>
        <div className="benefitBlock_b-bot">
          <ul>
            {data.map(item => (
              <li key={item.title}>
                <div className="benefitBlock_b">
                  <p className="benefitBlock-title">{item.title}</p>
                  {/* <p className="benefitBlock-sub">{item.sub}</p> */}
                </div>
                <h4>{item.amount}</h4>
              </li>
            ))}
          </ul>
          <div className="benefitBlock_b-column">
            <div className="benefitBlock-head">
              <p className="benefitBlock-title">월 별 사용대금</p>
              <p className="benefitBlock-sub">Price of maintenance service per month</p>
              <Image src={`/iconsN/year.svg`} width={95} height={24} alt={'chart'} />
            </div>
            <Mobile>
              <Image
                className="benefitBlock_chart-img"
                src={`/imagesN/chart-column-2-mo.svg`}
                quality={100}
                width={697}
                height={280}
                alt={'chart'}
              />
            </Mobile>
            <Default>
              <Image
                className="benefitBlock_chart-img"
                src={`/imagesN/chart-column-2.svg`}
                quality={100}
                width={697}
                height={280}
                alt={'chart'}
              />
            </Default>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BenefitBlockProps {
  className?: string;
}

