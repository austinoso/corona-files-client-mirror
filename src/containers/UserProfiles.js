import React, {Component} from 'react';
import Profile from '../components/Profile.js';

class UserProfiles extends Component {
	state = {
    posts: [],
    user: {
      username: localStorage.username,
      token: localStorage.token,
    },
	};

	componentDidMount() {
    fetch(`http://localhost:3000/users/${localStorage.userId}`, {
      method: 'GET',
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
        return this.state.posts.posts.map(post => 
          <Profile post={post} user={this.user}/>
        )
      }
    }
    
    render(){
    return (
      <div className="container">
        <div className="profile">
        {this.mapOverPosts()}
        </div>

      </div>
    );
      }
    }

export default UserProfiles;
