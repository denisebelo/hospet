import axios from "axios";

const api = axios.create({
  baseURL: "https://server-hospet.herokuapp.com",
});

export default api;
