import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://ecommerce-api-d47f1-default-rtdb.firebaseio.com/",
  headers: { Accept: "application/json" },
});

export default ApiClient;
