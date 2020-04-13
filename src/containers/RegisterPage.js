import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
	return (
		<div className="container">
			<div className="user-form mx-auto">
				<h1>Create an Account</h1>
				<RegisterForm />
				<p>
					{' '}
					Already have an account?{' '}
					<Link to="/login" className="link">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default RegisterPage;
