import { useState } from "react";
import { createToDos } from "../Service/ToDoService";
import { useNavigate } from "react-router-dom";

const AddToDos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const todo = {
    title: title,
    description: description,
    completed: false, // Assuming this is the default value for the 'completed' property
  };

  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function saveTodo() {
    createToDos(todo).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="form-label">To Do Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      value={title}
                      onChange={handleTitle}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <input
                      type="textarea"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={description}
                      onChange={handleDescription}
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary "
                      onClick={saveTodo}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToDos;
