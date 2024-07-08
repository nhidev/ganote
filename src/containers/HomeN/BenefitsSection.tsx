import { memo } from 'react';

import styles from './benefitsSection.module.scss';
import {BreakdownBlock, InteriorBlock, NewBenefits} from '@/components';


const BREAK_DOWNBLOCK_ITEMS: any = [
  {
    title: '오피스',
  },
  {
    title: '라운지',
  },
  {
    title: 'Bar',
  },
  {
    title: '회의실',
    checked: true,
  },
  {
    title: 'OA 존',
  },
  {
    title: '화장실',
  },
  {
    title: '폰부스',
  },
  {
    title: '개인실',
  },
];

const INTERIOR_BLOCK_ITEMS: any = [
  {
    label: '14년+',
    icon:  '📐',
    desc: `강남만 10,000평+ \n사무실 구축 14년 경력`,
  },
  {
    label: '3개월',
    icon: '🗓️',
    desc: `프로젝트 전체 \n최소 3개월 내 완공`,
  },
  {
    label: '50만',
    icon: '💰',
    desc: `평 당 \n50만원 부터`,
  }
];

const NEW_BENEFITS_ITEMS : any = [
  {
    label: '임직원 생일 이벤트',
    image: 'birthday-cake.png',
  },
  {
    label: '설날 단체 선물',
    image: 'memories.png',
  },
  {
    label: '',
    image: 'gray-bg.png',
  },
  {
    label: '',
    image: 'landscape.png',
  },
]

const BenefitsSection = memo(({ className= '' }: BenefitsSectionProps) => {
  return (
    <section className={`${styles.BenefitsSection} ${className}`}>
        <h2>갑작스러운 시즌 업무</h2>
        <h2 className='title-bottom'>10년 노하우의 <br/>총무노트와 함께해요</h2>
        <div className="benefits-container">
          <InteriorBlock
              className={`${styles.OfficeInterior} fade-up-element`}
              items={INTERIOR_BLOCK_ITEMS}
              title="사무실 인테리어"
              subTitle="가장 전문적으로, 빠르고, 저렴하게" 
          />
          <BreakdownBlock
            title={`실내 사무 시설 \nALL CARE`}
            subTitle={`언제나 상시 대기`}
            detailTitle="내용"
            detailDescription={`회의실 꽉 닫히지 않아 방음 문제가 있습니다 \n와서 교체해야 할지 확인해 주세요!`}
            sub="작업이 필요한 시설 및 일정에 대한 정보를 제공해주세요"
            items={BREAK_DOWNBLOCK_ITEMS}
            className={`${styles.BreakdownBlock} fade-up-element`}
          />
          <NewBenefits 
            title={`신규 복지 \n업데이트`}
            subTitle={`고객사 대상 복지 서비스 정기 업데이트`}
            items={NEW_BENEFITS_ITEMS}
            className={`${styles.NewBenefits} fade-up-element`}
          />
        </div>
    </section>
  );
});

interface BenefitsSectionProps {
  className?: string;
}

export default BenefitsSection;
