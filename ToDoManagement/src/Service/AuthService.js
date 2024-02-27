import axios from "axios";
import { getToken } from "../Service/ToDoService";

axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const ACCOUNT_BASE_REST_API_URL = "http://localhost:8080/api/auth/register";

const LOGIN_BASE_REST_API_URL = "http://localhost:8080/api/auth/login";

export const login = (emailOrUsername, password) =>
  axios.post(LOGIN_BASE_REST_API_URL, { emailOrUsername, password });

export const register = (reg) => axios.post(ACCOUNT_BASE_REST_API_URL, reg);
