import { API_BASE_URL } from "../utils/Constants";
import { fetchGet } from "./ServiceUtils";

const getPost = async (postId) => {
    return fetchGet(API_BASE_URL + `public/post/${postId}`);
}

const getUserPosts = async (userId) => {
    return fetchGet(API_BASE_URL + `public/post/user/${userId}`);
}

const getPostStats = async (postId) => {
    return fetchGet(API_BASE_URL + `post/stats/${postId}`);
}

export { getPost, getUserPosts, getPostStats };
