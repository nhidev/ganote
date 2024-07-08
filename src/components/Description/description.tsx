import Image from 'next/image';

import React from 'react';

import stylesBtn from '../Button/Button.module.scss';
import ToggleModal from '../ToggleModal/toggleModal';
import styles from './description.module.scss';


export default function Description() {
  return (
    <section className={styles.Description}>
      <p className={styles.Text}>총무님의 크고 작은 고민</p>
      <p className={styles.Text}>10년의 총무 노하우로</p>
      <p className={`${styles.DescriptionWeight}`}>총무노트가 함께<br /> 해결해 드릴게요!</p>
      <ToggleModal>
        <button className={`${stylesBtn?.Button} ${stylesBtn?.ButtonOrange}`}>
          <span>{'총무 전문가와 상담 신청하기'}</span>
          <Image src="/icons/ArrowRightUp.svg" width={21} height={20} alt="Sent" />
        </button>
      </ToggleModal>
    </section>
  );
}
