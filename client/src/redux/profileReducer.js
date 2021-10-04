const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET_PROFILE";

let initialState = {
	postData: [
		{ id: 1, message: "Hi, how are you?", likesCount: 23 },
		{ id: 2, message: "It's my first post", likesCount: 2 },
	],
	newPostText: "",
	profile: null,
	isFetching: false,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				postData: [
					...state.postData,
					{ id: 5, message: state.newPostText, likesCount: 0 },
				],
				newPostText: "",
			};
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.text, //resolve bug with string values
			};
		case SET_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		default:
			return state;
	}
};

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (value) => ({
	type: UPDATE_NEW_POST_TEXT,
	text: value,
});
export const setProfile = (profile) => ({
	type: SET_PROFILE,
	profile,
});

export default profileReducer;
