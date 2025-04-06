import React, { useState, useEffect } from 'react';
import CommentList from './CommentList'; // Importa il componente CommentList
import AddComment from './AddComment'; // Importa il componente AddComment
import { Spinner, Alert } from 'react-bootstrap';

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YyNGNjNzI2YTJlMjAwMTUwZmQxOTkiLCJpYXQiOjE3NDM5MzI2MTUsImV4cCI6MTc0NTE0MjIxNX0.hI9rjQRtyTbOIyKU63Rhk4iVVwD-RMI7ed4h43SLMzo';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]); // Stato per le recensioni
  const [loading, setLoading] = useState(false); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per eventuali errori

  useEffect(() => {
    if (!asin) return; // Evita di effettuare la fetch se asin non è disponibile

    const fetchComments = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          setError('Errore nel recupero delle recensioni');
        }
      } catch (error) {
        setError('Errore di rete');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [asin]);

  if (!asin) {
    return <p className="text-center">Seleziona un libro per vedere i commenti</p>;
  }

  return (
    <div className="mt-4">
      <h5>Comments</h5>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <div className="text-center my-3">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <CommentList comments={comments} setComments={setComments} />
          <AddComment asin={asin} setComments={setComments} />
        </>
      )}
    </div>
  );
};

export default CommentArea;