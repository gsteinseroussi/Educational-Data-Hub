import React from "react";
import "./home.css";

const Home = () => (
  <div className="Home">
    <div className="jumbotron">
      <h1 className="display-4">Educational Data Stream</h1>
      <h2 className="subhead">
        where up-to-date research becomes classroom-ready
      </h2>
    </div>
    <div className="container-fluid">
      <p className="lead">Sign up or log in to access your account.</p>
      <h2>What is EDS?</h2>
      <p>
        EDS combines content management with content creation. Using data-driven
        research, our editors deliver high-quality and up-to-date lesson plans
        ready to be put to use by educators at all levels.
      </p>
      <h2>Educator, Researcher or Editor?</h2>
      <p>Read more about these roles.</p>
      <div className="indent">
        <h4>Educators</h4>
        <p>
          Select this if your are an educator looking for lesson plans. When you
          get there, you'll be able to browse the lesson plans available for
          your selected level(s) and preview them in the window before you
          download. You'll also be able to read comments left on the lesson
          plans by other educators who have used the plans.
        </p>
        <h4>Researchers</h4>
        <p>
          Select this if you are coming here to contribute your research. Our
          team of expert editors will use your findings to put up-to-date lesson
          plans in the hands of educators.
        </p>
        <h4>Editors</h4>
        <p>
          We hire the best learning specialists out there to turn cutting-edge
          research into ready-to-use lesson plans.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
