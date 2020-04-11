import React, { useState } from 'react';
import Post from './components/Post.js';

export default function PostsPage() {
	// const [ votes, newVotes ] = useState(0)
	//pass votes prop to votes.js
	mapOverPosts = (props) => {
		props.posts.map((post) => <Post post={post} />);
	};

	return (
		<div>
			<h1>PostsPage</h1>
			{mapOverPosts()}
		</div>
	);
}
