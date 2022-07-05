import { Container, Table } from "react-bootstrap";
import React from "react";
import Header from "../../components/Header/Header";
import Update from "../../components/Update/Update";
import MarketRatesTable from "../../components/MarketRatesTable/MarketRatesTable";

const Home = ({ marketRates, lastUpdate }) => {
  return (
    <>
      <Container className="animate__animated animate__slideInLeft">
        <Header
          title={`Bienvenido a cuanto es en pesos`}
          subtitle={`Nuestro sistema se conecta directamente a la plataforma de DolarSi para obtener un listado de los valores del dolar en la Republica Argentina.`}
        />
        <MarketRatesTable marketRates={marketRates}></MarketRatesTable>
        <Container className="mb-4 mt-4 p-0 text-dark-mode">
          <Update lastUpdate={lastUpdate} />
        </Container>
      </Container>
    </>
  );
};

export default Home;
