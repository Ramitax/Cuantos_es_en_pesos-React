import { Form, Button, InputGroup, Alert, Container } from "react-bootstrap";
import React, { useState } from "react";
import "./Calculator.css";
import images from "../../assets/images/images.js";
import Update from "../Update/Update";
import toast from 'react-hot-toast';

const Calculator = ({ value, lastUpdate }) => {
  const [input, setInput] = useState(1.0);

  const copy = () => {
    toast.success('Copiado en el portapapeles');
    navigator.clipboard.writeText((input * value).toFixed(2))
  }
  
  const handlingError = () => {
    toast.error("Los dolares deben ser positivos");
    setInput(input * -1);
  }

  return (
    <Form className="w-100 h-100">
      <Form.Group className="mb-3">
        <Form.Label className="text-dark-mode">
          Cantidad de dolares (USD)
        </Form.Label>
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
        <Form.Label className="text-dark-mode">
          Cantidad de pesos (ARS)
        </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <img src={images.flag_arg} />
          </InputGroup.Text>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            type="number"
            value={(input * value).toFixed(2)}
            disabled
            readOnly
          />
          <Button
            variant="outline-secondary"
            onClick={copy}
          >
            <i className="fa-solid fa-copy"></i>
          </Button>
        </InputGroup>
        <Form.Label className="text-dark-mode">
          1 USD = <strong>{value}</strong> ARS
        </Form.Label>
        <Container className="m-0 p-0 text-dark-mode">
          <Update lastUpdate={lastUpdate} />
        </Container>
      </Form.Group>
      {input < 0 ? handlingError() : null}
    </Form>
  );
};

export default Calculator;
