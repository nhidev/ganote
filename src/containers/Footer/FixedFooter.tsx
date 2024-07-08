'use client';

import { Button } from 'antd';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import React, { useState } from 'react';

import { leadFormModalAtom } from '@/atoms';
import { Default } from '@/components/MediaQuery';
import styles from './footer.module.scss';


function FixedFooter({ className = '', textBtn }: FixedFooterProps) {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);
  const [showFixedFooter, setShowFixedFooter] = useState(true);
  return (
    <>
      {showFixedFooter ? (
        <div className={`${className} ${styles.fixedFooter}`}>
          <Button
            className="g-cta-button"
            icon={<Image width={12} height={10} src="/iconsN/ic-arrow-right.svg" alt="icon" />}
            onClick={event => {
              setLeadFormModal({ open: true, isDownload: false });
              event.currentTarget.blur();
            }}
          >
            {textBtn}
          </Button>
          <Default>
            <Button
                className="g-cta-button close-btn"
                icon={<Image width={24} height={24} src="/iconsN/close-white-ic.svg" alt="close" />}
                onClick={() => {
                  setShowFixedFooter(!showFixedFooter);
                }}
              />
          </Default>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

interface FixedFooterProps {
  className?: string,
  textBtn: string,
}

export default FixedFooter;
