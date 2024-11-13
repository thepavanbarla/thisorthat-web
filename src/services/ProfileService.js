import { API_BASE_URL } from "../utils/Constants";
import { fetchGet } from "./ServiceUtils";

const getUserProfile = async (userName) => {
    return fetchGet(API_BASE_URL + 'public/user/' + userName);
}

const getUserStats = async (userName) => {
    return fetchGet(API_BASE_URL + 'user/stats/' + userName);
}


export { getUserProfile, getUserStats };
