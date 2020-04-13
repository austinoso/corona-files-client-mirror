import React, { useState } from 'react';

const RegisterForm = () => {
	return (
		<div className="container">
			<form>
				<div className="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
