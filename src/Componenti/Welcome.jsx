// Welcome.jsx
import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Welcome to EPIBOOK!</h1>
      <Alert variant="success">
        <h4>Welcome</h4>
        <p>We're glad to have you here. Start exploring our features and enjoy the experience!</p>
      </Alert>
    </Container>
  );
};

export default Welcome;
