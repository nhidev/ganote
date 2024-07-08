import Image from 'next/image';

import styles from './titleNote.module.scss';

interface TitleNoteProps {
  iconUrl: string;
  title: string;
  className?: string;
}

const TitleNote: React.FC<TitleNoteProps> = ({ iconUrl, title, className = '' }) => (
  <div className={`${styles?.titleNote} ${className}`}>
    <div className={styles?.shadeBackground} />
    <Image src={iconUrl} width={49} height={49} alt="icon" />
    <p>{title}</p>
  </div>
);

export default TitleNote;
