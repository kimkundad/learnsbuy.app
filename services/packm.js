
import useSWR from "swr"
import { fetcher } from "./api"


export default function useCourse() {
    
    const { data, error } = useSWR(`https://www.learnsbuy.com/api/package_m_all`, fetcher)
    
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}