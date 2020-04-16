import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import GoogleMapsAutoCompleteForm from "../components/GoogleMapsAutoCompleteForm";

const UpdatePost = ({ match }) => {
  const [currentLink, newLink] = useState("");
  const [currentTitle, newTitle] = useState("");
  const [currentContent, newContent] = useState("");
  const [currentLocation, newLocation] = useState("");

  //Fetch post from match.params.id

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${match.params.id}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((post) => setState(post));
  }, []);

  const setState = (post) => {
    console.log(post);
    newLink(post.article_link);
    newTitle(post.title);
    newContent(post.content);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/posts/${match.params.id}/`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        article_link: currentLink,
        title: currentTitle,
        content: currentContent,
        user_id: parseInt(localStorage.userId),
        location_lat: currentLocation.lat,
        location_long: currentLocation.lng,
      }),
    })
      .then((resp) => resp.json())
      .then(console.log);
  };

  const handleDelete = () => {
    fetch(`http://localhost:3000/posts/${match.params.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(() => {
        console.log("removed");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="user-form mx-auto" id="register">
      <h1>Edit Post</h1>
      <Form>
        <Form.Group controlId="articleLink">
          <Form.Label>Article Link:</Form.Label>
          <Form.Control
            type="link"
            value={currentLink}
            onChange={(e) => newLink(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="articleTitle">
          <Form.Label>Edit Article Title:</Form.Label>
          <Form.Control
            type="title"
            value={currentTitle}
            onChange={(e) => newTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="articleContent">
          <Form.Label>Edit Article Content Summary:</Form.Label>
          <Form.Control
            type="text"
            value={currentContent}
            onChange={(e) => newContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>

        <Button variant="danger" type="delete" onClick={handleDelete}>
          Delete Post
        </Button>
      </Form>
    </div>
  );
};

export default UpdatePost;
