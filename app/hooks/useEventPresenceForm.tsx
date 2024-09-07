import {useFetcher} from "@remix-run/react";

export const useEventPresenceForm = (): {
    eventPresenceResponseData: any,
    isEventPresenceLoading: boolean,
    eventPresenceResponseState: "idle" | "loading" | "submitting",
    setEventPresence: (id: number, data: FormData) => void
} => {
    const fetcher = useFetcher()

    const setEventPresence = (id: number, data: FormData) => {
        fetcher.submit(data, {
            method: 'POST',
            action: `/api/event/presences/${id}`
        });
    }

    return {
        eventPresenceResponseData: fetcher.data,
        eventPresenceResponseState: fetcher.state,
        isEventPresenceLoading: fetcher.state !== 'idle',
        setEventPresence
    }
}