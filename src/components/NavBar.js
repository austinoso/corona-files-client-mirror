import React from 'react';
import { Navbar, Nav, ButtonGroup } from 'react-bootstrap';
import LoggedInUser from './nav/LoggedInUser';
import { ReactComponent as Logo } from '../virus.svg';

export default function NavBar({ user, setUser }) {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Brand href="/">
				<Logo id="logo" />
				Corona Files
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/posts/new">New Post</Nav.Link>
				</Nav>
				{!!user.username ? (
					<>
						<LoggedInUser user={user} setUser={setUser} />
					</>
				) : (
					<>
						<ButtonGroup>
							<Nav.Link className="btn btn-secondary" href="/login">
								Login
							</Nav.Link>
							<Nav.Link className="btn btn-success" href="/register">
								Register
							</Nav.Link>
						</ButtonGroup>
					</>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
}
