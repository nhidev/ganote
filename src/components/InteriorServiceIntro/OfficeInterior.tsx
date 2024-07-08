import Image from 'next/image';
import Link from 'next/link';

import styles from './interiorServiceIntro.module.scss';

const officeInteriorItem = [
  { image: 'office-interior-1', desc: '강남 인근 IT 기업 사무실' },
  { image: 'office-interior-2', desc: '용산구 컨설팅 회사 사무실' },
  { image: 'office-interior-3', desc: '성수동 패션 브랜드 사무실' },
];

export default function OfficeInterior() {
  return (
    <div className={styles.officeInteriorContainer}>
      <div>
        <h5 className={styles.mainTitle}>
          총무노트가 자신있게 소개하는
          <br />
          인테리어 / 운영 서비스
        </h5>
        <p className={styles.subTitle}>
          총무노트의 10년 간의 노하우로
          <br />
          총무 업무를 꼼꼼하고 효율적으로 해결합니다
        </p>
      </div>

      <div className={styles.officeInteriorTitleWrapper}>
        <p className={styles.officeInteriorTitle}>
          첫번째
          <br />
          사무실 인테리어
        </p>

        <p className={styles.officeInteriorDesc}>
          강남에만 10,000평 이상 사무실 구축
          <br />
          총무의 입장에서 꼼꼼하게
        </p>
      </div>

      <div className={styles.officeInterior_ImageList}>
        {officeInteriorItem.map((item, index) => (
          <div className={styles.officeInterior_ImageItem} key={index}>
            <Image src={`/images/${item.image}.png`} alt={item.image} width={328} height={240} unoptimized />
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <Link href="/interior" className={styles.officeInteriorButton}>
        <span>서비스 알아보기</span>
        <Image src="/icons/arrow-right.svg" alt="arrow-right" width={20} height={20} />
      </Link>
    </div>
  );
}
