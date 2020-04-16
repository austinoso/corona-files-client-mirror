import React, { Component } from 'react';
import { ButtonGroup } from 'react-bootstrap';

export class Vote extends Component {
	state = {
		vote: this.findVote(),
		status: null,
	};

	// this.props = { post };
	findVote() {
		return this.props.post.votes.find(
			(vote) => vote.user_id === parseInt(localStorage.userId)
		);
	}

	updateVote = () => {
		fetch(`http://localhost:3000/votes/${this.state.vote.id}`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				status: this.state.status,
			}),
		})
			.then((res) => res.json())
			.then((vote) => console.log('PATCHED VOTE', vote));
	};

	postVote = () => {
		fetch(`http://localhost:3000/votes/`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				post_id: this.props.post.id,
				user_id: parseInt(localStorage.userId),
				status: this.state.status,
			}),
		})
			.then((res) => res.json())
			.then((vote) => console.log(vote));
	};

	handleVoteClick = async (event) => {
		if (event.target.id === 'upVoteButton') {
			console.log('up');
			await this.setState({ status: true });
			if (this.state.vote) {
				console.log(this.state.status);
				this.updateVote();
			} else {
				this.postVote();
			}
		} else if (event.target.id === 'downVoteButton') {
			console.log('down');
			await this.setState({ status: false });
			if (this.state.vote) {
				console.log(this.state.status);
				this.updateVote();
			} else {
				this.postVote();
			}
		}
	};

	render() {
		return (
			<div>
				<ButtonGroup>
					<button className="upVoteButton" onClick={this.handleVoteClick}>
						True ↑
					</button>
					<br />
					<br />
					<button className="downVoteButton" onClick={this.handleVoteClick}>
						False ↓
					</button>
				</ButtonGroup>
			</div>
		);
	}
}

export default Vote;
