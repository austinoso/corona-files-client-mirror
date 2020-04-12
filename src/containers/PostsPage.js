import React, { useState } from 'react';
import Post from '../components/Post.js';

const PostsPage = (props) => {
	// const [ votes, newVotes ] = useState(0)
	//pass votes prop to votes.js
	// mapOverPosts = () => {
	// 	return this.props.posts.map((post) => <Post post={post} />);
	// };

	return (
		<div classname="ui four column grid">
			{props.posts.map((post) => (
				<Post post={post} />
			))}
		</div>
	);
};

export default PostsPage;
