import React from 'react'
import { Form, Button} from 'react-bootstrap'
// import Button from 'react-bootstrap'
const NewPost = () => {
    return (
    <Form>
    <Form.Group controlId="articleLink">
        <Form.Label>Article Link:</Form.Label>
        <Form.Control type="link" />
    </Form.Group>

    <Form.Group controlId="articleTitle">
        <Form.Label>Article Title:</Form.Label>
        <Form.Control type="title"  />
    </Form.Group>    
    <Form.Group controlId="articleContent">
        <Form.Label>Article Content Summary:</Form.Label>
        <Form.Control type="content"  />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    )
}

export default NewPost
