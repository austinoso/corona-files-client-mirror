import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../App.css';
import PostsContainer from './PostsContainer.js';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import UserProfiles from './UserProfiles.js';
import NavBar from '../components/NavBar.js';
import PostsPage from './PostsPage';

class App extends Component {
	state = {
		posts: [],
		profiles: [],
		user: {
			username: localStorage.username,
			token: localStorage.token,
		},
	};

	setUser = ({ jwt, user }) => {
		console.log(user);
		localStorage.setItem('token', jwt);
		localStorage.setItem('username', user.username);

		this.setState({
			user: {
				username: localStorage.username,
				token: localStorage.token,
			},
		});
	};

	render() {
		return (
			<Router>
				<div className="app text-white">
					<NavBar setUser={this.setUser} user={this.state.user} />
					<Route
						exact
						path="/"
						render={(renderProps) => <PostsContainer {...renderProps} />}
					/>
					<Route
						exact
						path="/register"
						render={(renderProps) => <RegisterPage setUser={this.setUser} />}
					/>
					<Route
						exact
						path="/login"
						render={(renderProps) => <LoginPage setUser={this.setUser} />}
					/>
					<Route
						exact
						path={`/posts/:slug`}
						render={(routerProps) => (
							<PostsPage {...routerProps} posts={this.posts} />
						)}
					/>

					{/* <Route
						path={`/profiles/:profileId`}
						render={(routerProps) => (
							<UserProfiles {...routerProps} posts={this.profiles} />
						)}
					/> */}
				</div>
			</Router>
		);
	}
}

export default App;
