import { useNavigate } from "react-router-dom";
import { login, storeToken } from "../Service/AuthService";
import { useState } from "react";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function usernameoremailhandle(e) {
    setEmailOrUsername(e.target.value);
  }

  function passwordhandle(e) {
    setPassword(e.target.value);
  }

  function submitlogin(e) {
    e.preventDefault();

    const log = { emailOrUsername, password };

    // console.log(log);

    login(emailOrUsername, password).then((response) => {
      const token = "Basic" + window.btoa(emailOrUsername + ":" + password);
      storeToken(token);
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
                />
              </div>
              <button
                type="submit"
                onClick={(e) => submitlogin(e)}
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
