import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PostCard from '../components/PostCard';
import PostComments from './PostComments';
import CommentForm from '../components/CommentForm';
import Spinner from 'react-bootstrap/Spinner';

const PostShow = ({ match }) => {
	const [post, setPost] = useState(null);
	const [comments, setComments] = useState(null);
	const [error, setError] = useState(null);

	const id = match.params.id;

	useEffect(() => {
		const fetchPost = () => {
			return fetch(`http://localhost:3000/posts/${id}`)
				.then((res) => res.json())
				.then((post) => {
					if (!post.error) setPost(post);
					if (!post.error) setComments(post.comments);
					if (post.error) setError(post.error);
				});
		};

		if (!post) fetchPost();
	}, []);

	const addComment = (comment) => {
		setComments([comment, ...comments]);
	};

	// console.log(post);
	return post && !post.error ? (
		<Container>
			<PostCard post={post} />
			<CommentForm addComment={addComment} postId={post.id} />
			<PostComments comments={comments} />
		</Container>
	) : (
		<Spinner animation="border" variant="light" />
	);
};

export default PostShow;
