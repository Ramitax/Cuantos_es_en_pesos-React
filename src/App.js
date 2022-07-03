import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Main from "./pages/Main/Main";
import FilterMarketRates from "./helpers/FilterMarketRates";
import Switch from "react-switch";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const ThemeContext = React.createContext("light");

function App() {
  const jsonText = require("./assets/text/text.json");
  const [theme, setTheme] = useState("light");
  const [lastUpdate, setLastUpdate] = useState("");
  const [marketRates, setMarketRates] = useState();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getData = async () => {
    const data = await fetch(
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    );
    const marketData = await data.json();
    if (marketData.length > 0 && marketData) {
      const filteredMarket = FilterMarketRates(marketData);
      setMarketRates(filteredMarket);
    }
  };

  useEffect(() => {
    const date = new Date();
    setLastUpdate(date.getHours() + " : " + date.getMinutes());
    getData();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Col id={theme} className="vh-100 vw-100 m-0">
          <Row className="m-0 h-8">
            <Navbar className="nav-menu d-flex justify-content-between align-items-center">
              <Navbar.Brand className="text-dark-mode">
                <Link className="nav-link text-dark-mode" to="/home">
                  ¿ Cuantos es en pesos ?
                </Link>
              </Navbar.Brand>
              <Nav className="nav">
                <Link className="nav-link" to="/blue">
                  Blue
                </Link>
                <Link className="nav-link" to="/tarjeta">
                  Tarjeta
                </Link>
                <Link className="nav-link" to="/oficial">
                  Oficial
                </Link>
                <Link className="nav-link" to="/liqui">
                  Contado con Liqui
                </Link>
                <Link className="nav-link" to="/bolsa">
                  Dolar Bolsa
                </Link>
              </Nav>
              <Switch onChange={toggleTheme} checked={theme === "dark"} />
            </Navbar>
          </Row>
          <Row className="h-92 m-0">
            <Container className="w-75">
              {marketRates ? (
                <Routes>
                  <Route
                    path="/blue"
                    element={
                      <Main
                        text={jsonText.blue}
                        value={marketRates.blue.venta}
                        lastUpdate={lastUpdate}
                      />
                    }
                  />
                  <Route
                    path="/tarjeta"
                    element={
                      <Main
                        text={jsonText.tarjeta}
                        value={marketRates.tarjeta.venta}
                        lastUpdate={lastUpdate}
                      />
                    }
                  />
                  <Route
                    path="/oficial"
                    element={
                      <Main
                        text={jsonText.oficial}
                        value={marketRates.oficial.venta}
                        lastUpdate={lastUpdate}
                      />
                    }
                  />
                  <Route
                    path="/liqui"
                    element={
                      <Main
                        text={jsonText.liqui}
                        value={marketRates.liqui.venta}
                        lastUpdate={lastUpdate}
                      />
                    }
                  />
                  <Route
                    path="/bolsa"
                    element={
                      <Main
                        text={jsonText.bolsa}
                        value={marketRates.bolsa.venta}
                        lastUpdate={lastUpdate}
                      />
                    }
                  />
                </Routes>
              ) : null}
            </Container>
          </Row>
        </Col>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

/*
{
{marketRates && (
              <Route path="/blue">
                <Main
                  text={jsonText.blue}
                  value={marketRates.blue.venta}
                  lastUpdate={lastUpdate}
                />
              </Route>
            )}


*/
export default App;
