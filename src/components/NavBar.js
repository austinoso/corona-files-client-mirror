import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LogoutButton from './nav/LogoutButton';

export default function NavBar({ user, setUser }) {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">Corona Files</Navbar.Brand>
			<Navbar.Toggle />
			<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
			</Nav>
			<Navbar.Collapse className="justify-content-end">
				{!!user.username ? (
					<>
						<Navbar.Text>
							Signed in as: <Link to="/">{user.username}</Link>
						</Navbar.Text>
						<LogoutButton setUser={setUser} />
					</>
				) : (
					<>
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/register">Register</Nav.Link>
					</>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
}
