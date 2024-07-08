'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from './introduction.module.scss';

const ScrollButton: React.FC<{ targetSectionClass: string }> = ({ targetSectionClass }) => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');

      if (header instanceof HTMLElement) {
        setHeaderHeight(header.clientHeight);
      }
    };

    updateHeaderHeight();

    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const scrollDown = () => {
    const targetSection = document.querySelector(`.${targetSectionClass}`);

    if (targetSection) {
      const targetSectionOffset = targetSection.getBoundingClientRect().top + window.scrollY;
      const offset = targetSectionOffset - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Image
      className={`${styles?.introductionCriterias_scrollIcon} js-scrolldown`}
      src={'/icons/double-down-arrow.svg'}
      alt={'double-down-arrow icon'}
      width={44}
      height={44}
      quality={100}
      onClick={scrollDown}
    />
  );
};

export default ScrollButton;
