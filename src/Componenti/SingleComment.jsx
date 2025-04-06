import React, { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YyNGNjNzI2YTJlMjAwMTUwZmQxOTkiLCJpYXQiOjE3NDM5MzI2MTUsImV4cCI6MTc0NTE0MjIxNX0.hI9rjQRtyTbOIyKU63Rhk4iVVwD-RMI7ed4h43SLMzo';

const SingleComment = ({ comment, setComments }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [editedRate, setEditedRate] = useState(comment.rate);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });
      if (response.ok) {
        setComments((prevComments) => prevComments.filter((c) => c._id !== comment._id));
      }
    } catch (error) {
      console.error('Errore durante l\'eliminazione del commento');
    }
  };

  const handleEdit = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify({
          comment: editedComment,
          rate: editedRate,
        }),
      });
      if (response.ok) {
        const updatedComment = await response.json();
        setComments((prevComments) =>
          prevComments.map((c) => (c._id === comment._id ? updatedComment : c))
        );
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Errore durante la modifica del commento');
    }
  };

  return (
    <ListGroup.Item>
      {isEditing ? (
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Rating (1-5)</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="5"
              value={editedRate}
              onChange={(e) => setEditedRate(parseInt(e.target.value))}
            />
          </Form.Group>
          <Button variant="success" onClick={handleEdit} className="me-2">
            Save
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </Form>
      ) : (
        <>
          <strong>Rating:</strong> {comment.rate} <br />
          <strong>Comment:</strong> {comment.comment}
          <div className="mt-2">
            <Button variant="danger" size="sm" onClick={handleDelete} className="me-2">
              Delete
            </Button>
            <Button variant="warning" size="sm" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          </div>
        </>
      )}
    </ListGroup.Item>
  );
};

export default SingleComment;