import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Vote from './Vote';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
	let [votes, newVotes] = useState(0);
	const history = useHistory();

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

	const postClick = (id) => {
		history.push(`/posts/${id}`);
	};

	return (
		<Container fluid id="post">
			<div id="content">
				<Row>
					<Col to={'/login'}>
						<h1 id="title" onClick={() => postClick(props.post.id)}>
							{props.post.title}
						</h1>
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

					</Col>

					<Col xs lg="3">
						{' '}
						<Vote />
						<span id="vote">
							<strong> {votes} people voted this true</strong>
						</span>
						<p id="user-name">Posted by: {props.post.user.username} </p>
					</Col>
				</Row>

			</div>
		</Container>
	);
};

//if votes > 1 people voted this true
//else people voted this false

export default Post;

