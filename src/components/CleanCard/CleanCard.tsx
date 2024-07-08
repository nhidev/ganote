import Image from 'next/image';
import React from 'react';
import styles from './cleanCard.module.scss';

export default function CleanCard({ className = '', image, imageWidth, imageHeight, image2, image2Width, image2Height, title, text, subText }: CleannCardProps) {
  return (
    <div className={`${className} ${styles.CleanCard}`}>
      <div className="cleanCard_b-head">
        <h3>{title}</h3>
        <p>{text}
          {subText && <span className="sub-text">{subText}</span>}
        </p>

      </div>
      {image && <Image src={`/imagesN/${image}`} quality={100} width={imageWidth} height={imageHeight} alt={'clean card'} />}
      {image2 && <Image src={`/imagesN/${image2}`} quality={100} width={image2Width} height={image2Height} alt={'clean card'} />}
    </div >
  );
}

interface CleannCardProps {
  className?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  image2?: string;
  image2Width?: number;
  image2Height?: number;
  title: string;
  text: string;
  subText?: string;
}
