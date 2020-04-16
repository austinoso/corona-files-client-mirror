import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PostCard from '../components/PostCard';
import PostComments from './PostComments';
import CommentForm from '../components/CommentForm';

const PostShow = ({ match }) => {
	const [post, setPost] = useState(null);
	const [comments, setComments] = useState(null);

	const id = match.params.id;

	useEffect(() => {
		const fetchPost = () => {
			return fetch(`http://localhost:3000/posts/${id}`)
				.then((res) => res.json())
				.then((post) => {
					if (!post.error) setPost(post);
					if (!post.error) setComments(post.comments);
				});
		};

		if (!post) fetchPost();
	}, []);

	const addComment = (comment) => {
		setComments([comment, ...comments]);
	};

	// console.log(post);
	return post ? (
		<Container>
			<PostCard post={post} />
			<CommentForm addComment={addComment} postId={post.id} />
			<PostComments comments={comments} />
		</Container>
	) : (
		<h1>Looking for the post...Post was not found</h1>
	);
};

export default PostShow;
