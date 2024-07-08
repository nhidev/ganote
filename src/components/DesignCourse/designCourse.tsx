import React from 'react';
import Image from 'next/image';


import styles from './designCourse.module.scss';

export default function DesignCourse() {
  return (
    <section className={`${styles.DesignCourse}`} >
      <h3 className={styles.Title}>총무노트와 함께하는</h3>
      <h3 className={`${styles.Title} ${styles.TitleHightlight}`}>사무실 인테리어 과정</h3>
      <div className={styles.DesignCourseWrap}>
        <div className={styles.rowFirst}>
          <div className={`${styles.col1} ${styles.col3ModifyWidth}`}>
            <span className={`${styles.Dot1} ${styles.DotAbove}`} />
            <p className={styles.titleBlock}>상담 신청</p>
            <p className={styles.Desc}>사무실 인테리어를 논의하<br />는 단계라면 총무 노트에 <br />상담을 신청해 주세요</p>
            <Image 
              className={styles.BgImage}
              src={`/icons/1.svg`}  
              quality={100} 
              alt={'1'} 
              width={115} 
              height={107} 
            />
          </div>
          <div className={`${styles.col3} ${styles.col3ModifyWidth}`}>
            <Image 
              className={styles.BgImage}
              src={`/icons/3.svg`}  
              quality={100} 
              alt={'1'} 
              width={115} 
              height={107} 
            />
            <span className={`${styles.Dot3} ${styles.DotAbove}`} />
            <p className={styles.titleBlock}>제안서 전달</p>
            <p className={styles.Desc}>견적, 공간 레이아웃, 소요<br />기간 등이 포함된 제안서를<br />전달드립니다</p>
          </div>
          <div className={`${styles.col5} ${styles.col3ModifyWidth}`}>
            <Image 
              className={styles.BgImage}
              src={`/icons/5.svg`}  
              quality={100} 
              alt={'1'} 
              width={115} 
              height={107} 
            />
            <span className={`${styles.Dot5} ${styles.DotAbove}`} />
            <p className={styles.titleBlock}>사무실 OPEN</p>
            <p className={styles.Desc}>사무 공간의 준공 이후 청<br />소가 마무리된 후 사무실<br />이사를 진행합니다</p>
          </div>
        </div>
        <div className={styles.rowLast}>
          <div className={`${styles.col2} ${styles.col2ModifyWidth}`}>
            <Image 
              className={styles.BgImage}
              src={`/icons/2.svg`}  
              quality={100} 
              alt={'1'} 
              width={115} 
              height={107} 
            />
            <span className={`${styles.Dot2} ${styles.DotBelow}`} />
            <p className={styles.titleBlock}>현장 실사 & 레이아웃 컨설팅</p>
            <p className={styles.Desc}>현장 실사를 통해 건물, 사<br />무실 구조를 확인하고 레이<br />아웃을 컨설팅합니다</p>
          </div>
          <div className={`${styles.col4} ${styles.col2ModifyWidth}`}>
              <Image 
                className={styles.BgImage}
                src={`/icons/4.svg`}  
                quality={100} 
                alt={'1'} 
                width={115} 
                height={107} 
              />
              <span className={`${styles.Dot4} ${styles.DotBelow}`} />
              <p className={styles.titleBlock}>착공 및 준공</p>
              <p className={styles.Desc}>공사에 착수하고 현장에서 생긴<br />이슈를 대응해 예상 일정에 맞게<br />공사를 마무리합니다</p>
            </div>
        </div>
      </div>
      <div className={styles.DesignCourseWrapMb}>
        <div className={`${styles.col3ModifyWidth}`}>
          <p className={styles.titleBlock}>상담 신청</p>
          <p className={styles.Desc}>사무실 인테리어를 논의하<br />는 단계라면 총무 노트에 <br />상담을 신청해 주세요</p>
          <Image 
            className={styles.BgImage}
            src={`/icons/1.svg`}  
            quality={100} 
            alt={'1'} 
            width={115} 
            height={107} 
          />
        </div>
        <div className={`${styles.col2ModifyWidth}`}>
          <Image 
            className={styles.BgImage}
            src={`/icons/2.svg`}  
            quality={100} 
            alt={'1'} 
            width={115} 
            height={107} 
          />
          <p className={styles.titleBlock}>현장 실사 & 레이아웃 컨설팅</p>
          <p className={styles.Desc}>현장 실사를 통해 건물, 사<br />무실 구조를 확인하고 레이<br />아웃을 컨설팅합니다</p>
        </div>
        <div className={`${styles.col3ModifyWidth}`}>
          <Image 
            className={styles.BgImage}
            src={`/icons/3.svg`}  
            quality={100} 
            alt={'1'} 
            width={115} 
            height={107} 
          />
          <p className={styles.titleBlock}>제안서 전달</p>
          <p className={styles.Desc}>견적, 공간 레이아웃, 소요<br />기간 등이 포함된 제안서를<br />전달드립니다</p>
        </div>
        <div className={`${styles.col2ModifyWidth}`}>
          <Image 
            className={styles.BgImage}
            src={`/icons/4.svg`}  
            quality={100} 
            alt={'1'} 
            width={115} 
            height={107} 
          />
          <p className={styles.titleBlock}>착공 및 준공</p>
          <p className={styles.Desc}>공사에 착수하고 현장에서 생긴<br />이슈를 대응해 예상 일정에 맞게<br />공사를 마무리합니다</p>
        </div>
        <div className={`${styles.col3ModifyWidth}`}>
          <Image 
            className={styles.BgImage}
            src={`/icons/5.svg`}  
            quality={100} 
            alt={'1'} 
            width={115} 
            height={107} 
          />
          <p className={styles.titleBlock}>사무실 OPEN</p>
          <p className={styles.Desc}>사무 공간의 준공 이후 청<br />소가 마무리된 후 사무실<br />이사를 진행합니다</p>
        </div>
      </div>
    </section>
  );
}



