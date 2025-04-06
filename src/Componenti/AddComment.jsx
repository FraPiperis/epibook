import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YyNGNjNzI2YTJlMjAwMTUwZmQxOTkiLCJpYXQiOjE3NDM5MzI2MTUsImV4cCI6MTc0NTE0MjIxNX0.hI9rjQRtyTbOIyKU63Rhk4iVVwD-RMI7ed4h43SLMzo';

const AddComment = ({ asin, setComments }) => {
  const [newComment, setNewComment] = useState({
    comment: '',
    rate: 1,
    elementId: asin,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify(newComment),
      });
      if (response.ok) {
        const addedComment = await response.json();
        setComments((prevComments) => [...prevComments, addedComment]); // Aggiorna i commenti
        setNewComment({ comment: '', rate: 1, elementId: asin }); // Resetta il form
        setSuccess(true);
      } else {
        setError('Errore durante l\'invio del commento');
      }
    } catch (error) {
      setError('Errore di rete');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Commento aggiunto con successo!</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="Write your comment here..."
          value={newComment.comment}
          onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rating (1-5)</Form.Label>
        <Form.Control
          type="number"
          min="1"
          max="5"
          value={newComment.rate}
          onChange={(e) => setNewComment({ ...newComment, rate: parseInt(e.target.value) })}
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Add Comment
      </Button>
    </Form>
  );
};

export default AddComment;