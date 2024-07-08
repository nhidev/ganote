import type { Metadata } from 'next';

import '../styles/index.scss';
import styles from './page.module.scss';

import { Default, ScrollTrigger } from '@/components';

import {
  Footer,
  FixedFooter,
  Header,
  Interior2ndSection,
  InteriorConstruction,
  InteriorConsultationSection,
  InteriorCourse,
  InteriorDocument,
  InteriorHero,
  InteriorOffice,
  InteriorSchedule,
  InteriorStartup,
  OfficePortfolio,
} from '@/containers';
import LeadFormN from '@/containers/Header/LeadForm';

export const metadata: Metadata = {
  metadataBase: new URL('https://ganote.kr'),
  title: '총무노트 - 사무실 인테리어',
  description: '비용은 줄이고 공간 효율성은 높이세요. 우리 회사에 딱 맞는 인테리어 레이아웃을 제안드립니다.',
  keywords:
    'ganote, 오피스이전, 사무실인테리어, 공유오피스인테리어, 오피스인테리어, 강남사무실인테리어, 사무공간인테리어, 사옥인테리어, 사무실인테리어비용, 사무실인테리어견적서, 사무실리모델링업체, 사무실인테리어회사, 사무실철거, 사무실원상복구',
  openGraph: {
    title: '총무노트 - 사무실 인테리어',
    description: '비용은 줄이고 공간 효율성은 높이세요. 우리 회사에 딱 맞는 인테리어 레이아웃을 제안드립니다.',
    images: [
      { 
        url: "/imagesN/meta-interior-page.png",
        alt: "ganote"
      }
    ],
    url: "https://ganote.kr/interior"
  },
};

export default async function Interior() {
  return (
    <>
      <Header />
      <main>
        <InteriorHero />
        <Interior2ndSection />
        <InteriorStartup />
        <InteriorOffice />
        <ScrollTrigger>
          <InteriorSchedule />
          <InteriorConstruction />
          <InteriorDocument className={styles.Interior_InteriorDocument} />
        </ScrollTrigger>
        <OfficePortfolio />
        <InteriorCourse />
        <InteriorConsultationSection />
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn="견적 문의하기" />
    </>
  );
}
