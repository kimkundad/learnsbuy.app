import useSWR from "swr"
import { fetcher } from "./api"

export default function getPackageId(id) {
    
    id = id || 0

    const { data, error } = useSWR(`https://www.learnsbuy.com/api/get_package_id_app/${id}`, fetcher)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}