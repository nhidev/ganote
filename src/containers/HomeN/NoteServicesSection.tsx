import Image from 'next/image';
import { memo } from 'react';

import styles from './noteServicesSection.module.scss';

import '@/components';

const OFFICE_INTERIOR_ITEMS: any = [
  {
    icon: '📐',
    desc1: `사무실`,
    desc2: `인테리어 설계`,
  },
  {
    icon: '🛠️',
    desc1: `사무실`,
    desc2: `인테리어 시공`,
  },
];

const OFFICE_MANAGEMENT_ITEMS: any = [
  {
    icon: '🧹',
    desc1: `오피스`,
    desc2: `클리닝`,
  },
  {
    icon: '🖥️',
    desc1: `MRO`,
    desc2: `구매 서비스`,
  },
  {
    icon: '🧑‍🔧',
    desc1: `사무 공간`,
    desc2: `유지보수`,
  },
];

const NoteServicesSection = memo(({ className = '' }: NoteServicesSectionProps) => {
  const renderDiagramBlock = (items: ItemProps[]) => {
    return (
      <div className={`office-interior-diagram ${styles.DiagramBlock}`}>
        {items.map((item: ItemProps, index: number) => (
          <div className={`${styles.DiagramItem}`} key={index}>
            <i>{item.icon}</i>
            <div className="diagramItem_desc">
              <p>{item.desc1}</p>
              <p>{item.desc2}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section className={`${styles.NoteServicesSection} ${className}`}>
      <h2>
        총무노트의 서비스 <br />
        필요한 것만 쏙쏙 골라 선택하세요
      </h2>
      <div className="note-services-container">
        <div className="note-services_top">
          {renderDiagramBlock(OFFICE_INTERIOR_ITEMS)}
          <div className="grouped-line">
            <Image width={210} height={15} src={`/iconsN/interior-grouped-line.svg`} alt="note services" />
            <p>사무실 인테리어</p>
          </div>
        </div>
        <div className="note-services_bottom">
          {renderDiagramBlock(OFFICE_MANAGEMENT_ITEMS)}
          <div className="grouped-line">
            <Image width={424} height={15} src={`/iconsN/management-grouped-line.svg`} alt="note services" />
            <p>사무실 운영 관리</p>
          </div>
        </div>
      </div>
    </section>
  );
});

interface NoteServicesSectionProps {
  className?: string;
}

interface ItemProps {
  icon: string;
  desc1: string;
  desc2: string;
}

export default NoteServicesSection;
