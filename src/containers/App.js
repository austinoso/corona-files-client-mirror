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
					<Route exact path="/" render={(renderProps) => <PostsPage posts={this.state.posts} />} />
					<Route exact path="/newpost" render={(renderProps) => <NewPost />} />
					{/* <Route exact path="/posts/:id" render={renderProps => <h1>PostsPage</h1>}/> */}
					<Route exact path="/me" render={(renderProps) => <h1>ProfilePage</h1>} />
				</div>
			</Router>
		);
	}
}

// class App extends Component {

// 	state = {
// 	  movies: {
// 		1: { id: 1, title: 'A River Runs Through It' },
// 		2: { id: 2, title: 'Se7en' },
// 		3: { id: 3, title: 'Inception' }
// 	  }
// 	}

// 	render() {
// 	  return (
// 		<Router>
// 		  <div>
// 			<NavBar />
// 			<Route exact path="/" render={() => <div>Home</div>} />
// 			<Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
// 		  </div>
// 		</Router>
// 	  );
// 	}
//   }

export default App;
