import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/todos";

const ACCOUNT_BASE_REST_API_URL = "http://localhost:8080/api/auth/register";

const LOGIN_BASE_REST_API_URL = "http://localhost:8080/api/auth/login";

export const login = (log) => axios.post(LOGIN_BASE_REST_API_URL, log);

export const register = (reg) => axios.post(ACCOUNT_BASE_REST_API_URL, reg);

export const createToDos = (todo) => axios.post(BASE_REST_API_URL, todo);

export const removeToDos = (id) => axios.delete(BASE_REST_API_URL + "/" + id);

export const getAllToDos = () => axios.get(BASE_REST_API_URL);
