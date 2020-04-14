import React, { Component } from "react";
import "../App.css";
import PostsPage from "./PostsPage.js";
import NavBar from "../components/NavBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewPost from "./NewPostPage.js";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";


class App extends Component {
  state = {
    posts: [],
    username: localStorage.username,
  };

  componentDidMount() {
    const configObj = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    console.log(configObj);
    fetch(`http://localhost:3000/posts`, configObj)
      .then((resp) => resp.json())
      .then((posts) => this.setState({ posts }));
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route
            exact
            path="/"
            render={(renderProps) => <PostsPage posts={this.state.posts} />}
          />
          {/* <Route exact path="/posts/:id" render={renderProps => <h1>PostsPage</h1>}/> */}
          <Route
            exact
            path="/register"
            render={(renderProps) => <RegisterPage />}
          />

          <Route exact path="/login" render={(renderProps) => <LoginPage />} />
        </div>
      </Router>
    );
  }

	render() {
		return (
			<Router>
				<div className="app">
				
					<NavBar />
					<Route
						exact
						path="/"
						render={(renderProps) => <PostsPage posts={this.state.posts} />}
					/>
					{/* <Route exact path="/posts/:id" render={renderProps => <h1>PostsPage</h1>}/> */}
					<Route
						exact
						path="/register"
						render={(renderProps) => <RegisterPage />}
					/>
          <Route exact path="/newpost" render={(renderProps) => <NewPost />} />
					<Route exact path="/login" render={(renderProps) => 
					<LoginPage />} />
							
				</div>
			</Router>
		);
	}
}

export default App;
