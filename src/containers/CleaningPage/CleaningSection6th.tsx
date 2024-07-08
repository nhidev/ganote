'use client';

import { memo } from 'react';
import { MEDIA_SIZE } from '@/utils/constants';
import { useMediaQuery } from 'react-responsive';
import { CleanCard, RequestBlock, SchechuleBlock } from '@/components';
import styles from './cleaningSection6th.module.scss';


const block1Data: any = {
  title: '메세지 보내기',
  subTitle: '리퀘스트 타입을 선택한 후 요청 내용을 작성해주세요 \n작성이 완료된 메세지는 어드민에게 전송됩니다',
  detailTitle: '내용',
  detailDescription: '요청사항을 입력해주세요',
  dropdownTitle: '리퀘스트 타입',
  dropdownText: '오피스 클리닝',
  sub: '',
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
  sub: '',
};


const CleaningSection6th = memo(() => {
  const isMobile = useMediaQuery({ maxWidth: MEDIA_SIZE.tablet - 1 });

  const cleanCardData = [
    {
      title: isMobile ? `청소 도구,\n총무노트가 준비합니다` : `청소 도구,\n총무노트가\n준비합니다`,
      text: isMobile ? `사무실 특성에 맞는 청소 전문 장비\n저희가 준비할게요` : `사무실 특성에 맞는\n청소 전문 장비\n저희가 준비할게요`,
      image: 'cleaning-section6th-1.svg',
      imageWidth: 133,
      imageHeight: 123,
    },
    {
      title: `집기 파손\n걱정마세요`,
      text: isMobile ? `영업배상 책임보험에 가입되어 있어요\n안심하고 이용하세요` : `영업배상 책임보험에\n가입되어 있어요\n안심하고 이용하세요`,
      image: 'cleaning-section6th-2.svg',
      imageWidth: 132,
      imageHeight: 96,
    },
    {
      title: isMobile ? `서비스 조정도\n유연하게` : `서비스 조정도 유연하게`,
      text: `내부 사정으로 서비스 범위가 달라졌을 때, 계약 조정이 어려워 고생하셨나요?\n총무노트는 총무님을 1순위로 생각합니다!\n유연한 협의 뿐 아니라 빠른 현장 반영으로 고민의 시간을 줄여드려요.`,
      image: 'cleaning-section6th-3.svg',
      imageWidth: 148,
      imageHeight: 130,
    },
    {
      title: isMobile ? `어떤 증빙도 OK` : `어떤 증빙도 \nOK`,
      text: `결제 증빙에 필요한\n세금계산서와 견적서, 현금영수증 발행도\n물론 가능해요`,
      image: "cleaning-section6th-4.svg",
      imageWidth: 158,
      imageHeight: 96,
    },
    {
      title: `철저한 \n보안 관리`,
      text: isMobile ? `모든 인원은 보안유지협약서 작성 후 현장에 투입됩니다.` : `영업배상 책임보험에\n가입되어 있어요\n안심하고 이용하세요`,
      subText: `*법인카드 결제 가능`,
      image: 'cleaning-section6th-5.svg',
      imageWidth: 140,
      imageHeight: 130,
    }
  ]

  return (
    <section className={styles.CleaningSection6th}>
      <div className={styles.CleaningSection6thTop}>
        <div className="cleaningSection6thTop_container">
          <div className="cleaningSection6thTop_b-head">
            <h2>다른 클리닝 서비스와 비교해보세요</h2>
            <h2>총무노트가 자신 있는 이유</h2>
          </div>

        </div>
      </div>
      <div className={styles.CleaningSection6thMiddle}>
        <div className="cleaningSection6thMiddle_container">
          <div className="cleaningSection6thMiddle_b-top">
            <div className="cleaningSection6thMiddle_b-left">
              <SchechuleBlock className="cleaning-schechule-block fade-up-element" />
            </div>
            <div className="cleaningSection6thMiddle_b-right">
              <CleanCard className="clean-card-top" title={cleanCardData[0].title} text={cleanCardData[0].text} image={cleanCardData[0].image} imageWidth={cleanCardData[0].imageWidth} imageHeight={cleanCardData[0].imageHeight} />
              <CleanCard className="clean-card-bot" title={cleanCardData[1].title} text={cleanCardData[1].text} image={cleanCardData[1].image} imageWidth={cleanCardData[1].imageWidth} imageHeight={cleanCardData[1].imageHeight} />
            </div>
          </div>
          <div className="cleaningSection6thMiddle_b-bot fade-up-element">
            <CleanCard className='clean-card-full' title={cleanCardData[2].title} text={cleanCardData[2].text} image={cleanCardData[2].image} imageWidth={cleanCardData[2].imageWidth} imageHeight={cleanCardData[2].imageHeight} />
          </div>
        </div>
      </div>

      <div className={`${styles.CleaningSection6thFoot} fade-up-element`}>
        <div className="cleaningSection6thFooot_container">
          <div className="cleaningSection6thFoot_b-top">
            <div className="cleaningSection6thFoot_b-left">
              <CleanCard className="clean-card-top fade-up-element" title={cleanCardData[3].title} text={cleanCardData[3].text} image={cleanCardData[3].image} imageWidth={cleanCardData[3].imageWidth} imageHeight={cleanCardData[3].imageHeight} />
              {!isMobile &&
                <CleanCard className="clean-card-bot fade-up-element" title={cleanCardData[4].title} text={cleanCardData[4].text} subText={cleanCardData[4].subText} image={cleanCardData[4].image} imageWidth={cleanCardData[4].imageWidth} imageHeight={cleanCardData[4].imageHeight} />
              }
            </div>
            <div className="cleaningSection6thFoot_b-right">
              <CleanCard className="clean-card-col fade-up-element" title={`100% 만족 보장 \n사무실 전문 매니저 교육`} text={`담당자 상관 없이 100% 만족스러운 청소 퀄리티,\n총무노트는 각 사무실의 특징에 대해\n2주 이상 교육 받은 전문 매니저님들로 구성되어 있어요`} image="cleaning-section6th-5.png" imageWidth={256} imageHeight={160} image2="cleaning-section6th-6.png" image2Width={256} image2Height={160} />
              {isMobile &&
                <CleanCard className="clean-card-bot fade-up-element" title={cleanCardData[4].title} text={cleanCardData[4].text} subText={cleanCardData[4].subText} image={cleanCardData[4].image} imageWidth={cleanCardData[4].imageWidth} imageHeight={cleanCardData[4].imageHeight} />
              }
            </div>
          </div>
          <div className="cleaningSection6thFoot_b-bot fade-up-element">
            <div className="cleaningSection6thFoot_b-head">
              <h3>{`추가요청도\n메시지로 빠르고 간편하게`}</h3>
              <p>{`전화해도 받지 않던 전화,\n늦은 피드백으로 업무에 집중하지 못하셨다구요?\n총무노트는 1시간 내의 빠른 메세지 답변을 드리기에 \n믿고 안심하며 사용하실 수 있어요`}</p>
            </div>
            <RequestBlock
              className='cleaning-request-block'
              title=""
              titleMobile={`담당자 부재, 연락 두절, \n늦은 피드백 등으로 \n마음고생하던 추가 요청도 \n정말 쉬워집니다.`}
              block1={block1Data}
              block2={block2Data}
            />
          </div>
        </div>

      </div>
    </section>
  )
});

export default CleaningSection6th;
