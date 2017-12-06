export function recommendAPI(procedure) {
  return getData().then(data => {
    let region = cheapestContinentForProcedure(procedure, data);
    let continent = data[procedure][region];
    let country = cheapestCountryForContinent(continent);
    let flights = flightsAsArray(continent[country]);
    return {
      country,
      region,
      flights
    };
  });
}
function getData() {
  return fetch(
    "https://raw.githubusercontent.com/NickRance/YHack2017/master/minmax.json"
  ).then(res => res.json());
}
export function getFlightsForCountry(procedure, region, country) {
  return getData().then(data => {
    let countryData = data[procedure][region][country];
    return flightsAsArray(countryData);
  });
}

function flightsAsArray(country) {
  let flights = [];
  for (let key of Object.keys(country)) {
    let airport = country[key];
    let flight = {
      airport: key,
      price: parseInt(airport.flightMax) + parseInt(airport.operationCost)
    };
    flights.push(flight);
  }
  return flights;
}

function cheapestAirportForCountry(country) {
  let minKey,
    minVal = Infinity;
  for (let key of Object.keys(country)) {
    let val = parseInt(country[key]["operationCost"]);
    if (val < minVal) {
      minKey = key;
      minVal = val;
    }
  }
  return minKey;
}
function cheapestCountryForContinent(continent) {
  let minKey,
    minVal = Infinity;
  for (let key of Object.keys(continent)) {
    let country = continent[key];
    let cheapestAirport = cheapestAirportForCountry(country);
    let val = parseInt(country[cheapestAirport]["operationCost"]);
    if (val < minVal) {
      minKey = key;
      minVal = val;
    }
  }
  return minKey;
}
function cheapestContinentForProcedure(procedure, data) {
  let continents = data[procedure];
  let minKey,
    minVal = Infinity;
  for (let key of Object.keys(continents)) {
    let continent = continents[key];
    let cheapestCountry = continent[cheapestCountryForContinent(continent)];
    let cheapestAirport = cheapestAirportForCountry(cheapestCountry);
    console.log(cheapestCountry);
    let val = parseInt(cheapestCountry[cheapestAirport]["operationCost"]);
    if (val < minVal) {
      minKey = key;
      minVal = val;
    }
  }
  return minKey;
}
export function getRegionPriceRanges(procedure) {
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
export function getCountryPriceRanges(country) {
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
export function getCountriesForRegion(region) {
  return getData().then(data => {
    data = data["Heart Bypass"][region];
    return Object.keys(data).map(key => ({
      name: key,
      ...getCountryPriceRanges(data[key])
    }));
  });
}
export function getProcedures() {
  return getData().then(data => {
    return Object.keys(data);
  });
}
