/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'antd';
import withTheme from '@/theme';
import { BlogLoadable } from '@/components';
import { useGetListPost, IPostItem, POSTLIMIT } from '@/hooks/useBlogReview';
import { ROUTE, formatDate } from '@/utils';
import styles from './postList.module.scss';

const PostList = () => {
  const [offset, setOffset] = useState(0);
  const [posts, setPosts] = useState<IPostItem[]>([]);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingMore, setLoadingMore] = useState(false);

  const getListPost = useGetListPost;

  useEffect(() => {
    const getListPostData = async () => {
      try {
        const initialPosts = await getListPost({
          offset,
          limit: POSTLIMIT + 1,
        });

        setPosts(initialPosts.records);
        setOffset((prevOffset) => prevOffset + POSTLIMIT + 1);
        setLoading(false);
        if (Number(initialPosts?.count) < offset + POSTLIMIT + 1) {
          setHasMoreData(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getListPostData();
  }, []);


  const loadMorePosts = async () => {
    setLoadingMore(true);
    if (hasMoreData) {
      const apiPosts = await getListPost({
        offset,
        limit: POSTLIMIT,
      });

      if (Number(apiPosts?.count) < offset + POSTLIMIT) {
        setHasMoreData(false);
      }
      setPosts((prevPosts) => [...prevPosts, ...apiPosts.records]);
      setOffset((prevOffset) => prevOffset + POSTLIMIT);
      setLoadingMore(false);
    }
  }

  if (isLoading) return <BlogLoadable />
  if (!posts) return <p>No data</p>

  return (
    posts && posts.length > 0 ?
      <>
        <section className={`${styles.FeaturedPost}`
        }>
          <div className="hero-container">
            {posts[0] ? <>
              <Link href={`${ROUTE.BLOGS}/${posts[0].id}`} className="hero_b-left">
                <Image width={720} height={480} src={posts[0].cover_image} priority alt="featured post" />
              </Link>
              <div className="hero_b-right">
                <Link href={`${ROUTE.BLOGS}/${posts[0].id}`}>
                  <h1 className='title'>{posts[0].title}</h1>
                </Link>
                <div className='desc' dangerouslySetInnerHTML={{ __html: posts[0].content?.replace(/<[^>]+>/g, '') }} />
                <div className='date'>{formatDate(posts[0].create_date)}
                </div>
              </div>
            </> : <></>
            }
          </div>
        </section >
        <section className={styles.PostList}>
          <div className='postList-container'>
            <div className='postList-head'>
              <h2>BLOG</h2>
              <p className='desc'>총무들에게 꼭 필요한 팁 부터 총무노트 서비스 정보까지</p>
            </div>
            <div className='postList-body'>
              {posts?.slice(1).map((item, index) => (
                <article key={index}>
                  <Link href={`${ROUTE.BLOGS}/${item?.id}`}>
                    <Image src={item.cover_image} quality={100} width={400} height={266} alt={item.title} />
                  </Link>
                  <Link href={`${ROUTE.BLOGS}/${item?.id}`}>
                    <h4>{item.title}</h4>
                  </Link>
                  <p>{formatDate(item.create_date)}</p>
                </article>
              ))}
            </div>
            {withTheme(
              hasMoreData ?
                <Button
                  type="primary"
                  className="g-cta-button"
                  onClick={loadMorePosts}
                  disabled={isLoadingMore}
                >
                  {isLoadingMore ? '로딩중...' : '더보기'}
                </Button> : <></>

            )}
          </div>
        </section></> : <></>
  )
};

export default PostList;
