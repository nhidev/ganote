import { Suspense } from 'react';
import styles from './reviewLoadable.module.scss';

const ReviewLoadable = ({ fallback }: { fallback?: undefined }) => (
  <Suspense fallback={fallback}>
    <section className={`${styles.Loadable}`}>

      <div className='container'>
        <div className='block_title'>
          <div className="card__text skeleton"></div>
          <div className="card__text skeleton"></div>
        </div>
        <div className="card">
          <div className="card__img skeleton"></div>
          <div className="card__body">
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
          </div>
        </div>
        <div className="card">
          <div className="card__img skeleton"></div>
          <div className="card__body">
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
          </div>
        </div>
        <div className="card">
          <div className="card__img skeleton"></div>
          <div className="card__body">
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
          </div>
        </div>
        <div className="card">
          <div className="card__img skeleton"></div>
          <div className="card__body">
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
            <div className="card__text skeleton"></div>
          </div>
        </div>
      </div>
    </section>

  </Suspense>
);

export default ReviewLoadable;
