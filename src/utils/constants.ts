/* eslint-disable @typescript-eslint/naming-convention */
export const ROUTE = {
  HOME: '/',
  OPERATION: '/operation',
  INTERIOR: '/interior',
  CLEANING: '/cleaning',
};
export const MEDIA_SIZE = {
  tablet: 768,
  desktop: 1024,
};

export const SURVEY_LIST = [
  {
    icon: 'boring-face.png',
    text: '비효율적인 구매 프로세스',
    nextText: '협력사 퀄리티 컨트롤의 어려움',
  },
  {
    icon: 'anxious-face.png',
    text: '협력사 퀄리티 컨트롤의 어려움',
    nextText: '임직원 사무실 CS 처리',
  },
  {
    icon: 'exploding-face.png',
    text: '임직원 사무실 CS 처리',
    nextText: '사무실 운영 관리 지원',
  },
  {
    icon: 'crying-face.png',
    text: '사무실 운영 관리 지원',
    nextText: '돌발적인 사무실 시설 문제',
  },
  {
    icon: 'amazing-face.png',
    text: '돌발적인 사무실 시설 문제',
    nextText: '비효율적인 구매 프로세스',
  },
];

export const TAB_CONTENT = [
  {
    id: 'month1',
    title: '1월',
  },
  {
    id: 'month2',
    title: '2월',
  },
  {
    id: 'month3',
    title: '3월',
  },
];

export const COLUMNS_OPERATION = [
  {
    title: '품목명',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '단가',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '품목 사용량',
    dataIndex: 'itemUsage',
    key: 'itemUsage',
  },
];

export const DATA_OPERATION = [
  {
    key: '1',
    name: '종이컵 12oz',
    price: '24,000 원',
    itemUsage: '20',
  },
  {
    key: '2',
    name: '계피원두 (할리스)',
    price: '9,900 원',
    itemUsage: '5',
  },
  {
    key: '3',
    name: '매일우유 바리스타',
    price: '15,000 원',
    itemUsage: '5',
  },
  {
    key: '4',
    name: '물티슈',
    price: '3,000 원',
    itemUsage: '13',
  },
  {
    key: '5',
    name: '복사용지 A4',
    price: '2,500 원',
    itemUsage: '15',
  },
];

export const COLUMNS_SERVICE = [
  {
    title: '품목명',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '단가',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '품목 사용량',
    dataIndex: 'itemUsage',
    key: 'itemUsage',
  },
];

export const DATA_SERVICE = [
  {
    key: '1',
    name: '종이컵 12oz',
    price: '24,000 원',
    itemUsage: '20',
  },
  {
    key: '2',
    name: '계피원두 (할리스)',
    price: '9,900 원',
    itemUsage: '5',
  },
  {
    key: '3',
    name: '매일우유 바리스타',
    price: '3,000 원',
    itemUsage: '5',
  },
  {
    key: '4',
    name: '물티슈',
    price: '15,000 원',
    itemUsage: '13',
  },
  {
    key: '5',
    name: '복사용지 A4',
    price: '2,500 원',
    itemUsage: '15',
  },
];

export const PIE_01_DATA: any = [
  {
    key: '원두 커피',
    type: '원두 커피',
    value: 32,
    color: '#BE7346',
  },
  {
    key: '물티슈',
    type: '물티슈',
    value: 17,
    color: '#FFB25C',
  },
  {
    key: '시리얼',
    type: '시리얼',
    value: 15,
    color: '#FFE8CE',
  },
  {
    key: '보드마카',
    type: '보드마카',
    value: 8,
    color: '#FFF7EF',
  },
  {
    key: '우유',
    type: '우유',
    value: 8,
    color: '#FFF',
  },
  {
    key: '티백',
    type: '티백',
    value: 7,
    color: '#EBD5C7',
  },
  {
    key: '핸드타월',
    type: '핸드타월',
    value: 5,
    color: '#F8F1EC',
  },
  {
    key: 'A4용지',
    type: 'A4용지',
    value: 5,
    color: '#FFF',
  },
  {
    key: '종이컵',
    type: '종이컵',
    value: 4,
    color: '#FFF7EF',
  },
];

export const PIE_02_DATA: any = [
  {
    key: 'TEAM A',
    type: 'TEAM A',
    value: 48,
    color: '#BE7346',
  },
  {
    key: 'TEAM B',
    type: 'TEAM B',
    value: 34,
    color: '#FFB25C',
  },
  {
    key: 'TEAM C',
    type: 'TEAM C',
    value: 16,
    color: '#FFE8CE',
  },
  {
    key: 'TEAM D',
    type: 'TEAM D',
    value: 12,
    color: '#FFF7EF',
  },
  {
    key: 'TEAM E',
    type: 'TEAM E',
    value: 8,
    color: '#FFF',
  },
];

export const PIE_03_DATA: any = [
  {
    key: 1,
    type: '원두 커피',
    value: 37,
    color: '#BE7346',
  },
  {
    key: 2,
    type: '핸드타월',
    value: 26,
    color: '#FFB25C',
  },
  {
    key: 3,
    type: '시리얼',
    value: 25,
    color: '#FFC98D',
  },
  {
    key: 4,
    type: '기타',
    value: 22,
    color: '#FFF7EF',
  },
  {
    key: 5,
    type: '티백',
    value: 12,
    color: '#FFF',
  },
  {
    key: 6,
    type: '물티슈',
    value: 8,
    color: '#EBD5C7',
  },
];

export const PIE_04_DATA: any = [
  {
    key: 1,
    type: '양이 부족함',
    value: 50,
    color: '#BE7346',
  },
  {
    key: 2,
    type: '다양한 종류',
    value: 37,
    color: '#FFB25C',
  },
  {
    key: 3,
    type: '메뉴 변경',
    value: 20,
    color: '#FFF7EF',
  },
  {
    key: 4,
    type: '음료수 추가',
    value: 12,
    color: '#FFF',
  },
];

export const ClEANING_CYCLE = [
  {
    text: {
      subText: '재택 근무가 많은 IT 회사',
      mainText: {
        size: '50평  20명 ',
        time: '주 1회 청소',
      },
    },
    nextText: {
      subText: '보안이 중요한 핀테크 회사',
      mainText: {
        size: '100평  30명 ',
        time: '주 2회 청소',
      },
    },
  },
  {
    text: {
      subText: '보안이 중요한 핀테크 회사',
      mainText: {
        size: '100평  30명 ',
        time: '주 2회 청소',
      },
    },
    nextText: {
      subText: '클라이언트 방문이 많은 광고 회사',
      mainText: {
        size: '1200평  50명 ',
        time: '주 3회 청소',
      },
    },
  },
  {
    text: {
      subText: '클라이언트 방문이 많은 광고 회사',
      mainText: {
        size: '1200평  50명 ',
        time: '주 3회 청소',
      },
    },
    nextText: {
      subText: '연구소 청결이 중요한 제약 회사',
      mainText: {
        size: '500평  100명 ',
        time: '주 3회 청소',
      },
    },
  },
  {
    text: {
      subText: '연구소 청결이 중요한 제약 회사',
      mainText: {
        size: '500평  100명 ',
        time: '주 3회 청소',
      },
    },
    nextText: {
      subText: '재택 근무가 많은 IT 회사',
      mainText: {
        size: '50평  20명  주 ',
        time: '주 1회 청소',
      },
    },
  },
];
