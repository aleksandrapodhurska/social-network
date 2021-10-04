import React, { Component } from 'react'
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {setProfile} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';


class ProfileContainer extends Component {
	componentDidMount() {
		const {match} = this.props;
		let userId = match.params.userId;
		if (!userId) {
			userId = 1;
		}
		axios
			.get(`http://localhost:8000/users?userId=${userId}`,
			{withCredentials: true})
			.then(res => {
				this.props.setProfile(res.data[0]);
			});
			
	}

	render() {
		return (
			<div>
				<Profile profile={this.props.profile} />
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
	}	
}

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfile })(ProfileContainerWithRouter);