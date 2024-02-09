import React, { useEffect, useState } from "react";
import { getAllToDos } from "../Service/ToDoService";
import { useNavigate } from "react-router-dom";

const ListTodo = () => {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    listTodos();
  }, []);

  const navigation = useNavigate();
  //! Adding  todo
  function addToDo() {
    navigation("/add-todos");
  }

  // Get All Todo from Rest API

  function listTodos() {
    getAllToDos()
      .then((response) => setToDo(response.data))
      .catch((error) => console.error(error));
  }

  //! Cross the list if task is completed

  const CrossList = (index) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].completed = !updatedToDo[index].completed;
    setToDo(updatedToDo);
  };

  const [theme, setTheme] = useState(true);

  // Change Theme of the Table

  const changeTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <div>
      <div className="container" style={{ padding: "30px" }}>
        <button
          type="button"
          onClick={changeTheme}
          className="btn btn-secondary"
          style={{ marginRight: "5px" }}
        >
          Change Theme
        </button>
        <button
          type="button"
          onClick={addToDo}
          className="btn btn-secondary"
          style={{ marginRight: "5px" }}
        >
          Add Todo
        </button>
        <table
          className={`table table-bordered table-stripped ${
            theme ? "table-dark" : "table-light"
          }`}
        >
          <thead className="table-dark">
            <tr>
              <th scope="col">Check</th>
              <th scope="col">ToDo Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: theme ? "#333" : "#fff",
              color: theme ? "#fff" : "#000",
            }}
          >
            {toDo.map((todo, index) => (
              <tr key={todo.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => CrossList(index)}
                  />
                </td>
                <td
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </td>
                <td
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.description}
                </td>
                <td>
                  {todo.completed ? (
                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ marginRight: "5px" }}
                    >
                      Complete
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-warning"
                      style={{ marginRight: "5px" }}
                    >
                      Incomplete
                    </button>
                  )}

                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodo;
