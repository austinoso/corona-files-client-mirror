import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import PostsContainer from './PostsContainer.js';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import UserProfiles from './UserProfiles.js';
import NavBar from '../components/NavBar.js';
import UpdatePost from './UpdatePost';
import PostShow from './PostShow';
import NewPostPage from './NewPostPage';

class App extends Component {
	state = {
		posts: [],
		user: {
			username: localStorage.username,
			token: localStorage.token,
		},
	};

	setUser = ({ jwt, user }) => {
		console.log(user);
		localStorage.setItem('token', jwt);
		localStorage.setItem('username', user.username);
		localStorage.setItem('userId', user.id);

		this.setState({
			user: {
				username: localStorage.username,
				token: localStorage.token,
			},
		});
	};

	render() {
		return (
			<Switch>
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
						path={`/posts/new`}
						render={(routerProps) => (
							<NewPostPage {...routerProps} posts={this.posts} />
						)}
					/>
					<Route
						exact
						path={`/posts/:id/edit`}
						render={(routerProps) => <UpdatePost {...routerProps} />}
					/>
					<Route
						exact
						path={`/posts/:id`}
						render={(routerProps) => <PostShow {...routerProps} />}
					/>
					<Route
						exact
						path={`/profile`}
						render={(routerProps) => (
							<UserProfiles {...routerProps} profiles={this.state.profiles} />
						)}
					/>
				</div>
			</Switch>
		);
	}
}

export default App;
