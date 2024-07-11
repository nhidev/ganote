/* eslint-disable consistent-return */
'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import React, { memo, useEffect, useRef } from 'react';
import { ClEANING_CYCLE } from 'utils/constants';

import styles from './cleaningSection2nd.module.scss';
interface CleanCycleItem {
  subText: string;
  mainText: {
    size: string;
    time: string
  }
}
interface CleaningCycleProps {
  text: CleanCycleItem;
  nextText: CleanCycleItem;
}

const LIFE_CYCLE = [...ClEANING_CYCLE, ...ClEANING_CYCLE, ...ClEANING_CYCLE, ...ClEANING_CYCLE, ...ClEANING_CYCLE, ...ClEANING_CYCLE, ...ClEANING_CYCLE, ...ClEANING_CYCLE, ...ClEANING_CYCLE, ...ClEANING_CYCLE];

const CleaningSection2nd = memo(({ className = "" }: CleaningSection2ndProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const cleaningSection2ndContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const elements = elementsRef.current;
    const surveyContainer = cleaningSection2ndContainerRef.current;

    if (!surveyContainer || !scrollContainer) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: false });

    tl.to(scrollContainer, { duration: 80, y: -scrollContainer.offsetHeight, ease: 'linear' });
    const observerCallback: IntersectionObserverCallback = entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { transform: 'scale(1)', opacity: 1, duration: 1, ease: 'linear' });
          entry.target.classList.remove(styles.NextText);
        } else {
          gsap.to(entry.target, { transform: 'scale(0.64)', opacity: 0.6, duration: 1, ease: 'linear' });
          entry.target.classList.add(styles.NextText);
        }
      }
    };

    const io = new IntersectionObserver(observerCallback, {
      root: surveyContainer,
      threshold: 0.5,
    });

    for (const element of elements) io.observe(element);

    return () => {
      tl.kill(); // Kill the animation when the component unmounts
      io.disconnect(); // Disconnect the Intersection Observer
    };
  }, []);

  const cleaningCycleSlide = (item: CleaningCycleProps, index: number) => (
    <div key={index} className={`${styles.CleaningCycleSlide} scroll-element`} ref={(el: HTMLDivElement) => {
      if (el && !elementsRef.current.includes(el)) {
        elementsRef.current.push(el);
      }
    }
    }>
      <div className="text-wrap">
        <div className="desc-wrap">
          <Image src="/iconsN/tabler_checkbox.svg" alt="arrow-right" width={28} height={28} />
          <div className="desc-box">
            <p className="sub-text">{item.text.subText}</p>
            <p className="main-text"> {item.text.mainText.size}
              <span>{item.text.mainText.time}</span></p>
          </div>

        </div>
      </div>
    </div>
  );

  return (
    <section className={`${styles.CleaningSection2nd} ${className}`}>
      <div className='cleaningSection2nd-wrapper'>
        <h2>총무노트 사무실 정기 청소<br />평수, 인원, 구조, 업종에 따라<br /><span>최적의 청소 주기</span>{`를 \n추천드려요`} </h2>
        <div className={`${styles.CleaningCycleContainer}`} ref={cleaningSection2ndContainerRef}>
          <div className={`scroll-container`} ref={scrollContainerRef}>
            {LIFE_CYCLE.map((item, index) => cleaningCycleSlide(item, index))}
          </div>
        </div>
      </div>
    </section>
  );
});

interface CleaningSection2ndProps {
  className?: string;
}

export default CleaningSection2nd;