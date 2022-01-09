import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json())

export const useGetHello = () => useSWR('/api/hello', fetcher);

export const useGetPosts = (fallbackData) => {
    return useSWR(`/api/posts`, fetcher, {fallbackData})
}

export const useGetMediaPosts = (fallbackData) => {
    return useSWR(`/api/mediaPosts`, fetcher, {fallbackData})
}