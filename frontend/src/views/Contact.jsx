import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
   <Container className='w-100 my-5' >  
   <div className='container-flex my-3 p-2'>
        <h1>En Sushi Foodtruck</h1> <h3> Estamos encantados de responder a todas tus consultas</h3> 
        <h5>Completa los siguientes datos y te contactaremos a la brevedad</h5>
   </div>
    <InputGroup className="mb-3">
      <InputGroup.Text>Nombre y Apellido</InputGroup.Text>
      <Form.Control aria-label="Nombre"placeholder="Nombre" />
      <Form.Control aria-label="Apellido" placeholder="Apellido" />
    </InputGroup>
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Email">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
        >
          <Form.Select aria-label="Floating label select example">
            <option>Selecciona una opción</option>
            <option value="1">Consultas</option>
            <option value="2">Felicitaciones, sugerencias y/o Reclamos</option>
            <option value="3">Eventos</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
    <Row>
    <Form.Group className="mb-3 my-4" controlId="Mensaje">
        <Form.Label  column="lg">Dejanos tu mensaje</Form.Label>
        <Form.Control size="lg" type='text' rows={3} placeholder="Escribe aquí"/>
      </Form.Group>
      </Row>
    </Container>
  );
}

export default Contact;