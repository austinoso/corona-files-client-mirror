import React from 'react';


 const Post = (props) => {

    return (
		<div>
			<h1>{props.post.title}</h1>
			<p>{props.post.content}</p>
            <p>Posted by:{props.post.user.username} ⚉ </p>
            <p>{props.post.article_link}</p>
            <button>UpVote ↑ </button>
            <button>DownVote ↓ </button>
		</div>
	);



}

export default Post;



