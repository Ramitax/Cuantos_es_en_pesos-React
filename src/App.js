import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import Main from "./pages/Main/Main";
import FilterMarketRates from "./helpers/FilterMarketRates";
import axios from "axios";

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
      <Col id={theme} className="vh-100 vw-100 m-0">
        <Row className="m-0 h-8">
          <NavMenu toggleTheme={toggleTheme} theme={theme} />
        </Row>
        <Row className="h-92 m-0">
          <Container className="w-75">
            {marketRates && (
              <Main
                text={jsonText.blue}
                value={marketRates.blue.venta}
                lastUpdate={lastUpdate}
              />
            )}
          </Container>
        </Row>
      </Col>
    </ThemeContext.Provider>
  );
}

/*
{
              marketRates ? () => (
                <Main text={jsonText.blue} value={50} lastUpdate={lastUpdate}/>
              ) : null
            }


*/
export default App;
