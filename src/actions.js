
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
export const getPostsSuccess = text => ({
    type: GET_POSTS_SUCCESS,
    text
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

export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const addPostSuccess = text => ({
    type: ADD_POST_SUCCESS,
    text
})

export const ADD_POST_ERROR = 'ADD_POST_ERROR';
export const addPostError = text => ({
    type: ADD_POST_ERROR,
    text
})

export const getPosts = () => dispatch => {
   console.log('Do we need two dispatches? One for iterating over the state and one for ') 
    dispatch(getPostsRequest());
    fetch(`${REACT_APP_API_BASE_URL}`)
        .then(res => {
            
            if (!res.ok) {
                return Promise.reject(res.statusText)
            }
            //(res.json())
            return res.json()
        })
        .then((text) => {
            //console.log('hey im here')
            //console.log(text);
            dispatch(getPostsSuccess(text))
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
    console.log(opts.body);
    dispatch(addPostRequest());
    fetch(`${REACT_APP_API_BASE_URL}/post`, opts)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText)
            }
            console.log('HEEEYYY>>>>>', res.json());
            return res.json()
        })
        .then((text) => {
            console.log(text);
            dispatch(addPostSuccess(text))
        })
        .catch((err) => {
            dispatch(addPostError(err))
        })
}

