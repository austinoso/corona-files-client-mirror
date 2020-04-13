import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<div className="container">
			<div className="user-form mx-auto">
				<h1>Login</h1>
				<LoginForm />
				<p>
					{' '}
					Don't have an account?{' '}
					<Link to="/register" className="link">
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
