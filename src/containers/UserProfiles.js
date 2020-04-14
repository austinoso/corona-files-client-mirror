import React from 'react';
import Profile from '../components/Profile.js';

const UserProfiles = ({profiles}) => {
	return (
		
		<div classname="container">
			
			{profiles.map((profile) => (
				<Profile profile={profile} />
			))}
			
		</div>
	);
};


export default UserProfiles;

