'use client';

import { Button } from 'antd';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { memo } from 'react';

import { leadFormModalAtom } from '@/atoms';
import { Default, Mobile } from '@/components';
import withTheme from '@/theme';
import styles from './generalNoteSection.module.scss';

const GeneralNoteSection = memo(({ className = '' }: GeneralNoteSectionProps) => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);

  return (
    <section className={`${styles.GeneralNoteSection} ${className}`}>
      <div className="genera-note_top">
        <p>{`총무님의 크고 작은 고민 \n10년의 총무 노하우로`}</p>
        <h2>
          총무노트가 <span>스마트하게 <br/></span> 해결해 드릴 게요!
        </h2>
        <Default>
          {withTheme(
            <Button
              className="submit-btn g-cta-button"
              icon={<Image width={12} height={10} src="/iconsN/ic-arrow-right.svg" alt="icon" />}
              onClick={(event) => {
                setLeadFormModal({ open: true, isDownload: false });
                event.currentTarget.blur();
              }}
            > 
              총무 전문가와 상담 신청하기
            </Button>
          )}
        </Default>
      </div>
      <div className="genera-note_bottom">
        <Image width={318} height={201} src="/imagesN/note-banner.svg" priority alt="note banner" />
      </div>
      <Mobile>
        {withTheme(
          <Button
            className="submit-btn g-cta-button"
            icon={<Image width={12} height={10} src="/iconsN/ic-arrow-right.svg" alt="arrow icon" />}
            onClick={(event) => {
              setLeadFormModal({ open: true, isDownload: false });
              event.currentTarget.blur();
            }}
          >
            총무 전문가와 상담 신청하기
          </Button>
        )}
      </Mobile>
    </section>
  );
});

interface GeneralNoteSectionProps {
  className?: string;
}

export default GeneralNoteSection;
