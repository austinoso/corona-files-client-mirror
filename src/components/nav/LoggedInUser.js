import React, { useState } from 'react';
import LogoutButton from './LogoutButton';
import { Dropdown } from 'react-bootstrap';

export default function LoggedInUser({ user, setUser }) {
	return (
		<>
			<Dropdown>
				<Dropdown.Toggle variant="secondary" id="user-dropdown">
					Signed in as: {user.username}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
					<Dropdown.Item>
						{' '}
						<LogoutButton setUser={setUser} />
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
}