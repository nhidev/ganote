'use client';

import { Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

import { Default, GraphBlock, Mobile, PieChartBlock } from '@/components';
import withTheme from '@/theme';
import styles from './operationsManagementSection.module.scss';

const MANAGEMENT_STEP_LISTS = [
  {
    key: 1,
    label: '월 1회',
    desc: '통합 정산으로 더 간편하게',
    tasks: ['월 별 사무실 운영 Dashboard'],
  },
  {
    key: 2,
    label: '월 별 히스토리',
    desc: '꼼꼼하게 관리',
    tasks: ['일간・주간・월간 특이 사항', '기간 별 보고서 생성'],
  },
  {
    key: 3,
    label: '즉시 해결',
    desc: '공간 관리 불만 접수 바로 해결',
    tasks: ['편리한 서비스 제공 요청'],
  },
];

const requestItems: any = [
  {
    desc: '비품 추가 요청',
    label: '5건',
  },
  {
    desc: '긴급 클리닝 요청',
    label: '10/11, 11/15',
  },
  {
    desc: '부가 서비스 구독 요청',
    label: '임직원 생일 이벤트',
  },
];

const PIE_01_DATA: any = [
  {
    key: '원두 커피',
    type: '원두 커피',
    value: 32,
    color: '#BE7346',
  },
  {
    key: '물티슈',
    type: '물티슈',
    value: 17,
    color: '#FF8F43',
  },
  {
    key: '시리얼',
    type: '시리얼',
    value: 15,
    color: '#FFB25C',
  },
  {
    key: '보드마카',
    type: '보드마카',
    value: 8,
    color: '#FFC98D',
  },
  {
    key: '우유',
    type: '우유',
    value: 8,
    color: '#FFF',
  },
  {
    key: '티백',
    type: '티백',
    value: 7,
    color: '#E7CEB8',
  },
  {
    key: '핸드타월',
    type: '핸드타월',
    value: 5,
    color: '#EDE1D7',
  },
  {
    key: 'A4용지',
    type: 'A4용지',
    value: 5,
    color: '#FFF',
  },
  {
    key: '종이컵',
    type: '종이컵',
    value: 4,
    color: '#FFF',
  },
];

const PIE_02_DATA: any = [
  {
    key: 'TEAM A',
    type: 'TEAM A',
    value: 48,
    color: '#BE7346',
  },
  {
    key: 'TEAM B',
    type: 'TEAM B',
    value: 34,
    color: '#FF8F43',
  },
  {
    key: 'TEAM C',
    type: 'TEAM C',
    value: 16,
    color: '#FF8F43',
  },
  {
    key: 'TEAM D',
    type: 'TEAM D',
    value: 12,
    color: '#FFC98D',
  },
  {
    key: 'TEAM E',
    type: 'TEAM E',
    value: 8,
    color: '#FFF',
  },
];


const PIE_04_DATA: any = [
  {
    key: 1,
    type: '양이 부족함',
    value: 50,
    color: '#BE7346',
  },
  {
    key: 2,
    type: '다양한 종류',
    value: 37,
    color: '#FF8F43',
  },
  {
    key: 3,
    type: '메뉴 변경',
    value: 20,
    color: '#FFC98D',
  },
  {
    key: 4,
    type: '음료수 추가',
    value: 12,
    color: '#FFF',
  },
];

const OperationsManagementSection = memo(({ className = '' }: OperationsManagementSectionProps) => {
  const router = useRouter();

  const managementStepItem = (item: ManagementStepItemProps) => {
    const { label, desc, tasks } = item;
    return (
      <div className={styles.ManagementStepItem} key={item.key}>
        <div className="management-step_top">
          <h4>{label}</h4>
          <span>{desc}</span>
        </div>
        <Image width={6} height={63} src={`/iconsN/diagram-line.svg`} alt="Operations Management" />
        <ul className="management-step_bottom">
          {tasks.map((task, index) => (
            <li className="management-step-task" key={index}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const renderRequestBlock = (requestItems: requestItemProps[]) => {
    return (
      <div className={`${styles.RequestBlock}`}>
        <h5>서비스 제공 요청</h5>
        {requestItems.map((request, index) => (
          <div className="request-item" key={index}>
            <p>{request.desc}</p>
            <label>{request.label}</label>
          </div>
        ))}
      </div>
    );
  };
  return (
      <section className={`${styles.OperationsManagementSection} ${className}`}>
        <div className="operations-management_top">
          <h2>사무실 운영 관리</h2>
          <p>{`모듈형으로 선택할 수 있는 \n사무실 운영 통합 관리 서비스`}</p>
          <Default>
            {withTheme(
              <Button
                className="g-cta-button"
                type="primary"
                icon={<Image width={12} height={10} src="/iconsN/ic-arrow-right.svg" alt="go to operation page" />}
                onClick={() => router.push('/operation')}
              >
                서비스 알아보기
              </Button>
            )}
          </Default>
        </div>
        <div className="operations-management_bottom">
          <div className={styles.ManagementDiagram}>{MANAGEMENT_STEP_LISTS.map(item => managementStepItem(item))}</div>
          <GraphBlock
            image="dashboard-chart-column.svg"
            title="월 별 사무실 운영 Dashboard"
            subTitle=""
            total=""
            className={`${styles.ManagementGraph}`}
          />
          <div className={styles.ManagementPieChartBlock}>
            <PieChartBlock
              className="managementPieChart-pie"
              title="상품별 구매 비율"
              items={PIE_01_DATA}
            />
            <PieChartBlock
              className="managementPieChart-pie"
              title="조직별 구매 비율"
              items={PIE_02_DATA}
            />
            {renderRequestBlock(requestItems)}
            <PieChartBlock
              className="managementPieChart-pie"
              title="월별 요청사항"
              items={PIE_04_DATA}
            />
          </div>
          <Mobile>
            {withTheme(
              <Button
                className="g-cta-button"
                type="primary"
                icon={<Image width={12} height={10} src="/iconsN/ic-arrow-right.svg" alt="go to operation page" />}
                onClick={() => router.push('/operation')}
              >
                서비스 알아보기
              </Button>
            )}
          </Mobile>
        </div>
      </section>
  );
});

interface OperationsManagementSectionProps {
  className?: string;
}

interface ManagementStepItemProps {
  label: string;
  desc: string;
  tasks: string[];
  key: number;
}

interface requestItemProps {
  desc: string;
  label: string;
}

export default OperationsManagementSection;
