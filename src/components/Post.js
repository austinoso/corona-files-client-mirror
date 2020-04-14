import React, {useState} from 'react';
import Vote from './Vote'

 const Post = (props) => {
  // let [votes, newVotes] = useState(0)

  // const handleUpVoteClick = () => {
  //   newVotes(votes += 1)
  // }

  // const handleDownVoteClick = () => {
  //   newVotes(votes -= 1)
  // }

  // const loggedIn = () => {
  //   // this will validate if user is logged in, and allow only one vote per user
  // }

  // const positiveOrNegativeVote = (votes) => {
  //   // if (votes > 0) {
  //     // aiming to make this function handle showing votes next to upvote if positive, and next to downvote if negative
  //   // }
  // }

  return (
  <div>
    <h1>{props.post.title}</h1>
    <p>{props.post.content}</p>
          <p>Posted by:{props.post.user.username} ⚉ </p>
          <p>{props.post.article_link}</p>
          <Vote />
          {/* <p>Current Vote Count: {votes}</p>
          <button id="upVoteButton" onClick={handleUpVoteClick}>UpVote ↑ </button><br/><br/>
          <button id="downVoteButton" onClick={handleDownVoteClick}>DownVote ↓ </button> */}
  </div>
  );



}

export default Post;



