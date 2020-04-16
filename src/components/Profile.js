import React, { useState } from 'react';

const Profile = (props) => {
	return (
		<div id="profile">
			<div id="content">
				<h1 id="username">{props.profile.user.username}</h1>
				<p id="bio">{props.profile.bio}</p>
				<img id="photo" src={props.profile.picture} />
			</div>
		</div>
	);
};
export default Profile;
