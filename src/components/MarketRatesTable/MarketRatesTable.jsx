import { Table } from "react-bootstrap";
import "./MarketRatesTable.css";

const MarketRatesTable = ({ marketRates }) => {
  return (
    <Table bordered responsive className="mt-5 text-dark-mode table-small">
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
  );
};

export default MarketRatesTable;
