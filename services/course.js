
import useSWR from "swr"
import { fetcher } from "./api"


export default function useCourse(sort) {
    
    sort = sort || 0
    const { data, error } = useSWR(`https://www.learnsbuy.com/api/all_cource_app/${sort}`, fetcher)
    
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}