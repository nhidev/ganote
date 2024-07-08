import Image from 'next/image';

import styles from './interiorServiceIntro.module.scss';

interface CheckBlockProps {
  name: string[];
  hightlight: number;
}

export default function CheckBlock({ name, hightlight }: CheckBlockProps) {
  return (
    <div className={styles.checkBlock_container}>
      {name.length > 0 &&
        name.map((item, index) => (
          <div key={index}>
            <Image src="/icons/check-correct.svg" alt="check-correct" width={16} height={16} />
            <p style={{ color: `${hightlight === index + 1 ? '#E07B05' : '#212121'}` }}>{item}</p>
          </div>
        ))}
    </div>
  );
}
