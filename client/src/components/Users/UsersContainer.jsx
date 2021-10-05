import React from 'react';
import Users from './Users';
import Spinner from '../Spinner/spinner';
import {connect} from 'react-redux';
import { selectPage, getUsersThunkCreator, toggleFollowingThunkCreator } from '../../redux/usersReducer';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.selectPage, this.props.pageSize)
    }
    onPageChanged = (p) => {
		this.props.selectPage(p);
		this.props.getUsers(p, this.props.pageSize)
    }
    render() {
		return <> {
			this.props.isFetching ?
				<Spinner /> :
				<Users 
					users={this.props.users}
					pageSize={this.props.pageSize}
					totalCount={this.props.totalCount}
					onPageChanged={this.onPageChanged}
					selectedPage={this.props.selectedPage}
					followingInProgress={this.props.followingInProgress}
					toggleFollowing={this.props.toggleFollowing}
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
		followingInProgress: state.usersPage.followingInProgress
	}
}	

export default connect(mapStateToProps, {
	selectPage,
	getUsers: getUsersThunkCreator,
	toggleFollowing: toggleFollowingThunkCreator,
})(UsersContainer);