'use client';
import { useGetPostDetail } from '@/hooks/useBlogReview';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { formatDate } from '@/utils';

import styles from './postDetail.module.scss';

const PostDetail = () => {
  const params = useParams();
  const { data } = useGetPostDetail(Number(params.slug));

  return (
    <section className={`${styles.PostDetail}`}>
      {data ? <>
        <div className='postDetail-container'>
          <div className='postDetail-head'>
            <h1 className='title'>{data.title}</h1>
            <p className='date'>{formatDate(data.create_date)}</p>
          </div>

          <div className='postDetail-body'>
            <Image className='banner' width={1280} height={853} src={data.cover_image} priority alt="banner post" />
            <div className='content' dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      </> : <></>}

    </section>
  )
};

export default PostDetail;
