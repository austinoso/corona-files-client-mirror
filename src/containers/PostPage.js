import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import PostComments from './PostComments';
import { Container } from 'react-bootstrap';

const PostPage = ({ match }) => {
	const [post, setPost] = useState(null);

	useEffect(() => {
		const fetchPost = () => {
			return fetch(`http://localhost:3000/posts/${match.params.postId}`)
				.then((res) => res.json())
				.then((post) => {
					if (!post.error) setPost(post);
				});
		};

		if (!post) fetchPost();
	});

	console.log(post);
	return post ? (
		<Container>
			<PostCard post={post} />
			<PostComments comments={post.comments} />
		</Container>
	) : (
		<h1>Post was not found</h1>
	);
	// return <h1>PostPage</h1>;
};

export default PostPage;
