import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const LoginForm = ({ setUser }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(!!localStorage.username ? true : false);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({ username, password });

		fetch('http://localhost:3000/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				user: {
					username,
					password,
				},
			}),
		})
			.then((r) => r.json())
			.then((token) => {
				if (!token.error) setUser(token);
			});
		setRedirect(true);
	};

	return (
		<div>
			{redirect ? <Redirect to="/" /> : null}
			<Form onSubmit={(event) => handleSubmit(event)}>
				<Form.Group controlId="formUsername">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={(event) => setUsername(event.target.value)}
						type="text"
						placeholder="Enter Username"
					/>
					<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group controlId="formPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={(event) => setPassword(event.target.value)}
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
			</Form>
		</div>
	);
};

export default LoginForm;
