import React from "react";
import {
		addPost,
		updateNewPostText,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.postData,
		newPostText: state.profilePage.newPostText,
	}
}

const MyPostsContainer = connect(mapStateToProps, {
	addPost,
	updateNewPostText
})(MyPosts);

export default MyPostsContainer;

// const MyPostsContainer = () => {
// 		return (
// 				<Context.Consumer>
// 						{(store) => {
// 								let state = store.getState();
// 								let addPost = () => {
// 										store.dispatch(addPostActionCreator());
// 								};

// 								let onPostChange = (value) => {
// 										store.dispatch(updateNewPostTextActionCreator(value));
// 								};
// 								return (
// 										<MyPosts
// 												addPost={addPost}
// 												onPostChange={onPostChange}
// 												posts={state.profilePage.postData}
// 												newPostText={state.profilePage.newPostText}
// 										/>
// 								);
// 						}}
// 				</Context.Consumer>
// 		);
// };


// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		addPost: () => {
// 			dispatch(addPostActionCreator())
// 		},
// 		onPostChange: (value) => {
// 			dispatch(updateNewPostTextActionCreator(value))
// 		}
// 	}
// }