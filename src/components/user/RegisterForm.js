import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegisterForm = ({ setUser }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch('http://localhost:3000/api/v1/users', {
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
				token.jwt ? setUser(token) : setError('That username is taken');
			});

		return <Redirect to="/" />;
	};

	return (
		<div>
			{localStorage.token ? null : <Redirect to="/login" />}
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formUsername">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={(event) => setUsername(event.target.value)}
						type="text"
						placeholder="Enter Username"
					/>
					<Form.Text className="text">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={(event) => setPassword(event.target.value)}
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Button variant="success" type="submit">
					Register
				</Button>
			</Form>
			{error ? error : null}
		</div>
	);
};

export default RegisterForm;
