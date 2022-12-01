import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/1 2.png";
import img2 from "../assets/2 2.png";
import img3 from "../assets/7.png";
import Button from "react-bootstrap/Button";
import fav from "../assets/9.png";
import gohan from "../assets/1.png";
import gyosas from "../assets/4.png";
//import Contact from "./Contact";
import Container from "react-bootstrap/esm/Container";

const Inicio = () => {
  return (
    <>
      <Container>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
        <p className="text-bg-light p-2">PLANNERS Y AGENDAS 2023</p>
          <Button size="lg">Ver Más</Button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption className="align-items-start">
        <p className="text-bg-light p-2">REGALOS, IDEAS Y MAS</p>
          <Button className="btn" size="lg">
            Ver Más</Button>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
      </Container>
      <Container>
        <Row>
      <CardGroup className="card">
        <Card>
          <Card.Img variant="top" src={fav} href="#" />
          <Card.Body>
            <Card.Title>Set de Organización</Card.Title>
            <Card.Text>
              ¡Siempre es mejor comprarlos en formato Set, escoge el que se acomode mas a tu estilo!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={gohan} />
          <Card.Body>
            <Card.Title>Eventos</Card.Title>
            <Card.Text>
              ¡Conoce nuestra amplia variedad de articulos de decoracion para tu fiesta soñada!
            </Card.Text>
          </Card.Body>

        </Card>
        <Card >
          <Card.Img variant="top" src={gyosas} />
          <Card.Body>
            <Card.Title>Venta Mayorista</Card.Title>
            <Card.Text>
              ¡Accede a los mejores precios comprando al por mayor!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </Row>
      </Container>
    </>
  );
};

export default Inicio;
