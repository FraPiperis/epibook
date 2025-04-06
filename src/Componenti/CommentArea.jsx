import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);  // Stato per memorizzare le recensioni
  const [loading, setLoading] = useState(true);  // Stato per la gestione del caricamento

  // Esegui la fetch delle recensioni al montaggio del componente
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Esegui una fetch per ottenere le recensioni
        const response = await fetch(`https://tua-api.com/reviews?bookId=${bookId}`);
        const data = await response.json();
        setReviews(data);  // Salva le recensioni nel suo stato
        setLoading(false);  // Imposta il caricamento su false quando i dati sono pronti
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);  // Imposta il caricamento su false anche in caso di errore
      }
    };

    fetchReviews();
  }, [bookId]);  // Esegui nuovamente la fetch se bookId cambia

  // Mostra un messaggio di caricamento mentre i dati non sono pronti
  if (loading) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div>
      <h5>Recensioni</h5>
      {/* Rende la lista delle recensioni */}
      <CommentList reviews={reviews} />
      
      {/* Componente per aggiungere una nuova recensione */}
      <AddComment bookId={bookId} setReviews={setReviews} />
    </div>
  );
};

export default CommentArea;



