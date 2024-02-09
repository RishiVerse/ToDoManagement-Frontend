import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/todos";

export const getAllToDos = () => axios.get(BASE_REST_API_URL);

export const createToDos = (todo) => axios.post(BASE_REST_API_URL,todo);

export const removeToDos = (id) =>
  axios.delete(REST_API_BASE_URL + "/" + id);