import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YyNGNjNzI2YTJlMjAwMTUwZmQxOTkiLCJpYXQiOjE3NDM5MzI2MTUsImV4cCI6MTc0NTE0MjIxNX0.hI9rjQRtyTbOIyKU63Rhk4iVVwD-RMI7ed4h43SLMzo';

const AddComment = ({ asin, setComments }) => {
  const [newComment, setNewComment] = useState({
    comment: '',
    rate: [1,2,3,4,5],
    elementId: "BOOK_ASIN", 
  });
  const [error, setError] = useState(null); // Stato per eventuali errori
  const [success, setSuccess] = useState(false); // Stato per il successo dell'operazione
  const [loading, setLoading] = useState(false); // Stato per il caricamento

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true); // Mostra lo spinner
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
        setSuccess(true); // Mostra il messaggio di successo
      } else {
        const errorData = await response.json();
        setError(`Errore durante l'invio del commento: ${errorData.message || 'Errore sconosciuto'}`);
      }
    } catch (error) {
      setError('Errore di rete: impossibile inviare il commento');
    } finally {
      setLoading(false); // Nascondi lo spinner
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
      <div className="d-flex align-items-center">
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? 'Adding...' : 'Add Comment'}
        </Button>
        {loading && (
          <Spinner
            animation="border"
            role="status"
            size="sm"
            className="ms-2"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </Form>
  );
};

export default AddComment;