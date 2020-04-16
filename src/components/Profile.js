import React, { useState } from 'react';

const Profile = (props) => {
   console.log(props)
  
    return (
    
      <div id="register">
      <div id="content">
      <h1 id="title">{props.post.title}</h1>
      <p id="content">{props.post.content}</p>
      <p id="">{props.post.article_link}</p>
     
            
      </div>
      </div>
     
    );
   
  }
  export default Profile;
  
  
  
  
