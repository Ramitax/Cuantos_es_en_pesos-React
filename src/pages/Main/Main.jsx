import { Container } from "react-bootstrap";
import React from "react";
import "./Main.css";
import Calculator from "../../components/Calculator/Calculator";

const Main = ({ text, value, lastUpdate }) => {
  return (
    <>
      <Container className="w-100 h-100 m-0">
        <h1 className="pt-5 text-dark-mode">Calculadora de {text.title} a Peso Argentino</h1>
        <p className="text-dark-mode">
          El siguiente conversor se utiliza para calcular el precio del{" "}
          {text.subtitle} en pesos argentinos.
        </p>
        <Container className="mt-4 h-40">
          {
            value && (<Calculator value={value} lastUpdate={lastUpdate} />)
          }
        </Container>
        <Container className="mt-4 p-0 ">
          <h2 className="text-dark-mode">¿Que es el {text.title}?</h2>
          <p className="text-dark-mode">{text.description}</p>
        </Container>
      </Container>
    </>
  );
};

export default Main;
