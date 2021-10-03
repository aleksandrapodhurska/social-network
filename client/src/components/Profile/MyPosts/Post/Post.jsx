import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <div className={s.itemImage}>
        <img src='https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png' />
      </div>
      <div className={s.postText}>{ props.message }</div>
      <div className={s.like}>{props.likesCount}</div>
    </div>
  )
}

export default Post;