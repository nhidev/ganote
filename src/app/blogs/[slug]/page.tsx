import '../../styles/index.scss';
import {
  Footer,
  FixedFooter,
  Header,
  PostDetail

} from '@/containers';
import LeadFormN from '@/containers/Header/LeadForm';

export default function Post() {
  return (
    <>
      <Header />
      <main>
        <PostDetail />
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn='무료 상담 신청하기' />
    </>
  );
}
