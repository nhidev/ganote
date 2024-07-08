import '../styles/index.scss';

import { ScrollTrigger } from '@/components';
import {
  Footer,
  FixedFooter,
  Header,
  OperationChartSection,
  OperationHero,
  OperationSection4th,
  OperationSection5th,
  OperationSection6th,
  OperationSection7th,
  OperationSlider,
} from '@/containers';
import LeadFormN from '@/containers/Header/LeadForm';

export default function Operation() {
  return (
    <>
      <Header />
      <main>
        <OperationHero />
        <OperationSlider />
        <OperationChartSection />
        <ScrollTrigger>
          <OperationSection4th />
          <OperationSection5th />
          <OperationSection6th />
        </ScrollTrigger>
        <OperationSection7th />
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn='무료 상담 신청하기'/>
    </>
  );
}
