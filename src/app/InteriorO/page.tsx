import type { Metadata } from 'next';

import InteriorIntroduction from '@/components/Introduction/interiorIntroduction';
import Advertisement from '../../components/Advertisement/advertisement';
import AdvertisementCompany from '../../components/Advertisement/advertisementCompany';
import DesignCourse from '../../components/DesignCourse/designCourse';
import FooterInterior from '../../components/Footer/footerInterior';
import LeadForm from '../../components/Forms/LeadForm/leadForm';
import Header from '../../components/Header/header';
import Modal from '../../components/Modal/modal';
import Partners from '../../components/Partners/partners';
import PopularInteriorsRoom from '../../components/PopularInteriorsRoom/popularInteriorsRoom';
import ServicePopularInteriors from '../../components/ServicePopularInteriors/servicePopularInteriors';
import WorkProcess from '../../components/WorkProcess/workProcess';
import styles from '../page.module.scss';

export const metadata: Metadata = {
  title: '총무노트 - 사무실 인테리어',
  description: '비용은 줄이고 공간 효율성은 높이세요. 우리 회사에 딱 맞는 인테리어 레이아웃을 제안드립니다.',
  keywords:
    'ganote, 오피스이전, 사무실인테리어, 공유오피스인테리어, 오피스인테리어, 강남사무실인테리어, 사무공간인테리어, 사옥인테리어, 사무실인테리어비용, 사무실인테리어견적서, 사무실리모델링업체, 사무실인테리어회사, 사무실철거, 사무실원상복구',
};

export default function Interior() {
  return (
    <div className={styles.Layout}>
      <Header />
      <main className={styles.main}>
        <InteriorIntroduction />
        <Partners />
        <AdvertisementCompany />
        <WorkProcess />
        <Advertisement />
        <PopularInteriorsRoom />
        <ServicePopularInteriors />
        <DesignCourse />
        <Modal>
          <LeadForm />
        </Modal>
        <FooterInterior />
      </main>
    </div>
  );
}
