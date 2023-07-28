
import useSWR from "swr"
import { fetcher } from "./api"

export default function pacKage() {
    
    const { data, error } = useSWR(`https://www.learnsbuy.com/api/get_package_all_app/`, fetcher)
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}