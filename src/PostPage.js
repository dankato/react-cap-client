import React from 'react';
import style from './style';
import PostList from './PostList';
import PostForm from './PostForm';
import * as actions from './actions';
import {connect} from 'react-redux';


class PostPage extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(actions.getPosts());
  // }

  render() {
    return (
      <div className="post-page" > 
        <PostForm />
          <div style={style.PostPage}>
          <PostList value={actions.getPosts()} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.text
})
export default connect(mapStateToProps)(PostPage);
