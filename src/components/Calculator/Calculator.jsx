import { Form, Button, InputGroup, Alert, Container } from "react-bootstrap";
import React, { useState } from "react";
import "./Calculator.css";
import images from "../../assets/images/images.js";

const Calculator = ({ value, lastUpdate }) => {
  const [input, setInput] = useState(1.0);
  const [output, setOutput] = useState(input * value);
  const [show, setShow] = useState(true);

  const calculate = () => {
    if (input > 0) {
      setOutput(input * value);
    } else {
      // Lanzar modal donde diga que debe ser mayor a 0
    }
  };

  return (
    <Form className="w-100 h-100">
      <Form.Group className="mb-3">
        <Form.Label className="text-dark-mode">Cantidad de dolares (USD)</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <img src={images.flag_eeuu} />
          </InputGroup.Text>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </InputGroup>
        <Form.Label className="text-dark-mode">Cantidad de pesos (ARS)</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <img src={images.flag_arg} />
          </InputGroup.Text>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control type="number" value={output} disabled readOnly />
        </InputGroup>
        <Form.Label className="text-dark-mode">
          1 USD = <strong>{value}</strong> ARS
        </Form.Label>
        <Container className="m-0 p-0 text-dark-mode">
          <i className="fa-solid fa-calendar me-2 text-dark-mode"></i>El tipo de cambio fue
          actualizado hoy a las {lastUpdate}
        </Container>
      </Form.Group>
      <Button variant="primary" onClick={calculate}>
        Calcular
      </Button>
      {input < 0 ? (
        <Alert variant="danger" className="position-absolute top-0 end-0" onClose={() => {setShow(false); setInput(1)}} dismissible>
        <Alert.Heading>Ups, ocurrio un error!</Alert.Heading>
        <p>
          Recorda que no se puede tener dolares negativos, al menos que sean falsos.
        </p>
      </Alert>
      ) : null}
    </Form>
  );
};

export default Calculator;
