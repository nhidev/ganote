/* eslint-disable unicorn/no-abusive-eslint-disable */
'use client';

import { useAtom, useSetAtom } from 'jotai/react';
import Image from 'next/image';
import { ReactNode } from 'react';
import ReactModal from 'react-modal';

import { modalAtom, modalSpecialAtom } from '../../atoms/modalAtom';
import styles from './modal.module.scss';

interface ModalProps {
  children: ReactNode;
  className?: string;
  contentLabel?: 'string';
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 0,
    borderRadius: '24px',
    overflow: 'unset',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 10,
  },
};
const Modal: React.FC<ModalProps> = ({ children, className = '', contentLabel = 'Lead form Modal' }) => {
  const [open, setOpen] = useAtom(modalAtom);
  const setOpenSpecial = useSetAtom(modalSpecialAtom);

  return (
    <ReactModal
      isOpen={open}
      onAfterOpen={() => {
        setOpen(true);
      }}
      onRequestClose={() => {
        setOpen(false);
        setOpenSpecial(false);
      }}
      style={customStyles}
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      <button className={styles?.cancelBtn}>
        <Image
          src="icons/cancel-icon.svg"
          alt="Cancle"
          width={24}
          height={24}
          onClick={() => {
            setOpen(false);
          }}
        />
      </button>
      <div className={`${styles?.modal} ${className}`}>{children}</div>
    </ReactModal>
  );
};

export default Modal;
