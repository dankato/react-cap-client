
import {REACT_APP_API_BASE_URL} from './config';
// | GET_POSTS   | Retrieves all entries in the databases             |
// | SELECT_POST | Selects a single POST by its id from the database  |
// | ADD_POST    | Adds an POST to the database                       |
// | REMOVE_POST | Removes a single POST in the database using its id |
// | ADD_REPLY   | Adds a single reply to the database                |
// | REMOVE_REPLY| Removes a single reply to the database             |
// | ADD_REPLY   | Adds a single reply to the database                |

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const getPostsRequest = text => ({
    type: GET_POSTS_REQUEST,
    text
})

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const getPostsSuccess = posts => ({
    type: GET_POSTS_SUCCESS,
    posts
})

export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
export const getPostsError = text => ({
    type: GET_POSTS_ERROR,
    text
})

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const addPostRequest = text => ({
    type: ADD_POST_REQUEST,
    text
})

export const ADD_POST_ERROR = 'ADD_POST_ERROR';
export const addPostError = text => ({
    type: ADD_POST_ERROR,
    text
})

// Delete
export const DELETE_POSTS_REQUEST = 'DELETE_POSTS_REQUEST';
export const deletePostRequest = text => ({
    type: DELETE_POSTS_REQUEST,
    text
})

export const DELETE_POSTS_SUCCESS = 'DELETE_POSTS_SUCCESS';
export const deletePostSuccess = posts => ({
    type: DELETE_POSTS_SUCCESS,
    posts
})

export const DELETE_POSTS_ERROR = 'DELETE_POSTS_ERROR';
export const deletePostError = text => ({
    type: DELETE_POSTS_ERROR,
    text
})




export const getPosts = () => dispatch => {
    dispatch(getPostsRequest());
    fetch(`${REACT_APP_API_BASE_URL}`)
        .then(res => {
            
            if (!res.ok) {
                return Promise.reject(res.statusText)
            }
            //(res.json())
            return res.json()
        })
        .then((posts) => {
            //console.log('hey im here')
            //console.log(text);
            dispatch(getPostsSuccess(posts))
        })
        .catch((err) => {
            dispatch(getPostsError(err))
        })
}

export const addPost = (data) => dispatch => {
   // console.log('data', data);
    const opts = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    }
    dispatch(addPostRequest());
    fetch(`${REACT_APP_API_BASE_URL}/post`, opts)
        .then(res => {
            // if(!res.ok) {
            //     return Promise.reject(res.statusText)
            // }
            return res.json()
        })
        .then((posts) => {
            console.log('in then')
            console.log('posts', posts);
            dispatch(getPostsSuccess(posts))
        })
        .catch((err) => {
            dispatch(addPostError(err))
        })
}


export const deletePost = (id) => dispatch => {
    console.log('what is my id? --->', id);    
    const opts = {
        method: 'DELETE',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },    
    }
    dispatch(deletePostRequest());
    fetch(`${REACT_APP_API_BASE_URL}/post/${id}`, opts)
        .then((posts) => {
            console.log('posts', posts);

            dispatch(deletePostSuccess(posts))
        })
        .catch((err) => {
            console.log(err)
            dispatch(deletePostError(err))
        })
}
