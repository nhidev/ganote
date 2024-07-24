import '../styles/index.scss';
import {
  Footer,
  FixedFooter,
  Header,
  PostList
} from '@/containers';

import LeadFormN from '@/containers/Header/LeadForm';

export default function Blogs() {

  return (
    <>
      <Header />
      <main>
        <PostList />
        <LeadFormN />
      </main >
      <Footer />
      <FixedFooter textBtn='무료 상담 신청하기' />
    </>
  );
}
