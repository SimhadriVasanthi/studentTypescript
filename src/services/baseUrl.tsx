import axios from "axios";

const api = axios.create({
  baseURL: "https://onewindow-v1-server.onrender.com/api/v1",
  // baseURL: "/api/v1",

});
export default api;