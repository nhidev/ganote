import Image from 'next/image';
import React from 'react';

import Chart1 from '../../../public/images/Chart1_2x.png';
import Chart2 from '../../../public/images/Chart2_2x.png';
import ItemServiceNoteBg from '../../../public/images/ItemServiceNoteBg_2x.png';
import Tabs from '../Tabs/tabs';
import styles from './serviceDetails.module.scss';

export default function ServiceDetails() {
  const tabContent = [
    {
      id: 'month1',
      title: '1월',
    },
    {
      id: 'month2',
      title: '2월',
    },
    {
      id: 'month3',
      title: '3월',
    },
  ];

  return (
    <section className={styles.ServiceDetails}>
      <h2 className={styles.ServiceDetailsTitle}>
        총무노트 쓰면
        <br /> 어떤 점이 좋은가요?
      </h2>
      <div className={`${styles.ItemService} ${styles.ItemServiceSummary} ${styles.ItemServiceBottom}`}>
        <div className={styles.BlockLeft}>
          <p className={`${styles.Content} ${styles.ContentpdTop}`}>{'오피스 관리 한 업체에서 '}</p>
          <p className={styles.Content}>{'통합 관리 통합 정산하여'}</p>
          <p>
            <span className={styles.ContentWeightColor}>{'단순화'}</span>
            <span className={styles.ContentWeight}>{' 하세요'}</span>
          </p>
        </div>
        <div className={styles.blockRight}>
          <div className={styles.ServiceList2}>
            <div className={styles.Service}>
              <div className={styles.ServiceContent}>
                <div className={styles.Text}>
                  <p>{'청소 퀄리티가'}</p>
                  <p>{' 안 좋은데 확인해 주세요'}</p>
                  <Image src="/icons/LabelIcon.svg" width={28} height={13} alt="LabelIcon" />
                </div>
                <div className={styles.Text}>
                  <p>{'소장님 누수 문제 생겼는데'}</p>
                  <p>{'지금 빨리 와주세요!'}</p>
                  <Image src="/icons/LabelIcon.svg" width={28} height={13} alt="LabelIcon" />
                </div>
                <div className={styles.Text}>
                  <p>{'사무실 비품 '}</p>
                  <p>{'언제 배송되나요?'}</p>
                  <Image src="/icons/LabelIcon.svg" width={28} height={13} alt="LabelIcon" />
                </div>
              </div>
              <div className={styles.CircleOrange}>{'AS-IS'}</div>
              <div className={styles.ServiceNote}>
                오피스 관리하는 업체만 5곳?
                <br /> 커뮤니케이션만 5배
              </div>
            </div>
            <div className={styles.Service}>
              <div className={`${styles.ServiceContent}  ${styles.ServiceContentModify}`}>
                <div className={styles.ContentOrange}>{'단순하게 일 하세요'}</div>
                <div className={styles.ContentText1}>{'월별 이용 내역 확인  '}</div>
                <span className={styles.DownArrowIcon}>
                  <Image src="/icons/DownArrow.svg" width={38} height={38} alt="DownArrow" />
                </span>
                <span className={styles.FileIcon}>
                  <Image src="/icons/File.svg" width={62} height={45} alt="File" />
                </span>
                <div className={styles.ContentText2}>{'월 1회 정산'}</div>
              </div>
              <div className={styles.CircleYellow}>{'TO-BE'}</div>
              <div className={styles.ServiceNote}>
                커뮤니케이션 일원화
                <br /> 월 1회 정산 통합 관리
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.ItemService} ${styles.ItemServiceChart} ${styles.ItemServiceBottom}`}>
        <div className={styles.BlockLeft}>
          <p className={styles.Content}>새고 있는 비용은 없는지</p>
          <p className={styles.Content}>제공되는 데이터 기반으로</p>
          <p>
            <span className={styles.ContentWeightColor}>{'효율화'}</span>
            <span className={styles.ContentWeight}>{' 하세요'}</span>
          </p>
          <p className={styles.ContentBold}>{'제공 데이터'}</p>
          <p className={styles.ContentLine}>{'오피스 클리닝 리포트'}</p>
          <p className={styles.ContentLine}>{'상품 조직별 구매 비율'}</p>
          <p className={styles.ContentLine}>{'사무실 CS 현황'}</p>
          <p className={styles.ContentLine}>{'안전 재고 시스템'}</p>
          <p className={styles.ContentLine}>{'사무실 시설 스캐닝 리포트'}</p>
        </div>
        <div className={styles.blockRight}>
          <Tabs tabContent={tabContent} activeKeyDefault={tabContent[0]?.id}>
            <div className={styles.ServiceList1}>
              <div className={styles.Chart}>
                <p className={styles.ChartTitle}> 상품별 구매비율</p>
                <Image src={Chart1} alt="Chart1" unoptimized quality={100} width={200} height={132} />
              </div>
              <div className={styles.Chart}>
                <p className={styles.ChartTitle}>조직별 구매비율</p>
                <Image src={Chart2} alt="Chart2" unoptimized quality={100} width={200} height={132} />
              </div>
            </div>
          </Tabs>
          <div className={styles.Note}>
            <p>{'데이터 기반 의사결정으로'}</p>
            <p>{'업무 생산성 향상'}</p>
          </div>
        </div>
      </div>
      <div className={`${styles.ItemService} ${styles.ItemServiceNote}`}>
        <div className={styles.BlockLeft}>
          <p className={styles.Content}>{' 매월 더 새로워지는 '}</p>
          <p className={styles.Content}>{' 오피스 경험으로 '}</p>
          <p>
            <span className={styles.ContentWeightColor}>{'트렌드'}</span>
            <span className={styles.ContentWeight}>{'를 반영 하세요'}</span>
          </p>
        </div>
        <div className={styles.blockRight}>
          <div className={styles.ServiceList}>
            <Image src={ItemServiceNoteBg} height={263} width={552} quality={100} alt="ItemServiceNote images" />
          </div>
          <div className={styles.Note}>
            <p>{'총무노트 이용사 대상 '}</p>
            <p>{'매월 신규 서비스 업데이트'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
