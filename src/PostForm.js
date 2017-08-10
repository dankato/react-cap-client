import React from 'react';
import * as actions from './actions';
import {connect} from 'react-redux';


export class PostForm extends React.Component{
    onSubmit(event, state){
        event.preventDefault();
        let value = this.x.value;
        this.props.dispatch(actions.addPost({text: value}));
        this.x.value = '';
    }

    // onClick(event) {
    //     this.props.dispatch(actions.getPosts());
    // }

    render(){

        return(
            <div className='addOption'>
                Have anonymous feedback to share?
                <form onSubmit={e => this.onSubmit(e)} >
                    <input type="text" placeholder="enter text here" 
                        ref={input => this.x = input} required/>
                    <button type="submit">Tell us!</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => ({
    text: state.text
});

export default connect(mapStateToProps)(PostForm);