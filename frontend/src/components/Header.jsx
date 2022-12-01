import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo-5.png";
import { BsPersonCircle, BsFillBagFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Navbar className="navb" 
              variant="light" 
              sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{" "}
            <h4 className="d-inline-block fw-bold mt-4 mb-4 ps-3">Roomi Store</h4>
          </Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Products">Productos</Nav.Link>
            <Nav.Link href="/Contact">Contáctanos</Nav.Link>
          </Nav>
          <Nav className="ms-auto my-2 my-lg-0 ">
            <Nav.Link href="#">
              {" "}
              <BsFillBagFill size="2em" />
            </Nav.Link>
            <Nav.Link href="/Login">
              {" "}
              <BsPersonCircle size="2em" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
