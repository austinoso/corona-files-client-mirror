import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegisterForm = ({ setUser }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(
		!!localStorage.username ? true : false
	);

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
				setUser(token);
			});

		return <Redirect to="/" />;
	};

	return (
		<div>
			{redirect ? <Redirect to="/" /> : null}

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
				<Button variant="primary" type="submit">
					Register
				</Button>
			</Form>
		</div>
	);
};

export default RegisterForm;
