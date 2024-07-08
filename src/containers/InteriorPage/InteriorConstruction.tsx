'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './interiorConstruction.module.scss';

const InteriorConstruction = memo(() => {
  return (
    <section className={styles.InteriorConstruction}>
      <div className="interiorConstruction_b-container">
        <div className="interiorConstruction_b-head">
          <label>
            <Image width={20} height={20} src="/iconsN/alarm_on.svg" alt="icon" />
            <p>부분 계약</p>
          </label>
          <h2>{`원하는 만큼만 \n똑똑하게 따져보세요`}</h2>
          <h2>설계, 시공 부분 계약</h2>
        </div>
        <div className="interiorConstruction_b-body">
          <div className="interiorConstruction-title">
            <h3>{`같은 업체에서 \n하지 않아도 ok`}</h3>
            <h4>{`더 전문적인 업체로 \n따져보고 고르세요`}</h4>
          </div>
          <div className="interiorConstruction-content fade-up-element">
            <div className="interiorConstruction-block isActive">
              <h4>설계 PACK</h4>
              <ul>
                <li>
                  <p>3D 투시도</p>
                </li>
                <li>
                  <p>평면도, 디테일 도면</p>
                </li>
                <li>
                  <p>전기, 설비 도면</p>
                </li>
                <li>
                  <p>필요 자재 물량 LIST</p>
                </li>
              </ul>
            </div>
            <div className="interiorConstruction-block">
              <h4>시공 PACK</h4>
              <ul>
                <li>
                  <p>시공 견적 제안</p>
                </li>
                <li>
                  <p>시공 진행</p>
                </li>
                <li>
                  <p>시공 Daliy Report</p>
                </li>
                <li>
                  <p>1년 간의 A/S</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interiorConstruction_b-foot">
          <div className="interiorConstruction-title">
            <h3>
              <span>{`타 업체와 \n비교할 수 있는 \n자료도 \n제공해드립니다`}</span>
            </h3>
            <h4>
              <span>{`공사 항목과 규격, \n수량 모두 제공`}</span>
            </h4>
          </div>
          <div className="interiorConstruction-content fade-up-element">
            <p>{`공사 항목과 규격, 수량 모두 첨부된 문서 제공되어 \n타 업체와 금액 비교 가능`}</p>
            <div className="interiorConstruction-block">
              <Image width={574} height={472} quality={100} src="/imagesN/contruction-table.svg" alt="table" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default InteriorConstruction;
