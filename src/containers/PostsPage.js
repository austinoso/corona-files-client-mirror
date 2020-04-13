import React, { useState } from 'react';
import Post from '../components/Post.js';

const PostsPage = (props) => {
	return (
		<div classname="container">
			{props.posts.map((post) => (
				<Post post={post} />
			))}
		</div>
	);
};

export default PostsPage;
