
import useSWR from "swr"
import { fetcher } from "./api"


export default function useCourse(sort) {
    
    sort = sort || 0
    const { data, error } = useSWR(`https://www.learnsbuy.com/api/package_product`, fetcher)
    
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}