import React from "react";
import userImage from "../../../assets/images/user.jpeg";
import { NavLink } from "react-router-dom";
import s from "./User.module.css";

const User = (props) => {
	return (
		<div className={s.userInfo}>
			<div className={s.userImage}>
				<NavLink to={`/profile/${props.user.userId}`}>
					<img
						className={s.avatar}
						src={
							props.user.photos.small !== null
								? props.user.photos.small
								: userImage
						}
						alt=""
					/>
				</NavLink>
			</div>
			<div className={s.descriptionBlock}>
				<div>{props.user.fullName}</div>
				<div>{props.user.status !== null ? props.user.status : ''}</div>
				<div>{props.user.location.city}</div>
				<div>{props.user.location.country}</div>
				<button onClick={() => props.toggleFollow(props.user.userId)}>
					{props.user.following ? "UNFOLLOW" : "FOLLOW"}
				</button>
			</div>
		</div>
	);
};

export default User;
