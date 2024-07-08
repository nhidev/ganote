import { atom } from 'jotai';

const modalAtom = atom<boolean>(false);
const modalSpecialAtom = atom<boolean>(false);
const leadFormModalAtom = atom({
  open: false,
  isDownload: false,
});

export { modalAtom, modalSpecialAtom, leadFormModalAtom };
