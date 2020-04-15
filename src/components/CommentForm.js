import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CommentForm = ({ postId, addComment }) => {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    submitForm();
  }

  function submitForm() {
    const config = {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        post_id: postId,
        user_id: parseInt(localStorage.userId),
        content,
      }),
    };
    console.log("submitting..", config);
    fetch("http://localhost:3000/comments", config)
      .then((resp) => resp.json())
      .then((comment) => addComment(comment));
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="content" className="comment">
          <Form.Control
            onChange={(e) => setContent(e.target.value)}
            as="textarea"
            rows="2"
            placeholder="Your Thoughts?"
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CommentForm;
