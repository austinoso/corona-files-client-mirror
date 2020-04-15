import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Vote from './Vote';

const Post = (props) => {
	let [votes, newVotes] = useState(0);

	const handleUpVoteClick = () => {
		newVotes((votes += 1));
	};

	const handleDownVoteClick = () => {
		newVotes((votes -= 1));
	};

	const loggedIn = () => {
		// this will validate if user is logged in, and allow only one vote per user
	};

	const positiveOrNegativeVote = (votes) => {
		// if (votes > 0) {
		// aiming to make this function handle showing votes next to upvote if positive, and next to downvote if negative
		// }
	};

	return (
		<Container href={`posts/${props.post.id}`} id="post">
			<div id="content">
				<h1 id="title">{props.post.title}</h1>
				<p id="article-text">{props.post.content}</p>

				<a id="article" href={props.post.article_link} target="_blank">
						<span>{props.post.article_link}</span>
					<br></br>
				</a>
				<br></br>
				{/* <button id="upVoteButton" onClick={handleUpVoteClick}>
					{' '}
					⇧{' '}
				</button>
				<button id="downVoteButton" onClick={handleDownVoteClick}>
					{' '}
					⇩{' '}
				</button> */}
				<Vote post={props.post}/>
				<span id="vote">
					<strong> {votes} people voted this true</strong>
				</span>
				<p id="user-name">Posted by: {props.post.user.username} </p>
			</div>
		</Container>
	);
};

//if votes > 1 people voted this true
//else people voted this false

export default Post;

