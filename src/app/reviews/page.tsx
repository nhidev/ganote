import '../styles/index.scss';
import {
  Footer,
  FixedFooter,
  Header,
  ReviewList

} from '@/containers';
import LeadFormN from '@/containers/Header/LeadForm';

export default function Review() {
  return (
    <>
      <Header />
      <main>
        <ReviewList />
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn='무료 상담 신청하기' />
    </>
  );
}
