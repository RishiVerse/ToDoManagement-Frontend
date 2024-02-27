import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/todos";

export const createToDos = (todo) => axios.post(BASE_REST_API_URL, todo);

export const removeToDos = (id) => axios.delete(BASE_REST_API_URL + "/" + id);

export const getAllToDos = () => axios.get(BASE_REST_API_URL);

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");
