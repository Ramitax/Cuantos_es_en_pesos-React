import { Container } from "react-bootstrap";
import React from "react";
import "./Main.css";
import Calculator from "../../components/Calculator/Calculator";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Main = ({ text, value, lastUpdate }) => {
  return (
    <>
      <Container className="w-100 h-100 m-0 animate__animated animate__slideInLeft">
        <Header
          title={`Calculadora de ${text.title} a Peso Argentino`}
          subtitle={`El siguiente conversor se utiliza para calcular el precio del ${text.subtitle} en pesos argentinos.`}
        />
        <Container className="mt-4 h-40">
          {value && <Calculator value={value} lastUpdate={lastUpdate} />}
        </Container>
        <Container className="p-0 m-0">
          <Footer
            question={`Que es el ${text.title}`}
            description={text.description}
          />
        </Container>
      </Container>
    </>
  );
};

export default Main;
