import { memo } from 'react';

import {
  BenefitBlock,
  BreakdownBlock,
  DiscountBlock,
  ResponsibilityManagementBlock,
} from '@/components';
import styles from './operationSection6th.module.scss';

const items: any = [
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

const OperationSection6th = memo(() => {
  return (
      <section className={styles.OperationSection6th} id="space-maintenance">
        <div className={styles.OperationSection6thTop}>
          <div className="operationSection6thTop_container">
            <div className="operationSection6thTop_b-head">
              <h2>언제나 상시 대기</h2>
              <h2>사무실 시설 유지 관리</h2>
            </div>
            <div className="operationSection6thTop_b-body">
              <DiscountBlock className="fade-up-element"/>
            </div>
          </div>
        </div>
        <div className={styles.Line}>
          <i />
        </div>
        <div className={styles.OperationSection6thMiddle}>
          <div className="operationSection6thMiddle_container">
            <BreakdownBlock
              title={`갑작스러운 \n사무기기 고장 ALL Care`}
              subTitle={`생각보다 자주 생기는 시설 고장 \n빠르게 고쳐드려요!`}
              detailTitle="내용"
              detailDescription={`회의실 꽉 닫히지 않아 방음 문제가 있습니다 \n와서 교체해야 할지 확인해 주세요!`}
              sub="작업이 필요한 시설 및 일정에 대한 정보를 제공해주세요"
              items={items}
              className="operationSection6thMiddle-breakdownBlock fade-up-element"
            />
            <ResponsibilityManagementBlock className="operationSection6thMiddle-responsibility fade-up-element" />
          </div>
        </div>
        <div className={styles.OperationSection6thFoot}>
          <BenefitBlock className="fade-up-element"/>
        </div>
      </section>
  );
});

export default OperationSection6th;
