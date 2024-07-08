'use client';

import Image from 'next/image';

import stylesBtn from '../Button/Button.module.scss';
import ToggleModal from '../ToggleModal/toggleModal';
import styles from './introduction.module.scss';

const answers = [
  '비효율적인 구매 프로세스',
  '협력사 퀄리티 컨트롤의 어려움',
  '임직원 사무실 CS 처리',
  '사무실 운영 관리 지원',
  '돌발적인 사무실 시설 문제',
];

export default function IntroductionSection() {
  return (
    <section className={styles?.introduction}>
      <div className={styles?.introductionTop}>
        <div className={styles?.introductionContent}>
          <h1 className={styles?.introductionTitle}>
            총무업무 통합관리로
            <br /> 정확하고 더 빠르게
          </h1>
          <p className={styles?.introductionDesc}>
            국내 유일 오피스 전문
            <br /> GA SaaS 플랫폼, 총무노트
          </p>
          <div className={styles?.introductionButton}>
            <ToggleModal>
              <button className={`${stylesBtn?.Button} ${stylesBtn?.ButtonOrange}`}>
                상담 신청하기
                <Image src="/icons/sent-icon.svg" width={20} height={20} alt="Sent" />
              </button>
            </ToggleModal>
            <ToggleModal special={true}>
              <button className={`${stylesBtn?.Button} ${stylesBtn?.ButtonOutlined} ${styles?.noMarginRight}`}>
                소개서 다운받기
                <Image src="/icons/download-icon.svg" width={20} height={20} alt="Download" />
              </button>
            </ToggleModal>
          </div>
        </div>
        <div className={styles?.introductionImage}>
          <Image src={'/images/introduction-img.png'} fill quality={100} alt="Introduction images" />
        </div>
      </div>
      <div className={styles?.introductionQA}>
        <div className={styles?.introductionQABackground}>
          <Image src="/images/QA-background.png" fill alt="Q&A background" />
        </div>
        <Image src="/icons/QA-icon.svg" width={42} height={42} alt="Confused" style={{ marginBottom: '24px' }} />
        <h2>
          인사총무팀 담당자님
          <br /> 지난주에는 왜 야근하셨나요?
        </h2>
        <ul className={styles?.listAnswers}>{answers?.map((answer, index) => <li key={index}>{answer}</li>)}</ul>
      </div>
    </section>
  );
}
