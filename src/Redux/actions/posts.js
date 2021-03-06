import * as api from '../../api';

export const getPosts = () => async (dispatch) => {

    try {
        const {data} = await api.fetchPost();
        dispatch({
            type: "FETCH_ALL",
            payLoad: data
        })

    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({
            type: "CREATE",
            payLoad: data
        })

    } catch (error) {
        console.log(error.message);
    }
}