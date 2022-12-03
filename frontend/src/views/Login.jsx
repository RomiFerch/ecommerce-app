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
import "./stylesForm.css";

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
      <section>
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 fw-bold">Ingresar</h3>
                  <form>
                    {/* email */}
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                      {/* password */}
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="password">
                            Contraseña
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                      <div className="m-1 col-md-6 mb-4 pb-2">
                        <Link
                          to={tag === "register" ? "/login" : "/register"}
                          classNameName="text-center mt-4"
                        >
                          {tag === "register"
                            ? "Iniciar sesión"
                            : "Crear Cuenta"}
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
/* <Container>
<Row>
  <Col classNameName="mt-3">
    <Form>
      <h1 classNameName="py-2 fw-bold text-center mt-4 mb-4">Sign Up </h1>

      <Form.Group classNameName="mb-3" controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu Email"
          onChange={(e) => handleInput(e)}
        />
      </Form.Group>

      <Form.Group classNameName="mb-3" controlId="Password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          onChange={(e) => handleInput(e)}
        />
      </Form.Group>

      <Form.Group classNameName="mb-3" controlId="Checkbox">
        <Form.Check type="checkbox" label="Mantener sesión abierta" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        classNameName="btn-login rounded-pill"
        onClick={handleSign}
      >
        {tag === "login" ? "Iniciar sesión" : "Crear cuenta"}
      </Button>
      <Link
        to={tag === "register" ? "/login" : "/register"}
        classNameName="text-center mt-4"
      >
        {tag === "resgister" ? "Crear cuenta" : "Iniciar sesión"}
      </Link>
    </Form>
  </Col>

  <Col classNameName="col-md-6">
    <img src={imgl} alt="" classNameName="d-inline-block w-100" />
  </Col>
</Row>
</Container> */
