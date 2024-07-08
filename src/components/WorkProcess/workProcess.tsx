import Image from 'next/image';
import React from 'react';

import stylesBtn from '../Button/Button.module.scss';
import ToggleModal from '../ToggleModal/toggleModal';
import styles from './workProcess.module.scss';
import WorkProcessExpand from './WorkProcessExpand/workProcessExpand';

export default function WorkProcess() {
  return (
    <section className={styles.WorkProcess}>
      <div className={styles.FirstStep}>
        <span className={styles.LabelStep}>POINT 1</span>
        <h4 className={styles.HeaderStep}>3개월 안에 끝내는 프로젝트</h4>
        <p className={styles.Desc}>
          업체 담당자에 물어볼 때마다 늘어지는 준공 일정? <br />
          총무의 노하우로 기간을 확 줄여드립니다
        </p>
        <div className={styles.FirstProcess}>
          <span className={`${styles.Process} ${styles.Process1}`}>
            <span className={`${styles.Dot} ${styles.Dot1}`} /> 전문가 상담
          </span>
          <span className={`${styles.Process} ${styles.Process2}`}>
            <span className={`${styles.Dot} ${styles.Dot2}`} />
            설계 및<br />
            견적 제안
          </span>
          <span className={`${styles.Process} ${styles.Process3}`}>
            <span className={`${styles.Dot} ${styles.Dot3}`} />
            오피스
            <br />
            시공
          </span>
          <span className={`${styles.Process} ${styles.Process4}`}>
            <span className={`${styles.Dot} ${styles.Dot4}`} />
            사무실 <br />
            RE-OPEN
          </span>
        </div>
      </div>

      <div className={styles.SecondStep}>
        <span className={styles.LabelStep}>POINT 2</span>
        <h4 className={styles.HeaderStep}>설계와 시공을 별도로 계약</h4>
        <p className={styles.Desc}>
          설계부터 시공까지 모두 한곳에서 하지 말고
          <br />더 전문적인 업체로 따져보고 고르세요
        </p>
        <div className={styles.DesignConstruction}>
          <div className={styles.Step}>
            <div className={`${styles.WrapBg} ${styles.Left}`}>
              <Image
                src="/images/DesignConstruction1.png"
                height={174}
                width={220}
                quality={100}
                alt="ItemServiceNote images"
              />
            </div>
            <span className={styles.HighLight}>설계 담당</span>
            <br />
            총무노트
          </div>
          <div className={styles.Step}>
            <Image src="/icons/arrow-icon.svg" width={31} height={13} alt="Sent" className={styles.ArrowIcon} />
          </div>
          <div className={styles.Step}>
            <span className={styles.HighLight}>시공 업체 선택 </span>
          </div>
          <div className={styles.Step}>
            <Image src="/icons/arrow-icon.svg" width={31} height={13} alt="Sent" className={styles.ArrowIcon} />
          </div>
          <div className={styles.Step}>
            <div className={`${styles.WrapBg} ${styles.Right}`}>
              <Image
                src="/images/DesignConstruction2.png"
                height={174}
                width={220}
                quality={100}
                alt="ItemServiceNote images"
              />
            </div>
            <span className={styles.HighLight}>시공 진행</span>
            <br />A 업체
          </div>
        </div>
        <WorkProcessExpand />
      </div>

      <div className={styles.LastStep}>
        <span className={styles.LabelStep}>POINT 3</span>
        <h4 className={styles.HeaderStep}>모든 과정을 차질 없이 꼼꼼하게</h4>
        <p className={styles.Desc}>
          내부 보고와 인테리어 진행 과정 기록도 걱정마세요 <br />
          설계부터 준공까지 모든 단계를 보고서 형태로 제작해 드립니다
        </p>
        <Image
          src="/images/WorkProcessStep3.png"
          height={234}
          width={612}
          quality={100}
          alt="ItemServiceNote images"
          className={styles.LastStepBg}
        />
      </div>

      <div className={styles.PolicyBlock}>
        <h4 className={styles.HeaderStep}>다른 업체에서 강조하는 사항은 <br  className={styles.Mobile}/>총무노트에서는 기본!</h4>
        <div className={styles.PolicyList}>
          <div className={styles.Policy}>
            <Image src="/icons/clock-icon.svg" width={56} height={56} alt="Sent" />
            <span className={styles.TextNote}>기간 준수</span>
          </div>
          <div className={styles.Policy}>
            <Image src="/icons/budget-icon.svg" width={56} height={56} alt="Sent" />
            <span className={styles.TextNote}>적정 예산 준수</span>
          </div>
          <div className={styles.Policy}>
            <Image src="/icons/warranty-icon.svg" width={56} height={56} alt="Sent" />
            <span className={styles.TextNote}>1년 A/S 보증</span>
          </div>
        </div>
        <button className={`${stylesBtn?.Button} ${stylesBtn?.ButtonOrange}`}>
          <ToggleModal>
            <span>{'사무실 인테리어 견적 문의'}</span>
          </ToggleModal>
          <Image src="/icons/ArrowRightUp.svg" width={21} height={20} alt="Sent" />
        </button>
      </div>
    </section>
  );
}
