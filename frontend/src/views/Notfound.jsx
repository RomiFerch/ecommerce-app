import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/esm/Container';

const Notfound = () => {
  return (
      <Container >
        <h1>
            Not Found <Badge bg="secondary">404</Badge>
        </h1>
    </Container>
  )
}

export default Notfound