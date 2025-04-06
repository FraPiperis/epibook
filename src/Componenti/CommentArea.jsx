import React, { useEffect, useState, useContext } from 'react'
import { ListGroup, Form, Button, Spinner, Alert } from 'react-bootstrap'
import DeletePutCommentsComponent from './Componenti/DeletePut.jsx'
import { ThemeContext } from '../../modules/context'

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YyNGNjNzI2YTJlMjAwMTUwZmQxOTkiLCJpYXQiOjE3NDM5MzI2MTUsImV4cCI6MTc0NTE0MjIxNX0.hI9rjQRtyTbOIyKU63Rhk4iVVwD-RMI7ed4h43SLMzo'

export default function CommentAreaComponent({ asin }) {

  const url = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;

  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin
  })
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useContext(ThemeContext)


  
  const fetchComments = async () => {
    if (!asin) return
    setLoading(true)
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        const data = await response.json()
        setComments(data)
      }
    } catch (error) {
      console.log('Errore nel caricamento commenti:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setNewComment(prev => ({ ...prev, elementId: asin }))
    fetchComments()
  }, [asin])
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify({...newComment, elementId: asin})
    })

      if (response.ok) {
        
        await fetchComments()

        setNewComment({
          comment: "", rate: 1, elementId: asin,
        })
        alert('Comment was sent!')
      } else {
        const errorText = await response.text()
        console.log(response.status, errorText)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  
  return (
    <div className="mt-4">
    <h3 className={`text-${theme === 'dark' ? 'dark' : 'light'} fw-bold text-center mb-4`}>
      Leave a comment for your favourite book!
    </h3>

    {!asin ? (
        <Alert variant='info'>Select a book to see its comments!</Alert>
      ) : loading ? (
        <div className='text-center my-3'>
          <Spinner animation='grow' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
     <ListGroup as="ol" numbered bg={theme} data-bs-theme={theme}>
      {comments.map((comment, i) => (
       <ListGroup.Item key={i} as="li">
         {comment.comment} - Rating: {comment.rate}
         <DeletePutCommentsComponent comment={comment} onCommentUpdate={fetchComments} />
       </ListGroup.Item>
      ))}
    </ListGroup>

      <Form onSubmit={handleSubmit} className="my-4" bg={theme} data-bs-theme={theme}>
        <Form.Group className="mb-3">
          <Form.Label className={`text-${theme === 'dark' ? 'dark' : 'light'}`}>Comment</Form.Label>
          <Form.Control
            type="text"
            value={newComment.comment}
            onChange={(e) => setNewComment({...newComment, comment: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className={`text-${theme === 'dark' ? 'dark' : 'light'}`}>Rating (1-5)</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="5"
            value={newComment.rate}
            onChange={(e) => {
              const value = e.target.value === '' ? 1 : parseInt(e.target.value)
              setNewComment({...newComment, rate:value})
            }}
          />
        </Form.Group>
        <Button type="submit" variant='success' disabled={loading}>
          <span><i className="bi bi-send-plus me-2"></i></span>
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
    'Send Comment'
  )}
</Button>
      </Form>
    </>
  )}
  </div>
  )
}