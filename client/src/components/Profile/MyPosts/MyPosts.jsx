import React, { createRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';

const MyPosts = (props) => {
  let postElements = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />)

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let value = e.target.value;
    props.updateNewPostText(value);
  }

  return (
    <div className={s.postsBlock}>
      <div className={s.newPostArea}>
        <div className={s.inputArea}>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div className={s.buttonArea}>
          <div className={s.fileButtons}>
            <button>Blah</button>
            <button>Blah</button>
            <button>Beep</button>
          </div>
          <div className={s.submitButton}>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>
        <h3>My posts</h3>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;