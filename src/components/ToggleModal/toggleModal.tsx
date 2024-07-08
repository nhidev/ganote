'use client';

import { useAtom, useSetAtom } from 'jotai';
import { ReactNode } from 'react';

import { modalAtom, modalSpecialAtom } from '@/atoms';

interface ToggleModalProps {
  children: ReactNode;
  special?: boolean;
}

const ToggleModal: React.FC<ToggleModalProps> = ({ children, special = false }) => {
  const [open, setOpen] = useAtom(modalAtom);
  const setOpenSpecial = useSetAtom(modalSpecialAtom);
  const openModal = () => {
    setOpen(!open);
    setOpenSpecial(special);
  };

  return (
    <div onClick={openModal} role="presentation">
      {children}
    </div>
  );
};

export default ToggleModal;
// use to open modal
