import React from 'react';
import Button from 'react-bootstrap/Button';

export default function LogoutButton({ setUser }) {
	const handleClick = () => {
		localStorage.clear('token', 'username');
		setUser({ jwt: '', user: { username: '' } });
	};

	return (
		<Button onClick={handleClick} variant="outline-danger">
			{' '}
			Log Out
		</Button>
	);
}
