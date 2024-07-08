import Image from 'next/image';

import styles from './service.module.scss';

interface ServiceItemProps {
  icon: string;
  textUp: string;
  textDown: string;
}

export default function ServiceItem({ icon, textUp, textDown }: ServiceItemProps) {
  return (
    <div className={styles.serviceItem}>
      <Image src={`/icons/${icon}.svg`} alt={icon} unoptimized width={64} height={64} />
      <div className={styles.serviceItem_text}>
        <p>{textUp}</p>
        <p>{textDown}</p>
      </div>
    </div>
  );
}
