import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Vote from "./Vote";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const history = useHistory();

  const postClick = (id) => {
    history.push(`/posts/${id}`);
  };

  const postStatus = () => {
    if (props.post.score >= 1) {
      return "TRUE";
    } else if (props.post.score <= -1) {
      return "FALSE";
    } else {
      return "Undetermined";
    }
  };

  return (
    <Container fluid id="post">
      <div className="content">
        <Row>
          <Col>
            <h1 id="title" onClick={() => postClick(props.post.id)}>
              {props.post.title}
            </h1>
          </Col>

          <Col xs lg="3">
            <div className="voteButtons">
              <Button href={`/posts/${props.post.id}/edit`} variant="secondary">
                Edit
              </Button>
              <br />
              <span id="vote">
                {/* <strong> {props.post.score} people voted this true</strong> */}
                <strong> This was voted {postStatus()}</strong>
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

//if votes > 1 people voted this true
//else people voted this false

export default Post;
