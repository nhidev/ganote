import Image from 'next/image';

import ChartBlock from './ChartBlock';
import CheckBlock from './CheckBlock';
import styles from './interiorServiceIntro.module.scss';

const chartList = [
  { name: ' 상품별 구매비율', chart: 'mini-chart-1' },
  { name: '조직별 구매비율', chart: 'mini-chart-2' },
  { name: '서비스 제공 요청', chart: 'mini-chart-3' },
  { name: '일간/주간/월간 특이사항', chart: 'mini-chart-4' },
];

const detailList = [
  '월 별 사무실 운영 Dashboard ',
  '일간/주간/월간 특이사항',
  '기간 별 보고서 생성 ',
  '편리한 서비스 제공 요청',
];

export default function OfficeManagement() {
  return (
    <div className={styles.officeManagement_wrapper}>
      <div className={styles.officeManagement_container}>
        <div className={styles.officeManagement_title}>
          <p>
            두 번째
            <br />
            사무실 운영 관리
          </p>
        </div>
        <p className={styles.officeManagement_desc}>모듈형으로 선택할 수 있는 사무실 운영 통합 관리 서비스</p>
        <p className={styles.officeManagement_desc_mobile}>
          모듈형으로 선택할 수 있는 <br /> 사무실 운영 통합 관리 서비스
        </p>
        <div className={styles.officeManagement_dashboardChart}>
          <p>월 별 사무실 운영 Dashboard</p>
          <Image src="/images/dashboard-chart.png" alt="dashboard-chart" unoptimized width={764} height={218} />
        </div>
        <div className={styles.officeManagement_chartList}>
          {chartList.map((item, index) => (
            <ChartBlock key={index} name={item.name} chart={item.chart} />
          ))}
        </div>
        <div className={styles.officeManagement_checkList}>
          <CheckBlock name={['월1회', '통합정산으로', '더간편하게']} hightlight={1} />
          <CheckBlock name={['꼼꼼하게 ', '관리되는', '월 별 히스토리']} hightlight={3} />
          <CheckBlock name={['공간 관리', '불만 접수 이후', '즉시 해결']} hightlight={3} />
        </div>
      </div>
      <div className={styles.officeManagement_detailContainer}>
        <div className={styles.officeManagement_detailList}>
          <p className={styles.officeManagement_titleDetail}>상세 제공 내역</p>

          {detailList.map((item, index) => (
            <div key={index} className={styles.officeManagement_detailItem}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
