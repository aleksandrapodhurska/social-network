import React from 'react';
import Users from './Users';
import Spinner from '../Spinner/spinner';
import {connect} from 'react-redux';
import { toggleFollow, setUsers, selectPage, setTotalCount, toggleIsFetching } from '../../redux/usersReducer';
import axios from 'axios';

class UsersContainer extends React.Component {
    getUsers = () => {
		this.props.toggleIsFetching(true);
        axios
			.get(`http://localhost:8000/users?_page=${this.props.selectedPage}&_limit=${this.props.pageSize}`,
			{withCredentials: true})
            .then(res => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(res.data);
            });
        axios
		.get(`http://localhost:8000/totalCount`,
		{withCredentials: true})
        .then(res => {
            this.props.setTotalCount(res.data.totalCount);
        })
    }
    componentDidMount() {
        this.getUsers();
    }
    onPageChanged = (p) => {
		this.props.selectPage(p);
		this.props.toggleIsFetching(true);
        axios
            .get(`http://localhost:8000/users?_page=${p}&_limit=${this.props.pageSize}`)
			.then(res => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(res.data)
			});
    }
    render() {
		return <> {
			this.props.isFetching ?
				<Spinner /> :
				<Users 
					users={this.props.users}
					totalCount={this.props.totalCount}
					pageSize={this.props.pageSize}
					onPageChanged={this.onPageChanged}
					selectedPage={this.props.selectedPage}
					toggleFollow={this.props.toggleFollow}
					isFetching={this.props.isFetching}
				/> 
		
				}
		</>

    }
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalCount,
		selectedPage: state.usersPage.selectedPage,
		isFetching: state.usersPage.isFetching,
	}
}	


export default connect(mapStateToProps, {
	toggleFollow,
	setUsers,
	setTotalCount,
	selectPage,
	toggleIsFetching,
})(UsersContainer);



// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		toggleFollow: (userId) => dispatch(toggleFollowActionCreator(userId)),
// 		setUsers: (users) =>  dispatch(setUsersActionCreator(users)),
// 		setTotalCount: (num) =>  dispatch(setTotalCountActionCreator(num)),
// 		selectPage: (num) =>  dispatch(selectPageActionCreator(num)),
// 		toggleIsFetching: (value) => dispatch(toggleIsFetchingCreator(value)),
// 	}
// }