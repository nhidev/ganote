import Image from 'next/image';

import stylesBtn from '../Button/Button.module.scss';
import ToggleModal from '../ToggleModal/toggleModal';
import styles from './solutionsSection.module.scss';
import TitleNote from './TitleNote/titleNote';

export default function SolutionsSection() {
  return (
    <section className={styles?.solutionsSection}>
      <h3 className={styles?.sectionSubTitle}>
        2024년인데 총무 업무는 90년대 방식대로?
        <br />
        반복적이고 소모적인 업무는 그만 하세요
      </h3>
      <h2 className={styles?.sectionTitle}>
        <span>국내 유일의 오피스 전문</span> GA SaaS 플랫폼 <br />
        <span className={styles?.highLight}>총무노트</span>가 총무팀의 야근을<span> 확 줄여드립니다</span>
      </h2>
      <div className={styles?.maxWidthContent}>
        <div className={styles?.sectionContentCol}>
          <Image src="/icons/direction-icon.svg" width={100} height={200} alt="Following" />
          <TitleNote iconUrl="/icons/reactIcon-2.svg" title="반복적이고 루틴한 업무" />
          <div className={styles?.desNote}>
            <div className={styles?.desNoteBg} />
            <ul>
              <li>비품 주문</li>
              <li>간식 고르기</li>
              <li>청소 상태 확인</li>
            </ul>
          </div>
          <div className={styles?.smallNote}>
            <div className={styles?.smallNoteBg} />
            <Image src="/icons/tick-icon.svg" width={32} height={32} alt="Tick" />
            <p className={styles?.smallNoteContent}>통합 운영 / 자동화</p>
          </div>
        </div>
        <div className={styles?.sectionContentCol}>
          <Image src="/icons/direction-icon.svg" width={100} height={200} alt="Following" />
          <TitleNote iconUrl="/icons/reactIcon-1.svg" title="갑작스러운 시즌성  업무" />
          <div className={styles?.desNote}>
            <div className={styles?.desNoteBg} />
            <ul>
              <li>사무실 인테리어</li>
              <li>사무실 시설 고장 수리</li>
              <li>신규 복지 도입</li>
            </ul>
          </div>
          <div className={styles?.smallNote}>
            <div className={styles?.smallNoteBg} />
            <Image src="/icons/tick-icon.svg" width={32} height={32} alt="Tick" />
            <p className={styles?.smallNoteContent}>10년 간의 노하우를 통해 신속한 해결</p>
          </div>
        </div>
      </div>
      <ToggleModal>
        <button className={`${stylesBtn?.Button} ${stylesBtn?.ButtonWhite}`}>
          상담 신청하기
          <Image src="/icons/sent-blackIcon.svg" width={20} height={20} alt="Sent" />
        </button>
      </ToggleModal>
    </section>
  );
}
