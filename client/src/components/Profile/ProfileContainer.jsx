import React, { Component } from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import {setProfileThunkCreator} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
class ProfileContainer extends Component {
	componentDidMount() {
		const {match} = this.props;
		let userId = match.params.userId;
		if (!userId) {
			userId = 1;
		}
		this.props.setProfile(userId);
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

export default connect(mapStateToProps, { setProfile: setProfileThunkCreator })(ProfileContainerWithRouter);