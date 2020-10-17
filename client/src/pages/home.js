import React from "react";
import "./home.css";

const Home = () => (
  <div className="Home">
    <div className="jumbotron">
      <h1 className="display-4">Welcome to Educational Data Stream!</h1>
    </div>
    <div className="container-fluid">
      <p className="lead">
        Log in to access your account, or read on to learn more about
        Educational Data Stream.
      </p>
      <h2>What is EDS?</h2>
      <p>
        EDS connects research with implementation by connecting researchers with
        educational professionals who can turn their data into learning modules
        ready for the classroom.
      </p>
      <h2>Who is EDS for?</h2>
      <p>
        EDS is for educators who want to incorporate relevant & researched
        learning modules into their classrooms.
      </p>
    </div>
  </div>
);

export default Home;
