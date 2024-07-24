/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import withTheme from '@/theme';
import { LineClamp } from '@/components/LineClamp';
import { useGetReviews, IReviewItem, LIMIT } from '@/hooks/useBlogReview';
import { ReviewLoadable } from '@/components';
import styles from './reviewPage.module.scss';

const ReviewList = () => {
  const [offset, setOffset] = useState(0);
  const [reviews, setReviews] = useState<IReviewItem[]>([]);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMore, setLoadingMore] = useState(false);

  const getListReview = useGetReviews;

  useEffect(() => {
    const getListReviewData = async () => {
      try {
        const initialReviews = await getListReview({
          offset,
          limit: LIMIT,
        });

        setReviews(initialReviews.records);
        setOffset((prevOffset) => prevOffset + LIMIT);
        setLoading(false);
        if (Number(initialReviews?.count) < offset + LIMIT) {
          setHasMoreData(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getListReviewData();
  }, []);


  const loadMoreReviews = async () => {
    setLoadingMore(true);
    if (hasMoreData) {
      const apiReviews = await getListReview({
        offset,
        limit: LIMIT,
      });

      if (Number(apiReviews?.count) < offset + LIMIT) {
        setHasMoreData(false);
      }
      setReviews((prevReviews) => [...prevReviews, ...apiReviews.records]);
      setOffset((prevOffset) => prevOffset + LIMIT);
      setLoadingMore(false);
    }
  }

  if (isLoading) return <ReviewLoadable />
  if (!reviews) return <p>No data</p>


  return (
    reviews && reviews.length > 0 ?
      <section className={`${styles.ReviewList}`}>
        <div className='reviewList-container'>
          <div className='reviewList-head'>
            <h1 className='title'>Customer stories</h1>
            <p className='desc'>Discover case studies on how GA Note is being used around the world</p>
          </div>
          <div className='reviewList-body'>
            {reviews?.slice(1).map((item, index) => (
              <article key={index}>
                <Image className='card-image' src={item?.cover_image} quality={100} width={600} height={400} alt='review image' />
                <div className='review-text'>
                  <div className='review-info'>
                    <Image className='company-logo' src={item?.company_logo} quality={100} width={88} height={32} alt='company logo' />
                  </div>
                  <LineClamp text={item?.content} />
                </div>

              </article>
            ))}
          </div>
          {withTheme(
            hasMoreData ?
              <Button
                type="primary"
                className="g-cta-button"
                onClick={loadMoreReviews}
                disabled={isLoadingMore}
              >
                {isLoadingMore ? 'Loading...' : 'More posts'}
              </Button> : <></>

          )}
        </div>
      </section> : <></>

  )
};

export default ReviewList;
