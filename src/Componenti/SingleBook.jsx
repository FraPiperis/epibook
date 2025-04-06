import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea'; // Importa il componente CommentArea

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);
  const [reviews, setReviews] = useState([]); // Stato per le recensioni
  const [newReview, setNewReview] = useState(''); // Stato per il contenuto della nuova recensione
  const [rating, setRating] = useState(1); // Stato per il rating

  // Funzione per gestire il click sulla copertina
  const handleCoverClick = () => {
    setSelected(!selected); // Inverte il valore di selected
  };

  // Funzione per recuperare le recensioni dal server
  const fetchReviews = async () => {
    try {
      const response = await fetch(`https://tua-api.com/reviews?bookId=${book.id}`); //LA MIA API 
      const data = await response.json();
      setReviews(data); // Aggiorna lo stato con le recensioni
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // Funzione per inviare una recensione
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (newReview.trim() === '') {
      return; // Non inviare se il contenuto della recensione è vuoto
    }

    try {
      const response = await fetch('https://tua-api.com/reviews', { //LA MIA API 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookId: book.id,
          content: newReview,
          rating: rating,
        }),
      });

      if (response.ok) {
        // Ricarica le recensioni dopo aver inviato una nuova
        fetchReviews();
        setNewReview(''); // Pulisce l'input della recensione
      } else {
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  // Carica le recensioni quando il componente si monta
  useEffect(() => {
    fetchReviews();
  }, [book.id]); // Ricarica quando cambia il libro

  return (
    <Card>
      {/* Aggiungi un bordo rosso alla copertina se selected è TRUE */}
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        onClick={handleCoverClick}
        style={{
          cursor: 'pointer',
          border: selected ? '5px solid red' : 'none',
        }}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>

      {/* Seleziona recensioni */}
      <Card.Body>
        <h5>Recensioni</h5>
        {/* Mostra le recensioni esistenti */}
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id}>
              <strong>Rating: {review.rating}</strong>
              <p>{review.content}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet</p>
        )}

        {/* Form per scrivere una recensione */}
        <form onSubmit={handleSubmitReview}>
          <div>
            <label>Valutazione</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div>
            <label>Scrivi una recensione</label>
            <textarea
              rows={3}
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
          </div>
          <button type="submit">Invia recensione</button>
        </form>

        {/* Renderizza il componente CommentArea solo se il libro è selezionato */}
        {selected && <CommentArea bookId={book.id} />}
      </Card.Body>
    </Card>
  );
};

export default SingleBook;

