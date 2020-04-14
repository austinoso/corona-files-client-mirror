import React, { Component } from 'react';
import '../App.css';
import PostsPage from './PostsPage.js';
import NavBar from '../components/NavBar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewPost from '../components/NewPost.js';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

class App extends Component {
	state = {
		posts: [],
		user: {
			username: localStorage.username,
			token: localStorage.token,
		},
	};

	componentDidMount() {
		const configObj = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${this.state.user.token}`,
			},
		};
		console.log(configObj);
		fetch(`http://localhost:3000/posts`, configObj)
			.then((resp) => resp.json())
			.then((posts) => this.setState({ posts }));
	}

	setUser = ({ jwt, user }) => {
		localStorage.setItem('token', jwt);
		localStorage.setItem('username', user.username);
		console.log(localStorage.username);

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
				<div className="app">
					<NavBar setUser={this.setUser} user={this.state.user} />
					<Route
						exact
						path="/"
						render={(renderProps) => <PostsPage posts={this.state.posts} />}
					/>
					{/* <Route exact path="/posts/:id" render={renderProps => <h1>PostsPage</h1>}/> */}
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
				</div>
			</Router>
		);
	}
}

export default App;
