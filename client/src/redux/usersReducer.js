import usersAPI from "../api/ajax";
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SELECT_PAGE = "SELECT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
	users: [],
	pageSize: 5,
	totalCount: 0,
	selectedPage: 1,
	isFetching: false,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: action.users };
		case SELECT_PAGE:
			return {
				...state,
				selectedPage: action.num,
			};
		case SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.num,
			};
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: !user.followed };
					}
					return user;
				}),
			};
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.value,
			};
		case TOGGLE_FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(
							(id) => id !== action.userId
					  ),
			};
		default:
			return state;
	}
};

export const toggleFollow = (userId) => {
	return {
		type: TOGGLE_FOLLOW,
		userId,
	};
};
export const setUsers = (users) => ({ type: SET_USERS, users });
export const selectPage = (num) => ({ type: SELECT_PAGE, num });
export const setTotalCount = (num) => ({
	type: SET_TOTAL_COUNT,
	num,
});
export const toggleIsFetching = (value) => ({
	type: TOGGLE_IS_FETCHING,
	value,
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
	type: TOGGLE_FOLLOWING_IN_PROGRESS,
	isFetching,
	userId,
});

export const getUsersThunkCreator = (selectPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(selectPage, pageSize).then((data) => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data));
		});
		usersAPI.getTotalCount().then((data) => {
			dispatch(setTotalCount(data.totalCount));
		});
	};
};

export const toggleFollowingThunkCreator = (id, reqBody) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, id));
		usersAPI.toggleFollowUser(id, reqBody).then(() => {
			dispatch(toggleFollowingInProgress(false, id));
			dispatch(toggleFollow(id));
		});
	};
};

export default usersReducer;
