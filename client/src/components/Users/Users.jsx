import React from "react";
import s from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalCount / props.pageSize);
	let pages = [];
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i);
	}
	return (
		<div>
			<div className={s.pagination}>
				{pages.map((p) => (
					<span
						key={props.p}
						onClick={() => {
							props.onPageChanged(p);
						}}
						className={p === props.selectedPage ? s.selectedPage : ''}
					>
						{p}
					</span>
				))}
			</div>
			{props.users.map((user) => (
				<User
					key={user.userId}
					toggleFollow={props.toggleFollow}
					followingInProgress={props.followingInProgress}
					toggleFollowingInProgress={props.toggleFollowingInProgress}
					user={user}
				/>
			))}
		</div>
	);
};

export default Users;
