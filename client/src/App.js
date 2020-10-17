import axios from "axios";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signUp";
import Researcher from "./pages/researcher";
import Editor from "./pages/editor";
import Educator from "./pages/educator";
import { LOADING, SET_USER, UNSET_USER } from "./store/actions";
import { useStoreContext } from "./store/store";

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get("/api/users").then((response) => {
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        history.push("/");
      } else {
        dispatch({ type: UNSET_USER });
        history.push("/login");
      }
    });
  }, [dispatch, history]);

  return (
    <div>
      <Navbar />

      {state.user ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/researcher" component={Researcher} />
          <Route exact path="/educator" component={Educator} />
          <Route exact path="/editor" component={Editor} />

        </Switch>
      ) : (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/researcher" component={Researcher} />
          <Route exact path="/editor" component={Editor} />
          <Route exact path="/educator" component={Educator} />
          <Route exact path="/lessons/:id" component={Educator}/>
          <Redirect to="/login" />
        </Switch>
      )}
    </div>
  );
};

export default App;
