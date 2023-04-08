import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://port-0-back-end-3zspi2nlg852u5f.sel3.cloudtype.app",
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
