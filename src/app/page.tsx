import { ScrollTrigger } from '@/components';
import { Footer, Header, FixedFooter } from '@/containers';
import {
  BenefitsSection,
  GeneralNoteSection,
  IntroductionSection,
  NoteServicesSection,
  // OfficeInteriorSection,
  OperationsManagementSection,
  SaasSection,
  ServiceSection,
  SurveySection,
} from '@/containers/HomeN';

import './styles/index.scss';

import LeadFormN from '@/containers/Header/LeadForm';

export default function HomeN() {
  return (
    <>
      <Header />
      <main>
        <IntroductionSection />
        <SurveySection />
        <ScrollTrigger>
          <ServiceSection />
          <SaasSection />
          <BenefitsSection />
        </ScrollTrigger>
        <NoteServicesSection />
        <OperationsManagementSection />
        {/* <OfficeInteriorSection /> */}
        <GeneralNoteSection />
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn='무료 상담하기'/>
    </>
  );
}
