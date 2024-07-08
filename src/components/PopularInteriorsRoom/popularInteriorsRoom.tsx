import Image from 'next/image';
import React from 'react';

import styles from './popularInteriorsRoom.module.scss';

const PopularInteriors = [
  'popular-interiors-room-1',
  'popular-interiors-room-2',
  'popular-interiors-room-3',
  'popular-interiors-room-4',
  'popular-interiors-room-5',
];

export default function PopularInteriorsRoom() {
  return (
    <section className={styles.PopularDesignRoomMain}>
      <div className={`${styles.IntroductionRoom}`}>
        <div className={`${styles.BlockLeft}`}>
          <h5 className={styles.Title}>
            강남에 구축한 오피스만 <br />약 10,000평
          </h5>
          <p className={styles.Desc}>
            브랜드의 특성을 고려한 디자인으로 <br />
            국내 유수의 대기업, 스타트업이 <br /> 총무노트를 선택했습니다
          </p>
          <span className={styles.NoteHighlight}>
            오피스 인테리어 경력 <br />
            <span className={styles.Highlight}>14+</span> 년
          </span>
        </div>

        <div className={`${styles.BlockRight} ${styles.AdvertisementList}`}>
          <div className={styles.AdvertisementRoom}>
              <Image src={`/images/advertisement-1.png`} width={240} height={400} alt="advertisement-1" quality={100} />
            <p className={styles.DesignRoomNote}>메탈릭한 톤의 IT 회사 디자인</p>
          </div>

          <div className={styles.AdvertisementRoom}>
              <Image src={`/images/advertisement-2.png`} width={240} height={400} alt="advertisement-2" quality={100} />
            <p className={styles.DesignRoomNote}>밝은 분위기의  콘텐츠 브랜드 인테리어</p>
          </div>
        </div>
      </div>

      <div className={`${styles.PopularDesignRoom}`}>
        <div className={`${styles.BlockLeft} ${styles.TextAlignRight}`}>
          <h5 className={styles.Title}>사용자의 입장에서</h5>
          <p className={styles.Desc}>
            인테리어 끝나면 생기는 <br />
            방음 문제, 건물 진동 문제들
          </p>
          <p className={styles.Desc}>
            사무 공간에 대한 <br className={styles.Desktop} /> 높은 이해도를 바탕으로 <br /> 업무 패턴과 공간 유동성
            분석 후 <br /> 설계를 진행합니다
          </p>
          <span className={styles.NoteHighlight}>
            전체 프로젝트 수주 건 수 <br /> <span className={styles.Highlight}>110</span> 건
          </span>
        </div>

        <div className={styles.BlockRight}>
          <Image src={`/images/design-room.png`} width={386} height={419} alt="design-room" quality={100} />
          <p className={styles.DesignRoomNote1}>
            방음에 신경 쓴 라운지/ 업무 공간 분리 설계 <br />
            임직원들의 업무 집중도 UP
          </p>
        </div>
      </div>

      <div className={`${styles.PopularInteriorsRoom}`}>
        <div className={styles.BlockLeft}>
          <h5 className={styles.Title}>
            기업별 특화 공간도 <br />
            자신 있게 만듭니다
          </h5>
          <p className={styles.Desc}>
            고급 임원 사무실,
            <br className={styles.Desktop} /> 사내 카페, 화상 미팅룸, <br /> 대형 스튜디오, 제품 쇼룸 등
          </p>
          <p className={styles.Desc}>
            다양한 시공 경험이 있어
            <br /> 완성도 높은 사무 공간을 <br className={styles.Desktop} /> 제공합니다
          </p>
          <span className={styles.NoteHighlight}>
            인테리어 전문 분야 <br /> <span className={styles.Highlight}>26</span> 개
          </span>
        </div>
        <div className={`${styles.BlockRight} ${styles.desktop}`}>
          {PopularInteriors.map(
            (item, index) =>
              index <= 1 && (
                <div className={styles.BgMax} key={index}>
                  <Image src={`/images/${item}.png`} width={552} height={158} alt={item} quality={100} />
                </div>
              )
          )}

          <div className={styles.BgList}>
            {PopularInteriors.map(
              (item, index) =>
                index > 1 && (
                    <Image src={`/images/${item}.png`} width={168} height={98} alt={item} quality={100} key={index}/>
                )
            )}
          </div>
        </div>
        <div className={`${styles.BlockRight} ${styles.mobile}`}>
          {PopularInteriors.map(
            (item, index) =>
              index <= 1 && (
                <div className={styles.BgMax} key={index}>
                  <Image src={`/images/${item}-v2.png`} width={552} height={158} alt={item} quality={100} />
                </div>
              )
          )}

          <div className={styles.BgList}>
            {PopularInteriors.map(
              (item, index) =>
                index > 1 && (
                    <Image src={`/images/${item}-v2.png`} width={388} height={150} alt={item} quality={100} key={index}/>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
