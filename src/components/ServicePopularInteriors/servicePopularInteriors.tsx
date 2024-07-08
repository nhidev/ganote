import Image from 'next/image';
import React from 'react';
import styles from './servicePopularInteriors.module.scss';

export default function ServicePopularInteriors() {
  return (
    <section className={`${styles.PopularInteriors}`}>
      <div className={`${styles.PopularInteriorsContainer}`}>
        <h5 className={styles.PopularInteriorsTitle}>인기 많은 인테리어 보기</h5>
        <p className={styles.PopularInteriorsDesc}>IT 기업 / 금융권 / 콘텐츠 기업</p>
        <div className={styles.PopularInteriorsList}>
          <div className={styles.PopularInteriorsItem}>
              <Image
                src="/images/service-popular-interiors-1.png"
                width={264} 
                height={200}
                quality={100} 
                alt="ItemServiceNote images"
              />
            <h6 className={styles.itemTitle}>강남 인근  IT 기업 사무실</h6>
            <p className={styles.itemDesc}>
              “매니저님이 턴키로 진행해 주셔서 <br />
              예상 준공 일정대로 공사를 마쳤습니다. <br />
              이사 이후에 직원분들이 좋아하시네요”
            </p>
          </div>
          <div className={styles.PopularInteriorsItem}>
              <Image
                src="/images/service-popular-interiors-2.png"
                width={264} 
                height={200}
                quality={100} 
                alt="ItemServiceNote images"
              />
            <h6 className={styles.itemTitle}>용산구 컨설팅 회사 사무실</h6>
            <p className={styles.itemDesc}>
              “야근과 미팅이 많아서 <br />
              휴게 공간과 업무 공간 분리가 중요했는데 <br />
              말씀드린 대로 설계되어 마음에 쏙 들었습니다”
            </p>
          </div>
          <div className={styles.PopularInteriorsItem}>
              <Image
                src="/images/service-popular-interiors-3.png"
                width={264} 
                height={200}
                quality={100} 
                alt="ItemServiceNote images"
              />
            <h6 className={styles.itemTitle}>성수동 패션 브랜드 사무실</h6>
            <p className={styles.itemDesc}>
              “상품의 런칭과 촬영을 위해 <br />
              연구실, 스튜디오, 쇼룸을 요청드렸어요.  <br />
              완성도 측면에서 이만한 업체가 없습니다”
            </p>
          </div>
          <div className={styles.PopularInteriorsItem}>
              <Image
                src="/images/service-popular-interiors-4.png"
                width={264} 
                height={200}
                quality={100} 
                alt="ItemServiceNote images"
              />
            <h6 className={styles.itemTitle}>자동차 대기업 분사 사무실</h6>
            <p className={styles.itemDesc}>
              “무엇보다 만족스러웠던 점은 <br />
              프로젝트 내내 총무의 입장에서 본<br />
              최선의 안을 제안해주신 거라고 생각합니다” 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
