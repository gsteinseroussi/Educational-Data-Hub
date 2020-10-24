import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { LOADING, UNSET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import "./navbar.css";
import EDSimage from "../images/EDSimage.png";

const Navbar = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post("/api/users/logout")
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          history.replace("/login");
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  };

  return (
    <nav className="navbar navbar-expand-sm">
      <a className="navbar-brand" href="/">
        <img
          src={EDSimage}
          width="55"
          height="55"
          className="d-inline-block align-middle"
          alt="EDS logo"
        ></img>
      </a>
      <Link to="/" className="btn btn-link text-dark">
        <span className="text-dark">Home</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {state.user ? (
            <li className="nav-item active">
              <Link
                to="#"
                className="btn btn-link text-secondary"
                onClick={logout}
              >
                <span className="text-secondary">Log out</span>
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item active">
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">Log in</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">Sign up</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <Link to="/educator" className="btn btn-link text-dark">
        <span className="text-dark">Educators</span>
      </Link>
      <Link to="/researcher" className="btn btn-link text-dark">
        <span className="text-dark">Researchers</span>
      </Link>
      <Link to="/editor" className="btn btn-link text-dark">
        <span className="text-dark">Editors</span>
      </Link>
    </nav>
  );
};

export default Navbar;
