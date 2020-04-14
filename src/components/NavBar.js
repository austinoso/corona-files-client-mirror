import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link to="/" className="navbar-brand">
					Corona Files
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto">
						{!!localStorage.username ? (
							<p>{localStorage.username}</p>
						) : (
							<>
								<li className="nav-item">
									<Link to="/login" className="nav-link">
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/register" className="nav-link">
										Register
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
}
