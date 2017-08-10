import React from 'react';
import style from './style';
import ReplyBox from './ReplyBox';
import {connect} from 'react-redux';
import * as actions from './actions';
// const emoji = require('node-emoji');

export class PostList extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.getPosts());
  }

  onDelete(id) {
    console.log('PostList onDelete activated')
    this.props.dispatch(actions.deletePost(id))
  } 

 render() {
  // if (this.props.text[0]) {
  this.props.text[0] && console.log('text console>>>>>>>', this.props.text[0]);
   
    let post = this.props.text.map((t) => {
    return (
      <div key={t._id}>
        <p>{t.text}</p>
        {/* <button className="vote">
          {emoji.get('thumbsup')}
        </button>
        <button className="reply">Show Replies</button> */}
        <button className="delete" onClick={(e) => this.onDelete(t._id)}>Delete</button>
        <ReplyBox />
      </div>
    )
  });
  return (
    <div style={style.PostList}>
       {post} 
    </div>
  );

}
}

const mapStateToProps = state => ({
  text: state.text
})

export default connect(mapStateToProps)(PostList);