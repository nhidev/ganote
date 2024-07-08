import { memo } from 'react';

import {
  CheckingBlock,
  Default,
  InventorySavingBlock,
  ItemSavingBlock,
  Mobile,
  SavingBlock,
  TimeSpentBlock,
} from '@/components';
import { COLUMNS_OPERATION, DATA_OPERATION } from '@/utils/constants';
import styles from './operationSection5th.module.scss';

const data = [
  {
    icon: '🚨',
    text: '재고 부족',
  },
  {
    icon: '📒',
    text: '자동 발주',
  },
  {
    icon: '👍🏻',
    text: '사무실 내 \n셋팅 완료!',
  },
];

const OperationSection5th = memo(() => {
  return (
      <section className={styles.OperationSection5th} id="MRO-supplies-management">
        <div className={styles.OperationSection5thTop}>
          <div className="operationSection5thTop_container">
            <div className="operationSection5thTop_b-head">
              <h2>기존 업무 시간 90% 단축</h2>
              <h2>사무실 비품 관리</h2>
            </div>
            <div className="operationSection5thTop_b-body">
              <TimeSpentBlock className="fade-up-element"/>
            </div>
          </div>
        </div>
        <div className={styles.Line}>
          <i />
        </div>
        <div className={styles.OperationSection5thMiddle}>
          <div className="operationSection5thMiddle_container">
            <div className="operationSection5thMiddle_b-left">
              <SavingBlock className="operationSection5thMiddle-savingBlock fade-up-element" />
              <InventorySavingBlock
                  title={`재고 관리 시간 \n80% 절감`}
                  subTitle="일정량의 재고를 유지하는 안전 재고 시스템"
                  items={data}
                  sub="일정량 이하일 때 자동 발주"
                  className="fade-up-element show-desktop"
                />
            </div>
            <div className="operationSection5thMiddle_b-right">
              <ItemSavingBlock
                title={`소모성 물품 구매 시간 \n100% 절감`}
                subTitle={'매달 알아서, \n자동 발주 정기 배송 시스템'}
                subTitleMobile={`매달 알아서 배송해 주는 자동 발주 정기 배송 시스템`}
                columns={COLUMNS_OPERATION}
                data={DATA_OPERATION}
                className="operationSection5thMiddle fade-up-element"
              />
              <InventorySavingBlock
                  title={`재고 관리 시간 \n80% 절감`}
                  subTitle="일정량의 재고를 유지하는 안전 재고 시스템"
                  items={data}
                  sub="일정량 이하일 때 자동 발주"
                  className="fade-up-element show-mobile"
                />
            </div>
          </div>
        </div>
        <div className={styles.OperationSection5thFoot}>
          <CheckingBlock className="fade-up-element"/>
        </div>
      </section>
  );
});

export default OperationSection5th;
