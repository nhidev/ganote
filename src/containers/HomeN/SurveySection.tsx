'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import React, { memo, useEffect, useRef } from 'react';
import { SURVEY_LIST } from 'utils/constants';

import type { ReactNode } from 'react';

import styles from './surveySection.module.scss';

interface SurveyProps {
  icon: ReactNode;
  text: string;
  nextText: string;
}
const LIFE_CYCLE = [...SURVEY_LIST, ...SURVEY_LIST, ...SURVEY_LIST];

const SurveySection = memo(({ className = "" }: SurveySectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const surveyContainerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const elements = elementsRef.current;
    const surveyContainer = surveyContainerRef.current;
    
    if(!surveyContainer || !scrollContainer) return;
 
    const tl = gsap.timeline({ repeat: -1, yoyo: false});

    tl.to(scrollContainer, { duration: 80, y: -scrollContainer.offsetHeight, ease: 'linear' });
    const observerCallback: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { transform: 'scale(1)',  opacity: 1, duration: 1, ease: 'linear' });
          entry.target.classList.remove(styles.NextText);
        } else {
          gsap.to(entry.target, { transform: 'scale(0.64)',  opacity: 0.6, duration: 1, ease: 'linear' });
          entry.target.classList.add(styles.NextText);
        }
      });
    };

    const io = new IntersectionObserver(observerCallback, {
      root: surveyContainer,
      threshold: 0.5,
    });

    elements.forEach(element => io.observe(element));

    return () => {
      tl.kill(); // Kill the animation when the component unmounts
      io.disconnect(); // Disconnect the Intersection Observer
    };
  }, []);

  const surveySlide = (item: SurveyProps, index: number) => {
    return (
      <div key={index} className={`${styles.SurveySlide} scroll-element`} ref={(el: HTMLDivElement) => {
        if (el && !elementsRef.current.includes(el)) {
          elementsRef.current.push(el);
        }
      }
      }>
        <div className="text-wrap">
          <Image className="survey-icon" width={96} height={96} quality={100}  src={`/iconsN/${item.icon}`} alt="icon" />
          <div className="desc-wrap">
            <div className="desc-box">{item.text}</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className={`${styles.SurveySection} ${className}`}>
      <h2>
        인사총무팀 담당자님 <br /> 지난주에는 왜 야근하셨나요?
      </h2>
      <div className={`${styles.SurveyContainer}`} ref={surveyContainerRef}>
      <div className={`scroll-container`} ref={scrollContainerRef}>
        {LIFE_CYCLE.map((item, index) => surveySlide(item, index))}
      </div>
      </div>
    </section>
  );
});

interface SurveySectionProps {
  className?: string;
}

export default SurveySection;
