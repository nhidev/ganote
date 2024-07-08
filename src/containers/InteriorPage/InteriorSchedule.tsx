'use client';

import Image from 'next/image';
import { memo } from 'react';

import { Default, Mobile } from '@/components';
import styles from './interiorSchedule.module.scss';

const InteriorSchedule = memo(() => {
  return (
    <section className={styles.InteriorSchedule}>
      <div className="interiorSchedule_b-container">
        <div className="interiorSchedule_b-head">
          <label>
            <Image width={20} height={20} src="/iconsN/alarm_on_b.svg" alt="icon" />
            <p>준공일정</p>
          </label>
          <h2>총무의 노하우로 단기간에</h2>
          <h2>1개월 준공일정</h2>
        </div>

        <div className="interiorSchedule_b-body">
          <div className="interiorSchedule-title">
            <h3>
              <span>{`걱정 없이 \n3개월 안에 끝내는 \n프로젝트`}</span>
            </h3>
            <h4>
            <Default>
              <span>{`담당자에 물어볼 때마다 \n늘어지는 일정 없이 \n제 시간에`}</span>
            </Default>
            <Mobile>
              <span>{`담당자에 물어볼 때마다 \n늘어지는 일정 없이 제 시간에`}</span>
            </Mobile>
            </h4>
          </div>
          <div className="interiorSchedule-content fade-up-element">
            <ul>
              <li>
                <p>
                  <span>🤝🏻</span>
                  {`전문가 \n상담`}
                </p>
              </li>
              <li>
                <p>
                  <span>📐</span>
                  {`설계 및 \n견적 제안`}
                </p>
                <label>
                  <p>견적 확정에 시간이 더 필요할 것 같아요</p>
                </label>
              </li>
              <li>
                <p>
                  <span>🛠️</span>
                  {`설계 및 \n견적 제안`}
                </p>
              </li>
              <li>
                <p>
                  <span>🏢</span>
                  {`사무실 \nRE-OPEN`}
                </p>
              </li>
            </ul>
            <div className="interiorSchedule-emoji">
              <Mobile>
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '64rem', height: 'auto' }}
                  src="/iconsN/emoji-1-mb.png"
                  quality={100}
                  alt="emoji"
                />
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '64rem', height: 'auto' }}
                  src="/iconsN/emoji-2-mb.png"
                  quality={100}
                  alt="emoji"
                />
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '64rem', height: 'auto' }}
                  src="/iconsN/emoji-3-mb.png"
                  quality={100}
                  alt="emoji"
                />
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '64rem', height: 'auto' }}
                  src="/iconsN/emoji-4-mb.png"
                  quality={100}
                  alt="emoji"
                />
              </Mobile>

              <Default>
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '156rem', height: 'auto' }}
                  src="/iconsN/emoji-1-d.png"
                  quality={100}
                  alt="emoji"
                />
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '156rem', height: 'auto' }}
                  src="/iconsN/emoji-2-d.png"
                  quality={100}
                  alt="emoji"
                />
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '156rem', height: 'auto' }}
                  src="/iconsN/emoji-3-d.png"
                  quality={100}
                  alt="emoji"
                />
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '156rem', height: 'auto' }}
                  src="/iconsN/emoji-4-d.png"
                  quality={100}
                  alt="emoji"
                />
              </Default>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default InteriorSchedule;
