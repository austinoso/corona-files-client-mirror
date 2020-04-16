import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewPostPage from './NewPostPage.js';
import PostShow from './PostShow';
import UpdatePost from './UpdatePost.js';

const PostsPage = ({ match }) => {
	const component = () => {
		const slug = match.params.slug;

		if (slug === 'new') {
			return <NewPostPage />;
		} else if (typeof parseInt(slug) === 'number') {
			return <PostShow id={slug} />;
		}
	};

	return component();
};

export default PostsPage;
