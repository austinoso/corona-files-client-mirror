import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import GoogleMapsAutoCompleteForm from '../components/GoogleMapsAutoCompleteForm';

const UpdatePost = ({ match }) => {
	//console.log(post);
	const [currentLink, newLink] = useState('');
	const [currentTitle, newTitle] = useState('');
	const [currentContent, newContent] = useState('');
	const [currentLocation, newLocation] = useState('');

	//Fetch post from match.params.id

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(`http://localhost:3000/posts/${match.params.id}/`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				article_link: currentLink,
				title: currentTitle,
				content: currentContent,
				user_id: parseInt(localStorage.userId),
				location_lat: currentLocation.lat,
				location_long: currentLocation.lng,
			}),
		})
			.then((resp) => resp.json())
			.then(console.log);
	};

	return (
		<div className="user-form mx-auto" id="register">
			<h1>Edit Post</h1>
			<Form>
				<Form.Group controlId="articleLink">
					<Form.Label>Article Link:</Form.Label>
					<Form.Control type="link" onChange={(e) => newLink(e.target.value)} />
				</Form.Group>

				<Form.Group controlId="articleTitle">
					<Form.Label>Edit Article Title:</Form.Label>
					<Form.Control
						type="title"
						onChange={(e) => newTitle(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="articleContent">
					<Form.Label>Edit Article Content Summary:</Form.Label>
					<Form.Control
						type="content"
						onChange={(e) => newContent(e.target.value)}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Edit Address For Your Article: </Form.Label>
					<GoogleMapsAutoCompleteForm setLocation={newLocation} />
				</Form.Group>

				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default UpdatePost;
