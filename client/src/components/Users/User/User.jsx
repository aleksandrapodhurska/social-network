import React from "react";
import userImage from "../../../assets/images/user.jpeg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import s from "./User.module.css";
import usersAPI from "../../../api/ajax";

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
						alt={`photo of ${props.user.fullName}`}
					/>
				</NavLink>
			</div>
			<div className={s.descriptionBlock}>
				<div>{props.user.fullName}</div>
				<div>{props.user.status !== null ? props.user.status : ""}</div>
				<div>{props.user.location.city}</div>
				<div>{props.user.location.country}</div>
				<button
					disabled={props.followingInProgress.some(
						(id) => id === props.user.id
					)}
					onClick={() => {
						props.toggleFollowingInProgress(true, props.user.id);
						usersAPI
							.toggleFollowUser(props.user.id, {
								...props.user,
								followed: props.user.followed ? false : true,
							})
							.then((data) => {
								props.toggleFollowingInProgress(
									false,
									props.user.id
								);
								console.log(data);
								props.toggleFollow(props.user.id);
							});
					}}
				>
					{props.user.followed ? "UNFOLLOW" : "FOLLOW"}
				</button>
			</div>
		</div>
	);
};

export default User;
// .then(res => console.log(res.data[0].followed))
