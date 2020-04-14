import React from 'react';
import Comment from '../components/Comment';
import { Container } from 'react-bootstrap';

const PostComment = ({ comments }) => {
	return (
		<>
			{comments.map((comment) => (
				<Comment comment={comment} />
			))}
		</>
	);
};

export default PostComment;
