'use client';

import { memo } from 'react';
import Image from 'next/image';
import styles from './cleaningSection.module.scss';

const searchResult = [
  { name: "사무실 청소 체크리스트", id: "1" },
  { name: "사무실 청소 대행", id: "2" },
  { name: "사무실 청소 업체", id: "3" },

];
const CleaningSection = memo(() => (
  <section className={styles.CleaningSection}>
    <div className="cleaningSection-container">
      <div className="cleaningSection_b-head">
        <h2>사무실 정기 청소</h2>
        <h2><span>아무 업체</span>에나 맡기고 계신가요?</h2>
      </div>
      <div className="cleaningSection_b-body">
        <div className='text-field'>
          <Image src="/iconsN/gg_search.svg" width={20} height={20} alt="search" />
          <span className="type">사무실 청소 방법</span>
        </div>
        <ul className='search-list'>
          {searchResult.map(item =>
            <li key={item.id}>
              <Image src="/iconsN/gg_search_gray.svg" width={18} height={18} alt="search" />
              {item.name}
            </li>
          )}
        </ul>
      </div>
    </div>
  </section>
));

export default CleaningSection;
