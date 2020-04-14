import React from 'react';
import Card from 'react-bootstrap/Card';

const Comment = ({ comment }) => {
	return (
		<Card bg={'dark'} variant={'dark'} text={'white'}>
			<Card.Body>
				<Card.Text>{comment.content}</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">{comment.user.username}</Card.Footer>
		</Card>
	);
};

export default Comment;
