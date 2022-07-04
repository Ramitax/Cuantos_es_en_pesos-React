import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Main from "./pages/Main/Main";
import FilterMarketRates from "./helpers/FilterMarketRates";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Spinner from "react-bootstrap/Spinner";
import NavMenu from "./components/Navbar/NavMenu";
import { Toaster } from 'react-hot-toast';
import "animate.css";

export const ThemeContext = React.createContext("light");

function App() {
  const jsonText = require("./assets/text/text.json");
  const [theme, setTheme] = useState("light");
  const [lastUpdate, setLastUpdate] = useState("");
  const [marketRates, setMarketRates] = useState();
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, [theme]);

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) {
      setTheme(theme);
    }
    const date = new Date();
    setLastUpdate(date.getHours() + " : " + date.getMinutes());
    getData();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Col id={theme} className="vh-100 vw-100 m-0">
          <Row className="m-0 h-8">
            <NavMenu toggleTheme={toggleTheme} theme={theme} />
          </Row>
          <Toaster />
          <Row className="h-92 m-0">
            {!loading ? (
              <Container className="w-75">
                {marketRates ? (
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Home
                          marketRates={marketRates}
                          lastUpdate={lastUpdate}
                        />
                      }
                    />
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
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                ) : null}
              </Container>
            ) : (
              <Container className="w-75 d-flex justify-content-center align-items-center">
                <Spinner animation="border" />
              </Container>
            )}
          </Row>
        </Col>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
