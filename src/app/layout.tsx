import { AntdRegistry } from '@ant-design/nextjs-registry';
import localFont from 'next/font/local';

import type { Metadata, Viewport } from 'next';

import './globals.scss';

import Script from 'next/script';

const Pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ganote.kr'),
  title: '총무노트 - 국내 유일 오피스 전문 GA SaaS 플랫폼',
  description:
    '통합 관리 통합 정산 │ 오피스 클리닝, 인테리어, 사무실 수리 등 수많은 총무의 업무들, 통합하여 효율적으로 일하세요!',
  keywords:
    'ganote, 총무노트, 총무업무, 총무업무메뉴얼, 경리업무, 경리업무메뉴얼, 사무실청소, 사무실간식, 사무실인테리어, 강남사무실인테리어, 공유오피스인테리어, 오피스인테리어, 오피스용품, 사무실청소업체, 사무실 인테리어 공사, 사무실과자, 회사간식추천, 기업간식, 회사탕비실, 직원휴게실, 탕비실과자, 사무실커피머신렌탈, 오피스용품, 사무실정기청소, 사무실입주청소, 사무실관리, 오피스관리, 사무실유지보수, 오피스유지보수',
  icons: {
    icon: '../../public/logo.png',
  },
  verification: {
    other: {
      'facebook-domain-verification': 't9fg7mjs7hx5ydspf16f5qkup7imbf',
      'naver-site-verification': 'bacc449d9ac09a86560417f3b2668802a37597a6',
    },
  },
  openGraph: {
    title: '총무노트 - 국내 유일 오피스 전문 GA SaaS 플랫폼',
    description:
    '통합 관리 통합 정산 │ 오피스 클리닝, 인테리어, 사무실 수리 등 수많은 총무의 업무들, 통합하여 효율적으로 일하세요!',
    images: [
      { 
        url: "/imagesN/meta-main-page.png",
        alt: "ganote"
      }
    ],
    url: "https://ganote.kr"
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${Pretendard?.className} ${Pretendard?.variable}`} suppressHydrationWarning={true}>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T8GJSVBZ');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8GJSVBZ"
            height="0"
            width="0"
            title="ga"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
