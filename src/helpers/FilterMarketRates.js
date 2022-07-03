const filter = [
  "Dolar Oficial",
  "Dolar Blue",
  "Dolar Contado con Liqui",
  "Dolar Bolsa",
];

const formatNumber = (value) => {
  return Number(value.replace(",", "."));
}

const filterMarketRates = (marketRates) => {
  const filteredMarket = {};
  marketRates.forEach((marketRate) => {
    if (filter.includes(marketRate.casa.nombre)) {
      if (marketRate.casa.nombre === filter[0]) {
        filteredMarket.oficial = {
          compra: formatNumber(marketRate.casa.compra),
          venta: formatNumber(marketRate.casa.venta),
          variacion: formatNumber(marketRate.casa.variacion),
        };
      }
      if (marketRate.casa.nombre === filter[1]) {
        filteredMarket.blue = {
          compra: formatNumber(marketRate.casa.compra),
          venta: formatNumber(marketRate.casa.venta),
          variacion: formatNumber(marketRate.casa.variacion),
        };
      }
      if (marketRate.casa.nombre === filter[2]) {
        filteredMarket.liqui = {
          compra: formatNumber(marketRate.casa.compra),
          venta: formatNumber(marketRate.casa.venta),
          variacion: formatNumber(marketRate.casa.variacion),
        };
      }
      if (marketRate.casa.nombre === filter[3]) {
        filteredMarket.bolsa = {
          compra: formatNumber(marketRate.casa.compra),
          venta: formatNumber(marketRate.casa.venta),
          variacion: formatNumber(marketRate.casa.variacion),
        };
      }
    }
  });
  filteredMarket.tarjeta = {
    compra: 0,
    venta: formatNumber((filteredMarket.oficial.venta + filteredMarket.oficial.venta * 0.30 + filteredMarket.oficial.venta * 0.30).toFixed(2)),
    variacion: 0
  }
  return filteredMarket;
};

export default filterMarketRates;
