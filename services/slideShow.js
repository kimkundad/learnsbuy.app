
import useSWR from "swr"
import { fetcher } from "./api"

export default function slideShow() {
    
    const { data, error } = useSWR(`https://www.learnsbuy.com/api/slide_show_app/`, fetcher)
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}