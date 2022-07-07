import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://localhost/2345",
  timeout: 1000,
});
