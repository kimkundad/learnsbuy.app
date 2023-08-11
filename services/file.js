import useSWR from "swr"
import { fetcher } from "./api"

export default function getFile(id) {
    
    id = id || 0

    const { data, error } = useSWR(`https://www.learnsbuy.com/api/get_file_app/${id}`, fetcher)
    console.log('getFile-->',data)
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}
