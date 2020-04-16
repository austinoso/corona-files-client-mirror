import React, { Component } from "react";
import PostEditCard from "../components/PostEditCard.js";
import { Redirect } from "react-router-dom";

class UserProfiles extends Component {
  state = {
    posts: [],
    user: {
      username: localStorage.username,
    },
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${localStorage.userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          posts: posts,
        });
      });
  }

  mapOverPosts = () => {
    if (this.state.posts.posts) {
      return this.state.posts.posts.map((post) => {
        return <PostEditCard post={post} />;
        console.log(post);
      });
    }
  };

  render() {
    return (
      <div className="container">
        {localStorage.token ? (
          <div className="profile">{this.mapOverPosts()}</div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

export default UserProfiles;
// import React, { useState } from 'react';

// const Profile = (props) => {
//    console.log(props)

//     return (

//       <div id="register">
//       <div id="content">
//       <h1 id="title">{props.post.title}</h1>
//       <p id="content">{props.post.content}</p>
//       <p id="">{props.post.article_link}</p>

//       </div>
//       </div>

//     );

//   }
//   export default Profile;
