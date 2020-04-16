import React from 'react';
import RegisterForm from '../components/user/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage = ({ setUser }) => {
	return (
		<div className="container">
			<div className="user-form mx-auto" id="register">
				<h1>Create an Account</h1>
				<RegisterForm setUser={setUser} />
			</div>
			<p className="text-center">
				{' '}
				Already have an account?{' '}
				<Link to="/login" className="link">
					Login
				</Link>
			</p>
		</div>
	);
};

export default RegisterPage;
