import React, { useState } from 'react';

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({ username, password });
	};

	return (
		<div className="card">
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

export default LoginForm;
