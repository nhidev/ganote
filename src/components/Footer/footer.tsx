import Image from 'next/image';
import React from 'react';

import ToggleModal from '../ToggleModal/toggleModal';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContent}>
        <ToggleModal>
          <span>{'총무노트와 무료 상담하기 '}</span>
        </ToggleModal>
        <Image src="/icons/ArrowRightUp.svg" width={21} height={20} alt="Sent" />
      </div>
    </footer>
  );
}
