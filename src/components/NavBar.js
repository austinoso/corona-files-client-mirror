import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LoggedInUser from './nav/LoggedInUser';

export default function NavBar({ user, setUser }) {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Brand href="/">Corona Files</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
				</Nav>
				{!!user.username ? (
					<>
						<LoggedInUser user={user} setUser={setUser} />
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
