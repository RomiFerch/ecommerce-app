import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgl from "../assets/12.png";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = ({ tag }) => {

  const state = useContext(UserContext);
  console.log(state);

  const [user, setUser] = useState({});
  useEffect(() => {

    document.title = tag === "login" ? "Iniciar sesión" : "Registro";
  }, [tag]);
//en UserProvider se crean las funciones  
  const iniciarSesion = () => {
    console.log("iniciar");
  };
  //Al presionar el boton si el tag es login. El tag llega por parametro desde App.js, al recibir ese tag se hace la condicional ejecuta la funcion del state del user provider, 
  const handleSign = () => {
    if (tag === "login") iniciarSesion();
    else state.crearCuenta(user);
  };
  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="mt-3">
            <Form>
              <h1 className="py-2 fw-bold text-center mt-4 mb-4">Sign Up </h1>

              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu Email"
                  onChange={(e) => handleInput(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  onChange={(e) => handleInput(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Checkbox">
                <Form.Check type="checkbox" label="Mantener sesión abierta" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="btn-login rounded-pill"
                onClick={handleSign}
              >
                {tag === "login" ? "Iniciar sesión" : "Crear cuenta"}
              </Button>
              <Link
                to={tag === "login" ? "/signup" : "/login"}
                className="text-center mt-4"
              >
                {tag === "login" ? "Crear cuenta" : "Iniciar sesión"}
              </Link>
            </Form>
          </Col>

          <Col className="col-md-6">
            <img src={imgl} alt="" className="d-inline-block w-100" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
