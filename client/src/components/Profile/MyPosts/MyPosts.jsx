import React, { useState } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Picker from 'emoji-picker-react';
import { FaRegSmile } from "react-icons/fa";

const MyPosts = (props) => {
  console.log(props);
  let postElements = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />)

  let addPost = () => {
    props.addPost();
    setEmoji(false);
  }

  let onPostChange = (e) => {
    let value = e.target.value;
    props.updateNewPostText(value);
  }

  const onEmojiClick = (event, emojiObject) => {
    // props.updateNewPostText(emojiObject);
    props.updateNewPostText(emojiObject.emoji);
  };
  const [emoji, setEmoji] = useState(false);

  return (
    <div className={s.postsBlock}>
      <div className={s.newPostArea}>
        <div className={s.inputArea}>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div className={s.buttonArea}>
          <div className={s.fileButtons}>
            <button className={s.smile} onClick={() => setEmoji(!emoji)}>
              <FaRegSmile/>
            </button>
            <div className={emoji ? s.show : s.hide}>
                <Picker onEmojiClick={onEmojiClick} />
            </div>
          </div>
          <div className={s.submitButton}>
            <button onClick={() => props.newPostText && addPost()}>Add post</button>
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