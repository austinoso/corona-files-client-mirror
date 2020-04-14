import React from 'react';
import PostCard from '../components/PostCard.js';

const PostsPage = ({ posts }) => {
	return (
		<div classname="container">
			{posts.map((post) => (
				<PostCard post={post} />
			))}
		</div>
	);
};

export default PostsPage;
