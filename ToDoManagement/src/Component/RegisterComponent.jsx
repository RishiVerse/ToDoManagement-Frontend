import { useState } from "react";
import { register } from "../Service/ToDoService";

const Register = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function namehandle(e) {
    setName(e.target.value);
  }
  function usernamehandle(e) {
    setUsername(e.target.value);
  }
  function emailhandle(e) {
    setEmail(e.target.value);
  }
  function passwordhandle(e) {
    setPassword(e.target.value);
  }

  function submitEmployee(e) {
    e.preventDefault();

    const registerUser = { name, username, email, password };
    register(registerUser);
  }

  return (
    <div
      className="container col-lg-6 ml-auto mr-auto"
      style={{ padding: "60px" }}
    >
      <div className="card">
        <h1 style={{ textAlign: "center", padding: "10px" }}>Register</h1>
        <div className="card-body">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  // name="name"
                  //value={name}
                  onChange={namehandle}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={usernamehandle}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={emailhandle}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={passwordhandle}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  onClick={submitEmployee}
                  className="btn btn-primary"
                  style={{ justifyContent: "center" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
