//This will receive the post props
import React, { useState } from "react";
import PostCard from "./PostCard";

const Vote = ({ post }) => {
  //   const [votes, newVotes] = useState(0);
  let [vote, setVote] = useState(findVote());

  let [voteStatus, setVoteStatus] = useState(vote ? vote.status : null);
  //   const [upVotes, newUpVotes] = useState(0);
  //   const [downVotes, newDownVotes] = useState(0);

  //   console.log(vote);
  function findVote() {
    return post.votes.find(
      (vote) => vote.user_id === parseInt(localStorage.userId)
    );
  }

  const updateVote = () => {
    fetch(`http://localhost:3000/votes/${vote.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        status: voteStatus,
      }),
    })
      .then((res) => res.json())
      .then((vote) => console.log(""));
  };

  const postVote = () => {
    fetch(`http://localhost:3000/votes/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        post_id: post.id,
        user_id: localStorage.userId,
        status: voteStatus,
      }),
    })
      .then((res) => res.json())
      .then((vote) => console.log(""));
  };

  const handleVoteClick = async (e) => {
    // newDownVotes((downVotes -= 1));
    if (vote) {
      if (e.target.id === "upVoteButton") {
        await setVoteStatus(true);
        await updateVote();
      } else {
        console.log("downVote");
        await setVoteStatus(false);
        await updateVote();
      }
      //   console.log(voteStatus);
    } else {
      if (e.target.id === "upVoteButton") {
        await setVoteStatus(true);
      } else {
        await setVoteStatus(false);
      }
      await postVote();
    }

    await console.log(` from 73`);
  };

  return (
    <div>
      <button id="upVoteButton" onClick={handleVoteClick}>
        UpVote ↑
      </button>
      <br />
      <br />
      <button id="downVoteButton" onClick={handleVoteClick}>
        DownVote ↓
      </button>
    </div>
  );
};

export default Vote;
