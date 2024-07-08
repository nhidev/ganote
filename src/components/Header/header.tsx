'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import stylesBtn from '../Button/Button.module.scss';
import ToggleModal from '../ToggleModal/toggleModal';
import styles from './header.module.scss';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  return (
    <header className={`${styles.Header} ${isExpanded ? styles.HeaderMenuMobileWrapperExpanded : ''}`}>
      <div className={styles.HeaderContainer}>
        <div className={styles.HeaderLogo}>
          <Link href="/">
            <Image fill src="/icons/logo.svg"  alt="Sent" />
          </Link>
        </div>
        <div className={styles.HeaderEventGroup}>
          <HeaderMenu className={styles.HeaderMenuDesktop} />
          <ToggleModal>
            <button className={`${styles.HeaderButton} ${stylesBtn?.Button} ${stylesBtn?.ButtonOrange}`}>{'무료 상담 신청하기'}</button>
          </ToggleModal>
          <button className={styles.HeaderIconMobile} onClick={() => setExpanded(!isExpanded)}>
            {isExpanded ? (
              <Image src={`/icons/close-icon.svg`} alt="close-icon" unoptimized width={24} height={24} />
            ) : (
              <Image src={`/icons/burger-icon.svg`} alt="close-icon" unoptimized width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      <div className={`${styles.HeaderMenuMobileWrapper} `}>
        <HeaderMenu className={styles.HeaderMenuMobile} />
      </div>
    </header>
  );
}
