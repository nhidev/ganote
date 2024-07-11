'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CleanBlock, EducationBlock, MessageTooltip, RequestBlock, SchechuleBlock } from '@/components';
import { ROUTE } from '@/utils/constants';
import styles from './operationSection4th.module.scss';

const messages = [
  {
    placement: 'right',
    content: '청소 용품도 총무가 준비? \n너무 번거로워요😩',
  },
  {
    placement: 'left',
    content: '어제는 화장실이,  \n오늘은 회의실 청소가 제대로 안 된 것 같아요',
  },
  {
    placement: 'left',
    content: 'E/V 홀, 냉장고, 개인 휴지통 \n청소 불포함 영역이 너무 많아요',
  },
  {
    placement: 'right',
    content: '청소 퀄리티가 들쭉날쭉해요👿',
  },
  {
    placement: 'right',
    content: '오늘 근무하시는 분이 \n너무 늦게 출근하셨어요😰',
  },
  {
    placement: 'right',
    content: '갑자기 화장실 청소가 필요한데 \n처리할 수 있나요?🤔',
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

const OperationSection4th = memo(() => (
  <section className={styles.OperationSection4th} id="office-cleaning">
    <div className={styles.OperationSection4thTop}>
      <div className="operationSection4thTop_container">
        <div className="operationSection4thTop_b-head">
          <h2>직원 불만이 확 줄어드는</h2>
          <h2>오피스 클리닝</h2>
          <Link href={ROUTE.CLEANING} className={styles.cleaningButton}>
            <span>더 자세히 보기</span>
            <Image width={16} height={16} src="/iconsN/ic-arrow-right.svg" alt="icon" />
          </Link>
        </div>
        <div className="operationSection4thTop_b-body">
          {messages.map((item: any, index) => (
            <MessageTooltip placement={item.placement} key={item.content + index} className="tooltip-item">
              {item.content}
            </MessageTooltip>
          ))}
        </div>
      </div>
    </div>

    <div className={styles.Line}>
      <i />
    </div>
    <div className={styles.OperationSection4thMiddle}>
      <div className="operationSection4thMiddle_container">
        <div className="operationSection4thMiddle_b-left">
          <SchechuleBlock className="fade-up-element" />
        </div>
        <div className="operationSection4thMiddle_b-right">
          <CleanBlock className="operationSection4thMiddle-cleanBlock fade-up-element" />
          <EducationBlock className="fade-up-element" />
        </div>
      </div>
    </div>
    <div className={`${styles.OperationSection4thFoot} fade-up-element`}>
      <RequestBlock
        title={`담당자 부재, 연락 두절, 늦은 피드백 등으로 \n마음고생하던 추가 요청도 정말 쉬워집니다.`}
        titleMobile={`담당자 부재, 연락 두절, \n늦은 피드백 등으로 \n마음고생하던 추가 요청도 \n정말 쉬워집니다.`}
        block1={block1Data}
        block2={block2Data}
      />
      <Link href={ROUTE.CLEANING} className={styles.cleaningButton}>
        <span>+ 더 자세히 알아보기</span>
      </Link>
    </div>
  </section>
));

export default OperationSection4th;
