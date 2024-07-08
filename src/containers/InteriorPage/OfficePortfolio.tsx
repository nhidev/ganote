'use client';

import { memo } from 'react';

import styles from './officePortfolio.module.scss';
import {InteriorSwiper} from '@/components';

const OFFICE_PORTFOLIO_LIST = [
  {
    image: 'interior-slide-01.png',
    title: `강남 인근 \nIT 기업 사무실`,
    desc: '프로젝트 기간: 1개월',
    quote: `매니저님이 턴키로 진행해 주셔서 \n예상 준공 일정대로 공사를 마쳤습니다. \n이사 이후에 직원분들이 좋아하시네요`,
  },
  {
    image: 'interior-slide-02.png',
    title: `용산구 컨설팅 회사 \n사무실`,
    desc: '프로젝트 기간: 3개월',
    quote: `야근과 미팅이 많아서 휴게 공간과 \n업무 공간 분리가 중요했는데 말씀드린 대로 \n설계되어 마음에 쏙 들었습니다`,
  },
  {
    image: 'interior-slide-04.png',
    title: `성수동 패션 브랜드 \n사무실`,
    desc: '프로젝트 기간: 2개월',
    quote: `상품의 런칭과 촬영을 위해 \n연구실, 스튜디오, 쇼룸을 요청드렸어요. \n완성도 측면에서 이만한 업체가 없습니다`,
  },
  {
    image: 'interior-slide-03.png',
    title: `자동차 대기업 분사 \n사무실`,
    desc: '프로젝트 기간: 1개월',
    quote: `무엇보다 만족스러웠던 점은 프로젝트 내내 \n총무의 입장에서 본 최선의 안을 \n제안해주신 거라고 생각합니다`,
  },
];

const OfficePortfolio = memo(() => {

  return (
    <section className={styles.OfficePortfolio}>
      <div className="officePortfolio_b-container">
        <div className="officePortfolio_b-head">
          <h2>
            {`인기 사무실 \n디자인 포트폴리오`}
          </h2>
        </div>

        <div className="officePortfolio_b-body">
          <InteriorSwiper className={styles.OfficePortfolio_InteriorSwiper} slideList={OFFICE_PORTFOLIO_LIST} />
        </div>
      </div>
    </section>
  );
});

export default OfficePortfolio;
