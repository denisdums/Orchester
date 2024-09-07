import {useFetcher} from "@remix-run/react";

export const useEventResponseForm = (): {
    eventResponseData: any,
    isEventResponseLoading: boolean,
    eventResponseState: "idle" | "loading" | "submitting",
    setEventPresence: (id: number, data: FormData) => void
} => {
    const fetcher = useFetcher()

    const setEventPresence = (id: number, data: FormData) => {
        fetcher.submit(data, {
            method: 'POST',
            action: `/api/event/response/${id}`
        });
    }

    return {
        eventResponseData: fetcher.data,
        eventResponseState: fetcher.state,
        isEventResponseLoading: fetcher.state !== 'idle',
        setEventPresence
    }
}