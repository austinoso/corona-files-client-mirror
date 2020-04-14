//This will receive the post props
import React, { useState } from 'react';
import Post from './PostCard';

const Vote = (props) => {
	// const [votes, newVotes] = useState(0);
	console.log(props);
	let [upVotes, newUpVotes] = useState(0);
	let [downVotes, newDownVotes] = useState(0);

	const handleVote = (event) => {
		event.preventDefault();

		fetch('http://localhost:3000/');
	};

	const handleUpVoteClick = () => {
		newUpVotes((upVotes += 1));
	};

	const handleDownVoteClick = () => {
		newDownVotes((downVotes -= 1));
	};

	const showVotes = (upVotes, downVotes) => {
		if (upVotes >= downVotes) {
			return `Post Currently Has More Upvotes: ${upVotes}`;
		} else {
			return `Post Currently Has More Downvotes: ${downVotes}`;
		}
	};

	return (
		<div>
			<p>{showVotes}</p>
			<button id="upVoteButton" onClick={handleUpVoteClick}>
				UpVote ↑ {upVotes}
			</button>
			<br />
			<br />
			<button id="downVoteButton" onClick={handleDownVoteClick}>
				DownVote ↓ {downVotes}
			</button>
		</div>
	);
};

export default Vote;
