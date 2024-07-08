'use client';

import { Timeline } from 'antd';
import { memo, useState, useEffect } from 'react';

import withTheme from '@/theme';
import styles from './interiorCourse.module.scss';

const data = [
  {
    id: 1,
    title: '상담 신청',
    description: '사무실 인테리어를 논의하는 단계라면 \n총무 노트에 상담을 신청해 주세요',
    isActive: true,
  },
  {
    id: 2,
    title: '현장 실사 & 레이아웃 컨설팅',
    description: '현장 실사를 통해 건물, 사무실 구조를 \n확인하고 레이 아웃을 컨설팅합니다',
  },
  {
    id: 3,
    title: '제안서 전달',
    description: '견적, 공간 레이아웃, 소요 기간 등이 \n포함된 제안서를 전달드립니다',
  },
  {
    id: 4,
    title: '착공 및 준공',
    description: '공사에 착수하고 현장에서 \n생긴 이슈를 대응해 예상 일정에 맞게 \n공사를 마무리합니다',
  },
  {
    id: 5,
    title: '사무실 OPEN',
    description: '사무 공간의 준공 이후 청소가 \n마무리된 후 사무실 이사를 진행합니다',
  },
];

const InteriorCourse = memo(() => {
  const [courseData, setCourseData] = useState(data);

  useEffect(() => {
    animateElementsSequentially(0);
  }, []);

  const animateElementsSequentially = (index: number) => {
    setTimeout(() => {
      const newData = courseData.map((element, i) => ({
        ...element,
        isActive: i === index,
      }));
      setCourseData(newData);

      if (index === courseData.length - 1) {
        // If all elements have been animated, reset the animation
        setTimeout(() => {
          animateElementsSequentially(0);
        }, 2000); // Adjust the delay before resetting
      } else {
        // Continue animating the next element
        animateElementsSequentially(index + 1);
      }
    }, 2000); // Adjust the delay based on your animation duration
  };

  const handleOnclick = (item: any) => {
    const newData = courseData.map(courseItem => {
      if (courseItem.id === item.id) {
        return {
          ...item,
          isActive: true,
        };
      } else {
        return {
          ...courseItem,
          isActive: false,
        };
      }
    });

    setCourseData(newData);
  };

  return (
    <section className={styles.InteriorCourse}>
      <div className="interiorCourse_b-container">
        <div className="interiorCourse_b-head">
          <h2>
            {`총무노트`}
            <span>{`와 함께하는 \n사무실 인테리어 과정`}</span>
          </h2>
        </div>

        <div className="interiorCourse_b-body">
          {withTheme(
            <Timeline
              items={courseData.map(item => ({
                dot: (
                  <button
                    className={`interiorCourse-step ${item.isActive ? 'isActive' : ''}`}
                    // onClick={() => handleOnclick(item)}
                  >
                    {item.id}
                  </button>
                ),
                children: (
                  <div className={`interiorCourse-item ${item.isActive ? 'isActive' : ''}`}>
                    <p className="interiorCourse-title">{item.title}</p>
                    <p className="interiorCourse-desc">{item.description}</p>
                  </div>
                ),
              }))}
            />
          )}
        </div>
      </div>
    </section>
  );
});

export default InteriorCourse;
