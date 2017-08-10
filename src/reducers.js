import * as actions from './actions';

const initialState = {
      text: [],
      view: 0,
      loading: false,
      count: 0,
      error: null
    };

export const reducer = (state=initialState, action) => {
    if (action.type === actions.GET_POSTS_REQUEST) {
        return Object.assign({}, initialState, {
           loading: true
        })
    } else if (action.type === actions.GET_POSTS_SUCCESS) {
        return Object.assign({}, state, {
           loading: false,
           error: null,
            text: action.posts
        })
    } else if (action.type === actions.GET_POSTS_ERROR) {
        return Object.assign({}, state, {
           loading: false,
           error: action.err
        })
    } else if (action.type === action.DELETE_POST_ERROR) {
        return Object.assign({}, state, {
           loading: false,
           error: action.err
        })
    }
    return state;
}


// class Comment extends Component {
//   constructor(props) {
//     super(props);
//     this.state= {
//       toBeUpdated: false,
//       author: '',
//       text: ''
//     };
    // this.props.dispatch(fetchBoard());
    // }