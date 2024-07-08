import Image from 'next/image';

import styles from './interiorServiceIntro.module.scss';

interface ChartBlockProps {
  name: string;
  chart: string;
}

export default function ChartBlock({ name, chart }: ChartBlockProps) {
  return (
    <div className={styles.chartBlock_container}>
      <p>{name}</p>
      <Image src={`/images/${chart}.png`} unoptimized quality={100} alt={chart} width={200} height={132} />
    </div>
  );
}
