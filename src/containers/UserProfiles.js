import React from 'react';
import Profile from '../components/Profile.js';

const UserProfiles = ({ profiles }) => {
	return (
		<div classname="container">
			<h1>{localStorage.username}'s Posts</h1>
			{profiles.map((profile) => (
				<Profile profile={profile} />
			))}
		</div>
	);
};

export default UserProfiles;
