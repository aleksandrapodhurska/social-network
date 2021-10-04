import React from "react";
import userImage from "../../../assets/images/user.jpeg";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import s from "./User.module.css";

const User = (props) => {
	return (
		<div className={s.userInfo}>
			<div className={s.userImage}>
				<NavLink to={`/profile/${props.user.id}`}>
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
				<button onClick={() => {
					axios
						.put(`http://localhost:8000/users/${props.user.id}`,
						{...props.user, followed: props.user.followed ? false : true},
						{withCredentials: true}
						)
						.then(res => {
							console.log(res)
							props.toggleFollow(props.user.id)
						})
						}
					}
					>
					{props.user.followed ? "UNFOLLOW" : "FOLLOW"}
				</button>
			</div>
		</div>
	);
};

export default User;
// .then(res => console.log(res.data[0].followed))