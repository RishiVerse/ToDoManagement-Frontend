import { useNavigate } from "react-router-dom";
import { login } from "../Service/ToDoService";
import { useState } from "react";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function usernameoremailhandle(e) {
    setUsernameOrEmail(e.target.value);
  }

  function passwordhandle(e) {
    setPassword(e.target.value);
  }

  function aubmitlogin(e) {
    e.preventDefault();

    const log = { usernameOrEmail, password };

    login(log).then((response) => {
      console.log(response.data);
      navigate("/api/todos");
    });
  }

  return (
    <div
      className="container col-lg-4 ml-auto mr-auto"
      style={{ padding: "60px" }}
    >
      <div className="card">
        <div className="card-body">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="text"
                  onChange={usernameoremailhandle}
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  onChange={passwordhandle}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="submit"
                onClick={aubmitlogin}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
