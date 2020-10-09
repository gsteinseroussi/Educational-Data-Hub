import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/users', {
        username: signUpCreds.username,
        password: signUpCreds.password,
      })
      .then((response) => {
        if (!response.data.errmsg) {
          history.replace('/login');
        } else {
          console.log('USERNAME TAKEN');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="SignupForm">
      <h4>Sign up</h4>
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
        <div className="form-group ">
          <div className="col-7"></div>
          <button
            className="btn btn-primary col-1 col-mr-auto"
            onClick={handleSubmit}
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
