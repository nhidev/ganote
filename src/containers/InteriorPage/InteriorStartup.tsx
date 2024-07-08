'use client';

import { memo } from 'react';

import styles from './interiorStartup.module.scss';

const data = [
  {
    id: 1,
    image: '/imagesN/startup-1.png',
  },
  {
    id: 2,
    image: '/imagesN/startup-2.png',
  },
  {
    id: 3,
    image: '/imagesN/startup-3.png',
  },
  {
    id: 4,
    image: '/imagesN/startup-4.png',
  },
  {
    id: 5,
    image: '/imagesN/startup-5.png',
  },
];

const data2 = [
  {
    id: 6,
    image: '/imagesN/startup-6.png',
  },
  {
    id: 7,
    image: '/imagesN/startup-7.png',
  },
  {
    id: 8,
    image: '/imagesN/startup-8.png',
  },
  {
    id: 9,
    image: '/imagesN/startup-9.png',
  },
  {
    id: 0,
    image: '/imagesN/startup-10.png',
  },
];

const loop = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const InteriorStartup = memo(() => {
  return (
    <section className={styles.InteriorStartup}>
      <div className="interiorStartup_b-container">
        <div className="interiorStartup_b-head">
          <h2>
            <span> 50개 넘는</span>
            스타트업부터 대기업이
          </h2>
          <h4>{`사무실 인테리어 서비스를 \n이용하셨어요`}</h4>
        </div>

        <div className="interiorStartup_b-body">
          <div className="interiorStartup-slider">
            {loop.map(e => (
              <div className="interiorStartup-slider-track" key={e.id}>
                {data.map(item => (
                  <div key={item.id} className="interiorStartup-slide">
                    <img src={item.image} alt="startup" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="interiorStartup-slider">
            {loop.map(e => (
              <div className="interiorStartup-slider-track" key={e.id}>
                {data2.map(item => (
                  <div key={item.id} className="interiorStartup-slide">
                    <img src={item.image} alt="startup" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default InteriorStartup;
