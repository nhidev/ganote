'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './interiorDocument.module.scss';

const InteriorDocument = memo(({ className = '' }: InteriorDocumentProps) => {
  return (
    <section className={`${styles.InteriorDocument} ${className}`}>
      <div className="interiorDocument_b-container">
        <div className="interiorDocument_b-head">
          <label>
            <Image width={20} height={20} src="/iconsN/lab_profile.svg" alt="icon" />
            <p>내부 보고</p>
          </label>
          <h2>보고문서 때문에 야근하지 마세요</h2>
          <h2>내부 보고용 문서</h2>
        </div>

        <div className="interiorDocument_b-body">
          <div className="interiorDocument-title">
            <h3>
              <span>{`내부 보고와 \n인테리어 진행 과정도 \n꼼꼼하게`}</span>
            </h3>
            <h4>
              <span>{`설계부터 준공까지 모든 단계를 \n보고서 형태로 제작해 드립니다`}</span>
            </h4>
          </div>
          <div className="interiorDocument-content fade-up-element">
            <div className="interiorDocument-block">
              <Image width={587} height={418} quality={100} src="/imagesN/doc-1.svg" alt="document" />
              <Image width={587} height={418} quality={100} src="/imagesN/doc-2.svg" alt="document" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

interface InteriorDocumentProps {
  className?: string;
}

export default InteriorDocument;
