'use client';
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import { MEDIA_SIZE } from '@/utils/constants';
import styles from './lineClamp.module.scss';

export default function LineClamp({ text }: LineClampProps) {
  const [shouldTruncate, setShouldTruncate] = useState<boolean>(false);
  const [readMore, setReadMore] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: MEDIA_SIZE.tablet });
  const measuredRef = useCallback(
    (node: HTMLElement | null) => {
      if (node?.parentElement) {
        const elHeight = node.offsetHeight;
        const nodeStyles = window.getComputedStyle(node);
        const lineHeight = nodeStyles
          .getPropertyValue('line-height')
          .replace('px', '');
        const elLineCount = Math.round(elHeight / Number.parseInt(lineHeight, 10));
        const limitLine = isMobile ? 5 : 3;

        console.log('elLineCount', elLineCount);
        console.log('limitLine', limitLine);
        setShouldTruncate(elLineCount > limitLine);
      }
    },
    [text]
  );

  const shouldClamp = shouldTruncate && !readMore;

  return (
    <div className={`${styles.LineClamp}`} >
      <Image src='/iconsN/quote.svg' alt="quote icon" height={30} width={30} />
      <p ref={measuredRef} className={`quote ${shouldClamp ? 'line-clamp' : ''}`}>{text}</p>
      {shouldTruncate &&
        (readMore ? (
          <button onClick={() => setReadMore(false)}>
            Show less
          </button>
        ) : (
          <button onClick={() => setReadMore(true)}>
            Read more
          </button>
        ))}
    </div>
  );
}

interface LineClampProps {
  text: string;
}
