import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/SideBar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper-content">
				<Route
					path="/profile/:userId?"
					render={() => <ProfileContainer />}
				/>
				<Route path="/dialogs" render={() => <DialogsContainer />} />
				<Route path="/users" render={() => <UsersContainer />} />
				<Route path="/music" component={Music} />
				<Route path="/settings" component={Settings} />
				<Route path="/friends" render={() => <FriendsContainer />} />
			</div>
		</div>
	);
};

export default App;
