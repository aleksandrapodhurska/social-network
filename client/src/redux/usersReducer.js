const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SELECT_PAGE = "SELECT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
	users: [],
	pageSize: 5,
	totalCount: 0,
	selectedPage: 1,
	isFetching: false,
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
						return { ...user, following: !user.following };
					}
					return user;
				}),
			};
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.value,
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

export default usersReducer;

// export const toggleFollowActionCreator = (userId) => ({
// 	type: TOGGLE_FOLLOW,
// 	userId,
// });
// export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
// export const selectPageActionCreator = (num) => ({ type: SELECT_PAGE, num });
// export const setTotalCountActionCreator = (num) => ({
// 	type: SET_TOTAL_COUNT,
// 	num,
// });
// export const toggleIsFetchingCreator = (value) => ({
// 	type: TOGGLE_IS_FETCHING,
// 	value,
// });
