import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const RegisterForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(
		!!localStorage.username ? true : false
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({ username, password });

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
			.then((token) => localStorage.setItem('token', token.jwt));

		return <Redirect to="/" />;
	};

	return (
		<div className="card">
			{redirect ? <Redirect to="/" /> : null}
			<div className="card-body">
				<form onSubmit={(event) => handleSubmit(event)}>
					<div className="form-group">
						<label for="username">Username</label>
						<input
							onChange={(event) => setUsername(event.target.value)}
							type="text"
							className="form-control"
							id="username"
							aria-describedby="username"
						/>
					</div>
					<div className="form-group">
						<label for="password">Password</label>
						<input
							onChange={(event) => setPassword(event.target.value)}
							type="password"
							className="form-control"
							id="password"
							aria-describedby="emailHelp"
						/>
					</div>
					<input type="submit" className="btn btn-primary" />
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
