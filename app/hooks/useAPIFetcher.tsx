import {useRevalidator} from "@remix-run/react";
import useSWR from "swr";
import {useEffect} from "react";

const fetcher = (key: any) => fetch(key).then(res => res.json())

export const useAPIFetcher = (endpoint: any) => {
    const revalidator = useRevalidator();
    const {data, isLoading, error, mutate} = useSWR(endpoint, fetcher, {
        keepPreviousData: true,
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    useEffect(() => {
        if (revalidator.state === 'loading' && !isLoading) {
            mutate();
        }
    }, [revalidator.state, isLoading])

    return {
        data,
        isLoading,
        error,
        revalidate: mutate
    }
}