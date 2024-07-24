import { Suspense } from 'react';
import styles from './blogLoadable.module.scss';

const BlogLoadable = ({ fallback }: { fallback?: undefined }) => (
  <Suspense fallback={fallback}>
    <section className={`${styles.Loadable}`}>
      <div className='block_top'>
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

      <div className='container'>
        <div className='block_title'>
          <div className="card__text skeleton"></div>
          <div className="card__text skeleton"></div>
        </div>
        <div className='block_grid'>
          <div className="card">
            <div className="card__img skeleton"></div>
            <div className="card__body">
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
            </div>
          </div>
          <div className="card">
            <div className="card__img skeleton"></div>
            <div className="card__body">
              <div className="card__text skeleton"></div>
              <div className="card__text skeleton"></div>
              <div className="card__text skeleton"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Suspense>
);

export default BlogLoadable;
