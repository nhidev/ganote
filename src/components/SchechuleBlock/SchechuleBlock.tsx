import React from 'react';

import styles from './schechuleBlock.module.scss';

const areaData = [
  {
    name: '회사 입구',
  },
  {
    name: '라운지',
    isOpacity: true,
  },
  {
    name: '대회의실',
    isOpacity: true,
  },
  {
    name: '탕비실',
    isOpacity: true,
  },
  {
    name: '화장실',
  },
  {
    name: '직원 휴게공간',
  },
];

const timeData = [
  {
    title: '월',
    from: {
      h: '07',
      m: '30',
      tail: 'AM',
    },
    to: {
      h: '08',
      m: '30',
      tail: 'PM',
    },
  },
  {
    title: '화',
    from: {
      h: '09',
      m: '30',
      tail: 'PM',
    },
    to: {
      h: '11',
      m: '30',
      tail: 'PM',
    },
  },
  {
    title: '수',
    from: {
      h: '09',
      m: '30',
      tail: 'AM',
    },
    to: {
      h: '08',
      m: '30',
      tail: 'PM',
    },
  },
  {
    title: '목',
    from: {
      h: '09',
      m: '30',
      tail: 'AM',
    },
    to: {
      h: '11',
      m: '30',
      tail: 'PM',
    },
  },
];

export default function SchechuleBlock({className = ''}: SchechuleBlockProps) {
  return (
    <div className={`${styles.SchechuleBlock} ${className}`}>
      <div className="schechuleBlock_b-head">
        <h3>
          원하는 시간과 범위로
          필요한 만큼만
          선택하세요
        </h3>
        <p>청소 일정 30분 단위로 설정</p>
      </div>
      <div className="schechuleBlock_b-body">
        <ul>
          {areaData.map(item => (
            <li className={item.isOpacity ? 'hasOpacity' : ''} key={item.name}>
              <p>
                <span>{item.name}</span>
              </p>
            </li>
          ))}
        </ul>
        <div>
          {timeData.map(item => (
            <div className="schechuleBlock_b-time" key={item.title}>
              <p className="schechuleBlock-title">{item.title}</p>
              <div className="schechuleBlock-time">
                <p>
                  <span>{item.from.h}</span> : <span>{item.from.m}</span>
                  <span>{item.from.tail}</span>
                </p>
                ~
                <p>
                  <span>{item.to.h}</span> : <span>{item.to.m}</span>
                  <span>{item.to.tail}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SchechuleBlockProps {
  className?: string;
}
