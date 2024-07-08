import Image from 'next/image';
import React from 'react';

import styles from './loungeInfo.module.scss';

export default function LoungeInfo({ className = '', image1, image2 }: LoungeInfoProps) {
  return (
    <div className={`${className} ${styles.LoungeInfo}`}>
      <div className="loungeInfo_b-top">
        <p>라운지</p>
        <p className="right-text">
          <Image width={13} height={13} src="/iconsN/check_box.svg" alt="checkbox" />
          작업 완료
        </p>
      </div>
      <div className="loungeInfo_b-mid">
        <div className="loungeInfo-head">
          <p>작업 사진</p>
          <p className="right-label">
            <Image width={12} height={12} src="/iconsN/imagesmode.svg" alt="images mode" />
            사진 업로드
          </p>
        </div>

        <div className="loungeInfo-body">
          <div className="loungeInfo_b-img">
            <Image width={220} height={170} src={`/imagesN/${image1}`} alt="checkbox" />
            <p>작업 전</p>
          </div>
          <div className="loungeInfo_b-img">
            <Image width={220} height={170} src={`/imagesN/${image2}`} alt="checkbox" />
            <p>작업 후</p>
          </div>
        </div>
      </div>
      <div className="loungeInfo_b-bot">
        <div className="loungeInfo-head">
          <p>
            노트<span>(선택)</span>
          </p>
        </div>
        <div className="loungeInfo-body" />
      </div>
    </div>
  );
}

interface LoungeInfoProps {
  className?: string;
  image1: string;
  image2: string
}
