import axios from "axios";

const populationApi = axios.create({
  baseURL: "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
});

const cryptoApi = axios.create({
  baseURL: "https://api.coindesk.com/v1/bpi/currentprice.json",
});

export { populationApi, cryptoApi };
