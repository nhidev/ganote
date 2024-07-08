import { memo } from 'react';

import { InventorySavingBlock, ReportDocument, RequestBlock } from '@/components';
import styles from './saasSection.module.scss';

const data = [
  {
    icon: '🚨',
    text: '재고 부족',
  },
  {
    icon: '📒',
    text: '자동 발주',
  },
  {
    icon: '👍🏻',
    text: '사무실 내 \n셋팅 완료!',
  },
];

const block1Data: any = {
  title: '메세지 보내기',
  subTitle: '리퀘스트 타입을 선택한 후 요청 내용을 작성해주세요 \n작성이 완료된 메세지는 어드민에게 전송됩니다',
  detailTitle: '내용',
  detailDescription: '요청사항을 입력해주세요',
  dropdownTitle: '리퀘스트 타입',
  dropdownText: '오피스 클리닝',
  sub: '요청 사항 메시지 발송',
};
const block2Data: any = {
  title: '처리 중인 요청사항',
  subTitle: 'Request in Progress',
  items: [
    {
      title: '오피스 클리닝',
      value: 1,
    },
    {
      title: 'Q&A',
      value: 8,
    },
    {
      title: '긴급',
      value: 5,
      highlight: true,
    },
    {
      title: '불만사항',
      value: 0,
    },
  ],
  sub: '작업 과정은 대시보드에서 확인',
};

const SaasSection = memo(({ className = '' }: SaasSectionProps) => {
  return (
    <section className={`${styles.SaasSection} ${className}`}>
      <div className="title-box">
        <h2>{`총무업무 통합 \nSaaS 솔루션 제공`}</h2>
        <h2 className="title-bottom">{`이제는 총무노트로 \n업무 효율을 높여보세요`}</h2>
      </div>
      <div className="saas-container">
        <InventorySavingBlock
          className={`${styles.Saas_InventorySavingBlock} fade-up-element`}
          title={`재고 관리 시간 \n80% 절감`}
          subTitle="일정량은 항상 채워 두는 안전 재고 시스템"
          items={data}
          sub="일정량 이하일 때 자동 발주"
          note="* 월별 소모량만큼만 실비로 청구됩니다."
        />
        <ReportDocument
          title={`보고 문서도 \n총무노트가`}
          subTitle="청소 전후 사진부터, 월간 리포트 제공"
          className={`${styles.Saas_ReportDocument} fade-up-element`}
        />
        <RequestBlock
          className={`${styles.Saas_RequestBlock} fade-up-element`}
          title={`추가 요청도 \n쉽게, 한번에`}
          subTitle={`담당자 부재, 연락 두절, 늦은 피드백 없이 \n대시보드 통해 한번에`}
          block1={block1Data}
          block2={block2Data}
        />
      </div>
    </section>
  );
});

interface SaasSectionProps {
  className?: string;
}

export default SaasSection;
