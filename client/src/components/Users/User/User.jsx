import React from "react";
import userImage from "../../../assets/images/user.jpeg";
import { NavLink } from "react-router-dom";
import s from "./User.module.css";

const User = (props) => {
	return (
		<div className={s.userInfo}>
			<div className={s.userImage}>
				<NavLink to={`/profile/${props.id}`}>
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
				<div>{props.user.name}</div>
				<div>{"props.user.status"}</div>
				<div>{"user.location.city"}</div>
				<div>{"user.location.country"}</div>
				<button onClick={() => props.toggleFollow(props.user.id)}>
					{props.user.following ? "UNFOLLOW" : "FOLLOW"}
				</button>
			</div>
		</div>
	);
};

export default User;
