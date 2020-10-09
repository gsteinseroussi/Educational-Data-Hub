import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';

const Login = () => {
  const [, /* state */ dispatch] = useStoreContext();
  const history = useHistory();

  const [loginCreds, setLoginCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post('/api/users/login', {
        username: loginCreds.username,
        password: loginCreds.password,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: SET_USER, user: response.data });
          history.replace('/');
        }
      })
      .catch((error) => {
        console.log('login error: ');
        console.log(error);
      });
  };

  return (
    <div>
      <h4>Login</h4>
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="username">
              Username
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={loginCreds.username}
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
              value={loginCreds.password}
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
