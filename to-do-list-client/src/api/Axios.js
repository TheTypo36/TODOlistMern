import axios from "axios";

const instance = axios.create({
  baseURL: "https://todolistbackend-dszg.onrender.com  ",
});

export default instance;
