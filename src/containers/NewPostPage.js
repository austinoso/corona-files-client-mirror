import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import GoogleMapsAutoCompleteForm from '../components/GoogleMapsAutoCompleteForm';

const NewPost = () => {
	const [postLink, newPostLink] = useState('');
	const [postTitle, newPostTitle] = useState('');
	const [postContent, newPostContent] = useState('');
	const [postLocation, newPostLocation] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(`http://localhost:3000/posts`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				article_link: postLink,
				title: postTitle,
				content: postContent,
				user_id: parseInt(localStorage.userId),
				location_lat: postLocation.lat,
				location_long: postLocation.lng,
			}),
		})
			.then((resp) => resp.json())
			.then(console.log);
	};

	return (
		<div className="user-form mx-auto" id="register">
			{localStorage.token ? null : <Redirect to="/login" />}
			<h1>Add New Post</h1>
			<Form>
				<Form.Group controlId="articleLink">
					<Form.Label>Article Link:</Form.Label>
					<Form.Control
						type="link"
						onChange={(e) => newPostLink(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="articleTitle">
					<Form.Label>Article Title:</Form.Label>
					<Form.Control
						type="title"
						onChange={(e) => newPostTitle(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="articleContent">
					<Form.Label>Article Content Summary:</Form.Label>
					<Form.Control
						type="content"
						onChange={(e) => newPostContent(e.target.value)}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Add An Address To Your Article: </Form.Label>
					<GoogleMapsAutoCompleteForm setLocation={newPostLocation} />
				</Form.Group>

				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default NewPost;
