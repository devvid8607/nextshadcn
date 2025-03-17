import axios, { InternalAxiosRequestConfig } from "axios";
import { getApiGatewayUrl } from "./getApiGatewayUrl";

const { url, key } = getApiGatewayUrl();

const apiServer = axios.create({
  baseURL: url,
  withCredentials: true,
});
// const apiServer = axios.create({
//   baseURL: "https://dev-gateway.seville.online",
//   withCredentials: true,
// });

apiServer.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Ocp-Apim-Subscription-Key"] = key;
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiServer;
