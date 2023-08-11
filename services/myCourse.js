import useSWR from "swr"
import { fetcherPost } from "./api"
import { useSelector } from "react-redux";

export default function myCourse() {

    const { user, isLoading, error1, isLogin, message } = useSelector(state => state.auth);
    const token = user?.token

    const { data, error } = useSWR([`https://www.learnsbuy.com/api/getMyCourse`, {token:token}], fetcherPost)
 
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}