'use client';

import Lottie from 'lottie-react';

import LottieJson from '../../../public/jsons/Lottie.json';
import stylesBtn from '../Button/Button.module.scss';
import ToggleModal from '../ToggleModal/toggleModal';
import styles from './successModal.module.scss';

const SuccessModal = () => (
  <div className={styles?.SuccessModal}>
    <Lottie animationData={LottieJson} loop style={{ width: 102, height: 102 }} />
    <h3 className={styles?.SuccessTitle}>상담 문의가 접수되었습니다.</h3>
    <p className={styles?.SuccessDesc}>남겨주신 연락처로 담당자가 곧 연락드리겠습니다.</p>
    <ToggleModal>
      <button className={`${stylesBtn.Button} ${stylesBtn.ButtonOrange}`}>확인</button>
    </ToggleModal>
  </div>
);

export default SuccessModal;
