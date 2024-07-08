'use client';

import { Button } from 'antd';

import { PieChartBlock } from '@/components';
import { Tabs } from '@/components/TabsN';
import { TAB_CONTENT } from '@/utils/constants';
import styles from './integratedOperations.module.scss';

const IntegratedOperations = ({
  className = '',
  pieCharts,
  titleDashBoard,
  msgList,
  title,
  subTitle,
}: IntegratedOperationsProps) => {
  return (
    <div className={`${styles.IntegratedOperations} ${className}`}>
      <div className="operations-top">
        <div className="operations-head">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
        <div className={styles.msgBox}>
          {msgList.map((item, index) => (
            <div className="msg-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <i className="arrow-icon" />
      <div className="operations-bottom">
        <div className="stacking-layer" />
        <div className={styles.dashboardBox}>
          <h5>{titleDashBoard}</h5>
          <Tabs className="tabs_b-pie" tabContent={TAB_CONTENT} activeKeyDefault={TAB_CONTENT[0]?.id}>
            {pieCharts.map((pieChartItem, index) => (
              <PieChartBlock
                key={index}
                className="tab-pie"
                image={pieChartItem.image}
                title={pieChartItem.title}
                items={pieChartItem.items}
              />
            ))}
          </Tabs>
          <Button className="g-cta-button" type="primary">
            결제하기
          </Button>
        </div>
      </div>
    </div>
  );
};

interface PieChartItemProps {
  key: string;
  type: string;
  value: number;
  color: string;
}

interface PieChartProps {
  title: string;
  image: string;
  items: PieChartItemProps[];
}
interface IntegratedOperationsProps {
  className?: string;
  pieCharts: PieChartProps[];
  titleDashBoard: string;
  msgList: string[];
  title: string;
  subTitle: string;
}

export default IntegratedOperations;
