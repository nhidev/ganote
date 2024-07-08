'use client';

import { Button } from 'antd';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { memo } from 'react';

import { leadFormModalAtom } from '@/atoms';
import styles from './interior2ndSection.module.scss';

const data = [
  {
    id: 1,
    title: '견적',
    icon: '/iconsN/payments.svg',
    description: '예산이 타이트해서 \n가장 낮은 견적으로 \n진행하고 싶어요',
  },
  {
    id: 2,
    title: '일정',
    icon: '/iconsN/calendar_clock.svg',
    description: '준공 기간이 \n3개월을 \n넘지 않으면 좋겠어요',
  },
  {
    id: 3,
    title: '설계, 시공 별도',
    icon: '/iconsN/hardware.svg',
    description: '설계나 시공만 \n견적을 받아서 다른 곳과 \n비교해보고 싶어요',
  },
  {
    id: 4,
    title: '보고',
    icon: '/iconsN/contract.svg',
    description: '내부 보고를 위해 \n설계와 시공 과정을 \n보고서로 받아보고 싶어요',
  },
];

const Interior2ndSection = memo(({ className = '' }: Interior2ndSectionProps) => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);

  return (
    <section className={`${styles.Interior2ndSection} ${className}`}>
      <div className="interior2ndSection_b-container">
        <div className="interior2ndSection_b-head">
          <h2>이런 고민을 하고 있다면,</h2>
          <h2>총무노트와 함께하세요!</h2>
        </div>
        <div className="interior2ndSection_b-body">
          <ul>
            {data.map(item => (
              <li key={item.id}>
                <div className="interior2ndSection-title">
                  <Image width={26} height={26} src={item.icon} priority alt={item.title} />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="interior2ndSection_b-foot">
          <Button
            className="g-cta-button"
            icon={<Image width={12} height={14} src="/iconsN/ic-arrow-right.svg" alt="icon" />}
            onClick={(event) => {
              setLeadFormModal({ open: true, isDownload: false });
              event.currentTarget.blur();
            }}
          >
            무료로 인테리어 상담 받기
          </Button>
        </div>
      </div>
    </section>
  );
});

interface Interior2ndSectionProps {
  className?: string;
}

export default Interior2ndSection;
