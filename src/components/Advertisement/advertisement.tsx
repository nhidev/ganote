import React from 'react';

import styles from './advertisement.module.scss';

export default function Advertisement() {
  return (
    <section className={`${styles.Advertisement}`} >
      <p className={styles.AdvertisementText}>사무실 인테리어에 특화된 <br />
      설계와 시공으로<br />
        <span className={styles.Highlight}>사무 공간에 브랜드의 업무<br className={styles.Mobile}/> 방식을 담습니다</span></p>
    </section>
  );
}


