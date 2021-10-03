import React from 'react';
import s from './ProfileInfo.module.css';
import userImage from '../../../assets/images/user.jpeg'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <div>No data...</div>
  }
  return (
    <div className={s.profileInfo}>
      <div className={s.profileImage}>
        {/* <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' /> */}
        <img className={s.avatar} src={props.profile.photos.small !== null ? props.profile.photos.small : userImage} alt=""/>
      </div>
      <div className={s.descriptionBlock}>
        <div>
          <span>{props.profile.fullName}</span>
        </div>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.lookingForAJob && <span>Looking for a job: {props.profile.lookingForAJobDescription}</span>}</div>
      </div>
    </div>
  )
}

export default ProfileInfo;