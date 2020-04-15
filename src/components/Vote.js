//This will receive the post props
import React, { useState } from 'react';
import PostCard from './PostCard';

const Vote = (props) => {
	const [votes, newVotes] = useState(0);
	// console.log(props);
	let [upVotes, newUpVotes] = useState(0);
	let [downVotes, newDownVotes] = useState(0);

	const handleUpVoteClick = () => {
		newUpVotes((upVotes += 1))

		fetch(`http://localhost:3000/posts/${props.post.id}`
		// , {	
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Accept: 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		post: {
		// 			score: props.post.score += 1
		// 		}
		// 	})
		// }
		)
		.then(res => res.json())
		.then(vote => console.log(vote));
	};

	const handleDownVoteClick = () => {
		newDownVotes((downVotes -= 1));

		fetch(`http://localhost:3000/posts/${props.post.id}`, {	
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				post: {
					score: props.post.score - 1
				}
			})
		})
		.then(res => res.json())
		.then(post => console.log(post));
	};

	// const showVotes = (upVotes, downVotes) => {
	// 	if (upVotes >= downVotes) {
	// 		return `Post Currently Has More Upvotes: ${upVotes}`;
	// 	} else {
	// 		return `Post Currently Has More Downvotes: ${downVotes}`;
	// 	}
	// };

	return (
		<div>
			{/* <p>{showVotes}</p> */}
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
