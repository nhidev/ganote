import { memo } from 'react';

import { IntegratedOperations } from '@/components';
import { ItemSavingBlock } from '@/components/ItemSavingBlock';
import { SavingBlock } from '@/components/SavingBlock';
import { COLUMNS_SERVICE, DATA_SERVICE } from '@/utils/constants';
import styles from './serviceSection.module.scss';
import { PIE_01_DATA, PIE_02_DATA, PIE_03_DATA } from '@/utils/constants';

const IOperationsImages : any = [
  {
    title: '상품별 구매 비율',
    items: [...PIE_01_DATA],
  },
  {
    title: '조직별 구매 비율',
    items: [...PIE_02_DATA],
  },
  {
    title: '재구매 상품 비율',
    items: [...PIE_03_DATA],
  },
];
const msgList = [
  '청소 퀄리티가 안 좋은데 확인해 주세요',
  '소장님 누수 문제 생겼는데 지금 빨리 와주세요!',
  '사무실 비품 언제 배송되나요?',
];

const ServiceSection = memo(({ className = '' }: ServiceSectionProps) => {
  return (
      <section className={`${styles.ServiceSection} ${className}`}>
        <div className="title-box">
          <h2>반복적이고 소모적인 업무로</h2>
          <h2 className="title-bottom">
            야근하는 건 <br /> 과거의 일이에요
          </h2>
        </div>
        <div className="service-container">
          <IntegratedOperations
            title={`한 곳에서 \n통합 운영 자동화`}
            subTitle="커뮤니케이션 일원화 월 1회 정산 통합 관리"
            pieCharts={IOperationsImages}
            titleDashBoard="월 1회 통합 정산"
            msgList={msgList}
            className="fade-up-element"
          />
          <ItemSavingBlock
            columns={COLUMNS_SERVICE}
            data={DATA_SERVICE}
            subTitle={'매달 알아서, \n자동 발주 정기 배송 시스템'}
            subTitleMobile={`매달 알아서 배송해 주는 자동 발주 정기 배송 시스템`}
            title={`소모성 물품 구매 시간 \n100% 절감`}
            className={`${styles.ServiceSection_ItemSavingBlock} fade-up-element`}
          />
          <SavingBlock
            className={`${styles.ServiceSection_SavingBlock} fade-up-element`}
            subTitle="대량 구매 도매가 자동 적용"
          />
        </div>
      </section>
  );
});

interface ServiceSectionProps {
  className?: string;
}

export default ServiceSection;
