/* eslint-disable consistent-return */
'use client';
import React, { memo } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_SIZE } from '@/utils/constants';
import useMounted from '@/hooks/useMounted';
import styles from './cleaningSection3rd.module.scss';

const data = [
  '업무 공간 바닥 청소 및 먼지 제거',
  '파지함 비우기',
  '화장실 변기 세척',
  '탕비실 개수대 세척',
  '음식물 쓰레기 버리기',
  '냉장고 비우기',
  '회의실 유리문 닦기',
  '창문 틈새 먼지 닦기'

]
const CleaningSection3rd = memo(({ className = "" }: CleaningSection3rdProps) => {
  const isMobile = useMediaQuery({ maxWidth: MEDIA_SIZE.tablet - 1 });

  return (
    <section className={`${styles.CleaningSection3rd} ${className}`}>
      <div className='cleaningSection3rd-wrapper'>
        {useMounted(
          isMobile ?
            <h2>
              {`수많은 사무실\n`}<span>{`청소 체크리스트,\n`}</span>{`총무님은 신경쓰지마세요\n`}<span>{`총무노트`}</span>{`가`}<span>{`알아서`}</span>{`\n관리해드립니다.`}
            </h2> :
            <h2>{`수많은`} <span>{`사무실 청소 체크리스트,\n`}</span>{`총무님은 신경쓰지마세요\n`}<span>{`총무노트`}</span>{`가`} <span>{`알아서\n`}</span>{`관리해드립니다.`}
            </h2>

        )}
        <div className='cleaningSection3rd_b-body fade-up-element'>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <Image src="/iconsN/tabler_checkbox.svg" alt="arrow-right" width={22} height={22} />
                <h4>{item}</h4>
              </li>
            ))}
            <li className='dot'></li>
          </ul>
        </div>
      </div>
    </section>
  )
});

interface CleaningSection3rdProps {
  className?: string;
}

export default CleaningSection3rd;