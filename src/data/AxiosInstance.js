import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://52.79.73.94",
});
const excludeIncludeTokenURL = ["/login", "/register"];

AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken");

  if (!excludeIncludeTokenURL.includes(config.url) && token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default AxiosInstance;
