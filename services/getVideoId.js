import useSWR from "swr"
import { fetcher } from "./api"

export default function useVideoId(id) {
    
    id = id || 0

    const { data, error } = useSWR(`https://www.learnsbuy.com/api/getVideoId/${id}`, fetcher)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}