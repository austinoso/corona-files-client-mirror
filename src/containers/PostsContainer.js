import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard.js';
import Spinner from 'react-bootstrap/Spinner';

const PostsContainer = (props) => {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		const fetchPost = () => {
			return fetch(`http://localhost:3000/posts`)
				.then((res) => res.json())
				.then((posts) => {
					if (!posts.error) setPosts(posts);
				});
		};
		fetchPost();
		console.log('calling');
	}, []);

	return posts ? (
		<div className="container">
			{posts.map((post) => (
				<PostCard post={post} />
			))}
		</div>
	) : (
		<Spinner animation="border" variant="light" />
	);
};

export default PostsContainer;
