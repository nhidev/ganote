import Image from 'next/image';
import React from 'react';

import stylesBtn from '../Button/Button.module.scss';
import ToggleModal from '../ToggleModal/toggleModal';
import styles from './service.module.scss';
import ServiceItem from './ServiceItem';

const serviceItems = [
  { icon: 'livingroom', textUp: '사무실', textDown: '인테리어 설계' },
  { icon: 'brickwall', textUp: '사무실', textDown: '인테리어 시공' },
  { icon: 'sweeping', textUp: '오피스', textDown: '클리닝' },
  { icon: 'box', textUp: 'MRO', textDown: '구매 서비스' },
  { icon: 'tools', textUp: '사무 공간', textDown: '유지보수' },
];

export default function ServiceSelection() {
  return (
    <div className={styles.serviceContainer}>
      <h5 className={styles.mainTitle}>
        총무노트의 서비스
        <br />
        필요한 것만 쏙쏙 골라 선택하세요
      </h5>

      <div className={styles.serviceListItem}>
        {serviceItems.map((item, index) => (
          <React.Fragment key={index}>
            <ServiceItem icon={item.icon} textUp={item.textUp} textDown={item.textDown} />
            {index < serviceItems.length - 1 && (
              <Image
                className={styles.plusIcon}
                src="/icons/black-plus.svg"
                alt="plus icon"
                unoptimized
                width={16}
                height={16}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <ToggleModal>
        <button className={`${stylesBtn?.Button} ${stylesBtn?.ButtonOrange}`}>
          <span>총무 업무 무료 컨설팅받기</span>
          <Image src="/icons/arrow-right-up.svg" alt="arrow right up icon" width={20} height={20} />
        </button>
      </ToggleModal>
    </div>
  );
}
