import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ganote.kr'),
  title: '총무노트 - 사무실 운영 서비스',
  description:
    '사무실 관련 이슈는 모두 총무 몫? 사무실 청소부터 직원 복지 서비스까지, 총무노트가 10년간의 노하우로 운영합니다.',
  keywords:
    'ganote, 총무업무, 총무업무메뉴얼, 경리업무, 경리업무메뉴얼, 사무실청소, 사무실간식, 사무실관리, 오피스관리, 사무실청소용역, 사무실청소견적, 정기청소업체, 사무실입주청소업체, 사무실과자, 회사간식추천, 기업간식, 회사탕비실, 직원휴게실, 탕비실과자, 사무실커피머신렌탈, 오피스용품, 사무실청소, 사무실입주청소, 사무실관리, 오피스관리, 사무실유지보수, 오피스유지보수',
  openGraph: {
    title: '총무노트 - 사무실 운영 서비스',
    description:
    '사무실 관련 이슈는 모두 총무 몫? 사무실 청소부터 직원 복지 서비스까지, 총무노트가 10년간의 노하우로 운영합니다.',
    images: [
      { 
        url: "/imagesN/meta-operation-page.png",
        alt: "ganote"
      }
    ],
    url: "https://ganote.kr/cleaning"
  },
};

export default function cleaningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
