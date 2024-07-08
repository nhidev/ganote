import '../styles/index.scss';
import { ScrollTrigger } from '@/components';
import {
  Footer,
  FixedFooter,
  Header,
  CleaningHero,
  CleaningSection,
  CleaningSection2nd,
  CleaningSection3rd,
  CleaningSection4th,
  CleaningSection5th,
  CleaningSection6th,
  CleaningSection7th,
  CleaningSection8th,
  CleaningSection9th,
  CleaningSection10th,
  CleaningSection11th
} from '@/containers';
import LeadFormN from '@/containers/Header/LeadForm';

export default function Operation() {
  return (
    <>
      <Header />
      <main>
        <CleaningHero />
        <CleaningSection />
        <ScrollTrigger>
          <CleaningSection2nd />
          <CleaningSection3rd />
          <CleaningSection4th />
          <CleaningSection5th />
          <CleaningSection6th />
          <CleaningSection7th />
          <CleaningSection8th />
          <CleaningSection9th/>
          <CleaningSection10th/>
          <CleaningSection11th/>
        </ScrollTrigger>
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn='무료 상담 신청하기' />
    </>
  );
}
