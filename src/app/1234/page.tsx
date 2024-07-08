import Description from '@/components/Description/description';
import Footer from '@/components/Footer/footer';
import LeadForm from '@/components/Forms/LeadForm/leadForm';
import Header from '@/components/Header/header';
import InteriorServiceIntro from '@/components/InteriorServiceIntro/interiorServiceIntro';
import IntroductionSection from '@/components/Introduction/introduction';
import Modal from '@/components/Modal/modal';
import ServiceDetails from '@/components/ServiceDetails/serviceDetails';
import ServiceSelection from '@/components/ServiceSelection/serviceSelection';
import SolutionsSection from '@/components/Solutions/SolutionsSection';
import styles from '../page.module.scss';

export default function Home() {
  return (
    <div className={styles.Layout}>
      <Header />
      <main className={styles.main}>
        <IntroductionSection />
        <SolutionsSection />
        <ServiceSelection />
        <InteriorServiceIntro />
        <ServiceDetails />
        <Description />
        <div className={styles.FooterInformation}>
          <span className={`${styles.information} ${styles.BorderRight}`}>주식회사 이십사쩜칠</span>
          <span className={`${styles.information} ${styles.BorderRight}`}>대표 이선욱</span>
          <span className={`${styles.information} ${styles.BorderRight}`}>사업자번호 864-86-02783</span>
          <span className={styles.information}>고객 센터 070-4102-2407</span>
        </div>
        <Modal>
          <LeadForm />
        </Modal>
      </main>
      <Footer />
    </div>
  );
}