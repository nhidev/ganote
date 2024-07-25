import useSWR from 'swr';

import { getAPI, HttpError } from '@/utils';

export interface IPostItem {
  id: number;
  title: string;
  content: string;
  cover_image: string;
  create_date: number;
}

export interface IPostResponse {
  count: number;
  limit: number;
  offset: number;
  records: IPostItem[];
}

export interface IPostParams {
  title: string;
  content: string;
  cover_image: string;
}

export interface IReviewItem {
  id: number;
  content: string;
  cover_image: string;
  company_logo: string;
}

export interface IReviewResponse {
  count: number;
  limit: number;
  offset: number;
  records: IReviewItem[];
}

export interface IReviewParams {
  content: string;
  cover_image: string;
  company_logo: string;
}

export const a: number = 1;
export const LIMIT: number = 15;

export const encodeQueryData = (data = {}) => {
  const obj = {
    limit: LIMIT,
    ...data,
  };

  return Object.entries(obj)
    .map(pair => pair.map(element => encodeURIComponent(element)).join('='))
    .join('&');
};

// export const useGetListPost = (params = {}) => {
//   try {
//     const res = useSWR<IPostResponse>(`/blogs?${encodeQueryData(params)}`, getAPI);

//     return res;
//   } catch (error) {
//     throw error as HttpError;
//   }
// };

export const useGetListPost = async (params = {}) => {
  try {
    const res = await getAPI<IPostResponse>(`/blogs?${encodeQueryData(params)}`);

    return res;
  } catch (error) {
    throw <HttpError>error;
  }
};

export const useGetPostDetail = (id: number | string | undefined) => {
  const res = useSWR<IPostItem, HttpError>(`/blogs/${id}`, getAPI);

  return res;
};

// export const useGetReviews = (params = {}) => {
//   try {
//     const res = useSWR<IReviewResponse>(`/reviews?${encodeQueryData(params)}`, getAPI);

//     return res;
//   } catch (error) {
//     throw error as HttpError;
//   }
// };

export const useGetReviews = async (params = {}) => {
  try {
    const res = await getAPI<IReviewResponse>(`/reviews?${encodeQueryData(params)}`);

    return res;
  } catch (error) {
    throw <HttpError>error;
  }
};

export const useReviewDetail = (id: number | string | undefined) => {
  const res = useSWR<IReviewItem, HttpError>(`/reviews/${id}`, getAPI);

  return res;
};
