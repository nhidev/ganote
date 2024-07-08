import Image from 'next/image';
import React from 'react';

import stylesBtn from '../Button/Button.module.scss';
import ToggleModal from '../ToggleModal/toggleModal';
import styles from './footer.module.scss';

export default function FooterInterior() {
  return (
    <footer className={`${styles.FooterContentInterior}`}>
      <p className={styles.Desc}>
        부담스럽기만 했던 <br className={styles.Mobile} /> 사무실 인테리어가 <br /> 이제 설레는 과정이 됩니다
      </p>
      <p className={styles.Highlight}>
        총무노트로 더 똑똑하게 <br className={styles.Mobile} />
        합리적으로 결정하세요
      </p>
      <div className={styles.BtnGroup}>
        <ToggleModal>
          <button className={`${stylesBtn?.Button} ${stylesBtn?.ButtonOrange}`}>
            <span>상담 신청하기</span>
            <Image src="/icons/sent-icon.svg" width={20} height={20} alt="Sent" />
          </button>
        </ToggleModal>
        <a
          href="https://internal.ganote.kr/landing_page/download"
          download
          className={`${stylesBtn?.Button}  ${stylesBtn?.ButtonOutlinedWhite}`}
        >
          소개서 다운받기
          <Image src="/icons/download-icon-white.svg" width={20} height={20} alt="Download" />
        </a>
      </div>
      <div className={styles.FooterInformationSub}>
        <span className={`${styles.information} ${styles.BorderRight}`}>주식회사 이십사쩜칠</span>
        <span className={`${styles.information} ${styles.BorderRight}`}>대표 이선욱</span>
        <span className={`${styles.information} ${styles.BorderRight}`}>사업자번호 864-86-02783</span>
        <span className={styles.information}>고객 센터 070-4102-2407</span>
      </div>
    </footer>
  );
}
