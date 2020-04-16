import React from 'react';
import LoginForm from '../components/user/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = ({ setUser }) => {
	return (
		<div className="container">
			<div className="user-form mx-auto" id="register">
				<h1>Login</h1>
				<LoginForm setUser={setUser} />
			</div>
			<p className="text-center">
				{' '}
				Don't have an account?{' '}
				<Link to="/register" className="link">
					Register
				</Link>
			</p>
		</div>
	);
};

export default LoginPage;
