const fetch = require("node-fetch");

function getData() {
  return fetch(
    "https://raw.githubusercontent.com/NickRance/YHack2017/master/minmax.json"
  ).then(res => res.json());
}

function getCountryPriceRanges(country) {
  let airportKeys = Object.keys(country);
  let airports = airportKeys.map(key => country[key]);
  let minPrice = Infinity,
    maxPrice = -Infinity;
  for (let airport of airports) {
    if (airport.operationCost > maxPrice) maxPrice = airport.operationCost;
    if (airport.operationCost < minPrice) minPrice = airport.operationCost;
  }
  return { minPrice, maxPrice };
}
function getRegionPriceRanges(procedure) {
  return getData().then(data => {
    data = data[procedure];
    let regionKeys = Object.keys(data);
    let regions = regionKeys.map(key => data[key]);
    return regions.map(region => {
      let countryKeys = Object.keys(region);
      let countryPrices = countryKeys.map(key =>
        getCountryPriceRanges(region[key])
      );
      let minPrice = Infinity,
        maxPrice = -Infinity;
      for (let countryPrice of countryPrices) {
        if (countryPrice.maxPrice > maxPrice) maxPrice = countryPrice.maxPrice;
        if (countryPrice.minPrice < minPrice) minPrice = countryPrice.minPrice;
      }
      return {
        minPrice,
        maxPrice
      };
    });
  });
}
getRegionPriceRanges("Heart Bypass").then(prices => {
  console.log(prices);
});
