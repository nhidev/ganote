import React from 'react';

import styles from './advertisement.module.scss';

export default function AdvertisementCompany() {
  return (
    <section className={`${styles.Advertisement}`} >
      <p className={styles.AdvertisementText}>스타트업부터 대기업까지<br />
        총무님들이 200% 만족한 <br />
        <span className={styles.Highlight}>사무실 인테리어 서비스</span>를 <br className={styles.Mobile}/>이용하세요</p>
    </section>
  );
}
