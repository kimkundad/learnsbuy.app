import useSWR from "swr"
import { fetcher } from "./api"

export default function getBank() {

    const { data, error } = useSWR(`https://www.learnsbuy.com/api/get_bank`, fetcher)
 
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}