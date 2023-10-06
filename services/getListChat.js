import useSWR from "swr"
import { fetcher } from "./api"
import { useSelector } from "react-redux";

export default function getListChat() {

    const { data, error } = useSWR(`https://api.learnsabuy.com/listChat?page=1`, fetcher)
 
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}