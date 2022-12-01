import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CartContext from "../context/CartContent";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Products() {
  const [articles, setArticles] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/products`);
        const data = await response.json();
        console.log(data);
        setArticles(data.products);
      } catch (error) {}
    };
    getProducts();
  }, []);
  return (
    <>
      <div>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Mas Vendidos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Pizarras</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Organizadores</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled">Ofertas</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Container>
        <Row>
          {articles.map((product) => {
            return (
              <Col>
                <Card 
                key={product._id} 
                style={{ width: "18rem" }}
                
                >
                  <Card.Img variant="top" src={product.imagen} />
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      {product.nombre}
                    </Card.Title>
                    <Card.Text className="fw-bold text-success" as="h4">
                      ${product.precio}
                    </Card.Text>
                    <div className="box-btn">
                      <Button 
                      className="btn-add" 
                      type="submit"
                      
                      >
                        Agregar
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
