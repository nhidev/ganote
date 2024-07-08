'use client';

import Image from 'next/image';
import { useState } from 'react';

import stylesBtn from '../../Button/Button.module.scss';
import PackProcess from '../PackProcess/packProcess';
import styles from './workProcessExpand.module.scss';

const packProcessList = [
  {
    no: 1,
    title: '설계',
    steps: ['3D 투시도', '평면도, 디테일 도면', '전기, 설비 도면', '필요 자재 물량 LIST'],
  },
  {
    no: 2,
    title: '시공',
    steps: ['시공 견적 제안', '시공 진행', '시공 Daliy Report', '1년 간의 A/S'],
  },
];

const tableHeader = ['공사 항목', '총무노트', 'A업체', 'B업체'];
const tableData = [
  {
    title: '설비 및 폐기물',
    data: [
      ['처리비', 'XXX,XXX', 'XXX,XXX', 'XXX,XXX'],
      ['잡자재', 'XXX,XXX', 'XXX,XXX', 'XXX,XXX'],
      ['작업반장', 'XXX,XXX', 'XXX,XXX', 'XXX,XXX'],
    ],
  },
  {
    title: '전기 공사',
    data: [
      ['전등 - 전구포함', 'XXX,XXX', 'XXX,XXX', 'XXX,XXX'],
      ['T5', 'XXX,XXX', 'XXX,XXX', 'XXX,XXX'],
      ['내선 전공', 'XXX,XXX', 'XXX,XXX', 'XXX,XXX'],
    ],
  },
];
const WorkProcessExpand = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className={styles?.Expand}>
      <button
        className={`${stylesBtn?.Button} ${
          expand ? stylesBtn?.ButtonOrangeActive : stylesBtn?.ButtonOrange
        } ${styles?.ExpandBtn}`}
        onClick={() => {
          setExpand(!expand);
        }}
      >
        설계 PACK 제공 자료 확인{' '}
        <Image src={expand ? '/icons/up-icon.svg' : '/icons/down-icon.svg'} width={20} height={20} alt="Sent" />
      </button>
      {expand && (
        <>
          <div className={styles?.Process}>
            {packProcessList?.map((item, index) => <PackProcess key={index} packProcess={item} />)}
            <Image src="/images/expand-line.png" alt="Line" width={1} height={200} className={styles?.BoundaryLine} />
          </div>
          <div className={styles?.Table}>
            <div className={`${styles?.TableRow} ${styles?.RowHeader}`}>
              {tableHeader?.map((item, index) => (
                <p key={index} className={`${styles?.TableData} ${styles?.DataHeader}`}>
                  {item}
                </p>
              ))}
            </div>
            {tableData?.map((item, index) => (
              <div key={index}>
                <p className={styles?.TitleRow}>
                  {index + 1}. {item?.title}
                </p>
                {item?.data?.map((dataRow, indexRow) => (
                  <div key={indexRow} className={`${styles?.TableRow} ${styles?.RowData}`}>
                    {dataRow?.map((data, indexData) => (
                      <p className={`${styles?.TableData} ${styles?.DataItem}`} key={indexData}>
                        {data}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className={styles?.TableCaption}>
            <span>공사 항목과 규격, 수량 모두 첨부된 문서 제공되어 <br />타 업체와 금액 비교 가능</span>
          </p>
        </>
      )}
    </div>
  );
};

export default WorkProcessExpand;
