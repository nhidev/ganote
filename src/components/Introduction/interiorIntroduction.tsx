import Image from 'next/image';

import stylesBtn from '../Button/Button.module.scss';
import ToggleModal from '../ToggleModal/toggleModal';
import InteriorSilder from './interiorSilder';
import styles from './introduction.module.scss';
import ScrollButton from './scrollButton';

const criteriaItem = [
  { name: '저렴한 비용', icon: 'cash' },
  { name: '타 회사 지인 추천', icon: 'recomendation' },
  { name: '있어 보이는 포트폴리오 ', icon: 'portfolio' },
];

export default function InteriorIntroduction() {
  return (
    <section className={styles?.interiorIntroduction}>
      <div className={styles?.introductionTop}>
        <div className={styles?.introductionContent}>
          <h1 className={styles?.introductionTitle}>
            사무실 인테리어
            <br /> 총무의 입장에서
            <br /> 꼼꼼하고 세심하게
          </h1>
          <p className={styles?.introductionDesc}>
            헤매는 순간들 없이
            <br /> 모든 과정이 순조롭게 진행되는 경험,
            <br /> 총무노트와 함께라면 가능합니다
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

        <InteriorSilder />
      </div>

      <div className={styles?.introductionCriterias}>
        <div className={styles?.introductionCriterias_title}>
          모두 비슷해보이는 인테리어 업체들
          <p>어떤 기준으로 선정해야 할까요?</p>
        </div>
        <div className={styles?.introductionCriterias_list}>
          {criteriaItem.map(item => (
            <div className={styles?.introductionCriterias_item} key={item.icon}>
              <Image src={`/icons/${item.icon}.svg`} alt={item.icon} width={80} height={80} quality={100} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <p className={styles?.introductionCriterias_scrollText}>어떤 기준으로 정해도 아리송 하다면? </p>
        <ScrollButton targetSectionClass="scrollToThis" />
      </div>
    </section>
  );
}
