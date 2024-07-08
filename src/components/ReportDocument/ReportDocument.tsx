import Image from 'next/image';

import { PieChartBlock } from '../PieChartBlock';
import styles from './reportDocument.module.scss';

const pieData: any = [
  {
    key: 1,
    type: '22%',
    value: 22,
    color: '#BE7346',
  },
  {
    key: 2,
    type: '20%',
    value: 20,
    color: '#FF8F43',
  },
  {
    key: 3,
    type: '20% ',
    value: 20,
    color: '#FFE8CE',
  },
  {
    key: 4,
    type: '13%',
    value: 13,
    color: '#FFF7EF',
  },
  {
    key: 5,
    type: '13% ',
    value: 13,
    color: '#FFF',
  },
  {
    key: 6,
    type: '12%',
    value: 12,
    color: '#DAB49D',
  },
];

const ReportDocument = ({ className = '', title, subTitle }: ReportDocumentProps) => {
  return (
    <div className={`${styles.ReportDocument} ${className}`}>
      <div className="reportDocument-top">
        <div className="reportDocument-head">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
      </div>
      <div className="reportDocument-bottom">
        <PieChartBlock className="reportDocument-pie" title="가장 많이 구매한 카테고리" items={pieData} />
        <div className={styles.LoungeInfo}>
          <div className="loungeInfo_b-top">
            <p>라운지</p>
            <p className="right-text">
              <Image width={13} height={13} src="/iconsN/check_box.svg" alt="checkbox" />
              작업 완료
            </p>
          </div>
          <div className="loungeInfo_b-mid">
            <div className="loungeInfo-head">
              <p>작업 사진</p>
              <p className="right-label">
                <Image width={12} height={12} src="/iconsN/imagesmode.svg" alt="images mode" />
                사진 업로드
              </p>
            </div>

            <div className="loungeInfo-body">
              <div className="loungeInfo_b-img">
                <Image width={220} height={170} src="/imagesN/clean-1.jpeg" alt="checkbox" />
                <p>작업 전</p>
              </div>
              <div className="loungeInfo_b-img">
                <Image width={220} height={170} src="/imagesN/clean-2.jpeg" alt="checkbox" />
                <p>작업 후</p>
              </div>
            </div>
          </div>
          <div className="loungeInfo_b-bot">
            <div className="loungeInfo-head">
              <p>
                노트<span>(선택)</span>
              </p>
            </div>
            <div className="loungeInfo-body" />
          </div>
        </div>
        <div className={styles.GraphBlock}>
          <div className="graphBlock-head">
            <p className="graphBlock-title">{`구매 금액 그래프`}</p>
            <p className="graphBlock-subtitle">{`전체 카테고리 구매 금액`}</p>
            <p className="graphBlock-amount">{`₩ 880,000 원`}</p>
          </div>
          <Image src={`/imagesN/doc-chart.svg`} quality={100} width={338} height={188} alt={'chart'} />
        </div>
      </div>
    </div>
  );
};

interface ReportDocumentProps {
  className?: string;
  title?: string;
  subTitle?: string;
}

export default ReportDocument;
