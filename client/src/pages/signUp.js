import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: "",
    password: "",
    userType: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!signUpCreds.username || !signUpCreds.password || !signUpCreds.userType)
      return;

    axios
      .post("/api/users", {
        username: signUpCreds.username,
        password: signUpCreds.password,
        userType: signUpCreds.userType,
      })
      .then((response) => {
        if (!response.data.errmsg) {
          history.replace("/login");
        } else {
          console.log("USERNAME TAKEN");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginPage">
      <div className="jumbotron">
        <h2 className="display-4">Create your EDS account</h2>
      </div>
      <div className="container-fluid">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">
                Username:
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={signUpCreds.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                placeholder="password"
                type="password"
                name="password"
                value={signUpCreds.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="userType">
                I am here as:
              </label>
            </div>

            <div className="col-3 col-mr-auto">
              <select
                onChange={handleChange}
                name="userType"
                value={signUpCreds.userType}
                className="form-control"
                id="userType"
              >
                <option value="">Select your role</option>
                <option value="Educator">an Educator</option>
                <option value="Researcher">a Researcher</option>
                <option value="Editor">an Editor</option>
              </select>
            </div>
          </div>
          <div className="form-group ">
            <div className="col-7"></div>
            <button
              className="btn btn-secondary col-1 col-mr-auto"
              onClick={handleSubmit}
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
