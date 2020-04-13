import React, { Component } from 'react';
import '../App.css';
import PostsPage from './PostsPage.js';
import NavBar from '../components/NavBar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewPost from '../components/NewPost.js'

class App extends Component {
	state = {
		posts: [],
	};

	componentDidMount() {
		fetch(`http://localhost:3000/posts`)
			.then((resp) => resp.json())
			.then((posts) => this.setState({ posts }));
	}

	render() {
		return (
			<Router>
				<div className="app">
					<NavBar />
<<<<<<< HEAD
					<Route
						exact
						path="/"
						render={(renderProps) => <PostsPage posts={this.state.posts} />}
					/>
=======
					<Route exact path="/" render={(renderProps) => <PostsPage posts={this.state.posts} />} />
					<Route exact path="/newpost" render={(renderProps) => <NewPost />} />
>>>>>>> master
					{/* <Route exact path="/posts/:id" render={renderProps => <h1>PostsPage</h1>}/> */}
					<Route
						exact
						path="/login"
						render={(renderProps) => <h1>Login Page</h1>}
					/>
					<Route
						exact
						path="/register"
						render={(renderProps) => <h1>Register Page</h1>}
					/>
				</div>
			</Router>
		);
	}
}

export default App;