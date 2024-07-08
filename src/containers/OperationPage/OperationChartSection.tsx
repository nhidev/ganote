import { memo } from 'react';

import { ColumnChart, PieChartBlock } from '@/components';
import styles from './operationChartSection.module.scss';
import { PIE_01_DATA, PIE_02_DATA, PIE_03_DATA, PIE_04_DATA } from '@/utils/constants';

const pieDatas: any = [
  {
    title: '상품별 구매 비율',
    items: PIE_01_DATA,
  },
  {
    title: '조직별 구매 비율',
    items: PIE_02_DATA,
  },
  {
    title: '재구매 상품 비율',
    items: PIE_03_DATA,
  },
  {
    title: '월별 요청사항',
    items: PIE_04_DATA,
  },
];

const OperationChartSection = memo(() => {
  return (
    <section className={styles.OperationChartSection}>
      <div className="chartSection-container">
        <div className="chartSection_b-head">
          <h2>데이터 기반 의사결정으로</h2>
          <h2>총무업무를 효율적으로</h2>
          <p>매월 구독 서비스에 맞게 먼슬리 리포트 제공</p>
        </div>
        <div className="chartSection_b-body">
          <div className={`${styles.ColumnChartWrapper}`}>
            <p className="column_chart-title">월 지출 데이터</p>
            <label>
              <p>{`총무님 100명의 \n의견을 반영한`}</p>
              <h4>먼슬리 리포트</h4>
            </label>

            <div className="column_chart">
              <ColumnChart />
            </div>
          </div>
        </div>
        <div className="chartSection_b-foot">
          {pieDatas.map((blockItem: any) => (
            <PieChartBlock
              key={blockItem.title}
              items={blockItem.items}
              title={blockItem.title}
              className="chartSection-pieChartBlock"
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default OperationChartSection;
