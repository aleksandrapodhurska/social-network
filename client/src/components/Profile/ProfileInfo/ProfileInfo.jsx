import React from 'react';
import s from './ProfileInfo.module.css';
import userImage from '../../../assets/images/user.jpeg'
import { useHistory } from 'react-router-dom';
import { FcLeft } from "react-icons/fc";

const ProfileInfo = (props) => {
  const history = useHistory();
  
  if (!props.profile) {
    return <div>No data...</div>
  }
  return (
    <>
    {props.profile.userId !== 1 ? <button className={s.backButton} onClick={() => history.goBack()}><FcLeft/></button> : '' }
      
      <div className={s.profileInfo}>
        <div className={s.profileImage}>
          <img className={s.avatar} src={props.profile.photos.small !== null ? props.profile.photos.small : userImage} alt=""/>
        </div>
        <div className={s.descriptionBlock}>
          <div>
            <span><b>{props.profile.fullName}</b></span>
          </div>
          <div>{props.profile.aboutMe}</div>
          <div>{props.profile.lookingForAJob && <span>Looking for a job: {props.profile.lookingForAJobDescription}</span>}</div>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo;