import { Container, Table, Card } from "react-bootstrap";
import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Update from "../../components/Update/Update";

const Home = ({ marketRates, lastUpdate }) => {
  return (
    <>
      <Container className="animate__animated animate__slideInLeft">
        <Header
          title={`Bienvenido a cuanto es en pesos`}
          subtitle={`Nuestro sistema se conecta directamente a la plataforma de DolarSi para obtener un listado de los valores del dolar en la Republica Argentina.`}
        />
        <Table bordered responsive className="mt-5 text-dark-mode">
          <thead>
            <tr>
              <th>Tipo Dolar</th>
              <th>Compra</th>
              <th>Venta</th>
              <th>Variacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blue</td>
              <td>{marketRates.blue.compra}</td>
              <td>{marketRates.blue.venta}</td>
              <td>{marketRates.blue.variacion}</td>
            </tr>
            <tr>
              <td>Tarjeta</td>
              <td>{marketRates.tarjeta.compra}</td>
              <td>{marketRates.tarjeta.venta}</td>
              <td>{marketRates.tarjeta.variacion}</td>
            </tr>
            <tr>
              <td>Oficial</td>
              <td>{marketRates.oficial.compra}</td>
              <td>{marketRates.oficial.venta}</td>
              <td>{marketRates.oficial.variacion}</td>
            </tr>
            <tr>
              <td>Contado con Liqui</td>
              <td>{marketRates.liqui.compra}</td>
              <td>{marketRates.liqui.venta}</td>
              <td>{marketRates.liqui.variacion}</td>
            </tr>
            <tr>
              <td>Bolsa</td>
              <td>{marketRates.bolsa.compra}</td>
              <td>{marketRates.bolsa.venta}</td>
              <td>{marketRates.bolsa.variacion}</td>
            </tr>
          </tbody>
        </Table>
        <Container className="m-0 p-0 text-dark-mode">
          <Update lastUpdate={lastUpdate} />
        </Container>
      </Container>
    </>
  );
};

export default Home;
