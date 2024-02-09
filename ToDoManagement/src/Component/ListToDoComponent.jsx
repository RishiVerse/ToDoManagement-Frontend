import React, { useEffect, useState } from "react";
import { getAllToDos } from "../Service/ToDoService";

const AddEmployee = () => {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    listTodos();
  }, []);

  function listTodos() {
    getAllToDos()
      .then((response) => setToDo(response.data))
      .catch((error) => console.error(error));
  }

  return (
    <div>
   
      <div className="container" style={{ padding: "30px" }}>
        <table className="table table-bordered table-stripped">
          <thead>
            <tr>
              <th scope="col">ToDo Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {toDo.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Completed" : "Incomplete"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddEmployee;
