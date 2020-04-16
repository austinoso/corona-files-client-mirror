import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Vote from './Vote';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
	let [votes, newVotes] = useState(0);
	const history = useHistory();

	const postClick = (id) => {
		history.push(`/posts/${id}`);
	};

	const postStatus = () => {
		if (props.post.score > 5) {
			return 'TRUE';
		} else if (props.post.score < -5) {
			return 'FALSE';
		} else {
			return 'Undetermined';
		}
	};

	return (
		<Container fluid id="post">
			<div className="content">
				<Row>
					<Col>
						<h1 id="title" onClick={() => postClick(props.post.id)}>
							{props.post.title}
						</h1>
						<p id="article-text">{props.post.content}</p>

						<a id="article" href={props.post.article_link} target="_blank">
							<span>{props.post.article_link}</span>
							<br></br>
						</a>
						<br></br>
					</Col>

					<Col xs lg="3">
						<div className="voteButtons">
							<Vote post={props.post} />
							<span id="vote">
								{/* <strong> {props.post.score} people voted this true</strong> */}
								<strong> This was voted {postStatus()}</strong>
							</span>
							<p id="user-name">Posted by: {props.post.user.username} </p>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

//if votes > 1 people voted this true
//else people voted this false

export default Post;
