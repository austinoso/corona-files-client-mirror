import React from 'react';
import Comment from '../components/Comment';
import { Container } from 'react-bootstrap';

const PostComment = ({ comments }) => {
	return comments ? (
		<>
			{comments.reverse().map((comment) => (
				<Comment comment={comment} />
			))}
		</>
	) : (
		<h1>No comments to display</h1>
	);
};

export default PostComment;
