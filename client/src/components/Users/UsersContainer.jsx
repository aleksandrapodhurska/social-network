import React from 'react';
import Users from './Users';
import Spinner from '../Spinner/spinner';
import {connect} from 'react-redux';
import { toggleFollow, setUsers, selectPage, setTotalCount, toggleIsFetching, toggleFollowingInProgress } from '../../redux/usersReducer';
import usersAPI from '../../api/ajax';

class UsersContainer extends React.Component {
    getUsers = () => {
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(this.props.selectPage, this.props.pageSize)
            .then(data => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data);
            });
        usersAPI.getTotalCount()
        .then(data => {
            this.props.setTotalCount(data.totalCount);
        })
    }
    componentDidMount() {
        this.getUsers();
    }
    onPageChanged = (p) => {
		this.props.selectPage(p);
		this.props.toggleIsFetching(true);
        usersAPI.getUsersForNewPage(p, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data)
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
					toggleFollowingInProgress={this.props.toggleFollowingInProgress}
					followingInProgress={this.props.followingInProgress}
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
	toggleFollow,
	setUsers,
	setTotalCount,
	selectPage,
	toggleIsFetching,
	toggleFollowingInProgress,
})(UsersContainer);