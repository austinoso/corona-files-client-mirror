//This will receive the post props
import React, { useState } from "react";

const Vote = () => {
    const [votes, newVotes] = useState(0)
    // const [upVote, newUpVote] = useState(0)
    // const [downVote, newDownVote] = useState(0)



    handleUpVoteClick = () => {
        newVotes += 1
    }

    handleDownVoteClick = () => {
        newVotes -= 1
    }

    return <div>
        <p id="upButton"></p>
        <p id="downButton"></p>
    </div>;
};

export default Vote;
