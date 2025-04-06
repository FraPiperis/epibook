import { Alert, Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="mt-4">
      <Alert variant="info">
        Welcome to MyApp! We are glad to have you here.
      </Alert>
      <h1>Welcome to MyApp</h1>
    </Container>
  );
};

export default Welcome;
