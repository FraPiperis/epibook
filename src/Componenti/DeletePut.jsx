import React, { useState } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'
import CommentAreaComponent from './CommentArea.jsx';

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YyNGNjNzI2YTJlMjAwMTUwZmQxOTkiLCJpYXQiOjE3NDM5MzI2MTUsImV4cCI6MTc0NTE0MjIxNX0.hI9rjQRtyTbOIyKU63Rhk4iVVwD-RMI7ed4h43SLMzo'

export default function DeletePutCommentsComponent( { comment, onCommentUpdate }) {

  const putDelurl = `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`;

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [editedRate, setEditedRate] = useState(comment.rate);
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    try {
      const response = await fetch(putDelurl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      }
    )
    if (response.ok) {
      alert('Comment deleted!')
      onCommentUpdate()
    }
  } catch (error) {
    console.log('Error:', error)
  }
}

  const handleEdit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const response = await fetch(putDelurl, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify({ comment: editedComment, rate: editedRate,}),
      }
    )
     if (response.ok) {
       setIsEditing(false)
       alert('Comment updated!')
       onCommentUpdate()
     }
    } catch (error) {
      console.log('Error:', error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="d-flex align-items-center justify-content-between mt-2">
      {isEditing ? (
        <Form onSubmit={handleEdit} className="w-100">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              min="1"
              max="5"
              value={editedRate}
              onChange={(e) => setEditedRate(parseInt(e.target.value))}
            />
          </Form.Group>
          <Button type="submit" size='sm' variant="warning" className="me-2" disabled={loading}>
            <span><i className="bi bi-floppy me-2"></i></span>
          {loading ? (
           <>
             <Spinner
             as="span"
             animation="grow"
             size="sm"
             role="status"
            aria-hidden="true"
            className="me-2"
             />
            Loading...
          </>
            ) : (
            'Save changes'
          )}
          </Button>
          <Button variant="secondary" size='sm' onClick={() => setIsEditing(false)}>
            <span><i className="bi bi-skip-backward me-2"></i></span>
            Back
          </Button>
        </Form>
        ) : (
          <>
            <Button variant="warning" size='sm' onClick={() => setIsEditing(true)} className="me-2">
              <span><i className="bi bi-pen me-2"></i></span>
              Edit
            </Button>
            <Button variant="danger" size='sm' onClick={handleDelete}>
              <span><i className="bi bi-trash me-2"></i></span>
              Delete
            </Button>
          </>
        )}
      </div>
  )
}