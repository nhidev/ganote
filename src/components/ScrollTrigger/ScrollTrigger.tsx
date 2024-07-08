'use client';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

interface ScrollTriggerProps {
  children: React.ReactNode;
}

const ScrollTriggerCp = ({ children }: ScrollTriggerProps) => {

  useEffect(() => {
    function initScrollTriggerFunc() {
      gsap.registerPlugin(ScrollTrigger);
      const animatedBoxes = gsap.utils.toArray('.fade-up-element');

      animatedBoxes && animatedBoxes.forEach((animatedBox: any, i: number) => {
        const anim = gsap.fromTo(animatedBox, { autoAlpha: 0, y: 200 }, { duration: 1, autoAlpha: 1, y: 0 });
        ScrollTrigger.create({
          trigger: animatedBox,
          animation: anim,
          toggleActions: 'play none none reverse',
        });
      });
    }
    initScrollTriggerFunc();
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default ScrollTriggerCp;
