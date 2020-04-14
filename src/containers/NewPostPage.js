import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap'

const NewPost = () => {
    let [postLink, newPostLink] = useState('')
    let [postTitle, newPostTitle] = useState('')
    let [postContent, newPostContent] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = (event.target)
        fetch(`http://localhost:3000/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                postLink, postTitle, postContent
            })
        })
    }
    
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

    <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
    </Button>
    </Form>
    )
}

export default NewPost
